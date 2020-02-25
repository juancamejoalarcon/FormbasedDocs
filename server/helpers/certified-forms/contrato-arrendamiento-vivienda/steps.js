const steps = [
    {
      type: 'start',
      title: 'Contrato de arrendamiento de vivienda',
      description: `El contrato de arrendamiento de vivienda es aquel por el cual una persona, 
      denominada arrendatario, se compromete a pagar un precio a otra, denominada arrendador, 
      y ésta, a cambio, a proporcionar a la primera el uso de una edificación habitable cuyo destino primordial 
      sea satisfacer las necesidades de vivienda del arrendatario.`,
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
    //   mandatory: false,
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
    //   mandatory: false,
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
    //   question: '¿Cuántas personas son propietarias de la vivienda y desean alquilarla? (Número de arrendadores):',
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
    //           question: 'La persona arrendadora ->(index) (propietaria) es:',
    //           questionOriginal: 'La persona arrendadora ->(index) (propietaria) es:',
    //           hasIndex: true,
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
    //                       value: 'La persona puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, esta misma persona firmará el contrato y asumirá las obligaciones. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es la persona a la que representa quien asumirá las obligaciones derivadas de este contrato. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
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
    //                           extraReplacements: [],
    //                           defaultRadioId: 'id-unid-3_1_opA_1_opA_3_opA',
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
    //                         replacementOriginal: 'id-unid-3_1_opA_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opA_1_opB_9, id-unid-3_1_opA_1_opB_6 número: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.',
    //                         // tslint:disable-next-line:max-line-length
    //                         replacement: 'id-unid-3_1_opA_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opA_1_opB_9, id-unid-3_1_opA_1_opB_6 número: id-unid-3_1_opA_1_opB_7, en calidad de id-unid-3_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.',
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
    //                             extraReplacements: [],
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
    //                               value: 'Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este arrendador. El contrato puede ser firmado por un representante legal o voluntario. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
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
    //                             extraReplacements: [],
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
    //               replacementOriginal: 'id-unid-3_1_opB_5 actuando en nombre y representación de: id-unid-3_1_opB_1, con domicilio en id-unid-3_1_opB_new1,  C.I.F/N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3  con la siguiente información: id-unid-3_1_opB_4.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'id-unid-3_1_opB_5 actuando en nombre y representación de: id-unid-3_1_opB_1, con domicilio en id-unid-3_1_opB_new1,  C.I.F/N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3  con la siguiente información: id-unid-3_1_opB_4.',
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
    //                   question: 'Domicilio social completo de la persona jurídica arrendadora (propietaria):',
    //                   wordToReplace: 'id-unid-3_1_opB_new1',
    //                   identifier: 'id-unid-3_1_opB_new1',
    //                   type: 'iText',
    //                   placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'insideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del domicilio social',
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
    //                     value: 'Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>NIF empresarial</strong></a>.',
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
    //                     value: 'Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank"><strong>Datos registrales</strong></a>',
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
    //                     value: 'Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank"><strong>Datos registrales</strong></a>',
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
    //                       replacementOriginal: ' id-unid-3_1_opB_5_1, mayor de edad, con domicilio en id-unid-3_1_opB_5_2, id-unid-3_1_opB_5_3 núm. id-unid-3_1_opB_5_4, y en calidad de id-unid-3_1_opB_5_5; <br> <br>',
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
    //                           mandatory: false,
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
    //                           mandatory: false,
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
    //                           extraReplacements: [],
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
    //                           mandatory: false,
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
    //                           mandatory: false,
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
    //       ]
    //     }
    //     // {}
    //   ]
    // },
    // {
    //   question: 'Dirección o direcciones de correo electrónico del/los propietarios',
    //   wordToReplace: 'id-unidnew-3',
    //   identifier: 'id-unidnew-3',
    //   placeholder: 'P. ej: ejemplo@email.com',
    //   type: 'iText',
    //   subType: 'textarea',
    //   replacement: '',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'insideText',
    //     value: 'Si lo desea, señale en este espacio la dirección o direcciones de correo electrónico de los propietarios. Esto puede facilitar y hacer más fluidas las comunicaciones entre las partes.  Si no desea indicar la dirección o direcciones de correo electrónico, deje este espacio en blanco.',
    //   },
    //   isEmpty: {
    //     prepend: 'La parte ARRENDATARIA podrá comunicarse con la parte ARRENDADORA a través de: <br>',
    //     append: '',
    //   }
    // },
    // {
    //   type: 'iForEach',
    //   value: 1,
    //   min: 1,
    //   max: 10,
    //   replacement: '',
    //   identifier: 'id-unid-4',
    //   wordToReplace: 'id-unid-4',
    //   question: '¿Cuántas personas van a ocupar la vivienda alquilada en tanto que inquilinos ?(arrendatarios):',
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
    //           question: 'La persona arrendataria ->(index) (inquilino) es:',
    //           questionOriginal: 'La persona arrendataria ->(index) (inquilino) es:',
    //           hasIndex: true,
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
    //                       value: 'La persona puede concluir y firmar el contrato en nombre y representación propios o representado por otra persona. En caso de ser representado por otra persona, estamos hablando de un representante legal (como es el caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). Un representante voluntario precisa de autorización mediante documento público o privado. Si el contrato se concluye en nombre y representación propios, esta misma persona firmará el contrato y asumirá las obligaciones. Por el contrario, si es mediante representante, es esta otra persona quien firma el contrato; sin embargo, es la persona a la que representa quien asumirá las obligaciones derivadas de este contrato. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
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
    //                           extraReplacements: [],
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
    //                         replacementOriginal: 'id-unid-4_1_opA_1_opB_5, mayor de edad, con domicilio en id-unid-4_1_opA_1_opB_9, id-unid-4_1_opA_1_opB_6 número: id-unid-4_1_opA_1_opB_7, en calidad de id-unid-4_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de id-unid-4_1_opA_1_opB_1, con domicilio en id-unid-4_1_opA_1_opB_2 y id-unid-4_1_opA_1_opB_3 número id-unid-4_1_opA_1_opB_4.',
    //                         // tslint:disable-next-line:max-line-length
    //                         replacement: 'id-unid-4_1_opA_1_opB_5, mayor de edad, con domicilio en id-unid-4_1_opA_1_opB_9, id-unid-4_1_opA_1_opB_6 número: id-unid-4_1_opA_1_opB_7, en calidad de id-unid-4_1_opA_1_opB_8, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de id-unid-4_1_opA_1_opB_1, con domicilio en id-unid-4_1_opA_1_opB_2 y id-unid-4_1_opA_1_opB_3 número id-unid-4_1_opA_1_opB_4.',
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
    //                             extraReplacements: [],
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
    //                               value: 'Nombre completo, incluyendo los apellidos, de la persona física que firma este contrato en nombre y representación de este arrendatario. El contrato puede ser firmado por un representante legal o voluntario. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>Poder de representación</strong></a>',
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
    //                             extraReplacements: [],
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
    //               replacementOriginal: 'id-unid-4_1_opB_5 actuando en nombre y representación de: id-unid-4_1_opB_1, con domicilio en id-unid-4_1_opB_new1,  C.I.F/N.I.F número id-unid-4_1_opB_2, e inscrita en: id-unid-4_1_opB_3  con la siguiente información: id-unid-4_1_opB_4.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'id-unid-4_1_opB_5 actuando en nombre y representación de: id-unid-4_1_opB_1, con domicilio en id-unid-4_1_opB_new1,  C.I.F/N.I.F número id-unid-4_1_opB_2, e inscrita en: id-unid-4_1_opB_3  con la siguiente información: id-unid-4_1_opB_4.',
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
    //                   question: 'Domicilio social completo de la persona jurídica arrendataria (inquilino):',
    //                   wordToReplace: 'id-unid-4_1_opB_new1',
    //                   identifier: 'id-unid-4_1_opB_new1',
    //                   type: 'iText',
    //                   placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    //                   replacement: '',
    //                   indications: {
    //                     areIndications: true,
    //                     indicationsType: 'insideText',
    //                     // tslint:disable-next-line:max-line-length
    //                     value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) del domicilio',
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
    //                     value: 'Se trata del número de identificación fiscal para empresas y sociedades, personas físicas o cualquier tipo de entidad que desarrolle actividad de naturaleza mercantil y que, además, sea sujeto de obligaciones burocráticas, como el hecho de emitir o percibir facturas. Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAAUNjMyNjtbLUouLM_DxbIwMDCwNzAwuQQGZapUt-ckhlQaptWmJOcSoAzXFkZjUAAAA=WKE" target="_blank"><strong>NIF empresarial</strong></a>.',
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
    //                     value: 'Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank"><strong>Datos registrales</strong></a>',
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
    //                     value: 'Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc). Si desea más información sobre esta figura consulte el siguiente enlace: <a href="https://registropropiedad.derecho.com/q/que-son-los-datos-registrales.html" target="_blank"><strong>Datos registrales</strong></a>',
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
    //                       replacementOriginal: ' id-unid-4_1_opB_5_1, mayor de edad, con domicilio en id-unid-4_1_opB_5_2, id-unid-4_1_opB_5_3 núm. id-unid-4_1_opB_5_4, y en calidad de id-unid-4_1_opB_5_5; <br> <br>',
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
    //                           mandatory: false,
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
    //                           mandatory: false,
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
    //                           extraReplacements: [],
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
    //                           mandatory: false,
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
    //                           mandatory: false,
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
    //       ]
    //     }
    //     // {}
    //   ]
    // },
    // {
    //   question: 'Dirección o direcciones de correo electrónico del/los inquilinos',
    //   wordToReplace: 'id-unidnew-4',
    //   identifier: 'id-unidnew-4',
    //   placeholder: 'P. ej: ejemplo@email.com',
    //   type: 'iText',
    //   subType: 'textarea',
    //   replacement: '',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'insideText',
    //     value: 'Si lo desea, señale en este espacio la dirección o direcciones de correo electrónico de los inquilinos. Esto puede facilitar y hacer más fluidas las comunicaciones entre las partes.  Si no desea indicar la dirección o direcciones de correo electrónico, deje este espacio en blanco.',
    //   },
    //   isEmpty: {
    //     prepend: 'La parte ARRENDADORA podrá comunicarse con la parte ARRENDATARIA a través de: <br>',
    //     append: '',
    //   }
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
    //   mandatory: false,
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
    //   type: 'iText',
    //   subType: 'textarea',
    //   identifier: 'id-unid-8',
    //   wordToReplace: 'id-unid-8',
    //   replacement: '',
    //   question: 'Haga una descripción detallada de los componentes de la vivienda:',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'insideText',
    //     value: 'Haga un descripción de las zonas de la vivienda, es decir de las partes, espacios, anexos, depedencias de la misma.'
    //   },
    //   placeholder: 'P. ej. 4 habitaciones, Una cocina, un salón, dos baños, un garaje, un jardín de 10 m2...',
    //   mandatory: false,
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
    //   mandatory: false,
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
    //   mandatory: false,
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
    //   type: 'iRadioB',
    //   question: '¿Desea incluir de forma anexa al contrato fotografías recientes del estado actual de la vivienda?',
    //   identifier: 'id-dec-new11',
    //   wordToReplace: 'id-dec-new11',
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
    //       replacementOriginal: 'Junto al presente contrato se adjuntan fotografías de La Vivienda a los efectos de dejar constancia del estado de la misma en el momento del arriendo.',
    //       replacement: 'Junto al presente contrato se adjuntan fotografías de La Vivienda a los efectos de dejar constancia del estado de la misma en el momento del arriendo.',
    //       radioId: 'id-dec-new11_opA',
    //       identifier: 'id-dec-new11_opA',
    //       extraReplacements: [

    //       ],
    //       checked: false,
    //     },
    //     {
    //       label: 'No',
    //       replacementOriginal: '',
    //       replacement: '',
    //       radioId: 'id-dec-new11_opB',
    //       identifier: 'id-dec-new11_opB',
    //       extraReplacements: [
    //       ],
    //       checked: true,
    //     }
    //   ]
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
    //     }
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí',
    //       replacementOriginal: '<br><br>Todos los gastos de Comunidad correrán a cargo de id-dec-12_opA_1<br> <br> Los gastos extraordinarios de Comunidad que correspondan a la Vivienda serán por cuenta y a cargo id-dec-12_opA_2',
    //       replacement: '<br><br>Todos los gastos de Comunidad correrán a cargo de id-dec-12_opA_1<br> <br> Los gastos extraordinarios de Comunidad que correspondan a la Vivienda serán por cuenta y a cargo id-dec-12_opA_2',
    //       extraReplacements: [
    //         {
    //           identifier: 'iddec12-extra-1',
    //           replacement: 'las normas de la Comunidad o ',
    //           replacementOriginal: 'las normas de la Comunidad o ',
    //           insideId: 'opA'
    //         },
    //         {
    //           identifier: 'iddec12-extra-2',
    //           replacement: '<br><br>Igualmente está obligada a requerir a la Comunidad de Propietarios, a instancias de la parte ARRENDATARIA, para la realización de las obras de reparación o adecuación que puedan necesitar los elementos comunes. ',
    //           replacementOriginal: '<br><br>Igualmente está obligada a requerir a la Comunidad de Propietarios, a instancias de la parte ARRENDATARIA, para la realización de las obras de reparación o adecuación que puedan necesitar los elementos comunes. ',
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
    //           replacement: '<br><br>Estando ubicada la Vivienda en un inmueble organizado en una Comunidad de Propietarios, la parte ARRENDATARIA se obliga durante toda la vigencia del Contrato a: no contravenir los buenos usos de vecindad, cumplir las normas contenidas en los estatutos de la Comunidad y de la policía urbana, así como evitar molestar a vecinos con ruidos, fiestas, música, etc., que contravengan las Ordenanzas Municipales. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.',
    //           replacementOriginal: '<br><br>Estando ubicada la Vivienda en un inmueble organizado en una Comunidad de Propietarios, la parte ARRENDATARIA se obliga durante toda la vigencia del Contrato a: no contravenir los buenos usos de vecindad, cumplir las normas contenidas en los estatutos de la Comunidad y de la policía urbana, así como evitar molestar a vecinos con ruidos, fiestas, música, etc., que contravengan las Ordenanzas Municipales. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.',
    //           insideId: 'opD'
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
    //           question: '¿Quién asumirá los gastos generales u ordinarios (cuotas) de la comunidad de la que forma parte la vivienda?',
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
    //               replacementOriginal: 'la parte ARRENDADORA.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'la parte ARRENDADORA.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-12_opA_1_opA',
    //               identifier: 'id-dec-12_opA_1_opA',
    //               checked: true,
    //               subSteps: []
    //             },
    //             {
    //               label: 'los dos, el arrendatario y  el arrendador, conjuntamente',
    //               replacementOriginal: 'ambas Partes. En concreto, a la parte ARRENDATARIA le corresponderá abonar un id-dec-12_opA_1_opB_1 % de los mismos id-dec-12_opA_1_opB_2',
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
    //                       replacementOriginal: 'El importe de los gastos de Comunidad no está incluido en la renta. Siendo que la parte ARRENDATARIA tendrá que abonarlos por separado a la parte ARRENDADORA, que a su vez está obligada a entregar recibo a la parte ARRENDATARIA en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la parte ARRENDATARIA.  Los gastos ordinarios de Comunidad para la Vivienda actualmente ascienden a la cantidad de iddec12opA1opB2opA1-precioAletras ( id-dec-12_opA_1_opB_2_opA_1 €) mensuales.',
    //                       // tslint:disable-next-line:max-line-length
    //                       replacement: 'El importe de los gastos de Comunidad no está incluido en la renta. Siendo que la parte ARRENDATARIA tendrá que abonarlos por separado a la parte ARRENDADORA, que a su vez está obligada a entregar recibo a la parte ARRENDATARIA en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la parte ARRENDATARIA.  Los gastos ordinarios de Comunidad para la Vivienda actualmente ascienden a la cantidad de iddec12opA1opB2opA1-precioAletras ( id-dec-12_opA_1_opB_2_opA_1 €) mensuales.',
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
    //                       replacementOriginal: 'El importe de los gastos de Comunidad está incluido dentro de la renta. Siendo que la parte ARRENDATARIA no tiene que abonarlos por separado a la parte ARRENDADORA, y ésta no está obligada a entregar recibo a la parte ARRENDATARIA en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la parte ARRENDATARIA, si bien estos gastos están previstos dentro de la renta. ',
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
    //           question: '¿Quién asumirá los gastos extraordinarios (connocidos comúnmente como derramas) de la comunidad de la que forma parte la vivienda?',
    //           identifier: 'id-dec-12_opA_2',
    //           wordToReplace: 'id-dec-12_opA_2',
    //           defaultRadioId: 'id-dec-12_opA_2_opA',
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             // tslint:disable-next-line:max-line-length
    //             value: 'Los gastos extraordinarios no se contemplan en los Presupuestos Anuales y se utilizan para la realización de algún tipo de obra o reforma de elementos comunes.<br><br>Para recaudar los fondos se suele convocar una Junta Extraordinaria, en la que se comunicará a todos los propietarios el problema y se buscará la mejor solución para su arreglo. También se decide aquí la forma de pago, que puede ser con cargo al dinero ahorrado por la Comunidad, con la aprobación de una derrama o con una subida proporcional en la cuota de la comunidad.'
    //           },
    //           replacement: '',
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'por el arrendador (propietario)',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'de la parte ARRENDADORA en su totalidad.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'de la parte ARRENDADORA en su totalidad.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-12_opA_2_opA',
    //               identifier: 'id-dec-12_opA_2_opA',
    //               checked: true,
    //               subSteps: []
    //             },
    //             {
    //               label: 'los dos, el arrendatario (inquilino) y  el arrendador (propietario), conjuntamente',
    //               replacementOriginal: 'de ambas Partes. En concreto, a la parte ARRENDATARIA le corresponderá abonar un iddec12opA2opB1-precioAletras por ciento (id-dec-12_opA_2_opB_1 %) de los mismos.',
    //               replacement: 'de ambas Partes. En concreto, a la parte ARRENDATARIA le corresponderá abonar un iddec12opA2opB1-precioAletras por ciento (id-dec-12_opA_2_opB_1 %) de los mismos.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-12_opA_2_opB',
    //               identifier: 'id-dec-12_opA_2_opB',
    //               checked: false,
    //               subSteps: [
    //                 {
    //                   question: '¿Qué porcentaje de estos gastos extraordinarios (o también conocidos como derramas) deberá pagar el arrendatario (inquilino)?',
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
    //                       rulename: 'extraReplacementAletras',
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
    //   type: 'iRadioC',
    //   question: '¿La vivienda se alquila amueblada de manera que el arrendatario (inquilino) pueda hacer uso de la misma desde su entrada?',
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
    //           replacement: 'y su mobiliario',
    //           replacementOriginal: 'y su mobiliario',
    //           insideId: 'opA'
    //         },
    //       ],
    //       radioId: 'id-dec-15_opA',
    //       identifier: 'id-dec-15_opA',
    //       checked: true,
    //       subSteps: [
    //         {
    //           type: 'iRadioC',
    //           question: 'Los muebles de la vivienda se encuentran descritos en:',
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

    //           ],
    //           radios: [
    //             {
    //               label: 'este contrato',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'está amueblada con el siguiente mobiliario, enseres y objetos: id-dec-15_opA_1_opA_1',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'está amueblada con el siguiente mobiliario, enseres y objetos: id-dec-15_opA_1_opA_1',
    //               extraReplacements: [

    //               ],
    //               radioId: 'id-dec-15_opA_1_opA',
    //               identifier: 'id-dec-15_opA_1_opA',
    //               checked: true,
    //               subSteps: [
    //                 {
    //                   type: 'iText',
    //                   subType: 'textarea',
    //                   identifier: 'id-dec-15_opA_1_opA_1',
    //                   wordToReplace: 'id-dec-15_opA_1_opA_1',
    //                   replacement: '',
    //                   question: 'Descripción detallada de los muebles de la vivienda:',
    //                   indications: {
    //                     areIndications: false,
    //                     indicationsType: '',
    //                     value: ''
    //                   },
    //                   placeholder: 'P. ej. Una cama doble marca IXX modelo XX, un colchón marca XXX modelo XXX, ...',
    //                   mandatory: false,
    //                   isFocused: false
    //                 },
    //               ]
    //             },
    //             {
    //               label: 'en otro documento anexo (o adjunto) a este contrato',
    //               replacementOriginal: 'se cede en arrendamiento con el mobiliario que se detalla en el inventario, Anexo I, del presente contrato de arrendamiento de vivienda.',
    //               replacement: 'se cede en arrendamiento con el mobiliario que se detalla en el inventario, Anexo I, del presente contrato de arrendamiento de vivienda.',
    //               extraReplacements: [
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
    //   question: 'Indique la duración del contrato de alquiler',
    //   wordToReplace: 'id-dec-20',
    //   identifier: 'id-dec-20',
    //   placeholder: 'P. ej: 15 dias, 6 meses, 1 año,..',
    //   type: 'iText',
    //   replacement: '',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     value: 'Arrendador y arrendatario pueden pactar libremente los años que estará en vigor, sin embargo, en caso de que la duración sea inferior a los cinco años, o siete si el propietario es persona jurídica, el contrato se extenderá hasta estos cinco o siete si el arrendatario así lo desea, es decir, se prorrogará obligatoriamente por plazos anuales hasta alcanzar la duración mínima exigida',
    //   }
    // },
    // {
    //   question: 'Fecha de comienzo del alquiler y en el que el arrrendatario (inquilino) podrá hacer uso de la misma (no tiene que ser la misma en la que se firma el contrato, se puede firmar el contrato y entrar a la vivienda más adelante):',
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
    //   type: 'iRadioB',
    //   question: 'Una vez hayan pasados 6 meses desde el incio del alquiler, ¿desea establecer una cláusula por la cual el inquilino deba indemnizar al propietario si abandonase el piso de forma anticipada?',
    //   identifier: 'id-dec-22',
    //   wordToReplace: 'id-dec-22',
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
    //       replacementOriginal: 'En virtud del artículo 11 de la Ley de Arrendamientos Urbanos (LAU), la PARTE ARRENDATARIA podrá desistir del contrato, una vez que hayan transcurrido al menos seis meses de arrendamiento. Para el supuesto de que antes de finalizar el plazo estipulado en el contrato, es decir, 1 año, el arrendatario desistiera del mismo, deberá avisar al arrendador con una antelación mínima de treinta días, y le indemnizará con una cantidad equivalente a una mensualidad de la renta en vigor.',
    //       replacement: 'En virtud del artículo 11 de la Ley de Arrendamientos Urbanos (LAU), la PARTE ARRENDATARIA podrá desistir del contrato, una vez que hayan transcurrido al menos seis meses de arrendamiento. Para el supuesto de que antes de finalizar el plazo estipulado en el contrato, es decir, 1 año, el arrendatario desistiera del mismo, deberá avisar al arrendador con una antelación mínima de treinta días, y le indemnizará con una cantidad equivalente a una mensualidad de la renta en vigor.',
    //       radioId: 'id-dec-22_opA',
    //       identifier: 'id-dec-22_opA',
    //       extraReplacements: [

    //       ],
    //       checked: true,
    //     },
    //     {
    //       label: 'No',
    //       replacementOriginal: 'En virtud del artículo 11 de la Ley de Arrendamientos Urbanos (LAU), la PARTE ARRENDATARIA podrá desistir del contrato, una vez que hayan transcurrido al menos seis meses de arrendamiento. Para el supuesto de que antes de finalizar el plazo estipulado en el contrato, es decir, 1 año, el arrendatario desistiera del mismo, deberá avisar al arrendador con una antelación mínima de treinta días, y no tendrá que indemnizar a la PARTE ARRENDADORA con ninguna cantidad.',
    //       replacement: 'En virtud del artículo 11 de la Ley de Arrendamientos Urbanos (LAU), la PARTE ARRENDATARIA podrá desistir del contrato, una vez que hayan transcurrido al menos seis meses de arrendamiento. Para el supuesto de que antes de finalizar el plazo estipulado en el contrato, es decir, 1 año, el arrendatario desistiera del mismo, deberá avisar al arrendador con una antelación mínima de treinta días, y no tendrá que indemnizar a la PARTE ARRENDADORA con ninguna cantidad.',
    //       radioId: 'id-dec-22_opB',
    //       identifier: 'id-dec-22_opB',
    //       extraReplacements: [
    //       ],
    //       checked: false,
    //     }
    //   ]
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
    //       replacementOriginal: 'Las Partes han acordado que la renta será de iddec27opA2-precioAletras (id-dec-27_opA_2 €) por cada período siguiente: id-dec-27_opA_1. La obligación de la parte ARRENDATARIA de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br><br> id-dec-28 <br><br> id-dec-27_opA_3 <br><br> Las partes acuerdan que el pago de la renta será id-dec-29 <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la vivienda arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'Las Partes han acordado que la renta será de iddec27opA2-precioAletras (id-dec-27_opA_2 €) por cada período siguiente: id-dec-27_opA_1. La obligación de la parte ARRENDATARIA de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br> id-dec-28 <br> id-dec-27_opA_3 <br> Las partes acuerdan que el pago de la renta será id-dec-29 <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la vivienda arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
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
    //           mandatory: false,
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
    //           mandatory: false,
    //           isFocused: false,
    //           extraReplacements: [
    //           ],
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
    //           question: 'El pago del alquiler se realizará:',
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
    //               replacementOriginal: 'El pago de la renta se realizará de la siguiente manera: id-dec-27_opA_3_opB_1.',
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
    //       replacementOriginal: 'La renta total pactada por las Partes es de iddec27opB1-precioAletras (id-dec-27_opB_1 €). La obligación de la parte ARRENDATARIA de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br><br> id-dec-28 <br><br> id-dec-27_opB_2',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'La renta total pactada por las Partes es de iddec27opB1-precioAletras (id-dec-27_opB_1 €). La obligación de la parte ARRENDATARIA de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br> id-dec-28 <br> id-dec-27_opB_2',
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
    //           mandatory: false,
    //           isFocused: false,
    //           extraReplacements: [],
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
    //           question: '¿En qué momento se va a realizar el pago del alquiler?',
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
    //               replacementOriginal: 'El pago de la renta se realiza de forma completa al momento de firmar el presente Contrato, recibiendo la parte ARRENDADORA en este acto su importe a su entera satisfacción, y constituyendo el presente documento la más formal y fiel carta de pago.<br><br> El pago se realizará id-dec-29',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'El pago de la renta se realiza de forma completa al momento de firmar el presente Contrato, recibiendo la parte ARRENDADORA en este acto su importe a su entera satisfacción, y constituyendo el presente documento la más formal y fiel carta de pago.<br> El pago se realizará id-dec-29',
    //               extraReplacements: [],
    //               radioId: 'id-dec-27_opB_2_opA',
    //               identifier: 'id-dec-27_opB_2_opA',
    //               checked: true,
    //               subSteps: []
    //             },
    //             {
    //               label: 'toda la cantidad en una fecha posterior escogida',
    //               replacementOriginal: 'El pago de la renta se realizará de forma completa a más tardar el día id-dec-27_opB_2_opB_1. <br><br> El pago se realizará id-dec-29. <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la vivienda arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
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
    //               replacementOriginal: 'El pago de la renta se realiza de forma parcial al momento de firmar el presente Contrato, recibiendo en este acto la parte ARRENDADORA el importe de iddec27opB2opC1-precioAletras (id-dec-27_opB_2_opC_1 €), de lo cual este documento constituye la más formal y fiel carta de pago. El resto de la renta será pagado por la parte ARRENDATARIA a más tardar el día id-dec-27_opB_2_opC_2. <br><br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la vivienda arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
    //               replacement: 'El pago de la renta se realiza de forma parcial al momento de firmar el presente Contrato, recibiendo en este acto la parte ARRENDADORA el importe de iddec27opB2opC1-precioAletras (id-dec-27_opB_2_opC_1 €), de lo cual este documento constituye la más formal y fiel carta de pago. El resto de la renta será pagado por la parte ARRENDATARIA a más tardar el día id-dec-27_opB_2_opC_2. <br>br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la vivienda arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
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
    //                   mandatory: false,
    //                   isFocused: false,
    //                   extraReplacements: [],
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
    //               replacementOriginal: 'El pago de la renta se realizará de forma fraccionada, abonando el importe de iddec27opB2opD1-precioAletras (id-dec-27_opB_2_opD_1 €) en el momento de la puesta a disposición de la vivienda a la parte ARRENDATARIA para su uso y disfrute. El resto de la renta será pagado por la parte ARRENDATARIA a más tardar el día id-dec-27_opB_2_opD_2. <br><br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la vivienda arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
    //               replacement: 'El pago de la renta se realizará de forma fraccionada, abonando el importe de iddec27opB2opD1-precioAletras (id-dec-27_opB_2_opD_1 €) en el momento de la puesta a disposición de la vivienda a la parte ARRENDATARIA para su uso y disfrute. El resto de la renta será pagado por la parte ARRENDATARIA a más tardar el día id-dec-27_opB_2_opD_2. <br><br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la vivienda arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
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
    //                   mandatory: false,
    //                   isFocused: false,
    //                   extraReplacements: [],
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
    //               replacementOriginal: 'El pago de la renta se realizará de la siguiente manera: id-dec-27_opB_2_opE_1. <br><br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la vivienda arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
    //               replacement: 'El pago de la renta se realizará de la siguiente manera: id-dec-27_opB_2_opE_1. <br> El pago se realizará id-dec-29 <br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la vivienda arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
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
    //                   mandatory: false,
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
    //       replacementOriginal: 'mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): id-dec-29_opA_2 de la entidad: id-dec-29_opA_1, y cuyo titular es: id-dec-29_opA_3. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): id-dec-29_opA_2 de la entidad: id-dec-29_opA_1, y cuyo titular es: id-dec-29_opA_3. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
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
    //       replacementOriginal: 'mediante pago en efectivo. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'mediante pago en efectivo. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
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
    //       replacementOriginal: 'mediante: id-dec-29_opC_1. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'mediante: id-dec-29_opC_1. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
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
    //   question: ' ¿Se establece una cláusula que recoja actualización de la renta (cláusula que permite aumentar el valor del alquiler periódicamente)?',
    //   identifier: 'id-dec-new30',
    //   wordToReplace: 'id-dec-new30',
    //   defaultRadioId: 'id-dec-new30_opA',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     // tslint:disable-next-line:max-line-length
    //     value: 'La ley establece la libertad de pacto entre las partes a la hora de la actualización de la renta del alquiler. Así, en la fecha que se cumpla cada año de vigencia del contrato, en los términos pactados por arrendador y arrendatario, dejando el IPC General como referencia para la revisión cuando no exista pacto expreso al respecto. En este último supuesto, el contrato se actualizará aplicando a la renta correspondiente a la anualidad anterior la variación porcentual experimentada por IPC durante los doce meses inmediatamente anteriores a la fecha de cada actualización, tomando como mes de referencia para la primera actualización y en las sucesivas el último índice publicado en la fecha de celebración del contrato.'
    //   },
    //   replacement: '',
    //   extraReplacements: [
    //   ],
    //   radios: [
    //     {
    //       label: 'Sí:',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: '<br><br>Las partes acuerdan que la renta será objeto de revisión, a partir del primer año de contrato, y será revisada: id-dec-new30_opA_1. id-dec-new30_opA_2. El cobro de la renta cuyo precio se haya actualizado será exigible en la cuota, o preiodicidad correspondiente tras la notificación expresa y por escrito de dicha actualización. El retraso o impago de la nueva renta no supondrá la renuncia a la misma.',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: '<br><br>Las partes acuerdan que la renta será objeto de revisión, y será revisada: id-dec-new30_opA_1. id-dec-new30_opA_2. El cobro de la renta cuyo precio se haya actualizado será exigible en la cuota, o preiodicidad correspondiente tras la notificación expresa y por escrito de dicha actualización. El retraso o impago de la nueva renta no supondrá la renuncia a la misma.',
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
    //           question: '¿En función de qué medidor el alquiler podrá ser aumentado?',
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
    //               replacementOriginal: 'Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice General Nacional del Sistema de Precios al Consumo (IPC). Esta actualización se efectuará de forma automática, comunicando previamente por parte del arrendador a la arrendataria la cantidad diferencial. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice General Nacional del Sistema de Precios al Consumo (IPC). Esta actualización se efectuará de forma automática, comunicando previamente por parte del arrendador a la arrendataria la cantidad diferencial. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia',
    //               extraReplacements: [],
    //               radioId: 'id-dec-new30_opA_2_opA',
    //               identifier: 'id-dec-new30_opA_2_opA',
    //               checked: true,
    //               subSteps: [
    //               ]
    //             },
    //             {
    //               label: 'en función de un índice acordado por las partes como, por ejemplo, el IPC',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'Este incremento se realizará por referencia al siguiente índice: id-dec-new30_opA_2_opB_1. Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice elegido. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'Este incremento se realizará por referencia al siguiente índice: id-dec-new30_opA_2_opB_1. Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada por el Índice elegido. Cuando la tasa de variación de este índice se sitúe por debajo de 0 por ciento, se tomará éste valor (0) como referencia',
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
    //                     value: 'Si lo desea, indique aquí el nombre o denominación del índice que las partes prevén en el contrato de alquiler para actualizar la renta; es decir para revisar el valor o precio del alquiler de la vivienda objeto de este contrato con la periodicidad o frecuencia que ha sido determinada.<br> Si no desea prever un índice, en el contrato se establecerá la actualización de la renta por referencia al Índice de Garantía de Competitividad (IGC) fijado por el Instituto Nacional de Estadística.'
    //                   },
    //                   rules: [],
    //                 }
    //               ]
    //             },
    //             {
    //               label: 'aplicando un porcentaje establcido por las partes',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'Este incremento será de un iddecnew30opA2opC1-precioAletras por ciento (id-dec-new30_opA_2_opC_1 %). Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'Este incremento será de un iddecnew30opA2opC1-precioAletras por ciento (id-dec-new30_opA_2_opC_1 %). Las expresadas revisiones que las partes convienen se harán acumuladamente aplicando a la renta correspondiente la variación porcentual experimentada',
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
    //                   rules: [
    //                     {
    //                       condition: false,
    //                       rulename: 'extraReplacementAletras',
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
    //   question: 'Además del precio del alquiler de la vivienda, ¿el arrendatario (inquilino) pagará gastos para la limpieza de la misma?',
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
    //       replacementOriginal: '<br><br>El importe de los gastos de limpieza de vivienda y zonas comunes no está incluido dentro en la renta. Siendo que la parte ARRENDATARIA tendrá que abonarlos. id-dec-30_opA_1 Siendo que la parte ARRENDATARIA tendrá que abonarlos por separado a la parte ARRENDADORA, ésta, a su vez está obligada a entregar recibo a la parte ARRENDATARIA en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la parte ARRENDATARIA. id-dec-30_opA_2',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: '<br><br>El importe de los gastos de limpieza de vivienda y zonas comunes no está incluido dentro en la renta. Siendo que la parte ARRENDATARIA tendrá que abonarlos. id-dec-30_opA_1 Siendo que la parte ARRENDATARIA tendrá que abonarlos por separado a la parte ARRENDADORA, ésta, a su vez está obligada a entregar recibo a la parte ARRENDATARIA en el que se especifiquen los diferentes conceptos que componen los pagos efectuados por la parte ARRENDATARIA. id-dec-30_opA_2',
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
    //               replacementOriginal: 'Estos gastos de limpieza ascenderán a iddec30opA1opB1-precioAletras (id-dec-30_opA_1_opB_1 €) para la duración total del Contrato de arrendamiento.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'Estos gastos de limpieza ascenderán a iddec30opA1opB1-precioAletras (id-dec-30_opA_1_opB_1 €) para la duración total del Contrato de arrendamiento.',
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
    //             prepend: 'Las Partes acuerdan que dicho pago retribuirá el siguiente servicio de limpieza: ',
    //             append: '.',
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
    //   question: 'Si lo desea, indique aquí los servicios que han sido contratados por el arrendador (propietario) y pueden ser utilizados por el arrendatario (inquilino)',
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
    //     append: '.',
    //   }
    // },
    // {
    //   type: 'iRadioC',
    //   question: 'El pago de los gastos que se generen por usar la vivienda, como, por ejemplo, el agua, el gas, internet,... será asumido por:',
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
    //       replacementOriginal: 'Igualmente, el pago de todos los servicios y suministros individualizados será por cuenta y a cargo de la PARTE ARRENDATARIA.<br><br> id-dec-32_opA_1',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'Igualmente, el pago de todos los servicios y suministros individualizados será por cuenta y a cargo de la PARTE ARRENDATARIA.<br><br> id-dec-32_opA_1',
    //       extraReplacements: [],
    //       radioId: 'id-dec-32_opA',
    //       identifier: 'id-dec-32_opA',
    //       checked: true,
    //       subSteps: [
    //         {
    //           type: 'iRadioC',
    //           question: 'Estos gastos de uso de la vivienda:',
    //           identifier: 'id-dec-32_opA_1',
    //           wordToReplace: 'id-dec-32_opA_1',
    //           defaultRadioId: 'id-dec-32_opA_1',
    //           indications: {
    //             areIndications: true,
    //             indicationsType: 'outsideText',
    //             // tslint:disable-next-line:max-line-length
    //             value: 'Seleccione la opción que corresponda al abono de los gastos de los servicios que se generen como consecuencia del uso de la vivienda por el arrendatario durante la vigencia del contrato de arrendamiento; es decir, de los suministros de electricidad, agua, gas, internet o teléfono.'
    //           },
    //           replacement: '',
    //           extraReplacements: [
    //           ],
    //           radios: [
    //             {
    //               label: 'no está incluídos en el precio del alquiler',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'La PARTE ARRENDATARIA se compromete al abono de estos gastos, conociendo y aceptando que el importe de los mismos no ha sido tomado en consideración al fijar el importe de la renta. Dichos gastos los pagará la PARTE ARRENDATARIA a la PARTE ARRENDADORA en la misma forma prevista para la renta. La PARTE ARRENDADORA entregará el recibo correspondiente por este concepto a la PARTE ARRENDATARIA después del pago. id-dec-32_opA_1_opA_1 id-dec-32_opA_1_opA_2',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'La PARTE ARRENDATARIA se compromete al abono de estos gastos, conociendo y aceptando que el importe de los mismos no ha sido tomado en consideración al fijar el importe de la renta. Dichos gastos los pagará la PARTE ARRENDATARIA a la PARTE ARRENDADORA en la misma forma prevista para la renta. La PARTE ARRENDADORA entregará el recibo correspondiente por este concepto a la PARTE ARRENDATARIA después del pago. id-dec-32_opA_1_opA_1 id-dec-32_opA_1_opA_2',
    //               extraReplacements: [],
    //               radioId: 'id-dec-32_opA_1_opA',
    //               identifier: 'id-dec-32_opA_1_opA',
    //               checked: true,
    //               subSteps: [
    //                 {
    //                   question: 'Importe mínimo (en euros) que el arrendatario deberá pagar mensualmente por los gastos derivados del uso de la vivienda:',
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
    //                     prepend: '<br><br>La parte ARRENDATARIA no pagará en ningún caso menos de ',
    //                     append: ' euros mensuales.',
    //                   }
    //                 },
    //                 {
    //                   question: 'Importe máximo (en euros que el arrendatario deberá pagar mensualmente por los gastos derivados del uso de la vivienda:',
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
    //                     prepend: '<br><br>La parte ARRENDATARIA no pagará en ningún caso más de ',
    //                     append: ' euros mensuales.',
    //                   }
    //                 }
    //               ]
    //             },
    //             {
    //               label: 'están incluidos precio alquiler',
    //               // tslint:disable-next-line:max-line-length
    //               replacementOriginal: 'El importe de estos gastos está incluido dentro de la renta. Siendo que la parte ARRENDATARIA no tiene que abonarlos por separado, la parte ARRENDADORA no está obligada a entregar recibo a la parte ARRENDATARIA en el que se especifiquen los diferentes conceptos que componen los pagos efectuados.',
    //               // tslint:disable-next-line:max-line-length
    //               replacement: 'El importe de estos gastos está incluido dentro de la renta. Siendo que la parte ARRENDATARIA no tiene que abonarlos por separado, la parte ARRENDADORA no está obligada a entregar recibo a la parte ARRENDATARIA en el que se especifiquen los diferentes conceptos que componen los pagos efectuados.',
    //               extraReplacements: [],
    //               radioId: 'id-dec-32_opA_1_opB',
    //               identifier: 'id-dec-32_opA_1_opB',
    //               checked: true,
    //               subSteps: [
    //               ]
    //             },
    //           ],
    //         }
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
    //           question: 'Importe máximo (en euros) que el arrendador pagará mensualmente por estos gastos de uso de la vivienda:',
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
    //             value: 'Esto supone que aunque el importe que proporcionalmente le corresponda de los gastos de la vivienda (teniendo en cuenta el número de habitaciones ocupadas) sea superior, el arrendador solo se compromete a pagar este importe. La diferencia deberá ser pagada por el arrendatario.'
    //           },
    //           rules: [],
    //           isEmpty: {
    //             prepend: 'No obstante, las Partes acuerdan que la parte ARRENDADORA solo asumirá los gastos totales de la Vivienda hasta un máximo de ',
    //             append: ' euros mensuales',
    //           }
    //         },
    //       ]
    //     },
    //     {
    //       label: 'los dos, el arrendatario y el arrendado',
    //       // tslint:disable-next-line:max-line-length
    //       replacementOriginal: 'El pago de todos los servicios y suministros individualizados será por cuenta y a cargo de ambas Partes, siendo divididos de la siguiente manera:<br><br> id-dec-32_opC_1',
    //       // tslint:disable-next-line:max-line-length
    //       replacement: 'El pago de todos los servicios y suministros individualizados será por cuenta y a cargo de ambas Partes, siendo divididos de la siguiente manera:<br><br> id-dec-32_opC_1',
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
    {
      type: 'iRadioC',
      question: 'El Impuesto sobre Bienes Inmuebles (IBI) de la vivienda lo pagará:',
      identifier: 'id-dec-33',
      wordToReplace: 'id-dec-33',
      defaultRadioId: 'id-dec-33_opA',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: 'Cuando eres el propietario de una vivienda, local o plaza de garaje, debes tener en cuenta que existen una serie de impuestos asociados que estás obligado a pagar. El Impuesto de Bienes Inmuebles (IBI) es uno de ellos. <br> El IBI es un impuesto de los llamados directos que grava la titularidad de los derechos reales sobre cualquier bien inmueble localizado en el municipio que recauda el tributo. Lo cobran los ayuntamientos y forma parte de las tasas municipales.'
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'el arrendatario (inquilino)',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'de la parte ARRENDADORA en su totalidad.',
          // tslint:disable-next-line:max-line-length
          replacement: 'de la parte ARRENDADORA en su totalidad.',
          extraReplacements: [],
          radioId: 'id-dec-33_opA',
          identifier: 'id-dec-33_opA',
          checked: true,
          subSteps: [
          ]
        },
        {
          label: 'el arrendatario (inquilino) y el arrendador (propietario)',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'de ambas Partes. En concreto, a la parte ARRENDATARIA le corresponderá abonar un iddec33opB1-precioAletras por ciento (id-dec-33_opB_1 %) del mismo. A este efecto, se hace saber a la parte ARRENDATARIA que el último importe anual conocido para el IBI fue de iddec33opB2-precioAletras (id-dec-33_opB_2 €).',
          // tslint:disable-next-line:max-line-length
          replacement: 'de ambas Partes. En concreto, a la parte ARRENDATARIA le corresponderá abonar un iddec33opB1-precioAletras por ciento (id-dec-33_opB_1 %) del mismo. A este efecto, se hace saber a la parte ARRENDATARIA que el último importe anual conocido para el IBI fue de iddec33opB2-precioAletras (id-dec-33_opB_2 €).',
          extraReplacements: [],
          radioId: 'id-dec-33_opB',
          identifier: 'id-dec-33_opB',
          checked: true,
          subSteps: [
            {
              question: 'Porcentaje del IBI que deberá pagar el arrendatario (inquilino):',
              placeholder: 'Escriba un número menor que 100',
              wordToReplace: 'id-dec-33_opB_1',
              identifier: 'id-dec-33_opB_1',
              type: 'iNumber',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [
                {
                  condition: false,
                  rulename: 'extraReplacementAletras',
                  identifier: 'iddec33opB1-precioAletras',
                  wordToReplace: 'iddec33opB1-precioAletras',
                  replacement: ''
                }
              ],
            },
            {
              question: 'Último importe anual conocido (en euros) del IBI de la vivienda:',
              placeholder: 'Escriba un número',
              wordToReplace: 'id-dec-33_opB_2',
              identifier: 'id-dec-33_opB_2',
              type: 'iNumber',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              rules: [
                {
                  condition: false,
                  rulename: 'extraReplacementToCharacter',
                  identifier: 'iddec33opB2-precioAletras',
                  wordToReplace: 'iddec33opB2-precioAletras',
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