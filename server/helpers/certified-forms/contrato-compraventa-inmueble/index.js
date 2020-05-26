const uri = require('./uri');
const paidUri = require('./paidUri');
const imageUri = require('./imageUri');
const steps = require('./steps');
const information = require('./information');
const blog = require('./blog');
const meta = require('./meta');

const contrato_compraventa_inmueble = {
    id: 'contrato-compraventa-inmueble',
    title: 'Contrato de compraventa de bien inmueble',
    topLabelTitle: 'Compraventa de bien inmueble',
    amount: 10,
    image: imageUri,
    uri: uri,
    paidUri: paidUri,
    steps: steps,
    information: information,
    updated: '28 Marzo 2020',
    blog: blog,
    meta: meta
};

module.exports = contrato_compraventa_inmueble;