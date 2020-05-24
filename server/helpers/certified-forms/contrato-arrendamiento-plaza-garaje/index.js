const uri = require('./uri');
const paidUri = require('./paidUri');
const imageUri = require('./imageUri');
const steps = require('./steps');
const information = require('./information');
const blog = require('./blog');
const meta = require('./meta');

const contrato_arrendamiento_plaza_garaje = {
    id: 'contrato-arrendamiento-plaza-garaje',
    title: 'Contrato de alquiler de plaza de garaje',
    topLabelTitle: 'Contrato de alquiler de plaza de garaje',
    amount: 10,
    image: imageUri,
    uri: uri,
    paidUri: paidUri,
    steps: steps,
    information: information,
    updated: '23 Marzo 2020',
    blog: blog,
    meta: meta
};

module.exports = contrato_arrendamiento_plaza_garaje;