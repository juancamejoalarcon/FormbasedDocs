const contrato_compraventa_vehiculo = require('./contrato-compraventa-vehiculo');
const contrato_compraventa_inmueble = require('./contrato-compraventa-inmueble');
const contrato_arrendamiento_habitacion = require('./contrato-arrendamiento-habitacion');
const contrato_arrendamiento_vivienda = require('./contrato-arrendamiento-vivienda');
const contrato_arrendamiento_vivienda_vacacional = require('./contrato-arrendamiento-vivienda-vacacional');
const contrato_arrendamiento_plaza_garaje = require('./contrato-arrendamiento-plaza-garaje');
const estatutos_sociedad_limitada = require('./estatutos-sociedad-limitada');
const estatutos_sociedad_limitada_profesional = require('./estatutos-sociedad-limitada-profesional');
const estatutos_sociedad_limitada_unipersonal = require('./estatutos-sociedad-limitada-unipersonal');
const estatutos_asociacion = require('./estatutos-asociacion');

const certifiedForms = [
    contrato_compraventa_vehiculo,
    contrato_compraventa_inmueble,
    contrato_arrendamiento_habitacion,
    contrato_arrendamiento_vivienda,
    contrato_arrendamiento_vivienda_vacacional,
    contrato_arrendamiento_plaza_garaje,
    estatutos_sociedad_limitada,
    estatutos_sociedad_limitada_profesional,
    estatutos_sociedad_limitada_unipersonal,
    estatutos_asociacion
];

module.exports = {
    certifiedForms: certifiedForms
};