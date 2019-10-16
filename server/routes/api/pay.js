const router = require('express').Router();

router.get('/', function(req, res, next){
    return res.json({prueba: 'payment'});
});

module.exports = router;