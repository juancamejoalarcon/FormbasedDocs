const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Transaction = mongoose.model('Transaction');
const emailSender = require('../../helpers/mails/mail');
const auth = require('../auth');
const certifiedForms = require('../../helpers/certified-forms').certifiedForms;
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const paypal = require('@paypal/checkout-server-sdk');
const payPalClient = require('../../helpers/paypal-for-stripe-gateway');
const s3 = require('../../helpers/aws-config');
const senSlackMessageError = require('../../helpers/slack')

router.post('/getToken', auth.optional, async (req, res, next) => {
    const formType = req.body.formType;
    const hire_lawyer = req.body.hire_lawyer
    let amount;
    certifiedForms.forEach((form) => {
        if (form.id === formType) {
            amount = form.amount + (hire_lawyer ? 29 : 0);
        }
    });
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: "eur"
    });
    res.send({
        clientSecret: paymentIntent.client_secret
    });
});

router.post('/paypal-order', auth.optional, async function (req, res) {
    const formType = req.body.formType;
    const hire_lawyer = req.body.hire_lawyer
    let amount;
    certifiedForms.forEach((form) => {
        if (form.id === formType) {
            amount = form.amount + (hire_lawyer ? 29 : 0);
        }
    });
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
            description: formType,
            amount: {
                currency_code: 'EUR',
                value: amount
            }
        }]
    });

    let order;
    try {
        order = await payPalClient.client().execute(request);
    } catch (err) {

        // 4. Handle any errors from the call
        console.error(err);
        senSlackMessageError({
            'username': 'Error: PAYPAL', // This will appear as user name who posts the message
            'text': JSON.stringify(err), // text
            'icon_emoji': ':bangbang:', // User icon, you can also use custom icons here
            'attachments': [{ // this defines the attachment block, allows for better layout usage
                'color': '#eed140', // color of the attachments sidebar.
                'fields': [ // actual fields
                    {
                        'title': 'Environment', // Custom field
                        'value': process.env.NODE_ENV, // Custom value
                        'short': true // long fields will be full width
                    },
                ]
            }]
        })
        return res.send(500);
    }
    // 5. Return a successful response to the client with the order ID
    res.status(200).json({
        orderID: order.result.id
    });
});

router.post('/', auth.optional, function (req, res, next) {
    const {
        steps,
        email,
        formType,
        transactionId,
        hire_lawyer
    } = req.body;

    if (req.payload) {
        User.findById(req.payload.id).then(function (user) {
            if (!user) {
                return res.sendStatus(401);
            }
            const transaction = new Transaction();
            const createdAt = new Date().toISOString();
            transaction.steps = steps;
            transaction.user = user;
            transaction.email = email;
            transaction.transactionId = transactionId;
            transaction.formType = formType;
            transaction.createdAt = createdAt;
            transaction.hire_lawyer = hire_lawyer;
            // Send email
            // emailSender.checkoutConfirm(email, result.transaction.id, formType, createdAt);
            return transaction.save().then(function () {
                return res.json({
                    transaction: transaction.toJSON(user)
                })
            });
        }).catch(next);
    } else {
        const transaction = new Transaction();
        const createdAt = new Date().toISOString();
        transaction.steps = steps;
        transaction.email = email;
        transaction.transactionId = transactionId;
        transaction.formType = formType;
        transaction.createdAt = createdAt;
        transaction.hire_lawyer = hire_lawyer;
        // Send email
        // emailSender.checkoutConfirm(email, result.transaction.id, formType, createdAt);
        return transaction.save().then(function () {
            return res.json({
                transaction: transaction.toJSON()
            })
        });
    }
});

router.post('/sendMail', auth.optional, function (req, res, next) {
    let certifiedForm;
    Transaction.findOne({
        transactionId: req.body.transactionId
    }).then(function (transaction) {
        emailSender.checkoutConfirm(
            transaction.email,
            transaction.transactionId,
            transaction.formType,
            transaction.createdAt,
            req.body.uri,
            transaction.hire_lawyer,
            process.env.LAWYER_PRICE);
        return res.json({
            emailSent: 'OK'
        });
    });
});

router.post('/checkout-inited', auth.optional, function (req, res, next) {
    const buf = Buffer.from(JSON.stringify(req.body.steps));
    s3.putObject({
        Bucket: 'automatik-json-checkouts',
        Body: buf,
        Key: `${req.body.name}.json`,
        ContentEncoding: 'base64',
        ContentType: 'application/json',
    }).promise().then(response => {
        return res.sendStatus(200);
    }).catch(err => {
        console.log('failed:', err);
        return res.status(422).json({
            errors: {
                err: err
            }
        });
    })
});

module.exports = router;