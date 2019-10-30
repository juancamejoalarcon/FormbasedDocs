const nodemailer = require('nodemailer');
const certifiedForms = require('../certified-forms').certifiedForms;
const convert = require('../convert').convert;
const mailStrings = require('./mailStrings');

const emailSender =  {
    checkoutConfirm: (email, transactionId, formType, date, uri) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'horacio.denesik@ethereal.email', // generated ethereal user
                pass: 'WQ9dzYD9eWbR23FGeC' // generated ethereal password
            }
        });

        let today = new Date(date);
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        let formName;
        let amount;
        certifiedForms.forEach((form) => {
            if (form.id == formType) {
                formName = form.title;
                amount = form.amount;
            }
        })

        convert.toPdf(formType, uri).then((file) => {
            console.log('------');
            console.log(file);

            // send mail with defined transport object
            let info = transporter.sendMail({
                from: '<formbaseddocs@formbaseddocs.com>', // sender address
                to: `${email}, formbaseddocs@formbaseddocs.com`, // list of receivers
                subject: `Formbaseddocs - ${formName}`, // Subject line
                text: `Formbaseddocs - ${formName}`, // plain text body
                html: mailStrings.invoice(transactionId, today, formName, amount),
                attachments: [{
                    filename: `${formType}.pdf`,
                    path: file,
                    contentType: 'application/pdf'
                }],
            });

            console.log('Message sent: %s', info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        })
    },
    forgotPassword: (email, user, token) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'horacio.denesik@ethereal.email', // generated ethereal user
                pass: 'WQ9dzYD9eWbR23FGeC' // generated ethereal password
            }
        });

        // send mail with defined transport object
        let info = transporter.sendMail({
            from: '<formbaseddocs@formbaseddocs.com>', // sender address
            to: `${email}, formbaseddocs@formbaseddocs.com`, // list of receivers
            subject: `Formbaseddocs - Forgot password`, // Subject line
            text: `Formbaseddocs - Forgot password`, // plain text body
            html: mailStrings.resetPassword(token, 'http://localhost:4200/auth/recover-password?token=' + token),
        });

        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    },
}

module.exports = emailSender;