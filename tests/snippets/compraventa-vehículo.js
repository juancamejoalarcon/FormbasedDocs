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
        value: '3'
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
        type: 'range',
        value: '3'
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
        type: 'select',
        value: '4',
        pregunta: 'Tipo de vehículo que se va a vender:.'
    },
    {
        type: 'select',
        value: '6',
        pregunta: 'Tipo de turismo o coche:'
    },
    {
        type: 'text',
        value: 'suv',
        pregunta: 'Tipo de turismo o coche:'
    },
    {
        type: 'text',
        value: 'Seat',
        pregunta: 'Marca del vehículo :'
    },
    {
        type: 'text',
        value: 'Ibiza',
        pregunta: 'Modelo específico del vehículo:'
    },
    {
        type: 'text',
        value: 'VSSZZZ6KZ1R149943',
        pregunta: 'Número de serie y bastidor'
    },
    {
        type: 'text',
        value: '200.000',
        pregunta: 'ilometraje o número de kilómetros recorridos que apar'
    },
    {
        type: 'text',
        value: '4548 FMU',
        pregunta: 'Matrícula del vehículo:'
    },
    {
        type: 'text',
        value: 'Mayo 2001',
        pregunta: 'Mes y año de la primera matriculación del vehículo'
    },
    {
        type: 'text',
        value: 'rojo',
        pregunta: 'Color del vehículo:'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: '¿Desea añadir otras características especiales del vehículo?...'
    },
    {
        type: 'text',
        value: 'aire acondicionado, alerones',
        pregunta: 'ndique otras características del ve'
    },
    {
        type: 'text',
        value: 'sin plomo 95',
        pregunta: 'Tipo de combustible del vehícul'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'El vehículo, ¿lleva el motor original (...'
    },
    {
        type: 'text',
        value: '2',
        pregunta: 'Número de propietarios que ha tenido el...'
    },
    {
        type: 'select',
        value: '3',
        pregunta: 'Indique el estado de conservació...'
    },
    {
        type: 'text',
        value: 'el parabrisas está reventado',
        pregunta: 'Desperfectos o golpes visibles que tiene el vehículo que se d...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'El vehículo ha pasado la ITV alguna...'
    },
    {
        type: 'text',
        value: 'Vallecas',
        pregunta: 'Municipio y/o nombre del centro de ITV...'
    },
    {
        type: 'date',
        value: '2020-02-12'
    },
    {
        type: 'text',
        value: 'Octubre 2012',
        pregunta: 'Mes y año en el que el vehículo que se desea vende...'
    },
    {
        type: 'number',
        value: '3000',
        pregunta: 'Precio fijado para la venta del ...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'Se va a pagar una cantidad en concepto de señ...'
    },
    {
        type: 'number',
        value: '200',
        pregunta: 'Cantidad (en euros) que se dese...'
    },
    {
        type: 'select',
        value: '1',
        pregunta: 'Método que se va a utilizar para realizar el pago...'
    },
    {
        type: 'text',
        value: 'BBVA',
        pregunta: 'Nombre o denominación completa de la entidad bancari...'
    },
    {
        type: 'text',
        value: 'ES0430049811036284136334',
        pregunta: 'IBAN o número identificador de la cuenta bancaria ...'
    },
    {
        type: 'text',
        value: 'Mario Martín Molina',
        pregunta: 'Nombre y apellidos completos del titular de la cuenta bancaria...'
    },
    {
        type: 'text',
        value: 'Paseo de las Yeserías 11, Escalera 2, 4B',
        pregunta: 'Lugar en el que el vendedor entregará el vehículo...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'El vendedor debe hacer entrega de...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'además del permiso de circulación, la ficha téc...'
    },
    {
        type: 'text',
        value: 'un chupachups',
        pregunta: 'Indique qué otros documentos o accesorios recib...'
    },
];

const outputExpected = 'Contrato de compraventa de vehículo usado entre particularesEn Madrid, a  12 de febrero de 2020REUNIDOSComo "Parte Vendedora",Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, con NIE número 54113125J, en nombre y representación de: Banco Santander, S.A, con N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid con la siguiente información: Tomo 123, folio 10, hoja SE-1234.Alberto Sabina Fajardo, mayor de edad, con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, con NIE: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de Stalin Moreno, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Como "Parte Compradora",Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, con NIE número 54113125J, en nombre y representación de: Banco Santander, S.A, con N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid con la siguiente información: Tomo 123, folio 10, hoja SE-1234.Alberto Sabina Fajardo, mayor de edad, con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, con NIE: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de Stalin Moreno, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Las partes, compradora y vendedora, se reconocen recíprocamente capacidad legal suficiente para otorgar el presente contrato, y reunidos en la fecha y lugar del encabezamiento del presente escrito, manifiestan haber acordado formalizar en este documento CONTRATO DE COMPRAVENTA DEL VEHÍCULO USADO ENTRE PARTICULARES automóvil que se especifica a continuación.EXPONENI. Que la Parte Vendedora es titular en pleno dominio del vehículo, y que no pesa sobre él ninguna carga o gravamen ni impuesto, deuda o sanción pendientes de abono en la fecha de la firma de este contrato que pudieran impedir la formalización de la transferencia de la propiedad a la Parte Compradora en la Jefatura Provincial de Tráfico correspondiente.II. Que la Parte Compradora se compromete a formalizar el traspaso del vehículo a su nombre. Una vez realizada la correspondiente transferencia en Tráfico, la Parte Vendedora entregará materialmente a la Parte Compradora la posesión del vehículo, haciéndose esta última cargo de cuantas responsabilidades puedan contraerse por la propiedad del vehículo y su tenencia y uso a partir de dicho momento de la entrega.III. Que la Parte Compradora declara conocer el estado actual del vehículo, en su conjunto y en el de sus elementos mecánicos y componentes fundamentales, de su antigüedad y de su kilometraje.IV. Que los elementos identificadores básicos del Vehículo son los siguientes:• Marca: Seat• Modelo: Ibiza• Número de serie y bastidor: VSSZZZ6KZ1R149943• Kilometraje marcado: 200.000 Km• Matrícula: 4548 FMU• Fecha de la primera matriculación: Mayo 2001V. Que el Vehículo objeto del presente Contrato de compraventa está al día en las inspecciones reglamentarias de la ITV, habiéndose realizado la última inspección en Vallecas el pasado día 12 de febrero de 2020. Y siendo la próxima en: Octubre 2012.VI. En virtud de lo expuesto, ambas partes acuerdan otorgar el presente Contrato de compraventa CLÁUSULASPRIMERA. OBJETOLa Parte Compradora está interesada en adquirir el vehículo descrito en el expositivo “IV” del presente escrito. Manifiesta la Parte Compradora haber revisado el estado real (técnico y conservación) del vehículo y haber sido informado de los elementos mecánicos, antigüedad y kilometraje, además de otras características del mismo. De igual manera, se pone en conocimiento del comprador los datos relativos a la última ITV, permiso de circulación, y los impuestos pagados correspondientes al año en curso.SEGUNDA. CARACTERÍSTICAS Y ESTADO DEL VEHÍCULODatos y características del vehículo:• Tipo de Vehículo automóvil: coche tipo suv• Marca: Seat• Modelo: Ibiza• Número de serie y bastidor: VSSZZZ6KZ1R149943• Kilometraje marcado: 200.000 Km• Matrícula: 4548 FMU• Fecha de la primera matriculación: Mayo 2001• Color: rojo• Combustible: sin plomo 95• Motor original (motor de fábrica): Sí• Número de propietarios anteriores (al Vendedor) del Vehículo: 2• Estado general de conservación del vehículo automóvil: Malo. Requiere arreglos que impedirán un uso inmediato del vehículo. Los desperfectos y/o golpes visibles que tiene el Vehículo son los siguientes: el parabrisas está reventado• Otras características del vehículo: aire acondicionado, aleronesLa Parte Compradora manifiesta haber examinado y probado el vehículo con anterioridad a la firma del presente contrato.TERCERA. PRECIOEl precio del vehículo objeto de la compraventa se establece por un valor de 3000 € (TRES MIL  euros ).En el momento de la firma del presente contrato la parte compradora entrega a la vendedora en concepto de adelanto la cantidad de 200 € (DOSCIENTOS  euros ). Cantidad que se descontará del precio total de compraventa establecido.La Parte Compradora se hará cargo de todos aquellos gastos derivados del transporte del vehículo para hacer efectiva su entrega. El comprador también se hará cargo de los impuestos y demás gastos derivados del cambio de titularidad del vehículo usado objeto del contrato.Las partes acuerdan que el pago del precio del vehículo será mediante ingreso en cuenta o transferencia bancaria. Este pago se realizará en la fecha de entrega del Vehículo en la siguiente cuenta bancaria:     - Entidad bancaria: BBVA     - IBAN identificador de la cuenta: ES0430049811036284136334     - Titular de la cuenta: Mario Martín MolinaCUARTA. OBLIGACIONES DE LA PARTE VENDEDORALa Parte Vendedora se obliga a entregar materialmente al Comprador la posesión del Vehículo. La Parte Vendedora realizará la entrega del Vehículo en el siguiente lugar: Paseo de las Yeserías 11, Escalera 2, 4B en el momento de firma de este contratoLa Parte Vendedora entrega al comprador el vehículo objeto del contrato libre de cargas y gravámenes, que tras  ser examinado por el comprador declara que éste se encuentra en buen estado y muestra su conformidad en adquirirlo. En el mismo acto se entrega la documentación relativa al vehículo, así como el permiso de circulación y la tarjeta de la ITV.La Parte Vendedora se compromete a comunicar a las autoridades  oportunas el cambio de titularidad del vehículo objeto del contrato, incluyendo la compañía de seguros.QUINTA. OBLIGACIONES DE LA PARTE COMPRADORALa Parte Compradora deberá pagar el precio pactado al vendedor y se compromete a remitir a éste, dentro del plazo de los 15 días posteriores a la firma del presente contrato, copia del permiso de circulación del vehículo en la que conste que el vehículo figura a su nombre.La Parte Compradora queda obliga a contratar un seguro de circulación para el Vehículo automóvil objeto del presente Contrato antes de comenzar a circular con el mismo.El comprador se hará cargo de todas aquellas responsabilidades que puedan derivarse una vez efectuada la entrega del vehículo, incluidas sanciones o inspecciones técnicas.El vendedor no responderá de las averías o deficiencias técnicas por uso inadecuado del vehículo usado con posterioridad a la entrega del mismo. Tampoco se hará responsable de aquellas averías  o por los defectos existentes en el momento de la entrega del vehículo puestos en conocimiento al comprador.SEXTA. ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------SÉPTIMA. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------OCTAVA. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------NOVENA. SUPUESTOS DE DISCREPANCIA ENTRE LAS PARTESPara cualquier litigio que surja entre las partes de la interpretación, o cumplimiento del presente contrato, éstas, se someterán a los Juzgados y Tribunales competentes, según lo establecido en los artículos 50 y siguientes de la Ley  1/2000 de 7 de enero, de Enjuiciamiento Civil.Y en señal de acuerdo con todo lo que antecede las partes firman el presente contrato de compraventa de vehículo usado por duplicado y a un solo efecto en el fecha y lugar arriba indicadosLA PARTE VENDEDORA                                                    LA PARTE COMPRADORA...........................................                                                        ...........................................________                                                                                   ________TRASPASO DEL VEHÍCULO AUTOMÓVILLa Parte Compradora recibe en este acto:1. El Vehículo automóvil2. El permiso de circulación del Vehículo3. La ficha técnica del Vehículo (con los distintos registros de la ITV)4. Copia del último recibo del Impuesto sobre Vehículos de Tracción Mecánica.5. La llaves y/o mando6. Matricula(s)7. Póliza y recibo del seguro.8. Factura de compra (para aquellos casos en que el vehículo se encontrara aún en garantía).9. Otros: un chupachupsLa Parte Vendedora certifica haber recibido::El pago de la cantidad de 3000 € (TRES MIL  euros ) €.Fecha:Hora:LA PARTE VENDEDORA                                                    LA PARTE COMPRADORA...........................................                                                        ...........................................________                                                                                   ________';