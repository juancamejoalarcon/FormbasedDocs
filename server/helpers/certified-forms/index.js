const contrato_compraventa_vehiculo = require('./contrato-compraventa-vehiculo');
const contrato_arrendamiento_habitacion = require('./contrato-arrendamiento-habitacion');
const contrato_arrendamiento_vivienda = require('./contrato-arrendamiento-vivienda');

const certifiedForms = [
    contrato_compraventa_vehiculo,
    contrato_arrendamiento_habitacion,
    contrato_arrendamiento_vivienda
];

module.exports = {
    certifiedForms: certifiedForms
};