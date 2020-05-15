const router = require('express').Router();
const auth = require('../auth');
const emailSender = require('../../helpers/mails/mail');

router.post('/', auth.optional, function (req, res, next) {

    emailSender.contactForm(req.body).then((emailSent) => {
        const response = emailSent ? true : false;
        return res.json({
            emailSent: response
        });
    });

});

module.exports = router;