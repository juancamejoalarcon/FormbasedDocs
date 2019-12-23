const uri = require('./uri');
const paidUri = require('./paidUri');
const imageUri = require('./imageUri');
const steps = require('./steps');

const contrato_ompraventa_vehiculo = {
    id: 'contrato-compraventa-vehiculo',
    title: 'Contrato de compraventa de vehículo usado entre particulares',
    topLabelTitle: 'Compraventa de vehículo usado entre particulares',
    amount: 20,
    image: imageUri,
    uri: uri,
    paidUri: paidUri,
    steps: steps
};

module.exports = contrato_ompraventa_vehiculo;