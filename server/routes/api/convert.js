const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

// var convert = function (file, cb) {
//     try {
//         var p = path.parse(file);
//         var pdf = path.join(p.dir, p.name) + '.pdf';
//         var cmd = 'soffice --headless --convert-to pdf --outdir "' + p.dir + '" "' + file + '"';
//         console.info(cmd);
//         exec(cmd, function (err, stdout, stderr) {
//             if (err) {
//                 cb(err);
//                 return;
//             }
//             if (fs.existsSync(pdf)) {
//                 cb(null, pdf);
//             } else {
//                 cb("not exist");
//             }
//         });
//     } catch (err) {
//         cb(err);
//     }
// };

router.post('/', function(req, res) {
    // const cmd = '/Applications/LibreOffice.app/Contents/MacOS/soffice --headless -env:UserInstallation=file:///tmp/LibreOffice_Conversion_${Juan} --convert-to pdf:writer_pdf_Export --outdir ./tmp/pdfs /Users/Juan/Downloads/cosa.odt';
    const name = req.body.fileName;
    let odt = req.body.doc;
    odt = odt.replace('data:application/vnd.oasis.opendocument.text;base64,', '');

    fs.writeFile(`./tmp/${name}.odt`, odt, 'base64', function(err) {
        if(err) {
            return console.log(err);
        }
        const cmd = '/Applications/LibreOffice.app/Contents/MacOS/soffice --headless -env:UserInstallation=file:///tmp/LibreOffice_Conversion_${Juan} --convert-to pdf:writer_pdf_Export --outdir' 
        + ` ./tmp/pdfs ./tmp/${name}.odt`;
        exec(cmd, function (err, stdout, stderr) {
            if (err) {
                console.log('exec error: ', err);
                return;
            }
            var file = path.basename(`./tmp/pdfs/${name}.pdf`);
            const data = fs.readFileSync(`./tmp/pdfs/${name}.pdf`);
            return res.json({
                pdf: 'data:application/pdf;base64,'+ data.toString('base64')
            });
        });
    }); 
});

module.exports = router;