const uri = require('./uri');
const paidUri = require('./paidUri');
const imageUri = require('./imageUri');
const steps = require('./steps');
const information = require('./information');
const blog = require('./blog');
const meta = require('./meta');

const contrato_arrendamiento_habitacion = {
    id: 'contrato-arrendamiento-habitacion',
    title: 'Contrato de arrendamiento de habitación',
    topLabelTitle: 'Contrato de arrendamiento de habitación',
    amount: 10,
    image: imageUri,
    uri: uri,
    paidUri: paidUri,
    steps: steps,
    information: information,
    updated: '01 Febrero 2020',
    blog: blog,
    meta: meta
};

module.exports = contrato_arrendamiento_habitacion;