const imageUri = require('./imageUri');
const steps = require('./steps');
const information = require('./information');
const blog = require('./blog');
const meta = require('./meta');
const fs = require('fs');
const path = require('path');

const estatutos_sociedad_limitada_profesional = {
    id: 'estatutos-sociedad-limitada-profesional',
    title: 'Estatutos Sociedad Limitada Profesional',
    topLabelTitle: 'Estatutos Sociedad Limitada Profesional',
    amount: 10,
    image: imageUri,
    uri: 'data:application/vnd.oasis.opendocument.text;base64,' + fs.readFileSync(path.resolve(__dirname, 'modelo_encriptado.odt'), { encoding: 'base64' }),
    paidUri: 'data:application/vnd.oasis.opendocument.text;base64,' + fs.readFileSync(path.resolve(__dirname, 'modelo.odt'), { encoding: 'base64' }),
    steps: steps,
    information: information,
    updated: '20 Febrero 2020',
    blog: blog,
    meta: meta
};

module.exports = estatutos_sociedad_limitada_profesional;