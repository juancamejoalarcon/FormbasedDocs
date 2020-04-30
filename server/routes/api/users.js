const mongoose = require('mongoose');
const router = require('express').Router();
const passport = require('passport');
const User = mongoose.model('User');
const Form = mongoose.model('Form');
const Comment = mongoose.model('Comment');
const auth = require('../auth');
const crypto = require('crypto');
const emailSender = require('../../helpers/mails/mail');
const fs = require('fs');
const s3 = require('../../helpers/aws-config');
const Utils = require('../../classes/Utils');
const utils = new Utils();

router.get('/', auth.required, (req, res, next) => {
  User.findById(req.payload.id).then((user) => {
    if (!user) {
      return res.sendStatus(401);
    }

    s3.getObject({
      Bucket: process.env.AWS_BUCKET,
      Key: user.id
    }, function (err, data) {
      let image64;
      if (err) {
        utils.logError('Get image from aws', opt);
      } else {
        image64 = 'data:' + data.ContentType + ';' + data.ContentEncoding + ',' + data.Body.toString('base64');
      }
      return res.json({
        user: user.toAuthJSON(image64)
      });
    });
  }).catch(next);
});

router.post('/login', function (req, res, next) {
  ['email', 'password'].forEach((key) => {
    if (!req.body.user[key]) {
      return res.status(422).json({
        errors: {
          [key]: "no puede estar vacío"
        }
      });
    }
  });

  passport.authenticate('local', {
    session: false
  }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (user) {
      user.token = user.generateJWT();
      return res.json({
        user: user.toAuthJSON()
      });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
});

router.post('/signup', (req, res, next) => {
  const user = new User();
  ['username', 'email'].forEach((value) => {
    user[value] = req.body.user[value];
  });
  user.setPassword(req.body.user.password);

  user.save().then(function () {
    return res.json({
      user: user.toAuthJSON()
    });
  }).catch(next);
});

router.put('/change-password', auth.required, (req, res, next) => {
  User.findById(req.payload.id).then((user) => {
    if (!user) {
      return res.sendStatus(401);
    }
    let {
      oldPassword,
      newPassword
    } = req.body;

    if (oldPassword === newPassword) {
      return res.sendStatus(401);
    } else {
      if (!user.validPassword(oldPassword)) {
        return res.json({
          invalidPassword: true
        });
      } else {
        user.password = newPassword;
        return user.save().then(() => {
          return res.json({
            user: user.toAuthJSON()
          });
        }).catch(next);
      }
    }
  });
});

router.put('/', auth.required, function (req, res, next) {
  User.findById(req.payload.id).then(function (user) {
    if (!user) {
      return res.sendStatus(401);
    }

    [
      'username',
      'email',
      'description',
      'nameAndSurname',
      'dateOfBirth',
      'companyName',
      'other',
      'contactInformation'
    ].forEach((field) => {
      if (req.body.user[field] !== undefined) {
        user[field] = req.body.user[field]
      }
    });
    // Save image
    if (req.body.user.image !== undefined) {

      let userImage = req.body.user.image;
      let imageType;
      ['jpeg', 'png', 'jpg', 'gif'].forEach((type) => {
        if (userImage.substring(0, 40).includes(type)) {
          imageType = type;
        }
      });
      const buf = new Buffer(userImage.replace(/^data:image\/\w+;base64,/, ""), 'base64');
      s3.putObject({
        Bucket: process.env.AWS_BUCKET,
        Body: buf,
        Key: `${user.id}`,
        ContentEncoding: 'base64',
        ContentType: `image/${imageType}`
      }).promise().then(response => {
        utils.logSuccess('Image was saved in aws', response);
        return user.save().then(function () {
          return res.json({
            user: user.toAuthJSON()
          });
        }).catch(next);
      }).catch(err => {
        utils.logError('Image was NOT saved in aws', err);
        res.status(422).json({
          errors: {
            err: err
          }
        });
      })
    } else {
      return user.save().then(function () {
        return res.json({
          user: user.toAuthJSON()
        });
      }).catch(next);
    }
  }).catch(next);
});

router.post('/forgot-password', function (req, res, next) {
  const email = req.body.email;
  User.findOne({
    email: email
  }).then(function (user) {
    if (!user) {
      return res.json({
        emailNotFound: true
      })
    }
    crypto.randomBytes(20, (err, buffer) => {
      const token = buffer.toString('hex');
      User.findByIdAndUpdate({
        _id: user._id
      }, {
        resetPasswordToken: token,
        resetPasswordExpires: Date.now() + 86400000
      }, {
        upsert: true,
        new: true
      }).exec((err, new_user) => {
        emailSender.forgotPassword(email, new_user, token);
        return res.json({
          emailSent: true
        });
      });
    });
  }).catch(next);
});

router.post('/reset-password', function (req, res, next) {
  const {
    token,
    newPassword,
    verifyPassword
  } = req.body;
  User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: {
      $gt: Date.now()
    }
  }).then(function (user) {
    if (!user) {
      return res.json({
        noToken: true
      })
    }
    if (newPassword === verifyPassword) {
      if (user.resetPasswordToken && user.resetPasswordToken === token) {
        user.setPassword(req.body.newPassword);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        return user.save().then(function () {
          return res.json({
            passwordRestored: true
          });
        });
      } else {
        return res.json({
          noToken: true
        });
      }
    } else {
      return res.json({
        passwordDoesNotMatch: true
      });
    }
  });
});

router.delete('/', auth.required, function (req, res, next) {
  User.findById(req.payload.id).then(function (user) {
    if (!user) {
      return res.sendStatus(401);
    }
    let password = req.query.password;


    if (!user.validPassword(password)) {
      return res.json({
        invalidPassword: true
      });
    } else {

      Promise.all([
        Form.find({
          author: user._id
        })
        .exec(),
      ]).then(function (results) {
        var forms = results[0];
        forms.forEach((form) => {
          form.comments.forEach((commentId) => {
            Comment.findById(commentId).then((comment) => {
              comment.remove().then(() => {});
            });
          });
          form.remove().then(() => {
            if (form.documentType === 'office') {
              fs.unlink(`./tmp/odts/${form.slug}.odt`, () => {

              });
            }
          });
        });
        user.remove().then(function () {
          utils.logSuccess('User has been deleted');
          res.json({
            userRemoved: true
          });
        });
      });
    }
  }).catch(next);
});

module.exports = router;