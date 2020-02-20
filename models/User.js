const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;

const UserSchema = new mongoose.Schema({
  username: {type: String, unique: true, required: [true, "can't be blank"], match: [/^[A-zÀ-ÿ0-9 ]+$/, 'is invalid'], index: true},
  email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  description: String,
  dateOfBirth: Date,
  companyName: String,
  image: String,
  contactInformation: String,
  notifications: Array,
  other: Object,
  likedForms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Form' }],
  likedComments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }],
  hash: String,
  salt: String
}, {
  timestamps: true,
  usePushEach: true
});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

UserSchema.methods.validPassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.generateJWT = function() {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

UserSchema.methods.toAuthJSON = function(){
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    description: this.description,
    image: this.image,
    contactInformation: this.contactInformation
  };
};

UserSchema.methods.toProfileJSONFor = function(user){
  return {
    id: this._id,
    username: this.username,
    description: this.description,
    email: this.email,
    companyName: this.companyName,
    contactInformation: this.contactInformation,
    image: this.image || null
  };
};

UserSchema.methods.like = function(id){
  if(this.likedForms.indexOf(id) === -1){
    this.likedForms.push(id);
  }

  return this.save();
};

UserSchema.methods.dislike = function(id){
  this.likedForms.remove(id);
  return this.save();
};

UserSchema.methods.isLike = function(id){
  return this.likedForms.some(function(likedFormId){
    return likedFormId.toString() === id.toString();
  });
};

UserSchema.methods.likeComment = function(id){
  if(this.likedComments.indexOf(id) === -1){
    this.likedComments.push(id);
  }

  return this.save();
};

UserSchema.methods.dislikeComment = function(id){
  this.likedComments.remove(id);
  return this.save();
};

UserSchema.methods.isLikedComment = function(id){
  return this.likedComments.some(function(likedCommentId){
    return likedCommentId.toString() === id.toString();
  });
};


mongoose.model('User', UserSchema);