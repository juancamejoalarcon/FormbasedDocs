const router = require('express').Router();
const auth = require('../auth');
const fs = require('fs');

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

router.get('/images/:id', auth.optional, function (req, res, next) {
    const image = base64_encode(`assets/images/${req.params.id}.png`)
    return res.json({
        image: image
    });
});

module.exports = router;