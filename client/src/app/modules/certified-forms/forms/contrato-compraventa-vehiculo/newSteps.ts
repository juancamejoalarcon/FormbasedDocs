export const steps = [
    {
      type: 'start',
      title: 'Contrato de alquiler',
      description: `El contrato de alquiler es el documento que regula la cesión y el uso de
      inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).`,
      isCurrentStep: true
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
                        defaultRadioId: 'persona-fisica',
                        replacement: '',
                        extraReplacements: [
                        ],
                        radios: [
                          {
                            label: 'en su propio nombre y representación',
                            radioId: '3_1_opA_1_opA',
                            identifier: '3_1_opA_1_opA',
                            replacementOriginal: '3_1_opA_1_opA_1, mayor de edad, con domicilio en 3_1_opA_1_opA_2, con 3_1_opA_1_opA_3 número 3_1_opA_1_opA_4, y en su propio nombre y representación.',
                            replacement: '3_1_opA_1_opA_1, mayor de edad, con domicilio en 3_1_opA_1_opA_2, con 3_1_opA_1_opA_3 número 3_1_opA_1_opA_4, y en su propio nombre y representación.',
                            extraReplacements: [],
                            checked: true,
                            subSteps: [
                            {
                              question: 'Nombre completo del vendedor:',
                              wordToReplace: '3_1_opA_1_opA',
                              identifier: '3_1_opA_1_opA',
                              type: 'iText',
                              replacement: '',
                            },
                          ]
                          },
                          {
                            label: 'Persona jurídica',
                            // tslint:disable-next-line:max-line-length
                            replacementOriginal: 'iNombreJuridica, con iDcoumentoJuridica iDcoumentoNumeroJuridica, y que ostenta el cargo de iCargo.',
                            replacement: 'iNombreJuridica, con iDcoumentoJuridica iDcoumentoNumeroJuridica, y que ostenta el cargo de iCargo.',
                            extraReplacements: [
                              {
                                insideId: 'opA',
                                // tslint:disable-next-line:max-line-length
                                replacementOriginal: 'iNombreJuridica, quien comparece en nombre y representación de iDenominacion con NIF iNIF, y con domicilio en iDomicilioJuridica, y ello en virtud de Escritura pública y/o autorización pertinente, donde se recoge y motiva su facultad de intervención, como PARTE VENDEDORA.',
                                replacement: ''
                              }
                            ],
                            radioId: 'persona-juridica',
                            identifier: 'persona-juridica',
                            checked: false,
                            subSteps: [
                              {
                                // tslint:disable-next-line:max-line-length
                                question: 'Nombre completo de la persona que firma o firmará el contrato en nombre de la parte vendedora (propietario) nº1 (ya que ésta es una persona jurídica):',
                                wordToReplace: 'iNombreJuridica',
                                identifier: 'iNombreJuridica',
                                type: 'iText',
                                replacement: '',
                              },
                              {
                                // tslint:disable-next-line:max-line-length
                                question: 'Tipo de documento de identificación personal para identificar a la persona que firma el contrato en nombre de la parte vendedora (propietario) nº1:',
                                wordToReplace: 'iDcoumentoJuridica',
                                identifier: 'iDcoumentoJuridica',
                                type: 'iText',
                                replacement: '',
                              },
                              {
                                // tslint:disable-next-line:max-line-length
                                question: 'Número del documento personal de identificación de la persona que representa con su firma a la parte vendedora (propietario) nº1 del inmueble:',
                                wordToReplace: 'iDcoumentoNumeroJuridica',
                                identifier: 'iDcoumentoNumeroJuridica',
                                type: 'iText',
                                replacement: '',
                              },
                              {
                                question: 'Cargo o puesto que ostenta la persona que representa con su firma en el contrato a la parte vendedora nº1',
                                wordToReplace: 'iCargo',
                                identifier: 'iCargo',
                                type: 'iText',
                                replacement: '',
                              },
                              {
                                question: 'Denominación o razón social de la parte vendedora (propietario) nº1 del inmueble:',
                                wordToReplace: 'iDenominacion',
                                identifier: 'iDenominacion',
                                type: 'iText',
                                replacement: '',
                              },
                              {
                                question: 'Número del NIF identificador (antiguo CIF) de la parte vendedora (propietario) nº1 del inmueble:',
                                wordToReplace: 'iNIF',
                                identifier: 'iNIF',
                                type: 'iText',
                                replacement: '',
                              },
                              {
                                question: 'Domicilio social o dirección de la parte vendedora (propietario) nº1 del inmueble:',
                                wordToReplace: 'iDomicilioJuridica',
                                identifier: 'iDomicilioJuridica',
                                type: 'iText',
                                replacement: '',
                              }
                            ]
                          },
                        ],
                    },
                ]
                },
                {
                  label: 'Persona jurídica',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'iNombreJuridica, con iDcoumentoJuridica iDcoumentoNumeroJuridica, y que ostenta el cargo de iCargo.',
                  replacement: 'iNombreJuridica, con iDcoumentoJuridica iDcoumentoNumeroJuridica, y que ostenta el cargo de iCargo.',
                  extraReplacements: [
                    {
                      insideId: 'opA',
                      // tslint:disable-next-line:max-line-length
                      replacementOriginal: 'iNombreJuridica, quien comparece en nombre y representación de iDenominacion con NIF iNIF, y con domicilio en iDomicilioJuridica, y ello en virtud de Escritura pública y/o autorización pertinente, donde se recoge y motiva su facultad de intervención, como PARTE VENDEDORA.',
                      replacement: ''
                    }
                  ],
                  radioId: 'persona-juridica',
                  identifier: 'persona-juridica',
                  checked: false,
                  subSteps: [
                    {
                      // tslint:disable-next-line:max-line-length
                      question: 'Nombre completo de la persona que firma o firmará el contrato en nombre de la parte vendedora (propietario) nº1 (ya que ésta es una persona jurídica):',
                      wordToReplace: 'iNombreJuridica',
                      identifier: 'iNombreJuridica',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      // tslint:disable-next-line:max-line-length
                      question: 'Tipo de documento de identificación personal para identificar a la persona que firma el contrato en nombre de la parte vendedora (propietario) nº1:',
                      wordToReplace: 'iDcoumentoJuridica',
                      identifier: 'iDcoumentoJuridica',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      // tslint:disable-next-line:max-line-length
                      question: 'Número del documento personal de identificación de la persona que representa con su firma a la parte vendedora (propietario) nº1 del inmueble:',
                      wordToReplace: 'iDcoumentoNumeroJuridica',
                      identifier: 'iDcoumentoNumeroJuridica',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      question: 'Cargo o puesto que ostenta la persona que representa con su firma en el contrato a la parte vendedora nº1',
                      wordToReplace: 'iCargo',
                      identifier: 'iCargo',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      question: 'Denominación o razón social de la parte vendedora (propietario) nº1 del inmueble:',
                      wordToReplace: 'iDenominacion',
                      identifier: 'iDenominacion',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      question: 'Número del NIF identificador (antiguo CIF) de la parte vendedora (propietario) nº1 del inmueble:',
                      wordToReplace: 'iNIF',
                      identifier: 'iNIF',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      question: 'Domicilio social o dirección de la parte vendedora (propietario) nº1 del inmueble:',
                      wordToReplace: 'iDomicilioJuridica',
                      identifier: 'iDomicilioJuridica',
                      type: 'iText',
                      replacement: '',
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
