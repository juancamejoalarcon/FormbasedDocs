const steps = [
    {
        type: 'text',
        value: 'Madrid'
    },
    {
        type: 'date',
        value: '2020-02-12'
    },
    {
        type: 'range',
        value: '4'
    },
    {
        type: 'radioC',
        value: '2'
    },
    {
        type: 'text',
        value: 'Banco Santander, S.A'
    },
    {
        type: 'text',
        value: 'Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
        pregunta: 'Domicilio social completo de la persona jurídica...'
    },
    {
        type: 'text',
        value: 'B29805314',
        pregunta: 'NIF (Número de Identificación Fiscal)...'
    },
    {
        type: 'text',
        value: 'Registro Mercantil de Madrid',
        pregunta: 'Tipo de registro y lugar donde ...'
    },
    {
        type: 'text',
        value: 'Tomo 123, folio 10, hoja SE-1234',
        pregunta: 'Datos registrales de la perso ...'
    },
    {
        type: 'range',
        value: '2'
    },
    {
        type: 'text',
        value: 'Sara Houston Buesa',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Camino Lorem ipsum dolor, 93A 10ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '54113125J',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'representante legal',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Juan Camejo Alarcón',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Urbanización Lorem ipsum dolor sit, 138 6ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '3',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '71928721Q',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'apoderado',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'radioC',
        value: '2'
    },
    {
        type: 'text',
        value: 'Indra Sistemas, S.A'
    },
    {
        type: 'text',
        value: 'C. Comercial Lorem ipsum dolor, 3B 11ºA',
        pregunta: 'Domicilio social completo de la persona jurídica...'
    },
    {
        type: 'text',
        value: 'A18313189',
        pregunta: 'NIF (Número de Identificación Fiscal)...'
    },
    {
        type: 'text',
        value: 'Registro Mercantil de Albacete',
        pregunta: 'Tipo de registro y lugar donde ...'
    },
    {
        type: 'text',
        value: 'Tomo 100, folio 20, hoja SE-999',
        pregunta: 'Datos registrales de la perso ...'
    },
    {
        type: 'range',
        value: '2'
    },
    {
        type: 'text',
        value: 'Antonio Banderas',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Alameda Lorem, 56B',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '93066379F',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'representante legal',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Brad Pitt',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Camino Lorem ipsum dolor, 93A 10ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '3',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: 'Y1841513D',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'apoderado total',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora 3...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora (propietaria) para realizar el contrato, actú...'
    },
    {
        type: 'text',
        value: 'Alberto Sabina Fajardo',
        pregunta: 'Nombre completo del arrendador (propietario),...'
    },
    {
        type: 'text',
        value: 'Pasadizo Lorem ipsum dolor sit, 20B 14ºB',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '44418223W',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora 3...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: 'La persona arrendadora (propietaria) para realizar el contrato, actú...'
    },
    {
        type: 'text',
        value: 'Stalin Moreno',
        pregunta: 'Nombre completo del arrendador (propietario),...'
    },
    {
        type: 'text',
        value: 'Vía Lorem ipsum dolor sit, 97A 2ºE',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: 'X2497232F',
        pregunta: 'Introduzca el número que corresponde con el documento ...'
    },
    {
        type: 'text',
        value: 'Jazmín Gamez Sandoval',
        pregunta: 'Nombre completo de la persona que firma este contrato en nombre y ...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '17464671N',
        pregunta: 'Número del documento se...'
    },
    {
        type: 'text',
        value: 'apoderado',
        pregunta: 'Calidad o concepto en el que esta persona firma este contrato en nombre...'
    },
    {
        type: 'text',
        value: 'Cañada Lorem ipsum dolor, 174 8ºD',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'textarea',
        value: 'abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.com',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },

    // Segundo for each
    {
        type: 'range',
        value: '4'
    },
    {
        type: 'radioC',
        value: '2'
    },
    {
        type: 'text',
        value: 'Banco Santander, S.A'
    },
    {
        type: 'text',
        value: 'Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
        pregunta: 'Domicilio social completo de la persona jurídica...'
    },
    {
        type: 'text',
        value: 'B29805314',
        pregunta: 'NIF (Número de Identificación Fiscal)...'
    },
    {
        type: 'text',
        value: 'Registro Mercantil de Madrid',
        pregunta: 'Tipo de registro y lugar donde ...'
    },
    {
        type: 'text',
        value: 'Tomo 123, folio 10, hoja SE-1234',
        pregunta: 'Datos registrales de la perso ...'
    },
    {
        type: 'range',
        value: '2'
    },
    {
        type: 'text',
        value: 'Sara Houston Buesa',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Camino Lorem ipsum dolor, 93A 10ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '54113125J',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'representante legal',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Juan Camejo Alarcón',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Urbanización Lorem ipsum dolor sit, 138 6ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '3',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '71928721Q',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'apoderado',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'radioC',
        value: '2'
    },
    {
        type: 'text',
        value: 'Indra Sistemas, S.A'
    },
    {
        type: 'text',
        value: 'C. Comercial Lorem ipsum dolor, 3B 11ºA',
        pregunta: 'Domicilio social completo de la persona jurídica...'
    },
    {
        type: 'text',
        value: 'A18313189',
        pregunta: 'NIF (Número de Identificación Fiscal)...'
    },
    {
        type: 'text',
        value: 'Registro Mercantil de Albacete',
        pregunta: 'Tipo de registro y lugar donde ...'
    },
    {
        type: 'text',
        value: 'Tomo 100, folio 20, hoja SE-999',
        pregunta: 'Datos registrales de la perso ...'
    },
    {
        type: 'range',
        value: '2'
    },
    {
        type: 'text',
        value: 'Antonio Banderas',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Alameda Lorem, 56B',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '93066379F',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'representante legal',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Brad Pitt',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Camino Lorem ipsum dolor, 93A 10ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '3',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: 'Y1841513D',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'apoderado total',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora 3...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora (propietaria) para realizar el contrato, actú...'
    },
    {
        type: 'text',
        value: 'Alberto Sabina Fajardo',
        pregunta: 'Nombre completo del arrendador (propietario),...'
    },
    {
        type: 'text',
        value: 'Pasadizo Lorem ipsum dolor sit, 20B 14ºB',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '44418223W',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora 3...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: 'La persona arrendadora (propietaria) para realizar el contrato, actú...'
    },
    {
        type: 'text',
        value: 'Stalin Moreno',
        pregunta: 'Nombre completo del arrendador (propietario),...'
    },
    {
        type: 'text',
        value: 'Vía Lorem ipsum dolor sit, 97A 2ºE',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: 'X2497232F',
        pregunta: 'Introduzca el número que corresponde con el documento ...'
    },
    {
        type: 'text',
        value: 'Jazmín Gamez Sandoval',
        pregunta: 'Nombre completo de la persona que firma este contrato en nombre y ...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '17464671N',
        pregunta: 'Número del documento se...'
    },
    {
        type: 'text',
        value: 'apoderado',
        pregunta: 'Calidad o concepto en el que esta persona firma este contrato en nombre...'
    },
    {
        type: 'text',
        value: 'Cañada Lorem ipsum dolor, 174 8ºD',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'textarea',
        value: 'abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.com',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'text',
        value: 'Paseo de las Delicias 12, Escalera 5, 2.º B, 38296, Tenerife, España',
        pregunta: 'Dirección completa de la vivienda...'
    },
    {
        type: 'number',
        value: '200',
        pregunta: 'Superficie útil de la vivienda en metros cuad...'
    },
    {
        type: 'textarea',
        value: 'Una cocina, un salón, un garaje y un jardín de 10m2',
        pregunta: 'Haga una descripción detallada de los componentes de la vivienda...'
    },
    {
        type: 'text',
        value: 'Madrid N. 34',
        pregunta: 'Lugar y, en su caso, número del Registro de la prop...'
    },
    {
        type: 'text',
        value: 'Tomo 1 Libro 377 Folio 204 Finca 2',
        pregunta: 'Datos registrales de la vivie...'
    },
    {
        type: 'text',
        value: '9872023 VH5797S 0001 WX',
        pregunta: 'Referencia catastral de la vivie...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: '¿Desea incluir de forma anexa al contrato ...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: '¿La vivienda forma parte de una Comunid...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: 'Quién asumirá los gastos generales u ordina...'
    },
    {
        type: 'number',
        value: '10',
        pregunta: 'Que porcentaje de estos gastos generales u ordi...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'Estos gastos generales u ordinario...'
    },
    {
        type: 'number',
        value: '20',
        pregunta: 'Importe mensual (en euros) de estos ga...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: '¿Quién asumirá los gastos extraordinarios...'
    },
    {
        type: 'number',
        value: '10',
        pregunta: '¿Qué porcentaje de estos gastos extraordinario...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: '¿La habitación se alquila amueblada de manera que el arrendatario (inquilino) pueda hacer us...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: '¿La habitación se alquila amueblada de manera que el arrendatario (inquilino) pueda hacer us...'
    },
    {
        type: 'textarea',
        value: 'Una cama, una mesa de escritorio, una mesilla de noche y un armario',
        pregunta: 'Descripción detallada de los muebles d...'
    },
    {
        type: 'text',
        value: 'dos años',
        pregunta: 'Indique la duración del contrato...'
    },
    {
        type: 'date',
        value: '2020-02-15'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Una vez hayan pasados 6 meses desde el incio del alqu...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'El precio del alquiler se'
    },
    {
        type: 'text',
        value: 'por mes',
        pregunta: '¿Con que periodicidad...'
    },
    {
        type: 'number',
        value: '500',
        pregunta: 'Importe que se paga por la periodicidad...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'El pago del alquiler se realiza'
    },
    {
        type: 'radioB',
        value: '1'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'Forma de pago del alquil'
    },
    {
        type: 'text',
        value: 'BBVA',
        pregunta: 'Nombre del banco de la cuenta donde se rea...'
    },
    {
        type: 'text',
        value: 'ES3514653634231235986175',
        pregunta: 'Número IBAN de dicha cu...'
    },
    {
        type: 'text',
        value: 'Antonio Alarcón Marrero',
        pregunta: 'Nombre completo o denominación social ...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: '¿Se establece una cláusula que recoja actualizaci'
    },
    {
        type: 'text',
        value: 'anualmente',
        pregunta: 'Frecuencia con la que se podrá aumentar o revisar el pre...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: '¿Se establece una cláusula que recoja actualizaci'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'Además del precio del alquiler de la vivienda, ¿el arrendatiario (inquilino) pagar...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: 'Con que periodicidad se pagarán estos...'
    },
    {
        type: 'number',
        value: '100',
        pregunta: 'Importe en euros del pago total que se hará...'
    },
    {
        type: 'textarea',
        value: 'Al finalizar la estancia una persona acudirá a limpiar la vivienda',
        pregunta: 'Si lo desea haga una descripción del servicio de limpieza...'
    },
    {
        type: 'text',
        value: 'teléfono e internet',
        pregunta: 'Si lo desea, indique aquí los servicios que han sido contratados por el arrendador...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'El pago de los gastos que se generen por usar la habitación, como, por ejemplo...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'Estos gastos de uso de la hab...'
    },
    {
        type: 'text',
        value: '50',
        pregunta: 'Importe mínimo (en euros) que el arrendatario deberá...'
    },
    {
        type: 'text',
        value: '70',
        pregunta: 'Importe máximo (en euros que ...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'El Impuesto sobre Bienes Inmueble...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'En caso de que el arrendatario (...'
    },
    {
        type: 'number',
        value: '500',
        pregunta: 'Importe máximo (en euros que ...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'En caso de que el arrendatario (inquilino)...'
    },
    {
        type: 'range',
        value: '2'
    },
    {
        type: 'text',
        value: 'Juan Camejo Alarcón',
        pregunta: 'Nombre completo o denominación s...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Tipo de documento de id...'
    },
    {
        type: 'text',
        value: 'X8394817R',
        pregunta: 'Número del documento seleccionad...'
    },
    {
        type: 'text',
        value: 'Calle Canarias 7, Lanzarote, España',
        pregunta: 'Dirección del lugar donde ...'
    },
    {
        type: 'text',
        value: 'Juan Camejo Alarcón',
        pregunta: 'Nombre completo o denominación s...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Tipo de documento de id...'
    },
    {
        type: 'text',
        value: 'X8394817R',
        pregunta: 'Número del documento seleccionad...'
    },
    {
        type: 'text',
        value: 'Calle Canarias 7, Lanzarote, España',
        pregunta: 'Dirección del lugar donde ...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'Queda prohibido meter o tener mascotas...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: 'La vivienda o habitació...'
    },
    {
        type: 'text',
        value: 'alquiler de propietarios',
        pregunta: 'Tipo de seguro que tiene el alquiler de la hab...'
    },
    {
        type: 'text',
        value: 'Mapfre',
        pregunta: 'Nombre de la compañía asegurad...'
    },
    {
        type: 'text',
        value: '123123QWE',
        pregunta: 'Número de poliza...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Queda prohibido meter o tener mascotas...'
    },
    {
        type: 'text',
        value: 'responsabilidad civil',
        pregunta: 'Tipo de seguro que se desea...'
    },
    {
        type: 'number',
        value: '10000',
        pregunta: 'Cobertura mínima (en euros) que deberá...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: '(Derecho de adquisición preferente) En caso de que el arrendador decida vender...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: '(Subarrendamiento) El ar...'
    },
    {
        type: 'number',
        value: '2',
        pregunta: '¿Con cuántos días de anticipación deberá informar el arrendatario...'
    },
    {
        type: 'number',
        value: '',
        pregunta: 'Si lo desea indique la cantidad (en euros) de la mul...',
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: '(Derecho de adquisición preferente) En caso de que el arrendador decida vender...',
        finished: true
    },
];

const outputExpected = 'Contrato de arrendamiento de viviendaEn Madrid, a  12 de febrero de 2020REUNIDOSDe una parte, Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, NIE núm. 54113125J, y en calidad de representante legal;   Juan Camejo Alarcón, mayor de edad, con domicilio en Urbanización Lorem ipsum dolor sit, 138 6ºH, Pasaporte núm. 71928721Q, y en calidad de apoderado;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234. Antonio Banderas, mayor de edad, con domicilio en Alameda Lorem, 56B, DNI núm. 93066379F, y en calidad de representante legal;   Brad Pitt, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, Pasaporte núm. Y1841513D, y en calidad de apoderado total;   actuando en nombre y representación de: Indra Sistemas, S.A, con domicilio en C. Comercial Lorem ipsum dolor, 3B 11ºA,  C.I.F/N.I.F número A18313189, e inscrita en: Registro Mercantil de Albacete  con la siguiente información: Tomo 100, folio 20, hoja SE-999.Alberto Sabina Fajardo, mayor de edad, y con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y actuando en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, con domicilio en Cañada Lorem ipsum dolor, 174 8ºD, NIE número: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de Stalin Moreno, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Como parte ARRENDADORA.De otra parte, Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, NIE núm. 54113125J, y en calidad de representante legal;   Juan Camejo Alarcón, mayor de edad, con domicilio en Urbanización Lorem ipsum dolor sit, 138 6ºH, Pasaporte núm. 71928721Q, y en calidad de apoderado;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234. Antonio Banderas, mayor de edad, con domicilio en Alameda Lorem, 56B, DNI núm. 93066379F, y en calidad de representante legal;   Brad Pitt, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, Pasaporte núm. Y1841513D, y en calidad de apoderado total;   actuando en nombre y representación de: Indra Sistemas, S.A, con domicilio en C. Comercial Lorem ipsum dolor, 3B 11ºA,  C.I.F/N.I.F número A18313189, e inscrita en: Registro Mercantil de Albacete  con la siguiente información: Tomo 100, folio 20, hoja SE-999.Alberto Sabina Fajardo, mayor de edad, y con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y actuando en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, con domicilio en Cañada Lorem ipsum dolor, 174 8ºD, NIE número: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de Stalin Moreno, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Como parte ARRENDATARIA.Las partes, arrendadora y arrendataria, se reconocen recíprocamente capacidad legal suficiente para otorgar el presente contrato, y reunidos en la fecha del encabezamiento del presente escrito, manifiestan haber acordado formalizar en este documento un CONTRATO DE ARRENDAMIENTO sobre la vivienda que se especifica a continuación.EXPONENI. Que la Parte Arrendadora es propietaria en pleno dominio de una vivienda cuya superficie útil es de 200 metros cuadrados y que se encuentra ubicada en: Paseo de las Delicias 12, Escalera 5, 2.º B, 38296, Tenerife, España, y que comprende: Una cocina, un salón, un garaje y un jardín de 10m2A lo largo del presente escrito se denominará “la vivienda” al conjunto formado por la vivienda propiamente dicha y sus accesorios. Las partes declaran conocer y aceptar la superficie y composición de la vivienda, así como el estado en que se encuentra y otras características.Teniendo en cuenta que en el contrato de arrendamiento, la vivienda se arrienda de cuerpo cierto, si hubiera diferencia entre los metros cuadrados o superficie real de la vivienda y la superficie descrita en el presente contrato, esto no afectará a las estipulaciones pactadas en el presente contrato, y en concreto, no afectará al precio establecido de renta, que se mantendrá invariable.II. Esta vivienda está inscrita en el Registro de la Propiedad de: Madrid N. 34, con los siguientes datos: Tomo 1 Libro 377 Folio 204 Finca 2.Su referencia catastral es: 9872023 VH5797S 0001 WX. Junto con el presente contrato de arrendamiento se acompaña certificado de eficiencia energética de la vivienda arrendada, el cual es puesto a disposición de la Parte Arrendataria a los efectos legales oportunos. III. El arrendador está interesado en ceder en arrendamiento para uso exclusivo de vivienda habitual el inmueble anteriormente descrito, estando el arrendatario interesado en recibirlo bajo los términos y condiciones que se regularán en el presente contrato.ESTIPULACIONESPRIMERA. OBJETOLa Parte Arrendadora cede en arrendamiento el uso del inmueble descrito en el exponiendo segundo del presente contrato a la Parte Arrendataria, quien lo adquiere con la finalidad de uso de vivienda habitual (quedando totalmente prohibido el uso para cualquier otro fin ya sea comercial o distinto al de vivienda habitual). El incumplimiento de esto será motivo de resolución del contrato.La vivienda se pondrá a disposición de la Parte Arrendataria con la entrega de llaves. En este acto ambas partes constatan que la entrega de la vivienda se hace en perfecto estado de uso y conservación, y deberá entregarse en la mismas condiciones al finalizar el contrato. La Parte Arrendataria manifiesta que la vivienda está amueblada con el siguiente mobiliario, enseres y objetos: Una cama, una mesa de escritorio, una mesilla de noche y un armarioLa vivienda y su mobiliario es propiedad de la Parte Arrendadora. El inmueble objeto de arrendamiento deberá reintegrarse a la extinción del contrato, en estado equivalente de conservación y funcionamiento a aquel en el momento de la suscripción del presente documento. SEGUNDA. DURACIÓN Y PRÓRROGASLas partes pactan libremente que la duración del presente arrendamiento de vivienda será de: dos años, comenzando su cómputo en el día 15 de febrero de 2020.El contrato podrá prorrogarse posteriormente por períodos anuales hasta que el arrendamiento alcance la duración de 5 años, salvo que el arrendatario manifieste al arrendador con un mínimo de treinta días de antelación  a la fecha de terminación de este contrato o cualquiera de sus prórrogas su voluntad de no renovarlo. Todo ello de acuerdo con el artículo 9 de la Ley 29/1994 de 24 de noviembre de arrendamientos Urbanos.Transcurrido el primer años de contrato, la Parte Arrendadora podrá comunicar a la Parte Arrendataria que tiene necesidad de la vivienda para destinarla a su vivienda habitual o para sus familiares. Llegado este supuesto, la Parte Arrendadora debe comunicarlo a la Parte Arrendataria con dos meses de antelación —como mínimo— a la fecha en la que la vivienda se vaya a necesitar. La Parte Arrendataria estará obligada a entregar la vivienda en dicho plazo, salvo que las Partes acuerden algo distinto.Transcurrido el plazo de cinco años desde el otorgamiento del presente contrato de arrendamiento, y si las partes no hubiesen comunicado su deseo de no renovarlo, éste se prorrogaría necesariamente por plazos anuales hasta un máximo de tres años más, salvo que el arrendatario manifieste al arrendador con un mes de antelación a la fecha de terminación de cualquiera de las anualidades, su voluntad de no renovar el contrato.Finalizado el contrato, o cualquiera de sus prórrogas la Parte Arrendataria deberá dejar la vivienda libre y limpia, sin objetos personales u otros enseres propios, y deberá ponerla a disposición de la Parte Arrendadora, sin necesidad de previo requerimiento. Todo ello será de aplicación a la finalización del contrato, salvo que las partes de mutuo acuerdo, pactaran otra cosa distinta.En virtud del artículo 11 de la Ley de Arrendamientos Urbanos (LAU), la Parte Arrendataria podrá desistir del contrato, una vez que hayan transcurrido al menos seis meses de arrendamiento. Para el supuesto de que antes de finalizar el plazo estipulado en el contrato, es decir, 1 año, el arrendatario desistiera del mismo, deberá avisar al arrendador con una antelación mínima de treinta días, y no tendrá que indemnizar a la Parte Arrendadora con ninguna cantidad.TERCERA. RENTA DEL ARRENDAMIENTOLas Partes han acordado que la renta será de QUINIENTOS  euros  (500 €) por cada período siguiente: por mes. La obligación de la Parte Arrendataria de pagar dicha renta nace a partir del momento de la firma del presente Contrato.  El precio pactado de renta incluye el IVA (Impuesto sobre el Valor Añadido). Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que la renta incluye Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación.  El pago de la Renta fijada se abonará por meses anticipados entre los cinco (5) primeros días de cada mes.  Las partes acuerdan que el pago de la renta será mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): ES3514653634231235986175 de la entidad: BBVA, y cuyo titular es: Antonio Alarcón Marrero. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la Parte Arrendadora entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.  El impago de la renta por la Parte Arrendataria será causa de resolución del contrato. En ese caso, la Parte Arrendataria deberá restituir en perfecto estado la vivienda arrendada a la Parte Arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas. Las partes acuerdan que la renta será objeto de revisión, a partir del primer año de contrato, y será revisada: anualmente. Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice General Nacional del Sistema de Precios al Consumo (IPC). Esta actualización se efectuará de forma automática, comunicando previamente por parte del arrendador a la arrendataria la cantidad diferencial. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia. El cobro de la renta cuyo precio se haya actualizado será exigible en la cuota, o preiodicidad correspondiente tras la notificación expresa y por escrito de dicha actualización. El retraso o impago de la nueva renta no supondrá la renuncia a la misma.CUARTA. GASTOS GENERALES Y SUMINISTROSLa contratación de servicios y suministros, tales como, luz, agua e impuestos correrán a cargo de la Parte Arrendadora. La Parte Arrendadora, también se hará responsable de contratar los siguientes servicios: teléfono e internet.Igualmente, el pago de todos los servicios y suministros individualizados será por cuenta y a cargo de la Parte Arrendataria. La Parte Arrendataria se compromete al abono de estos gastos, conociendo y aceptando que el importe de los mismos no ha sido tomado en consideración al fijar el importe de la renta. Dichos gastos los pagará la Parte Arrendataria a la Parte Arrendadora en la misma forma prevista para la renta. La Parte Arrendadora entregará el recibo correspondiente por este concepto a la Parte Arrendataria después del pago. La Parte Arrendataria no pagará en ningún caso menos de 50 euros mensuales. La Parte Arrendataria no pagará en ningún caso más de 70 euros mensuales. Todos los gastos de Comunidad correrán a cargo de ambas Partes. En concreto, a la Parte Arrendataria le corresponderá abonar un 10 % de los mismos El importe de los gastos de Comunidad no está incluido en la renta. Siendo que la Parte Arrendataria tendrá que abonarlos por separado a la Parte Arrendadora, que a su vez está obligada a entregar recibo a la Parte Arrendataria en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la Parte Arrendataria.  Los gastos ordinarios de Comunidad para la vivienda actualmente ascienden a la cantidad de VEINTE euros  ( 20 €) mensuales.  Los gastos extraordinarios de Comunidad que correspondan a la vivienda serán por cuenta y a cargo de ambas Partes. En concreto, a la Parte Arrendataria le corresponderá abonar un DIEZ por ciento (10 %) de los mismos.El Impuesto sobre Bienes Inmuebles (IBI) que corresponda a la vivienda será por cuenta y a cargo de la Parte Arrendadora en su totalidad. El importe de los gastos de limpieza de vivienda y zonas comunes no está incluido dentro en la renta, siendo que la Parte Arrendataria tendrá que abonarlos. Estos gastos de limpieza ascenderán a CIEN euros  (100 €) para la duración total del contrato de arrendamiento. Siendo que la Parte Arrendataria tendrá que abonarlos por separado a la Parte Arrendadora, ésta, a su vez está obligada a entregar recibo a la Parte Arrendataria en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la Parte Arrendataria. Las Partes acuerdan que dicho pago retribuirá el siguiente servicio de limpieza: Al finalizar la estancia una persona acudirá a limpiar la vivienda.QUINTA.- FIANZALas partes acuerdan un importe de QUINIENTOS  euros  (500 €) en concepto de fianza, que la Parte Arrendataria entrega en este acto a la Parte Arrendadora. Sirva el presente documento la más formal y fiel carta de pago que en derecho corresponda.  Una vez la Parte Arrendadora haya comprobado que la  vivienda se encuentra en perfecto estado y conservación, el importe correspondiente a la fianza será devuelto a la Parte Arrendataria. En el caso de que existieran deudas o cantidades pendientes de abono, o bien, se hubiere ocasionado desperfectos en la vivienda, así como en el mobiliario o los enseres de la misma, debido a su mal uso, será descontado de la fianza el importe correspondiente necesario para reparar los desperfectos ocasionados.Sin perjuicio de lo convenido en las estipulaciones precedentes, garantiza el total y exacto cumplimiento de todas y cada una de las obligaciones contraídas por el arrendatario: Juan Camejo Alarcón, con NIE núm. X8394817R y domicilio en Calle Canarias 7, Lanzarote, España; Juan Camejo Alarcón, con NIE núm. X8394817R y domicilio en Calle Canarias 7, Lanzarote, España; en calidad de fiadora de la Parte Arrendataria, convirtiéndose en suyas las obligaciones de ésta a los efectos previstos en el Código Civil. Asimismo, el FIADOR renuncia a los beneficios de orden y excusión y a lo dispuesto en el artículo 1851 del Código Civil.SEXTA. OBRASLas partes acuerdan que no está permitido realizar obras sin el previo consentimiento expreso y por escrito de la Parte Arrendadora. La Parte Arrendataria tampoco podrá realizar obras que provoquen una disminución en la estabilidad o seguridad de la vivienda o que contravengan las normas de la Comunidad o  la normativa urbanística.En caso de que la Parte Arrendataria realizase obras sin el permiso o consentimiento de la Parte Arrendadora, y sin perjuicio de la facultad de resolver el contrato por parte del arrendador, éste podrá exigir a la arrendataria que reponga las cosas al estado anterior. Si al contrario, las obras se hubieran realizado con el permiso o consentimiento del arrendador, éstas quedarán en beneficio de la vivienda, sin que la Parte Arrendataria pueda reclamar indemnización alguna, salvo que las partes hubieran dispuesto algo distinto a lo ahora convenido.La Parte Arrendadora se compromete a hacer las reparaciones necesarias para el buen uso de lo arrendado, a fin de que se encuentre siempre en perfectas condiciones de funcionamiento, asumiendo la totalidad de los gastos que fueren necesarios para tal efecto sin modificar, o elevar la cuantía pactada de renta. Igualmente está obligada a requerir a la Comunidad de Propietarios, a instancias de la Parte Arrendataria, para la realización de las obras de reparación o adecuación que puedan necesitar los elementos comunes.   Sin embargo, las pequeñas reparaciones que exija el desgaste por el uso ordinario de la vivienda serán a cargo de la Parte Arrendataria.SÉPTIMA.- NORMAS DE LA COMUNIDAD Y NORMAS DE CONVIVENCIA.Queda expresamente prohibido el acceso y estancia de animales domésticos o no domésticos en la vivienda objeto de arrendamiento. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.Estando ubicada la vivienda en un inmueble organizado en una Comunidad de Propietarios, la Parte Arrendataria se obliga durante toda la vigencia del Contrato a: no contravenir los buenos usos de vecindad, cumplir las normas contenidas en los estatutos de la Comunidad y de la policía urbana, así como evitar molestar a vecinos con ruidos, fiestas, música, etc., que contravengan las Ordenanzas Municipales. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.OCTAVA. SEGUROSLa Parte Arrendadora tiene contratado un seguro de: alquiler de propietarios, en la compañía aseguradora: Mapfre, y cuyo número de póliza es el siguiente: 123123QWE. No obstante, la PARTE ARRENDADORA se compromete a contratar un seguro de la siguiente clase: responsabilidad civil. Este seguro tendrá como beneficiaria a la Parte Arrendadora, y tener una cobertura mínima igual a DIEZ MIL  euros  (10000 €). Este seguro se mantendrá durante toda la vigencia del presente Contrato .NOVENA. DERECHO DE ADQUISICIÓNLa Parte Arrendataria tendrá derecho de adquisición preferente, tanteo, o retracto, sobre la vivienda, en caso de que la Parte Arrendadora decidiera enajenar el inmueble. Todo ello de acuerdo con lo dispuesto en los artículos 25 y siguientes de la Ley de Arrendamientos Urbanos que se encuentre vigente en el momento de formalización del presente contrato.DÉCIMA. SUBARRIENDO, SUBROGACIÓN Y CESIÓNQueda permitido la cesión de la vivienda o su subarriendo ya sea total o parcial. La Parte Arrendataria se compromete a poner en conocimiento de la Parte Arrendadora esta situación, junto con el acuerdo o contrato correspondiente con, al menos, DOS (2) días de antelación a la formalización del acuerdo de subarriendo o cesión, de forma expresa y por escrito. En caso de cesión, el cesionario se subrogará en la posición de la Parte Arrendataria frente a la Parte Arrendadora. En caso de subarriendo, la Parte Arrendataria continuará siendo responsable del cumplimiento del Contrato para con la Parte Arrendadora, y se deberán respetar una serie de condiciones: a) El subarriendo, respetando el objeto de este Contrato, será de la vivienda. b) El subarriendo no podrá tener en ningún caso una duración superior a la duración de este contrato de arrendamiento.A través del presente contrato que si la duración del contrato de arrendamiento fuera superior a cinco años, las partes acuerdan que no habrá lugar a la subrogación en caso de fallecimiento de la Parte Arrendataria.DECIMOPRIMERA. RESOLUCIÓN DEL CONTRATOEl contrato podrá ser resuelto por cualquiera de las partes siempre que concurra alguna de las siguientes circunstancias:a) por el incumplimiento de las cláusulas recogidas en el presente contrato.b) impago de la renta, cantidades asimiladas o fianzas y sus correspondientes actualizaciones.c) realización de actividades molestas, insalubres, nocivas, peligrosas, y/o dar un uso distinto al inicialmente pactado.d) realización de obras sin consentimiento, o producción de daños dolosos.e) el incumplimiento de las normas de convivencia establecidas por el presente Contrato; yf) o cualquier otra circunstancia de las establecidas en el presente contrato.El incumplimiento por cualquiera de las Partes de las obligaciones del presente Contrato dará derecho a promover la resolución del Contrato de acuerdo con lo dispuesto en el artículo 1124 del Código Civil, así como a solicitar una indemnización por los daños y perjuicios ocasionados.DECIMOSEGUNDA. FIN DEL CONTRATO DE ARRENDAMIENTOLlegada la fecha de finalización del Contrato, la Parte Arrendataria deberá entregar a la Parte Arrendadora las llaves de la vivienda. Si la Parte Arrendataria, no hiciera entrega de la vivienda en el momento correspondiente, como penalización, deberá entregar el doble de la renta diaria existente al momento de la finalización del Contrato o prórroga por cada día de retraso, además de todos los gastos directos e indirectos que dicho retraso genere.DECIMOTERCERA. ELEVACIÓN A PÚBLICO Y REGISTRO DE LA PROPIEDADCualquiera de las partes podrá elevar a documento público el presente contrato, así como inscribirlo en el Registro de la Propiedad en el que se encuentre inscrita la vivienda, sin necesidad de autorización de la otra parte. Los gastos generados deberán ser asumidos por la parte interesada. Se repartirían dichos gastos a partes iguales siempre que ambas partes estuvieren interesadas en elevar el contrato a documento público y proceder a su posterior inscripción en el Registro de la Propiedad.DECIMOCUARTA. NOTIFICACIONESLa Parte Arrendataria podrá comunicarse con la Parte Arrendadora a través de: abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.comLa Parte Arrendadora podrá comunicarse con la Parte Arrendataria a través de: abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.comCada una de las Partes puede, por medio de notificación escrita enviada a la otra Parte, cambiar la dirección a la que deban mandarse cualesquiera comunicaciones.DECIMOQUINTA. INTEGRIDAD DEL CONTRATO Y ANULABILIDAD-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------DECIMOSEXTA. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------DECIMOSÉPTIMA. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Y en señal de acuerdo con todo lo que antecede las partes firman el presente contrato de arrendamiento de habitación por duplicado y a un solo efecto en el fecha y lugar arriba indicadosLA PARTE ARRENDADORA                                          LA PARTE ARRENDATARIA...........................................                                                        ...........................................________                                                                                   ________';

const outputExpectedAfterPayment = 'Contrato de arrendamiento de viviendaEn Madrid, a  12 de febrero de 2020REUNIDOSDe una parte, Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, NIE núm. 54113125J, y en calidad de representante legal;   Juan Camejo Alarcón, mayor de edad, con domicilio en Urbanización Lorem ipsum dolor sit, 138 6ºH, Pasaporte núm. 71928721Q, y en calidad de apoderado;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234. Antonio Banderas, mayor de edad, con domicilio en Alameda Lorem, 56B, DNI núm. 93066379F, y en calidad de representante legal;   Brad Pitt, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, Pasaporte núm. Y1841513D, y en calidad de apoderado total;   actuando en nombre y representación de: Indra Sistemas, S.A, con domicilio en C. Comercial Lorem ipsum dolor, 3B 11ºA,  C.I.F/N.I.F número A18313189, e inscrita en: Registro Mercantil de Albacete  con la siguiente información: Tomo 100, folio 20, hoja SE-999.Alberto Sabina Fajardo, mayor de edad, y con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y actuando en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, con domicilio en Cañada Lorem ipsum dolor, 174 8ºD, NIE número: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de Stalin Moreno, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Como parte ARRENDADORA.De otra parte, Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, NIE núm. 54113125J, y en calidad de representante legal;   Juan Camejo Alarcón, mayor de edad, con domicilio en Urbanización Lorem ipsum dolor sit, 138 6ºH, Pasaporte núm. 71928721Q, y en calidad de apoderado;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234. Antonio Banderas, mayor de edad, con domicilio en Alameda Lorem, 56B, DNI núm. 93066379F, y en calidad de representante legal;   Brad Pitt, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, Pasaporte núm. Y1841513D, y en calidad de apoderado total;   actuando en nombre y representación de: Indra Sistemas, S.A, con domicilio en C. Comercial Lorem ipsum dolor, 3B 11ºA,  C.I.F/N.I.F número A18313189, e inscrita en: Registro Mercantil de Albacete  con la siguiente información: Tomo 100, folio 20, hoja SE-999.Alberto Sabina Fajardo, mayor de edad, y con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y actuando en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, con domicilio en Cañada Lorem ipsum dolor, 174 8ºD, NIE número: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de Stalin Moreno, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Como parte ARRENDATARIA.Las partes, arrendadora y arrendataria, se reconocen recíprocamente capacidad legal suficiente para otorgar el presente contrato, y reunidos en la fecha del encabezamiento del presente escrito, manifiestan haber acordado formalizar en este documento un CONTRATO DE ARRENDAMIENTO sobre la vivienda que se especifica a continuación.EXPONENI. Que la Parte Arrendadora es propietaria en pleno dominio de una vivienda cuya superficie útil es de 200 metros cuadrados y que se encuentra ubicada en: Paseo de las Delicias 12, Escalera 5, 2.º B, 38296, Tenerife, España, y que comprende: Una cocina, un salón, un garaje y un jardín de 10m2A lo largo del presente escrito se denominará “la vivienda” al conjunto formado por la vivienda propiamente dicha y sus accesorios. Las partes declaran conocer y aceptar la superficie y composición de la vivienda, así como el estado en que se encuentra y otras características.Teniendo en cuenta que en el contrato de arrendamiento, la vivienda se arrienda de cuerpo cierto, si hubiera diferencia entre los metros cuadrados o superficie real de la vivienda y la superficie descrita en el presente contrato, esto no afectará a las estipulaciones pactadas en el presente contrato, y en concreto, no afectará al precio establecido de renta, que se mantendrá invariable.II. Esta vivienda está inscrita en el Registro de la Propiedad de: Madrid N. 34, con los siguientes datos: Tomo 1 Libro 377 Folio 204 Finca 2.Su referencia catastral es: 9872023 VH5797S 0001 WX. Junto con el presente contrato de arrendamiento se acompaña certificado de eficiencia energética de la vivienda arrendada, el cual es puesto a disposición de la Parte Arrendataria a los efectos legales oportunos. III. El arrendador está interesado en ceder en arrendamiento para uso exclusivo de vivienda habitual el inmueble anteriormente descrito, estando el arrendatario interesado en recibirlo bajo los términos y condiciones que se regularán en el presente contrato.ESTIPULACIONESPRIMERA. OBJETOLa Parte Arrendadora cede en arrendamiento el uso del inmueble descrito en el exponiendo segundo del presente contrato a la Parte Arrendataria, quien lo adquiere con la finalidad de uso de vivienda habitual (quedando totalmente prohibido el uso para cualquier otro fin ya sea comercial o distinto al de vivienda habitual). El incumplimiento de esto será motivo de resolución del contrato.La vivienda se pondrá a disposición de la Parte Arrendataria con la entrega de llaves. En este acto ambas partes constatan que la entrega de la vivienda se hace en perfecto estado de uso y conservación, y deberá entregarse en la mismas condiciones al finalizar el contrato. La Parte Arrendataria manifiesta que la vivienda está amueblada con el siguiente mobiliario, enseres y objetos: Una cama, una mesa de escritorio, una mesilla de noche y un armarioLa vivienda y su mobiliario es propiedad de la Parte Arrendadora. El inmueble objeto de arrendamiento deberá reintegrarse a la extinción del contrato, en estado equivalente de conservación y funcionamiento a aquel en el momento de la suscripción del presente documento. SEGUNDA. DURACIÓN Y PRÓRROGASLas partes pactan libremente que la duración del presente arrendamiento de vivienda será de: dos años, comenzando su cómputo en el día 15 de febrero de 2020.El contrato podrá prorrogarse posteriormente por períodos anuales hasta que el arrendamiento alcance la duración de 5 años, salvo que el arrendatario manifieste al arrendador con un mínimo de treinta días de antelación  a la fecha de terminación de este contrato o cualquiera de sus prórrogas su voluntad de no renovarlo. Todo ello de acuerdo con el artículo 9 de la Ley 29/1994 de 24 de noviembre de arrendamientos Urbanos.Transcurrido el primer años de contrato, la Parte Arrendadora podrá comunicar a la Parte Arrendataria que tiene necesidad de la vivienda para destinarla a su vivienda habitual o para sus familiares. Llegado este supuesto, la Parte Arrendadora debe comunicarlo a la Parte Arrendataria con dos meses de antelación —como mínimo— a la fecha en la que la vivienda se vaya a necesitar. La Parte Arrendataria estará obligada a entregar la vivienda en dicho plazo, salvo que las Partes acuerden algo distinto.Transcurrido el plazo de cinco años desde el otorgamiento del presente contrato de arrendamiento, y si las partes no hubiesen comunicado su deseo de no renovarlo, éste se prorrogaría necesariamente por plazos anuales hasta un máximo de tres años más, salvo que el arrendatario manifieste al arrendador con un mes de antelación a la fecha de terminación de cualquiera de las anualidades, su voluntad de no renovar el contrato.Finalizado el contrato, o cualquiera de sus prórrogas la Parte Arrendataria deberá dejar la vivienda libre y limpia, sin objetos personales u otros enseres propios, y deberá ponerla a disposición de la Parte Arrendadora, sin necesidad de previo requerimiento. Todo ello será de aplicación a la finalización del contrato, salvo que las partes de mutuo acuerdo, pactaran otra cosa distinta.En virtud del artículo 11 de la Ley de Arrendamientos Urbanos (LAU), la Parte Arrendataria podrá desistir del contrato, una vez que hayan transcurrido al menos seis meses de arrendamiento. Para el supuesto de que antes de finalizar el plazo estipulado en el contrato, es decir, 1 año, el arrendatario desistiera del mismo, deberá avisar al arrendador con una antelación mínima de treinta días, y no tendrá que indemnizar a la Parte Arrendadora con ninguna cantidad.TERCERA. RENTA DEL ARRENDAMIENTOLas Partes han acordado que la renta será de QUINIENTOS  euros  (500 €) por cada período siguiente: por mes. La obligación de la Parte Arrendataria de pagar dicha renta nace a partir del momento de la firma del presente Contrato.  El precio pactado de renta incluye el IVA (Impuesto sobre el Valor Añadido). Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que la renta incluye Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación.  El pago de la Renta fijada se abonará por meses anticipados entre los cinco (5) primeros días de cada mes.  Las partes acuerdan que el pago de la renta será mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): ES3514653634231235986175 de la entidad: BBVA, y cuyo titular es: Antonio Alarcón Marrero. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la Parte Arrendadora entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.  El impago de la renta por la Parte Arrendataria será causa de resolución del contrato. En ese caso, la Parte Arrendataria deberá restituir en perfecto estado la vivienda arrendada a la Parte Arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas. Las partes acuerdan que la renta será objeto de revisión, a partir del primer año de contrato, y será revisada: anualmente. Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice General Nacional del Sistema de Precios al Consumo (IPC). Esta actualización se efectuará de forma automática, comunicando previamente por parte del arrendador a la arrendataria la cantidad diferencial. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia. El cobro de la renta cuyo precio se haya actualizado será exigible en la cuota, o preiodicidad correspondiente tras la notificación expresa y por escrito de dicha actualización. El retraso o impago de la nueva renta no supondrá la renuncia a la misma.CUARTA. GASTOS GENERALES Y SUMINISTROSLa contratación de servicios y suministros, tales como, luz, agua e impuestos correrán a cargo de la Parte Arrendadora. La Parte Arrendadora, también se hará responsable de contratar los siguientes servicios: teléfono e internet.Igualmente, el pago de todos los servicios y suministros individualizados será por cuenta y a cargo de la Parte Arrendataria. La Parte Arrendataria se compromete al abono de estos gastos, conociendo y aceptando que el importe de los mismos no ha sido tomado en consideración al fijar el importe de la renta. Dichos gastos los pagará la Parte Arrendataria a la Parte Arrendadora en la misma forma prevista para la renta. La Parte Arrendadora entregará el recibo correspondiente por este concepto a la Parte Arrendataria después del pago. La Parte Arrendataria no pagará en ningún caso menos de 50 euros mensuales. La Parte Arrendataria no pagará en ningún caso más de 70 euros mensuales. Todos los gastos de Comunidad correrán a cargo de ambas Partes. En concreto, a la Parte Arrendataria le corresponderá abonar un 10 % de los mismos El importe de los gastos de Comunidad no está incluido en la renta. Siendo que la Parte Arrendataria tendrá que abonarlos por separado a la Parte Arrendadora, que a su vez está obligada a entregar recibo a la Parte Arrendataria en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la Parte Arrendataria.  Los gastos ordinarios de Comunidad para la vivienda actualmente ascienden a la cantidad de VEINTE euros  ( 20 €) mensuales.  Los gastos extraordinarios de Comunidad que correspondan a la vivienda serán por cuenta y a cargo de ambas Partes. En concreto, a la Parte Arrendataria le corresponderá abonar un DIEZ por ciento (10 %) de los mismos.El Impuesto sobre Bienes Inmuebles (IBI) que corresponda a la vivienda será por cuenta y a cargo de la Parte Arrendadora en su totalidad. El importe de los gastos de limpieza de vivienda y zonas comunes no está incluido dentro en la renta, siendo que la Parte Arrendataria tendrá que abonarlos. Estos gastos de limpieza ascenderán a CIEN euros  (100 €) para la duración total del contrato de arrendamiento. Siendo que la Parte Arrendataria tendrá que abonarlos por separado a la Parte Arrendadora, ésta, a su vez está obligada a entregar recibo a la Parte Arrendataria en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la Parte Arrendataria. Las Partes acuerdan que dicho pago retribuirá el siguiente servicio de limpieza: Al finalizar la estancia una persona acudirá a limpiar la vivienda.QUINTA.- FIANZALas partes acuerdan un importe de QUINIENTOS  euros  (500 €) en concepto de fianza, que la Parte Arrendataria entrega en este acto a la Parte Arrendadora. Sirva el presente documento la más formal y fiel carta de pago que en derecho corresponda.  Una vez la Parte Arrendadora haya comprobado que la  vivienda se encuentra en perfecto estado y conservación, el importe correspondiente a la fianza será devuelto a la Parte Arrendataria. En el caso de que existieran deudas o cantidades pendientes de abono, o bien, se hubiere ocasionado desperfectos en la vivienda, así como en el mobiliario o los enseres de la misma, debido a su mal uso, será descontado de la fianza el importe correspondiente necesario para reparar los desperfectos ocasionados.Sin perjuicio de lo convenido en las estipulaciones precedentes, garantiza el total y exacto cumplimiento de todas y cada una de las obligaciones contraídas por el arrendatario: Juan Camejo Alarcón, con NIE núm. X8394817R y domicilio en Calle Canarias 7, Lanzarote, España; Juan Camejo Alarcón, con NIE núm. X8394817R y domicilio en Calle Canarias 7, Lanzarote, España; en calidad de fiadora de la Parte Arrendataria, convirtiéndose en suyas las obligaciones de ésta a los efectos previstos en el Código Civil. Asimismo, el FIADOR renuncia a los beneficios de orden y excusión y a lo dispuesto en el artículo 1851 del Código Civil.SEXTA. OBRASLas partes acuerdan que no está permitido realizar obras sin el previo consentimiento expreso y por escrito de la Parte Arrendadora. La Parte Arrendataria tampoco podrá realizar obras que provoquen una disminución en la estabilidad o seguridad de la vivienda o que contravengan las normas de la Comunidad o  la normativa urbanística.En caso de que la Parte Arrendataria realizase obras sin el permiso o consentimiento de la Parte Arrendadora, y sin perjuicio de la facultad de resolver el contrato por parte del arrendador, éste podrá exigir a la arrendataria que reponga las cosas al estado anterior. Si al contrario, las obras se hubieran realizado con el permiso o consentimiento del arrendador, éstas quedarán en beneficio de la vivienda, sin que la Parte Arrendataria pueda reclamar indemnización alguna, salvo que las partes hubieran dispuesto algo distinto a lo ahora convenido.La Parte Arrendadora se compromete a hacer las reparaciones necesarias para el buen uso de lo arrendado, a fin de que se encuentre siempre en perfectas condiciones de funcionamiento, asumiendo la totalidad de los gastos que fueren necesarios para tal efecto sin modificar, o elevar la cuantía pactada de renta. Igualmente está obligada a requerir a la Comunidad de Propietarios, a instancias de la Parte Arrendataria, para la realización de las obras de reparación o adecuación que puedan necesitar los elementos comunes.   Sin embargo, las pequeñas reparaciones que exija el desgaste por el uso ordinario de la vivienda serán a cargo de la Parte Arrendataria.SÉPTIMA.- NORMAS DE LA COMUNIDAD Y NORMAS DE CONVIVENCIA.Queda expresamente prohibido el acceso y estancia de animales domésticos o no domésticos en la vivienda objeto de arrendamiento. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.Estando ubicada la vivienda en un inmueble organizado en una Comunidad de Propietarios, la Parte Arrendataria se obliga durante toda la vigencia del Contrato a: no contravenir los buenos usos de vecindad, cumplir las normas contenidas en los estatutos de la Comunidad y de la policía urbana, así como evitar molestar a vecinos con ruidos, fiestas, música, etc., que contravengan las Ordenanzas Municipales. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.OCTAVA. SEGUROSLa Parte Arrendadora tiene contratado un seguro de: alquiler de propietarios, en la compañía aseguradora: Mapfre, y cuyo número de póliza es el siguiente: 123123QWE. No obstante, la PARTE ARRENDADORA se compromete a contratar un seguro de la siguiente clase: responsabilidad civil. Este seguro tendrá como beneficiaria a la Parte Arrendadora, y tener una cobertura mínima igual a DIEZ MIL  euros  (10000 €). Este seguro se mantendrá durante toda la vigencia del presente Contrato .NOVENA. DERECHO DE ADQUISICIÓNLa Parte Arrendataria tendrá derecho de adquisición preferente, tanteo, o retracto, sobre la vivienda, en caso de que la Parte Arrendadora decidiera enajenar el inmueble. Todo ello de acuerdo con lo dispuesto en los artículos 25 y siguientes de la Ley de Arrendamientos Urbanos que se encuentre vigente en el momento de formalización del presente contrato.DÉCIMA. SUBARRIENDO, SUBROGACIÓN Y CESIÓNQueda permitido la cesión de la vivienda o su subarriendo ya sea total o parcial. La Parte Arrendataria se compromete a poner en conocimiento de la Parte Arrendadora esta situación, junto con el acuerdo o contrato correspondiente con, al menos, DOS (2) días de antelación a la formalización del acuerdo de subarriendo o cesión, de forma expresa y por escrito. En caso de cesión, el cesionario se subrogará en la posición de la Parte Arrendataria frente a la Parte Arrendadora. En caso de subarriendo, la Parte Arrendataria continuará siendo responsable del cumplimiento del Contrato para con la Parte Arrendadora, y se deberán respetar una serie de condiciones: a) El subarriendo, respetando el objeto de este Contrato, será de la vivienda. b) El subarriendo no podrá tener en ningún caso una duración superior a la duración de este contrato de arrendamiento.A través del presente contrato que si la duración del contrato de arrendamiento fuera superior a cinco años, las partes acuerdan que no habrá lugar a la subrogación en caso de fallecimiento de la Parte Arrendataria.DECIMOPRIMERA. RESOLUCIÓN DEL CONTRATOEl contrato podrá ser resuelto por cualquiera de las partes siempre que concurra alguna de las siguientes circunstancias:a) por el incumplimiento de las cláusulas recogidas en el presente contrato.b) impago de la renta, cantidades asimiladas o fianzas y sus correspondientes actualizaciones.c) realización de actividades molestas, insalubres, nocivas, peligrosas, y/o dar un uso distinto al inicialmente pactado.d) realización de obras sin consentimiento, o producción de daños dolosos.e) el incumplimiento de las normas de convivencia establecidas por el presente Contrato; yf) o cualquier otra circunstancia de las establecidas en el presente contrato.El incumplimiento por cualquiera de las Partes de las obligaciones del presente Contrato dará derecho a promover la resolución del Contrato de acuerdo con lo dispuesto en el artículo 1124 del Código Civil, así como a solicitar una indemnización por los daños y perjuicios ocasionados.DECIMOSEGUNDA. FIN DEL CONTRATO DE ARRENDAMIENTOLlegada la fecha de finalización del Contrato, la Parte Arrendataria deberá entregar a la Parte Arrendadora las llaves de la vivienda. Si la Parte Arrendataria, no hiciera entrega de la vivienda en el momento correspondiente, como penalización, deberá entregar el doble de la renta diaria existente al momento de la finalización del Contrato o prórroga por cada día de retraso, además de todos los gastos directos e indirectos que dicho retraso genere.DECIMOTERCERA. ELEVACIÓN A PÚBLICO Y REGISTRO DE LA PROPIEDADCualquiera de las partes podrá elevar a documento público el presente contrato, así como inscribirlo en el Registro de la Propiedad en el que se encuentre inscrita la vivienda, sin necesidad de autorización de la otra parte. Los gastos generados deberán ser asumidos por la parte interesada. Se repartirían dichos gastos a partes iguales siempre que ambas partes estuvieren interesadas en elevar el contrato a documento público y proceder a su posterior inscripción en el Registro de la Propiedad.DECIMOCUARTA. NOTIFICACIONESLa Parte Arrendataria podrá comunicarse con la Parte Arrendadora a través de: abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.comLa Parte Arrendadora podrá comunicarse con la Parte Arrendataria a través de: abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.comCada una de las Partes puede, por medio de notificación escrita enviada a la otra Parte, cambiar la dirección a la que deban mandarse cualesquiera comunicaciones.DECIMOQUINTA. INTEGRIDAD DEL CONTRATO Y ANULABILIDADEste Contrato deja sin efecto todo acuerdo, entendimiento, compromiso y/o negociación que se hubiese desarrollado previamente entre las Partes.Asimismo, las Partes reconocen que los documentos anexos y/o adjuntos al presente Contrato forman parte o integran el mismo, a todos los efectos legales.DECIMOSEXTA. LEGISLACIÓN APLICABLELas Partes reconocen quedar obligadas por el presente Contrato así como sus correspondientes anexos, y sus efectos jurídicos y se comprometen a su cumplimiento de buena fe.Todo litigio relativo al presente contrato será sometido a la legislación española, especialmente a los previsto en la Ley de Arrendamientos Urbanos y supletoriamente en el Código Civil. DECIMOSÉPTIMA. SUPUESTOS DE DISCREPANCIA ENTRE LAS PARTESPara cualquier litigio que surja entre las partes de la interpretación, o cumplimiento del presente contrato, éstas, se someterán a los Juzgados y Tribunales competentes, según lo establecido en los artículos 50 y siguientes de la Ley  1/2000 de 7 de enero, de Enjuiciamiento Civil.Y en señal de acuerdo con todo lo que antecede las partes firman el presente contrato de arrendamiento de habitación por duplicado y a un solo efecto en el fecha y lugar arriba indicadosLA PARTE ARRENDADORA                                          LA PARTE ARRENDATARIA...........................................                                                        ...........................................________                                                                                   ________';


export default {
    steps,
    outputExpected,
    outputExpectedAfterPayment,
    id: 'contrato-arrendamiento-vivienda'
}