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
        type: 'number',
        value: '3',
        pregunta: 'Indique el número de habitaciones que tiene la viv...'
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
        type: 'number',
        value: '25',
        pregunta: 'Superficie útil de la habitación que...'
    },
    {
        type: 'textarea',
        value: 'La habitación que se encuentra enfrente del aseo.',
        pregunta: 'Haga una descripción de la habitación que se va a al...'
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
        type: 'radioB',
        value: '1'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: 'Uso que se le va a dar a la vi...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: '¿El arrendador está inscrito en el Registro de Turismo'
    },
    {
        type: 'select',
        value: '8'
    },
    {
        type: 'text',
        value: '54357',
        pregunta: 'Número de inscripción en el Registro de Turism...'
    },
    {
        type: 'text',
        value: 'El arrendatario no podrá usar el trastero ya que este es de uso personal del arrendador',
        pregunta: 'Existe alguna zona de la vivienda que el arrendatario (inquilino)...'
    },
    {
        type: 'radioB',
        value: '1'
    },
    {
        type: 'text',
        value: 'dos meses',
        pregunta: 'Indique la duración del contrato...'
    },
    {
        type: 'date',
        value: '2020-02-15'
    },
    {
        type: 'text',
        value: '9:00',
        pregunta: 'Hora de comienzo del...'
    },
    {
        type: 'date',
        value: '2020-04-15',
        pregunta: 'Fecha de finalización...'
    },
    {
        type: 'text',
        value: '12:00',
        pregunta: 'Hora de finalización del...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: '¿Al finalizar el contrato podrá este prorrogars'
    },
    {
        type: 'text',
        value: '1 mes',
        pregunta: 'Duración de los períodos...'
    },
    {
        type: 'text',
        value: '1 semana',
        pregunta: '¿Con cuánto tiempo de antelación deberán avisars...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'Las prórrogas del cont'
    },
    {
        type: 'text',
        value: '6 meses',
        pregunta: 'Máximo de tiempo por el que podrán...'
    },
    {
        type: 'radioC',
        value: '3',
        pregunta: 'Tanto el arrendador (propietario) como el arrendatario (inquilino)'
    },
    {
        type: 'number',
        value: '10',
        pregunta: 'Multa a pagar por la parte que pida a la otra...'
    },
    {
        type: 'text',
        value: 'una semana',
        pregunta: 'Máximo de tiempo por el que podrán...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'El precio del alquiler se'
    },
    {
        type: 'text',
        value: 'por día',
        pregunta: '¿Con que periodicidad...'
    },
    {
        type: 'number',
        value: '20',
        pregunta: 'Importe que se paga por la periodicidad...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: 'El pago del alquiler se realiza'
    },
    {
        type: 'text',
        value: 'al entregar las llaves del piso',
        pregunta: 'Manera en la que se efect...'
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
        value: '2',
        pregunta: '¿Se establece una cláusula que recoja actualizaci'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'Además del precio del alquiler de la habitación, ¿el arrendatiario (inquilino) pagar...'
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
        value: 'Al finalizar la estancia una persona acudirá a limpiar la habitación',
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
        value: 'Calle Melosa 4, Tenerife, España',
        pregunta: 'Número del documento seleccionad...'
    },
    {
        type: 'text',
        value: 'Silvia Camejo Alarcón',
        pregunta: 'Nombre completo o denominación s...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'Tipo de documento de id...'
    },
    {
        type: 'text',
        value: '95509715F',
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
        pregunta: '¿Se establecen unas normas de ...'
    },
    {
        type: 'textarea',
        value: 'Cada semana se deberán limpiar las zonas comunes de la vivienda',
        pregunta: 'acerca de la limpieza ...'
    },
    {
        type: 'textarea',
        value: '',
        pregunta: 'acerca de la basura...'
    },
    {
        type: 'textarea',
        value: 'No se podrá hacer ruido en las zonas comunes a partir de las 11 de la noche hasta las 7 de la mañana',
        pregunta: 'acerca de los horarios...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'Queda prohibido meter o tener mascotas...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: '¿Queda prohibido fumar...'
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
        value: '1',
        pregunta: '(Subarrendamiento) El ar...'
    },
    {
        type: 'number',
        value: '',
        pregunta: 'Si lo desea indique la cantidad (en euros) de la mul...',
        finished: true
    },
];

const outputExpected = 'Contrato de arrendamiento de habitaciónEn Madrid, a  12 de febrero de 2020REUNIDOSDe una parte, Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, NIE núm. 54113125J, y en calidad de representante legal;   Juan Camejo Alarcón, mayor de edad, con domicilio en Urbanización Lorem ipsum dolor sit, 138 6ºH, Pasaporte núm. 71928721Q, y en calidad de apoderado;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234. Antonio Banderas, mayor de edad, con domicilio en Alameda Lorem, 56B, DNI núm. 93066379F, y en calidad de representante legal;   Brad Pitt, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, Pasaporte núm. Y1841513D, y en calidad de apoderado total;   actuando en nombre y representación de: Indra Sistemas, S.A, con domicilio en C. Comercial Lorem ipsum dolor, 3B 11ºA,  C.I.F/N.I.F número A18313189, e inscrita en: Registro Mercantil de Albacete  con la siguiente información: Tomo 100, folio 20, hoja SE-999.Alberto Sabina Fajardo, mayor de edad, y con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y actuando en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, con domicilio en Cañada Lorem ipsum dolor, 174 8ºD, NIE número: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de Stalin Moreno, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Como parte ARRENDADORA.De otra parte, Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, NIE núm. 54113125J, y en calidad de representante legal;   Juan Camejo Alarcón, mayor de edad, con domicilio en Urbanización Lorem ipsum dolor sit, 138 6ºH, Pasaporte núm. 71928721Q, y en calidad de apoderado;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234. Antonio Banderas, mayor de edad, con domicilio en Alameda Lorem, 56B, DNI núm. 93066379F, y en calidad de representante legal;   Brad Pitt, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, Pasaporte núm. Y1841513D, y en calidad de apoderado total;   actuando en nombre y representación de: Indra Sistemas, S.A, con domicilio en C. Comercial Lorem ipsum dolor, 3B 11ºA,  C.I.F/N.I.F número A18313189, e inscrita en: Registro Mercantil de Albacete  con la siguiente información: Tomo 100, folio 20, hoja SE-999.Alberto Sabina Fajardo, mayor de edad, y con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y actuando en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, con domicilio en Cañada Lorem ipsum dolor, 174 8ºD, NIE número: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de Stalin Moreno, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Como parte ARRENDATARIA.Las partes, arrendadora y arrendataria, se reconocen recíprocamente capacidad legal suficiente para otorgar el presente contrato, y reunidos en la fecha del encabezamiento del presente escrito, manifiestan haber acordado formalizar en este documento un CONTRATO DE ARRENDAMIENTO DE HABITACIÓN en la vivienda que se especifica a continuación.EXPONENI. Que la PARTE ARRENDADORA es propietaria de una vivienda amueblada cuya superficie útil es de 200 metros cuadrados en: Paseo de las Delicias 12, Escalera 5, 2.º B, 38296, Tenerife, España. Dicha vivienda se encuentra formada por TRES (3) habitaciones y que, además, comprende:Una cocina, un salón, un garaje y un jardín de 10m2Esta vivienda está inscrita en el Registro de la Propiedad de: Madrid N. 34, con los siguientes datos: Tomo 1 Libro 377 Folio 204 Finca 2. Su referencia catastral es: 9872023 VH5797S 0001 WX. Se acompaña como Anexo I al presente contrato una copia del Certificado de Eficiencia Energética, según lo regulado en el Real Decreto 235/2013, de 5 de abril. También se acompaña al presente contrato, como Anexo II un inventario de bienes muebles, con el mobiliario que se encuentra en la vivienda. Este mobiliario está en estado de uso y buena conservación al momento de firmarse este documento.En adelante, esta será denominada la "Vivienda".II. Una de las habitaciones de la Vivienda será objeto de arrendamiento y cuenta con una superficie útil de 25 metros cuadrados. La habitación a la que se hace referencia es la siguiente:La habitación que se encuentra enfrente del aseo.La habitación está amueblada con el siguiente mobiliario, enseres y objetos: Una cama, una mesa de escritorio, una mesilla de noche y un armarioEn adelante, la misma será denominada la "Habitación".III. Las partes conocen el estado y conservación de la habitación objeto de arrendamiento, así como su mobiliario y enseres. Ambas partes están conformes en que si hubiera diferencia entre los metros cuadrados o superficie real de la habitación y la superficie descrita en el presente contrato, ésto no afectará al precio de arrendamiento, que se mantendrá invariable.IV. Que la parte ARRENDATARIA hará uso de una habitación como vivienda temporal por motivos de vacaciones, turismo u ocio. A través del presente contrato se pone en conocimiento de la parte ARRENDATARIA que, de acuerdo con la normativa autonómica, la vivienda se encuentra inscrita en el Registro de Turismo o en la entidad correspondiente de la Comunidad Autónoma: Cataluña, cuyo Código de Inscripción es: 54357V. Que la PARTE ARRENDADORA ostenta la facultad legal suficiente para ceder en arrendamiento, en todo, o en parte, de la vivienda descrita en el expositivo anterior, y la PARTE ARRENDATARIA, está interesada en el arrendamiento de la Habitación para el uso mencionado en el Expositivo anterior.VI. En virtud de lo expuesto, ambas partes acuerdan otorgar el presente Contrato de CONTRATO DE ARRENDAMIENTO DE HABITACIÓN,ESTIPULACIONESPRIMERA. OBJETOMediante este contrato la parte ARRENDADORA acuerda ceder el arrendamiento de la habitación de la vivienda descrita en el expositivo I del presente contrato, a la parte ARRENDATARIA a cambio de un precio cierto. Dicha habitación es propiedad de la parte ARRENDADORA.La parte ARRENDATARIA podrá hacer uso de las zonas comunes de la vivienda de forma diligente y respetando las normas de convivencia, sin realizar actividades insalubres, molestas, o nocivas para el resto de los inquilinos. Exceptuando las zonas comunes, el presente contrato de arrendamiento sólo da derecho a utilizar el dormitorio arrendado, por lo que la parte ARRENDATARIA no podrá utilizar el resto de dormitorios de la Vivienda ni las siguientes zonas de la misma: El arrendatario no podrá usar el trastero ya que este es de uso personal del arrendador. SEGUNDA. DESTINO Y ESTADO DE CONSERVACIÓNLa habitación arrendada será la vivienda temporal de la parte ARRENDATARIA. Dicho uso será por motivos de vacaciones, ocio, o turismo. Y, por ello, la parte ARRENDATARIA, deja constancia, a través del presente documento, que la habitación arrendada no constituye su residencia habitual sino que cumple un uso de segunda residencia.El uso de la habitación arrendada y pactado en el presente contrato lo es con carácter exclusivo, es decir, no se podrá modificar el uso pactado. Además, será obligación de la parte ARRENDATARIA no realizar actividades o actuaciones contrarias a los estatutos de la comunidad, o de la vivienda, o realizar actividades molestas, nocivas, insalubres o ilegales, que puedan afectar a terceros, a la habitación, o a la vivienda.La realización de cualquier de estas prohibiciones facultará al ARRENDADOR a resolver el contrato sin derecho alguno de indemnización a la parte ARRENDATARIA.La Habitación se pondrá a disposición de la PARTE ARRENDATARIA con la entrega de las llaves de acceso a la misma y a la Vivienda, la parte ARRENDATARIA la recibe en buen estado de uso y conservación, reconociendo haber visitado la habitación y las zonas comunes de la vivienda con carácter previo a la firma del presente contrato. Asimismo, manifiesta conocer las zonas de uso que se le conceden.La parte ARRENDATARIA ha visitado la habitación que arrienda incluyendo el mobiliario y los enseres que se encuentran en su interior comprobando que se corresponde con lo establecido en el Expositivo II del presente Contrato, la PARTE ARRENDATARIA declara que el mobiliario de las zonas comunes de la vivienda se corresponde con el detallado en el Anexo de inventario de bienes muebles incorporado al presente Contrato. La Habitación y las zonas comunes de la Vivienda estarán siempre en condiciones de habitabilidad.El mobiliario que se encuentra en el interior de la vivienda es propiedad de la parte ARRENDADORA, y deberá ser devuelto en el momento de finalización del contrato en perfecto estado de conservación, salvo aquel desgaste generado por el normal uso de los mismos.TERCERA. DERECHO DE USO Y ACCESO A LA VIVIENDA POR LA PARTE ARRENDADORAManifiesta la parte ARRENDADORA que la vivienda también será su domicilio habitual, y por lo tanto, tendrá derecho al uso de la misma en las mismas condiciones que el ARRENDATARIO, exceptuando la habitación objeto de arrendamiento, que será de uso exclusivo de la parte ARRENDATARIA. La parte ARRENDADORA mantendrá el derecho a acceder libremente a las zonas comunes de la vivienda y al resto de habitaciones que no se encuentren arrendadas.Si la parte ARRENDATARIA incumpliere lo dispuesto anteriormente, la parte ARRENDADORA podrá resolver el contrato de arrendamiento de habitación, debiendo cubrir la parte ARRENDATARIA aquellos daños y perjuicios ocasionados, incluyendo la pérdida de beneficios por no poder arrendar el resto de las habitaciones.CUARTA. DURACIÓNEl arrendamiento se pacta por la temporada de: dos meses, teniendo su comienzo el día 15 de febrero de 2020, a las 9:00 horas. Por lo que el contrato quedará extinguido , el día 15 de abril de 2020, a las 12:00 horas.En caso de que llegare el último día del Contrato, si ninguna de las Partes hubiese notificado a la otra como mínimo con 1 semana de antelación, su voluntad de no renovar el presente Contrato, se entenderá que este entra en períodos sucesivos de prórroga automática. Estos períodos de prórroga serán de: 1 mes, y se prolongarán de forma sucesiva hasta alcanzar: 6 meses. Alcanzado este límite, el Contrato terminará de forma automática, es decir, sin necesidad de requerimiento alguno. En cualquiera de sus prorrogas, si alguna de las partes quisiera finalizar el contrato, podrá avisar a través de los medios previstos, como mínimo con 1 semana de antelación a la fecha de terminación de cualquiera de las prórrogas, su voluntad de no renovarlo.Finalizado el contrato o de sus prórrogas la PARTE ARRENDATARIA deberá dejar la Habitación y el resto de la Vivienda libre y limpia, sin objetos personales u otros enseres propios, y deberá ponerla a disposición de la PARTE ARRENDADORA con la entrega de las llaves de acceso a la misma y a la Vivienda. Todo ello será de aplicación a la finalización del contrato, salvo que las partes de mutuo acuerdo, pactaran otra cosa distinta.El desistimiento unilateral del contrato por alguna de las partes antes de su finalización conllevará el pago a la otra parte de indemnización correspondiente al DIEZ por ciento (10 %) de la renta total del arrendamiento que faltase por abonar hasta la finalización del contrato. En caso de desistimiento del contrato por cualquiera de las partes incumpliendo el preaviso pactado de: una semana de antelación, conllevará el pago de una indemnización por los daños y perjuicios generados.QUINTA. RENTA DEL ARRENDAMIENTOLas Partes han acordado que la renta será de VEINTE euros  (20 €) por cada período siguiente: por día. La obligación de la parte ARRENDATARIA de pagar dicha renta nace a partir del momento de la firma del presente Contrato.  El precio pactado de renta incluye el IVA (Impuesto sobre el Valor Añadido). Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que la renta incluye Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación.  El pago de la renta se realizará de la siguiente manera: al entregar las llaves del piso.  Las partes acuerdan que el pago de la renta será mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): ES3514653634231235986175 de la entidad: BBVA, y cuyo titular es: Antonio Alarcón Marrero. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.  El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la habitación arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas. SEXTA. GASTOS GENERALES Y SUMINISTROSLa contratación de servicios y suministros, tales como, luz, agua e impuestos correrán a cargo de la parte ARRENDADORA. La parte ARRENDADORA, también se hará responsable de contratar los siguientes servicios: teléfono e internet.El pago de servicios y suministro para uso individual de la parte ARRENDATARIA correrán a cargo de esta. El método de atribución a la PARTE ARRENDATARIA será el prorrateo de los gastos totales de la Vivienda entre el número de habitaciones de la misma que se encuentren ocupadas durante el período facturado. Los servicios y suministros que la parte ARRENDATARIA desee contratar para su uso individual deberán ser autorizados por la parte ARRENDADORA. La parte ARRENDADORA quedará obligada a entregar recibo a la parte ARRENDATARIA en el que se especifique los diferentes conceptos que componen los pagos efectuados para que la parte ARRENDATARIA proceda a su abono, si bien estos gastos no están previstos dentro de la renta. La parte ARRENDATARIA no pagará en ningún caso menos de 50 euros mensuales. La parte ARRENDATARIA no pagará en ningún caso más de 70 euros mensuales. Todos los gastos de Comunidad correrán a cargo de ambas Partes. En concreto, a la parte ARRENDATARIA le corresponderá abonar un 10 % de los mismos El importe de los gastos de Comunidad no está incluido en la renta. Siendo que la parte ARRENDATARIA tendrá que abonarlos por separado a la parte ARRENDADORA, que a su vez está obligada a entregar recibo a la parte ARRENDATARIA en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la parte ARRENDATARIA.  Los gastos ordinarios de Comunidad para la Vivienda actualmente ascienden a la cantidad de VEINTE euros  ( 20 €) mensuales.  Los gastos extraordinarios de Comunidad que correspondan a la Vivienda serán por cuenta y a cargo de ambas Partes. En concreto, a la parte ARRENDATARIA le corresponderá abonar un DIEZ por ciento (10 %) de los mismos.El Impuesto sobre Bienes Inmuebles (IBI) que corresponda a la Vivienda será por cuenta y a cargo de la parte ARRENDADORA en su totalidad. El importe de los gastos de limpieza de habitación y zonas comunes no está incluido en la renta. Siendo que la parte ARRENDATARIA tendrá que abonarlos. Estos gastos de limpieza ascenderán a CIEN euros  (100 €) para la duración total del Contrato de arrendamiento. Siendo que la parte ARRENDATARIA tendrá que abonarlos por separado a la parte ARRENDADORA, ésta, a su vez está obligada a entregar recibo a la parte ARRENDATARIA en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la parte ARRENDATARIA. Las Partes acuerdan que dicho pago retribuirá el siguiente servicio de limpieza: Al finalizar la estancia una persona acudirá a limpiar la habitación.SÉPTIMA.- FIANZALas partes acuerdan un importe de QUINIENTOS  euros  (500 €) en concepto de fianza, que la parte ARRENDATARIA entrega en este acto a la parte ARRENDADORA. Sirva el presente documento la más formal y fiel carta de pago que en derecho corresponda.  Una vez la parte ARRENDADORA haya comprobado que la habitación y el resto de la  vivienda se encuentran en perfecto estado y conservación, el importe correspondiente a la fianza será devuelto a la parte ARRENDATARIA. En el caso de que existieran deudas o cantidades pendientes de abono, o bien, se hubiere ocasionado desperfectos en la habitación o en el resto de la vivienda, así como en el mobiliario o los enseres de la misma, debido a su mal uso, será descontado de la fianza el importe correspondiente necesario para reparar los desperfectos ocasionados.Sin perjuicio de lo convenido en las estipulaciones precedentes, garantiza el total y exacto cumplimiento de todas y cada una de las obligaciones contraídas por el arrendatario: Juan Camejo Alarcón, con NIE núm. X8394817R y domicilio en Calle Melosa 4, Tenerife, España; Silvia Camejo Alarcón, con DNI núm. 95509715F y domicilio en Calle Canarias 7, Lanzarote, España; en calidad de fiadora de la parte ARRENDATARIA, convirtiéndose en suyas las obligaciones de ésta a los efectos previstos en el Código Civil. Asimismo, el FIADOR renuncia a los beneficios de orden y excusión y a lo dispuesto en el artículo 1851 del Código Civil.OCTAVA. OBRASLas partes acuerdan que no está permitido realizar obras sin el previo consentimiento expreso y por escrito de la parte ARRENDADORA. La parte ARRENDATARIA tampoco podrá realizar obras que provoquen una disminución en la estabilidad o seguridad de la Habitación, de la Vivienda o que contravengan las normas de la Comunidad o  la normativa urbanística.En caso de que la parte ARRENDATARIA realizase obras sin el permiso o consentimiento del la parte ARRENDADORA, y sin perjuicio de la facultad de resolver el contrato por parte del arrendador, éste podrá exigir a la arrendataria que reponga las cosas al estado anterior. Si al contrario, las obras se hubieran realizado con el permiso o consentimiento del arrendador, éstas quedarán en beneficio de la vivienda, sin que la parte arrendataria pueda reclamar indemnización alguna, salvo que las partes hubieran dispuesto algo distinto a lo ahora convenido.La parte ARRENDADORA se compromete a hacer las reparaciones necesarias para el buen uso de lo arrendado, a fin de que se encuentre siempre en perfectas condiciones de funcionamiento, asumiendo la totalidad de los gastos que fueren necesarios para tal efecto sin modificar, o elevar la cuantía pactada de renta. Igualmente está obligada a requerir a la Comunidad de Propietarios, a instancias de la parte ARRENDATARIA, para la realización de las obras de reparación o adecuación que puedan necesitar los elementos comunes. NOVENA.- NORMAS DE LA COMUNIDAD Y NORMAS DE CONVIVENCIA. Estando ubicada la Vivienda en un inmueble organizado en una Comunidad de Propietarios, la parte ARRENDATARIA se obliga durante toda la vigencia del Contrato a: no contravenir los buenos usos de vecindad, cumplir las normas contenidas en los estatutos de la Comunidad y de la policía urbana, así como evitar molestar a vecinos con ruidos, fiestas, música, etc., que contravengan las Ordenanzas Municipales. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.La parte ARRENDATARIA podrá hacer uso de las zonas comunes de la vivienda de forma diligente y respetando las normas de convivencia (tanto las que se recojan en este Contrato, así como en el documento relativo a dichas normas que se adjunta como Anexo), sin realizar actividades insalubres, molestas, o nocivas para el resto de los inquilinos y manteniendo unas buenas condiciones de orden e higiene. En cuanto a la limpieza de zonas comunes, la parte ARRENDATARIA se compromete a lo siguiente: Cada semana se deberán limpiar las zonas comunes de la vivienda.  En cuanto al uso de zonas de comunes, la parte ARRENDATARIA se compromete a respetar el siguiente horario: No se podrá hacer ruido en las zonas comunes a partir de las 11 de la noche hasta las 7 de la mañana. Queda expresamente prohibido el acceso y estancia de animales domésticos o no domésticos en la habitación objeto de arrendamiento, y en el resto de la vivienda. DÉCIMA. RESPONSABILIDADES10.1 Responsabilidad de la PARTE ARRENDADORALa parte ARRENDADORA  no se hace responsable de pérdidas o hurtos en las habitaciones, o en la vivienda. A tal efecto, todas las habitaciones cuentan con cerradura privada. La parte ARRENDADORA tampoco se hace responsables de los posibles daños que pudieran surgir en los dispositivos electrónicos enchufados a la red eléctrica de la vivienda.10.2 Responsabilidad de la PARTE ARRENDATARIALa parte ARRENDATARIA deberá cubrir, o reparar todo daño ocasionado en la habitación arrendada o en la vivienda durante el contrato y sus prórrogas. ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------DECIMOPRIMERA. SEGUROSLa parte ARRENDADORA tiene contratado un seguro de: alquiler de propietarios, en la compañía aseguradora: Mapfre, y cuyo número de póliza es el siguiente: 123123QWE. No obstante, la PARTE ARRENDADORA se compromete a contratar un seguro de la siguiente clase: responsabilidad civil. Este seguro tendrá como beneficiaria a la parte ARRENDADORA, y tener una cobertura mínima igual a DIEZ MIL  euros  (10000 €). Este seguro se mantendrá durante toda la vigencia del presente Contrato .DECIMOSEGUNDA. DERECHO DE ADQUISICIÓNLa parte ARRENDATARIA tendrá derecho de adquisición preferente, tanteo, o retracto, sobre la habitación arrendada y sobre la vivienda, en caso de que la parte ARRENDADORA decidiera enajenar el inmueble. Todo ello de acuerdo con lo dispuesto en los artículos 25 y siguientes de la Ley de Arrendamientos Urbanos que se encuentre vigente en el momento de formalización del presente contrato.DECIMOTERCERA. SUBARRIENDO Y CESIÓNQueda prohibido la cesión de la habitación o su subarriendo ya sea total o parcial.DECIMOCUARTA. RESOLUCIÓN DEL CONTRATOEl contrato podrá ser resuelto por cualquiera de las partes siempre que concurra alguna de las siguientes circunstancias:a) por el incumplimiento de las cláusulas recogidas en el presente contrato.b) impago de la renta, cantidades asimiladas o fianzas y sus correspondientes actualizaciones.c) realización de actividades molestas, insalubres, nocivas, peligrosas, y/o dar un uso distinto al inicialmente pactado.d) realización de obras sin consentimiento, o producción de daños dolosos.e) el incumplimiento de las normas de convivencia establecidas por el presente Contrato (así como el documento Anexo al que se hace referencia en la estipulación novena); yf) o cualquier otra circunstancia de las establecidas en el presente contrato.DECIMOQUINTA. FIN DEL CONTRATO DE ARRENDAMIENTOUna vez finalizado el Contrato o de la correspondiente prórroga o prórrogas en los términos de la estipulación cuarta, la PARTE ARRENDATARIA deberá entregar a la PARTE ARRENDADORA las llaves de acceso a la Habitación y a la Vivienda.En este momento, se comprobará que durante el Contrato de arrendamiento haya habido una correcta conservación de la Habitación, de la Vivienda y de su mobiliario.Si la parte ARRENDATARIA no hiciera entrega de la Habitación en el momento correspondiente, como penalización, deberá entregar el doble de la renta diaria existente al momento de la finalización del Contrato o prórroga por cada día de retraso, además de todos los gastos directos e indirectos que dicho retraso genere.DECIMOSEXTA.- ELEVACIÓN A PÚBLICOCualquiera de las partes podrá elevar a documento público el presente contrato, sin necesidad de autorización de la otra parte. Los gastos generados deberán ser asumidos por la parte interesada. Se repartirían dichos gastos a partes iguales siempre que ambas partes estuvieren interesadas en elevar el contrato a documento público.DECIMOSÉPTIMA. NOTIFICACIONESLa parte ARRENDATARIA podrá comunicarse con la parte ARRENDADORA a través de: abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.comLa parte ARRENDADORA podrá comunicarse con la parte ARRENDATARIA a través de: abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.comCada una de las Partes puede, por medio de notificación escrita enviada a la otra Parte, cambiar la dirección a la que deban mandarse cualesquiera comunicaciones.DECIMOOCTAVA. INTEGRIDAD DEL CONTRATO Y ANULABILIDAD------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------DECIMONOVENA. ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------VIGÉSIMA. --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Y en señal de acuerdo con todo lo que antecede las partes firman el presente contrato de arrendamiento de habitación por duplicado y a un solo efecto en el fecha y lugar arriba indicadosLA PARTE VENDEDORA                                                    LA PARTE COMPRADORA...........................................                                                        ...........................................________                                                                                   ________';


export default {
    steps,
    outputExpected,
    id: 'contrato-arrendamiento-habitacion'
}