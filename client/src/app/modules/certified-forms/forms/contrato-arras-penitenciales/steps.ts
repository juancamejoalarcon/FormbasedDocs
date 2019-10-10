export const steps = [
    {
      type: 'start',
      title: 'Contrato de alquiler',
      description: `El contrato de alquiler es el documento que regula la cesión y el uso de
      inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).`
    },
    // {
    //   type: 'iText',
    //   identifier: 'iLocalidad',
    //   wordToReplace: 'iLocalidad',
    //   replacement: '',
    //   question: 'Lugar en el que se firma este contrato:',
    //   indications: 'Indique el lugar en el que se firma este contrato.',
    // },
    // {
    //   type: 'iDate',
    //   identifier: 'iFecha',
    //   wordToReplace: 'iFecha',
    //   replacement: '',
    //   question: 'Fecha en la que se firma este contrato:',
    //   indications: 'Con la ayuda del calendario, indique la fecha en la que se firma este contrato.',
    // },
    {
      type: 'iForEach',
      value: 1,
      replacement: '',
      identifier: 'iParteVendedora',
      wordToReplace: 'iParteVendedora',
      question: 'Número de personas que son propietarias (y que venden) el inmueble:',
      content: [
        {
          identifier: 'iParteVendedora',
          wordToReplace: 'iParteVendedora',
          replacementOriginal: 'iPersona',
          replacement: '',
          extraReplacements: [
            {
              identifier: 'iParteVendedora-1-extra-1',
              replacementOriginal: 'iPersona-extra-1',
              replacement: '',
            }
          ],
          modifiedReplacements: [],
          modifiedExtraReplacements: [],
          subSteps: [
            {
              type: 'iRadioC',
              question: 'La parte vendedora (propietario) nºX del inmueble es una:',
              identifier: 'iPersona',
              wordToReplace: 'iPersona',
              indications: 'Marque la opción Persona ...',
              replacement: '',
              radios: [
                {
                  label: 'Persona física',
                  radioId: 'persona-fisica',
                  identifier: 'persona-fisica',
                  replacementOriginal: 'iNombreFisica con iDcoumentoFisica iDcoumentoNumeroFisica, y con domicilio en: iDomicilioFisica.',
                  replacement: 'iNombreFisica con iDcoumentoFisica iDcoumentoNumeroFisica, y con domicilio en: iDomicilioFisica.',
                  extraReplacements: [
                    {
                      identifier: 'iPersona-extra-1',
                      replacementOriginal: 'iNombreFisica, quien comparece en su propio nombre y derecho, como PARTE VENDEDORA.',
                      replacement: ''
                    }
                  ],
                  checked: true,
                  subSteps: [
                  {
                    question: 'Nombre completo de la parte vendedora (propietario) nº1 del inmueble:',
                    wordToReplace: 'iNombreFisica',
                    identifier: 'iNombreFisica',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    // tslint:disable-next-line:max-line-length
                    question: 'Tipo de documento de identificación personal para identificar a la parte vendedora (propietario) nº1 del inmueble:',
                    wordToReplace: 'iDcoumentoFisica',
                    identifier: 'iDcoumentoFisica',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Número del documento personal de identificación de la parte vendedora (propietario) nº1 del inmueble:',
                    wordToReplace: 'iDcoumentoNumeroFisica',
                    identifier: 'iDcoumentoNumeroFisica',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Dirección completa de la parte vendedora (propietario) nº1 del inmueble: ',
                    wordToReplace: 'iDomicilioFisica',
                    identifier: 'iDomicilioFisica',
                    type: 'iText',
                    replacement: '',
                  }
                ]
                },
                {
                  label: 'Persona jurídica',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'iNombreJuridica, con iDcoumentoJuridica iDcoumentoNumeroJuridica, y que ostenta el cargo de iCargo.',
                  replacement: 'iNombreJuridica, con iDcoumentoJuridica iDcoumentoNumeroJuridica, y que ostenta el cargo de iCargo.',
                  extraReplacements: [
                    {
                      identifier: 'iPersona-extra-1',
                      // tslint:disable-next-line:max-line-length
                      replacementOriginal: 'iNombreJuridica, quien comparece en nombre y representación de iDenominacion con NIF iNIF, y con domicilio en iDomicilioJuridica, y ello en virtud de Escritura pública y/o autorización pertinente, donde se recoge y motiva su facultad de intervención, como PARTE VENDEDORA.',
                      replacement: ''
                    }
                  ],
                  radioId: 'persona-juridica',
                  identifier: 'persona-juridica',
                  checked: false,
                  subSteps: [
                    {
                      // tslint:disable-next-line:max-line-length
                      question: 'Nombre completo de la persona que firma o firmará el contrato en nombre de la parte vendedora (propietario) nº1 (ya que ésta es una persona jurídica):',
                      wordToReplace: 'iNombreJuridica',
                      identifier: 'iNombreJuridica',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      // tslint:disable-next-line:max-line-length
                      question: 'Tipo de documento de identificación personal para identificar a la persona que firma el contrato en nombre de la parte vendedora (propietario) nº1:',
                      wordToReplace: 'iDcoumentoJuridica',
                      identifier: 'iDcoumentoJuridica',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      // tslint:disable-next-line:max-line-length
                      question: 'Número del documento personal de identificación de la persona que representa con su firma a la parte vendedora (propietario) nº1 del inmueble:',
                      wordToReplace: 'iDcoumentoNumeroJuridica',
                      identifier: 'iDcoumentoNumeroJuridica',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      question: 'Cargo o puesto que ostenta la persona que representa con su firma en el contrato a la parte vendedora nº1',
                      wordToReplace: 'iCargo',
                      identifier: 'iCargo',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      question: 'Denominación o razón social de la parte vendedora (propietario) nº1 del inmueble:',
                      wordToReplace: 'iDenominacion',
                      identifier: 'iDenominacion',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      question: 'Número del NIF identificador (antiguo CIF) de la parte vendedora (propietario) nº1 del inmueble:',
                      wordToReplace: 'iNIF',
                      identifier: 'iNIF',
                      type: 'iText',
                      replacement: '',
                    },
                    {
                      question: 'Domicilio social o dirección de la parte vendedora (propietario) nº1 del inmueble:',
                      wordToReplace: 'iDomicilioJuridica',
                      identifier: 'iDomicilioJuridica',
                      type: 'iText',
                      replacement: '',
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
    // {
    //   type: 'iForEach',
    //   value: 1,
    //   replacement: '',
    //   identifier: 'iParteCompradora',
    //   wordToReplace: 'iParteCompradora',
    //   question: 'Número de personas que comprarán o adquirirán el inmueble:',
    //   content: [
    //     {
    //       identifier: 'iParteCompradora1',
    //       replacementOriginal: 'iPersonaCompradora',
    //       replacement: '',
    //       extraReplacements: [
    //         {
    //           identifier: 'iParteCompradora-1-extra-1',
    //           replacementOriginal: 'iPersonaCompradora-extra-1',
    //           replacement: '',
    //         }
    //       ],
    //       modifiedReplacements: [],
    //       modifiedExtraReplacements: [],
    //       subSteps: [
    //         {
    //           type: 'iRadioC',
    //           question: 'La parte compradora (propietario) nºX del inmueble es una:',
    //           identifier: 'iPersonaCompradora',
    //           wordToReplace: 'iPersonaCompradora',
    //           indications: 'Marque la opción Persona ...',
    //           replacement: '',
    //           radios: [
    //             {
    //               label: 'Persona física',
    //               radioId: 'persona-fisica',
    //               identifier: 'persona-fisica',
    //               replacementOriginal: 'iNombreFisica con iDcoumentoFisica iDcoumentoNumeroFisica, y con domicilio en: iDomicilioFisica.',
    //               replacement: '',
    //               extraReplacements: [
    //                 {
    //                   identifier: 'iPersonaCompradora-extra-1',
    //                   replacementOriginal: 'iNombreFisica, quien comparece en su propio nombre y derecho, como PARTE COMPRADORA.',
    //                   replacement: ''
    //                 }
    //               ],
    //               checked: false,
    //               subSteps: [
    //               {
    //                 question: 'Nombre completo de la parte compradora (propietario) nº1 del inmueble:',
    //                 wordToReplace: 'iNombreFisica',
    //                 identifier: 'iNombreFisica',
    //                 type: 'iText',
    //                 replacement: '',
    //               },
    //               {
    //                 // tslint:disable-next-line:max-line-length
    //                 question: 'Tipo de documento de identificación personal para identificar a la parte compradora (propietario) nº1 del inmueble:',
    //                 wordToReplace: 'iDcoumentoFisica',
    //                 identifier: 'iDcoumentoFisica',
    //                 type: 'iText',
    //                 replacement: '',
    //               },
    //               {
    //                 question: 'Número del documento personal de identificación de la parte compradora (propietario) nº1 del inmueble:',
    //                 wordToReplace: 'iDcoumentoNumeroFisica',
    //                 identifier: 'iDcoumentoNumeroFisica',
    //                 type: 'iText',
    //                 replacement: '',
    //               },
    //               {
    //                 question: 'Dirección completa de la parte compradora (propietario) nº1 del inmueble: ',
    //                 wordToReplace: 'iDomicilioFisica',
    //                 identifier: 'iDomicilioFisica',
    //                 type: 'iText',
    //                 replacement: '',
    //               }
    //             ]
    //             },
    //             {
    //               label: 'Persona jurídica',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'iNombreJuridica, con iDcoumentoJuridica iDcoumentoNumeroJuridica, y que ostenta el cargo de iCargo.',
    //               replacement: '',
    //               extraReplacements: [
    //                 {
    //                   identifier: 'iPersonaCompradora-extra-1',
    //                   // tslint:disable-next-line:max-line-length
    //                   replacementOriginal: 'iNombreJuridica, quien comparece en nombre y representación de iDenominacion con NIF iNIF, y con domicilio en iDomicilioJuridica, y ello en virtud de Escritura pública y/o autorización pertinente, donde se recoge y motiva su facultad de intervención, como PARTE COMPRADORA.',
    //                   replacement: ''
    //                 }
    //               ],
    //               radioId: 'persona-juridica',
    //               identifier: 'persona-juridica',
    //               checked: false,
    //               subSteps: [
    //                 {
    //                   // tslint:disable-next-line:max-line-length
    //                   question: 'Nombre completo de la persona que firma o firmará el contrato en nombre de la parte compradora (propietario) nº1 (ya que ésta es una persona jurídica):',
    //                   wordToReplace: 'iNombreJuridica',
    //                   identifier: 'iNombreJuridica',
    //                   type: 'iText',
    //                   replacement: '',
    //                 },
    //                 {
    //                   // tslint:disable-next-line:max-line-length
    //                   question: 'Tipo de documento de identificación personal para identificar a la persona que firma el contrato en nombre de la parte compradora (propietario) nº1:',
    //                   wordToReplace: 'iDcoumentoJuridica',
    //                   identifier: 'iDcoumentoJuridica',
    //                   type: 'iText',
    //                   replacement: '',
    //                 },
    //                 {
    //                   // tslint:disable-next-line:max-line-length
    //                   question: 'Número del documento personal de identificación de la persona que representa con su firma a la parte compradora (propietario) nº1 del inmueble:',
    //                   wordToReplace: 'iDcoumentoNumeroJuridica',
    //                   identifier: 'iDcoumentoNumeroJuridica',
    //                   type: 'iText',
    //                   replacement: '',
    //                 },
    //                 {
    //                   question: 'Cargo o puesto que ostenta la persona que representa con su firma en el contrato a la parte compradora nº1',
    //                   wordToReplace: 'iCargo',
    //                   identifier: 'iCargo',
    //                   type: 'iText',
    //                   replacement: '',
    //                 },
    //                 {
    //                   question: 'Denominación o razón social de la parte compradora (propietario) nº1 del inmueble:',
    //                   wordToReplace: 'iDenominacion',
    //                   identifier: 'iDenominacion',
    //                   type: 'iText',
    //                   replacement: '',
    //                 },
    //                 {
    //                   question: 'Número del NIF identificador (antiguo CIF) de la parte compradora (propietario) nº1 del inmueble:',
    //                   wordToReplace: 'iNIF',
    //                   identifier: 'iNIF',
    //                   type: 'iText',
    //                   replacement: '',
    //                 },
    //                 {
    //                   question: 'Domicilio social o dirección de la parte compradora (propietario) nº1 del inmueble:',
    //                   wordToReplace: 'iDomicilioJuridica',
    //                   identifier: 'iDomicilioJuridica',
    //                   type: 'iText',
    //                   replacement: '',
    //                 }
    //               ]
    //             },
    //           ],
    //         },
    //       ]
    //     }
    //     // {}
    //   ]
    // },
    // {
    //   type: 'iText',
    //   identifier: 'iFincaDescripcion',
    //   wordToReplace: 'iFincaDescripcion',
    //   replacement: '',
    //   question: 'Descripción detallada del inmueble objeto de compraventa:',
    //   indications: 'Indique el lugar en el que se firma este contrato.',
    // },
    // {
    //   type: 'iText',
    //   identifier: 'iFincaDireccion',
    //   wordToReplace: 'iFincaDireccion',
    //   replacement: '',
    //   question: 'Dirección completa del inmueble que se va a vender:',
    //   indications: 'Indique el lugar en el que se firma este contrato.',
    // },
    // {
    //   type: 'iText',
    //   identifier: 'iFincaMetrosCuadrados',
    //   wordToReplace: 'iFincaMetrosCuadrados',
    //   replacement: '',
    //   question: 'Número de metros cuadrados que dispone el inmueble:',
    //   indications: 'Indique el lugar en el que se firma este contrato.',
    // },
    // {
    //   type: 'iRadioC',
    //   question: 'El inmueble que se venderá es una finca edificada (vivienda, local de negocio, etc.)',
    //   identifier: 'iFincaEdificada',
    //   wordToReplace: 'iFincaEdificada',
    //   indications: 'Marque la opción Persona ...',
    //   replacement: '',
    //   radios: [
    //     {
    //       label: 'Sí',
    //       replacementOriginal: 'iParteAccesoria',
    //       replacement: '',
    //       radioId: 'iFincaEdificada-opA',
    //       identifier: 'iFincaEdificada-opA',
    //       extraReplacements: [
    //         {
    //           identifier: 'iFincaEdificada-extra1',
    //           replacementOriginal: 'iComunidadPropietarios',
    //           replacement: ''
    //         }
    //       ],
    //       checked: false,
    //       subSteps: [
    //       {
    //         question: '¿La casa incluye alguna de estas partes accesorias?',
    //         wordToReplace: 'iParteAccesoria',
    //         identifier: 'iParteAccesoria',
    //         type: 'iCheckbox',
    //         // tslint:disable-next-line:max-line-length
    //         replacementOriginal: 'Como parte anexa o accesoria a la misma, también incluye: iGaraje iTrastero. En adelante se denominará conjuntamente la finca y sus accesorios. || La superficie y composición de la Finca, así como demás características y estado de las mismas son perfectamente conocidas y aceptadas por las Partes intervinientes en este Pacto. No obstante, la Finca se venderá como cuerpo cierto. Así, de diferir la superficie real y la aquí descrita, esto no afectará de forma alguna a las condiciones y cláusulas que aquí se fijan y para aquellas que se fijen en el contrato de compraventa, particularmente en lo relativo al precio de adquisición de la Finca. || II. Que la Referencia Catastral de la Finca es: iReferenciaCatastral. Igualmente, se hace constar que la PARTE VENDEDORA ha exhibido el Certificado de Eficiencia Energética de la Finca regulado en el Real Decreto 235/2013, de 5 de abril, por el que se aprueba el procedimiento básico para la certificación de la eficiencia energética de los edificios. Dicho certificado se incorporará al contrato de compraventa de la Finca.',
    //         replacement: '',
    //         checkboxes: [
    //           {
    //             label: 'Marque esta casilla cuando el inmueble que se venderá tiene garaje:',
    //             replacementOriginal: '- Garaje: iGarajeDescripcion',
    //             replacement: '',
    //             identifier: 'iGaraje',
    //             wordToReplace: 'iGaraje',
    //             checked: false,
    //             subSteps: [
    //               {
    //                 question: 'Descripción del garaje',
    //                 wordToReplace: 'iGarajeDescripcion',
    //                 identifier: 'iGarajeDescripcion',
    //                 type: 'iText',
    //                 replacement: '',
    //               },
    //             ]
    //           },
    //           {
    //             // tslint:disable-next-line:max-line-length
    //             label: 'Marque esta casilla cuando el inmueble que se venderá tiene un trastero (p. ej: en el último piso del edificio, etc):',
    //             replacementOriginal: '- Trastero: iTrasteroDescripcion',
    //             replacement: '',
    //             identifier: 'iTrastero',
    //             wordToReplace: 'iTrastero',
    //             checked: false,
    //             subSteps: [
    //               {
    //                 question: 'Descripción del transtero',
    //                 wordToReplace: 'iTrasteroDescripcion',
    //                 identifier: 'iTrasteroDescripcion',
    //                 type: 'iText',
    //                 replacement: '',
    //               },
    //             ]
    //           }
    //         ],
    //         rules: [
    //           {
    //             condition: 'noneIsChecked',
    //             rulename: 'replace',
    //             // tslint:disable-next-line:max-line-length
    //             replacement: 'En adelante, se denominará la Finca. La superficie y composición de la Finca, así como demás características y estado de las mismas son perfectamente conocidas y aceptadas por las Partes intervinientes en este Pacto. No obstante, la Finca se venderá como cuerpo cierto. Así, de diferir la superficie real y la aquí descrita, esto no afectará de forma alguna a las condiciones y cláusulas que aquí se fijan y para aquellas que se fijen en el contrato de compraventa, particularmente en lo relativo al precio de adquisición de la Finca. || II. Que la Referencia Catastral de la Finca es: iReferenciaCatastral.',
    //             isFulfilled: true,
    //           }
    //         ]
    //       },
    //       {
    //         type: 'iRadioB',
    //         question: 'El inmueble que se venderá, ¿forma parte de una Comunidad de Propietarios?:',
    //         identifier: 'iComunidadPropietarios',
    //         wordToReplace: 'iComunidadPropietarios',
    //         indications: 'Marque la opción Persona ...',
    //         replacement: '',
    //         radios: [
    //           {
    //             label: 'Sí',
    //             // tslint:disable-next-line:max-line-length
    //             replacementOriginal: 'Independientemente del estado de cargas que pudiesen gravar la Finca y su situación arrendaticia en este momento, la misma se entregará libre de cargas, gravámenes y al corriente de pago de impuestos, contribuciones y gastos de comunidad y libre de arrendatarios, precaristas y/o ocupantes, pudiendo, en su caso, la PARTE ADQUIRENTE retener las cantidades correspondientes al estado de cargas, para proceder a su cancelación económica y registral, todo ello en el mismo acto de la escritura pública de compraventa. En consecuencia, cualquier pago pendiente anterior a la entrega de la Finca será de cuenta y cargo de la PARTE VENDEDORA. La obligación de pago asumida por la PARTE VENDEDORA se entiende sin perjuicio de que la finca vendida quede legalmente afecta al pago del Impuesto sobre Bienes Inmuebles correspondiente a los ejercicios vencidos y no satisfechos, así como también, en su caso, al pago de las cantidades adeudadas a la comunidad de propietarios para el sostenimiento de los gastos generales por los anteriores titulares hasta el límite de los que resulten imputables a la parte vencida de la anualidad en la cual tenga lugar la adquisición y a los tres años naturales inmediatamente anteriores.',
    //             replacement: '',
    //             radioId: 'iComunidadPropietarios-opA',
    //             identifier: 'iComunidadPropietarios-opA',
    //             extraReplacements: [],
    //             checked: false,
    //           },
    //           {
    //             label: 'No',
    //             // tslint:disable-next-line:max-line-length
    //             replacementOriginal: 'Independientemente del estado de cargas que pudiesen gravar la Finca y su situación arrendaticia en este momento, la misma se entregará libre de cargas, gravámenes y al corriente de pago de impuestos, contribuciones y libre de arrendatarios, precaristas y/o ocupantes, pudiendo, en su caso, la PARTE ADQUIRENTE retener las cantidades correspondientes al estado de cargas, para proceder a su cancelación económica y registral, todo ello en el mismo acto de la escritura pública de compraventa. En consecuencia, cualquier pago pendiente anterior a la entrega de la Finca será de cuenta y cargo de la PARTE VENDEDORA. La obligación de pago asumida por la PARTE VENDEDORA se entiende sin perjuicio de que la finca vendida quede legalmente afecta al pago del Impuesto sobre Bienes Inmuebles correspondiente a los ejercicios vencidos y no satisfechos.',
    //             replacement: '',
    //             radioId: 'iComunidadPropietarios-opB',
    //             identifier: 'iComunidadPropietarios-opB',
    //             extraReplacements: [],
    //             checked: false,
    //           }
    //         ]
    //       }
    //     ]
    //     },
    //     {
    //       label: 'No',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'II. Que la Referencia Catastral de la Finca es: iReferenciaCatastral.',
    //       replacement: '',
    //       radioId: 'iFincaEdificada-opB',
    //       identifier: 'iFincaEdificada-opB',
    //       extraReplacements: [
    //         {
    //           identifier: 'iFincaEdificada-extra1',
    //           // tslint:disable-next-line:max-line-length
    //           replacementOriginal: 'Independientemente del estado de cargas que pudiesen gravar la Finca y su situación arrendaticia en este momento, la misma se entregará libre de cargas, gravámenes y al corriente de pago de impuestos, contribuciones y libre de arrendatarios, precaristas y/o ocupantes, pudiendo, en su caso, la PARTE ADQUIRENTE retener las cantidades correspondientes al estado de cargas, para proceder a su cancelación económica y registral, todo ello en el mismo acto de la escritura pública de compraventa. En consecuencia, cualquier pago pendiente anterior a la entrega de la Finca será de cuenta y cargo de la PARTE VENDEDORA. La obligación de pago asumida por la PARTE VENDEDORA se entiende sin perjuicio de que la finca vendida quede legalmente afecta al pago del Impuesto sobre Bienes Inmuebles correspondiente a los ejercicios vencidos y no satisfechos.',
    //           replacement: ''
    //         }
    //       ],
    //       checked: false,
    //       subSteps: []
    //     },
    //   ],
    // },
    // {
    //   type: 'iText',
    //   identifier: 'iFincaReferenciaCatastral',
    //   wordToReplaces: 'iFincaReferenciaCatastral',
    //   replacement: '',
    //   question: 'Introduzca la Referencia Catastral del inmueble:',
    //   indications: 'Indique el lugar en el que se firma este contrato.',
    // },
    // {
    //   type: 'iText',
    //   identifier: 'iRegistroPropiedad',
    //   wordToReplace: 'iRegistroPropiedad',
    //   replacement: '',
    //   question: 'Registro de la propiedad en el que está inscrito el inmueble',
    //   indications: 'Indique el lugar en el que se firma este contrato.',
    // },
    // {
    //   type: 'iText',
    //   identifier: 'iDatosRegistrales',
    //   wordToReplace: 'iDatosRegistrales',
    //   replacement: '',
    //   question: 'Datos registrales completos del inmueble:',
    //   indications: 'Indique el lugar en el que se firma este contrato.',
    // },
    // {
    //   type: 'iRadioC',
    //   question: 'Situación de cargas (ej: hipoteca, servidumbre, etc) del inmueble:)',
    //   identifier: 'iCargas',
    //   wordToReplace: 'iCargas',
    //   indications: 'Marque la opción Persona ...',
    //   replacement: '',
    //   radios: [
    //     {
    //       label: 'Existen cargas',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'IV. Que respecto a las cargas, la PARTE VENDEDORA hace constar que sobre la Finca existen las siguientes cargas: iDescriptionOfCargas',
    //       replacement: '',
    //       radioId: 'iCargas-opA',
    //       identifier: 'iCargas-opA',
    //       extraReplacements: [],
    //       checked: false,
    //       subSteps: [
    //         {
    //           type: 'iText',
    //           identifier: 'iDescriptionOfCargas',
    //           wordToReplace: 'iDescriptionOfCargas',
    //           replacement: '',
    //           question: 'Explique en este espacio las cargas que pesan sobre el inmueble que se va a vender:',
    //           indications: 'Indique el lugar en el que se firma este contrato.',
    //         },
    //       ]
    //     },
    //     {
    //       label: 'Libre de cargas',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'IV. Que respecto a las cargas, la PARTE VENDEDORA hace constar que la Finca se encuentra libre de toda carga, gravamen y limitación.',
    //       replacement: '',
    //       radioId: 'iCargas-opB',
    //       identifier: 'iCargas-opB',
    //       extraReplacements: [],
    //       checked: false,
    //       subSteps: []
    //     },
    //   ],
    // },
    // {
    //   type: 'iRadioC',
    //   question: 'Ocupación del inmueble (p. ej. hay inquilinos):',
    //   identifier: 'iOcupacionInmueble',
    //   wordToReplace: 'iOcupacionInmueble',
    //   indications: 'Marque la opción Persona ...',
    //   replacement: '',
    //   radios: [
    //     {
    //       label: 'Existen ocupantes',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'Asimismo, en cuanto a la situación arrendaticia, la Finca se encuentra ocupada por: iDescriptionOfOcupantes',
    //       replacement: '',
    //       radioId: 'iOcupacionInmueble-opA',
    //       identifier: 'iOcupacionInmueble-opA',
    //       extraReplacements: [],
    //       checked: false,
    //       subSteps: [
    //         {
    //           type: 'iText',
    //           identifier: 'iDescriptionOfOcupantes',
    //           wordToReplace: 'iDescriptionOfOcupantes',
    //           replacement: '',
    //           question: 'Describa el tipo de ocupantes que se encuentran en el inmueble: ',
    //           indications: 'Indique el lugar en el que se firma este contrato.',
    //         },
    //       ]
    //     },
    //     {
    //       label: 'Libre de ocupantes',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'Asimismo, en cuanto a la situación arrendaticia, la Finca se encuentra libre de arrendatarios, ocupantes y/o precaristas.',
    //       replacement: '',
    //       radioId: 'iOcupacionInmueble-opB',
    //       identifier: 'iOcupacionInmueble-opB',
    //       extraReplacements: [],
    //       checked: false,
    //       subSteps: []
    //     },
    //   ],
    // },
    {
        type: 'end',
        identifier: 'end',
        wordToReplace: 'end',
        title: 'Contrato de alquiler',
        description: `El contrato de alquiler es el documento que regula la cesión y el uso de
        inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).`
    }
];
