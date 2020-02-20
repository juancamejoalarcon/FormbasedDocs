var mongoose = require('mongoose');
var User = mongoose.model('User');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  authorName: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  form: { type: mongoose.Schema.Types.ObjectId, ref: 'Form' },
  likesCount: {type: Number, default: 0},
  isAresponse: Boolean,
  respondTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
  responses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, {
  timestamps: true,
  usePushEach: true});

// Requires population of author
CommentSchema.methods.toJSONFor = function(user){
  return {
    id: this._id,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    liked: user ? user.isLikedComment(this._id) : false,
    likesCount: this.likesCount,
    author: this.author.toProfileJSONFor(user),
    isAresponse: this.isAresponse,
    responses: this.responses
  };
};

// CommentSchema.methods.toJSONForResponse = function(user){
//   return {
//     id: this._id,
//     body: this.body,
//     createdAt: this.createdAt,
//     updatedAt: this.updatedAt,
//     liked: user ? user.isLikedComment(this._id) : false,
//     likesCount: this.likesCount,
//     author: this.author.toProfileJSONFor(user),
//     isAresponse: this.isAresponse,
//     responses: this.responses
//   };
// };

// Requires population of author
CommentSchema.methods.toJSONForUpdate = function(user){
  return {
    id: this._id,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    liked: user ? user.isLikedComment(this._id) : false,
    likesCount: this.likesCount,
    isAresponse: this.isAresponse
  };
};


// Requires population of author
CommentSchema.methods.toJSONForLike = function(user){
  return {
    id: this._id,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    liked: user ? user.isLikedComment(this._id) : false,
    likesCount: this.likesCount,
    // author: this.author.toProfileJSONFor(user)
  };
};

CommentSchema.methods.updateLikesCount = function() {
  var comment = this;

  return User.count({likedComments: {$in: [comment._id]}}).then(function(count){
    comment.likesCount = count;
    return comment.save();
  });
};

mongoose.model('Comment', CommentSchema);
