const mongoose = require('mongoose');
const router = require('express').Router();
const Form = mongoose.model('Form');
const Comment = mongoose.model('Comment');
const User = mongoose.model('User');
const auth = require('../auth');
const url = require('url');
const certifiedForms = require('../../helpers/certified-forms').certifiedForms;

// Preload form objects on routes with ':form'
router.param('form', function(req, res, next, slug) {
    Form.findOne({ slug: slug})
      .populate('author')
      .then(function (form) {
        if (!form) { return res.sendStatus(404); }
  
        req.form = form;
  
        return next();
      }).catch(next);
  });

  // return a form
router.get('/:form', auth.optional, function(req, res, next) {

    Promise.all([
      req.payload ? User.findById(req.payload.id) : null,
      req.form.populate('author').execPopulate(),
      req.form.populate('filledBy').execPopulate()
    ]).then(function(results){
      const user = results[0];
      // Increments the views if receives view: true
      if (req.query.view) { req.form.updateViewCount() };
      if (req.form.type === 'Filled') {
        return res.json({form: req.form.toJSONForFill(user)});
      } else {
        return res.json({form: req.form.toJSONFor(user)});
      }
    }).catch(next);
  });

router.post('/create', auth.required, function(req, res, next) {
    User.findById(req.payload.id).then(function(user){
      if (!user) { return res.sendStatus(401); }
  
      const form = new Form(req.body.form);
  
      form.author = user;
      form.type = 'Created';
  
      return form.save().then(function(){
        return res.json({form: form.toJSONFor(user)});
      });
    }).catch(next);
  });


router.post('/fill', auth.required, function(req, res, next) {
    User.findById(req.payload.id).then(function(user){
      if (!user) { return res.sendStatus(401); }
      var userFinal = user;
      const form = new Form(req.body.form);
      form.filledBy = user;
      form.type = 'Filled';
      User.findById(req.body.form.author.id).then((author) => {
        form.author = author;
        return form.save().then(function(){
          return res.json({form: form.toJSONForFill(userFinal)});
        });
      }).catch(next);
    }).catch(next);
  });

// update form
router.put('/:form', auth.required, function(req, res, next) {
    User.findById(req.payload.id).then(function(user){
      let forFillForm = false;
      if (req.form.filledBy !== undefined) {
        forFillForm = req.form.filledBy._id.toString() === req.payload.id.toString();
      }
      if(req.form.author._id.toString() === req.payload.id.toString() || forFillForm){

        if(typeof req.body.form.title !== 'undefined'){
          req.form.title = req.body.form.title;
        }
  
        if(typeof req.body.form.description !== 'undefined'){
          req.form.description = req.body.form.description;
        }
  
        if(typeof req.body.form.text !== 'undefined'){
          req.form.text = req.body.form.text;
        }
  
        if(typeof req.body.form.fields !== 'undefined'){
          req.form.fields = req.body.form.fields;
        }
  
        if(typeof req.body.form.tags !== 'undefined'){
          req.form.tags = req.body.form.tags
        }
        
        if(typeof req.body.form.enabled !== 'undefined'){
          req.form.enabled = req.body.form.enabled
        }

        if(typeof req.body.form.public !== 'undefined'){
          req.form.public = req.body.form.public
        }

        if(typeof req.body.form.commentsEnabled !== 'undefined'){
            req.form.commentsEnabled = req.body.form.commentsEnabled
        }

        if(typeof req.body.form.ofPayment !== 'undefined'){
            req.form.ofPayment = req.body.form.ofPayment
        }

        if(typeof req.body.form.indications !== 'undefined'){
            req.form.indications = req.body.form.indications
        }

        if(typeof req.body.form.indications !== 'undefined'){
            req.form.currentStep = req.body.form.currentStep
        }
  
        req.form.save().then(function(form){
          return res.json({form: form.toJSONFor(user)});
        }).catch(next);
      } else {
        return res.sendStatus(403);
      }
    });
  });

// delete form
router.delete('/:form', auth.required, function(req, res, next) {
    User.findById(req.payload.id).then(function(user){
      if (!user) { return res.sendStatus(401); }
      
      if (req.form.type === 'Created') {
        if(req.form.author._id.toString() === req.payload.id.toString()){
          return req.form.remove().then(function(){
            return res.sendStatus(204);
          });
        } else {
          return res.sendStatus(403);
        }
      } else if (req.form.type === 'Filled') {
        if(req.form.filledBy.toString() === req.payload.id.toString()){
          return req.form.remove().then(function(){
            return res.sendStatus(204);
          });
        } else {
          return res.sendStatus(403);
        }
      }
    }).catch(next);
  });

router.post('/:form/like', auth.required, function(req, res, next) {
    var formId = req.form._id;
  
    User.findById(req.payload.id).then(function(user){
      if (!user) { return res.sendStatus(401); }
  
      return user.like(formId).then(function(){
        return req.form.updateLikeCount().then(function(form){
          return res.json({form: form.toJSONFor(user)});
        });
      });
    }).catch(next);
  });

// Dislike a form
router.delete('/:form/like', auth.required, function(req, res, next) {
  var formId = req.form._id;

  User.findById(req.payload.id).then(function (user){
    if (!user) { return res.sendStatus(401); }

    return user.dislike(formId).then(function(){
      return req.form.updateLikeCount().then(function(form){
        return res.json({form: form.toJSONFor(user)});
      });
    });
  }).catch(next);
});
/********************/
/** CERTIFIED FORMS**/
/********************/
router.get('/certified-forms/:type', auth.optional, function(req, res, next) {
  let certifiedForm;
  certifiedForms.forEach((form) => {
    if (form.id === req.params.type) {
      certifiedForm = {
        id: form.id,
        title: form.title,
        amount: form.amount,
        image: form.image,
        uri: form.uri
      };
    }
  });
  return res.json({certifiedForm: certifiedForm});
});

router.get('/paid-certified-forms/:type', auth.optional, function(req, res, next) {
  let certifiedForm;
  certifiedForms.forEach((form) => {
    if (form.id === req.params.type) {
      certifiedForm = {
        id: form.id,
        title: form.title,
        amount: form.amount,
        image: form.image,
        uri: form.paidUri
      };
    }
  });
  return res.json({certifiedForm: certifiedForm});
});

router.post('/certified-forms/fill', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    const form = new Form(req.body.form);
    console.log(form);
    form.author = user;
    form.type = 'Certified';

    return form.save().then(function(){
      return res.json({form: form.toJSONFor(user)});
    });
  }).catch(next);
});

//// COMMENTS ////
router.param('comment', function(req, res, next, id) {
  Comment.findById(id).then(function(comment){
    if(!comment) { return res.sendStatus(404); }

    req.comment = comment;

    return next();
  }).catch(next);
});


// return a form's comments
router.get('/:form/comments', auth.optional, function(req, res, next){

  let orderBy = {createdAt: 'desc'};

  if( typeof req.query.orderBy !== 'undefined' ){
    if (req.query.orderBy === 'Date') {
      this.orderBy = {createdAt: 'desc'};
    } else if (req.query.orderBy === 'Likes') {
      this.orderBy = {likesCount: -1};
    }
  } else {
    this.orderBy = {createdAt: 'desc'};
  }

  Promise.resolve(req.payload ? User.findById(req.payload.id) : null).then(function(user){
    return req.form.populate({
      path: 'comments',
      populate: {
        path: 'author responses',
        // select: 
        populate: { path: 'author', select: 'username email image'}
      },
      options: {
        sort: this.orderBy
      }
    }
    ).execPopulate().then(function(form) {
      return res.json({comments: req.form.comments.map(function(comment){
        

        return comment.toJSONFor(user)
      })});
    });
  }).catch(next);
});

// create a new comment
router.post('/:form/comments', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    var comment = new Comment(req.body.comment);
    comment.form = req.form;
    comment.author = user;

    return comment.save().then(function(){
      req.form.comments.push(comment);

      return req.form.save().then(function(form) {
        res.json({comment: comment.toJSONFor(user)});
      });
    });
  }).catch(next);
});

// update comment
router.put('/:form/comments/:comment', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if(req.comment.author._id.toString() === req.payload.id.toString()){

      if(typeof req.body.comment.body !== 'undefined'){
        req.comment.body = req.body.comment.body;
      } 

      req.comment.save().then(function(comment){
        return res.json({comment: comment.toJSONForUpdate(user)});
      }).catch(next);
    } else {
      return res.sendStatus(403);
    }
  });
});


// delete a comment
router.delete('/:form/comments/:comment', auth.required, function(req, res, next) {
  if(req.comment.author.toString() === req.payload.id.toString()){
    req.form.comments.remove(req.comment._id);
    req.form.save()
      .then(Comment.find({_id: req.comment._id}).remove().exec())
      .then(function(){
        res.sendStatus(204);
      });
  } else {
    res.sendStatus(403);
  }
});

// Like a comment
router.post('/:form/comments/:comment/like', auth.required, function(req, res, next) {
  var commentId = req.comment._id;

  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    return user.likeComment(commentId).then(function(){
      return req.comment.updateLikesCount().then(function(comment){
        return res.json({comment: comment.toJSONForLike(user)});
      });
    });
  }).catch(next);
});

// Dislike a comment
router.delete('/:form/comments/:comment/like', auth.required, function(req, res, next) {
  var commentId = req.comment._id;

  User.findById(req.payload.id).then(function (user){
    if (!user) { return res.sendStatus(401); }

    return user.dislikeComment(commentId).then(function(){
      return req.comment.updateLikesCount().then(function(comment){
        return res.json({comment: comment.toJSONForLike(user)});
      });
    });
  }).catch(next);
});

// response to a comment
router.post('/:form/comments/:comment/response', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }


    var comment = new Comment(req.body.comment);
    comment.form = req.form;
    comment.author = user;
    comment.isAresponse = true;
    comment.respondTo = comment._id;

    return comment.save().then(function(){
      req.comment.responses.push(comment);
      res.json({comment: comment.toJSONFor(user)});
      return req.comment.save().then(function(comment) {
      });
    });
    return null
  }).catch(next);
});

module.exports = router;
