const router = require('express').Router();
const braintree = require('braintree');
const gateway = require('../../helpers/gateway');

router.get('/', function(req, res, next){
    return res.json({prueba: 'payment'});
});

module.exports = router;