const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const convert = {
    toWord: (fileName, uri) => {
        const name = fileName;
        let odt = uri;
        odt = odt.replace('data:application/vnd.oasis.opendocument.text;base64,', '');

        return new Promise((resolve, reject) => {
            fs.writeFile(`./tmp/${name}.odt`, odt, 'base64', (err) => {
                if(err) {
                    console.log(err);
                    resolve(err);
                }
                const cmd = '/Applications/LibreOffice.app/Contents/MacOS/soffice --headless -env:UserInstallation=file:///tmp/LibreOffice_Conversion_${Juan} --convert-to doc --outdir'
                + ` ./tmp/words ./tmp/${name}.odt`;
                exec(cmd, function (err, stdout, stderr) {
                    if (err) {
                        console.log('exec error: ', err);
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
            fs.writeFile(`./tmp/${name}.odt`, odt, 'base64', function(err) {
                if(err) {
                    console.log(err);
                    resolve(err);
                }
                const cmd = '/Applications/LibreOffice.app/Contents/MacOS/soffice --headless -env:UserInstallation=file:///tmp/LibreOffice_Conversion_${Juan} --convert-to pdf:writer_pdf_Export --outdir'
                + ` ./tmp/pdfs ./tmp/${name}.odt`;
                exec(cmd, function (err, stdout, stderr) {
                    if (err) {
                        console.log('exec error: ', err);
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