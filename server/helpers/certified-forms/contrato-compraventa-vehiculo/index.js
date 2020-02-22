const uri = require('./uri');
const paidUri = require('./paidUri');
const imageUri = require('./imageUri');
const steps = require('./steps');
const information = require('./information');

const contrato_compraventa_vehiculo = {
    id: 'contrato-compraventa-vehiculo',
    title: 'Contrato de compraventa de vehículo usado entre particulares',
    topLabelTitle: 'Compraventa de vehículo usado entre particulares',
    amount: 20,
    image: imageUri,
    uri: uri,
    paidUri: paidUri,
    steps: steps,
    information: information,
    updated: '10 Febrero 2020'
};

module.exports = contrato_compraventa_vehiculo;