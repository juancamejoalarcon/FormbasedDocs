const steps = [
  {
    type: 'start',
    title: 'Acta fundacional de asociación',
    description: `El Acta Fundacional de una Asociación es el documento en el que los fundadores exponen su voluntad de constituir una asociación.`,
    isCurrentStep: true
  },
  {
    type: 'iForEach',
    value: 1,
    min: 1,
    max: 30,
    replacement: '',
    identifier: 'id-unid-3',
    wordToReplace: 'id-unid-3',
    question: '¿Cuántos promotores firmarán el acta?:',
    indications: {
      areIndications: true,
      indicationsType: 'outsideText',
      value: `Indique el número de promotores que firmarán el acta.`,
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
            question: 'El promotor ->(index) es:',
            questionOriginal: 'El promotor ->(index) es:',
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
                    question: 'El promotor para realizar el contrato, actúa:',
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
                        replacementOriginal: 'id-unid-3_1_opA_1_opA_1, mayor de edad, de nacionalidad id-unid-3_1_opA_1_opA_9, y con domicilio en id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1_opA_4, y actuando en su propio nombre y representación.',
                        // tslint:disable-next-line:max-line-length
                        replacement: 'id-unid-3_1_opA_1_opA_1, mayor de edad, de nacionalidad id-unid-3_1_opA_1_opA_9, y con domicilio en id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1_opA_4, y actuando en su propio nombre y representación.',
                        extraReplacements: [],
                        checked: true,
                        subSteps: [
                          {
                            question: 'Nombre completo del promotor, incluyendo los apellidos:',
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
                            question: 'Nacionalidad del promotor:',
                            wordToReplace: 'id-unid-3_1_opA_1_opA_9',
                            identifier: 'id-unid-3_1_opA_1_opA_9',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej. española',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Indique la nacionalidad.',
                            },
                          },
                          {
                            question: 'Dirección del lugar donde reside el promotor:',
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
                            question: 'Tipo de documento de identificación del promotor:',
                            identifier: 'id-unid-3_1_opA_1_opA_3',
                            wordToReplace: 'id-unid-3_1_opA_1_opA_3',
                            indications: {
                              areIndications: true,
                              indicationsType: 'outsideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Seleccione el tipo de documento de identificación del promotor',
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
                        replacementOriginal: 'id-unid-3_1_opA_1_opB_5, mayor de edad, de nacionalidad id-unid-3_1_opA_1_opB_new9, con domicilio en id-unid-3_1_opA_1_opB_9, id-unid-3_1_opA_1_opB_6 número: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, de nacionalidad id-unid-3_1_opA_1_opB_new5, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.',
                        // tslint:disable-next-line:max-line-length
                        replacement: 'id-unid-3_1_opA_1_opB_5, mayor de edad, de nacionalidad id-unid-3_1_opA_1_opB_new9, con domicilio en id-unid-3_1_opA_1_opB_9, id-unid-3_1_opA_1_opB_6 número: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, de nacionalidad id-unid-3_1_opA_1_opB_new5, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.',
                        extraReplacements: [],
                        radioId: 'id-unid-3_1_opA_1_opB',
                        identifier: 'id-unid-3_1_opA_1_opB',
                        checked: false,
                        subSteps: [
                          {
                            question: 'Nombre completo del promotor, incluyendo los apellidos:',
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
                            question: 'Nacionalidad del promotor:',
                            wordToReplace: 'id-unid-3_1_opA_1_opB_new9',
                            identifier: 'id-unid-3_1_opA_1_opB_new9',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej. española',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Indique la nacionalidad.',
                            },
                          },
                          {
                            question: 'Dirección del lugar donde reside el promotor:',
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
                            question: 'Tipo de documento de identificación del promotor:',
                            identifier: 'id-unid-3_1_opA_1_opB_3',
                            wordToReplace: '3_1_opA_1_opB_3',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Seleccione el tipo de documento de identificación del promotor',
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
                            question: 'Nombre completo de la persona que firma este contrato en nombre y representación del promotor',
                            wordToReplace: 'id-unid-3_1_opA_1_opB_5',
                            identifier: 'id-unid-3_1_opA_1_opB_5',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej. Martino Montano Holguín',
                            indications: {
                              areIndications: true,
                              indicationsType: 'outsideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este promotor. El contrato puede ser firmado por un representante legal o voluntario. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
                            },
                          },
                          {
                            question: 'Nacionalidad del representante del promotor:',
                            wordToReplace: 'id-unid-3_1_opA_1_opB_new5',
                            identifier: 'id-unid-3_1_opA_1_opB_new5',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej. española',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Indique la nacionalidad.',
                            },
                          },
                          {
                            type: 'iRadioB',
                            // tslint:disable-next-line:max-line-length
                            question: 'Documento de identificación de la persona que firma el contrato en nombre y representación del promotor:',
                            identifier: 'id-unid-3_1_opA_1_opB_6',
                            wordToReplace: 'id-unid-3_1_opA_1_opB_6',
                            indications: {
                              areIndications: true,
                              indicationsType: 'outsideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación del promotor.',
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
                            question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del promotor',
                            wordToReplace: 'id-unid-3_1_opA_1_opB_8',
                            placeholder: 'P. ej. apoderado, representante legal',
                            identifier: 'id-unid-3_1_opA_1_opB_8',
                            type: 'iText',
                            replacement: '',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este promotor.',
                            },
                          },
                          {
                            // tslint:disable-next-line:max-line-length
                            question: 'Dirección del lugar donde reside la persona que firma este contrato en nombre y representación del promotor',
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
                    question: 'Nombre o razón social de esta persona jurídica promotora:',
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
                    question: 'Domicilio social completo de la persona jurídica promotora:',
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
                        replacementOriginal: ' id-unid-3_1_opB_5_1, mayor de edad, de nacionalidad id-unid-3_1_opB_5_9, con domicilio en id-unid-3_1_opB_5_2, id-unid-3_1_opB_5_3 núm. id-unid-3_1_opB_5_4, y en calidad de id-unid-3_1_opB_5_5; <br> <br>',
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
                            question: 'Nacionalidad del representante del promotor:',
                            wordToReplace: 'id-unid-3_1_opB_5_9',
                            identifier: 'id-unid-3_1_opB_5_9',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej. española',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Indique la nacionalidad.',
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
    "replacement": "",
    "identifier": "id-unid-0",
    "wordToReplace": "id-unid-0",
    "question": "Nombre que tiene la asociación y que es el mismo que consta en los Estatutos",
    "placeholder": "P. ej: Asociación de Usuarios de Bancos Cajas y Seguros",
    "type": "iText",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-1",
    "wordToReplace": "id-unid-1",
    "question": "Domicilio social completo de la asociación",
    "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
    "type": "iText",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) de la asociación. El domicilio de la asociación puede situarse en el lugar en el que desarrolle principalmente sus actividades, o en la sede de su órgano de representación."
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-2",
    "wordToReplace": "id-unid-2",
    "question": "Fines u objetivos principales para los que se constituye la asociación",
    "placeholder": "P.ej: 1. Proteger todas las especies de abejas que se encuentran en nuestra región.  2. Promover la creación de espacios de cuidado especializado para las abejas.  3. Incentivar la investigación y desarrollo en el cuidado y preservación de las abejas en peligro de extinción.",
    "type": "iText",
    "subType": "textarea",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Motivos e intereses que comparten las personas reunidas en torno a la asociación, o los resultados que quieren conseguir."
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-new3",
    "wordToReplace": "id-unid-new3",
    "question": "¿Cuánto va a durar la asociación?",
    "type": "iRadioC",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Duración indefinida",
        "replacement": "indefinida.",
        "replacementOriginal": "indefinida.",
        "radioId": "id-unid-new3_opA",
        "identifier": "id-unid-new3_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true
      },
      {
        "label": "Duración temporal",
        "replacement": "limitada, constituyéndose por el plazo de id-unid-new3_opB_0.",
        "replacementOriginal": "limitada, constituyéndose por el plazo de id-unid-new3_opB_0.",
        "radioId": "id-unid-new3_opB",
        "identifier": "id-unid-new3_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-new3_opB_0",
            "wordToReplace": "id-unid-new3_opB_0",
            "question": "Indica el plazo de duración de la asociación",
            "placeholder": "P.ej: 1 año y 60 días",
            "type": "iText",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        checked: false,
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-6",
    "wordToReplace": "id-unid-6",
    "question": "¿Quién ha sido elegido como Presidente de entre los promotores de la Asociación?",
    "placeholder": "P. ej. Martino Montano Holguín",
    "type": "iText",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-7",
    "wordToReplace": "id-unid-7",
    "question": "¿Quién ha sido elegido como Secretario de entre los promotores de la Asociación?",
    "placeholder": "P. ej. Martino Montano Holguín",
    "type": "iText",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-8",
    "wordToReplace": "id-unid-8",
    "question": "¿Conoce la hora de finalización de la reunión en la que se aprueba el acta fundacional de la asociación?",
    "type": "iRadioC",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Si",
        "replacement": "Y no habiendo más asuntos de que tratar, se levanta esta sesión siendo las id-unid-8_opA_0 horas de la que se extiende la presente acta funcional, que es firmada, en señal de aprobación, por todos los asistentes.",
        "replacementOriginal": "Y no habiendo más asuntos de que tratar, se levanta esta sesión siendo las id-unid-8_opA_0 horas de la que se extiende la presente acta funcional, que es firmada, en señal de aprobación, por todos los asistentes.",
        "radioId": "id-unid-8_opA",
        "identifier": "id-unid-8_opA",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-8_opA_0",
            "wordToReplace": "id-unid-8_opA_0",
            "question": "Hora de finalización de la reunión en la que se aprueba el acta fundacional de la asociación",
            "placeholder": "P. ej: 11:30",
            "type": "iText",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "No",
        "replacement": "Y no habiendo más asuntos de que tratar, se levanta esta sesión de la que se extiende la presente acta funcional, que es firmada, en señal de aprobación, por todos los asistentes.",
        "replacementOriginal": "Y no habiendo más asuntos de que tratar, se levanta esta sesión de la que se extiende la presente acta funcional, que es firmada, en señal de aprobación, por todos los asistentes.",
        "radioId": "id-unid-8_opB",
        "identifier": "id-unid-8_opB",
        "subSteps": [],
        "extraReplacements": [],
        checked: false,
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-9",
    "wordToReplace": "id-unid-9",
    "question": "Lugar (ciudad o población) donde se realiza y firma el acta:",
    "placeholder": "P. ej. Albacete",
    "type": "iText",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-10",
    "wordToReplace": "id-dec-10",
    "question": "Fecha en la que se firma el acta",
    "type": "iDate",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    }
  },
  {
    type: 'end',
    identifier: 'end',
    wordToReplace: 'end',
    title: 'Acta fundacional de asociación',
    description: `El Acta Fundacional de una Asociación es el documento en el que los fundadores exponen su voluntad de constituir una asociación.`,
    checkoutProcess: {
      isInited: false,
      phase: 0
    }
  }
];

module.exports = steps;