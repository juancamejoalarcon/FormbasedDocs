const steps = [
    {
      type: 'start',
      title: 'Contrato de arrendamiento de habitación',
      description: `Por medio de este contrato el propietario de una vivienda (persona o empresa) 
      cede el uso de una de las habitaciones a un particular (persona o empresa) durante un tiempo determinado 
      a cambio del pago de una renta`,
      isCurrentStep: true
    },
    // {
    //   type: 'iText',
    //   identifier: 'id-unid-1',
    //   wordToReplace: 'id-unid-1',
    //   replacement: '',
    //   question: 'Lugar (ciudad o población) donde se realiza y firma el contrato:',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'insideText',
    //     value: 'Indique aquí la localidad de celebración y firma del contrato.'
    //   },
    //   placeholder: 'P. ej. Albacete',
    //   mandatory: true,
    //   isFocused: false
    // },
    // {
    //   type: 'iDate',
    //   identifier: 'id-unid-2',
    //   wordToReplace: 'id-unid-2',
    //   replacement: '',
    //   question: 'Fecha en la que se firma el contrato:',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'insideText',
    //     value: 'Fecha en la que se firma el contrato',
    //   },
    //   mandatory: true,
    //   isFocused: false
    // },
    // {
    //   type: 'iForEach',
    //   value: 1,
    //   min: 1,
    //   max: 10,
    //   replacement: '',
    //   identifier: 'id-unid-3',
    //   wordToReplace: 'id-unid-3',
    //   question: '¿Cuántas personas son propietarias de la vivienda en la que se encuentra la habitación que se va a alquilar? (Número de arrendadores):',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     value: 'El arrendador es aquella persona poseedora de un inmueble o autorizada a poder ponerlo en alquiler que ejerce como casero. Se trata, en definitiva, del propietario de una vivienda.',
    //   },
    //   content: [
    //     {
    //       identifier: 'id-unid-3',
    //       wordToReplace: 'id-unid-3',
    //       replacementOriginal: 'id-unid-3_1',
    //       replacement: '',
    //       extraReplacements: [],
    //       modifiedReplacements: [],
    //       modifiedExtraReplacements: [],
    //       subSteps: [
    //         {
    //           type: 'iRadioC',
    //           question: 'La persona arrendadora (propietaria) es:',
    //           identifier: 'id-unid-3_1',
    //           wordToReplace: 'id-unid-3_1',
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             // tslint:disable-next-line:max-line-length
    //             value: 'Seleccione el tipo de personalidad jurídica. Hablamos de personas físicas para referirnos a un particular, sin embargo hablamos de personas jurídicas para referirnos a una empresa, una asociación, etc...',
    //           },
    //           defaultRadioId: 'id-unid-3_1_opA',
    //           replacement: '',
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'Persona física',
    //               radioId: 'id-unid-3_1_opA',
    //               identifier: 'id-unid-3_1_opA',
    //               replacementOriginal: 'id-unid-3_1_opA_1',
    //               replacement: 'id-unid-3_1_opA_1',
    //               extraReplacements: [],
    //               checked: true,
    //               subSteps: [
    //                 {
    //                     type: 'iRadioC',
    //                     question: 'La persona arrendadora (propietaria) para realizar el contrato, actúa:',
    //                     identifier: 'id-unid-3_1_opA_1',
    //                     wordToReplace: 'id-unid-3_1_opA_1',
    //                     indications: {
    //                       areIndications: true,
    //                       indicationsType: 'outsideText',
    //                       // tslint:disable-next-line:max-line-length
    //                       value: 'La persona puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el la persona a la que representa quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank">Poder de representación</a>',
    //                     },
    //                     defaultRadioId: 'id-unid-3_1_opA_1_opA',
    //                     replacement: '',
    //                     extraReplacements: [
    //                     ],
    //                     radios: [
    //                       {
    //                         label: 'en su propio nombre y representación',
    //                         radioId: 'id-unid-3_1_opA_1_opA',
    //                         identifier: 'id-unid-3_1_opA_1_opA',
    //                         // tslint:disable-next-line:max-line-length
    //                         replacementOriginal: 'id-unid-3_1_opA_1_opA_1, mayor de edad, y con domicilio en id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1_opA_4, y actuando en su propio nombre y representación.',
    //                         // tslint:disable-next-line:max-line-length
    //                         replacement: 'id-unid-3_1_opA_1_opA_1, mayor de edad, y con domicilio en id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1_opA_4, y actuando en su propio nombre y representación.',
    //                         extraReplacements: [],
    //                         checked: true,
    //                         subSteps: [
    //                         {
    //                           question: 'Nombre completo del arrendador (propietario), incluyendo los apellidos:',
    //                           wordToReplace: 'id-unid-3_1_opA_1_opA_1',
    //                           identifier: 'id-unid-3_1_opA_1_opA_1',
    //                           type: 'iText',
    //                           replacement: '',
    //                           placeholder: 'P. ej. Martino Montano Holguín',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'insideText',
    //                             value: 'Indique el nombre completo, incluyendo sus dos apellidos.',
    //                           },
    //                         },
    //                         {
    //                           question: 'Dirección del lugar donde reside el arrendador (propietario):',
    //                           wordToReplace: 'id-unid-3_1_opA_1_opA_2',
    //                           identifier: 'id-unid-3_1_opA_1_opA_2',
    //                           placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    //                           type: 'iText',
    //                           replacement: '',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'insideText',
    //                             // tslint:disable-next-line:max-line-length
    //                             value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
    //                           },
    //                         },
    //                         {
    //                           type: 'iRadioB',
    //                           question: 'Tipo de documento de identificación del arrendador (propietario):',
    //                           identifier: 'id-unid-3_1_opA_1_opA_3',
    //                           wordToReplace: 'id-unid-3_1_opA_1_opA_3',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'outsideText',
    //                             // tslint:disable-next-line:max-line-length
    //                             value: 'Seleccione el tipo de documento de identificación del propietario',
    //                           },
    //                           replacement: '',
    //                           radios: [
    //                             {
    //                               label: 'DNI',
    //                               replacementOriginal: 'DNI',
    //                               replacement: '',
    //                               radioId: 'id-unid-3_1_opA_1_opA_3_opA',
    //                               identifier: 'id-unid-3_1_opA_1_opA_3_opA',
    //                               extraReplacements: [],
    //                               checked: true,
    //                             },
    //                             {
    //                               label: 'NIE',
    //                               replacementOriginal: 'NIE',
    //                               replacement: '',
    //                               radioId: 'id-unid-3_1_opA_1_opA_3_opB',
    //                               identifier: 'id-unid-3_1_opA_1_opA_3_opB',
    //                               extraReplacements: [],
    //                               checked: false,
    //                             },
    //                             {
    //                               label: 'Pasaporte',
    //                               replacementOriginal: 'Pasaporte',
    //                               replacement: '',
    //                               radioId: 'id-unid-3_1_opA_1_opA_3_opC',
    //                               identifier: 'id-unid-3_1_opA_1_opA_3_opC',
    //                               extraReplacements: [],
    //                               checked: false,
    //                             }
    //                           ]
    //                         },
    //                         {
    //                           question: 'Número del documento seleccionado en la pregunta anterior',
    //                           wordToReplace: 'id-unid-3_1_opA_1_opA_4',
    //                           identifier: 'id-unid-3_1_opA_1_opA_4',
    //                           type: 'iText',
    //                           replacement: '',
    //                           placeholder: 'P. ej. 83558071Z',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'insideText',
    //                             value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
    //                           },
    //                         }
    //                       ]
    //                       },
    //                       {
    //                         label: 'por medio de un representante (legal o voluntario)',
    //                         // tslint:disable-next-line:max-line-length
    //                         replacementOriginal: 'id-unid-3_1_opA_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opA_1_opB_9, id-unid-3_1_opA_1_opB_6 número: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, y actuando, en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.',
    //                         // tslint:disable-next-line:max-line-length
    //                         replacement: 'id-unid-3_1_opA_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opA_1_opB_9, id-unid-3_1_opA_1_opB_6 número: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, y actuando, en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.',
    //                         extraReplacements: [],
    //                         radioId: 'id-unid-3_1_opA_1_opB',
    //                         identifier: 'id-unid-3_1_opA_1_opB',
    //                         checked: false,
    //                         subSteps: [
    //                           {
    //                             question: 'Nombre completo del arrendador (propietario), incluyendo los apellidos:',
    //                             wordToReplace: 'id-unid-3_1_opA_1_opB_1',
    //                             identifier: 'id-unid-3_1_opA_1_opB_1',
    //                             type: 'iText',
    //                             replacement: '',
    //                             placeholder: 'P. ej. Martino Montano Holguín',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'insideText',
    //                               value: 'Indique el nombre completo, incluyendo sus dos apellidos.',
    //                             },
    //                           },
    //                           {
    //                             question: 'Dirección del lugar donde reside el arrendador (propietario):',
    //                             wordToReplace: 'id-unid-3_1_opA_1_opB_2',
    //                             identifier: 'id-unid-3_1_opA_1_opB_2',
    //                             type: 'iText',
    //                             replacement: '',
    //                             placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'insideText',
    //                               // tslint:disable-next-line:max-line-length
    //                               value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
    //                             },
    //                           },
    //                           {
    //                             type: 'iRadioB',
    //                             question: 'Tipo de documento de identificación del arrendador (propietario):',
    //                             identifier: 'id-unid-3_1_opA_1_opB_3',
    //                             wordToReplace: '3_1_opA_1_opB_3',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'insideText',
    //                               value: 'Seleccione el tipo de documento de identificación del propietario',
    //                             },
    //                             replacement: '',
    //                             radios: [
    //                               {
    //                                 label: 'DNI',
    //                                 replacementOriginal: 'DNI',
    //                                 replacement: '',
    //                                 radioId: 'id-unid-3_1_opA_1_opB_3_opA',
    //                                 identifier: 'id-unid-3_1_opA_1_opB_3_opA',
    //                                 extraReplacements: [],
    //                                 checked: true,
    //                               },
    //                               {
    //                                 label: 'NIE',
    //                                 replacementOriginal: 'NIE',
    //                                 replacement: '',
    //                                 radioId: 'id-unid-3_1_opA_1_opB_3_opB',
    //                                 identifier: 'id-unid-3_1_opA_1_opB_3_opB',
    //                                 extraReplacements: [],
    //                                 checked: false,
    //                               },
    //                               {
    //                                 label: 'Pasaporte',
    //                                 replacementOriginal: 'Pasaporte',
    //                                 replacement: '',
    //                                 radioId: 'id-unid-3_1_opA_1_opB_3_opC',
    //                                 identifier: 'id-unid-3_1_opA_1_opB_3_opC',
    //                                 extraReplacements: [],
    //                                 checked: false,
    //                               }
    //                             ]
    //                           },
    //                           {
    //                             question: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
    //                             wordToReplace: 'id-unid-3_1_opA_1_opB_4',
    //                             identifier: 'id-unid-3_1_opA_1_opB_4',
    //                             type: 'iText',
    //                             replacement: '',
    //                             placeholder: 'P. ej. 83558071Z',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'insideText',
    //                               value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
    //                             },
    //                           },
    //                           {
    //                             // tslint:disable-next-line:max-line-length
    //                             question: 'Nombre completo de la persona que firma este contrato en nombre y representación del arrendador (propietario)',
    //                             wordToReplace: 'id-unid-3_1_opA_1_opB_5',
    //                             identifier: 'id-unid-3_1_opA_1_opB_5',
    //                             type: 'iText',
    //                             replacement: '',
    //                             placeholder: 'P. ej. Martino Montano Holguín',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'outsideText',
    //                               // tslint:disable-next-line:max-line-length
    //                               value: 'Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este arrendador. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank">Poder de representación</a>',
    //                             },
    //                           },
    //                           {
    //                             type: 'iRadioB',
    //                             // tslint:disable-next-line:max-line-length
    //                             question: 'Documento de identificación de la persona que firma el contrato en nombre y representación arrendador (propietario):',
    //                             identifier: 'id-unid-3_1_opA_1_opB_6',
    //                             wordToReplace: 'id-unid-3_1_opA_1_opB_6',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'outsideText',
    //                               // tslint:disable-next-line:max-line-length
    //                               value: 'Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación del propietario.',
    //                             },
    //                             replacement: '',
    //                             radios: [
    //                               {
    //                                 label: 'DNI',
    //                                 replacementOriginal: 'DNI',
    //                                 replacement: '',
    //                                 radioId: 'id-unid-3_1_opA_1_opB_6_opA',
    //                                 identifier: 'id-unid-3_1_opA_1_opB_6_opA',
    //                                 extraReplacements: [],
    //                                 checked: true,
    //                               },
    //                               {
    //                                 label: 'NIE',
    //                                 replacementOriginal: 'NIE',
    //                                 replacement: '',
    //                                 radioId: 'id-unid-3_1_opA_1_opB_6_opB',
    //                                 identifier: 'id-unid-3_1_opA_1_opB_6_opB',
    //                                 extraReplacements: [],
    //                                 checked: false,
    //                               },
    //                               {
    //                                 label: 'Pasaporte',
    //                                 replacementOriginal: 'Pasaporte',
    //                                 replacement: '',
    //                                 radioId: 'id-unid-3_1_opA_1_opB_6_opC',
    //                                 identifier: 'id-unid-3_1_opA_1_opB_6_opC',
    //                                 extraReplacements: [],
    //                                 checked: false,
    //                               }
    //                             ]
    //                           },
    //                           {
    //                             question: 'Número del documento seleccionado en la pregunta anterior:',
    //                             wordToReplace: 'id-unid-3_1_opA_1_opB_7',
    //                             identifier: 'id-unid-3_1_opA_1_opB_7',
    //                             placeholder: 'P. ej. 83558071Z',
    //                             type: 'iText',
    //                             replacement: '',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'insideText',
    //                               value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
    //                             },
    //                           },
    //                           {
    //                             // tslint:disable-next-line:max-line-length
    //                             question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del arrendador (propietario)',
    //                             wordToReplace: 'id-unid-3_1_opA_1_opB_8',
    //                             placeholder: 'P. ej. apoderado, representante legal',
    //                             identifier: 'id-unid-3_1_opA_1_opB_8',
    //                             type: 'iText',
    //                             replacement: '',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'insideText',
    //                               // tslint:disable-next-line:max-line-length
    //                               value: 'Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este propietario.',
    //                             },
    //                           },
    //                           {
    //                             // tslint:disable-next-line:max-line-length
    //                             question: 'Dirección del lugar donde reside la persona que firma este contrato en nombre y representación del arrendador (propietario)',
    //                             wordToReplace: 'id-unid-3_1_opA_1_opB_9',
    //                             placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    //                             identifier: 'id-unid-3_1_opA_1_opB_9',
    //                             type: 'iText',
    //                             replacement: '',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'insideText',
    //                               // tslint:disable-next-line:max-line-length
    //                               value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
    //                             },
    //                           },
    //                         ]
    //                       },
    //                     ],
    //                 },
    //             ]
    //             },
    //             {
    //               label: 'Persona jurídica',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'id-unid-3_1_opB_5 actuando en nombre y representación de: id-unid-3_1_opB_1, con domicilio en id-unid-3_1_opB_new1  C.I.F/N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3  con la siguiente información: id-unid-3_1_opB_4.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'id-unid-3_1_opB_5 actuando en nombre y representación de: id-unid-3_1_opB_1, con domicilio en id-unid-3_1_opB_new1  C.I.F/N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3  con la siguiente información: id-unid-3_1_opB_4.',
    //               extraReplacements: [],
    //               radioId: 'id-unid-3_1_opB',
    //               identifier: 'id-unid-3_1_opB',
    //               checked: false,
    //               subSteps: [
    //                 {
    //                   question: 'Nombre o razón social de esta persona jurídica arrendadora (propietaria):',
    //                   wordToReplace: 'id-unid-3_1_opB_1',
    //                   identifier: 'id-unid-3_1_opB_1',
    //                   type: 'iText',
    //                   placeholder: 'P. ej. Banco Santander, S.A',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Si no conoce el nombre, mediante el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc), puede soliticar la información.',
    //                   },
    //                 },
    //                 {
    //                   question: 'Domicilio social completo esta persona jurídica arrendadora (propietaria):',
    //                   wordToReplace: 'id-unid-3_1_opB_new1',
    //                   identifier: 'id-unid-3_1_opB_new1',
    //                   type: 'iText',
    //                   placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
    //                   },
    //                 },
    //                 {
    //                   question: 'NIF (Número de Identificación Fiscal) completo de la persona jurídica:',
    //                   wordToReplace: 'id-unid-3_1_opB_2',
    //                   identifier: 'id-unid-3_1_opB_2',
    //                   type: 'iText',
    //                   placeholder: 'P. ej. B29805314',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank">NIF empresarial</a>.',
    //                   },
    //                 },
    //                 {
    //                   question: 'Tipo de registro y lugar donde está inscrita la persona jurídica:',
    //                   wordToReplace: 'id-unid-3_1_opB_3',
    //                   identifier: 'id-unid-3_1_opB_3',
    //                   type: 'iText',
    //                   placeholder: 'P. ej. Registro Mercantil de Madrid',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank">Datos registrales</a>',
    //                   },
    //                 },
    //                 {
    //                   question: 'Datos registrales de la persona jurídica:',
    //                   wordToReplace: 'id-unid-3_1_opB_4',
    //                   identifier: 'id-unid-3_1_opB_4',
    //                   type: 'iText',
    //                   placeholder: 'P. ej. Tomo 123, folio 10, hoja SE-1234',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank">Datos registrales</a>',
    //                   },
    //                 },
    //                 {
    //                   type: 'iForEach',
    //                   value: 1,
    //                   min: 1,
    //                   max: 10,
    //                   replacement: '',
    //                   identifier: 'id-unid-3_1_opB_5',
    //                   wordToReplace: 'id-unid-3_1_opB_5',
    //                   question: '¿Cuántas personas firmarán el contrato en nombre y representación de la persona jurídica?',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     value: 'Indique aquí el número de personas que firmarán el contrato en nombre y representación de la persona. Al ser una persona jurídica, el contrato lo debe firmar una persona física que haya recibido de esta facultades para poder contratar en nombre de la empresa y que puede ser, al mismo tiempo, su administrador (representante legal) o no (apoderada).',
    //                   },
    //                   content: [
    //                     {
    //                       identifier: 'id-unid-3_1_opB_5',
    //                       wordToReplace: 'id-unid-3_1_opB_5',
    //                       replacementOriginal: 'id-unid-3_1_opB_5_1, mayor de edad, con domicilio en id-unid-3_1_opB_5_2, id-unid-3_1_opB_5_3 núm. id-unid-3_1_opB_5_4, y en calidad de id-unid-3_1_opB_5_5<br>',
    //                       replacement: '',
    //                       extraReplacements: [],
    //                       modifiedReplacements: [],
    //                       modifiedExtraReplacements: [],
    //                       subSteps: [
    //                         {
    //                           question: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídica:',
    //                           wordToReplace: 'id-unid-3_1_opB_5_1',
    //                           identifier: 'id-unid-3_1_opB_5_1',
    //                           type: 'iText',
    //                           placeholder: 'P. ej. Margarita García Pérez',
    //                           replacement: '',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'insideText',
    //                             // tslint:disable-next-line:max-line-length
    //                             value: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídica',
    //                           },
    //                         },
    //                         {
    //                           question: 'Domicilio completo del representante de la persona jurídica:',
    //                           wordToReplace: 'id-unid-3_1_opB_5_2',
    //                           identifier: 'id-unid-3_1_opB_5_2',
    //                           type: 'iText',
    //                           placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    //                           replacement: '',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'outsideText',
    //                             // tslint:disable-next-line:max-line-length
    //                             value: 'Domicilio, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país del representante de la persona jurídica',
    //                           },
    //                         },
    //                         {
    //                           type: 'iRadioB',
    //                           // tslint:disable-next-line:max-line-length
    //                           question: 'Documento de identidad del representante de la persona jurídica:',
    //                           identifier: 'id-unid-3_1_opB_5_3',
    //                           wordToReplace: 'id-unid-3_1_opB_5_3',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'outsideText',
    //                             // tslint:disable-next-line:max-line-length
    //                             value: 'Seleccione el tipo de documento de identidad del representante de la persona jurídica.',
    //                           },
    //                           replacement: '',
    //                           radios: [
    //                             {
    //                               label: 'DNI',
    //                               replacementOriginal: 'DNI',
    //                               replacement: '',
    //                               radioId: 'id-unid-3_1_opB_5_3_opA',
    //                               identifier: 'id-unid-3_1_opB_5_3_opA',
    //                               extraReplacements: [],
    //                               checked: true,
    //                             },
    //                             {
    //                               label: 'NIE',
    //                               replacementOriginal: 'NIE',
    //                               replacement: '',
    //                               radioId: 'id-unid-3_1_opB_5_3_opB',
    //                               identifier: 'id-unid-3_1_opB_5_3_opB',
    //                               extraReplacements: [],
    //                               checked: false,
    //                             },
    //                             {
    //                               label: 'Pasaporte',
    //                               replacementOriginal: 'Pasaporte',
    //                               replacement: '',
    //                               radioId: 'id-unid-3_1_opB_5_3_opC',
    //                               identifier: 'id-unid-3_1_opB_5_3_opC',
    //                               extraReplacements: [],
    //                               checked: false,
    //                             }
    //                           ]
    //                         },
    //                         {
    //                           question: 'Número del documento de identificación personal seleccionado:',
    //                           wordToReplace: 'id-unid-3_1_opB_5_4',
    //                           identifier: 'id-unid-3_1_opB_5_4',
    //                           placeholder: 'P. ej: 42888457',
    //                           type: 'iText',
    //                           replacement: '',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'insideText',
    //                             value: 'Escriba el número que corresponde con el documento de identificación personal seleccionado en la pregunta anterior',
    //                           },
    //                         },
    //                         {
    //                           question: 'Función del representante de la persona jurídica:',
    //                           wordToReplace: 'id-unid-3_1_opB_5_5',
    //                           identifier: 'id-unid-3_1_opB_5_5',
    //                           type: 'iText',
    //                           placeholder: 'P. ej. administradora única',
    //                           replacement: '',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'insideText',
    //                             // tslint:disable-next-line:max-line-length
    //                             value: 'Indique aquí en qué calidad o función el único representante, persona física, firma el contrato  en nombre y representación de la persona jurídica.',
    //                           },
    //                         },
    //                       ]
    //                     }
    //                   ]
    //                 }
    //               ]
    //             },
    //           ],
    //         },
    //         {
    //           question: 'Dirección o direcciones de correo electrónico del/los propietarios',
    //           wordToReplace: 'id-unid-3_2',
    //           identifier: 'id-unid-3_1_opB_5_4',
    //           placeholder: 'P. ej: ejemplo@email.com',
    //           type: 'iText',
    //           replacement: '',
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'insideText',
    //             value: 'Si lo desea, señale en este espacio la dirección o direcciones de correo electrónico de los propietarios. Esto puede facilitar y hacer más fluidas las comunicaciones entre las partes.  Si no desea indicar la dirección o direcciones de correo electrónico, deje este espacio en blanco.',
    //           },
    //           isEmpty: {
    //             prepend: 'La PARTE ARRENDADORA:<br>',
    //             append: '',
    //           }
    //         },
    //       ]
    //     }
    //     // {}
    //   ]
    // },
    // {
    //   type: 'iForEach',
    //   value: 1,
    //   min: 1,
    //   max: 10,
    //   replacement: '',
    //   identifier: 'id-unid-4',
    //   wordToReplace: 'id-unid-4',
    //   question: '¿Cuántas personas van a ocupar la habitación alquilada? (arrendatarios):',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     value: 'El arrendatario es la persona natural o jurídica que tiene el derecho a disfrutar temporalmente de un bien a cambio de un pago. Cuando el bien de arrendamiento es una casa el arrendatario es el inquilino, quien paga un alquiler para disfrutar del bien.',
    //   },
    //   content: [
    //     {
    //       identifier: 'id-unid-4',
    //       wordToReplace: 'id-unid-4',
    //       replacementOriginal: 'id-unid-4_1',
    //       replacement: '',
    //       extraReplacements: [],
    //       modifiedReplacements: [],
    //       modifiedExtraReplacements: [],
    //       subSteps: [
    //         {
    //           type: 'iRadioC',
    //           question: 'La persona arrendataria (inquilino) es:',
    //           identifier: 'id-unid-4_1',
    //           wordToReplace: 'id-unid-4_1',
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             // tslint:disable-next-line:max-line-length
    //             value: 'Seleccione el tipo de personalidad jurídica. Hablamos de personas físicas para referirnos a un particular, sin embargo hablamos de personas jurídicas para referirnos a una empresa, una asociación, etc...',
    //           },
    //           defaultRadioId: 'id-unid-4_1_opA',
    //           replacement: '',
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'Persona física',
    //               radioId: 'id-unid-4_1_opA',
    //               identifier: 'id-unid-4_1_opA',
    //               replacementOriginal: 'id-unid-4_1_opA_1',
    //               replacement: 'id-unid-4_1_opA_1',
    //               extraReplacements: [],
    //               checked: true,
    //               subSteps: [
    //                 {
    //                     type: 'iRadioC',
    //                     question: 'La persona arrendataria (inquilino) para realizar el contrato, actúa:',
    //                     identifier: 'id-unid-4_1_opA_1',
    //                     wordToReplace: 'id-unid-4_1_opA_1',
    //                     indications: {
    //                       areIndications: true,
    //                       indicationsType: 'outsideText',
    //                       // tslint:disable-next-line:max-line-length
    //                       value: 'La persona puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, será persona que firma el contrato quien asuma las obligaciones. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es el la persona a la que representa quien asumirá las obligaciones derivadas de este contrato. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank">Poder de representación</a>',
    //                     },
    //                     defaultRadioId: 'id-unid-4_1_opA_1_opA',
    //                     replacement: '',
    //                     extraReplacements: [
    //                     ],
    //                     radios: [
    //                       {
    //                         label: 'en su propio nombre y representación',
    //                         radioId: 'id-unid-4_1_opA_1_opA',
    //                         identifier: 'id-unid-4_1_opA_1_opA',
    //                         // tslint:disable-next-line:max-line-length
    //                         replacementOriginal: 'id-unid-4_1_opA_1_opA_1, mayor de edad, y con domicilio en id-unid-4_1_opA_1_opA_2, con id-unid-4_1_opA_1_opA_3 número id-unid-4_1_opA_1_opA_4, y actuando en su propio nombre y representación.',
    //                         // tslint:disable-next-line:max-line-length
    //                         replacement: 'id-unid-4_1_opA_1_opA_1, mayor de edad, y con domicilio en id-unid-4_1_opA_1_opA_2, con id-unid-4_1_opA_1_opA_3 número id-unid-4_1_opA_1_opA_4, y actuando en su propio nombre y representación.',
    //                         extraReplacements: [],
    //                         checked: true,
    //                         subSteps: [
    //                         {
    //                           question: 'Nombre completo del arrendatario (inquilino), incluyendo los apellidos:',
    //                           wordToReplace: 'id-unid-4_1_opA_1_opA_1',
    //                           identifier: 'id-unid-4_1_opA_1_opA_1',
    //                           type: 'iText',
    //                           replacement: '',
    //                           placeholder: 'P. ej. Martino Montano Holguín',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'insideText',
    //                             value: 'Indique el nombre completo, incluyendo sus dos apellidos.',
    //                           },
    //                         },
    //                         {
    //                           question: 'Dirección del lugar donde reside el arrendatario (inquilino):',
    //                           wordToReplace: 'id-unid-4_1_opA_1_opA_2',
    //                           identifier: 'id-unid-4_1_opA_1_opA_2',
    //                           placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    //                           type: 'iText',
    //                           replacement: '',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'insideText',
    //                             // tslint:disable-next-line:max-line-length
    //                             value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
    //                           },
    //                         },
    //                         {
    //                           type: 'iRadioB',
    //                           question: 'Tipo de documento de identificación del arrendatario (inquilino):',
    //                           identifier: 'id-unid-4_1_opA_1_opA_3',
    //                           wordToReplace: 'id-unid-4_1_opA_1_opA_3',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'outsideText',
    //                             // tslint:disable-next-line:max-line-length
    //                             value: 'Seleccione el tipo de documento de identificación del inquilino',
    //                           },
    //                           replacement: '',
    //                           radios: [
    //                             {
    //                               label: 'DNI',
    //                               replacementOriginal: 'DNI',
    //                               replacement: '',
    //                               radioId: 'id-unid-4_1_opA_1_opA_3_opA',
    //                               identifier: 'id-unid-4_1_opA_1_opA_3_opA',
    //                               extraReplacements: [],
    //                               checked: true,
    //                             },
    //                             {
    //                               label: 'NIE',
    //                               replacementOriginal: 'NIE',
    //                               replacement: '',
    //                               radioId: 'id-unid-4_1_opA_1_opA_3_opB',
    //                               identifier: 'id-unid-4_1_opA_1_opA_3_opB',
    //                               extraReplacements: [],
    //                               checked: false,
    //                             },
    //                             {
    //                               label: 'Pasaporte',
    //                               replacementOriginal: 'Pasaporte',
    //                               replacement: '',
    //                               radioId: 'id-unid-4_1_opA_1_opA_3_opC',
    //                               identifier: 'id-unid-4_1_opA_1_opA_3_opC',
    //                               extraReplacements: [],
    //                               checked: false,
    //                             }
    //                           ]
    //                         },
    //                         {
    //                           question: 'Número del documento seleccionado en la pregunta anterior',
    //                           wordToReplace: 'id-unid-4_1_opA_1_opA_4',
    //                           identifier: 'id-unid-4_1_opA_1_opA_4',
    //                           type: 'iText',
    //                           replacement: '',
    //                           placeholder: 'P. ej. 83558071Z',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'insideText',
    //                             value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
    //                           },
    //                         }
    //                       ]
    //                       },
    //                       {
    //                         label: 'por medio de un representante (legal o voluntario)',
    //                         // tslint:disable-next-line:max-line-length
    //                         replacementOriginal: 'id-unid-4_1_opA_1_opB_5, mayor de edad, con domicilio en id-unid-4_1_opA_1_opB_9, id-unid-4_1_opA_1_opB_6 número: id-unid-4_1_opA_1_opB_7, en calidad de id-unid-4_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, y actuando, en nombre y representación de id-unid-4_1_opA_1_opB_1, con domicilio en id-unid-4_1_opA_1_opB_2 y id-unid-4_1_opA_1_opB_3 número id-unid-4_1_opA_1_opB_4.',
    //                         // tslint:disable-next-line:max-line-length
    //                         replacement: 'id-unid-4_1_opA_1_opB_5, mayor de edad, con domicilio en id-unid-4_1_opA_1_opB_9, id-unid-4_1_opA_1_opB_6 número: id-unid-4_1_opA_1_opB_7, en calidad de id-unid-4_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y, y actuando, en nombre y representación de id-unid-4_1_opA_1_opB_1, con domicilio en id-unid-4_1_opA_1_opB_2 y id-unid-4_1_opA_1_opB_3 número id-unid-4_1_opA_1_opB_4.',
    //                         extraReplacements: [],
    //                         radioId: 'id-unid-4_1_opA_1_opB',
    //                         identifier: 'id-unid-4_1_opA_1_opB',
    //                         checked: false,
    //                         subSteps: [
    //                           {
    //                             question: 'Nombre completo del arrendatario (inquilino), incluyendo los apellidos:',
    //                             wordToReplace: 'id-unid-4_1_opA_1_opB_1',
    //                             identifier: 'id-unid-4_1_opA_1_opB_1',
    //                             type: 'iText',
    //                             replacement: '',
    //                             placeholder: 'P. ej. Martino Montano Holguín',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'insideText',
    //                               value: 'Indique el nombre completo, incluyendo sus dos apellidos.',
    //                             },
    //                           },
    //                           {
    //                             question: 'Dirección del lugar donde reside el arrendatario (inquilino):',
    //                             wordToReplace: 'id-unid-4_1_opA_1_opB_2',
    //                             identifier: 'id-unid-4_1_opA_1_opB_2',
    //                             type: 'iText',
    //                             replacement: '',
    //                             placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'insideText',
    //                               // tslint:disable-next-line:max-line-length
    //                               value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
    //                             },
    //                           },
    //                           {
    //                             type: 'iRadioB',
    //                             question: 'Tipo de documento de identificación del arrendatario (inquilino):',
    //                             identifier: 'id-unid-4_1_opA_1_opB_3',
    //                             wordToReplace: '3_1_opA_1_opB_3',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'insideText',
    //                               value: 'Seleccione el tipo de documento de identificación del inquilino',
    //                             },
    //                             replacement: '',
    //                             radios: [
    //                               {
    //                                 label: 'DNI',
    //                                 replacementOriginal: 'DNI',
    //                                 replacement: '',
    //                                 radioId: 'id-unid-4_1_opA_1_opB_3_opA',
    //                                 identifier: 'id-unid-4_1_opA_1_opB_3_opA',
    //                                 extraReplacements: [],
    //                                 checked: true,
    //                               },
    //                               {
    //                                 label: 'NIE',
    //                                 replacementOriginal: 'NIE',
    //                                 replacement: '',
    //                                 radioId: 'id-unid-4_1_opA_1_opB_3_opB',
    //                                 identifier: 'id-unid-4_1_opA_1_opB_3_opB',
    //                                 extraReplacements: [],
    //                                 checked: false,
    //                               },
    //                               {
    //                                 label: 'Pasaporte',
    //                                 replacementOriginal: 'Pasaporte',
    //                                 replacement: '',
    //                                 radioId: 'id-unid-4_1_opA_1_opB_3_opC',
    //                                 identifier: 'id-unid-4_1_opA_1_opB_3_opC',
    //                                 extraReplacements: [],
    //                                 checked: false,
    //                               }
    //                             ]
    //                           },
    //                           {
    //                             question: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
    //                             wordToReplace: 'id-unid-4_1_opA_1_opB_4',
    //                             identifier: 'id-unid-4_1_opA_1_opB_4',
    //                             type: 'iText',
    //                             replacement: '',
    //                             placeholder: 'P. ej. 83558071Z',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'insideText',
    //                               value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
    //                             },
    //                           },
    //                           {
    //                             // tslint:disable-next-line:max-line-length
    //                             question: 'Nombre completo de la persona que firma este contrato en nombre y representación del arrendatario (inquilino)',
    //                             wordToReplace: 'id-unid-4_1_opA_1_opB_5',
    //                             identifier: 'id-unid-4_1_opA_1_opB_5',
    //                             type: 'iText',
    //                             replacement: '',
    //                             placeholder: 'P. ej. Martino Montano Holguín',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'outsideText',
    //                               // tslint:disable-next-line:max-line-length
    //                               value: 'Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este arrendatario. El contrato puede ser firmado por un representante legal o voluntario. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank">Poder de representación</a>',
    //                             },
    //                           },
    //                           {
    //                             type: 'iRadioB',
    //                             // tslint:disable-next-line:max-line-length
    //                             question: 'Documento de identificación de la persona que firma el contrato en nombre y representación arrendatario (inquilino):',
    //                             identifier: 'id-unid-4_1_opA_1_opB_6',
    //                             wordToReplace: 'id-unid-4_1_opA_1_opB_6',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'outsideText',
    //                               // tslint:disable-next-line:max-line-length
    //                               value: 'Seleccione el tipo de documento de identificación de la persona física que firma el contrato en nombre y representación del inquilino.',
    //                             },
    //                             replacement: '',
    //                             radios: [
    //                               {
    //                                 label: 'DNI',
    //                                 replacementOriginal: 'DNI',
    //                                 replacement: '',
    //                                 radioId: 'id-unid-4_1_opA_1_opB_6_opA',
    //                                 identifier: 'id-unid-4_1_opA_1_opB_6_opA',
    //                                 extraReplacements: [],
    //                                 checked: true,
    //                               },
    //                               {
    //                                 label: 'NIE',
    //                                 replacementOriginal: 'NIE',
    //                                 replacement: '',
    //                                 radioId: 'id-unid-4_1_opA_1_opB_6_opB',
    //                                 identifier: 'id-unid-4_1_opA_1_opB_6_opB',
    //                                 extraReplacements: [],
    //                                 checked: false,
    //                               },
    //                               {
    //                                 label: 'Pasaporte',
    //                                 replacementOriginal: 'Pasaporte',
    //                                 replacement: '',
    //                                 radioId: 'id-unid-4_1_opA_1_opB_6_opC',
    //                                 identifier: 'id-unid-4_1_opA_1_opB_6_opC',
    //                                 extraReplacements: [],
    //                                 checked: false,
    //                               }
    //                             ]
    //                           },
    //                           {
    //                             question: 'Número del documento seleccionado en la pregunta anterior:',
    //                             wordToReplace: 'id-unid-4_1_opA_1_opB_7',
    //                             identifier: 'id-unid-4_1_opA_1_opB_7',
    //                             placeholder: 'P. ej. 83558071Z',
    //                             type: 'iText',
    //                             replacement: '',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'insideText',
    //                               value: 'Introduzca el número que corresponde con el documento seleccionado en la pregunta anterior',
    //                             },
    //                           },
    //                           {
    //                             // tslint:disable-next-line:max-line-length
    //                             question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del arrendatario (inquilino)',
    //                             wordToReplace: 'id-unid-4_1_opA_1_opB_8',
    //                             placeholder: 'P. ej. apoderado, representante legal',
    //                             identifier: 'id-unid-4_1_opA_1_opB_8',
    //                             type: 'iText',
    //                             replacement: '',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'insideText',
    //                               // tslint:disable-next-line:max-line-length
    //                               value: 'Escriba la calidad o concepto en el que esta persona firma el contrato en nombre y representación de este inquilino.',
    //                             },
    //                           },
    //                           {
    //                             // tslint:disable-next-line:max-line-length
    //                             question: 'Dirección del lugar donde reside la persona que firma este contrato en nombre y representación del arrendatario (inquilino)',
    //                             wordToReplace: 'id-unid-4_1_opA_1_opB_9',
    //                             placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    //                             identifier: 'id-unid-4_1_opA_1_opB_9',
    //                             type: 'iText',
    //                             replacement: '',
    //                             indications: {
    //                               areIndications: true,
    //                               indicationsType: 'insideText',
    //                               // tslint:disable-next-line:max-line-length
    //                               value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
    //                             },
    //                           },
    //                         ]
    //                       },
    //                     ],
    //                 },
    //             ]
    //             },
    //             {
    //               label: 'Persona jurídica',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'id-unid-4_1_opB_5 actuando en nombre y representación de: id-unid-4_1_opB_1, con domicilio en id-unid-4_1_opB_new1  C.I.F/N.I.F número id-unid-4_1_opB_2, e inscrita en: id-unid-4_1_opB_3  con la siguiente información: id-unid-4_1_opB_4.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'id-unid-4_1_opB_5 actuando en nombre y representación de: id-unid-4_1_opB_1, con domicilio en id-unid-4_1_opB_new1  C.I.F/N.I.F número id-unid-4_1_opB_2, e inscrita en: id-unid-4_1_opB_3  con la siguiente información: id-unid-4_1_opB_4.',
    //               extraReplacements: [],
    //               radioId: 'id-unid-4_1_opB',
    //               identifier: 'id-unid-4_1_opB',
    //               checked: false,
    //               subSteps: [
    //                 {
    //                   question: 'Nombre o razón social de esta persona jurídica arrendataria (inquilino):',
    //                   wordToReplace: 'id-unid-4_1_opB_1',
    //                   identifier: 'id-unid-4_1_opB_1',
    //                   type: 'iText',
    //                   placeholder: 'P. ej. Banco Santander, S.A',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Si no conoce el nombre, mediante el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc), puede soliticar la información.',
    //                   },
    //                 },
    //                 {
    //                   question: 'Domicilio social completo esta persona jurídica arrendataria (inquilino):',
    //                   wordToReplace: 'id-unid-4_1_opB_new1',
    //                   identifier: 'id-unid-4_1_opB_new1',
    //                   type: 'iText',
    //                   placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
    //                   },
    //                 },
    //                 {
    //                   question: 'NIF (Número de Identificación Fiscal) completo de la persona jurídica:',
    //                   wordToReplace: 'id-unid-4_1_opB_2',
    //                   identifier: 'id-unid-4_1_opB_2',
    //                   type: 'iText',
    //                   placeholder: 'P. ej. B29805314',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank">NIF empresarial</a>.',
    //                   },
    //                 },
    //                 {
    //                   question: 'Tipo de registro y lugar donde está inscrita la persona jurídica:',
    //                   wordToReplace: 'id-unid-4_1_opB_3',
    //                   identifier: 'id-unid-4_1_opB_3',
    //                   type: 'iText',
    //                   placeholder: 'P. ej. Registro Mercantil de Madrid',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank">Datos registrales</a>',
    //                   },
    //                 },
    //                 {
    //                   question: 'Datos registrales de la persona jurídica:',
    //                   wordToReplace: 'id-unid-4_1_opB_4',
    //                   identifier: 'id-unid-4_1_opB_4',
    //                   type: 'iText',
    //                   placeholder: 'P. ej. Tomo 123, folio 10, hoja SE-1234',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si quieres más información sobre esta figura consulta el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank">Datos registrales</a>',
    //                   },
    //                 },
    //                 {
    //                   type: 'iForEach',
    //                   value: 1,
    //                   min: 1,
    //                   max: 10,
    //                   replacement: '',
    //                   identifier: 'id-unid-4_1_opB_5',
    //                   wordToReplace: 'id-unid-4_1_opB_5',
    //                   question: '¿Cuántas personas firmarán el contrato en nombre y representación de la persona jurídica?',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     value: 'Indique aquí el número de personas que firmarán el contrato en nombre y representación de la persona. Al ser una persona jurídica, el contrato lo debe firmar una persona física que haya recibido de esta facultades para poder contratar en nombre de la empresa y que puede ser, al mismo tiempo, su administrador (representante legal) o no (apoderada).',
    //                   },
    //                   content: [
    //                     {
    //                       identifier: 'id-unid-4_1_opB_5',
    //                       wordToReplace: 'id-unid-4_1_opB_5',
    //                       replacementOriginal: 'id-unid-4_1_opB_5_1, mayor de edad, con domicilio en id-unid-4_1_opB_5_2, id-unid-4_1_opB_5_3 núm. id-unid-4_1_opB_5_4, y en calidad de id-unid-4_1_opB_5_5',
    //                       replacement: '',
    //                       extraReplacements: [],
    //                       modifiedReplacements: [],
    //                       modifiedExtraReplacements: [],
    //                       subSteps: [
    //                         {
    //                           question: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídica:',
    //                           wordToReplace: 'id-unid-4_1_opB_5_1',
    //                           identifier: 'id-unid-4_1_opB_5_1',
    //                           type: 'iText',
    //                           placeholder: 'P. ej. Margarita García Pérez',
    //                           replacement: '',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'insideText',
    //                             // tslint:disable-next-line:max-line-length
    //                             value: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídica',
    //                           },
    //                         },
    //                         {
    //                           question: 'Domicilio completo del representante de la persona jurídica:',
    //                           wordToReplace: 'id-unid-4_1_opB_5_2',
    //                           identifier: 'id-unid-4_1_opB_5_2',
    //                           type: 'iText',
    //                           placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    //                           replacement: '',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'outsideText',
    //                             // tslint:disable-next-line:max-line-length
    //                             value: 'Domicilio, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país del representante de la persona jurídica',
    //                           },
    //                         },
    //                         {
    //                           type: 'iRadioB',
    //                           // tslint:disable-next-line:max-line-length
    //                           question: 'Documento de identidad del representante de la persona jurídica:',
    //                           identifier: 'id-unid-4_1_opB_5_3',
    //                           wordToReplace: 'id-unid-4_1_opB_5_3',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'outsideText',
    //                             // tslint:disable-next-line:max-line-length
    //                             value: 'Seleccione el tipo de documento de identidad del representante de la persona jurídica.',
    //                           },
    //                           replacement: '',
    //                           radios: [
    //                             {
    //                               label: 'DNI',
    //                               replacementOriginal: 'DNI',
    //                               replacement: '',
    //                               radioId: 'id-unid-4_1_opB_5_3_opA',
    //                               identifier: 'id-unid-4_1_opB_5_3_opA',
    //                               extraReplacements: [],
    //                               checked: true,
    //                             },
    //                             {
    //                               label: 'NIE',
    //                               replacementOriginal: 'NIE',
    //                               replacement: '',
    //                               radioId: 'id-unid-4_1_opB_5_3_opB',
    //                               identifier: 'id-unid-4_1_opB_5_3_opB',
    //                               extraReplacements: [],
    //                               checked: false,
    //                             },
    //                             {
    //                               label: 'Pasaporte',
    //                               replacementOriginal: 'Pasaporte',
    //                               replacement: '',
    //                               radioId: 'id-unid-4_1_opB_5_3_opC',
    //                               identifier: 'id-unid-4_1_opB_5_3_opC',
    //                               extraReplacements: [],
    //                               checked: false,
    //                             }
    //                           ]
    //                         },
    //                         {
    //                           question: 'Número del documento de identificación personal seleccionado:',
    //                           wordToReplace: 'id-unid-4_1_opB_5_4',
    //                           identifier: 'id-unid-4_1_opB_5_4',
    //                           placeholder: 'P. ej: 42888457',
    //                           type: 'iText',
    //                           replacement: '',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'insideText',
    //                             value: 'Escriba el número que corresponde con el documento de identificación personal seleccionado en la pregunta anterior',
    //                           },
    //                         },
    //                         {
    //                           question: 'Función del representante de la persona jurídica:',
    //                           wordToReplace: 'id-unid-4_1_opB_5_5',
    //                           identifier: 'id-unid-4_1_opB_5_5',
    //                           type: 'iText',
    //                           placeholder: 'P. ej. administradora única',
    //                           replacement: '',
    //                           indications: {
    //                             areIndications: true,
    //                             indicationsType: 'insideText',
    //                             // tslint:disable-next-line:max-line-length
    //                             value: 'Indique aquí en qué calidad o función el único representante, persona física, firma el contrato  en nombre y representación de la persona jurídica.',
    //                           },
    //                         },
    //                       ]
    //                     }
    //                   ]
    //                 }
    //               ]
    //             },
    //           ],
    //         },
    //         {
    //           question: 'Dirección o direcciones de correo electrónico del/los inquilinos',
    //           wordToReplace: 'id-unid-4_2',
    //           identifier: 'id-unid-4_1_opB_5_4',
    //           placeholder: 'P. ej: ejemplo@email.com',
    //           type: 'iText',
    //           replacement: '',
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'insideText',
    //             value: 'Si lo desea, señale en este espacio la dirección o direcciones de correo electrónico de los inquilinos. Esto puede facilitar y hacer más fluidas las comunicaciones entre las partes.  Si no desea indicar la dirección o direcciones de correo electrónico, deje este espacio en blanco.',
    //           },
    //           isEmpty: {
    //             prepend: 'La PARTE ARRENDADORA:<br>',
    //             append: '',
    //           }
    //         },
    //       ]
    //     }
    //     // {}
    //   ]
    // },
    // {
    //   type: 'iText',
    //   identifier: 'id-unid-5',
    //   wordToReplace: 'id-unid-5',
    //   replacement: '',
    //   question: 'Dirección completa de la vivienda:',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'insideText',
    //     value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) '
    //   },
    //   placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    //   mandatory: true,
    //   isFocused: false
    // },
    // {
    //   question: 'Superficie útil de la vivienda en metros cuadrados:',
    //   placeholder: 'P. ej: 150',
    //   wordToReplace: 'id-unid-6',
    //   identifier: 'id-unid-6',
    //   type: 'iNumber',
    //   replacement: '',
    //   extraReplacements: [],
    //   rules: [],
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     value: 'La superficie útil (o metros útiles de una vivienda) es la superficie que se puede pisar dentro de la casa. En este concepto entra todo el interior de una vivienda (incluidos los armarios), pero quedarían excluidas todas las partes que aún estando dentro de la casa no son útiles, como los tabiques, pilares y demás elementos estructurales. La información de la superficie útil proporciona una idea del espacio del que dispondrá para vivir.'
    //   },
    // },
    // {
    //   question: 'Indique el número de habitaciones que tiene la vivienda incluyendo la habitación que se alquila:',
    //   placeholder: 'P. ej: 2',
    //   wordToReplace: 'id-unid-7',
    //   identifier: 'id-unid-7',
    //   type: 'iNumber',
    //   replacement: '',
    //   extraReplacements: [],
    //   rules: [
    //     {
    //       condition: false,
    //       rulename: 'extraReplacementToCharacter',
    //       identifier: 'idunid7-precioAletras',
    //       wordToReplace: 'idunid7-precioAletras',
    //       replacement: ''
    //     }
    //   ],
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'insideText',
    //     value: 'Para poder realizar el contrato de habitación, la vivienda tiene que tener un mínimo de 2 habitaciones, en caso contrario, es decir que la vivienda solo tuviese una habitación, se tendría que celebrar un contrato de arrendamiento de vivienda.'
    //   },
    // },
    // {
    //   type: 'iText',
    //   subtype: 'textarea',
    //   identifier: 'id-unid-8',
    //   wordToReplace: 'id-unid-8',
    //   replacement: '',
    //   question: 'Haga una descripción detallada de los componentes de la vivienda, sin contar con las habitaciones que se alquilan',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'insideText',
    //     value: 'Haga un descripción de las zonas comunes de la vivienda, es decir de las partes, espacios, anexos, depedencias, exluyendo las habitaciones.'
    //   },
    //   placeholder: 'P. ej. Una cocina, un salón, dos baños, un garaje, un jardín de 10 m2...',
    //   mandatory: true,
    //   isFocused: false
    // },
    // {
    //   type: 'iText',
    //   identifier: 'id-unid-9',
    //   wordToReplace: 'id-unid-9',
    //   replacement: '',
    //   question: 'Lugar y, en su caso, número del Registro de la propiedad en el que está inscrita la vivienda:',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'insideText',
    //     value: 'Localidad y número del Registro de la propiedad en el que está inscrita la vivienda.'
    //   },
    //   placeholder: 'P. ej. Madrid Nº 34',
    //   mandatory: true,
    //   isFocused: false,
    // },
    // {
    //   type: 'iText',
    //   identifier: 'id-dec-10',
    //   wordToReplace: 'id-dec-10',
    //   replacement: '',
    //   question: 'Datos registrales de la vivienda:',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'insideText',
    //     value: 'Los datos registrales es el número de finca que se asigna en el registro de la propiedad correspondiente en el momento de ser inscrita por primera vez y los datos de la cita registral que le corresponden, es decir, el número de tomo, libro y folio en los que consta la inscripción.'
    //   },
    //   placeholder: 'P. ej. Tomo 1 Libro 377 Folio 204 Finca 2',
    //   mandatory: true,
    //   isFocused: false
    // },
    // {
    //   type: 'iText',
    //   identifier: 'id-dec-11',
    //   wordToReplace: 'id-dec-11',
    //   replacement: '',
    //   question: 'Referencia catastral de la vivienda:',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     value: 'La referencia catastral es el identificador oficial y obligatorio de los bienes inmuebles. Consiste en un código alfanumérico que es asignado por el Catastro de manera que todo inmueble debe tener una única referencia catastral que permita situarlo inequívocamente en la cartografía catastral. Si no desea indicar la referencia catastral, deje este espacio en blanco.'
    //   },
    //   placeholder: 'P. ej: 9872023 VH5797S 0001 WX',
    //   mandatory: false,
    //   isFocused: false,
    //   isEmpty: {
    //     prepend: 'Su referencia catastral es: ',
    //     append: '.',
    //   }
    // },
    // {
    //   type: 'iRadioC',
    //   question: '¿La vivienda forma parte de una Comunidad de Propietarios?',
    //   identifier: 'id-dec-12',
    //   wordToReplace: 'id-dec-12',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     // tslint:disable-next-line:max-line-length
    //     value: 'Por ejemplo, cuando vivimos en un bloque de pisos formamos parte de una Comunidad de Propietarios. Con ella nos referimos al conjunto de propietarios que si bien tienen la propiedad exclusiva de una vivienda o local, también son copropietarios  en otra serie de elementos que son comunes a todos los integrantes,  (jardines, terrazas, escaleras, pasillos, etc). En ese caso, el arrendatario o inquilino deberá respetar las normas que la Comunidad imponga y, en su caso, pagar parte de las cuotas de la misma.'
    //   },
    //   defaultRadioId: 'id-dec-12_opA',
    //   replacement: '',
    //   extraReplacements: [
    //     {
    //       identifier: 'iddec12-extra-1',
    //       wordToReplace: 'iddec12-extra-1',
    //       insideId: 'opA'
    //     },
    //     {
    //       identifier: 'iddec12-extra-2',
    //       wordToReplace: 'iddec12-extra-2',
    //       insideId: 'opB'
    //     },
    //     {
    //       identifier: 'iddec12-extra-3',
    //       wordToReplace: 'iddec12-extra-3',
    //       insideId: 'opC'
    //     },
    //     {
    //       identifier: 'iddec12-extra-4',
    //       wordToReplace: 'iddec12-extra-4',
    //       insideId: 'opD'
    //     },
    //     {
    //       identifier: 'iddec12-extra-5',
    //       wordToReplace: 'iddec12-extra-5',
    //       insideId: 'opE'
    //     }
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí',
    //       replacementOriginal: 'Todos los gastos de Comunidad correrán a cargo de id-dec-12_opA_1<br> <br> Los gastos extraordinarios de Comunidad que correspondan a la Vivienda serán por cuenta y a cargo id-dec-12_opA_2',
    //       replacement: 'Todos los gastos de Comunidad correrán a cargo de id-dec-12_opA_1<br> <br> Los gastos extraordinarios de Comunidad que correspondan a la Vivienda serán por cuenta y a cargo id-dec-12_opA_2',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec12-extra-1',
    //           replacement: 'las normas de la Comunidad o ',
    //           replacementOriginal: 'las normas de la Comunidad o ',
    //           insideId: 'opA'
    //         },
    //         {
    //           identifier: 'iddec12-extra-2',
    //           replacement: 'Igualmente está obligada a requerir a la Comunidad de Propietarios, a instancias de la PARTE ARRENDATARIA, para la realización de las obras de reparación o adecuación que puedan necesitar los elementos comunes. ',
    //           replacementOriginal: 'Igualmente está obligada a requerir a la Comunidad de Propietarios, a instancias de la PARTE ARRENDATARIA, para la realización de las obras de reparación o adecuación que puedan necesitar los elementos comunes. ',
    //           insideId: 'opB'
    //         },
    //         {
    //           identifier: 'iddec12-extra-3',
    //           replacement: 'LA COMUNIDAD Y NORMAS DE',
    //           replacementOriginal: 'LA COMUNIDAD Y NORMAS DE',
    //           insideId: 'opC'
    //         },
    //         {
    //           identifier: 'iddec12-extra-4',
    //           replacement: 'Estando ubicada la Vivienda en un inmueble organizado en una Comunidad de Propietarios, la PARTE ARRENDATARIA se obliga a cumplir en todo momento, y durante toda la vigencia del Contrato iddec25-extra-3. Contravenir los buenos usos de vecindad, los contenidos en los estatutos de la Comunidad y policía urbana, así como el molestar a vecinos con ruidos, fiestas, música, etc., siempre que contravengan las Ordenanzas Municipales. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.',
    //           replacementOriginal: 'Estando ubicada la Vivienda en un inmueble organizado en una Comunidad de Propietarios, la PARTE ARRENDATARIA se obliga a cumplir en todo momento, y durante toda la vigencia del Contrato iddec25-extra-3. Contravenir los buenos usos de vecindad, los contenidos en los estatutos de la Comunidad y policía urbana, así como el molestar a vecinos con ruidos, fiestas, música, etc., siempre que contravengan las Ordenanzas Municipales. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.',
    //           insideId: 'opD'
    //         },
    //         {
    //           identifier: 'iddec12-extra-5',
    //           replacement: 'o de la correspondiente prórroga o prórrogas',
    //           replacementOriginal: 'o de la correspondiente prórroga o prórrogas',
    //           insideId: 'opE'
    //         }
    //       ],
    //       radioId: 'id-dec-12_opA',
    //       identifier: 'id-dec-12_opA',
    //       checked: false,
    //       indications: {
    //         areIndications: true,
    //         indicationsType: 'outsideText',
    //         // tslint:disable-next-line:max-line-length
    //         value: 'Los gastos generales u ordinarios Son aquellos necesarios y previsibles para el buen sostenimiento del inmueble. Derivan de la conservación, el mantenimiento y las reparaciones ordinarias.Estos gastos se contemplan en los Presupuestos Anuales y se aprueban en la Junta Ordinaria. Para costearlos se utilizan las cuotas mensuales de los propietarios. Entre estos encontramos:<br>1. Los gastos de mantenimiento, conservación y reparación de los servicios más habituales en las comunidades: Limpieza de la comunidad, consumo de agua, gastos bancarios, mantenimiento de ascensor, antena y DDD, calefacción central, luz del portal, garaje y escaleras, portería y conserje, piscina, jardinería, etc. <br>2. Gastos de mantenimiento, conservación y reparación de elementos comunes como tejados, canales de agua, tuberías, caldera. <br>3. Obras para la conservación y accesibilidad necesarias para el mantenimiento del edificio y de sus servicios. <br>4. Fondo de reserva que se fija para la aprobación del Presupuesto de la Comunidad y que debe superar el 5% del último presupuesto ordinario. Este fondo se utiliza para cubrir obras de conservación y reparación de la finca o realizar una derrama extraordinaria por accidentes. <br>5. Gastos municipales como la tasa de recogida de basura o el vado o paso de carruajes.'
    //       },
    //       subSteps: [
    //         {
    //           type: 'iRadioC',
    //           question: '¿Quién asumirá los gastos generales u ordinarios (cuotas) de la comunidad de la que forma parte la vivienda?:',
    //           identifier: 'id-dec-12_opA_1',
    //           wordToReplace: 'id-dec-12_opA_1',
    //           defaultRadioId: 'id-dec-12_opA_1_opA',
    //           replacement: '',
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'el arrendador (propietario)',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'la PARTE ARRENDADORA.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'la PARTE ARRENDADORA.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-12_opA_1_opA',
    //               identifier: 'id-dec-12_opA_1_opA',
    //               checked: true,
    //               subSteps: []
    //             },
    //             {
    //               label: 'los dos, el arrendatario y  el arrendador, conjuntamente',
    //               replacementOriginal: 'ambas Partes. En concreto, a la PARTE ARRENDATARIA le corresponderá abonar un id-dec-12_opA_1_opB_1 % de los mismos id-dec-12_opA_1_opB_2',
    //               replacement: '',
    //               extraReplacements: [],
    //               radioId: 'id-dec-12_opA_1_opB',
    //               identifier: 'id-dec-12_opA_1_opB',
    //               checked: false,
    //               subSteps: [
    //                 {
    //                   question: 'Que porcentaje de estos gastos generales u ordinarios (cuotas) deberá pagar el arrendatario (inquilino)',
    //                   placeholder: 'Ej. Escriba un número menor que 100',
    //                   wordToReplace: 'id-dec-12_opA_1_opB_1',
    //                   identifier: 'id-dec-12_opA_1_opB_1',
    //                   type: 'iNumber',
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'insideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'La cantidad debe ser proporcional a la parte de la vivienda que será ocupada por el arrendatario (inquilino).'
    //                   },
    //                   rules: [
    //                   ],
    //                 },
    //                 {
    //                   type: 'iRadioC',
    //                   question: 'Estos gastos generales u ordinarios (cuotas)',
    //                   identifier: 'id-dec-12_opA_1_opB_2',
    //                   wordToReplace: 'id-dec-12_opA_1_opB_2',
    //                   defaultRadioId: 'id-dec-12_opA_1_opB_2_opA',
    //                   replacement: '',
    //                   extraReplacements: [
    //                   ],
    //                   radios: [
    //                     {
    //                       label: 'no están incluídos en el alquiler, debe pagarlos el arrendatario a parte',
    //                       // tslint:disable-next-line:max-line-length
    //                       replacementOriginal: 'El importe de los gastos de Comunidad no está incluido dentro en la renta. Siendo que la parte ARRENDATARIA tendrá que abonarlos por separado a la parte ARRENDADORA, que a su vez está obligada a entregar recibo al parte ARRENDATARIA en el que se especifique los diferentes conceptos que componen los pagos efectuados para que la parte ARRENDATARIA.  Los gastos ordinarios de Comunidad para la Vivienda actualmente ascienden a la cantidad de iddec12opA1opB2opA1-precioAletras ( id-dec-12_opA_1_opB_2_opA_1 €) mensuales.',
    //                       // tslint:disable-next-line:max-line-length
    //                       replacement: 'El importe de los gastos de Comunidad no está incluido dentro en la renta. Siendo que la parte ARRENDATARIA tendrá que abonarlos por separado a la parte ARRENDADORA, que a su vez está obligada a entregar recibo al parte ARRENDATARIA en el que se especifique los diferentes conceptos que componen los pagos efectuados para que la parte ARRENDATARIA.  Los gastos ordinarios de Comunidad para la Vivienda actualmente ascienden a la cantidad de iddec12opA1opB2opA1-precioAletras ( id-dec-12_opA_1_opB_2_opA_1 €) mensuales.',
    //                       extraReplacements: [],
    //                       radioId: 'id-dec-12_opA_1_opB_2_opA',
    //                       identifier: 'id-dec-12_opA_1_opB_2_opA',
    //                       checked: true,
    //                       subSteps: [
    //                         {
    //                           question: 'Importe mensual (en euros) de estos gastos generales de comunidad:',
    //                           placeholder: 'Ej. Escriba un número',
    //                           wordToReplace: 'id-dec-12_opA_1_opB_2_opA_1',
    //                           identifier: 'id-dec-12_opA_1_opB_2_opA_1',
    //                           type: 'iNumber',
    //                           replacement: '',
    //                             extraReplacements: [],
    //                           indications: {
    //                             areIndications: false,
    //                             indicationsType: '',
    //                             // tslint:disable-next-line:max-line-length
    //                             value: ''
    //                           },
    //                           rules: [
    //                             {
    //                               condition: false,
    //                               rulename: 'extraReplacementToCharacter',
    //                               identifier: 'iddec12opA1opB2opA1-precioAletras',
    //                               wordToReplace: 'iddec12opA1opB2opA1-precioAletras',
    //                               replacement: ''
    //                             }
    //                           ],
    //                         },
    //                       ]
    //                     },
    //                     {
    //                       label: 'están incluidos en el importe del alquiler',
    //                       replacementOriginal: 'El importe de los gastos de Comunidad está incluido dentro de la renta. Siendo que la parte ARRENDATARIA no tiene que abonarlos por separado a la parte ARRENDADORA, y ésta no está obligada a entregar recibo al parte ARRENDATARIA en el que se especifique los diferentes conceptos que componen los pagos efectuados para que la parte ARRENDATARIA, si bien estos gastos están previstos dentro de la renta. ',
    //                       replacement: '',
    //                       extraReplacements: [],
    //                       radioId: 'id-dec-12_opA_1_opB_2_opB',
    //                       identifier: 'id-dec-12_opA_1_opB_2_opB',
    //                       checked: false,
    //                       subSteps: [
    //                       ]
    //                     }
    //                   ],
    //                 },
    //               ]
    //             }
    //           ],
    //         },
    //         {
    //           type: 'iRadioC',
    //           question: '¿Quién asumirá los gastos extraordinarios (connocidos comúnmente como derramas) de la comunidad de la que forma parte la vivienda?:',
    //           identifier: 'id-dec-12_opA_2',
    //           wordToReplace: 'id-dec-12_opA_2',
    //           defaultRadioId: 'id-dec-12_opA_2_opA',
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             // tslint:disable-next-line:max-line-length
    //             value: 'Los gastos extraordinarios no se contemplan en los Presupuestos Anuales y se utilizan para la realización de algún tipo de obra o reforma de elementos comunes.<br>Para recaudar los fondos se suele convocar una Junta Extraordinaria, en la que se comunicará a todos los propietarios el problema y se buscará la mejor solución para su arreglo. También se decide aquí la forma de pago, que puede ser con cargo al dinero ahorrado por la Comunidad, con la aprobación de una derrama o con una subida proporcional en la cuota de la comunidad.'
    //           },
    //           replacement: '',
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'por el arrendador (propietario)',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'de la PARTE ARRENDADORA en su totalidad.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'de la PARTE ARRENDADORA en su totalidad.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-12_opA_2_opA',
    //               identifier: 'id-dec-12_opA_2_opA',
    //               checked: true,
    //               subSteps: []
    //             },
    //             {
    //               label: 'los dos, el arrendatario (inquilino) y  el arrendador (propietario), conjuntamente',
    //               replacementOriginal: 'de ambas Partes. En concreto, a la PARTE ARRENDATARIA le corresponderá abonar un iddec12opA2opB1-precioAletras por ciento (id-dec-12_opA_2_opB_1 %) de los mismos.',
    //               replacement: 'de ambas Partes. En concreto, a la PARTE ARRENDATARIA le corresponderá abonar un iddec12opA2opB1-precioAletras por ciento (id-dec-12_opA_2_opB_1 %) de los mismos.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-12_opA_2_opB',
    //               identifier: 'id-dec-12_opA_2_opB',
    //               checked: false,
    //               subSteps: [
    //                 {
    //                   question: '¿Que porcentaje de estos gastos extraordinarios (o también conocidos como derramas) deberá pagar el arrendatario (inquilino)?:',
    //                   placeholder: 'Ej. Escriba un número menor que 100',
    //                   wordToReplace: 'id-dec-12_opA_2_opB_1',
    //                   identifier: 'id-dec-12_opA_2_opB_1',
    //                   type: 'iNumber',
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'insideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'La cantidad debe ser proporcional a la parte de la vivienda que será ocupada por el arrendatario (inquilino).'
    //                   },
    //                   rules: [
    //                     {
    //                       condition: false,
    //                       rulename: 'extraReplacementToCharacter',
    //                       identifier: 'iddec12opA2opB1-precioAletras',
    //                       wordToReplace: 'iddec12opA2opB1-precioAletras',
    //                       replacement: ''
    //                     }
    //                   ],
    //                 }
    //               ]
    //             }
    //           ],
    //         },
    //       ]
    //     },
    //     {
    //       label: 'No',
    //       replacementOriginal: '',
    //       replacement: '',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec12-extra-1',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opA'
    //         },
    //         {
    //           identifier: 'iddec12-extra-2',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opB'
    //         },
    //         {
    //           identifier: 'iddec12-extra-3',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opC'
    //         },
    //         {
    //           identifier: 'iddec12-extra-4',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opD'
    //         },
    //         {
    //           identifier: 'iddec12-extra-5',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opE'
    //         }
    //       ],
    //       radioId: 'id-dec-12_opB',
    //       identifier: 'id-dec-12_opB',
    //       checked: true,
    //       subSteps: []
    //     },
    //   ],
    // },
    // {
    //   question: 'Superficie útil de la habitación que se va a alquilar en metros cuadrados:',
    //   placeholder: 'Ej. 30',
    //   wordToReplace: 'id-dec-13',
    //   identifier: 'id-dec-13',
    //   type: 'iNumber',
    //   replacement: '',
    //   extraReplacements: [],
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'insideText',
    //     // tslint:disable-next-line:max-line-length
    //     value: 'Indique en metros cuadrados la superficie de la habitación.'
    //   },
    //   rules: [
    //   ],
    // },
    // {
    //   type: 'iText',
    //   subtype: 'textarea',
    //   identifier: 'id-dec-14',
    //   wordToReplace: 'id-dec-14',
    //   replacement: '',
    //   question: 'Haga una descripción de la habitación que se va a alquilar  que permita identificarla y ubicarla en la vivienda:',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     value: ''
    //   },
    //   placeholder: 'Ej. habitación que tiene la letra B en la puerta y que se encuentra ubicada frente del baño',
    //   mandatory: true,
    //   isFocused: false
    // },
    // {
    //   type: 'iRadioC',
    //   question: '¿La habitación se alquila amueblada de manera que el arrendatario (inquilino) pueda hacer uso de la misma desde su entrada en la vivienda (por ejemplo, que tenga una cama, un armario y una mesa)?',
    //   identifier: 'id-dec-15',
    //   wordToReplace: 'id-dec-15',
    //   defaultRadioId: 'id-dec-15_opA',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     // tslint:disable-next-line:max-line-length
    //     value: ''
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //     {
    //       identifier: 'iddec15-extra-1',
    //       wordToReplace: 'iddec15-extra-1',
    //       insideId: 'opA'
    //     },
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'id-dec-15_opA_1',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'id-dec-15_opA_1',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec15-extra-1',
    //           replacement: 'incluyendo el mobiliario y los enseres que se encuentran en su interior comprobando que se corresponde con los siguientes iddec15opA1-extra-1',
    //           replacementOriginal: 'incluyendo el mobiliario y los enseres que se encuentran en su interior comprobando que se corresponde con los siguientes iddec15opA1-extra-1',
    //           insideId: 'opA'
    //         },
    //       ],
    //       radioId: 'id-dec-15_opA',
    //       identifier: 'id-dec-15_opA',
    //       checked: true,
    //       subSteps: [
    //         {
    //           type: 'iRadioC',
    //           question: 'Los muebles de la habitación se encuentran descritos en:',
    //           identifier: 'id-dec-15_opA_1',
    //           wordToReplace: 'id-dec-15_opA_1',
    //           defaultRadioId: 'id-dec-15_opA_1_opA',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           replacement: '',
    //           extraReplacements: [
    //             {
    //               identifier: 'iddec15opA1-extra-1',
    //               wordToReplace: 'iddec15opA1-extra-1',
    //               insideId: 'opA'
    //             },
    //           ],
    //           radios: [
    //             {
    //               label: 'este contrato',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'está amueblada con el siguiente mobiliario, enseres y objetos:<br> id-dec-15_opA_1_opA_1',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'está amueblada con el siguiente mobiliario, enseres y objetos:<br> id-dec-15_opA_1_opA_1',
    //               extraReplacements: [
    //                 {
    //                   identifier: 'iddec15opA1-extra-1',
    //                   replacement: 'Expositivo II del presente Contrato',
    //                   replacementOriginal: 'Expositivo II del presente Contrato',
    //                   insideId: 'opA'
    //                 },
    //               ],
    //               radioId: 'id-dec-15_opA_1_opA',
    //               identifier: 'id-dec-15_opA_1_opA',
    //               checked: true,
    //               subSteps: [
    //                 {
    //                   type: 'iText',
    //                   subtype: 'textarea',
    //                   identifier: 'id-dec-15_opA_1_opA_1',
    //                   wordToReplace: 'id-dec-15_opA_1_opA_1',
    //                   replacement: '',
    //                   question: 'Descripción detallada de los muebles de la habitación:',
    //                   indications: {
    //                     areIndications: false,
    //                     indicationsType: '',
    //                     value: ''
    //                   },
    //                   placeholder: 'P. ej. Una cama doble marca IXX modelo XX, un colchón marca XXX modelo XXX, ...',
    //                   mandatory: true,
    //                   isFocused: false
    //                 },
    //               ]
    //             },
    //             {
    //               label: 'en otro documento anexo (o adjunto) a este contrato',
    //               replacementOriginal: 'se encuentra amueblada con el mobiliario, enseres y objetos detallados en el Anexo II de inventario de bienes muebles, junto con el resto del mobiliario existente en las zonas comunes de la Vivienda.',
    //               replacement: 'se encuentra amueblada con el mobiliario, enseres y objetos detallados en el Anexo II de inventario de bienes muebles, junto con el resto del mobiliario existente en las zonas comunes de la Vivienda.',
    //               extraReplacements: [
    //                 {
    //                   identifier: 'iddec15opA1-extra-1',
    //                   replacement: 'Anexo de inventario de bienes muebles incorporado al presente Contrato,',
    //                   replacementOriginal: 'Anexo de inventario de bienes muebles incorporado al presente Contrato,',
    //                   insideId: 'opA'
    //                 },
    //               ],
    //               radioId: 'id-dec-15_opA_1_opB',
    //               identifier: 'id-dec-15_opA_1_opB',
    //               checked: false,
    //               subSteps: [
    //               ]
    //             }
    //           ],
    //         },
    //       ]
    //     },
    //     {
    //       label: 'No',
    //       replacementOriginal: 'no se encuentra amueblada.',
    //       replacement: 'no se encuentra amueblada.',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec15-extra-1',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opA'
    //         }
    //       ],
    //       radioId: 'id-dec-15_opB',
    //       identifier: 'id-dec-15_opB',
    //       checked: false,
    //       subSteps: [
    //       ]
    //     }
    //   ],
    // },
    // {
    //   type: 'iRadioB',
    //   question: 'Para acceder a la habitación esta tiene:',
    //   identifier: 'id-dec-16',
    //   wordToReplace: 'id-dec-16',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     value: 'Seleccione aquí la opción que corresponda a la seguridad con la que cuenta la habitación objeto de este contrato de arrendamiento: puerta con llave o cerradura privada, caja de seguridad con clave secreta o llave privada, ambas o ninguna.',
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //     {
    //       identifier: 'iddec16-extra-1',
    //       wordToReplace: 'iddec16-extra-1',
    //       insideId: 'opA'
    //     },
    //     {
    //       identifier: 'iddec16-extra-2',
    //       wordToReplace: 'iddec16-extra-2',
    //       insideId: 'opAB'
    //     },
    //     {
    //       identifier: 'iddec16-extra-3',
    //       wordToReplace: 'iddec16-extra-3',
    //       insideId: 'opAC'
    //     }
    //   ],
    //   radios: [
    //     {
    //       label: 'puerta con llave',
    //       replacementOriginal: 'con la entrega de las llaves de acceso a la misma y a la Vivienda',
    //       replacement: 'con la entrega de las llaves de acceso a la misma y a la Vivienda',
    //       radioId: 'id-dec-16_opA',
    //       identifier: 'id-dec-16_opA',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec16-extra-1',
    //           replacement: 'con la entrega de las llaves de acceso a la misma y a la Vivienda',
    //           replacementOriginal: 'con la entrega de las llaves de acceso a la misma y a la Vivienda',
    //           insideId: 'opA'
    //         },
    //         {
    //           identifier: 'iddec16-extra-2',
    //           replacement: 'La parte arrendadora  no se hace responsable de pérdidas o hurtos en las habitaciones, o en la vivienda. A tal efecto, todas las habitaciones cuentan con cerradura privada. La parte arrendadora tampoco se hace responsables de los posibles daños que pudieran surgir en los dispositivos electrónicos en chufados a la red eléctrica de la vivienda.',
    //           replacementOriginal: 'La parte arrendadora  no se hace responsable de pérdidas o hurtos en las habitaciones, o en la vivienda. A tal efecto, todas las habitaciones cuentan con cerradura privada. La parte arrendadora tampoco se hace responsables de los posibles daños que pudieran surgir en los dispositivos electrónicos en chufados a la red eléctrica de la vivienda.',
    //           insideId: 'opB'
    //         },
    //         {
    //           identifier: 'iddec16-extra-3',
    //           replacement: 'las llaves de acceso a la Habitación y a la Vivienda',
    //           replacementOriginal: 'las llaves de acceso a la Habitación y a la Vivienda',
    //           insideId: 'opC'
    //         }
    //       ],
    //       checked: true,
    //     },
    //     {
    //       label: 'caja de seguridad con clave secreta o llave',
    //       replacementOriginal: 'con la entrega de las llaves de acceso a la Vivienda',
    //       replacement: 'con la entrega de las llaves de acceso a la Vivienda',
    //       radioId: 'id-dec-16_opB',
    //       identifier: 'id-dec-16_opB',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec16-extra-1',
    //           replacement: 'con la entrega de las llaves de acceso a la Vivienda',
    //           replacementOriginal: 'con la entrega de las llaves de acceso a la Vivienda',
    //           insideId: 'opA'
    //         },
    //         {
    //           identifier: 'iddec16-extra-2',
    //           replacement: 'La parte arrendadora  no se hace responsable de pérdidas o hurtos en las habitaciones, o en la vivienda. A tal efecto, todas las habitaciones cuentan con caja de seguridad con clave secreta o cerradura privada. La parte arrendadora tampoco se hace responsables de los posibles daños que pudieran surgir en los dispositivos electrónicos en chufados a la red eléctrica de la vivienda.',
    //           replacementOriginal: 'La parte arrendadora  no se hace responsable de pérdidas o hurtos en las habitaciones, o en la vivienda. A tal efecto, todas las habitaciones cuentan con caja de seguridad con clave secreta o cerradura privada. La parte arrendadora tampoco se hace responsables de los posibles daños que pudieran surgir en los dispositivos electrónicos en chufados a la red eléctrica de la vivienda.',
    //           insideId: 'opB'
    //         },
    //         {
    //           identifier: 'iddec16-extra-3',
    //           replacement: 'las llaves de acceso a la Vivienda, y poner a su disposición la totalidad de la Habitación',
    //           replacementOriginal: 'las llaves de acceso a la Vivienda, y poner a su disposición la totalidad de la Habitación',
    //           insideId: 'opC'
    //         }
    //       ],
    //       checked: false,
    //     },
    //     {
    //       label: 'puerta con llave y caja de seguridad con clave secreta o llave',
    //       replacementOriginal: 'con la entrega de las llaves de acceso a la misma y a la Vivienda',
    //       replacement: 'con la entrega de las llaves de acceso a la misma y a la Vivienda',
    //       radioId: 'id-dec-16_opC',
    //       identifier: 'id-dec-16_opC',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec16-extra-1',
    //           replacement: 'con la entrega de las llaves de acceso a la misma y a la Vivienda',
    //           replacementOriginal: 'con la entrega de las llaves de acceso a la misma y a la Vivienda',
    //           insideId: 'opA'
    //         },
    //         {
    //           identifier: 'iddec16-extra-2',
    //           replacement: 'La parte arrendadora  no se hace responsable de pérdidas o hurtos en las habitaciones, o en la vivienda. A tal efecto, todas las habitaciones cuentan con cerradura privada y caja de seguridad con clave secreta o cerradura privada. La parte arrendadora tampoco se hace responsables de los posibles daños que pudieran surgir en los dispositivos electrónicos en chufados a la red eléctrica de la vivienda.',
    //           replacementOriginal: 'La parte arrendadora  no se hace responsable de pérdidas o hurtos en las habitaciones, o en la vivienda. A tal efecto, todas las habitaciones cuentan con cerradura privada y caja de seguridad con clave secreta o cerradura privada. La parte arrendadora tampoco se hace responsables de los posibles daños que pudieran surgir en los dispositivos electrónicos en chufados a la red eléctrica de la vivienda.',
    //           insideId: 'opB'
    //         },
    //         {
    //           identifier: 'iddec16-extra-3',
    //           replacement: 'las llaves de acceso a la Habitación y a la Vivienda',
    //           replacementOriginal: 'las llaves de acceso a la Habitación y a la Vivienda',
    //           insideId: 'opC'
    //         }
    //       ],
    //       checked: false,
    //     },
    //     {
    //       label: 'ninguna de las anteriores',
    //       replacementOriginal: 'con la entrega de las llaves de acceso a la Vivienda',
    //       replacement: 'con la entrega de las llaves de acceso a la Vivienda',
    //       radioId: 'id-dec-16_opD',
    //       identifier: 'id-dec-16_opD',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec16-extra-1',
    //           replacement: 'con la entrega de las llaves de acceso a la Vivienda',
    //           replacementOriginal: 'con la entrega de las llaves de acceso a la Vivienda',
    //           insideId: 'opA'
    //         },
    //         {
    //           identifier: 'iddec16-extra-2',
    //           replacement: 'La parte arrendadora no se hace responsables de los posibles daños que pudieran surgir en los dispositivos electrónicos en chufados a la red eléctrica de la vivienda.',
    //           replacementOriginal: 'La parte arrendadora no se hace responsables de los posibles daños que pudieran surgir en los dispositivos electrónicos en chufados a la red eléctrica de la vivienda.',
    //           insideId: 'opB'
    //         },
    //         {
    //           identifier: 'iddec16-extra-3',
    //           replacement: 'las llaves de acceso a la Vivienda, y poner a su disposición la totalidad de la Habitación',
    //           replacementOriginal: 'las llaves de acceso a la Vivienda, y poner a su disposición la totalidad de la Habitación',
    //           insideId: 'opC'
    //         }
    //       ],
    //       checked: false,
    //     }
    //   ]
    // },
    // {
    //   type: 'iRadioC',
    //   question: 'Uso que se le va a dar a la vivienda:',
    //   identifier: 'id-dec-17',
    //   wordToReplace: 'id-dec-17',
    //   defaultRadioId: 'id-dec-17_opA',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     // tslint:disable-next-line:max-line-length
    //     value: ''
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //     {
    //       identifier: 'iddec17-extra-1',
    //       wordToReplace: 'iddec17-extra-1',
    //       insideId: 'opA'
    //     },
    //     {
    //       identifier: 'iddec17-extra-2',
    //       wordToReplace: 'iddec17-extra-2',
    //       insideId: 'opB'
    //     },
    //     {
    //       identifier: 'iddec17-extra-3',
    //       wordToReplace: 'iddec17-extra-3',
    //       insideId: 'opC'
    //     },
    //     {
    //       identifier: 'iddec17-extra-5',
    //       wordToReplace: 'iddec17-extra-5',
    //       insideId: 'opE'
    //     },
    //     {
    //       identifier: 'iddec17-extra-6',
    //       wordToReplace: 'iddec17-extra-6',
    //       insideId: 'opF'
    //     },
    //   ],
    //   radios: [
    //     {
    //       label: 'vivienda habitual o residencia permanente',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'Que la PARTE ARRENDATARIA necesita una habitación en vivienda compartida, que cumplirá las funciones de vivienda habitual.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'Que la PARTE ARRENDATARIA necesita una habitación en vivienda compartida, que cumplirá las funciones de vivienda habitual.',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec17-extra-1',
    //           replacement: 'La habitación arrendada se destinará a residencia habitual y permanente de la parte ARRENDATARIA. Dicho uso será exclusivo, excluyéndose expresamente otros usos. Y, por ello, la parte ARRENDATARIA, deja constancia, a través del presente documento, que no tiene arrendada ninguna otra vivienda o habitación destinada al mismo fin, es decir, arrendada en concepto de vivienda habitual.',
    //           replacementOriginal: 'La habitación arrendada se destinará a residencia habitual y permanente de la parte ARRENDATARIA. Dicho uso será exclusivo, excluyéndose expresamente otros usos. Y, por ello, la parte ARRENDATARIA, deja constancia, a través del presente documento, que no tiene arrendada ninguna otra vivienda o habitación destinada al mismo fin, es decir, arrendada en concepto de vivienda habitual.',
    //           insideId: 'opA'
    //         },
    //         {
    //           identifier: 'iddec17-extra-2',
    //           replacement: 'La Habitación y las zonas comunes de la Vivienda estarán siempre en condiciones de habitabilidad.',
    //           replacementOriginal: 'La Habitación y las zonas comunes de la Vivienda estarán siempre en condiciones de habitabilidad.',
    //           insideId: 'opB'
    //         },
    //         {
    //           identifier: 'iddec17-extra-3',
    //           replacement: 'El tiempo de vigencia del presente contrato de arrendamiento será de: id-dec-20, contados desde el día id-dec-21 id-dec-22. Por lo que el contrato quedará extinguido iddec25-extra-1 id-dec-23',
    //           replacementOriginal: 'El tiempo de vigencia del presente contrato de arrendamiento será de: id-dec-20, contados desde el día id-dec-21 id-dec-22. Por lo que el contrato quedará extinguido iddec25-extra-1 id-dec-23',
    //           insideId: 'opC'
    //         },
    //         {
    //           identifier: 'iddec17-extra-5',
    //           replacement: 'DECIMOSEXTA.- ELEVACIÓN A PÚBLICO Y REGISTRO DE LA PROPIEDAD',
    //           replacementOriginal: 'DECIMOSEXTA.- ELEVACIÓN A PÚBLICO Y REGISTRO DE LA PROPIEDAD',
    //           insideId: 'opE'
    //         },
    //         {
    //           identifier: 'iddec17-extra-6',
    //           replacement: 'Cualquiera de las partes podrá elevar a documento público el presente contrato, así como inscribirlo en el Registro de la Propiedad en el que se encuentre inscrita la vivienda, sin necesidad de autorización de la otra parte. Los gastos generados deberán ser asumidos por la parte interesada. Se repartirían dichos gastos a partes iguales siempre que ambas partes estuvieren interesadas en elevar el contrato a documento público y proceder a su posterior inscripción en el Registro de la Propiedad.',
    //           replacementOriginal: 'Cualquiera de las partes podrá elevar a documento público el presente contrato, así como inscribirlo en el Registro de la Propiedad en el que se encuentre inscrita la vivienda, sin necesidad de autorización de la otra parte. Los gastos generados deberán ser asumidos por la parte interesada. Se repartirían dichos gastos a partes iguales siempre que ambas partes estuvieren interesadas en elevar el contrato a documento público y proceder a su posterior inscripción en el Registro de la Propiedad.',
    //           insideId: 'opF'
    //         },
    //       ],
    //       radioId: 'id-dec-17_opA',
    //       identifier: 'id-dec-17_opA',
    //       checked: true,
    //       subSteps: [

    //       ]
    //     },
    //     {
    //       label: 'uso turístico (vacaciones)',
    //       replacementOriginal: 'Que la PARTE ARRENDATARIA hará uso de una habitación como vivienda temporal por motivos de vacaciones, turismo u ocio. id-dec-17_opB_1',
    //       replacement: 'Que la PARTE ARRENDATARIA hará uso de una habitación como vivienda temporal por motivos de vacaciones, turismo u ocio. id-dec-17_opB_1',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec17-extra-1',
    //           replacement: 'La habitación arrendada será la vivienda temporal de la parte ARRENDATARIA. Dicho uso será por motivos de vacaciones, ocio, o , turismo. Y, por ello, la parte ARRENDATARIA, deja constancia, a través del presente documento, que la habitación arrendada no constituye su residencia habitual sino que cumple un uso de segunda residencia.',
    //           replacementOriginal: 'La habitación arrendada será la vivienda temporal de la parte ARRENDATARIA. Dicho uso será por motivos de vacaciones, ocio, o , turismo. Y, por ello, la parte ARRENDATARIA, deja constancia, a través del presente documento, que la habitación arrendada no constituye su residencia habitual sino que cumple un uso de segunda residencia.',
    //           insideId: 'opA'
    //         },
    //         {
    //           identifier: 'iddec17-extra-2',
    //           replacement: 'La Habitación y las zonas comunes de la Vivienda estarán siempre en condiciones de habitabilidad.',
    //           replacementOriginal: 'La Habitación y las zonas comunes de la Vivienda estarán siempre en condiciones de habitabilidad.',
    //           insideId: 'opB'
    //         },
    //         {
    //           identifier: 'iddec17-extra-3',
    //           replacement: 'El arrendamiento se pacta por la temporada de: id-dec-20, teniendo su comienzo el día id-dec-21 id-dec-22. Por lo que el contrato quedará extinguido iddec25-extra-1 id-dec-23',
    //           replacementOriginal: 'El arrendamiento se pacta por la temporada de: id-dec-20, teniendo su comienzo el día id-dec-21 id-dec-22. Por lo que el contrato quedará extinguido iddec25-extra-1 id-dec-23',
    //           insideId: 'opC'
    //         },
    //         {
    //           identifier: 'iddec17-extra-5',
    //           replacement: 'DECIMOSEXTA.- ELEVACIÓN A PÚBLICO',
    //           replacementOriginal: 'DECIMOSEXTA.- ELEVACIÓN A PÚBLICO',
    //           insideId: 'opE'
    //         },
    //         {
    //           identifier: 'iddec17-extra-6',
    //           replacement: 'Cualquiera de las partes podrá elevar a documento público el presente contrato, sin necesidad de autorización de la otra parte. Los gastos generados deberán ser asumidos por la parte interesada. Se repartirían dichos gastos a partes iguales siempre que ambas partes estuvieren interesadas en elevar el contrato a documento público.',
    //           replacementOriginal: 'Cualquiera de las partes podrá elevar a documento público el presente contrato, sin necesidad de autorización de la otra parte. Los gastos generados deberán ser asumidos por la parte interesada. Se repartirían dichos gastos a partes iguales siempre que ambas partes estuvieren interesadas en elevar el contrato a documento público.',
    //           insideId: 'opF'
    //         }
    //       ],
    //       radioId: 'id-dec-17_opB',
    //       identifier: 'id-dec-17_opB',
    //       checked: false,
    //       subSteps: [
    //         {
    //           type: 'iRadioC',
    //           question: '¿El arrendador está inscrito en el Registro de Turismo de la Comunidad Autónoma o entidad equivalente?:',
    //           identifier: 'id-dec-17_opB_1',
    //           wordToReplace: 'id-dec-17_opB_1',
    //           defaultRadioId: 'id-dec-17_opB_1_opA',
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             // tslint:disable-next-line:max-line-length
    //             value: 'Además de la norma común, que se ha señalado, Código Civil, la regulación de los alquileres de uso turístico, se han ido regulando por las normas que se han implementado por las distintas Comunidades Autónomas, que regulan los arrendamiento de aquellos pisos, apartamentos o casas que, amueblados y equipados en condiciones de uso inmediato, se comercializan y promocionan en canales de oferta turística, y que deben ofrecer una serie de servicios.<br>La mayoría de las Comunidades Autónomas han optado por la presentación de la declaración responsable como autorización inicial de funcionamiento de esta actividad (Madrid, Valencia, Andalucía o Aragón), no así en Cataluña, en la que las propietarias y propietarios deben presentar una comunicación previa al Ayuntamiento competente.'
    //           },
    //           replacement: '',
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'Sí',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'A través del presente contrato se pone en conocimiento de la PARTE ARRENDATARIA que, de acuerdo con la normativa autonómica, la vivienda se encuentra inscrita en el Registro de Turismo o en la entidad correspondiente de la Comunidad Autónoma: id-dec-17_opB_1_opA_1, cuyo Código de Inscripción es: id-dec-17_opB_1_opA_2',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'A través del presente contrato se pone en conocimiento de la PARTE ARRENDATARIA que, de acuerdo con la normativa autonómica, la vivienda se encuentra inscrita en el Registro de Turismo o en la entidad correspondiente de la Comunidad Autónoma: id-dec-17_opB_1_opA_1, cuyo Código de Inscripción es: id-dec-17_opB_1_opA_2',
    //               extraReplacements: [
    //               ],
    //               radioId: 'id-dec-17_opB_1_opA',
    //               identifier: 'id-dec-17_opB_1_opA',
    //               checked: true,
    //               subSteps: [
    //                 {
    //                   type: 'iRadioB',
    //                   subType: 'select',
    //                   question: 'Registro en el que está inscrito:',
    //                   identifier: 'id-dec-17_opB_1_opA_1',
    //                   wordToReplace: 'id-dec-17_opB_1_opA_1',
    //                   defaultRadioId: 'id-dec-17_opB_1_opA_1_opA',
    //                   indications: {
    //                     areIndications: false,
    //                     indicationsType: '',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: '',
    //                   },
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   radios: [
    //                     {
    //                       label: 'Andalucía',
    //                       replacementOriginal: 'Andalucía',
    //                       replacement: 'Andalucía',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opA',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opA',
    //                       extraReplacements: [],
    //                       checked: true,
    //                     },
    //                     {
    //                       label: 'Aragón',
    //                       replacementOriginal: 'Aragón',
    //                       replacement: 'Aragón',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opB',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opB',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'Principado de Asturias',
    //                       replacementOriginal: 'Principado de Asturias',
    //                       replacement: 'Principado de Asturias',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opC',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opC',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'Islas Baleares',
    //                       replacementOriginal: 'Islas Baleares',
    //                       replacement: 'Islas Baleares',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opD',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opD',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'Canarias',
    //                       replacementOriginal: 'Canarias',
    //                       replacement: 'Canarias',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opE',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opE',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'Cantabria',
    //                       replacementOriginal: 'Cantabria',
    //                       replacement: 'Cantabria',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opF',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opF',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'Castilla y León',
    //                       replacementOriginal: 'Castilla y León',
    //                       replacement: 'Castilla y León',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opG',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opG',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'Cataluña',
    //                       replacementOriginal: 'Cataluña',
    //                       replacement: 'Cataluña',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opH',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opH',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'Comunidad Valenciana',
    //                       replacementOriginal: 'Comunidad Valenciana',
    //                       replacement: 'Comunidad Valenciana',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opI',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opI',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'Galicia',
    //                       replacementOriginal: 'Galicia',
    //                       replacement: 'Galicia',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opJ',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opJ',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'La Rioja',
    //                       replacementOriginal: 'La Rioja',
    //                       replacement: 'La Rioja',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opK',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opK',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'Comunidad de Madrid',
    //                       replacementOriginal: 'Comunidad de Madrid',
    //                       replacement: 'Comunidad de Madrid',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opL',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opL',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'Murcia',
    //                       replacementOriginal: 'Murcia',
    //                       replacement: 'Murcia',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opM',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opM',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'Comunidad Foral de Navarra',
    //                       replacementOriginal: 'Comunidad Foral de Navarra',
    //                       replacement: 'Comunidad Foral de Navarra',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opN',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opN',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'País Vasco',
    //                       replacementOriginal: 'País Vasco',
    //                       replacement: 'País Vasco',
    //                       radioId: 'id-dec-17_opB_1_opA_1_opO',
    //                       identifier: 'id-dec-17_opB_1_opA_1_opO',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     }
    //                   ]
    //                 },
    //                 {
    //                   type: 'iText',
    //                   identifier: 'id-dec-17_opB_1_opA_2',
    //                   wordToReplace: 'id-dec-17_opB_1_opA_2',
    //                   replacement: '',
    //                   question: 'Número de inscripción en el Registro de Turismo o entidad autonómica equivalente:',
    //                   indications: {
    //                     areIndications: false,
    //                     indicationsType: '',
    //                     value: ''
    //                   },
    //                   placeholder: '',
    //                   mandatory: false,
    //                   isFocused: false
    //                 },
    //               ]
    //             },
    //             {
    //               label: 'No',
    //               replacementOriginal: '',
    //               replacement: '',
    //               extraReplacements: [
    //               ],
    //               radioId: 'id-dec-17_opB_1_opB',
    //               identifier: 'id-dec-17_opB_1_opB',
    //               checked: false,
    //               subSteps: [
    //               ]
    //             }
    //           ],
    //         },
    //       ]
    //     },
    //     {
    //       label: 'residencia temporal distinto al vacacional (ej. por motivos laborales)',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'Que los motivos por los que la ARRENDATARIA necesita una habitación la como vivienda temporal son: id-dec-17_opC_1.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'Que los motivos por los que la ARRENDATARIA necesita una habitación la como vivienda temporal son: id-dec-17_opC_1.',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec17-extra-1',
    //           replacement: 'La habitación arrendada será la vivienda temporal de la parte ARRENDATARIA. Dicho uso será por motivos de: id-dec-17_opC_1. Y, por ello, la parte ARRENDATARIA, deja constancia, a través del presente documento, que la habitación arrendada no constituye su residencia habitual sino que cumple un uso de segunda residencia.',
    //           replacementOriginal: 'La habitación arrendada será la vivienda temporal de la parte ARRENDATARIA. Dicho uso será por motivos de: id-dec-17_opC_1. Y, por ello, la parte ARRENDATARIA, deja constancia, a través del presente documento, que la habitación arrendada no constituye su residencia habitual sino que cumple un uso de segunda residencia.',
    //           insideId: 'opA'
    //         },
    //         {
    //           identifier: 'iddec17-extra-2',
    //           replacement: 'La Habitación y las zonas comunes de la Vivienda estarán siempre en condiciones de habitabilidad.',
    //           replacementOriginal: 'La Habitación y las zonas comunes de la Vivienda estarán siempre en condiciones de habitabilidad.',
    //           insideId: 'opB'
    //         },
    //         {
    //           identifier: 'iddec17-extra-3',
    //           replacement: 'El arrendamiento se pacta por la temporada de: id-dec-20, teniendo su comienzo el día id-dec-21 id-dec-22. Por lo que el contrato quedará extinguido iddec25-extra-1 id-dec-23',
    //           replacementOriginal: 'El arrendamiento se pacta por la temporada de: id-dec-20, teniendo su comienzo el día id-dec-21 id-dec-22. Por lo que el contrato quedará extinguido iddec25-extra-1 id-dec-23',
    //           insideId: 'opC'
    //         },
    //         {
    //           identifier: 'iddec17-extra-5',
    //           replacement: 'DECIMOSEXTA.- ELEVACIÓN A PÚBLICO Y REGISTRO DE LA PROPIEDAD',
    //           replacementOriginal: 'DECIMOSEXTA.- ELEVACIÓN A PÚBLICO Y REGISTRO DE LA PROPIEDAD',
    //           insideId: 'opE'
    //         },
    //         {
    //           identifier: 'iddec17-extra-6',
    //           replacement: 'Cualquiera de las partes podrá elevar a documento público el presente contrato, así como inscribirlo en el Registro de la Propiedad en el que se encuentre inscrita la vivienda, sin necesidad de autorización de la otra parte. Los gastos generados deberán ser asumidos por la parte interesada. Se repartirían dichos gastos a partes iguales siempre que ambas partes estuvieren interesadas en elevar el contrato a documento público y proceder a su posterior inscripción en el Registro de la Propiedad.',
    //           replacementOriginal: 'Cualquiera de las partes podrá elevar a documento público el presente contrato, así como inscribirlo en el Registro de la Propiedad en el que se encuentre inscrita la vivienda, sin necesidad de autorización de la otra parte. Los gastos generados deberán ser asumidos por la parte interesada. Se repartirían dichos gastos a partes iguales siempre que ambas partes estuvieren interesadas en elevar el contrato a documento público y proceder a su posterior inscripción en el Registro de la Propiedad.',
    //           insideId: 'opF'
    //         }
    //       ],
    //       radioId: 'id-dec-17_opC_1',
    //       identifier: 'id-dec-17_opC_1',
    //       checked: false,
    //       subSteps: [
    //         {
    //           type: 'iText',
    //           identifier: 'id-dec-17_opC_1',
    //           wordToReplace: 'id-dec-17_opC_1',
    //           replacement: '',
    //           question: 'Motivo del uso temporal de la habitación:',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             value: ''
    //           },
    //           placeholder: 'P Ej. estudios, traslado laboral',
    //           mandatory: true,
    //           isFocused: false
    //         }
    //       ]
    //     },
    //     {
    //       label: 'otro uso',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'Que los motivos por los que la ARRENDATARIA necesita una habitación  son: id-dec-17_opD_1.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'Que los motivos por los que la ARRENDATARIA necesita una habitación  son: id-dec-17_opD_1.',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec17-extra-1',
    //           replacement: 'La habitación arrendada será destinada de manera exclusiva al siguiente uso: id-dec-17_opD_1.',
    //           replacementOriginal: 'La habitación arrendada será destinada de manera exclusiva al siguiente uso: id-dec-17_opD_1.',
    //           insideId: 'opA'
    //         },
    //         {
    //           identifier: 'iddec17-extra-2',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opB'
    //         },
    //         {
    //           identifier: 'iddec17-extra-3',
    //           replacement: 'El arrendamiento se pacta por el plazo de: id-dec-20, a contar desde el día id-dec-21 id-dec-22. Por lo que el contrato quedará extinguido iddec25-extra-1 id-dec-23',
    //           replacementOriginal: 'El arrendamiento se pacta por el plazo de: id-dec-20, a contar desde el día id-dec-21 id-dec-22. Por lo que el contrato quedará extinguido iddec25-extra-1 id-dec-23',
    //           insideId: 'opC'
    //         },
    //         {
    //           identifier: 'iddec17-extra-5',
    //           replacement: 'DECIMOSEXTA.- ELEVACIÓN A PÚBLICO Y REGISTRO DE LA PROPIEDAD',
    //           replacementOriginal: 'DECIMOSEXTA.- ELEVACIÓN A PÚBLICO Y REGISTRO DE LA PROPIEDAD',
    //           insideId: 'opE'
    //         },
    //         {
    //           identifier: 'iddec17-extra-6',
    //           replacement: 'Cualquiera de las partes podrá elevar a documento público el presente contrato, así como inscribirlo en el Registro de la Propiedad en el que se encuentre inscrita la vivienda, sin necesidad de autorización de la otra parte. Los gastos generados deberán ser asumidos por la parte interesada. Se repartirían dichos gastos a partes iguales siempre que ambas partes estuvieren interesadas en elevar el contrato a documento público y proceder a su posterior inscripción en el Registro de la Propiedad.',
    //           replacementOriginal: 'Cualquiera de las partes podrá elevar a documento público el presente contrato, así como inscribirlo en el Registro de la Propiedad en el que se encuentre inscrita la vivienda, sin necesidad de autorización de la otra parte. Los gastos generados deberán ser asumidos por la parte interesada. Se repartirían dichos gastos a partes iguales siempre que ambas partes estuvieren interesadas en elevar el contrato a documento público y proceder a su posterior inscripción en el Registro de la Propiedad.',
    //           insideId: 'opF'
    //         }
    //       ],
    //       radioId: 'id-dec-17_opD_1',
    //       identifier: 'id-dec-17_opD_1',
    //       checked: false,
    //       subSteps: [
    //         {
    //           type: 'iText',
    //           identifier: 'id-dec-17_opD_1',
    //           wordToReplace: 'id-dec-17_opD_1',
    //           replacement: '',
    //           question: 'Uso que se le dará a la habitación:',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             value: ''
    //           },
    //           placeholder: 'P. ej. traslado a la localidad donde está la habitación por motivos laborales 15 días cada mes',
    //           mandatory: true,
    //           isFocused: false
    //         }
    //       ]
    //     },
    //   ],
    // },
    // {
    //   question: 'Existe alguna zona de la vivienda que el arrendatario (inquilino) de la habitación no podrá usar. Tenga en cuenta que ni la cocina, un baño y el salón pueden ser excluídos de uso. Además, tenga en cuenta que no es necesario incluir el resto de las habitaciones ya que esto se contempla en el contrato:',
    //   wordToReplace: 'id-unid-18',
    //   identifier: 'id-unid-18',
    //   placeholder: 'P. ej: El arrendatario no podrá usar el trastero ya que este es de uso personal del arrendador.',
    //   type: 'iText',
    //   replacement: '',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     value: '',
    //   },
    //   isEmpty: {
    //     prepend: 'ni las siguientes zonas de la misma:<br>',
    //     append: '',
    //   }
    // },
    // {
    //   type: 'iRadioB',
    //   question: 'Durante el tiempo que dure este contrato de alquiler, vivirá el arrendador (propietario), en la misma vivienda donde se alquila la habitación de este contrato',
    //   identifier: 'id-dec-19',
    //   wordToReplace: 'id-dec-19',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     value: '',
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //     {
    //       identifier: 'iddec19-extra-1',
    //       wordToReplace: 'iddec19-extra-1',
    //       insideId: 'opA'
    //     }
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí',
    //       replacementOriginal: 'uso y',
    //       replacement: 'uso y',
    //       radioId: 'id-dec-19_opA',
    //       identifier: 'id-dec-19_opA',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec19-extra-1',
    //           replacement: 'Manifiesta la parte ARRENDADORA que la vivienda también será su domicilio habitual, y por lo tanto, tendrá derecho al uso de la misma en las mismas condiciones que el ARRENDATARIO, exceptuando la habitación objeto de arrendamiento, que será de uso exclusivo de la parte Arrendataria. ',
    //           replacementOriginal: 'Manifiesta la parte ARRENDADORA que la vivienda también será su domicilio habitual, y por lo tanto, tendrá derecho al uso de la misma en las mismas condiciones que el ARRENDATARIO, exceptuando la habitación objeto de arrendamiento, que será de uso exclusivo de la parte Arrendataria. ',
    //           insideId: 'opA'
    //         }
    //       ],
    //       checked: true,
    //     },
    //     {
    //       label: 'No',
    //       replacementOriginal: '',
    //       replacement: '',
    //       radioId: 'id-dec-19_opB',
    //       identifier: 'id-dec-19_opB',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec19-extra-1',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opA'
    //         },
    //       ],
    //       checked: false,
    //     },
    //   ]
    // },
    // {
    //   question: 'Indique la duración del contrato de alquiler',
    //   wordToReplace: 'id-dec-20',
    //   identifier: 'id-dec-20',
    //   placeholder: 'P. ej: 15 dias, 6 meses, 1 año,..',
    //   type: 'iText',
    //   replacement: '',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'insideText',
    //     value: 'Desde la fecha de inicio del contrato de alquiler.',
    //   }
    // },
    // {
    //   question: 'Fecha de comienzo del alquiler de la habitación:',
    //   wordToReplace: 'id-dec-21',
    //   identifier: 'id-dec-21',
    //   placeholder: '',
    //   type: 'iDate',
    //   replacement: '',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     value: '',
    //   }
    // },
    // {
    //   question: 'Hora de comienzo del alquiler',
    //   wordToReplace: 'id-dec-22',
    //   identifier: 'id-dec-22',
    //   placeholder: 'P. ej: 09.00; 12.30',
    //   type: 'iText',
    //   replacement: '',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     value: '',
    //   },
    //   isEmpty: {
    //     prepend: ', a las ',
    //     append: ' horas',
    //   }
    // },
    // {
    //   question: 'Fecha de finalización del alquiler:',
    //   wordToReplace: 'id-dec-23',
    //   identifier: 'id-dec-23',
    //   placeholder: '',
    //   type: 'iDate',
    //   replacement: '',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     value: '',
    //   },
    //   isEmpty: {
    //     prepend: ', el día ',
    //     append: 'id-dec-24.',
    //   }
    // },
    // {
    //   question: 'Hora de finalización del alquiler:',
    //   wordToReplace: 'id-dec-24',
    //   identifier: 'id-dec-24',
    //   placeholder: 'P. ej: 09.00; 12.30',
    //   type: 'iText',
    //   replacement: '',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     value: '',
    //   },
    //   isEmpty: {
    //     prepend: ', a las ',
    //     append: ' horas',
    //   }
    // },
    // {
    //   type: 'iRadioC',
    //   question: '¿Al finalizar el contrato podrá este prorrogarse por períodos de prórroga sucesivos?',
    //   identifier: 'id-dec-25',
    //   wordToReplace: 'id-dec-25',
    //   defaultRadioId: 'id-dec-25_opA',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     // tslint:disable-next-line:max-line-length
    //     value: 'Una vez finalizado el contrato este puede terminar definitvamente o extenderse, según hayan acordado las partes.'
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //     {
    //       identifier: 'iddec25-extra-1',
    //       wordToReplace: 'iddec25-extra-1',
    //       insideId: 'opA'
    //     },
    //     {
    //       identifier: 'iddec25-extra-2',
    //       wordToReplace: 'iddec25-extra-2',
    //       insideId: 'opB'
    //     },
    //     {
    //       identifier: 'iddec25-extra-3',
    //       wordToReplace: 'iddec25-extra-3',
    //       insideId: 'opC'
    //     },
    //     {
    //       identifier: 'iddec25-extra-4',
    //       wordToReplace: 'iddec25-extra-4',
    //       insideId: 'opD'
    //     },
    //     {
    //       identifier: 'iddec25-extra-5',
    //       wordToReplace: 'iddec25-extra-5',
    //       insideId: 'opE'
    //     },
    //     {
    //       identifier: 'iddec25-extra-6',
    //       wordToReplace: 'iddec25-extra-6',
    //       insideId: 'opF'
    //     },
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'En caso de que llegare el último día del Contrato, si ninguna de las Partes hubiese notificado a la otra como mínimo con id-dec-25_opA_2 de antelación, su voluntad de no renovar el presente Contrato, se entenderá que este entra en períodos sucesivos de prórroga automática. Estos períodos de prórroga serán de: id-dec-25_opA_1 id-dec-25_opA_3. En cualquiera de sus prorrogas, si alguna de las partes quisiera finalizar el contrato, podrá avisar a través de los medios previstos, como mínimo con id-dec-25_opA_2 de antelación a la fecha de terminación de cualquiera de las prórrogas, su voluntad de no renovarlo.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'En caso de que llegare el último día del Contrato, si ninguna de las Partes hubiese notificado a la otra como mínimo con id-dec-25_opA_2 de antelación, su voluntad de no renovar el presente Contrato, se entenderá que este entra en períodos sucesivos de prórroga automática. Estos períodos de prórroga serán de: id-dec-25_opA_1 id-dec-25_opA_3. En cualquiera de sus prorrogas, si alguna de las partes quisiera finalizar el contrato, podrá avisar a través de los medios previstos, como mínimo con id-dec-25_opA_2 de antelación a la fecha de terminación de cualquiera de las prórrogas, su voluntad de no renovarlo.',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec25-extra-1',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opA'
    //         },
    //         {
    //           identifier: 'iddec25-extra-2',
    //           replacement: 'o de sus prórrogas',
    //           replacementOriginal: 'o de sus prórrogas',
    //           insideId: 'opB'
    //         },
    //         {
    //           identifier: 'iddec25-extra-3',
    //           replacement: 'y de sus prórrogas',
    //           replacementOriginal: 'y de sus prórrogas',
    //           insideId: 'opC'
    //         },
    //         {
    //           identifier: 'iddec25-extra-4',
    //           replacement: 'y de sus prórrogas',
    //           replacementOriginal: 'y de sus prórrogas',
    //           insideId: 'opD'
    //         },
    //         {
    //           identifier: 'iddec25-extra-5',
    //           replacement: 'o de la correspondiente prórroga o prórrogas',
    //           replacementOriginal: 'o de la correspondiente prórroga o prórrogas',
    //           insideId: 'opE'
    //         },
    //         {
    //           identifier: 'iddec25-extra-6',
    //           replacement: 'o prórroga',
    //           replacementOriginal: 'o prórroga',
    //           insideId: 'opF'
    //         }
    //       ],
    //       radioId: 'id-dec-25_opA',
    //       identifier: 'id-dec-25_opA',
    //       checked: true,
    //       subSteps: [
    //         {
    //           type: 'iText',
    //           identifier: 'id-dec-25_opA_1',
    //           wordToReplace: 'id-dec-25_opA_1',
    //           replacement: '',
    //           question: 'Duración de los períodos de prórroga:',
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'insideText',
    //             value: 'Indique aquí la duración de los períodos de prórroga que entrarán en vigor automáticamente transcurrido el plazo de duración del alquiler'
    //           },
    //           placeholder: 'P. ej. 15 días; 6 meses; 1 año',
    //           mandatory: true,
    //           isFocused: false
    //         },
    //         {
    //           type: 'iText',
    //           identifier: 'id-dec-25_opA_2',
    //           wordToReplace: 'id-dec-25_opA_2',
    //           replacement: '',
    //           question: '¿Con cuánto tiempo de antelación deberán avisarse el arrendador (propietario) y el arrendatario (inquilino) si cuando finalice el contrato, alguno de ellos decide que no quiere que el contrato se prorrogue?',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             value: ''
    //           },
    //           placeholder: 'P. ej. 2 días; 1 semana; 30 días',
    //           mandatory: true,
    //           isFocused: false
    //         },
    //         {
    //           type: 'iRadioC',
    //           question: 'Las prórrogas del contrato:',
    //           identifier: 'id-dec-25_opA_3',
    //           wordToReplace: 'id-dec-25_opA_3',
    //           defaultRadioId: 'id-dec-25_opA_3_opA',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           replacement: '',
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'solo podrán hacerse hasta un máximo de tiempo determinado (ej. máximo 6 meses, 5 años)',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'y se prolongarán de forma sucesiva hasta alcanzar: id-dec-25_opA_3_opA_1. Alcanzado este límite, el Contrato terminará de forma automática, es decir, sin necesidad de requerimiento alguno.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'y se prolongarán de forma sucesiva hasta alcanzar: id-dec-25_opA_3_opA_1. Alcanzado este límite, el Contrato terminará de forma automática, es decir, sin necesidad de requerimiento alguno.',
    //               extraReplacements: [
    //               ],
    //               radioId: 'id-dec-25_opA_3_opA',
    //               identifier: 'id-dec-25_opA_3_opA',
    //               checked: true,
    //               subSteps: [
    //                 {
    //                   type: 'iText',
    //                   identifier: 'id-dec-25_opA_3_opA_1',
    //                   wordToReplace: 'id-dec-25_opA_3_opA_1',
    //                   replacement: '',
    //                   question: 'Máximo de tiempo por el que podrán aplicarse las prórrogas del contrato:',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'insideText',
    //                     value: 'Una vez alcanzado este tiempo máximo, el contrato de arrendamiento de habitación finalizará automáticamente.'
    //                   },
    //                   placeholder: 'P. ej. 6 meses; 5 año ',
    //                   mandatory: true,
    //                   isFocused: false
    //                 },
    //               ]
    //             },
    //             {
    //               label: 'No',
    //               replacementOriginal: '',
    //               replacement: '',
    //               extraReplacements: [

    //               ],
    //               radioId: 'id-dec-25_opA_3_opB',
    //               identifier: 'id-dec-25_opA_3_opB',
    //               checked: false,
    //               subSteps: [
    //               ]
    //             }
    //           ],
    //         },
    //       ]
    //     },
    //     {
    //       label: 'No',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'Es contrato no quedará sujeto a otras prórrogas adicionales, pero llegado el momento de vencimiento del contrato, las partes podrán pactar lo que a su derecho convenga.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'Es contrato no quedará sujeto a otras prórrogas adicionales, pero llegado el momento de vencimiento del contrato, las partes podrán pactar lo que a su derecho convenga.',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec25-extra-1',
    //           replacement: 'de forma automática sin necesidad de requerimiento alguno',
    //           replacementOriginal: 'de forma automática sin necesidad de requerimiento alguno',
    //           insideId: 'opA'
    //         },
    //         {
    //           identifier: 'iddec25-extra-2',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opB'
    //         },
    //         {
    //           identifier: 'iddec25-extra-3',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opC'
    //         },
    //         {
    //           identifier: 'iddec25-extra-4',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opD'
    //         },
    //         {
    //           identifier: 'iddec25-extra-5',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opE'
    //         },
    //         {
    //           identifier: 'iddec25-extra-6',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opF'
    //         }
    //       ],
    //       radioId: 'id-dec-25_opB',
    //       identifier: 'id-dec-25_opB',
    //       checked: false,
    //       subSteps: [
    //       ]
    //     },
    //   ],
    // },
    // {
    //   type: 'iRadioC',
    //   question: 'Tanto el arrendador (propietario) como el arrendatario (inquilino) podrán finalizar el contrato de manera anticipada sin pagar indemnización o multa',
    //   identifier: 'id-dec-26',
    //   wordToReplace: 'id-dec-26',
    //   defaultRadioId: 'id-dec-26_opA',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     // tslint:disable-next-line:max-line-length
    //     value: 'Si el desistimiento está previsto en el contrato, las partes no deberán pagar a la otra una indemnización o una multa por darlo por finalizado anticipadamente. En cambio, si este desistimiento no está previsto o se realiza sin respetar las condiciones previstas en el contrato, las partes deberán pagar a la otra una indemnización o multa por dar por finalizado el contrato de forma anticipada.'
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'Cualquiera de las partes podrán desistir anticipadamente del contrato, en cualquier momento antes de su finalización. En ese caso, la parte que desee desistir del contrato deberá notificar de forma expresa y escrita, con una antelación mínima de: id-dec-26_opA_1 su deseo de finalizar el contrato. Este desistimiento no generará ningún tipo de indemnización o penalización. <br>En el caso de que se resolviera el contrato de forma unilateral por la parte ARRENDATARIA, ésta deberá abonar a la parte ARRENDADORA todos aquellos gastos generados y no abonados hasta el momento de finalización del contrato. En ese caso, la parte ARRENDATARIA que desee desistir del contrato deberá notificar de forma expresa y escrita, con una antelación mínima de: id-dec-26_opA_1 si bien, en caso de incumplimiento este desistimiento podría generar algún tipo de indemnización o penalización',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'Cualquiera de las partes podrán desistir anticipadamente del contrato, en cualquier momento antes de su finalización. En ese caso, la parte que desee desistir del contrato deberá notificar de forma expresa y escrita, con una antelación mínima de: id-dec-26_opA_1 su deseo de finalizar el contrato. Este desistimiento no generará ningún tipo de indemnización o penalización. <br>En el caso de que se resolviera el contrato de forma unilateral por la parte ARRENDATARIA, ésta deberá abonar a la parte ARRENDADORA todos aquellos gastos generados y no abonados hasta el momento de finalización del contrato. En ese caso, la parte ARRENDATARIA que desee desistir del contrato deberá notificar de forma expresa y escrita, con una antelación mínima de: id-dec-26_opA_1 si bien, en caso de incumplimiento este desistimiento podría generar algún tipo de indemnización o penalización',
    //       extraReplacements: [
    //       ],
    //       radioId: 'id-dec-26_opA',
    //       identifier: 'id-dec-26_opA',
    //       checked: true,
    //       subSteps: [
    //         {
    //           type: 'iText',
    //           identifier: 'id-dec-26_opA_1',
    //           wordToReplace: 'id-dec-26_opA_1',
    //           replacement: '',
    //           question: '¿Con cuánto tiempo se deberá avisar por alguna de las partes de la intención de desistir del contrato a la otra parte?',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             value: ''
    //           },
    //           placeholder: 'P. ej. 15 días; 6 meses; 1 año',
    //           mandatory: true,
    //           isFocused: false
    //         }
    //       ]
    //     },
    //     {
    //       label: 'Sí, una vez que haya pasado un período mínimo desde que se inició el alquiler',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'Una vez haya transcurrido un tiempo de: id-dec-26_opB_1, cualquiera de las partes podrá desistir anticipadamente del contrato, en cualquier momento antes de su finalización. En ese caso, la parte que desee desistir del contrato deberá notificar de forma expresa y escrita, con una antelación mínima de.: id-dec-26_opB_2. Este desistimiento no generará ningún tipo de indemnización o penalización.<br> En el caso de que se resolviera el contrato de forma unilateral por la parte ARRENDATARIA, ésta deberá abonar a la parte ARRENDADORA todos aquellos gastos generados y no abonados hasta el momento de finalización del contrato. En ese caso, la parte ARRENDATARIA que desee desistir del contrato deberá notificar de forma expresa y escrita, con una antelación mínima de: id-dec-26_opB_2 si bien, en caso de incumplimiento este desistimiento podría generar algún tipo de indemnización o penalización',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'Una vez haya transcurrido un tiempo de: id-dec-26_opB_1, cualquiera de las partes podrá desistir anticipadamente del contrato, en cualquier momento antes de su finalización. En ese caso, la parte que desee desistir del contrato deberá notificar de forma expresa y escrita, con una antelación mínima de.: id-dec-26_opB_2. Este desistimiento no generará ningún tipo de indemnización o penalización.<br> En el caso de que se resolviera el contrato de forma unilateral por la parte ARRENDATARIA, ésta deberá abonar a la parte ARRENDADORA todos aquellos gastos generados y no abonados hasta el momento de finalización del contrato. En ese caso, la parte ARRENDATARIA que desee desistir del contrato deberá notificar de forma expresa y escrita, con una antelación mínima de: id-dec-26_opB_2 si bien, en caso de incumplimiento este desistimiento podría generar algún tipo de indemnización o penalización',
    //       extraReplacements: [
    //       ],
    //       radioId: 'id-dec-26_opB',
    //       identifier: 'id-dec-26_opB',
    //       checked: false,
    //       subSteps: [
    //         {
    //           type: 'iText',
    //           identifier: 'id-dec-26_opB_1',
    //           wordToReplace: 'id-dec-26_opB_1',
    //           replacement: '',
    //           question: 'Período mínimo desde que se inicia el alquiler que debe haber pasado para que las partes puedan pedir a la otra el desistimiento del contrato de alquiler',
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             value: 'Tenga en cuenta que el periodo mínimo debe ser acorde a la duración del contrato, así si este dura 3 meses, el período mínimo de desistimiento podría ser 1 mes'
    //           },
    //           placeholder: 'P. ej. 15 días; 6 meses; 1 año',
    //           mandatory: true,
    //           isFocused: false
    //         },
    //         {
    //           type: 'iText',
    //           identifier: 'id-dec-26_opB_2',
    //           wordToReplace: 'id-dec-26_opB_2',
    //           replacement: '',
    //           question: '¿Con cuánto tiempo se deberá avisar por alguna de las partes de la intención de desistir del contrato a la otra parte?',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             value: ''
    //           },
    //           placeholder: 'P. ej. 15 días; 6 meses; 1 año',
    //           mandatory: true,
    //           isFocused: false
    //         }
    //       ]
    //     },
    //     {
    //       label: 'No',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'El desistimiento unilateral del contrato por alguna de las partes antes de su finalización conllevará el pago a la otra parte de indemnización correspondiente al iddec26opC1-precioAletras por ciento ({{id-dec-26_opC_1}} %) de la renta total del arrendamiento que faltase por abonar hasta la finalización del contrato. id-dec-26_opC_2',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'El desistimiento unilateral del contrato por alguna de las partes antes de su finalización conllevará el pago a la otra parte de indemnización correspondiente al iddec26opC1-precioAletras por ciento ({{id-dec-26_opC_1}} %) de la renta total del arrendamiento que faltase por abonar hasta la finalización del contrato. id-dec-26_opC_2',
    //       extraReplacements: [
    //       ],
    //       radioId: 'id-dec-26_opC',
    //       identifier: 'id-dec-26_opC',
    //       checked: false,
    //       subSteps: [
    //         {
    //           type: 'iNumber',
    //           identifier: 'id-dec-26_opC_1',
    //           wordToReplace: 'id-dec-26_opC_1',
    //           replacement: '',
    //           question: 'Multa a pagar por la parte que pida a la otra la finalización anticipada del contrato, en porcentaje sobre el valor total de la renta):',
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             value: 'Esta multa debe ser expresada en porcentaje sobre el valor de la renta total del alquiler que quede por pagar. Por ejemplo, si en este contrato se establece una renta o alquiler de 200 euros al mes, y una de las partes pide a la otra la finalización del contrato 2 meses antes de la fecha prevista, la renta total del alquiler que queda por pagar es igual a 400 euros. Así, si en esta pregunta se indica una multa del 50%, la parte que pida la finalización anticipada del contrato deberá pagar a la otra una multa igual a 200 euros.'
    //           },
    //           placeholder: 'P. ej. Numero menor que 100',
    //           mandatory: true,
    //           isFocused: false,
    //           rules: [
    //             {
    //               condition: false,
    //               rulename: 'extraReplacementToCharacter',
    //               identifier: 'iddec26opC1-precioAletras',
    //               wordToReplace: 'iddec26opC1-precioAletras',
    //               replacement: ''
    //             }
    //           ],
    //         },
    //         {
    //           type: 'iText',
    //           identifier: 'id-dec-26_opC_2',
    //           wordToReplace: 'id-dec-26_opC_2',
    //           replacement: '',
    //           question: '¿Con cuánto tiempo se deberá avisar por alguna de las partes de la intención de desistir del contrato a la otra parte?',
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             value: 'Si no se respeta este plazo de preaviso, la parte que desista del contrato deberá pagar a la otra una indemnización por daños y perjuicios, además de la multa indicada en la pregunta anterior.'
    //           },
    //           placeholder: 'P. ej. 15 días; 6 meses; 1 año',
    //           mandatory: true,
    //           isFocused: false,
    //           isEmpty: {
    //             prepend: 'En caso de desistimiento del contrato por cualquiera de las partes incumpliendo el preaviso pactado de: ',
    //             append: 'de antelación, conllevará el pago de una indemnización por los daños y perjuicios generados.',
    //           }
    //         }
    //       ]
    //     },
    //   ],
    // },
    // {
    //   type: 'iRadioC',
    //   question: 'El precio del alquiler se establece:',
    //   identifier: 'id-dec-27',
    //   wordToReplace: 'id-dec-27',
    //   defaultRadioId: 'id-dec-27_opA',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     // tslint:disable-next-line:max-line-length
    //     value: ''
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'de forma periódica (día, mes, ...)',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'Las Partes han acordado que la renta será de iddec27opA2-precioAletras euros (id-dec-27_opA_2 €) por cada período siguiente: id-dec-27_opA_1. La obligación de la PARTE ARRENDATARIA de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br> id-dec-28 <br> id-dec-27_opA_3 <br> Las partes acuerdan que el pago de la renta será id-dec-29 <br> En impago de la renta por la parte arrendataria será causa de resolución del contrato. En ese caso, la parte arrendataria deberá restituir en perfecto estado la habitación arrendada a la parte arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'Las Partes han acordado que la renta será de iddec27opA2-precioAletras (id-dec-27_opA_2 €) por cada período siguiente: id-dec-27_opA_1. La obligación de la PARTE ARRENDATARIA de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br> id-dec-28 <br> id-dec-27_opA_3 <br> Las partes acuerdan que el pago de la renta será id-dec-29 <br> En impago de la renta por la parte arrendataria será causa de resolución del contrato. En ese caso, la parte arrendataria deberá restituir en perfecto estado la habitación arrendada a la parte arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
    //       extraReplacements: [
    //       ],
    //       radioId: 'id-dec-27_opA',
    //       identifier: 'id-dec-27_opA',
    //       checked: true,
    //       subSteps: [
    //         {
    //           type: 'iText',
    //           identifier: 'id-dec-27_opA_1',
    //           wordToReplace: 'id-dec-27_opA_1',
    //           replacement: '',
    //           question: '¿Con que periodicidad se establece el contrato?',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             value: ''
    //           },
    //           placeholder: 'P. ej. por día, por mes, por año, por semestre, por hora',
    //           mandatory: true,
    //           isFocused: false
    //         },
    //         {
    //           type: 'iNumber',
    //           identifier: 'id-dec-27_opA_2',
    //           wordToReplace: 'id-dec-27_opA_2',
    //           replacement: '',
    //           question: 'Importe que se paga por la periodicidad escogida (por día, por mes,...)',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             value: ''
    //           },
    //           placeholder: 'Escriba un número',
    //           mandatory: true,
    //           isFocused: false,
    //           rules: [
    //             {
    //               condition: false,
    //               rulename: 'extraReplacementToCharacter',
    //               identifier: 'iddec27opA2-precioAletras',
    //               wordToReplace: 'iddec27opA2-precioAletras',
    //               replacement: ''
    //             }
    //           ],
    //         },
    //         {
    //           type: 'iRadioC',
    //           question: '¿Quién asumirá los gastos generales u ordinarios (cuotas) de la comunidad de la que forma parte la vivienda?:',
    //           identifier: 'id-dec-27_opA_3',
    //           wordToReplace: 'id-dec-27_opA_3',
    //           defaultRadioId: 'id-dec-27_opA_3_opA',
    //           replacement: '',
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'cada mes, dentro de los primeros 7 días del mes',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'El pago de la Renta fijada se abonará por meses anticipados entre los cinco (5) primeros días de cada mes.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'El pago de la Renta fijada se abonará por meses anticipados entre los cinco (5) primeros días de cada mes.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-27_opA_3_opA',
    //               identifier: 'id-dec-27_opA_3_opA',
    //               checked: true,
    //               subSteps: []
    //             },
    //             {
    //               label: 'de otra manera',
    //               replacementOriginal: 'El pago de la renta se realizará de la siguiente manera: <br> id-dec-27_opA_3_opB_1',
    //               replacement: '',
    //               extraReplacements: [],
    //               radioId: 'id-dec-27_opA_3_opB',
    //               identifier: 'id-dec-27_opA_3_opB',
    //               checked: false,
    //               subSteps: [
    //                 {
    //                   question: 'Manera en la que se efectua el pago:',
    //                   placeholder: 'Ej. durante los primeros 15 días del mes, cada 6 meses...',
    //                   wordToReplace: 'id-dec-27_opA_3_opB_1',
    //                   identifier: 'id-dec-27_opA_3_opB_1',
    //                   type: 'iText',
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   indications: {
    //                     areIndications: false,
    //                     indicationsType: '',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: ''
    //                   },
    //                   rules: [
    //                   ],
    //                 }
    //               ]
    //             }
    //           ],
    //         },
    //       ]
    //     },
    //     {
    //       label: 'por un importe total fijo, para toda la duración del alquiler',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'La renta total pactada por las Partes es de iddec27opB1-precioAletras euros (id-dec-27_opB_1 €). La obligación de la PARTE ARRENDATARIA de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br> id-dec-28 <br> id-dec-27_opB_2',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'La renta total pactada por las Partes es de iddec27opB1-precioAletras euros (id-dec-27_opB_1 €). La obligación de la PARTE ARRENDATARIA de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br> id-dec-28 <br> id-dec-27_opB_2',
    //       extraReplacements: [
    //       ],
    //       radioId: 'id-dec-27_opB',
    //       identifier: 'id-dec-27_opB',
    //       checked: false,
    //       subSteps: [
    //         {
    //           type: 'iNumber',
    //           identifier: 'id-dec-27_opB_1',
    //           wordToReplace: 'id-dec-27_opB_1',
    //           replacement: '',
    //           question: 'Importe total del alquiler:',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             value: ''
    //           },
    //           placeholder: 'Escriba un número',
    //           mandatory: true,
    //           isFocused: false,
    //           rules: [
    //             {
    //               condition: false,
    //               rulename: 'extraReplacementToCharacter',
    //               identifier: 'iddec27opB1-precioAletras',
    //               wordToReplace: 'iddec27opB1-precioAletras',
    //               replacement: ''
    //             }
    //           ]
    //         },
    //         {
    //           type: 'iRadioC',
    //           question: 'En qué momento se va a realizar el pago del alquiler',
    //           identifier: 'id-dec-27_opB_2',
    //           wordToReplace: 'id-dec-27_opB_2',
    //           defaultRadioId: 'id-dec-27_opB_2_opA',
    //           replacement: '',
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             value: 'Seleccione aquí la opción que corresponda al momento en el que se realiza o realizará el pago del importe del alquiler establecido en la pregunta anterior: en su totalidad al momento de firmar el contrato; en su totalidad en una fecha posterior; una parte al firmar el contrato y otra en una fecha posterior; una parte al inicio del contrato de arrendamiento y otra en una fecha posterior; o de otra manera (por ejemplo, en varios pagos periódicos).'
    //           },
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'al firmar el contrato',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'El pago de la renta se realiza de forma completa al momento de firmar el presente Contrato, recibiendo la PARTE ARRENDADORA en este acto su importe a su entera satisfacción, y constituyendo el presente documento la más formal y fiel carta de pago.<br> El pago se realizará id-dec-29',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'El pago de la renta se realiza de forma completa al momento de firmar el presente Contrato, recibiendo la PARTE ARRENDADORA en este acto su importe a su entera satisfacción, y constituyendo el presente documento la más formal y fiel carta de pago.<br> El pago se realizará id-dec-29',
    //               extraReplacements: [],
    //               radioId: 'id-dec-27_opB_2_opA',
    //               identifier: 'id-dec-27_opB_2_opA',
    //               checked: true,
    //               subSteps: []
    //             },
    //             {
    //               label: 'toda la cantidad en una fecha posterior escogida',
    //               replacementOriginal: 'El pago de la renta se realizará de forma completa a más tardar el día id-dec-27_opB_2_opB_1. <br> El pago se realizará id-dec-29 <br> En impago de la renta por la parte arrendataria será causa de resolución del contrato. En ese caso, la parte arrendataria deberá restituir en perfecto estado la habitación arrendada a la parte arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
    //               replacement: '',
    //               extraReplacements: [],
    //               radioId: 'id-dec-27_opB_2_opB',
    //               identifier: 'id-dec-27_opB_2_opB',
    //               checked: false,
    //               subSteps: [
    //                 {
    //                   question: 'Fecha en la que se realizará el pago del alquiler:',
    //                   placeholder: '',
    //                   wordToReplace: 'id-dec-27_opB_2_opB_1',
    //                   identifier: 'id-dec-27_opB_2_opB_1',
    //                   type: 'iDate',
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   indications: {
    //                     areIndications: false,
    //                     indicationsType: '',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: ''
    //                   },
    //                   rules: [
    //                   ],
    //                 }
    //               ]
    //             },
    //             {
    //               label: 'una parte al firmar el contrato y otra en una fecha posterior escogida',
    //               replacementOriginal: 'El pago de la renta se realiza de forma parcial al momento de firmar el presente Contrato, recibiendo en este acto la PARTE ARRENDADORA el importe de iddec27opB2opC-precioAletras euros (id-dec-27_opB_2_opC_1 €), de lo cual este documento constituye la más formal y fiel carta de pago. El resto de la renta será pagado por la PARTE ARRENDATARIA a más tardar el día id-dec-27_opB_2_opC_2. <br> El pago se realizará id-dec-29 <br> En impago de la renta por la parte arrendataria será causa de resolución del contrato. En ese caso, la parte arrendataria deberá restituir en perfecto estado la habitación arrendada a la parte arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
    //               replacement: 'El pago de la renta se realiza de forma parcial al momento de firmar el presente Contrato, recibiendo en este acto la PARTE ARRENDADORA el importe de iddec27opB2opC-precioAletras euros (id-dec-27_opB_2_opC_1 €), de lo cual este documento constituye la más formal y fiel carta de pago. El resto de la renta será pagado por la PARTE ARRENDATARIA a más tardar el día id-dec-27_opB_2_opC_2. <br> El pago se realizará id-dec-29 <br> En impago de la renta por la parte arrendataria será causa de resolución del contrato. En ese caso, la parte arrendataria deberá restituir en perfecto estado la habitación arrendada a la parte arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-27_opB_2_opC',
    //               identifier: 'id-dec-27_opB_2_opC',
    //               checked: false,
    //               subSteps: [
    //                 {
    //                   type: 'iNumber',
    //                   identifier: 'id-dec-27_opB_2_opC_1',
    //                   wordToReplace: 'id-dec-27_opB_2_opC_1',
    //                   replacement: '',
    //                   question: 'Importe (en euros) de la parte  que el arrendatario (inquilino) paga al firmar este contrato:',
    //                   indications: {
    //                     areIndications: false,
    //                     indicationsType: '',
    //                     value: ''
    //                   },
    //                   placeholder: 'Escriba un número',
    //                   mandatory: true,
    //                   isFocused: false,
    //                   rules: [
    //                     {
    //                       condition: false,
    //                       rulename: 'extraReplacementToCharacter',
    //                       identifier: 'iddec27opB2opC1-precioAletras',
    //                       wordToReplace: 'iddec27opB2opC1-precioAletras',
    //                       replacement: ''
    //                     }
    //                   ]
    //                 },
    //                 {
    //                   question: 'Fecha en la que se realizará el pago de la parte del alquiler que quede por pagar:',
    //                   placeholder: '',
    //                   wordToReplace: 'id-dec-27_opB_2_opC_2',
    //                   identifier: 'id-dec-27_opB_2_opC_2',
    //                   type: 'iDate',
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   indications: {
    //                     areIndications: false,
    //                     indicationsType: '',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: ''
    //                   },
    //                   rules: [
    //                   ],
    //                 }
    //               ]
    //             },
    //             {
    //               label: 'una parte al comienzo del alquiler y otra en una fecha posterior',
    //               replacementOriginal: 'El pago de la renta se realizará de forma fraccionada, abonando el importe de iddec27opB2opD1.precioAletras (id-dec-27_opB_2_opD_1 €) en el momento de la puesta a disposición de la Habitación a la PARTE ARRENDATARIA para su uso y disfrute. El resto de la renta será pagado por la PARTE ARRENDATARIA a más tardar el día id-dec-27_opB_2_opD_2. <br> El pago se realizará id-dec-29 <br> En impago de la renta por la parte arrendataria será causa de resolución del contrato. En ese caso, la parte arrendataria deberá restituir en perfecto estado la habitación arrendada a la parte arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
    //               replacement: 'El pago de la renta se realizará de forma fraccionada, abonando el importe de iddec27opB2opD1.precioAletras (id-dec-27_opB_2_opD_1 €) en el momento de la puesta a disposición de la Habitación a la PARTE ARRENDATARIA para su uso y disfrute. El resto de la renta será pagado por la PARTE ARRENDATARIA a más tardar el día id-dec-27_opB_2_opD_2. <br> El pago se realizará id-dec-29 <br> En impago de la renta por la parte arrendataria será causa de resolución del contrato. En ese caso, la parte arrendataria deberá restituir en perfecto estado la habitación arrendada a la parte arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-27_opB_2_opD',
    //               identifier: 'id-dec-27_opB_2_opD',
    //               checked: false,
    //               subSteps: [
    //                 {
    //                   type: 'iNumber',
    //                   identifier: 'id-dec-27_opB_2_opD_1',
    //                   wordToReplace: 'id-dec-27_opB_2_opD_1',
    //                   replacement: '',
    //                   question: 'Importe (en euros) de la parte del alquiler que el arrendatario (inquilino) pagará al comienzo del alquiler:',
    //                   indications: {
    //                     areIndications: false,
    //                     indicationsType: '',
    //                     value: ''
    //                   },
    //                   placeholder: 'Escriba un número',
    //                   mandatory: true,
    //                   isFocused: false,
    //                   rules: [
    //                     {
    //                       condition: false,
    //                       rulename: 'extraReplacementToCharacter',
    //                       identifier: 'iddec27opB2opD1-precioAletras',
    //                       wordToReplace: 'iddec27opB2opD1-precioAletras',
    //                       replacement: ''
    //                     }
    //                   ]
    //                 },
    //                 {
    //                   question: 'Fecha en la que se realizará el pago de la parte del alquiler que quede por pagar:',
    //                   placeholder: '',
    //                   wordToReplace: 'id-dec-27_opB_2_opD_2',
    //                   identifier: 'id-dec-27_opB_2_opD_2',
    //                   type: 'iDate',
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   indications: {
    //                     areIndications: false,
    //                     indicationsType: '',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: ''
    //                   },
    //                   rules: [
    //                   ],
    //                 }
    //               ]
    //             },
    //             {
    //               label: 'de otra manera',
    //               replacementOriginal: 'El pago de la renta se realizará de la siguiente manera: id-dec-27_opB_2_opE_1. <br> El pago se realizará id-dec-29 <br> En impago de la renta por la parte arrendataria será causa de resolución del contrato. En ese caso, la parte arrendataria deberá restituir en perfecto estado la habitación arrendada a la parte arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
    //               replacement: 'El pago de la renta se realizará de la siguiente manera: id-dec-27_opB_2_opE_1. <br> El pago se realizará id-dec-29 <br> En impago de la renta por la parte arrendataria será causa de resolución del contrato. En ese caso, la parte arrendataria deberá restituir en perfecto estado la habitación arrendada a la parte arrendadora, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-27_opB_2_opE',
    //               identifier: 'id-dec-27_opB_2_opE',
    //               checked: false,
    //               subSteps: [
    //                 {
    //                   type: 'iText',
    //                   identifier: 'id-dec-27_opB_2_opE_1',
    //                   wordToReplace: 'id-dec-27_opB_2_opE_1',
    //                   replacement: '',
    //                   question: 'Manera en que se realizará el pago del alquiler:',
    //                   indications: {
    //                     areIndications: false,
    //                     indicationsType: '',
    //                     value: ''
    //                   },
    //                   placeholder: '',
    //                   mandatory: true,
    //                   isFocused: false,
    //                   rules: [
    //                   ]
    //                 }
    //               ]
    //             }
    //           ],
    //         },
    //       ]
    //     }
    //   ],
    // },
    // {
    //   type: 'iRadioB',
    //   question: '¿El precio del alquiler incluye IVA u otro impuesto similar?',
    //   identifier: 'id-dec-28',
    //   wordToReplace: 'id-dec-28',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     value: '',
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí',
    //       replacementOriginal: 'El precio pactado de renta incluye el IVA (Impuesto sobre el Valor Añadido). Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que la renta incluye Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación.',
    //       replacement: 'El precio pactado de renta incluye el IVA (Impuesto sobre el Valor Añadido). Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que la renta incluye Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación.',
    //       radioId: 'id-dec-28_opA',
    //       identifier: 'id-dec-28_opA',
    //       extraReplacements: [

    //       ],
    //       checked: true,
    //     },
    //     {
    //       label: 'No',
    //       replacementOriginal: 'Al precio pactado de renta habrá que añadirle el porcentaje correspondiente al IVA (Impuesto sobre el Valor Añadido), que corresponderá abonar a la parte ARRENDATARIA. Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que al precio de renta se verá incrementado por el porcentaje correspondiente Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación impuesto por la legislación vigente.',
    //       replacement: 'Al precio pactado de renta habrá que añadirle el porcentaje correspondiente al IVA (Impuesto sobre el Valor Añadido), que corresponderá abonar a la parte ARRENDATARIA. Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que al precio de renta se verá incrementado por el porcentaje correspondiente Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación impuesto por la legislación vigente.',
    //       radioId: 'id-dec-28_opB',
    //       identifier: 'id-dec-28_opB',
    //       extraReplacements: [
    //       ],
    //       checked: false,
    //     }
    //   ]
    // },
    // {
    //   type: 'iRadioC',
    //   question: 'Forma de pago del alquiler:',
    //   identifier: 'id-dec-29',
    //   wordToReplace: 'id-dec-29',
    //   defaultRadioId: 'id-dec-29_opA',
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'Ingreso o transferencia bancaria:',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): id-dec-29_opA_2 de la entidad: id-dec-29_opA_1 y cuyo titular es: id-dec-29_opA_3. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): id-dec-29_opA_2 de la entidad: id-dec-29_opA_1 y cuyo titular es: id-dec-29_opA_3. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
    //       extraReplacements: [],
    //       radioId: 'id-dec-29_opA',
    //       identifier: 'id-dec-29_opA',
    //       checked: true,
    //       subSteps: [
    //         {
    //           question: 'Nombre del banco de la cuenta donde se realiza el pago del alquiler:',
    //           placeholder: 'Ej. BBVA',
    //           wordToReplace: 'id-dec-29_opA_1',
    //           identifier: 'id-dec-29_opA_1',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [],
    //         },
    //         {
    //           question: 'Número IBAN de dicha cuenta:',
    //           placeholder: 'P. Ej. ES8020809557151558683884',
    //           wordToReplace: 'id-dec-29_opA_2',
    //           identifier: 'id-dec-29_opA_2',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [],
    //         },
    //         {
    //           question: 'Nombre completo o denominación social del titular de la cuenta:',
    //           placeholder: 'P. Ej. Antonio Alarcón Marrero',
    //           wordToReplace: 'id-dec-29_opA_3',
    //           identifier: 'id-dec-29_opA_3',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [],
    //         },
    //       ]
    //     },
    //     {
    //       label: 'En efectivo',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'pago en efectivo. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'pago en efectivo. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
    //       extraReplacements: [],
    //       radioId: 'id-dec-29_opB',
    //       identifier: 'id-dec-29_opB',
    //       checked: true,
    //       subSteps: [
    //       ]
    //     },
    //     {
    //       label: 'otro',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'El pago se realizará mediante: id-dec-29_opC_1. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'El pago se realizará mediante: id-dec-29_opC_1. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
    //       extraReplacements: [],
    //       radioId: 'id-dec-29_opC',
    //       identifier: 'id-dec-29_opC',
    //       checked: true,
    //       subSteps: [
    //         {
    //           question: 'Especifique el método de pago del alquiler',
    //           placeholder: 'P. Ej. en bitcoin, mitad en efectivo',
    //           wordToReplace: 'id-dec-29_opC_1',
    //           identifier: 'id-dec-29_opC_1',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [],
    //         },
    //       ]
    //     },
    //   ],
    // },
    // {
    //   type: 'iRadioC',
    //   question: ' ¿Se establece una cláusula que recoja actualización de la renta (cláusula que permite aumentar el valor del alquiler periódicamente)?:',
    //   identifier: 'id-dec-new30',
    //   wordToReplace: 'id-dec-new30',
    //   defaultRadioId: 'id-dec-new30_opA',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     // tslint:disable-next-line:max-line-length
    //     value: 'Las cláusulas de actualización de la renta del alquiler de vivienda están establecidas en el artículo 18 de la Ley de Arrendamientos Urbanos. Hay libertad de pactos entre las partes para determinar la forma de actualizar el arriendo. Hay muchas posibilidades: aumentarla un tanto por ciento, acordar la renta cada año, no aumentarla durante los dos primeros años, etcétera.'
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí:',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'Las partes acuerdan que la renta será objeto de revisión, y será revisada cada: id-dec-new30_opA_1. id-dec-new30_opA_2. El cobro de la renta cuyo precio se haya actualizado será exigible en la cuota, o preiodicidad correspondiente tras la notificación expresa y por escrito de dicha actualización. El retraso o impago de la nueva renta no supondrá la renuncia a la misma.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'Las partes acuerdan que la renta será objeto de revisión, y será revisada cada: id-dec-new30_opA_1. id-dec-new30_opA_2. El cobro de la renta cuyo precio se haya actualizado será exigible en la cuota, o preiodicidad correspondiente tras la notificación expresa y por escrito de dicha actualización. El retraso o impago de la nueva renta no supondrá la renuncia a la misma.',
    //       extraReplacements: [],
    //       radioId: 'id-dec-new30_opA',
    //       identifier: 'id-dec-new30_opA',
    //       checked: true,
    //       subSteps: [
    //         {
    //           question: 'Frecuencia con la que se podrá aumentar o revisar el precio del alquiler:',
    //           placeholder: 'Ej. anualmente, semestralmente',
    //           wordToReplace: 'id-dec-new30_opA_1',
    //           identifier: 'id-dec-new30_opA_1',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [],
    //         },
    //         {
    //           type: 'iRadioC',
    //           question: '¿En función de que medidor el alquiler podrá ser aumentado?',
    //           identifier: 'id-dec-new30_opA_2',
    //           wordToReplace: 'id-dec-new30_opA_2',
    //           defaultRadioId: 'id-dec-new30_opA_2_opA',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           replacement: '',
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'en función del Índice de Garantía de Competitividad',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice General Nacional del Sistema de Precios al Consumo (IPC). Esta actualización se efectuará de forma automática, comunicando previamente por parte del arrendador a la arrendataria la cantidad diferencial. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice General Nacional del Sistema de Precios al Consumo (IPC). Esta actualización se efectuará de forma automática, comunicando previamente por parte del arrendador a la arrendataria la cantidad diferencial. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-new30_opA_2_opA',
    //               identifier: 'id-dec-new30_opA_2_opA',
    //               checked: true,
    //               subSteps: [
    //               ]
    //             },
    //             {
    //               label: 'en función de un índice acordado por las partes como por ejemplo, el IPC',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'Este incremento se realizará por referencia al siguiente índice: id-dec-new30_opA_2_opB_1. Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice elegido. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'Este incremento se realizará por referencia al siguiente índice: id-dec-new30_opA_2_opB_1. Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice elegido. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-new30_opA_2_opB',
    //               identifier: 'id-dec-new30_opA_2_opB',
    //               checked: true,
    //               subSteps: [
    //                 {
    //                   question: 'Denominación del índice acordado por las partes para aumentar el valor del alquiler:',
    //                   placeholder: 'Ej. IPC',
    //                   wordToReplace: 'id-dec-new30_opA_2_opB_1',
    //                   identifier: 'id-dec-new30_opA_2_opB_1',
    //                   type: 'iText',
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Si lo desea, indique aquí el nombre o denominación del índice que las partes prevén en el contrato de alquiler para actualizar la renta; es decir para revisar el valor o precio del alquiler de la habitación objeto de este contrato con la periodicidad o frecuencia que ha sido determinada.<br> Si no desea prever un índice, en el contrato se establecerá la actualización de la renta por referencia al Índice de Garantía de Competitividad (IGC) fijado por el Instituto Nacional de Estadística.'
    //                   },
    //                   rules: [],
    //                 }
    //               ]
    //             },
    //             {
    //               label: 'aplicando un porcentaje establcido por las partes',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'Este incremento será de un iddecnew30opA2opC1-precioAletras por ciento (id-dec-new30_opA_2_opC_1 %). Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'Este incremento será de un iddecnew30opA2opC1-precioAletras por ciento (id-dec-new30_opA_2_opC_1 %). Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-new30_opA_2_opC',
    //               identifier: 'id-dec-new30_opA_2_opC',
    //               checked: true,
    //               subSteps: [
    //                 {
    //                   question: 'Porcentaje de aumento del valor del alquiler acordado por las partes',
    //                   placeholder: 'Escriba un número menor que 100',
    //                   wordToReplace: 'id-dec-new30_opA_2_opC_1',
    //                   identifier: 'id-dec-new30_opA_2_opC_1',
    //                   type: 'iNumber',
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Si lo desea, indique aquí el nombre o denominación del índice que las partes prevén en el contrato de alquiler para actualizar la renta; es decir para revisar el valor o precio del alquiler de la habitación objeto de este contrato con la periodicidad o frecuencia que ha sido determinada.<br> Si no desea prever un índice, en el contrato se establecerá la actualización de la renta por referencia al Índice de Garantía de Competitividad (IGC) fijado por el Instituto Nacional de Estadística.'
    //                   },
    //                   rules: [
    //                     {
    //                       condition: false,
    //                       rulename: 'extraReplacementToCharacter',
    //                       identifier: 'iddecnew30opA2opC1-precioAletras',
    //                       wordToReplace: 'iddecnew30opA2opC1-precioAletras',
    //                       replacement: ''
    //                     }
    //                   ],
    //                 }
    //               ]
    //             }
    //           ],
    //         },
    //       ]
    //     },
    //     {
    //       label: 'No',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: '',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: '',
    //       extraReplacements: [],
    //       radioId: 'id-dec-new30_opB',
    //       identifier: 'id-dec-new30_opB',
    //       checked: true,
    //       subSteps: [
    //       ]
    //     },
    //   ],
    // },
    // {
    //   type: 'iRadioC',
    //   question: 'Además del precio del alquiler de la habitación, ¿el arrendatiario (inquilino) pagará gastos para la limpieza de la misma y de la vivienda?',
    //   identifier: 'id-dec-30',
    //   wordToReplace: 'id-dec-30',
    //   defaultRadioId: 'id-dec-30_opA',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     // tslint:disable-next-line:max-line-length
    //     value: ''
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí:',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'El importe de los gastos de limpieza de habitación y zonas comunes no está incluido dentro en la renta. Siendo que la parte ARRENDATARIA tendrá que abonarlos. id-dec-30_opA_1 Siendo que la parte ARRENDATARIA tendrá que abonarlos por separado a la parte ARRENDADORA, ésta, a su vez está obligada a entregar recibo al parte ARRENDATARIA en el que se especifique los diferentes conceptos que componen los pagos efectuados para que la parte ARRENDATARIA. id_dec_30_opA_2',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'El importe de los gastos de limpieza de habitación y zonas comunes no está incluido dentro en la renta. Siendo que la parte ARRENDATARIA tendrá que abonarlos. id-dec-30_opA_1 Siendo que la parte ARRENDATARIA tendrá que abonarlos por separado a la parte ARRENDADORA, ésta, a su vez está obligada a entregar recibo al parte ARRENDATARIA en el que se especifique los diferentes conceptos que componen los pagos efectuados para que la parte ARRENDATARIA. id_dec_30_opA_2',
    //       extraReplacements: [],
    //       radioId: 'id-dec-30_opA',
    //       identifier: 'id-dec-30_opA',
    //       checked: true,
    //       subSteps: [
    //         {
    //           type: 'iRadioC',
    //           question: 'Con que periodicidad se pagarán estos gastos de limpieza:',
    //           identifier: 'id-dec-30_opA_1',
    //           wordToReplace: 'id-dec-30_opA_1',
    //           defaultRadioId: 'id-dec-30_opA_1',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           replacement: '',
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'por  día, por mes, por año,...',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'Estos gastos de limpieza ascenderán a iddec30opA1opA2-precioAletras (id-dec-30_opA_1_opA_2 €) por cada período siguiente: id-dec-30_opA_1_opA_1.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'Estos gastos de limpieza ascenderán a iddec30opA1opA2-precioAletras (id-dec-30_opA_1_opA_2 €) por cada período siguiente: id-dec-30_opA_1_opA_1.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-30_opA_1_opA',
    //               identifier: 'id-dec-30_opA_1_opA',
    //               checked: true,
    //               subSteps: [
    //                 {
    //                   question: 'Periodicidad con la que se establecen los gastos de limpieza:',
    //                   placeholder: 'Ej. por día, por mes, por año, por semestre, por hora ',
    //                   wordToReplace: 'id-dec-30_opA_1_opA_1',
    //                   identifier: 'id-dec-30_opA_1_opA_1',
    //                   type: 'iText',
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   indications: {
    //                     areIndications: false,
    //                     indicationsType: '',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: ''
    //                   },
    //                   rules: [],
    //                 },
    //                 {
    //                   question: 'Importe periódico que se pagará por los gastos de limpieza por la periodicidad descrita en la pregunta anterior (por día, por mes,...)',
    //                   placeholder: 'Escriba un número',
    //                   wordToReplace: 'id-dec-30_opA_1_opA_2',
    //                   identifier: 'id-dec-30_opA_1_opA_2',
    //                   type: 'iNumber',
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'insideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Este importe es aquel que se establece y expresa en el contrato por día, semana, mes, año u otra periodicidad, según lo indicado en la pregunta anterior.'
    //                   },
    //                   rules: [
    //                     {
    //                       condition: false,
    //                       rulename: 'extraReplacementToCharacter',
    //                       identifier: 'iddec30opA1opA2-precioAletras',
    //                       wordToReplace: 'iddec30opA1opA2-precioAletras',
    //                       replacement: ''
    //                     }
    //                   ],
    //                 }
    //               ]
    //             },
    //             {
    //               label: 'de una sólo vez se pagará el importe total de los gastos de limpieza para toda la duración del contrato',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'Estos gastos de limpieza ascenderán a iddec30opA1opB1-precioAletras (id-dec-30_opA_1_opB_1 €) la duración total del Contrato de arrendamiento.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'Estos gastos de limpieza ascenderán a iddec30opA1opB1-precioAletras (id-dec-30_opA_1_opB_1 €) la duración total del Contrato de arrendamiento.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-30_opA_1_opB',
    //               identifier: 'id-dec-30_opA_1_opB',
    //               checked: true,
    //               subSteps: [
    //                 {
    //                   question: 'Importe en euros del pago total que se hará por los gastos de limpieza para toda la duración del alquiler:',
    //                   placeholder: 'Escriba un número',
    //                   wordToReplace: 'id-dec-30_opA_1_opB_1',
    //                   identifier: 'id-dec-30_opA_1_opB_1',
    //                   type: 'iNumber',
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   indications: {
    //                     areIndications: false,
    //                     indicationsType: '',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: ''
    //                   },
    //                   rules: [
    //                     {
    //                       condition: false,
    //                       rulename: 'extraReplacementToCharacter',
    //                       identifier: 'iddec30opA1opB1-precioAletras',
    //                       wordToReplace: 'iddec30opA1opB1-precioAletras',
    //                       replacement: ''
    //                     }
    //                   ],
    //                 }
    //               ]
    //             },
    //             {
    //               label: 'aplicando un porcentaje establcido por las partes',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'Este incremento será de un iddecnew30opA2opC1-precioAletras por ciento (id-dec-new30_opA_2_opC_1 %). Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'Este incremento será de un iddecnew30opA2opC1-precioAletras por ciento (id-dec-new30_opA_2_opC_1 %). Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-new30_opA_2_opC',
    //               identifier: 'id-dec-new30_opA_2_opC',
    //               checked: true,
    //               subSteps: [
    //                 {
    //                   question: 'Porcentaje de aumento del valor del alquiler acordado por las partes',
    //                   placeholder: 'Escriba un número menor que 100',
    //                   wordToReplace: 'id-dec-new30_opA_2_opC_1',
    //                   identifier: 'id-dec-new30_opA_2_opC_1',
    //                   type: 'iNumber',
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Si lo desea, indique aquí el nombre o denominación del índice que las partes prevén en el contrato de alquiler para actualizar la renta; es decir para revisar el valor o precio del alquiler de la habitación objeto de este contrato con la periodicidad o frecuencia que ha sido determinada.<br> Si no desea prever un índice, en el contrato se establecerá la actualización de la renta por referencia al Índice de Garantía de Competitividad (IGC) fijado por el Instituto Nacional de Estadística.'
    //                   },
    //                   rules: [
    //                     {
    //                       condition: false,
    //                       rulename: 'extraReplacementToCharacter',
    //                       identifier: 'iddecnew30opA2opC1-precioAletras',
    //                       wordToReplace: 'iddecnew30opA2opC1-precioAletras',
    //                       replacement: ''
    //                     }
    //                   ],
    //                 }
    //               ]
    //             }
    //           ],
    //         },
    //         {
    //           question: 'Si lo desea haga una descripción del servicio de limpieza por el cual se cobran dichos gastos:',
    //           subType: 'textarea',
    //           placeholder: 'Ej. Cada semana acudirá una persona contratada para limpiar la vivienda...',
    //           wordToReplace: 'id-dec-30_opA_2',
    //           identifier: 'id-dec-30_opA_2',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [],
    //           isEmpty: {
    //             prepend: 'Las Partes acuerdan que dicho pago retribuirá el siguiente servicio de limpieza:<br>',
    //             append: '',
    //           }
    //         },
    //       ]
    //     },
    //     {
    //       label: 'No',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: '',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: '',
    //       extraReplacements: [],
    //       radioId: 'id-dec-30_opB',
    //       identifier: 'id-dec-30_opB',
    //       checked: true,
    //       subSteps: [
    //       ]
    //     },
    //   ],
    // },
    // {
    //   type: 'iText',
    //   identifier: 'id-dec-31',
    //   wordToReplace: 'id-dec-31',
    //   replacement: '',
    //   question: 'Si lo desea, indique aquí que servicios han sido contratados por el arrendador (propietario) y pueden ser utilizados por el arrendatario (inquilino)',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     value: 'Tenga en cuenta que los servicios de luz, agua y gas deben haber sido contratados en todos los casos por el arrendador, y quién realizará el pago de los mismos es establecido en la siguiente pregunta'
    //   },
    //   placeholder: 'P. ej: teléfono, internet, Netflix,...',
    //   mandatory: false,
    //   isFocused: false,
    //   isEmpty: {
    //     prepend: 'La parte ARRENDADORA, también se hará responsable de contratar los siguientes servicios: ',
    //     append: '',
    //   }
    // },
    // {
    //   type: 'iRadioC',
    //   question: 'El pago de los gastos que se generen por usar la habitación, como, por ejemplo, el agua, el gas, internet,... será asumido por:',
    //   identifier: 'id-dec-32',
    //   wordToReplace: 'id-dec-32',
    //   defaultRadioId: 'id-dec-32_opA',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     // tslint:disable-next-line:max-line-length
    //     value: ''
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'el arrendatario (inquilino)',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'La gestión y realización de diferentes contratos de servicios  y suministro que desee contratar para su uso individual de la parte Arrendataria correrán a su cargo.<br> id-dec-32_opA_1',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'La gestión y realización de diferentes contratos de servicios  y suministro que desee contratar para su uso individual de la parte Arrendataria correrán a su cargo.<br> id-dec-32_opA_1',
    //       extraReplacements: [],
    //       radioId: 'id-dec-32_opA',
    //       identifier: 'id-dec-32_opA',
    //       checked: true,
    //       subSteps: [
    //         {
    //           type: 'iRadioC',
    //           question: 'Estos gastos de uso de la habitación:',
    //           identifier: 'id-dec-32_opA_1',
    //           wordToReplace: 'id-dec-32_opA_1',
    //           defaultRadioId: 'id-dec-32_opA_1',
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             // tslint:disable-next-line:max-line-length
    //             value: 'Seleccione la opción que corresponda al abono de los gastos de los servicios que se generen como consecuencia del uso de la habitación por el arrendatario durante la vigencia del contrato de arrendamiento; es decir, de los suministros de electricidad, agua, gas, internet o teléfono.'
    //           },
    //           replacement: '',
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'no está incluídos en el precio del alquiler',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'El método de atribución a la PARTE ARRENDATARIA será el prorrateo de los gastos totales de la Vivienda entre el número de habitaciones de la misma que se encuentren ocupadas durante el período facturado.<br>Los servicios y suministros que la parte ARRENDATARIA desee contratar para su uso individual deberán ser autorizados por la parte ARRENDADORA, serán abonados por la parte ARRENDADORA, así como los gastos derivados de su conservación y mantenimiento. La parte ARRENDADORA quedará obligada a entregar recibo a la parte ARRENDATARIA en el que se especifique los diferentes conceptos que componen los pagos efectuados para que la parte ARRENDATARIA proceda a su abono, si bien estos gastos nos están previstos dentro de la renta.<br> id-dec-32_opA_1_opA_1 id-dec-32_opA_1_opA_2',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'El método de atribución a la PARTE ARRENDATARIA será el prorrateo de los gastos totales de la Vivienda entre el número de habitaciones de la misma que se encuentren ocupadas durante el período facturado.<br>Los servicios y suministros que la parte ARRENDATARIA desee contratar para su uso individual deberán ser autorizados por la parte ARRENDADORA, serán abonados por la parte ARRENDADORA, así como los gastos derivados de su conservación y mantenimiento. La parte ARRENDADORA quedará obligada a entregar recibo a la parte ARRENDATARIA en el que se especifique los diferentes conceptos que componen los pagos efectuados para que la parte ARRENDATARIA proceda a su abono, si bien estos gastos nos están previstos dentro de la renta.<br> id-dec-32_opA_1_opA_1 id-dec-32_opA_1_opA_2',
    //               extraReplacements: [],
    //               radioId: 'id-dec-32_opA_1_opA',
    //               identifier: 'id-dec-32_opA_1_opA',
    //               checked: true,
    //               subSteps: [
    //                 {
    //                   question: 'Importe mínimo (en euros) que el arrendatario deberá pagar mensualmente por los gastos derivados del uso de la habitación:',
    //                   placeholder: 'Escriba un número',
    //                   wordToReplace: 'id-dec-32_opA_1_opA_1',
    //                   identifier: 'id-dec-32_opA_1_opA_1',
    //                   type: 'iText',
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'insideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Esto supone que aunque el importe que proporcionalmente le corresponda del total de los gastos de la vivienda (teniendo en cuenta el número de habitaciones ocupadas) sea inferior, el arrendatario deberá pagar este importe.'
    //                   },
    //                   rules: [],
    //                   isEmpty: {
    //                     prepend: 'La PARTE ARRENDATARIA no pagará en ningún caso menos de ',
    //                     append: ' euros mensuales',
    //                   }
    //                 },
    //                 {
    //                   question: 'Importe máximo (en euros que el arrendatario deberá pagar mensualmente por los gastos derivados del uso de la habitación:',
    //                   placeholder: 'Escriba un número',
    //                   wordToReplace: 'id-dec-32_opA_1_opA_2',
    //                   identifier: 'id-dec-32_opA_1_opA_2',
    //                   type: 'iText',
    //                   replacement: '',
    //                   extraReplacements: [],
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'insideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Esto supone que aunque el importe que proporcionalmente le corresponda del total de los gastos de la vivienda (teniendo en cuenta el número de habitaciones ocupadas) sea superior, el arrendatario solo deberá pagar este importe.'
    //                   },
    //                   rules: [],
    //                   isEmpty: {
    //                     prepend: 'La PARTE ARRENDATARIA no pagará en ningún caso más de ',
    //                     append: ' euros mensuales',
    //                   }
    //                 }
    //               ]
    //             },
    //             {
    //               label: 'están incluidos precio alquiler',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'El importe de estos gastos está incluido dentro de la renta. Siendo que la parte ARRENDATARIA no tiene que abonarlos por separado. La parte ARRENDADORA no está obligada a entregar recibo al parte ARRENDATARIA en el que se especifique los diferentes conceptos que componen los pagos efectuados para que la parte ARRENDATARIA, si bien estos gastos están previstos dentro de la renta.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'El importe de estos gastos está incluido dentro de la renta. Siendo que la parte ARRENDATARIA no tiene que abonarlos por separado. La parte ARRENDADORA no está obligada a entregar recibo al parte ARRENDATARIA en el que se especifique los diferentes conceptos que componen los pagos efectuados para que la parte ARRENDATARIA, si bien estos gastos están previstos dentro de la renta.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-32_opA_1_opB',
    //               identifier: 'id-dec-32_opA_1_opB',
    //               checked: true,
    //               subSteps: [
    //               ]
    //             },
    //           ],
    //         },
    //         {
    //           question: 'Si lo desea haga una descripción del servicio de limpieza por el cual se cobran dichos gastos:',
    //           subType: 'textarea',
    //           placeholder: 'Ej. Cada semana acudirá una persona contratada para limpiar la vivienda...',
    //           wordToReplace: 'id-dec-30_opA_2',
    //           identifier: 'id-dec-30_opA_2',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [],
    //           isEmpty: {
    //             prepend: 'Las Partes acuerdan que dicho pago retribuirá el siguiente servicio de limpieza:<br>',
    //             append: '',
    //           }
    //         },
    //       ]
    //     },
    //     {
    //       label: 'el arrendador (propietario)',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'Los servicios y suministros que la parte ARRENDATARIA desee contratar para su uso individual deberán ser autorizados por la parte ARRENDADORA, y serán abonados por la parte ARRENDADORA id-dec-32_opB_1',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'Los servicios y suministros que la parte ARRENDATARIA desee contratar para su uso individual deberán ser autorizados por la parte ARRENDADORA, y serán abonados por la parte ARRENDADORA id-dec-32_opB_1',
    //       extraReplacements: [],
    //       radioId: 'id-dec-32_opB',
    //       identifier: 'id-dec-32_opB',
    //       checked: true,
    //       subSteps: [
    //         {
    //           question: 'Importe máximo (en euros) que el arrendador pagará mensualmente por estos gastos de uso de la habitación:',
    //           placeholder: 'Escriba un número',
    //           wordToReplace: 'id-dec-32_opB_1',
    //           identifier: 'id-dec-32_opB_1',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             // tslint:disable-next-line:max-line-length
    //             value: 'Esto supone que aunque el importe que proporcionalmente le corresponda a la habitación del total de los gastos de la vivienda (teniendo en cuenta el número de habitaciones ocupadas) sea superior, el arrendador solo se compromete a pagar este importe. La diferencia deberá ser pagada por el arrendatario.'
    //           },
    //           rules: [],
    //           isEmpty: {
    //             prepend: 'No obstante, las Partes acuerdan que la PARTE ARRENDADORA solo asumirá los gastos que correspondan a la Habitación de acuerdo al prorrateo de los gastos totales de la Vivienda entre el número de habitaciones de la misma que se encuentren ocupadas durante el período facturado hasta un máximo de ',
    //             append: ' euros mensuales',
    //           }
    //         },
    //       ]
    //     },
    //     {
    //       label: 'los dos, el arrendatario y el arrendado',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'El pago de todos los servicios y suministros individualizados será por cuenta y a cargo de ambas Partes, siendo divididos de la siguiente manera:<br> id-dec-32_opC_1',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'El pago de todos los servicios y suministros individualizados será por cuenta y a cargo de ambas Partes, siendo divididos de la siguiente manera:<br> id-dec-32_opC_1',
    //       extraReplacements: [],
    //       radioId: 'id-dec-32_opC',
    //       identifier: 'id-dec-32_opC',
    //       checked: true,
    //       subSteps: [
    //         {
    //           question: 'Describa como se van a dividir estos gastos entre el arrendador (propietario) y el arrendatario (inquilino):',
    //           subType: 'textarea',
    //           placeholder: 'P. ej: El arrendador (propietario) se encargará del pago mensual de internet. El arrendatario (inquilino)...',
    //           wordToReplace: 'id-dec-32_opC_1',
    //           identifier: 'id-dec-32_opC_1',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: []
    //         },
    //       ]
    //     },
    //   ],
    // },
    // {
    //   type: 'iRadioC',
    //   question: 'El Impuesto sobre Bienes Inmuebles (IBI) de la vivienda lo pagará:',
    //   identifier: 'id-dec-33',
    //   wordToReplace: 'id-dec-33',
    //   defaultRadioId: 'id-dec-33_opA',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     // tslint:disable-next-line:max-line-length
    //     value: 'Cuando eres el propietario de una vivienda, local o plaza de garaje, debes tener en cuenta que existen una serie de impuestos asociados que estás obligado a pagar. El Impuesto de Bienes Inmuebles (IBI) es uno de ellos. <br> El IBI es un impuesto de los llamados directos que grava la titularidad de los derechos reales sobre cualquier bien inmueble localizado en el municipio que recauda el tributo. Lo cobran los ayuntamientos y forma parte de las tasas municipales.'
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'el arrendatario (inquilino)',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'de la PARTE ARRENDADORA en su totalidad.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'de la PARTE ARRENDADORA en su totalidad.',
    //       extraReplacements: [],
    //       radioId: 'id-dec-33_opA',
    //       identifier: 'id-dec-33_opA',
    //       checked: true,
    //       subSteps: [
    //       ]
    //     },
    //     {
    //       label: 'el arrendatario (inquilino) y el arrendador (propietario)',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'de ambas Partes. En concreto, a la PARTE ARRENDATARIA le corresponderá abonar un iddec33opB1-precioAletras por ciento (id-dec-33_opB_1 %) del mismo. A este efecto, se hace saber a la PARTE ARRENDATARIA que el último importe anual conocido para el IBI fue de iddec33opB2-precioAletras (id-dec-33_opB_2 €).',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'de ambas Partes. En concreto, a la PARTE ARRENDATARIA le corresponderá abonar un iddec33opB1-precioAletras por ciento (id-dec-33_opB_1 %) del mismo. A este efecto, se hace saber a la PARTE ARRENDATARIA que el último importe anual conocido para el IBI fue de iddec33opB2-precioAletras (id-dec-33_opB_2 €).',
    //       extraReplacements: [],
    //       radioId: 'id-dec-33_opB',
    //       identifier: 'id-dec-33_opB',
    //       checked: true,
    //       subSteps: [
    //         {
    //           question: 'Porcentaje del IBI que deberá pagar el arrendatario (inquilino):',
    //           placeholder: 'Escriba un número menor que 100',
    //           wordToReplace: 'id-dec-33_opB_1',
    //           identifier: 'id-dec-33_opB_1',
    //           type: 'iNumber',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             // tslint:disable-next-line:max-line-length
    //             value: 'Esta cantidad debe guardar una cierta proporción con el área de la vivienda que será ocupada por el arrendatario.'
    //           },
    //           rules: [
    //             {
    //               condition: false,
    //               rulename: 'extraReplacementToCharacter',
    //               identifier: 'iddec33opB1-precioAletras',
    //               wordToReplace: 'iddec33opB1-precioAletras',
    //               replacement: ''
    //             }
    //           ],
    //         },
    //         {
    //           question: 'Último importe anual conocido (en euros) del IBI de la vivienda:',
    //           placeholder: 'Escriba un número',
    //           wordToReplace: 'id-dec-33_opB_2',
    //           identifier: 'id-dec-33_opB_2',
    //           type: 'iNumber',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [
    //             {
    //               condition: false,
    //               rulename: 'extraReplacementToCharacter',
    //               identifier: 'iddec33opB2-precioAletras',
    //               wordToReplace: 'iddec33opB2-precioAletras',
    //               replacement: ''
    //             }
    //           ],
    //         }
    //       ]
    //     }
    //   ],
    // },
    // {
    //   type: 'iRadioC',
    //   question: 'En caso de que el arrendatario (inquilino), incumpla alguna de las obligaciones que se derivan de este contrato, como por ejemplo, no pagar el alquiler, ¿se establece alguna fianza o depósto de garantía? (esta será devuelta al finalizar el contrato si no se ha hecho ningún incumplimiento de obligaciones)',
    //   identifier: 'id-dec-34',
    //   wordToReplace: 'id-dec-34',
    //   defaultRadioId: 'id-dec-34_opA',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     // tslint:disable-next-line:max-line-length
    //     value: ''
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'Las partes acuerdan un importe de iddec34opA1-precioAletras euros (id-dec-34_opA_1 €) en concepto de fianza, que la parte arrendataria entrega en este acto a la parte arrendadora. Sirva el presente documento la más formal y fiel carta de pago que en derecho corresponda. <br> Una vez la parte ARRENDADORA haya comprobado que la habitación y el resto de la  vivienda se encuentran en perfecto estado y conservación, el importe correspondiente a la fianza será devuelto a la parte arrendataria. En el caso de que existiera deudas o cantidades pendientes de abono, o bien, se hubiere ocasionado desperfectos en la habitación o en el resto de la vivienda, así como en el mobiliario o los enseres de la misma, debido a su mal uso, será descontado de la fianza el importe correspondiente necesario para reparar los desperfectos ocasionados.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'Las partes acuerdan un importe de iddec34opA1-precioAletras euros (id-dec-34_opA_1 €) en concepto de fianza, que la parte arrendataria entrega en este acto a la parte arrendadora. Sirva el presente documento la más formal y fiel carta de pago que en derecho corresponda. <br> Una vez la parte ARRENDADORA haya comprobado que la habitación y el resto de la  vivienda se encuentran en perfecto estado y conservación, el importe correspondiente a la fianza será devuelto a la parte arrendataria. En el caso de que existiera deudas o cantidades pendientes de abono, o bien, se hubiere ocasionado desperfectos en la habitación o en el resto de la vivienda, así como en el mobiliario o los enseres de la misma, debido a su mal uso, será descontado de la fianza el importe correspondiente necesario para reparar los desperfectos ocasionados.',
    //       extraReplacements: [],
    //       radioId: 'id-dec-34_opA',
    //       identifier: 'id-dec-34_opA',
    //       checked: true,
    //       subSteps: [
    //         {
    //           question: 'Indique la cantidad en euros de dicho depósito o garantía:',
    //           placeholder: 'Escriba un número',
    //           wordToReplace: 'id-dec-34_opB_1',
    //           identifier: 'id-dec-34_opB_1',
    //           type: 'iNumber',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [
    //             {
    //               condition: false,
    //               rulename: 'extraReplacementToCharacter',
    //               identifier: 'iddec34opA1-precioAletras',
    //               wordToReplace: 'iddec34opA1-precioAletras',
    //               replacement: ''
    //             }
    //           ],
    //         },
    //       ]
    //     },
    //     {
    //       label: 'No',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'No se establece ninguna mención expresa a la fianza.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'No se establece ninguna mención expresa a la fianza.',
    //       extraReplacements: [],
    //       radioId: 'id-dec-34_opB',
    //       identifier: 'id-dec-34_opB',
    //       checked: true,
    //       subSteps: [
    //       ]
    //     }
    //   ],
    // },
    // {
    //   type: 'iRadioC',
    //   question: 'En caso de que el arrendatario (inquilino), incumpla alguna de las obligaciones que se derivan de este contrato, como por ejemplo, no pagar el alquiler, se incluye  a uno o varios avales o fiadores solidarios:',
    //   identifier: 'id-dec-35',
    //   wordToReplace: 'id-dec-35',
    //   defaultRadioId: 'id-dec-35_opB',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     // tslint:disable-next-line:max-line-length
    //     value: 'En los contratos de alquiler de vivienda o de uso distinto de vivienda, además del arrendatario, que, como tal, tiene la obligación de pagar la renta y los demás conceptos pactados en el contrato de arrendamiento, puede haber uno o varios avaladores o fiadores que asumen todas o alguna de las obligaciones del inquilino: pago de suministros, de tributos, sólo la renta, daños y desperfectos. La constitución de aval o fianza puede realizarse cuando se formaliza el contrato de alquiler o posteriormente.'
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'Sin perjuicio de lo convenido en las estipulaciones precedentes, garantiza el total y exacto cumplimiento de todas y cada una de las obligaciones contraídas por el arrendatario, <br>id-dec-35_opA_1<br>, en calidad de fiadora de la parte arrendataria, convirtiéndose en suyas las obligaciones de ésta a los efectos previstos en el Código Civil.Asimismo, el FIADOR renuncia a los beneficios de orden y excusión y a lo dispuesto en el artículo 1851 del Código Civil.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'Sin perjuicio de lo convenido en las estipulaciones precedentes, garantiza el total y exacto cumplimiento de todas y cada una de las obligaciones contraídas por el arrendatario, <br>id-dec-35_opA_1<br>, en calidad de fiadora de la parte arrendataria, convirtiéndose en suyas las obligaciones de ésta a los efectos previstos en el Código Civil.Asimismo, el FIADOR renuncia a los beneficios de orden y excusión y a lo dispuesto en el artículo 1851 del Código Civil.',
    //       extraReplacements: [],
    //       radioId: 'id-dec-35_opA',
    //       identifier: 'id-dec-35_opA',
    //       checked: true,
    //       subSteps: [
    //         {
    //           type: 'iForEach',
    //           value: 1,
    //           min: 1,
    //           max: 10,
    //           replacement: '',
    //           // identifier: 'id-dec-35_opA_1',
    //           wordToReplace: 'id-dec-35_opA_1',
    //           question: 'Número de fiadores solidarios',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             value: '',
    //           },
    //           content: [
    //             {
    //               identifier: 'id-dec-35_opA_1',
    //               wordToReplace: 'id-dec-35_opA_1',
    //               replacementOriginal: 'id-dec-35_opA_1_1, con id-dec-35_opA_1_2 núm. id-dec-35_opA_1_3 y domicilio en id-dec-35_opA_1_4',
    //               replacement: '',
    //               extraReplacements: [],
    //               modifiedReplacements: [],
    //               modifiedExtraReplacements: [],
    //               subSteps: [
    //                 {
    //                   question: 'Nombre completo o denominación social del fiador solidario:',
    //                   wordToReplace: 'id-dec-35_opA_1_1',
    //                   identifier: 'id-dec-35_opA_1_1',
    //                   type: 'iText',
    //                   placeholder: 'P. ej. Antonio, Pérez Alarcón, Banco Santander, S.A',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: false,
    //                     indicationsType: '',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: '',
    //                   },
    //                 },
    //                 {
    //                   type: 'iRadioB',
    //                   // tslint:disable-next-line:max-line-length
    //                   question: 'Tipo de documento de identificación del fiador solidario:',
    //                   identifier: 'id-dec-35_opA_1_2',
    //                   wordToReplace: 'id-dec-35_opA_1_2',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'outsideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Escoja el tipo de documento que identificará personalmente al primer o único fiador solidario. Si se trata de una persona física, si esta persona cuenta con DNI/NIF escoja siempre esta opción, y reserve las opciones de NIE o Pasaporte solo para cuando aquel no exista o no se esté en posesión del mismo. Si se trata de una persona jurídica, seleccione la opción NIF/CIF.',
    //                   },
    //                   replacement: '',
    //                   radios: [
    //                     {
    //                       label: 'DNI',
    //                       replacementOriginal: 'DNI',
    //                       replacement: '',
    //                       radioId: 'id-dec-35_opA_1_2_opA',
    //                       identifier: 'id-dec-35_opA_1_2_opA',
    //                       extraReplacements: [],
    //                       checked: true,
    //                     },
    //                     {
    //                       label: 'NIE',
    //                       replacementOriginal: 'NIE',
    //                       replacement: '',
    //                       radioId: 'id-dec-35_opA_1_2_opB',
    //                       identifier: 'id-dec-35_opA_1_2_opB',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'Pasaporte',
    //                       replacementOriginal: 'Pasaporte',
    //                       replacement: '',
    //                       radioId: 'id-dec-35_opA_1_2_opC',
    //                       identifier: 'id-dec-35_opA_1_2_opC',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     },
    //                     {
    //                       label: 'NIF',
    //                       replacementOriginal: 'NIF',
    //                       replacement: '',
    //                       radioId: 'id-dec-35_opA_1_2_opD',
    //                       identifier: 'id-dec-35_opA_1_2_opD',
    //                       extraReplacements: [],
    //                       checked: false,
    //                     }
    //                   ]
    //                 },
    //                 {
    //                   question: 'Número del documento seleccionado en la pregunta anterior:',
    //                   wordToReplace: 'id-dec-35_opA_1_3',
    //                   identifier: 'id-dec-35_opA_1_3',
    //                   placeholder: 'P. ej: 83558071Z',
    //                   type: 'iText',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'insideText',
    //                     value: 'Introduzca aquí el número correspondiente al documento de identificación personal escogido en la pregunta anterior para el primer o único fiador solidario.',
    //                   },
    //                 },
    //                 {
    //                   question: 'Dirección del lugar donde reside el fiador solidario:',
    //                   wordToReplace: 'id-dec-35_opA_1_4',
    //                   identifier: 'id-dec-35_opA_1_4',
    //                   type: 'iText',
    //                   placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'insideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del lugar de residencia',
    //                   },
    //                 },
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       label: 'No',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: '',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: '',
    //       extraReplacements: [],
    //       radioId: 'id-dec-35_opB',
    //       identifier: 'id-dec-35_opB',
    //       checked: true,
    //       subSteps: [
    //       ]
    //     }
    //   ],
    // },
    // {
    //   type: 'iRadioB',
    //   question: '¿Se establecen unas normas de convivenvia de la vivienda que deberán ser respetadas por el inquilino y que se adjuntarán en una documento anexo a este contrato?',
    //   identifier: 'id-dec-36',
    //   wordToReplace: 'id-dec-36',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     value: 'Para garantizar una correcta convivencia entre personas que, en muchos casos, no se conocen y tienen diferentes formas de convivir se pueden estipular en el contrato unas Normas de Convivencia para hacer más fácil la estancia. Todos los inquilinos tienen la obligación de cumplirlas y en el caso de no hacerlo puede ser motivo de expulsión del piso.',
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //     {
    //       identifier: 'iddec36-extra-1',
    //       wordToReplace: 'iddec36-extra-1',
    //       insideId: 'opA'
    //     }
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí',
    //       replacementOriginal: '(así como en el documento relativo a dichas normas que se adjunta como Anexo al presente Contrato)',
    //       replacement: '(así como en el documento relativo a dichas normas que se adjunta como Anexo al presente Contrato)',
    //       radioId: 'id-dec-36_opA',
    //       identifier: 'id-dec-36_opA',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec36-extra-1',
    //           replacement: '(así como a su documento Anexo al que se hace referencia en la estipulación novena)',
    //           replacementOriginal: '(así como a su documento Anexo al que se hace referencia en la estipulación novena)',
    //           insideId: 'opA'
    //         }
    //       ],
    //       checked: true,
    //     },
    //     {
    //       label: 'No',
    //       replacementOriginal: '',
    //       replacement: '',
    //       radioId: 'id-dec-36_opA',
    //       identifier: 'id-dec-36_opA',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec36-extra-1',
    //           replacement: '',
    //           replacementOriginal: '',
    //           insideId: 'opA'
    //         }
    //       ],
    //       checked: false,
    //     },
    //   ]
    // },
    // {
    //   type: 'iText',
    //   subType: 'textarea',
    //   identifier: 'id-dec-37',
    //   wordToReplace: 'id-dec-37',
    //   replacement: '',
    //   question: 'Si lo desea establezca unas normas acerca de la limpieza de las zonas comunes de la vivienda que deberá respetar el arrendatario (inquilino):',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     value: ''
    //   },
    //   placeholder: 'P. ej: La PARTE ARRENDATARIA se compromete a limpiar las zoas comunes de la Vivienda (baño, salón y cocina) cada dos semanas,...',
    //   mandatory: false,
    //   isFocused: false,
    //   isEmpty: {
    //     prepend: 'En cuanto a la limpieza de zonas comunes, la parte Arrendataria se compromete a:<br>',
    //     append: '.',
    //   }
    // },
    // {
    //   type: 'iText',
    //   subType: 'textarea',
    //   identifier: 'id-dec-38',
    //   wordToReplace: 'id-dec-38',
    //   replacement: '',
    //   question: 'Si lo desea establezca unas normas acerca de la basura de la vivienda que deberá respetar el arrendatario (inquilino):',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     value: ''
    //   },
    //   placeholder: 'P. ej: La basura se divide en tres cubos...',
    //   mandatory: false,
    //   isFocused: false,
    //   isEmpty: {
    //     prepend: 'En cuanto a la basura generada en la vivienda, la parte Arrendataria se compromete a:<br>',
    //     append: '.',
    //   }
    // },
    // {
    //   type: 'iText',
    //   subType: 'textarea',
    //   identifier: 'id-dec-39',
    //   wordToReplace: 'id-dec-39',
    //   replacement: '',
    //   question: 'Si lo desea establezca unas normas acerca de zonas comunes de la vivienda que deberá respetar el arrendatario (inquilino):',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     value: ''
    //   },
    //   placeholder: 'P. ej: El baño junto a la habitación interior queda restringido su uso al propietario,...',
    //   mandatory: false,
    //   isFocused: false,
    //   isEmpty: {
    //     prepend: 'En cuanto al uso de zonas de comunes, la parte Arrendataria se compromete a respetar el siguiente horario:<br>',
    //     append: '.',
    //   }
    // },
    // {
    //   type: 'iRadioB',
    //   question: '¿Queda prohibido meter o tener mascotas en la vivienda?',
    //   identifier: 'id-dec-40',
    //   wordToReplace: 'id-dec-40',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     value: '',
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí',
    //       replacementOriginal: 'Queda expresamente prohibido el acceso y estancia de animales domésticos o no domésticos en la habitación objeto de arrendamiento,y en el resto de la vivienda.',
    //       replacement: 'Queda expresamente prohibido el acceso y estancia de animales domésticos o no domésticos en la habitación objeto de arrendamiento,y en el resto de la vivienda.',
    //       radioId: 'id-dec-40_opA',
    //       identifier: 'id-dec-40_opA',
    //       extraReplacements: [
    //       ],
    //       checked: true,
    //     },
    //     {
    //       label: 'No',
    //       replacementOriginal: '',
    //       replacement: '',
    //       radioId: 'id-dec-40_opB',
    //       identifier: 'id-dec-40_opB',
    //       extraReplacements: [
    //       ],
    //       checked: false,
    //     },
    //   ]
    // },
    // {
    //   type: 'iRadioB',
    //   question: '¿Queda prohibido fumar en las zonas comunes de la vivienda?',
    //   identifier: 'id-dec-41',
    //   wordToReplace: 'id-dec-41',
    //   indications: {
    //     areIndications: false,
    //     indicationsType: '',
    //     value: '',
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí',
    //       replacementOriginal: 'Dado que es una vivienda de no fumadores, queda prohibido fumar en las zonas comunes de la vivienda, y para el caso de que la parte ARRENDATARIA fumase en la habitación arrendada, se compromete a mantenerla correctamente ventilada, de manera que los olores y humos generados no afecten de manera directa ni indirecta al resto de inquilinos.',
    //       replacement: 'Dado que es una vivienda de no fumadores, queda prohibido fumar en las zonas comunes de la vivienda, y para el caso de que la parte ARRENDATARIA fumase en la habitación arrendada, se compromete a mantenerla correctamente ventilada, de manera que los olores y humos generados no afecten de manera directa ni indirecta al resto de inquilinos.',
    //       radioId: 'id-dec-41_opA',
    //       identifier: 'id-dec-41_opA',
    //       extraReplacements: [
    //       ],
    //       checked: true,
    //     },
    //     {
    //       label: 'No',
    //       replacementOriginal: '',
    //       replacement: '',
    //       radioId: 'id-dec-41_opB',
    //       identifier: 'id-dec-41_opB',
    //       extraReplacements: [
    //       ],
    //       checked: false,
    //     },
    //   ]
    // },
    // {
    //   type: 'iRadioC',
    //   question: 'La vivienda o habitación',
    //   identifier: 'id-dec-42',
    //   wordToReplace: 'id-dec-42',
    //   defaultRadioId: 'id-dec-42_opA',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     // tslint:disable-next-line:max-line-length
    //     value: 'Seleccione aquí la opción que corresponda al nivel de aseguramiento o al seguro que tendrá el alquiler de la habitación y la vivienda en la que esta se encuentra durante el período de duración del alquiler. <br>Si ya cuenta con un seguro (por ejemplo, un seguro de alquiler para propietarios) y el arrendador y el arrendatario no desean pactar la contratación de otro seguro (p. ej. una póliza de seguro de responsabilidad civil para el arrendatario), seleccione la primera opción. <br>Si ya cuenta con un seguro (por ejemplo, un seguro de alquiler para propietarios), pero el arrendador y el arrendatario desean pactar la contratación de otro seguro (p. ej. una póliza de seguro de responsabilidad civil para el arrendatario), seleccione la segunda opción. <br>Si no cuenta aún con un seguro, pero el arrendador y el arrendatario desean pactar la contratación de uno (p. ej. una póliza de seguro de responsabilidad civil para el arrendatario), seleccione la tercera opción. <br>Por último, si no cuenta aún con un seguro y el arrendador y el arrendatario no desean pactar su contratación, seleccione la cuarta opción.'
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'cuenta con un seguro y no se desea pactar la contratación de otro',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'La PARTE ARRENDADORA tiene contratado un seguro de: id-dec-42_opA_1 en la compañía aseguradora: id-dec-42_opA_2 id-dec-42_opA_3.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'La PARTE ARRENDADORA tiene contratado un seguro de: id-dec-42_opA_1 en la compañía aseguradora: id-dec-42_opA_2 id-dec-42_opA_3.',
    //       extraReplacements: [],
    //       radioId: 'id-dec-42_opA',
    //       identifier: 'id-dec-42_opA',
    //       checked: true,
    //       subSteps: [
    //         {
    //           question: 'Tipo de seguro que tiene el alquiler de la habitación y/o la vivienda ',
    //           placeholder: 'P. ej: Seguro alquiler propietario',
    //           wordToReplace: 'id-dec-42_opA_1',
    //           identifier: 'id-dec-42_opA_1',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [
    //           ],
    //         },
    //         {
    //           question: 'Nombre de la compañía aseguradora en la que está contratado dicho seguro:',
    //           placeholder: 'P. ej: Axa',
    //           wordToReplace: 'id-dec-42_opA_2',
    //           identifier: 'id-dec-42_opA_2',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [
    //           ],
    //         },
    //         {
    //           question: 'Número de póliza',
    //           placeholder: '',
    //           wordToReplace: 'id-dec-42_opA_3',
    //           identifier: 'id-dec-42_opA_3',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [
    //           ],
    //           isEmpty: {
    //             prepend: ', y cuyo número de póliza es el siguiente:',
    //             append: '',
    //           }
    //         },
    //       ]
    //     },
    //     {
    //       label: 'cuenta con un seguro, pero se desea pactar la contratación de otro',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'La PARTE ARRENDADORA tiene contratado un seguro de: id-dec-42_opB_1 en la compañía aseguradora: id-dec-42_opB_2 id-dec-42_opB_3. <br>No obstante, la PARTE id-dec-42_opB_4 se compromete a contratar de un seguro de la siguiente clase: id-dec-42_opB_5. Este seguro tendrá como beneficiaria a la PARTE ARRENDADORA, y tener una cobertura mínima igual a iddec42opB6-precioAletras euros (id-dec-42_opB_6 €). Este seguro se mantendrá durante toda la vigencia del presente Contrato .',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'La PARTE ARRENDADORA tiene contratado un seguro de: id-dec-42_opA_1 en la compañía aseguradora: id-dec-42_opA_2 id-dec-42_opA_3.',
    //       extraReplacements: [],
    //       radioId: 'id-dec-42_opB',
    //       identifier: 'id-dec-42_opB',
    //       checked: true,
    //       subSteps: [
    //         {
    //           question: 'Tipo de seguro que tiene el alquiler de la habitación y/o la vivienda ',
    //           placeholder: 'P. ej: Seguro alquiler propietario',
    //           wordToReplace: 'id-dec-42_opB_1',
    //           identifier: 'id-dec-42_opB_1',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [
    //           ],
    //         },
    //         {
    //           question: 'Nombre de la compañía aseguradora en la que está contratado dicho seguro:',
    //           placeholder: 'P. ej: Axa',
    //           wordToReplace: 'id-dec-42_opB_2',
    //           identifier: 'id-dec-42_opB_2',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [
    //           ],
    //         },
    //         {
    //           question: 'Número de póliza',
    //           placeholder: '',
    //           wordToReplace: 'id-dec-42_opB_3',
    //           identifier: 'id-dec-42_opB_3',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [
    //           ],
    //           isEmpty: {
    //             prepend: ', y cuyo número de póliza es el siguiente:',
    //             append: '',
    //           }
    //         },
    //         {
    //           type: 'iRadioB',
    //           question: '¿Quién contratará el seguro que se ha pactado?',
    //           identifier: 'id-dec-42_opB_4',
    //           wordToReplace: 'id-dec-42_opB_4',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             value: '',
    //           },
    //           replacement: '',
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'Sí',
    //               replacementOriginal: 'ARRENDATARIA',
    //               replacement: 'ARRENDATARIA',
    //               radioId: 'id-dec-42_opB_4_opA',
    //               identifier: 'id-dec-42_opB_4_opA',
    //               extraReplacements: [
    //               ],
    //               checked: true,
    //             },
    //             {
    //               label: 'No',
    //               replacementOriginal: 'ARRENDADORA',
    //               replacement: 'ARRENDADORA',
    //               radioId: 'id-dec-42_opB_4_opB',
    //               identifier: 'id-dec-42_opB_4_opB',
    //               extraReplacements: [
    //               ],
    //               checked: false,
    //             },
    //           ]
    //         },
    //         {
    //           question: 'Tipo de seguro que se desea contratar:',
    //           placeholder: 'P. ej: Seguro de responsabilidad Civil',
    //           wordToReplace: 'id-dec-42_opB_5',
    //           identifier: 'id-dec-42_opB_5',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [
    //           ],
    //         },
    //         {
    //           question: 'Cobertura mínima (en euros) que deberá tener dicho seguro (suma hasta la cual la aseguradora deberá hacerse cargo de los daños en la habitación alquilada y/o en la vivienda y/o de los incumplimientos del contrato de alquiler):',
    //           placeholder: 'Escriba un número',
    //           wordToReplace: 'id-dec-42_opB_6',
    //           identifier: 'id-dec-42_opB_6',
    //           type: 'iNumber',
    //           replacement: '',
    //           extraReplacements: [],
    //           rules: [
    //             {
    //               condition: false,
    //               rulename: 'extraReplacementToCharacter',
    //               identifier: 'iddec42opB6-precioAletras',
    //               wordToReplace: 'iddec42opB6-precioAletras',
    //               replacement: ''
    //             }
    //           ],
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             value: 'La cobertura es la suma hasta la cual la compañía aseguradora deberá hacerse cargo de las consecuencias que se deriven de un siniestro (o incidente) en relación con el riesgo asegurado. El riesgo asegurado dependerá del tipo de seguro contratado; puede tratarse, por ejemplo, de daños ocasionados en la habitación alquilada o en la vivienda, de incumplimientos del contrato de arrendamiento (ej. impago de la renta), etc.'
    //           },
    //         },
    //       ]
    //     },
    //     {
    //       label: 'no cuenta con seguro, pero se desea pactar su contratación',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'La PARTE id-dec-42_opC_1 se compromete a la contratación de un seguro de la siguiente clase: id-dec-42_opC_2. Este seguro deberá indicar como beneficiaria a la PARTE ARRENDADORA, tener una cobertura mínima igual a iddec42opC3-precioAletras (id-dec-42_opC_3 €), y ser mantenido durante toda la vigencia del presente Contrato.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'La PARTE id-dec-42_opC_1 se compromete a la contratación de un seguro de la siguiente clase: id-dec-42_opC_2. Este seguro deberá indicar como beneficiaria a la PARTE ARRENDADORA, tener una cobertura mínima igual a iddec42opC3-precioAletras (id-dec-42_opC_3 €), y ser mantenido durante toda la vigencia del presente Contrato.',
    //       extraReplacements: [],
    //       radioId: 'id-dec-42_opC',
    //       identifier: 'id-dec-42_opC',
    //       checked: true,
    //       subSteps: [
    //         {
    //           type: 'iRadioB',
    //           question: '¿Quién contratará el seguro que se ha pactado?',
    //           identifier: 'id-dec-42_opC_1',
    //           wordToReplace: 'id-dec-42_opC_1',
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             value: '',
    //           },
    //           replacement: '',
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'Sí',
    //               replacementOriginal: 'ARRENDATARIA',
    //               replacement: 'ARRENDATARIA',
    //               radioId: 'id-dec-42_opC_1_opA',
    //               identifier: 'id-dec-42_opC_1_opA',
    //               extraReplacements: [
    //               ],
    //               checked: true,
    //             },
    //             {
    //               label: 'No',
    //               replacementOriginal: 'ARRENDADORA',
    //               replacement: 'ARRENDADORA',
    //               radioId: 'id-dec-42_opC_1_opB',
    //               identifier: 'id-dec-42_opC_1_opB',
    //               extraReplacements: [
    //               ],
    //               checked: false,
    //             },
    //           ]
    //         },
    //         {
    //           question: 'Tipo de seguro que se desea contratar:',
    //           placeholder: 'P. ej: Seguro de responsabilidad Civil',
    //           wordToReplace: 'id-dec-42_opC_2',
    //           identifier: 'id-dec-42_opC_2',
    //           type: 'iText',
    //           replacement: '',
    //           extraReplacements: [],
    //           indications: {
    //             areIndications: false,
    //             indicationsType: '',
    //             // tslint:disable-next-line:max-line-length
    //             value: ''
    //           },
    //           rules: [
    //           ],
    //         },
    //         {
    //           question: 'Cobertura mínima (en euros) que deberá tener dicho seguro (suma hasta la cual la aseguradora deberá hacerse cargo de los daños en la habitación alquilada y/o en la vivienda y/o de los incumplimientos del contrato de alquiler):',
    //           placeholder: 'Escriba un número',
    //           wordToReplace: 'id-dec-42_opC_3',
    //           identifier: 'id-dec-42_opC_3',
    //           type: 'iNumber',
    //           replacement: '',
    //           extraReplacements: [],
    //           rules: [
    //             {
    //               condition: false,
    //               rulename: 'extraReplacementToCharacter',
    //               identifier: 'iddec42opC3-precioAletras',
    //               wordToReplace: 'iddec42opC3-precioAletras',
    //               replacement: ''
    //             }
    //           ],
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             value: 'La cobertura es la suma hasta la cual la compañía aseguradora deberá hacerse cargo de las consecuencias que se deriven de un siniestro (o incidente) en relación con el riesgo asegurado. El riesgo asegurado dependerá del tipo de seguro contratado; puede tratarse, por ejemplo, de daños ocasionados en la habitación alquilada o en la vivienda, de incumplimientos del contrato de arrendamiento (ej. impago de la renta), etc.'
    //           },
    //         },
    //       ]
    //     },
    //     {
    //       label: 'no cuenta con un seguro ni se desea pactar su contratación',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'No se cuenta con seguro ni se desea pactar la contratación de ninguno.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'No se cuenta con seguro ni se desea pactar la contratación de ninguno.',
    //       extraReplacements: [],
    //       radioId: 'id-dec-42_opD',
    //       identifier: 'id-dec-42_opD',
    //       checked: true,
    //       subSteps: [
    //       ]
    //     }
    //   ],
    // },
    // {
    //   type: 'iRadioB',
    //   question: '(Derecho de adquisición preferente) En caso de que el arrendador decida vender la vivienda en la que se encuentra la habitación durante el alquiler:',
    //   identifier: 'id-dec-43',
    //   wordToReplace: 'id-dec-43',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     value: 'El derecho de compra o adquisición preferente, según la ley 29/1994, de 24 de noviembre, sobre arrendamientos urbanos es el derecho que tiene el arrendatario de adquirir la propiedad con preferencia, en el caso de que el arrendador ponga en venta dicho inmueble. Así lo recoge el artículo 25 de  esta normativa, en el que se señala que el arrendatario tendrá las mismas condiciones que el arrendador haya acordado con un posible comprador. En este sentido, con el derecho de compra preferente, el arrendatario dispone de 30 días naturales para ejercitar el derecho de tanteo desde que el propietario le notifique la decisión de venta. Con ello, se podrá determinar y llegar a un acuerdo sobre precio y el resto de condiciones inherentes a la transmisión de la propiedad inmobiliaria. Del mismo modo, el arrendatario también dispone del derecho de retracto, en relación al precio y a todas las condiciones de compraventa. En el contrato de arrendamiento de habitación, usualmente las partes acuerdan que el inquilino no contará con derecho de adquisición preferente (seleccionando la opción "el arrendatario no podrá adquirirla con prioridad frente a otros posibles compradores"). Sin embargo, se puede establecer que el arrendatario tiene derecho a adquirir la vivienda con preferencia si el arrendador decide venderla',
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'el arrendatario no podrá adquirirla con prioridad frente a otros posibles compradores (no tendrá derecho de adquisición preferente o tanteo y retracto)',
    //       replacementOriginal: 'La parte arrendataria renuncia expresamente al derecho de adquisición preferente, tanteo, o retracto, sobre la habitación arrendada y sobre la vivienda, en caso de que la parte arrendadora decidiera enajenar el inmueble. La parte arrendadora pondrá en conocimiento de la parte arrendataria con antelación suficiente su intención de vender el inmueble.',
    //       replacement: 'La parte arrendataria renuncia expresamente al derecho de adquisición preferente, tanteo, o retracto, sobre la habitación arrendada y sobre la vivienda, en caso de que la parte arrendadora decidiera enajenar el inmueble. La parte arrendadora pondrá en conocimiento de la parte arrendataria con antelación suficiente su intención de vender el inmueble.',
    //       radioId: 'id-dec-43_opA',
    //       identifier: 'id-dec-43_opA',
    //       extraReplacements: [
    //       ],
    //       checked: true,
    //     },
    //     {
    //       label: 'el arrendatario podrá adquirirla con prioridad frente a otros posibles compradores (tendrá derecho de adquisición preferente o tanteo y retracto)',
    //       replacementOriginal: 'La parte arrendataria tendrá derecho de adquisición preferente, tanteo, o retracto, sobre la habitación arrendada y sobre la vivienda, en caso de que la parte arrendadora decidiera enajenar el inmueble. Todo ello de acuerdo con lo dispuesto en los artículos 25 y siguientes de la Ley de Arrendamientos Urbanos que se encuentre vigente en el momento de formalización del presente contrato.',
    //       replacement: 'La parte arrendataria tendrá derecho de adquisición preferente, tanteo, o retracto, sobre la habitación arrendada y sobre la vivienda, en caso de que la parte arrendadora decidiera enajenar el inmueble. Todo ello de acuerdo con lo dispuesto en los artículos 25 y siguientes de la Ley de Arrendamientos Urbanos que se encuentre vigente en el momento de formalización del presente contrato.',
    //       radioId: 'id-dec-43_opB',
    //       identifier: 'id-dec-43_opB',
    //       extraReplacements: [
    //       ],
    //       checked: false,
    //     },
    //   ]
    // },
    {
      type: 'iRadioC',
      question: '(Subarrendamiento) El arrendatario (inquilino):',
      identifier: 'id-dec-44',
      wordToReplace: 'id-dec-44',
      defaultRadioId: 'id-dec-44_opA',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: 'El subarriendo (ceder la habitación a cambio de un precio) de habitaciones es legal, pero siempre con el previo consentimiento del arrendador. En el caso de los subarriendos consentidos, el propio arrendatario deberá hacer un contrato con cada subarrendatario que vaya a ocupar las habitaciones de la vivienda, especificando las zonas alquiladas y las normas de convivencia de la casa.  El subarriendo tendrá la misma duración que el contrato de arrendamiento inicial suscrito entre propietario y arrendatario.'
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'no podrá subarrendar (ceder la habitación a cambio de un precio) la habitación alquilada ni ceder este contrato (sustituirse por otro arrendatario)',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'Queda prohibido la cesión de la habitación o su subarriendo ya sea total o parcial.',
          // tslint:disable-next-line:max-line-length
          replacement: 'Queda prohibido la cesión de la habitación o su subarriendo ya sea total o parcial.',
          extraReplacements: [],
          radioId: 'id-dec-44_opA',
          identifier: 'id-dec-44_opA',
          checked: true,
          subSteps: []
        },
        {
          label: 'podrá subarrendar la habitación alquilada y ceder este contrato',
          replacementOriginal: 'La parte arrendataria se compromete a poner en conocimiento de la parte arrendadora esta situación, junto con el acuerdo o contrato correspondiente con, al menos, iddec44opB1-precioAletras (id-dec-44_opB_1) días de antelación a la formalización del acuerdo de subarriendo o cesión, de forma expresa y por escrito. <br>En caso de cesión, el cesionario se subrogará en la posición de la PARTE ARRENDATARIA frente a la PARTE ARRENDADORA. <br>En caso de subarriendo, la PARTE ARRENDATARIA continuará siendo responsable del cumplimiento del Contrato para con la PARTE ARRENDADORA, y se deberán respetar una serie de condiciones: <br>a) El subarriendo, respetando el objeto de este Contrato, será de la Habitación. <br>b) El subarriendo no podrá tener en ningún caso una duración superior a la duración de este Contrato de arrendamiento.',
          replacement: 'La parte arrendataria se compromete a poner en conocimiento de la parte arrendadora esta situación, junto con el acuerdo o contrato correspondiente con, al menos, iddec44opB1-precioAletras (id-dec-44_opB_1) días de antelación a la formalización del acuerdo de subarriendo o cesión, de forma expresa y por escrito. <br>En caso de cesión, el cesionario se subrogará en la posición de la PARTE ARRENDATARIA frente a la PARTE ARRENDADORA. <br>En caso de subarriendo, la PARTE ARRENDATARIA continuará siendo responsable del cumplimiento del Contrato para con la PARTE ARRENDADORA, y se deberán respetar una serie de condiciones: <br>a) El subarriendo, respetando el objeto de este Contrato, será de la Habitación. <br>b) El subarriendo no podrá tener en ningún caso una duración superior a la duración de este Contrato de arrendamiento.',
          extraReplacements: [],
          radioId: 'id-dec-44_opB',
          identifier: 'id-dec-44_opB',
          checked: false,
          subSteps: [
            {
              question: '¿Que porcentaje de estos gastos extraordinarios (o también conocidos como derramas) deberá pagar el arrendatario (inquilino)?:',
              placeholder: 'Ej. Escriba un número menor que 100',
              wordToReplace: 'id-dec-12_opA_2_opB_1',
              identifier: 'id-dec-12_opA_2_opB_1',
              type: 'iNumber',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: true,
                indicationsType: 'insideText',
                // tslint:disable-next-line:max-line-length
                value: 'La cantidad debe ser proporcional a la parte de la vivienda que será ocupada por el arrendatario (inquilino).'
              },
              rules: [
                {
                  condition: false,
                  rulename: 'extraReplacementToCharacter',
                  identifier: 'iddec12opA2opB1-precioAletras',
                  wordToReplace: 'iddec12opA2opB1-precioAletras',
                  replacement: ''
                }
              ],
            }
          ]
        }
      ],
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

module.exports = steps;