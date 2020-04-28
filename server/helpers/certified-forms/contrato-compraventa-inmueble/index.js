const uri = require('./uri');
const paidUri = require('./paidUri');
const imageUri = require('./imageUri');
const steps = require('./steps');
const information = require('./information');

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
    updated: '28 Marzo 2020'
};

module.exports = contrato_compraventa_inmueble;