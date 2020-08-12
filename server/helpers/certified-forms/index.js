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
const acta_constitucion_asociacion = require('./acta-constitucion-asociacion');
const subarrendamiento = require('./subarrendamiento');
const contrato_trabajo = require('./contrato-trabajo-indefinido-temporal');
const precontrato_trabajo = require('./precontrato-trabajo');
const contrato_trabajo_fijo_discontinuo = require('./contrato-trabajo-fijo-discontinuo');
const requerimiento_pago = require('./requerimiento-pago');
const requerimiento_pago_alquiler = require('./requerimiento-pago-alquiler');

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
    estatutos_asociacion,
    acta_constitucion_asociacion,
    subarrendamiento,
    contrato_trabajo,
    contrato_trabajo_fijo_discontinuo,
    requerimiento_pago,
    requerimiento_pago_alquiler,
    precontrato_trabajo
];

module.exports = {
    certifiedForms: certifiedForms
};