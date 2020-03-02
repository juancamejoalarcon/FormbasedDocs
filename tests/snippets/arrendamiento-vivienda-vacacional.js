let steps = [
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