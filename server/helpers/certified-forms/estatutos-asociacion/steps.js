const steps = [
  {
    type: 'start',
    title: 'Estatutos de una asociación',
    description: `Los estatutos de una asociación son el pacto que contiene los derechos y obligaciones de los asociados, y las normas que regulan dicha asociación, así como los fines y actividades que la misma va a desarrollar.`,
    isCurrentStep: true
  },
  {
    "replacement": "",
    "identifier": "id-unid-0",
    "wordToReplace": "id-unid-0",
    "question": "Nombre que tiene la asociación (pulsa en el botón 'i' en la esquina derecha para saber más)",
    "placeholder": "P. ej: Asociación de Usuarios de Bancos Cajas y Seguros",
    "type": "iText",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Las asociaciones sólo podrán tener una denominación. Las siglas o nombres abreviados que se añadan formarán parte de la denominación única. La denominación podrá ser en castellano o en alguna de las lenguas oficiales de las comunidades autónomas. También podrá ser en cualquier idioma extranjero. En todo caso, la denominación estará formada por letras del alfabeto latino y, de incluir cifras, éstas sólo podrán expresarse en números arábigos o romanos (por ejemplo: 1, 2, 5, III, VI, X). Está prohibida la denominación que:\n\n- incluya expresiones contrarias a las leyes o puedan violar los derechos fundamentales\n\n- esté formada sólo con el nombre de España, los de sus CCAA, provincias, municipios, islas y demás entidades locales, con el nombre de los órganos de las Administraciones públicas, o con los de los Estados extranjeros u organizaciones internacionales\n\n- incorpore términos dotados de valor institucional (por ejemplo: estatal, oficial, público, real)\n\n- incluya términos que induzca a error o confusión sobre su propia identidad, o sobre la clase o naturaleza de la misma\n\n- coincida o se asemeje de manera que pueda crear confusión con otras entidades ya existentes sean o no de nacionalidad española, salvo que sean filiales o delegaciones\n\n- coincida con la de otra asociación previamente inscrita en el Registro o que se encuentre incorporada al Fichero de denominaciones de asociaciones\n\n- coincida con los nombres o seudónimos de las personas físicas\n\n- coincida con una marca registrada notoria"
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-1",
    "wordToReplace": "id-unid-1",
    "question": "Domicilio social completo de la asociación",
    "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
    "type": "iText",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) de la asociación. El domicilio de la asociación puede situarse en el lugar en el que desarrolle principalmente sus actividades, o en la sede de su órgano de representación."
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-2",
    "wordToReplace": "id-unid-2",
    "question": "Fines u objetivos principales para los que se constituye la asociación",
    "placeholder": "P.ej: 1. Proteger todas las especies de abejas que se encuentran en nuestra región.  2. Promover la creación de espacios de cuidado especializado para las abejas.  3. Incentivar la investigación y desarrollo en el cuidado y preservación de las abejas en peligro de extinción.",
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
    "identifier": "id-unid-3",
    "wordToReplace": "id-unid-3",
    "question": "Actividades que se van a desarrollar para realizar los fines u objetivos de la asociación:",
    "placeholder": "P. ej. 1. Creación de becas y ayudas al estudio para promover la investigación en el campo del cuidado de las abejas.  2. Realización de estudios de campo para comprender y mejorar la vida de las abejas.  3. Acuerdos de colaboración con otras asociaciones para darles apoyo al cuidado y protección de las abejas en su región.  4. Celebración de concursos que tengan por objetivo el desarrollo de espacios urbanos para las abejas.",
    "type": "iText",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "",
      "value": ""
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-4",
    "wordToReplace": "id-unid-4",
    "question": "Territorio de actuación de la asociación",
    "type": "iRadioC",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "En toda España",
        "replacement": "La Asociación tendrá como ámbito para el desarrollo de sus actividades todo el territorio de España.",
        "replacementOriginal": "La Asociación tendrá como ámbito para el desarrollo de sus actividades todo el territorio de España.",
        "radioId": "id-unid-4_opA",
        "identifier": "id-unid-4_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "En una Comunidad Autónoma",
        "replacement": "La Asociación tendrá como ámbito autonómico territorial de actuación la Comunidad Autónoma id-unid-4_opB_0.",
        "replacementOriginal": "La Asociación tendrá como ámbito autonómico territorial de actuación la Comunidad Autónoma id-unid-4_opB_0.",
        "radioId": "id-unid-4_opB",
        "identifier": "id-unid-4_opB",
        checked: false,
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-4_opB_0",
            "wordToReplace": "id-unid-4_opB_0",
            "question": "Indique la Comunidad Autónoma en la que se desarrollarán las actividades de la asociación",
            "type": "iRadioB",
            "subType": "select",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            },
            "extraReplacements": [],
            "radios": [
              {
                "label": "Andalucía",
                "replacement": "Andalucía",
                "replacementOriginal": "Andalucía",
                "radioId": "id-unid-4_opB_0_opA",
                "identifier": "id-unid-4_opB_0_opA",
                "subSteps": [],
                "extraReplacements": [],
                checked: true,
              },
              {
                "label": "Aragón",
                "replacement": "Aragón",
                "replacementOriginal": "Aragón",
                "radioId": "id-unid-4_opB_0_opB",
                "identifier": "id-unid-4_opB_0_opB",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Principado de Asturias",
                "replacement": "Principado de Asturias",
                "replacementOriginal": "Principado de Asturias",
                "radioId": "id-unid-4_opB_0_opC",
                "identifier": "id-unid-4_opB_0_opC",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Baleares",
                "replacement": "Baleares",
                "replacementOriginal": "Baleares",
                "radioId": "id-unid-4_opB_0_opD",
                "identifier": "id-unid-4_opB_0_opD",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Canarias",
                "replacement": "Canarias",
                "replacementOriginal": "Canarias",
                "radioId": "id-unid-4_opB_0_opE",
                "identifier": "id-unid-4_opB_0_opE",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Cantabria",
                "replacement": "Cantabria",
                "replacementOriginal": "Cantabria",
                "radioId": "id-unid-4_opB_0_opF",
                "identifier": "id-unid-4_opB_0_opF",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Castilla-LaMancha",
                "replacement": "Castilla-LaMancha",
                "replacementOriginal": "Castilla-LaMancha",
                "radioId": "id-unid-4_opB_0_opG",
                "identifier": "id-unid-4_opB_0_opG",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Castilla y León",
                "replacement": "Castilla y León",
                "replacementOriginal": "Castilla y León",
                "radioId": "id-unid-4_opB_0_opH",
                "identifier": "id-unid-4_opB_0_opH",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Cataluña",
                "replacement": "Cataluña",
                "replacementOriginal": "Cataluña",
                "radioId": "id-unid-4_opB_0_opI",
                "identifier": "id-unid-4_opB_0_opI",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Extremadura",
                "replacement": "Extremadura",
                "replacementOriginal": "Extremadura",
                "radioId": "id-unid-4_opB_0_opJ",
                "identifier": "id-unid-4_opB_0_opJ",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Galicia",
                "replacement": "Galicia",
                "replacementOriginal": "Galicia",
                "radioId": "id-unid-4_opB_0_opK",
                "identifier": "id-unid-4_opB_0_opK",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "La Rioja",
                "replacement": "La Rioja",
                "replacementOriginal": "La Rioja",
                "radioId": "id-unid-4_opB_0_opL",
                "identifier": "id-unid-4_opB_0_opL",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Comunidad de Madrid",
                "replacement": "Comunidad de Madrid",
                "replacementOriginal": "Comunidad de Madrid",
                "radioId": "id-unid-4_opB_0_opM",
                "identifier": "id-unid-4_opB_0_opM",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Región de Murcia",
                "replacement": "Región de Murcia",
                "replacementOriginal": "Región de Murcia",
                "radioId": "id-unid-4_opB_0_opN",
                "identifier": "id-unid-4_opB_0_opN",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Comunidad Foral de Navarra",
                "replacement": "Comunidad Foral de Navarra",
                "replacementOriginal": "Comunidad Foral de Navarra",
                "radioId": "id-unid-4_opB_0_opO",
                "identifier": "id-unid-4_opB_0_opO",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "País Vasco",
                "replacement": "País Vasco",
                "replacementOriginal": "País Vasco",
                "radioId": "id-unid-4_opB_0_opP",
                "identifier": "id-unid-4_opB_0_opP",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Comunidad Valenciana",
                "replacement": "Comunidad Valenciana",
                "replacementOriginal": "Comunidad Valenciana",
                "radioId": "id-unid-4_opB_0_opQ",
                "identifier": "id-unid-4_opB_0_opQ",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Ciudad Autónoma de Ceuta",
                "replacement": "Ciudad Autónoma de Ceuta",
                "replacementOriginal": "Ciudad Autónoma de Ceuta",
                "radioId": "id-unid-4_opB_0_opR",
                "identifier": "id-unid-4_opB_0_opR",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              },
              {
                "label": "Ciudad Autónoma de Melilla",
                "replacement": "Ciudad Autónoma de Melilla",
                "replacementOriginal": "Ciudad Autónoma de Melilla",
                "radioId": "id-unid-4_opB_0_opS",
                "identifier": "id-unid-4_opB_0_opS",
                "subSteps": [],
                "extraReplacements": [],
                checked: false,
              }
            ]
          }
        ],
        "extraReplacements": []
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-5",
    "wordToReplace": "id-unid-5",
    "question": "¿Cuánto va a durar la asociación?",
    "type": "iRadioC",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Por duración indefinida se entiende que no tiene límite de tiempo (mientras dure la vida de sus socios). Sin embargo, si se establece una duración temporal, se debe indicar dicho plazo de duración (50 días, 1 año,...)"
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Duración indefinida",
        "replacement": "indefinido.",
        "replacementOriginal": "indefinido.",
        "radioId": "id-unid-5_opA",
        "identifier": "id-unid-5_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "Duración temporal",
        "replacement": "limitado, constituyéndose por el plazo de id-unid-5_opB_0.",
        "replacementOriginal": "limitado, constituyéndose por el plazo de id-unid-5_opB_0.",
        "radioId": "id-unid-5_opB",
        "identifier": "id-unid-5_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-5_opB_0",
            "wordToReplace": "id-unid-5_opB_0",
            "question": "Indica el plazo de duración de la asociación",
            "placeholder": "P.ej: 1 año y 60 días",
            "type": "iText",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        checked: false,
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-6",
    "wordToReplace": "id-unid-6",
    "question": "Al momento de constituir la asociación, ¿existe un patrimonio (en dinero) del cual la asociación es dueña o titular?",
    "type": "iRadioC",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "No",
        "replacement": "La Asociación cuenta con un patrimonio inicial de 0 euros.",
        "replacementOriginal": "La Asociación cuenta con un patrimonio inicial de 0 euros.",
        "radioId": "id-unid-6_opA",
        "identifier": "id-unid-6_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "Sí",
        "replacement": "La asociación cuenta en la actualidad con un patrimonio de id-unid-6_opB_0 € compuesto por las cuotas de admisión pagadas por los asociados y que se utilizarán en cada ejercicio para conseguir los objetivos y realizar actividades de la asociación.",
        "replacementOriginal": "La asociación cuenta en la actualidad con un patrimonio de id-unid-6_opB_0 € compuesto por las cuotas de admisión pagadas por los asociados y que se utilizarán en cada ejercicio para conseguir los objetivos y realizar actividades de la asociación.",
        "radioId": "id-unid-6_opB",
        "identifier": "id-unid-6_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-6_opB_0",
            "wordToReplace": "id-unid-6_opB_0",
            "question": "Indique el importe en euros del patrimonio inicial de la asociación",
            "placeholder": "P. ej: 5000",
            "type": "iNumber",
            rules: [],
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        checked: false,
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-7",
    "wordToReplace": "id-unid-7",
    "question": "¿La asociación es dueña de bienes muebles?",
    "type": "iRadioC",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Los bienes muebles son aquellos que pueden trasladarse fácilmente de un lugar a otro, pero que no solemos llevar encima cuando nos desplazamos. Los bienes muebles deben tener la característica de mantener su integridad completa y la del inmueble en el que se ubican. Por ejemplo, en este caso hablamos de mobiliario de un lugar, de los vehículos, la decoración, los aparatos electrónicos, los productos a la venta, etc."
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-unid-7_opA",
        "identifier": "id-unid-7_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "Sí",
        "replacement": "Cuenta además con los siguientes bienes: id-unid-7_opB_0. Los referidos objetos y muebles constan en inventario que lleva a cabo el Secretario de la asociación.",
        "replacementOriginal": "Cuenta además con los siguientes bienes: id-unid-7_opB_0. Los referidos objetos y muebles constan en inventario que lleva a cabo el Secretario de la asociación.",
        "radioId": "id-unid-7_opB",
        "identifier": "id-unid-7_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-7_opB_0",
            "wordToReplace": "id-unid-7_opB_0",
            "question": "Indique los bienes muebles de los que la asociación es dueña",
            "placeholder": "P. ej: 2 mesas, 1 armario,...",
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        checked: false,
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-8",
    "wordToReplace": "id-unid-8",
    "question": "Indique la fecha de cierre del ejercicio de la asociación",
    "type": "iRadioC",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": "El ejercicio social es el período de tiempo que completa una etapa social a los efectos contables y fiscales exigidos por la Ley. La decisión depende del tipo de actividad de la asociación."
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "El 31 de diciembre",
        "replacement": "el 31 de diciembre de cada año.",
        "replacementOriginal": "el 31 de diciembre de cada año.",
        "radioId": "id-unid-8_opA",
        "identifier": "id-unid-8_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "En otra fecha determinada",
        "replacement": "el id-unid-8_opB_0 de cada año.",
        "replacementOriginal": "el id-unid-8_opB_0 de cada año.",
        "radioId": "id-unid-8_opB",
        "identifier": "id-unid-8_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-8_opB_0",
            "wordToReplace": "id-unid-8_opB_0",
            "question": "Indique el día y el mes del cierre del ejercicio social",
            "placeholder": "P.ej: 31 de Mayo",
            "type": "iText",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            }
          },
        ],
        "extraReplacements": [],
        checked: false,
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-9",
    "wordToReplace": "id-unid-9",
    "question": "¿Existen requisitos que se deben cumplir para poder asociarse a la asociación? (por ejemplo: ser un médico colegiado)",
    "type": "iRadioC",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": "Además, para poder asociarse a la asociación deberán cumplirse los siguientes requisitos adicionales: id-unid-9_opA_0.",
        "replacementOriginal": "Además, para poder asociarse a la asociación deberán cumplirse los siguientes requisitos adicionales: id-unid-9_opA_0.",
        "radioId": "id-unid-9_opA",
        "identifier": "id-unid-9_opA",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-9_opA_0",
            "wordToReplace": "id-unid-9_opA_0",
            "question": "Requisitos para poder asociarse a la asociación",
            "placeholder": "P. ej: ser médico colegiado, pagar la cuota inicial,...",
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            }
          }
        ],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-unid-9_opB",
        "identifier": "id-unid-9_opB",
        "subSteps": [],
        "extraReplacements": [],
        checked: false,
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-10",
    "wordToReplace": "id-dec-10",
    "question": "¿Existirá una Sección juvenil dentro de la Asociación a la que podrán asociarse menores de edad (con consentimiento de sus tutores)? ",
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
        "replacement": "Podrán ser miembros de la Asociación de forma libre y voluntaria, aquellas personas mayores de edad, con capacidad de obrar y que no estén sujetas a condición legal que lo impida, que tengan interés en el desarrollo de los objetivos de la Asociación. Igualmente podrán formar parte de la Asociación los menores no emancipados mayores de 14 años, con el consentimiento expreso de las personas que deban suplir su capacidad.",
        "replacementOriginal": "Podrán ser miembros de la Asociación de forma libre y voluntaria, aquellas personas mayores de edad, con capacidad de obrar y que no estén sujetas a condición legal que lo impida, que tengan interés en el desarrollo de los objetivos de la Asociación. Igualmente podrán formar parte de la Asociación los menores no emancipados mayores de 14 años, con el consentimiento expreso de las personas que deban suplir su capacidad.",
        "radioId": "id-dec-10_opA",
        "identifier": "id-dec-10_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "No",
        "replacement": "Podrán ser miembros de la Asociación de forma libre y voluntaria, aquellas personas mayores de edad, con capacidad de obrar y que no estén sujetas a condición legal que lo impida, que tengan interés en el desarrollo de los objetivos de la Asociación.",
        "replacementOriginal": "Podrán ser miembros de la Asociación de forma libre y voluntaria, aquellas personas mayores de edad, con capacidad de obrar y que no estén sujetas a condición legal que lo impida, que tengan interés en el desarrollo de los objetivos de la Asociación.",
        "radioId": "id-dec-10_opB",
        "identifier": "id-dec-10_opB",
        "subSteps": [],
        "extraReplacements": [],
        checked: false,
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-11",
    "wordToReplace": "id-dec-11",
    "question": "Además de los fundadores, ¿se admitirán nuevos asociados?",
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
        "replacement": "- De número: Quienes hayan ingresado con posterioridad a la firma del acta fundacional de la asociación y se les admita como tales conforme a estos Estatutos.",
        "replacementOriginal": "- De número: Quienes hayan ingresado con posterioridad a la firma del acta fundacional de la asociación y se les admita como tales conforme a estos Estatutos.",
        "radioId": "id-dec-11_opA",
        "identifier": "id-dec-11_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-11_opB",
        "identifier": "id-dec-11_opB",
        "subSteps": [],
        "extraReplacements": [],
        checked: false,
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-12",
    "wordToReplace": "id-dec-12",
    "question": "Respecto al tipo de socios que integran la asociación, ¿existirán socios de honor? ",
    "type": "iRadioB",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Se consideran asociados de honor los que cuentan con mucho prestigio o contribuyen de modo destacable con el cumplimiento de los objetivos de la asociación"
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": "- Honoríficos: Quienes por decisión de la Asamblea General colaboren de forma notable en el desarrollo de los fines de la Asociación y/o quienes destaquen por ayudar con medios económicos y materiales a la Asociación.",
        "replacementOriginal": "- Honoríficos: Quienes por decisión de la Asamblea General colaboren de forma notable en el desarrollo de los fines de la Asociación y/o quienes destaquen por ayudar con medios económicos y materiales a la Asociación.",
        "radioId": "id-dec-12_opA",
        "identifier": "id-dec-12_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-12_opB",
        "identifier": "id-dec-12_opB",
        "subSteps": [],
        "extraReplacements": [],
        checked: false,
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-13",
    "wordToReplace": "id-dec-13",
    "question": "Número de cuotas que debe dejar de pagar un asociado para perder su condición de tal",
    "placeholder": "P. ej: 4",
    "type": "iNumber",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    },
    "rules": []
  },
  {
    "replacement": "",
    "identifier": "id-dec-14",
    "wordToReplace": "id-dec-14",
    "question": "Retribución de los cargos de la Junta Directiva de la asociación",
    "type": "iRadioC",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Gratuitos",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-14_opA",
        "identifier": "id-dec-14_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "Retribuidos",
        "replacement": "Los cargos que componen la Junta Directiva serán retribuidos en la cantidad que se indica a continuación:\n\n- Presidente: id-dec-14_opB_0 € anuales\n\n- Vicepresidente: id-dec-14_opB_1 € anuales\n\n- Secretario: id-dec-14_opB_2 € anuales\n\n- Tesorero: id-dec-14_opB_3 € anuales\n\n- Vocales: id-dec-14_opB_4 € anuales",
        "replacementOriginal": "Los cargos que componen la Junta Directiva serán retribuidos en la cantidad que se indica a continuación:\n\n- Presidente: id-dec-14_opB_0 € anuales\n\n- Vicepresidente: id-dec-14_opB_1 € anuales\n\n- Secretario: id-dec-14_opB_2 € anuales\n\n- Tesorero: id-dec-14_opB_3 € anuales\n\n- Vocales: id-dec-14_opB_4 € anuales",
        "radioId": "id-dec-14_opB",
        "identifier": "id-dec-14_opB",
        checked: false,
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-14_opB_0",
            "wordToReplace": "id-dec-14_opB_0",
            "question": "Retribución anual del Presidente",
            "type": "iNumber",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            },
            "rules": []
          },
          {
            "replacement": "",
            "identifier": "id-dec-14_opB_1",
            "wordToReplace": "id-dec-14_opB_1",
            "question": "Retribución anual del Vicepresidente",
            "type": "iNumber",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            },
            "rules": []
          },
          {
            "replacement": "",
            "identifier": "id-dec-14_opB_2",
            "wordToReplace": "id-dec-14_opB_2",
            "question": "Retribución anual del Secretario",
            "type": "iNumber",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            },
            "rules": []
          },
          {
            "replacement": "",
            "identifier": "id-dec-14_opB_3",
            "wordToReplace": "id-dec-14_opB_3",
            "question": "Retribución anual del Tesorero",
            "type": "iNumber",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            },
            "rules": []
          },
          {
            "replacement": "",
            "identifier": "id-dec-14_opB_4",
            "wordToReplace": "id-dec-14_opB_4",
            "question": "Retribución anual de los Vocales",
            "type": "iNumber",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            },
            "rules": []
          }
        ],
        "extraReplacements": []
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-15",
    "wordToReplace": "id-dec-15",
    "question": "Porcentaje mínimo que se necesita para solicitar y convocar una reunión de la Junta Directiva",
    "placeholder": "P. ej: 60",
    "type": "iNumber",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "La Junta Directiva se reunirá cuando lo considere el Presidente y cuando lo solicite el nº mínimo de asociados que se establezca en estos Estatutos."
    },
    "rules": []
  },
  {
    "type": "iForEach",
    "value": 3,
    "min": "3",
    "max": "20",
    "identifier": "id-dec-16",
    "wordToReplace": "id-dec-16",
    "question": "Número de asociados promotores",
    "replacement": "",
    "indications": {
      "areIndications": null,
      "indicationsType": null,
      "indicationsValue": null
    },
    "content": [
      {
        "identifier": "id-dec-16",
        "wordToReplace": "id-dec-16",
        "extraReplacements": [],
        "modifiedReplacements": [],
        "modifiedExtraReplacements": [],
        "replacement": "id-dec-16_0",
        "replacementOriginal": "id-dec-16_0",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-16_0",
            "wordToReplace": "id-dec-16_0",
            "question": "Nombre y apellidos del promotor ->(index) (o denominación social en caso de ser una persona jurídica)",
            "questionOriginal": "Nombre y apellidos del promotor ->(index) (o denominación social en caso de ser una persona jurídica)",
            hasIndex: true,
            "type": "iText",
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
    "identifier": "id-dec-17",
    "wordToReplace": "id-dec-17",
    "question": "Lugar (ciudad o población) donde se realiza y firman los Estatutos:",
    "placeholder": "P. ej. Albacete",
    "type": "iText",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Indique aquí la localidad de celebración y firma del contrato."
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-18",
    "wordToReplace": "id-dec-18",
    "question": "Fecha en la que se firman los Estatutos",
    "type": "iDate",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    }
  },
  {
    type: 'end',
    identifier: 'end',
    wordToReplace: 'end',
    title: 'Estatutos de una asociación',
    description: `Los estatutos de una asociación son el pacto que contiene los derechos y obligaciones de los asociados, y las normas que regulan dicha asociación, así como los fines y actividades que la misma va a desarrollar.`,
    checkoutProcess: {
      isInited: false,
      phase: 0
    }
  }
];

module.exports = steps;