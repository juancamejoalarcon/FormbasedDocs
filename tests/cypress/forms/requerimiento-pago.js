const steps = [
    {
        type: 'text',
        value: 'Sara Houston Buesa',
    },
    {
        type: 'text',
        value: 'Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España'
    },
    {
        type: 'radioB',
        value: '1',
    },
    {
        type: 'text',
        value: 'Juan Camejo Alarcón'
    },
    {
        type: 'radioB',
        value: '1',
    },
    {
        type: 'text',
        value: '54113125J',
    },
    {
        type: 'text',
        value: 'Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España'
    },
    {
        type: 'text',
        value: 'Madrid'
    },
    {
        type: 'date',
        value: '2020-02-12'
    },
    {
        type: 'textarea',
        value: 'Un yate',
    },
    {
        type: 'number',
        value: '30000',
    },
    {
        type: 'date',
        value: '2020-02-12'
    },
    {
        type: 'text',
        value: 'transferencia bancaria en la cuenta a mi nombre del Banco BBVA, n° ESXX XXX XXXX XX XXXXXXXXXX',
    },
    {
        type: 'number',
        value: '30',
    },
    {
        type: 'radioB',
        value: '1',
    },
];

const outputExpected = `Sara Houston BuesaPaseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, EspañaJuan Camejo AlarcónDNI 54113125JPaseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, EspañaEn Madrid, a  12 de febrero de 2020	Asunto: Requerimiento de pagoEstimado Sr. D. Juan Camejo Alarcón:Mediante la presente, me pongo en contacto con usted a los efectos de comunicarle que a fecha de hoy adeuda las cantidades debidas en concepto de: Un yateDado que ha sido imposible  ponerme en contacto con usted, es por ello que mediante el presente escrito se le reclama la cantidad de TREINTA MIL  euros  (30000 €). Esta deuda debería haberse abonado el pasado 12 de febrero de 2020, por lo cual utilizo este medio para reclamarle que abone la totalidad de la mencionada deuda, mediante transferencia bancaria en la cuenta a mi nombre del Banco BBVA, n° ESXX XXX XXXX XX XXXXXXXXXX, a más tardar en el plazo de  30 días contados a partir de la recepción de esta comunicación.Le advertimos que a día de hoy usted se encuentra en situación de morosidad desde la recepción de este documento, por lo que desde este momento comienzan a devengarse los intereses de demora convenidos, de acuerdo a lo previsto en el artículo 1108 del Código Civil  y en nuestro acuerdo.-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Sin otro particular, y a la espera de una respuesta por su parte en aras de resolver este contencioso por la vía amistosa sin acudir a otras vías, reciba un cordial saludo............................................                                                        Sara Houston Buesa                                                                       `;


export default {
    steps,
    outputExpected,
    id: 'requerimiento-pago'
}