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

router.post('/getToken', auth.optional, async (req, res, next) => {
    const formType = req.body.formType;
    let amount;
    certifiedForms.forEach((form) => {
        if (form.id === formType) {
            amount = form.amount;
        }
    });
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "eur"
    });
    res.send({
        clientSecret: paymentIntent.client_secret
    });
});

router.post('/paypal-order', auth.optional, async function (req, res) {
    const formType = req.body.formType;
    let amount;
    certifiedForms.forEach((form) => {
        if (form.id === formType) {
            amount = form.amount;
        }
    });
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
            description: formType,
            amount: {
                currency_code: 'USD',
                value: amount / 100
            }
        }]
    });

    let order;
    try {
        order = await payPalClient.client().execute(request);
    } catch (err) {

        // 4. Handle any errors from the call
        console.error(err);
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
        transactionId
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
        emailSender.checkoutConfirm(transaction.email, transaction.transactionId, transaction.formType, transaction.createdAt, req.body.uri);
        return res.json({
            emailSent: 'OK'
        });
    });
});

module.exports = router;