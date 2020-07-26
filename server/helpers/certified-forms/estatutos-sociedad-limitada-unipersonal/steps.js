const steps = [
  {
    type: 'start',
    title: 'Estatutos de una Sociedad Limitada Unipersonal',
    description: `Los estatutos de una sociedad son el pacto que contiene los derechos y obligaciones de los socios, y las normas que regulan dicha sociedad. Supone uno de los pasos iniciales para constituir una sociedad y deben estar en la escritura de constitución de la misma.`,
    isCurrentStep: true
  },
  {
    "replacement": "",
    "identifier": "id-unid-0",
    "wordToReplace": "id-unid-0",
    "question": "Nombre que tiene la sociedad limitada",
    "placeholder": "P.ej: Metalurgia Juan, S.L.U",
    "mandatory": true,
    "isFocused": true,
    "type": "iText",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "No olvides incluir tras el nombre las siglas SLU"
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-1",
    "wordToReplace": "id-unid-1",
    "question": "Domicilio social completo de la empresa (dirección)",
    "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del domicilio social"
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-2",
    "wordToReplace": "id-unid-2",
    "question": "Indique las actividades que va a realizar la sociedad (objeto social)",
    "placeholder": "P.ej: Venta de vehículos a motor",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "El objeto social de una empresa es el conjunto de actividades que va a desarrollar la sociedad. El objeto social de una empresa debe ser posible, lícito y determinado. Si no se redacta correctamente, el Registro Mercantil rechazará la inscripción de la escritura, lo que significa que la empresa no estará válidamente constituida. Por ejemplo, hay que tener cuidado con incluir expresiones como «todas las actividades relacionadas con…» o «…,etcétera…» puesto que pueden interpretarse como objeto social no determinado."
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-3",
    "wordToReplace": "id-unid-3",
    "question": "¿Cuánto va a durar la sociedad?",
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
        "replacement": "indefinida",
        "replacementOriginal": "indefinida",
        "radioId": "id-unid-3_opA",
        "identifier": "id-unid-3_opA",
        "subSteps": [],
        "checked": true,
        "extraReplacements": []
      },
      {
        "label": "Duración temporal",
        "replacement": "limitada, constituyéndose por el plazo máximo de id-unid-3_opB_0, que empezará a contarse desde la fecha de inscripción de la sociedad en el Registro Mercantil. Transcurrido dicho plazo la sociedad quedará disuelta de pleno derecho, salvo que previo a la finalización del plazo anteriormente establecido se hubiese acordado expresamente  una prórroga y se haya dejado constancia de la misma mediante inscripción de la prórroga en el Registro Mercantil.",
        "replacementOriginal": "limitada, constituyéndose por el plazo máximo de id-unid-3_opB_0, que empezará a contarse desde la fecha de inscripción de la sociedad en el Registro Mercantil. Transcurrido dicho plazo la sociedad quedará disuelta de pleno derecho, salvo que previo a la finalización del plazo anteriormente establecido se hubiese acordado expresamente  una prórroga y se haya dejado constancia de la misma mediante inscripción de la prórroga en el Registro Mercantil.",
        "radioId": "id-unid-3_opB",
        "identifier": "id-unid-3_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-3_opB_0",
            "wordToReplace": "id-unid-3_opB_0",
            "question": "Indica el plazo de duración de la sociedad",
            "placeholder": "P.ej: 1 año y 60 días",
            "mandatory": true,
            "type": "iText",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            }
          }
        ],
        "checked": false,
        "extraReplacements": []
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-4",
    "wordToReplace": "id-unid-4",
    "question": "Indique la fecha de cierre del ejercicio social de la empresa",
    "type": "iRadioC",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "El ejercicio social es el período de tiempo que completa una etapa social a los efectos contables y fiscales exigidos por la Ley.\n\nToda sociedad mercantil tiene una finalidad de lucro, y las ganancias, el cumplimiento por el órgano de administración de determinadas obligaciones contables y documentales, la aprobación de cuentas, el destino del resultado, los impuestos que gravan las ganancias, etc., están siempre en relación con un tiempo determinado, que tiene un inicio y un final temporal, el llamado ejercicio social.\n\nEl artículo 9 del T.R.L.S.A. que al regular el contenido mínimo de los Estatutos Sociales dispone que deberá constar, entre otros, (apartado j):  \"La fecha de cierre del ejercicio social. A falta de disposición estatutaria se entenderá que el ejercicio termina el 31 de diciembre de cada año\", de donde se deduce que los accionistas de la sociedad pueden decidir otra fecha de cierre del ejercicio social diferente a la señalada, pero que una vez decidida ésta, los ejercicios sociales se cerrarán en dicha fecha, y en su defecto, el 31 de diciembre, \"de cada año\", por lo que el periodo de tiempo de cada ejercicio será de un año, independientemente de cuál sea la fecha de cierre.\n\n"
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "El 31 de diciembre",
        "replacement": "El ejercicio social termina el 31 de diciembre de cada año.",
        "replacementOriginal": "El ejercicio social termina el 31 de diciembre de cada año.",
        "radioId": "id-unid-4_opA",
        "identifier": "id-unid-4_opA",
        "subSteps": [],
        "checked": true,
        "extraReplacements": []
      },
      {
        "label": "En una fecha distinta",
        "replacement": "El ejercicio social terminará el día id-unid-4_opB_0 de cada año.",
        "replacementOriginal": "El ejercicio social terminará el día id-unid-4_opB_0 de cada año.",
        "radioId": "id-unid-4_opB",
        "identifier": "id-unid-4_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-4_opB_0",
            "wordToReplace": "id-unid-4_opB_0",
            "question": "Indique el día y el mes del cierre del ejercicio social",
            "placeholder": "P.ej: 31 de Mayo",
            "mandatory": true,
            "type": "iText",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            }
          }
        ],
        "checked": false,
        "extraReplacements": []
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-5",
    "wordToReplace": "id-unid-5",
    "question": "Indique el capital social de la empresa",
    "placeholder": "P.ej: 6000",
    "mandatory": true,
    "type": "iNumber",
    rules: [],
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "No puede ser inferior a 3.000,00 € y deberá estar totalmente suscrito y desembolsado en el momento de constitución de la Sociedad. Sólo pueden hacerse aportaciones económicas, en ningún caso pueden ser trabajo personal."
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-6",
    "wordToReplace": "id-unid-6",
    "question": "¿En cuántas participaciones sociales se divide el capital? (Número de participaciones sociales)",
    "placeholder": "P.ej: 150",
    "type": "iNumber",
    rules: [],
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Es recomendable no repartir el capital social en una sola participación social, sino en varias, así, en caso de que el socio único decida que entre otro socio en la sociedad, podrá venderle parte de las participaciones.\n\nLas características de las participaciones sociales de una sociedad limitada son:\n\n- Representan una parte alícuota del capital social y deben de estar numeradas.\n\n- Las participaciones suponen un valor nominal, y tienen carácter de indivisibles y acumulables.\n\n- Con las excepciones que señala la LSRL las participaciones atribuyen los mismos derechos a todos los socios de la mercantil.\n\n- Dado que las participaciones son acumulables un socio de una s.l. puede tener todas o varias participaciones.\n\n- Las participaciones son indivisibles y no susceptibles de ser fraccionadas, por tanto el número de socios no pueda incrementarse ilimitadamente al margen del aumento de capital de la sociedad."
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-7",
    "wordToReplace": "id-unid-7",
    "question": "Cantidad en euros del valor nominal de cada participación",
    "placeholder": "P.ej: 300",
    "type": "iText",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "El capital social de las sociedades limitadas se divide en participaciones, y cada participación tendrá un valor nominal que vendrá determinado por la proporción que exista entre el capital social (no inferior a 3.000 €) y el número de participaciones que se creen. A continuación te pongo algunos ejemplos:\n\nSi se crea una SL con un capital social de 3.000 € dividido en 3.000 participaciones, el valor nominal de cada participación será de 1 € (3.000 € / 3.000 participaciones).\nSi la SL se constituye con un capital social de 4.000 € y se crean 100 participaciones, el valor nominal de cada participación será de 40 € (4.000 € / 100 participaciones).\nTanto el número de participaciones que se creen como el capital social que se aporte (siempre respetando el mínimo legal de 3.000 €), dependerá de la voluntad de los socios de cada SL, teniendo en cuenta que si las participaciones tienen un valor nominal inferior será más fácil de que el número de partícipes que suscriban esas participaciones sea mayor, es decir, habrá más socios en esa sociedad, aunque este hecho tampoco impide que todas las participaciones sean suscritas por un socio único o dos."
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-8",
    "wordToReplace": "id-unid-8",
    "question": "El socio único realiza aportaciones dinerarias a la sociedad (que consisten en una cantidad de dinero)",
    "type": "iRadioB",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Al margen de las aportaciones no dinerarias que pueda realizar."
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": "- aportaciones dinerarias",
        "replacementOriginal": "- aportaciones dinerarias",
        "radioId": "id-unid-8_opA",
        "identifier": "id-unid-8_opA",
        "subSteps": [],
        "checked": true,
        "extraReplacements": []
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-unid-8_opB",
        "identifier": "id-unid-8_opB",
        "subSteps": [],
        "checked": false,
        "extraReplacements": []
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-9",
    "wordToReplace": "id-unid-9",
    "question": "El socio único realiza aportaciones NO dinerarias a la sociedad ( consistentes en bienes o derechos valorables económicamente)",
    "type": "iRadioB",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "El capital social de una Sociedad Anónima o Limitada puede estar formado por aportaciones no necesariamente dinerarias. El supuesto más común es la aportación dineraria de los socios, con suscripción de las participaciones o acciones correspondientes. Sin embargo, cuando constituimos una sociedad o ampliamos su capital podemos hacerlo a través de aportaciones no dinerarias.\n\nPueden consistir en bienes muebles o inmuebles, derechos de crédito, propiedad industrial o empresas, entre otros. No obstante, en ningún caso podrá aportarse el trabajo o los servicios."
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Sí",
        "replacement": "- aportaciones no dinerarias",
        "replacementOriginal": "- aportaciones no dinerarias",
        "radioId": "id-unid-9_opA",
        "identifier": "id-unid-9_opA",
        "subSteps": [],
        "checked": true,
        "extraReplacements": []
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-unid-9_opB",
        "identifier": "id-unid-9_opB",
        "subSteps": [],
        "checked": false,
        "extraReplacements": []
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-10",
    "wordToReplace": "id-dec-10",
    "question": "Los administradores de la sociedad permanecerán en el cargo:",
    "type": "iRadioC",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Aunque el nombramiento suele ser por tiempo indefinido, esto no significa que no puedan nombrarse por un plazo determinado que se establece en los Estatutos de la sociedad, en cuyo caso podrán ser reelegidos una o varias veces por periodos de igual duración."
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "de forma indefinida",
        "replacement": "Los Administradores ejercerán su cargo por un plazo indefinido.",
        "replacementOriginal": "Los Administradores ejercerán su cargo por un plazo indefinido.",
        "radioId": "id-dec-10_opA",
        "identifier": "id-dec-10_opA",
        "subSteps": [],
        "checked": true,
        "extraReplacements": []
      },
      {
        "label": "1 año",
        "replacement": "Los Administradores ejercerán su cargo por un plazo máximo de 1 año. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "replacementOriginal": "Los Administradores ejercerán su cargo por un plazo máximo de 1 año. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "radioId": "id-dec-10_opB",
        "identifier": "id-dec-10_opB",
        "subSteps": [],
        "checked": false,
        "extraReplacements": []
      },
      {
        "label": "2 años",
        "replacement": "Los Administradores ejercerán su cargo por un plazo máximo de 2 años. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "replacementOriginal": "Los Administradores ejercerán su cargo por un plazo máximo de 2 años. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "radioId": "id-dec-10_opC",
        "identifier": "id-dec-10_opC",
        "subSteps": [],
        "checked": false,
        "extraReplacements": []
      },
      {
        "label": "5 años",
        "replacement": "Los Administradores ejercerán su cargo por un plazo máximo de 5 años. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "replacementOriginal": "Los Administradores ejercerán su cargo por un plazo máximo de 5 años. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "radioId": "id-dec-10_opD",
        "identifier": "id-dec-10_opD",
        "subSteps": [],
        "checked": false,
        "extraReplacements": []
      },
      {
        "label": "Otro plazo",
        "replacement": "Los Administradores ejercerán su cargo por plazo de id-dec-10_opE_0. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "replacementOriginal": "Los Administradores ejercerán su cargo por plazo de id-dec-10_opE_0. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "radioId": "id-dec-10_opE",
        "identifier": "id-dec-10_opE",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-10_opE_0",
            "wordToReplace": "id-dec-10_opE_0",
            "question": "Indique el plazo de duración del cargo de los administradores de la sociedad",
            "placeholder": "P.ej: 1 año y 6 meses",
            "mandatory": true,
            "type": "iText",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            }
          }
        ],
        "checked": false,
        "extraReplacements": []
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-16",
    "wordToReplace": "id-dec-16",
    "question": "Retribución del cargo de administrador de la sociedad",
    "type": "iRadioC",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "En principio, el administrador de una sociedad limitada no es un cargo retribuido como tal administrador, salvo que expresamente así se disponga en los estatutos."
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Gratuito",
        "replacement": "El cargo de administrador no será retribuido. ",
        "replacementOriginal": "El cargo de administrador no será retribuido. ",
        "radioId": "id-dec-16_opA",
        "identifier": "id-dec-16_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "Retribuido",
        "replacement": "El cargo de administrador será retribuido. id-dec-16_opB_0",
        "replacementOriginal": "El cargo de administrador será retribuido. id-dec-16_opB_0",
        "radioId": "id-dec-16_opB",
        "identifier": "id-dec-16_opB",
        checked: false,
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-16_opB_0",
            "wordToReplace": "id-dec-16_opB_0",
            "question": "Especifica el tipo de retribución de los administradores de la sociedad",
            "type": "iRadioC",
            "indications": {
              "areIndications": "",
              "indicationsType": "",
              "value": ""
            },
            "extraReplacements": [],
            "radios": [
              {
                "label": "Una cantidad anual",
                "replacement": "La retribución se fija en una cantidad anual (no variable) que se determinará cada año por la junta general.",
                "replacementOriginal": "La retribución se fija en una cantidad anual (no variable) que se determinará cada año por la junta general.",
                "radioId": "id-dec-16_opB_0_opA",
                "identifier": "id-dec-16_opB_0_opA",
                "subSteps": [],
                "extraReplacements": [],
                checked: true,
              },
              {
                "label": "Dietas asistenciales",
                "replacement": "La retribución de la cantidad a percibir será la establecida en concepto de dietas de asistencia a las reuniones del órgano de administración que ascenderá a la cantidad de id-dec-16_opB_0_opB_0 € por reunión. La cuantía máxima de esta retribución deberá ser aprobada por la junta general.",
                "replacementOriginal": "La retribución de la cantidad a percibir será la establecida en concepto de dietas de asistencia a las reuniones del órgano de administración que ascenderá a la cantidad de id-dec-16_opB_0_opB_0 € por reunión. La cuantía máxima de esta retribución deberá ser aprobada por la junta general.",
                "radioId": "id-dec-16_opB_0_opB",
                "identifier": "id-dec-16_opB_0_opB",
                checked: false,
                "subSteps": [
                  {
                    "replacement": "",
                    "identifier": "id-dec-16_opB_0_opB_0",
                    "wordToReplace": "id-dec-16_opB_0_opB_0",
                    "question": "Cantidad que recibirá el administrador por asistir a las juntas",
                    "placeholder": "P. ej: 300",
                    "mandatory": false,
                    "type": "iNumber",
                    rules: [],
                    "indications": {
                      "areIndications": "",
                      "indicationsType": "",
                      "value": ""
                    }
                  }
                ],
                "extraReplacements": []
              },
              {
                "label": "Porcentaje en beneficios",
                "replacement": "La retribución consistirá en una participación del id-dec-16_opB_0_opC_0 % en los beneficios repartibles entre los socios. La cuantía máxima de esta retribución deberá ser aprobada por la junta general y permanecerá vigente, salvo que se apruebe modificación expresa de la misma.",
                "replacementOriginal": "La retribución consistirá en una participación del id-dec-16_opB_0_opC_0 % en los beneficios repartibles entre los socios. La cuantía máxima de esta retribución deberá ser aprobada por la junta general y permanecerá vigente, salvo que se apruebe modificación expresa de la misma.",
                "radioId": "id-dec-16_opB_0_opC",
                "identifier": "id-dec-16_opB_0_opC",
                checked: false,
                "subSteps": [
                  {
                    "replacement": "",
                    "identifier": "id-dec-16_opB_0_opC_0",
                    "wordToReplace": "id-dec-16_opB_0_opC_0",
                    "question": "Indica el porcentaje sobre los beneficios sociales que recibirá el administrador por su cargo (este no puede ser mayor al 10%))",
                    "placeholder": "P. ej: 8",
                    "mandatory": false,
                    "type": "iNumber",
                    rules: [],
                    "indications": {
                      "areIndications": "",
                      "indicationsType": "",
                      "value": ""
                    }
                  }
                ],
                "extraReplacements": []
              },
              {
                "label": "Otra forma",
                "replacement": "La retribución consistirá en id-dec-16_opB_0_opD_0. La cuantía máxima de esta retribución deberá ser aprobada por la junta general y permanecerá vigente, salvo que se apruebe modificación expresa de la misma.",
                "replacementOriginal": "La retribución consistirá en id-dec-16_opB_0_opD_0. La cuantía máxima de esta retribución deberá ser aprobada por la junta general y permanecerá vigente, salvo que se apruebe modificación expresa de la misma.",
                "radioId": "id-dec-16_opB_0_opD",
                "identifier": "id-dec-16_opB_0_opD",
                checked: false,
                "subSteps": [
                  {
                    "replacement": "",
                    "identifier": "id-dec-16_opB_0_opD_0",
                    "wordToReplace": "id-dec-16_opB_0_opD_0",
                    "question": "Sistema de retribuciónasd",
                    "type": "iText",
                    "indications": {
                      "areIndications": "",
                      "indicationsType": "",
                      "value": ""
                    }
                  }
                ],
                "extraReplacements": []
              }
            ]
          }
        ],
        "extraReplacements": []
      }
    ]
  },
  {
    type: 'end',
    identifier: 'end',
    wordToReplace: 'end',
    title: 'Estatutos de una Sociedad Limitada Unipersonal',
    description: `Los estatutos de la sociedad son el pacto que contiene los derechos y obligaciones del socio, y las normas que regulan dicha sociedad. Supone uno de los pasos iniciales para constituir una sociedad y deben estar en la escritura de constitución de la misma.`,
    checkoutProcess: {
      isInited: false,
      phase: 0
    }
  }
];

module.exports = steps;