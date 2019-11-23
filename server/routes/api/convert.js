const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

router.post('/toPdf', function(req, res) {
    const name = req.body.fileName;
    let odt = req.body.doc;
    odt = odt.replace('data:application/vnd.oasis.opendocument.text;base64,', '');
    let pdfPathName = `./tmp/pdfs/${name}.pdf`;
    let odtPathName = `./tmp/${name}.odt`;

    const createPdf = () => {

        fs.writeFile(odtPathName, odt, 'base64', function(err) {
            if(err) {
                console.log(err);
                return res.json(err);
            }
            const cmd = `${process.env.SOFFICE_PATH} ` + '--headless -env:UserInstallation=file:///tmp/LibreOffice_Conversion_${Juan} --convert-to pdf:writer_pdf_Export --outdir'
            + ` ./tmp/pdfs ${odtPathName}`;
            exec(cmd, function (err, stdout, stderr) {
                if (err) {
                    console.log('exec error: ', err);
                    return res.json(err);
                }
                const data = fs.readFileSync(pdfPathName);
                return res.json({
                    pdf: 'data:application/pdf;base64,'+ data.toString('base64')
                });
            });
        }); 
    };
    
    if (fs.existsSync(odtPathName)) {

        fs.unlink(odtPathName, (err) => {
            if (err) {
                return res.json(err);
            }
            if (fs.existsSync(pdfPathName)) {
                // Do something
                fs.unlink(pdfPathName, (err) => {
                    if (err) {
                        return res.json(err);
                    }
                    createPdf();
                    //file removed
                  })
            } else {
                createPdf();
            }
          })
    } else {
        if (fs.existsSync(pdfPathName)) {
            // Do something
            fs.unlink(pdfPathName, (err) => {
                if (err) {
                    return res.json(err);
                }
                createPdf();
                //file removed
              })
        } else {
            createPdf();
        }
    }
});

router.post('/toWord', function(req, res) {
        const name = req.body.fileName;
        let odt = req.body.doc;
        odt = odt.replace('data:application/vnd.oasis.opendocument.text;base64,', '');
        let docPathName = `./tmp/words/${name}.doc`;
        let odtPathName = `./tmp/${name}.odt`;
    
        const createWord = () => {
    
            fs.writeFile(odtPathName, odt, 'base64', function(err) {
                if(err) {
                    console.log(err);
                    return res.json(err);
                }
                const cmd = `${process.env.SOFFICE_PATH} ` + '--headless -env:UserInstallation=file:///tmp/LibreOffice_Conversion_${Juan} --convert-to doc --outdir'
                + ` ./tmp/words ${odtPathName}`;

                exec(cmd, function (err, stdout, stderr) {
                    if (err) {
                        console.log('exec error: ', err);
                        return res.json(err);
                    }
                    const data = fs.readFileSync(docPathName);
                    return res.json({
                        word: 'data:application/msword;base64,'+ data.toString('base64')
                    });
                });
            }); 
        };
        
        if (fs.existsSync(odtPathName)) {
    
            fs.unlink(odtPathName, (err) => {
                if (err) {
                    return res.json(err);
                }
                if (fs.existsSync(docPathName)) {
                    // Do something
                    fs.unlink(docPathName, (err) => {
                        if (err) {
                            return res.json(err);
                        }
                        createWord();
                        //file removed
                      })
                } else {
                    createWord();
                }
              })
        } else {
            if (fs.existsSync(docPathName)) {
                // Do something
                fs.unlink(docPathName, (err) => {
                    if (err) {
                        return res.json(err);
                    }
                    createWord();
                    //file removed
                  })
            } else {
                createWord();
            }
        }
});


module.exports = router;