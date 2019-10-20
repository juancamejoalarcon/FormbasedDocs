const router = require('express').Router();
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

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

router.get('/', function(req, res) {
    const cmd = '/Applications/LibreOffice.app/Contents/MacOS/soffice --headless -env:UserInstallation=file:///tmp/LibreOffice_Conversion_${Juan} --convert-to pdf:writer_pdf_Export --outdir ${HOME}/lo_pdfs /Users/Juan/Downloads/cosa.odt';
    console.info(cmd);
    exec(cmd, function (err, stdout, stderr) {
        if (err) {
            console.log('exec error: ', err);
            return;
        }
        // if (fs.existsSync(pdf)) {
        //     cb(null, pdf);
        // } else {
        //     cb("not exist");
        // }
        return res.json({});
    });
});

module.exports = router;