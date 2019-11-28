export const steps = [
  {
    type: 'start',
    title: 'Contrato de alquiler',
    description: `El contrato de alquiler es el documento que regula la cesión y el uso de
    inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).`,
    isCurrentStep: true
  },
  {
    type: 'iText',
    identifier: 'iLocalidad',
    wordToReplace: 'iLocalidad',
    replacement: '',
    question: 'Lugar en el que se firma este contrato:',
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      value: 'Indique el lugar en el que se firma este contrato.'
    },
    mandatory: true,
    isFocused: false
  },
  {
    type: 'iDate',
    identifier: 'iFecha',
    wordToReplace: 'iFecha',
    replacement: '',
    question: 'Fecha en la que se firma este contrato:',
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      value: 'Con la ayuda del calendario, indique la fecha en la que se firma este contrato.',
    },
    mandatory: true,
    isFocused: false
  },
  {
    type: 'iForEach',
    value: 1,
    replacement: '',
    identifier: 'iParteCompradora',
    wordToReplace: 'iParteCompradora',
    question: 'Número de personas que desean comprar el vehículo que se vende por medio de este contrato:',
    content: [
      {
        identifier: 'iParteCompradora',
        wordToReplace: 'iParteCompradora',
        replacementOriginal: 'iPersonaCompradora',
        replacement: '',
        extraReplacements: [],
        modifiedReplacements: [],
        modifiedExtraReplacements: [],
        subSteps: [
          {
            type: 'iRadioC',
            question: 'El comprador (persona que desea adquirir el vehículo) es:',
            identifier: 'iPersonaCompradora',
            wordToReplace: 'iPersonaCompradora',
            indications: 'Marque la opción Persona ...',
            defaultRadioId: 'persona-fisica',
            replacement: '',
            extraReplacements: [
            ],
            radios: [
              {
                label: 'Persona física',
                radioId: 'persona-fisica',
                identifier: 'persona-fisica',
                replacementOriginal: 'iPersonaCompradoraFisica',
                replacement: 'iPersonaCompradoraFisica',
                extraReplacements: [],
                checked: true,
                subSteps: [
                  {
                      type: 'iRadioC',
                      question: 'El comprador (persona que desea adquirir el vehículo) celebra este contrato:',
                      identifier: 'iPersonaCompradoraFisica',
                      wordToReplace: 'iPersonaCompradoraFisica',
                      indications: 'Marque la opción Persona ...',
                      defaultRadioId: '4_1_opA_1_opA',
                      replacement: '',
                      extraReplacements: [
                      ],
                      radios: [
                        {
                          label: 'en su propio nombre y representación',
                          radioId: '4_1_opA_1_opA',
                          identifier: '4_1_opA_1_opA',
                          // tslint:disable-next-line:max-line-length
                          replacementOriginal: '4_1_opA_1_opA_1, mayor de edad, con domicilio en 4_1_opA_1_opA_2, con 4_1_opA_1_opA_3 número 4_1_opA_1_opA_4, y en su propio nombre y representación.',
                          // tslint:disable-next-line:max-line-length
                          replacement: '4_1_opA_1_opA_1, mayor de edad, con domicilio en 4_1_opA_1_opA_2, con 4_1_opA_1_opA_3 número 4_1_opA_1_opA_4, y en su propio nombre y representación.',
                          extraReplacements: [],
                          checked: false,
                          subSteps: [
                          {
                            question: 'Nombre completo del comprador:',
                            wordToReplace: '4_1_opA_1_opA_1',
                            identifier: '4_1_opA_1_opA_1',
                            type: 'iText',
                            replacement: '',
                          },
                          {
                            question: 'Dirección completa del lugar de residencia del comprador:',
                            wordToReplace: '4_1_opA_1_opA_2',
                            identifier: '4_1_opA_1_opA_2',
                            type: 'iText',
                            replacement: '',
                          },
                          {
                            type: 'iRadioB',
                            question: 'Tipo de documento de identificación del comprador',
                            identifier: '4_1_opA_1_opA_3',
                            wordToReplace: '4_1_opA_1_opA_3',
                            indications: 'Marque la opción Persona ...',
                            replacement: '',
                            radios: [
                              {
                                label: 'DNI',
                                replacementOriginal: 'DNI',
                                replacement: '',
                                radioId: '4_1_opA_1_opA_3_opA',
                                identifier: '4_1_opA_1_opA_3_opA',
                                extraReplacements: [],
                                checked: true,
                              },
                              {
                                label: 'NIE',
                                replacementOriginal: 'NIE',
                                replacement: '',
                                radioId: '4_1_opA_1_opA_3_opB',
                                identifier: '4_1_opA_1_opA_3_opB',
                                extraReplacements: [],
                                checked: false,
                              },
                              {
                                label: 'Pasaporte',
                                replacementOriginal: 'Pasaporte',
                                replacement: '',
                                radioId: '4_1_opA_1_opA_3_opC',
                                identifier: '4_1_opA_1_opA_3_opC',
                                extraReplacements: [],
                                checked: false,
                              }
                            ]
                          },
                          {
                            question: 'Número del documento',
                            wordToReplace: '4_1_opA_1_opA_4',
                            identifier: '4_1_opA_1_opA_4',
                            type: 'iText',
                            replacement: '',
                          }
                        ]
                        },
                        {
                          label: 'por medio de un representante (legal o voluntario)',
                          // tslint:disable-next-line:max-line-length
                          replacementOriginal: '4_1_opA_1_opB_5, mayor de edad, con 4_1_opA_1_opB_6: 4_1_opA_1_opB_7, quien actúa en calidad de 4_1_opA_1_opB_8, en virtud de escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de 4_1_opA_1_opB_1, con domicilio en 4_1_opA_1_opB_2 y 4_1_opA_1_opB_3 número 4_1_opA_1_opB_4.',
                          // tslint:disable-next-line:max-line-length
                          replacement: '4_1_opA_1_opB_5, mayor de edad, con 4_1_opA_1_opB_6: 4_1_opA_1_opB_7, quien actúa en calidad de 4_1_opA_1_opB_8, en virtud de escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de 4_1_opA_1_opB_1, con domicilio en 4_1_opA_1_opB_2 y 4_1_opA_1_opB_3 número 4_1_opA_1_opB_4.',
                          extraReplacements: [],
                          radioId: '4_1_opA_1_opB',
                          identifier: '4_1_opA_1_opB',
                          checked: false,
                          subSteps: [
                            {
                              question: 'Nombre completo del comprador:',
                              wordToReplace: '4_1_opA_1_opB_1',
                              identifier: '4_1_opA_1_opB_1',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              question: 'Dirección completa del lugar de residencia del comprador:',
                              wordToReplace: '4_1_opA_1_opB_2',
                              identifier: '4_1_opA_1_opB_2',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              type: 'iRadioB',
                              question: 'Tipo de dpcumento de identificación del comprador',
                              identifier: '4_1_opA_1_opB_3',
                              wordToReplace: '4_1_opA_1_opB_3',
                              indications: 'Marque la opción Persona ...',
                              replacement: '',
                              radios: [
                                {
                                  label: 'DNI',
                                  replacementOriginal: 'DNI',
                                  replacement: '',
                                  radioId: '4_1_opA_1_opB_3_opA',
                                  identifier: '4_1_opA_1_opB_3_opA',
                                  extraReplacements: [],
                                  checked: true,
                                },
                                {
                                  label: 'NIE',
                                  replacementOriginal: 'NIE',
                                  replacement: '',
                                  radioId: '4_1_opA_1_opB_3_opB',
                                  identifier: '4_1_opA_1_opB_3_opB',
                                  extraReplacements: [],
                                  checked: false,
                                },
                                {
                                  label: 'Pasaporte',
                                  replacementOriginal: 'Pasaporte',
                                  replacement: '',
                                  radioId: '4_1_opA_1_opB_3_opC',
                                  identifier: '4_1_opA_1_opB_3_opC',
                                  extraReplacements: [],
                                  checked: false,
                                }
                              ]
                            },
                            {
                              question: 'Número del documento',
                              wordToReplace: '4_1_opA_1_opB_4',
                              identifier: '4_1_opA_1_opB_4',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              question: 'Nombre completo de la persona que firma este contrato en nombre y representación del comprador:',
                              wordToReplace: '4_1_opA_1_opB_5',
                              identifier: '4_1_opA_1_opB_5',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              type: 'iRadioB',
                              question: 'Documento de identificación personal de la persona que firma este contrato en nombre y representación del comprador:',
                              identifier: '4_1_opA_1_opB_6',
                              wordToReplace: '4_1_opA_1_opB_6',
                              indications: 'Marque la opción Persona ...',
                              replacement: '',
                              radios: [
                                {
                                  label: 'DNI',
                                  replacementOriginal: 'DNI',
                                  replacement: '',
                                  radioId: '4_1_opA_1_opB_6_opA',
                                  identifier: '4_1_opA_1_opB_6_opA',
                                  extraReplacements: [],
                                  checked: true,
                                },
                                {
                                  label: 'NIE',
                                  replacementOriginal: 'NIE',
                                  replacement: '',
                                  radioId: '4_1_opA_1_opB_6_opB',
                                  identifier: '4_1_opA_1_opB_6_opB',
                                  extraReplacements: [],
                                  checked: false,
                                },
                                {
                                  label: 'Pasaporte',
                                  replacementOriginal: 'Pasaporte',
                                  replacement: '',
                                  radioId: '4_1_opA_1_opB_6_opC',
                                  identifier: '4_1_opA_1_opB_6_opC',
                                  extraReplacements: [],
                                  checked: false,
                                }
                              ]
                            },
                            {
                              question: 'Número del documento de identificación personal seleccionado:',
                              wordToReplace: '4_1_opA_1_opB_7',
                              identifier: '4_1_opA_1_opB_7',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              // tslint:disable-next-line:max-line-length
                              question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del comprador:',
                              wordToReplace: '4_1_opA_1_opB_8',
                              identifier: '4_1_opA_1_opB_8',
                              type: 'iText',
                              replacement: '',
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
                replacementOriginal: '4_1_opB_5, mayor de edad, con domicilio en 4_1_opB_6, con 4_1_opB_7 número 4_1_opB_8, en nombre y representación de: 4_1_opB_1, con N.I.F número 4_1_opB_2, e inscrita en: 4_1_opB_3 con la siguiente información: 4_1_opB_4.',
                // tslint:disable-next-line:max-line-length
                replacement: '4_1_opB_5, mayor de edad, con domicilio en 4_1_opB_6, con 4_1_opB_7 número 4_1_opB_8, en nombre y representación de: 4_1_opB_1, con N.I.F número 4_1_opB_2, e inscrita en: 4_1_opB_3 con la siguiente información: 4_1_opB_4.',
                extraReplacements: [],
                radioId: 'persona-juridica',
                identifier: 'persona-juridica',
                checked: false,
                subSteps: [
                  {
                    question: 'Nombre completo de la persona jurídica que desea comprador el vehículo:',
                    wordToReplace: '4_1_opB_1',
                    identifier: '4_1_opB_1',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Número de Identificación Fiscal o NIF completo de la persona jurídica que desea comprador el vehículo:',
                    wordToReplace: '4_1_opB_2',
                    identifier: '4_1_opB_2',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    // tslint:disable-next-line:max-line-length
                    question: 'Indique el tipo de registro y lugar donde está inscrita la persona jurídica que desea comprador el vehículo:',
                    wordToReplace: '4_1_opB_3',
                    identifier: '4_1_opB_3',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Datos registrales completos de la persona jurídica que desea comprador el vehículo:',
                    wordToReplace: '4_1_opB_4',
                    identifier: '4_1_opB_4',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Nombre completo del representante persona física de la persona jurídica que desea comprador el vehículo:',
                    wordToReplace: '4_1_opB_5',
                    identifier: '4_1_opB_5',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Domicilio completo del representante persona física de la persona jurídica que desea comprador el vehículo:',
                    wordToReplace: '4_1_opB_6',
                    identifier: '4_1_opB_6',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    type: 'iRadioB',
                    // tslint:disable-next-line:max-line-length
                    question: 'Documento de identidad del representante persona física de la persona jurídica que desea comprador el vehículo:',
                    identifier: '4_1_opB_7',
                    wordToReplace: '4_1_opB_7',
                    indications: 'Marque la opción Persona ...',
                    replacement: '',
                    radios: [
                      {
                        label: 'DNI',
                        replacementOriginal: 'DNI',
                        replacement: '',
                        radioId: '4_1_opB_7_opA',
                        identifier: '4_1_opB_7_opA',
                        extraReplacements: [],
                        checked: true,
                      },
                      {
                        label: 'NIE',
                        replacementOriginal: 'NIE',
                        replacement: '',
                        radioId: '4_1_opB_7_opB',
                        identifier: '4_1_opB_7_opB',
                        extraReplacements: [],
                        checked: false,
                      },
                      {
                        label: 'Pasaporte',
                        replacementOriginal: 'Pasaporte',
                        replacement: '',
                        radioId: '4_1_opB_7_opC',
                        identifier: '4_1_opB_7_opC',
                        extraReplacements: [],
                        checked: false,
                      }
                    ]
                  },
                  {
                    question: 'Número del documento de identificación personal seleccionado:',
                    wordToReplace: '4_1_opB_8',
                    identifier: '4_1_opB_8',
                    type: 'iText',
                    replacement: '',
                  },
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
    type: 'iForEach',
    value: 1,
    replacement: '',
    identifier: 'iParteVendedora',
    wordToReplace: 'iParteVendedora',
    question: 'Número de personas propietarias del vehículo (que desean venderlo por medio de este contrato):',
    content: [
      {
        identifier: 'iParteVendedora',
        wordToReplace: 'iParteVendedora',
        replacementOriginal: 'iPersona',
        replacement: '',
        extraReplacements: [],
        modifiedReplacements: [],
        modifiedExtraReplacements: [],
        subSteps: [
          {
            type: 'iRadioC',
            question: 'El vendedor (propietario del vehículo) es):',
            identifier: 'iPersona',
            wordToReplace: 'iPersona',
            indications: 'Marque la opción Persona ...',
            defaultRadioId: 'persona-fisica',
            replacement: '',
            extraReplacements: [
            ],
            radios: [
              {
                label: 'Persona física',
                radioId: 'persona-fisica',
                identifier: 'persona-fisica',
                replacementOriginal: 'iPersonaFisica',
                replacement: 'iPersonaFisica',
                extraReplacements: [],
                checked: true,
                subSteps: [
                  {
                      type: 'iRadioC',
                      question: 'El vendedor (propietario del vehículo) celebra este contrato:',
                      identifier: 'iPersonaFisica',
                      wordToReplace: 'iPersonaFisica',
                      indications: 'Marque la opción Persona ...',
                      defaultRadioId: '3_1_opA_1_opA',
                      replacement: '',
                      extraReplacements: [
                      ],
                      radios: [
                        {
                          label: 'en su propio nombre y representación',
                          radioId: '3_1_opA_1_opA',
                          identifier: '3_1_opA_1_opA',
                          // tslint:disable-next-line:max-line-length
                          replacementOriginal: '3_1_opA_1_opA_1, mayor de edad, con domicilio en 3_1_opA_1_opA_2, con 3_1_opA_1_opA_3 número 3_1_opA_1_opA_4, y en su propio nombre y representación.',
                          // tslint:disable-next-line:max-line-length
                          replacement: '3_1_opA_1_opA_1, mayor de edad, con domicilio en 3_1_opA_1_opA_2, con 3_1_opA_1_opA_3 número 3_1_opA_1_opA_4, y en su propio nombre y representación.',
                          extraReplacements: [],
                          checked: false,
                          subSteps: [
                          {
                            question: 'Nombre completo del vendedor:',
                            wordToReplace: '3_1_opA_1_opA_1',
                            identifier: '3_1_opA_1_opA_1',
                            type: 'iText',
                            replacement: '',
                          },
                          {
                            question: 'Dirección completa del lugar de residencia del vendedor:',
                            wordToReplace: '3_1_opA_1_opA_2',
                            identifier: '3_1_opA_1_opA_2',
                            type: 'iText',
                            replacement: '',
                          },
                          {
                            type: 'iRadioB',
                            question: 'Tipo de dpcumento de identificación del vendedor',
                            identifier: '3_1_opA_1_opA_3',
                            wordToReplace: '3_1_opA_1_opA_3',
                            indications: 'Marque la opción Persona ...',
                            replacement: '',
                            radios: [
                              {
                                label: 'DNI',
                                replacementOriginal: 'DNI',
                                replacement: '',
                                radioId: '3_1_opA_1_opA_3_opA',
                                identifier: '3_1_opA_1_opA_3_opA',
                                extraReplacements: [],
                                checked: true,
                              },
                              {
                                label: 'NIE',
                                replacementOriginal: 'NIE',
                                replacement: '',
                                radioId: '3_1_opA_1_opA_3_opB',
                                identifier: '3_1_opA_1_opA_3_opB',
                                extraReplacements: [],
                                checked: false,
                              },
                              {
                                label: 'Pasaporte',
                                replacementOriginal: 'Pasaporte',
                                replacement: '',
                                radioId: '3_1_opA_1_opA_3_opC',
                                identifier: '3_1_opA_1_opA_3_opC',
                                extraReplacements: [],
                                checked: false,
                              }
                            ]
                          },
                          {
                            question: 'Número del documento',
                            wordToReplace: '3_1_opA_1_opA_4',
                            identifier: '3_1_opA_1_opA_4',
                            type: 'iText',
                            replacement: '',
                          }
                        ]
                        },
                        {
                          label: 'por medio de un representante (legal o voluntario)',
                          // tslint:disable-next-line:max-line-length
                          replacementOriginal: '3_1_opA_1_opB_5, mayor de edad, con 3_1_opA_1_opB_6: 3_1_opA_1_opB_7, quien actúa en calidad de 3_1_opA_1_opB_8, en virtud de escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de 3_1_opA_1_opB_1, con domicilio en 3_1_opA_1_opB_2 y 3_1_opA_1_opB_3 número 3_1_opA_1_opB_4.',
                          // tslint:disable-next-line:max-line-length
                          replacement: '3_1_opA_1_opB_5, mayor de edad, con 3_1_opA_1_opB_6: 3_1_opA_1_opB_7, quien actúa en calidad de 3_1_opA_1_opB_8, en virtud de escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de 3_1_opA_1_opB_1, con domicilio en 3_1_opA_1_opB_2 y 3_1_opA_1_opB_3 número 3_1_opA_1_opB_4.',
                          extraReplacements: [],
                          radioId: '3_1_opA_1_opB',
                          identifier: '3_1_opA_1_opB',
                          checked: false,
                          subSteps: [
                            {
                              question: 'Nombre completo del vendedor:',
                              wordToReplace: '3_1_opA_1_opB_1',
                              identifier: '3_1_opA_1_opB_1',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              question: 'Dirección completa del lugar de residencia del vendedor:',
                              wordToReplace: '3_1_opA_1_opB_2',
                              identifier: '3_1_opA_1_opB_2',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              type: 'iRadioB',
                              question: 'Tipo de dpcumento de identificación del vendedor',
                              identifier: '3_1_opA_1_opB_3',
                              wordToReplace: '3_1_opA_1_opB_3',
                              indications: 'Marque la opción Persona ...',
                              replacement: '',
                              radios: [
                                {
                                  label: 'DNI',
                                  replacementOriginal: 'DNI',
                                  replacement: '',
                                  radioId: '3_1_opA_1_opB_3_opA',
                                  identifier: '3_1_opA_1_opB_3_opA',
                                  extraReplacements: [],
                                  checked: true,
                                },
                                {
                                  label: 'NIE',
                                  replacementOriginal: 'NIE',
                                  replacement: '',
                                  radioId: '3_1_opA_1_opB_3_opB',
                                  identifier: '3_1_opA_1_opB_3_opB',
                                  extraReplacements: [],
                                  checked: false,
                                },
                                {
                                  label: 'Pasaporte',
                                  replacementOriginal: 'Pasaporte',
                                  replacement: '',
                                  radioId: '3_1_opA_1_opB_3_opC',
                                  identifier: '3_1_opA_1_opB_3_opC',
                                  extraReplacements: [],
                                  checked: false,
                                }
                              ]
                            },
                            {
                              question: 'Número del documento',
                              wordToReplace: '3_1_opA_1_opB_4',
                              identifier: '3_1_opA_1_opB_4',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              question: 'Nombre completo de la persona que firma este contrato en nombre y representación del vendedor:',
                              wordToReplace: '3_1_opA_1_opB_5',
                              identifier: '3_1_opA_1_opB_5',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              type: 'iRadioB',
                              question: 'Documento de identificación personal de la persona que firma este contrato en nombre y representación del vendedor:',
                              identifier: '3_1_opA_1_opB_6',
                              wordToReplace: '3_1_opA_1_opB_6',
                              indications: 'Marque la opción Persona ...',
                              replacement: '',
                              radios: [
                                {
                                  label: 'DNI',
                                  replacementOriginal: 'DNI',
                                  replacement: '',
                                  radioId: '3_1_opA_1_opB_6_opA',
                                  identifier: '3_1_opA_1_opB_6_opA',
                                  extraReplacements: [],
                                  checked: true,
                                },
                                {
                                  label: 'NIE',
                                  replacementOriginal: 'NIE',
                                  replacement: '',
                                  radioId: '3_1_opA_1_opB_6_opB',
                                  identifier: '3_1_opA_1_opB_6_opB',
                                  extraReplacements: [],
                                  checked: false,
                                },
                                {
                                  label: 'Pasaporte',
                                  replacementOriginal: 'Pasaporte',
                                  replacement: '',
                                  radioId: '3_1_opA_1_opB_6_opC',
                                  identifier: '3_1_opA_1_opB_6_opC',
                                  extraReplacements: [],
                                  checked: false,
                                }
                              ]
                            },
                            {
                              question: 'Número del documento de identificación personal seleccionado:',
                              wordToReplace: '3_1_opA_1_opB_7',
                              identifier: '3_1_opA_1_opB_7',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del vendedor:',
                              wordToReplace: '3_1_opA_1_opB_8',
                              identifier: '3_1_opA_1_opB_8',
                              type: 'iText',
                              replacement: '',
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
                replacementOriginal: '3_1_opB_5, mayor de edad, con domicilio en 3_1_opB_6, con 3_1_opB_7 número 3_1_opB_8, en nombre y representación de: 3_1_opB_1, con N.I.F número 3_1_opB_2, e inscrita en: 3_1_opB_3 con la siguiente información: 3_1_opB_4.',
                replacement: '3_1_opB_5, mayor de edad, con domicilio en 3_1_opB_6, con 3_1_opB_7 número 3_1_opB_8, en nombre y representación de: 3_1_opB_1, con N.I.F número 3_1_opB_2, e inscrita en: 3_1_opB_3 con la siguiente información: 3_1_opB_4.',
                extraReplacements: [],
                radioId: 'persona-juridica',
                identifier: 'persona-juridica',
                checked: false,
                subSteps: [
                  {
                    question: 'Nombre completo de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: '3_1_opB_1',
                    identifier: '3_1_opB_1',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Número de Identificación Fiscal o NIF completo de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: '3_1_opB_2',
                    identifier: '3_1_opB_2',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Indique el tipo de registro y lugar donde está inscrita la persona jurídica que desea vender el vehículo:',
                    wordToReplace: '3_1_opB_3',
                    identifier: '3_1_opB_3',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Datos registrales completos de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: '3_1_opB_4',
                    identifier: '3_1_opB_4',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Nombre completo del representante persona física de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: '3_1_opB_5',
                    identifier: '3_1_opB_5',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Domicilio completo del representante persona física de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: '3_1_opB_6',
                    identifier: '3_1_opB_6',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    type: 'iRadioB',
                    question: 'Documento de identidad del representante persona física de la persona jurídica que desea vender el vehículo:',
                    identifier: '3_1_opB_7',
                    wordToReplace: '3_1_opB_7',
                    indications: 'Marque la opción Persona ...',
                    replacement: '',
                    radios: [
                      {
                        label: 'DNI',
                        replacementOriginal: 'DNI',
                        replacement: '',
                        radioId: '3_1_opB_7_opA',
                        identifier: '3_1_opB_7_opA',
                        extraReplacements: [],
                        checked: true,
                      },
                      {
                        label: 'NIE',
                        replacementOriginal: 'NIE',
                        replacement: '',
                        radioId: '3_1_opB_7_opB',
                        identifier: '3_1_opB_7_opB',
                        extraReplacements: [],
                        checked: false,
                      },
                      {
                        label: 'Pasaporte',
                        replacementOriginal: 'Pasaporte',
                        replacement: '',
                        radioId: '3_1_opB_7_opC',
                        identifier: '3_1_opB_7_opC',
                        extraReplacements: [],
                        checked: false,
                      }
                    ]
                  },
                  {
                    question: 'Número del documento de identificación personal seleccionado:',
                    wordToReplace: '3_1_opB_8',
                    identifier: '3_1_opB_8',
                    type: 'iText',
                    replacement: '',
                  },
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
