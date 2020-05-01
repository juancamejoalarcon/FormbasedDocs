const mongoose = require('mongoose');
const router = require('express').Router();
const Form = mongoose.model('Form');
const Comment = mongoose.model('Comment');
const User = mongoose.model('User');
const Transaction = mongoose.model('Transaction');
const auth = require('../auth');
const url = require('url');
const certifiedForms = require('../../helpers/certified-forms').certifiedForms;
const fs = require('fs');
const s3 = require('../../helpers/aws-config');

// Preload form objects on routes with ':form'
router.param('form', function (req, res, next, slug) {
  Form.findOne({
      slug: slug
    })
    .populate('author')
    .then(function (form) {
      if (!form) {
        return res.sendStatus(404);
      }

      req.form = form;

      return next();
    }).catch(next);
});

// return a form
router.get('/:form', auth.optional, function (req, res, next) {

  Promise.all([
    req.payload ? User.findById(req.payload.id) : null,
    req.form.populate('author').execPopulate(),
    req.form.populate('filledBy').execPopulate()
  ]).then(function (results) {
    const user = results[0];
    // Increments the views if receives view: true
    if (req.query.view) {
      req.form.updateViewCount()
    };
    if (req.form.documentType === 'office') {

      s3.getObject({
        Bucket: process.env.AWS_BUCKET,
        Key: req.form.slug
      }, function (err, data) {
        // Handle any error and exit
        if (err) {
          console.log('ERROR', err);
          return res.status(422).json({
            errors: {
              err: err
            }
          });
        }
        const text = 'data:' + data.ContentType + ';' + data.ContentEncoding + ',' + data.Body.toString('base64');
        req.form.text = text;
        if (req.form.type === 'Filled') {
          return res.json({
            form: req.form.toJSONForFill(user)
          });
        } else {
          return res.json({
            form: req.form.toJSONFor(user)
          });
        }
      });
    } else {
      if (req.form.type === 'Filled') {
        return res.json({
          form: req.form.toJSONForFill(user)
        });
      } else {
        return res.json({
          form: req.form.toJSONFor(user)
        });
      }
    }
  }).catch(next);
});

router.post('/create', auth.required, function (req, res, next) {
  User.findById(req.payload.id).then(function (user) {
    if (!user) {
      return res.sendStatus(401);
    }

    const form = new Form(req.body.form);
    let officeText;
    form.author = user;
    form.type = 'Created';
    if (form.documentType === 'office') {
      officeText = form.text;
      form.text = 'Office Text';
    }

    return form.save().then(function () {
      if (form.documentType === 'office') {
        const name = form.slug;
        let odt = officeText;
        const buf = new Buffer((odt.replace('data:application/vnd.oasis.opendocument.text;base64,', '')), 'base64');
        s3.putObject({
          Bucket: process.env.AWS_BUCKET,
          Body: buf,
          Key: name,
          ContentEncoding: 'base64',
          ContentType: `application/vnd.oasis.opendocument.text`
        }).promise().then(response => {
          console.log(`AWS SAVED! - `, response);
          form.text = '';
          return res.json({
            form: form.toJSONFor(user)
          });
        }).catch(err => {
          console.log('failed:', err);
          return res.status(422).json({
            errors: {
              err: err
            }
          });
        })
      } else {
        return res.json({
          form: form.toJSONFor(user)
        });
      }
    });
  }).catch(next);
});


router.post('/fill', auth.required, function (req, res, next) {
  User.findById(req.payload.id).then(function (user) {
    if (!user) {
      return res.sendStatus(401);
    }
    var userFinal = user;
    const form = new Form(req.body.form);
    form.filledBy = user;
    form.type = 'Filled';
    User.findById(req.body.form.author.id).then((author) => {
      form.author = author;
      return form.save().then(function () {
        return res.json({
          form: form.toJSONForFill(userFinal)
        });
      });
    }).catch(next);
  }).catch(next);
});

// update form
router.put('/:form', auth.required, function (req, res, next) {
  User.findById(req.payload.id).then(function (user) {
    let forFillForm = false;
    if (req.form.filledBy !== undefined) {
      forFillForm = req.form.filledBy._id.toString() === req.payload.id.toString();
    }
    if (req.form.author._id.toString() === req.payload.id.toString() || forFillForm) {

      [
        'title',
        'description',
        'fields',
        'tags',
        'enabled',
        'public',
        'commentsEnabled',
        'ofPayment',
        'indications',
        'currentStep'
      ].forEach((field) => {
        if (req.body.form[field] !== undefined) {
          req.form[field] = req.body.form[field];
        }
      });

      if (typeof req.body.form.text !== 'undefined' && req.body.form.documentType !== 'office') {
        req.form.text = req.body.form.text;
      }

      req.form.save().then(function (form) {
        if (form.documentType === 'office') {
          const name = req.body.form.slug;
          let odt = req.body.form.text;
          const buf = new Buffer((odt.replace('data:application/vnd.oasis.opendocument.text;base64,', '')), 'base64');
          s3.putObject({
            Bucket: process.env.AWS_BUCKET,
            Body: buf,
            Key: name,
            ContentEncoding: 'base64',
            ContentType: `application/vnd.oasis.opendocument.text`
          }).promise().then(response => {
            console.log(`AWS SAVED! - `, response);
            form.text = '';
            return res.json({
              form: form.toJSONFor(user)
            });
          }).catch(err => {
            console.log('failed:', err);
            return res.status(422).json({
              errors: {
                err: err
              }
            });
          })

        } else {
          return res.json({
            form: form.toJSONFor(user)
          });
        }
      }).catch(next);
    } else {
      return res.sendStatus(403);
    }
  });
});

// delete form
router.delete('/:form', auth.required, function (req, res, next) {
  User.findById(req.payload.id).then(function (user) {
    if (!user) {
      return res.sendStatus(401);
    }

    if (req.form.type === 'Created') {
      if (req.form.author._id.toString() === req.payload.id.toString()) {
        return req.form.remove().then(function () {
          if (req.form.documentType === 'office') {
            s3.deleteObject({
              Bucket: process.env.AWS_BUCKET,
              Key: req.form.slug
            }, function (err, data) {
              if (err) {
                console.log(err, err.stack);
              } else {
                console.log(data);
              }
              return res.sendStatus(204);
            });
          } else {
            return res.sendStatus(204);
          }
        });
      } else {
        return res.sendStatus(403);
      }
    } else if (req.form.type === 'Filled') {
      if (req.form.filledBy.toString() === req.payload.id.toString()) {
        return req.form.remove().then(function () {
          return res.sendStatus(204);
        });
      } else {
        return res.sendStatus(403);
      }
    }
  }).catch(next);
});

router.post('/:form/like', auth.required, function (req, res, next) {
  var formId = req.form._id;

  User.findById(req.payload.id).then(function (user) {
    if (!user) {
      return res.sendStatus(401);
    }

    return user.like(formId).then(function () {
      return req.form.updateLikeCount().then(function (form) {
        return res.json({
          form: form.toJSONFor(user)
        });
      });
    });
  }).catch(next);
});

// Dislike a form
router.delete('/:form/like', auth.required, function (req, res, next) {
  var formId = req.form._id;

  User.findById(req.payload.id).then(function (user) {
    if (!user) {
      return res.sendStatus(401);
    }

    return user.dislike(formId).then(function () {
      return req.form.updateLikeCount().then(function (form) {
        return res.json({
          form: form.toJSONFor(user)
        });
      });
    });
  }).catch(next);
});

/********************/
/** CERTIFIED FORMS**/
/********************/
router.get('/certified-forms/:type', auth.optional, function (req, res, next) {
  let certifiedForm;
  certifiedForms.forEach((form) => {
    if (form.id === req.params.type) {
      certifiedForm = {
        id: form.id,
        title: form.title,
        topLabelTitle: form.topLabelTitle,
        amount: form.amount,
        image: form.image,
        uri: form.uri,
        steps: form.steps,
        information: form.information.replace(/\n/ig, ''),
        updated: form.updated
      };
    }
  });
  return res.json({
    certifiedForm: certifiedForm
  });
});

// Testing transaction hc95e01p
router.get('/paid-certified-forms/:transactionId', auth.optional, function (req, res, next) {
  let certifiedForm;
  Transaction.findOne({
    transactionId: req.params.transactionId
  }).then(function (transaction) {
    if (!transaction) {
      return res.json({
        transactionNotFound: true
      });
    }
    const dateOfTransaction = new Date(transaction.createdAt);
    const today = new Date();
    const differenceInTime = today.getTime() - dateOfTransaction.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    if (differenceInDays >= 30) {
      return res.json({
        formExpired: true
      });
    }

    certifiedForms.forEach((form) => {
      if (form.id === transaction.formType) {
        certifiedForm = {
          id: form.id,
          title: form.title,
          topLabelTitle: form.topLabelTitle,
          amount: form.amount,
          // image: form.image,
          uri: form.paidUri,
          fields: transaction.steps,
          information: form.information.replace(/\n/ig, ''),
          updated: form.updated
        };
      }
    });
    return res.json({
      certifiedForm: certifiedForm
    });
  });
});

router.post('/certified-forms/fill', auth.required, function (req, res, next) {
  User.findById(req.payload.id).then(function (user) {
    if (!user) {
      return res.sendStatus(401);
    }

    const form = new Form(req.body.form);
    console.log(form);
    form.author = user;
    form.type = 'Certified';

    return form.save().then(function () {
      return res.json({
        form: form.toJSONFor(user)
      });
    });
  }).catch(next);
});

//// COMMENTS ////
router.param('comment', function (req, res, next, id) {
  Comment.findById(id).then(function (comment) {
    if (!comment) {
      return res.sendStatus(404);
    }

    req.comment = comment;

    return next();
  }).catch(next);
});


// return a form's comments
router.get('/:form/comments', auth.optional, function (req, res, next) {

  let orderBy = {
    createdAt: 'desc'
  };

  if (typeof req.query.orderBy !== 'undefined') {
    if (req.query.orderBy === 'Date') {
      this.orderBy = {
        createdAt: 'desc'
      };
    } else if (req.query.orderBy === 'Likes') {
      this.orderBy = {
        likesCount: -1
      };
    }
  } else {
    this.orderBy = {
      createdAt: 'desc'
    };
  }

  Promise.resolve(req.payload ? User.findById(req.payload.id) : null).then(function (user) {
    return req.form.populate({
      path: 'comments',
      populate: {
        path: 'author responses',
        // select: 
        populate: {
          path: 'author',
          select: 'username email image'
        }
      },
      options: {
        sort: this.orderBy
      }
    }).execPopulate().then(function (form) {
      return res.json({
        comments: req.form.comments.map(function (comment) {


          return comment.toJSONFor(user)
        })
      });
    });
  }).catch(next);
});

// create a new comment
router.post('/:form/comments', auth.required, function (req, res, next) {
  User.findById(req.payload.id).then(function (user) {
    if (!user) {
      return res.sendStatus(401);
    }

    var comment = new Comment(req.body.comment);
    comment.form = req.form;
    comment.author = user;

    return comment.save().then(function () {
      req.form.comments.push(comment);

      return req.form.save().then(function (form) {
        res.json({
          comment: comment.toJSONFor(user)
        });
      });
    });
  }).catch(next);
});

// update comment
router.put('/:form/comments/:comment', auth.required, function (req, res, next) {
  User.findById(req.payload.id).then(function (user) {
    if (req.comment.author._id.toString() === req.payload.id.toString()) {

      if (typeof req.body.comment.body !== 'undefined') {
        req.comment.body = req.body.comment.body;
      }

      req.comment.save().then(function (comment) {
        return res.json({
          comment: comment.toJSONForUpdate(user)
        });
      }).catch(next);
    } else {
      return res.sendStatus(403);
    }
  });
});


// delete a comment
router.delete('/:form/comments/:comment', auth.required, function (req, res, next) {
  if (req.comment.author.toString() === req.payload.id.toString()) {
    req.form.comments.remove(req.comment._id);
    req.form.save()
      .then(Comment.find({
        _id: req.comment._id
      }).remove().exec())
      .then(function () {
        res.sendStatus(204);
      });
  } else {
    res.sendStatus(403);
  }
});

// Like a comment
router.post('/:form/comments/:comment/like', auth.required, function (req, res, next) {
  var commentId = req.comment._id;

  User.findById(req.payload.id).then(function (user) {
    if (!user) {
      return res.sendStatus(401);
    }

    return user.likeComment(commentId).then(function () {
      return req.comment.updateLikesCount().then(function (comment) {
        return res.json({
          comment: comment.toJSONForLike(user)
        });
      });
    });
  }).catch(next);
});

// Dislike a comment
router.delete('/:form/comments/:comment/like', auth.required, function (req, res, next) {
  var commentId = req.comment._id;

  User.findById(req.payload.id).then(function (user) {
    if (!user) {
      return res.sendStatus(401);
    }

    return user.dislikeComment(commentId).then(function () {
      return req.comment.updateLikesCount().then(function (comment) {
        return res.json({
          comment: comment.toJSONForLike(user)
        });
      });
    });
  }).catch(next);
});

// response to a comment
router.post('/:form/comments/:comment/response', auth.required, function (req, res, next) {
  User.findById(req.payload.id).then(function (user) {
    if (!user) {
      return res.sendStatus(401);
    }


    var comment = new Comment(req.body.comment);
    comment.form = req.form;
    comment.author = user;
    comment.isAresponse = true;
    comment.respondTo = comment._id;

    return comment.save().then(function () {
      req.comment.responses.push(comment);
      res.json({
        comment: comment.toJSONFor(user)
      });
      return req.comment.save().then(function (comment) {});
    });
    return null
  }).catch(next);
});

module.exports = router;