const uri = require('./uri');
const paidUri = require('./paidUri');
const imageUri = require('./imageUri');
const steps = require('./steps');
const information = require('./information');
const blog = require('./blog');
const meta = require('./meta');

const estatutos_sociedad_limitada = {
    id: 'estatutos-sociedad-limitada',
    title: 'Estatutos de una Sociedad Limitada',
    topLabelTitle: 'Estatutos de una Sociedad Limitada',
    amount: 10,
    image: imageUri,
    uri: uri,
    paidUri: paidUri,
    steps: steps,
    information: information,
    updated: '20 Febrero 2020',
    blog: blog,
    meta: meta
};

module.exports = estatutos_sociedad_limitada;