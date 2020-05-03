var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var auth = require('../auth');
const Aws = require('../../classes/Aws');
const aws = new Aws();

// Preload user profile on routes with ':username'
router.param('username', function (req, res, next, username) {
  User.findOne({
    username: username
  }).then(function (user) {
    if (!user) {
      return res.sendStatus(404);
    }

    req.profile = user;

    return next();
  }).catch(next);
});

router.get('/:username', auth.optional, function (req, res, next) {
  if (req.payload) {
    User.findById(req.payload.id).then(function (user) {
      if (!user) {
        return res.json({
          profile: req.profile.toProfileJSONFor(false)
        });
      }
      const profile = req.profile.toProfileJSONFor(user);
      aws.getUserImage(req.profile.id).then((image64) => {
        profile.image = image64 ? image64 : undefined
        return res.json({
          profile: profile
        });
      });
    });
  } else {
    const profile = req.profile.toProfileJSONFor(false);
    aws.getUserImage(profile.id.toString()).then((image64) => {
      profile.image = image64 ? image64 : undefined
      return res.json({
        profile: profile
      });
    });
  }
});


module.exports = router;