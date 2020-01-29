const contrato_compraventa_vehiculo = require('./contrato-compraventa-vehiculo');
const contrato_arrendamiento_habitacion = require('./contrato-arrendamiento-habitacion');

const certifiedForms = [
    contrato_compraventa_vehiculo,
    contrato_arrendamiento_habitacion
];

module.exports = {
    certifiedForms: certifiedForms
};