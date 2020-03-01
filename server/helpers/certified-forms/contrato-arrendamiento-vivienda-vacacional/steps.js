const steps = [
    {
      type: 'start',
      title: 'Contrato de arrendamiento de vivienda para uso turístico o vacacional',
      description: `El contrato de arrendamiento de vivienda para uso turístico o vacacional
      es aquel por el cual una persona, denominada arrendatario, se compromete a pagar un precio a otra, denominada arrendador, 
      y ésta, a cambio, a proporcionar a la primera el uso de una edificación habitable cuyo destino primordial 
      sea satisfacer las necesidades de vivienda del arrendatario que le dará un uso vacacional, de ocio, turismo o similares`,
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
      type: 'iForEach',
      value: 1,
      min: 1,
      max: 10,
      replacement: '',
      identifier: 'id-unid-3',
      wordToReplace: 'id-unid-3',
      question: '¿Cuántas personas son propietarias de la vivienda y desean alquilarla? (Número de arrendadores):',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'El arrendador es aquella persona poseedora de un inmueble o autorizada a poder ponerlo en alquiler que ejerce como casero. Se trata, en definitiva, del propietario de una vivienda.',
      },
      content: [
        {
          identifier: 'id-unid-3',
          wordToReplace: 'id-unid-3',
          replacementOriginal: 'id-unid-3_1',
          replacement: '',
          extraReplacements: [],
          modifiedReplacements: [],
          modifiedExtraReplacements: [],
          subSteps: [
            {
              type: 'iRadioC',
              question: 'La persona arrendadora ->(index) (propietaria) es:',
              questionOriginal: 'La persona arrendadora ->(index) (propietaria) es:',
              hasIndex: true,
              identifier: 'id-unid-3_1',
              wordToReplace: 'id-unid-3_1',
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                // tslint:disable-next-line:max-line-length
                value: 'Seleccione el tipo de personalidad jurídica. Hablamos de personas físicas para referirnos a un particular, sin embargo hablamos de personas jurídicas para referirnos a una empresa, una asociación, etc...',
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
                        question: 'La persona arrendadora (propietaria) para realizar el contrato, actúa:',
                        identifier: 'id-unid-3_1_opA_1',
                        wordToReplace: 'id-unid-3_1_opA_1',
                        indications: {
                          areIndications: true,
                          indicationsType: 'outsideText',
                          // tslint:disable-next-line:max-line-length
                          value: 'La persona puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, esta misma persona firmará el contrato y asumirá las obligaciones. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es la persona a la que representa quien asumirá las obligaciones derivadas de este contrato. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
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
                              question: 'Nombre completo del arrendador (propietario), incluyendo los apellidos:',
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
                              question: 'Dirección del lugar donde reside el arrendador (propietario):',
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
                              question: 'Tipo de documento de identificación del arrendador (propietario):',
                              identifier: 'id-unid-3_1_opA_1_opA_3',
                              wordToReplace: 'id-unid-3_1_opA_1_opA_3',
                              indications: {
                                areIndications: true,
                                indicationsType: 'outsideText',
                                // tslint:disable-next-line:max-line-length
                                value: 'Seleccione el tipo de documento de identificación del propietario',
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
                                question: 'Nombre completo del arrendador (propietario), incluyendo los apellidos:',
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
                                question: 'Dirección del lugar donde reside el arrendador (propietario):',
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
                                question: 'Tipo de documento de identificación del arrendador (propietario):',
                                identifier: 'id-unid-3_1_opA_1_opB_3',
                                wordToReplace: '3_1_opA_1_opB_3',
                                indications: {
                                  areIndications: true,
                                  indicationsType: 'insideText',
                                  value: 'Seleccione el tipo de documento de identificación del propietario',
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
                                question: 'Nombre completo de la persona que firma este contrato en nombre y representación del arrendador (propietario)',
                                wordToReplace: 'id-unid-3_1_opA_1_opB_5',
                                identifier: 'id-unid-3_1_opA_1_opB_5',
                                type: 'iText',
                                replacement: '',
                                placeholder: 'P. ej. Martino Montano Holguín',
                                indications: {
                                  areIndications: true,
                                  indicationsType: 'outsideText',
                                  // tslint:disable-next-line:max-line-length
                                  value: 'Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este arrendador. El contrato puede ser firmado por un representante legal o voluntario. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
                                },
                              },
                              {
                                type: 'iRadioB',
                                // tslint:disable-next-line:max-line-length
                                question: 'Documento de identificación de la persona que firma el contrato en nombre y representación arrendador (propietario):',
                                identifier: 'id-unid-3_1_opA_1_opB_6',
                                wordToReplace: 'id-unid-3_1_opA_1_opB_6',
                                indications: {
                                  areIndications: true,
                                  indicationsType: 'outsideText',
                                  // tslint:disable-next-line:max-line-length
                                  value: 'Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación del propietario.',
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
                                question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del arrendador (propietario)',
                                wordToReplace: 'id-unid-3_1_opA_1_opB_8',
                                placeholder: 'P. ej. apoderado, representante legal',
                                identifier: 'id-unid-3_1_opA_1_opB_8',
                                type: 'iText',
                                replacement: '',
                                indications: {
                                  areIndications: true,
                                  indicationsType: 'insideText',
                                  // tslint:disable-next-line:max-line-length
                                  value: 'Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este propietario.',
                                },
                              },
                              {
                                // tslint:disable-next-line:max-line-length
                                question: 'Dirección del lugar donde reside la persona que firma este contrato en nombre y representación del arrendador (propietario)',
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
                      question: 'Nombre o razón social de esta persona jurídica arrendadora (propietaria):',
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
                      question: 'Domicilio social completo de la persona jurídica arrendadora (propietaria):',
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
          ]
        }
        // {}
      ]
    },
    {
      question: 'Dirección o direcciones de correo electrónico del/los propietarios',
      wordToReplace: 'id-unidnew-3',
      identifier: 'id-unidnew-3',
      placeholder: 'P. ej: ejemplo@email.com',
      type: 'iText',
      subType: 'textarea',
      replacement: '',
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Si lo desea, señale en este espacio la dirección o direcciones de correo electrónico de los propietarios. Esto puede facilitar y hacer más fluidas las comunicaciones entre las partes.  Si no desea indicar la dirección o direcciones de correo electrónico, deje este espacio en blanco.',
      },
      isEmpty: {
        prepend: 'La Parte Arrendataria podrá comunicarse con la Parte Arrendadora a través de: <br>',
        append: '',
      }
    },
    {
      type: 'iForEach',
      value: 1,
      min: 1,
      max: 10,
      replacement: '',
      identifier: 'id-unid-4',
      wordToReplace: 'id-unid-4',
      question: '¿Cuántas personas van a ocupar la vivienda alquilada en tanto que inquilinos ?(arrendatarios):',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'El arrendatario es la persona natural o jurídica que tiene el derecho a disfrutar temporalmente de un bien a cambio de un pago. Cuando el bien de arrendamiento es una casa el arrendatario es el inquilino, quien paga un alquiler para disfrutar del bien.',
      },
      content: [
        {
          identifier: 'id-unid-4',
          wordToReplace: 'id-unid-4',
          replacementOriginal: 'id-unid-4_1',
          replacement: '',
          extraReplacements: [],
          modifiedReplacements: [],
          modifiedExtraReplacements: [],
          subSteps: [
            {
              type: 'iRadioC',
              question: 'La persona arrendataria ->(index) (inquilino) es:',
              questionOriginal: 'La persona arrendataria ->(index) (inquilino) es:',
              hasIndex: true,
              identifier: 'id-unid-4_1',
              wordToReplace: 'id-unid-4_1',
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                // tslint:disable-next-line:max-line-length
                value: 'Seleccione el tipo de personalidad jurídica. Hablamos de personas físicas para referirnos a un particular, sin embargo hablamos de personas jurídicas para referirnos a una empresa, una asociación, etc...',
              },
              defaultRadioId: 'id-unid-4_1_opA',
              replacement: '',
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'Persona física',
                  radioId: 'id-unid-4_1_opA',
                  identifier: 'id-unid-4_1_opA',
                  replacementOriginal: 'id-unid-4_1_opA_1',
                  replacement: 'id-unid-4_1_opA_1',
                  extraReplacements: [],
                  checked: true,
                  subSteps: [
                    {
                        type: 'iRadioC',
                        question: 'La persona arrendataria (inquilino) para realizar el contrato, actúa:',
                        identifier: 'id-unid-4_1_opA_1',
                        wordToReplace: 'id-unid-4_1_opA_1',
                        indications: {
                          areIndications: true,
                          indicationsType: 'outsideText',
                          // tslint:disable-next-line:max-line-length
                          value: 'La persona puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, esta misma persona firmará el contrato y asumirá las obligaciones. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es la persona a la que representa quien asumirá las obligaciones derivadas de este contrato. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
                        },
                        defaultRadioId: 'id-unid-4_1_opA_1_opA',
                        replacement: '',
                        extraReplacements: [
                        ],
                        radios: [
                          {
                            label: 'en su propio nombre y representación',
                            radioId: 'id-unid-4_1_opA_1_opA',
                            identifier: 'id-unid-4_1_opA_1_opA',
                            // tslint:disable-next-line:max-line-length
                            replacementOriginal: 'id-unid-4_1_opA_1_opA_1, mayor de edad, y con domicilio en id-unid-4_1_opA_1_opA_2, con id-unid-4_1_opA_1_opA_3 número id-unid-4_1_opA_1_opA_4, y actuando en su propio nombre y representación.',
                            // tslint:disable-next-line:max-line-length
                            replacement: 'id-unid-4_1_opA_1_opA_1, mayor de edad, y con domicilio en id-unid-4_1_opA_1_opA_2, con id-unid-4_1_opA_1_opA_3 número id-unid-4_1_opA_1_opA_4, y actuando en su propio nombre y representación.',
                            extraReplacements: [],
                            checked: true,
                            subSteps: [
                            {
                              question: 'Nombre completo del arrendatario (inquilino), incluyendo los apellidos:',
                              wordToReplace: 'id-unid-4_1_opA_1_opA_1',
                              identifier: 'id-unid-4_1_opA_1_opA_1',
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
                              question: 'Dirección del lugar donde reside el arrendatario (inquilino):',
                              wordToReplace: 'id-unid-4_1_opA_1_opA_2',
                              identifier: 'id-unid-4_1_opA_1_opA_2',
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
                              question: 'Tipo de documento de identificación del arrendatario (inquilino):',
                              identifier: 'id-unid-4_1_opA_1_opA_3',
                              wordToReplace: 'id-unid-4_1_opA_1_opA_3',
                              indications: {
                                areIndications: true,
                                indicationsType: 'outsideText',
                                // tslint:disable-next-line:max-line-length
                                value: 'Seleccione el tipo de documento de identificación del inquilino',
                              },
                              replacement: '',
                              extraReplacements: [],
                              radios: [
                                {
                                  label: 'DNI',
                                  replacementOriginal: 'DNI',
                                  replacement: '',
                                  radioId: 'id-unid-4_1_opA_1_opA_3_opA',
                                  identifier: 'id-unid-4_1_opA_1_opA_3_opA',
                                  extraReplacements: [],
                                  checked: true,
                                },
                                {
                                  label: 'NIE',
                                  replacementOriginal: 'NIE',
                                  replacement: '',
                                  radioId: 'id-unid-4_1_opA_1_opA_3_opB',
                                  identifier: 'id-unid-4_1_opA_1_opA_3_opB',
                                  extraReplacements: [],
                                  checked: false,
                                },
                                {
                                  label: 'Pasaporte',
                                  replacementOriginal: 'Pasaporte',
                                  replacement: '',
                                  radioId: 'id-unid-4_1_opA_1_opA_3_opC',
                                  identifier: 'id-unid-4_1_opA_1_opA_3_opC',
                                  extraReplacements: [],
                                  checked: false,
                                }
                              ]
                            },
                            {
                              question: 'Número del documento seleccionado en la pregunta anterior',
                              wordToReplace: 'id-unid-4_1_opA_1_opA_4',
                              identifier: 'id-unid-4_1_opA_1_opA_4',
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
                            replacementOriginal: 'id-unid-4_1_opA_1_opB_5, mayor de edad, con domicilio en id-unid-4_1_opA_1_opB_9, id-unid-4_1_opA_1_opB_6 número: id-unid-4_1_opA_1_opB_7, en calidad de id-unid-4_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de id-unid-4_1_opA_1_opB_1, con domicilio en id-unid-4_1_opA_1_opB_2 y id-unid-4_1_opA_1_opB_3 número id-unid-4_1_opA_1_opB_4.',
                            // tslint:disable-next-line:max-line-length
                            replacement: 'id-unid-4_1_opA_1_opB_5, mayor de edad, con domicilio en id-unid-4_1_opA_1_opB_9, id-unid-4_1_opA_1_opB_6 número: id-unid-4_1_opA_1_opB_7, en calidad de id-unid-4_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de id-unid-4_1_opA_1_opB_1, con domicilio en id-unid-4_1_opA_1_opB_2 y id-unid-4_1_opA_1_opB_3 número id-unid-4_1_opA_1_opB_4.',
                            extraReplacements: [],
                            radioId: 'id-unid-4_1_opA_1_opB',
                            identifier: 'id-unid-4_1_opA_1_opB',
                            checked: false,
                            subSteps: [
                              {
                                question: 'Nombre completo del arrendatario (inquilino), incluyendo los apellidos:',
                                wordToReplace: 'id-unid-4_1_opA_1_opB_1',
                                identifier: 'id-unid-4_1_opA_1_opB_1',
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
                                question: 'Dirección del lugar donde reside el arrendatario (inquilino):',
                                wordToReplace: 'id-unid-4_1_opA_1_opB_2',
                                identifier: 'id-unid-4_1_opA_1_opB_2',
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
                                question: 'Tipo de documento de identificación del arrendatario (inquilino):',
                                identifier: 'id-unid-4_1_opA_1_opB_3',
                                wordToReplace: '3_1_opA_1_opB_3',
                                indications: {
                                  areIndications: true,
                                  indicationsType: 'insideText',
                                  value: 'Seleccione el tipo de documento de identificación del inquilino',
                                },
                                replacement: '',
                                extraReplacements: [],
                                radios: [
                                  {
                                    label: 'DNI',
                                    replacementOriginal: 'DNI',
                                    replacement: '',
                                    radioId: 'id-unid-4_1_opA_1_opB_3_opA',
                                    identifier: 'id-unid-4_1_opA_1_opB_3_opA',
                                    extraReplacements: [],
                                    checked: true,
                                  },
                                  {
                                    label: 'NIE',
                                    replacementOriginal: 'NIE',
                                    replacement: '',
                                    radioId: 'id-unid-4_1_opA_1_opB_3_opB',
                                    identifier: 'id-unid-4_1_opA_1_opB_3_opB',
                                    extraReplacements: [],
                                    checked: false,
                                  },
                                  {
                                    label: 'Pasaporte',
                                    replacementOriginal: 'Pasaporte',
                                    replacement: '',
                                    radioId: 'id-unid-4_1_opA_1_opB_3_opC',
                                    identifier: 'id-unid-4_1_opA_1_opB_3_opC',
                                    extraReplacements: [],
                                    checked: false,
                                  }
                                ]
                              },
                              {
                                question: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                                wordToReplace: 'id-unid-4_1_opA_1_opB_4',
                                identifier: 'id-unid-4_1_opA_1_opB_4',
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
                                question: 'Nombre completo de la persona que firma este contrato en nombre y representación del arrendatario (inquilino)',
                                wordToReplace: 'id-unid-4_1_opA_1_opB_5',
                                identifier: 'id-unid-4_1_opA_1_opB_5',
                                type: 'iText',
                                replacement: '',
                                placeholder: 'P. ej. Martino Montano Holguín',
                                indications: {
                                  areIndications: true,
                                  indicationsType: 'outsideText',
                                  // tslint:disable-next-line:max-line-length
                                  value: 'Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este arrendatario. El contrato puede ser firmado por un representante legal o voluntario. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
                                },
                              },
                              {
                                type: 'iRadioB',
                                // tslint:disable-next-line:max-line-length
                                question: 'Documento de identificación de la persona que firma el contrato en nombre y representación arrendatario (inquilino):',
                                identifier: 'id-unid-4_1_opA_1_opB_6',
                                wordToReplace: 'id-unid-4_1_opA_1_opB_6',
                                indications: {
                                  areIndications: true,
                                  indicationsType: 'outsideText',
                                  // tslint:disable-next-line:max-line-length
                                  value: 'Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación del inquilino.',
                                },
                                replacement: '',
                                extraReplacements: [],
                                radios: [
                                  {
                                    label: 'DNI',
                                    replacementOriginal: 'DNI',
                                    replacement: '',
                                    radioId: 'id-unid-4_1_opA_1_opB_6_opA',
                                    identifier: 'id-unid-4_1_opA_1_opB_6_opA',
                                    extraReplacements: [],
                                    checked: true,
                                  },
                                  {
                                    label: 'NIE',
                                    replacementOriginal: 'NIE',
                                    replacement: '',
                                    radioId: 'id-unid-4_1_opA_1_opB_6_opB',
                                    identifier: 'id-unid-4_1_opA_1_opB_6_opB',
                                    extraReplacements: [],
                                    checked: false,
                                  },
                                  {
                                    label: 'Pasaporte',
                                    replacementOriginal: 'Pasaporte',
                                    replacement: '',
                                    radioId: 'id-unid-4_1_opA_1_opB_6_opC',
                                    identifier: 'id-unid-4_1_opA_1_opB_6_opC',
                                    extraReplacements: [],
                                    checked: false,
                                  }
                                ]
                              },
                              {
                                question: 'Número del documento seleccionado en la pregunta anterior:',
                                wordToReplace: 'id-unid-4_1_opA_1_opB_7',
                                identifier: 'id-unid-4_1_opA_1_opB_7',
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
                                question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del arrendatario (inquilino)',
                                wordToReplace: 'id-unid-4_1_opA_1_opB_8',
                                placeholder: 'P. ej. apoderado, representante legal',
                                identifier: 'id-unid-4_1_opA_1_opB_8',
                                type: 'iText',
                                replacement: '',
                                indications: {
                                  areIndications: true,
                                  indicationsType: 'insideText',
                                  // tslint:disable-next-line:max-line-length
                                  value: 'Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este inquilino.',
                                },
                              },
                              {
                                // tslint:disable-next-line:max-line-length
                                question: 'Dirección del lugar donde reside la persona que firma este contrato en nombre y representación del arrendatario (inquilino)',
                                wordToReplace: 'id-unid-4_1_opA_1_opB_9',
                                placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                                identifier: 'id-unid-4_1_opA_1_opB_9',
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
                  replacementOriginal: 'id-unid-4_1_opB_5 actuando en nombre y representación de: id-unid-4_1_opB_1, con domicilio en id-unid-4_1_opB_new1,  C.I.F/N.I.F número id-unid-4_1_opB_2, e inscrita en: id-unid-4_1_opB_3  con la siguiente información: id-unid-4_1_opB_4.',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'id-unid-4_1_opB_5 actuando en nombre y representación de: id-unid-4_1_opB_1, con domicilio en id-unid-4_1_opB_new1,  C.I.F/N.I.F número id-unid-4_1_opB_2, e inscrita en: id-unid-4_1_opB_3  con la siguiente información: id-unid-4_1_opB_4.',
                  extraReplacements: [],
                  radioId: 'id-unid-4_1_opB',
                  identifier: 'id-unid-4_1_opB',
                  checked: false,
                  subSteps: [
                    {
                      question: 'Nombre o razón social de esta persona jurídica arrendataria (inquilino):',
                      wordToReplace: 'id-unid-4_1_opB_1',
                      identifier: 'id-unid-4_1_opB_1',
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
                      question: 'Domicilio social completo de la persona jurídica arrendataria (inquilino):',
                      wordToReplace: 'id-unid-4_1_opB_new1',
                      identifier: 'id-unid-4_1_opB_new1',
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
                      question: 'NIF (Número de Identificación Fiscal) completo de la persona jurídica:',
                      wordToReplace: 'id-unid-4_1_opB_2',
                      identifier: 'id-unid-4_1_opB_2',
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
                      wordToReplace: 'id-unid-4_1_opB_3',
                      identifier: 'id-unid-4_1_opB_3',
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
                      wordToReplace: 'id-unid-4_1_opB_4',
                      identifier: 'id-unid-4_1_opB_4',
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
                      identifier: 'id-unid-4_1_opB_5',
                      wordToReplace: 'id-unid-4_1_opB_5',
                      question: '¿Cuántas personas firmarán el contrato en nombre y representación de la persona jurídica?',
                      indications: {
                        areIndications: true,
                        indicationsType: 'outsideText',
                        value: 'Indique aquí el número de personas que firmarán el contrato en nombre y representación de la persona. Al ser una persona jurídica, el contrato lo debe firmar una persona física que haya recibido de esta facultades para poder contratar en nombre de la empresa y que puede ser, al mismo tiempo, su administrador (representante legal) o no (apoderada).',
                      },
                      content: [
                        {
                          identifier: 'id-unid-4_1_opB_5',
                          wordToReplace: 'id-unid-4_1_opB_5',
                          replacementOriginal: ' id-unid-4_1_opB_5_1, mayor de edad, con domicilio en id-unid-4_1_opB_5_2, id-unid-4_1_opB_5_3 núm. id-unid-4_1_opB_5_4, y en calidad de id-unid-4_1_opB_5_5; <br> <br>',
                          replacement: '',
                          extraReplacements: [],
                          modifiedReplacements: [],
                          modifiedExtraReplacements: [],
                          subSteps: [
                            {
                              question: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídica:',
                              wordToReplace: 'id-unid-4_1_opB_5_1',
                              identifier: 'id-unid-4_1_opB_5_1',
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
                              wordToReplace: 'id-unid-4_1_opB_5_2',
                              identifier: 'id-unid-4_1_opB_5_2',
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
                              identifier: 'id-unid-4_1_opB_5_3',
                              wordToReplace: 'id-unid-4_1_opB_5_3',
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
                                  radioId: 'id-unid-4_1_opB_5_3_opA',
                                  identifier: 'id-unid-4_1_opB_5_3_opA',
                                  extraReplacements: [],
                                  checked: true,
                                },
                                {
                                  label: 'NIE',
                                  replacementOriginal: 'NIE',
                                  replacement: '',
                                  radioId: 'id-unid-4_1_opB_5_3_opB',
                                  identifier: 'id-unid-4_1_opB_5_3_opB',
                                  extraReplacements: [],
                                  checked: false,
                                },
                                {
                                  label: 'Pasaporte',
                                  replacementOriginal: 'Pasaporte',
                                  replacement: '',
                                  radioId: 'id-unid-4_1_opB_5_3_opC',
                                  identifier: 'id-unid-4_1_opB_5_3_opC',
                                  extraReplacements: [],
                                  checked: false,
                                }
                              ]
                            },
                            {
                              question: 'Número del documento de identificación personal seleccionado:',
                              wordToReplace: 'id-unid-4_1_opB_5_4',
                              identifier: 'id-unid-4_1_opB_5_4',
                              placeholder: 'P. ej: 42888457',
                              type: 'iText',
                              mandatory: false,
                              replacement: '',
                              indications: {
                                areIndications: true,
                                indicationsType: 'insideText',
                                value: 'Escriba el número que corresponde con el documento de identificación personal seleccionado en la pregunta anterior',
                              },
                            },
                            {
                              question: 'Función del representante de la persona jurídica:',
                              wordToReplace: 'id-unid-4_1_opB_5_5',
                              identifier: 'id-unid-4_1_opB_5_5',
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
          ]
        }
        // {}
      ]
    },
    {
      question: 'Dirección o direcciones de correo electrónico del/los inquilinos',
      wordToReplace: 'id-unidnew-4',
      identifier: 'id-unidnew-4',
      placeholder: 'P. ej: ejemplo@email.com',
      type: 'iText',
      subType: 'textarea',
      replacement: '',
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Si lo desea, señale en este espacio la dirección o direcciones de correo electrónico de los inquilinos. Esto puede facilitar y hacer más fluidas las comunicaciones entre las partes.  Si no desea indicar la dirección o direcciones de correo electrónico, deje este espacio en blanco.',
      },
      isEmpty: {
        prepend: 'La Parte Arrendadora podrá comunicarse con la Parte Arrendataria a través de: <br>',
        append: '',
      }
    },
    {
      type: 'iRadioB',
      subType: 'select',
      question: 'Registro en el que está inscrito:',
      identifier: 'id-dec-new5',
      wordToReplace: 'id-dec-new5',
      defaultRadioId: 'id-dec-new5_opA',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: 'Además de la norma común, la regulación de los alquileres de uso turístico, se han ido regulando por las normas que se han implementado por las distintas Comunidades Autónomas, que regulan los arrendamiento de aquellos pisos, apartamentos o casas que, amueblados y equipados en condiciones de uso inmediato, se comercializan y promocionan en canales de oferta turística, y que deben ofrecer una serie de servicios.<br>La mayoría de las Comunidades Autónomas han optado por la presentación de la declaración responsable como autorización inicial de funcionamiento de esta actividad (Madrid, Valencia, Andalucía o Aragón), no así en Cataluña, en la que las propietarias y propietarios deben presentar una comunicación previa al Ayuntamiento competente.',
      },
      replacement: '',
      extraReplacements: [
        {
          identifier: 'iddecnew5-extra-1',
          wordToReplace: 'iddecnew5-extra-1',
          insideId: 'opA'
        },
        {
          identifier: 'iddecnew5-extra-2',
          wordToReplace: 'iddecnew5-extra-2',
          insideId: 'opB'
        },
        {
          identifier: 'iddecnew5-extra-3',
          wordToReplace: 'iddecnew5-extra-3',
          insideId: 'opC'
        },
      ],
      radios: [
        {
          label: 'Andalucía',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en en el Registro de Turismo de Andalucía (RTA), conforme al Decreto 28/2016, de 2 de febrero, de las viviendas con fines turísticos, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en en el Registro de Turismo de Andalucía (RTA), conforme al Decreto 28/2016, de 2 de febrero, de las viviendas con fines turísticos, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-new5_opA',
          identifier: 'id-dec-new5_opA',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 28/2016, de 2 de febrero, de las viviendas con fines turísticos y de modificación del Decreto 194/2010, de 20 de abril, de establecimientos de apartamentos turísticos.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 28/2016, de 2 de febrero, de las viviendas con fines turísticos y de modificación del Decreto 194/2010, de 20 de abril, de establecimientos de apartamentos turísticos.',
              insideId: 'opC'
            },
          ],
          checked: true,
        },
        {
          label: 'Aragón',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en en el Registro de Turismo de Aragón, conforme al Decreto 80/2015, de 5 de mayo, por el que se aprueba el Reglamento de las viviendas de uso turístico en Aragón, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en en el Registro de Turismo de Aragón, conforme al Decreto 80/2015, de 5 de mayo, por el que se aprueba el Reglamento de las viviendas de uso turístico en Aragón, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-new5_opB',
          identifier: 'id-dec-new5_opB',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 80/2015, de 5 de mayo, por el que se aprueba el Reglamento de las viviendas de uso turístico en Aragón.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 80/2015, de 5 de mayo, por el que se aprueba el Reglamento de las viviendas de uso turístico en Aragón.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'Principado de Asturias',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro Empresas y Actividades Turísticas del Principado de Asturias, conforme Decreto 48/2016, de 10 de agosto, de viviendas vacacionales y viviendas de uso turístico, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro Empresas y Actividades Turísticas del Principado de Asturias, conforme Decreto 48/2016, de 10 de agosto, de viviendas vacacionales y viviendas de uso turístico, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-new5_opC',
          identifier: 'id-dec-new5_opC',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 48/2016, de 10 de agosto, de viviendas vacacionales y viviendas de uso turístico.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 48/2016, de 10 de agosto, de viviendas vacacionales y viviendas de uso turístico.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'Islas Baleares',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro general de empresas, actividades y establecimientos turísticos de las Islas Baleares, conforme la Ley 6/2017, de 31 de julio, de modificación de la Ley 8/2012, de 19 de julio, de turismo de las Illes Balears, relativa a la comercialización de estancias turísticas en viviendas, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro general de empresas, actividades y establecimientos turísticos de las Islas Baleares, conforme la Ley 6/2017, de 31 de julio, de modificación de la Ley 8/2012, de 19 de julio, de turismo de las Illes Balears, relativa a la comercialización de estancias turísticas en viviendas, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-new5_opD',
          identifier: 'id-dec-new5_opD',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, a la Ley 8/2012, de 19 de julio del turismo de las Illes Balears, y a la Ley 6/2017, de 31 de julio, de modificación de la Ley 8/2012, de 19 de julio, del turismo de las Illes Balears, relativa a la comercialización de estancias turísticas en viviendas.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, a la Ley 8/2012, de 19 de julio del turismo de las Illes Balears, y a la Ley 6/2017, de 31 de julio, de modificación de la Ley 8/2012, de 19 de julio, del turismo de las Illes Balears, relativa a la comercialización de estancias turísticas en viviendas.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'Canarias',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro General Turístico de la Comunidad autónoma de Canarias, conforme al Decreto 113/2015, de 22 de mayo, por el que se aprueba el Reglamento de las viviendas vacacionales de la Comunidad Autónoma de Canarias, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro General Turístico de la Comunidad autónoma de Canarias, conforme al Decreto 113/2015, de 22 de mayo, por el que se aprueba el Reglamento de las viviendas vacacionales de la Comunidad Autónoma de Canarias, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-new5_opE',
          identifier: 'id-dec-new5_opE',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 113/2015, de 22 de mayo, por el que se aprueba el Reglamento de las viviendas vacacionales de la Comunidad Autónoma de Canarias.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 113/2015, de 22 de mayo, por el que se aprueba el Reglamento de las viviendas vacacionales de la Comunidad Autónoma de Canarias.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'Cantabria',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro General de Empresas Turísticas de Cantabria, conforme al Decreto 19/2014, de 13 de marzo, por el que se modifica el Decreto 82/2010, de 25 de noviembre, por el que se regulan los establecimientos de alojamiento turístico extrahotelero en el ámbito de la Comunidad Autónoma de Cantabria, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro General de Empresas Turísticas de Cantabria, conforme al Decreto 19/2014, de 13 de marzo, por el que se modifica el Decreto 82/2010, de 25 de noviembre, por el que se regulan los establecimientos de alojamiento turístico extrahotelero en el ámbito de la Comunidad Autónoma de Cantabria, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-new5_opF',
          identifier: 'id-dec-new5_opF',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: 'Las partes acuerdan que un importe de dos mensualidades será abonada por la PARTE ARRENDATARIA al momento de la reserva de la Vivienda, y, en todo caso antes de su entrada o su llegada a La Vivienda. El abono se realizará por el mismo medio a través del cual se realice el pago de la renta. Esta fianza servirá para garantizar el cumplimiento de sus obligaciones derivadas del presente Contrato. Una vez la parte ARRENDADORA haya comprobado que la vivienda y el resto de la  vivienda se encuentran en perfecto estado y conservación, el importe correspondiente a la fianza será devuelto a la parte arrendataria. En el caso de que existiera deudas o cantidades pendientes de abono, o bien, se hubiere ocasionado desperfectos en la vivienda, así como en el mobiliario o los enseres de la misma, debido a su mal uso, será descontado de la fianza el importe correspondiente necesario para reparar los desperfectos ocasionados. Si la fianza no hubiese sido satisfecha en el tiempo y la forma previstos, se tendrá el Contrato por resuelto y la PARTE ARRENDADORA podrá proceder a arrendar de nuevo La Vivienda. Además, los montantes o cantidades que sí hubiesen sido satisfechos no serán devueltos a la PARTE ARRENDATARIA.',
              replacementOriginal: 'Las partes acuerdan que un importe de dos mensualidades será abonada por la PARTE ARRENDATARIA al momento de la reserva de la Vivienda, y, en todo caso antes de su entrada o su llegada a La Vivienda. El abono se realizará por el mismo medio a través del cual se realice el pago de la renta. Esta fianza servirá para garantizar el cumplimiento de sus obligaciones derivadas del presente Contrato. Una vez la parte ARRENDADORA haya comprobado que la vivienda y el resto de la  vivienda se encuentran en perfecto estado y conservación, el importe correspondiente a la fianza será devuelto a la parte arrendataria. En el caso de que existiera deudas o cantidades pendientes de abono, o bien, se hubiere ocasionado desperfectos en la vivienda, así como en el mobiliario o los enseres de la misma, debido a su mal uso, será descontado de la fianza el importe correspondiente necesario para reparar los desperfectos ocasionados. Si la fianza no hubiese sido satisfecha en el tiempo y la forma previstos, se tendrá el Contrato por resuelto y la PARTE ARRENDADORA podrá proceder a arrendar de nuevo La Vivienda. Además, los montantes o cantidades que sí hubiesen sido satisfechos no serán devueltos a la PARTE ARRENDATARIA.',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '-	la falta de pago del importe de la fianza;',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente a la Ley 29/1994, de 24 de noviembre, de Arrendamientos Urbanos.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente a la Ley 29/1994, de 24 de noviembre, de Arrendamientos Urbanos.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'Castilla y León',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Turismo de Castilla y León, conforme al Decreto 3/2017, de 16 de febrero, por el que se regulan los establecimientos de alojamiento en la modalidad de vivienda de uso turístico en la Comunidad de Castilla y León, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Turismo de Castilla y León, conforme al Decreto 3/2017, de 16 de febrero, por el que se regulan los establecimientos de alojamiento en la modalidad de vivienda de uso turístico en la Comunidad de Castilla y León, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-17_opB_1_opA_1_opG',
          identifier: 'id-dec-17_opB_1_opA_1_opG',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 3/2017, de 16 de febrero, por el que se regulan los establecimientos de alojamiento en la modalidad de vivienda de uso turístico en la Comunidad de Castilla y León.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 3/2017, de 16 de febrero, por el que se regulan los establecimientos de alojamiento en la modalidad de vivienda de uso turístico en la Comunidad de Castilla y León.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'Casilla La Mancha',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Empresas Turísticas de Casilla La Mancha, conforme al Decreto 36/2018, de 29 de mayo, por el que se establece la ordenación de los apartamentos turísticos y las viviendas de uso turístico en Castilla-La Mancha, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Empresas Turísticas de Casilla La Mancha, conforme al Decreto 36/2018, de 29 de mayo, por el que se establece la ordenación de los apartamentos turísticos y las viviendas de uso turístico en Castilla-La Mancha, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-17_opB_1_opA_1_opZ',
          identifier: 'id-dec-17_opB_1_opA_1_opZ',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 36/2018, de 29 de mayo, por el que se establece la ordenación de los apartamentos turísticos y las viviendas de uso turístico en Castilla-La Mancha.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 36/2018, de 29 de mayo, por el que se establece la ordenación de los apartamentos turísticos y las viviendas de uso turístico en Castilla-La Mancha.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'Cataluña',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Turismo de Cataluña, conforme al Decreto 159/2012, de 20 de noviembre, de establecimientos de alojamiento turístico y de viviendas de uso turístico, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Turismo de Cataluña, conforme al Decreto 159/2012, de 20 de noviembre, de establecimientos de alojamiento turístico y de viviendas de uso turístico, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-17_opB_1_opA_1_opH',
          identifier: 'id-dec-17_opB_1_opA_1_opH',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 159/2012, de 20 de noviembre, de establecimientos de alojamiento turístico y de viviendas de uso turístico.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 159/2012, de 20 de noviembre, de establecimientos de alojamiento turístico y de viviendas de uso turístico.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'Comunidad Valenciana',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro General de Empresas, Establecimientos y Profesiones Turísticas de la Comunitat Valenciana, conforme al Decreto 92/2009, de 3 de julio, del Consell, por el que aprueba el reglamento regulador de las viviendas turísticas denominadas apartamentos, villas, chalés, bungalows y similares, y de las empresas gestoras, personas jurídicas o físicas, dedicadas a la cesión de su uso y disfrute, en el ámbito territorial de la Comunitat Valenciana, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro General de Empresas, Establecimientos y Profesiones Turísticas de la Comunitat Valenciana, conforme al Decreto 92/2009, de 3 de julio, del Consell, por el que aprueba el reglamento regulador de las viviendas turísticas denominadas apartamentos, villas, chalés, bungalows y similares, y de las empresas gestoras, personas jurídicas o físicas, dedicadas a la cesión de su uso y disfrute, en el ámbito territorial de la Comunitat Valenciana, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-new5_opI',
          identifier: 'id-dec-new5_opI',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, a la Ley 15/2018, 7 de junio, de turismo, ocio y hospitalidad de la Comunitat Valenciana, y al Decreto 92/2009, de 3 de julio, del Consell, por el que aprueba el reglamento regulador de las viviendas turísticas denominadas apartamentos, villas, chalés, bungalows y similares, y de las empresas gestoras, personas jurídicas o físicas, dedicadas a la cesión de su uso y disfrute, en el ámbito territorial de la Comunitat Valenciana.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, a la Ley 15/2018, 7 de junio, de turismo, ocio y hospitalidad de la Comunitat Valenciana, y al Decreto 92/2009, de 3 de julio, del Consell, por el que aprueba el reglamento regulador de las viviendas turísticas denominadas apartamentos, villas, chalés, bungalows y similares, y de las empresas gestoras, personas jurídicas o físicas, dedicadas a la cesión de su uso y disfrute, en el ámbito territorial de la Comunitat Valenciana.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'Extremadura',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro General de Empresas y Actividades Turísticas de Extremadura, conforme a la Ley 6/2018, de 12 de julio, de modificación de la Ley 2/2011, de 31 de enero, de desarrollo y modernización de turismo de Extremadura, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro General de Empresas y Actividades Turísticas de Extremadura, conforme a la Ley 6/2018, de 12 de julio, de modificación de la Ley 2/2011, de 31 de enero, de desarrollo y modernización de turismo de Extremadura, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-new5_opY',
          identifier: 'id-dec-new5_opY',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: 'Las partes acuerdan que un importe de dos mensualidades será abonada por la PARTE ARRENDATARIA al momento de la reserva de la Vivienda, y, en todo caso antes de su entrada o su llegada a La Vivienda. El abono se realizará por el mismo medio a través del cual se realice el pago de la renta. Esta fianza servirá para garantizar el cumplimiento de sus obligaciones derivadas del presente Contrato. Una vez la parte ARRENDADORA haya comprobado que la vivienda y el resto de la  vivienda se encuentran en perfecto estado y conservación, el importe correspondiente a la fianza será devuelto a la parte arrendataria. En el caso de que existiera deudas o cantidades pendientes de abono, o bien, se hubiere ocasionado desperfectos en la vivienda, así como en el mobiliario o los enseres de la misma, debido a su mal uso, será descontado de la fianza el importe correspondiente necesario para reparar los desperfectos ocasionados. Si la fianza no hubiese sido satisfecha en el tiempo y la forma previstos, se tendrá el Contrato por resuelto y la PARTE ARRENDADORA podrá proceder a arrendar de nuevo La Vivienda. Además, los montantes o cantidades que sí hubiesen sido satisfechos no serán devueltos a la PARTE ARRENDATARIA.',
              replacementOriginal: 'Las partes acuerdan que un importe de dos mensualidades será abonada por la PARTE ARRENDATARIA al momento de la reserva de la Vivienda, y, en todo caso antes de su entrada o su llegada a La Vivienda. El abono se realizará por el mismo medio a través del cual se realice el pago de la renta. Esta fianza servirá para garantizar el cumplimiento de sus obligaciones derivadas del presente Contrato. Una vez la parte ARRENDADORA haya comprobado que la vivienda y el resto de la  vivienda se encuentran en perfecto estado y conservación, el importe correspondiente a la fianza será devuelto a la parte arrendataria. En el caso de que existiera deudas o cantidades pendientes de abono, o bien, se hubiere ocasionado desperfectos en la vivienda, así como en el mobiliario o los enseres de la misma, debido a su mal uso, será descontado de la fianza el importe correspondiente necesario para reparar los desperfectos ocasionados. Si la fianza no hubiese sido satisfecha en el tiempo y la forma previstos, se tendrá el Contrato por resuelto y la PARTE ARRENDADORA podrá proceder a arrendar de nuevo La Vivienda. Además, los montantes o cantidades que sí hubiesen sido satisfechos no serán devueltos a la PARTE ARRENDATARIA.',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '-	la falta de pago del importe de la fianza;',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente a la Ley 29/1994, de 24 de noviembre, de Arrendamientos Urbanos.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente a la Ley 29/1994, de 24 de noviembre, de Arrendamientos Urbanos.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'Galicia',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Empresas y Actividades Turísticas (REAT) de Galicia, conforme al Decreto 12/2017, de 26 de enero, por el que se establece la ordenación de apartamentos turísticos, viviendas turísticas y viviendas de uso turístico en la Comunidad Autónoma de Galicia, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Empresas y Actividades Turísticas (REAT) de Galicia, conforme al Decreto 12/2017, de 26 de enero, por el que se establece la ordenación de apartamentos turísticos, viviendas turísticas y viviendas de uso turístico en la Comunidad Autónoma de Galicia, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-new5_opJ',
          identifier: 'id-dec-new5_opJ',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 12/2017, de 26 de enero, por el que se establece la ordenación de apartamentos turísticos, viviendas turísticas y viviendas de uso turístico en la Comunidad Autónoma de Galicia.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 12/2017, de 26 de enero, por el que se establece la ordenación de apartamentos turísticos, viviendas turísticas y viviendas de uso turístico en la Comunidad Autónoma de Galicia.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'La Rioja',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de proveedores de servicios turísticos de La Rioja, conforme al Decreto 40/2018, de 23 de noviembre, por el que se modifica el Decreto 10/2017, de 17 de marzo, por el que se aprueba el Reglamento General de Turismo de La Rioja en desarrollo de la Ley 2/2001, de 31 de mayo, de Turismo de La Rioja, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de proveedores de servicios turísticos de La Rioja, conforme al Decreto 40/2018, de 23 de noviembre, por el que se modifica el Decreto 10/2017, de 17 de marzo, por el que se aprueba el Reglamento General de Turismo de La Rioja en desarrollo de la Ley 2/2001, de 31 de mayo, de Turismo de La Rioja, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-new5_opK',
          identifier: 'id-dec-new5_opK',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 40/2018, de 23 de noviembre, por el que se modifica el Decreto 10/2017, de 17 de marzo, por el que se aprueba el Reglamento General de Turismo de La Rioja en desarrollo de la Ley 2/2001, de 31 de mayo, de Turismo de La Rioja.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 40/2018, de 23 de noviembre, por el que se modifica el Decreto 10/2017, de 17 de marzo, por el que se aprueba el Reglamento General de Turismo de La Rioja en desarrollo de la Ley 2/2001, de 31 de mayo, de Turismo de La Rioja.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'Comunidad de Madrid',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Empresas Turísticas de la Comunidad de Madrid, conforme al Decreto 79/2014, de 10 de julio, del Consejo de Gobierno, por el que se regulan los apartamentos turísticos y las viviendas de uso turístico de la Comunidad de Madrid, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Empresas Turísticas de la Comunidad de Madrid, conforme al Decreto 79/2014, de 10 de julio, del Consejo de Gobierno, por el que se regulan los apartamentos turísticos y las viviendas de uso turístico de la Comunidad de Madrid, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-new5_opL',
          identifier: 'id-dec-new5_opL',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 79/2014, de 10 de julio, del Consejo de Gobierno, por el que se regulan los apartamentos turísticos y las viviendas de uso turístico de la Comunidad de Madrid.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 79/2014, de 10 de julio, del Consejo de Gobierno, por el que se regulan los apartamentos turísticos y las viviendas de uso turístico de la Comunidad de Madrid.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'Murcia',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Empresas Turísticas de la Comunidad Autónoma de Murcia, conforme al Decreto n.º 256/2019, de 10 de octubre, por el que se regulan las viviendas de uso turístico en la Región de Murcia, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Empresas Turísticas de la Comunidad Autónoma de Murcia, conforme al Decreto n.º 256/2019, de 10 de octubre, por el que se regulan las viviendas de uso turístico en la Región de Murcia, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-new5_opM',
          identifier: 'id-dec-new5_opM',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto n.º 256/2019, de 10 de octubre, por el que se regulan las viviendas de uso turístico en la Región de Murcia.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto n.º 256/2019, de 10 de octubre, por el que se regulan las viviendas de uso turístico en la Región de Murcia.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'Comunidad Foral de Navarra',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Turismo de Navarra, conforme al Decreto Foral 230/2011, de 16 de octubre, por el que se aprueba el Reglamento de Ordenación de los Apartamentos Turísticos en la Comunidad Foral de Navarra, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Turismo de Navarra, conforme al Decreto Foral 230/2011, de 16 de octubre, por el que se aprueba el Reglamento de Ordenación de los Apartamentos Turísticos en la Comunidad Foral de Navarra, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-new5_opN',
          identifier: 'id-dec-new5_opN',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: 'Las partes acuerdan que un importe de dos mensualidades será abonada por la PARTE ARRENDATARIA al momento de la reserva de la Vivienda, y, en todo caso antes de su entrada o su llegada a La Vivienda. El abono se realizará por el mismo medio a través del cual se realice el pago de la renta. Esta fianza servirá para garantizar el cumplimiento de sus obligaciones derivadas del presente Contrato. Una vez la parte ARRENDADORA haya comprobado que la vivienda y el resto de la  vivienda se encuentran en perfecto estado y conservación, el importe correspondiente a la fianza será devuelto a la parte arrendataria. En el caso de que existiera deudas o cantidades pendientes de abono, o bien, se hubiere ocasionado desperfectos en la vivienda, así como en el mobiliario o los enseres de la misma, debido a su mal uso, será descontado de la fianza el importe correspondiente necesario para reparar los desperfectos ocasionados. Si la fianza no hubiese sido satisfecha en el tiempo y la forma previstos, se tendrá el Contrato por resuelto y la PARTE ARRENDADORA podrá proceder a arrendar de nuevo La Vivienda. Además, los montantes o cantidades que sí hubiesen sido satisfechos no serán devueltos a la PARTE ARRENDATARIA.',
              replacementOriginal: 'Las partes acuerdan que un importe de dos mensualidades será abonada por la PARTE ARRENDATARIA al momento de la reserva de la Vivienda, y, en todo caso antes de su entrada o su llegada a La Vivienda. El abono se realizará por el mismo medio a través del cual se realice el pago de la renta. Esta fianza servirá para garantizar el cumplimiento de sus obligaciones derivadas del presente Contrato. Una vez la parte ARRENDADORA haya comprobado que la vivienda y el resto de la  vivienda se encuentran en perfecto estado y conservación, el importe correspondiente a la fianza será devuelto a la parte arrendataria. En el caso de que existiera deudas o cantidades pendientes de abono, o bien, se hubiere ocasionado desperfectos en la vivienda, así como en el mobiliario o los enseres de la misma, debido a su mal uso, será descontado de la fianza el importe correspondiente necesario para reparar los desperfectos ocasionados. Si la fianza no hubiese sido satisfecha en el tiempo y la forma previstos, se tendrá el Contrato por resuelto y la PARTE ARRENDADORA podrá proceder a arrendar de nuevo La Vivienda. Además, los montantes o cantidades que sí hubiesen sido satisfechos no serán devueltos a la PARTE ARRENDATARIA.',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '-	la falta de pago del importe de la fianza;',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente a la Ley 29/1994, de 24 de noviembre, de Arrendamientos Urbanos.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente a la Ley 29/1994, de 24 de noviembre, de Arrendamientos Urbanos.',
              insideId: 'opC'
            },
          ],
          checked: false,
        },
        {
          label: 'País Vasco',
          replacementOriginal: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Empresas y Actividades Turísticas de Euskadi, conforme al Decreto 101/2018, de 3 de julio, de viviendas y habitaciones de viviendas particulares para uso turístico, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          replacement: 'Mediante el presente contrato se pone en conocimiento de la parte arrendataria que la parte arrendadora se encuentra inscrita en el Registro de Empresas y Actividades Turísticas de Euskadi, conforme al Decreto 101/2018, de 3 de julio, de viviendas y habitaciones de viviendas particulares para uso turístico, y que su Código de Inscripción es el siguiente: id-dec-randomnew5',
          radioId: 'id-dec-new5_opO',
          identifier: 'id-dec-new5_opO',
          extraReplacements: [
            {
              identifier: 'iddecnew5-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddecnew5-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddecnew5-extra-3',
              replacement: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 101/2018, de 3 de julio, de viviendas y habitaciones de viviendas particulares para uso turístico.',
              replacementOriginal: 'Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española. Particularmente, a las normas establecidas en el presente Contrato, y supletoriamente al Código Civil, y al Decreto 101/2018, de 3 de julio, de viviendas y habitaciones de viviendas particulares para uso turístico.',
              insideId: 'opC'
            },
          ],
          checked: false,
        }
      ]
    },
    {
      type: 'iText',
      identifier: 'id-dec-randomnew5',
      wordToReplace: 'id-dec-randomnew5',
      replacement: '',
      question: 'Número de inscripción en el Registro de Turismo o entidad autonómica equivalente:',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: ''
      },
      placeholder: '',
      mandatory: false,
      isFocused: false
    },
    {
      type: 'iText',
      identifier: 'id-unid-5',
      wordToReplace: 'id-unid-5',
      replacement: '',
      question: 'Dirección completa de la vivienda:',
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) '
      },
      placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
      mandatory: false,
      isFocused: false
    },
    {
      question: 'Superficie útil de la vivienda en metros cuadrados:',
      placeholder: 'P. ej: 150',
      wordToReplace: 'id-unid-6',
      identifier: 'id-unid-6',
      type: 'iNumber',
      replacement: '',
      extraReplacements: [],
      rules: [],
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'La superficie útil (o metros útiles de una vivienda) es la superficie que se puede pisar dentro de la casa. En este concepto entra todo el interior de una vivienda (incluidos los armarios), pero quedarían excluidas todas las partes que aún estando dentro de la casa no son útiles, como los tabiques, pilares y demás elementos estructurales. La información de la superficie útil proporciona una idea del espacio del que dispondrá para vivir.'
      },
    },
    {
      type: 'iText',
      subType: 'textarea',
      identifier: 'id-unid-8',
      wordToReplace: 'id-unid-8',
      replacement: '',
      question: 'Haga una descripción detallada de los componentes de la vivienda:',
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Haga un descripción de las zonas de la vivienda, es decir de las partes, espacios, anexos, depedencias de la misma.'
      },
      placeholder: 'P. ej. 4 habitaciones, Una cocina, un salón, dos baños, un garaje, un jardín de 10 m2...',
      mandatory: false,
      isFocused: false
    },
    {
      type: 'iRadioB',
      question: '¿Desea incluir de forma anexa al contrato fotografías recientes del estado actual de la vivienda?',
      identifier: 'id-dec-new11',
      wordToReplace: 'id-dec-new11',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: '',
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          replacementOriginal: 'Junto al presente contrato se adjuntan fotografías de la vivienda a los efectos de dejar constancia del estado de la misma en el momento del arriendo.',
          replacement: 'Junto al presente contrato se adjuntan fotografías de la vivienda a los efectos de dejar constancia del estado de la misma en el momento del arriendo.',
          radioId: 'id-dec-new11_opA',
          identifier: 'id-dec-new11_opA',
          extraReplacements: [

          ],
          checked: false,
        },
        {
          label: 'No',
          replacementOriginal: '',
          replacement: '',
          radioId: 'id-dec-new11_opB',
          identifier: 'id-dec-new11_opB',
          extraReplacements: [
          ],
          checked: true,
        }
      ]
    },
    {
      question: 'Fecha de comienzo del alquiler de la habitación:',
      wordToReplace: 'id-dec-20',
      identifier: 'id-dec-20',
      placeholder: '',
      type: 'iDate',
      replacement: '',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: '',
      }
    },
    {
      question: 'Hora de comienzo del alquiler',
      wordToReplace: 'id-dec-21',
      identifier: 'id-dec-21',
      placeholder: 'P. ej: 09.00; 12.30',
      type: 'iText',
      replacement: '',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: '',
      }
    },
    {
      question: 'Fecha de finalización del alquiler:',
      wordToReplace: 'id-dec-22',
      identifier: 'id-dec-22',
      placeholder: '',
      type: 'iDate',
      replacement: '',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: '',
      },
    },
    {
      question: 'Hora de finalización del alquiler:',
      wordToReplace: 'id-dec-23',
      identifier: 'id-dec-23',
      placeholder: 'P. ej: 09.00; 12.30',
      type: 'iText',
      replacement: '',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: '',
      }
    },
    {
      type: 'iNumber',
      identifier: 'id-dec-27',
      wordToReplace: 'id-dec-27',
      replacement: '',
      question: 'Precio total del alquiler',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: ''
      },
      placeholder: 'Escriba un número',
      mandatory: false,
      isFocused: false,
      extraReplacements: [
      ],
      rules: [
        {
          condition: false,
          rulename: 'extraReplacementToCharacter',
          identifier: 'iddec27-precioAletras',
          wordToReplace: 'iddec27-precioAletras',
          replacement: ''
        }
      ],
    },
    {
      question: 'Espicifique de forma detallada la descripción del precio que se cobra por periodo',
      wordToReplace: 'id-dec-new27',
      identifier: 'id-dec-new27',
      placeholder: 'Ej. 40 euros por día, por 5 días.',
      type: 'iText',
      subType: 'textarea',
      replacement: '',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: '',
      },
      isEmpty: {
        prepend: ' (',
        append: ')',
      }
    },
    {
      type: 'iRadioB',
      question: '¿El precio del alquiler incluye IVA u otro impuesto similar?',
      identifier: 'id-dec-28',
      wordToReplace: 'id-dec-28',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: '',
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          replacementOriginal: 'El precio pactado de renta incluye el IVA (Impuesto sobre el Valor Añadido). Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que la renta incluye Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación.',
          replacement: 'El precio pactado de renta incluye el IVA (Impuesto sobre el Valor Añadido). Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que la renta incluye Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación.',
          radioId: 'id-dec-28_opA',
          identifier: 'id-dec-28_opA',
          extraReplacements: [

          ],
          checked: true,
        },
        {
          label: 'No',
          replacementOriginal: 'Al precio pactado de renta habrá que añadirle el porcentaje correspondiente al IVA (Impuesto sobre el Valor Añadido), que corresponderá abonar a la Parte Arrendataria. Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que al precio de renta se verá incrementado por el porcentaje correspondiente Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación impuesto por la legislación vigente.',
          replacement: 'Al precio pactado de renta habrá que añadirle el porcentaje correspondiente al IVA (Impuesto sobre el Valor Añadido), que corresponderá abonar a la Parte Arrendataria. Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que al precio de renta se verá incrementado por el porcentaje correspondiente Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación impuesto por la legislación vigente.',
          radioId: 'id-dec-28_opB',
          identifier: 'id-dec-28_opB',
          extraReplacements: [
          ],
          checked: false,
        }
      ]
    },
    {
      type: 'iRadioC',
      question: 'Forma de pago del alquiler:',
      identifier: 'id-dec-29',
      wordToReplace: 'id-dec-29',
      defaultRadioId: 'id-dec-29_opA',
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Ingreso o transferencia bancaria:',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): id-dec-29_opA_2 de la entidad: id-dec-29_opA_1, y cuyo titular es: id-dec-29_opA_3. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la Parte Arrendadora entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
          // tslint:disable-next-line:max-line-length
          replacement: 'mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): id-dec-29_opA_2 de la entidad: id-dec-29_opA_1, y cuyo titular es: id-dec-29_opA_3. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la Parte Arrendadora entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
          extraReplacements: [],
          radioId: 'id-dec-29_opA',
          identifier: 'id-dec-29_opA',
          checked: true,
          subSteps: [
            {
              question: 'Nombre del banco de la cuenta donde se realiza el pago del alquiler:',
              placeholder: 'Ej. BBVA',
              wordToReplace: 'id-dec-29_opA_1',
              identifier: 'id-dec-29_opA_1',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [],
            },
            {
              question: 'Número IBAN de dicha cuenta:',
              placeholder: 'P. Ej. ES8020809557151558683884',
              wordToReplace: 'id-dec-29_opA_2',
              identifier: 'id-dec-29_opA_2',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [],
            },
            {
              question: 'Nombre completo o denominación social del titular de la cuenta:',
              placeholder: 'P. Ej. Antonio Alarcón Marrero',
              wordToReplace: 'id-dec-29_opA_3',
              identifier: 'id-dec-29_opA_3',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [],
            },
          ]
        },
        {
          label: 'En efectivo',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'mediante pago en efectivo. En cualquier caso, la Parte Arrendadora entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
          // tslint:disable-next-line:max-line-length
          replacement: 'mediante pago en efectivo. En cualquier caso, la Parte Arrendadora entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
          extraReplacements: [],
          radioId: 'id-dec-29_opB',
          identifier: 'id-dec-29_opB',
          checked: true,
          subSteps: [
          ]
        },
        {
          label: 'otro',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'mediante: id-dec-29_opC_1. En cualquier caso, la Parte Arrendadora entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
          // tslint:disable-next-line:max-line-length
          replacement: 'mediante: id-dec-29_opC_1. En cualquier caso, la Parte Arrendadora entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
          extraReplacements: [],
          radioId: 'id-dec-29_opC',
          identifier: 'id-dec-29_opC',
          checked: true,
          subSteps: [
            {
              question: 'Especifique el método de pago del alquiler',
              placeholder: 'P. Ej. en bitcoin, mitad en efectivo',
              wordToReplace: 'id-dec-29_opC_1',
              identifier: 'id-dec-29_opC_1',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [],
            },
          ]
        },
      ],
    },
    {
      type: 'iRadioC',
      question: 'Además del precio del alquiler de la vivienda, ¿el arrendatario (inquilino) pagará gastos para la limpieza de la misma?',
      identifier: 'id-dec-30',
      wordToReplace: 'id-dec-30',
      defaultRadioId: 'id-dec-30_opA',
      indications: {
        areIndications: false,
        indicationsType: '',
        // tslint:disable-next-line:max-line-length
        value: ''
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí:',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'La renta se verá incrementada en iddec30opA1-precioAletras (id-dec-30_opA_1 €) en concepto de gastos de limpieza de La Vivienda.',
          // tslint:disable-next-line:max-line-length
          replacement: 'La renta se verá incrementada en iddec30opA1-precioAletras (id-dec-30_opA_1 €) en concepto de gastos de limpieza de La Vivienda.',
          extraReplacements: [],
          radioId: 'id-dec-30_opA',
          identifier: 'id-dec-30_opA',
          checked: true,
          subSteps: [
            {
              question: 'Importe en euros del pago total que se hará por los gastos de limpieza para toda la duración del alquiler:',
              placeholder: 'Escriba un número',
              wordToReplace: 'id-dec-30_opA_1',
              identifier: 'id-dec-30_opA_1',
              type: 'iNumber',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [
                {
                  condition: false,
                  rulename: 'extraReplacementToCharacter',
                  identifier: 'iddec30opA1-precioAletras',
                  wordToReplace: 'iddec30opA1-precioAletras',
                  replacement: ''
                }
              ],
            },
          ]
        },
        {
          label: 'No',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: '',
          // tslint:disable-next-line:max-line-length
          replacement: '',
          extraReplacements: [],
          radioId: 'id-dec-30_opB',
          identifier: 'id-dec-30_opB',
          checked: true,
          subSteps: [
          ]
        },
      ],
    },
    {
      type: 'iRadioC',
      question: 'Cuándo se deberá realizar el pago del precio del alquiler?',
      identifier: 'id-dec-new30',
      wordToReplace: 'id-dec-new30',
      defaultRadioId: 'id-dec-new30_opA',
      indications: {
        areIndications: false,
        indicationsType: '',
        // tslint:disable-next-line:max-line-length
        value: ''
      },
      replacement: '',
      extraReplacements: [
        {
          identifier: 'iddecnew30-extra-1',
          wordToReplace: 'iddecnew30-extra-1',
          insideId: 'opA'
        },
      ],
      radios: [
        {
          label: 'al entrar a la vivienda',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'Al momento del inicio del presente Contrato de arrendamiento, es decir, al momento de la entrada o llegada a La Vivienda de la PARTE ARRENDATARIA para su uso y disfrute.',
          // tslint:disable-next-line:max-line-length
          replacement: 'Al momento del inicio del presente Contrato de arrendamiento, es decir, al momento de la entrada o llegada a La Vivienda de la PARTE ARRENDATARIA para su uso y disfrute.',
          extraReplacements: [
            {
              identifier: 'iddecnew30-extra-1',
              replacement: 'Si transcurrieses 24 horas desde la llegada de la parte arrendataria a la vivienda, y ésta no hubiese realizado el pago acordado, tendrá lugar la resolución del presente contrato, y consecuentemente la parte arrendataria deberá abandonar la vivienda dejándola a disposición de la parte arrendadora. En cualquier caso aquellas cuantías abonadas hasta el momento, no serán devueltas.',
              replacementOriginal: 'Si transcurrieses 24 horas desde la llegada de la parte arrendataria a la vivienda, y ésta no hubiese realizado el pago acordado, tendrá lugar la resolución del presente contrato, y consecuentemente la parte arrendataria deberá abandonar la vivienda dejándola a disposición de la parte arrendadora. En cualquier caso aquellas cuantías abonadas hasta el momento, no serán devueltas.',
              insideId: 'opA'
            },
          ],
          radioId: 'id-dec-new30_opA',
          identifier: 'id-dec-new30_opA',
          checked: true,
          subSteps: [
          ]
        },
        {
          label: 'cuando termine la duración del contrato',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'Una vez haya finalizado el periodo completo de arrendamiento acordado en el presente Contrato.',
          // tslint:disable-next-line:max-line-length
          replacement: 'Una vez haya finalizado el periodo completo de arrendamiento acordado en el presente Contrato.',
          extraReplacements: [
            {
              identifier: 'iddecnew30-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
          ],
          radioId: 'id-dec-new30_opB',
          identifier: 'id-dec-new30_opB',
          checked: false,
          subSteps: [
          ]
        },
        {
          label: 'al hacer la reserva, antes de entrar al piso',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'Una vez la PARTE ARRENDATARIA ha realizado la reserva de La Vivienda, y antes de su entrada/llegada a La Vivienda para su uso y disfrute.',
          // tslint:disable-next-line:max-line-length
          replacement: 'Una vez la PARTE ARRENDATARIA ha realizado la reserva de La Vivienda, y antes de su entrada/llegada a La Vivienda para su uso y disfrute.',
          extraReplacements: [
            {
              identifier: 'iddecnew30-extra-1',
              replacement: 'Si transcurrieses 24 horas desde la llegada de la parte arrendataria a la vivienda, y ésta no hubiese realizado el pago acordado, tendrá lugar la resolución del presente contrato, y consecuentemente la parte arrendataria deberá abandonar la vivienda dejándola a disposición de la parte arrendadora. En cualquier caso aquellas cuantías abonadas hasta el momento, no serán devueltas.',
              replacementOriginal: 'Si transcurrieses 24 horas desde la llegada de la parte arrendataria a la vivienda, y ésta no hubiese realizado el pago acordado, tendrá lugar la resolución del presente contrato, y consecuentemente la parte arrendataria deberá abandonar la vivienda dejándola a disposición de la parte arrendadora. En cualquier caso aquellas cuantías abonadas hasta el momento, no serán devueltas.',
              insideId: 'opA'
            },
          ],
          radioId: 'id-dec-new30_opC',
          identifier: 'id-dec-mew30_opC',
          checked: false,
          subSteps: [
          ]
        },
        {
          label: 'otro momento',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'id-dec-new30_opD_1',
          // tslint:disable-next-line:max-line-length
          replacement: 'id-dec-new30_opD_1',
          extraReplacements: [
            {
              identifier: 'iddecnew30-extra-1',
              replacement: 'Si transcurrieses 24 horas desde la llegada de la parte arrendataria a la vivienda, y ésta no hubiese realizado el pago acordado, tendrá lugar la resolución del presente contrato, y consecuentemente la parte arrendataria deberá abandonar la vivienda dejándola a disposición de la parte arrendadora. En cualquier caso aquellas cuantías abonadas hasta el momento, no serán devueltas.',
              replacementOriginal: 'Si transcurrieses 24 horas desde la llegada de la parte arrendataria a la vivienda, y ésta no hubiese realizado el pago acordado, tendrá lugar la resolución del presente contrato, y consecuentemente la parte arrendataria deberá abandonar la vivienda dejándola a disposición de la parte arrendadora. En cualquier caso aquellas cuantías abonadas hasta el momento, no serán devueltas.',
              insideId: 'opA'
            },
          ],
          radioId: 'id-dec-new30_opD',
          identifier: 'id-dec-new30_opD',
          checked: false,
          subSteps: [
            {
              question: 'Describa a continuación en qué momento el inquilino deberá hacer el pago de la renta:',
              placeholder: 'P. Ej. La PARTE ARRENDATARIA efectuará el pago de la renta por semanas. El primer día de cada semana de arrendamiento.',
              wordToReplace: 'id-dec-new30_opD_1',
              identifier: 'id-dec-new30_opD_1',
              type: 'iText',
              subType: 'textarea',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                // tslint:disable-next-line:max-line-length
                value: 'Al seleccionar la opción Otro, debe especificar ahora en qué momento deberá el inquilino abonar o pagar la renta por el periodo de alquiler que va a disfrutar la vivienda.'
              },
              rules: [
              ],
            },
          ]
        },
      ],
    },
    {
      type: 'iRadioB',
      question: '¿Queda prohibido meter o tener mascotas en la vivienda?',
      identifier: 'id-dec-40',
      wordToReplace: 'id-dec-40',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: '',
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          replacementOriginal: 'Queda expresamente prohibido el acceso y estancia de animales domésticos o no domésticos en la vivienda objeto de arrendamiento. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.',
          replacement: 'Queda expresamente prohibido el acceso y estancia de animales domésticos o no domésticos en la vivienda objeto de arrendamiento. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.',
          radioId: 'id-dec-40_opA',
          identifier: 'id-dec-40_opA',
          extraReplacements: [
          ],
          checked: true,
        },
        {
          label: 'No',
          replacementOriginal: '',
          replacement: '',
          radioId: 'id-dec-40_opB',
          identifier: 'id-dec-40_opB',
          extraReplacements: [
          ],
          checked: false,
        },
      ]
    },
    {
      type: 'iRadioB',
      question: '¿Queda prohibido fumar en la vivienda?',
      identifier: 'id-dec-new40',
      wordToReplace: 'id-dec-new40',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: '',
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          replacementOriginal: 'Queda prohibido fumar en la vivienda.',
          replacement: 'Queda prohibido fumar en la vivienda.',
          radioId: 'id-dec-new40_opA',
          identifier: 'id-dec-new40_opA',
          extraReplacements: [
          ],
          checked: true,
        },
        {
          label: 'No',
          replacementOriginal: '',
          replacement: '',
          radioId: 'id-dec-new40_opB',
          identifier: 'id-dec-new40_opB',
          extraReplacements: [
          ],
          checked: false,
        },
      ]
    },
    {
        type: 'end',
        identifier: 'end',
        wordToReplace: 'end',
        title: 'Contrato de alquiler',
        description: `El contrato de alquiler es el documento que regula la cesión y el uso de
        inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).`,
        checkoutProcess: {
          isInited: false,
          phase: 0
        }
    }
];

module.exports = steps;