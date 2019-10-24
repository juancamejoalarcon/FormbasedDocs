const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Transaction = mongoose.model('Transaction');
const braintree = require('braintree');
const gateway = require('../../helpers/gateway');
const emailSender = require('../../helpers/mail');
const auth = require('../auth');
const certifiedForms = require('../../helpers/certified-forms').certifiedForms;

const TRANSACTION_SUCCESS_STATUSES = [
    braintree.Transaction.Status.Authorizing,
    braintree.Transaction.Status.Authorized,
    braintree.Transaction.Status.Settled,
    braintree.Transaction.Status.Settling,
    braintree.Transaction.Status.SettlementConfirmed,
    braintree.Transaction.Status.SettlementPending,
    braintree.Transaction.Status.SubmittedForSettlement
];

function formatErrors(errors) {
    let formattedErrors = '';
  
    for (let i in errors) { // eslint-disable-line no-inner-declarations, vars-on-top
      if (errors.hasOwnProperty(i)) {
        formattedErrors += 'Error: ' + errors[i].code + ': ' + errors[i].message + '\n';
      }
    }
  
    return formattedErrors;
}

function createResultObject(transaction) {
    let result;
    const status = transaction.status;
  
    if (TRANSACTION_SUCCESS_STATUSES.indexOf(status) !== -1) {
      result = {
        header: 'Sweet Success!',
        icon: 'success',
        message: 'Your test transaction has been successfully processed. See the Braintree API response and try again.'
      };
    } else {
      result = {
        header: 'Transaction Failed',
        icon: 'fail',
        message: 'Your test transaction has a status of ' + status + '. See the Braintree API response and try again.'
      };
    }
  
    return result;
}

router.get('/new', function(req, res) {
    let clientToken;
    gateway.clientToken.generate({}, function (err, response) {
        clientToken = {clientToken: response.clientToken};
        return res.json(clientToken);
    });
});

router.get('/:id', function(req, res) {
    let result;
    const transactionId = req.params.id;
    let transactionResult;
  
    gateway.transaction.find(transactionId, function (err, transaction) {
      result = createResultObject(transaction);
      transactionResult = {transaction: transaction, result: result};
      return res.json(transactionResult);
    });
});

router.post('/', auth.optional, function(req, res, next) {
    let transactionErrors;
    let amount; // In production you should not take amounts directly from clients
    const steps = req.body.steps;
    const email = req.body.email;
    const nonce = req.body.payment_method_nonce;
    const formType = req.body.formType;
    certifiedForms.forEach((form) => {
      if (form.id === formType) {
        amount = form.amount;
      }
    });


    gateway.transaction.sale({
      amount: amount,
      paymentMethodNonce: nonce,
      options: {
        submitForSettlement: true
      }
    }, function (err, result) {
      if (result.success || result.transaction) {
        if (req.payload) {
          User.findById(req.payload.id).then(function(user){
            if (!user) { return res.sendStatus(401); }
            const transaction = new Transaction();
            transaction.steps = steps;
            transaction.user = user;
            transaction.email = email;
            transaction.transactionId = result.transaction.id;
            transaction.formType = formType;
            // Send email
            emailSender.checkoutConfirm(email, result.transaction.id, formType);
            return transaction.save().then(function(){
              return res.json(
                {
                  transaction: transaction.toJSON(user)
                }
              )});
          }).catch(next);
        } else {
          const transaction = new Transaction();
          transaction.steps = steps;
          transaction.email = email;
          transaction.transactionId = result.transaction.id;
          transaction.formType = formType;
          // Send email
          emailSender.checkoutConfirm(email, result.transaction.id, formType);
          return transaction.save().then(function(){
            return res.json(
              {
                transaction: transaction.toJSON()
              }
          )});
        }
      } else {
        transactionErrors = result.errors.deepErrors();
        return res.json({errors: transactionErrors});
      }
    });
});

module.exports = router;