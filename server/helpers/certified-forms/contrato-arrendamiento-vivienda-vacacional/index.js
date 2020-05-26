const uri = require('./uri');
const paidUri = require('./paidUri');
const imageUri = require('./imageUri');
const steps = require('./steps');
const information = require('./information');
const blog = require('./blog');
const meta = require('./meta');

const contrato_arrendamiento_vivienda_vacacional = {
    id: 'contrato-arrendamiento-vivienda-vacacional',
    title: 'Contrato de arrendamiento de vivienda para uso turístico o vacacional',
    topLabelTitle: 'Arrendamiento de vivienda para uso turístico',
    amount: 10,
    image: imageUri,
    uri: uri,
    paidUri: paidUri,
    steps: steps,
    information: information,
    updated: '28 Febrero 2020',
    blog: blog,
    meta: meta
};

module.exports = contrato_arrendamiento_vivienda_vacacional;