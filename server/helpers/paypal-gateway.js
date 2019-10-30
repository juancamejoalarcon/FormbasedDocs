const braintree = require('braintree');

if (!process.env.BT_PAYPAL_PRIVATE_KEY) {
    throw new Error('Cannot find necessary environmental variables. See https://github.com/braintree/braintree_express_example#setup-instructions for instructions');
}

gateway = braintree.connect({
    accessToken: process.env.BT_PAYPAL_PRIVATE_KEY
});

module.exports = gateway;