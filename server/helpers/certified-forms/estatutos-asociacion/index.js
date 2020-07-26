const uri = require('./uri');
const paidUri = require('./paidUri');
const imageUri = require('./imageUri');
const steps = require('./steps');
const information = require('./information');
const blog = require('./blog');
const meta = require('./meta');


module.exports = {
    id: 'estatutos-asociacion',
    title: 'Estatutos de una asociación',
    topLabelTitle: 'Estatutos de una asociación',
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