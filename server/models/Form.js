const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const slug = require('slug'); // package we'll use to auto create URL slugs
const User = mongoose.model('User');

const FormSchema = new mongoose.Schema({
  slug: {type: String, lowercase: true, unique: true},
  originalSlug: String,
  title: {type: String, required: [true, "can't be blank"]},
  description: {type: String, required: [true, "can't be blank"]},
  text: {type: String, required: [true, "can't be blank"]},
  fields: { type : Array , "default" : [] },
  likesCount: {type: Number, default: 0},
  viewsCount: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  tags: [{ type: String }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  filledBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  enabled: Boolean,
  public: Boolean,
  commentsEnabled: Boolean,
  type: String,
  textType: String, // Can be odt or plain text
  ofPayment: Boolean,
  filledForms: { type : Array , "default" : [] },
  indications: String,
  currentStep: Number,
  documentType: String
}, {
  timestamps: true,
  usePushEach: true
});

FormSchema.plugin(uniqueValidator, {message: 'is already taken'});

FormSchema.methods.slugify = function() {
  this.slug = slug(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};

FormSchema.pre('validate', function(next){
  if(!this.slug)  {
    this.slugify();
  }

  next();
});

FormSchema.methods.toJSONFor = function(user){
  return {
    slug: this.slug,
    title: this.title,
    description: this.description,
    text: this.text,
    fields: this.fields,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tags: this.tags,
    liked: user ? user.isLike(this._id) : false,
    likesCount: this.likesCount,
    viewsCount: this.viewsCount,
    author: this.author.toProfileJSONFor(user),
    filledBy: this.filledBy,
    enabled: this.enabled,
    public: this.public,
    commentsEnabled: this.commentsEnabled,
    type: this.type,
    textType: this.textType,
    ofPayment: this.ofPayment,
    indications: this.indications,
    currentStep: this.currentStep,
    documentType: this.documentType
  };
};

FormSchema.methods.toJSONForFill = function(user){
  return {
    slug: this.slug,
    originalSlug: this.originalSlug,
    title: this.title,
    description: this.description,
    text: this.text,
    fields: this.fields,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tags: this.tags,
    liked: user ? user.isLike(this._id) : false,
    likesCount: this.likesCount,
    viewsCount: this.viewsCount,
    author: this.author.toProfileJSONFor(this.author),
    filledBy: this.filledBy.toProfileJSONFor(user),
    enabled: this.enabled,
    public: this.public,
    commentsEnabled: this.commentsEnabled,
    type: this.type,
    textType: this.textType,
    ofPayment: this.ofPayment,
    indications: this.indications,
    currentStep: this.currentStep,
    documentType: this.documentType
  };
};

FormSchema.methods.toJSONForSearch = function(user){
  return {
    slug: this.slug,
    title: this.title,
    description: this.description,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tags: this.tags,
    liked: user ? user.isLike(this._id) : false,
    likesCount: this.likesCount,
    viewsCount: this.viewsCount,
    author: this.author.toProfileJSONFor(user),
    enabled: this.enabled,
    public: this.public,
    commentsEnabled: this.commentsEnabled,
    type: this.type,
    textType: this.textType,
    ofPayment: this.ofPayment,
    documentType: this.documentType
  };
};

FormSchema.methods.toJSONForSearchFill = function(user){
  return {
    slug: this.slug,
    originalSlug: this.originalSlug,
    title: this.title,
    description: this.description,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tags: this.tags,
    filledBy: this.filledBy,
    enabled: this.enabled,
    public: this.public,
    type: this.type,
    ofPayment: this.ofPayment,
  };
};

FormSchema.methods.updateLikeCount = function() {
  const form = this;

  return User.count({likedForms: {$in: [form._id]}}).then(function(count){
    form.likesCount = count;

    return form.save();
  });
};

FormSchema.methods.updateViewCount = function() {
  const form = this;
  form.viewsCount += 1;

  return form.save();

};

//Index to search
FormSchema.index({
  name: 'text',
  title: 'text',
  description: 'text',
  text: 'text',
  tags: 'text',
}, {
  weights: {
    name: 6,
    title: 5,
    description: 4,
    text: 3,
    autor: 2,
    tags: 1,
  },
});


mongoose.model('Form', FormSchema);