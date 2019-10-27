const nodemailer = require('nodemailer');

const emailSender =  {
    checkoutConfirm: (email, transactionId, formType) => {
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

        const htmlMessage = `<h2>Hello ${email}</h2>` 
        + `<p>Su transacción es ${transactionId}</p>`
        + `<p>Su formulario es ${formType}</p>`;

        // send mail with defined transport object
        let info = transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: `${email}, baz@example.com`, // list of receivers
            subject: 'Hello OSTIA ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: htmlMessage
        });

        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
}

module.exports = emailSender;