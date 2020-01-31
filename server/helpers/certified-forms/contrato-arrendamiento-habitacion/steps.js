const steps = [
    {
      type: 'start',
      title: 'Contrato de arrendamiento de habitación',
      description: `Por medio de este contrato el propietario de una vivienda (persona o empresa) 
      cede el uso de una de las habitaciones a un particular (persona o empresa) durante un tiempo determinado 
      a cambio del pago de una renta`,
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
      mandatory: true,
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
      mandatory: true,
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
    //                       replacementOriginal: 'id-unid-3_1_opB_5_1, mayor de edad, con domicilio en id-unid-3_1_opB_5_2, id-unid-3_1_opB_5_3 núm. id-unid-3_1_opB_5_4, y en calidad de id-unid-3_1_opB_5_5',
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
    {
      type: 'iText',
      identifier: 'id-unid-5',
      wordToReplace: 'id-unid-5',
      replacement: '',
      question: 'Dirección completa de la vivienda:',
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Dirección completa (tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país) '
      },
      placeholder: 'P. ej: Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
      mandatory: true,
      isFocused: false
    },
    {
      question: 'Superficie útil de la vivienda en metros cuadrados:',
      placeholder: 'P. ej: 150',
      wordToReplace: 'id-unid-6',
      identifier: 'id-unid-6',
      type: 'iNumber',
      replacement: '',
      extraReplacements: [],
      rules: [],
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'La superficie útil (o metros útiles de una vivienda) es la superficie que se puede pisar dentro de la casa. En este concepto entra todo el interior de una vivienda (incluidos los armarios), pero quedarían excluidas todas las partes que aún estando dentro de la casa no son útiles, como los tabiques, pilares y demás elementos estructurales. La información de la superficie útil proporciona una idea del espacio del que dispondrá para vivir.'
      },
    },
    {
      question: 'Indique el número de habitaciones que tiene la vivienda incluyendo la habitación que se alquila:',
      placeholder: 'P. ej: 2',
      wordToReplace: 'id-unid-7',
      identifier: 'id-unid-7',
      type: 'iNumber',
      replacement: '',
      extraReplacements: [],
      rules: [
        {
          condition: false,
          rulename: 'extraReplacementToCharacter',
          identifier: 'idunid7-precioAletras',
          wordToReplace: 'idunid7-precioAletras',
          replacement: ''
        }
      ],
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Para poder realizar el contrato de habitación, la vivienda tiene que tener un mínimo de 2 habitaciones, en caso contrario, es decir que la vivienda solo tuviese una habitación, se tendría que celebrar un contrato de arrendamiento de vivienda.'
      },
    },
    {
      type: 'iText',
      subtype: 'textarea',
      identifier: 'id-unid-8',
      wordToReplace: 'id-unid-8',
      replacement: '',
      question: 'Haga una descripción detallada de los componentes de la vivienda, sin contar con las habitaciones que se alquilan',
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Haga un descripción de las zonas comunes de la vivienda, es decir de las partes, espacios, anexos, depedencias, exluyendo las habitaciones.'
      },
      placeholder: 'P. ej. Una cocina, un salón, dos baños, un garaje, un jardín de 10 m2...',
      mandatory: true,
      isFocused: false
    },
    {
      type: 'iText',
      identifier: 'id-unid-9',
      wordToReplace: 'id-unid-9',
      replacement: '',
      question: 'Lugar y, en su caso, número del Registro de la propiedad en el que está inscrita la vivienda:',
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Localidad y número del Registro de la propiedad en el que está inscrita la vivienda.'
      },
      placeholder: 'P. ej. Madrid Nº 34',
      mandatory: true,
      isFocused: false,
    },
    {
      type: 'iText',
      identifier: 'id-dec-10',
      wordToReplace: 'id-dec-10',
      replacement: '',
      question: 'Datos registrales de la vivienda:',
      indications: {
        areIndications: true,
        indicationsType: 'insideText',
        value: 'Los datos registrales es el número de finca que se asigna en el registro de la propiedad correspondiente en el momento de ser inscrita por primera vez y los datos de la cita registral que le corresponden, es decir, el número de tomo, libro y folio en los que consta la inscripción.'
      },
      placeholder: 'P. ej. Tomo 1 Libro 377 Folio 204 Finca 2',
      mandatory: true,
      isFocused: false
    },
    {
      type: 'iText',
      identifier: 'id-dec-11',
      wordToReplace: 'id-dec-11',
      replacement: '',
      question: 'Referencia catastral de la vivienda:',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        value: 'La referencia catastral es el identificador oficial y obligatorio de los bienes inmuebles. Consiste en un código alfanumérico que es asignado por el Catastro de manera que todo inmueble debe tener una única referencia catastral que permita situarlo inequívocamente en la cartografía catastral. Si no desea indicar la referencia catastral, deje este espacio en blanco.'
      },
      placeholder: 'P. ej: 9872023 VH5797S 0001 WX',
      mandatory: false,
      isFocused: false,
      isEmpty: {
        prepend: 'Su referencia catastral es: ',
        append: '',
      }
    },
    {
      type: 'iRadioC',
      question: '¿La vivienda forma parte de una Comunidad de Propietarios?',
      identifier: 'id-dec-12',
      wordToReplace: 'id-dec-12',
      indications: {
        areIndications: true,
        indicationsType: 'outsideText',
        // tslint:disable-next-line:max-line-length
        value: 'Por ejemplo, cuando vivimos en un bloque de pisos formamos parte de una Comunidad de Propietarios. Con ella nos referimos al conjunto de propietarios que si bien tienen la propiedad exclusiva de una vivienda o local, también son copropietarios  en otra serie de elementos que son comunes a todos los integrantes,  (jardines, terrazas, escaleras, pasillos, etc). En ese caso, el arrendatario o inquilino deberá respetar las normas que la Comunidad imponga y, en su caso, pagar parte de las cuotas de la misma.'
      },
      defaultRadioId: 'id-dec-12_opA',
      replacement: '',
      extraReplacements: [
        {
          identifier: 'iddec12-extra-1',
          wordToReplace: 'iddec12-extra-1',
        },
        {
          identifier: 'iddec12-extra-2',
          wordToReplace: 'iddec12-extra-2',
        },
        {
          identifier: 'iddec12-extra-3',
          wordToReplace: 'iddec12-extra-3',
        },
        {
          identifier: 'iddec12-extra-4',
          wordToReplace: 'iddec12-extra-4',
        },
        {
          identifier: 'iddec12-extra-5',
          wordToReplace: 'iddec12-extra-5',
        }
      ],
      radios: [
        {
          label: 'Sí',
          replacementOriginal: 'Todos los gastos de Comunidad correrán a cargo de id-dec-12_opA_1 <br> Los gastos extraordinarios de Comunidad que correspondan a la Vivienda serán por cuenta y a cargo de la PARTE ARRENDADORA en su totalidad. cargo id-dec-12_opA_2',
          replacement: 'Todos los gastos de Comunidad correrán a cargo de id-dec-12_opA_1 <br> Los gastos extraordinarios de Comunidad que correspondan a la Vivienda serán por cuenta y a cargo de la PARTE ARRENDADORA en su totalidad. cargo id-dec-12_opA_2',
          extraReplacements: [
            {
              identifier: 'iddec12-extra-1',
              replacement: 'las normas de la Comunidad o ',
              replacementOriginal: 'las normas de la Comunidad o '
            },
            {
              identifier: 'iddec12-extra-2',
              replacement: 'Igualmente está obligada a requerir a la Comunidad de Propietarios, a instancias de la PARTE ARRENDATARIA, para la realización de las obras de reparación o adecuación que puedan necesitar los elementos comunes. ',
              replacementOriginal: 'Igualmente está obligada a requerir a la Comunidad de Propietarios, a instancias de la PARTE ARRENDATARIA, para la realización de las obras de reparación o adecuación que puedan necesitar los elementos comunes. '
            },
            {
              identifier: 'iddec12-extra-3',
              replacement: 'de la Comunidad y normas de',
              replacementOriginal: 'de la Comunidad y normas de'
            },
            {
              identifier: 'iddec12-extra-4',
              replacement: 'Estando ubicada la Vivienda en un inmueble organizado en una Comunidad de Propietarios, la PARTE ARRENDATARIA se obliga a cumplir en todo momento, y durante toda la vigencia del Contrato id-dec-25. Contravenir los buenos usos de vecindad, los contenidos en los estatutos de la Comunidad y policía urbana, así como el molestar a vecinos con ruidos, fiestas, música, etc., siempre que contravengan las Ordenanzas Municipales. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.',
              replacementOriginal: 'Estando ubicada la Vivienda en un inmueble organizado en una Comunidad de Propietarios, la PARTE ARRENDATARIA se obliga a cumplir en todo momento, y durante toda la vigencia del Contrato id-dec-25. Contravenir los buenos usos de vecindad, los contenidos en los estatutos de la Comunidad y policía urbana, así como el molestar a vecinos con ruidos, fiestas, música, etc., siempre que contravengan las Ordenanzas Municipales. El incumplimiento de esta obligación dará lugar a la resolución del presente Contrato.'
            },
            {
              identifier: 'iddec12-extra-5',
              replacement: 'o de la correspondiente prórroga o prórrogas',
              replacementOriginal: 'o de la correspondiente prórroga o prórrogas'
            }
          ],
          radioId: 'id-dec-12_opA',
          identifier: 'id-dec-12_opA',
          checked: false,
          indications: {
            areIndications: true,
            indicationsType: 'outsideText',
            // tslint:disable-next-line:max-line-length
            value: 'Los gastos generales u ordinarios Son aquellos necesarios y previsibles para el buen sostenimiento del inmueble. Derivan de la conservación, el mantenimiento y las reparaciones ordinarias.Estos gastos se contemplan en los Presupuestos Anuales y se aprueban en la Junta Ordinaria. Para costearlos se utilizan las cuotas mensuales de los propietarios. Entre estos encontramos:<br>1. Los gastos de mantenimiento, conservación y reparación de los servicios más habituales en las comunidades: Limpieza de la comunidad, consumo de agua, gastos bancarios, mantenimiento de ascensor, antena y DDD, calefacción central, luz del portal, garaje y escaleras, portería y conserje, piscina, jardinería, etc. <br>2. Gastos de mantenimiento, conservación y reparación de elementos comunes como tejados, canales de agua, tuberías, caldera. <br>3. Obras para la conservación y accesibilidad necesarias para el mantenimiento del edificio y de sus servicios. <br>4. Fondo de reserva que se fija para la aprobación del Presupuesto de la Comunidad y que debe superar el 5% del último presupuesto ordinario. Este fondo se utiliza para cubrir obras de conservación y reparación de la finca o realizar una derrama extraordinaria por accidentes. <br>5. Gastos municipales como la tasa de recogida de basura o el vado o paso de carruajes.'
          },
          subSteps: [
            {
              type: 'iRadioC',
              question: '¿Quién asumirá los gastos generales u ordinarios (cuotas) de la comunidad de la que forma parte la vivienda?:',
              identifier: 'id-dec-12_opA_1',
              wordToReplace: 'id-dec-12_opA_1',
              defaultRadioId: 'id-dec-12_opA_1_opA',
              replacement: '',
              extraReplacements: [
              ],
              radios: [
                {
                  label: 'el arrendador (propietario)',
                  // tslint:disable-next-line:max-line-length
                  replacementOriginal: 'de la PARTE ARRENDADORA',
                  // tslint:disable-next-line:max-line-length
                  replacement: 'de la PARTE ARRENDADORA',
                  extraReplacements: [],
                  radioId: 'id-dec-12_opA_1_opA',
                  identifier: 'id-dec-12_opA_1_opA',
                  checked: true,
                  subSteps: []
                },
                {
                  label: 'los dos, el arrendatario y  el arrendador, conjuntamente',
                  replacementOriginal: 'entre ambas Partes. En concreto, a la PARTE ARRENDATARIA le corresponderá abonar un iddec12opA1opB1-precioAletras por ciento (id-dec-12_opA_1_opB_1 %) de los mismos id-dec-12_opA_1_opB_2',
                  replacement: '',
                  extraReplacements: [],
                  radioId: 'id-dec-12_opA_1_opB',
                  identifier: 'id-dec-12_opA_1_opB',
                  checked: false,
                  subSteps: [
                    {
                      question: 'Que porcentaje de estos gastos generales u ordinarios (cuotas) deberá pagar el arrendatario (inquilino)',
                      placeholder: 'Ej. Escriba un número mayor que 100',
                      wordToReplace: 'id-dec-12_opA_1_opB_1',
                      identifier: 'id-dec-12_opA_1_opB_1',
                      type: 'iNumber',
                      replacement: '',
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
                          identifier: 'iddec12opA1opB1-precioAletras',
                          wordToReplace: 'iddec12opA1opB1-precioAletras',
                          replacement: ''
                        }
                      ],
                    },
                    {
                      type: 'iRadioC',
                      question: 'Estos gastos generales u ordinarios (cuotas)',
                      identifier: 'id-dec-12_opA_1_opB_2',
                      wordToReplace: 'id-dec-12_opA_1_opB_2',
                      defaultRadioId: 'id-dec-12_opA_1_opB_2_opA',
                      replacement: '',
                      extraReplacements: [
                      ],
                      radios: [
                        {
                          label: 'no están incluídos en el alquiler, debe pagarlos el arrendatario a parte',
                          // tslint:disable-next-line:max-line-length
                          replacementOriginal: 'El importe de los gastos de Comunidad no está incluido dentro en la renta. Siendo que la parte ARRENDATARIA tendrá que abonarlos por separado a la parte ARRENDADORA, que a su vez está obligada a entregar recibo al parte ARRENDATARIA en el que se especifique los diferentes conceptos que componen los pagos efectuados para que la parte ARRENDATARIA.  Los gastos ordinarios de Comunidad para la Vivienda actualmente ascienden a la cantidad de iddec12opA1opB2opA1.precioAletras ( id-dec-12_opA_1_opB_2_opA_1 €) mensuales',
                          // tslint:disable-next-line:max-line-length
                          replacement: 'El importe de los gastos de Comunidad no está incluido dentro en la renta. Siendo que la parte ARRENDATARIA tendrá que abonarlos por separado a la parte ARRENDADORA, que a su vez está obligada a entregar recibo al parte ARRENDATARIA en el que se especifique los diferentes conceptos que componen los pagos efectuados para que la parte ARRENDATARIA.  Los gastos ordinarios de Comunidad para la Vivienda actualmente ascienden a la cantidad de iddec12opA1opB2opA1.precioAletras ( id-dec-12_opA_1_opB_2_opA_1 €) mensuales',
                          extraReplacements: [],
                          radioId: 'id-dec-12_opA_1_opB_2_opA',
                          identifier: 'id-dec-12_opA_1_opB_2_opA',
                          checked: true,
                          subSteps: []
                        },
                        {
                          label: 'están incluidos en el importe del alquiler',
                          replacementOriginal: 'El importe de los gastos de Comunidad está incluido dentro de la renta. Siendo que la parte ARRENDATARIA no tiene que abonarlos por separado a la parte ARRENDADORA, y ésta no está obligada a entregar recibo al parte ARRENDATARIA en el que se especifique los diferentes conceptos que componen los pagos efectuados para que la parte ARRENDATARIA, si bien estos gastos están previstos dentro de la renta. ',
                          replacement: '',
                          extraReplacements: [],
                          radioId: 'id-dec-12_opA_1_opB_2_opB',
                          identifier: 'id-dec-12_opA_1_opB_2_opB',
                          checked: false,
                          subSteps: [
                          ]
                        }
                      ],
                    },
                  ]
                }
              ],
            },
          ]
        },
        {
          label: 'No',
          replacementOriginal: '',
          replacement: '',
          extraReplacements: [
            {
              identifier: 'iddec12-extra-1',
              replacement: '',
              replacementOriginal: ''
            },
            {
              identifier: 'iddec12-extra-2',
              replacement: '',
              replacementOriginal: ''
            },
            {
              identifier: 'iddec12-extra-3',
              replacement: '',
              replacementOriginal: ''
            },
            {
              identifier: 'iddec12-extra-4',
              replacement: '',
              replacementOriginal: ''
            },
            {
              identifier: 'iddec12-extra-5',
              replacement: '',
              replacementOriginal: ''
            }
          ],
          radioId: 'id-dec-12_opB',
          identifier: 'id-dec-12_opB',
          checked: true,
          subSteps: []
        },
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