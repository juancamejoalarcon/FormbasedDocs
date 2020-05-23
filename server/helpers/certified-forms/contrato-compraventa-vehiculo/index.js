const uri = require('./uri');
const paidUri = require('./paidUri');
const imageUri = require('./imageUri');
const steps = require('./steps');
const information = require('./information');
const blog = require('./blog');
const meta = require('./meta');

const contrato_compraventa_vehiculo = {
    id: 'contrato-compraventa-vehiculo',
    title: 'Contrato de compraventa de vehículo usado entre particulares',
    topLabelTitle: 'Compraventa de vehículo usado entre particulares',
    amount: 10,
    image: imageUri,
    uri: uri,
    paidUri: paidUri,
    steps: steps,
    information: information,
    updated: '10 Febrero 2020',
    blog: blog,
    meta: meta
};

module.exports = contrato_compraventa_vehiculo;