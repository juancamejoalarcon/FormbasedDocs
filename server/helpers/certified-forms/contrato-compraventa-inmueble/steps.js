const steps = [
    {
      type: 'start',
      title: 'Contrato de compraventa de bien inmueble',
      description: `El contrato de compraventa de bien inmueble 
      es el documento por el que el vendedor se compromete a 
      entregar el inmueble al comprador a cambio del precio acordado.`,
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
      question: '¿Cuántas personas son propietarias del inmueble y desean venderlo?:',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: `Indique el número de personas que son propietarias del inmueble.`,
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
              question: 'La persona propietaria ->(index) es:',
              questionOriginal: 'La persona propietaria ->(index) es:',
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
                        question: 'La persona propietaria para realizar el contrato, actúa:',
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
                              question: 'Nombre completo del propietario, incluyendo los apellidos:',
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
                              question: 'Dirección del lugar donde reside el propietario:',
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
                              question: 'Tipo de documento de identificación del propietario:',
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
                                question: 'Nombre completo del propietario, incluyendo los apellidos:',
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
                                question: 'Dirección del lugar donde reside el propietario:',
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
                                question: 'Tipo de documento de identificación del propietario:',
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
                                question: 'Nombre completo de la persona que firma este contrato en nombre y representación del propietario',
                                wordToReplace: 'id-unid-3_1_opA_1_opB_5',
                                identifier: 'id-unid-3_1_opA_1_opB_5',
                                type: 'iText',
                                replacement: '',
                                placeholder: 'P. ej. Martino Montano Holguín',
                                indications: {
                                  areIndications: true,
                                  indicationsType: 'outsideText',
                                  // tslint:disable-next-line:max-line-length
                                  value: 'Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este propietario. El contrato puede ser firmado por un representante legal o voluntario. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
                                },
                              },
                              {
                                type: 'iRadioB',
                                // tslint:disable-next-line:max-line-length
                                question: 'Documento de identificación de la persona que firma el contrato en nombre y representación propietario:',
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
                                question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del propietario',
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
                                question: 'Dirección del lugar donde reside la persona que firma este contrato en nombre y representación del propietario',
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
                      question: 'Nombre o razón social de esta persona jurídica propietaria:',
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
                      question: 'Domicilio social completo de la persona jurídica propietaria:',
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
        prepend: 'La parte COMPRADORA podrá comunicarse con la parte VENDEDORA a través de: <br>',
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
      question: '¿Cuántas personas van a comprar el inmueble?',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'Indique el número de personas que van a comprar el vehículo.',
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
              question: 'La persona compradora (1) es:',
              questionOriginal: 'La persona compradora (1) es:',
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
                        question: 'La persona compradora para realizar el contrato, actúa:',
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
                              question: 'Nombre completo del comprador, incluyendo los apellidos:',
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
                              question: 'Dirección del lugar donde reside el comprador:',
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
                              question: 'Tipo de documento de identificación del comprador:',
                              identifier: 'id-unid-4_1_opA_1_opA_3',
                              wordToReplace: 'id-unid-4_1_opA_1_opA_3',
                              indications: {
                                areIndications: true,
                                indicationsType: 'outsideText',
                                // tslint:disable-next-line:max-line-length
                                value: 'Seleccione el tipo de documento de identificación del comprador',
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
                                question: 'Nombre completo del comprador, incluyendo los apellidos:',
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
                                question: 'Dirección del lugar donde reside el comprador:',
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
                                question: 'Tipo de documento de identificación del comprador:',
                                identifier: 'id-unid-4_1_opA_1_opB_3',
                                wordToReplace: '3_1_opA_1_opB_3',
                                indications: {
                                  areIndications: true,
                                  indicationsType: 'insideText',
                                  value: 'Seleccione el tipo de documento de identificación del comprador',
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
                                question: 'Nombre completo de la persona que firma este contrato en nombre y representación del comprador',
                                wordToReplace: 'id-unid-4_1_opA_1_opB_5',
                                identifier: 'id-unid-4_1_opA_1_opB_5',
                                type: 'iText',
                                replacement: '',
                                placeholder: 'P. ej. Martino Montano Holguín',
                                indications: {
                                  areIndications: true,
                                  indicationsType: 'outsideText',
                                  // tslint:disable-next-line:max-line-length
                                  value: 'Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este comprador. El contrato puede ser firmado por un representante legal o voluntario. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
                                },
                              },
                              {
                                type: 'iRadioB',
                                // tslint:disable-next-line:max-line-length
                                question: 'Documento de identificación de la persona que firma el contrato en nombre y representación comprador:',
                                identifier: 'id-unid-4_1_opA_1_opB_6',
                                wordToReplace: 'id-unid-4_1_opA_1_opB_6',
                                indications: {
                                  areIndications: true,
                                  indicationsType: 'outsideText',
                                  // tslint:disable-next-line:max-line-length
                                  value: 'Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación del comprador.',
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
                                question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del comprador',
                                wordToReplace: 'id-unid-4_1_opA_1_opB_8',
                                placeholder: 'P. ej. apoderado, representante legal',
                                identifier: 'id-unid-4_1_opA_1_opB_8',
                                type: 'iText',
                                replacement: '',
                                indications: {
                                  areIndications: true,
                                  indicationsType: 'insideText',
                                  // tslint:disable-next-line:max-line-length
                                  value: 'Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este comprador.',
                                },
                              },
                              {
                                // tslint:disable-next-line:max-line-length
                                question: 'Dirección del lugar donde reside la persona que firma este contrato en nombre y representación del comprador',
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
                      question: 'Nombre o razón social de esta persona jurídica compradora:',
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
                      question: 'Domicilio social completo de la persona jurídica compradora:',
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
      question: 'Dirección o direcciones de correo electrónico del/los compradores',
      wordToReplace: 'id-unidnew-4',
      identifier: 'id-unidnew-4',
      placeholder: 'P. ej: ejemplo@email.com',
      type: 'iText',
      subType: 'textarea',
      replacement: '',
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Si lo desea, señale en este espacio la dirección o direcciones de correo electrónico de los compradores. Esto puede facilitar y hacer más fluidas las comunicaciones entre las partes.  Si no desea indicar la dirección o direcciones de correo electrónico, deje este espacio en blanco.',
      },
      isEmpty: {
        prepend: 'La parte VENDEDORA podrá comunicarse con la parte COMPRADORA a través de: <br>',
        append: '',
      }
    },
    {
      type: 'iRadioB',
      question: 'Las personas que celebran este contrato son:',
      identifier: 'id-unid-0',
      wordToReplace: 'id-unid-0',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: `Si este contrato lo firman dos particulares, de manera ajena a la actividad que realizan como profesionales, como por ejemplo, 
        un carpintero vende su casa de verano a un abogado, se trata de una compraventa civil. 
        <br><br>Si el contrato lo firman dos profesionales (por ejemplo, un abogado vende el local donde tiene su despacho a otro abogado), hablamos de una compraventa mercantil 
        <br><br>Pero si se trata de una compraventa en un particular y un profesional, hablamos de una compraventa civil sujeta al Texto refundido de la Ley general de defensa de consumidores y usuarios`,
      },
      replacement: '',
      extraReplacements: [
        {
          identifier: 'idunid0-extra-1',
          wordToReplace: 'idunid0-extra-1',
          insideId: 'opA'
        },
        {
          identifier: 'idunid0-extra-2',
          wordToReplace: 'idunid0-extra-2',
          insideId: 'opB'
        },
        {
          identifier: 'idunid0-extra-3',
          wordToReplace: 'idunid0-extra-3',
          insideId: 'opC'
        },
        {
          identifier: 'idunid0-extra-4',
          wordToReplace: 'idunid0-extra-4',
          insideId: 'opD'
        },
        {
          identifier: 'idunid0-extra-5',
          wordToReplace: 'idunid0-extra-5',
          insideId: 'opE'
        },
        {
          identifier: 'idunid0-extra-6',
          wordToReplace: 'idunid0-extra-6',
          insideId: 'opF'
        },
      ],
      radios: [
        {
          label: 'particulares, que actúan de manera ajena a la actividad que realizan como profesionales',
          replacementOriginal: 'DE BIEN INMUEBLE ENTRE PARTICULARES',
          replacement: 'DE BIEN INMUEBLE ENTRE PARTICULARES',
          radioId: 'id-unid-0_opA',
          identifier: 'id-unid-0_opA',
          extraReplacements: [
            {
              identifier: 'idunid0-extra-1',
              replacement: 'La parte compradora está interesada en comprar el inmueble descrito en el expositivo “I” del presente escrito.',
              replacementOriginal: 'La parte compradora está interesada en comprar el inmueble descrito en el expositivo “I” del presente escrito.',
              insideId: 'opA'
            },
            {
              identifier: 'idunid0-extra-2',
              replacement: 'automáticamente, sin necesidad de aviso de vencimiento por parte del vendedor  a la parte compradora.',
              replacementOriginal: 'automáticamente, sin necesidad de aviso de vencimiento por parte del vendedor  a la parte compradora.',
              insideId: 'opB'
            },
            {
              identifier: 'idunid0-extra-3',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opC'
            },
            {
              identifier: 'idunid0-extra-4',
              replacement: '.',
              replacementOriginal: '.',
              insideId: 'opD'
            },
            {
              identifier: 'idunid0-extra-5',
              replacement: '.',
              replacementOriginal: '.',
              insideId: 'opE'
            },
            {
              identifier: 'idunid0-extra-6',
              replacement: 'en el Código civil.',
              replacementOriginal: 'en el Código civil.',
              insideId: 'opF'
            }
          ],
          checked: true,
        },
        {
          label: 'profesionales, que actúan con motivo de su actividad profesional',
          replacementOriginal: 'MERCANTIL DE BIEN INMUEBLE',
          replacement: 'MERCANTIL DE BIEN INMUEBLE',
          radioId: 'id-unid-0_opB',
          identifier: 'id-unid-0_opB',
          extraReplacements: [
            {
              identifier: 'idunid0-extra-1',
              replacement: `La parte compradora está interesada en comprar el inmueble descrito en el expositivo 
              “I” del presente escrito para el desarrollo de su actividad comercial.`,
              replacementOriginal: `La parte compradora está interesada en comprar el inmueble descrito en el expositivo 
              “I” del presente escrito para el desarrollo de su actividad comercial.`,
              insideId: 'opA'
            },
            {
              identifier: 'idunid0-extra-2',
              replacement: 'automáticamente, sin necesidad de aviso de vencimiento alguna por parte del vendedor a la parte compradora.',
              replacementOriginal: 'automáticamente, sin necesidad de aviso de vencimiento alguna por parte del vendedor a la parte compradora.',
              insideId: 'opB'
            },
            {
              identifier: 'idunid0-extra-3',
              replacement: 'En este acto, la parte VENDEDORA entrega factura a la parte COMPRADORA. Además, una copia de esta factura se adjunta como anexo al presente contrato.',
              replacementOriginal: 'En este acto, la parte VENDEDORA entrega factura a la parte COMPRADORA. Además, una copia de esta factura se adjunta como anexo al presente contrato.',
              insideId: 'opC'
            },
            {
              identifier: 'idunid0-extra-4',
              replacement: '.',
              replacementOriginal: '.',
              insideId: 'opD'
            },
            {
              identifier: 'idunid0-extra-5',
              replacement: ', y en el Código de Comercio.',
              replacementOriginal: ', y en el Código de Comercio.',
              insideId: 'opE'
            },
            {
              identifier: 'idunid0-extra-6',
              replacement: 'en la legislación mercantil y supletoriamente en el Código civil.',
              replacementOriginal: 'en la legislación mercantil y supletoriamente en el Código civil.',
              insideId: 'opF'
            }
          ],
          checked: false,
        },
        {
          label: 'un particular y un profesional (siendo el vendedor el que actúa con motivo de su actividad comercial)',
          replacementOriginal: 'DE BIEN INMUEBLE',
          replacement: 'DE BIEN INMUEBLE',
          radioId: 'id-unid-0_opC',
          identifier: 'id-unid-0_opC',
          extraReplacements: [
            {
              identifier: 'idunid0-extra-1',
              replacement: 'La parte compradora está interesada en comprar el inmueble descrito en el expositivo “I” del presente escrito.',
              replacementOriginal: 'La parte compradora está interesada en comprar el inmueble descrito en el expositivo “I” del presente escrito.',
              insideId: 'opA'
            },
            {
              identifier: 'idunid0-extra-2',
              replacement: 'desde el día siguiente a aquel en el que la parte vendedora requiera el pago a la parte  compradora.',
              replacementOriginal: 'desde el día siguiente a aquel en el que la parte vendedora requiera el pago a la parte  compradora.',
              insideId: 'opB'
            },
            {
              identifier: 'idunid0-extra-3',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opC'
            },
            {
              identifier: 'idunid0-extra-4',
              replacement: `, y conforme al artículo 97 de la LGDCU, la parte VENDEDORA pondrá en conocimiento de la parte COMPRADORA con anterioridad a 
              la firma de este contrato, de forma clara y comprensible: a.- el precio total de venta del Inmueble; b.- la información relativa a:  
              su identidad, su dirección y su número de teléfono; así como aquellas relativas a la garantía legal y, en su caso, a las condiciones de 
              los servicios postventa y las garantías comerciales; las informaciones relativas a la entrega del Inmueble, así como toda aquella información 
              relativa para que se pueda llevar a buen fin el presente contrato de compraventa.`,
              replacementOriginal: `, y conforme al artículo 97 de la LGDCU, la parte VENDEDORA pondrá en conocimiento de la parte COMPRADORA con anterioridad a 
              la firma de este contrato, de forma clara y comprensible: a.- el precio total de venta del Inmueble; b.- la información relativa a:  
              su identidad, su dirección y su número de teléfono; así como aquellas relativas a la garantía legal y, en su caso, a las condiciones de 
              los servicios postventa y las garantías comerciales; las informaciones relativas a la entrega del Inmueble, así como toda aquella información 
              relativa para que se pueda llevar a buen fin el presente contrato de compraventa.`,
              insideId: 'opD'
            },
            {
              identifier: 'idunid0-extra-5',
              replacement: `, y las previstas de la Ley General para la Defensa de Consumidores y Usuarios. En el que se prevé que, en caso de falta de conformidad, 
              la parte COMPRADORA podrá optar entre exigir la reparación o la sustitución del inmueble, en las condiciones previstas por los artículos 119 y 
              siguientes de la Ley. Esta garantía tiene una duración de dos (2) años desde la entrega del Bien.`,
              replacementOriginal: `, y las previstas de la Ley General para la Defensa de Consumidores y Usuarios. En el que se prevé que, en caso de falta de conformidad, 
              la parte COMPRADORA podrá optar entre exigir la reparación o la sustitución del inmueble, en las condiciones previstas por los artículos 119 y 
              siguientes de la Ley. Esta garantía tiene una duración de dos (2) años desde la entrega del Bien.`,
              insideId: 'opE'
            },
            {
              identifier: 'idunid0-extra-6',
              replacement: 'en el Código civil.',
              replacementOriginal: 'en el Código civil.',
              insideId: 'opF'
            }
          ],
          checked: false,
        },
      ]
    },
    {
      question: 'Haga una descripción del inmueble:',
      wordToReplace: 'id-unid-5',
      identifier: 'id-unid-5',
      placeholder: `P. ej:La vivienda situada en Paseo de las Yeserías 10, 28905 Madrid, Madrid, cuenta con una superficie útil de 60 metros cuadrados. Se encuentra en una Comunidad de Propietarios, y l le corresponde el 10% de las cuotas de participación,...`,
      type: 'iText',
      subType: 'textarea',
      replacement: '',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: `La descripción debería incluir, por lo menos:
        <ul>
          <li>Tipo de inmueble: vivienda, plaza de garaje,...</li>
          <li>Ubicación del inmueble</li>
          <li>Linde o límite</li>
          <li>Cuota de participación si corresponde</li>
        </ul>
        La información debería ser lo más fiel posible a la información registral`,
      }
    },
    {
      type: 'iRadioC',
      question: `¿Cuando el vendedor del inmueble adquirió el inmueble, dicha 
      adquisición se formalizó en escritura pública otorgada por Notario público?`,
      identifier: 'id-unid-6',
      wordToReplace: 'id-unid-6',
      defaultRadioId: 'id-unid-6_opA',
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
          replacementOriginal: `Que la adquisición del inmueble fue formalizada en escritura pública otorgada 
          el id-unid-6_opA_1 ante la Notaría de: id-unid-6_opA_2 de id-unid-6_opA_3, con el número de protocolo id-unid-6_opA_4.`,
          // tslint:disable-next-line:max-line-length
          replacement: `Que la adquisición del inmueble fue formalizada en escritura pública otorgada 
          el id-unid-6_opA_1 ante la Notaría de: id-unid-6_opA_2 de id-unid-6_opA_3, con el número de protocolo id-unid-6_opA_4.`,
          extraReplacements: [],
          radioId: 'id-unid-6_opA',
          identifier: 'id-unid-6_opA',
          checked: true,
          subSteps: [
            {
              type: 'iDate',
              identifier: 'id-unid-6_opA_1',
              wordToReplace: 'id-unid-6_opA_1',
              replacement: '',
              question: 'Fecha de otorgamiento de la escritura pública',
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                value: 'Este dato suele estar en el encabezado de la escritura'
              },
              placeholder: '',
              mandatory: false,
              isFocused: false
            },
            {
              type: 'iText',
              identifier: 'id-unid-6_opA_2',
              wordToReplace: 'id-unid-6_opA_2',
              replacement: '',
              question: 'Nombre completo del Notario Público que otorga la escritura pública',
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                value: 'Este dato suele estar en el encabezado de la escritura'
              },
              placeholder: 'Alberto Pérez Álvarez',
              mandatory: false,
              isFocused: false
            },
            {
              type: 'iText',
              identifier: 'id-unid-6_opA_3',
              wordToReplace: 'id-unid-6_opA_3',
              replacement: '',
              question: 'Ciudad en la que se otorga la escritura pública',
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                value: 'Este dato suele estar en el encabezado de la escritura'
              },
              placeholder: 'Albacete',
              mandatory: false,
              isFocused: false
            },
            {
              type: 'iText',
              identifier: 'id-unid-6_opA_4',
              wordToReplace: 'id-unid-6_opA_4',
              replacement: '',
              question: 'Número de protocolo de la escritura pública',
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                value: `Este dato suele estar en el encabezado de la escritura
                <br>El número de protocolo es un número de hasta cuatro cifras, 
                apareciendo en algunos casos junto a la fecha de su otorgamiento.`
              },
              placeholder: '1234',
              mandatory: false,
              isFocused: false
            },
          ]
        },
        {
          label: 'No',
          replacementOriginal: 'id-unid-6_opB_1',
          replacement: 'id-unid-6_opB_1',
          extraReplacements: [],
          radioId: 'id-unid-6_opB',
          identifier: 'id-unid-6_opB',
          checked: false,
          subSteps: [
            {
              type: 'iRadioC',
              question: 'El vendedor adquirió el inmueble por medio de:',
              identifier: 'id-unid-6_opB_1',
              wordToReplace: 'id-unid-6_opB_1',
              defaultRadioId: 'id-unid-6_opB_1',
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                // tslint:disable-next-line:max-line-length
                value: `Seleccione "por el fin de la multipropiedad o condominio que existía sobre el inmueble" en el caso de 
                que el vendedor disponga del bien porque se le adjudicó en su favor el condominio o multipropiedad existente 
                sobre el mismo. Este caso se refiere a las situaciones en las que existen varios propietarios sobre el inmueble 
                y los mismos deciden adjudicar sus cuotas sobre uno de los copropietarios, desapareciendo así la multipropiedad.`
              },
              replacement: '',
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'un contrato de compraventa (el inmueble a cambio de un precio)',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `Que el inmueble fue adquirido mediante un contrato privado de compraventa (y no se elevó a escritura pública).`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `Que el inmueble fue adquirido mediante un contrato privado de compraventa (y no se elevó a escritura pública).`,
                  extraReplacements: [],
                  radioId: 'id-unid-6_opB_1_opA',
                  identifier: 'id-unid-6_opB_1_opA',
                  checked: true,
                  subSteps: [
                  ]
                },
                {
                  label: 'un contrato de donación (el inmueble cedido de forma gratuita)',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `Que el inmueble fue adquirido mediante un contrato de  donación (y no se elevó a escritura pública).`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `Que el inmueble fue adquirido mediante un contrato de  donación (y no se elevó a escritura pública).`,
                  extraReplacements: [],
                  radioId: 'id-unid-6_opB_1_opB',
                  identifier: 'id-unid-6_opB_1_opB',
                  checked: true,
                  subSteps: [
                  ]
                },
                {
                  label: `por el fin de la multipropiedad o condominio que existía sobre el inmueble`,
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `Que el inmueble fue adquirido mediante un contrato de  extinción de condominio (y no se elevó a escritura pública).`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `Que el inmueble fue adquirido mediante un contrato de  extinción de condominio (y no se elevó a escritura pública).`,
                  extraReplacements: [],
                  radioId: 'id-unid-6_opB_1_opC',
                  identifier: 'id-unid-6_opB_1_opC',
                  checked: true,
                  subSteps: [
                  ]
                },
                {
                  label: `por herencia o legado establecido a su favor`,
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `Que el inmueble fue adquirido mediante un contrato de  división de herencia (y no se elevó a escritura pública).`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `Que el inmueble fue adquirido mediante un contrato de  división de herencia (y no se elevó a escritura pública).`,
                  extraReplacements: [],
                  radioId: 'id-unid-6_opB_1_opD',
                  identifier: 'id-unid-6_opB_1_opD',
                  checked: true,
                  subSteps: [
                  ]
                },
                {
                  label: 'otra forma distinta a las anteriores',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `Que el inmueble fue adquirido mediante: id-unid-6_opB_1_opE_1, (y no se elevó a escritura pública).`,
                  // tslint:disable-next-line:max-line-length
                  replacement: 'Que el inmueble fue adquirido mediante: id-unid-6_opB_1_opE_1, (y no se elevó a escritura pública).',
                  extraReplacements: [],
                  radioId: 'id-unid-6_opB_1_opE',
                  identifier: 'id-unid-6_opB_1_opE',
                  checked: true,
                  subSteps: [

                    {
                      question: 'Tipo de contrato o forma a través del cual el vendedor adquirió la propiedad del inmueble que se desea vender:',
                      placeholder: 'P. Ej. subasta pública ...',
                      wordToReplace: 'id-unid-6_opB_1_opE_1',
                      identifier: 'id-unid-6_opB_1_opE_1',
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
                    }
                  ]
                },
              ],
            }
          ]
        }
      ],
    },
    {
      type: 'iRadioC',
      question: '¿El inmueble se encuentra inscrito en el Registro de la Propiedad?',
      identifier: 'id-unid-7',
      wordToReplace: 'id-unid-7',
      defaultRadioId: 'id-unid-7_opA',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: `Se puede comprobar dicha información a través del portal web de Registradores.org 
        (Registro de la Propiedad online) o bien en la escritura pública donde se recoge la titularidad del 
        inmueble (como por ejemplo, la escritura de reparto de herencia) en el caso de que la adquisición 
        se realizara a través de este tipo de documento.`
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: `Que el inmueble se encuentra inscrito en el Registro de la Propiedad 
          de id-unid-7_opA_1, id-unid-7_opA_2. id-unid-7_opA_3`,
          // tslint:disable-next-line:max-line-length
          replacement: '',
          extraReplacements: [],
          radioId: 'id-unid-7_opA',
          identifier: 'id-unid-7_opA',
          checked: true,
          subSteps: [
            {
              question: 'Ciudad en la que se se encuentra el Registro de la Propiedad donde está inscrito el inmueble que se desea vender:',
              placeholder: 'P. ej: Ciudad Real',
              wordToReplace: 'id-unid-7_opA_1',
              identifier: 'id-unid-7_opA_1',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                // tslint:disable-next-line:max-line-length
                value: `Se puede comprobar dicha información a través del portal web de Registradores.org (Registro 
                  de la Propiedad online) o bien en la escritura pública donde se recoge la titularidad del inmueble (
                  como por ejemplo, la escritura de reparto de herencia).`
              },
              rules: [],
            },
            {
              question: 'Datos registrales del inmueble:',
              placeholder: 'P. ej: Tomo 1 Libro 377 Folio 204 Finca 2',
              wordToReplace: 'id-unid-7_opA_2',
              identifier: 'id-unid-7_opA_2',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                // tslint:disable-next-line:max-line-length
                value: `Los datos registrales es el número de finca que se asigna en el registro de la propiedad correspondiente en 
                el momento de ser inscrita por primera vez y los datos de la cita registral que le corresponden, es decir, el número 
                de tomo, libro y folio en los que consta la inscripción.`
              },
              rules: [],
            },
            {
              question: 'Referencia catastral de la vivienda:',
              placeholder: 'P. ej: 9872023 VH5797S 0001 WX',
              wordToReplace: 'id-unid-7_opA_3',
              identifier: 'id-unid-7_opA_3',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                // tslint:disable-next-line:max-line-length
                value: `La referencia catastral es el identificador oficial y obligatorio de los bienes inmuebles. 
                Consiste en un código alfanumérico que es asignado por el Catastro de manera que todo inmueble debe 
                tener una única referencia catastral que permita situarlo inequívocamente en la cartografía catastral.
                Si no desea indicar la referencia catastral, deje este espacio en blanco.`
              },
              rules: [],
              isEmpty: {
                prepend: 'Su referencia catastral es la siguiente ',
                append: '.',
              }
            },
          ]
        },
        {
          label: 'No',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'Que el inmueble no se encuentra inscrito en el Registro de la Propiedad correspondiente. id-unid-7_opB_1',
          // tslint:disable-next-line:max-line-length
          replacement: 'Que el inmueble no se encuentra inscrito en el Registro de la Propiedad correspondiente. id-unid-7_opB_1',
          extraReplacements: [],
          radioId: 'id-unid-7_opB',
          identifier: 'id-unid-7_opB',
          checked: true,
          subSteps: [
            {
              question: 'Referencia catastral de la vivienda:',
              placeholder: 'P. ej: 9872023 VH5797S 0001 WX',
              wordToReplace: 'id-unid-7_opB_1',
              identifier: 'id-unid-7_opB_1',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                // tslint:disable-next-line:max-line-length
                value: `La referencia catastral es el identificador oficial y obligatorio de los bienes inmuebles. 
                Consiste en un código alfanumérico que es asignado por el Catastro de manera que todo inmueble debe 
                tener una única referencia catastral que permita situarlo inequívocamente en la cartografía catastral.
                Si no desea indicar la referencia catastral, deje este espacio en blanco.`
              },
              rules: [],
              isEmpty: {
                prepend: 'Su referencia catastral es la siguiente ',
                append: '.',
              }
            }
          ]
        },
      ],
    },
    {
      type: 'iRadioC',
      question: '¿El inmueble tiene  alguna carga, gravamen o afección real?',
      identifier: 'id-unid-8',
      wordToReplace: 'id-unid-8',
      defaultRadioId: 'id-unid-8_opA',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: `Los gravámenes y cargas de un inmueble no son otra cosa que algún tipo de impedimento que pesa sobre el mismo. 
        Dicha restricción impide realizar ciertas operaciones que involucren al bien, como por ejemplo, darlo en garantía de un préstamo hipotecario. 
        La diferencia entre una carga y un gravamen es las siguiente:
        <br>Un gravamen indica que sobre el bien inmueble pesan derechos reales de garantía 
        o de goce sobre bien ajeno. Es un ejemplo de gravamen, cuando el bien es aval de un crédito hipotecario.
        <br>Una carga señala que sobre el bien inmueble se publicitan restricciones referidas a 
        las situaciones de hecho. Es un ejemplo de carga, cuando el bien está sujeto a un juicio de sucesión por herencia.
        <br>Una forma simple y en palabras comunes de señalar la diferencia entre gravámenes y cargas de un inmueble, es la siguiente: 
        el gravamen puede generar una eventual venta forzosa del inmueble, y la carga no.
        En el Certificado Registral Inmobiliario o CRI del correspondiente bien inmueble, puedes hacer la respectiva consulta. 
        Dicho documento presenta un reglón especial, donde puedes observar los gravámenes y cargas inscritos a la fecha. Por supuesto, 
        en caso que el bien se encuentre libre de impedimentos, lo que jurídicamente se conoce como realengo, dicho renglón aparecerá vacío.`
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: `- se encuentra sujeto a cargas, gravámenes y afecciones. En concreto a: id-unid-8_opA_1, en favor de id-unid-8_opA_2;`,
          // tslint:disable-next-line:max-line-length
          replacement: `- se encuentra sujeto a cargas, gravámenes y afecciones. En concreto a: id-unid-8_opA_1, en favor de id-unid-8_opA_2;`,
          extraReplacements: [],
          radioId: 'id-unid-8_opA',
          identifier: 'id-unid-8_opA',
          checked: true,
          subSteps: [
            {
              question: 'Tipo de carga, gravamen o afección real:',
              placeholder: 'P. ej: hipoteca, usufructo',
              wordToReplace: 'id-unid-8_opA_1',
              identifier: 'id-unid-8_opA_1',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                // tslint:disable-next-line:max-line-length
                value: `En el Certificado Registral Inmobiliario o CRI del correspondiente bien inmueble, puedes hacer la respectiva consulta. 
                Dicho documento presenta un reglón especial, donde puedes observar los gravámenes y cargas inscritos a la fecha. Por supuesto, 
                en caso que el bien se encuentre libre de impedimentos, lo que jurídicamente se conoce como realengo, dicho renglón aparecerá vacío.`
              },
              rules: [],
            },
            {
              question: 'Nombre completo o denominación de la persona o la entidad en cuyo favor se formula la carga, gravamen o afección real:',
              placeholder: 'P. ej: Alberto Pérez Álvarez; Banco Santander.',
              wordToReplace: 'id-unid-8_opA_2',
              identifier: 'id-unid-8_opA_2',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ``
              },
              rules: [],
            },
          ]
        },
        {
          label: 'No',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: `- se encuentra libre de cualesquiera cargas, gravámenes y afecciones; y no existen préstamos, 
          hipotecas u otros derechos reales que graven el inmueble, y los que han existido con anterioridad, ya han sido cancelados.`,
          // tslint:disable-next-line:max-line-length
          replacement: `- se encuentra libre de cualesquiera cargas, gravámenes y afecciones; y no existen préstamos, 
          hipotecas u otros derechos reales que graven el inmueble, y los que han existido con anterioridad, ya han sido cancelados.`,
          extraReplacements: [],
          radioId: 'id-unid-8_opB',
          identifier: 'id-unid-8_opB',
          checked: true,
          subSteps: [
          ]
        },
      ],
    },
    {
      type: 'iRadioB',
      question: '¿El inmueble se encuentre sujeto a un procedimiento de recalificación urbanística o a un procedimiento sancionador administrativo?',
      identifier: 'id-unid-9',
      wordToReplace: 'id-unid-9',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: `El vendedor debe haber sido notificado por una administración local o autonómica sobre la modificación la situación 
        urbanística de la zona donde se sitúa el inmueble, como puede ser el inicio de un procedimiento de recalificación del tipo 
        del uso del suelo donde se sitúa el inmueble. Esta notificación debe haberse realizado antes de la venta.`,
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          replacementOriginal: `- que el inmueble se encuentra afecto a procesos de recalificación o modificación de parámetros de ordenación urbanística; y,`,
          replacement: `- que el inmueble se encuentra afecto a procesos de recalificación o modificación de parámetros de ordenación urbanística; y,`,
          radioId: 'id-unid-9_opA',
          identifier: 'id-unid-9_opA',
          extraReplacements: [
          ],
          checked: true,
        },
        {
          label: 'No',
          replacementOriginal: `- que el inmueble, no se encuentra afecto a procesos de recalificación o modificación de parámetros de ordenación urbanística.`,
          replacement: `- que el inmueble, no se encuentra afecto a procesos de recalificación o modificación de parámetros de ordenación urbanística.`,
          radioId: 'id-unid-9_opB',
          identifier: 'id-unid-9_opB',
          extraReplacements: [
          ],
          checked: false,
        },
      ]
    },
    {
      type: 'iRadioB',
      question: '¿El inmueble, o las obras que se han realizando en el mismo, cumplen con la normativa urbanística aplicable?',
      identifier: 'id-dec-10',
      wordToReplace: 'id-dec-10',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: `Seleccione únicamente NO si el vendedor conoce que se han realizado obras en el inmueble o llevado a cabo nuevas edificaciones sin 
        los permisos urbanísticos adecuados, o si el inmueble se construyó sin contar con los permisos pertinentes (p. ej. licencia de obras).
        <br> Si desea más información sobre esta figura consulte el siguiente enlace: 
        <a href="https://elderecho.com/cuestiones-practicas-a-considerar-en-la-compraventa-de-un-inmueble-la-due-diligence-inmobiliaria-ii" 
        target="_blank"><strong>Poder de representación</strong></a>',`,
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          replacementOriginal: `- que el inmueble, cumple, con la normativa urbanística vigente.`,
          replacement: `- que el inmueble, cumple, con la normativa urbanística vigente.`,
          radioId: 'id-dec-10_opA',
          identifier: 'id-dec-10_opA',
          extraReplacements: [
          ],
          checked: true,
        },
        {
          label: 'No',
          replacementOriginal: `- que el inmueble, no cumple con toda la normativa urbanística vigente.`,
          replacement: `- que el inmueble, no cumple con toda la normativa urbanística vigente.`,
          radioId: 'id-dec-10_opB',
          identifier: 'id-dec-10_opB',
          extraReplacements: [
          ],
          checked: false,
        },
      ]
    },
    {
      type: 'iRadioC',
      question: '¿El inmueble forma parte de una Comunidad de Propietarios?',
      identifier: 'id-dec-11',
      wordToReplace: 'id-dec-11',
      defaultRadioId: 'id-dec-11_opA',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: `Por ejemplo, cuando vivimos en un bloque de pisos formamos parte de una Comunidad de Propietarios.
        Con ella nos referimos al conjunto de propietarios que si bien tienen la propiedad exclusiva de una vivienda o
        local, también son copropietarios  en otra serie de elementos que son comunes a todos los integrantes, (jardines, terrazas, escaleras, pasillos, etc).`
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: `id-dec-11_opA_1`,
          // tslint:disable-next-line:max-line-length
          replacement: `id-dec-11_opA_1`,
          extraReplacements: [],
          radioId: 'id-dec-11_opA',
          identifier: 'id-dec-11_opA',
          checked: true,
          subSteps: [
            {
              type: 'iRadioC',
              question: '¿Hay recibos o cuotas debidas del inmueble a la Comunidad de Propietarios?',
              identifier: 'id-dec-11_opA_1',
              wordToReplace: 'id-dec-11_opA_1',
              defaultRadioId: 'id-dec-11_opA_1_opA',
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ``
              },
              replacement: '',
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'Sí',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `Que la parte VENDEDORA ha puesto en conocimiento de la parte COMPRADORA que existe una deuda 
                  pendiente de pago con la Comunidad de Propietarios que asciende a un total de iddec11opA1opA1-precioAletras ( id-dec-11_opA_1_opA_1 €) 
                  Esto será confirmado, en el momento de elevar este contrato a escritura pública, mediante la entrega del certificado correspondiente.`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `Que la parte VENDEDORA ha puesto en conocimiento de la parte COMPRADORA que existe una deuda 
                  pendiente de pago con la Comunidad de Propietarios que asciende a un total de iddec11opA1opA1-precioAletras ( id-dec-11_opA_1_opA_1 €) 
                  Esto será confirmado, en el momento de elevar este contrato a escritura pública, mediante la entrega del certificado correspondiente.`,
                  extraReplacements: [],
                  radioId: 'id-dec-11_opA_1_opA',
                  identifier: 'id-dec-11_opA_1_opA',
                  checked: true,
                  subSteps: [
                    {
                      question: 'Suma de todos los recibos o cuotas de la comunidad debidos, según figura en el  certificado de deudas con la comunidad emitido por el secretario de la comunidad de propietarios,',
                      placeholder: 'Numero mayor que 0',
                      wordToReplace: 'id-dec-11_opA_1_opA_1',
                      identifier: 'id-dec-11_opA_1_opA_1',
                      type: 'iNumber',
                      replacement: '',
                      extraReplacements: [],
                      rules: [
                        {
                          condition: false,
                          rulename: 'extraReplacementToCharacter',
                          identifier: 'iddec11opA1opA1-precioAletras',
                          wordToReplace: 'iddec11opA1opA1-precioAletras',
                          replacement: ''
                        }
                      ],
                      indications: {
                        areIndications: true,
                        indicationsType: 'outsideText',
                        value: `Suma de todos los recibos o cuotas de la comunidad debidos, según figura en el 
                        certificado de deudas con la comunidad emitido por el secretario de la comunidad de propietarios,`
                      },
                    },
                  ]
                },
                {
                  label: 'No',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `Junto con el presente contrato la parte VENDEDORA entrega a la parte COMPRADORA certificado expedido 
                  por la Comunidad de Propietarios que acredita, que el inmueble objeto de compraventa se encuentra al corriente de todos los 
                  pagos o cuotas de la Comunidad de Propietarios, no existiendo deuda alguna con ésta.`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `Junto con el presente contrato la parte VENDEDORA entrega a la parte COMPRADORA certificado expedido 
                  por la Comunidad de Propietarios que acredita, que el inmueble objeto de compraventa se encuentra al corriente de todos los 
                  pagos o cuotas de la Comunidad de Propietarios, no existiendo deuda alguna con ésta.`,
                  extraReplacements: [],
                  radioId: 'id-dec-11_opA_1_opB',
                  identifier: 'id-dec-11_opA_1_opB',
                  checked: true,
                  subSteps: [
                  ]
                },
              ],
            },
          ]
        },
        {
          label: 'No',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: ``,
          // tslint:disable-next-line:max-line-length
          replacement: ``,
          extraReplacements: [],
          radioId: 'id-dec-11_opB',
          identifier: 'id-dec-11_opB',
          checked: true,
          subSteps: [
          ]
        },
      ],
    },
    {
      type: 'iRadioC',
      question: 'La compraventa se realiza bajo una o varias condiciones:',
      identifier: 'id-dec-12',
      wordToReplace: 'id-dec-12',
      defaultRadioId: 'id-dec-12_opA',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: `Cuando hablamos de condición nos referimos a si la entrega del bien a cambio del precio  se 
        realizará bajo la condición de que tenga lugar un acontecimiento (por ejemplo, que le sea concedido un 
          préstamo al comprador), de manera que si este acondecimiento no ocurre, el vendedro no estará 
          obligado a entregar el bien y el comprador no estará obligado al pago`
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: `La formalización del presente contrato, según lo previsto en el artículo 1114 del Código Civil depende del cumplimiento de las siguientes condiciones:
          id-dec-12_opA_1. La parte COMPRADORA se compromete a informar LA VENDEDORA en un plazo de siete (7) días naturales acerca del incumplimiento de alguna de las condiciones anteriores.
          A través del presente contrato se perfecciona el acto de compraventa entre la parte COMPRADORA y la VENDEDORA; sin embargo, el nacimiento de las obligaciones derivadas de este, 
          así como sus efectos, se suspenden hasta que se cumplan las condiciones anteriormente señaladas.`,
          // tslint:disable-next-line:max-line-length
          replacement: `La formalización del presente contrato, según lo previsto en el artículo 1114 del Código Civil depende del cumplimiento de las siguientes condiciones:
          id-dec-12_opA_1. La parte COMPRADORA se compromete a informar LA VENDEDORA en un plazo de siete (7) días naturales acerca del incumplimiento de alguna de las condiciones anteriores.
          A través del presente contrato se perfecciona el acto de compraventa entre la parte COMPRADORA y la VENDEDORA; sin embargo, el nacimiento de las obligaciones derivadas de este, 
          así como sus efectos, se suspenden hasta que se cumplan las condiciones anteriormente señaladas.`,
          extraReplacements: [],
          radioId: 'id-dec-12_opA',
          identifier: 'id-dec-12_opA',
          checked: true,
          subSteps: [
            {
              question: 'Condiciones necesarias para que la compraventa tenga lugar:',
              wordToReplace: 'id-dec-12_opA_1',
              identifier: 'id-dec-12_opA_1',
              placeholder: `- obtención por el comprador de un préstamo de 100.000 euros con un tipo de interés del 2% y pagadero en 15 años; - verificación del valor de mercado del inmueble mediante perito; `,
              type: 'iText',
              subType: 'textarea',
              replacement: '',
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                value: `Las condiciones no pueden depender de la exclusiva voluntad de una de las partes, ser imposibles o contrarias a la legislación vigente.`,
              }
            },
          ]
        },
        {
          label: 'No',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: `En este acto tiene lugar la entrega o recepción del inmueble 
          objeto de compraventa, así como el pago del mismo, quedando perfeccionado el presente contrato.`,
          // tslint:disable-next-line:max-line-length
          replacement: `En este acto tiene lugar la entrega o recepción del inmueble 
          objeto de compraventa, así como el pago del mismo, quedando perfeccionado el presente contrato.`,
          extraReplacements: [],
          radioId: 'id-dec-12_opB',
          identifier: 'id-dec-12_opB',
          checked: true,
          subSteps: [
          ]
        },
      ],
    },
    {
      question: 'Precio del inmueble en euros sin incluir el IVA:',
      placeholder: 'Numero mayor que 0',
      wordToReplace: 'id-dec-13',
      identifier: 'id-dec-13',
      type: 'iNumber',
      replacement: '',
      extraReplacements: [],
      rules: [
        {
          condition: false,
          rulename: 'extraReplacementToCharacter',
          identifier: 'iddec13-precioAletras',
          wordToReplace: 'iddec13-precioAletras',
          replacement: ''
        }
      ],
      indications: {
        areIndications: false,
        indicationsType: '',
        value: ``
      },
    },
    {
      type: 'iRadioC',
      question: 'El pago',
      identifier: 'id-dec-14',
      wordToReplace: 'id-dec-14',
      defaultRadioId: 'id-dec-14_opA',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: `El período por el que se aplaza el pago es importante de cara a determinar el régimen jurídico aplicable al contrato de compraventa.`
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'tiene lugar en totalidad al momento de firmar el contrato',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: `En el momento de la firma del presente contrato la parte COMPRADORA entrega a la VENDEDORA el precio total 
          de compraventa establecido, sirviendo el presente contrato como la más formal y fiel carta de pago.`,
          // tslint:disable-next-line:max-line-length
          replacement: `En el momento de la firma del presente contrato la parte COMPRADORA entrega a la VENDEDORA el precio total 
          de compraventa establecido, sirviendo el presente contrato como la más formal y fiel carta de pago.`,
          extraReplacements: [],
          radioId: 'id-dec-14_opA',
          identifier: 'id-dec-14_opA',
          checked: true,
          subSteps: [
          ]
        },
        {
          label: 'tiene lugar en totalidad al momento de la entrega del bien o de los bienes',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: `El pago del precio de compraventa tendrá lugar en el momento de entrega del inmueble id-dec-14_opB_1`,
          // tslint:disable-next-line:max-line-length
          replacement: `El pago del precio de compraventa tendrá lugar en el momento de entrega del inmueble id-dec-14_opB_1`,
          extraReplacements: [],
          radioId: 'id-dec-14_opB',
          identifier: 'id-dec-14_opB',
          checked: true,
          subSteps: [
            {
              type: 'iRadioC',
              question: 'Forma de pago del inmueble:',
              identifier: 'id-dec-14_opB_1',
              wordToReplace: 'id-dec-14_opB_1',
              defaultRadioId: 'id-dec-14_opB_1_opA',
              replacement: '',
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'Ingreso o transferencia bancaria:',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `mediante ingreso o transferencia bancaria al siguiente número 
                  de cuenta (IBAN): id-dec-14_opB_1_opA_2 de la entidad: id-dec-14_opB_1_opA_1, y cuyo titular es: id-dec-14_opB_1_opA_3. 
                  Sirva el comprobante de ingreso o transferencia como fiel carta del pago.`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `mediante ingreso o transferencia bancaria al siguiente número 
                  de cuenta (IBAN): id-dec-14_opB_1_opA_2 de la entidad: id-dec-14_opB_1_opA_1, y cuyo titular es: id-dec-14_opB_1_opA_3. 
                  Sirva el comprobante de ingreso o transferencia como fiel carta del pago.`,
                  extraReplacements: [],
                  radioId: 'id-dec-14_opB_1_opA',
                  identifier: 'id-dec-14_opB_1_opA',
                  checked: true,
                  subSteps: [
                    {
                      question: 'Nombre del banco de la cuenta donde se realiza el pago del alquiler:',
                      placeholder: 'Ej. BBVA',
                      wordToReplace: 'id-dec-14_opB_1_opA_1',
                      identifier: 'id-dec-14_opB_1_opA_1',
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
                      wordToReplace: 'id-dec-14_opB_1_opA_2',
                      identifier: 'id-dec-14_opB_1_opA_2',
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
                      wordToReplace: 'id-dec-14_opB_1_opA_3',
                      identifier: 'id-dec-14_opB_1_opA_3',
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
                  replacementOriginal: `mediante pago en efectivo.`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `mediante pago en efectivo.`,
                  extraReplacements: [],
                  radioId: 'id-dec-14_opB_1_opB',
                  identifier: 'id-dec-14_opB_1_opB',
                  checked: true,
                  subSteps: [
                  ]
                },
                {
                  label: 'otro',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `de la siguiente forma: id-dec-14_opB_1_opC_1.`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `de la siguiente forma: id-dec-14_opB_1_opC_1.`,
                  extraReplacements: [],
                  radioId: 'id-dec-14_opB_1_opC',
                  identifier: 'id-dec-14_opB_1_opC',
                  checked: true,
                  subSteps: [
                    {
                      question: `Especifique el método de pago mediante el cual el comprador pagará al 
                      vendedor el precio del inmueble que se desea vender:`,
                      placeholder: 'P. Ej. en bitcoin, mitad en efectivo',
                      wordToReplace: 'id-dec-14_opB_1_opC_1',
                      identifier: 'id-dec-14_opB_1_opC_1',
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
          ]
        },
        {
          label: 'tiene lugar en totalidad en una fecha determinada posterior',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: `El Comprador se compromete a satisfacer su obligación 
          de pago en un plazo de id-dec-14_opC_new1 desde la fecha de firma de este contrato. El pago será realizado id-dec-14_opC_1`,
          // tslint:disable-next-line:max-line-length
          replacement: ``,
          extraReplacements: [],
          radioId: 'id-dec-14_opC',
          identifier: 'id-dec-14_opC',
          checked: true,
          subSteps: [
            {
              question: `Plazo desde la firma de este contrato de compraventa en 
              el que el comprador debe pagar la totalidad del precio:`,
              placeholder: 'P. Ej. 15 días, 3 semanas, 1 mes',
              wordToReplace: 'id-dec-14_opC_new1',
              identifier: 'id-dec-14_opC_new1',
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
              question: 'Forma de pago del inmueble:',
              identifier: 'id-dec-14_opC_1',
              wordToReplace: 'id-dec-14_opC_1',
              defaultRadioId: 'id-dec-14_opC_1_opA',
              replacement: '',
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'Ingreso o transferencia bancaria:',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `mediante ingreso o transferencia bancaria al siguiente número 
                  de cuenta (IBAN): id-dec-14_opC_1_opA_2 de la entidad: id-dec-14_opC_1_opA_1, y cuyo titular es: id-dec-14_opC_1_opA_3. 
                  Sirva el comprobante de ingreso o transferencia como fiel carta del pago.`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `mediante ingreso o transferencia bancaria al siguiente número 
                  de cuenta (IBAN): id-dec-14_opC_1_opA_2 de la entidad: id-dec-14_opC_1_opA_1, y cuyo titular es: id-dec-14_opC_1_opA_3. 
                  Sirva el comprobante de ingreso o transferencia como fiel carta del pago.`,
                  extraReplacements: [],
                  radioId: 'id-dec-14_opC_1_opA',
                  identifier: 'id-dec-14_opC_1_opA',
                  checked: true,
                  subSteps: [
                    {
                      question: 'Nombre del banco de la cuenta donde se realiza el pago del alquiler:',
                      placeholder: 'Ej. BBVA',
                      wordToReplace: 'id-dec-14_opC_1_opA_1',
                      identifier: 'id-dec-14_opC_1_opA_1',
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
                      wordToReplace: 'id-dec-14_opC_1_opA_2',
                      identifier: 'id-dec-14_opC_1_opA_2',
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
                      wordToReplace: 'id-dec-14_opC_1_opA_3',
                      identifier: 'id-dec-14_opC_1_opA_3',
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
                  replacementOriginal: `mediante pago en efectivo.`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `mediante pago en efectivo.`,
                  extraReplacements: [],
                  radioId: 'id-dec-14_opC_1_opB',
                  identifier: 'id-dec-14_opC_1_opB',
                  checked: true,
                  subSteps: [
                  ]
                },
                {
                  label: 'otro',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `de la siguiente forma: id-dec-14_opC_1_opC_1.`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `de la siguiente forma: id-dec-14_opC_1_opC_1.`,
                  extraReplacements: [],
                  radioId: 'id-dec-14_opC_1_opC',
                  identifier: 'id-dec-14_opC_1_opC',
                  checked: true,
                  subSteps: [
                    {
                      question: `Especifique el método de pago mediante el cual el comprador pagará al 
                      vendedor el precio del inmueble que se desea vender:`,
                      placeholder: 'P. Ej. en bitcoin, mitad en efectivo',
                      wordToReplace: 'id-dec-14_opC_1_opC_1',
                      identifier: 'id-dec-14_opC_1_opC_1',
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
          ]
        },
        {
          label: 'tiene lugar de forma aplazada durante un período inferior o igual a tres meses',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: `En este momento la parte COMPRADORA entrega a la parte VENDEDORA 
          la cantidad de iddec14opDnew1-precioAletras ( id-dec-14_opD_new1 €), sirva este documento como la 
          más formal y solemne carta de pago que en derecho corresponda. La cantidad restante 
          se satisfará en los plazos y según las condiciones siguientes: id-dec-14_opD_new2.
          Por este aplazamiento, se devengarán intereses al tipo del iddec14opDnew3-precioAletras (id-dec-14_opD_new3) por ciento de interés anual.
          El impago de cualquier cuota, dará lugar a la resolución del presente contrato de compraventa, 
          pudiendo en tal caso la parte vendedora recuperar la propiedad y dominio de la finca transmitida. 
          El pago será realizado id-dec-14_opD_1`,
          // tslint:disable-next-line:max-line-length
          replacement: ``,
          extraReplacements: [],
          radioId: 'id-dec-14_opD',
          identifier: 'id-dec-14_opD',
          checked: true,
          subSteps: [
            {
              question: 'Cantidad del precio (en euros) de los bienes que es desembolsada por el comprador al momento de firmar este contrato:',
              placeholder: 'Numero mayor que 0',
              wordToReplace: 'id-dec-14_opD_new1',
              identifier: 'id-dec-14_opD_new1',
              type: 'iNumber',
              replacement: '',
              extraReplacements: [],
              rules: [
                {
                  condition: false,
                  rulename: 'extraReplacementToCharacter',
                  identifier: 'iddec14opDnew1-precioAletras',
                  wordToReplace: 'iddec14opDnew1-precioAletras',
                  replacement: ''
                }
              ],
              indications: {
                areIndications: false,
                indicationsType: '',
                value: ``
              },
            },
            {
              question: `Describa aquí los plazos de pago del precio del o los bienes, es decir, 
              como se deberá repartir este. No es necesario que incluya la cantidad desembolsada 
              al momento de firmar o concluir este contrato, ya que esta ya fue mencionada en la pregunta anterior.`,
              placeholder: '',
              wordToReplace: 'id-dec-14_opD_new2',
              identifier: 'id-dec-14_opD_new2',
              type: 'iText',
              subType: 'textarea',
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
              question: 'Tipo de interés anual que se aplica al precio del bien o de los bienes como consecuencia del aplazamiento de su pago:',
              placeholder: 'Numero mayor que 0',
              wordToReplace: 'id-dec-14_opD_new3',
              identifier: 'id-dec-14_opD_new3',
              type: 'iNumber',
              replacement: '',
              extraReplacements: [],
              rules: [
                {
                  condition: false,
                  rulename: 'extraReplacementAletras',
                  identifier: 'iddec14opDnew3-precioAletras',
                  wordToReplace: 'iddec14opDnew3-precioAletras',
                  replacement: ''
                }
              ],
              indications: {
                areIndications: false,
                indicationsType: '',
                value: ``
              },
            },
            {
              type: 'iRadioC',
              question: 'Forma de pago del inmueble:',
              identifier: 'id-dec-14_opD_1',
              wordToReplace: 'id-dec-14_opD_1',
              defaultRadioId: 'id-dec-14_opD_1_opA',
              replacement: '',
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'Ingreso o transferencia bancaria:',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `mediante ingreso o transferencia bancaria al siguiente número 
                  de cuenta (IBAN): id-dec-14_opD_1_opA_2 de la entidad: id-dec-14_opD_1_opA_1, y cuyo titular es: id-dec-14_opD_1_opA_3. 
                  Sirva el comprobante de ingreso o transferencia como fiel carta del pago.`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `mediante ingreso o transferencia bancaria al siguiente número 
                  de cuenta (IBAN): id-dec-14_opD_1_opA_2 de la entidad: id-dec-14_opD_1_opA_1, y cuyo titular es: id-dec-14_opD_1_opA_3. 
                  Sirva el comprobante de ingreso o transferencia como fiel carta del pago.`,
                  extraReplacements: [],
                  radioId: 'id-dec-14_opD_1_opA',
                  identifier: 'id-dec-14_opD_1_opA',
                  checked: true,
                  subSteps: [
                    {
                      question: 'Nombre del banco de la cuenta donde se realiza el pago del alquiler:',
                      placeholder: 'Ej. BBVA',
                      wordToReplace: 'id-dec-14_opD_1_opA_1',
                      identifier: 'id-dec-14_opD_1_opA_1',
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
                      wordToReplace: 'id-dec-14_opD_1_opA_2',
                      identifier: 'id-dec-14_opD_1_opA_2',
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
                      wordToReplace: 'id-dec-14_opD_1_opA_3',
                      identifier: 'id-dec-14_opD_1_opA_3',
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
                  replacementOriginal: `mediante pago en efectivo.`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `mediante pago en efectivo.`,
                  extraReplacements: [],
                  radioId: 'id-dec-14_opD_1_opB',
                  identifier: 'id-dec-14_opD_1_opB',
                  checked: true,
                  subSteps: [
                  ]
                },
                {
                  label: 'otro',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `de la siguiente forma: id-dec-14_opD_1_opC_1.`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `de la siguiente forma: id-dec-14_opD_1_opC_1.`,
                  extraReplacements: [],
                  radioId: 'id-dec-14_opD_1_opC',
                  identifier: 'id-dec-14_opD_1_opC',
                  checked: true,
                  subSteps: [
                    {
                      question: `Especifique el método de pago mediante el cual el comprador pagará al 
                      vendedor el precio del inmueble que se desea vender:`,
                      placeholder: 'P. Ej. en bitcoin, mitad en efectivo',
                      wordToReplace: 'id-dec-14_opD_1_opC_1',
                      identifier: 'id-dec-14_opD_1_opC_1',
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
          ]
        },
        {
          label: 'tiene lugar de forma aplazada durante un período superior a tres meses',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: `El precio de compraventa se ha fijado conforme al de tasación del inmueble, que se ha realizado previo a la formalización del presente contrato.
          La parte COMPRADORA entrega a la parte VENDEDORA de la cantidad de iddec14opEnew1-precioAletras ( id-dec-14_opE_new1 €), sirva este documento como la más formal y solemne 
          carta de pago que en derecho corresponda. La cantidad restante será pagada en los id-dec-14_opE_new2 plazos anuales señalados 
          y respetando las condiciones establecidas a continuación: id-dec-14_opE_new8.
          Por este aplazamiento, se devengarán intereses al tipo de interés nominal, es decir, se aplicará un recargo de id-dec-14_opE_new4 por ciento de interés anual. 
          En caso de impago de cualquier importe, ya sea de intereses, o de principal, por la parte COMPRADORA, la parte VENDEDORA podrá optar entre exigir la deuda pendiente, 
          a la que se sumarán los intereses de demora correspondientes, o bien, podrá optar por la resolución del presente contrato de compraventa, pudiendo en tal caso recuperar 
          la propiedad y dominio de la finca transmitida, y  devolviendo los importes recibidos a la parte COMPRADORA.
          El pago será realizado id-dec-14_opE_1`,
          // tslint:disable-next-line:max-line-length
          replacement: ``,
          extraReplacements: [],
          radioId: 'id-dec-14_opE',
          identifier: 'id-dec-14_opE',
          checked: true,
          subSteps: [
            {
              question: 'Cantidad del precio (en euros) de los bienes que es desembolsada por el comprador al momento de firmar este contrato:',
              placeholder: 'Numero mayor que 0',
              wordToReplace: 'id-dec-14_opE_new1',
              identifier: 'id-dec-14_opE_new1',
              type: 'iNumber',
              replacement: '',
              extraReplacements: [],
              rules: [
                {
                  condition: false,
                  rulename: 'extraReplacementToCharacter',
                  identifier: 'iddec14opEnew1-precioAletras',
                  wordToReplace: 'iddec14opEnew1-precioAletras',
                  replacement: ''
                }
              ],
              indications: {
                areIndications: false,
                indicationsType: '',
                value: ``
              },
            },
            {
              question: `Número de plazos anuales en los que el comprador debe pagar la cantidad aplazada`,
              placeholder: 'Escriba un número mayor que 0',
              wordToReplace: 'id-dec-14_opE_new2',
              identifier: 'id-dec-14_opE_new2',
              type: 'iNumber',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                // tslint:disable-next-line:max-line-length
                value: `Indique aquí el número de plazos anuales en los que el comprador debe pagar 
                la cantidad aplazada. Por ejemplo, si el comprador debe pagar todos los meses un 
                plazo de la cantidad aplazada, el número de plazos anuales será 12.`
              },
              rules: [
              ],
            },
            {
              question: `Describa los plazos de pago del precio del o los bienes 
              (excluida la cantidad desembolsada al momento de firmar este contrato):`,
              placeholder: '- En un plazo máximo de 30 días, deberá pagar 300 euros. En un plazo máximo de 60 días, deberá pagar los 200 euros restantes',
              wordToReplace: 'id-dec-14_opE_new8',
              identifier: 'id-dec-14_opE_new8',
              type: 'iText',
              subType: 'textarea',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                // tslint:disable-next-line:max-line-length
                value: `Describa aquí los plazos de pago del precio del o los bienes, 
                es decir, como se deberá repartir este. No es necesario que incluya 
                la cantidad desembolsada al momento de firmar o concluir este contrato, 
                ya que esta ya fue mencionada en la pregunta anterior.`
              },
              rules: [],
            },
            {
              question: 'Tipo de interés anual que se aplica al precio del bien o de los bienes como consecuencia del aplazamiento de su pago:',
              placeholder: 'Numero mayor que 0',
              wordToReplace: 'id-dec-14_opE_new4',
              identifier: 'id-dec-14_opE_new4',
              type: 'iNumber',
              replacement: '',
              extraReplacements: [],
              rules: [
                {
                  condition: false,
                  rulename: 'extraReplacementAletras',
                  identifier: 'iddec14opEnew4-precioAletras',
                  wordToReplace: 'iddec14opEnew4-precioAletras',
                  replacement: ''
                }
              ],
              indications: {
                areIndications: false,
                indicationsType: '',
                value: ``
              },
            },
            {
              type: 'iRadioC',
              question: 'Forma de pago del inmueble:',
              identifier: 'id-dec-14_opE_1',
              wordToReplace: 'id-dec-14_opE_1',
              defaultRadioId: 'id-dec-14_opE_1_opA',
              replacement: '',
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'Ingreso o transferencia bancaria:',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `mediante ingreso o transferencia bancaria al siguiente número 
                  de cuenta (IBAN): id-dec-14_opE_1_opA_2 de la entidad: id-dec-14_opE_1_opA_1, y cuyo titular es: id-dec-14_opE_1_opA_3. 
                  Sirva el comprobante de ingreso o transferencia como fiel carta del pago.`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `mediante ingreso o transferencia bancaria al siguiente número 
                  de cuenta (IBAN): id-dec-14_opE_1_opA_2 de la entidad: id-dec-14_opE_1_opA_1, y cuyo titular es: id-dec-14_opE_1_opA_3. 
                  Sirva el comprobante de ingreso o transferencia como fiel carta del pago.`,
                  extraReplacements: [],
                  radioId: 'id-dec-14_opE_1_opA',
                  identifier: 'id-dec-14_opE_1_opA',
                  checked: true,
                  subSteps: [
                    {
                      question: 'Nombre del banco de la cuenta donde se realiza el pago del alquiler:',
                      placeholder: 'Ej. BBVA',
                      wordToReplace: 'id-dec-14_opE_1_opA_1',
                      identifier: 'id-dec-14_opE_1_opA_1',
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
                      wordToReplace: 'id-dec-14_opE_1_opA_2',
                      identifier: 'id-dec-14_opE_1_opA_2',
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
                      wordToReplace: 'id-dec-14_opE_1_opA_3',
                      identifier: 'id-dec-14_opE_1_opA_3',
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
                  replacementOriginal: `mediante pago en efectivo.`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `mediante pago en efectivo.`,
                  extraReplacements: [],
                  radioId: 'id-dec-14_opE_1_opB',
                  identifier: 'id-dec-14_opE_1_opB',
                  checked: true,
                  subSteps: [
                  ]
                },
                {
                  label: 'otro',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: `de la siguiente forma: id-dec-14_opE_1_opC_1.`,
                  // tslint:disable-next-line:max-line-length
                  replacement: `de la siguiente forma: id-dec-14_opE_1_opC_1.`,
                  extraReplacements: [],
                  radioId: 'id-dec-14_opE_1_opC',
                  identifier: 'id-dec-14_opE_1_opC',
                  checked: true,
                  subSteps: [
                    {
                      question: `Especifique el método de pago mediante el cual el comprador pagará al 
                      vendedor el precio del inmueble que se desea vender:`,
                      placeholder: 'P. Ej. en bitcoin, mitad en efectivo',
                      wordToReplace: 'id-dec-14_opE_1_opC_1',
                      identifier: 'id-dec-14_opE_1_opC_1',
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
          ]
        },
      ],
    },
    {
      type: 'iRadioB',
      question: '¿Declara el comprador ser consciente del estado actual del bien inmueble?',
      identifier: 'id-dec-15',
      wordToReplace: 'id-dec-15',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: `Esta declaración expresa implica que el vendedor queda libre la obligación de responder por los vicios 
        o defectos ocultos que aparezcan en el bien durante un plazo de 6 meses desde la entrega del bien inmueble, 
        y sólo respondera únicamente los defectos causados por su dolo o mala fe.`,
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          replacementOriginal: `4.- Responder frente a la parte COMPRADORA por los vicios o defectos ocasionados 
          por su dolo o mala fe. La parte COMPRADORA declara expresamente haber reconocido el estado actual 
          del Inmueble dando su conformidad a este y liberando expresamente la parte VENDEDORA de cualquier tipo 
          de responsabilidad de saneamiento de los vicios ocultos que apareciesen en el futuro, y ello conforme a lo dispuesto en el artículo 1485 del Código Civil.`,
          replacement: `4.- Responder frente a la parte COMPRADORA por los vicios o defectos ocasionados 
          por su dolo o mala fe. La parte COMPRADORA declara expresamente haber reconocido el estado actual 
          del Inmueble dando su conformidad a este y liberando expresamente la parte VENDEDORA de cualquier tipo 
          de responsabilidad de saneamiento de los vicios ocultos que apareciesen en el futuro, y ello conforme a lo dispuesto en el artículo 1485 del Código Civil.`,
          radioId: 'id-dec-15_opA',
          identifier: 'id-dec-15_opA',
          extraReplacements: [
          ],
          checked: true,
        },
        {
          label: 'No',
          replacementOriginal: `4.- Responder frente a la parte COMPRADORA por los vicios o defectos del Inmueble, durante un plazo de seis meses desde su 
          entrega, y ello conforme a lo dispuesto en el artículo 1490 del Código Civil.`,
          replacement: `4.- Responder frente a la parte COMPRADORA por los vicios o defectos del Inmueble, durante un plazo de seis meses desde su entrega,
           y ello conforme a lo dispuesto en el artículo 1490 del Código Civil.`,
          radioId: 'id-dec-15_opB',
          identifier: 'id-dec-15_opB',
          extraReplacements: [
          ],
          checked: false,
        },
      ]
    },
    {
      type: 'iRadioC',
      question: 'En relación con las garantías del bien vendido:',
      identifier: 'id-dec-16',
      wordToReplace: 'id-dec-16',
      defaultRadioId: 'id-dec-16_opA',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: `La garantía de vicios ocultos consiste en la responsabilidad del vendedor de responder de todos aquellos defectos o fallos ocultos 
        de un bien que se hayan originado antes de la venta y que no hayan podido ser detectados por el comprador (p. ej existe un defecto en los 
          cimientos del inmueble que el comprador, dado sus conocimientos, no hubiera podido detectar).

        <br><br>La falta de conformidad del bien tendrá lugar en las situaciones en las que el bien entregado no se corresponda con las características 
        acordadas entre las partes. (p. ej. se hace entrega de un ordenador portátil que no se corresponde con las características que las partes 
          acordaron o que se recogen en el contrato). La falta de conformidad se podrá esgrimir en los contratos celebrados entre un profesional 
          y un cliente o consumidor (es decir, una persona que desea utilizar el bien para su uso personal), siempre que el comprador no hubiera 
          conocido de antemano la diferencia en las características, y que esta situación se produzca desde la entrega del bien, sin que 
          el comprador haya hecho modificación alguna en el mismo.`
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'El vendedor no otorga una garantía comercial adicional al comprador, además de sus obligaciones legales (en caso de vicios ocultos y de falta de conformidad)',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: ``,
          // tslint:disable-next-line:max-line-length
          replacement: ``,
          extraReplacements: [],
          radioId: 'id-dec-16_opA',
          identifier: 'id-dec-16_opA',
          checked: true,
          subSteps: [
          ]
        },
        {
          label: 'Además de sus obligaciones legales, el vendedor otorga una garantía comercial adicional al comprador',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: `La parte VENDEDORA otorgará una garantía comercial a la parte COMPRADORA. Esta garantía se aplicará en todo el territorio 
          español, y tendrá una duración de id-dec-16_opB_1 desde la entrega del Inmueble. La garantía se aplicará, en caso de utilización normal 
          siempre que éste no haya sido objeto de modificación alguna, y bajo las siguientes condiciones: id-dec-16_opB_2.`,
          // tslint:disable-next-line:max-line-length
          replacement: `La parte VENDEDORA otorgará una garantía comercial a la parte COMPRADORA. Esta garantía se aplicará en todo el territorio 
          español, y tendrá una duración de id-dec-16_opB_1 desde la entrega del Inmueble. La garantía se aplicará, en caso de utilización normal 
          siempre que éste no haya sido objeto de modificación alguna, y bajo las siguientes condiciones: id-dec-16_opB_2.`,
          extraReplacements: [],
          radioId: 'id-dec-16_opB',
          identifier: 'id-dec-16_opB',
          checked: true,
          subSteps: [
            {
              question: 'Plazo de duración de la garantía comercial adicional (desde la entrega del bien):',
              wordToReplace: 'id-dec-16_opB_1',
              identifier: 'id-dec-16_opB_1',
              placeholder: `P. ej: seis meses, un año`,
              type: 'iText',
              subType: 'textarea',
              replacement: '',
              indications: {
                areIndications: false,
                indicationsType: '',
                value: ``,
              }
            },
            {
              question: 'Describa aquí la garantía comercial adicional que el vendedor otorga al comprador:',
              wordToReplace: 'id-dec-16_opB_2',
              identifier: 'id-dec-16_opB_2',
              placeholder: ``,
              type: 'iText',
              subType: 'textarea',
              replacement: '',
              indications: {
                areIndications: false,
                indicationsType: '',
                value: ``,
              }
            },
          ]
        },
      ],
    },
    {
        type: 'end',
        identifier: 'end',
        wordToReplace: 'end',
        title: 'Contrato de alquiler',
        description: ``,
        checkoutProcess: {
          isInited: false,
          phase: 0
        }
    }
];

module.exports = steps;