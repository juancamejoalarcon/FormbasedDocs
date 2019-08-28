import * as mongoose from 'mongoose';
import * as crypto from 'crypto';
import * as uniqueValidator from 'mongoose-unique-validator';

export const UserSchema = new mongoose.Schema({
  username: {type: String, unique: true, required: [true, "username can't be blank"], match: [/^[A-zÀ-ÿ0-9 ]+$/, 'is invalid'], index: true},
  email: {type: String, lowercase: true, unique: true, required: [true, "email can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  description: String,
  dateOfBirth: Date,
  companyName: String,
  image: String,
  contactInformation: String,
  notifications: Array,
  other: Object,
  // likedForms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Form' }],
  // likedComments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }],
  hash: String,
  salt: String,
}, {
  timestamps: true,
  usePushEach: true,
});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};
