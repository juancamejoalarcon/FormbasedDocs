const steps = [
  {
    type: 'start',
    title: 'Estatutos de una Unión Temporal De Empresas',
    description: `Este documento está hecho para la creación de estatutos de una Unión Temporal de Empresas. Los estatutos de una UTE son el pacto que contiene derechos y obligaciones de los socios, y las normas que regulan dicha unión.`,
    isCurrentStep: true
  },
  {
    "replacement": "",
    "identifier": "id-unid-0",
    "wordToReplace": "id-unid-0",
    "question": "Nombre o denominación que tiene la Unión Temporal de Empresas",
    "placeholder": "P. ej: Metalurgia Juan, S.A. y Antonio Metalurgia, SL.",
    "type": "iText",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Esta denominación se corresponde con la que tiene una, varias o todas las empresas integrantes."
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-1",
    "wordToReplace": "id-unid-1",
    "question": "¿Cuándo empezará a operar la UTE? (Comienzo de sus actividades)",
    "type": "iRadioC",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "En la misma fecha de la escritura de constitución ante Notario",
        "replacement": "del otorgamiento de la escritura de constitución",
        "replacementOriginal": "del otorgamiento de la escritura de constitución",
        "radioId": "id-unid-1_opA",
        "identifier": "id-unid-1_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true
      },
      {
        "label": "En una fecha distinta",
        "replacement": "id-unid-1_opB_0",
        "replacementOriginal": "id-unid-1_opB_0",
        "radioId": "id-unid-1_opB",
        "identifier": "id-unid-1_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-1_opB_0",
            "wordToReplace": "id-unid-1_opB_0",
            "question": "Indica la fecha en que empezará a operar la UTE",
            "type": "iDate",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        checked: false
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-2",
    "wordToReplace": "id-unid-2",
    "question": "Indique las actividades que va a realizar la sociedad (objeto)",
    "type": "iRadioB",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "El objeto de las UTES ha de ser el desarrollo o ejecución exclusivo de una obra, servicio o suministro concreto, dentro o fuera de España"
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Una obra",
        "replacement": "una obra",
        "replacementOriginal": "una obra",
        "radioId": "id-unid-2_opA",
        "identifier": "id-unid-2_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true
      },
      {
        "label": "Un servicio",
        "replacement": "un servicio",
        "replacementOriginal": "un servicio",
        "radioId": "id-unid-2_opB",
        "identifier": "id-unid-2_opB",
        "subSteps": [],
        "extraReplacements": [],
        checked: false
      },
      {
        "label": "Un suministro",
        "replacement": "un suministro",
        "replacementOriginal": "un suministro",
        "radioId": "id-unid-2_opC",
        "identifier": "id-unid-2_opC",
        "subSteps": [],
        "extraReplacements": [],
        checked: false
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-3",
    "wordToReplace": "id-unid-3",
    "question": "Especifique las actividades que va a realizar la UTE (obra, servicio o suministro)",
    "placeholder": "P. ej: construcción de un edificio de 8 plantas en Santa Cruz de Tenerife",
    "type": "iText",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-4",
    "wordToReplace": "id-unid-4",
    "question": "Se anexa un documento o memoria a los estatutos que especifique con más detalle las actividades que realizará la UTE",
    "type": "iRadioB",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": "En la Memoria adjunta se expresa con más detalle el indicado objeto, con determinación de las actividades y medios que habrán de utilizarse para su realización.",
        "replacementOriginal": "En la Memoria adjunta se expresa con más detalle el indicado objeto, con determinación de las actividades y medios que habrán de utilizarse para su realización.",
        "radioId": "id-unid-4_opA",
        "identifier": "id-unid-4_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: false
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-unid-4_opB",
        "identifier": "id-unid-4_opB",
        "subSteps": [],
        "extraReplacements": [],
        checked: true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-5",
    "wordToReplace": "id-unid-5",
    "question": "Domicilio social completo de la UTE (dirección de la persona que lleve la gerencia común)",
    "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
    "type": "iText",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "El domicilio debe ser el de la persona física o jurídica que lleve la gerencia común."
    }
  },
  {
    "type": "iForEach",
    "value": 2,
    "min": "2",
    "max": "4",
    "identifier": "id-unid-6",
    "wordToReplace": "id-unid-6",
    "question": "Indique cuantas empresas formarán la UTE",
    "replacement": "",
    "indications": {
      "areIndications": null,
      "indicationsType": null,
      "indicationsValue": null
    },
    "content": [
      {
        "identifier": "id-unid-6",
        "wordToReplace": "id-unid-6",
        "extraReplacements": [],
        "modifiedReplacements": [],
        "modifiedExtraReplacements": [],
        "replacement": "- La sociedad id-unid-6_1, aportará al fondo común operativo el id-unid-6_2 %.",
        "replacementOriginal": "- La sociedad id-unid-6_1, aportará al fondo común operativo el id-unid-6_2 %.",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-6_1",
            "wordToReplace": "id-unid-6_1",
            hasIndex: true,
            "question": "Indique el nombre de la empresa miembro ->(index) (sea persona física o jurídica)",
            "questionOriginal": "Indique el nombre de la empresa miembro ->(index) (sea persona física o jurídica)",
            "placeholder": "P.ej: Metalurgia Juan S.L",
            "type": "iText",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            }
          },
          {
            "replacement": "",
            "identifier": "id-unid-6_2",
            "wordToReplace": "id-unid-6_2",
            "question": "Porcentaje de participación de la empresa en la UTE",
            "placeholder": "P. ej: 50",
            "type": "iNumber",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            }
          }
        ]
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-7",
    "wordToReplace": "id-unid-7",
    "question": "¿Se establece un comité de gerencia?",
    "type": "iRadioB",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Es el órgano encargado de proyectar la dirección de la obra o servicio de que se trate. Controla y dirige la ejecución del fin para el que ha sido constituida. El comité se reunirá todas las veces que sea necesario y adoptará sus acuerdos por mayoría.\n\nEn la práctica, la ejecución del proyecto puede llevarse a cabo por:\n\nLa propia UTE (con su propio personal).\nLas empresas miembros. Éstas se distribuyen los distintos trabajos que haya que realizar.\nUn tercero subcontratado."
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": "La UTE se hallará sujeta a la supervisión de un Comité, compuesto por un representante de cada uno de las empresas miembros.\n\nDe entre sus miembros se designará un Presidente y un Secretario.\n\nEl Comité se reunirá de forma periódica, conforme se acuerde, y en las ocasiones extraordinarias que se consideren necesarias, mediante su convocatoria acompañada del orden del día. También se podrá reunir a petición de cualquiera de las empresas miembros.\n\nEl Comité tendrá todas las facultades necesarias para el cumplimiento del objeto de la UTE.\n\nLos acuerdos se tomarán por unanimidad, y si no se lograse la unanimidad, se someterán a la consideración de los órganos de gobierno de cada de las empresas miembros y, si tampoco se lograse acuerdo, la cuestión será sometida a arbitraje, conforme a lo establecido en los presentes estatutos en lo relativo al arbitraje, sin perjuicio de poder adoptar, en su caso, las medidas provisionales necesarias de modo que no entorpezcan el desarrollo de las obras.",
        "replacementOriginal": "La UTE se hallará sujeta a la supervisión de un Comité, compuesto por un representante de cada uno de las empresas miembros.\n\nDe entre sus miembros se designará un Presidente y un Secretario.\n\nEl Comité se reunirá de forma periódica, conforme se acuerde, y en las ocasiones extraordinarias que se consideren necesarias, mediante su convocatoria acompañada del orden del día. También se podrá reunir a petición de cualquiera de las empresas miembros.\n\nEl Comité tendrá todas las facultades necesarias para el cumplimiento del objeto de la UTE.\n\nLos acuerdos se tomarán por unanimidad, y si no se lograse la unanimidad, se someterán a la consideración de los órganos de gobierno de cada de las empresas miembros y, si tampoco se lograse acuerdo, la cuestión será sometida a arbitraje, conforme a lo establecido en los presentes estatutos en lo relativo al arbitraje, sin perjuicio de poder adoptar, en su caso, las medidas provisionales necesarias de modo que no entorpezcan el desarrollo de las obras.",
        "radioId": "id-unid-7_opA",
        "identifier": "id-unid-7_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true
      },
      {
        "label": "No",
        "replacement": "No se establece un Comité de Gerencia",
        "replacementOriginal": "No se establece un Comité de Gerencia",
        "radioId": "id-unid-7_opB",
        "identifier": "id-unid-7_opB",
        "subSteps": [],
        "extraReplacements": [],
        checked: false
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-8",
    "wordToReplace": "id-unid-8",
    "question": "Nombre completo, incluyendo apellidos, del gerente único",
    "placeholder": "P. ej. Martino Montano Holguín",
    "type": "iText",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Debe existir un gerente único de la UTE, con poderes suficientes de todos y cada uno de sus miembros para ejercitar los derechos y contraer las obligaciones correspondientes. El gerente debe hacerlo constar así en cuantos actos y contratos suscriba en nombre de la Unión, y responderá ante la UTE de sus operaciones."
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-9",
    "wordToReplace": "id-unid-9",
    "question": "Dirección del lugar donde reside el gerente único",
    "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
    "type": "iText",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia"
    }
  },
  {
    type: 'end',
    identifier: 'end',
    wordToReplace: 'end',
    title: 'Estatutos de una Unión Temporal De Empresas',
    description: `Este documento está hecho para la creación de estatutos de una Unión Temporal de Empresas. Los estatutos de una UTE son el pacto que contiene derechos y obligaciones de los socios, y las normas que regulan dicha unión.`,
    checkoutProcess: {
      isInited: false,
      phase: 0
    }
  }
];

module.exports = steps;