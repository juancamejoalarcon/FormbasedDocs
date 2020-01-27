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
// const upload = require('../../helpers/file-upload');
// const singleUpload = upload.single('image');
const AWS = require('aws-sdk')
AWS.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS,
    accessKeyId: process.env.AWS_KEY_ID,
    region: 'eu-west-3'
});
const s3 = new AWS.S3()

router.get('/', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }
    let image64;
    ['jpeg', 'png', 'jpg', 'gif'].forEach((type) => {
      // Delete current saved image
      const path = `./tmp/images/${user.id}.${type}`;
      if (fs.existsSync(path)) {
        const data = fs.readFileSync(path);
        image64 = `data:image/${type};base64,` + data.toString('base64');
      };
    });
    return res.json({user: user.toAuthJSON(image64)});
  }).catch(next);
});

router.post('/login', function(req, res, next){
  if(!req.body.user.email){
    return res.status(422).json({errors: {email: "can't be blank"}});
  }

  if(!req.body.user.password){
    return res.status(422).json({errors: {password: "can't be blank"}});
  }

  passport.authenticate('local', {session: false}, function(err, user, info){
    if(err){ return next(err); }

    if(user){
      user.token = user.generateJWT();
      return res.json({user: user.toAuthJSON()});
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
});

router.post('/signup', function(req, res, next){
  const user = new User();

  user.username = req.body.user.username;
  user.email = req.body.user.email;
  user.setPassword(req.body.user.password);

  user.save().then(function(){
    return res.json({user: user.toAuthJSON()});
  }).catch(next);
});

router.put('/change-password', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }
    let oldPass = req.body.oldPassword;
    let newPass = req.body.newPassword;
    if (oldPass === newPass) {
      return res.sendStatus(401);
    } else {
      if (!user.validPassword(oldPass)) {
        return res.json({invalidPassword: true});
      } else {
        user.password = newPass;
        return user.save().then(function(){
          return res.json({user: user.toAuthJSON()});
        }).catch(next);
      }
    }
  });
});

router.put('/', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    // only update fields that were actually passed...
    if(typeof req.body.user.username !== 'undefined'){
      user.username = req.body.user.username;
    }
    if(typeof req.body.user.email !== 'undefined'){
      user.email = req.body.user.email;
    }
    if(typeof req.body.user.description !== 'undefined'){
      user.description = req.body.user.description;
    }
    if(typeof req.body.user.nameAndSurname !== 'undefined'){
      user.nameAndSurname = req.body.user.nameAndSurname;
    }
    if(typeof req.body.user.dateOfBirth !== 'undefined'){
      user.dateOfBirth = req.body.user.dateOfBirth;
    }
    if(typeof req.body.user.companyName !== 'undefined'){
      user.companyName = req.body.user.companyName;
    }
    if(typeof req.body.user.other !== 'undefined'){
      user.other = req.body.user.other;
    }
    if(typeof req.body.user.contactInformation !== 'undefined'){
      user.contactInformation = req.body.user.contactInformation;
    }
    if(typeof req.body.user.password !== 'undefined'){
      // Check if password is valid
      user.setPassword(req.body.user.password);
    }
    /*******************************/
    /*********SAVE IMAGE ***********/
    /******************************/
    if(typeof req.body.user.image !== 'undefined'){
      
      let userImage = req.body.user.image;
    //   let imageType;
    //   ['jpeg', 'png', 'jpg', 'gif'].forEach((type) => {
    //     // Delete current saved image
    //     const path = `./tmp/images/${user.id}.${type}`;
    //     if (fs.existsSync(path)) {
    //       fs.unlink(path, (err) => {
    //         if (err) {
    //             return res.json(err);
    //         }

    //       });
    //     }
    //     if (userImage.substring(0, 40).includes(type)) {
    //       imageType = type;
    //     }
    //   });
    //   const regex = new RegExp(`data:image/${imageType};base64,`);
    //   const base64Data = userImage.replace(regex, "");
    //   let pathName = `./tmp/images/${user.id}.${imageType}`;
    //   fs.writeFile(pathName, base64Data, 'base64', function(err) {
    //     if(err) {
    //         console.log(err);
    //         return res.json(err);
    //     }
    //     return user.save().then(function(){
    //       return res.json({user: user.toAuthJSON()});
    //     }).catch(next);
    //   });
    s3.putObject({
      Bucket: process.env.AWS_BUCKET,
      Body: userImage,
      Key: 'mishuevos'
    })
      .promise()
      .then(response => {
        console.log(`done! - `, response)
        console.log(
          `The URL is ${s3.getSignedUrl('getObject', { Bucket: BUCKET, Key: imageRemoteName })}`
        )
      })
      .catch(err => {
        console.log('failed:', err)
      })
    return user.save().then(function(){
      return res.json({user: user.toAuthJSON()});
    }).catch(next);

    } else {
      return user.save().then(function(){
        return res.json({user: user.toAuthJSON()});
      }).catch(next);
    }
  }).catch(next);
});

router.post('/forgot-password', function(req, res, next){
  const email = req.body.email;
  User.findOne({ email: email }).then(function(user){
    if(!user){ return res.json({emailNotFound: true}) }
    crypto.randomBytes(20, (err, buffer) => {
      const token = buffer.toString('hex');
      User.findByIdAndUpdate(
        { _id: user._id }, 
        { resetPasswordToken: token, resetPasswordExpires: Date.now() + 86400000 },
        { upsert: true, new: true }
      ).exec((err, new_user) => {
        emailSender.forgotPassword(email, new_user, token);
        return res.json({emailSent: true});
      });
    });
  }).catch(next);
});

router.post('/reset-password', function(req, res, next){
  const token = req.body.token;
  const newPassword = req.body.newPassword;
  const verifyPassword = req.body.verifyPassword;
  User.findOne({ resetPasswordToken: token, resetPasswordExpires: {$gt: Date.now()} }).then(function(user){
    if(!user){ return res.json({noToken: true}) }
    if (newPassword === verifyPassword) {
      if (user.resetPasswordToken && user.resetPasswordToken === token) {
        user.setPassword(req.body.newPassword);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        return user.save().then(function(){
          return res.json({passwordRestored: true});
        });
      } else {
        return res.json({noToken: true});
      }
    } else {
      return res.json({passwordDoesNotMatch: true});
    }
  });
});

router.delete('/', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }
    let password = req.query.password;


    if (!user.validPassword(password)) {
      return res.json({invalidPassword: true});
    } else {

      Promise.all([
        Form.find({ author:  user._id})
          .exec(),
      ]).then(function(results){
        var forms = results[0];
        forms.forEach((form) => {
          form.comments.forEach((commentId) => {
            Comment.findById(commentId).then((comment) => {
              comment.remove().then( () => {
              });
            });
          });
          form.remove().then( () => {
            if (form.documentType === 'office') {
              fs.unlink(`./tmp/odts/${form.slug}.odt`, () => {
  
              });
            }
          });
        });
        user.remove().then(function(){
          console.log('-------------');
          console.log('USER DELETED');
          console.log('-------------');
          res.json({userRemoved: true});
        });
      });
    }
  }).catch(next);
});

module.exports = router;