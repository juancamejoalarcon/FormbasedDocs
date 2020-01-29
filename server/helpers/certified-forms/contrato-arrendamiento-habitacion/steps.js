const steps = [
    {
      type: 'start',
      title: 'Contrato de arrendamiento de habitación',
      description: `Por medio de este contrato el propietario de una vivienda (persona o empresa) 
      cede el uso de una de las habitaciones a un particular (persona o empresa) durante un tiempo determinado 
      a cambio del pago de una renta`,
      isCurrentStep: true
    },
    // {
    //   type: 'iText',
    //   identifier: 'id-unid-1',
    //   wordToReplace: 'id-unid-1',
    //   replacement: '',
    //   question: 'Lugar (ciudad o población) donde se realiza y firma el contrato:',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'insideText',
    //     value: 'Indique aquí la localidad de celebración y firma del contrato.'
    //   },
    //   placeholder: 'P. ej. Albacete',
    //   mandatory: true,
    //   isFocused: false
    // },
    // {
    //   type: 'iDate',
    //   identifier: 'id-unid-2',
    //   wordToReplace: 'id-unid-2',
    //   replacement: '',
    //   question: 'Fecha en la que se firma el contrato:',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'insideText',
    //     value: 'Fecha en la que se firma el contrato',
    //   },
    //   mandatory: true,
    //   isFocused: false
    // },
    {
      type: 'iForEach',
      value: 1,
      min: 1,
      max: 10,
      replacement: '',
      identifier: 'id-unid-3',
      wordToReplace: 'id-unid-3',
      question: '¿Cuántas personas son propietarias de la vivienda en la que se encuentra la habitación que se va a alquilar? (Número de arrendadores):',
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
              question: 'La persona arrendadora (propietaria) es:',
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
                          value: 'La persona puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el la persona a la que representa quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank">Poder de representación</a>',
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
                            // {
                            //   question: 'Nombre completo del arrendador (propietario), incluyendo los apellidos:',
                            //   wordToReplace: 'id-unid-3_1_opA_1_opA_1',
                            //   identifier: 'id-unid-3_1_opA_1_opA_1',
                            //   type: 'iText',
                            //   replacement: '',
                            //   placeholder: 'P. ej. Martino Montano Holguín',
                            //   indications: {
                            //     areIndications: true,
                            //     indicationsType: 'insideText',
                            //     value: 'Indique el nombre completo, incluyendo sus dos apellidos.',
                            //   },
                            // },
                            // {
                            //   question: 'Dirección del lugar donde reside el arrendador (propietario):',
                            //   wordToReplace: 'id-unid-3_1_opA_1_opA_2',
                            //   identifier: 'id-unid-3_1_opA_1_opA_2',
                            //   placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                            //   type: 'iText',
                            //   replacement: '',
                            //   indications: {
                            //     areIndications: true,
                            //     indicationsType: 'insideText',
                            //     // tslint:disable-next-line:max-line-length
                            //     value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
                            //   },
                            // },
                            // {
                            //   type: 'iRadioB',
                            //   question: 'Tipo de documento de identificación del arrendador (propietario):',
                            //   identifier: 'id-unid-3_1_opA_1_opA_3',
                            //   wordToReplace: 'id-unid-3_1_opA_1_opA_3',
                            //   indications: {
                            //     areIndications: true,
                            //     indicationsType: 'outsideText',
                            //     // tslint:disable-next-line:max-line-length
                            //     value: 'Seleccione el tipo de documento de identificación del propietario',
                            //   },
                            //   replacement: '',
                            //   radios: [
                            //     {
                            //       label: 'DNI',
                            //       replacementOriginal: 'DNI',
                            //       replacement: '',
                            //       radioId: 'id-unid-3_1_opA_1_opA_3_opA',
                            //       identifier: 'id-unid-3_1_opA_1_opA_3_opA',
                            //       extraReplacements: [],
                            //       checked: true,
                            //     },
                            //     {
                            //       label: 'NIE',
                            //       replacementOriginal: 'NIE',
                            //       replacement: '',
                            //       radioId: 'id-unid-3_1_opA_1_opA_3_opB',
                            //       identifier: 'id-unid-3_1_opA_1_opA_3_opB',
                            //       extraReplacements: [],
                            //       checked: false,
                            //     },
                            //     {
                            //       label: 'Pasaporte',
                            //       replacementOriginal: 'Pasaporte',
                            //       replacement: '',
                            //       radioId: 'id-unid-3_1_opA_1_opA_3_opC',
                            //       identifier: 'id-unid-3_1_opA_1_opA_3_opC',
                            //       extraReplacements: [],
                            //       checked: false,
                            //     }
                            //   ]
                            // },
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
                            replacementOriginal: 'id-unid-3_1_opA_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opA_1_opB_9, id-unid-3_1_opA_1_opB_6 número: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, y actuando, en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.',
                            // tslint:disable-next-line:max-line-length
                            replacement: 'id-unid-3_1_opA_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opA_1_opB_9, id-unid-3_1_opA_1_opB_6 número: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, y actuando, en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.',
                            extraReplacements: [],
                            radioId: 'id-unid-3_1_opA_1_opB',
                            identifier: 'id-unid-3_1_opA_1_opB',
                            checked: false,
                            subSteps: [
                              // {
                              //   question: 'Nombre completo del arrendador (propietario), incluyendo los apellidos:',
                              //   wordToReplace: 'id-unid-3_1_opA_1_opB_1',
                              //   identifier: 'id-unid-3_1_opA_1_opB_1',
                              //   type: 'iText',
                              //   replacement: '',
                              //   placeholder: 'P. ej. Martino Montano Holguín',
                              //   indications: {
                              //     areIndications: true,
                              //     indicationsType: 'insideText',
                              //     value: 'Indique el nombre completo, incluyendo sus dos apellidos.',
                              //   },
                              // },
                              // {
                              //   question: 'Dirección del lugar donde reside el arrendador (propietario):',
                              //   wordToReplace: 'id-unid-3_1_opA_1_opB_2',
                              //   identifier: 'id-unid-3_1_opA_1_opB_2',
                              //   type: 'iText',
                              //   replacement: '',
                              //   placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                              //   indications: {
                              //     areIndications: true,
                              //     indicationsType: 'insideText',
                              //     // tslint:disable-next-line:max-line-length
                              //     value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
                              //   },
                              // },
                              // {
                              //   type: 'iRadioB',
                              //   question: 'Tipo de documento de identificación del arrendador (propietario):',
                              //   identifier: 'id-unid-3_1_opA_1_opB_3',
                              //   wordToReplace: '3_1_opA_1_opB_3',
                              //   indications: {
                              //     areIndications: true,
                              //     indicationsType: 'insideText',
                              //     value: 'Seleccione el tipo de documento de identificación del propietario',
                              //   },
                              //   replacement: '',
                              //   radios: [
                              //     {
                              //       label: 'DNI',
                              //       replacementOriginal: 'DNI',
                              //       replacement: '',
                              //       radioId: 'id-unid-3_1_opA_1_opB_3_opA',
                              //       identifier: 'id-unid-3_1_opA_1_opB_3_opA',
                              //       extraReplacements: [],
                              //       checked: true,
                              //     },
                              //     {
                              //       label: 'NIE',
                              //       replacementOriginal: 'NIE',
                              //       replacement: '',
                              //       radioId: 'id-unid-3_1_opA_1_opB_3_opB',
                              //       identifier: 'id-unid-3_1_opA_1_opB_3_opB',
                              //       extraReplacements: [],
                              //       checked: false,
                              //     },
                              //     {
                              //       label: 'Pasaporte',
                              //       replacementOriginal: 'Pasaporte',
                              //       replacement: '',
                              //       radioId: 'id-unid-3_1_opA_1_opB_3_opC',
                              //       identifier: 'id-unid-3_1_opA_1_opB_3_opC',
                              //       extraReplacements: [],
                              //       checked: false,
                              //     }
                              //   ]
                              // },
                              // {
                              //   question: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                              //   wordToReplace: 'id-unid-3_1_opA_1_opB_4',
                              //   identifier: 'id-unid-3_1_opA_1_opB_4',
                              //   type: 'iText',
                              //   replacement: '',
                              //   placeholder: 'P. ej. 83558071Z',
                              //   indications: {
                              //     areIndications: true,
                              //     indicationsType: 'insideText',
                              //     value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                              //   },
                              // },
                              // {
                              //   // tslint:disable-next-line:max-line-length
                              //   question: 'Nombre completo de la persona que firma este contrato en nombre y representación del arrendador (propietario)',
                              //   wordToReplace: 'id-unid-3_1_opA_1_opB_5',
                              //   identifier: 'id-unid-3_1_opA_1_opB_5',
                              //   type: 'iText',
                              //   replacement: '',
                              //   placeholder: 'P. ej. Martino Montano Holguín',
                              //   indications: {
                              //     areIndications: true,
                              //     indicationsType: 'outsideText',
                              //     // tslint:disable-next-line:max-line-length
                              //     value: 'Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este vendedor. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank">Poder de representación</a>',
                              //   },
                              // },
                              // {
                              //   type: 'iRadioB',
                              //   // tslint:disable-next-line:max-line-length
                              //   question: 'Documento de identificación de la persona que firma el contrato en nombre y representación arrendador (propietario):',
                              //   identifier: 'id-unid-3_1_opA_1_opB_6',
                              //   wordToReplace: 'id-unid-3_1_opA_1_opB_6',
                              //   indications: {
                              //     areIndications: true,
                              //     indicationsType: 'outsideText',
                              //     // tslint:disable-next-line:max-line-length
                              //     value: 'Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación del propietario.',
                              //   },
                              //   replacement: '',
                              //   radios: [
                              //     {
                              //       label: 'DNI',
                              //       replacementOriginal: 'DNI',
                              //       replacement: '',
                              //       radioId: 'id-unid-3_1_opA_1_opB_6_opA',
                              //       identifier: 'id-unid-3_1_opA_1_opB_6_opA',
                              //       extraReplacements: [],
                              //       checked: true,
                              //     },
                              //     {
                              //       label: 'NIE',
                              //       replacementOriginal: 'NIE',
                              //       replacement: '',
                              //       radioId: 'id-unid-3_1_opA_1_opB_6_opB',
                              //       identifier: 'id-unid-3_1_opA_1_opB_6_opB',
                              //       extraReplacements: [],
                              //       checked: false,
                              //     },
                              //     {
                              //       label: 'Pasaporte',
                              //       replacementOriginal: 'Pasaporte',
                              //       replacement: '',
                              //       radioId: 'id-unid-3_1_opA_1_opB_6_opC',
                              //       identifier: 'id-unid-3_1_opA_1_opB_6_opC',
                              //       extraReplacements: [],
                              //       checked: false,
                              //     }
                              //   ]
                              // },
                              // {
                              //   question: 'Número del documento seleccionado en la pregunta anterior:',
                              //   wordToReplace: 'id-unid-3_1_opA_1_opB_7',
                              //   identifier: 'id-unid-3_1_opA_1_opB_7',
                              //   placeholder: 'P. ej. 83558071Z',
                              //   type: 'iText',
                              //   replacement: '',
                              //   indications: {
                              //     areIndications: true,
                              //     indicationsType: 'insideText',
                              //     value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                              //   },
                              // },
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
                  replacementOriginal: 'id-unid-3_1_opB_5 actuando en nombre y representación de: id-unid-3_1_opB_1, con domicilio en id-unid-3_1_opB_new1  C.I.F/N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3  con la siguiente información: id-unid-3_1_opB_4.',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'id-unid-3_1_opB_5 actuando en nombre y representación de: id-unid-3_1_opB_1, con domicilio en id-unid-3_1_opB_new1  C.I.F/N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3  con la siguiente información: id-unid-3_1_opB_4.',
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
                      question: 'Domicilio social completo esta persona jurídica arrendadora (propietaria):',
                      wordToReplace: 'id-unid-3_1_opB_new1',
                      identifier: 'id-unid-3_1_opB_new1',
                      type: 'iText',
                      placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                      replacement: '',
                      indications: {
                        areIndications: true,
                        indicationsType: 'outsideText',
                        // tslint:disable-next-line:max-line-length
                        value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
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
                        value: 'Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank">NIF empresarial</a>.',
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
                        value: 'Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank">Datos registrales</a>',
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
                        value: 'Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank">Datos registrales</a>',
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
                          replacementOriginal: 'id-unid-3_1_opB_5_1, mayor de edad, con domicilio en id-unid-3_1_opB_5_2, id-unid-3_1_opB_5_3 núm. id-unid-3_1_opB_5_4, y en calidad de id-unid-3_1_opB_5_5',
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