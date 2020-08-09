const steps = [
  {
    type: 'start',
    title: 'Requerimiento de pago',
    description: ``,
    isCurrentStep: true
  },
  {
    question: 'Nombre completo de la persona que requiere la deuda (si es una persona física) o denominación social (si es una persona jurídica):',
    wordToReplace: 'id-unid-1',
    identifier: 'id-unid-1',
    type: 'iText',
    placeholder: 'P. ej. Martino Montano Holguín o Banco Santander, S.A',
    replacement: '',
    indications: {
      areIndications: true,
      indicationsType: 'outsideText',
      // tslint:disable-next-line:max-line-length
      value: 'Hablamos de personas físicas para referirnos a un particular, sin embargo hablamos de personas jurídicas para referirnos a una empresa, una asociación, etc...',
    },
  },
  {
    question: 'Domicilio de la persona que requiere la deuda (o domicilio social en caso de que se trate de una persona jurídica):',
    wordToReplace: 'id-unid-2',
    identifier: 'id-unid-2',
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
    "replacement": "",
    "identifier": "id-unidnew-1",
    "wordToReplace": "id-unidnew-1",
    "question": "El pago de la deuda se requiere a:",
    "type": "iRadioB",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "un hombre",
        "replacement": "Estimado Sr. D.",
        "replacementOriginal": "Estimado Sr. D.",
        "radioId": "id-unidnew-1_opA",
        "identifier": "id-unidnew-1_opA",
        "subSteps": [],
        "extraReplacements": [],
        "checked": true
      },
      {
        "label": "una mujer",
        "replacement": "Estimada Sra. D.ª.",
        "replacementOriginal": "Estimada Sra. D.ª.",
        "radioId": "id-unidnew-1_opB",
        "identifier": "id-unidnew-1_opB",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "una persona jurídica",
        "replacement": "A la atención de",
        "replacementOriginal": "A la atención de",
        "radioId": "id-unidnew-1_opC",
        "identifier": "id-unidnew-1_opC",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      }
    ]
  },
  {
    question: 'Nombre completo de la persona a la que se requiere la deuda (si es una persona física) o denominación social (si es una persona jurídica):',
    wordToReplace: 'id-unidnew-2',
    identifier: 'id-unidnew-2',
    type: 'iText',
    placeholder: 'P. ej. Martino Montano Holguín o Banco Santander, S.A',
    replacement: '',
    indications: {
      areIndications: true,
      indicationsType: 'outsideText',
      // tslint:disable-next-line:max-line-length
      value: 'Hablamos de personas físicas para referirnos a un particular, sin embargo hablamos de personas jurídicas para referirnos a una empresa, una asociación, etc...',
    },
  },
  {
    type: 'iRadioB',
    question: 'Tipo de documento de identificación de la persona a la que se requiere la deuda:',
    identifier: 'id-unid-3',
    wordToReplace: 'id-unid-3',
    indications: {
      areIndications: true,
      indicationsType: 'outsideText',
      // tslint:disable-next-line:max-line-length
      value: 'Seleccione el tipo de documento de identificación de la persona a la que se requiere la deuda',
    },
    replacement: '',
    extraReplacements: [],
    defaultRadioId: 'id-unid-3_opA',
    radios: [
      {
        label: 'DNI',
        replacementOriginal: 'DNI',
        replacement: '',
        radioId: 'id-unid-3_opA',
        identifier: 'id-unid-3_opA',
        extraReplacements: [],
        checked: true,
      },
      {
        label: 'NIE',
        replacementOriginal: 'NIE',
        replacement: '',
        radioId: 'id-unid-3_opB',
        identifier: 'id-unid-3_opB',
        extraReplacements: [],
        checked: false,
      },
      {
        label: 'Pasaporte',
        replacementOriginal: 'Pasaporte',
        replacement: '',
        radioId: 'id-unid-3_opC',
        identifier: 'id-unid-3_opC',
        extraReplacements: [],
        checked: false,
      }
    ]
  },
  {
    question: 'Número del documento seleccionado en la pregunta anterior',
    wordToReplace: 'id-unid-4',
    identifier: 'id-unid-4',
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
    question: 'Domicilio de la persona a la que se requiere la deuda (o domicilio social en caso de que se trate de una persona jurídica):',
    wordToReplace: 'id-unid-5',
    identifier: 'id-unid-5',
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
    type: 'iText',
    identifier: 'id-unid-6',
    wordToReplace: 'id-unid-6',
    replacement: '',
    question: 'Lugar (ciudad o población) donde se realiza y firma el requerimiento de pago:',
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      value: 'Indique aquí la localidad de celebración y firma del requerimiento de pago.'
    },
    placeholder: 'P. ej. Albacete',
    mandatory: false,
    isFocused: false
  },
  {
    type: 'iDate',
    identifier: 'id-unid-7',
    wordToReplace: 'id-unid-7',
    replacement: '',
    question: 'Fecha en la que se firma el requerimiento de pago:',
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      value: 'Fecha en la que se firma el requerimiento de pago',
    },
    mandatory: false,
    isFocused: false
  },
  {
    "replacement": "",
    "identifier": "id-unid-8",
    "wordToReplace": "id-unid-8",
    "question": "Explique aquí cuál es el concepto de la deuda cuyo pago se requiere al deudor:",
    "placeholder": "P. ej: - alquiler de tres meses del vehículo automóvil matrícula 8185 YMY. - factura con número XXX con referencia a la compra de un colgante de oro.",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "textarea",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-9",
    "wordToReplace": "id-dec-9",
    "question": "Importe total, en euros, de la deuda (sin contar los intereses):",
    "placeholder": "Escriba un número",
    "mandatory": false,
    "isFocused": false,
    "type": "iNumber",
    extraReplacements: [],
    rules: [
      {
        condition: false,
        rulename: 'extraReplacementToCharacter',
        identifier: 'iddec9-precioAletras',
        wordToReplace: 'iddec9-precioAletras',
        replacement: ''
      }
    ],
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-10",
    "wordToReplace": "id-dec-10",
    "question": "Fecha de vencimiento de la deuda:",
    "placeholder": "dd/mm/aaaa",
    "mandatory": false,
    "isFocused": false,
    "type": "iDate",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-11",
    "wordToReplace": "id-dec-11",
    "question": "Forma de pago de la deuda:",
    "placeholder": "P. ej: transferencia bancaria en la cuenta a mi nombre del Banco BBVA, n° ESXX XXX XXXX XX XXXXXXXXXX ;",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-12",
    "wordToReplace": "id-dec-12",
    "question": "Número de días para pagar la deuda que se reclama:",
    "placeholder": "Escribe un número",
    "mandatory": false,
    "isFocused": false,
    "type": "iNumber",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": "\n\t\t\t\t\t\t\t\t\t\t\t "
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-13",
    "wordToReplace": "id-dec-13",
    "question": "¿El acreedor y el deudor al que se reclama el pago acordaron el tipo de interés que debía aplicarse en caso de impago del deudor?",
    "type": "iRadioB",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": " y en nuestro acuerdo",
        "replacementOriginal": " y en nuestro acuerdo",
        "radioId": "id-dec-13_opA",
        "identifier": "id-dec-13_opA",
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-13_opB",
        "identifier": "id-dec-13_opB",
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    type: 'end',
    identifier: 'end',
    wordToReplace: 'end',
    title: 'Requerimiento de pago',
    description: ``,
    checkoutProcess: {
      isInited: false,
      phase: 0
    }
  }
];

module.exports = steps;