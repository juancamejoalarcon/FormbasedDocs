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
        type: 'select',
        value: '5'
    },
    {
        type: 'text',
        value: '123123YCT',
        pregunta: 'Número de inscripción en el Registro de...'
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
        type: 'radioB',
        value: '1',
        pregunta: '¿Desea incluir de forma anexa al contrato ...'
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
        type: 'number',
        value: '200',
        pregunta: 'precio total...'
    },
    {
        type: 'textarea',
        value: '40 euros por día, por 5 días',
        pregunta: 'Espicifique de forma detallada la descripc...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: '¿El precio del alquiler incluye IVA...'
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
        pregunta: 'Además del precio del alquiler de la vivienda, '
    },
    {
        type: 'number',
        value: '20',
        pregunta: 'Importe en euros del pago total q...'
    },
    {
        type: 'radioC',
        value: '4',
        pregunta: 'Además del precio del alquiler de la vivienda, '
    },
    {
        type: 'textarea',
        value: 'asdfasdf',
        pregunta: 'Describa a continuación en '
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Queda prohibido meter o...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Queda prohibido meter o...'
    },
];

const outputExpected = 'Contrato de arrendamiento de vivienda para uso turístico o vacacionalEn Madrid, a  12 de febrero de 2020REUNIDOSDe una parte, Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, NIE núm. 54113125J, y en calidad de representante legal;   Juan Camejo Alarcón, mayor de edad, con domicilio en Urbanización Lorem ipsum dolor sit, 138 6ºH, Pasaporte núm. 71928721Q, y en calidad de apoderado;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234. Antonio Banderas, mayor de edad, con domicilio en Alameda Lorem, 56B, DNI núm. 93066379F, y en calidad de representante legal;   Brad Pitt, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, Pasaporte núm. Y1841513D, y en calidad de apoderado total;   actuando en nombre y representación de: Indra Sistemas, S.A, con domicilio en C. Comercial Lorem ipsum dolor, 3B 11ºA,  C.I.F/N.I.F número A18313189, e inscrita en: Registro Mercantil de Albacete  con la siguiente información: Tomo 100, folio 20, hoja SE-999.Alberto Sabina Fajardo, mayor de edad, y con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y actuando en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, con domicilio en Cañada Lorem ipsum dolor, 174 8ºD, NIE número: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de Stalin Moreno, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Como parte ARRENDADORA.De otra parte, Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, NIE núm. 54113125J, y en calidad de representante legal;   Juan Camejo Alarcón, mayor de edad, con domicilio en Urbanización Lorem ipsum dolor sit, 138 6ºH, Pasaporte núm. 71928721Q, y en calidad de apoderado;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234. Antonio Banderas, mayor de edad, con domicilio en Alameda Lorem, 56B, DNI núm. 93066379F, y en calidad de representante legal;   Brad Pitt, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, Pasaporte núm. Y1841513D, y en calidad de apoderado total;   actuando en nombre y representación de: Indra Sistemas, S.A, con domicilio en C. Comercial Lorem ipsum dolor, 3B 11ºA,  C.I.F/N.I.F número A18313189, e inscrita en: Registro Mercantil de Albacete  con la siguiente información: Tomo 100, folio 20, hoja SE-999.Alberto Sabina Fajardo, mayor de edad, y con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y actuando en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, con domicilio en Cañada Lorem ipsum dolor, 174 8ºD, NIE número: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de Stalin Moreno, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Como parte ARRENDATARIA.Las partes, arrendadora y arrendataria, se reconocen recíprocamente capacidad legal suficiente para otorgar el presente contrato, y reunidos en la fecha del encabezamiento del presente escrito, manifiestan haber acordado formalizar un CONTRATO DE ARRENDAMIENTO VACACIONAL, O PARA USO TURÍSTICO sobre la vivienda que se especifica a continuación.EXPONENI. Que la Parte Arrendadora es propietaria en pleno dominio de una vivienda cuya superficie útil es de 200 metros cuadrados y que se encuentra ubicada en: Paseo de las Delicias 12, Escalera 5, 2.º B, 38296, Tenerife, España, y que comprende: Una cocina, un salón, un garaje y un jardín de 10m2A lo largo del presente escrito se denominará “la vivienda” al conjunto formado por la vivienda propiamente dicha y sus accesorios. Las partes declaran conocer y aceptar la superficie y composición de la vivienda, así como el estado en que se encuentra y otras características.Teniendo en cuenta que en el contrato de arrendamiento, la vivienda se arrienda de cuerpo cierto, si hubiera diferencia entre los metros cuadrados o superficie real de la vivienda y la superficie descrita en el presente contrato, esto no afectará a las estipulaciones pactadas en el presente contrato, y en concreto, no afectará al precio establecido de renta, que se mantendrá invariable.II. Junto con el presente contrato de arrendamiento se acompaña certificado de eficiencia energética de la vivienda arrendada, el cual es puesto a disposición de la Parte Arrendataria a los efectos legales oportunos.II. Mediante el presente contrato se pone en conocimiento de la Parte Arrendataria que la Parte Arrendadora se encuentra inscrita en el Registro General Turístico de la Comunidad autónoma de Canarias, conforme al Decreto 113/2015, de 22 de mayo, por el que se aprueba el Reglamento de las viviendas vacacionales de la Comunidad Autónoma de Canarias, y que su Código de Inscripción es el siguiente: 123123YCTIV. El arrendador está interesado en ceder en arrendamiento para uso por motivos relativos a vacaciones, turismo u ocio el inmueble anteriormente descrito, estando el arrendatario interesado en recibirlo bajo los términos y condiciones que se regularán en el presente contrato.ESTIPULACIONESPRIMERA. OBJETOLa Parte Arrendadora cede en arrendamiento el uso del inmueble descrito en el exponendo segundo del presente contrato a la Parte Arrendataria, quien lo adquiere con la finalidad de uso por temporada vacacional o como alojamiento turístico (quedando totalmente prohibido el uso para cualquier otro fin ya sea comercial o distinto al establecido en el presente contrato). El incumplimiento de esto será motivo de resolución del contrato.La vivienda se pondrá a disposición de la Parte Arrendataria con la entrega de llaves. En este acto ambas partes constatan que la entrega de la vivienda se hace en perfecto estado de uso y conservación, y deberá entregarse en la mismas condiciones al finalizar el contrato. Se cede en arrendamiento con el mobiliario que se detalla en el inventario, Anexo, del presente contrato. Junto al presente contrato se adjuntan fotografías de la vivienda a los efectos de dejar constancia del estado de la misma en el momento del arriendo.La vivienda y su mobiliario es propiedad de la Parte Arrendadora. El inmueble objeto de arrendamiento deberá reintegrarse a la extinción del contrato, en estado equivalente de conservación y funcionamiento a aquel en el momento de la suscripción del presente documento. SEGUNDA. DURACIÓNEl tiempo de vigencia del presente contrato de arrendamiento será el comprendido entre las siguientes fechas:- Entrada: el 15 de febrero de 2020, a partir de las: 9:00 (hora local)- Salida: el 15 de abril de 2020, a las: 12:00 (hora local)Finalizado el contrato la Parte Arrendataria deberá dejar la vivienda libre y limpia, sin objetos personales u otros enseres propios, y deberá ponerla a disposición de la Parte Arrendadora, sin necesidad de previo requerimiento. Todo ello será de aplicación a la finalización del contrato.La vigencia de este Contrato NO estará sujeta a ningún tipo de prórroga adicional, salvo que llegado el momento de vencimiento del Contrato las Partes pudieran pactar expresamente y por escrito algo distinto.TERCERA. RENTA DEL ARRENDAMIENTO Y FIANZALas Partes han acordado que la renta será de DOSCIENTOS  euros  (200 €) para toda la temporada de arrendamiento (40 euros por día, por 5 días). La renta se verá incrementada en VEINTE euros  (20 €) en concepto de gastos de limpieza de la vivienda.El precio pactado de renta incluye el IVA (Impuesto sobre el Valor Añadido). Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que la renta incluye Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación.La renta acordada será satisfecha conforme a las siguientes instrucciones:asdfasdf. Si transcurriesen 24 horas desde la llegada de la Parte Arrendataria a la vivienda, y ésta no hubiese realizado el pago acordado, tendrá lugar la resolución del presente contrato, y consecuentemente la Parte Arrendataria deberá abandonar la vivienda dejándola a disposición de la Parte Arrendadora. En cualquier caso aquellas cuantías abonadas hasta el momento, no serán devueltas.El pago se realizará mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): ES3514653634231235986175 de la entidad: BBVA, y cuyo titular es: Antonio Alarcón Marrero. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la Parte Arrendadora entregará a la arrendataria la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.CUARTA. GASTOS GENERALES Y SUMINISTROSLa contratación de servicios y suministros, tales como, luz, agua, gas, teléfono, internet e impuestos (tales como, tasas administrativas por recogidas de basuras, tratamiento de residuos urbanos, alcantarillado o servicios similares e impuesto sobre bienes muebles, IBI), correrán a cargo de la Parte Arrendadora. El importe de estos gastos está incluido dentro de la renta. Siendo que la Parte Arrendataria no tiene que abonarlos por separado.Todos los gastos de Comunidad correrán a cargo de la Parte Arrendadora en su totalidad.QUINTA. CESIÓN O SUBARRIENDOEl arrendatario no podrá ceder ni subarrendar, total o parcialmente, la vivienda objeto de este arrendamiento.SEXTA.- DERECHO DE ADQUISICIÓN PREFERENTELas Partes acuerdan que en caso de que la Parte Arrendadora enajenare la vivienda, la Parte Arrendataria no tendrá derecho de adquisición preferente o de tanteo y retracto sobre la vivienda. Por tanto, la Parte Arrendataria renuncia expresamente en este acto al derecho de adquisición preferente sobre la misma que la legislación aplicable pudiera atribuirle.SÉPTIMA. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------OCTAVA. OBLIGACIONES DE LAS PARTESLa Parte Arrendataria se compromete a: - Comprobar el buen estado de la vivienda al entrar y al salir de la misma.- No causar daños ni desperfectos a la vivienda o al mobiliario que se encuentra en la vivienda. - No realizar copias de las llaves de acceso a la vivienda.- A no contravenir los buenos usos de vecindad, así como el molestar a vecinos con ruidos, fiestas, música, etc- Salvo autorización previa, el número de personas hospedadas en la vivienda no podrá sobrepasar el acordado con la Parte Arrendadora.La Parte Arrendadora se compromete a:- Comprobar a la llegada y salida de la Parte Arrendataria el buen estado de la vivienda.- Llevar a cabo las reparaciones necesarias de la vivienda para su correcto uso y disfrute.- Satisfacer el costo íntegro de los gastos generales para el adecuado sostenimiento del inmueble, sus servicios, tributos, cargas y responsabilidades, que no sean susceptibles de individualización y que corresponda a la vivienda arrendada.- Asegurar que la Parte Arrendataria pueda disfrutar pacíficamente de la vivienda, evitando perturbarla innecesariamente durante el periodo de arrendamiento. NOVENA. RESOLUCIÓN DEL CONTRATOEl incumplimiento por cualquiera de las Partes de las obligaciones del presente Contrato dará derecho a promover la resolución del Contrato de acuerdo con lo dispuesto en el artículo 1124 del Código Civil, así como a solicitar una indemnización por los daños y perjuicios ocasionados.Asimismo, la Parte Arrendadora podrá resolver el Contrato por las causas siguientes:- la falta de pago de la renta o de cualquiera de las cantidades cuyo pago corresponda a la Parte Arrendataria;- causar daños dolosamente en la vivienda o realizar obras;- realización de actividades molestas, insalubres, nocivas, peligrosas, y/o dar un uso distinto al inicialmente pactado.DÉCIMA. DESISTIMIENTO (CANCELACIÓN Y/O SALIDA ANTICIPADA)Cualquiera de las partes podrán desistir anticipadamente del contrato en cualquier momento antes de su finalización. En ese caso, la parte que desee desistir del contrato deberá notificar de forma expresa y escrita. Este desistimiento generará una indemnización o penalización que variará según el momento en el que se produzca el desistimiento: - Hasta 30 días antes del inicio del arrendamiento: 25 30 % de la renta total- Hasta 20 días antes del inicio del arrendamiento: 45 40% de la renta total- Hasta 14 días antes del inicio del arrendamiento: 65 60% de la renta total- Menos de 14 días antes del inicio del arrendamiento: 90 85% de la renta.- El día de la llegada a la vivienda, o una vez  que la Parte Arrendataria se encontrara en la vivienda (entendiéndose cualquiera de los días de su estancia) la Parte Arrendataria quedaría obligada al pago total de la renta por el arrendamiento de la vivienda.Si hubiera desistimiento o cancelación por la Parte Arrendadora, ésta deberá devolver a la Parte Arrendataria todo pago que esta hubiese realizado hasta el momento, salvo que este se produjese con 10 días o menos de antelación al momento del inicio del arrendamiento, deberá indemnizar a la Parte Arrendataria con el 30% de la renta total.Lo anterior será de aplicación salvo que el desistimiento unilateral del contrato tenga lugar por causas inimputables a ninguna de las parte, o bien, causas de fuerza mayor.DECIMOPRIMERA. FIN DEL CONTRATO DE ARRENDAMIENTOLlegada la fecha de finalización del Contrato, la Parte Arrendataria deberá entregar a la Parte Arrendadora las llaves de la vivienda. Si la Parte Arrendataria, no hiciera entrega de la vivienda en el momento correspondiente, como penalización, deberá entregar el doble de la renta diaria, además de todos los gastos directos e indirectos que dicho retraso genere.DECIMOSEGUNDA. NOTIFICACIONESLa Parte Arrendataria podrá comunicarse con la Parte Arrendadora a través de: abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.comLa Parte Arrendadora podrá comunicarse con la Parte Arrendataria a través de: abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.comCada una de las Partes puede, por medio de notificación escrita enviada a la otra Parte, cambiar la dirección a la que deban mandarse cualesquiera comunicaciones.DECIMOTERCERA. INTEGRIDAD DEL CONTRATO-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------DECIMOCUARTA. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------DECIMOSÉPTIMA. SUPUESTOS DE DISCREPANCIA ENTRE LAS PARTESLas Partes reconocen quedar obligadas por el presente Contrato así como sus correspondientes anexos, si los hubiere, y sus efectos jurídicos y se comprometen a su cumplimiento de buena fe.Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 113/2015, de 22 de mayo, por el que se aprueba el Reglamento de las viviendas vacacionales de la Comunidad Autónoma de Canarias.Así las cosas, en caso de controversia, diferencia, conflicto o reclamación en cuanto al Contrato, o en relación al mismo, las Partes acuerdan que se someterán a la jurisdicción de los Juzgados y Tribunales competentes del lugar donde se encuentra ubicada la vivienda.Y en señal de acuerdo con todo lo que antecede las partes firman el presente contrato de arrendamiento de habitación por duplicado y a un solo efecto en el fecha y lugar arriba indicadosLA PARTE ARRENDADORA                                          LA PARTE ARRENDATARIA...........................................                                                        ...........................................________                                                                                   ________';

const outputExpectedAfterPayment = 'Contrato de arrendamiento de vivienda para uso turístico o vacacionalEn Madrid, a  12 de febrero de 2020REUNIDOSDe una parte, Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, NIE núm. 54113125J, y en calidad de representante legal;   Juan Camejo Alarcón, mayor de edad, con domicilio en Urbanización Lorem ipsum dolor sit, 138 6ºH, Pasaporte núm. 71928721Q, y en calidad de apoderado;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234. Antonio Banderas, mayor de edad, con domicilio en Alameda Lorem, 56B, DNI núm. 93066379F, y en calidad de representante legal;   Brad Pitt, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, Pasaporte núm. Y1841513D, y en calidad de apoderado total;   actuando en nombre y representación de: Indra Sistemas, S.A, con domicilio en C. Comercial Lorem ipsum dolor, 3B 11ºA,  C.I.F/N.I.F número A18313189, e inscrita en: Registro Mercantil de Albacete  con la siguiente información: Tomo 100, folio 20, hoja SE-999.Alberto Sabina Fajardo, mayor de edad, y con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y actuando en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, con domicilio en Cañada Lorem ipsum dolor, 174 8ºD, NIE número: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de Stalin Moreno, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Como parte ARRENDADORA.De otra parte, Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, NIE núm. 54113125J, y en calidad de representante legal;   Juan Camejo Alarcón, mayor de edad, con domicilio en Urbanización Lorem ipsum dolor sit, 138 6ºH, Pasaporte núm. 71928721Q, y en calidad de apoderado;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234. Antonio Banderas, mayor de edad, con domicilio en Alameda Lorem, 56B, DNI núm. 93066379F, y en calidad de representante legal;   Brad Pitt, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, Pasaporte núm. Y1841513D, y en calidad de apoderado total;   actuando en nombre y representación de: Indra Sistemas, S.A, con domicilio en C. Comercial Lorem ipsum dolor, 3B 11ºA,  C.I.F/N.I.F número A18313189, e inscrita en: Registro Mercantil de Albacete  con la siguiente información: Tomo 100, folio 20, hoja SE-999.Alberto Sabina Fajardo, mayor de edad, y con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y actuando en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, con domicilio en Cañada Lorem ipsum dolor, 174 8ºD, NIE número: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de Stalin Moreno, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Como parte ARRENDATARIA.Las partes, arrendadora y arrendataria, se reconocen recíprocamente capacidad legal suficiente para otorgar el presente contrato, y reunidos en la fecha del encabezamiento del presente escrito, manifiestan haber acordado formalizar un CONTRATO DE ARRENDAMIENTO VACACIONAL, O PARA USO TURÍSTICO sobre la vivienda que se especifica a continuación.EXPONENI. Que la Parte Arrendadora es propietaria en pleno dominio de una vivienda cuya superficie útil es de 200 metros cuadrados y que se encuentra ubicada en: Paseo de las Delicias 12, Escalera 5, 2.º B, 38296, Tenerife, España, y que comprende: Una cocina, un salón, un garaje y un jardín de 10m2A lo largo del presente escrito se denominará “la vivienda” al conjunto formado por la vivienda propiamente dicha y sus accesorios. Las partes declaran conocer y aceptar la superficie y composición de la vivienda, así como el estado en que se encuentra y otras características.Teniendo en cuenta que en el contrato de arrendamiento, la vivienda se arrienda de cuerpo cierto, si hubiera diferencia entre los metros cuadrados o superficie real de la vivienda y la superficie descrita en el presente contrato, esto no afectará a las estipulaciones pactadas en el presente contrato, y en concreto, no afectará al precio establecido de renta, que se mantendrá invariable.II. Junto con el presente contrato de arrendamiento se acompaña certificado de eficiencia energética de la vivienda arrendada, el cual es puesto a disposición de la Parte Arrendataria a los efectos legales oportunos.II. Mediante el presente contrato se pone en conocimiento de la Parte Arrendataria que la Parte Arrendadora se encuentra inscrita en el Registro General Turístico de la Comunidad autónoma de Canarias, conforme al Decreto 113/2015, de 22 de mayo, por el que se aprueba el Reglamento de las viviendas vacacionales de la Comunidad Autónoma de Canarias, y que su Código de Inscripción es el siguiente: 123123YCTIV. El arrendador está interesado en ceder en arrendamiento para uso por motivos relativos a vacaciones, turismo u ocio el inmueble anteriormente descrito, estando el arrendatario interesado en recibirlo bajo los términos y condiciones que se regularán en el presente contrato.ESTIPULACIONESPRIMERA. OBJETOLa Parte Arrendadora cede en arrendamiento el uso del inmueble descrito en el exponendo segundo del presente contrato a la Parte Arrendataria, quien lo adquiere con la finalidad de uso por temporada vacacional o como alojamiento turístico (quedando totalmente prohibido el uso para cualquier otro fin ya sea comercial o distinto al establecido en el presente contrato). El incumplimiento de esto será motivo de resolución del contrato.La vivienda se pondrá a disposición de la Parte Arrendataria con la entrega de llaves. En este acto ambas partes constatan que la entrega de la vivienda se hace en perfecto estado de uso y conservación, y deberá entregarse en la mismas condiciones al finalizar el contrato. Se cede en arrendamiento con el mobiliario que se detalla en el inventario, Anexo, del presente contrato. Junto al presente contrato se adjuntan fotografías de la vivienda a los efectos de dejar constancia del estado de la misma en el momento del arriendo.La vivienda y su mobiliario es propiedad de la Parte Arrendadora. El inmueble objeto de arrendamiento deberá reintegrarse a la extinción del contrato, en estado equivalente de conservación y funcionamiento a aquel en el momento de la suscripción del presente documento. SEGUNDA. DURACIÓNEl tiempo de vigencia del presente contrato de arrendamiento será el comprendido entre las siguientes fechas:- Entrada: el 15 de febrero de 2020, a partir de las: 9:00 (hora local)- Salida: el 15 de abril de 2020, a las: 12:00 (hora local)Finalizado el contrato la Parte Arrendataria deberá dejar la vivienda libre y limpia, sin objetos personales u otros enseres propios, y deberá ponerla a disposición de la Parte Arrendadora, sin necesidad de previo requerimiento. Todo ello será de aplicación a la finalización del contrato.La vigencia de este Contrato NO estará sujeta a ningún tipo de prórroga adicional, salvo que llegado el momento de vencimiento del Contrato las Partes pudieran pactar expresamente y por escrito algo distinto.TERCERA. RENTA DEL ARRENDAMIENTO Y FIANZALas Partes han acordado que la renta será de DOSCIENTOS  euros  (200 €) para toda la temporada de arrendamiento (40 euros por día, por 5 días). La renta se verá incrementada en VEINTE euros  (20 €) en concepto de gastos de limpieza de la vivienda.El precio pactado de renta incluye el IVA (Impuesto sobre el Valor Añadido). Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que la renta incluye Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación.La renta acordada será satisfecha conforme a las siguientes instrucciones:asdfasdf. Si transcurriesen 24 horas desde la llegada de la Parte Arrendataria a la vivienda, y ésta no hubiese realizado el pago acordado, tendrá lugar la resolución del presente contrato, y consecuentemente la Parte Arrendataria deberá abandonar la vivienda dejándola a disposición de la Parte Arrendadora. En cualquier caso aquellas cuantías abonadas hasta el momento, no serán devueltas.El pago se realizará mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): ES3514653634231235986175 de la entidad: BBVA, y cuyo titular es: Antonio Alarcón Marrero. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la Parte Arrendadora entregará a la arrendataria la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.CUARTA. GASTOS GENERALES Y SUMINISTROSLa contratación de servicios y suministros, tales como, luz, agua, gas, teléfono, internet e impuestos (tales como, tasas administrativas por recogidas de basuras, tratamiento de residuos urbanos, alcantarillado o servicios similares e impuesto sobre bienes muebles, IBI), correrán a cargo de la Parte Arrendadora. El importe de estos gastos está incluido dentro de la renta. Siendo que la Parte Arrendataria no tiene que abonarlos por separado.Todos los gastos de Comunidad correrán a cargo de la Parte Arrendadora en su totalidad.QUINTA. CESIÓN O SUBARRIENDOEl arrendatario no podrá ceder ni subarrendar, total o parcialmente, la vivienda objeto de este arrendamiento.SEXTA.- DERECHO DE ADQUISICIÓN PREFERENTELas Partes acuerdan que en caso de que la Parte Arrendadora enajenare la vivienda, la Parte Arrendataria no tendrá derecho de adquisición preferente o de tanteo y retracto sobre la vivienda. Por tanto, la Parte Arrendataria renuncia expresamente en este acto al derecho de adquisición preferente sobre la misma que la legislación aplicable pudiera atribuirle.SÉPTIMA. NORMAS DE LA COMUNIDADLa Parte Arrendataria se obliga a cumplir en todo momento, y durante toda la vigencia del Contrato las normas estatutarias o reglamentos y los acuerdos de la comunidad de propietarios que pudieran existir o que se establezcan, especialmente las relativas al establecimiento de buen orden de convivencia, y a la utilización de los servicios, y/o elementos comunes.OCTAVA. OBLIGACIONES DE LAS PARTESLa Parte Arrendataria se compromete a: - Comprobar el buen estado de la vivienda al entrar y al salir de la misma.- No causar daños ni desperfectos a la vivienda o al mobiliario que se encuentra en la vivienda. - No realizar copias de las llaves de acceso a la vivienda.- A no contravenir los buenos usos de vecindad, así como el molestar a vecinos con ruidos, fiestas, música, etc- Salvo autorización previa, el número de personas hospedadas en la vivienda no podrá sobrepasar el acordado con la Parte Arrendadora.La Parte Arrendadora se compromete a:- Comprobar a la llegada y salida de la Parte Arrendataria el buen estado de la vivienda.- Llevar a cabo las reparaciones necesarias de la vivienda para su correcto uso y disfrute.- Satisfacer el costo íntegro de los gastos generales para el adecuado sostenimiento del inmueble, sus servicios, tributos, cargas y responsabilidades, que no sean susceptibles de individualización y que corresponda a la vivienda arrendada.- Asegurar que la Parte Arrendataria pueda disfrutar pacíficamente de la vivienda, evitando perturbarla innecesariamente durante el periodo de arrendamiento. NOVENA. RESOLUCIÓN DEL CONTRATOEl incumplimiento por cualquiera de las Partes de las obligaciones del presente Contrato dará derecho a promover la resolución del Contrato de acuerdo con lo dispuesto en el artículo 1124 del Código Civil, así como a solicitar una indemnización por los daños y perjuicios ocasionados.Asimismo, la Parte Arrendadora podrá resolver el Contrato por las causas siguientes:- la falta de pago de la renta o de cualquiera de las cantidades cuyo pago corresponda a la Parte Arrendataria;- causar daños dolosamente en la vivienda o realizar obras;- realización de actividades molestas, insalubres, nocivas, peligrosas, y/o dar un uso distinto al inicialmente pactado.DÉCIMA. DESISTIMIENTO (CANCELACIÓN Y/O SALIDA ANTICIPADA)Cualquiera de las partes podrán desistir anticipadamente del contrato en cualquier momento antes de su finalización. En ese caso, la parte que desee desistir del contrato deberá notificar de forma expresa y escrita. Este desistimiento generará una indemnización o penalización que variará según el momento en el que se produzca el desistimiento: - Hasta 30 días antes del inicio del arrendamiento: 25 30 % de la renta total- Hasta 20 días antes del inicio del arrendamiento: 45 40% de la renta total- Hasta 14 días antes del inicio del arrendamiento: 65 60% de la renta total- Menos de 14 días antes del inicio del arrendamiento: 90 85% de la renta.- El día de la llegada a la vivienda, o una vez  que la Parte Arrendataria se encontrara en la vivienda (entendiéndose cualquiera de los días de su estancia) la Parte Arrendataria quedaría obligada al pago total de la renta por el arrendamiento de la vivienda.Si hubiera desistimiento o cancelación por la Parte Arrendadora, ésta deberá devolver a la Parte Arrendataria todo pago que esta hubiese realizado hasta el momento, salvo que este se produjese con 10 días o menos de antelación al momento del inicio del arrendamiento, deberá indemnizar a la Parte Arrendataria con el 30% de la renta total.Lo anterior será de aplicación salvo que el desistimiento unilateral del contrato tenga lugar por causas inimputables a ninguna de las parte, o bien, causas de fuerza mayor.DECIMOPRIMERA. FIN DEL CONTRATO DE ARRENDAMIENTOLlegada la fecha de finalización del Contrato, la Parte Arrendataria deberá entregar a la Parte Arrendadora las llaves de la vivienda. Si la Parte Arrendataria, no hiciera entrega de la vivienda en el momento correspondiente, como penalización, deberá entregar el doble de la renta diaria, además de todos los gastos directos e indirectos que dicho retraso genere.DECIMOSEGUNDA. NOTIFICACIONESLa Parte Arrendataria podrá comunicarse con la Parte Arrendadora a través de: abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.comLa Parte Arrendadora podrá comunicarse con la Parte Arrendataria a través de: abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.comCada una de las Partes puede, por medio de notificación escrita enviada a la otra Parte, cambiar la dirección a la que deban mandarse cualesquiera comunicaciones.DECIMOTERCERA. INTEGRIDAD DEL CONTRATOEste Contrato deja sin efecto todo acuerdo, entendimiento, compromiso y/o negociación que se hubiese desarrollado previamente entre las Partes.Asimismo, las Partes reconocen que los documentos anexos y/o adjuntos al presente Contrato forman parte o integran el mismo, a todos los efectos legales.DECIMOCUARTA. LEGISLACIÓN APLICABLELas Partes reconocen quedar obligadas por el presente Contrato así como sus correspondientes anexos, y sus efectos jurídicos y se comprometen a su cumplimiento de buena fe.Todo litigio relativo al presente contrato será sometido a la legislación española, especialmente a los previsto en la Ley de Arrendamientos Urbanos y supletoriamente en el Código Civil. DECIMOSÉPTIMA. SUPUESTOS DE DISCREPANCIA ENTRE LAS PARTESLas Partes reconocen quedar obligadas por el presente Contrato así como sus correspondientes anexos, si los hubiere, y sus efectos jurídicos y se comprometen a su cumplimiento de buena fe.Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 113/2015, de 22 de mayo, por el que se aprueba el Reglamento de las viviendas vacacionales de la Comunidad Autónoma de Canarias.Así las cosas, en caso de controversia, diferencia, conflicto o reclamación en cuanto al Contrato, o en relación al mismo, las Partes acuerdan que se someterán a la jurisdicción de los Juzgados y Tribunales competentes del lugar donde se encuentra ubicada la vivienda.Y en señal de acuerdo con todo lo que antecede las partes firman el presente contrato de arrendamiento de habitación por duplicado y a un solo efecto en el fecha y lugar arriba indicadosLA PARTE ARRENDADORA                                          LA PARTE ARRENDATARIA...........................................                                                        ...........................................________                                                                                   ________';

export default {
    steps,
    outputExpected,
    outputExpectedAfterPayment,
    id: 'contrato-arrendamiento-vivienda-vacacional'
}