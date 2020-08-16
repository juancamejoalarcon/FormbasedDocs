const steps = [
  {
    type: 'start',
    title: 'Contrato de trabajo fijo discontinuo',
    description: `Un contrato de trabajo fijo discontinuo es un acuerdo entre un trabajador y un empresario, mediante el cual se podrá regular la relación laboral de los trabajos que se repiten de forma cíclica, es decir, cada cierto periodo de tiempo.`,
    isCurrentStep: true
  },
  {
    type: 'iText',
    identifier: 'id-unid-1',
    wordToReplace: 'id-unid-1',
    replacement: '',
    question: 'Lugar (ciudad o población) donde se realiza y firma el contrato:',
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      value: 'Indique aquí la localidad de celebración y firma del contrato.'
    },
    placeholder: 'P. ej. Albacete',
    mandatory: false,
    isFocused: false
  },
  {
    type: 'iDate',
    identifier: 'id-unid-2',
    wordToReplace: 'id-unid-2',
    replacement: '',
    question: 'Fecha en la que se firma el contrato:',
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      value: 'Fecha en la que se firma el contrato',
    },
    mandatory: false,
    isFocused: false
  },
  {
    type: 'iRadioC',
    question: 'El empresario (o empleador) es:',
    questionOriginal: 'El empresario (o empleador) es:',
    hasIndex: true,
    identifier: 'id-unid-3_1',
    wordToReplace: 'id-unid-3_1',
    indications: {
      areIndications: true,
      indicationsType: 'outsideText',
      // tslint:disable-next-line:max-line-length
      value: `Seleccione el tipo de personalidad jurídica. Hablamos de personas físicas para referirnos a un particular, 
      sin embargo hablamos de personas jurídicas para referirnos a una empresa, una asociación, etc...`,
    },
    defaultRadioId: 'id-unid-3_1_opA',
    replacement: '',
    extraReplacements: [
    ],
    radios: [
      {
        label: 'Persona física',
        radioId: 'id-unid-3_1_opA',
        identifier: 'id-unid-3_1_opA',
        replacementOriginal: 'id-unid-3_1_opA_1',
        replacement: 'id-unid-3_1_opA_1',
        extraReplacements: [],
        checked: true,
        subSteps: [
          {
            type: 'iRadioC',
            question: 'El empresario (o empleador) para realizar el contrato, actúa:',
            identifier: 'id-unid-3_1_opA_1',
            wordToReplace: 'id-unid-3_1_opA_1',
            indications: {
              areIndications: true,
              indicationsType: 'outsideText',
              // tslint:disable-next-line:max-line-length
              value: `La persona puede concluir y firmar el contrato en nombre y representación propios o representado por 
                otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal 
                (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). 
                Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato 
                se concluye en nombre y representación propios, esta misma persona firmará el contrato y asumirá las 
                obligaciones. Por el contrario, si es mediante representante, es esta otra persona quien firma el 
                contrato; sin embargo, es la persona a la que representa quien asumirá las obligaciones derivadas de 
                este contrato. Si desea más información sobre esta figura 
                consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>`,
            },
            defaultRadioId: 'id-unid-3_1_opA_1_opA',
            replacement: '',
            extraReplacements: [
            ],
            radios: [
              {
                label: 'en su propio nombre y representación',
                radioId: 'id-unid-3_1_opA_1_opA',
                identifier: 'id-unid-3_1_opA_1_opA',
                // tslint:disable-next-line:max-line-length
                replacementOriginal: 'id-unid-3_1_opA_1_opA_1, mayor de edad, y con domicilio en id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1_opA_4, y actuando en su propio nombre y representación.',
                // tslint:disable-next-line:max-line-length
                replacement: 'id-unid-3_1_opA_1_opA_1, mayor de edad, y con domicilio en id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1_opA_4, y actuando en su propio nombre y representación.',
                extraReplacements: [],
                checked: true,
                subSteps: [
                  {
                    question: 'Nombre completo del empresario (o empleador), incluyendo los apellidos:',
                    wordToReplace: 'id-unid-3_1_opA_1_opA_1',
                    identifier: 'id-unid-3_1_opA_1_opA_1',
                    type: 'iText',
                    replacement: '',
                    placeholder: 'P. ej. Martino Montano Holguín',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      value: 'Indique el nombre completo, incluyendo sus dos apellidos.',
                    },
                  },
                  {
                    question: 'Dirección del lugar donde reside del empresario (o empleador):',
                    wordToReplace: 'id-unid-3_1_opA_1_opA_2',
                    identifier: 'id-unid-3_1_opA_1_opA_2',
                    placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                    type: 'iText',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
                    },
                  },
                  {
                    type: 'iRadioB',
                    question: 'Tipo de documento de identificación del empresario (o empleador):',
                    identifier: 'id-unid-3_1_opA_1_opA_3',
                    wordToReplace: 'id-unid-3_1_opA_1_opA_3',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Seleccione el tipo de documento de identificación del empresario (o empleador)',
                    },
                    replacement: '',
                    extraReplacements: [],
                    defaultRadioId: 'id-unid-3_1_opA_1_opA_3_opA',
                    radios: [
                      {
                        label: 'DNI',
                        replacementOriginal: 'DNI',
                        replacement: '',
                        radioId: 'id-unid-3_1_opA_1_opA_3_opA',
                        identifier: 'id-unid-3_1_opA_1_opA_3_opA',
                        extraReplacements: [],
                        checked: true,
                      },
                      {
                        label: 'NIE',
                        replacementOriginal: 'NIE',
                        replacement: '',
                        radioId: 'id-unid-3_1_opA_1_opA_3_opB',
                        identifier: 'id-unid-3_1_opA_1_opA_3_opB',
                        extraReplacements: [],
                        checked: false,
                      },
                      {
                        label: 'Pasaporte',
                        replacementOriginal: 'Pasaporte',
                        replacement: '',
                        radioId: 'id-unid-3_1_opA_1_opA_3_opC',
                        identifier: 'id-unid-3_1_opA_1_opA_3_opC',
                        extraReplacements: [],
                        checked: false,
                      }
                    ]
                  },
                  {
                    question: 'Número del documento seleccionado en la pregunta anterior',
                    wordToReplace: 'id-unid-3_1_opA_1_opA_4',
                    identifier: 'id-unid-3_1_opA_1_opA_4',
                    type: 'iText',
                    replacement: '',
                    placeholder: 'P. ej. 83558071Z',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                    },
                  }
                ]
              },
              {
                label: 'por medio de un representante (legal o voluntario)',
                // tslint:disable-next-line:max-line-length
                replacementOriginal: 'id-unid-3_1_opA_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opA_1_opB_9, id-unid-3_1_opA_1_opB_6 número: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.',
                // tslint:disable-next-line:max-line-length
                replacement: 'id-unid-3_1_opA_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opA_1_opB_9, id-unid-3_1_opA_1_opB_6 número: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.',
                extraReplacements: [],
                radioId: 'id-unid-3_1_opA_1_opB',
                identifier: 'id-unid-3_1_opA_1_opB',
                checked: false,
                subSteps: [
                  {
                    question: 'Nombre completo del empresario (o empleador), incluyendo los apellidos:',
                    wordToReplace: 'id-unid-3_1_opA_1_opB_1',
                    identifier: 'id-unid-3_1_opA_1_opB_1',
                    type: 'iText',
                    replacement: '',
                    placeholder: 'P. ej. Martino Montano Holguín',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      value: 'Indique el nombre completo, incluyendo sus dos apellidos.',
                    },
                  },
                  {
                    question: 'Dirección del lugar donde reside el empresario (o empleador):',
                    wordToReplace: 'id-unid-3_1_opA_1_opB_2',
                    identifier: 'id-unid-3_1_opA_1_opB_2',
                    type: 'iText',
                    replacement: '',
                    placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
                    },
                  },
                  {
                    type: 'iRadioB',
                    question: 'Tipo de documento de identificación del empresario (o empleador):',
                    identifier: 'id-unid-3_1_opA_1_opB_3',
                    wordToReplace: '3_1_opA_1_opB_3',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      value: 'Seleccione el tipo de documento de identificación del empresario (o empleador)',
                    },
                    replacement: '',
                    extraReplacements: [],
                    radios: [
                      {
                        label: 'DNI',
                        replacementOriginal: 'DNI',
                        replacement: '',
                        radioId: 'id-unid-3_1_opA_1_opB_3_opA',
                        identifier: 'id-unid-3_1_opA_1_opB_3_opA',
                        extraReplacements: [],
                        checked: true,
                      },
                      {
                        label: 'NIE',
                        replacementOriginal: 'NIE',
                        replacement: '',
                        radioId: 'id-unid-3_1_opA_1_opB_3_opB',
                        identifier: 'id-unid-3_1_opA_1_opB_3_opB',
                        extraReplacements: [],
                        checked: false,
                      },
                      {
                        label: 'Pasaporte',
                        replacementOriginal: 'Pasaporte',
                        replacement: '',
                        radioId: 'id-unid-3_1_opA_1_opB_3_opC',
                        identifier: 'id-unid-3_1_opA_1_opB_3_opC',
                        extraReplacements: [],
                        checked: false,
                      }
                    ]
                  },
                  {
                    question: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                    wordToReplace: 'id-unid-3_1_opA_1_opB_4',
                    identifier: 'id-unid-3_1_opA_1_opB_4',
                    type: 'iText',
                    replacement: '',
                    placeholder: 'P. ej. 83558071Z',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                    },
                  },
                  {
                    // tslint:disable-next-line:max-line-length
                    question: 'Nombre completo de la persona que firma este contrato en nombre y representación del empresario (o empleador)',
                    wordToReplace: 'id-unid-3_1_opA_1_opB_5',
                    identifier: 'id-unid-3_1_opA_1_opB_5',
                    type: 'iText',
                    replacement: '',
                    placeholder: 'P. ej. Martino Montano Holguín',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación del empresario (o empleador). El contrato puede ser firmado por un representante legal o voluntario. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
                    },
                  },
                  {
                    type: 'iRadioB',
                    // tslint:disable-next-line:max-line-length
                    question: 'Documento de identificación de la persona que firma el contrato en nombre y representación del empresario (o empleador):',
                    identifier: 'id-unid-3_1_opA_1_opB_6',
                    wordToReplace: 'id-unid-3_1_opA_1_opB_6',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación del empresario (o empleador).',
                    },
                    replacement: '',
                    extraReplacements: [],
                    radios: [
                      {
                        label: 'DNI',
                        replacementOriginal: 'DNI',
                        replacement: '',
                        radioId: 'id-unid-3_1_opA_1_opB_6_opA',
                        identifier: 'id-unid-3_1_opA_1_opB_6_opA',
                        extraReplacements: [],
                        checked: true,
                      },
                      {
                        label: 'NIE',
                        replacementOriginal: 'NIE',
                        replacement: '',
                        radioId: 'id-unid-3_1_opA_1_opB_6_opB',
                        identifier: 'id-unid-3_1_opA_1_opB_6_opB',
                        extraReplacements: [],
                        checked: false,
                      },
                      {
                        label: 'Pasaporte',
                        replacementOriginal: 'Pasaporte',
                        replacement: '',
                        radioId: 'id-unid-3_1_opA_1_opB_6_opC',
                        identifier: 'id-unid-3_1_opA_1_opB_6_opC',
                        extraReplacements: [],
                        checked: false,
                      }
                    ]
                  },
                  {
                    question: 'Número del documento seleccionado en la pregunta anterior:',
                    wordToReplace: 'id-unid-3_1_opA_1_opB_7',
                    identifier: 'id-unid-3_1_opA_1_opB_7',
                    placeholder: 'P. ej. 83558071Z',
                    type: 'iText',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                    },
                  },
                  {
                    // tslint:disable-next-line:max-line-length
                    question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del empresario (o empleador)',
                    wordToReplace: 'id-unid-3_1_opA_1_opB_8',
                    placeholder: 'P. ej. apoderado, representante legal',
                    identifier: 'id-unid-3_1_opA_1_opB_8',
                    type: 'iText',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación del empresario (o empleador).',
                    },
                  },
                  {
                    // tslint:disable-next-line:max-line-length
                    question: 'Dirección del lugar donde reside la persona que firma este contrato en nombre y representación del empresario (o empleador)',
                    wordToReplace: 'id-unid-3_1_opA_1_opB_9',
                    placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                    identifier: 'id-unid-3_1_opA_1_opB_9',
                    type: 'iText',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
                    },
                  },
                ]
              },
            ],
          },
        ]
      },
      {
        label: 'Persona jurídica',
        // tslint:disable-next-line:max-line-length
        replacementOriginal: 'id-unid-3_1_opB_5 actuando en nombre y representación de: id-unid-3_1_opB_1, con domicilio en id-unid-3_1_opB_new1,  C.I.F/N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3  con la siguiente información: id-unid-3_1_opB_4.',
        // tslint:disable-next-line:max-line-length
        replacement: 'id-unid-3_1_opB_5 actuando en nombre y representación de: id-unid-3_1_opB_1, con domicilio en id-unid-3_1_opB_new1,  C.I.F/N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3  con la siguiente información: id-unid-3_1_opB_4.',
        extraReplacements: [],
        radioId: 'id-unid-3_1_opB',
        identifier: 'id-unid-3_1_opB',
        checked: false,
        subSteps: [
          {
            question: 'Nombre o razón social de la persona jurídica :',
            wordToReplace: 'id-unid-3_1_opB_1',
            identifier: 'id-unid-3_1_opB_1',
            type: 'iText',
            placeholder: 'P. ej. Banco Santander, S.A',
            replacement: '',
            indications: {
              areIndications: true,
              indicationsType: 'outsideText',
              // tslint:disable-next-line:max-line-length
              value: 'Si no conoce el nombre, mediante el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc), puede soliticar la información.',
            },
          },
          {
            question: 'Domicilio social completo de la persona jurídica:',
            wordToReplace: 'id-unid-3_1_opB_new1',
            identifier: 'id-unid-3_1_opB_new1',
            type: 'iText',
            placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
            replacement: '',
            indications: {
              areIndications: true,
              indicationsType: 'insideText',
              // tslint:disable-next-line:max-line-length
              value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del domicilio social',
            },
          },
          {
            question: 'NIF (Número de Identificación Fiscal) completo de la persona jurídica:',
            wordToReplace: 'id-unid-3_1_opB_2',
            identifier: 'id-unid-3_1_opB_2',
            type: 'iText',
            placeholder: 'P. ej. B29805314',
            replacement: '',
            indications: {
              areIndications: true,
              indicationsType: 'outsideText',
              // tslint:disable-next-line:max-line-length
              value: 'Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>NIF empresarial</strong></a>.',
            },
          },
          {
            question: 'Tipo de registro y lugar donde está inscrita la persona jurídica:',
            wordToReplace: 'id-unid-3_1_opB_3',
            identifier: 'id-unid-3_1_opB_3',
            type: 'iText',
            placeholder: 'P. ej. Registro Mercantil de Madrid',
            replacement: '',
            indications: {
              areIndications: true,
              indicationsType: 'outsideText',
              // tslint:disable-next-line:max-line-length
              value: 'Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank"><strong>Datos registrales</strong></a>',
            },
          },
          {
            question: 'Datos registrales de la persona jurídica:',
            wordToReplace: 'id-unid-3_1_opB_4',
            identifier: 'id-unid-3_1_opB_4',
            type: 'iText',
            placeholder: 'P. ej. Tomo 123, folio 10, hoja SE-1234',
            replacement: '',
            indications: {
              areIndications: true,
              indicationsType: 'outsideText',
              // tslint:disable-next-line:max-line-length
              value: 'Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank"><strong>Datos registrales</strong></a>',
            },
          },
          {
            type: 'iForEach',
            value: 1,
            min: 1,
            max: 10,
            replacement: '',
            identifier: 'id-unid-3_1_opB_5',
            wordToReplace: 'id-unid-3_1_opB_5',
            question: '¿Cuántas personas firmarán el contrato en nombre y representación de la persona jurídica?',
            indications: {
              areIndications: true,
              indicationsType: 'outsideText',
              value: 'Indique aquí el número de personas que firmarán el contrato en nombre y representación de la persona. Al ser una persona jurídica, el contrato lo debe firmar una persona física que haya recibido de esta facultades para poder contratar en nombre de la empresa y que puede ser, al mismo tiempo, su administrador (representante legal) o no (apoderada).',
            },
            content: [
              {
                identifier: 'id-unid-3_1_opB_5',
                wordToReplace: 'id-unid-3_1_opB_5',
                replacementOriginal: ' id-unid-3_1_opB_5_1, mayor de edad, con domicilio en id-unid-3_1_opB_5_2, id-unid-3_1_opB_5_3 núm. id-unid-3_1_opB_5_4, y en calidad de id-unid-3_1_opB_5_5; <br> <br>',
                replacement: '',
                extraReplacements: [],
                modifiedReplacements: [],
                modifiedExtraReplacements: [],
                subSteps: [
                  {
                    question: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídica:',
                    wordToReplace: 'id-unid-3_1_opB_5_1',
                    identifier: 'id-unid-3_1_opB_5_1',
                    type: 'iText',
                    placeholder: 'P. ej. Margarita García Pérez',
                    replacement: '',
                    mandatory: false,
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídica',
                    },
                  },
                  {
                    question: 'Domicilio completo del representante de la persona jurídica:',
                    wordToReplace: 'id-unid-3_1_opB_5_2',
                    identifier: 'id-unid-3_1_opB_5_2',
                    type: 'iText',
                    placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                    replacement: '',
                    mandatory: false,
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Domicilio, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país del representante de la persona jurídica',
                    },
                  },
                  {
                    type: 'iRadioB',
                    // tslint:disable-next-line:max-line-length
                    question: 'Documento de identidad del representante de la persona jurídica:',
                    identifier: 'id-unid-3_1_opB_5_3',
                    wordToReplace: 'id-unid-3_1_opB_5_3',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Seleccione el tipo de documento de identidad del representante de la persona jurídica.',
                    },
                    replacement: '',
                    extraReplacements: [],
                    radios: [
                      {
                        label: 'DNI',
                        replacementOriginal: 'DNI',
                        replacement: '',
                        radioId: 'id-unid-3_1_opB_5_3_opA',
                        identifier: 'id-unid-3_1_opB_5_3_opA',
                        extraReplacements: [],
                        checked: true,
                      },
                      {
                        label: 'NIE',
                        replacementOriginal: 'NIE',
                        replacement: '',
                        radioId: 'id-unid-3_1_opB_5_3_opB',
                        identifier: 'id-unid-3_1_opB_5_3_opB',
                        extraReplacements: [],
                        checked: false,
                      },
                      {
                        label: 'Pasaporte',
                        replacementOriginal: 'Pasaporte',
                        replacement: '',
                        radioId: 'id-unid-3_1_opB_5_3_opC',
                        identifier: 'id-unid-3_1_opB_5_3_opC',
                        extraReplacements: [],
                        checked: false,
                      }
                    ]
                  },
                  {
                    question: 'Número del documento de identificación personal seleccionado:',
                    wordToReplace: 'id-unid-3_1_opB_5_4',
                    identifier: 'id-unid-3_1_opB_5_4',
                    placeholder: 'P. ej: 42888457',
                    type: 'iText',
                    replacement: '',
                    mandatory: false,
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      value: 'Escriba el número que corresponde con el documento de identificación personal seleccionado en la pregunta anterior',
                    },
                  },
                  {
                    question: 'Función del representante de la persona jurídica:',
                    wordToReplace: 'id-unid-3_1_opB_5_5',
                    identifier: 'id-unid-3_1_opB_5_5',
                    type: 'iText',
                    placeholder: 'P. ej. administradora única',
                    replacement: '',
                    mandatory: false,
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Indique aquí en qué calidad o función el único representante, persona física, firma el contrato  en nombre y representación de la persona jurídica.',
                    },
                  },
                ]
              }
            ]
          }
        ]
      },
    ],
  },
  {
    question: 'Código de la cuenta de cotización de la empresa (o del empresario):',
    wordToReplace: 'id-unidnew-3_1',
    identifier: 'id-unidnew-3_1',
    type: 'iText',
    placeholder: 'P. ej. 000 130000000 00',
    replacement: '',
    mandatory: false,
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      // tslint:disable-next-line:max-line-length
      value: 'Indique aquí el código de la cuenta de cotización de la empresa, que fue otorgado al momento de solicitar la inscripción de la empresa (o su inscripción, en tanto que empresario/a individual) en la Dirección Provincial de la Tesorería General de la Seguridad Social correspondiente a su domicilio.',
    },
  },
  {
    question: 'Nombre completo del trabajador:',
    wordToReplace: 'id-unid-5',
    identifier: 'id-unid-5',
    type: 'iText',
    replacement: '',
    placeholder: 'P. ej. Martino Montano Holguín',
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      value: 'Indique el nombre completo, incluyendo sus dos apellidos.',
    },
  },
  {
    type: 'iRadioB',
    question: 'Tipo de documento de identificación del trabajador:',
    identifier: 'id-unid-6',
    wordToReplace: 'id-unid-6',
    indications: {
      areIndications: true,
      indicationsType: 'outsideText',
      // tslint:disable-next-line:max-line-length
      value: 'Seleccione el tipo de documento de identificación del trabajador',
    },
    replacement: '',
    extraReplacements: [],
    defaultRadioId: 'id-unid-6_opA',
    radios: [
      {
        label: 'DNI',
        replacementOriginal: 'DNI',
        replacement: '',
        radioId: 'id-unid-6_opA',
        identifier: 'id-unid-6_opA',
        extraReplacements: [],
        checked: true,
      },
      {
        label: 'NIE',
        replacementOriginal: 'NIE',
        replacement: '',
        radioId: 'id-unid-6_opB',
        identifier: 'id-unid-6_opB',
        extraReplacements: [],
        checked: false,
      },
      {
        label: 'Pasaporte',
        replacementOriginal: 'Pasaporte',
        replacement: '',
        radioId: 'id-unid-6_opC',
        identifier: 'id-unid-6_opC',
        extraReplacements: [],
        checked: false,
      }
    ]
  },
  {
    question: 'Número del documento seleccionado en la pregunta anterior',
    wordToReplace: 'id-unid-7',
    identifier: 'id-unid-7',
    type: 'iText',
    replacement: '',
    placeholder: 'P. ej. 83558071Z',
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
    },
  },
  {
    "replacement": "",
    "identifier": "id-unid-8",
    "wordToReplace": "id-unid-8",
    "question": "Número de afiliación a la Seguridad Social del trabajador",
    "placeholder": "Ej. 281234567892",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Indique aquí el número de afiliación a la Seguridad Social de la persona que será contratada mediante este contrato de trabajo. Se trata de un número de 12 dígitos."
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-9",
    "wordToReplace": "id-unid-9",
    "question": "Nivel de estudios del trabajador",
    "placeholder": "Ej. graduado en psicología",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Nivel formativo o de estudios de la persona que será contratada mediante este contrato de trabajo. Por ejemplo, sin estudios; estudios primarios incompletos; estudios primarios completos; estudios secundarios; programas de formación profesional (especificando el programa); educación general; licenciado/a o graduado/a (especificando la licenciatura o el grado), etc.\n\t\t\t\t\t\t\t\t\t\t\t "
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-10",
    "wordToReplace": "id-dec-10",
    "question": "Nacionalidad del trabajador:",
    "placeholder": "Ej. española",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-11",
    "wordToReplace": "id-dec-11",
    "question": "Fecha de nacimiento del trabajador:",
    "placeholder": "",
    "mandatory": false,
    "isFocused": false,
    "type": "iDate",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-12",
    "wordToReplace": "id-dec-12",
    "question": "El trabajador es:",
    "type": "iRadioC",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Tenga en cuenta que los menores de edad (emancipados o no emancipados) solo pueden celebrar válidamente contratos de trabajo si son mayores de 16 años, excepto para intervenir en espectáculos públicos (con autorización previa y por escrito de la autoridad laboral)."
    },
    "extraReplacements": [
      {
        "identifier": "iddec12-extra-0",
        "wordToReplace": "iddec12-extra-0",
        "insideId": "opA"
      }
    ],
    "radios": [
      {
        "label": "mayor de edad",
        "replacement": "y representación",
        "replacementOriginal": "y representación",
        "radioId": "id-dec-12_opA",
        "identifier": "id-dec-12_opA",
        "subSteps": [],
        "extraReplacements": [
          {
            "identifier": "iddec12-extra-0",
            "insideId": "opA",
            "replacement": "",
            "replacementOriginal": ""
          }
        ],
        "checked": true
      },
      {
        "label": "menor de edad y mayor de 16 años",
        "replacement": "id-dec-12_opB_0",
        "replacementOriginal": "id-dec-12_opB_0",
        "radioId": "id-dec-12_opB",
        "identifier": "id-dec-12_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-12_opB_0",
            "wordToReplace": "id-dec-12_opB_0",
            "question": "El trabajador es:",
            "type": "iRadioC",
            "subType": "",
            "indications": {
              "areIndications": true,
              "indicationsType": "insideText",
              "value": "La emancipación permite que alguien mayor de 16 y menor de 18 años pueda disponer de su persona y de sus bienes como si fuera mayor de edad (por ejemplo, pueda firmar un contrato de trabajo en su nombre), aunque con algunas excepciones. Esta debe ser concedida por las personas que ejercen la patria potestad sobre el menor (padres, madres, tutores legales) o por el juez previa solicitud del menor de edad.\n\t\t\t\t\t\t\t\t\t\t\t "
            },
            "extraReplacements": [
              {
                "identifier": "iddec12_opB_0-extra-0",
                "wordToReplace": "iddec12_opB_0-extra-0",
                "insideId": "opA"
              }
            ],
            "radios": [
              {
                "label": "menor no emancipado/a",
                "replacement": "con la asistencia legal de id-dec-12_opB_0_opA_0, con id-dec-12_opB_0_opA_1 id-dec-12_opB_0_opA_2, en calidad de id-dec-12_opB_0_opA_4",
                "replacementOriginal": "con la asistencia legal de id-dec-12_opB_0_opA_0, con id-dec-12_opB_0_opA_1 id-dec-12_opB_0_opA_2, en calidad de id-dec-12_opB_0_opA_4",
                "radioId": "id-dec-12_opB_0_opA",
                "identifier": "id-dec-12_opB_0_opA",
                subSteps: [
                  {
                    question: 'Nombre o denominación del representante legal del trabajador menor de edad:',
                    wordToReplace: 'id-dec-12_opB_0_opA_0',
                    identifier: 'id-dec-12_opB_0_opA_0',
                    type: 'iText',
                    replacement: '',
                    placeholder: 'P. ej. Martino Montano Holguín',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      value: 'Indique el nombre completo, incluyendo sus dos apellidos. Puede tratarse de la madre, el padre o la persona o institución que lo tenga a su cargo. El representante legal prestará asistencia al menor en la firma de este contrato y también deberá firmarlo',
                    },
                  },
                  {
                    type: 'iRadioB',
                    question: 'Tipo de documento de identificación del representante legal del trabajador menor de edad:',
                    identifier: 'id-dec-12_opB_0_opA_1',
                    wordToReplace: 'id-dec-12_opB_0_opA_1',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Seleccione el tipo de documento de identificación del representante legal del trabajador menor de edad',
                    },
                    replacement: '',
                    extraReplacements: [],
                    defaultRadioId: 'id-unid-6_opA',
                    radios: [
                      {
                        label: 'DNI',
                        replacementOriginal: 'DNI',
                        replacement: '',
                        radioId: 'id-dec-12_opB_0_opA_1_opA',
                        identifier: 'id-dec-12_opB_0_opA_1_opA',
                        extraReplacements: [],
                        checked: true,
                      },
                      {
                        label: 'NIE',
                        replacementOriginal: 'NIE',
                        replacement: '',
                        radioId: 'id-dec-12_opB_0_opA_1_opB',
                        identifier: 'id-dec-12_opB_0_opA_1_opB',
                        extraReplacements: [],
                        checked: false,
                      },
                      {
                        label: 'Pasaporte',
                        replacementOriginal: 'Pasaporte',
                        replacement: '',
                        radioId: 'id-dec-12_opB_0_opA_1_opC',
                        identifier: 'id-dec-12_opB_0_opA_1_opC',
                        extraReplacements: [],
                        checked: false,
                      }
                    ]
                  },
                  {
                    question: 'Número del documento seleccionado en la pregunta anterior',
                    wordToReplace: 'id-dec-12_opB_0_opA_2',
                    identifier: 'id-dec-12_opB_0_opA_2',
                    type: 'iText',
                    replacement: '',
                    placeholder: 'P. ej. 83558071Z',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                    },
                  },
                  {
                    question: 'Relación que el representante legal del trabajador menor de edad tiene con el mismo:',
                    wordToReplace: 'id-dec-12_opB_0_opA_4',
                    identifier: 'id-dec-12_opB_0_opA_4',
                    type: 'iText',
                    replacement: '',
                    placeholder: 'P. ej. padre, tutor',
                    indications: {
                      areIndications: false,
                      indicationsType: '',
                      value: '',
                    },
                  },
                ],
                "extraReplacements": [
                  {
                    "identifier": "iddec12_opB_0-extra-0",
                    "insideId": "opA",
                    "replacement": "Particularmente, al ser el TRABAJADOR menor de edad, se cuenta con el consentimiento expreso y la asistencia legal de su representante legal, quien también firma este contrato.",
                    "replacementOriginal": "Particularmente, al ser el TRABAJADOR menor de edad, se cuenta con el consentimiento expreso y la asistencia legal de su representante legal, quien también firma este contrato."
                  }
                ],
                "checked": false
              },
              {
                "label": "menor emancipado/a",
                "replacement": "y representación",
                "replacementOriginal": "y representación",
                "radioId": "id-dec-12_opB_0_opB",
                "identifier": "id-dec-12_opB_0_opB",
                subSteps: [],
                "extraReplacements": [
                  {
                    "identifier": "iddec12_opB_0-extra-0",
                    "insideId": "opA",
                    "replacement": "",
                    "replacementOriginal": ""
                  }
                ],
                "checked": true
              }
            ]
          }
        ],
        "extraReplacements": [
          {
            "identifier": "iddec12-extra-0",
            "insideId": "opA",
            "replacement": "iddec12_opB_0-extra-0",
            "replacementOriginal": "iddec12_opB_0-extra-0"
          }
        ],
        "checked": false
      },
      {
        "label": "menor de 16 años y su trabajo consistirá en una intervención en un espectáculo público",
        "replacement": "con la asistencia legal de id-dec-12_opC_0, con id-dec-12_opC_1 id-dec-12_opC_2, en calidad de id-dec-12_opC_3",
        "replacementOriginal": "con la asistencia legal de id-dec-12_opC_0, con id-dec-12_opC_1 id-dec-12_opC_2, en calidad de id-dec-12_opC_3",
        "radioId": "id-dec-12_opC",
        "identifier": "id-dec-12_opC",
        "subSteps": [
          {
            question: 'Nombre o denominación del representante legal del trabajador menor de edad:',
            wordToReplace: 'id-dec-12_opC_0',
            identifier: 'id-dec-12_opC_0',
            type: 'iText',
            replacement: '',
            placeholder: 'P. ej. Martino Montano Holguín',
            indications: {
              areIndications: true,
              indicationsType: 'insideText',
              value: 'Indique el nombre completo, incluyendo sus dos apellidos. Puede tratarse de la madre, el padre o la persona o institución que lo tenga a su cargo. El representante legal prestará asistencia al menor en la firma de este contrato y también deberá firmarlo',
            },
          },
          {
            type: 'iRadioB',
            question: 'Tipo de documento de identificación del representante legal del trabajador menor de edad:',
            identifier: 'id-dec-12_opC_1',
            wordToReplace: 'id-dec-12_opC_1',
            indications: {
              areIndications: true,
              indicationsType: 'outsideText',
              // tslint:disable-next-line:max-line-length
              value: 'Seleccione el tipo de documento de identificación del representante legal del trabajador menor de edad',
            },
            replacement: '',
            extraReplacements: [],
            defaultRadioId: 'id-dec-12_opC_1_opA',
            radios: [
              {
                label: 'DNI',
                replacementOriginal: 'DNI',
                replacement: '',
                radioId: 'id-dec-12_opC_1_opA',
                identifier: 'id-dec-12_opC_1_opA',
                extraReplacements: [],
                checked: true,
              },
              {
                label: 'NIE',
                replacementOriginal: 'NIE',
                replacement: '',
                radioId: 'id-dec-12_opC_1_opB',
                identifier: 'id-dec-12_opC_1_opB',
                extraReplacements: [],
                checked: false,
              },
              {
                label: 'Pasaporte',
                replacementOriginal: 'Pasaporte',
                replacement: '',
                radioId: 'id-dec-12_opC_1_opC',
                identifier: 'id-dec-12_opC_1_opC',
                extraReplacements: [],
                checked: false,
              }
            ]
          },
          {
            question: 'Número del documento seleccionado en la pregunta anterior',
            wordToReplace: 'id-dec-12_opC_2',
            identifier: 'id-dec-12_opC_2',
            type: 'iText',
            replacement: '',
            placeholder: 'P. ej. 83558071Z',
            indications: {
              areIndications: true,
              indicationsType: 'insideText',
              value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
            },
          },
          {
            question: 'Relación que el representante legal del trabajador menor de edad tiene con el mismo:',
            wordToReplace: 'id-dec-12_opC_3',
            identifier: 'id-dec-12_opC_3',
            type: 'iText',
            replacement: '',
            placeholder: 'P. ej. padre, tutor',
            indications: {
              areIndications: false,
              indicationsType: '',
              value: '',
            },
          },
        ],
        "extraReplacements": [
          {
            "identifier": "iddec12-extra-0",
            "insideId": "opA",
            "replacement": "Particularmente, al ser el TRABAJADOR menor de edad, se cuenta con el consentimiento expreso y la asistencia legal de su representante legal, quien también firma este contrato.",
            "replacementOriginal": "Particularmente, al ser el TRABAJADOR menor de edad, se cuenta con el consentimiento expreso y la asistencia legal de su representante legal, quien también firma este contrato."
          }
        ],
        "checked": false
      },
    ]
  },
  {
    question: 'Domicilio completo del trabajador:',
    wordToReplace: 'id-dec-13',
    identifier: 'id-dec-13',
    type: 'iText',
    placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    replacement: '',
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      // tslint:disable-next-line:max-line-length
      value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del domicilio',
    },
  },
  {
    "replacement": "",
    "identifier": "id-dec-17",
    "wordToReplace": "id-dec-17",
    "question": "¿El trabajador desarrollaba su labor previamente para la empresa con un contrato de carácter temporal?",
    "type": "iRadioB",
    "subType": "select",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-17_opA",
        "identifier": "id-dec-17_opA",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "Sí, y se desea convertir ese contrato previo en un contrato fijo discontinuo según lo dispuesto en el convenio aplicable",
        "replacement": "Además se expone que el Trabajador ha prestado sus servicios anteriormente para el Empleador bajo un contrato de trabajo de carácter temporal y que se cumplen con los requisitos establecidos en el convenio aplicable para la conversión del contrato de trabajo temporal previo del Trabajador en el presente Contrato.",
        "replacementOriginal": "Además se expone que el Trabajador ha prestado sus servicios anteriormente para el Empleador bajo un contrato de trabajo de carácter temporal y que se cumplen con los requisitos establecidos en el convenio aplicable para la conversión del contrato de trabajo temporal previo del Trabajador en el presente Contrato.",
        "radioId": "id-dec-17_opB",
        "identifier": "id-dec-17_opB",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "Sí, pero estos contratos son independientes (es decir, no se desea convertir ese contrato en un contrato fijo discontinuo)",
        "replacement": "Además se expone que el Trabajador ha prestado sus servicios anteriormente para el Empleador bajo un contrato de trabajo de carácter temporal, pero dicho contrato temporal tiene un carácter totalmente independiente respecto al presente contrato.",
        "replacementOriginal": "Además se expone que el Trabajador ha prestado sus servicios anteriormente para el Empleador bajo un contrato de trabajo de carácter temporal, pero dicho contrato temporal tiene un carácter totalmente independiente respecto al presente contrato.",
        "radioId": "id-dec-17_opC",
        "identifier": "id-dec-17_opC",
        "subSteps": [],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-18",
    "wordToReplace": "id-dec-18",
    "question": "El trabajador está inscrito en el Programa de Activación para el Empleo del SEPE:",
    "type": "iRadioB",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "\nPrograma de Activación para el Empleo del Servicio Público de Empleo Estatal (SEPE). Este programa, regulado por el Real Decreto-ley 16/2014, de 19 de diciembre, está destinado a personas desempleadas de larga duración, y comprende una ayuda económica de acompañamiento, así como políticas activas de empleo y actuaciones de intermediación laboral.  Debido a que la ayuda económica de acompañamiento es compatible con el salario percibido en virtud de un contrato de trabajo durante un período de cinco meses y a que durante este tiempo el empleador descontará la cuantía de la ayuda económica del salario convenido, esta situación se debe hacer constar en el contrato de trabajo. \n\nAdemás, será necesario que el trabajador presente ante la empresa un documento acreditativo del periodo y cuantía de la ayuda económica reconocida (por ejemplo, la resolución adoptada por el SEPE reconociendo la admisión al programa y el pago de la ayuda)."
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": "El TRABAJADOR está admitido en el Programa de Activación para el Empleo y está en posesión del documento acreditativo o resolución del Servicio Público de Empleo Estatal",
        "replacementOriginal": "El TRABAJADOR está admitido en el Programa de Activación para el Empleo y está en posesión del documento acreditativo o resolución del Servicio Público de Empleo Estatal",
        "radioId": "id-dec-18_opA",
        "identifier": "id-dec-18_opA",
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-18_opB",
        "identifier": "id-dec-18_opB",
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-19",
    "wordToReplace": "id-dec-19",
    "question": "¿Un convenio colectivo es aplicable a la empresa?",
    "type": "iRadioC",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": " "
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": ", y por el siguiente convenio colectivo: id-dec-19_opA_0",
        "replacementOriginal": ", y por el siguiente convenio colectivo: id-dec-19_opA_0",
        "radioId": "id-dec-19_opA",
        "identifier": "id-dec-19_opA",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-19_opA_0",
            "wordToReplace": "id-dec-19_opA_0",
            "question": "Nombre del convenio colectivo aplicable:",
            "placeholder": "P. ej: convenio colectivo estatal de empresas de consultoría",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-19_opB",
        "identifier": "id-dec-19_opB",
        "subSteps": [],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-20",
    "wordToReplace": "id-dec-20",
    "question": "Grupo profesional al que pertenecerá el trabajador",
    "placeholder": "P. ej: personal técnico",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Los grupos profesionales agrupan a los trabajadores según sus aptitudes profesionales, titulaciones y condiciones generales del puesto. Dentro de un mismo grupo profesional se pueden incluir distintas tareas, funciones, especialidades profesionales, así como responsabilidades profesionales.\n\nEl grupo profesional será el que corresponda según el convenio colectivo aplicable a la empresa; o, en caso de no existir convenio colectivo, el que corresponda según el sistema de clasificación profesional vigente en la empresa.\n\nAdemás de en el contrato de trabajo, el grupo profesional debe aparecer en la nómina del trabajador.\n\t\t\t\t\t\t\t\t\t\t\t "
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-21",
    "wordToReplace": "id-dec-21",
    "question": "Nombre del puesto que ocupará el trabajador contratado:",
    "placeholder": "P. ej: Programador Back-end",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-22",
    "wordToReplace": "id-dec-22",
    "question": "Funciones que desarrollará el trabajador en el puesto:",
    "placeholder": "Ej. Mantenimiento de bases de datos, etc...",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "textarea",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Las funciones que desarrollará el trabajador vienen determinadas por el grupo profesional al que este pertenecerá, ya que solo podrá ejercer funciones que correspondan a ese grupo profesional (aunque no es necesario que ejerza todas las funciones que corresponden a ese grupo profesional)"
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-23",
    "wordToReplace": "id-dec-23",
    "question": "¿Cuál es la actividad de carácter cíclico que desarrolla la empresa y que son las funciones a desarrollar por el trabajador?",
    "placeholder": "P. ej: servicio de restauración durante la temporada de verano",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "textarea",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-24",
    "wordToReplace": "id-dec-24",
    "question": "El trabajador prestará habitualmente sus servicios:",
    "type": "iRadioC",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Elija: \"En centros de trabajo móviles o itinerantes\" si, de manera prioritaria, la prestación de trabajo no se ejecutará en uno o varios centros de trabajo fijos o permanentes, debido a que el lugar de trabajo es cambiante y está sujeto movilidad constante. El/la trabajador prestará sus servicios en este tipo de centros de trabajo, por ejemplo, cuando estos consistan en la participación en espectáculos artísticos, circos, o determinadas empresas de montajes o instalaciones industriales, eléctricas y telefónicas. Si el trabajador presta sus servicios en centros de trabajo móviles o itinerantes, la movilidad geográfica es libre para el empresario; es decir, se encuentra dentro de su poder de dirección empresarial."
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "en uno o varios centros de trabajo fijos",
        "replacement": "El TRABAJADOR prestará sus servicios en los centros de trabajo, ubicados en:\n\nid-dec-24_opB_0\n\nNo obstante, el EMPLEADOR se reserva el derecho de modificar, respetando los preavisos legalmente establecidos, el lugar de trabajo del TRABAJADOR, incluso si este traslado exige un cambio de residencia, siempre que se encuentre justificado por razones económicas, técnicas, organizativas o de producción. En este caso, el TRABAJADOR contará con los derechos reconocidos por el artículo 40 del Estatuto de los Trabajadores.",
        "replacementOriginal": "El TRABAJADOR prestará sus servicios en los centros de trabajo, ubicados en:\n\nid-dec-24_opB_0\n\nNo obstante, el EMPLEADOR se reserva el derecho de modificar, respetando los preavisos legalmente establecidos, el lugar de trabajo del TRABAJADOR, incluso si este traslado exige un cambio de residencia, siempre que se encuentre justificado por razones económicas, técnicas, organizativas o de producción. En este caso, el TRABAJADOR contará con los derechos reconocidos por el artículo 40 del Estatuto de los Trabajadores.",
        "radioId": "id-dec-24_opB",
        "identifier": "id-dec-24_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-24_opB_0",
            "wordToReplace": "id-dec-24_opB_0",
            "question": "Indique los centros de trabajo y sus direcciones:",
            "placeholder": "P. ej: Centro de trabajo 1: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España. Centro de trabajo 2: Avenida Trinidad 2, San Cristóbal de La laguna, Santa Cruz de Tenerife..",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "textarea",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "en centros de trabajo móviles o itinerantes (cuya ubicación cambia constantemente)",
        "replacement": "El TRABAJADOR prestará sus servicios en centros de trabajo móviles o itinerantes, estando adscrita a obras o servicios en el siguiente ámbito territorial: id-dec-24_opC_0. Por tanto, dentro de dicho ámbito territorial, el EMPLEADOR se reserva el derecho de modificar libremente el lugar de trabajo del TRABAJADOR; es decir, sin deber respetar el régimen general previsto en el artículo 40 del Estatuto de los Trabajadores.",
        "replacementOriginal": "El TRABAJADOR prestará sus servicios en centros de trabajo móviles o itinerantes, estando adscrita a obras o servicios en el siguiente ámbito territorial: id-dec-24_opC_0. Por tanto, dentro de dicho ámbito territorial, el EMPLEADOR se reserva el derecho de modificar libremente el lugar de trabajo del TRABAJADOR; es decir, sin deber respetar el régimen general previsto en el artículo 40 del Estatuto de los Trabajadores.",
        "radioId": "id-dec-24_opC",
        "identifier": "id-dec-24_opC",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-24_opC_0",
            "wordToReplace": "id-dec-24_opC_0",
            "question": "Ámbito territorial dentro del cual pueden moverse o itinerar dichos centros de trabajo:",
            "placeholder": "P. ej: Toda España; Canarias,...",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "textarea",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "a distancia",
        "replacement": "El TRABAJADOR prestará sus servicios a distancia, de manera preponderante, en el siguiente domicilio:\nid-dec-24_opD_0. No obstante, el EMPLEADOR se reserva el derecho de modificar, respetando los preavisos legalmente establecidos, el lugar de trabajo del TRABAJADOR, incluso si este traslado exige un cambio de residencia, siempre que se encuentre justificado por razones económicas, técnicas, organizativas o de producción. En este caso, el TRABAJADOR contará con los derechos reconocidos por el artículo 40 del Estatuto de los Trabajadores.",
        "replacementOriginal": "El TRABAJADOR prestará sus servicios a distancia, de manera preponderante, en el siguiente domicilio:\nid-dec-24_opD_0. No obstante, el EMPLEADOR se reserva el derecho de modificar, respetando los preavisos legalmente establecidos, el lugar de trabajo del TRABAJADOR, incluso si este traslado exige un cambio de residencia, siempre que se encuentre justificado por razones económicas, técnicas, organizativas o de producción. En este caso, el TRABAJADOR contará con los derechos reconocidos por el artículo 40 del Estatuto de los Trabajadores.",
        "radioId": "id-dec-24_opD",
        "identifier": "id-dec-24_opD",
        "subSteps": [
          {
            question: 'Dirección del lugar donde prestará los servicios el trabajador:',
            wordToReplace: 'id-dec-24_opD_0',
            identifier: 'id-dec-24_opD_0',
            placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
            type: 'iText',
            replacement: '',
            indications: {
              areIndications: true,
              indicationsType: 'insideText',
              // tslint:disable-next-line:max-line-length
              value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país)',
            },
          },
        ],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-25",
    "wordToReplace": "id-dec-25",
    "question": "Jornada de trabajo:",
    "type": "iRadioC",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": "- \"A tiempo completo\" si deberá trabajar toda la jornada laboral, cuya duración no podrá superar la establecida en el convenio colectivo aplicable, y en ningún caso podrá ser superior a 40 horas semanales.\n\n- \"A tiempo parcial\" si la jornada del/la trabajador(a) será inferior a la de un(a) trabajador(a) a tiempo completo comparable (trabajador a tiempo completo de la misma empresa y centro de trabajo, con el mismo tipo de contrato de trabajo y que realice un trabajo idéntico o similar), o a la jornada a tiempo completo prevista en el convenio colectivo o, en su defecto, a 40 horas semanales. \n\nEn algunos casos existen restricciones para la celebración de contratos a tiempo parcial. Por ejemplo, los contratos temporales de interinidad solo pueden celebrarse a tiempo parcial en determinados casos: cuando el trabajador sustituido tuviera una jornada a tiempo parcial, cuando la cobertura definitiva del puesto de trabajo vaya a hacerse a tiempo parcial, o cuando se sustituya a trabajadores/as cuya jornada de trabajo ha sido reducida.¿Necesita ayuda personalizada?Al final, tendrá la opción de consultar a un abogado.\n\t\t\t\t\t\t\t\t\t\t\t "
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "a tiempo completo",
        "replacement": "La jornada de trabajo del TRABAJADOR será a tiempo completo.\nAsí, la jornada de trabajo será de id-dec-25_opA_0 horas semanales, prestadas conforme al siguiente horario: id-dec-25_opA_1. id-dec-25_opA_2",
        "replacementOriginal": "La jornada de trabajo del TRABAJADOR será a tiempo completo.\nAsí, la jornada de trabajo será de id-dec-25_opA_0 horas semanales, prestadas conforme al siguiente horario: id-dec-25_opA_1. id-dec-25_opA_2",
        "radioId": "id-dec-25_opA",
        "identifier": "id-dec-25_opA",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-25_opA_0",
            "wordToReplace": "id-dec-25_opA_0",
            "question": "Número de horas a la semana que deberá realizar el trabajador (menor o igual a 40)",
            "placeholder": "Número menor a 40",
            "mandatory": false,
            "isFocused": false,
            "type": "iNumber",
            rules: [],
            "subType": "",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            }
          },
          {
            "replacement": "",
            "identifier": "id-dec-25_opA_1",
            "wordToReplace": "id-dec-25_opA_1",
            "question": "Horario del trabajador",
            "placeholder": "P. ej: De lunes a jueves de 9 a 18h. Viernes de 9 a 14.30 h.",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "textarea",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            }
          },
          {
            "replacement": "",
            "identifier": "id-dec-25_opA_2",
            "wordToReplace": "id-dec-25_opA_2",
            "question": "El trabajador se compromete a realizar horas extraordinarias:",
            "type": "iRadioB",
            "subType": "textarea",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            },
            "extraReplacements": [],
            "radios": [
              {
                "label": "Sí",
                "replacement": "En todo caso, se respetarán los descansos legalmente establecidos.Además, el TRABAJADOR se compromete a la realización, a solicitud del EMPLEADOR, de hasta un máximo de 80 horas extraordinarias al año, prorrateables, en su caso, en función de la proporción de la jornada en cómputo anual que realice con relación a la jornada general de la empresa, salvo lo previsto en el artículo 35.3 del Estatuto de los Trabajadores.Se considerarán horas extraordinarias las horas de trabajo realizadas por encima de la duración de la jornada de trabajo pactada en el presente artículo.Estas horas se compensarán por tiempos equivalentes de descanso retribuido dentro de los cuatro meses siguientes a su realización.",
                "replacementOriginal": "En todo caso, se respetarán los descansos legalmente establecidos.Además, el TRABAJADOR se compromete a la realización, a solicitud del EMPLEADOR, de hasta un máximo de 80 horas extraordinarias al año, prorrateables, en su caso, en función de la proporción de la jornada en cómputo anual que realice con relación a la jornada general de la empresa, salvo lo previsto en el artículo 35.3 del Estatuto de los Trabajadores.Se considerarán horas extraordinarias las horas de trabajo realizadas por encima de la duración de la jornada de trabajo pactada en el presente artículo.Estas horas se compensarán por tiempos equivalentes de descanso retribuido dentro de los cuatro meses siguientes a su realización.",
                "radioId": "id-dec-25_opA_2_opA",
                "identifier": "id-dec-25_opA_2_opA",
                "extraReplacements": [],
                "checked": false
              },
              {
                "label": "No",
                "replacement": "En todo caso, se respetarán los descansos legalmente establecidos.",
                "replacementOriginal": "En todo caso, se respetarán los descansos legalmente establecidos.",
                "radioId": "id-dec-25_opA_2_opB",
                "identifier": "id-dec-25_opA_2_opB",
                "extraReplacements": [],
                "checked": true
              }
            ]
          }
        ],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "a tiempo parcial",
        "replacement": "La jornada de trabajo del TRABAJADOR será a tiempo parcial.\nAsí, la jornada de trabajo ordinaria será de: id-dec-25_opB_0, siendo esta jornada inferior a la de un trabajador a tiempo completo comparable, de acuerdo a lo establecido en el artículo 12 del Estatuto de los Trabajadores.\nLa distribución del tiempo de trabajo será la siguiente: id-dec-25_opB_1\nid-dec-25_opB_2",
        "replacementOriginal": "La jornada de trabajo del TRABAJADOR será a tiempo parcial.\nAsí, la jornada de trabajo ordinaria será de: id-dec-25_opB_0, siendo esta jornada inferior a la de un trabajador a tiempo completo comparable, de acuerdo a lo establecido en el artículo 12 del Estatuto de los Trabajadores.\nLa distribución del tiempo de trabajo será la siguiente: id-dec-25_opB_1\nid-dec-25_opB_2",
        "radioId": "id-dec-25_opB",
        "identifier": "id-dec-25_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-25_opB_0",
            "wordToReplace": "id-dec-25_opB_0",
            "question": "Número de horas y periodicidad de las horas",
            "placeholder": "P. ej: 10 horas semanales",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            }
          },
          {
            "replacement": "",
            "identifier": "id-dec-25_opB_1",
            "wordToReplace": "id-dec-25_opB_1",
            "question": "Horario del trabajador",
            "placeholder": "P. ej: De lunes a jueves de 9 a 18h. Viernes de 9 a 14.30 h.",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "textarea",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            }
          },
          {
            "replacement": "",
            "identifier": "id-dec-25_opB_2",
            "wordToReplace": "id-dec-25_opB_2",
            "question": "El trabajador se compromete a realizar horas extraordinarias:",
            "type": "iRadioC",
            "subType": "textarea",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            },
            "extraReplacements": [],
            "radios": [
              {
                "label": "Sí",
                "replacement": "Además, el TRABAJADOR se compromete a la realización, a solicitud del EMPLEADOR, de hasta un máximo de id-dec-25_opB_2_opA_0 horas complementarias anuales, no excediendo del 30 por ciento de las horas ordinarias pactadas en este artículo, salvo si un convenio colectivo aplicable a la empresa estableciera un porcentaje máximo superior. En ningún caso, la suma de las horas ordinarias y complementarias podrá superar la jornada de un trabajador a tiempo completo comparable.La distribución y forma de realización de las horas complementarias deberá respetar lo previsto en este artículo, así como los límites en materia de jornada y descansos establecidos en los artículos 34.3 y 4, 36.1 y 17.1 del Estatuto de los Trabajadores.El EMPLEADOR preavisará con un mínimo de tres días de antelación a su realización, el día y la hora en que el TRABAJADOR deberá realizar las horas complementarias.Las horas complementarias efectivamente realizadas se retribuirán como ordinarias de acuerdo a lo previsto en el presente Contrato de trabajo, computándose a efectos de base de cotización a la Seguridad Social y períodos de carencia y bases reguladoras de las prestaciones.Este pacto de horas complementarias podrá quedar sin efecto por renuncia del TRABAJADOR mediante un preaviso de quince días, cuando concurran las circunstancias reguladas en el artículo 12.5.g) del Estatuto de los Trabajadores.En caso de incumplimiento por el EMPLEADOR de lo aquí previsto o de lo dispuesto en el artículo 12.5 del Estatuto de los Trabajadores, la negativa del TRABAJADOR a realizar las horas complementarias aquí pactadas no constituirá conducta sancionable.",
                "replacementOriginal": "Además, el TRABAJADOR se compromete a la realización, a solicitud del EMPLEADOR, de hasta un máximo de id-dec-25_opB_2_opA_0 horas complementarias anuales, no excediendo del 30 por ciento de las horas ordinarias pactadas en este artículo, salvo si un convenio colectivo aplicable a la empresa estableciera un porcentaje máximo superior. En ningún caso, la suma de las horas ordinarias y complementarias podrá superar la jornada de un trabajador a tiempo completo comparable.La distribución y forma de realización de las horas complementarias deberá respetar lo previsto en este artículo, así como los límites en materia de jornada y descansos establecidos en los artículos 34.3 y 4, 36.1 y 17.1 del Estatuto de los Trabajadores.El EMPLEADOR preavisará con un mínimo de tres días de antelación a su realización, el día y la hora en que el TRABAJADOR deberá realizar las horas complementarias.Las horas complementarias efectivamente realizadas se retribuirán como ordinarias de acuerdo a lo previsto en el presente Contrato de trabajo, computándose a efectos de base de cotización a la Seguridad Social y períodos de carencia y bases reguladoras de las prestaciones.Este pacto de horas complementarias podrá quedar sin efecto por renuncia del TRABAJADOR mediante un preaviso de quince días, cuando concurran las circunstancias reguladas en el artículo 12.5.g) del Estatuto de los Trabajadores.En caso de incumplimiento por el EMPLEADOR de lo aquí previsto o de lo dispuesto en el artículo 12.5 del Estatuto de los Trabajadores, la negativa del TRABAJADOR a realizar las horas complementarias aquí pactadas no constituirá conducta sancionable.",
                "radioId": "id-dec-25_opB_2_opA",
                "identifier": "id-dec-25_opB_2_opA",
                "subSteps": [
                  {
                    "type": "iNumber",
                    "subType": "",
                    "identifier": "id-dec-25_opB_2_opA_0",
                    "wordToReplace": "id-dec-25_opB_2_opA_0",
                    "replacement": "",
                    "question": "Número de horas complementarias que el trabajador se compromete a realizar al año (máximo el 30 por ciento de las horas previamente indicadas, o un porcentaje superior si el convenio colectivo aplicable lo permite):",
                    "indications": {
                      "areIndications": true,
                      "indicationsType": "insideText",
                      "value": "Indique aquí cuántas horas complementarias se compromete a realizar el/la trabajador(a) cada año.\n\nTenga en cuenta que las horas complementarias no pueden exceder del 30 por ciento de las horas ordinarias de trabajo objeto del contrato (es decir, las previamente indicadas), ampliable hasta el 60 por ciento por convenio colectivo. Asimismo, la suma de las horas ordinarias y las complementarias no puede ser superar la jornada de trabajo de un trabajador a tiempo completo comparable (trabajador a tiempo completo de la misma empresa y centro de trabajo, con el mismo tipo de contrato de trabajo y que realice un trabajo idéntico o similar). "
                    },
                    rules: [],
                    "placeholder": "Escribe un número",
                    "mandatory": false,
                    "isFocused": false,
                  }
                ],
                "extraReplacements": [],
                "checked": false
              },
              {
                "label": "No",
                "replacement": "",
                "replacementOriginal": "",
                "radioId": "id-dec-25_opB_2_opB",
                "identifier": "id-dec-25_opB_2_opB",
                "subSteps": [],
                "extraReplacements": [],
                "checked": true
              }
            ]
          }
        ],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-decnew-26",
    "wordToReplace": "id-decnew-26",
    "question": "Forma y orden en el que será llamado el trabajador para incorporarse a la actividad:",
    "placeholder": "P. ej: El llamamiento al trabajador se realizará por vía telemática con un preaviso de diez días naturales.",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "textarea",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-26",
    "wordToReplace": "id-dec-26",
    "question": "Fecha de incorporación al puesto de trabajo:",
    "placeholder": "",
    "mandatory": false,
    "isFocused": false,
    "type": "iDate",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-27",
    "wordToReplace": "id-dec-27",
    "question": "¿El trabajador es una persona extranjera que aún no cuenta con autorización de trabajo en España, que presentará ante la Administración este contrato de trabajo para obtener dicha autorización?",
    "type": "iRadioB",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Si fuese el caso se condicionará el contrato de trabajo a la efectiva obtención de la autorización y a la posterior alta del trabajador en la Seguridad Social. Asimismo, el contrato deberá tener una duración mínima de un año y no podrá incluir un período de prueba."
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": "En todo caso, el EMPLEADOR se compromete a que el presente Contrato tenga, como mínimo, una duración de un año. Por otra parte, la fecha de inicio de la relación laboral es meramente orientativa, ya que esta fecha está condicionada al momento de eficacia de la autorización de trabajo por cuenta ajena solicitada por el TRABAJADOR ante la Oficina de Extranjería, así como a su posterior alta en la Seguridad Social.",
        "replacementOriginal": "En todo caso, el EMPLEADOR se compromete a que el presente Contrato tenga, como mínimo, una duración de un año. Por otra parte, la fecha de inicio de la relación laboral es meramente orientativa, ya que esta fecha está condicionada al momento de eficacia de la autorización de trabajo por cuenta ajena solicitada por el TRABAJADOR ante la Oficina de Extranjería, así como a su posterior alta en la Seguridad Social.",
        "radioId": "id-dec-27_opA",
        "identifier": "id-dec-27_opA",
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-27_opB",
        "identifier": "id-dec-27_opB",
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-28",
    "wordToReplace": "id-dec-28",
    "question": "¿El empresario y el trabajador acuerdan establecer un período de prueba?",
    "type": "iRadioC",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "El periodo de prueba es un tiempo durante el cual la empresa y el trabajador prueban mutuamente la relación laboral que les une. La empresa puede confirmar si el trabajador se ajusta al trabajo y el trabajador, comprobar si lo que le ofrece la empresa es lo que buscaba, o si las condiciones son las prometidas. En el caso de que la empresa o el trabajador no estén satisfechos, cualquiera de los dos puede romper el contrato sin necesidad de justificar el motivo, sin tener que pagar ninguna indemnización, y además, sin que sea necesario dar un preaviso. Si no se establece un período de prueba, el contrato producirá plenos efectos desde la fecha de incorporación del trabajador a su puesto de trabajo, también en lo relativo a la resolución contractual. El período de prueba no se puede establecer cuando el trabajador haya desempeñado con anterioridad en la empresa las mismas funciones para las que es contratado/a, sin importar la modalidad de contratación bajo la cual lo haya hecho."
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": "Las Partes acuerdan que se establezca un período de prueba de id-dec-28_opA_0 de duración. Durante este período de prueba, ambas Partes deben cumplir, en todo caso, con sus respectivas obligaciones y gozan de los derechos que les corresponden producto de la relación laboral. No obstante, cualquiera de ellas puede instar la resolución de este Contrato sin necesidad de alegar motivo o causa alguna, y sin que se deba una indemnización por ello. Para instar dicha resolución, la Parte interesada en resolver el Contrato deberá notificárselo a la otra con, como mínimo, un preaviso de siete días naturales a la fecha en la que el desistimiento será efectivo.Aun no mediando indemnización, el EMPLEADOR deberá en todo caso realizar la liquidación a el TRABAJADOR de los días efectivamente trabajados así como de la parte proporcional correspondiente a vacaciones por el período trabajado y al concepto de paga extra salarial.Transcurrido el período de prueba sin que se haya producido el desistimiento, el presente Contrato producirá plenos efectos, computándose el tiempo de los servicios prestados en la antigüedad del TRABAJADOR en la empresa.",
        "replacementOriginal": "Las Partes acuerdan que se establezca un período de prueba de id-dec-28_opA_0 de duración. Durante este período de prueba, ambas Partes deben cumplir, en todo caso, con sus respectivas obligaciones y gozan de los derechos que les corresponden producto de la relación laboral. No obstante, cualquiera de ellas puede instar la resolución de este Contrato sin necesidad de alegar motivo o causa alguna, y sin que se deba una indemnización por ello. Para instar dicha resolución, la Parte interesada en resolver el Contrato deberá notificárselo a la otra con, como mínimo, un preaviso de siete días naturales a la fecha en la que el desistimiento será efectivo.Aun no mediando indemnización, el EMPLEADOR deberá en todo caso realizar la liquidación a el TRABAJADOR de los días efectivamente trabajados así como de la parte proporcional correspondiente a vacaciones por el período trabajado y al concepto de paga extra salarial.Transcurrido el período de prueba sin que se haya producido el desistimiento, el presente Contrato producirá plenos efectos, computándose el tiempo de los servicios prestados en la antigüedad del TRABAJADOR en la empresa.",
        "radioId": "id-dec-28_opA",
        "identifier": "id-dec-28_opA",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-28_opA_0",
            "wordToReplace": "id-dec-28_opA_0",
            "question": "Duración del período de prueba:",
            "placeholder": "Ej. 1 mes",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": true,
              "indicationsType": "outsideText",
              "value": "Debe respetar el límite de duración que establezca el convenio colectivo aplicable con relación a la categoría de trabajador de que se trate. Si el convenio colectivo no establece un límite de duración, esta no podrá superar: \n\n- los 6 meses: para los técnicos titulados. \n\n- los 2 meses: para los demás trabajadores, o los 3 meses en las empresas con menos de 25 trabajadores.\n\n- 1 mes: en los contratos temporales cuya duración sea igual o inferior a 6 meses.\n\nEn todo caso, la duración del período de prueba debe tener relación con la duración del contrato, en su caso, prevista."
            }
          }
        ],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-28_opB",
        "identifier": "id-dec-28_opB",
        "subSteps": [],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-29",
    "wordToReplace": "id-dec-29",
    "question": "¿Cómo desea expresar el salario que recibirá el trabajador?",
    "type": "iRadioB",
    "subType": "select",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Indique aquí cómo se desea expresar el salario del trabajador, no cada cuánto tiempo este será abonado. Por ejemplo, es posible expresar el salario anual, pero pagarlo cada mes; o expresar el salario diario y pagarlo cada semana, etc."
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "al año",
        "replacement": "anuales",
        "replacementOriginal": "anuales",
        "radioId": "id-dec-29_opA",
        "identifier": "id-dec-29_opA",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "al mes",
        "replacement": "mensuales",
        "replacementOriginal": "mensuales",
        "radioId": "id-dec-29_opB",
        "identifier": "id-dec-29_opB",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "a la semana",
        "replacement": "semanales",
        "replacementOriginal": "semanales",
        "radioId": "id-dec-29_opC",
        "identifier": "id-dec-29_opC",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "al día",
        "replacement": "diarios",
        "replacementOriginal": "diarios",
        "radioId": "id-dec-29_opD",
        "identifier": "id-dec-29_opD",
        "subSteps": [],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-30",
    "wordToReplace": "id-dec-30",
    "question": "Importe (en euros) de dicho salario bruto (incluyendo el salario base y los complementos salariales):",
    "placeholder": "P. ej: 40000",
    "mandatory": false,
    "isFocused": false,
    "type": "iNumber",
    "subType": "",
    rules: [
      {
        condition: false,
        rulename: 'extraReplacementToCharacter',
        identifier: 'iddec30-precioAletras',
        wordToReplace: 'iddec30-precioAletras',
        replacement: ''
      }
    ],
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Este importe debe incluir el salario base y los complementos salariales (pagas extraordinarias, antigüedad, primas a la producción por calidad o cantidad de trabajo, etc) y pluses que recibirá el trabajador, y no puede ser inferior al salario mínimo interprofesional fijado por el gobierno, o al salario acordado por el convenio colectivo. Si se desea incluir una cláusula de exclusividad y/o de no concurrencia en el contrato de trabajo, se debe incluir aquí el importe de la compensación económica que se pagará a cambio de ellas."
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-31",
    "wordToReplace": "id-dec-31",
    "question": "Distribución del salario bruto:",
    "placeholder": "Ej. El TRABAJADOR recibirá 12 salarios y 2 pagas extraordinarias (una por Navidad y otra por vacaciones), que se prorratearán en las doce mensualidades de acuerdo a lo establecido en el convenio colectivo.",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "textarea",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-32",
    "wordToReplace": "id-dec-32",
    "question": "¿Cada cuánto tiempo se pagará el salario al trabajador?",
    "type": "iRadioC",
    "subType": "select",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "La periodicidad del pago del salario es independiente de la periodicidad con la que su importe fue expresado anteriormente. Por ejemplo, es posible expresar el salario anual, pero pagarlo cada mes; o expresar el salario diario y pagarlo cada semana, etc."
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "una vez al mes",
        "replacement": "El pago de la retribución en dinero se efectuará mensualmente por meses vencidos, el siguiente día: id-dec-32_opA_0.",
        "replacementOriginal": "El pago de la retribución en dinero se efectuará mensualmente por meses vencidos, el siguiente día: id-dec-32_opA_0.",
        "radioId": "id-dec-32_opA",
        "identifier": "id-dec-32_opA",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-32_opA_0",
            "wordToReplace": "id-dec-32_opA_0",
            "question": "Indique el día o los días en que se pagará el salario",
            "placeholder": "P. ej: el día 5 del mes",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "cada quince días",
        "replacement": "El pago de la retribución en dinero se efectuará cada quince días, el siguiente día: id-dec-32_opB_0.",
        "replacementOriginal": "El pago de la retribución en dinero se efectuará cada quince días, el siguiente día: id-dec-32_opB_0.",
        "radioId": "id-dec-32_opB",
        "identifier": "id-dec-32_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-32_opB_0",
            "wordToReplace": "id-dec-32_opB_0",
            "question": "Día o los días en que se pagará el salario:",
            "placeholder": "P. ej. el día 5 del mes",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "una vez a la semana",
        "replacement": "El pago de la retribución en dinero se efectuará semanalmente, el siguiente día: id-dec-32_opC_0.",
        "replacementOriginal": "El pago de la retribución en dinero se efectuará semanalmente, el siguiente día: id-dec-32_opC_0.",
        "radioId": "id-dec-32_opC",
        "identifier": "id-dec-32_opC",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-32_opC_0",
            "wordToReplace": "id-dec-32_opC_0",
            "question": "Día o los días en que se pagará el salario:",
            "placeholder": "P. ej. el día 5 del mes",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "diariamente",
        "replacement": "El pago de la retribución en dinero se efectuará diariamente.",
        "replacementOriginal": "El pago de la retribución en dinero se efectuará diariamente.",
        "radioId": "id-dec-32_opD",
        "identifier": "id-dec-32_opD",
        "subSteps": [],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-33",
    "wordToReplace": "id-dec-33",
    "question": "Modo de pago del salario",
    "type": "iRadioB",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "El pago en efectivo entre empresas y particulares solo es posible hasta los 2.500 euros. "
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "mediante transferencia o ingreso bancario",
        "replacement": "El pago se efectuará mediante transferencia o ingreso bancario, en una cuenta a nombre del TRABAJADOR, cuyos datos hayan sido proporcionados en cada momento al EMPLEADOR.",
        "replacementOriginal": "El pago se efectuará mediante transferencia o ingreso bancario, en una cuenta a nombre del TRABAJADOR, cuyos datos hayan sido proporcionados en cada momento al EMPLEADOR.",
        "radioId": "id-dec-33_opA",
        "identifier": "id-dec-33_opA",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "mediante cheque",
        "replacement": "El pago se efectuará mediante cheque.",
        "replacementOriginal": "El pago se efectuará mediante cheque.",
        "radioId": "id-dec-33_opB",
        "identifier": "id-dec-33_opB",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "en efectivo",
        "replacement": "El pago se efectuará en metálico.",
        "replacementOriginal": "El pago se efectuará en metálico.",
        "radioId": "id-dec-33_opC",
        "identifier": "id-dec-33_opC",
        "subSteps": [],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-35",
    "wordToReplace": "id-dec-35",
    "question": "Indique, en el caso de que la hubiese, retribución en especie que recibirá el trabajador (p. ej: el uso gratuito de la vivienda de la empresa, descuentos, etc):",
    "placeholder": "P. ej: Puesta a disposición de una vivienda, descuento del 15% en los productos de la empresa, etc...",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "textarea",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    },
    isEmpty: {
      prepend: 'Asimismo, el TRABAJADOR recibirá la siguiente retribución en especie: <br>',
      append: '.',
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-36",
    "wordToReplace": "id-dec-36",
    "question": "¿ El empresario pone a disposición del trabajador un vehículo para realizar las funciones ?",
    "type": "iRadioB",
    "subType": "textarea",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": "El EMPLEADOR pone a disposición del TRABAJADOR un vehículo para la realización de sus tareas laborales. Este vehículo podrá ser utilizado únicamente para asuntos empresariales, estando prohibida su utilización privada o fuera de la jornada de trabajo.El TRABAJADOR declara poseer un carné de conducir válido y actualizado para conducir automóviles.El EMPLEADOR soportará los gastos derivados de las revisiones, el seguro, el mantenimiento, las reparaciones, e incluso la sustitución del vehículo de empresa, salvo que estos se deban a la negligencia en la conducción o a daños causados premeditadamente por el TRABAJADOR. Asimismo, el EMPLEADOR pagará los gastos de carburante relacionados con el uso empresarial contra la presentación de las correspondientes facturas.El TRABAJADOR se compromete a mantener el vehículo en buen estado de conservación y uso y a poner en conocimiento del EMPLEADOR, en el plazo más breve posible, la necesidad de reparaciones necesarias para su conservación y correcto mantenimiento. Igualmente, se compromete a respetar el contrato de seguro del vehículo, cuyo contenido declara conocer; a utilizar el vehículo respetando el Código de Tráfico y Seguridad Vial; y a hacerse responsable del pago de todas las multas en las que haya incurrido como consecuencia de infracciones de tráfico.En caso de extinción de la relación laboral, por cualquier causa, o en caso de dejar de poseer un carné de conducir válido y actualizado, el TRABAJADOR se compromete a devolver inmediatamente el vehículo y sus llaves al EMPLEADOR. El TRABAJADOR acepta que en caso de no hacerlo, el EMPLEADOR le retenga cualquier liquidación que le debiere, hasta alcanzar el equivalente al valor del vehículo.",
        "replacementOriginal": "El EMPLEADOR pone a disposición del TRABAJADOR un vehículo para la realización de sus tareas laborales. Este vehículo podrá ser utilizado únicamente para asuntos empresariales, estando prohibida su utilización privada o fuera de la jornada de trabajo.El TRABAJADOR declara poseer un carné de conducir válido y actualizado para conducir automóviles.El EMPLEADOR soportará los gastos derivados de las revisiones, el seguro, el mantenimiento, las reparaciones, e incluso la sustitución del vehículo de empresa, salvo que estos se deban a la negligencia en la conducción o a daños causados premeditadamente por el TRABAJADOR. Asimismo, el EMPLEADOR pagará los gastos de carburante relacionados con el uso empresarial contra la presentación de las correspondientes facturas.El TRABAJADOR se compromete a mantener el vehículo en buen estado de conservación y uso y a poner en conocimiento del EMPLEADOR, en el plazo más breve posible, la necesidad de reparaciones necesarias para su conservación y correcto mantenimiento. Igualmente, se compromete a respetar el contrato de seguro del vehículo, cuyo contenido declara conocer; a utilizar el vehículo respetando el Código de Tráfico y Seguridad Vial; y a hacerse responsable del pago de todas las multas en las que haya incurrido como consecuencia de infracciones de tráfico.En caso de extinción de la relación laboral, por cualquier causa, o en caso de dejar de poseer un carné de conducir válido y actualizado, el TRABAJADOR se compromete a devolver inmediatamente el vehículo y sus llaves al EMPLEADOR. El TRABAJADOR acepta que en caso de no hacerlo, el EMPLEADOR le retenga cualquier liquidación que le debiere, hasta alcanzar el equivalente al valor del vehículo.",
        "radioId": "id-dec-36_opA",
        "identifier": "id-dec-36_opA",
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-36_opB",
        "identifier": "id-dec-36_opB",
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-37",
    "wordToReplace": "id-dec-37",
    "question": "Duración de las vacaciones anuales ",
    "placeholder": "P. ej. 30 días naturales",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Estas vacaciones no podrán ser sustituidas por una compensación económica."
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-38",
    "wordToReplace": "id-dec-38",
    "question": "¿Se desea incluir una cláusula de exclusividad (cláusula que impide que el trabajador trabaje en otras empresas al mismo tiempo):",
    "type": "iRadioB",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "La cláusula de exclusividad prohíbe que el trabajador realice otras actividades profesionales, a cuenta propia o ajena, durante la vigencia del contrato. No se prohíbe únicamente la realización de actividades que puedan considerarse competencia de la empresa, sino de todas las actividades, exigiendo por tanto, la plena dedicación del trabajador. La plena dedicación del trabajador se debe compensar económicamente. Asimismo, la ley permite que el trabajador rescinda esta cláusula con un preaviso de 30 días. \n\n\t\t\t\t\t\t\t\t\t\t\t "
    },
    "extraReplacements": [
      {
        "identifier": "iddec38-extra-0",
        "wordToReplace": "iddec38-extra-0",
        "insideId": "opA"
      }
    ],
    "radios": [
      {
        "label": "Sí",
        "replacement": "Pacto de exclusividad y no competencia: Durante la vigencia del presente Contrato, el TRABAJADOR prestará sus servicios en régimen de dedicación exclusiva al EMPLEADOR. Esta cláusula se establece con el objeto de desincentivar la pluriactividad y el pluriempleo, así como fomentar la vida familiar y laboral.Así, el TRABAJADOR no podrá prestar asesoramiento o servicios a favor de personas físicas o jurídicas que se dediquen a un objeto similar o que pueda considerarse competencia del EMPLEADOR, ya sea en régimen de contrato laboral, incluso si se trata de una relación laboral especial, o en régimen de arrendamiento de servicios o asesoramiento interno, de modo directo o indirecto a través de personas jurídicas interpuestas. Tampoco podrá tener ningún interés económico, ni de cualquier otra clase en actividades empresariales idénticas o similares a la desarrollada por el EMPLEADOR.El TRABAJADOR tampoco podrá realizar ninguna otra actividad económica, además de la prestación de sus servicios al EMPLEADOR, ya sea por cuenta propia o ajena, de modo directo o indirecto a través de personas jurídicas interpuestas, incluso si esta actividad no puede considerarse competencia al EMPLEADOR.Como contraprestación de esta plena dedicación, el TRABAJADOR percibirá la compensación económica que en cada momento figure en el desglose de la nómina bajo este concepto. Así, esta compensación está incluida en la retribución bruta diaria establecida en la estipulación quinta, la cual se ha determinado teniendo en cuenta esta cláusula de exclusividad.El TRABAJADOR podrá rescindir esta cláusula, comunicándolo por escrito al EMPLEADOR con un preaviso de treinta días, perdiendo la compensación económica vinculada a la plena dedicación.",
        "replacementOriginal": "Pacto de exclusividad y no competencia: Durante la vigencia del presente Contrato, el TRABAJADOR prestará sus servicios en régimen de dedicación exclusiva al EMPLEADOR. Esta cláusula se establece con el objeto de desincentivar la pluriactividad y el pluriempleo, así como fomentar la vida familiar y laboral.Así, el TRABAJADOR no podrá prestar asesoramiento o servicios a favor de personas físicas o jurídicas que se dediquen a un objeto similar o que pueda considerarse competencia del EMPLEADOR, ya sea en régimen de contrato laboral, incluso si se trata de una relación laboral especial, o en régimen de arrendamiento de servicios o asesoramiento interno, de modo directo o indirecto a través de personas jurídicas interpuestas. Tampoco podrá tener ningún interés económico, ni de cualquier otra clase en actividades empresariales idénticas o similares a la desarrollada por el EMPLEADOR.el TRABAJADOR tampoco podrá realizar ninguna otra actividad económica, además de la prestación de sus servicios al EMPLEADOR, ya sea por cuenta propia o ajena, de modo directo o indirecto a través de personas jurídicas interpuestas, incluso si esta actividad no puede considerarse competencia al EMPLEADOR.Como contraprestación de esta plena dedicación, el TRABAJADOR percibirá la compensación económica que en cada momento figure en el desglose de la nómina bajo este concepto. Así, esta compensación está incluida en la retribución bruta diaria establecida en la estipulación quinta, la cual se ha determinado teniendo en cuenta esta cláusula de exclusividad.El TRABAJADOR podrá rescindir esta cláusula, comunicándolo por escrito al EMPLEADOR con un preaviso de treinta días, perdiendo la compensación económica vinculada a la plena dedicación.",
        "radioId": "id-dec-38_opA",
        "identifier": "id-dec-38_opA",
        "extraReplacements": [
          {
            "identifier": "iddec38-extra-0",
            "insideId": "opA",
            "replacement": "EL EMPLEADOR declara y el TRABAJADOR reconoce que esta retribución incluye la compensación económica por la cláusula de exclusividad y no competencia pactada en el presente Contrato.",
            "replacementOriginal": "EL EMPLEADOR declara y el TRABAJADOR reconoce que esta retribución incluye la compensación económica por la cláusula de exclusividad y no competencia pactada en el presente Contrato."
          }
        ],
        "checked": false
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-38_opB",
        "identifier": "id-dec-38_opB",
        "extraReplacements": [
          {
            "identifier": "iddec38-extra-0",
            "insideId": "opA",
            "replacement": "",
            "replacementOriginal": ""
          }
        ],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-39",
    "wordToReplace": "id-dec-39",
    "question": "¿Se desea incluir una cláusula de no concurrencia (cláusula que impide que el trabajador compita con el empresario durante un plazo después de terminado el contrato):",
    "type": "iRadioC",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "La no concurrencia del trabajador debe ser compensada económicamente, teniendo en cuenta las circunstancias personales del trabajador: edad, nivel de formación, cargas familiares, posibilidades de búsqueda de nuevo empleo, etc."
    },
    "extraReplacements": [
      {
        "identifier": "iddec39-extra-0",
        "wordToReplace": "iddec39-extra-0",
        "insideId": "opA"
      }
    ],
    "radios": [
      {
        "label": "Sí",
        "replacement": "Pacto de no concurrencia: De conformidad con lo establecido en el artículo 21.2 del Estatuto de los Trabajadores, ambas Partes convienen que en caso de extinción del presente Contrato de trabajo, por cualquier causa, el TRABAJADOR estará obligada a no competir con el EMPLEADOR, desarrollando por cuenta propia o ajena, una actividad idéntica o similar a la de esta. Esta obligación se extenderá durante el siguiente plazo desde la fecha en que finalice la relación laboral: id-dec-39_opA_0, y el ámbito geográfico en el que regirá será el siguiente: id-dec-39_opA_1.El EMPLEADOR declara tener un interés industrial y/o comercial en esta cláusula, y el TRABAJADOR reconoce que esta es necesaria y razonable para la protección del fondo de comercio y del negocio del EMPLEADOR.Por tanto, el TRABAJADOR no podrá, dentro el ámbito temporal y territorial arriba indicados:a) establecer relación contractual ninguna, por cuenta propia o ajena, con empresas de la competencia que desarrollen idéntica o similar actividad a la del EMPLEADOR;b) devenir propietaria, socia o administradora o relacionarse de ninguna otra forma con entidades relacionadas con un negocio que presente servicios o productos similares a los del EMPLEADOR o que de cualquier otra forma compita con la misma;c) aceptar ningún trabajo ni prestar servicios a cualquier cliente del EMPLEADOR si dicho empleo o servicio, en alguna medida, utiliza de alguna forma las técnicas o métodos empleados o los productos o servicios ofrecidos por el EMPLEADOR;d) contactar o comunicarse con cualquier cliente del EMPLEADOR con el que haya tenido contacto como consecuencia de la relación laboral aquí regulada, siempre que dicho contacto o comunicación se refiera a la venta o prestación de algún producto o servicio igual o similar a cualquier producto o servicio prestado por el EMPLEADOR.Como contraprestación de esta obligación, el TRABAJADOR percibirá durante la vigencia del Contrato una compensación económica adecuada que figurará en el desglose de la nómina bajo el concepto de \"No Competencia\". Así, esta compensación está incluida en la retribución bruta diaria establecida en la estipulación quinta, la cual se ha determinado teniendo en cuenta esta cláusula de no concurrencia.El EMPLEADOR se reserva el derecho a decidir discrecionalmente acerca de la aplicación de la obligación contenida en esta cláusula, así como de su ámbito temporal y territorial de aplicación. En caso de renuncia a esta cláusula, el EMPLEADOR deberá notificarlo fehacientemente a el TRABAJADOR en un plazo de quince días desde la notificación de la extinción de la relación laboral.En caso de incumplimiento por el TRABAJADOR de lo aquí acordado, deberá devolver al EMPLEADOR la totalidad de la compensación económica recibida, tan pronto como se conociera su conducta incumplidora, con independencia del tiempo transcurrido desde la finalización del Contrato.Además, el TRABAJADOR indemnizará al EMPLEADOR de los daños y perjuicios causados por su conducta incumplidora, pudiendo ser estos reclamados ante la jurisdicción civil, al haberse extinguido la relación laboral.",
        "replacementOriginal": "Pacto de no concurrencia: De conformidad con lo establecido en el artículo 21.2 del Estatuto de los Trabajadores, ambas Partes convienen que en caso de extinción del presente Contrato de trabajo, por cualquier causa, el TRABAJADOR estará obligada a no competir con el EMPLEADOR, desarrollando por cuenta propia o ajena, una actividad idéntica o similar a la de esta. Esta obligación se extenderá durante el siguiente plazo desde la fecha en que finalice la relación laboral: id-dec-39_opA_0, y el ámbito geográfico en el que regirá será el siguiente: id-dec-39_opA_1.El EMPLEADOR declara tener un interés industrial y/o comercial en esta cláusula, y el TRABAJADOR reconoce que esta es necesaria y razonable para la protección del fondo de comercio y del negocio del EMPLEADOR.Por tanto, el TRABAJADOR no podrá, dentro el ámbito temporal y territorial arriba indicados:a) establecer relación contractual ninguna, por cuenta propia o ajena, con empresas de la competencia que desarrollen idéntica o similar actividad a la del EMPLEADOR;b) devenir propietaria, socia o administradora o relacionarse de ninguna otra forma con entidades relacionadas con un negocio que presente servicios o productos similares a los del EMPLEADOR o que de cualquier otra forma compita con la misma;c) aceptar ningún trabajo ni prestar servicios a cualquier cliente del EMPLEADOR si dicho empleo o servicio, en alguna medida, utiliza de alguna forma las técnicas o métodos empleados o los productos o servicios ofrecidos por el EMPLEADOR;d) contactar o comunicarse con cualquier cliente del EMPLEADOR con el que haya tenido contacto como consecuencia de la relación laboral aquí regulada, siempre que dicho contacto o comunicación se refiera a la venta o prestación de algún producto o servicio igual o similar a cualquier producto o servicio prestado por el EMPLEADOR.Como contraprestación de esta obligación, el TRABAJADOR percibirá durante la vigencia del Contrato una compensación económica adecuada que figurará en el desglose de la nómina bajo el concepto de \"No Competencia\". Así, esta compensación está incluida en la retribución bruta diaria establecida en la estipulación quinta, la cual se ha determinado teniendo en cuenta esta cláusula de no concurrencia.El EMPLEADOR se reserva el derecho a decidir discrecionalmente acerca de la aplicación de la obligación contenida en esta cláusula, así como de su ámbito temporal y territorial de aplicación. En caso de renuncia a esta cláusula, el EMPLEADOR deberá notificarlo fehacientemente a el TRABAJADOR en un plazo de quince días desde la notificación de la extinción de la relación laboral.En caso de incumplimiento por el TRABAJADOR de lo aquí acordado, deberá devolver al EMPLEADOR la totalidad de la compensación económica recibida, tan pronto como se conociera su conducta incumplidora, con independencia del tiempo transcurrido desde la finalización del Contrato.Además, el TRABAJADOR indemnizará al EMPLEADOR de los daños y perjuicios causados por su conducta incumplidora, pudiendo ser estos reclamados ante la jurisdicción civil, al haberse extinguido la relación laboral.",
        "radioId": "id-dec-39_opA",
        "identifier": "id-dec-39_opA",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-39_opA_0",
            "wordToReplace": "id-dec-39_opA_0",
            "question": "Duración, desde el fin de la relación laboral, a la que estará sometido el trabajador a la cláusula de no concurrencia? (máx. 2 años para técnicos y 6 meses para el resto):",
            "placeholder": "P. ej: 4 meses",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": true,
              "indicationsType": "insideText",
              "value": "La ley establece un plazo máximo de dos años para los técnicos y de 6 meses para el resto de los trabajadores.\t\t\t\t\t\t\t\t\t "
            }
          },
          {
            "replacement": "",
            "identifier": "id-dec-39_opA_1",
            "wordToReplace": "id-dec-39_opA_1",
            "question": "Ámbito geográfico de la cláusula de no concurrencia:",
            "placeholder": "P. ej: Canarias",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": "\n\n\t\t\t\t\t\t\t\t\t\t\t "
            }
          }
        ],
        "extraReplacements": [
          {
            "identifier": "iddec39-extra-0",
            "insideId": "opA",
            "replacement": "El EMPLEADOR declara y el TRABAJADOR reconoce que esta retribución incluye la compensación económica por la cláusula de no concurrencia pactada en el presente Contrato.",
            "replacementOriginal": "El EMPLEADOR declara y el TRABAJADOR reconoce que esta retribución incluye la compensación económica por la cláusula de no concurrencia pactada en el presente Contrato."
          }
        ],
        "checked": false
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-39_opB",
        "identifier": "id-dec-39_opB",
        "subSteps": [],
        "extraReplacements": [
          {
            "identifier": "iddec39-extra-0",
            "insideId": "opA",
            "replacement": "",
            "replacementOriginal": ""
          }
        ],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-40",
    "wordToReplace": "id-dec-40",
    "question": "¿Quiere incluir una cláusula de cesión de los derechos de propiedad intelectual e industrial (el trabajador se compromete a ceder al empresario derechos sobre las obras que cree durante el contrato)?",
    "type": "iRadioB",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": "Cesión de derechos de propiedad intelectual e industrial: Cualquier marca registrada, diseño u otra obra que dé lugar a derechos de propiedad intelectual o industrial realizada por el TRABAJADOR en virtud de la relación laboral regulada en el presente Contrato o relacionada con su actividad profesional y obtenida gracias a los medios o conocimientos adquiridos en el marco de su actividad laboral, deberá ser comunicada inmediatamente al EMPLEADOR y será de la exclusiva propiedad de esta.El TRABAJADOR renuncia a cualesquiera derechos pudieran corresponderle, salvo a los derechos morales de autor, entre ellos al derecho a ser reconocida como autora de la obra protegida por propiedad intelectual.Asimismo, el TRABAJADOR se compromete expresamente a la cesión de dichos derechos en exclusiva al EMPLEADOR por tiempo indefinido y ámbito universal y a ejecutar a petición y a costa de la misma los documentos que resulten precisos, otorgando al EMPLEADOR por medio del presente Contrato poderes de representación para realizar en su nombre los actos necesarios para ejecutar el contenido de esta estipulación.Por tanto, el EMPLEADOR podrá utilizar dichas obras tanto para el ejercicio de su actividad habitual como para comercializarla o ceder los derechos sobre ella a terceros.El TRABAJADOR tendrá derecho a una participación equitativa y proporcional de los ingresos que el EMPLEADOR obtenga como consecuencia de una obra creada por la primera y protegida por derechos de propiedad intelectual. En caso de que la invención no se realice en virtud de la prestación laboral, sino gracias a los medios o conocimientos adquiridos en el marco de esta, el TRABAJADOR tendrá derecho a una compensación económica al momento de su cesión.",
        "replacementOriginal": "Cesión de derechos de propiedad intelectual e industrial: Cualquier marca registrada, diseño u otra obra que dé lugar a derechos de propiedad intelectual o industrial realizada por el TRABAJADOR en virtud de la relación laboral regulada en el presente Contrato o relacionada con su actividad profesional y obtenida gracias a los medios o conocimientos adquiridos en el marco de su actividad laboral, deberá ser comunicada inmediatamente al EMPLEADOR y será de la exclusiva propiedad de esta.El TRABAJADOR renuncia a cualesquiera derechos pudieran corresponderle, salvo a los derechos morales de autor, entre ellos al derecho a ser reconocida como autora de la obra protegida por propiedad intelectual.Asimismo, el TRABAJADOR se compromete expresamente a la cesión de dichos derechos en exclusiva al EMPLEADOR por tiempo indefinido y ámbito universal y a ejecutar a petición y a costa de la misma los documentos que resulten precisos, otorgando al EMPLEADOR por medio del presente Contrato poderes de representación para realizar en su nombre los actos necesarios para ejecutar el contenido de esta estipulación.Por tanto, el EMPLEADOR podrá utilizar dichas obras tanto para el ejercicio de su actividad habitual como para comercializarla o ceder los derechos sobre ella a terceros.El TRABAJADOR tendrá derecho a una participación equitativa y proporcional de los ingresos que el EMPLEADOR obtenga como consecuencia de una obra creada por la primera y protegida por derechos de propiedad intelectual. En caso de que la invención no se realice en virtud de la prestación laboral, sino gracias a los medios o conocimientos adquiridos en el marco de esta, el TRABAJADOR tendrá derecho a una compensación económica al momento de su cesión.",
        "radioId": "id-dec-40_opA",
        "identifier": "id-dec-40_opA",
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-40_opB",
        "identifier": "id-dec-40_opB",
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-41",
    "wordToReplace": "id-dec-41",
    "question": "¿Quiere incluir una cláusula de permanencia (cláusula que impide que al trabajador poner fin a la relación laboral durante un cierto tiempo)?:",
    "type": "iRadioC",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Solo si se cumplen los siguientes requisitos: el trabajador recibirá una especialización profesional pagada por el empresario; y recibirá esta especialización profesional para la realización de un proyecto o trabajo específico en la empresa. Si se incluye una cláusula de permanencia en el contrato, el trabajador se compromete a permanecer en la empresa durante un plazo determinado.\n\t\t\t\t\t\t\t\t\t\t\t "
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": "Cláusula de permanencia: El TRABAJADOR recibirá con cargo al EMPLEADOR la siguiente especialización profesional: id-dec-41_opA_0. Esta especialización profesional tiene por fin la puesta en marcha del siguiente proyecto o la realización del siguiente trabajo específico: id-dec-41_opA_1. Por esta razón, el TRABAJADOR se compromete a permanecer en la empresa, prestando sus servicios al EMPLEADOR durante un plazo de: id-dec-41_opA_2 contado desde la finalización de la especialización profesional antes indicada. En caso de que el TRABAJADOR incumpla la presente cláusula, abandonando el trabajo antes del transcurso del plazo aquí previsto, deberá indemnizar al EMPLEADOR en concepto de daños y perjuicios causados, con la cantidad de id-dec-41_opA_3 €. Esta cantidad ha sido determinada teniendo en cuenta el valor de la especialización antes indicada, así como la importancia que el proyecto o trabajo específico indicado tiene para el EMPLEADOR.",
        "replacementOriginal": "Cláusula de permanencia: El TRABAJADOR recibirá con cargo al EMPLEADOR la siguiente especialización profesional: id-dec-41_opA_0. Esta especialización profesional tiene por fin la puesta en marcha del siguiente proyecto o la realización del siguiente trabajo específico: id-dec-41_opA_1. Por esta razón, el TRABAJADOR se compromete a permanecer en la empresa, prestando sus servicios al EMPLEADOR durante un plazo de: id-dec-41_opA_2 contado desde la finalización de la especialización profesional antes indicada. En caso de que el TRABAJADOR incumpla la presente cláusula, abandonando el trabajo antes del transcurso del plazo aquí previsto, deberá indemnizar al EMPLEADOR en concepto de daños y perjuicios causados, con la cantidad de id-dec-41_opA_3 €. Esta cantidad ha sido determinada teniendo en cuenta el valor de la especialización antes indicada, así como la importancia que el proyecto o trabajo específico indicado tiene para el EMPLEADOR.",
        "radioId": "id-dec-41_opA",
        "identifier": "id-dec-41_opA",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-41_opA_0",
            "wordToReplace": "id-dec-41_opA_0",
            "question": "Descripción de la especialización profesional que el empresario financiará al trabajador a cambio de su permanencia en la empresa:",
            "placeholder": "P. ej: - Máster en IA por un importe de 10.000 euros.",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "textarea",
            "indications": {
              "areIndications": true,
              "indicationsType": "insideText",
              "value": "Para que la cláusula de permanencia sea válida, la formación o especialización profesional debe tener carácter extraordinario y estar relacionado con la puesta en marcha o desarrollo de proyectos determinados o de trabajos específicos y singulares; es decir,  no puede revestir carácter ordinario o ser ofrecida a todos los trabajadores de la empresa.\n\t\t\t\t\t\t\t\t\t\t\t "
            }
          },
          {
            "replacement": "",
            "identifier": "id-dec-41_opA_1",
            "wordToReplace": "id-dec-41_opA_1",
            "question": "Proyecto que desea realizar el empresario y para el cual financiará la especialización profesional:",
            "placeholder": "P. ej - Proyecto de inteligencia artificial",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "textarea",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": "\n\t\t\t\t\t\t\t\t\t\t\t "
            }
          },
          {
            "replacement": "",
            "identifier": "id-dec-41_opA_2",
            "wordToReplace": "id-dec-41_opA_2",
            "question": "Duración del plazo de permanencia",
            "placeholder": "P. ej: 1 año",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            }
          },
          {
            "replacement": "",
            "identifier": "id-dec-41_opA_3",
            "wordToReplace": "id-dec-41_opA_3",
            "question": "Indemnización en euros que deberá pagar el trabajador al empresario en caso de no permanecer durante el plazo acordado:",
            "placeholder": "P. ej: 3000",
            "mandatory": false,
            "isFocused": false,
            rules: [],
            "type": "iNumber",
            "subType": "",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-41_opB",
        "identifier": "id-dec-41_opB",
        "subSteps": [],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-42",
    "wordToReplace": "id-dec-42",
    "question": "¿Desea incluir una cláusula de confidencialidad?",
    "type": "iRadioB",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Cláusula mediante la cual el trabajador se compromete a no revelar las informaciones  a las que tenga acceso durante la relación laboral, ya que estas tienen el carácter de secretas o confidenciales. "
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": "Cláusula de confidencialidad: El TRABAJADOR reconoce que toda la documentación, proyectos, archivos o información de cualquier naturaleza intercambiada, facilitada, o creada en el seno de la empresa o entidades y organismos con los que esta colabora, que pueda adquirir o a la que pueda tener acceso durante el curso de la relación laboral es información confidencial de la exclusiva propiedad de la EMPLEADORA. Por tanto, el TRABAJADOR se compromete, tanto durante como después de finalizada la relación laboral, de forma indefinida:a) a salvaguardar, no revelar y no comunicar a persona o entidad alguna, toda o parte de estas informaciones; b) a no explotar, por cuenta propia o de un tercero, directa o indirectamente, toda o parte de estas informaciones; c) a no realizar o conservar copias, en ningún formato o soporte, para fines distintos que los exigidos por la prestación de sus servicios.Al finalizar la relación laboral, el TRABAJADOR entregará a la EMPLEADORA todos los documentos y materiales que contengan información confidencial.El TRABAJADOR comprende que la reputación y éxito continuado de la EMPLEADORA requieren que el secreto de la información confidencial se mantenga y salvaguarde. El TRABAJADOR será responsable de todos los daños y perjuicios que para la EMPLEADORA se deriven como consecuencia del incumplimiento doloso o culposo de su obligación de confidencialidad.",
        "replacementOriginal": "Cláusula de confidencialidad: El TRABAJADOR reconoce que toda la documentación, proyectos, archivos o información de cualquier naturaleza intercambiada, facilitada, o creada en el seno de la empresa o entidades y organismos con los que esta colabora, que pueda adquirir o a la que pueda tener acceso durante el curso de la relación laboral es información confidencial de la exclusiva propiedad de la EMPLEADORA. Por tanto, el TRABAJADOR se compromete, tanto durante como después de finalizada la relación laboral, de forma indefinida:a) a salvaguardar, no revelar y no comunicar a persona o entidad alguna, toda o parte de estas informaciones; b) a no explotar, por cuenta propia o de un tercero, directa o indirectamente, toda o parte de estas informaciones; c) a no realizar o conservar copias, en ningún formato o soporte, para fines distintos que los exigidos por la prestación de sus servicios.Al finalizar la relación laboral, el TRABAJADOR entregará a la EMPLEADORA todos los documentos y materiales que contengan información confidencial.El TRABAJADOR comprende que la reputación y éxito continuado de la EMPLEADORA requieren que el secreto de la información confidencial se mantenga y salvaguarde. El TRABAJADOR será responsable de todos los daños y perjuicios que para la EMPLEADORA se deriven como consecuencia del incumplimiento doloso o culposo de su obligación de confidencialidad.",
        "radioId": "id-dec-42_opA",
        "identifier": "id-dec-42_opA",
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-42_opB",
        "identifier": "id-dec-42_opB",
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-43",
    "wordToReplace": "id-dec-43",
    "question": "Tiempo de antelación con el que deberá avisarle al empresario cuando el trabajador quiera dimitir:",
    "placeholder": "P. ej: 20 días",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    }
  },
  {
    type: 'end',
    identifier: 'end',
    wordToReplace: 'end',
    title: 'Contrato de trabajo fijo discontinuo',
    description: `Un contrato de trabajo fijo discontinuo es un acuerdo entre un trabajador y un empresario, mediante el cual se podrá regular la relación laboral de los trabajos que se repiten de forma cíclica, es decir, cada cierto periodo de tiempo.`,
    checkoutProcess: {
      isInited: false,
      phase: 0
    }
  }
];

module.exports = steps;