export const steps = [
    {
      type: 'start',
      title: 'Contrato de alquiler',
      description: `El contrato de alquiler es el documento que regula la cesión y el uso de
      inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).`
    },
    {
      type: 'iText',
      identifier: 'iLocalidad',
      replacement: '',
      question: 'Lugar en el que se firma este contrato:',
      indications: 'Indique el lugar en el que se firma este contrato.',
    },
    {
      type: 'iDate',
      identifier: 'iFecha',
      replacement: '',
      question: 'Fecha en la que se firma este contrato:',
      indications: 'Con la ayuda del calendario, indique la fecha en la que se firma este contrato.',
    },
    {
      type: 'iForEach',
      value: 1,
      replacement: '',
      identifier: 'iParteVendedora',
      question: 'Número de personas que son propietarias (y que venden) el inmueble:',
      content: [
        {
          identifier: 'iParteVendedora-1',
          text: 'iParteVendedora-1-persona',
          extraTexts: [
            {
              identifier: 'iParteVendedora-1-persona-extra1'
            }
          ],
          modifiedTexts: [],
          modifiedExtraTexts: [],
          subSteps: [
            {
              type: 'iRadioC',
              question: 'La parte vendedora (propietario) nºX del inmueble es una:',
              identifier: 'iParteVendedora-1-persona',
              wordToReplace: 'iParteVendedora-1-persona',
              indications: 'Marque la opción Persona ...',
              replacement: '',
              radios: [
                {
                  label: 'Persona física',
                  radioId: 'persona-fisica',
                  identifier: 'persona-fisica',
                  value: 'iNombreFisica con iDcoumentoFisica iDcoumentoNumeroFisica, y con domicilio en: iDomicilioFisica.',
                  valuesForExtraTexts: [
                    {
                      identifierOfExtraText: 'iParteVendedora-1-persona-extra1',
                      value: 'iNombreFisica, quien comparece en su propio nombre y derecho, como PARTE VENDEDORA.',
                    }
                  ],
                  checked: false,
                  subSteps: [
                  {
                    question: 'Nombre completo de la parte vendedora (propietario) nº1 del inmueble:',
                    wordToReplace: 'iNombreFisica',
                    identifier: 'iNombreFisica',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    // tslint:disable-next-line:max-line-length
                    question: 'Tipo de documento de identificación personal para identificar a la parte vendedora (propietario) nº1 del inmueble:',
                    wordToReplace: 'iDcoumentoFisica',
                    identifier: 'iDcoumentoFisica',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Número del documento personal de identificación de la parte vendedora (propietario) nº1 del inmueble:',
                    wordToReplace: 'iDcoumentoNumeroFisica',
                    identifier: 'iDcoumentoNumeroFisica',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Dirección completa de la parte vendedora (propietario) nº1 del inmueble: ',
                    wordToReplace: 'iDomicilioFisica',
                    identifier: 'iDomicilioFisica',
                    type: 'iText',
                    replacement: '',
                  }
                ]
                },
                {
                  label: 'Persona jurídica',
                  value: 'iNombreJuridica, con iDcoumentoJuridica iDcoumentoNumeroJuridica, y que ostenta el cargo de iCargo.',
                  valuesForExtraTexts: [
                    {
                      identifierOfExtraText: 'iParteVendedora-1-persona-extra1',
                      // tslint:disable-next-line:max-line-length
                      value: 'iNombreJuridica, quien comparece en nombre y representación de iDenominacion con NIF iNIF, y con domicilio en iDomicilioJuridica, y ello en virtud de Escritura pública y/o autorización pertinente, donde se recoge y motiva su facultad de intervención, como PARTE VENDEDORA.',
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
      type: 'iRadioC',
      question: 'El inmueble que se venderá es una finca edificada (vivienda, local de negocio, etc.)',
      identifier: 'iFincaEdificada',
      wordToReplace: 'iFincaEdificada',
      indications: '',
      replacement: '',
      radios: [
        {
          label: 'Sí',
          radioId: 'opA',
          identifier: 'opA',
          value: 'iNombreFisica con iDcoumentoFisica iDcoumentoNumeroFisica, y con domicilio en: iDomicilioFisica.',
          valuesForExtraTexts: [
            {
              identifierOfExtraText: 'iParteVendedora-1-persona-extra1',
              value: 'iNombreFisica, quien comparece en su propio nombre y derecho, como PARTE VENDEDORA.',
            }
          ],
          checked: false,
          subSteps: [
          {
            question: 'Nombre completo de la parte vendedora (propietario) nº1 del inmueble:',
            wordToReplace: 'iNombreFisica',
            identifier: 'iNombreFisica',
            type: 'iText',
            replacement: '',
          }
        ]
        },
        {
          label: 'No',
          value: 'iNombreJuridica, con iDcoumentoJuridica iDcoumentoNumeroJuridica, y que ostenta el cargo de iCargo.',
          valuesForExtraTexts: [
            {
              identifierOfExtraText: 'iParteVendedora-1-persona-extra1',
              // tslint:disable-next-line:max-line-length
              value: 'iNombreJuridica, quien comparece en nombre y representación de iDenominacion con NIF iNIF, y con domicilio en iDomicilioJuridica, y ello en virtud de Escritura pública y/o autorización pertinente, donde se recoge y motiva su facultad de intervención, como PARTE VENDEDORA.',
            }
          ],
          radioId: 'OpB',
          identifier: 'OpB',
          checked: false,
          subSteps: [
            {
              // tslint:disable-next-line:max-line-length
              question: 'Nombre completo de la persona que firma o firmará el contrato en nombre de la parte vendedora (propietario) nº1 (ya que ésta es una persona jurídica):',
              wordToReplace: 'iNombreJuridica',
              identifier: 'iNombreJuridica',
              type: 'iText',
              replacement: '',
            }
          ]
        },
      ],
    },
    // {
    //   question: '¿La casa incluye alguna de estas partes accesorias?',
    //   wordToReplace: 'iParteAccesoria',
    //   identifier: 'iParteAccesoria',
    //   type: 'iCheckbox',
    //   replacement: 'Como parte anexa o accesoria a la misma, también incluye: iGaraje',
    //   checkboxes: [
    //     {
    //       label: 'Marque esta casilla cuando el inmueble que se venderá tiene garaje:',
    //       value: '- Garaje: iGarajeDescripcion',
    //       identifier: 'iGaraje',
    //       subSteps: [
    //         {
    //           question: 'Descripción del garaje',
    //           wordToReplace: 'iGarajeDescripcion',
    //           identifier: 'iGarajeDescripcion',
    //           type: 'iText',
    //           replacement: '',
    //         },
    //       ]
    //     },
    //     {
    //       label: 'Marque esta casilla cuando el inmueble que se venderá tiene un trastero (p. ej: en el último piso del edificio, etc):',
    //       value: '- Trastero: iTrasteroDescripcion',
    //       identifier: 'iTrastero',
    //       subSteps: [
    //         {
    //           question: 'Descripción del transtero',
    //           wordToReplace: 'iTrasteroDescripcion',
    //           identifier: 'iTrasteroDescripcion',
    //           type: 'iText',
    //           replacement: '',
    //         },
    //       ]
    //     }
    //   ],
    //   rules: [
    //     {
    //       condition: 'noneIsChecked',
    //       rulename: 'replace',
    //       replacement: 'En adelante, se denominará conjuntamente, a la finca y sus accesarios, la Finca. La superficie y composición de la Finca, así como demás características...'
    //     }
    //   ]
    // },
    {
        type: 'end',
        identifier: 'end',
        title: 'Contrato de alquiler',
        description: `El contrato de alquiler es el documento que regula la cesión y el uso de
        inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).`
    }
];
