const contrato_compraventa_vehiculo = require('./contrato-compraventa-vehiculo');
const contrato_arrendamiento_habitacion = require('./contrato-arrendamiento-habitacion');
const contrato_arrendamiento_vivienda = require('./contrato-arrendamiento-vivienda');
const contrato_arrendamiento_vivienda_vacacional = require('./contrato-arrendamiento-vivienda-vacacional');
const contrato_arrendamiento_plaza_garaje = require('./contrato-arrendamiento-plaza-garaje');

const certifiedForms = [
    contrato_compraventa_vehiculo,
    contrato_arrendamiento_habitacion,
    contrato_arrendamiento_vivienda,
    contrato_arrendamiento_vivienda_vacacional,
    contrato_arrendamiento_plaza_garaje
];

module.exports = {
    certifiedForms: certifiedForms
};