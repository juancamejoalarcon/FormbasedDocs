const nodemailer = require('nodemailer');
const certifiedForms = require('../certified-forms').certifiedForms;
const convert = require('../convert').convert;
const mailStrings = require('./mailStrings');
const smtp = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'automatikdocs@automatikdocs.com', // generated ethereal user
        pass: 'mbwxktxyubekdnsx' // generated ethereal password
    }
};

const emailSender = {
    checkoutConfirm: (email, transactionId, formType, date, uri, hire_lawyer) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport(smtp);

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
        });

        convert.toWord(formType, uri).then((wordFile) => {
            convert.toPdf(formType, uri).then((file) => {
                console.log('------');
                console.log(file);

                // send mail with defined transport object
                let info = transporter.sendMail({
                    from: '<automatikdocs@automatikdocs.com>', // sender address
                    to: `${email}, automatikdocs@automatikdocs.com`, // list of receivers
                    subject: `Automatik Docs - ${formName}`, // Subject line
                    text: `Automatik Docs - ${formName}`, // plain text body
                    html: mailStrings.invoice(transactionId, today, formName, amount, hire_lawyer, process.env.LAWYER_PRICE),
                    attachments: [
                        {
                            filename: `${formType}.pdf`,
                            path: file,
                            contentType: 'application/pdf'
                        },
                        {
                            filename: `${formType}.doc`,
                            path: wordFile,
                            contentType: 'application/msword'
                        }
                    ],
                });

            });
        });
    },
    forgotPassword: (email, user, token) => {
        let transporter = nodemailer.createTransport(smtp);

        const isProduction = process.env.NODE_ENV === 'production',
            isDevelopment = process.env.NODE_ENV === 'development',
            isLocal = (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'local:windows') ? true : false;
        let host;
        if (isLocal) {
            host = 'http://localhost:4200';
        } else if (isDevelopment) {
            host = 'http://dev.formbaseddocs.com';
        } else if (isProduction) {
            host = 'http://automatikdocs.com';
        }

        // send mail with defined transport object
        let info = transporter.sendMail({
            from: '<automatikdocs@automatikdocs.com>', // sender address
            to: `${email}, automatikdocs@automatikdocs.com`, // list of receivers
            subject: `Automatik Docs - Forgot password`, // Subject line
            text: `Automatik Docs - Forgot password`, // plain text body
            html: mailStrings.resetPassword(token, host + '/auth/recover-password?token=' + token),
        });

        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    },
    contactForm: (form) => {
        const { nombre, email, mensaje } = form;
        return new Promise((resolve, reject) => {
            let transporter = nodemailer.createTransport(smtp);
            var mailOptions = {
                from: `<${email}>`, // sender address
                to: `automatikdocs@automatikdocs.com`, // list of receivers
                subject: `Automatik Docs - Contact Form`, // Subject line
                text: `Automatik Docs - Contact Form`, // plain text body
                html: mailStrings.contactForm(nombre, email, mensaje),
            };
            let resp = false;

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log("Mail send error" + error);
                    resolve(false); // or use rejcet(false) but then you will have to handle errors
                }
                else {
                    console.log('Email sent:' + info.response);
                    resolve(true);
                }
            });
        })

    },
}

module.exports = emailSender;