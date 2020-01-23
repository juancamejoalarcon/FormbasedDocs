export const stepsAfterForeach = [
    {
      "type": "start",
      "title": "Contrato de compraventa de vehículo usado entre particulares",
      "description": "Por medio de este contrato un particular (persona o empresa) \n      propietario de un vehículo automóvil usado, puede venderlo a otro.",
      "isCurrentStep": false,
      "isFocused": false
    },
    {
      "type": "iText",
      "identifier": "id-unid-1",
      "wordToReplace": "id-unid-1",
      "replacement": "dfg",
      "question": "Lugar en el que se firma este contrato:",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Indique en este apartado el lugar en el que se va a firmar el contrato."
      },
      "placeholder": "P. ej. Albacete",
      "mandatory": true,
      "isFocused": false,
      "isCurrentStep": false
    },
    {
      "type": "iDate",
      "identifier": "id-unid-2",
      "wordToReplace": "id-unid-2",
      "replacement": "2020-01-24",
      "question": "Fecha en la que se firma este contrato:",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Haga uso del calendario para indicar la fecha en la que se firma este contrato."
      },
      "mandatory": true,
      "isFocused": false,
      "isCurrentStep": false
    },
    {
      "type": "iForEach",
      "value": "4",
      "min": 1,
      "max": 10,
      "replacement": "",
      "identifier": "id-unid-3",
      "wordToReplace": "id-unid-3",
      "question": "Número de personas propietarias del vehículo y que desean venderlo:",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Indique el número de personas que son propietarias del vehículo"
      },
      "content": [
        {
          "identifier": "id-unid-3",
          "wordToReplace": "id-unid-3",
          "replacementOriginal": "id-unid-3_1",
          "replacement": "",
          "extraReplacements": [],
          "modifiedReplacements": [
            "id-unid-3id-unid-3_100",
            "id-unid-3id-unid-3_110",
            "id-unid-3id-unid-3_120",
            "id-unid-3id-unid-3_130"
          ],
          "modifiedExtraReplacements": [
            []
          ],
          "subSteps": [
            {
              "type": "iRadioC",
              "question": "Este vendedor (propietario del vehículo) es):",
              "identifier": "id-unid-3_1",
              "wordToReplace": "id-unid-3_1",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Elija la personalidad jurídica de este vendedor. Se entiende por persona física a es una persona natural (un individuo), hablamos de persona jurídica para referirnos a una institución o ente, por ejemplo, una empresa o una asociación, entre otros."
              },
              "defaultRadioId": "id-unid-3_1_opA",
              "replacement": "",
              "extraReplacements": [],
              "radios": [
                {
                  "label": "Persona física",
                  "radioId": "id-unid-3_1_opA",
                  "identifier": "id-unid-3_1_opA",
                  "replacementOriginal": "id-unid-3_1_opA_1",
                  "replacement": "id-unid-3_1_opA_1",
                  "extraReplacements": [],
                  "checked": true,
                  "subSteps": [
                    {
                      "type": "iRadioC",
                      "question": "Este vendedor, para realizar el contrato, actúa",
                      "identifier": "id-unid-3_1_opA_1",
                      "wordToReplace": "id-unid-3_1_opA_1",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "El vendedor puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones del vendedor. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el vendedor quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
                      },
                      "defaultRadioId": "id-unid-3_1_opA_1_opA",
                      "replacement": "",
                      "extraReplacements": [],
                      "radios": [
                        {
                          "label": "en su propio nombre y representación",
                          "radioId": "id-unid-3_1_opA_1_opA",
                          "identifier": "id-unid-3_1_opA_1_opA",
                          "replacementOriginal": "id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
                          "replacement": "id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
                          "extraReplacements": [],
                          "checked": true,
                          "subSteps": [
                            {
                              "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
                              "wordToReplace": "id-unid-3_1_opA_1_opA_1",
                              "identifier": "id-unid-3_1_opA_1_opA_1",
                              "type": "iText",
                              "replacement": "",
                              "placeholder": "P. ej. Martino Montano Holguín",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Nombre completo de este vendedor, incluyendo los apellidos."
                              }
                            },
                            {
                              "question": "Dirección del lugar donde reside este vendedor:",
                              "wordToReplace": "id-unid-3_1_opA_1_opA_2",
                              "identifier": "id-unid-3_1_opA_1_opA_2",
                              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                              "type": "iText",
                              "replacement": "",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia del vendedor."
                              }
                            },
                            {
                              "type": "iRadioB",
                              "question": "Tipo de documento de identificación de este vendedor",
                              "identifier": "id-unid-3_1_opA_1_opA_3",
                              "wordToReplace": "id-unid-3_1_opA_1_opA_3",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "outsideText",
                                "value": "Seleccione el tipo de documento de identificación de este vendedor."
                              },
                              "replacement": "",
                              "radios": [
                                {
                                  "label": "DNI",
                                  "replacementOriginal": "DNI",
                                  "replacement": "",
                                  "radioId": "id-unid-3_1_opA_1_opA_3_opA",
                                  "identifier": "id-unid-3_1_opA_1_opA_3_opA",
                                  "extraReplacements": [],
                                  "checked": true
                                },
                                {
                                  "label": "NIE",
                                  "replacementOriginal": "NIE",
                                  "replacement": "",
                                  "radioId": "id-unid-3_1_opA_1_opA_3_opB",
                                  "identifier": "id-unid-3_1_opA_1_opA_3_opB",
                                  "extraReplacements": [],
                                  "checked": false
                                },
                                {
                                  "label": "Pasaporte",
                                  "replacementOriginal": "Pasaporte",
                                  "replacement": "",
                                  "radioId": "id-unid-3_1_opA_1_opA_3_opC",
                                  "identifier": "id-unid-3_1_opA_1_opA_3_opC",
                                  "extraReplacements": [],
                                  "checked": false
                                }
                              ]
                            },
                            {
                              "question": "Número del documento seleccionado en la pregunta anterior",
                              "wordToReplace": "id-unid-3_1_opA_1_opA_4",
                              "identifier": "id-unid-3_1_opA_1_opA_4",
                              "type": "iText",
                              "replacement": "",
                              "placeholder": "P. ej. 83558071Z",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                              }
                            }
                          ]
                        },
                        {
                          "label": "por medio de un representante (legal o voluntario)",
                          "replacementOriginal": "id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3_1_opA_1_opB_6: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.",
                          "replacement": "id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3_1_opA_1_opB_6: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.",
                          "extraReplacements": [],
                          "radioId": "id-unid-3_1_opA_1_opB",
                          "identifier": "id-unid-3_1_opA_1_opB",
                          "checked": false,
                          "subSteps": [
                            {
                              "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
                              "wordToReplace": "id-unid-3_1_opA_1_opB_1",
                              "identifier": "id-unid-3_1_opA_1_opB_1",
                              "type": "iText",
                              "replacement": "",
                              "placeholder": "P. ej. Martino Montano Holguín",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Nombre completo de este vendedor, incluyendo los apellidos."
                              }
                            },
                            {
                              "question": "Dirección del lugar donde reside este vendedor:",
                              "wordToReplace": "id-unid-3_1_opA_1_opB_2",
                              "identifier": "id-unid-3_1_opA_1_opB_2",
                              "type": "iText",
                              "replacement": "",
                              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este vendedor."
                              }
                            },
                            {
                              "type": "iRadioB",
                              "question": "Tipo de documento de identificación de este vendedor",
                              "identifier": "id-unid-3_1_opA_1_opB_3",
                              "wordToReplace": "3_1_opA_1_opB_3",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Seleccione el tipo de documento de identificación de este vendedor."
                              },
                              "replacement": "",
                              "radios": [
                                {
                                  "label": "DNI",
                                  "replacementOriginal": "DNI",
                                  "replacement": "",
                                  "radioId": "id-unid-3_1_opA_1_opB_3_opA",
                                  "identifier": "id-unid-3_1_opA_1_opB_3_opA",
                                  "extraReplacements": [],
                                  "checked": true
                                },
                                {
                                  "label": "NIE",
                                  "replacementOriginal": "NIE",
                                  "replacement": "",
                                  "radioId": "id-unid-3_1_opA_1_opB_3_opB",
                                  "identifier": "id-unid-3_1_opA_1_opB_3_opB",
                                  "extraReplacements": [],
                                  "checked": false
                                },
                                {
                                  "label": "Pasaporte",
                                  "replacementOriginal": "Pasaporte",
                                  "replacement": "",
                                  "radioId": "id-unid-3_1_opA_1_opB_3_opC",
                                  "identifier": "id-unid-3_1_opA_1_opB_3_opC",
                                  "extraReplacements": [],
                                  "checked": false
                                }
                              ]
                            },
                            {
                              "question": "Número del documento seleccionado en la pregunta anterior",
                              "wordToReplace": "id-unid-3_1_opA_1_opB_4",
                              "identifier": "id-unid-3_1_opA_1_opB_4",
                              "type": "iText",
                              "replacement": "",
                              "placeholder": "P. ej. 83558071Z",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                              }
                            },
                            {
                              "question": "Nombre completo de la persona que firma este contrato en nombre y representación de este vendedor:",
                              "wordToReplace": "id-unid-3_1_opA_1_opB_5",
                              "identifier": "id-unid-3_1_opA_1_opB_5",
                              "type": "iText",
                              "replacement": "",
                              "placeholder": "P. ej. Martino Montano Holguín",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "outsideText",
                                "value": "Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este vendedor. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
                              }
                            },
                            {
                              "type": "iRadioB",
                              "question": "Documento de identificación de la persona que firma el contrato en nombre y representación de este vendedor:",
                              "identifier": "id-unid-3_1_opA_1_opB_6",
                              "wordToReplace": "id-unid-3_1_opA_1_opB_6",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "outsideText",
                                "value": "Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación de este vendedor."
                              },
                              "replacement": "",
                              "radios": [
                                {
                                  "label": "DNI",
                                  "replacementOriginal": "DNI",
                                  "replacement": "",
                                  "radioId": "id-unid-3_1_opA_1_opB_6_opA",
                                  "identifier": "id-unid-3_1_opA_1_opB_6_opA",
                                  "extraReplacements": [],
                                  "checked": true
                                },
                                {
                                  "label": "NIE",
                                  "replacementOriginal": "NIE",
                                  "replacement": "",
                                  "radioId": "id-unid-3_1_opA_1_opB_6_opB",
                                  "identifier": "id-unid-3_1_opA_1_opB_6_opB",
                                  "extraReplacements": [],
                                  "checked": false
                                },
                                {
                                  "label": "Pasaporte",
                                  "replacementOriginal": "Pasaporte",
                                  "replacement": "",
                                  "radioId": "id-unid-3_1_opA_1_opB_6_opC",
                                  "identifier": "id-unid-3_1_opA_1_opB_6_opC",
                                  "extraReplacements": [],
                                  "checked": false
                                }
                              ]
                            },
                            {
                              "question": "Número del documento seleccionado en la pregunta anterior:",
                              "wordToReplace": "id-unid-3_1_opA_1_opB_7",
                              "identifier": "id-unid-3_1_opA_1_opB_7",
                              "placeholder": "P. ej. 83558071Z",
                              "type": "iText",
                              "replacement": "",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                              }
                            },
                            {
                              "question": "Calidad o concepto en el que esta persona firma este contrato en nombre y representación de este vendedor:",
                              "wordToReplace": "id-unid-3_1_opA_1_opB_8",
                              "placeholder": "P. ej. apoderado",
                              "identifier": "id-unid-3_1_opA_1_opB_8",
                              "type": "iText",
                              "replacement": "",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este vendedor."
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "label": "Persona jurídica",
                  "replacementOriginal": "id-unid-3_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opB_6, con id-unid-3_1_opB_7 número id-unid-3_1_opB_8, en nombre y representación de: id-unid-3_1_opB_1, con N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3 con la siguiente información: id-unid-3_1_opB_4.",
                  "replacement": "id-unid-3_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opB_6, con id-unid-3_1_opB_7 número id-unid-3_1_opB_8, en nombre y representación de: id-unid-3_1_opB_1, con N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3 con la siguiente información: id-unid-3_1_opB_4.",
                  "extraReplacements": [],
                  "radioId": "id-unid-3_1_opB",
                  "identifier": "id-unid-3_1_opB",
                  "checked": false,
                  "subSteps": [
                    {
                      "question": "Nombre de la persona jurídica que va a vender el vehículo:",
                      "wordToReplace": "id-unid-3_1_opB_1",
                      "identifier": "id-unid-3_1_opB_1",
                      "type": "iText",
                      "placeholder": "P. ej. Banco Santander, S.A.",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Si no conoce el nombre, mediante el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc), puede soliticar la información."
                      }
                    },
                    {
                      "question": "NIF (Número de Identificación Fiscal) completo de la persona jurídica:",
                      "wordToReplace": "id-unid-3_1_opB_2",
                      "identifier": "id-unid-3_1_opB_2",
                      "type": "iText",
                      "placeholder": "P. ej. B29805314",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">NIF empresarial</a>."
                      }
                    },
                    {
                      "question": "Tipo de registro y lugar donde está inscrita la persona jurídica:",
                      "wordToReplace": "id-unid-3_1_opB_3",
                      "identifier": "id-unid-3_1_opB_3",
                      "type": "iText",
                      "placeholder": "P. ej. Registro Mercantil de Madrid",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\">Datos registrales</a>"
                      }
                    },
                    {
                      "question": "Datos registrales de la persona jurídica:",
                      "wordToReplace": "id-unid-3_1_opB_4",
                      "identifier": "id-unid-3_1_opB_4",
                      "type": "iText",
                      "placeholder": "P. ej. Tomo 123, folio 10, hoja SE-1234",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\">Datos registrales</a>"
                      }
                    },
                    {
                      "question": "Nombre completo, incluyendo apellidos, del representante de la persona jurídica:",
                      "wordToReplace": "id-unid-3_1_opB_5",
                      "identifier": "id-unid-3_1_opB_5",
                      "type": "iText",
                      "placeholder": "P. ej. Margarita García Pérez",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Nombre completo, incluyendo apellidos, del representante de la persona jurídica"
                      }
                    },
                    {
                      "question": "Domicilio completo del representante de la persona jurídica:",
                      "wordToReplace": "id-unid-3_1_opB_6",
                      "identifier": "id-unid-3_1_opB_6",
                      "type": "iText",
                      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Domicilio, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país del representante de la persona jurídica"
                      }
                    },
                    {
                      "type": "iRadioB",
                      "question": "Documento de identidad del representante de la persona jurídica:",
                      "identifier": "id-unid-3_1_opB_7",
                      "wordToReplace": "id-unid-3_1_opB_7",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Seleccione el tipo de documento de identidad del representante de la persona jurídica."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opB_7_opA",
                          "identifier": "id-unid-3_1_opB_7_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opB_7_opB",
                          "identifier": "id-unid-3_1_opB_7_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opB_7_opC",
                          "identifier": "id-unid-3_1_opB_7_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ]
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior de identificación personal seleccionado:",
                      "wordToReplace": "id-unid-3_1_opB_8",
                      "identifier": "id-unid-3_1_opB_8",
                      "type": "iText",
                      "placeholder": "P. ej: 42888457N",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Escriba el número que corresponde con el documento de identificación personal seleccionado en la pregunta anterior"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "isFocused": false,
      "isCurrentStep": true
    },
    {
      "type": "iRadioC",
      "question": "Este vendedor (propietario del vehículo) es):",
      "identifier": "id-unid-3id-unid-3_100",
      "wordToReplace": "id-unid-3id-unid-3_100",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Elija la personalidad jurídica de este vendedor. Se entiende por persona física a es una persona natural (un individuo), hablamos de persona jurídica para referirnos a una institución o ente, por ejemplo, una empresa o una asociación, entre otros."
      },
      "defaultRadioId": "id-unid-3_1_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "Persona física",
          "radioId": "id-unid-3_1_opA",
          "identifier": "id-unid-3_1_opA",
          "replacementOriginal": "id-unid-3_1_opA_1",
          "replacement": "id-unid-3id-unid-3_100id-unid-3_1_opA_1",
          "extraReplacements": [],
          "checked": true,
          "subSteps": [
            {
              "type": "iRadioC",
              "question": "Este vendedor, para realizar el contrato, actúa",
              "identifier": "id-unid-3_1_opA_1",
              "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "El vendedor puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones del vendedor. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el vendedor quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
              },
              "defaultRadioId": "id-unid-3_1_opA_1_opA",
              "replacement": "",
              "extraReplacements": [],
              "radios": [
                {
                  "label": "en su propio nombre y representación",
                  "radioId": "id-unid-3_1_opA_1_opA",
                  "identifier": "id-unid-3_1_opA_1_opA",
                  "replacementOriginal": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
                  "replacement": "id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
                  "extraReplacements": [],
                  "checked": true,
                  "subSteps": [
                    {
                      "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
                      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Nombre completo de este vendedor, incluyendo los apellidos."
                      },
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "question": "Dirección del lugar donde reside este vendedor:",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
                      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
                      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia del vendedor."
                      },
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "type": "iRadioB",
                      "question": "Tipo de documento de identificación de este vendedor",
                      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Seleccione el tipo de documento de identificación de este vendedor."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opA_3_opA",
                          "identifier": "id-unid-3_1_opA_1_opA_3_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opA_3_opB",
                          "identifier": "id-unid-3_1_opA_1_opA_3_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opA_3_opC",
                          "identifier": "id-unid-3_1_opA_1_opA_3_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
                      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. 83558071Z",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true,
                      "isFocused": false
                    }
                  ]
                },
                {
                  "label": "por medio de un representante (legal o voluntario)",
                  "replacementOriginal": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6: id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2 y id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3 número id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4.",
                  "replacement": "id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3_1_opA_1_opB_6: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.",
                  "extraReplacements": [],
                  "radioId": "id-unid-3_1_opA_1_opB",
                  "identifier": "id-unid-3_1_opA_1_opB",
                  "checked": false,
                  "subSteps": [
                    {
                      "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
                      "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
                      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Nombre completo de este vendedor, incluyendo los apellidos."
                      },
                      "inherited": true
                    },
                    {
                      "question": "Dirección del lugar donde reside este vendedor:",
                      "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
                      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este vendedor."
                      },
                      "inherited": true
                    },
                    {
                      "type": "iRadioB",
                      "question": "Tipo de documento de identificación de este vendedor",
                      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
                      "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Seleccione el tipo de documento de identificación de este vendedor."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_3_opA",
                          "identifier": "id-unid-3_1_opA_1_opB_3_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_3_opB",
                          "identifier": "id-unid-3_1_opA_1_opB_3_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_3_opC",
                          "identifier": "id-unid-3_1_opA_1_opB_3_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior",
                      "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
                      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. 83558071Z",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true
                    },
                    {
                      "question": "Nombre completo de la persona que firma este contrato en nombre y representación de este vendedor:",
                      "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
                      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este vendedor. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
                      },
                      "inherited": true
                    },
                    {
                      "type": "iRadioB",
                      "question": "Documento de identificación de la persona que firma el contrato en nombre y representación de este vendedor:",
                      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
                      "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación de este vendedor."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_6_opA",
                          "identifier": "id-unid-3_1_opA_1_opB_6_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_6_opB",
                          "identifier": "id-unid-3_1_opA_1_opB_6_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_6_opC",
                          "identifier": "id-unid-3_1_opA_1_opB_6_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior:",
                      "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
                      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
                      "placeholder": "P. ej. 83558071Z",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true
                    },
                    {
                      "question": "Calidad o concepto en el que esta persona firma este contrato en nombre y representación de este vendedor:",
                      "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
                      "placeholder": "P. ej. apoderado",
                      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este vendedor."
                      },
                      "inherited": true
                    }
                  ]
                }
              ],
              "inheritFromRadioC": "id-unid-3id-unid-3_100id-unid-3_1_opA_1",
              "isFocused": false
            }
          ]
        },
        {
          "label": "Persona jurídica",
          "replacementOriginal": "id-unid-3_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opB_6, con id-unid-3_1_opB_7 número id-unid-3_1_opB_8, en nombre y representación de: id-unid-3_1_opB_1, con N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3 con la siguiente información: id-unid-3_1_opB_4.",
          "replacement": "id-unid-3_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opB_6, con id-unid-3_1_opB_7 número id-unid-3_1_opB_8, en nombre y representación de: id-unid-3_1_opB_1, con N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3 con la siguiente información: id-unid-3_1_opB_4.",
          "extraReplacements": [],
          "radioId": "id-unid-3_1_opB",
          "identifier": "id-unid-3_1_opB",
          "checked": false,
          "subSteps": [
            {
              "question": "Nombre de la persona jurídica que va a vender el vehículo:",
              "wordToReplace": "id-unid-3_1_opB_1",
              "identifier": "id-unid-3_1_opB_1",
              "type": "iText",
              "placeholder": "P. ej. Banco Santander, S.A.",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Si no conoce el nombre, mediante el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc), puede soliticar la información."
              }
            },
            {
              "question": "NIF (Número de Identificación Fiscal) completo de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_2",
              "identifier": "id-unid-3_1_opB_2",
              "type": "iText",
              "placeholder": "P. ej. B29805314",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">NIF empresarial</a>."
              }
            },
            {
              "question": "Tipo de registro y lugar donde está inscrita la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_3",
              "identifier": "id-unid-3_1_opB_3",
              "type": "iText",
              "placeholder": "P. ej. Registro Mercantil de Madrid",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\">Datos registrales</a>"
              }
            },
            {
              "question": "Datos registrales de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_4",
              "identifier": "id-unid-3_1_opB_4",
              "type": "iText",
              "placeholder": "P. ej. Tomo 123, folio 10, hoja SE-1234",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\">Datos registrales</a>"
              }
            },
            {
              "question": "Nombre completo, incluyendo apellidos, del representante de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_5",
              "identifier": "id-unid-3_1_opB_5",
              "type": "iText",
              "placeholder": "P. ej. Margarita García Pérez",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo, incluyendo apellidos, del representante de la persona jurídica"
              }
            },
            {
              "question": "Domicilio completo del representante de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_6",
              "identifier": "id-unid-3_1_opB_6",
              "type": "iText",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Domicilio, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país del representante de la persona jurídica"
              }
            },
            {
              "type": "iRadioB",
              "question": "Documento de identidad del representante de la persona jurídica:",
              "identifier": "id-unid-3_1_opB_7",
              "wordToReplace": "id-unid-3_1_opB_7",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Seleccione el tipo de documento de identidad del representante de la persona jurídica."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opB_7_opA",
                  "identifier": "id-unid-3_1_opB_7_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opB_7_opB",
                  "identifier": "id-unid-3_1_opB_7_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opB_7_opC",
                  "identifier": "id-unid-3_1_opB_7_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ]
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior de identificación personal seleccionado:",
              "wordToReplace": "id-unid-3_1_opB_8",
              "identifier": "id-unid-3_1_opB_8",
              "type": "iText",
              "placeholder": "P. ej: 42888457N",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Escriba el número que corresponde con el documento de identificación personal seleccionado en la pregunta anterior"
              }
            }
          ]
        }
      ],
      "isFocused": false,
      "cached": true
    },
    {
      "type": "iRadioC",
      "question": "Este vendedor, para realizar el contrato, actúa",
      "identifier": "id-unid-3_1_opA_1",
      "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "El vendedor puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones del vendedor. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el vendedor quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
      },
      "defaultRadioId": "id-unid-3_1_opA_1_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "en su propio nombre y representación",
          "radioId": "id-unid-3_1_opA_1_opA",
          "identifier": "id-unid-3_1_opA_1_opA",
          "replacementOriginal": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
          "replacement": "id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
          "extraReplacements": [],
          "checked": true,
          "subSteps": [
            {
              "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
              "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo de este vendedor, incluyendo los apellidos."
              },
              "inherited": true,
              "isFocused": false
            },
            {
              "question": "Dirección del lugar donde reside este vendedor:",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
              "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia del vendedor."
              },
              "inherited": true,
              "isFocused": false
            },
            {
              "type": "iRadioB",
              "question": "Tipo de documento de identificación de este vendedor",
              "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Seleccione el tipo de documento de identificación de este vendedor."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opA_3_opA",
                  "identifier": "id-unid-3_1_opA_1_opA_3_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opA_3_opB",
                  "identifier": "id-unid-3_1_opA_1_opA_3_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opA_3_opC",
                  "identifier": "id-unid-3_1_opA_1_opA_3_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true,
              "isFocused": false
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
              "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. 83558071Z",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true,
              "isFocused": false
            }
          ]
        },
        {
          "label": "por medio de un representante (legal o voluntario)",
          "replacementOriginal": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6: id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2 y id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3 número id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4.",
          "replacement": "id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3_1_opA_1_opB_6: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.",
          "extraReplacements": [],
          "radioId": "id-unid-3_1_opA_1_opB",
          "identifier": "id-unid-3_1_opA_1_opB",
          "checked": false,
          "subSteps": [
            {
              "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
              "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
              "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo de este vendedor, incluyendo los apellidos."
              },
              "inherited": true
            },
            {
              "question": "Dirección del lugar donde reside este vendedor:",
              "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
              "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este vendedor."
              },
              "inherited": true
            },
            {
              "type": "iRadioB",
              "question": "Tipo de documento de identificación de este vendedor",
              "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
              "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Seleccione el tipo de documento de identificación de este vendedor."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_3_opA",
                  "identifier": "id-unid-3_1_opA_1_opB_3_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_3_opB",
                  "identifier": "id-unid-3_1_opA_1_opB_3_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_3_opC",
                  "identifier": "id-unid-3_1_opA_1_opB_3_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior",
              "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
              "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. 83558071Z",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true
            },
            {
              "question": "Nombre completo de la persona que firma este contrato en nombre y representación de este vendedor:",
              "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
              "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este vendedor. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
              },
              "inherited": true
            },
            {
              "type": "iRadioB",
              "question": "Documento de identificación de la persona que firma el contrato en nombre y representación de este vendedor:",
              "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
              "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación de este vendedor."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_6_opA",
                  "identifier": "id-unid-3_1_opA_1_opB_6_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_6_opB",
                  "identifier": "id-unid-3_1_opA_1_opB_6_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_6_opC",
                  "identifier": "id-unid-3_1_opA_1_opB_6_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior:",
              "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
              "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
              "placeholder": "P. ej. 83558071Z",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true
            },
            {
              "question": "Calidad o concepto en el que esta persona firma este contrato en nombre y representación de este vendedor:",
              "wordToReplace": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
              "placeholder": "P. ej. apoderado",
              "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este vendedor."
              },
              "inherited": true
            }
          ]
        }
      ],
      "inheritFromRadioC": "id-unid-3id-unid-3_100id-unid-3_1_opA_1",
      "isFocused": false
    },
    {
      "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
      "type": "iText",
      "replacement": "",
      "placeholder": "P. ej. Martino Montano Holguín",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Nombre completo de este vendedor, incluyendo los apellidos."
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "question": "Dirección del lugar donde reside este vendedor:",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
      "type": "iText",
      "replacement": "",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia del vendedor."
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "type": "iRadioB",
      "question": "Tipo de documento de identificación de este vendedor",
      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Seleccione el tipo de documento de identificación de este vendedor."
      },
      "replacement": "",
      "radios": [
        {
          "label": "DNI",
          "replacementOriginal": "DNI",
          "replacement": "",
          "radioId": "id-unid-3_1_opA_1_opA_3_opA",
          "identifier": "id-unid-3_1_opA_1_opA_3_opA",
          "extraReplacements": [],
          "checked": true
        },
        {
          "label": "NIE",
          "replacementOriginal": "NIE",
          "replacement": "",
          "radioId": "id-unid-3_1_opA_1_opA_3_opB",
          "identifier": "id-unid-3_1_opA_1_opA_3_opB",
          "extraReplacements": [],
          "checked": false
        },
        {
          "label": "Pasaporte",
          "replacementOriginal": "Pasaporte",
          "replacement": "",
          "radioId": "id-unid-3_1_opA_1_opA_3_opC",
          "identifier": "id-unid-3_1_opA_1_opA_3_opC",
          "extraReplacements": [],
          "checked": false
        }
      ],
      "inherited": true,
      "isFocused": false
    },
    {
      "question": "Número del documento seleccionado en la pregunta anterior",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
      "identifier": "id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3id-unid-3_100id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
      "type": "iText",
      "replacement": "",
      "placeholder": "P. ej. 83558071Z",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "type": "iRadioC",
      "question": "Este vendedor (propietario del vehículo) es):",
      "identifier": "id-unid-3id-unid-3_110",
      "wordToReplace": "id-unid-3id-unid-3_110",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Elija la personalidad jurídica de este vendedor. Se entiende por persona física a es una persona natural (un individuo), hablamos de persona jurídica para referirnos a una institución o ente, por ejemplo, una empresa o una asociación, entre otros."
      },
      "defaultRadioId": "id-unid-3_1_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "Persona física",
          "radioId": "id-unid-3_1_opA",
          "identifier": "id-unid-3_1_opA",
          "replacementOriginal": "id-unid-3_1_opA_1",
          "replacement": "id-unid-3id-unid-3_110id-unid-3_1_opA_1",
          "extraReplacements": [],
          "checked": true,
          "subSteps": [
            {
              "type": "iRadioC",
              "question": "Este vendedor, para realizar el contrato, actúa",
              "identifier": "id-unid-3_1_opA_1",
              "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "El vendedor puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones del vendedor. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el vendedor quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
              },
              "defaultRadioId": "id-unid-3_1_opA_1_opA",
              "replacement": "",
              "extraReplacements": [],
              "radios": [
                {
                  "label": "en su propio nombre y representación",
                  "radioId": "id-unid-3_1_opA_1_opA",
                  "identifier": "id-unid-3_1_opA_1_opA",
                  "replacementOriginal": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
                  "replacement": "id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
                  "extraReplacements": [],
                  "checked": true,
                  "subSteps": [
                    {
                      "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
                      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Nombre completo de este vendedor, incluyendo los apellidos."
                      },
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "question": "Dirección del lugar donde reside este vendedor:",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
                      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
                      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia del vendedor."
                      },
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "type": "iRadioB",
                      "question": "Tipo de documento de identificación de este vendedor",
                      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Seleccione el tipo de documento de identificación de este vendedor."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opA_3_opA",
                          "identifier": "id-unid-3_1_opA_1_opA_3_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opA_3_opB",
                          "identifier": "id-unid-3_1_opA_1_opA_3_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opA_3_opC",
                          "identifier": "id-unid-3_1_opA_1_opA_3_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
                      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. 83558071Z",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true,
                      "isFocused": false
                    }
                  ]
                },
                {
                  "label": "por medio de un representante (legal o voluntario)",
                  "replacementOriginal": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6: id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2 y id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3 número id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4.",
                  "replacement": "id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3_1_opA_1_opB_6: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.",
                  "extraReplacements": [],
                  "radioId": "id-unid-3_1_opA_1_opB",
                  "identifier": "id-unid-3_1_opA_1_opB",
                  "checked": false,
                  "subSteps": [
                    {
                      "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
                      "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
                      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Nombre completo de este vendedor, incluyendo los apellidos."
                      },
                      "inherited": true
                    },
                    {
                      "question": "Dirección del lugar donde reside este vendedor:",
                      "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
                      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este vendedor."
                      },
                      "inherited": true
                    },
                    {
                      "type": "iRadioB",
                      "question": "Tipo de documento de identificación de este vendedor",
                      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
                      "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Seleccione el tipo de documento de identificación de este vendedor."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_3_opA",
                          "identifier": "id-unid-3_1_opA_1_opB_3_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_3_opB",
                          "identifier": "id-unid-3_1_opA_1_opB_3_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_3_opC",
                          "identifier": "id-unid-3_1_opA_1_opB_3_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior",
                      "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
                      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. 83558071Z",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true
                    },
                    {
                      "question": "Nombre completo de la persona que firma este contrato en nombre y representación de este vendedor:",
                      "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
                      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este vendedor. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
                      },
                      "inherited": true
                    },
                    {
                      "type": "iRadioB",
                      "question": "Documento de identificación de la persona que firma el contrato en nombre y representación de este vendedor:",
                      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
                      "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación de este vendedor."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_6_opA",
                          "identifier": "id-unid-3_1_opA_1_opB_6_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_6_opB",
                          "identifier": "id-unid-3_1_opA_1_opB_6_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_6_opC",
                          "identifier": "id-unid-3_1_opA_1_opB_6_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior:",
                      "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
                      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
                      "placeholder": "P. ej. 83558071Z",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true
                    },
                    {
                      "question": "Calidad o concepto en el que esta persona firma este contrato en nombre y representación de este vendedor:",
                      "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
                      "placeholder": "P. ej. apoderado",
                      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este vendedor."
                      },
                      "inherited": true
                    }
                  ]
                }
              ],
              "inheritFromRadioC": "id-unid-3id-unid-3_110id-unid-3_1_opA_1",
              "isFocused": false
            }
          ]
        },
        {
          "label": "Persona jurídica",
          "replacementOriginal": "id-unid-3_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opB_6, con id-unid-3_1_opB_7 número id-unid-3_1_opB_8, en nombre y representación de: id-unid-3_1_opB_1, con N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3 con la siguiente información: id-unid-3_1_opB_4.",
          "replacement": "id-unid-3_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opB_6, con id-unid-3_1_opB_7 número id-unid-3_1_opB_8, en nombre y representación de: id-unid-3_1_opB_1, con N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3 con la siguiente información: id-unid-3_1_opB_4.",
          "extraReplacements": [],
          "radioId": "id-unid-3_1_opB",
          "identifier": "id-unid-3_1_opB",
          "checked": false,
          "subSteps": [
            {
              "question": "Nombre de la persona jurídica que va a vender el vehículo:",
              "wordToReplace": "id-unid-3_1_opB_1",
              "identifier": "id-unid-3_1_opB_1",
              "type": "iText",
              "placeholder": "P. ej. Banco Santander, S.A.",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Si no conoce el nombre, mediante el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc), puede soliticar la información."
              }
            },
            {
              "question": "NIF (Número de Identificación Fiscal) completo de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_2",
              "identifier": "id-unid-3_1_opB_2",
              "type": "iText",
              "placeholder": "P. ej. B29805314",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">NIF empresarial</a>."
              }
            },
            {
              "question": "Tipo de registro y lugar donde está inscrita la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_3",
              "identifier": "id-unid-3_1_opB_3",
              "type": "iText",
              "placeholder": "P. ej. Registro Mercantil de Madrid",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\">Datos registrales</a>"
              }
            },
            {
              "question": "Datos registrales de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_4",
              "identifier": "id-unid-3_1_opB_4",
              "type": "iText",
              "placeholder": "P. ej. Tomo 123, folio 10, hoja SE-1234",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\">Datos registrales</a>"
              }
            },
            {
              "question": "Nombre completo, incluyendo apellidos, del representante de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_5",
              "identifier": "id-unid-3_1_opB_5",
              "type": "iText",
              "placeholder": "P. ej. Margarita García Pérez",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo, incluyendo apellidos, del representante de la persona jurídica"
              }
            },
            {
              "question": "Domicilio completo del representante de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_6",
              "identifier": "id-unid-3_1_opB_6",
              "type": "iText",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Domicilio, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país del representante de la persona jurídica"
              }
            },
            {
              "type": "iRadioB",
              "question": "Documento de identidad del representante de la persona jurídica:",
              "identifier": "id-unid-3_1_opB_7",
              "wordToReplace": "id-unid-3_1_opB_7",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Seleccione el tipo de documento de identidad del representante de la persona jurídica."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opB_7_opA",
                  "identifier": "id-unid-3_1_opB_7_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opB_7_opB",
                  "identifier": "id-unid-3_1_opB_7_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opB_7_opC",
                  "identifier": "id-unid-3_1_opB_7_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ]
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior de identificación personal seleccionado:",
              "wordToReplace": "id-unid-3_1_opB_8",
              "identifier": "id-unid-3_1_opB_8",
              "type": "iText",
              "placeholder": "P. ej: 42888457N",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Escriba el número que corresponde con el documento de identificación personal seleccionado en la pregunta anterior"
              }
            }
          ]
        }
      ],
      "isFocused": false
    },
    {
      "type": "iRadioC",
      "question": "Este vendedor, para realizar el contrato, actúa",
      "identifier": "id-unid-3_1_opA_1",
      "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "El vendedor puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones del vendedor. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el vendedor quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
      },
      "defaultRadioId": "id-unid-3_1_opA_1_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "en su propio nombre y representación",
          "radioId": "id-unid-3_1_opA_1_opA",
          "identifier": "id-unid-3_1_opA_1_opA",
          "replacementOriginal": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
          "replacement": "id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
          "extraReplacements": [],
          "checked": true,
          "subSteps": [
            {
              "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
              "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo de este vendedor, incluyendo los apellidos."
              },
              "inherited": true,
              "isFocused": false
            },
            {
              "question": "Dirección del lugar donde reside este vendedor:",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
              "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia del vendedor."
              },
              "inherited": true,
              "isFocused": false
            },
            {
              "type": "iRadioB",
              "question": "Tipo de documento de identificación de este vendedor",
              "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Seleccione el tipo de documento de identificación de este vendedor."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opA_3_opA",
                  "identifier": "id-unid-3_1_opA_1_opA_3_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opA_3_opB",
                  "identifier": "id-unid-3_1_opA_1_opA_3_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opA_3_opC",
                  "identifier": "id-unid-3_1_opA_1_opA_3_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true,
              "isFocused": false
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
              "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. 83558071Z",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true,
              "isFocused": false
            }
          ]
        },
        {
          "label": "por medio de un representante (legal o voluntario)",
          "replacementOriginal": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6: id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2 y id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3 número id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4.",
          "replacement": "id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3_1_opA_1_opB_6: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.",
          "extraReplacements": [],
          "radioId": "id-unid-3_1_opA_1_opB",
          "identifier": "id-unid-3_1_opA_1_opB",
          "checked": false,
          "subSteps": [
            {
              "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
              "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
              "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo de este vendedor, incluyendo los apellidos."
              },
              "inherited": true
            },
            {
              "question": "Dirección del lugar donde reside este vendedor:",
              "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
              "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este vendedor."
              },
              "inherited": true
            },
            {
              "type": "iRadioB",
              "question": "Tipo de documento de identificación de este vendedor",
              "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
              "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Seleccione el tipo de documento de identificación de este vendedor."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_3_opA",
                  "identifier": "id-unid-3_1_opA_1_opB_3_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_3_opB",
                  "identifier": "id-unid-3_1_opA_1_opB_3_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_3_opC",
                  "identifier": "id-unid-3_1_opA_1_opB_3_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior",
              "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
              "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. 83558071Z",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true
            },
            {
              "question": "Nombre completo de la persona que firma este contrato en nombre y representación de este vendedor:",
              "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
              "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este vendedor. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
              },
              "inherited": true
            },
            {
              "type": "iRadioB",
              "question": "Documento de identificación de la persona que firma el contrato en nombre y representación de este vendedor:",
              "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
              "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación de este vendedor."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_6_opA",
                  "identifier": "id-unid-3_1_opA_1_opB_6_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_6_opB",
                  "identifier": "id-unid-3_1_opA_1_opB_6_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_6_opC",
                  "identifier": "id-unid-3_1_opA_1_opB_6_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior:",
              "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
              "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
              "placeholder": "P. ej. 83558071Z",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true
            },
            {
              "question": "Calidad o concepto en el que esta persona firma este contrato en nombre y representación de este vendedor:",
              "wordToReplace": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
              "placeholder": "P. ej. apoderado",
              "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este vendedor."
              },
              "inherited": true
            }
          ]
        }
      ],
      "inheritFromRadioC": "id-unid-3id-unid-3_110id-unid-3_1_opA_1",
      "isFocused": false
    },
    {
      "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
      "type": "iText",
      "replacement": "",
      "placeholder": "P. ej. Martino Montano Holguín",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Nombre completo de este vendedor, incluyendo los apellidos."
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "question": "Dirección del lugar donde reside este vendedor:",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
      "type": "iText",
      "replacement": "",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia del vendedor."
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "type": "iRadioB",
      "question": "Tipo de documento de identificación de este vendedor",
      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Seleccione el tipo de documento de identificación de este vendedor."
      },
      "replacement": "",
      "radios": [
        {
          "label": "DNI",
          "replacementOriginal": "DNI",
          "replacement": "",
          "radioId": "id-unid-3_1_opA_1_opA_3_opA",
          "identifier": "id-unid-3_1_opA_1_opA_3_opA",
          "extraReplacements": [],
          "checked": true
        },
        {
          "label": "NIE",
          "replacementOriginal": "NIE",
          "replacement": "",
          "radioId": "id-unid-3_1_opA_1_opA_3_opB",
          "identifier": "id-unid-3_1_opA_1_opA_3_opB",
          "extraReplacements": [],
          "checked": false
        },
        {
          "label": "Pasaporte",
          "replacementOriginal": "Pasaporte",
          "replacement": "",
          "radioId": "id-unid-3_1_opA_1_opA_3_opC",
          "identifier": "id-unid-3_1_opA_1_opA_3_opC",
          "extraReplacements": [],
          "checked": false
        }
      ],
      "inherited": true,
      "isFocused": false
    },
    {
      "question": "Número del documento seleccionado en la pregunta anterior",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
      "identifier": "id-unid-3id-unid-3_110id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
      "type": "iText",
      "replacement": "",
      "placeholder": "P. ej. 83558071Z",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "type": "iRadioC",
      "question": "Este vendedor (propietario del vehículo) es):",
      "identifier": "id-unid-3id-unid-3_120",
      "wordToReplace": "id-unid-3id-unid-3_120",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Elija la personalidad jurídica de este vendedor. Se entiende por persona física a es una persona natural (un individuo), hablamos de persona jurídica para referirnos a una institución o ente, por ejemplo, una empresa o una asociación, entre otros."
      },
      "defaultRadioId": "id-unid-3_1_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "Persona física",
          "radioId": "id-unid-3_1_opA",
          "identifier": "id-unid-3_1_opA",
          "replacementOriginal": "id-unid-3_1_opA_1",
          "replacement": "id-unid-3id-unid-3_120id-unid-3_1_opA_1",
          "extraReplacements": [],
          "checked": true,
          "subSteps": [
            {
              "type": "iRadioC",
              "question": "Este vendedor, para realizar el contrato, actúa",
              "identifier": "id-unid-3_1_opA_1",
              "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "El vendedor puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones del vendedor. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el vendedor quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
              },
              "defaultRadioId": "id-unid-3_1_opA_1_opA",
              "replacement": "",
              "extraReplacements": [],
              "radios": [
                {
                  "label": "en su propio nombre y representación",
                  "radioId": "id-unid-3_1_opA_1_opA",
                  "identifier": "id-unid-3_1_opA_1_opA",
                  "replacementOriginal": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
                  "replacement": "id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
                  "extraReplacements": [],
                  "checked": true,
                  "subSteps": [
                    {
                      "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
                      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Nombre completo de este vendedor, incluyendo los apellidos."
                      },
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "question": "Dirección del lugar donde reside este vendedor:",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
                      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
                      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia del vendedor."
                      },
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "type": "iRadioB",
                      "question": "Tipo de documento de identificación de este vendedor",
                      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Seleccione el tipo de documento de identificación de este vendedor."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opA_3_opA",
                          "identifier": "id-unid-3_1_opA_1_opA_3_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opA_3_opB",
                          "identifier": "id-unid-3_1_opA_1_opA_3_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opA_3_opC",
                          "identifier": "id-unid-3_1_opA_1_opA_3_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
                      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. 83558071Z",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true,
                      "isFocused": false
                    }
                  ]
                },
                {
                  "label": "por medio de un representante (legal o voluntario)",
                  "replacementOriginal": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6: id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2 y id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3 número id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4.",
                  "replacement": "id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3_1_opA_1_opB_6: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.",
                  "extraReplacements": [],
                  "radioId": "id-unid-3_1_opA_1_opB",
                  "identifier": "id-unid-3_1_opA_1_opB",
                  "checked": false,
                  "subSteps": [
                    {
                      "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
                      "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
                      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Nombre completo de este vendedor, incluyendo los apellidos."
                      },
                      "inherited": true
                    },
                    {
                      "question": "Dirección del lugar donde reside este vendedor:",
                      "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
                      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este vendedor."
                      },
                      "inherited": true
                    },
                    {
                      "type": "iRadioB",
                      "question": "Tipo de documento de identificación de este vendedor",
                      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
                      "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Seleccione el tipo de documento de identificación de este vendedor."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_3_opA",
                          "identifier": "id-unid-3_1_opA_1_opB_3_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_3_opB",
                          "identifier": "id-unid-3_1_opA_1_opB_3_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_3_opC",
                          "identifier": "id-unid-3_1_opA_1_opB_3_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior",
                      "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
                      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. 83558071Z",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true
                    },
                    {
                      "question": "Nombre completo de la persona que firma este contrato en nombre y representación de este vendedor:",
                      "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
                      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este vendedor. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
                      },
                      "inherited": true
                    },
                    {
                      "type": "iRadioB",
                      "question": "Documento de identificación de la persona que firma el contrato en nombre y representación de este vendedor:",
                      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
                      "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación de este vendedor."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_6_opA",
                          "identifier": "id-unid-3_1_opA_1_opB_6_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_6_opB",
                          "identifier": "id-unid-3_1_opA_1_opB_6_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_6_opC",
                          "identifier": "id-unid-3_1_opA_1_opB_6_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior:",
                      "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
                      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
                      "placeholder": "P. ej. 83558071Z",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true
                    },
                    {
                      "question": "Calidad o concepto en el que esta persona firma este contrato en nombre y representación de este vendedor:",
                      "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
                      "placeholder": "P. ej. apoderado",
                      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este vendedor."
                      },
                      "inherited": true
                    }
                  ]
                }
              ],
              "inheritFromRadioC": "id-unid-3id-unid-3_120id-unid-3_1_opA_1",
              "isFocused": false
            }
          ]
        },
        {
          "label": "Persona jurídica",
          "replacementOriginal": "id-unid-3_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opB_6, con id-unid-3_1_opB_7 número id-unid-3_1_opB_8, en nombre y representación de: id-unid-3_1_opB_1, con N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3 con la siguiente información: id-unid-3_1_opB_4.",
          "replacement": "id-unid-3_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opB_6, con id-unid-3_1_opB_7 número id-unid-3_1_opB_8, en nombre y representación de: id-unid-3_1_opB_1, con N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3 con la siguiente información: id-unid-3_1_opB_4.",
          "extraReplacements": [],
          "radioId": "id-unid-3_1_opB",
          "identifier": "id-unid-3_1_opB",
          "checked": false,
          "subSteps": [
            {
              "question": "Nombre de la persona jurídica que va a vender el vehículo:",
              "wordToReplace": "id-unid-3_1_opB_1",
              "identifier": "id-unid-3_1_opB_1",
              "type": "iText",
              "placeholder": "P. ej. Banco Santander, S.A.",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Si no conoce el nombre, mediante el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc), puede soliticar la información."
              }
            },
            {
              "question": "NIF (Número de Identificación Fiscal) completo de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_2",
              "identifier": "id-unid-3_1_opB_2",
              "type": "iText",
              "placeholder": "P. ej. B29805314",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">NIF empresarial</a>."
              }
            },
            {
              "question": "Tipo de registro y lugar donde está inscrita la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_3",
              "identifier": "id-unid-3_1_opB_3",
              "type": "iText",
              "placeholder": "P. ej. Registro Mercantil de Madrid",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\">Datos registrales</a>"
              }
            },
            {
              "question": "Datos registrales de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_4",
              "identifier": "id-unid-3_1_opB_4",
              "type": "iText",
              "placeholder": "P. ej. Tomo 123, folio 10, hoja SE-1234",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\">Datos registrales</a>"
              }
            },
            {
              "question": "Nombre completo, incluyendo apellidos, del representante de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_5",
              "identifier": "id-unid-3_1_opB_5",
              "type": "iText",
              "placeholder": "P. ej. Margarita García Pérez",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo, incluyendo apellidos, del representante de la persona jurídica"
              }
            },
            {
              "question": "Domicilio completo del representante de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_6",
              "identifier": "id-unid-3_1_opB_6",
              "type": "iText",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Domicilio, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país del representante de la persona jurídica"
              }
            },
            {
              "type": "iRadioB",
              "question": "Documento de identidad del representante de la persona jurídica:",
              "identifier": "id-unid-3_1_opB_7",
              "wordToReplace": "id-unid-3_1_opB_7",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Seleccione el tipo de documento de identidad del representante de la persona jurídica."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opB_7_opA",
                  "identifier": "id-unid-3_1_opB_7_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opB_7_opB",
                  "identifier": "id-unid-3_1_opB_7_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opB_7_opC",
                  "identifier": "id-unid-3_1_opB_7_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ]
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior de identificación personal seleccionado:",
              "wordToReplace": "id-unid-3_1_opB_8",
              "identifier": "id-unid-3_1_opB_8",
              "type": "iText",
              "placeholder": "P. ej: 42888457N",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Escriba el número que corresponde con el documento de identificación personal seleccionado en la pregunta anterior"
              }
            }
          ]
        }
      ],
      "isFocused": false
    },
    {
      "type": "iRadioC",
      "question": "Este vendedor, para realizar el contrato, actúa",
      "identifier": "id-unid-3_1_opA_1",
      "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "El vendedor puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones del vendedor. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el vendedor quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
      },
      "defaultRadioId": "id-unid-3_1_opA_1_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "en su propio nombre y representación",
          "radioId": "id-unid-3_1_opA_1_opA",
          "identifier": "id-unid-3_1_opA_1_opA",
          "replacementOriginal": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
          "replacement": "id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
          "extraReplacements": [],
          "checked": true,
          "subSteps": [
            {
              "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
              "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo de este vendedor, incluyendo los apellidos."
              },
              "inherited": true,
              "isFocused": false
            },
            {
              "question": "Dirección del lugar donde reside este vendedor:",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
              "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia del vendedor."
              },
              "inherited": true,
              "isFocused": false
            },
            {
              "type": "iRadioB",
              "question": "Tipo de documento de identificación de este vendedor",
              "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Seleccione el tipo de documento de identificación de este vendedor."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opA_3_opA",
                  "identifier": "id-unid-3_1_opA_1_opA_3_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opA_3_opB",
                  "identifier": "id-unid-3_1_opA_1_opA_3_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opA_3_opC",
                  "identifier": "id-unid-3_1_opA_1_opA_3_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true,
              "isFocused": false
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
              "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. 83558071Z",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true,
              "isFocused": false
            }
          ]
        },
        {
          "label": "por medio de un representante (legal o voluntario)",
          "replacementOriginal": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6: id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2 y id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3 número id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4.",
          "replacement": "id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3_1_opA_1_opB_6: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.",
          "extraReplacements": [],
          "radioId": "id-unid-3_1_opA_1_opB",
          "identifier": "id-unid-3_1_opA_1_opB",
          "checked": false,
          "subSteps": [
            {
              "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
              "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
              "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo de este vendedor, incluyendo los apellidos."
              },
              "inherited": true
            },
            {
              "question": "Dirección del lugar donde reside este vendedor:",
              "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
              "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este vendedor."
              },
              "inherited": true
            },
            {
              "type": "iRadioB",
              "question": "Tipo de documento de identificación de este vendedor",
              "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
              "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Seleccione el tipo de documento de identificación de este vendedor."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_3_opA",
                  "identifier": "id-unid-3_1_opA_1_opB_3_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_3_opB",
                  "identifier": "id-unid-3_1_opA_1_opB_3_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_3_opC",
                  "identifier": "id-unid-3_1_opA_1_opB_3_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior",
              "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
              "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. 83558071Z",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true
            },
            {
              "question": "Nombre completo de la persona que firma este contrato en nombre y representación de este vendedor:",
              "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
              "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este vendedor. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
              },
              "inherited": true
            },
            {
              "type": "iRadioB",
              "question": "Documento de identificación de la persona que firma el contrato en nombre y representación de este vendedor:",
              "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
              "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación de este vendedor."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_6_opA",
                  "identifier": "id-unid-3_1_opA_1_opB_6_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_6_opB",
                  "identifier": "id-unid-3_1_opA_1_opB_6_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_6_opC",
                  "identifier": "id-unid-3_1_opA_1_opB_6_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior:",
              "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
              "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
              "placeholder": "P. ej. 83558071Z",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true
            },
            {
              "question": "Calidad o concepto en el que esta persona firma este contrato en nombre y representación de este vendedor:",
              "wordToReplace": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
              "placeholder": "P. ej. apoderado",
              "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este vendedor."
              },
              "inherited": true
            }
          ]
        }
      ],
      "inheritFromRadioC": "id-unid-3id-unid-3_120id-unid-3_1_opA_1",
      "isFocused": false
    },
    {
      "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
      "type": "iText",
      "replacement": "",
      "placeholder": "P. ej. Martino Montano Holguín",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Nombre completo de este vendedor, incluyendo los apellidos."
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "question": "Dirección del lugar donde reside este vendedor:",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
      "type": "iText",
      "replacement": "",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia del vendedor."
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "type": "iRadioB",
      "question": "Tipo de documento de identificación de este vendedor",
      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Seleccione el tipo de documento de identificación de este vendedor."
      },
      "replacement": "",
      "radios": [
        {
          "label": "DNI",
          "replacementOriginal": "DNI",
          "replacement": "",
          "radioId": "id-unid-3_1_opA_1_opA_3_opA",
          "identifier": "id-unid-3_1_opA_1_opA_3_opA",
          "extraReplacements": [],
          "checked": true
        },
        {
          "label": "NIE",
          "replacementOriginal": "NIE",
          "replacement": "",
          "radioId": "id-unid-3_1_opA_1_opA_3_opB",
          "identifier": "id-unid-3_1_opA_1_opA_3_opB",
          "extraReplacements": [],
          "checked": false
        },
        {
          "label": "Pasaporte",
          "replacementOriginal": "Pasaporte",
          "replacement": "",
          "radioId": "id-unid-3_1_opA_1_opA_3_opC",
          "identifier": "id-unid-3_1_opA_1_opA_3_opC",
          "extraReplacements": [],
          "checked": false
        }
      ],
      "inherited": true,
      "isFocused": false
    },
    {
      "question": "Número del documento seleccionado en la pregunta anterior",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
      "identifier": "id-unid-3id-unid-3_120id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
      "type": "iText",
      "replacement": "",
      "placeholder": "P. ej. 83558071Z",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "type": "iRadioC",
      "question": "Este vendedor (propietario del vehículo) es):",
      "identifier": "id-unid-3id-unid-3_130",
      "wordToReplace": "id-unid-3id-unid-3_130",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Elija la personalidad jurídica de este vendedor. Se entiende por persona física a es una persona natural (un individuo), hablamos de persona jurídica para referirnos a una institución o ente, por ejemplo, una empresa o una asociación, entre otros."
      },
      "defaultRadioId": "id-unid-3_1_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "Persona física",
          "radioId": "id-unid-3_1_opA",
          "identifier": "id-unid-3_1_opA",
          "replacementOriginal": "id-unid-3_1_opA_1",
          "replacement": "id-unid-3id-unid-3_130id-unid-3_1_opA_1",
          "extraReplacements": [],
          "checked": true,
          "subSteps": [
            {
              "type": "iRadioC",
              "question": "Este vendedor, para realizar el contrato, actúa",
              "identifier": "id-unid-3_1_opA_1",
              "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "El vendedor puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones del vendedor. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el vendedor quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
              },
              "defaultRadioId": "id-unid-3_1_opA_1_opA",
              "replacement": "",
              "extraReplacements": [],
              "radios": [
                {
                  "label": "en su propio nombre y representación",
                  "radioId": "id-unid-3_1_opA_1_opA",
                  "identifier": "id-unid-3_1_opA_1_opA",
                  "replacementOriginal": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
                  "replacement": "id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
                  "extraReplacements": [],
                  "checked": true,
                  "subSteps": [
                    {
                      "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
                      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Nombre completo de este vendedor, incluyendo los apellidos."
                      },
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "question": "Dirección del lugar donde reside este vendedor:",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
                      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
                      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia del vendedor."
                      },
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "type": "iRadioB",
                      "question": "Tipo de documento de identificación de este vendedor",
                      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Seleccione el tipo de documento de identificación de este vendedor."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opA_3_opA",
                          "identifier": "id-unid-3_1_opA_1_opA_3_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opA_3_opB",
                          "identifier": "id-unid-3_1_opA_1_opA_3_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opA_3_opC",
                          "identifier": "id-unid-3_1_opA_1_opA_3_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior",
                      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
                      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. 83558071Z",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true,
                      "isFocused": false
                    }
                  ]
                },
                {
                  "label": "por medio de un representante (legal o voluntario)",
                  "replacementOriginal": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6: id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2 y id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3 número id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4.",
                  "replacement": "id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3_1_opA_1_opB_6: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.",
                  "extraReplacements": [],
                  "radioId": "id-unid-3_1_opA_1_opB",
                  "identifier": "id-unid-3_1_opA_1_opB",
                  "checked": false,
                  "subSteps": [
                    {
                      "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
                      "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
                      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Nombre completo de este vendedor, incluyendo los apellidos."
                      },
                      "inherited": true
                    },
                    {
                      "question": "Dirección del lugar donde reside este vendedor:",
                      "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
                      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este vendedor."
                      },
                      "inherited": true
                    },
                    {
                      "type": "iRadioB",
                      "question": "Tipo de documento de identificación de este vendedor",
                      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
                      "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Seleccione el tipo de documento de identificación de este vendedor."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_3_opA",
                          "identifier": "id-unid-3_1_opA_1_opB_3_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_3_opB",
                          "identifier": "id-unid-3_1_opA_1_opB_3_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_3_opC",
                          "identifier": "id-unid-3_1_opA_1_opB_3_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior",
                      "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
                      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. 83558071Z",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true
                    },
                    {
                      "question": "Nombre completo de la persona que firma este contrato en nombre y representación de este vendedor:",
                      "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
                      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este vendedor. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
                      },
                      "inherited": true
                    },
                    {
                      "type": "iRadioB",
                      "question": "Documento de identificación de la persona que firma el contrato en nombre y representación de este vendedor:",
                      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
                      "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación de este vendedor."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_6_opA",
                          "identifier": "id-unid-3_1_opA_1_opB_6_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_6_opB",
                          "identifier": "id-unid-3_1_opA_1_opB_6_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-3_1_opA_1_opB_6_opC",
                          "identifier": "id-unid-3_1_opA_1_opB_6_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior:",
                      "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
                      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
                      "placeholder": "P. ej. 83558071Z",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true
                    },
                    {
                      "question": "Calidad o concepto en el que esta persona firma este contrato en nombre y representación de este vendedor:",
                      "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
                      "placeholder": "P. ej. apoderado",
                      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este vendedor."
                      },
                      "inherited": true
                    }
                  ]
                }
              ],
              "inheritFromRadioC": "id-unid-3id-unid-3_130id-unid-3_1_opA_1",
              "isFocused": false
            }
          ]
        },
        {
          "label": "Persona jurídica",
          "replacementOriginal": "id-unid-3_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opB_6, con id-unid-3_1_opB_7 número id-unid-3_1_opB_8, en nombre y representación de: id-unid-3_1_opB_1, con N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3 con la siguiente información: id-unid-3_1_opB_4.",
          "replacement": "id-unid-3_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opB_6, con id-unid-3_1_opB_7 número id-unid-3_1_opB_8, en nombre y representación de: id-unid-3_1_opB_1, con N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3 con la siguiente información: id-unid-3_1_opB_4.",
          "extraReplacements": [],
          "radioId": "id-unid-3_1_opB",
          "identifier": "id-unid-3_1_opB",
          "checked": false,
          "subSteps": [
            {
              "question": "Nombre de la persona jurídica que va a vender el vehículo:",
              "wordToReplace": "id-unid-3_1_opB_1",
              "identifier": "id-unid-3_1_opB_1",
              "type": "iText",
              "placeholder": "P. ej. Banco Santander, S.A.",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Si no conoce el nombre, mediante el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc), puede soliticar la información."
              }
            },
            {
              "question": "NIF (Número de Identificación Fiscal) completo de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_2",
              "identifier": "id-unid-3_1_opB_2",
              "type": "iText",
              "placeholder": "P. ej. B29805314",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">NIF empresarial</a>."
              }
            },
            {
              "question": "Tipo de registro y lugar donde está inscrita la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_3",
              "identifier": "id-unid-3_1_opB_3",
              "type": "iText",
              "placeholder": "P. ej. Registro Mercantil de Madrid",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\">Datos registrales</a>"
              }
            },
            {
              "question": "Datos registrales de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_4",
              "identifier": "id-unid-3_1_opB_4",
              "type": "iText",
              "placeholder": "P. ej. Tomo 123, folio 10, hoja SE-1234",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\">Datos registrales</a>"
              }
            },
            {
              "question": "Nombre completo, incluyendo apellidos, del representante de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_5",
              "identifier": "id-unid-3_1_opB_5",
              "type": "iText",
              "placeholder": "P. ej. Margarita García Pérez",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo, incluyendo apellidos, del representante de la persona jurídica"
              }
            },
            {
              "question": "Domicilio completo del representante de la persona jurídica:",
              "wordToReplace": "id-unid-3_1_opB_6",
              "identifier": "id-unid-3_1_opB_6",
              "type": "iText",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Domicilio, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país del representante de la persona jurídica"
              }
            },
            {
              "type": "iRadioB",
              "question": "Documento de identidad del representante de la persona jurídica:",
              "identifier": "id-unid-3_1_opB_7",
              "wordToReplace": "id-unid-3_1_opB_7",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Seleccione el tipo de documento de identidad del representante de la persona jurídica."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opB_7_opA",
                  "identifier": "id-unid-3_1_opB_7_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opB_7_opB",
                  "identifier": "id-unid-3_1_opB_7_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opB_7_opC",
                  "identifier": "id-unid-3_1_opB_7_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ]
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior de identificación personal seleccionado:",
              "wordToReplace": "id-unid-3_1_opB_8",
              "identifier": "id-unid-3_1_opB_8",
              "type": "iText",
              "placeholder": "P. ej: 42888457N",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Escriba el número que corresponde con el documento de identificación personal seleccionado en la pregunta anterior"
              }
            }
          ]
        }
      ],
      "isFocused": true
    },
    {
      "type": "iRadioC",
      "question": "Este vendedor, para realizar el contrato, actúa",
      "identifier": "id-unid-3_1_opA_1",
      "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "El vendedor puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones del vendedor. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el vendedor quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
      },
      "defaultRadioId": "id-unid-3_1_opA_1_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "en su propio nombre y representación",
          "radioId": "id-unid-3_1_opA_1_opA",
          "identifier": "id-unid-3_1_opA_1_opA",
          "replacementOriginal": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
          "replacement": "id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.",
          "extraReplacements": [],
          "checked": true,
          "subSteps": [
            {
              "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
              "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo de este vendedor, incluyendo los apellidos."
              },
              "inherited": true,
              "isFocused": false
            },
            {
              "question": "Dirección del lugar donde reside este vendedor:",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
              "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia del vendedor."
              },
              "inherited": true,
              "isFocused": false
            },
            {
              "type": "iRadioB",
              "question": "Tipo de documento de identificación de este vendedor",
              "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Seleccione el tipo de documento de identificación de este vendedor."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opA_3_opA",
                  "identifier": "id-unid-3_1_opA_1_opA_3_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opA_3_opB",
                  "identifier": "id-unid-3_1_opA_1_opA_3_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opA_3_opC",
                  "identifier": "id-unid-3_1_opA_1_opA_3_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true,
              "isFocused": false
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior",
              "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
              "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. 83558071Z",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true,
              "isFocused": false
            }
          ]
        },
        {
          "label": "por medio de un representante (legal o voluntario)",
          "replacementOriginal": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6: id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2 y id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3 número id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4.",
          "replacement": "id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3_1_opA_1_opB_6: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.",
          "extraReplacements": [],
          "radioId": "id-unid-3_1_opA_1_opB",
          "identifier": "id-unid-3_1_opA_1_opB",
          "checked": false,
          "subSteps": [
            {
              "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
              "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
              "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_1",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo de este vendedor, incluyendo los apellidos."
              },
              "inherited": true
            },
            {
              "question": "Dirección del lugar donde reside este vendedor:",
              "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
              "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_2",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este vendedor."
              },
              "inherited": true
            },
            {
              "type": "iRadioB",
              "question": "Tipo de documento de identificación de este vendedor",
              "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
              "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_3",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Seleccione el tipo de documento de identificación de este vendedor."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_3_opA",
                  "identifier": "id-unid-3_1_opA_1_opB_3_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_3_opB",
                  "identifier": "id-unid-3_1_opA_1_opB_3_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_3_opC",
                  "identifier": "id-unid-3_1_opA_1_opB_3_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior",
              "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
              "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_4",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. 83558071Z",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true
            },
            {
              "question": "Nombre completo de la persona que firma este contrato en nombre y representación de este vendedor:",
              "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
              "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_5",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este vendedor. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
              },
              "inherited": true
            },
            {
              "type": "iRadioB",
              "question": "Documento de identificación de la persona que firma el contrato en nombre y representación de este vendedor:",
              "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
              "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_6",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación de este vendedor."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_6_opA",
                  "identifier": "id-unid-3_1_opA_1_opB_6_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_6_opB",
                  "identifier": "id-unid-3_1_opA_1_opB_6_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-3_1_opA_1_opB_6_opC",
                  "identifier": "id-unid-3_1_opA_1_opB_6_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior:",
              "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
              "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_7",
              "placeholder": "P. ej. 83558071Z",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true
            },
            {
              "question": "Calidad o concepto en el que esta persona firma este contrato en nombre y representación de este vendedor:",
              "wordToReplace": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
              "placeholder": "P. ej. apoderado",
              "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opB_8",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este vendedor."
              },
              "inherited": true
            }
          ]
        }
      ],
      "inheritFromRadioC": "id-unid-3id-unid-3_130id-unid-3_1_opA_1",
      "isFocused": false
    },
    {
      "question": "Nombre completo de este vendedor, incluyendo los apellidos:",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_1",
      "type": "iText",
      "replacement": "",
      "placeholder": "P. ej. Martino Montano Holguín",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Nombre completo de este vendedor, incluyendo los apellidos."
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "question": "Dirección del lugar donde reside este vendedor:",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_2",
      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
      "type": "iText",
      "replacement": "",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia del vendedor."
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "type": "iRadioB",
      "question": "Tipo de documento de identificación de este vendedor",
      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_3",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Seleccione el tipo de documento de identificación de este vendedor."
      },
      "replacement": "",
      "radios": [
        {
          "label": "DNI",
          "replacementOriginal": "DNI",
          "replacement": "",
          "radioId": "id-unid-3_1_opA_1_opA_3_opA",
          "identifier": "id-unid-3_1_opA_1_opA_3_opA",
          "extraReplacements": [],
          "checked": true
        },
        {
          "label": "NIE",
          "replacementOriginal": "NIE",
          "replacement": "",
          "radioId": "id-unid-3_1_opA_1_opA_3_opB",
          "identifier": "id-unid-3_1_opA_1_opA_3_opB",
          "extraReplacements": [],
          "checked": false
        },
        {
          "label": "Pasaporte",
          "replacementOriginal": "Pasaporte",
          "replacement": "",
          "radioId": "id-unid-3_1_opA_1_opA_3_opC",
          "identifier": "id-unid-3_1_opA_1_opA_3_opC",
          "extraReplacements": [],
          "checked": false
        }
      ],
      "inherited": true,
      "isFocused": false
    },
    {
      "question": "Número del documento seleccionado en la pregunta anterior",
      "wordToReplace": "id-unid-3_1_opA_1id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
      "identifier": "id-unid-3id-unid-3_130id-unid-3_1_opA_1id-unid-3_1_opA_1_opA_4",
      "type": "iText",
      "replacement": "",
      "placeholder": "P. ej. 83558071Z",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "type": "iForEach",
      "value": 1,
      "replacement": "",
      "identifier": "id-unid-4",
      "wordToReplace": "id-unid-4",
      "question": "Número de personas que van a comprar el vehículo:",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Indique el número de personas que van a comprar el vehículo."
      },
      "content": [
        {
          "identifier": "id-unid-4",
          "wordToReplace": "id-unid-4",
          "replacementOriginal": "id-unid-4_1",
          "replacement": "",
          "extraReplacements": [],
          "modifiedReplacements": [
            "id-unid-4id-unid-4_100"
          ],
          "modifiedExtraReplacements": [
            []
          ],
          "subSteps": [
            {
              "type": "iRadioC",
              "question": "Este comprador es:",
              "identifier": "id-unid-4_1",
              "wordToReplace": "id-unid-4_1",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Elija la personalidad jurídica de este comprador. Se entiende por persona física a es una persona natural (un individuo), hablamos de persona jurídica para referirnos a una institución o ente, por ejemplo, una empresa o una asociación, entre otros."
              },
              "defaultRadioId": "id-unid-4_1_opA",
              "replacement": "",
              "extraReplacements": [],
              "radios": [
                {
                  "label": "Persona física",
                  "radioId": "id-unid-4_1_opA",
                  "identifier": "id-unid-4_1_opA",
                  "replacementOriginal": "id-unid-4_1_opA_1",
                  "replacement": "id-unid-4_1_opA_1",
                  "extraReplacements": [],
                  "checked": true,
                  "subSteps": [
                    {
                      "type": "iRadioC",
                      "question": "Este comprador, para realizar el contrato, actúa",
                      "identifier": "id-unid-4_1_opA_1",
                      "wordToReplace": "id-unid-4_1_opA_1",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "El vendedor puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones del vendedor. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el vendedor quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
                      },
                      "defaultRadioId": "id-unid-4_1_opA_1_opA",
                      "replacement": "",
                      "extraReplacements": [],
                      "radios": [
                        {
                          "label": "en su propio nombre y representación",
                          "radioId": "id-unid-4_1_opA_1_opA",
                          "identifier": "id-unid-4_1_opA_1_opA",
                          "replacementOriginal": "id-unid-4_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-4_1_opA_1_opA_2, con id-unid-4_1_opA_1_opA_3 número id-unid-4_1_opA_1_opA_4, y en su propio nombre y representación.",
                          "replacement": "id-unid-4_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-4_1_opA_1_opA_2, con id-unid-4_1_opA_1_opA_3 número id-unid-4_1_opA_1_opA_4, y en su propio nombre y representación.",
                          "extraReplacements": [],
                          "checked": false,
                          "subSteps": [
                            {
                              "question": "Nombre completo de este comprador, incluyendo los apellidos:",
                              "wordToReplace": "id-unid-4_1_opA_1_opA_1",
                              "identifier": "id-unid-4_1_opA_1_opA_1",
                              "type": "iText",
                              "replacement": "",
                              "placeholder": "P. ej. Martino Montano Holguín",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Nombre completo de este comprador, incluyendo los apellidos."
                              }
                            },
                            {
                              "question": "Dirección del lugar donde reside este comprador:",
                              "wordToReplace": "id-unid-4_1_opA_1_opA_2",
                              "identifier": "id-unid-4_1_opA_1_opA_2",
                              "type": "iText",
                              "replacement": "",
                              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este comprador."
                              }
                            },
                            {
                              "type": "iRadioB",
                              "question": "Tipo de documento de identificación de este comprador",
                              "identifier": "id-unid-4_1_opA_1_opA_3",
                              "wordToReplace": "id-unid-4_1_opA_1_opA_3",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "outsideText",
                                "value": "Seleccione el tipo de documento de identificación de este comprador."
                              },
                              "replacement": "",
                              "radios": [
                                {
                                  "label": "DNI",
                                  "replacementOriginal": "DNI",
                                  "replacement": "",
                                  "radioId": "id-unid-4_1_opA_1_opA_3_opA",
                                  "identifier": "id-unid-4_1_opA_1_opA_3_opA",
                                  "extraReplacements": [],
                                  "checked": true
                                },
                                {
                                  "label": "NIE",
                                  "replacementOriginal": "NIE",
                                  "replacement": "",
                                  "radioId": "id-unid-4_1_opA_1_opA_3_opB",
                                  "identifier": "id-unid-4_1_opA_1_opA_3_opB",
                                  "extraReplacements": [],
                                  "checked": false
                                },
                                {
                                  "label": "Pasaporte",
                                  "replacementOriginal": "Pasaporte",
                                  "replacement": "",
                                  "radioId": "id-unid-4_1_opA_1_opA_3_opC",
                                  "identifier": "id-unid-4_1_opA_1_opA_3_opC",
                                  "extraReplacements": [],
                                  "checked": false
                                }
                              ]
                            },
                            {
                              "question": "Número del documento seleccionado en la pregunta anterior",
                              "wordToReplace": "id-unid-4_1_opA_1_opA_4",
                              "identifier": "id-unid-4_1_opA_1_opA_4",
                              "type": "iText",
                              "replacement": "",
                              "placeholder": "P. ej. 83558071Z",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                              }
                            }
                          ]
                        },
                        {
                          "label": "por medio de un representante (legal o voluntario)",
                          "replacementOriginal": "id-unid-4_1_opA_1_opB_5, mayor de edad, con id-unid-4_1_opA_1_opB_6: id-unid-4_1_opA_1_opB_7, quien actúa en calidad de id-unid-4_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de id-unid-4_1_opA_1_opB_1, con domicilio en id-unid-4_1_opA_1_opB_2 y id-unid-4_1_opA_1_opB_3 número id-unid-4_1_opA_1_opB_4.",
                          "replacement": "id-unid-4_1_opA_1_opB_5, mayor de edad, con id-unid-4_1_opA_1_opB_6: id-unid-4_1_opA_1_opB_7, quien actúa en calidad de id-unid-4_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de id-unid-4_1_opA_1_opB_1, con domicilio en id-unid-4_1_opA_1_opB_2 y id-unid-4_1_opA_1_opB_3 número id-unid-4_1_opA_1_opB_4.",
                          "extraReplacements": [],
                          "radioId": "id-unid-4_1_opA_1_opB",
                          "identifier": "id-unid-4_1_opA_1_opB",
                          "checked": false,
                          "subSteps": [
                            {
                              "question": "Nombre completo de este comprador, incluyendo los apellidos:",
                              "wordToReplace": "id-unid-4_1_opA_1_opB_1",
                              "identifier": "id-unid-4_1_opA_1_opB_1",
                              "type": "iText",
                              "replacement": "",
                              "placeholder": "P. ej. Martino Montano Holguín",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Nombre completo de este vendedor, incluyendo los apellidos."
                              }
                            },
                            {
                              "question": "Dirección del lugar donde reside este comprador:",
                              "wordToReplace": "id-unid-4_1_opA_1_opB_2",
                              "identifier": "id-unid-4_1_opA_1_opB_2",
                              "type": "iText",
                              "replacement": "",
                              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este comprador."
                              }
                            },
                            {
                              "type": "iRadioB",
                              "question": "Tipo de documento de identificación de este comprador",
                              "identifier": "id-unid-4_1_opA_1_opB_3",
                              "wordToReplace": "id-unid-4_1_opA_1_opB_3",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "outsideText",
                                "value": "Seleccione el tipo de documento de identificación de este comprador."
                              },
                              "replacement": "",
                              "radios": [
                                {
                                  "label": "DNI",
                                  "replacementOriginal": "DNI",
                                  "replacement": "",
                                  "radioId": "id-unid-4_1_opA_1_opB_3_opA",
                                  "identifier": "id-unid-4_1_opA_1_opB_3_opA",
                                  "extraReplacements": [],
                                  "checked": true
                                },
                                {
                                  "label": "NIE",
                                  "replacementOriginal": "NIE",
                                  "replacement": "",
                                  "radioId": "id-unid-4_1_opA_1_opB_3_opB",
                                  "identifier": "id-unid-4_1_opA_1_opB_3_opB",
                                  "extraReplacements": [],
                                  "checked": false
                                },
                                {
                                  "label": "Pasaporte",
                                  "replacementOriginal": "Pasaporte",
                                  "replacement": "",
                                  "radioId": "id-unid-4_1_opA_1_opB_3_opC",
                                  "identifier": "id-unid-4_1_opA_1_opB_3_opC",
                                  "extraReplacements": [],
                                  "checked": false
                                }
                              ]
                            },
                            {
                              "question": "Número del documento seleccionado en la pregunta anterior",
                              "wordToReplace": "id-unid-4_1_opA_1_opB_4",
                              "identifier": "id-unid-4_1_opA_1_opB_4",
                              "type": "iText",
                              "replacement": "",
                              "placeholder": "P. ej. 83558071Z",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                              }
                            },
                            {
                              "question": "Nombre completo de la persona que firma este contrato en nombre y representación de este comprador:",
                              "wordToReplace": "id-unid-4_1_opA_1_opB_5",
                              "identifier": "id-unid-4_1_opA_1_opB_5",
                              "type": "iText",
                              "replacement": "",
                              "placeholder": "P. ej. Martino Montano Holguín",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "outsideText",
                                "value": "Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este comprador. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
                              }
                            },
                            {
                              "type": "iRadioB",
                              "question": "Documento de identificación personal de la persona que firma este contrato en nombre y representación del comprador:",
                              "identifier": "id-unid-4_1_opA_1_opB_6",
                              "wordToReplace": "id-unid-4_1_opA_1_opB_6",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "outsideText",
                                "value": "Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación de este comprador."
                              },
                              "replacement": "",
                              "radios": [
                                {
                                  "label": "DNI",
                                  "replacementOriginal": "DNI",
                                  "replacement": "",
                                  "radioId": "id-unid-4_1_opA_1_opB_6_opA",
                                  "identifier": "id-unid-4_1_opA_1_opB_6_opA",
                                  "extraReplacements": [],
                                  "checked": true
                                },
                                {
                                  "label": "NIE",
                                  "replacementOriginal": "NIE",
                                  "replacement": "",
                                  "radioId": "id-unid-4_1_opA_1_opB_6_opB",
                                  "identifier": "id-unid-4_1_opA_1_opB_6_opB",
                                  "extraReplacements": [],
                                  "checked": false
                                },
                                {
                                  "label": "Pasaporte",
                                  "replacementOriginal": "Pasaporte",
                                  "replacement": "",
                                  "radioId": "id-unid-4_1_opA_1_opB_6_opC",
                                  "identifier": "id-unid-4_1_opA_1_opB_6_opC",
                                  "extraReplacements": [],
                                  "checked": false
                                }
                              ]
                            },
                            {
                              "question": "Número del documento seleccionado en la pregunta anterior:",
                              "wordToReplace": "id-unid-4_1_opA_1_opB_7",
                              "identifier": "id-unid-4_1_opA_1_opB_7",
                              "placeholder": "P. ej. 83558071Z",
                              "type": "iText",
                              "replacement": "",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                              }
                            },
                            {
                              "question": "Calidad o concepto en el que esta persona firma este contrato en nombre y representación de este comprador:",
                              "wordToReplace": "id-unid-4_1_opA_1_opB_8",
                              "identifier": "id-unid-4_1_opA_1_opB_8",
                              "placeholder": "P. ej. apoderado",
                              "type": "iText",
                              "replacement": "",
                              "indications": {
                                "areIndications": true,
                                "indicationsType": "insideText",
                                "value": "Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este comprador."
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "label": "Persona jurídica",
                  "replacementOriginal": "id-unid-4_1_opB_5, mayor de edad, con domicilio en id-unid-4_1_opB_6, con id-unid-4_1_opB_7 número id-unid-4_1_opB_8, en nombre y representación de: id-unid-4_1_opB_1, con N.I.F número id-unid-4_1_opB_2, e inscrita en: id-unid-4_1_opB_3 con la siguiente información: id-unid-4_1_opB_4.",
                  "replacement": "id-unid-4_1_opB_5, mayor de edad, con domicilio en id-unid-4_1_opB_6, con id-unid-4_1_opB_7 número id-unid-4_1_opB_8, en nombre y representación de: id-unid-4_1_opB_1, con N.I.F número id-unid-4_1_opB_2, e inscrita en: id-unid-4_1_opB_3 con la siguiente información: id-unid-4_1_opB_4.",
                  "extraReplacements": [],
                  "radioId": "id-unid-4_1_opB",
                  "identifier": "id-unid-4_1_opB",
                  "checked": false,
                  "subSteps": [
                    {
                      "question": "Nombre completo de la persona jurídica que va a comprar el vehículo:",
                      "wordToReplace": "id-unid-4_1_opB_1",
                      "identifier": "id-unid-4_1_opB_1",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Banco Santander, S.A.",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Si no conoce el nombre, mediante el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc), puede soliticar la información."
                      }
                    },
                    {
                      "question": "NIF (Número de Identificación Fiscal) completo de la persona jurídica:",
                      "wordToReplace": "id-unid-4_1_opB_2",
                      "identifier": "id-unid-4_1_opB_2",
                      "type": "iText",
                      "placeholder": "P. ej. B29805314",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">NIF empresarial</a>."
                      }
                    },
                    {
                      "question": "Tipo de registro y lugar donde está inscrita esta persona jurídica:",
                      "wordToReplace": "id-unid-4_1_opB_3",
                      "identifier": "id-unid-4_1_opB_3",
                      "placeholder": "Registro Mercantil de Sevilla",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\">Datos registrales</a>"
                      }
                    },
                    {
                      "question": "Datos registrales de la persona jurídica:",
                      "wordToReplace": "id-unid-4_1_opB_4",
                      "identifier": "id-unid-4_1_opB_4",
                      "placeholder": "P. ej. Tomo 123, folio 10, hoja SE-1234",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\">Datos registrales</a>"
                      }
                    },
                    {
                      "question": "Nombre completo, incluyendo apellidos, del representante de la persona jurídica:",
                      "wordToReplace": "id-unid-4_1_opB_5",
                      "identifier": "id-unid-4_1_opB_5",
                      "placeholder": "P. ej. Margarita García Pérez",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Nombre completo, incluyendo apellidos, del representante de la persona jurídica"
                      }
                    },
                    {
                      "question": "Domicilio completo del representante de la persona jurídica:",
                      "wordToReplace": "id-unid-4_1_opB_6",
                      "identifier": "id-unid-4_1_opB_6",
                      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Domicilio, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país del representante de la persona jurídica"
                      }
                    },
                    {
                      "type": "iRadioB",
                      "question": "Documento de identidad del representante de la persona jurídica:",
                      "identifier": "id-unid-4_1_opB_7",
                      "wordToReplace": "id-unid-4_1_opB_7",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Seleccione el tipo documento de identidad del representante de la persona jurídica."
                      },
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-4_1_opB_7_opA",
                          "identifier": "id-unid-4_1_opB_7_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-4_1_opB_7_opB",
                          "identifier": "id-unid-4_1_opB_7_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-4_1_opB_7_opC",
                          "identifier": "id-unid-4_1_opB_7_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ]
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior de identificación personal seleccionado:",
                      "wordToReplace": "id-unid-4_1_opB_8",
                      "identifier": "id-unid-4_1_opB_8",
                      "type": "iText",
                      "placeholder": "P. ej: 42888457N",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Escriba el número que corresponde con el documento de identificación personal seleccionado en la pregunta anterior"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "isFocused": false
    },
    {
      "type": "iRadioC",
      "question": "Este comprador es:",
      "identifier": "id-unid-4id-unid-4_100",
      "wordToReplace": "id-unid-4id-unid-4_100",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Elija la personalidad jurídica de este comprador. Se entiende por persona física a es una persona natural (un individuo), hablamos de persona jurídica para referirnos a una institución o ente, por ejemplo, una empresa o una asociación, entre otros."
      },
      "defaultRadioId": "id-unid-4_1_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "Persona física",
          "radioId": "id-unid-4_1_opA",
          "identifier": "id-unid-4_1_opA",
          "replacementOriginal": "id-unid-4_1_opA_1",
          "replacement": "id-unid-4id-unid-4_100id-unid-4_1_opA_1",
          "extraReplacements": [],
          "checked": true,
          "subSteps": [
            {
              "type": "iRadioC",
              "question": "Este comprador, para realizar el contrato, actúa",
              "identifier": "id-unid-4_1_opA_1",
              "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "El vendedor puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones del vendedor. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el vendedor quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
              },
              "defaultRadioId": "id-unid-4_1_opA_1_opA",
              "replacement": "",
              "extraReplacements": [],
              "radios": [
                {
                  "label": "en su propio nombre y representación",
                  "radioId": "id-unid-4_1_opA_1_opA",
                  "identifier": "id-unid-4_1_opA_1_opA",
                  "replacementOriginal": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_2, con id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_3 número id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_4, y en su propio nombre y representación.",
                  "replacement": "id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_2, con id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_3 número id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_4, y en su propio nombre y representación.",
                  "extraReplacements": [],
                  "checked": true,
                  "subSteps": [
                    {
                      "question": "Nombre completo de este comprador, incluyendo los apellidos:",
                      "wordToReplace": "id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_1",
                      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_1",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Nombre completo de este comprador, incluyendo los apellidos."
                      },
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "question": "Dirección del lugar donde reside este comprador:",
                      "wordToReplace": "id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_2",
                      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_2",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este comprador."
                      },
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "type": "iRadioB",
                      "question": "Tipo de documento de identificación de este comprador",
                      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_3",
                      "wordToReplace": "id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_3",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Seleccione el tipo de documento de identificación de este comprador."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-4_1_opA_1_opA_3_opA",
                          "identifier": "id-unid-4_1_opA_1_opA_3_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-4_1_opA_1_opA_3_opB",
                          "identifier": "id-unid-4_1_opA_1_opA_3_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-4_1_opA_1_opA_3_opC",
                          "identifier": "id-unid-4_1_opA_1_opA_3_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true,
                      "isFocused": false
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior",
                      "wordToReplace": "id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_4",
                      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_4",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. 83558071Z",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true,
                      "isFocused": false
                    }
                  ]
                },
                {
                  "label": "por medio de un representante (legal o voluntario)",
                  "replacementOriginal": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_5, mayor de edad, con id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_6: id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_7, quien actúa en calidad de id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_1, con domicilio en id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_2 y id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_3 número id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_4.",
                  "replacement": "id-unid-4_1_opA_1_opB_5, mayor de edad, con id-unid-4_1_opA_1_opB_6: id-unid-4_1_opA_1_opB_7, quien actúa en calidad de id-unid-4_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de id-unid-4_1_opA_1_opB_1, con domicilio en id-unid-4_1_opA_1_opB_2 y id-unid-4_1_opA_1_opB_3 número id-unid-4_1_opA_1_opB_4.",
                  "extraReplacements": [],
                  "radioId": "id-unid-4_1_opA_1_opB",
                  "identifier": "id-unid-4_1_opA_1_opB",
                  "checked": false,
                  "subSteps": [
                    {
                      "question": "Nombre completo de este comprador, incluyendo los apellidos:",
                      "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_1",
                      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_1",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Nombre completo de este vendedor, incluyendo los apellidos."
                      },
                      "inherited": true
                    },
                    {
                      "question": "Dirección del lugar donde reside este comprador:",
                      "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_2",
                      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_2",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este comprador."
                      },
                      "inherited": true
                    },
                    {
                      "type": "iRadioB",
                      "question": "Tipo de documento de identificación de este comprador",
                      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_3",
                      "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_3",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Seleccione el tipo de documento de identificación de este comprador."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-4_1_opA_1_opB_3_opA",
                          "identifier": "id-unid-4_1_opA_1_opB_3_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-4_1_opA_1_opB_3_opB",
                          "identifier": "id-unid-4_1_opA_1_opB_3_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-4_1_opA_1_opB_3_opC",
                          "identifier": "id-unid-4_1_opA_1_opB_3_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior",
                      "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_4",
                      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_4",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. 83558071Z",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true
                    },
                    {
                      "question": "Nombre completo de la persona que firma este contrato en nombre y representación de este comprador:",
                      "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_5",
                      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_5",
                      "type": "iText",
                      "replacement": "",
                      "placeholder": "P. ej. Martino Montano Holguín",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este comprador. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
                      },
                      "inherited": true
                    },
                    {
                      "type": "iRadioB",
                      "question": "Documento de identificación personal de la persona que firma este contrato en nombre y representación del comprador:",
                      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_6",
                      "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_6",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación de este comprador."
                      },
                      "replacement": "",
                      "radios": [
                        {
                          "label": "DNI",
                          "replacementOriginal": "DNI",
                          "replacement": "",
                          "radioId": "id-unid-4_1_opA_1_opB_6_opA",
                          "identifier": "id-unid-4_1_opA_1_opB_6_opA",
                          "extraReplacements": [],
                          "checked": true
                        },
                        {
                          "label": "NIE",
                          "replacementOriginal": "NIE",
                          "replacement": "",
                          "radioId": "id-unid-4_1_opA_1_opB_6_opB",
                          "identifier": "id-unid-4_1_opA_1_opB_6_opB",
                          "extraReplacements": [],
                          "checked": false
                        },
                        {
                          "label": "Pasaporte",
                          "replacementOriginal": "Pasaporte",
                          "replacement": "",
                          "radioId": "id-unid-4_1_opA_1_opB_6_opC",
                          "identifier": "id-unid-4_1_opA_1_opB_6_opC",
                          "extraReplacements": [],
                          "checked": false
                        }
                      ],
                      "inherited": true
                    },
                    {
                      "question": "Número del documento seleccionado en la pregunta anterior:",
                      "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_7",
                      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_7",
                      "placeholder": "P. ej. 83558071Z",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
                      },
                      "inherited": true
                    },
                    {
                      "question": "Calidad o concepto en el que esta persona firma este contrato en nombre y representación de este comprador:",
                      "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_8",
                      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_8",
                      "placeholder": "P. ej. apoderado",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "insideText",
                        "value": "Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este comprador."
                      },
                      "inherited": true
                    }
                  ]
                }
              ],
              "inheritFromRadioC": "id-unid-4id-unid-4_100id-unid-4_1_opA_1",
              "isFocused": false
            }
          ]
        },
        {
          "label": "Persona jurídica",
          "replacementOriginal": "id-unid-4_1_opB_5, mayor de edad, con domicilio en id-unid-4_1_opB_6, con id-unid-4_1_opB_7 número id-unid-4_1_opB_8, en nombre y representación de: id-unid-4_1_opB_1, con N.I.F número id-unid-4_1_opB_2, e inscrita en: id-unid-4_1_opB_3 con la siguiente información: id-unid-4_1_opB_4.",
          "replacement": "id-unid-4_1_opB_5, mayor de edad, con domicilio en id-unid-4_1_opB_6, con id-unid-4_1_opB_7 número id-unid-4_1_opB_8, en nombre y representación de: id-unid-4_1_opB_1, con N.I.F número id-unid-4_1_opB_2, e inscrita en: id-unid-4_1_opB_3 con la siguiente información: id-unid-4_1_opB_4.",
          "extraReplacements": [],
          "radioId": "id-unid-4_1_opB",
          "identifier": "id-unid-4_1_opB",
          "checked": false,
          "subSteps": [
            {
              "question": "Nombre completo de la persona jurídica que va a comprar el vehículo:",
              "wordToReplace": "id-unid-4_1_opB_1",
              "identifier": "id-unid-4_1_opB_1",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Banco Santander, S.A.",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Si no conoce el nombre, mediante el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc), puede soliticar la información."
              }
            },
            {
              "question": "NIF (Número de Identificación Fiscal) completo de la persona jurídica:",
              "wordToReplace": "id-unid-4_1_opB_2",
              "identifier": "id-unid-4_1_opB_2",
              "type": "iText",
              "placeholder": "P. ej. B29805314",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">NIF empresarial</a>."
              }
            },
            {
              "question": "Tipo de registro y lugar donde está inscrita esta persona jurídica:",
              "wordToReplace": "id-unid-4_1_opB_3",
              "identifier": "id-unid-4_1_opB_3",
              "placeholder": "Registro Mercantil de Sevilla",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\">Datos registrales</a>"
              }
            },
            {
              "question": "Datos registrales de la persona jurídica:",
              "wordToReplace": "id-unid-4_1_opB_4",
              "identifier": "id-unid-4_1_opB_4",
              "placeholder": "P. ej. Tomo 123, folio 10, hoja SE-1234",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html\" target=\"_blank\">Datos registrales</a>"
              }
            },
            {
              "question": "Nombre completo, incluyendo apellidos, del representante de la persona jurídica:",
              "wordToReplace": "id-unid-4_1_opB_5",
              "identifier": "id-unid-4_1_opB_5",
              "placeholder": "P. ej. Margarita García Pérez",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo, incluyendo apellidos, del representante de la persona jurídica"
              }
            },
            {
              "question": "Domicilio completo del representante de la persona jurídica:",
              "wordToReplace": "id-unid-4_1_opB_6",
              "identifier": "id-unid-4_1_opB_6",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Domicilio, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país del representante de la persona jurídica"
              }
            },
            {
              "type": "iRadioB",
              "question": "Documento de identidad del representante de la persona jurídica:",
              "identifier": "id-unid-4_1_opB_7",
              "wordToReplace": "id-unid-4_1_opB_7",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Seleccione el tipo documento de identidad del representante de la persona jurídica."
              },
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-4_1_opB_7_opA",
                  "identifier": "id-unid-4_1_opB_7_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-4_1_opB_7_opB",
                  "identifier": "id-unid-4_1_opB_7_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-4_1_opB_7_opC",
                  "identifier": "id-unid-4_1_opB_7_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ]
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior de identificación personal seleccionado:",
              "wordToReplace": "id-unid-4_1_opB_8",
              "identifier": "id-unid-4_1_opB_8",
              "type": "iText",
              "placeholder": "P. ej: 42888457N",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Escriba el número que corresponde con el documento de identificación personal seleccionado en la pregunta anterior"
              }
            }
          ]
        }
      ],
      "isFocused": false,
      "cached": true
    },
    {
      "type": "iRadioC",
      "question": "Este comprador, para realizar el contrato, actúa",
      "identifier": "id-unid-4_1_opA_1",
      "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "El vendedor puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones del vendedor. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el vendedor quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
      },
      "defaultRadioId": "id-unid-4_1_opA_1_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "en su propio nombre y representación",
          "radioId": "id-unid-4_1_opA_1_opA",
          "identifier": "id-unid-4_1_opA_1_opA",
          "replacementOriginal": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_2, con id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_3 número id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_4, y en su propio nombre y representación.",
          "replacement": "id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_2, con id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_3 número id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_4, y en su propio nombre y representación.",
          "extraReplacements": [],
          "checked": true,
          "subSteps": [
            {
              "question": "Nombre completo de este comprador, incluyendo los apellidos:",
              "wordToReplace": "id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_1",
              "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_1",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo de este comprador, incluyendo los apellidos."
              },
              "inherited": true,
              "isFocused": false
            },
            {
              "question": "Dirección del lugar donde reside este comprador:",
              "wordToReplace": "id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_2",
              "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_2",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este comprador."
              },
              "inherited": true,
              "isFocused": false
            },
            {
              "type": "iRadioB",
              "question": "Tipo de documento de identificación de este comprador",
              "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_3",
              "wordToReplace": "id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_3",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Seleccione el tipo de documento de identificación de este comprador."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-4_1_opA_1_opA_3_opA",
                  "identifier": "id-unid-4_1_opA_1_opA_3_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-4_1_opA_1_opA_3_opB",
                  "identifier": "id-unid-4_1_opA_1_opA_3_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-4_1_opA_1_opA_3_opC",
                  "identifier": "id-unid-4_1_opA_1_opA_3_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true,
              "isFocused": false
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior",
              "wordToReplace": "id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_4",
              "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_4",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. 83558071Z",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true,
              "isFocused": false
            }
          ]
        },
        {
          "label": "por medio de un representante (legal o voluntario)",
          "replacementOriginal": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_5, mayor de edad, con id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_6: id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_7, quien actúa en calidad de id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_1, con domicilio en id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_2 y id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_3 número id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_4.",
          "replacement": "id-unid-4_1_opA_1_opB_5, mayor de edad, con id-unid-4_1_opA_1_opB_6: id-unid-4_1_opA_1_opB_7, quien actúa en calidad de id-unid-4_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de id-unid-4_1_opA_1_opB_1, con domicilio en id-unid-4_1_opA_1_opB_2 y id-unid-4_1_opA_1_opB_3 número id-unid-4_1_opA_1_opB_4.",
          "extraReplacements": [],
          "radioId": "id-unid-4_1_opA_1_opB",
          "identifier": "id-unid-4_1_opA_1_opB",
          "checked": false,
          "subSteps": [
            {
              "question": "Nombre completo de este comprador, incluyendo los apellidos:",
              "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_1",
              "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_1",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Nombre completo de este vendedor, incluyendo los apellidos."
              },
              "inherited": true
            },
            {
              "question": "Dirección del lugar donde reside este comprador:",
              "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_2",
              "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_2",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este comprador."
              },
              "inherited": true
            },
            {
              "type": "iRadioB",
              "question": "Tipo de documento de identificación de este comprador",
              "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_3",
              "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_3",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Seleccione el tipo de documento de identificación de este comprador."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-4_1_opA_1_opB_3_opA",
                  "identifier": "id-unid-4_1_opA_1_opB_3_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-4_1_opA_1_opB_3_opB",
                  "identifier": "id-unid-4_1_opA_1_opB_3_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-4_1_opA_1_opB_3_opC",
                  "identifier": "id-unid-4_1_opA_1_opB_3_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior",
              "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_4",
              "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_4",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. 83558071Z",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true
            },
            {
              "question": "Nombre completo de la persona que firma este contrato en nombre y representación de este comprador:",
              "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_5",
              "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_5",
              "type": "iText",
              "replacement": "",
              "placeholder": "P. ej. Martino Montano Holguín",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este comprador. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href=\"https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE\" target=\"_blank\">Poder de representación</a>"
              },
              "inherited": true
            },
            {
              "type": "iRadioB",
              "question": "Documento de identificación personal de la persona que firma este contrato en nombre y representación del comprador:",
              "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_6",
              "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_6",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación de este comprador."
              },
              "replacement": "",
              "radios": [
                {
                  "label": "DNI",
                  "replacementOriginal": "DNI",
                  "replacement": "",
                  "radioId": "id-unid-4_1_opA_1_opB_6_opA",
                  "identifier": "id-unid-4_1_opA_1_opB_6_opA",
                  "extraReplacements": [],
                  "checked": true
                },
                {
                  "label": "NIE",
                  "replacementOriginal": "NIE",
                  "replacement": "",
                  "radioId": "id-unid-4_1_opA_1_opB_6_opB",
                  "identifier": "id-unid-4_1_opA_1_opB_6_opB",
                  "extraReplacements": [],
                  "checked": false
                },
                {
                  "label": "Pasaporte",
                  "replacementOriginal": "Pasaporte",
                  "replacement": "",
                  "radioId": "id-unid-4_1_opA_1_opB_6_opC",
                  "identifier": "id-unid-4_1_opA_1_opB_6_opC",
                  "extraReplacements": [],
                  "checked": false
                }
              ],
              "inherited": true
            },
            {
              "question": "Número del documento seleccionado en la pregunta anterior:",
              "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_7",
              "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_7",
              "placeholder": "P. ej. 83558071Z",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
              },
              "inherited": true
            },
            {
              "question": "Calidad o concepto en el que esta persona firma este contrato en nombre y representación de este comprador:",
              "wordToReplace": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_8",
              "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opB_8",
              "placeholder": "P. ej. apoderado",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este comprador."
              },
              "inherited": true
            }
          ]
        }
      ],
      "inheritFromRadioC": "id-unid-4id-unid-4_100id-unid-4_1_opA_1",
      "isFocused": false
    },
    {
      "question": "Nombre completo de este comprador, incluyendo los apellidos:",
      "wordToReplace": "id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_1",
      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_1",
      "type": "iText",
      "replacement": "",
      "placeholder": "P. ej. Martino Montano Holguín",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Nombre completo de este comprador, incluyendo los apellidos."
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "question": "Dirección del lugar donde reside este comprador:",
      "wordToReplace": "id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_2",
      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_2",
      "type": "iText",
      "replacement": "",
      "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia de este comprador."
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "type": "iRadioB",
      "question": "Tipo de documento de identificación de este comprador",
      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_3",
      "wordToReplace": "id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_3",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Seleccione el tipo de documento de identificación de este comprador."
      },
      "replacement": "",
      "radios": [
        {
          "label": "DNI",
          "replacementOriginal": "DNI",
          "replacement": "",
          "radioId": "id-unid-4_1_opA_1_opA_3_opA",
          "identifier": "id-unid-4_1_opA_1_opA_3_opA",
          "extraReplacements": [],
          "checked": true
        },
        {
          "label": "NIE",
          "replacementOriginal": "NIE",
          "replacement": "",
          "radioId": "id-unid-4_1_opA_1_opA_3_opB",
          "identifier": "id-unid-4_1_opA_1_opA_3_opB",
          "extraReplacements": [],
          "checked": false
        },
        {
          "label": "Pasaporte",
          "replacementOriginal": "Pasaporte",
          "replacement": "",
          "radioId": "id-unid-4_1_opA_1_opA_3_opC",
          "identifier": "id-unid-4_1_opA_1_opA_3_opC",
          "extraReplacements": [],
          "checked": false
        }
      ],
      "inherited": true,
      "isFocused": false
    },
    {
      "question": "Número del documento seleccionado en la pregunta anterior",
      "wordToReplace": "id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_4",
      "identifier": "id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4id-unid-4_100id-unid-4_1_opA_1id-unid-4_1_opA_1_opA_4",
      "type": "iText",
      "replacement": "",
      "placeholder": "P. ej. 83558071Z",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior"
      },
      "inherited": true,
      "isFocused": false
    },
    {
      "type": "iRadioC",
      "subType": "select",
      "question": "Tipo de vehículo que se va a vender:",
      "identifier": "id-unid-5",
      "wordToReplace": "id-unid-5",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Escoja el tipo de vehículo objeto de venta en este contrato, si no encuentro el tipo de vehículo entre las opciones propuestas seleccione \"otro vehículo\"."
      },
      "defaultRadioId": "id-unid-5_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "ciclomotor (vehículo con dos ruedas, pedales y motor menor a 50 cc​)",
          "radioId": "id-unid-5_opA",
          "identifier": "id-unid-5_opA",
          "replacementOriginal": "Tipo de Vehículo automóvil: ciclomotor",
          "replacement": "Tipo de Vehículo automóvil: ciclomotor",
          "extraReplacements": [],
          "checked": false,
          "subSteps": []
        },
        {
          "label": "motocicleta o moto (dos ruedas y motor mayor a 50 cc​)",
          "replacementOriginal": "id-unid-5_opB_1",
          "replacement": "id-unid-5_opB_1",
          "extraReplacements": [],
          "radioId": "id-unid-5_opB",
          "identifier": "id-unid-5_opB",
          "checked": false,
          "subSteps": [
            {
              "type": "iRadioC",
              "subType": "select",
              "question": "Tipo de motocicleta:",
              "identifier": "id-unid-5_opB_1",
              "wordToReplace": "id-unid-5_opB_1",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Escoja el tipo de motocicleta objeto de venta en este contrato, si no encuentra el tipo de motocicleta entre las opciones propuestas seleccione \"otro tipo de motocicleta\""
              },
              "defaultRadioId": "id-unid-5_opA",
              "replacement": "",
              "extraReplacements": [],
              "radios": [
                {
                  "label": "scooter",
                  "radioId": "id-unid-5_opA_1_opA",
                  "identifier": "id-unid-5_opA_1_opA",
                  "replacementOriginal": "Tipo de Vehículo automóvil: motocicleta scooter",
                  "replacement": "Tipo de Vehículo automóvil: motocicleta scooter",
                  "extraReplacements": [],
                  "checked": true,
                  "subSteps": []
                },
                {
                  "label": "motocross",
                  "replacementOriginal": "Tipo de Vehículo automóvil: motocicleta de motocross",
                  "replacement": "Tipo de Vehículo automóvil: motocicleta de motocross",
                  "extraReplacements": [],
                  "radioId": "id-unid-5_opA_1_opB",
                  "identifier": "id-unid-5_opA_1_opB",
                  "checked": false,
                  "subSteps": []
                },
                {
                  "label": "motocicleta eléctrica",
                  "replacementOriginal": "Tipo de Vehículo automóvil: motocicleta eléctrica",
                  "replacement": "Tipo de Vehículo automóvil: motocicleta eléctrica",
                  "extraReplacements": [],
                  "radioId": "id-unid-5_opA_1_opC",
                  "identifier": "id-unid-5_opA_1_opC",
                  "checked": false,
                  "subSteps": []
                },
                {
                  "label": "motocicleta deportiva o superbike",
                  "replacementOriginal": "Tipo de Vehículo automóvil: motocicleta deportiva",
                  "replacement": "Tipo de Vehículo automóvil: motocicleta deportiva",
                  "extraReplacements": [],
                  "radioId": "id-unid-5_opA_1_opD",
                  "identifier": "id-unid-5_opA_1_opD",
                  "checked": false,
                  "subSteps": []
                },
                {
                  "label": "motocicleta naked (motocicleta con motor al descubierto)",
                  "replacementOriginal": "Tipo de Vehículo automóvil: motocicleta naked",
                  "replacement": "Tipo de Vehículo automóvil: motocicleta naked",
                  "extraReplacements": [],
                  "radioId": "id-unid-5_opA_1_opE",
                  "identifier": "id-unid-5_opA_1_opE",
                  "checked": false,
                  "subSteps": []
                },
                {
                  "label": "motocicleta gran turismo (motocicleta de carretera)",
                  "replacementOriginal": "Tipo de Vehículo automóvil: motocicleta gran turismo",
                  "replacement": "Tipo de Vehículo automóvil: motocicleta gran turismo",
                  "extraReplacements": [],
                  "radioId": "id-unid-5_opA_1_opF",
                  "identifier": "id-unid-5_opA_1_opF",
                  "checked": false,
                  "subSteps": []
                },
                {
                  "label": "otro tipo de motocicleta",
                  "replacementOriginal": "Tipo de Vehículo automóvil: motocicleta tipo id-unid-5_opA_1_opG_1",
                  "replacement": "Tipo de Vehículo automóvil: motocicleta tipo id-unid-5_opA_1_opG_1",
                  "extraReplacements": [],
                  "radioId": "id-unid-5_opA_1_opG",
                  "identifier": "id-unid-5_opA_1_opG",
                  "checked": false,
                  "subSteps": [
                    {
                      "question": "Tipo de motocicleta que se va a vender:",
                      "placeholder": "P. ej: moto tral, enduro, chopper",
                      "wordToReplace": "id-unid-5_opA_1_opG_1",
                      "identifier": "id-unid-5_opA_1_opG_1",
                      "type": "iText",
                      "replacement": "",
                      "indications": {
                        "areIndications": true,
                        "indicationsType": "outsideText",
                        "value": "Indique el tipo de motocicleta que se desea vender mediante este contrato. Por ejemplo: MegaScooter, Moto Enduro, Moto Supermotard, Moto Trial, Moto Cruiser, Moto Chopper, Moto Streetfighter, Moto Sport Turismo, etc"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "motocarro (de tres ruedas dotado de plataforma para el transporte de mercancías)",
          "radioId": "id-unid-5_opC",
          "identifier": "id-unid-5_opC",
          "replacementOriginal": "Tipo de Vehículo automóvil: motocarro",
          "replacement": "Tipo de Vehículo automóvil: motocarro",
          "extraReplacements": [],
          "checked": false,
          "subSteps": []
        },
        {
          "label": "turismo o coche (para transportar hasta 9 personas)",
          "replacementOriginal": "id-unid-5_opD_1",
          "replacement": "id-unid-5_opD_1",
          "extraReplacements": [],
          "radioId": "id-unid-5_opD",
          "identifier": "id-unid-5_opD",
          "checked": false,
          "subSteps": [
            {
              "type": "iRadioC",
              "subType": "select",
              "question": "Tipo de turismo o coche:",
              "identifier": "id-unid-5_opD_1",
              "wordToReplace": "id-unid-5_opD_1",
              "indications": {
                "areIndications": true,
                "indicationsType": "outsideText",
                "value": "Escoja el tipo de turismo o coche objeto de venta en este contrato, si no encuentra el tipo de turismo o coche entre las opciones propuestas seleccione \"otro tipo de turismo\""
              },
              "defaultRadioId": "id-unid-5_opA",
              "replacement": "",
              "extraReplacements": [],
              "radios": [
                {
                  "label": "monovolumen (5 plazas o más)",
                  "radioId": "id-unid-5_opD_1_opA",
                  "identifier": "id-unid-5_opD_1_opA",
                  "replacementOriginal": "Tipo de Vehículo automóvil: coche monovolumen",
                  "replacement": "Tipo de Vehículo automóvil: coche monovolumen",
                  "extraReplacements": [],
                  "checked": true,
                  "subSteps": []
                },
                {
                  "label": "berlina (4 o más plazas con luna trasera fija)",
                  "replacementOriginal": "Tipo de Vehículo automóvil: coche berlina",
                  "replacement": "Tipo de Vehículo automóvil: coche berlina",
                  "extraReplacements": [],
                  "radioId": "id-unid-5_opD_1_opB",
                  "identifier": "id-unid-5_opD_1_opB",
                  "checked": false,
                  "subSteps": []
                },
                {
                  "label": "cupé (coche con forma de berlina pero que cuenta con tres puertas)",
                  "replacementOriginal": "Tipo de Vehículo automóvil: coche cupé",
                  "replacement": "Tipo de Vehículo automóvil: coche cupé",
                  "extraReplacements": [],
                  "radioId": "id-unid-5_opD_1_opC",
                  "identifier": "id-unid-5_opD_1_opC",
                  "checked": false,
                  "subSteps": []
                },
                {
                  "label": "descapotable (con techo plegable o capota)",
                  "replacementOriginal": "Tipo de Vehículo automóvil: coche descapotable",
                  "replacement": "Tipo de Vehículo automóvil: coche descapotable",
                  "extraReplacements": [],
                  "radioId": "id-unid-5_opD_1_opD",
                  "identifier": "id-unid-5_opD_1_opD",
                  "checked": false,
                  "subSteps": []
                },
                {
                  "label": "todoterreno (adaptado para uso en terrenos agrarios)",
                  "replacementOriginal": "Tipo de Vehículo automóvil: coche todoterreno",
                  "replacement": "Tipo de Vehículo automóvil: coche todoterreno",
                  "extraReplacements": [],
                  "radioId": "id-unid-5_opD_1_opE",
                  "identifier": "id-unid-5_opD_1_opE",
                  "checked": false,
                  "subSteps": []
                },
                {
                  "label": "otro tipo de turismo",
                  "replacementOriginal": "Tipo de Vehículo automóvil: coche tipo id-unid-5_opD_1_opF_1",
                  "replacement": "Tipo de Vehículo automóvil: coche tipo id-unid-5_opD_1_opF_1",
                  "extraReplacements": [],
                  "radioId": "id-unid-5_opD_1_opF",
                  "identifier": "id-unid-5_opD_1_opF",
                  "checked": false,
                  "subSteps": [
                    {
                      "question": "Tipo de turismo o coche:",
                      "placeholder": "suv, familiar, de competeción",
                      "wordToReplace": "id-unid-5_opD_1_opF_1",
                      "identifier": "id-unid-5_opD_1_opF_1",
                      "type": "iText",
                      "replacement": ""
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "furgón o furgoneta (para el transporte de mercancías hasta 3.500 kilos)",
          "radioId": "id-unid-5_opE",
          "identifier": "id-unid-5_opE",
          "replacementOriginal": "Tipo de Vehículo automóvil: furgoneta",
          "replacement": "Tipo de Vehículo automóvil: furgoneta",
          "extraReplacements": [],
          "checked": false,
          "subSteps": []
        },
        {
          "label": "camión (para el transporte de mercancías de más de 3.500 kilos)",
          "radioId": "id-unid-5_opF",
          "identifier": "id-unid-5_opF",
          "replacementOriginal": "Tipo de Vehículo automóvil: camión",
          "replacement": "Tipo de Vehículo automóvil: camión",
          "extraReplacements": [],
          "checked": false,
          "subSteps": []
        },
        {
          "label": "autobús o autocar (para el transporte de más de 9 personas)",
          "radioId": "id-unid-5_opG",
          "identifier": "id-unid-5_opG",
          "replacementOriginal": "Tipo de Vehículo automóvil: camión",
          "replacement": "Tipo de Vehículo automóvil: camión",
          "extraReplacements": [],
          "checked": false,
          "subSteps": []
        },
        {
          "label": "otro vehículo",
          "radioId": "id-unid-5_opH",
          "identifier": "id-unid-5_opH",
          "replacementOriginal": "Tipo de Vehículo automóvil: id-unid-5_opH_1",
          "replacement": "Tipo de Vehículo automóvil: id-unid-5id-unid-5_opH_1",
          "extraReplacements": [],
          "checked": true,
          "subSteps": [
            {
              "question": "Tipo de vehículo que se desea vender mediante este contrato distinto a los indicados en la pregunta anterior:",
              "placeholder": "autocaravana, quad",
              "wordToReplace": "id-unid-5id-unid-5_opH_1",
              "identifier": "id-unid-5_opH_1",
              "type": "iText",
              "replacement": "",
              "indications": {
                "areIndications": true,
                "indicationsType": "insideText",
                "value": "Indique el tipo de vehículo que desea vender mediante este contrato distinto a los indicados en la pregunta anterior."
              },
              "isFocused": false
            }
          ]
        }
      ],
      "isFocused": false
    },
    {
      "question": "Tipo de vehículo que se desea vender mediante este contrato distinto a los indicados en la pregunta anterior:",
      "placeholder": "autocaravana, quad",
      "wordToReplace": "id-unid-5id-unid-5_opH_1",
      "identifier": "id-unid-5_opH_1",
      "type": "iText",
      "replacement": "",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Indique el tipo de vehículo que desea vender mediante este contrato distinto a los indicados en la pregunta anterior."
      },
      "isFocused": false
    },
    {
      "type": "iText",
      "identifier": "id-unid-6",
      "wordToReplace": "id-unid-6",
      "replacement": "",
      "placeholder": "P. ej: Seat, Citroen, Suzuki,...",
      "question": "Marca del vehículo :",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Escriba la marca fabricante del vehículo que se va a vender."
      },
      "mandatory": true,
      "isFocused": false
    },
    {
      "type": "iText",
      "identifier": "id-unid-7",
      "wordToReplace": "id-unid-7",
      "replacement": "",
      "placeholder": "P. ej: Ibiza, Polo, C4,...",
      "question": "Modelo específico del vehículo:",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Escriba el modelo específico del vehículo que se desea vender."
      },
      "mandatory": true,
      "isFocused": false
    },
    {
      "type": "iText",
      "identifier": "id-unid-8",
      "wordToReplace": "id-unid-8",
      "replacement": "",
      "placeholder": "P. ej: VF1RFD00653635032",
      "question": "Número de serie y bastidor (mejor conocido como nº de bastidor) del vehículo:",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Escriba el número de serie y bastidor (o simplemente conocido como nº de bastidor) del vehículo que se desea vender. Si desea más información sobre el número de bastidor y como encontrarlo puede consultar el siguiente enlace: <a href=\"https://www.autopista.es/noticias-motor/articulo/numero-bastidor-coche-significado\" target=\"_blank\">Número de bastidor</a>"
      },
      "mandatory": true,
      "isFocused": false
    },
    {
      "type": "iText",
      "identifier": "id-unid-9",
      "wordToReplace": "id-unid-9",
      "replacement": "",
      "placeholder": "P. ej: 500",
      "question": "Kilometraje o número de kilómetros recorridos que aparecen en el cuenta kilómetros del vehículo:",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Kilometraje o número de kilómetros recorridos que aparecen en el cuenta kilómetros del vehículo."
      },
      "mandatory": true,
      "isFocused": false
    },
    {
      "type": "iText",
      "identifier": "id-dec-10",
      "wordToReplace": "id-dec-10",
      "replacement": "",
      "placeholder": "P. ej: 2483YBY",
      "question": "Matrícula del vehículo:",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Matrícula del vehículo."
      },
      "mandatory": true,
      "isFocused": false
    },
    {
      "type": "iText",
      "identifier": "id-dec-11",
      "wordToReplace": "id-dec-11",
      "replacement": "",
      "placeholder": "P. ej: Mayo 2001",
      "question": "Mes y año de la primera matriculación del vehículo:",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Escriba el mes y año de la primera matriculación del vehículo."
      },
      "mandatory": true,
      "isFocused": false
    },
    {
      "type": "iText",
      "identifier": "id-dec-12",
      "wordToReplace": "id-dec-12",
      "replacement": "",
      "placeholder": "P. ej: rojo, negro,...",
      "question": "Color del vehículo:",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Escriba color del vehículo."
      },
      "mandatory": true,
      "isFocused": false
    },
    {
      "type": "iRadioC",
      "question": "¿Desea añadir otras características especiales del vehículo?",
      "identifier": "new-idunid1",
      "wordToReplace": "new-idunid1",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Si desea añadir otras características del vehículo, como, por ejemplo, aire acondicionado, marque \"sí\"."
      },
      "defaultRadioId": "new-idunid1_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "Sí",
          "replacementOriginal": "• Otras características del vehículo: new-idunid1_opA_1",
          "replacement": "• Otras características del vehículo: new-idunid1_opA_1",
          "extraReplacements": [],
          "radioId": "new-idunid1_opA",
          "identifier": "new-idunid1_opA",
          "checked": false,
          "subSteps": [
            {
              "question": "Indique otras características del vehículo",
              "placeholder": "P. ej: Aire acondicionado",
              "wordToReplace": "new-idunid1_opA_1",
              "identifier": "new-idunid1_opA_1",
              "type": "iText",
              "replacement": ""
            }
          ]
        },
        {
          "label": "No",
          "replacementOriginal": "",
          "replacement": "",
          "extraReplacements": [],
          "radioId": "new-idunid1_opB",
          "identifier": "new-idunid1_opB",
          "checked": true,
          "subSteps": []
        }
      ],
      "isFocused": false
    },
    {
      "type": "iText",
      "identifier": "id-dec-13",
      "wordToReplace": "id-dec-13",
      "replacement": "",
      "placeholder": "P. ej: sin plomo 95, diésel",
      "question": "Tipo de combustible del vehículo:",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Indique en este espacio el tipo específico de combustible que utiliza el vehículo."
      },
      "mandatory": true,
      "isFocused": false
    },
    {
      "type": "iRadioB",
      "question": "El vehículo, ¿lleva el motor original (el motor de fábrica)?",
      "identifier": "id-dec-14",
      "wordToReplace": "id-dec-14",
      "replacement": "",
      "radios": [
        {
          "label": "Sí",
          "replacementOriginal": "Sí",
          "replacement": "Sí",
          "radioId": "id14_opA",
          "identifier": "id14_opA",
          "extraReplacements": [],
          "checked": true
        },
        {
          "label": "No",
          "replacementOriginal": "No",
          "replacement": "No",
          "radioId": "id14_opB",
          "identifier": "id14_opB",
          "extraReplacements": [],
          "checked": false
        }
      ],
      "isFocused": false
    },
    {
      "type": "iText",
      "identifier": "id-dec-15",
      "wordToReplace": "id-dec-15",
      "replacement": "",
      "placeholder": "",
      "question": "Número de propietarios que ha tenido el vehículo antes que el actual propietario:",
      "indications": {
        "areIndications": true,
        "indicationsType": "insideText",
        "value": "Escriba el número de propietarios que ha tenido el vehículo que se desea vender antes que el actual propietario. Si el propietario que ahora lo vende es el único propietario que ha tenido el vehículo introduzca 0."
      },
      "mandatory": true,
      "isFocused": false
    },
    {
      "type": "iRadioC",
      "subType": "select",
      "question": "Indique el estado de conservación del vehículo",
      "identifier": "id-dec-16",
      "wordToReplace": "id-dec-16",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Si tiene dudas sobre cómo describir el estado del vehículo consulte este <a href=\"https://www.autocasion.com/actualidad/reportajes/como-describir-el-estado-de-un-coche-usado\" target=\"_blank\">enlace</a>"
      },
      "defaultRadioId": "id-dec-16_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "Muy bueno, poco uso.",
          "replacementOriginal": "Muy bueno, poco uso.",
          "replacement": "Muy bueno, poco uso.",
          "extraReplacements": [],
          "radioId": "id-dec-16_opA",
          "identifier": "id-dec-16_opA",
          "checked": false,
          "subSteps": []
        },
        {
          "label": "Bueno, deterioro derivado del uso normal del vehículo y su antigüedad.",
          "replacementOriginal": "Bueno, deterioro derivado del uso normal del vehículo y su antigüedad. id-dec-16_opB_1",
          "replacement": "Bueno, deterioro derivado del uso normal del vehículo y su antigüedad. id-dec-16id-dec-16_opB_1",
          "extraReplacements": [],
          "radioId": "id-dec-16_opB",
          "identifier": "id-dec-6_opB",
          "checked": true,
          "subSteps": [
            {
              "question": "Desperfectos o golpes visibles que tiene el vehículo que se desea vender",
              "placeholder": "Opcional",
              "wordToReplace": "id-dec-16id-dec-16_opB_1",
              "identifier": "id-dec-16_opB_1",
              "type": "iText",
              "replacement": "",
              "isEmpty": {
                "prepend": "Los desperfectos y/o golpes visibles que tiene el Vehículo son los siguientes: ",
                "append": ""
              },
              "isFocused": false
            }
          ]
        },
        {
          "label": "Malo. Requiere arreglos que impedirán un uso inmediato del vehículo.",
          "replacementOriginal": "Malo. Requiere arreglos que impedirán un uso inmediato del vehículo. id-dec-16_opC_1",
          "replacement": "Malo. Requiere arreglos que impedirán un uso inmediato del vehículo. id-dec-16_opC_1",
          "extraReplacements": [],
          "radioId": "id-dec-16_opC",
          "identifier": "id-dec-16_opC",
          "checked": false,
          "subSteps": [
            {
              "question": "Desperfectos o golpes visibles que tiene el vehículo que se desea vender",
              "placeholder": "Opcional",
              "wordToReplace": "id-dec-16_opC_1",
              "identifier": "id-dec-16_opC_1",
              "type": "iText",
              "replacement": "",
              "isEmpty": {
                "prepend": "Los desperfectos y/o golpes visibles que tiene el Vehículo son los siguientes: ",
                "append": ""
              }
            }
          ]
        }
      ],
      "isFocused": false
    },
    {
      "question": "Desperfectos o golpes visibles que tiene el vehículo que se desea vender",
      "placeholder": "Opcional",
      "wordToReplace": "id-dec-16id-dec-16_opB_1",
      "identifier": "id-dec-16_opB_1",
      "type": "iText",
      "replacement": "",
      "isEmpty": {
        "prepend": "Los desperfectos y/o golpes visibles que tiene el Vehículo son los siguientes: ",
        "append": ""
      },
      "isFocused": false
    },
    {
      "type": "iRadioC",
      "question": "El vehículo ha pasado la ITV alguna vez:",
      "identifier": "id-dec-17",
      "wordToReplace": "id-dec-17",
      "defaultRadioId": "id-dec-17_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "Sí",
          "replacementOriginal": "Que el Vehículo objeto del presente Contrato de compraventa está al día en las inspecciones reglamentarias de la ITV, habiéndose realizado la última inspección en id-dec-17_opA_1 el pasado día id-dec-17_opA_2.",
          "replacement": "Que el Vehículo objeto del presente Contrato de compraventa está al día en las inspecciones reglamentarias de la ITV, habiéndose realizado la última inspección en id-dec-17id-dec-17_opA_1 el pasado día id-dec-17id-dec-17_opA_2.",
          "extraReplacements": [],
          "radioId": "id-dec-17_opA",
          "identifier": "id-dec-17_opA",
          "checked": true,
          "subSteps": [
            {
              "question": "Municipio y/o nombre del centro de ITV en el que el vehículo pasó su última inspección:",
              "placeholder": "Ej. Vallecas - OCA ITV, S.A.",
              "wordToReplace": "id-dec-17id-dec-17_opA_1",
              "identifier": "id-dec-17_opA_1",
              "type": "iText",
              "replacement": "",
              "isFocused": false
            },
            {
              "question": "Fecha en la que el vehículo pasó la última ITV:",
              "wordToReplace": "id-dec-17id-dec-17_opA_2",
              "identifier": "id-dec-17_opA_2",
              "type": "iDate",
              "replacement": "",
              "isFocused": false
            }
          ]
        },
        {
          "label": "No",
          "replacementOriginal": "",
          "replacement": "",
          "extraReplacements": [],
          "radioId": "id-dec-17_opB",
          "identifier": "id-dec-17_opB",
          "checked": false,
          "subSteps": []
        }
      ],
      "isFocused": false
    },
    {
      "question": "Municipio y/o nombre del centro de ITV en el que el vehículo pasó su última inspección:",
      "placeholder": "Ej. Vallecas - OCA ITV, S.A.",
      "wordToReplace": "id-dec-17id-dec-17_opA_1",
      "identifier": "id-dec-17_opA_1",
      "type": "iText",
      "replacement": "",
      "isFocused": false
    },
    {
      "question": "Fecha en la que el vehículo pasó la última ITV:",
      "wordToReplace": "id-dec-17id-dec-17_opA_2",
      "identifier": "id-dec-17_opA_2",
      "type": "iDate",
      "replacement": "",
      "isFocused": false
    },
    {
      "question": "Mes y año en el que el vehículo que se desea vender debe pasar la próxima ITV:",
      "placeholder": "P. ej: Octubre 2019",
      "wordToReplace": "id-dec-18",
      "identifier": "id-dec-18",
      "type": "iText",
      "replacement": "",
      "isFocused": false
    },
    {
      "question": "Precio fijado para la venta del vehículo (en euros):",
      "placeholder": "P. ej: 3000",
      "wordToReplace": "id-dec-19",
      "identifier": "id-dec-19",
      "type": "iNumber",
      "replacement": "",
      "extraReplacements": [
        {
          "wordToReplace": "iddec19-precioAletras",
          "replacement": "CERO euros "
        }
      ],
      "rules": [
        {
          "condition": false,
          "rulename": "extraReplacementToCharacter",
          "identifier": "iddec19-precioAletras",
          "wordToReplace": "iddec19-precioAletras",
          "replacement": ""
        }
      ],
      "isFocused": false
    },
    {
      "type": "iRadioC",
      "question": "Se va a pagar una cantidad en concepto de señal o reserva:",
      "identifier": "id-dec-20",
      "wordToReplace": "id-dec-20",
      "indications": {
        "areIndications": true,
        "indicationsType": "outsideText",
        "value": "Se realiza con el fin de reservar el derecho sobre el vehículo que se pretende transmitir, mediante la entrega de una cantidad en concepto de señal."
      },
      "defaultRadioId": "id-dec-20_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "Sí",
          "replacementOriginal": "En el momento de la firma del presente contrato la parte compradora entrega a la vendedora en concepto de adelanto la cantidad de id-dec-20_opA_1 € (iddec20-precioAletras). Cantidad que se descontará del precio total de compraventa establecido.",
          "replacement": "En el momento de la firma del presente contrato la parte compradora entrega a la vendedora en concepto de adelanto la cantidad de id-dec-20_opA_1 € (iddec20-precioAletras). Cantidad que se descontará del precio total de compraventa establecido.",
          "extraReplacements": [],
          "radioId": "id-dec-20_opA",
          "identifier": "id-dec-20_opA",
          "checked": false,
          "subSteps": [
            {
              "question": "Cantidad (en euros) que se desea pagar en concepto de señal o de reserva del vehículo al momento de firmar el contrato:",
              "placeholder": "P. ej: 300",
              "wordToReplace": "id-dec-20_opA_1",
              "identifier": "id-dec-20_opA_1",
              "type": "iNumber",
              "replacement": "",
              "extraReplacements": [],
              "rules": [
                {
                  "condition": false,
                  "rulename": "extraReplacementToCharacter",
                  "identifier": "iddec20-precioAletras",
                  "wordToReplace": "iddec20-precioAletras",
                  "replacement": ""
                }
              ]
            }
          ]
        },
        {
          "label": "No",
          "replacementOriginal": "",
          "replacement": "",
          "extraReplacements": [],
          "radioId": "id-dec-20_opB",
          "identifier": "id-dec-20_opB",
          "checked": true,
          "subSteps": []
        }
      ],
      "isFocused": false
    },
    {
      "type": "iRadioC",
      "subType": "select",
      "question": "Método que se va a utilizar para realizar el pago:",
      "identifier": "id-dec-21",
      "wordToReplace": "id-dec-21",
      "defaultRadioId": "id-dec-21_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "Ingreso o transferencia bancaria",
          "replacementOriginal": "Las partes acuerdan que el pago del precio del vehículo será mediante ingreso en cuenta o transferencia bancaria. Este pago se realizará en la fecha de entrega del Vehículo en la siguiente cuenta bancaria: <br><br>    - Entidad bancaria: id-dec-21_opA_1 <br><br>    - IBAN identificador de la cuenta: id-dec-21_opA_2 <br><br>    - Titular de la cuenta: id-dec-21_opA_3",
          "replacement": "Las partes acuerdan que el pago del precio del vehículo será mediante ingreso en cuenta o transferencia bancaria. Este pago se realizará en la fecha de entrega del Vehículo en la siguiente cuenta bancaria: Entidad bancaria: id-dec-21_opA_1 IBAN identificador de la cuenta: id-dec-21_opA_2 Titular de la cuenta: id-dec-21_opA_3",
          "extraReplacements": [],
          "radioId": "id-dec-21_opA",
          "identifier": "id-dec-21_opA",
          "checked": false,
          "subSteps": [
            {
              "question": "Nombre o denominación completa de la entidad bancaria en la que se encuentra abierta la cuenta en la que el comprador deberá ingresar el precio:",
              "placeholder": "P. ej: BANCO BILBAO VIZCAYA ARGENTARIA, S.A.",
              "wordToReplace": "id-dec-21_opA_1",
              "identifier": "id-dec-21_opA_1",
              "type": "iText",
              "replacement": ""
            },
            {
              "question": "IBAN o número identificador de la cuenta bancaria donde el comprador ingresará el precio:",
              "placeholder": "P. ej: ES7900815992191881555999",
              "wordToReplace": "id-dec-21_opA_2",
              "identifier": "id-dec-21_opA_2",
              "type": "iText",
              "replacement": ""
            },
            {
              "question": "Nombre y apellidos completos del titular de la cuenta bancaria en la que el comprador ingresará el precio del vehículo se desea vender:",
              "placeholder": "P. ej. Martino Montano Holguín",
              "wordToReplace": "id-dec-21_opA_3",
              "identifier": "id-dec-21_opA_3",
              "type": "iText",
              "replacement": ""
            }
          ]
        },
        {
          "label": "En efectivo",
          "replacementOriginal": "Las partes acuerdan que el pago del precio del vehículo será mediante entrega en efectivo. Este pago se realizará en la fecha de entrega del Vehículo.",
          "replacement": "Las partes acuerdan que el pago del precio del vehículo será mediante entrega en efectivo. Este pago se realizará en la fecha de entrega del Vehículo.",
          "extraReplacements": [],
          "radioId": "id-dec-21_opB",
          "identifier": "id-dec-21_opB",
          "checked": true,
          "subSteps": []
        },
        {
          "label": "Cheque",
          "replacementOriginal": "Las partes acuerdan que el pago del precio del vehículo será mediante cheque. Este pago se realizará en la fecha de entrega del Vehículo.",
          "replacement": "Las partes acuerdan que el pago del precio del vehículo será mediante cheque. Este pago se realizará en la fecha de entrega del Vehículo.",
          "extraReplacements": [],
          "radioId": "id-dec-21_opC",
          "identifier": "id-dec-21_opC",
          "checked": false,
          "subSteps": []
        },
        {
          "label": "Otro",
          "replacementOriginal": "El pago del precio por la Parte Compradora se realizará mediante: id-dec-21_opD_1. Este pago se realizará en la fecha de entrega del Vehículo",
          "replacement": "El pago del precio por la Parte Compradora se realizará mediante: id-dec-21_opD_1. Este pago se realizará en la fecha de entrega del Vehículo",
          "extraReplacements": [],
          "radioId": "id-dec-21_opD",
          "identifier": "id-dec-21_opD",
          "checked": false,
          "subSteps": [
            {
              "question": "Especifique el método de pago mediante el cual el comprador pagará al vendedor el precio:",
              "placeholder": "El 40% en cheque y el resto en efectivo",
              "wordToReplace": "id-dec-21_opD_1",
              "identifier": "id-dec-21_opD_1",
              "type": "iText",
              "replacement": ""
            }
          ]
        }
      ],
      "isFocused": false
    },
    {
      "question": "Lugar en el que el vendedor entregará el vehículo al comprador:",
      "placeholder": "P. ej: Paseo de las Yeserías 11",
      "wordToReplace": "id-dec-22",
      "identifier": "id-dec-22",
      "type": "iText",
      "replacement": "",
      "isFocused": false
    },
    {
      "type": "iRadioC",
      "question": "El vendedor debe hacer entrega del vehículo en favor del comprador:",
      "identifier": "id-dec-23",
      "wordToReplace": "id-dec-23",
      "defaultRadioId": "id-dec-23_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "en el momento de firmar este contrato",
          "replacementOriginal": "en el momento de firma de este contrato",
          "replacement": "en el momento de firma de este contrato",
          "extraReplacements": [],
          "radioId": "id-dec-23_opA",
          "identifier": "id-dec-23_opA",
          "checked": true,
          "subSteps": []
        },
        {
          "label": "en una fecha posterior a la fecha de firma de este contrato",
          "replacementOriginal": "dentro del plazo de id-dec-23_opB_1 desde la fecha recogida en el encabezado de este Contrato.",
          "replacement": "dentro del plazo de id-dec-23_opB_1 desde la fecha recogida en el encabezado de este Contrato.",
          "extraReplacements": [],
          "radioId": "id-dec-23_opB",
          "identifier": "id-dec-23_opB",
          "checked": false,
          "subSteps": [
            {
              "question": "Plazo (desde la firma de este contrato) en el que el vendedor debe hacer entrega del vehículo en favor del comprador (en meses, semanas y días):",
              "placeholder": "Ej. 30 días",
              "wordToReplace": "id-dec-23_opB_1",
              "identifier": "id-dec-23_opB_1",
              "type": "iText",
              "replacement": "",
              "extraReplacements": []
            }
          ]
        }
      ],
      "isFocused": false
    },
    {
      "type": "iRadioC",
      "question": "además del permiso de circulación, la ficha técnica, y el recibo del impuesto de circulación del año anterior, el comprador recibió otro documento/accesorio relativo al vehículo que se desea vender?",
      "identifier": "id-dec-24",
      "wordToReplace": "id-dec-24",
      "defaultRadioId": "id-dec-24_opA",
      "replacement": "",
      "extraReplacements": [],
      "radios": [
        {
          "label": "Sí",
          "replacementOriginal": "9. Otros: id-dec-24_opA_1",
          "replacement": "9. Otros: id-dec-24id-dec-24_opA_1",
          "extraReplacements": [],
          "radioId": "id-dec-24_opA",
          "identifier": "id-dec-24_opA",
          "checked": true,
          "subSteps": [
            {
              "question": "Indique qué otros documentos o accesorios recibe el comprador:",
              "wordToReplace": "id-dec-24id-dec-24_opA_1",
              "identifier": "id-dec-24_opA_1",
              "type": "iText",
              "replacement": "",
              "extraReplacements": [],
              "isFocused": false
            }
          ]
        },
        {
          "label": "No",
          "replacementOriginal": "",
          "replacement": "",
          "extraReplacements": [],
          "radioId": "id-dec-24_opB",
          "identifier": "id-dec-24_opB",
          "checked": false,
          "subSteps": []
        }
      ],
      "isFocused": false
    },
    {
      "question": "Indique qué otros documentos o accesorios recibe el comprador:",
      "wordToReplace": "id-dec-24id-dec-24_opA_1",
      "identifier": "id-dec-24_opA_1",
      "type": "iText",
      "replacement": "",
      "extraReplacements": [],
      "isFocused": false
    },
    {
      "type": "end",
      "identifier": "end",
      "wordToReplace": "end",
      "title": "Contrato de alquiler",
      "description": "El contrato de alquiler es el documento que regula la cesión y el uso de\n        inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).",
      "checkoutProcess": {
        "isInited": false,
        "phase": 0
      },
      "isFocused": false
    }
];