const router = require('express').Router();
const braintree = require('braintree');
const gateway = require('../../helpers/gateway');

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
        clientToken = {clientToken: response.clientToken, messages: req.flash('error')};
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

router.post('/', function(req, res) {
    let transactionErrors;
    const amount = req.body.amount; // In production you should not take amounts directly from clients
    const nonce = req.body.payment_method_nonce;
  
    gateway.transaction.sale({
      amount: amount,
      paymentMethodNonce: nonce,
      options: {
        submitForSettlement: true
      }
    }, function (err, result) {
      if (result.success || result.transaction) {
        res.redirect('checkouts/' + result.transaction.id);
      } else {
        transactionErrors = result.errors.deepErrors();
        req.flash('error', {msg: formatErrors(transactionErrors)});
        res.redirect('checkouts/new');
      }
    });
});

module.exports = router;