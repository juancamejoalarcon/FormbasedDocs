const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;
const senSlackMessageError = require('./slack')

const conversionError = (error, type) => {
    senSlackMessageError({
        'username': 'Error: CONVERSION ERROR ' + type, // This will appear as user name who posts the message
        'text': JSON.stringify(error), // text
        'icon_emoji': ':bug:', // User icon, you can also use custom icons here
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
}

const convert = {
    toWord: (fileName, uri) => {
        const name = fileName;
        let odt = uri;
        odt = odt.replace('data:application/vnd.oasis.opendocument.text;base64,', '');

        return new Promise((resolve, reject) => {
            fs.writeFile(`./tmp/${name}.odt`, odt, 'base64', (err) => {
                if (err) {
                    console.log(err);
                    conversionError(err, 'write-file-word')
                    resolve(err);
                }
                const cmd = `${process.env.SOFFICE_PATH} ` + '--headless -env:UserInstallation=file:///tmp/LibreOffice_Conversion_${Juan} --convert-to doc --outdir'
                    + ` ./tmp/words ./tmp/${name}.odt`;
                exec(cmd, function (err, stdout, stderr) {
                    if (err) {
                        console.log('exec error: ', err);
                        conversionError(err, 'ejecutar conversion word')
                    }
                    if (stdout) {
                        console.log(stdout)
                    }
                    if (stderr) {
                        console.log('exec stderr: ', stderr)
                        conversionError(stderr, 'ejecutar conversion word')
                    }
                    // var file = path.basename(`./tmp/words/${name}.doc`);
                    // const data = fs.readFileSync(`./tmp/words/${name}.doc`);
                    resolve(`./tmp/words/${name}.doc`);
                });
            });

        });
    },

    toPdf: (fileName, uri) => {
        const name = fileName;
        let odt = uri;
        odt = odt.replace('data:application/vnd.oasis.opendocument.text;base64,', '');

        return new Promise((resolve, reject) => {
            fs.writeFile(`./tmp/${name}.odt`, odt, 'base64', function (err) {
                if (err) {
                    console.log(err);
                    conversionError(err, 'write-file-pdf')
                    resolve(err);
                }
                const cmd = `${process.env.SOFFICE_PATH} ` + '--headless -env:UserInstallation=file:///tmp/LibreOffice_Conversion_${Juan} --convert-to pdf:writer_pdf_Export --outdir'
                    + ` ./tmp/pdfs ./tmp/${name}.odt`;
                exec(cmd, function (err, stdout, stderr) {
                    if (err) {
                        console.log('exec error: ', err);
                        conversionError(err, 'ejecutar conversion pdf')
                    }
                    if (stdout) {
                        console.log(stdout)
                    }
                    if (stderr) {
                        console.log('exec stderr: ', stderr)
                        conversionError(stderr, 'ejecutar conversion pdf')
                    }
                    resolve(`./tmp/pdfs/${name}.pdf`);
                });
            });
        });
    }
}

module.exports = {
    convert: convert
};