const router = require('express').Router();
const mongoose = require('mongoose');
const Form = mongoose.model('Form');
const User = mongoose.model('User');
const auth = require('../auth');

// return a query results
router.get('/', auth.optional, function(req, res, next) {

  let limit = 20;
  let offset = 0;
  let orderBy = {createdAt: 'desc'};
  let type = "Created";

  // Si no hay parámetros de búsqueda, se envían todos
  if(typeof req.query.query !== 'undefined'){
    var query = {
      "$text": {
        "$search": req.query.query
      },
      "type": "Created"
    };
  } else {
    var query = {
      "type": "Created"
    }
  }

  if(typeof req.query.type !== 'undefined'){
    query["type"] = req.query.type;
  }

  if(typeof req.query.author !== 'undefined'){
    query["author"] = req.query.author;
  }

  if(typeof req.query.filledBy !== 'undefined'){
    query["filledBy"] = req.query.filledBy
  }

  if(typeof req.query.limit !== 'undefined'){
    limit = req.query.limit;
  }

  if(typeof req.query.offset !== 'undefined'){
    offset = req.query.offset;
  }

  if( typeof req.query.orderBy !== 'undefined' ){
    if (req.query.orderBy === 'Date') {
      this.orderBy = {createdAt: 'desc'};
    } else if (req.query.orderBy === 'Likes') {
      this.orderBy = {likesCount: -1};
    } else if (req.query.orderBy === 'Views') {
      this.orderBy = {viewsCount: -1};
    }
  } else {
    this.orderBy = {createdAt: 'desc'};
  }
  console.log('AQUII');
  console.log(query);


  Promise.all([
    req.query.author ? User.findOne({username: req.query.author}) : null,
    req.query.liked ? User.findOne({username: req.query.liked}) : null,
    req.query.filledBy ? User.findOne({username: req.query.filledBy}) : null,
  ]).then(function(results){
    var author = results[0];
    var liker = results[1];
    var filledBy = results[2];
    if(author){
      query.author = author._id;
    }

    if(filledBy){
      query.filledBy = filledBy._id;
    }

    if(liker){
      query._id = {$in: liker.likedForms};
    } else if(req.query.liked){
      query._id = {$in: []};
    }

    return Promise.all([
      Form.find(query)
        .limit(Number(limit))
        .skip(Number(offset))
        .sort(this.orderBy)
        .populate('author')
        .exec(),
      Form.count(query).exec(),
      req.payload ? User.findById(req.payload.id) : null,
    ]).then(function(results){
      var forms = results[0];
      var formsCount = results[1];
      var user = results[2];

      return res.json({
        forms: forms.map(function(form){

          if (query.type === 'Filled') {
            return form.toJSONForSearchFill(user);
          } else {
            return form.toJSONFor(user);
          }
        }),
        formsCount: formsCount
      });
    });
  }).catch(next);
});

module.exports = router;
