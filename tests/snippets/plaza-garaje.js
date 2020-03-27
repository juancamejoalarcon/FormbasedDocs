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
        value: 'Paseo de las Yeserías 11, 28005, Madrid, España',
        pregunta: 'Dirección completa de la localización...'
    },
    {
        type: 'text',
        value: 'sótano 1, plaza de garaje número 24',
        pregunta: 'Información adicional (número d...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: 'Número de vehículos que podrá ap...'
    },
    {
        type: 'text',
        value: 'un coche y dos motos',
        pregunta: 'Indique los vehículos que podrán aparcar...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '6 meses y 15 días',
        pregunta: 'Indique la duración del...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: 'Fecha de comienzo del alquiler y en el que el arrrendatario (inquilino) po...'
    },
    {
        type: 'date',
        value: '2020-02-12'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'Indique si existe un horario de uso para el inquilino...'
    },
    {
        type: 'text',
        value: 'de 9:00 a 18:00',
        pregunta: 'Horario de uso de la plaza de garaje'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: '¿Una vez haya finalizado el plazo...'
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
        pregunta: '¿En función de qué medido...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'En caso de que el arrendatario (inquilino), incumpla alguna de las obligaciones que se deriva...'
    },
    {
        type: 'number',
        value: '100',
        pregunta: 'Importe en euros del pago total que se hará...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'En caso de que el arrendatario (inquilino), incumpla...'
    },
    {
        type: 'range',
        value: '1'
    },
    {
        type: 'text',
        value: 'Antonio Alarcón Marrero',
        pregunta: 'Nombre completo o denominación social ...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Tipo de documento de identifi...'
    },
    {
        type: 'text',
        value: '54113125J',
        pregunta: 'Número del document...'
    },
    {
        type: 'text',
        value: 'Paseo de las Yeserías 11',
        pregunta: 'Dirección del lugar donde reside el fiad...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Subarrendamiento) El arrend...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: '(Derecho de adquisición preferente) En caso de...'
    },
];

const outputExpected = 'Contrato de alquiler de plaza de garajeEn Madrid, a  12 de febrero de 2020REUNIDOSDe una parte, Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, NIE núm. 54113125J, y en calidad de representante legal;   Juan Camejo Alarcón, mayor de edad, con domicilio en Urbanización Lorem ipsum dolor sit, 138 6ºH, Pasaporte núm. 71928721Q, y en calidad de apoderado;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234. Antonio Banderas, mayor de edad, con domicilio en Alameda Lorem, 56B, DNI núm. 93066379F, y en calidad de representante legal;   Brad Pitt, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, Pasaporte núm. Y1841513D, y en calidad de apoderado total;   actuando en nombre y representación de: Indra Sistemas, S.A, con domicilio en C. Comercial Lorem ipsum dolor, 3B 11ºA,  C.I.F/N.I.F número A18313189, e inscrita en: Registro Mercantil de Albacete  con la siguiente información: Tomo 100, folio 20, hoja SE-999.Alberto Sabina Fajardo, mayor de edad, y con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y actuando en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, con domicilio en Cañada Lorem ipsum dolor, 174 8ºD, NIE número: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de Stalin Moreno, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Como parte ARRENDADORA.De otra parte, Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, NIE núm. 54113125J, y en calidad de representante legal;   Juan Camejo Alarcón, mayor de edad, con domicilio en Urbanización Lorem ipsum dolor sit, 138 6ºH, Pasaporte núm. 71928721Q, y en calidad de apoderado;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234. Antonio Banderas, mayor de edad, con domicilio en Alameda Lorem, 56B, DNI núm. 93066379F, y en calidad de representante legal;   Brad Pitt, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, Pasaporte núm. Y1841513D, y en calidad de apoderado total;   actuando en nombre y representación de: Indra Sistemas, S.A, con domicilio en C. Comercial Lorem ipsum dolor, 3B 11ºA,  C.I.F/N.I.F número A18313189, e inscrita en: Registro Mercantil de Albacete  con la siguiente información: Tomo 100, folio 20, hoja SE-999.Alberto Sabina Fajardo, mayor de edad, y con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y actuando en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, con domicilio en Cañada Lorem ipsum dolor, 174 8ºD, NIE número: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de Stalin Moreno, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Como parte ARRENDATARIA.Las partes, ARRENDADORA y ARRENDATARIA, se reconocen recíprocamente capacidad legal suficiente para otorgar el presente contrato, y manifiestan haber acordado formalizar en este documento un CONTRATO DE ARRENDAMIENTO DE PLAZA DE GARAJE, que se regirá con arreglo a las siguientes estipulaciones.EXPONENI. Que la parte ARRENDADORA es propietaria de pleno dominio de la plaza de garaje situada en Paseo de las Yeserías 11, 28005, Madrid, España, objeto de este contrato de alquiler, con los siguientes datos identificativos: sótano 1, plaza de garaje número 24.II. Que la parte ARRENDADORA está interesada en ceder en arrendamiento la plaza de garaje anteriormente descrita y la parte ARRENDATARIA está interesada en arrendarla. Ambas partes otorgan el presente contrato bajo los términos y condiciones que se regularán a continuación. CLÁUSULASPRIMERA. USO DE LA PLAZA DE GARAJELa plaza de garaje arrendada se destinará a aparcar los siguientes vehículos: un coche y dos motos. Queda expresamente prohibido ocupar dicha plaza con otro objeto. SEGUNDA. DURACIÓN Y PRÓRROGASLas partes pactan libremente que la duración del presente arrendamiento de plaza de garaje será de: 6 meses y 15 días comenzando a contar a partir del 12 de febrero de 2020. El inquilino podrá hacer uso de la plaza en el siguiente horario: de 9:00 a 18:00.El contrato podrá prorrogarse posteriormente por el mismo plazo salvo que la parte ARRENDATARIA manifieste al arrendador, con un mínimo de treinta días de antelación,  a la fecha de terminación de este contrato o cualquiera de sus prórrogas, su voluntad de no renovarlo.TERCERA. RENTA DEL ARRENDAMIENTOLas Partes han acordado que la renta será de QUINIENTOS  euros  (500 €) por cada período siguiente: por mes. La obligación de la parte ARRENDATARIA de pagar dicha renta nace a partir del momento de la firma del presente Contrato.  El precio pactado de renta incluye el IVA (Impuesto sobre el Valor Añadido). Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que la renta incluye Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación.  El pago de la Renta fijada se abonará por meses anticipados entre los cinco (5) primeros días de cada mes.  Las partes acuerdan que el pago de la renta será mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): ES3514653634231235986175 de la entidad: BBVA, y cuyo titular es: Antonio Alarcón Marrero. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.  El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la habitación arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas. Las partes acuerdan que la renta será objeto de revisión, a partir del primer año de contrato, y será revisada: anualmente. Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice General Nacional del Sistema de Precios al Consumo (IPC). Esta actualización se efectuará de forma automática, comunicando previamente por parte del arrendador a la arrendataria la cantidad diferencial. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia. El cobro de la renta cuyo precio se haya actualizado será exigible en la cuota, o preiodicidad correspondiente tras la notificación expresa y por escrito de dicha actualización. El retraso o impago de la nueva renta no supondrá la renuncia a la misma.CUARTA. RESOLUCIÓN DEL CONTRATOEl contrato podrá ser resuelto por cualquiera de las partes siempre que concurra alguna de las siguientes circunstancias:a) por el incumplimiento de las cláusulas recogidas en el presente contrato.b) impago de la renta, cantidades asimiladas o fianzas y sus correspondientes actualizaciones.c) realización de actividades molestas, insalubres, nocivas, peligrosas, y/o dar un uso distinto al inicialmente pactado.d) realización de obras sin consentimiento, o producción de daños dolosos.e) incumplimiento de las normas de convivencia establecidas por la Comunidad de Propietarios por la parte ARRENDATARIAQUINTA.- FIANZALas partes acuerdan un importe de CIEN euros  (100 €) en concepto de fianza, que la parte ARRENDATARIA entrega en este acto a la parte ARRENDADORA. Sirva el presente documento la más formal y fiel carta de pago que en derecho corresponda.  Una vez la parte ARRENDADORA haya comprobado que la  plaza de garaje se encuentra en perfecto estado y conservación, el importe correspondiente a la fianza será devuelto a la parte ARRENDATARIA. En el caso de que existieran deudas o cantidades pendientes de abono, o bien, se hubiere ocasionado desperfectos en la plaza de garaje, debido a su mal uso, será descontado de la fianza el importe correspondiente necesario para reparar los desperfectos ocasionados.Sin perjuicio de lo convenido en las estipulaciones precedentes, garantiza el total y exacto cumplimiento de todas y cada una de las obligaciones contraídas por el arrendatario: Antonio Alarcón Marrero, con NIE núm. 54113125J y domicilio en Paseo de las Yeserías 11; en calidad de fiadora de la parte ARRENDATARIA, convirtiéndose en suyas las obligaciones de ésta a los efectos previstos en el Código Civil. Asimismo, el FIADOR renuncia a los beneficios de orden y excusión y a lo dispuesto en el artículo 1851 del Código Civil.SEXTA. OBRASLa parte ARRENDADORA se compromete a hacer las reparaciones necesarias para el buen uso de lo arrendado, a fin de que se encuentre siempre en perfectas condiciones de funcionamiento, asumiendo la totalidad de los gastos que fueren necesarios para tal efecto sin modificar, o elevar la cuantía pactada de renta.Se prohíbe expresamente a la parte ARRENDATARIA aparcar más de un vehículo,  a no hacer ningún tipo de obra o modificación de la plaza de garaje, ni la instalación de ningún mecanismo de cierre, soporte de motos o bicicletas, etc.SÉPTIMA. DERECHO DE ADQUISICIÓNLas partes reconocen el derecho de adquisición preferente o tanteo y retracto de la PARTE ARRENDATARIA sobre la plaza de garaje.OCTAVA. SUBARRIENDO, SUBROGACIÓN Y CESIÓNQueda prohibido la cesión de la plaza de garaje o su subarriendo ya sea total o parcial.NOVENA. NOTIFICACIONESLa parte ARRENDATARIA podrá comunicarse con la parte ARRENDADORA a través de: abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.comLa parte ARRENDADORA podrá comunicarse con la parte ARRENDATARIA a través de: abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.comCada una de las Partes puede, por medio de notificación escrita enviada a la otra Parte, cambiar la dirección a la que deban mandarse cualesquiera comunicaciones.DÉCIMA. ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------DECIMOSÉPTIMA. ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------LA PARTE ARRENDADORA                                          LA PARTE ARRENDATARIA...........................................                                                        ...........................................________                                                                                   ________'