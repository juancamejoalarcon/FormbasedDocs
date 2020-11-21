const steps = [
    {
        type: 'text',
        value: 'Registro civil',
    },
    {
        type: 'textarea',
        value: 'Prestación por desempleo'
    },
    {
        type: 'text',
        value: 'Albacete'
    },
    {
        type: 'date',
        value: '2020-02-12'
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
        type: 'radioC',
        value: '2',
    },
    {
        type: 'text',
        value: 'Banco Santander'
    },
    {
        type: 'text',
        value: 'Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España'
    },
    {
        type: 'text',
        value: 'B29805314',
    },
    {
        type: 'text',
        value: 'Registro Mercantil de Madrid',
    },
    {
        type: 'text',
        value: 'Tomo 123, folio 10, hoja SE',
    },
    {
        type: 'textarea',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ligula nec tellus cursus aliquam posuere quis erat. Maecenas eros leo, placerat et consectetur ac, venenatis eu enim. Nulla nec fermentum nunc. Aenean semper sem aliquam tincidunt venenatis. Vestibulum rutrum pharetra magna, et semper neque sodales eu. Morbi eu velit erat. Nullam sit amet magna sed turpis faucibus vehicula ut eget nulla. Pellentesque non lacus arcu. Maecenas consectetur, augue et faucibus condimentum, justo nunc tincidunt ante, eu dapibus ante libero in mauris.',
    },
];

const outputExpected = `DECLARACIÓN JURADARegistro civilPrestación por desempleoEn Albacete, a  12 de febrero de 2020Yo, D. Juan Camejo Alarcón, mayor de edad, con DNI núm. 54113125J, y con domicilio permanente en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España en nombre y representación de Banco Santander, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España, CIF/NIF núm. B29805314 e inscrita en: Registro Mercantil de Madrid, con los siguientes datos: Tomo 123, folio 10, hoja SE, en virtud de escritura pública y/o autorización pertinente,DECLARO BAJO JURAMENTO O PROMESA SOLEMNE QUELorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ligula nec tellus cursus aliquam posuere quis erat. Maecenas eros leo, placerat et consectetur ac, venenatis eu enim. Nulla nec fermentum nunc. Aenean semper sem aliquam tincidunt venenatis. Vestibulum rutrum pharetra magna, et semper neque sodales eu. Morbi eu velit erat. Nullam sit amet magna sed turpis faucibus vehicula ut eget nulla. Pellentesque non lacus arcu. Maecenas consectetur, augue et faucibus condimentum, justo nunc tincidunt ante, eu dapibus ante libero in mauris.-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Y para que así conste y surta los efectos oportunos firmo la presente declaración en Albacete, a 12 de febrero de 2020.........................................................…Fdo.  Juan Camejo AlarcónEn nombre y representación de Banco Santander`;
const outputExpectedAfterPayment = `DECLARACIÓN JURADARegistro civilPrestación por desempleoEn Albacete, a  12 de febrero de 2020Yo, D. Juan Camejo Alarcón, mayor de edad, con DNI núm. 54113125J, y con domicilio permanente en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España en nombre y representación de Banco Santander, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España, CIF/NIF núm. B29805314 e inscrita en: Registro Mercantil de Madrid, con los siguientes datos: Tomo 123, folio 10, hoja SE, en virtud de escritura pública y/o autorización pertinente,DECLARO BAJO JURAMENTO O PROMESA SOLEMNE QUELorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ligula nec tellus cursus aliquam posuere quis erat. Maecenas eros leo, placerat et consectetur ac, venenatis eu enim. Nulla nec fermentum nunc. Aenean semper sem aliquam tincidunt venenatis. Vestibulum rutrum pharetra magna, et semper neque sodales eu. Morbi eu velit erat. Nullam sit amet magna sed turpis faucibus vehicula ut eget nulla. Pellentesque non lacus arcu. Maecenas consectetur, augue et faucibus condimentum, justo nunc tincidunt ante, eu dapibus ante libero in mauris.Declaración que efectúo a todos los efectos legales, consciente de las responsabilidades de orden civil y penal que ella conlleva.Y para que así conste y surta los efectos oportunos firmo la presente declaración en Albacete, a 12 de febrero de 2020.........................................................…Fdo.  Juan Camejo AlarcónEn nombre y representación de Banco Santander`;


export default {
    steps,
    outputExpected,
    outputExpectedAfterPayment,
    id: 'declaracion-jurada'
}