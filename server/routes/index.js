const router = require('express').Router();
const path = require('path');

router.use('/api', require('./api'));

const isProduction = process.env.NODE_ENV === 'production',
      isDevelopment = process.env.NODE_ENV === 'development',
      isLocal = (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'local:windows') ? true : false;

if (isLocal || isProduction) {
    router.use('/robots.txt', function (req, res, next) {
        res.sendFile(path.join(__dirname + '/../robots.txt'));
    });
}

router.use('/sitemap.xml', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/../sitemap.xml'));
});

module.exports = router;
