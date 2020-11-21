const steps = [
  {
    type: 'start',
    title: 'Declaración jurada',
    description: `Una declaración jurada es una manifestación escrita o verbal cuya veracidad es asegurada mediante un juramento ante una autoridad judicial o administrativa.`,
    isCurrentStep: true
  },
  {
    "replacement": "",
    "identifier": "id-unid-0",
    "wordToReplace": "id-unid-0",
    "question": "Organismo o institución a la que se dirige la declaración jurada:",
    "placeholder": "P. ej: Registro Civil",
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
    "identifier": "id-unid-1",
    "wordToReplace": "id-unid-1",
    "question": "Motivos por los que se envía la declaración jurada:",
    "placeholder": "P. ej: Prestación por cese de actividad de las personas autónomas",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "textarea",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "El motivo puede ser, por ejemplo, si es para una beca que ofrece una fundación, podría escribirse: Becas y Ayudas al estudio Bachillerato curso 2020/2021\n\t\t\t\t\t\t\t\t\t\t\t "
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-2",
    "wordToReplace": "id-unid-2",
    "question": "Lugar (ciudad o población) donde se realiza y firma el contrato:",
    "placeholder": "P. ej: Albacete",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Indique aquí la localidad de celebración de esta declaración jurada"
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-3",
    "wordToReplace": "id-unid-3",
    "question": "Fecha en la que se firma la declaración",
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
    "identifier": "id-unid-4",
    "wordToReplace": "id-unid-4",
    "question": "La persona que realiza la declaración jurada es:",
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
        "label": "Hombre",
        "replacement": "D.",
        "replacementOriginal": "D.",
        "radioId": "id-dec-4_opA",
        "identifier": "id-dec-4_opA",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "Mujer",
        "replacement": "Dª",
        "replacementOriginal": "Dª",
        "radioId": "id-dec-4_opB",
        "identifier": "id-dec-4_opB",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "Otro",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-4_opC",
        "identifier": "id-dec-4_opC",
        "subSteps": [],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-5",
    "wordToReplace": "id-unid-5",
    "question": "Nombre completo de la persona que realiza la declaración, incluyendo los apellidos",
    "placeholder": "P. ej. Martino Montano Holguín",
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
    "identifier": "id-unid-6",
    "wordToReplace": "id-unid-6",
    "question": "Tipo de documento de identificación de la persona:",
    "type": "iRadioB",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Seleccione el tipo de documento de identificación de la persona que realiza la declaración jurada"
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "DNI",
        "replacement": "DNI",
        "replacementOriginal": "DNI",
        "radioId": "id-dec-6_opA",
        "identifier": "id-dec-6_opA",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "NIE",
        "replacement": "NIE",
        "replacementOriginal": "NIE",
        "radioId": "id-dec-6_opB",
        "identifier": "id-dec-6_opB",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "Pasaporte",
        "replacement": "pasaporte",
        "replacementOriginal": "pasaporte",
        "radioId": "id-dec-6_opC",
        "identifier": "id-dec-6_opC",
        "subSteps": [],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-7",
    "wordToReplace": "id-unid-7",
    "question": "Número del documento seleccionado en la pregunta anterior:",
    "placeholder": "P. ej. 83558071Z",
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
    "identifier": "id-unid-8",
    "wordToReplace": "id-unid-8",
    "question": "Dirección del lugar donde reside la persona que realiza la declaración:",
    "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del domicilio"
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-9",
    "wordToReplace": "id-unid-9",
    "question": "La persona que realiza la declaración, actúa:",
    "type": "iRadioC",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    },
    "extraReplacements": [
      {
        "identifier": "idunid9-extra-0",
        "wordToReplace": "idunid9-extra-0",
        "insideId": "opA"
      },
    ],
    "radios": [
      {
        "label": "en su propio nombre y representación",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-9_opA",
        "identifier": "id-dec-9_opA",
        "subSteps": [],
        "extraReplacements": [
          {
            "identifier": "idunid9-extra-0",
            "insideId": "opA",
            "replacement": "",
            "replacementOriginal": ""
          },

        ],
        "checked": true
      },
      {
        "label": "en representación de una persona jurídica (empresa, asociación, etc...)",
        "replacement": "en nombre y representación de id-unid-9_opB_0, con domicilio en id-unid-9_opB_1, CIF/NIF núm. id-unid-9_opB_2 e inscrita en: id-unid-9_opB_3, con los siguientes datos: id-unid-9_opB_4, en virtud de escritura pública y/o autorización pertinente,",
        "replacementOriginal": "en nombre y representación de id-unid-9_opB_0, con domicilio en id-unid-9_opB_1, CIF/NIF núm. id-unid-9_opB_2 e inscrita en: id-unid-9_opB_3, con los siguientes datos: id-unid-9_opB_4, en virtud de escritura pública y/o autorización pertinente,",
        "radioId": "id-dec-9_opB",
        "identifier": "id-dec-9_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-9_opB_0",
            "wordToReplace": "id-unid-9_opB_0",
            "question": "Nombre o razón social de la persona jurídica en representación de quien se efectúa esta declaración jurada:",
            "placeholder": "P. ej. Banco Santander, S.A",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": true,
              "indicationsType": "outsideText",
              "value": "Si no conoce el nombre, mediante el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc), puede soliticar la información."
            }
          },
          {
            "replacement": "",
            "identifier": "id-unid-9_opB_1",
            "wordToReplace": "id-unid-9_opB_1",
            "question": "Domicilio social completo de la persona jurídica en representación de quien se efectúa la declaración jurada:",
            "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": true,
              "indicationsType": "insideText",
              "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del domicilio"
            }
          },
          {
            "replacement": "",
            "identifier": "id-unid-9_opB_2",
            "wordToReplace": "id-unid-9_opB_2",
            "question": "NIF (Número de Identificación Fiscal) completo de la persona jurídica:",
            "placeholder": "P. ej. B29805314",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": true,
              "indicationsType": "outsideText",
              "value": "Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si desea más información sobre esta figura consulte el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\"><strong>NIF empresarial</strong></a>."
            }
          },
          {
            "replacement": "",
            "identifier": "id-unid-9_opB_3",
            "wordToReplace": "id-unid-9_opB_3",
            "question": "Tipo de registro y lugar donde está inscrita la persona jurídica:",
            "placeholder": "P. ej. Registro Mercantil de Madrid",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": true,
              "indicationsType": "outsideText",
              "value": "Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si desea más información sobre esta figura consulte el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\"><strong>Datos registrales</strong></a>"
            }
          },
          {
            "replacement": "",
            "identifier": "id-unid-9_opB_4",
            "wordToReplace": "id-unid-9_opB_4",
            "question": "Datos registrales de la persona jurídica:",
            "placeholder": "P. ej. Tomo 123, folio 10, hoja SE-1234",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": true,
              "indicationsType": "outsideText",
              "value": "Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si desea más información sobre esta figura consulte el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\"><strong>Datos registrales</strong></a>"
            }
          }
        ],
        "extraReplacements": [
          {
            "identifier": "idunid9-extra-0",
            "insideId": "opA",
            "replacement": "En nombre y representación de id-unid-9_opB_0",
            "replacementOriginal": "En nombre y representación de id-unid-9_opB_0"
          },
        ],
        "checked": false
      },
      {
        "label": "en representación de otra persona física (menor de 18 años o incapacitado judicialmente)",
        "replacement": "en nombre y representación de id-unid-9_opC_0, con id-unid-9_opC_1 núm. id-unid-9_opC_2 y domicilio en id-unid-9_opC_3, en virtud de escritura pública y/o autorización pertinente,",
        "replacementOriginal": "en nombre y representación de id-unid-9_opC_0, con id-unid-9_opC_1 núm. id-unid-9_opC_2 y domicilio en id-unid-9_opC_3, en virtud de escritura pública y/o autorización pertinente,",
        "radioId": "id-dec-9_opC",
        "identifier": "id-dec-9_opC",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-9_opC_0",
            "wordToReplace": "id-unid-9_opC_0",
            "question": "Nombre completo de la persona física en representación de quien se efectúa esta declaración jurada:",
            "placeholder": "P. ej. Martino Montano Holguín",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": true,
              "indicationsType": "insideText",
              "value": "Indique el nombre completo, incluyendo sus dos apellidos."
            }
          },
          {
            "replacement": "",
            "identifier": "id-unid-9_opC_1",
            "wordToReplace": "id-unid-9_opC_1",
            "question": "Tipo de documento de identificación de la persona en representación de quien se efectúa esta declaración jurada:",
            "type": "iRadioB",
            "indications": {
              "areIndications": true,
              "indicationsType": "insideText",
              "value": "Seleccione el tipo de documento de identificación"
            },
            "extraReplacements": [],
            "radios": [
              {
                "label": "DNI",
                "replacement": "DNI",
                "replacementOriginal": "DNI",
                "radioId": "id-dec-9_opC_1_opA",
                "identifier": "id-dec-9_opC_1_opA",
                "subSteps": [],
                "extraReplacements": [],
                "checked": false
              },
              {
                "label": "NIE",
                "replacement": "NIE",
                "replacementOriginal": "NIE",
                "radioId": "id-dec-9_opC_1_opB",
                "identifier": "id-dec-9_opC_1_opB",
                "subSteps": [],
                "extraReplacements": [],
                "checked": false
              },
              {
                "label": "Pasaporte",
                "replacement": "Pasaporte",
                "replacementOriginal": "Pasaporte",
                "radioId": "id-dec-9_opC_1_opC",
                "identifier": "id-dec-9_opC_1_opC",
                "subSteps": [],
                "extraReplacements": [],
                "checked": true
              }
            ]
          },
          {
            "replacement": "",
            "identifier": "id-unid-9_opC_2",
            "wordToReplace": "id-unid-9_opC_2",
            "question": "Número del documento seleccionado en la pregunta anterior",
            "placeholder": "P. ej. 83558071Z",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": true,
              "indicationsType": "insideText",
              "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
            }
          },
          {
            "replacement": "",
            "identifier": "id-unid-9_opC_3",
            "wordToReplace": "id-unid-9_opC_3",
            "question": "Dirección del lugar donde reside la persona física en representación de quien se efectúa esta declaración jurada:",
            "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "",
            "indications": {
              "areIndications": true,
              "indicationsType": "insideText",
              "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia"
            }
          }
        ],
        "extraReplacements": [
          {
            "identifier": "idunid9-extra-0",
            "insideId": "opA",
            "replacement": "En nombre y representación de id-unid-9_opC_0",
            "replacementOriginal": "En nombre y representación de id-unid-9_opC_0"
          },
        ],
        "checked": false
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-10",
    "wordToReplace": "id-dec-10",
    "question": "Declaración que se realiza como juramento",
    "placeholder": "",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "textarea",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Escriba en este espacio su declaración, que se realiza como juramento."
    }
  },
  {
    type: 'end',
    identifier: 'end',
    wordToReplace: 'end',
    title: 'Declaración jurada',
    description: `Una declaración jurada es una manifestación escrita o verbal cuya veracidad es asegurada mediante un juramento ante una autoridad judicial o administrativa.`,
    checkoutProcess: {
      isInited: false,
      phase: 0
    }
  }
];

module.exports = steps;