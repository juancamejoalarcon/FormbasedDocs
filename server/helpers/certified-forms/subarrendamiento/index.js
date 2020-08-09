const steps = require('./steps');
const information = require('./information');
const blog = require('./blog');
const meta = require('./meta');
const fs = require('fs');
const path = require('path');


module.exports = {
    id: 'subarrendamiento',
    title: 'Subarrendamiento',
    topLabelTitle: 'Subarrendamiento',
    amount: 10,
    image: 'data:image/png;base64,' + fs.readFileSync(path.resolve(__dirname, 'image.png'), { encoding: 'base64' }),
    uri: 'data:application/vnd.oasis.opendocument.text;base64,' + fs.readFileSync(path.resolve(__dirname, 'modelo_encriptado.odt'), { encoding: 'base64' }),
    paidUri: 'data:application/vnd.oasis.opendocument.text;base64,' + fs.readFileSync(path.resolve(__dirname, 'modelo.odt'), { encoding: 'base64' }),
    steps: steps,
    information: information,
    updated: '20 Febrero 2020',
    blog: blog,
    meta: meta
};