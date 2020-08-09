const steps = [
  {
    type: 'start',
    title: 'Estatutos de una asociación',
    description: `Los estatutos de una asociación son el pacto que contiene los derechos y obligaciones de los asociados, y las normas que regulan dicha asociación, así como los fines y actividades que la misma va a desarrollar.`,
    isCurrentStep: true
  },
  {
    "replacement": "",
    "identifier": "id-unid-1",
    "wordToReplace": "id-unid-1",
    "question": "El subarriendo es de:",
    "type": "iRadioC",
    "subType": null,
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Seleccione \"una vivienda\" si el contrato de arrendamiento principal fue concluido para satisfacer la necesidad permanente y habitual de vivienda o \"un local de negocio\" si fue concluido con otros fines, particularmente, para el ejercicio en el inmueble alquilado de una actividad industrial, comercial, artesanal, profesional, recreativa, asistencial, cultural o docente.\n\t\t\t\t\t\t\t\t\t\t\t "
    },
    "extraReplacements": [
      {
        "identifier": "idunid1-extra-0",
        "wordToReplace": "idunid1-extra-0",
        "insideId": "opA"
      },
      {
        "identifier": "idunid1-extra-1",
        "wordToReplace": "idunid1-extra-1",
        "insideId": "opB"
      },
      {
        "identifier": "idunid1-extra-2",
        "wordToReplace": "idunid1-extra-2",
        "insideId": "opC"
      },
      {
        "identifier": "idunid1-extra-4",
        "wordToReplace": "idunid1-extra-4",
        "insideId": "opE"
      },
      {
        "identifier": "idunid1-extra-5",
        "wordToReplace": "idunid1-extra-5",
        "insideId": "opF"
      },
      {
        "identifier": "idunid1-extra-6",
        "wordToReplace": "idunid1-extra-6",
        "insideId": "opG"
      },
      {
        "identifier": "idunid1-extra-7",
        "wordToReplace": "idunid1-extra-7",
        "insideId": "opH"
      },
      {
        "identifier": "idunid1-extra-8",
        "wordToReplace": "idunid1-extra-8",
        "insideId": "opI"
      }
    ],
    "radios": [
      {
        "label": "una vivienda",
        "replacement": "id-unid-1_opA_2",
        "replacementOriginal": "id-unid-1_opA_2",
        "radioId": "id-unid-1_opA",
        "identifier": "id-unid-1_opA",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-1_opA_0",
            "wordToReplace": "id-unid-1_opA_0",
            "question": "El contrato de arrendamiento referido a la vivienda o el local de negocio que ahora se quiere subarrendar fue:",
            "type": "iRadioC",
            "subType": "",
            "indications": {
              "areIndications": true,
              "indicationsType": "outsideText",
              "value": "El momento de conclusión del contrato de alquiler es importante de cara a determinar el régimen jurídico del contrato de subarriendo:\n\n- En el caso de los contratos celebrados o renovados a partir del 1 de enero de 1995, se aplica la Ley de Arrendamientos Urbanos (LAU) de 1994 que solo permite el subarriendo parcial de la vivienda, y no exige consentimiento previo y por escrito del arrendador para proceder al subarriendo de un local de negocio. \n\n- En el caso de los contratos celebrados antes del 1 de enero de 1995 y no renovados a partir de esa fecha, se aplica la LAU de 1964 que permite el subarriendo total y parcial de la vivienda, y exige consentimiento previo y por escrito del arrendador para proceder al subarriendo de un local de negocio.\n\t\t\t\t\t\t\t\t\t\t\t "
            },
            "extraReplacements": [],
            "radios": [
              {
                "label": "celebrado o renovado a partir del 1 de enero de 1995",
                "replacement": "ya que cuenta con el consentimiento expreso y por escrito del arrendador de fecha id-decnew-15, de conformidad con lo previsto en el artículo 8 de la Ley 29/1994, de 24 de noviembre, de Arrendamientos Urbanos (LAU)",
                "replacementOriginal": "ya que cuenta con el consentimiento expreso y por escrito del arrendador de fecha id-decnew-15, de conformidad con lo previsto en el artículo 8 de la Ley 29/1994, de 24 de noviembre, de Arrendamientos Urbanos (LAU)",
                "radioId": "id-unid-1_opA_0_opA",
                "identifier": "id-unid-1_opA_0_opA",
                "subSteps": [
                ],
                "extraReplacements": [],
                "checked": false
              },
              {
                "label": "celebrado antes del 1 de enero de 1995 y no renovado a partir de esa fecha",
                "replacement": "ya que cuenta con el consentimiento expreso y por escrito del arrendador de fecha id-decnew-15, de conformidad con lo previsto en la Ley de Arrendamientos Urbanos de 1994 y en el artículo 10 del texto refundido de la Ley de Arrendamientos Urbanos, aprobado por Decreto 4104/1964, de 24 de diciembre (LAU 1964)",
                "replacementOriginal": "ya que cuenta con el consentimiento expreso y por escrito del arrendador de fecha id-decnew-15, de conformidad con lo previsto en la Ley de Arrendamientos Urbanos de 1994 y en el artículo 10 del texto refundido de la Ley de Arrendamientos Urbanos, aprobado por Decreto 4104/1964, de 24 de diciembre (LAU 1964)",
                "radioId": "id-unid-1_opA_0_opB",
                "identifier": "id-unid-1_opA_0_opB",
                "subSteps": [],
                "extraReplacements": [],
                "checked": true
              }
            ]
          },
          {
            "replacement": "",
            "identifier": "id-unid-1_opA_2",
            "wordToReplace": "id-unid-1_opA_2",
            "question": "El objeto del subarriendo es:",
            "type": "iRadioC",
            "subType": "",
            "indications": {
              "areIndications": true,
              "indicationsType": "outsideText",
              "value": "Indique si se desea subarrendar solo una parte de la vivienda (subarriendo parcial) o toda la vivienda (subarriendo total). Únicamente en los contratos celebrados antes del 1 de enero de 1995 y no renovados a partir de esa fecha (que se rigen, por tanto, por la LAU de 1964), es posible subarrendar la totalidad de la vivienda a una misma persona. El subarriendo parcial supone que arrendatario y subarrendatario conviven en la vivienda.\n\t\t\t\t\t\t\t\t\t\t\t "
            },
            "extraReplacements": [
              {
                "identifier": "idunid1_opA_2-extra-0",
                "wordToReplace": "idunid1_opA_2-extra-0",
                "insideId": "opA"
              },
              {
                "identifier": "idunid1_opA_2-extra-1",
                "wordToReplace": "idunid1_opA_2-extra-1",
                "insideId": "opB"
              },
              {
                "identifier": "idunid1_opA_2-extra-2",
                "wordToReplace": "idunid1_opA_2-extra-2",
                "insideId": "opC"
              }
            ],
            "radios": [
              {
                "label": "solo una parte de la vivienda",
                "replacement": "parcial de vivienda",
                "replacementOriginal": "parcial de vivienda",
                "radioId": "id-unid-1_opA_2_opA",
                "identifier": "id-unid-1_opA_2_opA",
                "subSteps": [],
                "extraReplacements": [
                  {
                    "identifier": "idunid1_opA_2-extra-0",
                    "insideId": "opA",
                    "replacement": "la siguiente parte de la Vivienda: id-decnew-14.",
                    "replacementOriginal": "la siguiente parte de la Vivienda: id-decnew-14."
                  },
                  {
                    "identifier": "idunid1_opA_2-extra-1",
                    "insideId": "opB",
                    "replacement": "parcial de vivienda",
                    "replacementOriginal": "parcial de vivienda"
                  },
                  {
                    "identifier": "idunid1_opA_2-extra-2",
                    "insideId": "opC",
                    "replacement": "la siguiente parte de la Vivienda: id-decnew-14.",
                    "replacementOriginal": "la siguiente parte de la Vivienda: id-decnew-14."
                  }
                ],
                "checked": false
              },
              {
                "label": "toda la vivienda",
                "replacement": "total de vivienda",
                "replacementOriginal": "total de vivienda",
                "radioId": "id-unid-1_opA_2_opB",
                "identifier": "id-unid-1_opA_2_opB",
                "subSteps": [],
                "extraReplacements": [
                  {
                    "identifier": "idunid1_opA_2-extra-0",
                    "insideId": "opA",
                    "replacement": "la Vivienda.",
                    "replacementOriginal": "la Vivienda."
                  },
                  {
                    "identifier": "idunid1_opA_2-extra-1",
                    "insideId": "opB",
                    "replacement": "total de vivienda",
                    "replacementOriginal": "total de vivienda"
                  },
                  {
                    "identifier": "idunid1_opA_2-extra-2",
                    "insideId": "opC",
                    "replacement": "la Vivienda.",
                    "replacementOriginal": "la Vivienda."
                  }
                ],
                "checked": true
              }
            ]
          }
        ],
        "extraReplacements": [
          {
            "identifier": "idunid1-extra-0",
            "insideId": "opA",
            "replacement": "su uso personal y vivienda habitual, idunid1_opA_2-extra-0",
            "replacementOriginal": "su uso personal y vivienda habitual, idunid1_opA_2-extra-0"
          },
          {
            "identifier": "idunid1-extra-1",
            "insideId": "opB",
            "replacement": "id-unid-1_opA_0",
            "replacementOriginal": "id-unid-1_opA_0"
          },
          {
            "identifier": "idunid1-extra-2",
            "insideId": "opC",
            "replacement": "vivienda habitual propia",
            "replacementOriginal": "vivienda habitual propia"
          },
          {
            "identifier": "idunid1-extra-4",
            "insideId": "opE",
            "replacement": "Esta renta no superará, en ningún caso, la renta del arrendamiento principal pactada entre el SUBARRENDADOR y el arrendador.",
            "replacementOriginal": "Esta renta no superará, en ningún caso, la renta del arrendamiento principal pactada entre el SUBARRENDADOR y el arrendador."
          },
          {
            "identifier": "idunid1-extra-5",
            "insideId": "opF",
            "replacement": "dos mensualidades",
            "replacementOriginal": "dos mensualidades"
          },
          {
            "identifier": "idunid1-extra-6",
            "insideId": "opG",
            "replacement": "",
            "replacementOriginal": ""
          },
          {
            "identifier": "idunid1-extra-7",
            "insideId": "opH",
            "replacement": "idunid1_opA_2-extra-1",
            "replacementOriginal": "idunid1_opA_2-extra-1"
          },
          {
            "identifier": "idunid1-extra-8",
            "insideId": "opI",
            "replacement": "idunid1_opA_2-extra-2",
            "replacementOriginal": "idunid1_opA_2-extra-2"
          }
        ],
        "checked": false
      },
      {
        "label": "un local de negocio",
        "replacement": "id-unid-1_opB_2",
        "replacementOriginal": "id-unid-1_opB_2",
        "radioId": "id-unid-1_opB",
        "identifier": "id-unid-1_opB",
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-1_opB_0",
            "wordToReplace": "id-unid-1_opB_0",
            "question": "El contrato de arrendamiento referido a la vivienda o el local de negocio que ahora se quiere subarrendar fue:",
            "type": "iRadioC",
            "subType": "",
            "indications": {
              "areIndications": true,
              "indicationsType": "outsideText",
              "value": "El momento de conclusión del contrato de alquiler es importante de cara a determinar el régimen jurídico del contrato de subarriendo:\n\n- En el caso de los contratos celebrados o renovados a partir del 1 de enero de 1995, se aplica la Ley de Arrendamientos Urbanos (LAU) de 1994 que solo permite el subarriendo parcial de la vivienda, y no exige consentimiento previo y por escrito del arrendador para proceder al subarriendo de un local de negocio. \n\n- En el caso de los contratos celebrados antes del 1 de enero de 1995 y no renovados a partir de esa fecha, se aplica la LAU de 1964 que permite el subarriendo total y parcial de la vivienda, y exige consentimiento previo y por escrito del arrendador para proceder al subarriendo de un local de negocio.\n\t\t\t\t\t\t\t\t\t\t\t "
            },
            "extraReplacements": [],
            "radios": [
              {
                "label": "celebrado o renovado a partir del 1 de enero de 1995",
                "replacement": "y se obliga a notificar al arrendador de forma fehaciente en el plazo de un mes desde su concertación, de conformidad con lo previsto en el artículo 32 de la Ley 29/1994, de 24 de noviembre, de Arrendamientos Urbanos (LAU)",
                "replacementOriginal": "y se obliga a notificar al arrendador de forma fehaciente en el plazo de un mes desde su concertación, de conformidad con lo previsto en el artículo 32 de la Ley 29/1994, de 24 de noviembre, de Arrendamientos Urbanos (LAU)",
                "radioId": "id-unid-1_opB_0_opA",
                "identifier": "id-unid-1_opB_0_opA",
                "subSteps": [
                ],
                "extraReplacements": [],
                "checked": false
              },
              {
                "label": "celebrado antes del 1 de enero de 1995 y no renovado a partir de esa fecha",
                "replacement": "ya que cuenta con el consentimiento expreso y por escrito del arrendador de fecha id-decnew-15, de conformidad con lo previsto en la Ley de Arrendamientos Urbanos de 1994 y en el artículo 22 del texto refundido de la Ley de Arrendamientos Urbanos, aprobado por Decreto 4104/1964, de 24 de diciembre (LAU 1964)",
                "replacementOriginal": "ya que cuenta con el consentimiento expreso y por escrito del arrendador de fecha id-decnew-15, de conformidad con lo previsto en la Ley de Arrendamientos Urbanos de 1994 y en el artículo 22 del texto refundido de la Ley de Arrendamientos Urbanos, aprobado por Decreto 4104/1964, de 24 de diciembre (LAU 1964)",
                "radioId": "id-unid-1_opB_0_opB",
                "identifier": "id-unid-1_opB_0_opB",
                "subSteps": [],
                "extraReplacements": [],
                "checked": true
              }
            ]
          },
          {
            "replacement": "",
            "identifier": "id-unid-1_opB_2",
            "wordToReplace": "id-unid-1_opB_2",
            "question": "El objeto del subarriendo es:",
            "type": "iRadioC",
            "subType": "",
            "indications": {
              "areIndications": false,
              "indicationsType": "outsideText",
              "value": ""
            },
            "extraReplacements": [
              {
                "identifier": "idunid1_opB_2-extra-0",
                "wordToReplace": "idunid1_opB_2-extra-0",
                "insideId": "opA"
              },
              {
                "identifier": "idunid1_opB_2-extra-1",
                "wordToReplace": "idunid1_opB_2-extra-1",
                "insideId": "opB"
              },
              {
                "identifier": "idunid1_opB_2-extra-2",
                "wordToReplace": "idunid1_opB_2-extra-2",
                "insideId": "opC"
              }
            ],
            "radios": [
              {
                "label": "solo una parte del local de negocio",
                "replacement": "parcial de local de negocio",
                "replacementOriginal": "parcial de local de negocio",
                "radioId": "id-unid-1_opB_2_opA",
                "identifier": "id-unid-1_opB_2_opA",
                "subSteps": [],
                "extraReplacements": [
                  {
                    "identifier": "idunid1_opB_2-extra-0",
                    "insideId": "opA",
                    "replacement": "la siguiente parte del local de negocio: id-decnew-14.",
                    "replacementOriginal": "la siguiente parte del local de negocio: id-decnew-14."
                  },
                  {
                    "identifier": "idunid1_opB_2-extra-1",
                    "insideId": "opB",
                    "replacement": "parcial de local de negocio",
                    "replacementOriginal": "parcial de local de negocio"
                  },
                  {
                    "identifier": "idunid1_opB_2-extra-2",
                    "insideId": "opC",
                    "replacement": "la siguiente parte del local de negocio: id-decnew-14.",
                    "replacementOriginal": "la siguiente parte del local de negocio: id-decnew-14."
                  }
                ],
                "checked": false
              },
              {
                "label": "toda el local de negocio",
                "replacement": "total de local de negocio",
                "replacementOriginal": "total de local de negocio",
                "radioId": "id-unid-1_opB_2_opB",
                "identifier": "id-unid-1_opB_2_opB",
                "subSteps": [],
                "extraReplacements": [
                  {
                    "identifier": "idunid1_opB_2-extra-0",
                    "insideId": "opA",
                    "replacement": "el local de negocio.",
                    "replacementOriginal": "local de negocio."
                  },
                  {
                    "identifier": "idunid1_opB_2-extra-1",
                    "insideId": "opB",
                    "replacement": "total de local de negocio",
                    "replacementOriginal": "total de local de negocio"
                  },
                  {
                    "identifier": "idunid1_opB_2-extra-2",
                    "insideId": "opC",
                    "replacement": "el local de negocio.",
                    "replacementOriginal": "el local de negocio."
                  }
                ],
                "checked": true
              }
            ]
          },
          {
            "replacement": "",
            "identifier": "id-unid-1_opB_3",
            "wordToReplace": "id-unid-1_opB_3",
            "question": "Usos o actividades para las que se va a utilizar el local de negocio (o la parte de este) subarrendado:",
            "placeholder": "Ej. Venta al por menor de calzado y otros accesorios como bolsos, cinturones, paraguas, etc.",
            "mandatory": false,
            "isFocused": false,
            "type": "iText",
            "subType": "textarea",
            "indications": {
              "areIndications": false,
              "indicationsType": "outsideText",
              "value": ""
            }
          }
        ],
        "extraReplacements": [
          {
            "identifier": "idunid1-extra-0",
            "insideId": "opA",
            "replacement": "un uso distinto de vivienda y, en concreto para un uso industrial, comercial, artesanal, profesional, recreativo, asistencial, cultural y/o docente, de idunid1_opB_2-extra-0",
            "replacementOriginal": "un uso distinto de vivienda y, en concreto para un uso industrial, comercial, artesanal, profesional, recreativo, asistencial, cultural y/o docente, de idunid1_opB_2-extra-0"
          },
          {
            "identifier": "idunid1-extra-1",
            "insideId": "opB",
            "replacement": "id-unid-1_opB_0",
            "replacementOriginal": "id-unid-1_opB_0"
          },
          {
            "identifier": "idunid1-extra-2",
            "insideId": "opC",
            "replacement": "distinto de vivienda. Particularmente, será destinado por el SUBARRENDATARIO única y exclusivamente a: id-unid-1_opB_3",
            "replacementOriginal": "distinto de vivienda. Particularmente, será destinado por el SUBARRENDATARIO única y exclusivamente a: id-unid-1_opB_3"
          },
          {
            "identifier": "idunid1-extra-4",
            "insideId": "opE",
            "replacement": "La renta del subarrendamiento se verá incrementada en el porcentaje que resulte de la aplicación del Impuesto sobre el Valor Añadido (IVA) o de cualquier otro que lo sustituya. El SUBARRENDATARIO realizará, sobre la renta a pagar, las gestiones necesarias para pagar las retenciones económicas que legalmente correspondan relativas al Impuesto sobre la Renta de las Personas Físicas (IRPF) o al Impuesto de Sociedades (IS), según el caso.",
            "replacementOriginal": "La renta del subarrendamiento se verá incrementada en el porcentaje que resulte de la aplicación del Impuesto sobre el Valor Añadido (IVA) o de cualquier otro que lo sustituya. El SUBARRENDATARIO realizará, sobre la renta a pagar, las gestiones necesarias para pagar las retenciones económicas que legalmente correspondan relativas al Impuesto sobre la Renta de las Personas Físicas (IRPF) o al Impuesto de Sociedades (IS), según el caso."
          },
          {
            "identifier": "idunid1-extra-5",
            "insideId": "opF",
            "replacement": "una mensualidad",
            "replacementOriginal": "una mensualidad"
          },
          {
            "identifier": "idunid1-extra-6",
            "insideId": "opG",
            "replacement": "El SUBARRENDATARIO se hace directa y exclusivamente responsable, eximiendo de toda responsabilidad al SUBARRENDADOR y al arrendador, de todos los daños que puedan ocasionarse a terceras personas o a cosas como consecuencia directa o indirecta del negocio instalado, de sus instalaciones para servicios o suministros, de un mal uso de los mismos o de la actuación de sus empleados.",
            "replacementOriginal": "El SUBARRENDATARIO se hace directa y exclusivamente responsable, eximiendo de toda responsabilidad al SUBARRENDADOR y al arrendador, de todos los daños que puedan ocasionarse a terceras personas o a cosas como consecuencia directa o indirecta del negocio instalado, de sus instalaciones para servicios o suministros, de un mal uso de los mismos o de la actuación de sus empleados."
          },
          {
            "identifier": "idunid1-extra-7",
            "insideId": "opH",
            "replacement": "idunid1_opB_2-extra-1",
            "replacementOriginal": "idunid1_opB_2-extra-1"
          },
          {
            "identifier": "idunid1-extra-8",
            "insideId": "opI",
            "replacement": "idunid1_opB_2-extra-2",
            "replacementOriginal": "idunid1_opB_2-extra-2"
          }
        ],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-decnew-14",
    "wordToReplace": "id-decnew-14",
    "question": "En caso de solo subarrendar una parte concreta del inmueble precise de forma detallada la o las parte(s) del inmueble que se desea subarrendar:",
    "placeholder": "Ej. la primera planta,...",
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
    "identifier": "id-decnew-15",
    "wordToReplace": "id-decnew-15",
    "question": "Fecha exacta en la que se celebró el contrato de arrendamiento referido al inmueble que ahora se quiere subarrendar:",
    "placeholder": "dd/mm/aaaa",
    "mandatory": false,
    "isFocused": false,
    "type": "iDate",
    "subType": "",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": "\n\t\t\t\t\t\t\t\t\t\t\t "
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-2",
    "wordToReplace": "id-unid-2",
    "question": "El inmueble se subarrendará amueblado o con mobiliario:",
    "type": "iRadioB",
    "subType": null,
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": "\n\t\t\t\t\t\t\t\t\t\t\t "
    },
    "extraReplacements": [
      {
        "identifier": "idunid2-extra-0",
        "wordToReplace": "idunid2-extra-0",
        "insideId": "opA"
      },
      {
        "identifier": "idunid2-extra-1",
        "wordToReplace": "idunid2-extra-1",
        "insideId": "opB"
      }
    ],
    "radios": [
      {
        "label": "Sí",
        "replacement": "con mobiliario",
        "replacementOriginal": "con mobiliario",
        "radioId": "id-dec-2_opA",
        "identifier": "id-dec-2_opA",
        "extraReplacements": [
          {
            "identifier": "idunid2-extra-0",
            "insideId": "opA",
            "replacement": "El inmueble cuenta con el mobiliario que se enumera en el Inventario adjunto como Anexo, y el SUBARRENDATARIO está interesado en tomar en subarrendamiento el inmueble con todo este mobiliario.",
            "replacementOriginal": "El inmueble cuenta con el mobiliario que se enumera en el Inventario adjunto como Anexo, y el SUBARRENDATARIO está interesado en tomar en subarrendamiento el inmueble con todo este mobiliario."
          },
          {
            "identifier": "idunid2-extra-1",
            "insideId": "opB",
            "replacement": "En el momento de la puesta a disposición de la parte subarrendada del inmueble al SUBARRENDATARIO para su uso y disfrute, se incorporará al presente Contrato un Anexo de inventario de bienes muebles. Dicho documento será establecido de común acuerdo con el SUBARRENDADOR, e inventariará el mobiliario existente y su estado de uso y conservación.El SUBARRENDADOR y el SUBARRENDATARIO firmarán dicho Anexo mostrando su conformidad a la descripción de los bienes muebles que el mismo contiene. En caso de discrepancia, esta se añadirá al contenido del inventario. A la salida del SUBARRENDATARIO de la parte subarrendada del inmueble, se comprobará el detalle del inventario, debiendo constar la firma de ambas partes en el Anexo de inventario.",
            "replacementOriginal": "En el momento de la puesta a disposición de la parte subarrendada del inmueble al SUBARRENDATARIO para su uso y disfrute, se incorporará al presente Contrato un Anexo de inventario de bienes muebles. Dicho documento será establecido de común acuerdo con el SUBARRENDADOR, e inventariará el mobiliario existente y su estado de uso y conservación.El SUBARRENDADOR y el SUBARRENDATARIO firmarán dicho Anexo mostrando su conformidad a la descripción de los bienes muebles que el mismo contiene. En caso de discrepancia, esta se añadirá al contenido del inventario. A la salida del SUBARRENDATARIO de la parte subarrendada del inmueble, se comprobará el detalle del inventario, debiendo constar la firma de ambas partes en el Anexo de inventario."
          }
        ],
        "checked": false
      },
      {
        "label": "No",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-2_opB",
        "identifier": "id-dec-2_opB",
        "extraReplacements": [
          {
            "identifier": "idunid2-extra-0",
            "insideId": "opA",
            "replacement": "",
            "replacementOriginal": ""
          },
          {
            "identifier": "idunid2-extra-1",
            "insideId": "opB",
            "replacement": "",
            "replacementOriginal": ""
          }
        ],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-3",
    "wordToReplace": "id-unid-3",
    "question": "Lugar (ciudad o población) donde se realiza y firma el contrato:",
    "placeholder": "P. ej. Albacete",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Indique aquí la localidad de celebración y firma del contrato."
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-4",
    "wordToReplace": "id-unid-4",
    "question": "Fecha en la que se firma el contrato:",
    "placeholder": "",
    "mandatory": false,
    "isFocused": false,
    "type": "iDate",
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Fecha en la que se firma el contrato"
    }
  },
  {
    type: 'iForEach',
    value: 1,
    min: 1,
    max: 10,
    replacement: '',
    identifier: 'id-unidnew-3',
    wordToReplace: 'id-unidnew-3',
    question: '¿Cuántas personas firmaron con el propietario el contrato de arrendamiento del inmueble? (Número de subarrendadores):',
    indications: {
      areIndications: false,
      indicationsType: 'outsideText',
      value: '',
    },
    content: [
      {
        identifier: 'id-unidnew-3',
        wordToReplace: 'id-unidnew-3',
        replacementOriginal: 'id-unidnew-3_1',
        replacement: '',
        extraReplacements: [],
        modifiedReplacements: [],
        modifiedExtraReplacements: [],
        subSteps: [
          {
            type: 'iRadioC',
            question: 'La persona subarrendadora ->(index) es:',
            questionOriginal: 'La persona subsubarrendadora ->(index) es:',
            hasIndex: true,
            identifier: 'id-unidnew-3_1',
            wordToReplace: 'id-unidnew-3_1',
            indications: {
              areIndications: true,
              indicationsType: 'outsideText',
              // tslint:disable-next-line:max-line-length
              value: 'Seleccione el tipo de personalidad jurídica. Hablamos de personas físicas para referirnos a un particular, sin embargo hablamos de personas jurídicas para referirnos a una empresa, una asociación, etc...',
            },
            defaultRadioId: 'id-unidnew-3_1_opA',
            replacement: '',
            extraReplacements: [
            ],
            radios: [
              {
                label: 'Persona física',
                radioId: 'id-unidnew-3_1_opA',
                identifier: 'id-unidnew-3_1_opA',
                replacementOriginal: 'id-unidnew-3_1_opA_1',
                replacement: 'id-unidnew-3_1_opA_1',
                extraReplacements: [],
                checked: true,
                subSteps: [
                  {
                    type: 'iRadioC',
                    question: 'La persona subarrendadora para realizar el contrato, actúa:',
                    identifier: 'id-unidnew-3_1_opA_1',
                    wordToReplace: 'id-unidnew-3_1_opA_1',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'La persona puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, esta misma persona firmará el contrato y asumirá las obligaciones. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es la persona a la que representa quien asumirá las obligaciones derivadas de este contrato. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
                    },
                    defaultRadioId: 'id-unidnew-3_1_opA_1_opA',
                    replacement: '',
                    extraReplacements: [
                    ],
                    radios: [
                      {
                        label: 'en su propio nombre y representación',
                        radioId: 'id-unidnew-3_1_opA_1_opA',
                        identifier: 'id-unidnew-3_1_opA_1_opA',
                        // tslint:disable-next-line:max-line-length
                        replacementOriginal: 'id-unidnew-3_1_opA_1_opA_1, mayor de edad, y con domicilio en id-unidnew-3_1_opA_1_opA_2, con id-unidnew-3_1_opA_1_opA_3 número id-unidnew-3_1_opA_1_opA_4, y actuando en su propio nombre y representación.',
                        // tslint:disable-next-line:max-line-length
                        replacement: 'id-unidnew-3_1_opA_1_opA_1, mayor de edad, y con domicilio en id-unidnew-3_1_opA_1_opA_2, con id-unidnew-3_1_opA_1_opA_3 número id-unidnew-3_1_opA_1_opA_4, y actuando en su propio nombre y representación.',
                        extraReplacements: [],
                        checked: true,
                        subSteps: [
                          {
                            question: 'Nombre completo del subarrendador, incluyendo los apellidos:',
                            wordToReplace: 'id-unidnew-3_1_opA_1_opA_1',
                            identifier: 'id-unidnew-3_1_opA_1_opA_1',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej. Martino Montano Holguín',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Indique el nombre completo, incluyendo sus dos apellidos.',
                            },
                          },
                          {
                            question: 'Dirección del lugar donde reside el subarrendador:',
                            wordToReplace: 'id-unidnew-3_1_opA_1_opA_2',
                            identifier: 'id-unidnew-3_1_opA_1_opA_2',
                            placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                            type: 'iText',
                            replacement: '',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
                            },
                          },
                          {
                            type: 'iRadioB',
                            question: 'Tipo de documento de identificación del subarrendador:',
                            identifier: 'id-unidnew-3_1_opA_1_opA_3',
                            wordToReplace: 'id-unidnew-3_1_opA_1_opA_3',
                            indications: {
                              areIndications: true,
                              indicationsType: 'outsideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Seleccione el tipo de documento de identificación del propietario',
                            },
                            replacement: '',
                            extraReplacements: [],
                            defaultRadioId: 'id-unidnew-3_1_opA_1_opA_3_opA',
                            radios: [
                              {
                                label: 'DNI',
                                replacementOriginal: 'DNI',
                                replacement: '',
                                radioId: 'id-unidnew-3_1_opA_1_opA_3_opA',
                                identifier: 'id-unidnew-3_1_opA_1_opA_3_opA',
                                extraReplacements: [],
                                checked: true,
                              },
                              {
                                label: 'NIE',
                                replacementOriginal: 'NIE',
                                replacement: '',
                                radioId: 'id-unidnew-3_1_opA_1_opA_3_opB',
                                identifier: 'id-unidnew-3_1_opA_1_opA_3_opB',
                                extraReplacements: [],
                                checked: false,
                              },
                              {
                                label: 'Pasaporte',
                                replacementOriginal: 'Pasaporte',
                                replacement: '',
                                radioId: 'id-unidnew-3_1_opA_1_opA_3_opC',
                                identifier: 'id-unidnew-3_1_opA_1_opA_3_opC',
                                extraReplacements: [],
                                checked: false,
                              }
                            ]
                          },
                          {
                            question: 'Número del documento seleccionado en la pregunta anterior',
                            wordToReplace: 'id-unidnew-3_1_opA_1_opA_4',
                            identifier: 'id-unidnew-3_1_opA_1_opA_4',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej. 83558071Z',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                            },
                          }
                        ]
                      },
                      {
                        label: 'por medio de un representante (legal o voluntario)',
                        // tslint:disable-next-line:max-line-length
                        replacementOriginal: 'id-unidnew-3_1_opA_1_opB_5, mayor de edad, con domicilio en id-unidnew-3_1_opA_1_opB_9, id-unidnew-3_1_opA_1_opB_6 número: id-unidnew-3_1_opA_1_opB_7, en calidad de id-unidnew-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de id-unidnew-3_1_opA_1_opB_1, con domicilio en id-unidnew-3_1_opA_1_opB_2 y id-unidnew-3_1_opA_1_opB_3 número id-unidnew-3_1_opA_1_opB_4.',
                        // tslint:disable-next-line:max-line-length
                        replacement: 'id-unidnew-3_1_opA_1_opB_5, mayor de edad, con domicilio en id-unidnew-3_1_opA_1_opB_9, id-unidnew-3_1_opA_1_opB_6 número: id-unidnew-3_1_opA_1_opB_7, en calidad de id-unidnew-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de id-unidnew-3_1_opA_1_opB_1, con domicilio en id-unidnew-3_1_opA_1_opB_2 y id-unidnew-3_1_opA_1_opB_3 número id-unidnew-3_1_opA_1_opB_4.',
                        extraReplacements: [],
                        radioId: 'id-unidnew-3_1_opA_1_opB',
                        identifier: 'id-unidnew-3_1_opA_1_opB',
                        checked: false,
                        subSteps: [
                          {
                            question: 'Nombre completo del subarrendador , incluyendo los apellidos:',
                            wordToReplace: 'id-unidnew-3_1_opA_1_opB_1',
                            identifier: 'id-unidnew-3_1_opA_1_opB_1',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej. Martino Montano Holguín',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Indique el nombre completo, incluyendo sus dos apellidos.',
                            },
                          },
                          {
                            question: 'Dirección del lugar donde reside el subarrendador :',
                            wordToReplace: 'id-unidnew-3_1_opA_1_opB_2',
                            identifier: 'id-unidnew-3_1_opA_1_opB_2',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
                            },
                          },
                          {
                            type: 'iRadioB',
                            question: 'Tipo de documento de identificación del subarrendador :',
                            identifier: 'id-unidnew-3_1_opA_1_opB_3',
                            wordToReplace: '3_1_opA_1_opB_3',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Seleccione el tipo de documento de identificación del propietario',
                            },
                            replacement: '',
                            extraReplacements: [],
                            radios: [
                              {
                                label: 'DNI',
                                replacementOriginal: 'DNI',
                                replacement: '',
                                radioId: 'id-unidnew-3_1_opA_1_opB_3_opA',
                                identifier: 'id-unidnew-3_1_opA_1_opB_3_opA',
                                extraReplacements: [],
                                checked: true,
                              },
                              {
                                label: 'NIE',
                                replacementOriginal: 'NIE',
                                replacement: '',
                                radioId: 'id-unidnew-3_1_opA_1_opB_3_opB',
                                identifier: 'id-unidnew-3_1_opA_1_opB_3_opB',
                                extraReplacements: [],
                                checked: false,
                              },
                              {
                                label: 'Pasaporte',
                                replacementOriginal: 'Pasaporte',
                                replacement: '',
                                radioId: 'id-unidnew-3_1_opA_1_opB_3_opC',
                                identifier: 'id-unidnew-3_1_opA_1_opB_3_opC',
                                extraReplacements: [],
                                checked: false,
                              }
                            ]
                          },
                          {
                            question: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                            wordToReplace: 'id-unidnew-3_1_opA_1_opB_4',
                            identifier: 'id-unidnew-3_1_opA_1_opB_4',
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
                            // tslint:disable-next-line:max-line-length
                            question: 'Nombre completo de la persona que firma este contrato en nombre y representación del subarrendador ',
                            wordToReplace: 'id-unidnew-3_1_opA_1_opB_5',
                            identifier: 'id-unidnew-3_1_opA_1_opB_5',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej. Martino Montano Holguín',
                            indications: {
                              areIndications: true,
                              indicationsType: 'outsideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este subarrendador. El contrato puede ser firmado por un representante legal o voluntario. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
                            },
                          },
                          {
                            type: 'iRadioB',
                            // tslint:disable-next-line:max-line-length
                            question: 'Documento de identificación de la persona que firma el contrato en nombre y representación subarrendador :',
                            identifier: 'id-unidnew-3_1_opA_1_opB_6',
                            wordToReplace: 'id-unidnew-3_1_opA_1_opB_6',
                            indications: {
                              areIndications: true,
                              indicationsType: 'outsideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación del propietario.',
                            },
                            replacement: '',
                            extraReplacements: [],
                            radios: [
                              {
                                label: 'DNI',
                                replacementOriginal: 'DNI',
                                replacement: '',
                                radioId: 'id-unidnew-3_1_opA_1_opB_6_opA',
                                identifier: 'id-unidnew-3_1_opA_1_opB_6_opA',
                                extraReplacements: [],
                                checked: true,
                              },
                              {
                                label: 'NIE',
                                replacementOriginal: 'NIE',
                                replacement: '',
                                radioId: 'id-unidnew-3_1_opA_1_opB_6_opB',
                                identifier: 'id-unidnew-3_1_opA_1_opB_6_opB',
                                extraReplacements: [],
                                checked: false,
                              },
                              {
                                label: 'Pasaporte',
                                replacementOriginal: 'Pasaporte',
                                replacement: '',
                                radioId: 'id-unidnew-3_1_opA_1_opB_6_opC',
                                identifier: 'id-unidnew-3_1_opA_1_opB_6_opC',
                                extraReplacements: [],
                                checked: false,
                              }
                            ]
                          },
                          {
                            question: 'Número del documento seleccionado en la pregunta anterior:',
                            wordToReplace: 'id-unidnew-3_1_opA_1_opB_7',
                            identifier: 'id-unidnew-3_1_opA_1_opB_7',
                            placeholder: 'P. ej. 83558071Z',
                            type: 'iText',
                            replacement: '',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                            },
                          },
                          {
                            // tslint:disable-next-line:max-line-length
                            question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del subarrendador ',
                            wordToReplace: 'id-unidnew-3_1_opA_1_opB_8',
                            placeholder: 'P. ej. apoderado, representante legal',
                            identifier: 'id-unidnew-3_1_opA_1_opB_8',
                            type: 'iText',
                            replacement: '',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este propietario.',
                            },
                          },
                          {
                            // tslint:disable-next-line:max-line-length
                            question: 'Dirección del lugar donde reside la persona que firma este contrato en nombre y representación del subarrendador ',
                            wordToReplace: 'id-unidnew-3_1_opA_1_opB_9',
                            placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                            identifier: 'id-unidnew-3_1_opA_1_opB_9',
                            type: 'iText',
                            replacement: '',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
                            },
                          },
                        ]
                      },
                    ],
                  },
                ]
              },
              {
                label: 'Persona jurídica',
                // tslint:disable-next-line:max-line-length
                replacementOriginal: 'id-unidnew-3_1_opB_5 actuando en nombre y representación de: id-unidnew-3_1_opB_1, con domicilio en id-unidnew-3_1_opB_new1,  C.I.F/N.I.F número id-unidnew-3_1_opB_2, e inscrita en: id-unidnew-3_1_opB_3  con la siguiente información: id-unidnew-3_1_opB_4.',
                // tslint:disable-next-line:max-line-length
                replacement: 'id-unidnew-3_1_opB_5 actuando en nombre y representación de: id-unidnew-3_1_opB_1, con domicilio en id-unidnew-3_1_opB_new1,  C.I.F/N.I.F número id-unidnew-3_1_opB_2, e inscrita en: id-unidnew-3_1_opB_3  con la siguiente información: id-unidnew-3_1_opB_4.',
                extraReplacements: [],
                radioId: 'id-unidnew-3_1_opB',
                identifier: 'id-unidnew-3_1_opB',
                checked: false,
                subSteps: [
                  {
                    question: 'Nombre o razón social de esta persona jurídica subarrendadora:',
                    wordToReplace: 'id-unidnew-3_1_opB_1',
                    identifier: 'id-unidnew-3_1_opB_1',
                    type: 'iText',
                    placeholder: 'P. ej. Banco Santander, S.A',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Si no conoce el nombre, mediante el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc), puede soliticar la información.',
                    },
                  },
                  {
                    question: 'Domicilio social completo de la persona jurídica subarrendadora :',
                    wordToReplace: 'id-unidnew-3_1_opB_new1',
                    identifier: 'id-unidnew-3_1_opB_new1',
                    type: 'iText',
                    placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del domicilio social',
                    },
                  },
                  {
                    question: 'NIF (Número de Identificación Fiscal) completo de la persona jurídica:',
                    wordToReplace: 'id-unidnew-3_1_opB_2',
                    identifier: 'id-unidnew-3_1_opB_2',
                    type: 'iText',
                    placeholder: 'P. ej. B29805314',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>NIF empresarial</strong></a>.',
                    },
                  },
                  {
                    question: 'Tipo de registro y lugar donde está inscrita la persona jurídica:',
                    wordToReplace: 'id-unidnew-3_1_opB_3',
                    identifier: 'id-unidnew-3_1_opB_3',
                    type: 'iText',
                    placeholder: 'P. ej. Registro Mercantil de Madrid',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank"><strong>Datos registrales</strong></a>',
                    },
                  },
                  {
                    question: 'Datos registrales de la persona jurídica:',
                    wordToReplace: 'id-unidnew-3_1_opB_4',
                    identifier: 'id-unidnew-3_1_opB_4',
                    type: 'iText',
                    placeholder: 'P. ej. Tomo 123, folio 10, hoja SE-1234',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank"><strong>Datos registrales</strong></a>',
                    },
                  },
                  {
                    type: 'iForEach',
                    value: 1,
                    min: 1,
                    max: 10,
                    replacement: '',
                    identifier: 'id-unidnew-3_1_opB_5',
                    wordToReplace: 'id-unidnew-3_1_opB_5',
                    question: '¿Cuántas personas firmarán el contrato en nombre y representación de la persona jurídica?',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      value: 'Indique aquí el número de personas que firmarán el contrato en nombre y representación de la persona. Al ser una persona jurídica, el contrato lo debe firmar una persona física que haya recibido de esta facultades para poder contratar en nombre de la empresa y que puede ser, al mismo tiempo, su administrador (representante legal) o no (apoderada).',
                    },
                    content: [
                      {
                        identifier: 'id-unidnew-3_1_opB_5',
                        wordToReplace: 'id-unidnew-3_1_opB_5',
                        replacementOriginal: ' id-unidnew-3_1_opB_5_1, mayor de edad, con domicilio en id-unidnew-3_1_opB_5_2, id-unidnew-3_1_opB_5_3 núm. id-unidnew-3_1_opB_5_4, y en calidad de id-unidnew-3_1_opB_5_5; <br> <br>',
                        replacement: '',
                        extraReplacements: [],
                        modifiedReplacements: [],
                        modifiedExtraReplacements: [],
                        subSteps: [
                          {
                            question: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídica:',
                            wordToReplace: 'id-unidnew-3_1_opB_5_1',
                            identifier: 'id-unidnew-3_1_opB_5_1',
                            type: 'iText',
                            placeholder: 'P. ej. Margarita García Pérez',
                            replacement: '',
                            mandatory: false,
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídica',
                            },
                          },
                          {
                            question: 'Domicilio completo del representante de la persona jurídica:',
                            wordToReplace: 'id-unidnew-3_1_opB_5_2',
                            identifier: 'id-unidnew-3_1_opB_5_2',
                            type: 'iText',
                            placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                            replacement: '',
                            mandatory: false,
                            indications: {
                              areIndications: true,
                              indicationsType: 'outsideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Domicilio, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país del representante de la persona jurídica',
                            },
                          },
                          {
                            type: 'iRadioB',
                            // tslint:disable-next-line:max-line-length
                            question: 'Documento de identidad del representante de la persona jurídica:',
                            identifier: 'id-unidnew-3_1_opB_5_3',
                            wordToReplace: 'id-unidnew-3_1_opB_5_3',
                            indications: {
                              areIndications: true,
                              indicationsType: 'outsideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Seleccione el tipo de documento de identidad del representante de la persona jurídica.',
                            },
                            replacement: '',
                            extraReplacements: [],
                            radios: [
                              {
                                label: 'DNI',
                                replacementOriginal: 'DNI',
                                replacement: '',
                                radioId: 'id-unidnew-3_1_opB_5_3_opA',
                                identifier: 'id-unidnew-3_1_opB_5_3_opA',
                                extraReplacements: [],
                                checked: true,
                              },
                              {
                                label: 'NIE',
                                replacementOriginal: 'NIE',
                                replacement: '',
                                radioId: 'id-unidnew-3_1_opB_5_3_opB',
                                identifier: 'id-unidnew-3_1_opB_5_3_opB',
                                extraReplacements: [],
                                checked: false,
                              },
                              {
                                label: 'Pasaporte',
                                replacementOriginal: 'Pasaporte',
                                replacement: '',
                                radioId: 'id-unidnew-3_1_opB_5_3_opC',
                                identifier: 'id-unidnew-3_1_opB_5_3_opC',
                                extraReplacements: [],
                                checked: false,
                              }
                            ]
                          },
                          {
                            question: 'Número del documento de identificación personal seleccionado:',
                            wordToReplace: 'id-unidnew-3_1_opB_5_4',
                            identifier: 'id-unidnew-3_1_opB_5_4',
                            placeholder: 'P. ej: 42888457',
                            type: 'iText',
                            replacement: '',
                            mandatory: false,
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Escriba el número que corresponde con el documento de identificación personal seleccionado en la pregunta anterior',
                            },
                          },
                          {
                            question: 'Función del representante de la persona jurídica:',
                            wordToReplace: 'id-unidnew-3_1_opB_5_5',
                            identifier: 'id-unidnew-3_1_opB_5_5',
                            type: 'iText',
                            placeholder: 'P. ej. administradora única',
                            replacement: '',
                            mandatory: false,
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Indique aquí en qué calidad o función el único representante, persona física, firma el contrato  en nombre y representación de la persona jurídica.',
                            },
                          },
                        ]
                      }
                    ]
                  }
                ]
              },
            ],
          },
        ]
      }
      // {}
    ]
  },
  {
    type: 'iForEach',
    value: 1,
    min: 1,
    max: 10,
    replacement: '',
    identifier: 'id-unidnew-4',
    wordToReplace: 'id-unidnew-4',
    question: '¿A cuántas personas ceden el uso del inmueble quienes firmaron con el propietario el contrato de arrendamiento? (Número de subarrendatarios):',
    indications: {
      areIndications: false,
      indicationsType: 'outsideText',
      value: '',
    },
    content: [
      {
        identifier: 'id-unidnew-4',
        wordToReplace: 'id-unidnew-4',
        replacementOriginal: 'id-unidnew-4_1',
        replacement: '',
        extraReplacements: [],
        modifiedReplacements: [],
        modifiedExtraReplacements: [],
        subSteps: [
          {
            type: 'iRadioC',
            question: 'La persona subarrendataria ->(index)  es:',
            questionOriginal: 'La persona subarrendataria ->(index)  es:',
            hasIndex: true,
            identifier: 'id-unidnew-4_1',
            wordToReplace: 'id-unidnew-4_1',
            indications: {
              areIndications: true,
              indicationsType: 'outsideText',
              // tslint:disable-next-line:max-line-length
              value: 'Seleccione el tipo de personalidad jurídica. Hablamos de personas físicas para referirnos a un particular, sin embargo hablamos de personas jurídicas para referirnos a una empresa, una asociación, etc...',
            },
            defaultRadioId: 'id-unidnew-4_1_opA',
            replacement: '',
            extraReplacements: [
            ],
            radios: [
              {
                label: 'Persona física',
                radioId: 'id-unidnew-4_1_opA',
                identifier: 'id-unidnew-4_1_opA',
                replacementOriginal: 'id-unidnew-4_1_opA_1',
                replacement: 'id-unidnew-4_1_opA_1',
                extraReplacements: [],
                checked: true,
                subSteps: [
                  {
                    type: 'iRadioC',
                    question: 'La persona subarrendataria para realizar el contrato, actúa:',
                    identifier: 'id-unidnew-4_1_opA_1',
                    wordToReplace: 'id-unidnew-4_1_opA_1',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'La persona puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, esta misma persona firmará el contrato y asumirá las obligaciones. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es la persona a la que representa quien asumirá las obligaciones derivadas de este contrato. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
                    },
                    defaultRadioId: 'id-unidnew-4_1_opA_1_opA',
                    replacement: '',
                    extraReplacements: [
                    ],
                    radios: [
                      {
                        label: 'en su propio nombre y representación',
                        radioId: 'id-unidnew-4_1_opA_1_opA',
                        identifier: 'id-unidnew-4_1_opA_1_opA',
                        // tslint:disable-next-line:max-line-length
                        replacementOriginal: 'id-unidnew-4_1_opA_1_opA_1, mayor de edad, y con domicilio en id-unidnew-4_1_opA_1_opA_2, con id-unidnew-4_1_opA_1_opA_3 número id-unidnew-4_1_opA_1_opA_4, y actuando en su propio nombre y representación.',
                        // tslint:disable-next-line:max-line-length
                        replacement: 'id-unidnew-4_1_opA_1_opA_1, mayor de edad, y con domicilio en id-unidnew-4_1_opA_1_opA_2, con id-unidnew-4_1_opA_1_opA_3 número id-unidnew-4_1_opA_1_opA_4, y actuando en su propio nombre y representación.',
                        extraReplacements: [],
                        checked: true,
                        subSteps: [
                          {
                            question: 'Nombre completo del subarrendatario, incluyendo los apellidos:',
                            wordToReplace: 'id-unidnew-4_1_opA_1_opA_1',
                            identifier: 'id-unidnew-4_1_opA_1_opA_1',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej. Martino Montano Holguín',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Indique el nombre completo, incluyendo sus dos apellidos.',
                            },
                          },
                          {
                            question: 'Dirección del lugar donde reside el subarrendatario:',
                            wordToReplace: 'id-unidnew-4_1_opA_1_opA_2',
                            identifier: 'id-unidnew-4_1_opA_1_opA_2',
                            placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                            type: 'iText',
                            replacement: '',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
                            },
                          },
                          {
                            type: 'iRadioB',
                            question: 'Tipo de documento de identificación del subarrendatario:',
                            identifier: 'id-unidnew-4_1_opA_1_opA_3',
                            wordToReplace: 'id-unidnew-4_1_opA_1_opA_3',
                            indications: {
                              areIndications: true,
                              indicationsType: 'outsideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Seleccione el tipo de documento de identificación del inquilino',
                            },
                            replacement: '',
                            extraReplacements: [],
                            radios: [
                              {
                                label: 'DNI',
                                replacementOriginal: 'DNI',
                                replacement: '',
                                radioId: 'id-unidnew-4_1_opA_1_opA_3_opA',
                                identifier: 'id-unidnew-4_1_opA_1_opA_3_opA',
                                extraReplacements: [],
                                checked: true,
                              },
                              {
                                label: 'NIE',
                                replacementOriginal: 'NIE',
                                replacement: '',
                                radioId: 'id-unidnew-4_1_opA_1_opA_3_opB',
                                identifier: 'id-unidnew-4_1_opA_1_opA_3_opB',
                                extraReplacements: [],
                                checked: false,
                              },
                              {
                                label: 'Pasaporte',
                                replacementOriginal: 'Pasaporte',
                                replacement: '',
                                radioId: 'id-unidnew-4_1_opA_1_opA_3_opC',
                                identifier: 'id-unidnew-4_1_opA_1_opA_3_opC',
                                extraReplacements: [],
                                checked: false,
                              }
                            ]
                          },
                          {
                            question: 'Número del documento seleccionado en la pregunta anterior',
                            wordToReplace: 'id-unidnew-4_1_opA_1_opA_4',
                            identifier: 'id-unidnew-4_1_opA_1_opA_4',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej. 83558071Z',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                            },
                          }
                        ]
                      },
                      {
                        label: 'por medio de un representante (legal o voluntario)',
                        // tslint:disable-next-line:max-line-length
                        replacementOriginal: 'id-unidnew-4_1_opA_1_opB_5, mayor de edad, con domicilio en id-unidnew-4_1_opA_1_opB_9, id-unidnew-4_1_opA_1_opB_6 número: id-unidnew-4_1_opA_1_opB_7, en calidad de id-unidnew-4_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de id-unidnew-4_1_opA_1_opB_1, con domicilio en id-unidnew-4_1_opA_1_opB_2 y id-unidnew-4_1_opA_1_opB_3 número id-unidnew-4_1_opA_1_opB_4.',
                        // tslint:disable-next-line:max-line-length
                        replacement: 'id-unidnew-4_1_opA_1_opB_5, mayor de edad, con domicilio en id-unidnew-4_1_opA_1_opB_9, id-unidnew-4_1_opA_1_opB_6 número: id-unidnew-4_1_opA_1_opB_7, en calidad de id-unidnew-4_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de id-unidnew-4_1_opA_1_opB_1, con domicilio en id-unidnew-4_1_opA_1_opB_2 y id-unidnew-4_1_opA_1_opB_3 número id-unidnew-4_1_opA_1_opB_4.',
                        extraReplacements: [],
                        radioId: 'id-unidnew-4_1_opA_1_opB',
                        identifier: 'id-unidnew-4_1_opA_1_opB',
                        checked: false,
                        subSteps: [
                          {
                            question: 'Nombre completo del subarrendatario, incluyendo los apellidos:',
                            wordToReplace: 'id-unidnew-4_1_opA_1_opB_1',
                            identifier: 'id-unidnew-4_1_opA_1_opB_1',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej. Martino Montano Holguín',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Indique el nombre completo, incluyendo sus dos apellidos.',
                            },
                          },
                          {
                            question: 'Dirección del lugar donde reside el subarrendatario:',
                            wordToReplace: 'id-unidnew-4_1_opA_1_opB_2',
                            identifier: 'id-unidnew-4_1_opA_1_opB_2',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
                            },
                          },
                          {
                            type: 'iRadioB',
                            question: 'Tipo de documento de identificación del subarrendatario:',
                            identifier: 'id-unidnew-4_1_opA_1_opB_3',
                            wordToReplace: '3_1_opA_1_opB_3',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Seleccione el tipo de documento de identificación del inquilino',
                            },
                            replacement: '',
                            extraReplacements: [],
                            radios: [
                              {
                                label: 'DNI',
                                replacementOriginal: 'DNI',
                                replacement: '',
                                radioId: 'id-unidnew-4_1_opA_1_opB_3_opA',
                                identifier: 'id-unidnew-4_1_opA_1_opB_3_opA',
                                extraReplacements: [],
                                checked: true,
                              },
                              {
                                label: 'NIE',
                                replacementOriginal: 'NIE',
                                replacement: '',
                                radioId: 'id-unidnew-4_1_opA_1_opB_3_opB',
                                identifier: 'id-unidnew-4_1_opA_1_opB_3_opB',
                                extraReplacements: [],
                                checked: false,
                              },
                              {
                                label: 'Pasaporte',
                                replacementOriginal: 'Pasaporte',
                                replacement: '',
                                radioId: 'id-unidnew-4_1_opA_1_opB_3_opC',
                                identifier: 'id-unidnew-4_1_opA_1_opB_3_opC',
                                extraReplacements: [],
                                checked: false,
                              }
                            ]
                          },
                          {
                            question: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                            wordToReplace: 'id-unidnew-4_1_opA_1_opB_4',
                            identifier: 'id-unidnew-4_1_opA_1_opB_4',
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
                            // tslint:disable-next-line:max-line-length
                            question: 'Nombre completo de la persona que firma este contrato en nombre y representación del subarrendatario',
                            wordToReplace: 'id-unidnew-4_1_opA_1_opB_5',
                            identifier: 'id-unidnew-4_1_opA_1_opB_5',
                            type: 'iText',
                            replacement: '',
                            placeholder: 'P. ej. Martino Montano Holguín',
                            indications: {
                              areIndications: true,
                              indicationsType: 'outsideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este arrendatario. El contrato puede ser firmado por un representante legal o voluntario. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
                            },
                          },
                          {
                            type: 'iRadioB',
                            // tslint:disable-next-line:max-line-length
                            question: 'Documento de identificación de la persona que firma el contrato en nombre y representación del arrendatario:',
                            identifier: 'id-unidnew-4_1_opA_1_opB_6',
                            wordToReplace: 'id-unidnew-4_1_opA_1_opB_6',
                            indications: {
                              areIndications: true,
                              indicationsType: 'outsideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación del inquilino.',
                            },
                            replacement: '',
                            extraReplacements: [],
                            radios: [
                              {
                                label: 'DNI',
                                replacementOriginal: 'DNI',
                                replacement: '',
                                radioId: 'id-unidnew-4_1_opA_1_opB_6_opA',
                                identifier: 'id-unidnew-4_1_opA_1_opB_6_opA',
                                extraReplacements: [],
                                checked: true,
                              },
                              {
                                label: 'NIE',
                                replacementOriginal: 'NIE',
                                replacement: '',
                                radioId: 'id-unidnew-4_1_opA_1_opB_6_opB',
                                identifier: 'id-unidnew-4_1_opA_1_opB_6_opB',
                                extraReplacements: [],
                                checked: false,
                              },
                              {
                                label: 'Pasaporte',
                                replacementOriginal: 'Pasaporte',
                                replacement: '',
                                radioId: 'id-unidnew-4_1_opA_1_opB_6_opC',
                                identifier: 'id-unidnew-4_1_opA_1_opB_6_opC',
                                extraReplacements: [],
                                checked: false,
                              }
                            ]
                          },
                          {
                            question: 'Número del documento seleccionado en la pregunta anterior:',
                            wordToReplace: 'id-unidnew-4_1_opA_1_opB_7',
                            identifier: 'id-unidnew-4_1_opA_1_opB_7',
                            placeholder: 'P. ej. 83558071Z',
                            type: 'iText',
                            replacement: '',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
                            },
                          },
                          {
                            // tslint:disable-next-line:max-line-length
                            question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del subarrendatario',
                            wordToReplace: 'id-unidnew-4_1_opA_1_opB_8',
                            placeholder: 'P. ej. apoderado, representante legal',
                            identifier: 'id-unidnew-4_1_opA_1_opB_8',
                            type: 'iText',
                            replacement: '',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este inquilino.',
                            },
                          },
                          {
                            // tslint:disable-next-line:max-line-length
                            question: 'Dirección del lugar donde reside la persona que firma este contrato en nombre y representación del subarrendatario ',
                            wordToReplace: 'id-unidnew-4_1_opA_1_opB_9',
                            placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                            identifier: 'id-unidnew-4_1_opA_1_opB_9',
                            type: 'iText',
                            replacement: '',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
                            },
                          },
                        ]
                      },
                    ],
                  },
                ]
              },
              {
                label: 'Persona jurídica',
                // tslint:disable-next-line:max-line-length
                replacementOriginal: 'id-unidnew-4_1_opB_5 actuando en nombre y representación de: id-unidnew-4_1_opB_1, con domicilio en id-unidnew-4_1_opB_new1,  C.I.F/N.I.F número id-unidnew-4_1_opB_2, e inscrita en: id-unidnew-4_1_opB_3  con la siguiente información: id-unidnew-4_1_opB_4.',
                // tslint:disable-next-line:max-line-length
                replacement: 'id-unidnew-4_1_opB_5 actuando en nombre y representación de: id-unidnew-4_1_opB_1, con domicilio en id-unidnew-4_1_opB_new1,  C.I.F/N.I.F número id-unidnew-4_1_opB_2, e inscrita en: id-unidnew-4_1_opB_3  con la siguiente información: id-unidnew-4_1_opB_4.',
                extraReplacements: [],
                radioId: 'id-unidnew-4_1_opB',
                identifier: 'id-unidnew-4_1_opB',
                checked: false,
                subSteps: [
                  {
                    question: 'Nombre o razón social de esta persona jurídica subarrendataria:',
                    wordToReplace: 'id-unidnew-4_1_opB_1',
                    identifier: 'id-unidnew-4_1_opB_1',
                    type: 'iText',
                    placeholder: 'P. ej. Banco Santander, S.A',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Si no conoce el nombre, mediante el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc), puede soliticar la información.',
                    },
                  },
                  {
                    question: 'Domicilio social completo de la persona jurídica subarrendataria:',
                    wordToReplace: 'id-unidnew-4_1_opB_new1',
                    identifier: 'id-unidnew-4_1_opB_new1',
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
                    question: 'NIF (Número de Identificación Fiscal) completo de la persona jurídica:',
                    wordToReplace: 'id-unidnew-4_1_opB_2',
                    identifier: 'id-unidnew-4_1_opB_2',
                    type: 'iText',
                    placeholder: 'P. ej. B29805314',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>NIF empresarial</strong></a>.',
                    },
                  },
                  {
                    question: 'Tipo de registro y lugar donde está inscrita la persona jurídica:',
                    wordToReplace: 'id-unidnew-4_1_opB_3',
                    identifier: 'id-unidnew-4_1_opB_3',
                    type: 'iText',
                    placeholder: 'P. ej. Registro Mercantil de Madrid',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank"><strong>Datos registrales</strong></a>',
                    },
                  },
                  {
                    question: 'Datos registrales de la persona jurídica:',
                    wordToReplace: 'id-unidnew-4_1_opB_4',
                    identifier: 'id-unidnew-4_1_opB_4',
                    type: 'iText',
                    placeholder: 'P. ej. Tomo 123, folio 10, hoja SE-1234',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      // tslint:disable-next-line:max-line-length
                      value: 'Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank"><strong>Datos registrales</strong></a>',
                    },
                  },
                  {
                    type: 'iForEach',
                    value: 1,
                    min: 1,
                    max: 10,
                    replacement: '',
                    identifier: 'id-unidnew-4_1_opB_5',
                    wordToReplace: 'id-unidnew-4_1_opB_5',
                    question: '¿Cuántas personas firmarán el contrato en nombre y representación de la persona jurídica?',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      value: 'Indique aquí el número de personas que firmarán el contrato en nombre y representación de la persona. Al ser una persona jurídica, el contrato lo debe firmar una persona física que haya recibido de esta facultades para poder contratar en nombre de la empresa y que puede ser, al mismo tiempo, su administrador (representante legal) o no (apoderada).',
                    },
                    content: [
                      {
                        identifier: 'id-unidnew-4_1_opB_5',
                        wordToReplace: 'id-unidnew-4_1_opB_5',
                        replacementOriginal: ' id-unidnew-4_1_opB_5_1, mayor de edad, con domicilio en id-unidnew-4_1_opB_5_2, id-unidnew-4_1_opB_5_3 núm. id-unidnew-4_1_opB_5_4, y en calidad de id-unidnew-4_1_opB_5_5; <br> <br>',
                        replacement: '',
                        extraReplacements: [],
                        modifiedReplacements: [],
                        modifiedExtraReplacements: [],
                        subSteps: [
                          {
                            question: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídica:',
                            wordToReplace: 'id-unidnew-4_1_opB_5_1',
                            identifier: 'id-unidnew-4_1_opB_5_1',
                            type: 'iText',
                            placeholder: 'P. ej. Margarita García Pérez',
                            replacement: '',
                            mandatory: false,
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídica',
                            },
                          },
                          {
                            question: 'Domicilio completo del representante de la persona jurídica:',
                            wordToReplace: 'id-unidnew-4_1_opB_5_2',
                            identifier: 'id-unidnew-4_1_opB_5_2',
                            type: 'iText',
                            placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
                            replacement: '',
                            mandatory: false,
                            indications: {
                              areIndications: true,
                              indicationsType: 'outsideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Domicilio, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país del representante de la persona jurídica',
                            },
                          },
                          {
                            type: 'iRadioB',
                            // tslint:disable-next-line:max-line-length
                            question: 'Documento de identidad del representante de la persona jurídica:',
                            identifier: 'id-unidnew-4_1_opB_5_3',
                            wordToReplace: 'id-unidnew-4_1_opB_5_3',
                            indications: {
                              areIndications: true,
                              indicationsType: 'outsideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Seleccione el tipo de documento de identidad del representante de la persona jurídica.',
                            },
                            replacement: '',
                            extraReplacements: [],
                            radios: [
                              {
                                label: 'DNI',
                                replacementOriginal: 'DNI',
                                replacement: '',
                                radioId: 'id-unidnew-4_1_opB_5_3_opA',
                                identifier: 'id-unidnew-4_1_opB_5_3_opA',
                                extraReplacements: [],
                                checked: true,
                              },
                              {
                                label: 'NIE',
                                replacementOriginal: 'NIE',
                                replacement: '',
                                radioId: 'id-unidnew-4_1_opB_5_3_opB',
                                identifier: 'id-unidnew-4_1_opB_5_3_opB',
                                extraReplacements: [],
                                checked: false,
                              },
                              {
                                label: 'Pasaporte',
                                replacementOriginal: 'Pasaporte',
                                replacement: '',
                                radioId: 'id-unidnew-4_1_opB_5_3_opC',
                                identifier: 'id-unidnew-4_1_opB_5_3_opC',
                                extraReplacements: [],
                                checked: false,
                              }
                            ]
                          },
                          {
                            question: 'Número del documento de identificación personal seleccionado:',
                            wordToReplace: 'id-unidnew-4_1_opB_5_4',
                            identifier: 'id-unidnew-4_1_opB_5_4',
                            placeholder: 'P. ej: 42888457',
                            type: 'iText',
                            mandatory: false,
                            replacement: '',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Escriba el número que corresponde con el documento de identificación personal seleccionado en la pregunta anterior',
                            },
                          },
                          {
                            question: 'Función del representante de la persona jurídica:',
                            wordToReplace: 'id-unidnew-4_1_opB_5_5',
                            identifier: 'id-unidnew-4_1_opB_5_5',
                            type: 'iText',
                            placeholder: 'P. ej. administradora única',
                            replacement: '',
                            mandatory: false,
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              // tslint:disable-next-line:max-line-length
                              value: 'Indique aquí en qué calidad o función el único representante, persona física, firma el contrato  en nombre y representación de la persona jurídica.',
                            },
                          },
                        ]
                      }
                    ]
                  }
                ]
              },
            ],
          },
        ]
      }
      // {}
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-8",
    "wordToReplace": "id-unid-8",
    "question": "Dirección completa de la vivienda:",
    "placeholder": "P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "subType": "textarea",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país)"
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-10",
    "wordToReplace": "id-dec-10",
    "question": "Nombre completo o denominación social del propietario del inmueble:",
    "placeholder": "P. ej. Martino Montano Holguín, Banco Santander, S.A,",
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
    type: 'iText',
    identifier: 'id-dec-11',
    wordToReplace: 'id-dec-11',
    replacement: '',
    question: 'Referencia catastral del inmueble (opcional):',
    indications: {
      areIndications: true,
      indicationsType: 'outsideText',
      value: 'La referencia catastral es el identificador oficial y obligatorio de los bienes inmuebles. Consiste en un código alfanumérico que es asignado por el Catastro de manera que todo inmueble debe tener una única referencia catastral que permita situarlo inequívocamente en la cartografía catastral. Si no desea indicar la referencia catastral, deje este espacio en blanco.'
    },
    placeholder: 'P. ej: 9872023 VH5797S 0001 WX',
    mandatory: false,
    isFocused: false,
    isEmpty: {
      prepend: 'con referencia catastral: ',
      append: ',',
    }
  },
  {
    question: 'Número de metros cuadrados del inmueble:',
    placeholder: 'P. ej: 150',
    wordToReplace: 'id-dec-12',
    identifier: 'id-dec-12',
    type: 'iNumber',
    replacement: '',
    extraReplacements: [],
    rules: [],
    indications: {
      areIndications: false,
      indicationsType: 'outsideText',
      value: ''
    },
  },
  {
    type: 'iText',
    subType: 'textarea',
    identifier: 'id-dec-13',
    wordToReplace: 'id-dec-13',
    replacement: '',
    question: 'Haga una descripción detallada de las partes, espacios, anexos o dependencias que componen el inmueble:',
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      value: 'Haga una descripción detallada de las partes, espacios, anexos o dependencias que componen el inmueble'
    },
    placeholder: 'P. ej. Una cocina, un salón, dos baños, un garaje, un jardín de 10 m2, un patio interior...',
    mandatory: false,
    isFocused: false
  },
  {
    "replacement": "",
    "identifier": "id-dec-17",
    "wordToReplace": "id-dec-17",
    "question": "Duración de este contrato de subarriendo (en \"años\", \"meses\",...):",
    "placeholder": "P. ej. 2 años, 36 meses",
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
    "identifier": "id-dec-18",
    "wordToReplace": "id-dec-18",
    "question": "Fecha en la que comienza el subarriendo (cuando el inmueble será puestos a disposición del subarrendatario):",
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
    type: 'iRadioC',
    question: '¿Al finalizar el contrato podrá este prorrogarse por períodos de prórroga sucesivos?',
    identifier: 'id-dec-25',
    wordToReplace: 'id-dec-25',
    defaultRadioId: 'id-dec-25_opA',
    indications: {
      areIndications: true,
      indicationsType: 'outsideText',
      // tslint:disable-next-line:max-line-length
      value: 'Una vez finalizado el contrato este puede terminar definitvamente o extenderse, según hayan acordado las partes.'
    },
    replacement: '',
    extraReplacements: [
    ],
    radios: [
      {
        label: 'Sí',
        // tslint:disable-next-line:max-line-length
        replacementOriginal: 'En caso de que llegare el último día del Contrato, si ninguna de las Partes hubiese notificado a la otra como mínimo con id-dec-25_opA_2 de antelación, su voluntad de no renovar el presente Contrato, se entenderá que este entra en períodos sucesivos de prórroga automática. Estos períodos de prórroga serán de: id-dec-25_opA_1,id-dec-25_opA_3. En cualquiera de sus prorrogas, si alguna de las partes quisiera finalizar el contrato, podrá avisar a través de los medios previstos, como mínimo con id-dec-25_opA_2 de antelación a la fecha de terminación de cualquiera de las prórrogas, su voluntad de no renovarlo.',
        // tslint:disable-next-line:max-line-length
        replacement: 'En caso de que llegare el último día del Contrato, si ninguna de las Partes hubiese notificado a la otra como mínimo con id-dec-25_opA_2 de antelación, su voluntad de no renovar el presente Contrato, se entenderá que este entra en períodos sucesivos de prórroga automática. Estos períodos de prórroga serán de: id-dec-25_opA_1,id-dec-25_opA_3. En cualquiera de sus prorrogas, si alguna de las partes quisiera finalizar el contrato, podrá avisar a través de los medios previstos, como mínimo con id-dec-25_opA_2 de antelación a la fecha de terminación de cualquiera de las prórrogas, su voluntad de no renovarlo.',
        extraReplacements: [
        ],
        radioId: 'id-dec-25_opA',
        identifier: 'id-dec-25_opA',
        checked: true,
        subSteps: [
          {
            type: 'iText',
            identifier: 'id-dec-25_opA_1',
            wordToReplace: 'id-dec-25_opA_1',
            replacement: '',
            question: 'Duración de los períodos de prórroga:',
            indications: {
              areIndications: true,
              indicationsType: 'insideText',
              value: 'Indique aquí la duración de los períodos de prórroga que entrarán en vigor automáticamente transcurrido el plazo de duración del alquiler'
            },
            placeholder: 'P. ej. 15 días; 6 meses; 1 año',
            mandatory: false,
            isFocused: false
          },
          {
            type: 'iText',
            identifier: 'id-dec-25_opA_2',
            wordToReplace: 'id-dec-25_opA_2',
            replacement: '',
            question: '¿Con cuánto tiempo de antelación deberán avisarse el subarrendador (propietario) y el subarrendatario (inquilino) si cuando finalice el contrato, alguno de ellos decide que no quiere que el contrato se prorrogue?',
            indications: {
              areIndications: false,
              indicationsType: '',
              value: ''
            },
            placeholder: 'P. ej. 2 días; 1 semana; 30 días',
            mandatory: false,
            isFocused: false
          },
          {
            type: 'iRadioC',
            question: 'Las prórrogas del contrato:',
            identifier: 'id-dec-25_opA_3',
            wordToReplace: 'id-dec-25_opA_3',
            defaultRadioId: 'id-dec-25_opA_3_opA',
            indications: {
              areIndications: false,
              indicationsType: '',
              // tslint:disable-next-line:max-line-length
              value: ''
            },
            replacement: '',
            extraReplacements: [
            ],
            radios: [
              {
                label: 'solo podrán hacerse hasta un máximo de tiempo determinado (ej. máximo 6 meses, 5 años)',
                // tslint:disable-next-line:max-line-length
                replacementOriginal: ' y se prolongarán de forma sucesiva hasta alcanzar: id-dec-25_opA_3_opA_1. Alcanzado este límite, el Contrato terminará de forma automática, es decir, sin necesidad de requerimiento alguno',
                // tslint:disable-next-line:max-line-length
                replacement: 'y se prolongarán de forma sucesiva hasta alcanzar: id-dec-25_opA_3_opA_1. Alcanzado este límite, el Contrato terminará de forma automática, es decir, sin necesidad de requerimiento alguno',
                extraReplacements: [
                ],
                radioId: 'id-dec-25_opA_3_opA',
                identifier: 'id-dec-25_opA_3_opA',
                checked: true,
                subSteps: [
                  {
                    type: 'iText',
                    identifier: 'id-dec-25_opA_3_opA_1',
                    wordToReplace: 'id-dec-25_opA_3_opA_1',
                    replacement: '',
                    question: 'Máximo de tiempo por el que podrán aplicarse las prórrogas del contrato:',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      value: 'Una vez alcanzado este tiempo máximo, el contrato de arrendamiento de habitación finalizará automáticamente.'
                    },
                    placeholder: 'P. ej. 6 meses; 5 año ',
                    mandatory: false,
                    isFocused: false
                  },
                ]
              },
              {
                label: 'podrán hacerse indefinidamente',
                replacementOriginal: '',
                replacement: '',
                extraReplacements: [
                ],
                radioId: 'id-dec-25_opA_3_opB',
                identifier: 'id-dec-25_opA_3_opB',
                checked: false,
                subSteps: [
                ]
              }
            ],
          },
        ]
      },
      {
        label: 'No',
        // tslint:disable-next-line:max-line-length
        replacementOriginal: 'Este contrato no quedará sujeto a otras prórrogas adicionales, pero llegado el momento de vencimiento del contrato, las partes podrán pactar lo que a su derecho convenga.',
        // tslint:disable-next-line:max-line-length
        replacement: 'Este contrato no quedará sujeto a otras prórrogas adicionales, pero llegado el momento de vencimiento del contrato, las partes podrán pactar lo que a su derecho convenga.',
        extraReplacements: [

        ],
        radioId: 'id-dec-25_opB',
        identifier: 'id-dec-25_opB',
        checked: false,
        subSteps: [
        ]
      },
    ],
  },
  {
    "replacement": "",
    "identifier": "id-dec-20",
    "wordToReplace": "id-dec-20",
    "question": "Periodicidad de los pagos de la renta del subarrendamiento:",
    "type": "iRadioB",
    "subType": "select",
    "indications": {
      "areIndications": false,
      "indicationsType": "insideText",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "mensuales",
        "replacement": "mensuales",
        "replacementOriginal": "mensuales",
        "radioId": "id-dec-20_opA",
        "identifier": "id-dec-20_opA",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "semanales",
        "replacement": "semanales",
        "replacementOriginal": "semanales",
        "radioId": "id-dec-20_opB",
        "identifier": "id-dec-20_opB",
        "subSteps": [],
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "diarios",
        "replacement": "diarios",
        "replacementOriginal": "diarios",
        "radioId": "id-dec-20_opC",
        "identifier": "id-dec-20_opC",
        "subSteps": [],
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    type: 'iNumber',
    identifier: 'id-dec-21',
    wordToReplace: 'id-dec-21',
    replacement: '',
    question: 'Importe que se paga por la periodicidad escogida (por día, por mes,...)',
    indications: {
      areIndications: false,
      indicationsType: '',
      value: ''
    },
    placeholder: 'Escriba un número',
    mandatory: false,
    isFocused: false,
    extraReplacements: [
    ],
    rules: [
      {
        condition: false,
        rulename: 'extraReplacementToCharacter',
        identifier: 'iddec21-precioAletras',
        wordToReplace: 'iddec21-precioAletras',
        replacement: ''
      }
    ],
  },
  {
    type: 'iRadioC',
    question: 'Forma de pago del alquiler:',
    identifier: 'id-dec-29',
    wordToReplace: 'id-dec-29',
    defaultRadioId: 'id-dec-29_opA',
    replacement: '',
    extraReplacements: [
    ],
    radios: [
      {
        label: 'Ingreso o transferencia bancaria:',
        // tslint:disable-next-line:max-line-length
        replacementOriginal: 'mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): id-dec-29_opA_2 de la entidad: id-dec-29_opA_1, y cuyo titular es: id-dec-29_opA_3. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la parte SUBARRENDADORA entregará a la SUBARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
        // tslint:disable-next-line:max-line-length
        replacement: 'mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): id-dec-29_opA_2 de la entidad: id-dec-29_opA_1, y cuyo titular es: id-dec-29_opA_3. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la parte SUBARRENDADORA entregará a la SUBARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
        extraReplacements: [],
        radioId: 'id-dec-29_opA',
        identifier: 'id-dec-29_opA',
        checked: true,
        subSteps: [
          {
            question: 'Nombre del banco de la cuenta donde se realiza el pago del alquiler:',
            placeholder: 'Ej. BBVA',
            wordToReplace: 'id-dec-29_opA_1',
            identifier: 'id-dec-29_opA_1',
            type: 'iText',
            replacement: '',
            extraReplacements: [],
            indications: {
              areIndications: false,
              indicationsType: '',
              // tslint:disable-next-line:max-line-length
              value: ''
            },
            rules: [],
          },
          {
            question: 'Número IBAN de dicha cuenta:',
            placeholder: 'P. Ej. ES8020809557151558683884',
            wordToReplace: 'id-dec-29_opA_2',
            identifier: 'id-dec-29_opA_2',
            type: 'iText',
            replacement: '',
            extraReplacements: [],
            indications: {
              areIndications: false,
              indicationsType: '',
              // tslint:disable-next-line:max-line-length
              value: ''
            },
            rules: [],
          },
          {
            question: 'Nombre completo o denominación social del titular de la cuenta:',
            placeholder: 'P. Ej. Antonio Alarcón Marrero',
            wordToReplace: 'id-dec-29_opA_3',
            identifier: 'id-dec-29_opA_3',
            type: 'iText',
            replacement: '',
            extraReplacements: [],
            indications: {
              areIndications: false,
              indicationsType: '',
              // tslint:disable-next-line:max-line-length
              value: ''
            },
            rules: [],
          },
        ]
      },
      {
        label: 'En efectivo',
        // tslint:disable-next-line:max-line-length
        replacementOriginal: 'mediante pago en efectivo. En cualquier caso, la parte SUBARRENDADORA entregará a la SUBARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
        // tslint:disable-next-line:max-line-length
        replacement: 'mediante pago en efectivo. En cualquier caso, la parte SUBARRENDADORA entregará a la SUBARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
        extraReplacements: [],
        radioId: 'id-dec-29_opB',
        identifier: 'id-dec-29_opB',
        checked: true,
        subSteps: [
        ]
      },
      {
        label: 'otro',
        // tslint:disable-next-line:max-line-length
        replacementOriginal: 'mediante: id-dec-29_opC_1. En cualquier caso, la parte SUBARRENDADORA entregará a la SUBARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
        // tslint:disable-next-line:max-line-length
        replacement: 'mediante: id-dec-29_opC_1. En cualquier caso, la parte SUBARRENDADORA entregará a la SUBARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
        extraReplacements: [],
        radioId: 'id-dec-29_opC',
        identifier: 'id-dec-29_opC',
        checked: true,
        subSteps: [
          {
            question: 'Especifique el método de pago del alquiler',
            placeholder: 'P. Ej. en bitcoin, mitad en efectivo',
            wordToReplace: 'id-dec-29_opC_1',
            identifier: 'id-dec-29_opC_1',
            type: 'iText',
            replacement: '',
            extraReplacements: [],
            indications: {
              areIndications: false,
              indicationsType: '',
              // tslint:disable-next-line:max-line-length
              value: ''
            },
            rules: [],
          },
        ]
      },
    ],
  },
  {
    "replacement": "",
    "identifier": "id-dec-23",
    "wordToReplace": "id-dec-23",
    "question": "Los gastos que corresponden individualmente al inmueble subarrendado (teléfono, internet, luz, agua, etc.):",
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
        "label": "Debe pagarlos el subarrendatario además de la renta",
        "replacement": "El SUBARRENDATARIO se compromete también al abono de los servicios y suministros individualizados de luz, agua, gas, teléfono, internet y otros similares medidos por contador individualizado que disfrute o se pudiera disfrutar en el Local.",
        "replacementOriginal": "El SUBARRENDATARIO se compromete también al abono de los servicios y suministros individualizados de luz, agua, gas, teléfono, internet y otros similares medidos por contador individualizado que disfrute o se pudiera disfrutar en el Local.",
        "radioId": "id-dec-23_opA",
        "identifier": "id-dec-23_opA",
        "extraReplacements": [],
        "checked": false
      },
      {
        "label": "Están incluidos en el importe de la renta",
        "replacement": "El abono de los servicios y suministros individualizados de luz, agua, gas, teléfono, internet y otros similares medidos por contador individualizado que se disfrute o se pudiera disfrutar en el Local están incluidos en el importe de la renta. Por tanto, el SUBARRENDATARIO no debe abonarlos por separado, sirviendo como justificante de su pago el mismo medio que certifique o sirva de justificante del pago de la renta.",
        "replacementOriginal": "El abono de los servicios y suministros individualizados de luz, agua, gas, teléfono, internet y otros similares medidos por contador individualizado que se disfrute o se pudiera disfrutar en el Local están incluidos en el importe de la renta. Por tanto, el SUBARRENDATARIO no debe abonarlos por separado, sirviendo como justificante de su pago el mismo medio que certifique o sirva de justificante del pago de la renta.",
        "radioId": "id-dec-23_opB",
        "identifier": "id-dec-23_opB",
        "extraReplacements": [],
        "checked": true
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-24",
    "wordToReplace": "id-dec-24",
    "question": "Importe (en euros) de la fianza que debe pagar el subarrendatario (debe ser una cantidad equivalente a una mensualidad de renta del alquiler en el caso de viviendas, y a dos mensualidades en el de locales de negocio):",
    "placeholder": "Escribe un número",
    "mandatory": false,
    "isFocused": false,
    "type": "iNumber",
    rules: [
      {
        condition: false,
        rulename: 'extraReplacementToCharacter',
        identifier: 'iddec24-precioAletras',
        wordToReplace: 'iddec24-precioAletras',
        replacement: ''
      }
    ],
    "subType": "",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Tenga en cuenta que la Ley de Arrendamientos Urbanos obliga a exigir una fianza en cantidad equivalente a una mensualidad de renta en el arrendamiento de viviendas y de dos en el arrendamiento para uso distinto del de vivienda (locales de negocio)."
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