const mongoose = require('mongoose');
const router = require('express').Router();
const passport = require('passport');
const User = mongoose.model('User');
const auth = require('../auth');
const crypto = require('crypto');
const emailSender = require('../../helpers/mails/mail');

router.get('/', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    return res.json({user: user.toAuthJSON()});
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

router.put('/', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    let userImage;
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

    if(typeof req.body.user.image !== 'undefined'){
      userImage = req.body.user.image;
      let pathName = `./tmp/${user.id}.odt`;
    } else {
      return user.save().then(function(){
        return res.json({user: user.toAuthJSON()});
      });
    }
    console.log(user.id);
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

module.exports = router;
