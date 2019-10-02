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
    },
    {
      type: 'iDate',
      identifier: 'iFecha',
      replacement: '',
    },
    {
      type: 'iForEach',
      value: 1,
      replacement: '',
      identifier: 'iParteVendedora',
      content: [
        {
          identifier: 'iParteVendedora-option1',
          text: 'Esto es una vaina de prueba marico iParteVendedora-option1-comer, --- iParteVendedora-option1-fregar',
          modifiedTexts: [],
          subSteps: [
            {
              type: 'iText',
              identifier: 'iParteVendedora-option1-comer',
              replacement: '',
            },
            {
              type: 'iText',
              identifier: 'iParteVendedora-option1-fregar',
              replacement: '',
            }
          ]
        },
        {
          identifier: 'iParteVendedora-option2',
          text: 'Otra cosa que no tiene nada que ver iParteVendedora-option2-blabla, --- iParteVendedora-option2-blibli',
          modifiedTexts: [],
          subSteps: [
            {
              type: 'iText',
              identifier: 'iParteVendedora-option2-blabla',
              replacement: '',
            },
            {
              type: 'iText',
              identifier: 'iParteVendedora-option2-blibli',
              replacement: '',
            }
          ]
        },
        {
          identifier: 'iParteVendedora-option3',
          text: 'Otra cosa que no tiene nada que ver iParteVendedora-option3-ultimo1, --- iParteVendedora-option3-ultimo2',
          modifiedTexts: [],
          subSteps: [
            {
              type: 'iText',
              identifier: 'iParteVendedora-option3-ultimo1',
              replacement: '',
            },
            {
              type: 'iText',
              identifier: 'iParteVendedora-option3-ultimo2',
              replacement: '',
            }
          ]
        }
      ]
    },
    {
      question: 'Cuestión condicional',
      wordToReplace: 'iPrueba',
      identifier: 'iPrueba',
      type: 'iRadioC',
      replacement: '',
      radios: [
      {
        label: 'Opción a: Persona física',
        radioId: 'iPruebaOptionA',
        value: `- iNombre, persona física, mayor de edad, de estado civil iEstado`,
        checked: false,
        subSteps: [
        {
          question: '¿Nombre de la persona?',
          wordToReplace: 'iNombre',
          identifier: 'iPruebaOptionAiNombre',
          type: 'inputText',
          replacement: '',
          isFocused: false,
          mandatory: true
        },
        {
          question: '¿Estado Civil?',
          wordToReplace: 'iEstado',
          identifier: 'iPruebaOptionAiEstado',
          type: 'inputText',
          replacement: '',
          isFocused: false,
          mandatory: true
        },
      ]
      },
      {
        label: 'Opción b: Persona jurídica',
        value: `- iNombre, persona jurídica, con domicilio en iEstado`,
        radioId: 'iPruebaOptionB',
        checked: false,
        subSteps: [
          {
            question: '¿Nombre de la empresa?',
            wordToReplace: 'iNombre',
            identifier: 'iPruebaOptionBiNombre',
            type: 'inputText',
            replacement: '',
            isFocused: false,
            mandatory: true
          },
          {
            question: '¿Domicilio fiscal de la empresa?',
            wordToReplace: 'iEstado',
            identifier: 'iPruebaOptionBiEstado',
            type: 'inputText',
            replacement: '',
            isFocused: false,
            mandatory: true
          },
        ]
      },
    ],
    },
    {
        type: 'end',
        title: 'Contrato de alquiler',
        description: `El contrato de alquiler es el documento que regula la cesión y el uso de
        inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).`
    }
];
