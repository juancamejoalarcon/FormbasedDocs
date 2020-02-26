const steps = [
    {
      type: 'start',
      title: 'Contrato de arrendamiento de vivienda',
      description: `El contrato de arrendamiento de vivienda es aquel por el cual una persona, 
      denominada arrendatario, se compromete a pagar un precio a otra, denominada arrendador, 
      y ésta, a cambio, a proporcionar a la primera el uso de una edificación habitable cuyo destino primordial 
      sea satisfacer las necesidades de vivienda del arrendatario.`,
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
      type: 'iText',
      identifier: 'id-unid-9',
      wordToReplace: 'id-unid-9',
      replacement: '',
      question: 'Lugar y, en su caso, número del Registro de la propiedad en el que está inscrita la vivienda:',
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Localidad y número del Registro de la propiedad en el que está inscrita la vivienda.'
      },
      placeholder: 'P. ej. Madrid Nº 34',
      mandatory: false,
      isFocused: false,
    },
    {
      type: 'iText',
      identifier: 'id-dec-10',
      wordToReplace: 'id-dec-10',
      replacement: '',
      question: 'Datos registrales de la vivienda:',
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Los datos registrales es el número de finca que se asigna en el registro de la propiedad correspondiente en el momento de ser inscrita por primera vez y los datos de la cita registral que le corresponden, es decir, el número de tomo, libro y folio en los que consta la inscripción.'
      },
      placeholder: 'P. ej. Tomo 1 Libro 377 Folio 204 Finca 2',
      mandatory: false,
      isFocused: false
    },
    {
      type: 'iText',
      identifier: 'id-dec-11',
      wordToReplace: 'id-dec-11',
      replacement: '',
      question: 'Referencia catastral de la vivienda:',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'La referencia catastral es el identificador oficial y obligatorio de los bienes inmuebles. Consiste en un código alfanumérico que es asignado por el Catastro de manera que todo inmueble debe tener una única referencia catastral que permita situarlo inequívocamente en la cartografía catastral. Si no desea indicar la referencia catastral, deje este espacio en blanco.'
      },
      placeholder: 'P. ej: 9872023 VH5797S 0001 WX',
      mandatory: false,
      isFocused: false,
      isEmpty: {
        prepend: 'Su referencia catastral es: ',
        append: '.',
      }
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
      type: 'iRadioC',
      question: '¿la vivienda forma parte de una Comunidad de Propietarios?',
      identifier: 'id-dec-12',
      wordToReplace: 'id-dec-12',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: 'Por ejemplo, cuando vivimos en un bloque de pisos formamos parte de una Comunidad de Propietarios. Con ella nos referimos al conjunto de propietarios que si bien tienen la propiedad exclusiva de una vivienda o local, también son copropietarios  en otra serie de elementos que son comunes a todos los integrantes,  (jardines, terrazas, escaleras, pasillos, etc). En ese caso, el arrendatario o inquilino deberá respetar las normas que la Comunidad imponga y, en su caso, pagar parte de las cuotas de la misma.'
      },
      defaultRadioId: 'id-dec-12_opA',
      replacement: '',
      extraReplacements: [
        {
          identifier: 'iddec12-extra-1',
          wordToReplace: 'iddec12-extra-1',
          insideId: 'opA'
        },
        {
          identifier: 'iddec12-extra-2',
          wordToReplace: 'iddec12-extra-2',
          insideId: 'opB'
        },
        {
          identifier: 'iddec12-extra-3',
          wordToReplace: 'iddec12-extra-3',
          insideId: 'opC'
        },
        {
          identifier: 'iddec12-extra-4',
          wordToReplace: 'iddec12-extra-4',
          insideId: 'opD'
        }
      ],
      radios: [
        {
          label: 'Sí',
          replacementOriginal: '<br><br>Todos los gastos de Comunidad correrán a cargo de id-dec-12_opA_1<br> <br> Los gastos extraordinarios de Comunidad que correspondan a la vivienda serán por cuenta y a cargo id-dec-12_opA_2',
          replacement: '<br><br>Todos los gastos de Comunidad correrán a cargo de id-dec-12_opA_1<br> <br> Los gastos extraordinarios de Comunidad que correspondan a la vivienda serán por cuenta y a cargo id-dec-12_opA_2',
          extraReplacements: [
            {
              identifier: 'iddec12-extra-1',
              replacement: 'las normas de la Comunidad o ',
              replacementOriginal: 'las normas de la Comunidad o ',
              insideId: 'opA'
            },
            {
              identifier: 'iddec12-extra-2',
              replacement: '<br><br>Igualmente está obligada a requerir a la Comunidad de Propietarios, a instancias de la Parte Arrendataria, para la realización de las obras de reparación o adecuación que puedan necesitar los elementos comunes. ',
              replacementOriginal: '<br><br>Igualmente está obligada a requerir a la Comunidad de Propietarios, a instancias de la Parte Arrendataria, para la realización de las obras de reparación o adecuación que puedan necesitar los elementos comunes. ',
              insideId: 'opB'
            },
            {
              identifier: 'iddec12-extra-3',
              replacement: 'LA COMUNIDAD Y NORMAS DE',
              replacementOriginal: 'LA COMUNIDAD Y NORMAS DE',
              insideId: 'opC'
            },
            {
              identifier: 'iddec12-extra-4',
              replacement: 'Estando ubicada la vivienda en un inmueble organizado en una Comunidad de Propietarios, la Parte Arrendataria se obliga durante toda la vigencia del Contrato a: no contravenir los buenos usos de vecindad, cumplir las normas contenidas en los estatutos de la Comunidad y de la policía urbana, así como evitar molestar a vecinos con ruidos, fiestas, música, etc., que contravengan las Ordenanzas Municipales. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.',
              replacementOriginal: 'Estando ubicada la vivienda en un inmueble organizado en una Comunidad de Propietarios, la Parte Arrendataria se obliga durante toda la vigencia del Contrato a: no contravenir los buenos usos de vecindad, cumplir las normas contenidas en los estatutos de la Comunidad y de la policía urbana, así como evitar molestar a vecinos con ruidos, fiestas, música, etc., que contravengan las Ordenanzas Municipales. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.',
              insideId: 'opD'
            }
          ],
          radioId: 'id-dec-12_opA',
          identifier: 'id-dec-12_opA',
          checked: false,
          indications: {
            areIndications: true,
            indicationsType: 'outsideText',
            // tslint:disable-next-line:max-line-length
            value: 'Los gastos generales u ordinarios Son aquellos necesarios y previsibles para el buen sostenimiento del inmueble. Derivan de la conservación, el mantenimiento y las reparaciones ordinarias.Estos gastos se contemplan en los Presupuestos Anuales y se aprueban en la Junta Ordinaria. Para costearlos se utilizan las cuotas mensuales de los propietarios. Entre estos encontramos:<br>1. Los gastos de mantenimiento, conservación y reparación de los servicios más habituales en las comunidades: Limpieza de la comunidad, consumo de agua, gastos bancarios, mantenimiento de ascensor, antena y DDD, calefacción central, luz del portal, garaje y escaleras, portería y conserje, piscina, jardinería, etc. <br>2. Gastos de mantenimiento, conservación y reparación de elementos comunes como tejados, canales de agua, tuberías, caldera. <br>3. Obras para la conservación y accesibilidad necesarias para el mantenimiento del edificio y de sus servicios. <br>4. Fondo de reserva que se fija para la aprobación del Presupuesto de la Comunidad y que debe superar el 5% del último presupuesto ordinario. Este fondo se utiliza para cubrir obras de conservación y reparación de la finca o realizar una derrama extraordinaria por accidentes. <br>5. Gastos municipales como la tasa de recogida de basura o el vado o paso de carruajes.'
          },
          subSteps: [
            {
              type: 'iRadioC',
              question: '¿Quién asumirá los gastos generales u ordinarios (cuotas) de la comunidad de la que forma parte la vivienda?',
              identifier: 'id-dec-12_opA_1',
              wordToReplace: 'id-dec-12_opA_1',
              defaultRadioId: 'id-dec-12_opA_1_opA',
              replacement: '',
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'el arrendador (propietario)',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'la Parte Arrendadora.',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'la Parte Arrendadora.',
                  extraReplacements: [],
                  radioId: 'id-dec-12_opA_1_opA',
                  identifier: 'id-dec-12_opA_1_opA',
                  checked: true,
                  subSteps: []
                },
                {
                  label: 'los dos, el arrendatario y  el arrendador, conjuntamente',
                  replacementOriginal: 'ambas Partes. En concreto, a la Parte Arrendataria le corresponderá abonar un id-dec-12_opA_1_opB_1 % de los mismos id-dec-12_opA_1_opB_2',
                  replacement: '',
                  extraReplacements: [],
                  radioId: 'id-dec-12_opA_1_opB',
                  identifier: 'id-dec-12_opA_1_opB',
                  checked: false,
                  subSteps: [
                    {
                      question: 'Que porcentaje de estos gastos generales u ordinarios (cuotas) deberá pagar el arrendatario (inquilino)',
                      placeholder: 'Ej. Escriba un número menor que 100',
                      wordToReplace: 'id-dec-12_opA_1_opB_1',
                      identifier: 'id-dec-12_opA_1_opB_1',
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
                      ],
                    },
                    {
                      type: 'iRadioC',
                      question: 'Estos gastos generales u ordinarios (cuotas)',
                      identifier: 'id-dec-12_opA_1_opB_2',
                      wordToReplace: 'id-dec-12_opA_1_opB_2',
                      defaultRadioId: 'id-dec-12_opA_1_opB_2_opA',
                      replacement: '',
                      extraReplacements: [
                      ],
                      radios: [
                        {
                          label: 'no están incluídos en el alquiler, debe pagarlos el arrendatario a parte',
                          // tslint:disable-next-line:max-line-length
                          replacementOriginal: 'El importe de los gastos de Comunidad no está incluido en la renta. Siendo que la Parte Arrendataria tendrá que abonarlos por separado a la Parte Arrendadora, que a su vez está obligada a entregar recibo a la Parte Arrendataria en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la Parte Arrendataria.  Los gastos ordinarios de Comunidad para la vivienda actualmente ascienden a la cantidad de iddec12opA1opB2opA1-precioAletras ( id-dec-12_opA_1_opB_2_opA_1 €) mensuales.',
                          // tslint:disable-next-line:max-line-length
                          replacement: 'El importe de los gastos de Comunidad no está incluido en la renta. Siendo que la Parte Arrendataria tendrá que abonarlos por separado a la Parte Arrendadora, que a su vez está obligada a entregar recibo a la Parte Arrendataria en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la Parte Arrendataria.  Los gastos ordinarios de Comunidad para la vivienda actualmente ascienden a la cantidad de iddec12opA1opB2opA1-precioAletras ( id-dec-12_opA_1_opB_2_opA_1 €) mensuales.',
                          extraReplacements: [],
                          radioId: 'id-dec-12_opA_1_opB_2_opA',
                          identifier: 'id-dec-12_opA_1_opB_2_opA',
                          checked: true,
                          subSteps: [
                            {
                              question: 'Importe mensual (en euros) de estos gastos generales de comunidad:',
                              placeholder: 'Ej. Escriba un número',
                              wordToReplace: 'id-dec-12_opA_1_opB_2_opA_1',
                              identifier: 'id-dec-12_opA_1_opB_2_opA_1',
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
                                  identifier: 'iddec12opA1opB2opA1-precioAletras',
                                  wordToReplace: 'iddec12opA1opB2opA1-precioAletras',
                                  replacement: ''
                                }
                              ],
                            },
                          ]
                        },
                        {
                          label: 'están incluidos en el importe del alquiler',
                          replacementOriginal: 'El importe de los gastos de Comunidad está incluido dentro de la renta. Siendo que la Parte Arrendataria no tiene que abonarlos por separado a la Parte Arrendadora, y ésta no está obligada a entregar recibo a la Parte Arrendataria en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la Parte Arrendataria, si bien estos gastos están previstos dentro de la renta. ',
                          replacement: '',
                          extraReplacements: [],
                          radioId: 'id-dec-12_opA_1_opB_2_opB',
                          identifier: 'id-dec-12_opA_1_opB_2_opB',
                          checked: false,
                          subSteps: [
                          ]
                        }
                      ],
                    },
                  ]
                }
              ],
            },
            {
              type: 'iRadioC',
              question: '¿Quién asumirá los gastos extraordinarios (connocidos comúnmente como derramas) de la comunidad de la que forma parte la vivienda?',
              identifier: 'id-dec-12_opA_2',
              wordToReplace: 'id-dec-12_opA_2',
              defaultRadioId: 'id-dec-12_opA_2_opA',
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                // tslint:disable-next-line:max-line-length
                value: 'Los gastos extraordinarios no se contemplan en los Presupuestos Anuales y se utilizan para la realización de algún tipo de obra o reforma de elementos comunes.<br><br>Para recaudar los fondos se suele convocar una Junta Extraordinaria, en la que se comunicará a todos los propietarios el problema y se buscará la mejor solución para su arreglo. También se decide aquí la forma de pago, que puede ser con cargo al dinero ahorrado por la Comunidad, con la aprobación de una derrama o con una subida proporcional en la cuota de la comunidad.'
              },
              replacement: '',
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'por el arrendador (propietario)',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'de la Parte Arrendadora en su totalidad.',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'de la Parte Arrendadora en su totalidad.',
                  extraReplacements: [],
                  radioId: 'id-dec-12_opA_2_opA',
                  identifier: 'id-dec-12_opA_2_opA',
                  checked: true,
                  subSteps: []
                },
                {
                  label: 'los dos, el arrendatario (inquilino) y  el arrendador (propietario), conjuntamente',
                  replacementOriginal: 'de ambas Partes. En concreto, a la Parte Arrendataria le corresponderá abonar un iddec12opA2opB1-precioAletras por ciento (id-dec-12_opA_2_opB_1 %) de los mismos.',
                  replacement: 'de ambas Partes. En concreto, a la Parte Arrendataria le corresponderá abonar un iddec12opA2opB1-precioAletras por ciento (id-dec-12_opA_2_opB_1 %) de los mismos.',
                  extraReplacements: [],
                  radioId: 'id-dec-12_opA_2_opB',
                  identifier: 'id-dec-12_opA_2_opB',
                  checked: false,
                  subSteps: [
                    {
                      question: '¿Qué porcentaje de estos gastos extraordinarios (o también conocidos como derramas) deberá pagar el arrendatario (inquilino)?',
                      placeholder: 'Ej. Escriba un número menor que 100',
                      wordToReplace: 'id-dec-12_opA_2_opB_1',
                      identifier: 'id-dec-12_opA_2_opB_1',
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
                          rulename: 'extraReplacementAletras',
                          identifier: 'iddec12opA2opB1-precioAletras',
                          wordToReplace: 'iddec12opA2opB1-precioAletras',
                          replacement: ''
                        }
                      ],
                    }
                  ]
                }
              ],
            },
          ]
        },
        {
          label: 'No',
          replacementOriginal: '',
          replacement: '',
          extraReplacements: [
            {
              identifier: 'iddec12-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            },
            {
              identifier: 'iddec12-extra-2',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opB'
            },
            {
              identifier: 'iddec12-extra-3',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opC'
            },
            {
              identifier: 'iddec12-extra-4',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opD'
            }
          ],
          radioId: 'id-dec-12_opB',
          identifier: 'id-dec-12_opB',
          checked: true,
          subSteps: []
        },
      ],
    },
    {
      type: 'iRadioC',
      question: '¿la vivienda se alquila amueblada de manera que el arrendatario (inquilino) pueda hacer uso de la misma desde su entrada?',
      identifier: 'id-dec-15',
      wordToReplace: 'id-dec-15',
      defaultRadioId: 'id-dec-15_opA',
      indications: {
        areIndications: false,
        indicationsType: '',
        // tslint:disable-next-line:max-line-length
        value: ''
      },
      replacement: '',
      extraReplacements: [
        {
          identifier: 'iddec15-extra-1',
          wordToReplace: 'iddec15-extra-1',
          insideId: 'opA'
        },
      ],
      radios: [
        {
          label: 'Sí',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'id-dec-15_opA_1',
          // tslint:disable-next-line:max-line-length
          replacement: 'id-dec-15_opA_1',
          extraReplacements: [
            {
              identifier: 'iddec15-extra-1',
              replacement: 'y su mobiliario',
              replacementOriginal: 'y su mobiliario',
              insideId: 'opA'
            },
          ],
          radioId: 'id-dec-15_opA',
          identifier: 'id-dec-15_opA',
          checked: true,
          subSteps: [
            {
              type: 'iRadioC',
              question: 'Los muebles de la vivienda se encuentran descritos en:',
              identifier: 'id-dec-15_opA_1',
              wordToReplace: 'id-dec-15_opA_1',
              defaultRadioId: 'id-dec-15_opA_1_opA',
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
                  label: 'este contrato',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'está amueblada con el siguiente mobiliario, enseres y objetos: id-dec-15_opA_1_opA_1',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'está amueblada con el siguiente mobiliario, enseres y objetos: id-dec-15_opA_1_opA_1',
                  extraReplacements: [

                  ],
                  radioId: 'id-dec-15_opA_1_opA',
                  identifier: 'id-dec-15_opA_1_opA',
                  checked: true,
                  subSteps: [
                    {
                      type: 'iText',
                      subType: 'textarea',
                      identifier: 'id-dec-15_opA_1_opA_1',
                      wordToReplace: 'id-dec-15_opA_1_opA_1',
                      replacement: '',
                      question: 'Descripción detallada de los muebles de la vivienda:',
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        value: ''
                      },
                      placeholder: 'P. ej. Una cama doble marca IXX modelo XX, un colchón marca XXX modelo XXX, ...',
                      mandatory: false,
                      isFocused: false
                    },
                  ]
                },
                {
                  label: 'en otro documento anexo (o adjunto) a este contrato',
                  replacementOriginal: 'se cede en arrendamiento con el mobiliario que se detalla en el inventario, Anexo I, del presente contrato de arrendamiento de vivienda.',
                  replacement: 'se cede en arrendamiento con el mobiliario que se detalla en el inventario, Anexo I, del presente contrato de arrendamiento de vivienda.',
                  extraReplacements: [
                  ],
                  radioId: 'id-dec-15_opA_1_opB',
                  identifier: 'id-dec-15_opA_1_opB',
                  checked: false,
                  subSteps: [
                  ]
                }
              ],
            },
          ]
        },
        {
          label: 'No',
          replacementOriginal: 'no se encuentra amueblada.',
          replacement: 'no se encuentra amueblada.',
          extraReplacements: [
            {
              identifier: 'iddec15-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            }
          ],
          radioId: 'id-dec-15_opB',
          identifier: 'id-dec-15_opB',
          checked: false,
          subSteps: [
          ]
        }
      ],
    },
    {
      question: 'Indique la duración del contrato de alquiler',
      wordToReplace: 'id-dec-20',
      identifier: 'id-dec-20',
      placeholder: 'P. ej: 15 dias, 6 meses, 1 año,..',
      type: 'iText',
      replacement: '',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'Arrendador y arrendatario pueden pactar libremente los años que estará en vigor, sin embargo, en caso de que la duración sea inferior a los cinco años, o siete si el propietario es persona jurídica, el contrato se extenderá hasta estos cinco o siete si el arrendatario así lo desea, es decir, se prorrogará obligatoriamente por plazos anuales hasta alcanzar la duración mínima exigida',
      }
    },
    {
      question: 'Fecha de comienzo del alquiler y en el que el arrrendatario (inquilino) podrá hacer uso de la misma (no tiene que ser la misma en la que se firma el contrato, se puede firmar el contrato y entrar a la vivienda más adelante):',
      wordToReplace: 'id-dec-21',
      identifier: 'id-dec-21',
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
      type: 'iRadioB',
      question: 'Una vez hayan pasados 6 meses desde el incio del alquiler, ¿desea establecer una cláusula por la cual el inquilino deba indemnizar al propietario si abandonase el piso de forma anticipada?',
      identifier: 'id-dec-22',
      wordToReplace: 'id-dec-22',
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
          replacementOriginal: 'En virtud del artículo 11 de la Ley de Arrendamientos Urbanos (LAU), la Parte Arrendataria podrá desistir del contrato, una vez que hayan transcurrido al menos seis meses de arrendamiento. Para el supuesto de que antes de finalizar el plazo estipulado en el contrato, es decir, 1 año, el arrendatario desistiera del mismo, deberá avisar al arrendador con una antelación mínima de treinta días, y le indemnizará con una cantidad equivalente a una mensualidad de la renta en vigor.',
          replacement: 'En virtud del artículo 11 de la Ley de Arrendamientos Urbanos (LAU), la Parte Arrendataria podrá desistir del contrato, una vez que hayan transcurrido al menos seis meses de arrendamiento. Para el supuesto de que antes de finalizar el plazo estipulado en el contrato, es decir, 1 año, el arrendatario desistiera del mismo, deberá avisar al arrendador con una antelación mínima de treinta días, y le indemnizará con una cantidad equivalente a una mensualidad de la renta en vigor.',
          radioId: 'id-dec-22_opA',
          identifier: 'id-dec-22_opA',
          extraReplacements: [

          ],
          checked: true,
        },
        {
          label: 'No',
          replacementOriginal: 'En virtud del artículo 11 de la Ley de Arrendamientos Urbanos (LAU), la Parte Arrendataria podrá desistir del contrato, una vez que hayan transcurrido al menos seis meses de arrendamiento. Para el supuesto de que antes de finalizar el plazo estipulado en el contrato, es decir, 1 año, el arrendatario desistiera del mismo, deberá avisar al arrendador con una antelación mínima de treinta días, y no tendrá que indemnizar a la Parte Arrendadora con ninguna cantidad.',
          replacement: 'En virtud del artículo 11 de la Ley de Arrendamientos Urbanos (LAU), la Parte Arrendataria podrá desistir del contrato, una vez que hayan transcurrido al menos seis meses de arrendamiento. Para el supuesto de que antes de finalizar el plazo estipulado en el contrato, es decir, 1 año, el arrendatario desistiera del mismo, deberá avisar al arrendador con una antelación mínima de treinta días, y no tendrá que indemnizar a la Parte Arrendadora con ninguna cantidad.',
          radioId: 'id-dec-22_opB',
          identifier: 'id-dec-22_opB',
          extraReplacements: [
          ],
          checked: false,
        }
      ]
    },
    {
      type: 'iRadioC',
      question: 'El precio del alquiler se establece:',
      identifier: 'id-dec-27',
      wordToReplace: 'id-dec-27',
      defaultRadioId: 'id-dec-27_opA',
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
          label: 'de forma periódica (día, mes, ...)',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'Las Partes han acordado que la renta será de iddec27opA2-precioAletras (id-dec-27_opA_2 €) por cada período siguiente: id-dec-27_opA_1. La obligación de la Parte Arrendataria de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br><br> id-dec-28 <br><br> id-dec-27_opA_3 <br><br> Las partes acuerdan que el pago de la renta será id-dec-29 <br><br> El impago de la renta por la Parte Arrendataria será causa de resolución del contrato. En ese caso, la Parte Arrendataria deberá restituir en perfecto estado la vivienda arrendada a la Parte Arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
          // tslint:disable-next-line:max-line-length
          replacement: 'Las Partes han acordado que la renta será de iddec27opA2-precioAletras (id-dec-27_opA_2 €) por cada período siguiente: id-dec-27_opA_1. La obligación de la Parte Arrendataria de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br> id-dec-28 <br> id-dec-27_opA_3 <br> Las partes acuerdan que el pago de la renta será id-dec-29 <br><br> El impago de la renta por la Parte Arrendataria será causa de resolución del contrato. En ese caso, la Parte Arrendataria deberá restituir en perfecto estado la vivienda arrendada a la Parte Arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
          extraReplacements: [
          ],
          radioId: 'id-dec-27_opA',
          identifier: 'id-dec-27_opA',
          checked: true,
          subSteps: [
            {
              type: 'iText',
              identifier: 'id-dec-27_opA_1',
              wordToReplace: 'id-dec-27_opA_1',
              replacement: '',
              question: '¿Con que periodicidad se establece el contrato?',
              indications: {
                areIndications: false,
                indicationsType: '',
                value: ''
              },
              placeholder: 'P. ej. por día, por mes, por año, por semestre, por hora',
              mandatory: false,
              isFocused: false
            },
            {
              type: 'iNumber',
              identifier: 'id-dec-27_opA_2',
              wordToReplace: 'id-dec-27_opA_2',
              replacement: '',
              question: 'Importe que se paga por la periodicidad escogida (por día, por mes,...)',
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
                  identifier: 'iddec27opA2-precioAletras',
                  wordToReplace: 'iddec27opA2-precioAletras',
                  replacement: ''
                }
              ],
            },
            {
              type: 'iRadioC',
              question: 'El pago del alquiler se realizará:',
              identifier: 'id-dec-27_opA_3',
              wordToReplace: 'id-dec-27_opA_3',
              defaultRadioId: 'id-dec-27_opA_3_opA',
              replacement: '',
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'cada mes, dentro de los primeros 5 días del mes',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'El pago de la Renta fijada se abonará por meses anticipados entre los cinco (5) primeros días de cada mes.',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'El pago de la Renta fijada se abonará por meses anticipados entre los cinco (5) primeros días de cada mes.',
                  extraReplacements: [],
                  radioId: 'id-dec-27_opA_3_opA',
                  identifier: 'id-dec-27_opA_3_opA',
                  checked: true,
                  subSteps: []
                },
                {
                  label: 'de otra manera',
                  replacementOriginal: 'El pago de la renta se realizará de la siguiente manera: id-dec-27_opA_3_opB_1.',
                  replacement: '',
                  extraReplacements: [],
                  radioId: 'id-dec-27_opA_3_opB',
                  identifier: 'id-dec-27_opA_3_opB',
                  checked: false,
                  subSteps: [
                    {
                      question: 'Manera en la que se efectua el pago:',
                      placeholder: 'Ej. durante los primeros 15 días del mes, cada 6 meses...',
                      wordToReplace: 'id-dec-27_opA_3_opB_1',
                      identifier: 'id-dec-27_opA_3_opB_1',
                      type: 'iText',
                      replacement: '',
                      extraReplacements: [],
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        // tslint:disable-next-line:max-line-length
                        value: ''
                      },
                      rules: [
                      ],
                    }
                  ]
                }
              ],
            },
          ]
        },
        {
          label: 'por un importe total fijo, para toda la duración del alquiler',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'La renta total pactada por las Partes es de iddec27opB1-precioAletras (id-dec-27_opB_1 €). La obligación de la Parte Arrendataria de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br><br> id-dec-28 <br><br> id-dec-27_opB_2',
          // tslint:disable-next-line:max-line-length
          replacement: 'La renta total pactada por las Partes es de iddec27opB1-precioAletras (id-dec-27_opB_1 €). La obligación de la Parte Arrendataria de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br> id-dec-28 <br> id-dec-27_opB_2',
          extraReplacements: [
          ],
          radioId: 'id-dec-27_opB',
          identifier: 'id-dec-27_opB',
          checked: false,
          subSteps: [
            {
              type: 'iNumber',
              identifier: 'id-dec-27_opB_1',
              wordToReplace: 'id-dec-27_opB_1',
              replacement: '',
              question: 'Importe total del alquiler:',
              indications: {
                areIndications: false,
                indicationsType: '',
                value: ''
              },
              placeholder: 'Escriba un número',
              mandatory: false,
              isFocused: false,
              extraReplacements: [],
              rules: [
                {
                  condition: false,
                  rulename: 'extraReplacementToCharacter',
                  identifier: 'iddec27opB1-precioAletras',
                  wordToReplace: 'iddec27opB1-precioAletras',
                  replacement: ''
                }
              ]
            },
            {
              type: 'iRadioC',
              question: '¿En qué momento se va a realizar el pago del alquiler?',
              identifier: 'id-dec-27_opB_2',
              wordToReplace: 'id-dec-27_opB_2',
              defaultRadioId: 'id-dec-27_opB_2_opA',
              replacement: '',
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                value: 'Seleccione aquí la opción que corresponda al momento en el que se realiza o realizará el pago del importe del alquiler establecido en la pregunta anterior: en su totalidad al momento de firmar el contrato; en su totalidad en una fecha posterior; una parte al firmar el contrato y otra en una fecha posterior; una parte al inicio del contrato de arrendamiento y otra en una fecha posterior; o de otra manera (por ejemplo, en varios pagos periódicos).'
              },
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'al firmar el contrato',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'El pago de la renta se realiza de forma completa al momento de firmar el presente Contrato, recibiendo la Parte Arrendadora en este acto su importe a su entera satisfacción, y constituyendo el presente documento la más formal y fiel carta de pago.<br><br> El pago se realizará id-dec-29',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'El pago de la renta se realiza de forma completa al momento de firmar el presente Contrato, recibiendo la Parte Arrendadora en este acto su importe a su entera satisfacción, y constituyendo el presente documento la más formal y fiel carta de pago.<br> El pago se realizará id-dec-29',
                  extraReplacements: [],
                  radioId: 'id-dec-27_opB_2_opA',
                  identifier: 'id-dec-27_opB_2_opA',
                  checked: true,
                  subSteps: []
                },
                {
                  label: 'toda la cantidad en una fecha posterior escogida',
                  replacementOriginal: 'El pago de la renta se realizará de forma completa a más tardar el día id-dec-27_opB_2_opB_1. <br><br> El pago se realizará id-dec-29. <br><br> El impago de la renta por la Parte Arrendataria será causa de resolución del contrato. En ese caso, la Parte Arrendataria deberá restituir en perfecto estado la vivienda arrendada a la Parte Arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
                  replacement: '',
                  extraReplacements: [],
                  radioId: 'id-dec-27_opB_2_opB',
                  identifier: 'id-dec-27_opB_2_opB',
                  checked: false,
                  subSteps: [
                    {
                      question: 'Fecha en la que se realizará el pago del alquiler:',
                      placeholder: '',
                      wordToReplace: 'id-dec-27_opB_2_opB_1',
                      identifier: 'id-dec-27_opB_2_opB_1',
                      type: 'iDate',
                      replacement: '',
                      extraReplacements: [],
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        // tslint:disable-next-line:max-line-length
                        value: ''
                      },
                      rules: [
                      ],
                    }
                  ]
                },
                {
                  label: 'una parte al firmar el contrato y otra en una fecha posterior escogida',
                  replacementOriginal: 'El pago de la renta se realiza de forma parcial al momento de firmar el presente Contrato, recibiendo en este acto la Parte Arrendadora el importe de iddec27opB2opC1-precioAletras (id-dec-27_opB_2_opC_1 €), de lo cual este documento constituye la más formal y fiel carta de pago. El resto de la renta será pagado por la Parte Arrendataria a más tardar el día id-dec-27_opB_2_opC_2. <br><br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la Parte Arrendataria será causa de resolución del contrato. En ese caso, la Parte Arrendataria deberá restituir en perfecto estado la vivienda arrendada a la Parte Arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
                  replacement: 'El pago de la renta se realiza de forma parcial al momento de firmar el presente Contrato, recibiendo en este acto la Parte Arrendadora el importe de iddec27opB2opC1-precioAletras (id-dec-27_opB_2_opC_1 €), de lo cual este documento constituye la más formal y fiel carta de pago. El resto de la renta será pagado por la Parte Arrendataria a más tardar el día id-dec-27_opB_2_opC_2. <br>br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la Parte Arrendataria será causa de resolución del contrato. En ese caso, la Parte Arrendataria deberá restituir en perfecto estado la vivienda arrendada a la Parte Arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
                  extraReplacements: [],
                  radioId: 'id-dec-27_opB_2_opC',
                  identifier: 'id-dec-27_opB_2_opC',
                  checked: false,
                  subSteps: [
                    {
                      type: 'iNumber',
                      identifier: 'id-dec-27_opB_2_opC_1',
                      wordToReplace: 'id-dec-27_opB_2_opC_1',
                      replacement: '',
                      question: 'Importe (en euros) de la parte  que el arrendatario (inquilino) paga al firmar este contrato:',
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        value: ''
                      },
                      placeholder: 'Escriba un número',
                      mandatory: false,
                      isFocused: false,
                      extraReplacements: [],
                      rules: [
                        {
                          condition: false,
                          rulename: 'extraReplacementToCharacter',
                          identifier: 'iddec27opB2opC1-precioAletras',
                          wordToReplace: 'iddec27opB2opC1-precioAletras',
                          replacement: ''
                        }
                      ]
                    },
                    {
                      question: 'Fecha en la que se realizará el pago de la parte del alquiler que quede por pagar:',
                      placeholder: '',
                      wordToReplace: 'id-dec-27_opB_2_opC_2',
                      identifier: 'id-dec-27_opB_2_opC_2',
                      type: 'iDate',
                      replacement: '',
                      extraReplacements: [],
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        // tslint:disable-next-line:max-line-length
                        value: ''
                      },
                      rules: [
                      ],
                    }
                  ]
                },
                {
                  label: 'una parte al comienzo del alquiler y otra en una fecha posterior',
                  replacementOriginal: 'El pago de la renta se realizará de forma fraccionada, abonando el importe de iddec27opB2opD1-precioAletras (id-dec-27_opB_2_opD_1 €) en el momento de la puesta a disposición de la vivienda a la Parte Arrendataria para su uso y disfrute. El resto de la renta será pagado por la Parte Arrendataria a más tardar el día id-dec-27_opB_2_opD_2. <br><br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la Parte Arrendataria será causa de resolución del contrato. En ese caso, la Parte Arrendataria deberá restituir en perfecto estado la vivienda arrendada a la Parte Arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
                  replacement: 'El pago de la renta se realizará de forma fraccionada, abonando el importe de iddec27opB2opD1-precioAletras (id-dec-27_opB_2_opD_1 €) en el momento de la puesta a disposición de la vivienda a la Parte Arrendataria para su uso y disfrute. El resto de la renta será pagado por la Parte Arrendataria a más tardar el día id-dec-27_opB_2_opD_2. <br><br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la Parte Arrendataria será causa de resolución del contrato. En ese caso, la Parte Arrendataria deberá restituir en perfecto estado la vivienda arrendada a la Parte Arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
                  extraReplacements: [],
                  radioId: 'id-dec-27_opB_2_opD',
                  identifier: 'id-dec-27_opB_2_opD',
                  checked: false,
                  subSteps: [
                    {
                      type: 'iNumber',
                      identifier: 'id-dec-27_opB_2_opD_1',
                      wordToReplace: 'id-dec-27_opB_2_opD_1',
                      replacement: '',
                      question: 'Importe (en euros) de la parte del alquiler que el arrendatario (inquilino) pagará al comienzo del alquiler:',
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        value: ''
                      },
                      placeholder: 'Escriba un número',
                      mandatory: false,
                      isFocused: false,
                      extraReplacements: [],
                      rules: [
                        {
                          condition: false,
                          rulename: 'extraReplacementToCharacter',
                          identifier: 'iddec27opB2opD1-precioAletras',
                          wordToReplace: 'iddec27opB2opD1-precioAletras',
                          replacement: ''
                        }
                      ]
                    },
                    {
                      question: 'Fecha en la que se realizará el pago de la parte del alquiler que quede por pagar:',
                      placeholder: '',
                      wordToReplace: 'id-dec-27_opB_2_opD_2',
                      identifier: 'id-dec-27_opB_2_opD_2',
                      type: 'iDate',
                      replacement: '',
                      extraReplacements: [],
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        // tslint:disable-next-line:max-line-length
                        value: ''
                      },
                      rules: [
                      ],
                    }
                  ]
                },
                {
                  label: 'de otra manera',
                  replacementOriginal: 'El pago de la renta se realizará de la siguiente manera: id-dec-27_opB_2_opE_1. <br><br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la Parte Arrendataria será causa de resolución del contrato. En ese caso, la Parte Arrendataria deberá restituir en perfecto estado la vivienda arrendada a la Parte Arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
                  replacement: 'El pago de la renta se realizará de la siguiente manera: id-dec-27_opB_2_opE_1. <br> El pago se realizará id-dec-29 <br> El impago de la renta por la Parte Arrendataria será causa de resolución del contrato. En ese caso, la Parte Arrendataria deberá restituir en perfecto estado la vivienda arrendada a la Parte Arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
                  extraReplacements: [],
                  radioId: 'id-dec-27_opB_2_opE',
                  identifier: 'id-dec-27_opB_2_opE',
                  checked: false,
                  subSteps: [
                    {
                      type: 'iText',
                      identifier: 'id-dec-27_opB_2_opE_1',
                      wordToReplace: 'id-dec-27_opB_2_opE_1',
                      replacement: '',
                      question: 'Manera en que se realizará el pago del alquiler:',
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        value: ''
                      },
                      placeholder: '',
                      mandatory: false,
                      isFocused: false,
                      rules: [
                      ]
                    }
                  ]
                }
              ],
            },
          ]
        }
      ],
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
      question: ' ¿Se establece una cláusula que recoja actualización de la renta (cláusula que permite aumentar el valor del alquiler periódicamente)?',
      identifier: 'id-dec-new30',
      wordToReplace: 'id-dec-new30',
      defaultRadioId: 'id-dec-new30_opA',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: 'La ley establece la libertad de pacto entre las partes a la hora de la actualización de la renta del alquiler. Así, en la fecha que se cumpla cada año de vigencia del contrato, en los términos pactados por arrendador y arrendatario, dejando el IPC General como referencia para la revisión cuando no exista pacto expreso al respecto. En este último supuesto, el contrato se actualizará aplicando a la renta correspondiente a la anualidad anterior la variación porcentual experimentada por IPC durante los doce meses inmediatamente anteriores a la fecha de cada actualización, tomando como mes de referencia para la primera actualización y en las sucesivas el último índice publicado en la fecha de celebración del contrato.'
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí:',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: '<br><br>Las partes acuerdan que la renta será objeto de revisión, a partir del primer año de contrato, y será revisada: id-dec-new30_opA_1. id-dec-new30_opA_2. El cobro de la renta cuyo precio se haya actualizado será exigible en la cuota, o preiodicidad correspondiente tras la notificación expresa y por escrito de dicha actualización. El retraso o impago de la nueva renta no supondrá la renuncia a la misma.',
          // tslint:disable-next-line:max-line-length
          replacement: '<br><br>Las partes acuerdan que la renta será objeto de revisión, y será revisada: id-dec-new30_opA_1. id-dec-new30_opA_2. El cobro de la renta cuyo precio se haya actualizado será exigible en la cuota, o preiodicidad correspondiente tras la notificación expresa y por escrito de dicha actualización. El retraso o impago de la nueva renta no supondrá la renuncia a la misma.',
          extraReplacements: [],
          radioId: 'id-dec-new30_opA',
          identifier: 'id-dec-new30_opA',
          checked: true,
          subSteps: [
            {
              question: 'Frecuencia con la que se podrá aumentar o revisar el precio del alquiler:',
              placeholder: 'Ej. anualmente, semestralmente',
              wordToReplace: 'id-dec-new30_opA_1',
              identifier: 'id-dec-new30_opA_1',
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
              type: 'iRadioC',
              question: '¿En función de qué medidor el alquiler podrá ser aumentado?',
              identifier: 'id-dec-new30_opA_2',
              wordToReplace: 'id-dec-new30_opA_2',
              defaultRadioId: 'id-dec-new30_opA_2_opA',
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
                  label: 'en función del Índice de Garantía de Competitividad',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice General Nacional del Sistema de Precios al Consumo (IPC). Esta actualización se efectuará de forma automática, comunicando previamente por parte del arrendador a la arrendataria la cantidad diferencial. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice General Nacional del Sistema de Precios al Consumo (IPC). Esta actualización se efectuará de forma automática, comunicando previamente por parte del arrendador a la arrendataria la cantidad diferencial. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia',
                  extraReplacements: [],
                  radioId: 'id-dec-new30_opA_2_opA',
                  identifier: 'id-dec-new30_opA_2_opA',
                  checked: true,
                  subSteps: [
                  ]
                },
                {
                  label: 'en función de un índice acordado por las partes como, por ejemplo, el IPC',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'Este incremento se realizará por referencia al siguiente índice: id-dec-new30_opA_2_opB_1. Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice elegido. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'Este incremento se realizará por referencia al siguiente índice: id-dec-new30_opA_2_opB_1. Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice elegido. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia',
                  extraReplacements: [],
                  radioId: 'id-dec-new30_opA_2_opB',
                  identifier: 'id-dec-new30_opA_2_opB',
                  checked: true,
                  subSteps: [
                    {
                      question: 'Denominación del índice acordado por las partes para aumentar el valor del alquiler:',
                      placeholder: 'Ej. IPC',
                      wordToReplace: 'id-dec-new30_opA_2_opB_1',
                      identifier: 'id-dec-new30_opA_2_opB_1',
                      type: 'iText',
                      replacement: '',
                      extraReplacements: [],
                      indications: {
                        areIndications: true,
                        indicationsType: 'outsideText',
                        // tslint:disable-next-line:max-line-length
                        value: 'Si lo desea, indique aquí el nombre o denominación del índice que las partes prevén en el contrato de alquiler para actualizar la renta; es decir para revisar el valor o precio del alquiler de la vivienda objeto de este contrato con la periodicidad o frecuencia que ha sido determinada.<br> Si no desea prever un índice, en el contrato se establecerá la actualización de la renta por referencia al Índice de Garantía de Competitividad (IGC) fijado por el Instituto Nacional de Estadística.'
                      },
                      rules: [],
                    }
                  ]
                },
                {
                  label: 'aplicando un porcentaje establcido por las partes',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'Este incremento será de un iddecnew30opA2opC1-precioAletras por ciento (id-dec-new30_opA_2_opC_1 %). Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'Este incremento será de un iddecnew30opA2opC1-precioAletras por ciento (id-dec-new30_opA_2_opC_1 %). Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada',
                  extraReplacements: [],
                  radioId: 'id-dec-new30_opA_2_opC',
                  identifier: 'id-dec-new30_opA_2_opC',
                  checked: true,
                  subSteps: [
                    {
                      question: 'Porcentaje de aumento del valor del alquiler acordado por las partes',
                      placeholder: 'Escriba un número menor que 100',
                      wordToReplace: 'id-dec-new30_opA_2_opC_1',
                      identifier: 'id-dec-new30_opA_2_opC_1',
                      type: 'iNumber',
                      replacement: '',
                      extraReplacements: [],
                      rules: [
                        {
                          condition: false,
                          rulename: 'extraReplacementAletras',
                          identifier: 'iddecnew30opA2opC1-precioAletras',
                          wordToReplace: 'iddecnew30opA2opC1-precioAletras',
                          replacement: ''
                        }
                      ],
                    }
                  ]
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
          radioId: 'id-dec-new30_opB',
          identifier: 'id-dec-new30_opB',
          checked: true,
          subSteps: [
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
          replacementOriginal: '<br><br>El importe de los gastos de limpieza de vivienda y zonas comunes no está incluido dentro en la renta, siendo que la Parte Arrendataria tendrá que abonarlos. id-dec-30_opA_1 Siendo que la Parte Arrendataria tendrá que abonarlos por separado a la Parte Arrendadora, ésta, a su vez está obligada a entregar recibo a la Parte Arrendataria en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la Parte Arrendataria. id-dec-30_opA_2',
          // tslint:disable-next-line:max-line-length
          replacement: '<br><br>El importe de los gastos de limpieza de vivienda y zonas comunes no está incluido dentro en la renta, siendo que la Parte Arrendataria tendrá que abonarlos. id-dec-30_opA_1 Siendo que la Parte Arrendataria tendrá que abonarlos por separado a la Parte Arrendadora, ésta, a su vez está obligada a entregar recibo a la Parte Arrendataria en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la Parte Arrendataria. id-dec-30_opA_2',
          extraReplacements: [],
          radioId: 'id-dec-30_opA',
          identifier: 'id-dec-30_opA',
          checked: true,
          subSteps: [
            {
              type: 'iRadioC',
              question: 'Con que periodicidad se pagarán estos gastos de limpieza:',
              identifier: 'id-dec-30_opA_1',
              wordToReplace: 'id-dec-30_opA_1',
              defaultRadioId: 'id-dec-30_opA_1',
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
                  label: 'por  día, por mes, por año,...',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'Estos gastos de limpieza ascenderán a iddec30opA1opA2-precioAletras (id-dec-30_opA_1_opA_2 €) por cada período siguiente: id-dec-30_opA_1_opA_1.',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'Estos gastos de limpieza ascenderán a iddec30opA1opA2-precioAletras (id-dec-30_opA_1_opA_2 €) por cada período siguiente: id-dec-30_opA_1_opA_1.',
                  extraReplacements: [],
                  radioId: 'id-dec-30_opA_1_opA',
                  identifier: 'id-dec-30_opA_1_opA',
                  checked: true,
                  subSteps: [
                    {
                      question: 'Periodicidad con la que se establecen los gastos de limpieza:',
                      placeholder: 'Ej. por día, por mes, por año, por semestre, por hora ',
                      wordToReplace: 'id-dec-30_opA_1_opA_1',
                      identifier: 'id-dec-30_opA_1_opA_1',
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
                      question: 'Importe periódico que se pagará por los gastos de limpieza por la periodicidad descrita en la pregunta anterior (por día, por mes,...)',
                      placeholder: 'Escriba un número',
                      wordToReplace: 'id-dec-30_opA_1_opA_2',
                      identifier: 'id-dec-30_opA_1_opA_2',
                      type: 'iNumber',
                      replacement: '',
                      extraReplacements: [],
                      indications: {
                        areIndications: true,
                        indicationsType: 'insideText',
                        // tslint:disable-next-line:max-line-length
                        value: 'Este importe es aquel que se establece y expresa en el contrato por día, semana, mes, año u otra periodicidad, según lo indicado en la pregunta anterior.'
                      },
                      rules: [
                        {
                          condition: false,
                          rulename: 'extraReplacementToCharacter',
                          identifier: 'iddec30opA1opA2-precioAletras',
                          wordToReplace: 'iddec30opA1opA2-precioAletras',
                          replacement: ''
                        }
                      ],
                    }
                  ]
                },
                {
                  label: 'de una sólo vez se pagará el importe total de los gastos de limpieza para toda la duración del contrato',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'Estos gastos de limpieza ascenderán a iddec30opA1opB1-precioAletras (id-dec-30_opA_1_opB_1 €) para la duración total del contrato de arrendamiento.',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'Estos gastos de limpieza ascenderán a iddec30opA1opB1-precioAletras (id-dec-30_opA_1_opB_1 €) para la duración total del contrato de arrendamiento.',
                  extraReplacements: [],
                  radioId: 'id-dec-30_opA_1_opB',
                  identifier: 'id-dec-30_opA_1_opB',
                  checked: true,
                  subSteps: [
                    {
                      question: 'Importe en euros del pago total que se hará por los gastos de limpieza para toda la duración del alquiler:',
                      placeholder: 'Escriba un número',
                      wordToReplace: 'id-dec-30_opA_1_opB_1',
                      identifier: 'id-dec-30_opA_1_opB_1',
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
                          identifier: 'iddec30opA1opB1-precioAletras',
                          wordToReplace: 'iddec30opA1opB1-precioAletras',
                          replacement: ''
                        }
                      ],
                    }
                  ]
                }
              ],
            },
            {
              question: 'Si lo desea haga una descripción del servicio de limpieza por el cual se cobran dichos gastos:',
              subType: 'textarea',
              placeholder: 'Ej. Cada semana acudirá una persona contratada para limpiar la vivienda...',
              wordToReplace: 'id-dec-30_opA_2',
              identifier: 'id-dec-30_opA_2',
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
              isEmpty: {
                prepend: 'Las Partes acuerdan que dicho pago retribuirá el siguiente servicio de limpieza: ',
                append: '.',
              }
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
      type: 'iText',
      identifier: 'id-dec-31',
      wordToReplace: 'id-dec-31',
      replacement: '',
      question: 'Si lo desea, indique aquí los servicios que han sido contratados por el arrendador (propietario) y pueden ser utilizados por el arrendatario (inquilino)',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'Tenga en cuenta que los servicios de luz, agua y gas deben haber sido contratados en todos los casos por el arrendador, y quién realizará el pago de los mismos es establecido en la siguiente pregunta'
      },
      placeholder: 'P. ej: teléfono, internet, Netflix,...',
      mandatory: false,
      isFocused: false,
      isEmpty: {
        prepend: 'La Parte Arrendadora, también se hará responsable de contratar los siguientes servicios: ',
        append: '.',
      }
    },
    {
      type: 'iRadioC',
      question: 'El pago de los gastos que se generen por usar la vivienda, como, por ejemplo, el agua, el gas, internet,... será asumido por:',
      identifier: 'id-dec-32',
      wordToReplace: 'id-dec-32',
      defaultRadioId: 'id-dec-32_opA',
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
          label: 'el arrendatario (inquilino)',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'Igualmente, el pago de todos los servicios y suministros individualizados será por cuenta y a cargo de la Parte Arrendataria.<br><br> id-dec-32_opA_1',
          // tslint:disable-next-line:max-line-length
          replacement: 'Igualmente, el pago de todos los servicios y suministros individualizados será por cuenta y a cargo de la Parte Arrendataria.<br><br> id-dec-32_opA_1',
          extraReplacements: [],
          radioId: 'id-dec-32_opA',
          identifier: 'id-dec-32_opA',
          checked: true,
          subSteps: [
            {
              type: 'iRadioC',
              question: 'Estos gastos de uso de la vivienda:',
              identifier: 'id-dec-32_opA_1',
              wordToReplace: 'id-dec-32_opA_1',
              defaultRadioId: 'id-dec-32_opA_1',
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                // tslint:disable-next-line:max-line-length
                value: 'Seleccione la opción que corresponda al abono de los gastos de los servicios que se generen como consecuencia del uso de la vivienda por el arrendatario durante la vigencia del contrato de arrendamiento; es decir, de los suministros de electricidad, agua, gas, internet o teléfono.'
              },
              replacement: '',
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'no está incluídos en el precio del alquiler',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'La Parte Arrendataria se compromete al abono de estos gastos, conociendo y aceptando que el importe de los mismos no ha sido tomado en consideración al fijar el importe de la renta. Dichos gastos los pagará la Parte Arrendataria a la Parte Arrendadora en la misma forma prevista para la renta. La Parte Arrendadora entregará el recibo correspondiente por este concepto a la Parte Arrendataria después del pago. id-dec-32_opA_1_opA_1 id-dec-32_opA_1_opA_2',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'La Parte Arrendataria se compromete al abono de estos gastos, conociendo y aceptando que el importe de los mismos no ha sido tomado en consideración al fijar el importe de la renta. Dichos gastos los pagará la Parte Arrendataria a la Parte Arrendadora en la misma forma prevista para la renta. La Parte Arrendadora entregará el recibo correspondiente por este concepto a la Parte Arrendataria después del pago. id-dec-32_opA_1_opA_1 id-dec-32_opA_1_opA_2',
                  extraReplacements: [],
                  radioId: 'id-dec-32_opA_1_opA',
                  identifier: 'id-dec-32_opA_1_opA',
                  checked: true,
                  subSteps: [
                    {
                      question: 'Importe mínimo (en euros) que el arrendatario deberá pagar mensualmente por los gastos derivados del uso de la vivienda:',
                      placeholder: 'Escriba un número',
                      wordToReplace: 'id-dec-32_opA_1_opA_1',
                      identifier: 'id-dec-32_opA_1_opA_1',
                      type: 'iText',
                      replacement: '',
                      extraReplacements: [],
                      indications: {
                        areIndications: true,
                        indicationsType: 'insideText',
                        // tslint:disable-next-line:max-line-length
                        value: 'Esto supone que aunque el importe que le corresponda del total de los gastos de la vivienda sea inferior, el arrendatario deberá pagar este importe.'
                      },
                      rules: [],
                      isEmpty: {
                        prepend: '<br><br>La Parte Arrendataria no pagará en ningún caso menos de ',
                        append: ' euros mensuales.',
                      }
                    },
                    {
                      question: 'Importe máximo (en euros que el arrendatario deberá pagar mensualmente por los gastos derivados del uso de la vivienda:',
                      placeholder: 'Escriba un número',
                      wordToReplace: 'id-dec-32_opA_1_opA_2',
                      identifier: 'id-dec-32_opA_1_opA_2',
                      type: 'iText',
                      replacement: '',
                      extraReplacements: [],
                      indications: {
                        areIndications: true,
                        indicationsType: 'insideText',
                        // tslint:disable-next-line:max-line-length
                        value: 'Esto supone que aunque el importe que le corresponda del total de los gastos de la vivienda sea superior, el arrendatario solo deberá pagar este importe.'
                      },
                      rules: [],
                      isEmpty: {
                        prepend: '<br><br>La Parte Arrendataria no pagará en ningún caso más de ',
                        append: ' euros mensuales.',
                      }
                    }
                  ]
                },
                {
                  label: 'están incluidos precio alquiler',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'El importe de estos gastos está incluido dentro de la renta. Siendo que la Parte Arrendataria no tiene que abonarlos por separado, la Parte Arrendadora no está obligada a entregar recibo a la Parte Arrendataria en el que se especifiquen los diferentes conceptos que componen los pagos efectuados.',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'El importe de estos gastos está incluido dentro de la renta. Siendo que la Parte Arrendataria no tiene que abonarlos por separado, la Parte Arrendadora no está obligada a entregar recibo a la Parte Arrendataria en el que se especifiquen los diferentes conceptos que componen los pagos efectuados.',
                  extraReplacements: [],
                  radioId: 'id-dec-32_opA_1_opB',
                  identifier: 'id-dec-32_opA_1_opB',
                  checked: true,
                  subSteps: [
                  ]
                },
              ],
            }
          ]
        },
        {
          label: 'el arrendador (propietario)',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'Los servicios y suministros que la Parte Arrendataria desee contratar para su uso individual deberán ser autorizados por la Parte Arrendadora, y serán abonados por la Parte Arrendadora id-dec-32_opB_1',
          // tslint:disable-next-line:max-line-length
          replacement: 'Los servicios y suministros que la Parte Arrendataria desee contratar para su uso individual deberán ser autorizados por la Parte Arrendadora, y serán abonados por la Parte Arrendadora id-dec-32_opB_1',
          extraReplacements: [],
          radioId: 'id-dec-32_opB',
          identifier: 'id-dec-32_opB',
          checked: true,
          subSteps: [
            {
              question: 'Importe máximo (en euros) que el arrendador pagará mensualmente por estos gastos de uso de la vivienda:',
              placeholder: 'Escriba un número',
              wordToReplace: 'id-dec-32_opB_1',
              identifier: 'id-dec-32_opB_1',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                // tslint:disable-next-line:max-line-length
                value: 'Esto supone que aunque el importe que proporcionalmente le corresponda de los gastos de la vivienda sea superior, el arrendador solo se compromete a pagar este importe. La diferencia deberá ser pagada por el arrendatario.'
              },
              rules: [],
              isEmpty: {
                prepend: 'No obstante, las Partes acuerdan que la Parte Arrendadora solo asumirá los gastos totales de la vivienda hasta un máximo de ',
                append: ' euros mensuales',
              }
            },
          ]
        },
        {
          label: 'los dos, el arrendatario y el arrendado',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'El pago de todos los servicios y suministros individualizados será por cuenta y a cargo de ambas Partes, siendo divididos de la siguiente manera:<br><br> id-dec-32_opC_1',
          // tslint:disable-next-line:max-line-length
          replacement: 'El pago de todos los servicios y suministros individualizados será por cuenta y a cargo de ambas Partes, siendo divididos de la siguiente manera:<br><br> id-dec-32_opC_1',
          extraReplacements: [],
          radioId: 'id-dec-32_opC',
          identifier: 'id-dec-32_opC',
          checked: true,
          subSteps: [
            {
              question: 'Describa como se van a dividir estos gastos entre el arrendador (propietario) y el arrendatario (inquilino):',
              subType: 'textarea',
              placeholder: 'P. ej: El arrendador (propietario) se encargará del pago mensual de internet. El arrendatario (inquilino)...',
              wordToReplace: 'id-dec-32_opC_1',
              identifier: 'id-dec-32_opC_1',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: []
            },
          ]
        },
      ],
    },
    {
      type: 'iRadioC',
      question: 'El Impuesto sobre Bienes Inmuebles (IBI) de la vivienda lo pagará:',
      identifier: 'id-dec-33',
      wordToReplace: 'id-dec-33',
      defaultRadioId: 'id-dec-33_opA',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: 'Cuando eres el propietario de una vivienda, local o plaza de garaje, debes tener en cuenta que existen una serie de impuestos asociados que estás obligado a pagar. El Impuesto de Bienes Inmuebles (IBI) es uno de ellos. <br> El IBI es un impuesto de los llamados directos que grava la titularidad de los derechos reales sobre cualquier bien inmueble localizado en el municipio que recauda el tributo. Lo cobran los ayuntamientos y forma parte de las tasas municipales.'
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'el arrendatario (inquilino)',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'de la Parte Arrendadora en su totalidad.',
          // tslint:disable-next-line:max-line-length
          replacement: 'de la Parte Arrendadora en su totalidad.',
          extraReplacements: [],
          radioId: 'id-dec-33_opA',
          identifier: 'id-dec-33_opA',
          checked: true,
          subSteps: [
          ]
        },
        {
          label: 'el arrendatario (inquilino) y el arrendador (propietario)',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'de ambas Partes. En concreto, a la Parte Arrendataria le corresponderá abonar un iddec33opB1-precioAletras por ciento (id-dec-33_opB_1 %) del mismo. A este efecto, se hace saber a la Parte Arrendataria que el último importe anual conocido para el IBI fue de iddec33opB2-precioAletras (id-dec-33_opB_2 €).',
          // tslint:disable-next-line:max-line-length
          replacement: 'de ambas Partes. En concreto, a la Parte Arrendataria le corresponderá abonar un iddec33opB1-precioAletras por ciento (id-dec-33_opB_1 %) del mismo. A este efecto, se hace saber a la Parte Arrendataria que el último importe anual conocido para el IBI fue de iddec33opB2-precioAletras (id-dec-33_opB_2 €).',
          extraReplacements: [],
          radioId: 'id-dec-33_opB',
          identifier: 'id-dec-33_opB',
          checked: true,
          subSteps: [
            {
              question: 'Porcentaje del IBI que deberá pagar el arrendatario (inquilino):',
              placeholder: 'Escriba un número menor que 100',
              wordToReplace: 'id-dec-33_opB_1',
              identifier: 'id-dec-33_opB_1',
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
                  rulename: 'extraReplacementAletras',
                  identifier: 'iddec33opB1-precioAletras',
                  wordToReplace: 'iddec33opB1-precioAletras',
                  replacement: ''
                }
              ],
            },
            {
              question: 'Último importe anual conocido (en euros) del IBI de la vivienda:',
              placeholder: 'Escriba un número',
              wordToReplace: 'id-dec-33_opB_2',
              identifier: 'id-dec-33_opB_2',
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
                  identifier: 'iddec33opB2-precioAletras',
                  wordToReplace: 'iddec33opB2-precioAletras',
                  replacement: ''
                }
              ],
            }
          ]
        }
      ],
    },
    {
      type: 'iRadioC',
      question: 'En caso de que el arrendatario (inquilino), incumpla alguna de las obligaciones que se derivan de este contrato, como, por ejemplo, no pagar el alquiler, ¿se establece alguna fianza o depósito de garantía? (esta será devuelta al finalizar el contrato si no se ha hecho ningún incumplimiento de obligaciones)',
      identifier: 'id-dec-34',
      wordToReplace: 'id-dec-34',
      defaultRadioId: 'id-dec-34_opA',
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
          label: 'Sí',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'Las partes acuerdan un importe de iddec34opA1-precioAletras (id-dec-34_opA_1 €) en concepto de fianza, que la Parte Arrendataria entrega en este acto a la Parte Arrendadora. Sirva el presente documento la más formal y fiel carta de pago que en derecho corresponda. <br><br> Una vez la Parte Arrendadora haya comprobado que la  vivienda se encuentra en perfecto estado y conservación, el importe correspondiente a la fianza será devuelto a la Parte Arrendataria. En el caso de que existieran deudas o cantidades pendientes de abono, o bien, se hubiere ocasionado desperfectos en la vivienda, así como en el mobiliario o los enseres de la misma, debido a su mal uso, será descontado de la fianza el importe correspondiente necesario para reparar los desperfectos ocasionados.',
          // tslint:disable-next-line:max-line-length
          replacement: 'Las partes acuerdan un importe de iddec34opA1-precioAletras (id-dec-34_opA_1 €) en concepto de fianza, que la Parte Arrendataria entrega en este acto a la Parte Arrendadora. Sirva el presente documento la más formal y fiel carta de pago que en derecho corresponda. <br><br> Una vez la Parte Arrendadora haya comprobado que la  vivienda se encuentra en perfecto estado y conservación, el importe correspondiente a la fianza será devuelto a la Parte Arrendataria. En el caso de que existieran deudas o cantidades pendientes de abono, o bien, se hubiere ocasionado desperfectos en la vivienda, así como en el mobiliario o los enseres de la misma, debido a su mal uso, será descontado de la fianza el importe correspondiente necesario para reparar los desperfectos ocasionados.',
          extraReplacements: [],
          radioId: 'id-dec-34_opA',
          identifier: 'id-dec-34_opA',
          checked: true,
          subSteps: [
            {
              question: 'Indique la cantidad en euros de dicho depósito o garantía:',
              placeholder: 'Escriba un número',
              wordToReplace: 'id-dec-34_opA_1',
              identifier: 'id-dec-34_opA_1',
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
                  identifier: 'iddec34opA1-precioAletras',
                  wordToReplace: 'iddec34opA1-precioAletras',
                  replacement: ''
                }
              ],
            },
          ]
        },
        {
          label: 'No',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'No se establece ninguna mención expresa a la fianza.',
          // tslint:disable-next-line:max-line-length
          replacement: 'No se establece ninguna mención expresa a la fianza.',
          extraReplacements: [],
          radioId: 'id-dec-34_opB',
          identifier: 'id-dec-34_opB',
          checked: true,
          subSteps: [
          ]
        }
      ],
    },
    {
      type: 'iRadioC',
      question: 'En caso de que el arrendatario (inquilino), incumpla alguna de las obligaciones que se derivan de este contrato, como por ejemplo, no pagar el alquiler, se incluye  a uno o varios avales o fiadores solidarios:',
      identifier: 'id-dec-35',
      wordToReplace: 'id-dec-35',
      defaultRadioId: 'id-dec-35_opB',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: 'En los contratos de alquiler de vivienda o de uso distinto de vivienda, además del arrendatario, que, como tal, tiene la obligación de pagar la renta y los demás conceptos pactados en el contrato de arrendamiento, puede haber uno o varios avaladores o fiadores que asumen todas o alguna de las obligaciones del inquilino: pago de suministros, de tributos, sólo la renta, daños y desperfectos. La constitución de aval o fianza puede realizarse cuando se formaliza el contrato de alquiler o posteriormente.'
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'Sin perjuicio de lo convenido en las estipulaciones precedentes, garantiza el total y exacto cumplimiento de todas y cada una de las obligaciones contraídas por el arrendatario:id-dec-35_opA_1 en calidad de fiadora de la Parte Arrendataria, convirtiéndose en suyas las obligaciones de ésta a los efectos previstos en el Código Civil. Asimismo, el FIADOR renuncia a los beneficios de orden y excusión y a lo dispuesto en el artículo 1851 del Código Civil.',
          // tslint:disable-next-line:max-line-length
          replacement: '',
          extraReplacements: [],
          radioId: 'id-dec-35_opA',
          identifier: 'id-dec-35_opA',
          checked: true,
          subSteps: [
            {
              type: 'iForEach',
              value: 1,
              min: 1,
              max: 10,
              replacement: '',
              identifier: 'id-dec-35_opA_1',
              wordToReplace: 'id-dec-35_opA_1',
              question: 'Número de fiadores solidarios',
              indications: {
                areIndications: false,
                indicationsType: '',
                value: '',
              },
              content: [
                {
                  identifier: 'id-dec-35_opA_1',
                  wordToReplace: 'id-dec-35_opA_1',
                  replacementOriginal: ' id-dec-35_opA_1_1, con id-dec-35_opA_1_2 núm. id-dec-35_opA_1_3 y domicilio en id-dec-35_opA_1_4;',
                  replacement: ' id-dec-35_opA_1_1, con id-dec-35_opA_1_2 núm. id-dec-35_opA_1_3 y domicilio en id-dec-35_opA_1_4;',
                  extraReplacements: [],
                  modifiedReplacements: [],
                  modifiedExtraReplacements: [],
                  subSteps: [
                    {
                      question: 'Nombre completo o denominación social del fiador solidario:',
                      wordToReplace: 'id-dec-35_opA_1_1',
                      identifier: 'id-dec-35_opA_1_1',
                      type: 'iText',
                      placeholder: 'P. ej. Antonio, Pérez Alarcón, Banco Santander, S.A',
                      replacement: '',
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        // tslint:disable-next-line:max-line-length
                        value: '',
                      },
                    },
                    {
                      type: 'iRadioB',
                      // tslint:disable-next-line:max-line-length
                      question: 'Tipo de documento de identificación del fiador solidario:',
                      identifier: 'id-dec-35_opA_1_2',
                      wordToReplace: 'id-dec-35_opA_1_2',
                      indications: {
                        areIndications: true,
                        indicationsType: 'outsideText',
                        // tslint:disable-next-line:max-line-length
                        value: 'Escoja el tipo de documento que identificará personalmente al fiador solidario. Si se trata de una persona física, si esta persona cuenta con DNI/NIF escoja siempre esta opción, y reserve las opciones de NIE o Pasaporte solo para cuando aquel no exista o no se esté en posesión del mismo. Si se trata de una persona jurídica, seleccione la opción NIF/CIF.',
                      },
                      replacement: '',
                      extraReplacements: [],
                      radios: [
                        {
                          label: 'DNI',
                          replacementOriginal: 'DNI',
                          replacement: '',
                          radioId: 'id-dec-35_opA_1_2_opA',
                          identifier: 'id-dec-35_opA_1_2_opA',
                          extraReplacements: [],
                          checked: true,
                        },
                        {
                          label: 'NIE',
                          replacementOriginal: 'NIE',
                          replacement: '',
                          radioId: 'id-dec-35_opA_1_2_opB',
                          identifier: 'id-dec-35_opA_1_2_opB',
                          extraReplacements: [],
                          checked: false,
                        },
                        {
                          label: 'Pasaporte',
                          replacementOriginal: 'Pasaporte',
                          replacement: '',
                          radioId: 'id-dec-35_opA_1_2_opC',
                          identifier: 'id-dec-35_opA_1_2_opC',
                          extraReplacements: [],
                          checked: false,
                        },
                        {
                          label: 'NIF',
                          replacementOriginal: 'NIF',
                          replacement: '',
                          radioId: 'id-dec-35_opA_1_2_opD',
                          identifier: 'id-dec-35_opA_1_2_opD',
                          extraReplacements: [],
                          checked: false,
                        }
                      ]
                    },
                    {
                      question: 'Número del documento seleccionado en la pregunta anterior:',
                      wordToReplace: 'id-dec-35_opA_1_3',
                      identifier: 'id-dec-35_opA_1_3',
                      placeholder: 'P. ej: 83558071Z',
                      type: 'iText',
                      replacement: '',
                      indications: {
                        areIndications: true,
                        indicationsType: 'insideText',
                        value: 'Introduzca aquí el número correspondiente al documento de identificación personal escogido en la pregunta anterior para el primer o único fiador solidario.',
                      },
                    },
                    {
                      question: 'Dirección del lugar donde reside el fiador solidario:',
                      wordToReplace: 'id-dec-35_opA_1_4',
                      identifier: 'id-dec-35_opA_1_4',
                      type: 'iText',
                      placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                      replacement: '',
                      indications: {
                        areIndications: true,
                        indicationsType: 'insideText',
                        // tslint:disable-next-line:max-line-length
                        value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
                      },
                    },
                  ]
                }
              ]
            }
          ]
        },
        {
          label: 'No',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: '',
          // tslint:disable-next-line:max-line-length
          replacement: '',
          extraReplacements: [],
          radioId: 'id-dec-35_opB',
          identifier: 'id-dec-35_opB',
          checked: true,
          subSteps: [
          ]
        }
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
      type: 'iRadioC',
      question: 'la vivienda',
      identifier: 'id-dec-42',
      wordToReplace: 'id-dec-42',
      defaultRadioId: 'id-dec-42_opA',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: 'Seleccione aquí la opción que corresponda al nivel de aseguramiento o al seguro que tendrá el alquiler de la vivienda en la que esta se encuentra durante el período de duración del alquiler. <br><br>Si ya cuenta con un seguro (por ejemplo, un seguro de alquiler para propietarios) y el arrendador y el arrendatario no desean pactar la contratación de otro seguro (p. ej. una póliza de seguro de responsabilidad civil para el arrendatario), seleccione la primera opción. <br><br>Si ya cuenta con un seguro (por ejemplo, un seguro de alquiler para propietarios), pero el arrendador y el arrendatario desean pactar la contratación de otro seguro (p. ej. una póliza de seguro de responsabilidad civil para el arrendatario), seleccione la segunda opción. <br><br>Si no cuenta aún con un seguro, pero el arrendador y el arrendatario desean pactar la contratación de uno (p. ej. una póliza de seguro de responsabilidad civil para el arrendatario), seleccione la tercera opción. <br><br>Por último, si no cuenta aún con un seguro y el arrendador y el arrendatario no desean pactar su contratación, seleccione la cuarta opción.<br><br>'
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'cuenta con un seguro y no se desea pactar la contratación de otro',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'La Parte Arrendadora tiene contratado un seguro de: id-dec-42_opA_1, en la compañía aseguradora: id-dec-42_opA_2id-dec-42_opA_3.',
          // tslint:disable-next-line:max-line-length
          replacement: 'La Parte Arrendadora tiene contratado un seguro de: id-dec-42_opA_1, en la compañía aseguradora: id-dec-42_opA_2id-dec-42_opA_3.',
          extraReplacements: [],
          radioId: 'id-dec-42_opA',
          identifier: 'id-dec-42_opA',
          checked: true,
          subSteps: [
            {
              question: 'Tipo de seguro que tiene el alquiler de la vivienda ',
              placeholder: 'P. ej: Seguro alquiler propietario',
              wordToReplace: 'id-dec-42_opA_1',
              identifier: 'id-dec-42_opA_1',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [
              ],
            },
            {
              question: 'Nombre de la compañía aseguradora en la que está contratado dicho seguro:',
              placeholder: 'P. ej: Axa',
              wordToReplace: 'id-dec-42_opA_2',
              identifier: 'id-dec-42_opA_2',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [
              ],
            },
            {
              question: 'Número de póliza',
              placeholder: '',
              wordToReplace: 'id-dec-42_opA_3',
              identifier: 'id-dec-42_opA_3',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [
              ],
              isEmpty: {
                prepend: ', y cuyo número de póliza es el siguiente: ',
                append: '',
              }
            },
          ]
        },
        {
          label: 'cuenta con un seguro, pero se desea pactar la contratación de otro',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'La Parte Arrendadora tiene contratado un seguro de: id-dec-42_opB_1, en la compañía aseguradora: id-dec-42_opB_2id-dec-42_opB_3. <br><br>No obstante, la PARTE id-dec-42_opB_4 se compromete a contratar un seguro de la siguiente clase: id-dec-42_opB_5. Este seguro tendrá como beneficiaria a la Parte Arrendadora, y tener una cobertura mínima igual a iddec42opB6-precioAletras (id-dec-42_opB_6 €). Este seguro se mantendrá durante toda la vigencia del presente Contrato .',
          // tslint:disable-next-line:max-line-length
          replacement: 'La Parte Arrendadora tiene contratado un seguro de: id-dec-42_opB_1, en la compañía aseguradora: id-dec-42_opB_2id-dec-42_opB_3. <br><br>No obstante, la PARTE id-dec-42_opB_4 se compromete a contratar un seguro de la siguiente clase: id-dec-42_opB_5. Este seguro tendrá como beneficiaria a la Parte Arrendadora, y tener una cobertura mínima igual a iddec42opB6-precioAletras (id-dec-42_opB_6 €). Este seguro se mantendrá durante toda la vigencia del presente Contrato .',
          extraReplacements: [],
          radioId: 'id-dec-42_opB',
          identifier: 'id-dec-42_opB',
          checked: true,
          subSteps: [
            {
              question: 'Tipo de seguro que tiene el alquiler de la vivienda ',
              placeholder: 'P. ej: Seguro alquiler propietario',
              wordToReplace: 'id-dec-42_opB_1',
              identifier: 'id-dec-42_opB_1',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [
              ],
            },
            {
              question: 'Nombre de la compañía aseguradora en la que está contratado dicho seguro:',
              placeholder: 'P. ej: Axa',
              wordToReplace: 'id-dec-42_opB_2',
              identifier: 'id-dec-42_opB_2',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [
              ],
            },
            {
              question: 'Número de póliza',
              placeholder: '',
              wordToReplace: 'id-dec-42_opB_3',
              identifier: 'id-dec-42_opB_3',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [
              ],
              isEmpty: {
                prepend: ', y cuyo número de póliza es el siguiente: ',
                append: '',
              }
            },
            {
              type: 'iRadioB',
              question: '¿Quién contratará el seguro que se ha pactado?',
              identifier: 'id-dec-42_opB_4',
              wordToReplace: 'id-dec-42_opB_4',
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
                  label: 'el arrendatario (inquilino)',
                  replacementOriginal: 'ARRENDATARIA',
                  replacement: 'ARRENDATARIA',
                  radioId: 'id-dec-42_opB_4_opA',
                  identifier: 'id-dec-42_opB_4_opA',
                  extraReplacements: [
                  ],
                  checked: true,
                },
                {
                  label: 'el arrendador (propietario)',
                  replacementOriginal: 'ARRENDADORA',
                  replacement: 'ARRENDADORA',
                  radioId: 'id-dec-42_opB_4_opB',
                  identifier: 'id-dec-42_opB_4_opB',
                  extraReplacements: [
                  ],
                  checked: false,
                },
              ]
            },
            {
              question: 'Tipo de seguro que se desea contratar:',
              placeholder: 'P. ej: Seguro de responsabilidad Civil',
              wordToReplace: 'id-dec-42_opB_5',
              identifier: 'id-dec-42_opB_5',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [
              ],
            },
            {
              question: 'Cobertura mínima (en euros) que deberá tener dicho seguro (suma hasta la cual la aseguradora deberá hacerse cargo de los daños en la vivienda y/o de los incumplimientos del contrato de alquiler):',
              placeholder: 'Escriba un número',
              wordToReplace: 'id-dec-42_opB_6',
              identifier: 'id-dec-42_opB_6',
              type: 'iNumber',
              replacement: '',
              extraReplacements: [],
              rules: [
                {
                  condition: false,
                  rulename: 'extraReplacementToCharacter',
                  identifier: 'iddec42opB6-precioAletras',
                  wordToReplace: 'iddec42opB6-precioAletras',
                  replacement: ''
                }
              ],
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                value: 'La cobertura es la suma hasta la cual la compañía aseguradora deberá hacerse cargo de las consecuencias que se deriven de un siniestro (o incidente) en relación con el riesgo asegurado. El riesgo asegurado dependerá del tipo de seguro contratado; puede tratarse, por ejemplo, de daños ocasionados en la vivienda, de incumplimientos del contrato de arrendamiento (ej. impago de la renta), etc.'
              },
            },
          ]
        },
        {
          label: 'no cuenta con seguro, pero se desea pactar su contratación',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'La PARTE id-dec-42_opC_1 se compromete a la contratación de un seguro de la siguiente clase: id-dec-42_opC_2. Este seguro deberá indicar como beneficiaria a la Parte Arrendadora, tener una cobertura mínima igual a iddec42opC3-precioAletras (id-dec-42_opC_3 €), y ser mantenido durante toda la vigencia del presente Contrato.',
          // tslint:disable-next-line:max-line-length
          replacement: 'La PARTE id-dec-42_opC_1 se compromete a la contratación de un seguro de la siguiente clase: id-dec-42_opC_2. Este seguro deberá indicar como beneficiaria a la Parte Arrendadora, tener una cobertura mínima igual a iddec42opC3-precioAletras (id-dec-42_opC_3 €), y ser mantenido durante toda la vigencia del presente Contrato.',
          extraReplacements: [],
          radioId: 'id-dec-42_opC',
          identifier: 'id-dec-42_opC',
          checked: true,
          subSteps: [
            {
              type: 'iRadioB',
              question: '¿Quién contratará el seguro que se ha pactado?',
              identifier: 'id-dec-42_opC_1',
              wordToReplace: 'id-dec-42_opC_1',
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
                  label: 'el arrendatario (inquilino)',
                  replacementOriginal: 'ARRENDATARIA',
                  replacement: 'ARRENDATARIA',
                  radioId: 'id-dec-42_opC_1_opA',
                  identifier: 'id-dec-42_opC_1_opA',
                  extraReplacements: [
                  ],
                  checked: true,
                },
                {
                  label: 'el arrendador (propietario)',
                  replacementOriginal: 'ARRENDADORA',
                  replacement: 'ARRENDADORA',
                  radioId: 'id-dec-42_opC_1_opB',
                  identifier: 'id-dec-42_opC_1_opB',
                  extraReplacements: [
                  ],
                  checked: false,
                },
              ]
            },
            {
              question: 'Tipo de seguro que se desea contratar:',
              placeholder: 'P. ej: Seguro de responsabilidad Civil',
              wordToReplace: 'id-dec-42_opC_2',
              identifier: 'id-dec-42_opC_2',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [
              ],
            },
            {
              question: 'Cobertura mínima (en euros) que deberá tener dicho seguro (suma hasta la cual la aseguradora deberá hacerse cargo de los daños en la vivienda y/o de los incumplimientos del contrato de alquiler):',
              placeholder: 'Escriba un número',
              wordToReplace: 'id-dec-42_opC_3',
              identifier: 'id-dec-42_opC_3',
              type: 'iNumber',
              replacement: '',
              extraReplacements: [],
              rules: [
                {
                  condition: false,
                  rulename: 'extraReplacementToCharacter',
                  identifier: 'iddec42opC3-precioAletras',
                  wordToReplace: 'iddec42opC3-precioAletras',
                  replacement: ''
                }
              ],
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                value: 'La cobertura es la suma hasta la cual la compañía aseguradora deberá hacerse cargo de las consecuencias que se deriven de un siniestro (o incidente) en relación con el riesgo asegurado. El riesgo asegurado dependerá del tipo de seguro contratado; puede tratarse, por ejemplo, de daños ocasionados en la vivienda, de incumplimientos del contrato de arrendamiento (ej. impago de la renta), etc.'
              },
            },
          ]
        },
        {
          label: 'no cuenta con un seguro ni se desea pactar su contratación',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'No se cuenta con seguro ni se desea pactar la contratación de ninguno.',
          // tslint:disable-next-line:max-line-length
          replacement: 'No se cuenta con seguro ni se desea pactar la contratación de ninguno.',
          extraReplacements: [],
          radioId: 'id-dec-42_opD',
          identifier: 'id-dec-42_opD',
          checked: true,
          subSteps: [
          ]
        }
      ],
    },
    {
      type: 'iRadioB',
      question: '(Derecho de adquisición preferente) En caso de que el arrendador decida vender la vivienda  durante el alquiler:',
      identifier: 'id-dec-43',
      wordToReplace: 'id-dec-43',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'El derecho de compra o adquisición preferente, según la ley 29/1994, de 24 de noviembre, sobre arrendamientos urbanos es el derecho que tiene el arrendatario de adquirir la propiedad con preferencia, en el caso de que el arrendador ponga en venta dicho inmueble. Así lo recoge el artículo 25 de  esta normativa, en el que se señala que el arrendatario tendrá las mismas condiciones que el arrendador haya acordado con un posible comprador. En este sentido, con el derecho de compra preferente, el arrendatario dispone de 30 días naturales para ejercitar el derecho de tanteo desde que el propietario le notifique la decisión de venta. Con ello, se podrá determinar y llegar a un acuerdo sobre precio y el resto de condiciones inherentes a la transmisión de la propiedad inmobiliaria. Del mismo modo, el arrendatario también dispone del derecho de retracto, en relación al precio y a todas las condiciones de compraventa.',
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'el arrendatario no podrá adquirirla con prioridad frente a otros posibles compradores (no tendrá derecho de adquisición preferente o tanteo y retracto)',
          replacementOriginal: 'La Parte Arrendataria renuncia expresamente al derecho de adquisición preferente, tanteo, o retracto, sobre la vivienda, en caso de que la Parte Arrendadora decidiera enajenar el inmueble. La Parte Arrendadora pondrá en conocimiento de la Parte Arrendataria con antelación suficiente su intención de vender el inmueble.',
          replacement: 'La Parte Arrendataria renuncia expresamente al derecho de adquisición preferente, tanteo, o retracto, sobre la vivienda, en caso de que la Parte Arrendadora decidiera enajenar el inmueble. La Parte Arrendadora pondrá en conocimiento de la Parte Arrendataria con antelación suficiente su intención de vender el inmueble.',
          radioId: 'id-dec-43_opA',
          identifier: 'id-dec-43_opA',
          extraReplacements: [
          ],
          checked: true,
        },
        {
          label: 'el arrendatario podrá adquirirla con prioridad frente a otros posibles compradores (tendrá derecho de adquisición preferente o tanteo y retracto)',
          replacementOriginal: 'La Parte Arrendataria tendrá derecho de adquisición preferente, tanteo, o retracto, sobre la vivienda, en caso de que la Parte Arrendadora decidiera enajenar el inmueble. Todo ello de acuerdo con lo dispuesto en los artículos 25 y siguientes de la Ley de Arrendamientos Urbanos que se encuentre vigente en el momento de formalización del presente contrato.',
          replacement: 'La Parte Arrendataria tendrá derecho de adquisición preferente, tanteo, o retracto, sobre la vivienda, en caso de que la Parte Arrendadora decidiera enajenar el inmueble. Todo ello de acuerdo con lo dispuesto en los artículos 25 y siguientes de la Ley de Arrendamientos Urbanos que se encuentre vigente en el momento de formalización del presente contrato.',
          radioId: 'id-dec-43_opB',
          identifier: 'id-dec-43_opB',
          extraReplacements: [
          ],
          checked: false,
        },
      ]
    },
    {
      type: 'iRadioC',
      question: '(Subarrendamiento) El arrendatario (inquilino):',
      identifier: 'id-dec-44',
      wordToReplace: 'id-dec-44',
      defaultRadioId: 'id-dec-44_opA',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: 'El subarriendo es un contrato mediante el cual el arrendatario cede a un tercero denominado subarrendatario el uso como arrendatario de toda o parte de la vivienda que tiene arrendada. Coloquialmente se conoce como “realquiler”. A menos que se especifique y se pacte en el contrato de arrendamiento, el subarrendamiento de vivienda por parte del inquilino está prohibido. Solamente se permite si se cumplen una serie de requisitos. El subarrendamiento puede ser total o parcial. La Ley de Arrendamientos Urbanos solo permite el parcial. Normalmente consistiría en el alquiler de una o varias habitaciones. Debe realizarse con consentimiento expreso y por escrito del propietario, y debe otorgarse con carácter previo al subarriendo. Si se subarrienda sin permiso escrito del arrendador, éste puede instar la resolución del contrato. El precio del subarriendo no puede ser superior a la renta que paga el arrendatario. La Ley de Arrendamientos Urbanos solo permite el subarrendamiento parcial de la vivienda, no el total, siempre y cuando, se den los dos requisitos anteriores.'
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'no podrá subarrendar (ceder partes de la vivienda a cambio de un precio) la vivienda alquilada ni ceder este contrato (sustituirse por otro arrendatario)',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'Queda prohibido la cesión de la vivienda o su subarriendo ya sea total o parcial.',
          // tslint:disable-next-line:max-line-length
          replacement: 'Queda prohibido la cesión de la vivienda o su subarriendo ya sea total o parcial.',
          extraReplacements: [],
          radioId: 'id-dec-44_opA',
          identifier: 'id-dec-44_opA',
          checked: true,
          subSteps: []
        },
        {
          label: 'podrá subarrendar la vivienda alquilada y ceder este contrato',
          replacementOriginal: 'Queda permitido la cesión de la vivienda o su subarriendo ya sea total o parcial. La Parte Arrendataria se compromete a poner en conocimiento de la Parte Arrendadora esta situación, junto con el acuerdo o contrato correspondiente con, al menos, iddec44opB1-precioAletras (id-dec-44_opB_1) días de antelación a la formalización del acuerdo de subarriendo o cesión, de forma expresa y por escrito. <br><br>En caso de cesión, el cesionario se subrogará en la posición de la Parte Arrendataria frente a la Parte Arrendadora. <br><br>En caso de subarriendo, la Parte Arrendataria continuará siendo responsable del cumplimiento del Contrato para con la Parte Arrendadora, y se deberán respetar una serie de condiciones: <br><br>a) El subarriendo, respetando el objeto de este Contrato, será de la vivienda. <br><br>b) El subarriendo no podrá tener en ningún caso una duración superior a la duración de este contrato de arrendamiento.',
          replacement: 'Queda permitido la cesión de la vivienda o su subarriendo ya sea total o parcial. La Parte Arrendataria se compromete a poner en conocimiento de la Parte Arrendadora esta situación, junto con el acuerdo o contrato correspondiente con, al menos, iddec44opB1-precioAletras (id-dec-44_opB_1) días de antelación a la formalización del acuerdo de subarriendo o cesión, de forma expresa y por escrito. <br><br>En caso de cesión, el cesionario se subrogará en la posición de la Parte Arrendataria frente a la Parte Arrendadora. <br><br>En caso de subarriendo, la Parte Arrendataria continuará siendo responsable del cumplimiento del Contrato para con la Parte Arrendadora, y se deberán respetar una serie de condiciones: <br><br>a) El subarriendo, respetando el objeto de este Contrato, será de la vivienda. <br><br>b) El subarriendo no podrá tener en ningún caso una duración superior a la duración de este contrato de arrendamiento.',
          extraReplacements: [],
          radioId: 'id-dec-44_opB',
          identifier: 'id-dec-44_opB',
          checked: false,
          subSteps: [
            {
              question: '¿Con cuántos días de anticipación deberá informar el arrendatario (inquilino) al arrendador (propietario) de su intención de subarrendar la vivienda alquilada o de ceder este contrato?',
              placeholder: 'Ej. Escriba un número',
              wordToReplace: 'id-dec-44_opB_1',
              identifier: 'id-dec-44_opB_1',
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
                  rulename: 'extraReplacementAletras',
                  identifier: 'iddec44opB1-precioAletras',
                  wordToReplace: 'iddec44opB1-precioAletras',
                  replacement: ''
                }
              ],
            }
          ]
        }
      ],
    },
    {
      type: 'iNumber',
      identifier: 'id-dec-45',
      wordToReplace: 'id-dec-45',
      replacement: '',
      question: 'Si lo desea indique la cantidad (en euros) de la multa que deberá pagar el arrendatario (inquilino) por cada día que se retrase en la devolución de la vivienda una vez finalizado el contrato:',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'En caso de que no se deje en blanco esta pregunta, en el contrato se establecerá una multa equivalente a dos veces el importe de la renta diaria por cada día de retraso del arrendatario en la devolución de la vivienda alquilada.'
      },
      placeholder: 'Escriba un número',
      mandatory: false,
      isFocused: false,
      isEmpty: {
        prepend: 'la cantidad de ',
        append: ' euros',
        defaultValue: 'el doble de la renta diaria existente'
      },
      rules: []
    },
    {
      type: 'iRadioB',
      question: 'Si el inquilino cuando se haya alcanzado el plazo máximo de duración del alquiler falleciese, ¿se establece un pacto de derecho de subrogación (es decir, que familiares lo sustituyan y se conviertan en arrendatarios )?',
      identifier: 'id-dec-46',
      wordToReplace: 'id-dec-46',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'Cuando el inquilino fallece, existe la posibilidad de que otras personas con parentesco u otra relación con el difunto puedan subrogarse en el contrato de arrendamiento, es decir, sustituyan al fallecido y se conviertan ellos en arrendatarios. No obstante, este derecho puede limitarse cuando la duración inicial del contrato sea superior a cinco o siete años (según sea persona física o jurídica), siempre que el fallecimiento tenga lugar transcurridos los cinco o siete primeros años de duración del arrendamiento, o que el arrendamiento se extinga a los cinco o siete años cuando el fallecimiento se hubiera producido con anterioridad. No podrá pactarse esta renuncia al derecho de subrogación en caso de que las personas que puedan ejercitar tal derecho se encuentren en situación de especial vulnerabilidad y afecte a menores de edad, personas con discapacidad o personas mayores de 65 años.',
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          replacementOriginal: 'A través del presente contrato, las partes acuerdan que sí habrá lugar a la subrogación en caso de fallecimiento de la Parte Arrendataria.',
          replacement: 'A través del presente contrato, las partes acuerdan que sí habrá lugar a la subrogación en caso de fallecimiento de la Parte Arrendataria.',
          radioId: 'id-dec-46_opA',
          identifier: 'id-dec-46_opA',
          extraReplacements: [
          ],
          checked: true,
        },
        {
          label: 'No',
          replacementOriginal: 'A través del presente contrato que si la duración del contrato de arrendamiento fuera superior a cinco años, las partes acuerdan que no habrá lugar a la subrogación en caso de fallecimiento de la Parte Arrendataria.',
          replacement: 'A través del presente contrato que si la duración del contrato de arrendamiento fuera superior a cinco años, las partes acuerdan que no habrá lugar a la subrogación en caso de fallecimiento de la Parte Arrendataria.',
          radioId: 'id-dec-46_opB',
          identifier: 'id-dec-46_opB',
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