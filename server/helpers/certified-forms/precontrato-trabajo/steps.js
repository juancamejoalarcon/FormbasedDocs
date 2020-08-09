const steps = [
  {
    type: 'start',
    title: 'Precontrato de trabajo',
    description: ``,
    isCurrentStep: true
  },
  {
    type: 'iText',
    identifier: 'id-unid-1',
    wordToReplace: 'id-unid-1',
    replacement: '',
    question: 'Lugar (ciudad o población) donde se realiza y firma el precontrato:',
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      value: 'Indique aquí la localidad de celebración y firma del precontrato.'
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
    question: 'Fecha en la que se firma el precontrato:',
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      value: 'Fecha en la que se firma el precontrato',
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
    question: 'Domicilio completo del trabajador:',
    wordToReplace: 'id-unid-8',
    identifier: 'id-unid-8',
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
    "identifier": "id-decnew-6",
    "wordToReplace": "id-decnew-6",
    "question": "El futuro trabajador, ¿se incorporaría al puesto de trabajo proveniente de otro puesto?",
    "type": "iRadioC",
    "subType": "textarea",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    },
    "extraReplacements": [
      {
        "identifier": "iddecnew6-extra-0",
        "wordToReplace": "iddecnew6-extra-0",
        "insideId": "opA"
      },
      {
        "identifier": "iddecnew6-extra-1",
        "wordToReplace": "iddecnew6-extra-1",
        "insideId": "opB"
      }
    ],
    "radios": [
      {
        "label": "Sí",
        "replacement": "No obstante, y siendo conocedoras ambas partes de la responsabilidad que el futuro empleado ostenta en su actual actividad, y al efecto de evitar los perjuicios que un abandono precipitado de su actual puesto de trabajo pudiera causar a su actual empleador, es su intención cumplir con el preceptivo periodo de preaviso.",
        "replacementOriginal": "No obstante, y siendo conocedoras ambas partes de la responsabilidad que el futuro empleado ostenta en su actual actividad, y al efecto de evitar los perjuicios que un abandono precipitado de su actual puesto de trabajo pudiera causar a su actual empleador, es su intención cumplir con el preceptivo periodo de preaviso.",
        "radioId": "id-decnew-6_opA",
        "identifier": "id-decnew-6_opA",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-decnew-6_opA_1",
            "wordToReplace": "id-decnew-6_opA_1",
            "question": "Indique el preaviso, o tiempo de antelación, específico para que el empleado ponga fin a la relación laboral actual:",
            "placeholder": "P. ej: 15 días, un mes,...",
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
            "identifier": "id-decnew-6_opA_2",
            "wordToReplace": "id-decnew-6_opA_2",
            "question": "Fecha en la que, tras el preaviso, la relación laboral actual del futuro trabajador se dará por terminada:",
            "placeholder": "dd/mm/aaaa",
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
        ],
        "extraReplacements": [
          {
            "identifier": "iddecnew6-extra-0",
            "insideId": "opA",
            "replacement": "El trabajador notificará en el lugar de su actual puesto de trabajo su intención de causar baja voluntaria, mediando el preaviso de id-decnew-6_opA_1, y quedando extinguido así su contrato de trabajo a todos los efectos el próximo id-decnew-6_opA_2.",
            "replacementOriginal": "El trabajador notificará en el lugar de su actual puesto de trabajo su intención de causar baja voluntaria, mediando el preaviso de id-decnew-6_opA_1, y quedando extinguido así su contrato de trabajo a todos los efectos el próximo id-decnew-6_opA_2."
          },
          {
            "identifier": "iddecnew6-extra-1",
            "insideId": "opB",
            "replacement": "al siguiente en que quedare resuelto su actual contrato",
            "replacementOriginal": "al siguiente en que quedare resuelto su actual contrato"
          }
        ],
        "checked": false
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-decnew-6_opB",
        "identifier": "id-decnew-6_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-decnew-6_opB_0",
            "wordToReplace": "id-decnew-6_opB_0",
            "question": "Fecha en la que se firmará el contrato de trabajo prometido:",
            "placeholder": "dd/mm/aaaa",
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
        ],
        "extraReplacements": [
          {
            "identifier": "iddecnew6-extra-0",
            "insideId": "opA",
            "replacement": "El trabajador se encontrará disponible para una incorporación inmediata tras la futura conclusión del contrato de trabajo.",
            "replacementOriginal": "El trabajador se encontrará disponible para una incorporación inmediata tras la futura conclusión del contrato de trabajo."
          },
          {
            "identifier": "iddecnew6-extra-1",
            "insideId": "opB",
            "replacement": "el día id-decnew-6_opB_0",
            "replacementOriginal": "el día id-decnew-6_opB_0"
          }
        ],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unidnew-7",
    "wordToReplace": "id-unidnew-7",
    "question": "El contrato de trabajo se celebra por una duración:",
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
        "label": "indefinido",
        "replacement": "indefinido",
        "replacementOriginal": "indefinido",
        "radioId": "id-unidnew-7_opA",
        "identifier": "id-unidnew-7_opA",
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "temporal",
        "replacement": "temporal",
        "replacementOriginal": "temporal",
        "radioId": "id-unidnew-7_opB",
        "identifier": "id-unidnew-7_opB",
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-10",
    "wordToReplace": "id-dec-10",
    "question": "Antes de este precontrato ¿hubo una entrevista/encuentro entre el empleador y el futuro trabajador?",
    "type": "iRadioC",
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
        "replacement": ", tras la entrevista o proceso de selección celebrado el id-dec-10_opA_0, ",
        "replacementOriginal": ", tras la entrevista o proceso de selección celebrado el id-dec-10_opA_0, ",
        "radioId": "id-dec-10_opA",
        "identifier": "id-dec-10_opA",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-10_opA_0",
            "wordToReplace": "id-dec-10_opA_0",
            "question": "Fecha en la que se produjo la entrevista o último contacto, previo a este acto, entre el empleador y el trabajador:",
            "placeholder": "dd/mm/aaaa",
            "mandatory": false,
            "isFocused": false,
            "type": "iDate",
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
        "radioId": "id-dec-10_opB",
        "identifier": "id-dec-10_opB",
        "subSteps": [],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-11",
    "wordToReplace": "id-dec-11",
    "question": "Nombre del puesto que ocuparía el trabajador",
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
    "identifier": "id-dec-12",
    "wordToReplace": "id-dec-12",
    "question": "Funciones que desarrollará el trabajador en el puesto:",
    "placeholder": "P. ej: Mantenimiento de bases de datos, etc...",
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
    "identifier": "id-dec-13",
    "wordToReplace": "id-dec-13",
    "question": "¿ Existen condiciones que se deben cumplir para la celebración del contrato, como, por ejemplo, la obtención de un visado o título de estudios?",
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
        "replacement": "La futura celebración del contrato queda sometida al cumplimiento de las siguientes condiciones: id-dec-13_opA_0",
        "replacementOriginal": "La futura celebración del contrato queda sometida al cumplimiento de las siguientes condiciones: id-dec-13_opA_0",
        "radioId": "id-dec-13_opA",
        "identifier": "id-dec-13_opA",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-13_opA_0",
            "wordToReplace": "id-dec-13_opA_0",
            "question": "Indique las condiciones que se deben cumplir para que se pueda realizar el futuro contrato de trabajo:",
            "placeholder": "P: ej: Finalización del Máster para ejercer la abogacía, obtención de un visado,...",
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
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-13_opB",
        "identifier": "id-dec-13_opB",
        "subSteps": [],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-14",
    "wordToReplace": "id-dec-14",
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
        "replacement": "anual",
        "replacementOriginal": "anual",
        "radioId": "id-dec-14_opA",
        "identifier": "id-dec-14_opA",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "al mes",
        "replacement": "mensual",
        "replacementOriginal": "mensual",
        "radioId": "id-dec-14_opB",
        "identifier": "id-dec-14_opB",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "a la semana",
        "replacement": "semanal",
        "replacementOriginal": "semanal",
        "radioId": "id-dec-14_opC",
        "identifier": "id-dec-14_opC",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "al día",
        "replacement": "diario",
        "replacementOriginal": "diario",
        "radioId": "id-dec-14_opD",
        "identifier": "id-dec-14_opD",
        "subSteps": [],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-15",
    "wordToReplace": "id-dec-15",
    "question": "Importe (en euros) de dicho salario bruto:",
    "placeholder": "P. ej: 40000",
    "mandatory": false,
    "isFocused": false,
    "type": "iNumber",
    "subType": "",
    "extraReplacements": [],
    rules: [
      {
        condition: false,
        rulename: 'extraReplacementToCharacter',
        identifier: 'iddec15-precioAletras',
        wordToReplace: 'iddec15-precioAletras',
        replacement: ''
      }
    ],
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-16",
    "wordToReplace": "id-dec-16",
    "question": "¿Habrá otras primas o ventajas que se ofrecerán al futuro trabajador (seguro de vida, descuentos de productos en la empresa)?",
    "type": "iRadioC",
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
        "replacement": "Además, se ofrecerán otras primas y ventajas como: id-dec-16_opA_0",
        "replacementOriginal": "Además, se ofrecerán otras primas y ventajas como: id-dec-16_opA_0",
        "radioId": "id-dec-16_opA",
        "identifier": "id-dec-16_opA",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-16_opA_0",
            "wordToReplace": "id-dec-16_opA_0",
            "question": "Indique dichas ventajas que se ofrecerán al futuro trabajador:",
            "placeholder": "P. ej: descuentos del 30% en productos de la empresa,...",
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
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-16_opB",
        "identifier": "id-dec-16_opB",
        "subSteps": [],
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
        "replacement": "Las Partes acuerdan que se establezca un período de prueba de id-dec-28_opA_0 de duración.",
        "replacementOriginal": "Las Partes acuerdan que se establezca un período de prueba de id-dec-28_opA_0 de duración.",
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
        "replacement": "En este precontrato no se recoge ninguna disposición relativa al período de prueba.",
        "replacementOriginal": "En este precontrato no se recoge ninguna disposición relativa al período de prueba.",
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
    "identifier": "id-dec-18",
    "wordToReplace": "id-dec-18",
    "question": "¿Se establece indemnización, por daños y perjuicios correspondiente al futuro trabajador en el caso de que el futuro empleador incumpla su promesa de contratarlo?",
    "type": "iRadioC",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "No",
        "replacement": "En el supuesto de que el empleador no cumpla el compromiso de contratación asumido en el presente documento, procederá que el futuro trabajador reciba una indemnización en concepto de daños y perjuicios. Para la determinación de dicha indemnización, habrá de tomarse en cuenta, en todo caso, el daño emergente y el lucro cesante, entendiendo por tal el que de modo presunto y de forma razonable se hubiera derivado de un incumplimiento contractual. Serán aplicables, como punto de referencia, el Estatuto de los Trabajadores, y de forma específica toda jurisprudencia vigente que pudiera ser aplicable.",
        "replacementOriginal": "En el supuesto de que el empleador no cumpla el compromiso de contratación asumido en el presente documento, procederá que el futuro trabajador reciba una indemnización en concepto de daños y perjuicios. Para la determinación de dicha indemnización, habrá de tomarse en cuenta, en todo caso, el daño emergente y el lucro cesante, entendiendo por tal el que de modo presunto y de forma razonable se hubiera derivado de un incumplimiento contractual. Serán aplicables, como punto de referencia, el Estatuto de los Trabajadores, y de forma específica toda jurisprudencia vigente que pudiera ser aplicable.",
        "radioId": "id-dec-18_opA",
        "identifier": "id-dec-18_opA",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "Sí",
        "replacement": "En el supuesto de que el empleador no cumpla el compromiso de contratación asumido en el presente documento, procederá que el futuro trabajador reciba una indemnización en concepto de daños y perjuicios. Las Partes estiman que el valor de estos potenciales daños ascenderían a un total de iddec18opB0-precioAletras (id-dec-18_opB_0€). Siguiendo lo anterior, las Partes consideran que esta cantidad es justa y adecuada teniendo en cuenta la situación del futuro trabajador y los graves daños que podría ocasionarle el incumplimiento del presente Precontrato.",
        "replacementOriginal": "En el supuesto de que el empleador no cumpla el compromiso de contratación asumido en el presente documento, procederá que el futuro trabajador reciba una indemnización en concepto de daños y perjuicios. Las Partes estiman que el valor de estos potenciales daños ascenderían a un total de iddec18opB0-precioAletras (id-dec-18_opB_0€). Siguiendo lo anterior, las Partes consideran que esta cantidad es justa y adecuada teniendo en cuenta la situación del futuro trabajador y los graves daños que podría ocasionarle el incumplimiento del presente Precontrato.",
        "radioId": "id-dec-18_opB",
        "identifier": "id-dec-18_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-18_opB_0",
            "wordToReplace": "id-dec-18_opB_0",
            "question": "Cantidad, en euros, de la indemnización en caso de incumplimiento por parte del futuro empleador de su promesa de contratarlo:",
            "placeholder": "Escribe un número mayor que 0",
            "mandatory": false,
            "isFocused": false,
            "type": "iNumber",
            extraReplacements: [],
            rules: [
              {
                condition: false,
                rulename: 'extraReplacementToCharacter',
                identifier: 'iddec18opB0-precioAletras',
                wordToReplace: 'iddec18opB0-precioAletras',
                replacement: ''
              }
            ],
            "subType": "",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    type: 'end',
    identifier: 'end',
    wordToReplace: 'end',
    title: 'Precontrato de trabajo',
    description: ``,
    checkoutProcess: {
      isInited: false,
      phase: 0
    }
  }
];

module.exports = steps;