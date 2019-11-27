export const steps = [
    {
      type: 'start',
      title: 'Contrato de compraventa de vehículo usado entre particulares',
      description: `Con este contrato el dueño o propietario, sea una
      persona o una empresa, de un vehículo automóvil usado lo pueda vender a otra persona o empresa.`,
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
