const router = require('express').Router();
const auth = require('../auth');
const fs = require('fs');
const certifiedForms = require('../../helpers/certified-forms').certifiedForms;

router.get('/modelo/:id', auth.optional, function (req, res, next) {
    let certifiedForm;
    certifiedForms.forEach((form) => {
        if (form.id === req.params.id) {
            certifiedForm = {
                id: form.id,
                title: form.title,
                topLabelTitle: form.topLabelTitle,
                image: form.image,
                blog: form.blog,
                updated: form.updated,
                meta: form.meta
            };
        }
    });
    return res.json({
        certifiedForm: certifiedForm
    });
});

module.exports = router;