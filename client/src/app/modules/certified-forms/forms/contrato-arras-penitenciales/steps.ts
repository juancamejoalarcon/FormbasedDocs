export const steps = [
    {
      type: 'start',
      title: 'Contrato de alquiler',
      description: `El contrato de alquiler es el documento que regula la cesión y el uso de
      inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).`
    },
    {
      question: '¿En dónde se firma el contrato?',
      wordToReplace: 'iLugar',
      type: 'inputText',
      replacement: '',
      isFocused: false,
      mandatory: true,
      isSubStep: false,
      isRadioCSubStep: false,
    },
    {
      question: '¿ Cuándo se firma el contrato ?',
      wordToReplace: 'iFecha',
      type: 'inputDate',
      replacement: '',
      isFocused: false,
      mandatory: true,
      isSubStep: false,
      isRadioCSubStep: false,
    },
    {
      question: 'Número de personas que firman el contrato en tanto que arrendadores (propietario):',
      type: 'inputRange',
      replacement: '',
      value: 1,
      id: 'idTest',
      isFocused: false,
      mandatory: true,
      isSubStep: false,
      isRadioCSubStep: false,
      subSteps: [
        {
          question: 'Nombre del arrendador',
          wordToReplace: 'iName',
          wordToCreateTheReplace: 'iName',
          type: 'inputText',
          replacement: '',
          isFocused: false,
          mandatory: true,
          isSubStep: true,
          isRadioCSubStep: false
        },
        {
          question: 'Estado civil del arrendador',
          wordToReplace: 'iState',
          wordToCreateTheReplace: 'iState',
          type: 'inputText',
          replacement: '',
          isFocused: false,
          mandatory: true,
          isSubStep: true,
          isRadioCSubStep: false
        }
      ]
    },
    {
      question: 'Cuestión condicional?',
      wordToReplace: 'iPrueba',
      type: 'inputRadioC',
      options: [
      {
        label: 'Opción a: Persona física',
        optionId: 'optionA',
        value: `- iNombre, persona física, mayor de edad, de estado civil iEstado`,
        checked: false,
        subSteps: [
        {
          question: '¿Nombre de la persona?',
          wordToReplace: 'iNombre',
          type: 'inputText',
          replacement: '',
          isFocused: false,
          mandatory: true,
          isRadioCSubStep: true,
          isSubStep: false
        },
        {
          question: '¿Estado Civil?',
          wordToReplace: 'iEstado',
          type: 'inputText',
          replacement: '',
          isFocused: false,
          mandatory: true,
          isRadioCSubStep: true,
          isSubStep: false
        },
      ]
      },
      {
        label: 'Opción b: Persona jurídica',
        value: `- iNombre, persona jurídica, con domicilio en iEstado`,
        optionId: 'optionB',
        checked: false,
        subSteps: [
          {
            question: '¿Nombre de la empresa?',
            wordToReplace: 'iNombre',
            type: 'inputText',
            replacement: '',
            isFocused: false,
            mandatory: true,
            isRadioCSubStep: true,
            isSubStep: false
          },
          {
            question: '¿Domicilio fiscal de la empresa?',
            wordToReplace: 'iEstado',
            type: 'inputText',
            replacement: '',
            isFocused: false,
            mandatory: true,
            isRadioCSubStep: true,
            isSubStep: false
          },
        ]
      },
    ],
      replacement: '',
      isFocused: false,
      mandatory: true,
      isSubStep: false,
      isRadioCSubStep: false
    },
    {
        type: 'end',
        title: 'Contrato de alquiler',
        description: `El contrato de alquiler es el documento que regula la cesión y el uso de
        inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).`
    }
];
