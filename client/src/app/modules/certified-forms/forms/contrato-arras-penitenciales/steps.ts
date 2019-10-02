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
          modifiedTexts: [],
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
                  radioId: 'persona-juridica',
                  identifier: 'persona-juridica',
                  checked: false,
                  subSteps: [
                    {
                      question: 'Nombre completo de la persona que firma o firmará el contrato en nombre de la parte vendedora (propietario) nº1 (ya que ésta es una persona jurídica):',
                      wordToReplace: 'iNombreJuridica',
                      identifier: 'iNombreJuridica',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      question: 'Tipo de documento de identificación personal para identificar a la persona que firma el contrato en nombre de la parte vendedora (propietario) nº1:',
                      wordToReplace: 'iDcoumentoJuridica',
                      identifier: 'iDcoumentoJuridica',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      question: 'Cargo o puesto que ostenta la persona que representa con su firma en el contrato a la parte vendedora nº1',
                      wordToReplace: 'iDcoumentoNumeroJuridica',
                      identifier: 'iDcoumentoNumeroJuridica',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      question: 'Dirección completa de la parte vendedora (propietario) nº1 del inmueble: ',
                      wordToReplace: 'iCargo',
                      identifier: 'iCargo',
                      type: 'iText',
                      replacement: '',
                    }
                  ]
                },
              ],
            },
          ]
        },
        // {
        //   identifier: 'iParteVendedora-2',
        //   text: 'Otra cosa que no tiene nada que ver iParteVendedora-option2-blabla, --- iParteVendedora-option2-blibli',
        //   modifiedTexts: [],
        //   subSteps: [
        //     {
        //       type: 'iText',
        //       identifier: 'iParteVendedora-option2-blabla',
        //       replacement: '',
        //     },
        //     {
        //       type: 'iText',
        //       identifier: 'iParteVendedora-option2-blibli',
        //       replacement: '',
        //     }
        //   ]
        // },
        // {
        //   identifier: 'iParteVendedora-option3',
        //   text: 'Otra cosa que no tiene nada que ver iParteVendedora-option3-ultimo1, --- iParteVendedora-option3-ultimo2',
        //   modifiedTexts: [],
        //   subSteps: [
        //     {
        //       type: 'iText',
        //       identifier: 'iParteVendedora-option3-ultimo1',
        //       replacement: '',
        //     },
        //     {
        //       type: 'iText',
        //       identifier: 'iParteVendedora-option3-ultimo2',
        //       replacement: '',
        //     }
        //   ]
        // }
      ]
    },
    // {
    //   question: 'Cuestión condicional',
    //   wordToReplace: 'iPrueba',
    //   identifier: 'iPrueba',
    //   type: 'iRadioC',
    //   replacement: '',
    //   radios: [
    //   {
    //     label: 'Opción a: Persona física',
    //     radioId: 'iPruebaOptionA',
    //     value: `- iNombre, persona física, mayor de edad, de estado civil iEstado`,
    //     checked: false,
    //     subSteps: [
    //     {
    //       question: '¿Nombre de la persona?',
    //       wordToReplace: 'iNombre',
    //       identifier: 'iPruebaOptionAiNombre',
    //       type: 'inputText',
    //       replacement: '',
    //       isFocused: false,
    //       mandatory: true
    //     },
    //     {
    //       question: '¿Estado Civil?',
    //       wordToReplace: 'iEstado',
    //       identifier: 'iPruebaOptionAiEstado',
    //       type: 'inputText',
    //       replacement: '',
    //       isFocused: false,
    //       mandatory: true
    //     },
    //   ]
    //   },
    //   {
    //     label: 'Opción b: Persona jurídica',
    //     value: `- iNombre, persona jurídica, con domicilio en iEstado`,
    //     radioId: 'iPruebaOptionB',
    //     checked: false,
    //     subSteps: [
    //       {
    //         question: '¿Nombre de la empresa?',
    //         wordToReplace: 'iNombre',
    //         identifier: 'iPruebaOptionBiNombre',
    //         type: 'inputText',
    //         replacement: '',
    //         isFocused: false,
    //         mandatory: true
    //       },
    //       {
    //         question: '¿Domicilio fiscal de la empresa?',
    //         wordToReplace: 'iEstado',
    //         identifier: 'iPruebaOptionBiEstado',
    //         type: 'inputText',
    //         replacement: '',
    //         isFocused: false,
    //         mandatory: true
    //       },
    //     ]
    //   },
    // ],
    // },
    {
        type: 'end',
        identifier: 'end',
        title: 'Contrato de alquiler',
        description: `El contrato de alquiler es el documento que regula la cesión y el uso de
        inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).`
    }
];
