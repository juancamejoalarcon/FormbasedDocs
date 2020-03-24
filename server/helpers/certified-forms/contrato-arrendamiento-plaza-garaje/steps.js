const steps = [
    {
      type: 'start',
      title: 'Contrato de alquiler de plaza de garaje',
      description: `El contrato de alquiler de plaza de garaje 
      es aquel contrato mediante el cual el propietario cederá el 
      uso del espacio habilitado para aparcar un vehículo, ya sea coche o 
      moto, de manera permanente al arrendatario. `,
      isCurrentStep: true
    },
    {
      type: 'iText',
      identifier: 'id-unid-1',
      wordToReplace: 'id-unid-1',
      replacement: '',
      question: 'Lugar (ciudad o población) donde se realiza y firma el contrato:',
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Indique aquí la localidad de celebración y firma del contrato.'
      },
      placeholder: 'P. ej. Albacete',
      mandatory: false,
      isFocused: false
    },
    {
      type: 'iDate',
      identifier: 'id-unid-2',
      wordToReplace: 'id-unid-2',
      replacement: '',
      question: 'Fecha en la que se firma el contrato:',
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Fecha en la que se firma el contrato',
      },
      mandatory: false,
      isFocused: false
    },
    // {
    //   type: 'iForEach',
    //   value: 1,
    //   min: 1,
    //   max: 10,
    //   replacement: '',
    //   identifier: 'id-unid-3',
    //   wordToReplace: 'id-unid-3',
    //   question: '¿Cuántas personas son propietarias de la plaza de garaje que se va a alquilar? (Número de arrendadores):',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     value: 'El arrendador es aquella persona poseedora de la plaza de garaje o autorizada a poder ponerlo en alquiler. Se trata, en definitiva, del propietario de la plaza.',
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
    //   question: '¿Cuántas personas van a ocupar la plaza de garaje alquilada? (arrendatarios):',
    //   indications: {
    //     areIndications: true,
    //     indicationsType: 'outsideText',
    //     value: 'El arrendatario es la persona natural o jurídica que tiene el derecho a disfrutar temporalmente de un bien a cambio de un pago. Cuando el bien de arrendamiento es una plaza de garaje el arrendatario es el inquilino, quien paga un alquiler para disfrutar del bien.',
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
    {
      type: 'iText',
      identifier: 'id-unid-new2',
      wordToReplace: 'id-unid-new2',
      replacement: '',
      question: 'Dirección completa de la plaza de garaje:',
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) '
      },
      placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
      mandatory: false,
      isFocused: false
    },
    {
      type: 'iText',
      identifier: 'id-unid-new3',
      wordToReplace: 'id-unid-new3',
      replacement: '',
      question: 'Información adicional (número de plaza de aparcamiento, nivel de aparcamiento etc.):',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: ''
      },
      placeholder: 'P. ej: sótano 1, plaza de garaje número 24',
      mandatory: false,
      isFocused: false
    },
    {
      type: 'iRadioC',
      question: 'Número de vehículos que podrá aparcar el inquilino en la plaza de garaje:',
      identifier: 'id-unid-new4',
      wordToReplace: 'id-unid-new4',
      defaultRadioId: 'id-unid-new4_opA',
      indications: {
        areIndications: false,
        indicationsType: '',
        // tslint:disable-next-line:max-line-length
        value: ''
      },
      replacement: '',
      extraReplacements: [
        {
          identifier: 'idunidnew4-extra-1',
          wordToReplace: 'idunidnew4-extra-1',
          insideId: 'opA'
        }
      ],
      radios: [
        {
          label: 'sólo 1',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'un sólo vehículo',
          // tslint:disable-next-line:max-line-length
          replacement: 'un sólo vehículo',
          extraReplacements: [
            {
              identifier: 'idunidnew4-extra-1',
              replacement: '',
              replacementOriginal: '',
              insideId: 'opA'
            }
          ],
          radioId: 'id-unid-new4_opA',
          identifier: 'id-unid-new4_opA',
          checked: true,
          subSteps: []
        },
        {
          label: 'más de 1',
          replacementOriginal: 'los siguientes vehículos: id-unid-new4_opB_1',
          replacement: 'los siguientes vehículos: id-unid-new4_opB_1',
          extraReplacements: [
            {
              identifier: 'idunidnew4-extra-1',
              replacement: 'aparcar más de un vehículo, ',
              replacementOriginal: 'aparcar más de un vehículo, ',
              insideId: 'opA'
            }
          ],
          radioId: 'id-unid-new4_opB',
          identifier: 'id-unid-new4_opB',
          checked: false,
          subSteps: [
            {
              question: 'Indique los vehículos que podrán aparcar, como, por ejemplo: un coche y una moto.',
              placeholder: 'Ej. un coche y dos motos',
              wordToReplace: 'id-unid-new4_opB_1',
              identifier: 'id-unid-new4_opB_1',
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
            }
          ]
        }
      ],
    },
    {
      type: 'iRadioB',
      question: '¿La plaza de garaje se encuentra en un edificio donde debe respetar normas de la comunidad de propietarios?',
      identifier: 'id-unid-new1',
      wordToReplace: 'id-unid-new1',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'Selecciona la opción SÍ, si la plaza de garaje se encuentra en un edificio en régimen de propiedad horizontal.',
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          replacementOriginal: 'e) El incumplimiento de las normas de convivencia establecidas por la Comunidad de Propietarios por la parte ARRENDATARIA podrá poner fin al contrato.',
          replacement: 'e) El incumplimiento de las normas de convivencia establecidas por la Comunidad de Propietarios por la parte ARRENDATARIA podrá poner fin al contrato.',
          radioId: 'id-unid-new1_opA',
          identifier: 'id-unid-new1_opA',
          extraReplacements: [
          ],
          checked: true,
        },
        {
          label: 'No',
          replacementOriginal: '',
          replacement: '',
          radioId: 'id-unid-new1_opB',
          identifier: 'id-unid-new1_opB',
          extraReplacements: [
          ],
          checked: false,
        },
      ]
    },
    {
      type: 'iText',
      identifier: 'id-unid-5',
      wordToReplace: 'id-unid-5',
      replacement: '',
      question: 'Indique la duración del contrato de alquiler:',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: ''
      },
      placeholder: 'P. ej: 15 dias, 6 meses, 1 año,..',
      mandatory: false,
      isFocused: false
    },
    {
      type: 'iRadioC',
      question: 'Fecha de comienzo del alquiler y en el que el arrrendatario (inquilino) podrá hacer uso de la misma (no tiene que ser la misma en la que se firma el contrato, se puede firmar el contrato y empezar a hacer uso de la plaza más adelante):',
      identifier: 'id-unid-6',
      wordToReplace: 'id-unid-6',
      defaultRadioId: 'id-unid-6_opA',
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
          label: 'A partir del día de la firma del contrato',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'desde la firma',
          // tslint:disable-next-line:max-line-length
          replacement: 'desde la firma',
          extraReplacements: [],
          radioId: 'id-unid-6_opA',
          identifier: 'id-unid-6_opA',
          checked: true,
          subSteps: []
        },
        {
          label: 'A partir de otro día',
          replacementOriginal: 'a partir del id-unid-6_opB_1',
          replacement: 'a partir del id-unid-6_opB_1',
          extraReplacements: [],
          radioId: 'id-unid-6_opB_1_opB',
          identifier: 'id-unid-6_opB_1_opB',
          checked: false,
          subSteps: [
            {
              question: 'Fecha de inicio del contrato',
              wordToReplace: 'id-unid-6_opB_1',
              identifier: 'id-unid-6_opB_1',
              type: 'iDate',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              mandatory: false,
              isFocused: false
            }
          ]
        }
      ],
    },
    {
      type: 'iRadioC',
      question: 'Indique si existe un horario de uso para el inquilino de la plaza de garaje:',
      identifier: 'id-unid-7',
      wordToReplace: 'id-unid-7',
      defaultRadioId: 'id-unid-7_opA',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: 'En caso de que el inquilino sólo pueda usar la plaza de garaje, por ejemplo, de 9:00 a 18:00 indique SI'
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'El inquilino podrá hacer uso de la plaza en el siguiente horario: id-unid-7_opA_1.',
          // tslint:disable-next-line:max-line-length
          replacement: 'El inquilino podrá hacer uso de la plaza en el siguiente horario: id-unid-7_opA_1.',
          extraReplacements: [],
          radioId: 'id-unid-7_opA',
          identifier: 'id-unid-7_opA',
          checked: true,
          subSteps: [
            {
              question: 'Horario de uso de la plaza de garaje',
              wordToReplace: 'id-unid-7_opA_1',
              identifier: 'id-unid-7_opA_1',
              type: 'iText',
              replacement: '',
              extraReplacements: [],
              indications: {
                areIndications: false,
                indicationsType: '',
                // tslint:disable-next-line:max-line-length
                value: ''
              },
              placeholder: 'P. ej: de 9:00 a 18:00',
              mandatory: false,
              isFocused: false
            }
          ]
        },
        {
          label: 'No',
          replacementOriginal: '',
          replacement: '',
          extraReplacements: [],
          radioId: 'id-unid-7_opB',
          identifier: 'id-unid-7_opB',
          checked: false,
          subSteps: [
          ]
        }
      ],
    },
    {
      type: 'iRadioB',
      question: '¿Una vez haya finalizado el plazo de duración del alquiler, desea que este se renueve automáticamente?',
      identifier: 'id-unid-8',
      wordToReplace: 'id-unid-8',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: '',
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          replacementOriginal: 'El contrato podrá prorrogarse posteriormente por el mismo plazo salvo que la parte ARRENDATARIA manifieste al arrendador, con un mínimo de treinta días de antelación,  a la fecha de terminación de este contrato o cualquiera de sus prórrogas, su voluntad de no renovarlo.',
          replacement: 'El contrato podrá prorrogarse posteriormente por el mismo plazo salvo que la parte ARRENDATARIA manifieste al arrendador, con un mínimo de treinta días de antelación,  a la fecha de terminación de este contrato o cualquiera de sus prórrogas, su voluntad de no renovarlo.',
          radioId: 'id-unid-8_opA',
          identifier: 'id-unid-8_opA',
          extraReplacements: [
          ],
          checked: true,
        },
        {
          label: 'No',
          replacementOriginal: 'Finalizado el contrato, o cualquiera de sus prórrogas la PARTE ARRENDATARIA deberá dejar la plaza de garaje libre y limpia, sin objetos personales u otros enseres, y deberá ponerla a disposición de la PARTE ARRENDADORA, sin necesidad de previo requerimiento.',
          replacement: 'Finalizado el contrato, o cualquiera de sus prórrogas la PARTE ARRENDATARIA deberá dejar la plaza de garaje libre y limpia, sin objetos personales u otros enseres, y deberá ponerla a disposición de la PARTE ARRENDADORA, sin necesidad de previo requerimiento.',
          radioId: 'id-unid-8_opB',
          identifier: 'id-unid-8_opB',
          extraReplacements: [
          ],
          checked: false,
        },
      ]
    },
    {
      type: 'iRadioC',
      question: 'El precio del alquiler se establece:',
      identifier: 'id-dec-27',
      wordToReplace: 'id-dec-27',
      defaultRadioId: 'id-dec-27_opA',
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
          label: 'de forma periódica (día, mes, ...)',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'Las Partes han acordado que la renta será de iddec27opA2-precioAletras (id-dec-27_opA_2 €) por cada período siguiente: id-dec-27_opA_1. La obligación de la parte ARRENDATARIA de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br><br> id-dec-28 <br><br> id-dec-27_opA_3 <br><br> Las partes acuerdan que el pago de la renta será id-dec-29 <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la habitación arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
          // tslint:disable-next-line:max-line-length
          replacement: 'Las Partes han acordado que la renta será de iddec27opA2-precioAletras (id-dec-27_opA_2 €) por cada período siguiente: id-dec-27_opA_1. La obligación de la parte ARRENDATARIA de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br> id-dec-28 <br> id-dec-27_opA_3 <br> Las partes acuerdan que el pago de la renta será id-dec-29 <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la habitación arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
          extraReplacements: [
          ],
          radioId: 'id-dec-27_opA',
          identifier: 'id-dec-27_opA',
          checked: true,
          subSteps: [
            {
              type: 'iText',
              identifier: 'id-dec-27_opA_1',
              wordToReplace: 'id-dec-27_opA_1',
              replacement: '',
              question: '¿Con que periodicidad se establece el contrato?',
              indications: {
                areIndications: false,
                indicationsType: '',
                value: ''
              },
              placeholder: 'P. ej. por día, por mes, por año, por semestre, por hora',
              mandatory: false,
              isFocused: false
            },
            {
              type: 'iNumber',
              identifier: 'id-dec-27_opA_2',
              wordToReplace: 'id-dec-27_opA_2',
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
                  identifier: 'iddec27opA2-precioAletras',
                  wordToReplace: 'iddec27opA2-precioAletras',
                  replacement: ''
                }
              ],
            },
            {
              type: 'iRadioC',
              question: 'El pago del alquiler se realizará:',
              identifier: 'id-dec-27_opA_3',
              wordToReplace: 'id-dec-27_opA_3',
              defaultRadioId: 'id-dec-27_opA_3_opA',
              replacement: '',
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'cada mes, dentro de los primeros 7 días del mes',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'El pago de la Renta fijada se abonará por meses anticipados entre los cinco (5) primeros días de cada mes.',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'El pago de la Renta fijada se abonará por meses anticipados entre los cinco (5) primeros días de cada mes.',
                  extraReplacements: [],
                  radioId: 'id-dec-27_opA_3_opA',
                  identifier: 'id-dec-27_opA_3_opA',
                  checked: true,
                  subSteps: []
                },
                {
                  label: 'de otra manera',
                  replacementOriginal: 'El pago de la renta se realizará de la siguiente manera: id-dec-27_opA_3_opB_1.',
                  replacement: '',
                  extraReplacements: [],
                  radioId: 'id-dec-27_opA_3_opB',
                  identifier: 'id-dec-27_opA_3_opB',
                  checked: false,
                  subSteps: [
                    {
                      question: 'Manera en la que se efectua el pago:',
                      placeholder: 'Ej. durante los primeros 15 días del mes, cada 6 meses...',
                      wordToReplace: 'id-dec-27_opA_3_opB_1',
                      identifier: 'id-dec-27_opA_3_opB_1',
                      type: 'iText',
                      replacement: '',
                      extraReplacements: [],
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        // tslint:disable-next-line:max-line-length
                        value: ''
                      },
                      rules: [
                      ],
                    }
                  ]
                }
              ],
            },
          ]
        },
        {
          label: 'por un importe total fijo, para toda la duración del alquiler',
          // tslint:disable-next-line:max-line-length
          replacementOriginal: 'La renta total pactada por las Partes es de iddec27opB1-precioAletras (id-dec-27_opB_1 €). La obligación de la parte ARRENDATARIA de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br><br> id-dec-28 <br><br> id-dec-27_opB_2',
          // tslint:disable-next-line:max-line-length
          replacement: 'La renta total pactada por las Partes es de iddec27opB1-precioAletras (id-dec-27_opB_1 €). La obligación de la parte ARRENDATARIA de pagar dicha renta nace a partir del momento de la firma del presente Contrato. <br> id-dec-28 <br> id-dec-27_opB_2',
          extraReplacements: [
          ],
          radioId: 'id-dec-27_opB',
          identifier: 'id-dec-27_opB',
          checked: false,
          subSteps: [
            {
              type: 'iNumber',
              identifier: 'id-dec-27_opB_1',
              wordToReplace: 'id-dec-27_opB_1',
              replacement: '',
              question: 'Importe total del alquiler:',
              indications: {
                areIndications: false,
                indicationsType: '',
                value: ''
              },
              placeholder: 'Escriba un número',
              mandatory: false,
              isFocused: false,
              extraReplacements: [],
              rules: [
                {
                  condition: false,
                  rulename: 'extraReplacementToCharacter',
                  identifier: 'iddec27opB1-precioAletras',
                  wordToReplace: 'iddec27opB1-precioAletras',
                  replacement: ''
                }
              ]
            },
            {
              type: 'iRadioC',
              question: '¿En qué momento se va a realizar el pago del alquiler?',
              identifier: 'id-dec-27_opB_2',
              wordToReplace: 'id-dec-27_opB_2',
              defaultRadioId: 'id-dec-27_opB_2_opA',
              replacement: '',
              indications: {
                areIndications: true,
                indicationsType: 'outsideText',
                value: 'Seleccione aquí la opción que corresponda al momento en el que se realiza o realizará el pago del importe del alquiler establecido en la pregunta anterior: en su totalidad al momento de firmar el contrato; en su totalidad en una fecha posterior; una parte al firmar el contrato y otra en una fecha posterior; una parte al inicio del contrato de arrendamiento y otra en una fecha posterior; o de otra manera (por ejemplo, en varios pagos periódicos).'
              },
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'al firmar el contrato',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'El pago de la renta se realiza de forma completa al momento de firmar el presente Contrato, recibiendo la parte ARRENDADORA en este acto su importe a su entera satisfacción, y constituyendo el presente documento la más formal y fiel carta de pago.<br><br> El pago se realizará id-dec-29',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'El pago de la renta se realiza de forma completa al momento de firmar el presente Contrato, recibiendo la parte ARRENDADORA en este acto su importe a su entera satisfacción, y constituyendo el presente documento la más formal y fiel carta de pago.<br> El pago se realizará id-dec-29',
                  extraReplacements: [],
                  radioId: 'id-dec-27_opB_2_opA',
                  identifier: 'id-dec-27_opB_2_opA',
                  checked: true,
                  subSteps: []
                },
                {
                  label: 'toda la cantidad en una fecha posterior escogida',
                  replacementOriginal: 'El pago de la renta se realizará de forma completa a más tardar el día id-dec-27_opB_2_opB_1. <br><br> El pago se realizará id-dec-29. <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la habitación arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
                  replacement: '',
                  extraReplacements: [],
                  radioId: 'id-dec-27_opB_2_opB',
                  identifier: 'id-dec-27_opB_2_opB',
                  checked: false,
                  subSteps: [
                    {
                      question: 'Fecha en la que se realizará el pago del alquiler:',
                      placeholder: '',
                      wordToReplace: 'id-dec-27_opB_2_opB_1',
                      identifier: 'id-dec-27_opB_2_opB_1',
                      type: 'iDate',
                      replacement: '',
                      extraReplacements: [],
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        // tslint:disable-next-line:max-line-length
                        value: ''
                      },
                      rules: [
                      ],
                    }
                  ]
                },
                {
                  label: 'una parte al firmar el contrato y otra en una fecha posterior escogida',
                  replacementOriginal: 'El pago de la renta se realiza de forma parcial al momento de firmar el presente Contrato, recibiendo en este acto la parte ARRENDADORA el importe de iddec27opB2opC1-precioAletras (id-dec-27_opB_2_opC_1 €), de lo cual este documento constituye la más formal y fiel carta de pago. El resto de la renta será pagado por la parte ARRENDATARIA a más tardar el día id-dec-27_opB_2_opC_2. <br><br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la habitación arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
                  replacement: 'El pago de la renta se realiza de forma parcial al momento de firmar el presente Contrato, recibiendo en este acto la parte ARRENDADORA el importe de iddec27opB2opC1-precioAletras (id-dec-27_opB_2_opC_1 €), de lo cual este documento constituye la más formal y fiel carta de pago. El resto de la renta será pagado por la parte ARRENDATARIA a más tardar el día id-dec-27_opB_2_opC_2. <br>br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la habitación arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
                  extraReplacements: [],
                  radioId: 'id-dec-27_opB_2_opC',
                  identifier: 'id-dec-27_opB_2_opC',
                  checked: false,
                  subSteps: [
                    {
                      type: 'iNumber',
                      identifier: 'id-dec-27_opB_2_opC_1',
                      wordToReplace: 'id-dec-27_opB_2_opC_1',
                      replacement: '',
                      question: 'Importe (en euros) de la parte  que el arrendatario (inquilino) paga al firmar este contrato:',
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        value: ''
                      },
                      placeholder: 'Escriba un número',
                      mandatory: false,
                      isFocused: false,
                      extraReplacements: [],
                      rules: [
                        {
                          condition: false,
                          rulename: 'extraReplacementToCharacter',
                          identifier: 'iddec27opB2opC1-precioAletras',
                          wordToReplace: 'iddec27opB2opC1-precioAletras',
                          replacement: ''
                        }
                      ]
                    },
                    {
                      question: 'Fecha en la que se realizará el pago de la parte del alquiler que quede por pagar:',
                      placeholder: '',
                      wordToReplace: 'id-dec-27_opB_2_opC_2',
                      identifier: 'id-dec-27_opB_2_opC_2',
                      type: 'iDate',
                      replacement: '',
                      extraReplacements: [],
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        // tslint:disable-next-line:max-line-length
                        value: ''
                      },
                      rules: [
                      ],
                    }
                  ]
                },
                {
                  label: 'una parte al comienzo del alquiler y otra en una fecha posterior',
                  replacementOriginal: 'El pago de la renta se realizará de forma fraccionada, abonando el importe de iddec27opB2opD1-precioAletras (id-dec-27_opB_2_opD_1 €) en el momento de la puesta a disposición de la Habitación a la parte ARRENDATARIA para su uso y disfrute. El resto de la renta será pagado por la parte ARRENDATARIA a más tardar el día id-dec-27_opB_2_opD_2. <br><br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la habitación arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
                  replacement: 'El pago de la renta se realizará de forma fraccionada, abonando el importe de iddec27opB2opD1-precioAletras (id-dec-27_opB_2_opD_1 €) en el momento de la puesta a disposición de la Habitación a la parte ARRENDATARIA para su uso y disfrute. El resto de la renta será pagado por la parte ARRENDATARIA a más tardar el día id-dec-27_opB_2_opD_2. <br><br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la habitación arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
                  extraReplacements: [],
                  radioId: 'id-dec-27_opB_2_opD',
                  identifier: 'id-dec-27_opB_2_opD',
                  checked: false,
                  subSteps: [
                    {
                      type: 'iNumber',
                      identifier: 'id-dec-27_opB_2_opD_1',
                      wordToReplace: 'id-dec-27_opB_2_opD_1',
                      replacement: '',
                      question: 'Importe (en euros) de la parte del alquiler que el arrendatario (inquilino) pagará al comienzo del alquiler:',
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        value: ''
                      },
                      placeholder: 'Escriba un número',
                      mandatory: false,
                      isFocused: false,
                      extraReplacements: [],
                      rules: [
                        {
                          condition: false,
                          rulename: 'extraReplacementToCharacter',
                          identifier: 'iddec27opB2opD1-precioAletras',
                          wordToReplace: 'iddec27opB2opD1-precioAletras',
                          replacement: ''
                        }
                      ]
                    },
                    {
                      question: 'Fecha en la que se realizará el pago de la parte del alquiler que quede por pagar:',
                      placeholder: '',
                      wordToReplace: 'id-dec-27_opB_2_opD_2',
                      identifier: 'id-dec-27_opB_2_opD_2',
                      type: 'iDate',
                      replacement: '',
                      extraReplacements: [],
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        // tslint:disable-next-line:max-line-length
                        value: ''
                      },
                      rules: [
                      ],
                    }
                  ]
                },
                {
                  label: 'de otra manera',
                  replacementOriginal: 'El pago de la renta se realizará de la siguiente manera: id-dec-27_opB_2_opE_1. <br><br> El pago se realizará id-dec-29 <br><br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la habitación arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
                  replacement: 'El pago de la renta se realizará de la siguiente manera: id-dec-27_opB_2_opE_1. <br> El pago se realizará id-dec-29 <br> El impago de la renta por la parte ARRENDATARIA será causa de resolución del contrato. En ese caso, la parte ARRENDATARIA deberá restituir en perfecto estado la habitación arrendada a la parte ARRENDADORA, y asumir todos aquellos gastos derivados del incumplimiento del contrato, más los intereses legales generados a raíz de la demora en el pago de las cantidades adeudadas.',
                  extraReplacements: [],
                  radioId: 'id-dec-27_opB_2_opE',
                  identifier: 'id-dec-27_opB_2_opE',
                  checked: false,
                  subSteps: [
                    {
                      type: 'iText',
                      identifier: 'id-dec-27_opB_2_opE_1',
                      wordToReplace: 'id-dec-27_opB_2_opE_1',
                      replacement: '',
                      question: 'Manera en que se realizará el pago del alquiler:',
                      indications: {
                        areIndications: false,
                        indicationsType: '',
                        value: ''
                      },
                      placeholder: '',
                      mandatory: false,
                      isFocused: false,
                      rules: [
                      ]
                    }
                  ]
                }
              ],
            },
          ]
        }
      ],
    },
    {
      type: 'iRadioB',
      question: '¿El precio del alquiler incluye IVA u otro impuesto similar?',
      identifier: 'id-dec-28',
      wordToReplace: 'id-dec-28',
      indications: {
        areIndications: false,
        indicationsType: '',
        value: '',
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'Sí',
          replacementOriginal: 'El precio pactado de renta incluye el IVA (Impuesto sobre el Valor Añadido). Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que la renta incluye Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación.',
          replacement: 'El precio pactado de renta incluye el IVA (Impuesto sobre el Valor Añadido). Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que la renta incluye Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación.',
          radioId: 'id-dec-28_opA',
          identifier: 'id-dec-28_opA',
          extraReplacements: [

          ],
          checked: true,
        },
        {
          label: 'No',
          replacementOriginal: 'Al precio pactado de renta habrá que añadirle el porcentaje correspondiente al IVA (Impuesto sobre el Valor Añadido), que corresponderá abonar a la parte ARRENDATARIA. Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que al precio de renta se verá incrementado por el porcentaje correspondiente Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación impuesto por la legislación vigente.',
          replacement: 'Al precio pactado de renta habrá que añadirle el porcentaje correspondiente al IVA (Impuesto sobre el Valor Añadido), que corresponderá abonar a la parte ARRENDATARIA. Para los casos en que el contrato fuera suscrito en las Islas Canarias, o en Ceuta y Melilla, se entenderá que al precio de renta se verá incrementado por el porcentaje correspondiente Impuesto General Indirecto Canario y/o al Impuesto sobre la Producción, los Servicios y la Importación impuesto por la legislación vigente.',
          radioId: 'id-dec-28_opB',
          identifier: 'id-dec-28_opB',
          extraReplacements: [
          ],
          checked: false,
        }
      ]
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
          replacementOriginal: 'mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): id-dec-29_opA_2 de la entidad: id-dec-29_opA_1, y cuyo titular es: id-dec-29_opA_3. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
          // tslint:disable-next-line:max-line-length
          replacement: 'mediante ingreso o transferencia bancaria al siguiente número de cuenta (IBAN): id-dec-29_opA_2 de la entidad: id-dec-29_opA_1, y cuyo titular es: id-dec-29_opA_3. Sirva el comprobante de ingreso o transferencia como fiel carta del pago. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
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
          replacementOriginal: 'mediante pago en efectivo. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
          // tslint:disable-next-line:max-line-length
          replacement: 'mediante pago en efectivo. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
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
          replacementOriginal: 'mediante: id-dec-29_opC_1. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
          // tslint:disable-next-line:max-line-length
          replacement: 'mediante: id-dec-29_opC_1. En cualquier caso, la parte ARRENDADORA entregará a la ARRENDATARIA la factura correspondiente a la renta junto con el desglose de conceptos incluidos en ella.',
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
      type: 'iRadioB',
      question: '(Subarrendamiento) El arrendatario (inquilino):',
      identifier: 'id-unid-9',
      wordToReplace: 'id-unid-9',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'El subarriendo es un contrato mediante el cual el arrendatario cede a un tercero denominado subarrendatario el uso como arrendatario de toda o parte de la plaza de garaje que tiene arrendada.',
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'podrá subarrendar la plaza de garaje y ceder este contrato',
          replacementOriginal: 'La parte ARRENDADORA autoriza expresamente a la ARRENDATARIA a ceder o subarrendar la plaza de garaje objeto de este contrato, en dicho caso la parte ARRENDADORA tendrá derecho a elevar la renta en un 10% sobre el precio de renta.',
          replacement: 'La parte ARRENDADORA autoriza expresamente a la ARRENDATARIA a ceder o subarrendar la plaza de garaje objeto de este contrato, en dicho caso la parte ARRENDADORA tendrá derecho a elevar la renta en un 10% sobre el precio de renta.',
          radioId: 'id-unid-9_opA',
          identifier: 'id-unid-9_opA',
          extraReplacements: [
          ],
          checked: true,
        },
        {
          label: 'no podrá subarrendar (ceder la plaza a cambio de un precio) la plaza de garaje alquilada ni ceder este contrato (sustituirse por otro arrendatario)',
          replacementOriginal: 'Queda prohibido la cesión de la plaza de garaje o su subarriendo ya sea total o parcial.',
          replacement: 'Queda prohibido la cesión de la plaza de garaje o su subarriendo ya sea total o parcial.',
          radioId: 'id-unid-9_opB',
          identifier: 'id-unid-9_opB',
          extraReplacements: [
          ],
          checked: false,
        },
      ]
    },
    {
      type: 'iRadioB',
      question: '(Derecho de adquisición preferente) En caso de que el arrendador decida vender la plaza de garaje  durante el alquiler:',
      identifier: 'id-dec-10',
      wordToReplace: 'id-dec-10',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'El derecho de compra o adquisición preferente, según la ley 29/1994, de 24 de noviembre, sobre arrendamientos urbanos es el derecho que tiene el arrendatario de adquirir la propiedad con preferencia, en el caso de que el arrendador ponga en venta dicho inmueble. Así lo recoge el artículo 25 de  esta normativa, en el que se señala que el arrendatario tendrá las mismas condiciones que el arrendador haya acordado con un posible comprador. En este sentido, con el derecho de compra preferente, el arrendatario dispone de 30 días naturales para ejercitar el derecho de tanteo desde que el propietario le notifique la decisión de venta. Con ello, se podrá determinar y llegar a un acuerdo sobre precio y el resto de condiciones inherentes a la transmisión de la propiedad inmobiliaria. Del mismo modo, el arrendatario también dispone del derecho de retracto, en relación al precio y a todas las condiciones de compraventa.',
      },
      replacement: '',
      extraReplacements: [
      ],
      radios: [
        {
          label: 'el arrendatario podrá adquirirla con prioridad frente a otros posibles compradores (tendrá derecho de adquisición preferente o tanteo y retracto)',
          replacementOriginal: 'Las partes reconocen el derecho de adquisición preferente o tanteo y retracto de la PARTE ARRENDATARIA sobre la plaza de garaje.',
          replacement: 'Las partes reconocen el derecho de adquisición preferente o tanteo y retracto de la PARTE ARRENDATARIA sobre la plaza de garaje.',
          radioId: 'id-dec-10_opA',
          identifier: 'id-dec-10_opA',
          extraReplacements: [
          ],
          checked: true,
        },
        {
          label: 'el arrendatario no podrá adquirirla con prioridad frente a otros posibles compradores (no tendrá derecho de adquisición preferente o tanteo y retracto)',
          replacementOriginal: 'Las Partes acuerdan que en caso de que la PARTE ARRENDADORA enajenare la plaza de garaje arrendada, la PARTE ARRENDATARIA no tendrá derecho de adquisición preferente o de tanteo y retracto sobre la misma. Por tanto, la PARTE ARRENDATARIA renuncia expresamente en este acto al derecho de adquisición preferente sobre la misma que la legislación aplicable pudiera atribuirle.',
          replacement: 'Las Partes acuerdan que en caso de que la PARTE ARRENDADORA enajenare la plaza de garaje arrendada, la PARTE ARRENDATARIA no tendrá derecho de adquisición preferente o de tanteo y retracto sobre la misma. Por tanto, la PARTE ARRENDATARIA renuncia expresamente en este acto al derecho de adquisición preferente sobre la misma que la legislación aplicable pudiera atribuirle.',
          radioId: 'id-dec-10_opB',
          identifier: 'id-dec-10_opB',
          extraReplacements: [
          ],
          checked: false,
        },
      ]
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