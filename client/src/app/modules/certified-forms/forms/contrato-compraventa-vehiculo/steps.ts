export const steps = [
  {
    type: 'start',
    title: 'Contrato de alquiler',
    description: `El contrato de alquiler es el documento que regula la cesión y el uso de
    inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).`,
    isCurrentStep: true
  },
  // {
  //   type: 'iText',
  //   identifier: 'id-unid-1',
  //   wordToReplace: 'id-unid-1',
  //   replacement: '',
  //   question: 'Lugar en el que se firma este contrato:',
  //   indications: {
  //     areIndications: true,
  //     indicationsType: 'insideText',
  //     value: 'Indique el lugar en el que se firma este contrato.'
  //   },
  //   mandatory: true,
  //   isFocused: false
  // },
  // {
  //   type: 'iDate',
  //   identifier: 'id-unid-2',
  //   wordToReplace: 'id-unid-2',
  //   replacement: '',
  //   question: 'Fecha en la que se firma este contrato:',
  //   indications: {
  //     areIndications: true,
  //     indicationsType: 'insideText',
  //     value: 'Con la ayuda del calendario, indique la fecha en la que se firma este contrato.',
  //   },
  //   mandatory: true,
  //   isFocused: false
  // },
  {
    type: 'iForEach',
    value: 1,
    replacement: '',
    identifier: 'id-unid-3',
    wordToReplace: 'id-unid-3',
    question: 'Número de personas propietarias del vehículo (que desean venderlo por medio de este contrato):',
    indications: {
      areIndications: true,
      indicationsType: 'outsideText',
      value: 'Indique el número de personas propietarias de este vehículo',
    },
    content: [
      {
        identifier: 'id-unid-3',
        wordToReplace: 'id-unid-3',
        replacementOriginal: 'id-unid-3_1',
        replacement: '',
        extraReplacements: [],
        modifiedReplacements: [],
        modifiedExtraReplacements: [],
        subSteps: [
          {
            type: 'iRadioC',
            question: 'El vendedor (propietario del vehículo) es):',
            identifier: 'id-unid-3_1',
            wordToReplace: 'id-unid-3_1',
            indications: {
              areIndications: true,
              indicationsType: 'outsideText',
              value: 'Seleccione el tipo de personalidad jurídica del primer vendedor. Se tratará de persona física si es una persona natural, mientras que se tratará de persona jurídica en el caso de que la primera persona vendedora sea una institución o ente como puede ser una fundación, una sociedad mercantil o una asociación, entre otros',
            },
            defaultRadioId: 'id-unid-3_1_opA',
            replacement: '',
            extraReplacements: [
            ],
            radios: [
              {
                label: 'Persona física',
                radioId: 'id-unid-3_1_opA',
                identifier: 'id-unid-3_1_opA',
                replacementOriginal: 'id-unid-3_1_opA_1',
                replacement: 'id-unid-3_1_opA_1',
                extraReplacements: [],
                checked: true,
                subSteps: [
                  {
                      type: 'iRadioC',
                      question: 'El vendedor (propietario del vehículo) celebra este contrato:',
                      identifier: 'id-unid-3_1_opA_1',
                      wordToReplace: 'id-unid-3_1_opA_1',
                      indications: {
                        areIndications: true,
                        indicationsType: 'outsideText',
                        value: 'Indique aquí si el vendedor concluye y firma este contrato en nombre y representación propios o representado por otra persona. La persona que representa al vendedor puede ser un representante legal (caso de los menores e incapacitados) o un representante voluntario (por ejemplo, apoderado). El representante voluntario debe estar debidamente autorizado mediante documento público o privado en el que se recoja y motive su intervención en este contrato. Si el contrato se concluye en nombre y representación propios, es la persona que firma el contrato quien asumirá las obligaciones del vendedor. Por el contrario, si se concluye por medio de representante, es esta otra persona quien firmará el contrato; sin embargo, es el vendedor quien asumirá las obligaciones derivadas de este contrato.',
                      },
                      defaultRadioId: 'id-unid-3_1_opA_1_opA',
                      replacement: '',
                      extraReplacements: [
                      ],
                      radios: [
                        {
                          label: 'en su propio nombre y representación',
                          radioId: 'id-unid-3_1_opA_1_opA',
                          identifier: 'id-unid-3_1_opA_1_opA',
                          // tslint:disable-next-line:max-line-length
                          replacementOriginal: 'id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.',
                          // tslint:disable-next-line:max-line-length
                          replacement: 'id-unid-3_1_opA_1_opA_1, mayor de edad, con domicilio en id-unid-3_1_opA_1_opA_2, con id-unid-3_1_opA_1_opA_3 número id-unid-3_1_opA_1_opA_4, y en su propio nombre y representación.',
                          extraReplacements: [],
                          checked: true,
                          subSteps: [
                          {
                            question: 'Nombre completo del vendedor:',
                            wordToReplace: 'id-unid-3_1_opA_1_opA_1',
                            identifier: 'id-unid-3_1_opA_1_opA_1',
                            type: 'iText',
                            replacement: '',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Indique el nombre completo, incluyendo sus dos apellidos, del vendedor.',
                            },
                          },
                          {
                            question: 'Dirección completa del lugar de residencia del vendedor:',
                            wordToReplace: 'id-unid-3_1_opA_1_opA_2',
                            identifier: 'id-unid-3_1_opA_1_opA_2',
                            type: 'iText',
                            replacement: '',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Indique la dirección completa, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país, del lugar de residencia del vendedor.',
                            },
                          },
                          {
                            type: 'iRadioB',
                            question: 'Tipo de dpcumento de identificación del vendedor',
                            identifier: 'id-unid-3_1_opA_1_opA_3',
                            wordToReplace: 'id-unid-3_1_opA_1_opA_3',
                            indications: {
                              areIndications: true,
                              indicationsType: 'outsideText',
                              value: 'Seleccione el tipo de documento de identificación del vendedor. Si esta persona cuenta con Documento Nacional de Identidad (DNI) es necesario escoger esta opción, y reservar las opciones de NIE o pasaporte solo para cuando aquel no exista o no se esté en posesión del mismo.',
                            },
                            replacement: '',
                            radios: [
                              {
                                label: 'DNI',
                                replacementOriginal: 'DNI',
                                replacement: '',
                                radioId: 'id-unid-3_1_opA_1_opA_3_opA',
                                identifier: 'id-unid-3_1_opA_1_opA_3_opA',
                                extraReplacements: [],
                                checked: true,
                              },
                              {
                                label: 'NIE',
                                replacementOriginal: 'NIE',
                                replacement: '',
                                radioId: 'id-unid-3_1_opA_1_opA_3_opB',
                                identifier: 'id-unid-3_1_opA_1_opA_3_opB',
                                extraReplacements: [],
                                checked: false,
                              },
                              {
                                label: 'Pasaporte',
                                replacementOriginal: 'Pasaporte',
                                replacement: '',
                                radioId: 'id-unid-3_1_opA_1_opA_3_opC',
                                identifier: 'id-unid-3_1_opA_1_opA_3_opC',
                                extraReplacements: [],
                                checked: false,
                              }
                            ]
                          },
                          {
                            question: 'Número del documento',
                            wordToReplace: 'id-unid-3_1_opA_1_opA_4',
                            identifier: 'id-unid-3_1_opA_1_opA_4',
                            type: 'iText',
                            replacement: '',
                            indications: {
                              areIndications: true,
                              indicationsType: 'insideText',
                              value: 'Introduzca el número que corresponde con el documento de identificación personal escogido para identificar a la parte compradora nº1.',
                            },
                          }
                        ]
                        },
                        {
                          label: 'por medio de un representante (legal o voluntario)',
                          // tslint:disable-next-line:max-line-length
                          replacementOriginal: 'id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3_1_opA_1_opB_6: id-unid-3_1_opA_1_opB_7, quien actúa en calidad de id-unid-3_1_opA_1_opB_8, en virtud de escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.',
                          // tslint:disable-next-line:max-line-length
                          replacement: 'id-unid-3_1_opA_1_opB_5, mayor de edad, con id-unid-3_1_opA_1_opB_6: id-unid-3_1_opA_1_opB_7, quien actúa en calidad de id-unid-3_1_opA_1_opB_8, en virtud de escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de id-unid-3_1_opA_1_opB_1, con domicilio en id-unid-3_1_opA_1_opB_2 y id-unid-3_1_opA_1_opB_3 número id-unid-3_1_opA_1_opB_4.',
                          extraReplacements: [],
                          radioId: 'id-unid-3_1_opA_1_opB',
                          identifier: 'id-unid-3_1_opA_1_opB',
                          checked: false,
                          subSteps: [
                            {
                              question: 'Nombre completo del vendedor:',
                              wordToReplace: 'id-unid-3_1_opA_1_opB_1',
                              identifier: 'id-unid-3_1_opA_1_opB_1',
                              type: 'iText',
                              replacement: '',
                              indications: {
                                areIndications: true,
                                indicationsType: 'insideText',
                                value: 'Indique el nombre completo, incluyendo sus dos apellidos, del vendedor.',
                              },
                            },
                            {
                              question: 'Dirección completa del lugar de residencia del vendedor:',
                              wordToReplace: 'id-unid-3_1_opA_1_opB_2',
                              identifier: 'id-unid-3_1_opA_1_opB_2',
                              type: 'iText',
                              replacement: '',
                              indications: {
                                areIndications: true,
                                indicationsType: 'insideText',
                                value: 'Indique la dirección completa, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país, del lugar de residencia del vendedor.',
                              },
                            },
                            {
                              type: 'iRadioB',
                              question: 'Tipo de documento de identificación del vendedor',
                              identifier: 'id-unid-3_1_opA_1_opB_3',
                              wordToReplace: '3_1_opA_1_opB_3',
                              indications: {
                                areIndications: true,
                                indicationsType: 'insideText',
                                value: 'Seleccione el tipo de documento de identificación del vendedor. Si esta persona cuenta con Documento Nacional de Identidad (DNI) es necesario escoger esta opción, y reservar las opciones de NIE o pasaporte solo para cuando aquel no exista o no se esté en posesión del mismo.',
                              },
                              replacement: '',
                              radios: [
                                {
                                  label: 'DNI',
                                  replacementOriginal: 'DNI',
                                  replacement: '',
                                  radioId: 'id-unid-3_1_opA_1_opB_3_opA',
                                  identifier: 'id-unid-3_1_opA_1_opB_3_opA',
                                  extraReplacements: [],
                                  checked: true,
                                },
                                {
                                  label: 'NIE',
                                  replacementOriginal: 'NIE',
                                  replacement: '',
                                  radioId: 'id-unid-3_1_opA_1_opB_3_opB',
                                  identifier: 'id-unid-3_1_opA_1_opB_3_opB',
                                  extraReplacements: [],
                                  checked: false,
                                },
                                {
                                  label: 'Pasaporte',
                                  replacementOriginal: 'Pasaporte',
                                  replacement: '',
                                  radioId: 'id-unid-3_1_opA_1_opB_3_opC',
                                  identifier: 'id-unid-3_1_opA_1_opB_3_opC',
                                  extraReplacements: [],
                                  checked: false,
                                }
                              ]
                            },
                            {
                              question: 'Número del documento',
                              wordToReplace: 'id-unid-3_1_opA_1_opB_4',
                              identifier: 'id-unid-3_1_opA_1_opB_4',
                              type: 'iText',
                              replacement: '',
                              indications: {
                                areIndications: true,
                                indicationsType: 'insideText',
                                value: 'Introduzca el número que corresponde con el documento de identificación personal escogido para identificar a la parte compradora nº1.',
                              },
                            },
                            {
                              question: 'Nombre completo de la persona que firma este contrato en nombre y representación del vendedor:',
                              wordToReplace: 'id-unid-3_1_opA_1_opB_5',
                              identifier: 'id-unid-3_1_opA_1_opB_5',
                              type: 'iText',
                              replacement: '',
                              indications: {
                                areIndications: true,
                                indicationsType: 'outsideText',
                                value: 'Indique aquí el nombre completo (nombre(s) y apellidos) de la persona física que firma este contrato en nombre y representación del vendedor. El contrato puede ser firmado por un representante legal (caso de los menores e incapacitados/as) o voluntario (apoderado, por ejemplo) del vendedor.',
                              },
                            },
                            {
                              type: 'iRadioB',
                              question: 'Documento de identificación personal de la persona que firma este contrato en nombre y representación del vendedor:',
                              identifier: 'id-unid-3_1_opA_1_opB_6',
                              wordToReplace: 'id-unid-3_1_opA_1_opB_6',
                              indications: {
                                areIndications: true,
                                indicationsType: 'outsideText',
                                value: 'Escoja el tipo de documento que identificará personalmente a la persona física que firma el contrato en nombre y representación del vendedor. Si esta persona cuenta con DNI/NIF es necesario escoger esta opción, y reservar las opciones de NIE o pasaporte solo para cuando aquel no exista o no se esté en posesión del mismo.',
                              },
                              replacement: '',
                              radios: [
                                {
                                  label: 'DNI',
                                  replacementOriginal: 'DNI',
                                  replacement: '',
                                  radioId: 'id-unid-3_1_opA_1_opB_6_opA',
                                  identifier: 'id-unid-3_1_opA_1_opB_6_opA',
                                  extraReplacements: [],
                                  checked: true,
                                },
                                {
                                  label: 'NIE',
                                  replacementOriginal: 'NIE',
                                  replacement: '',
                                  radioId: 'id-unid-3_1_opA_1_opB_6_opB',
                                  identifier: 'id-unid-3_1_opA_1_opB_6_opB',
                                  extraReplacements: [],
                                  checked: false,
                                },
                                {
                                  label: 'Pasaporte',
                                  replacementOriginal: 'Pasaporte',
                                  replacement: '',
                                  radioId: 'id-unid-3_1_opA_1_opB_6_opC',
                                  identifier: 'id-unid-3_1_opA_1_opB_6_opC',
                                  extraReplacements: [],
                                  checked: false,
                                }
                              ]
                            },
                            {
                              question: 'Número del documento de identificación personal seleccionado:',
                              wordToReplace: 'id-unid-3_1_opA_1_opB_7',
                              identifier: 'id-unid-3_1_opA_1_opB_7',
                              type: 'iText',
                              replacement: '',
                              indications: {
                                areIndications: true,
                                indicationsType: 'insideText',
                                value: 'Introduzca aquí el número correspondiente al documento de identificación personal escogido en la pregunta anterior para la persona que firma este contrato en nombre y representación del vendedor.',
                              },
                            },
                            {
                              question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del vendedor:',
                              wordToReplace: 'id-unid-3_1_opA_1_opB_8',
                              identifier: 'id-unid-3_1_opA_1_opB_8',
                              type: 'iText',
                              replacement: '',
                              indications: {
                                areIndications: true,
                                indicationsType: 'insideText',
                                value: 'Indique aquí en qué calidad o concepto esta persona física firma este contrato en nombre y representación del vendedor.',
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
                replacementOriginal: 'id-unid-3_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opB_6, con id-unid-3_1_opB_7 número id-unid-3_1_opB_8, en nombre y representación de: id-unid-3_1_opB_1, con N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3 con la siguiente información: id-unid-3_1_opB_4.',
                replacement: 'id-unid-3_1_opB_5, mayor de edad, con domicilio en id-unid-3_1_opB_6, con id-unid-3_1_opB_7 número id-unid-3_1_opB_8, en nombre y representación de: id-unid-3_1_opB_1, con N.I.F número id-unid-3_1_opB_2, e inscrita en: id-unid-3_1_opB_3 con la siguiente información: id-unid-3_1_opB_4.',
                extraReplacements: [],
                radioId: 'id-unid-3_1_opB',
                identifier: 'id-unid-3_1_opB',
                checked: false,
                subSteps: [
                  {
                    question: 'Nombre completo de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: 'id-unid-3_1_opB_1',
                    identifier: 'id-unid-3_1_opB_1',
                    type: 'iText',
                    placeholder: 'BBVA, S.A',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      value: 'Indique el nombre completo de la persona jurídica que desea vender el vehículo. En el caso de desconocimiento del nombre de la persona jurídica, se puede solicitar dicha información a través del registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc).',
                    },
                  },
                  {
                    question: 'Número de Identificación Fiscal o NIF completo de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: 'id-unid-3_1_opB_2',
                    identifier: 'id-unid-3_1_opB_2',
                    type: 'iText',
                    placeholder: 'B01234567',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      value: 'Indique el Número de Identificación Fiscal o NIF completo de la persona jurídica que desea vender el vehículo. El NIF es el número otorgado por la Hacienda Española para identificar a cada persona jurídica a efectos fiscales. Tenga en cuenta que todas las personas jurídicas que operan en España están obligadas a contar con un número NIF, incluso en el caso de que sean de nacionalidad extranjera.',
                    },
                  },
                  {
                    question: 'Indique el tipo de registro y lugar donde está inscrita la persona jurídica que desea vender el vehículo:',
                    wordToReplace: 'id-unid-3_1_opB_3',
                    identifier: 'id-unid-3_1_opB_3',
                    type: 'iText',
                    placeholder: 'Registro Mercantil de Sevilla',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      value: 'Indique el tipo de registro y lugar donde está inscrita la persona jurídica que desea vender el vehículo. Puede solicitar dicha información en el registro correspondiente (Registro Mercantil, Registro de Fundaciones, etc).',
                    },
                  },
                  {
                    question: 'Datos registrales completos de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: 'id-unid-3_1_opB_4',
                    identifier: 'id-unid-3_1_opB_4',
                    type: 'iText',
                    placeholder: 'Tomo 123, folio 10, hoja SE-1234',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      value: 'Indique los datos registrales completos de la persona jurídica que desea vender el vehículo. Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc).',
                    },
                  },
                  {
                    question: 'Nombre completo del representante persona física de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: 'id-unid-3_1_opB_5',
                    identifier: 'id-unid-3_1_opB_5',
                    type: 'iText',
                    placeholder: 'Juan Carlos',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      value: 'Indique los datos registrales completos de la persona jurídica que desea vender el vehículo. Puede solicitar dicha información a través del registro público correspondiente (Registro Mercantil, Registro de Fundaciones, etc).',
                    },
                  },
                  {
                    question: 'Domicilio completo del representante persona física de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: 'id-unid-3_1_opB_6',
                    identifier: 'id-unid-3_1_opB_6',
                    type: 'iText',
                    placeholder: 'Calle ejemplo',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      value: 'Indique el domicilio completo, incluyendo el tipo y nombre de la vía, número, piso, código postal, localidad, provincia y país, del representante persona física de la persona jurídica que desea vender el vehículo. El representante persona física debe ser la persona física que pueda obligar a la persona jurídica y contratar en su nombre. Dicha persona debe haber sido nombrada o apoderada debidamente por la persona jurídica que desea vender el vehículo.',
                    },
                  },
                  {
                    type: 'iRadioB',
                    question: 'Documento de identidad del representante persona física de la persona jurídica que desea vender el vehículo:',
                    identifier: 'id-unid-3_1_opB_7',
                    wordToReplace: 'id-unid-3_1_opB_7',
                    indications: {
                      areIndications: true,
                      indicationsType: 'outsideText',
                      value: 'Seleccione el documento de identidad del representante persona física de la persona jurídica que desea vender el vehículo. El representante persona física debe ser la persona física que pueda obligar a la persona jurídica y contratar en su nombre. Dicha persona debe haber sido nombrada o apoderada debidamente por la persona jurídica que desea vender el vehículo.',
                    },
                    replacement: '',
                    radios: [
                      {
                        label: 'DNI',
                        replacementOriginal: 'DNI',
                        replacement: '',
                        radioId: 'id-unid-3_1_opB_7_opA',
                        identifier: 'id-unid-3_1_opB_7_opA',
                        extraReplacements: [],
                        checked: true,
                      },
                      {
                        label: 'NIE',
                        replacementOriginal: 'NIE',
                        replacement: '',
                        radioId: 'id-unid-3_1_opB_7_opB',
                        identifier: 'id-unid-3_1_opB_7_opB',
                        extraReplacements: [],
                        checked: false,
                      },
                      {
                        label: 'Pasaporte',
                        replacementOriginal: 'Pasaporte',
                        replacement: '',
                        radioId: 'id-unid-3_1_opB_7_opC',
                        identifier: 'id-unid-3_1_opB_7_opC',
                        extraReplacements: [],
                        checked: false,
                      }
                    ]
                  },
                  {
                    question: 'Número del documento de identificación personal seleccionado:',
                    wordToReplace: 'id-unid-3_1_opB_8',
                    identifier: 'id-unid-3_1_opB_8',
                    type: 'iText',
                    replacement: '',
                    indications: {
                      areIndications: true,
                      indicationsType: 'insideText',
                      value: 'Introduzca el número que corresponde con el documento de identificación personal escogido para identificar a la parte vendedora',
                    },
                  },
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
  //   question: 'Número de personas que desean comprar el vehículo que se vende por medio de este contrato:',
  //   content: [
  //     {
  //       identifier: 'iParteCompradora',
  //       wordToReplace: 'iParteCompradora',
  //       replacementOriginal: 'iPersonaCompradora',
  //       replacement: '',
  //       extraReplacements: [],
  //       modifiedReplacements: [],
  //       modifiedExtraReplacements: [],
  //       subSteps: [
  //         {
  //           type: 'iRadioC',
  //           question: 'El comprador (persona que desea adquirir el vehículo) es:',
  //           identifier: 'iPersonaCompradora',
  //           wordToReplace: 'iPersonaCompradora',
  //           indications: 'Marque la opción Persona ...',
  //           defaultRadioId: 'persona-fisica',
  //           replacement: '',
  //           extraReplacements: [
  //           ],
  //           radios: [
  //             {
  //               label: 'Persona física',
  //               radioId: 'persona-fisica',
  //               identifier: 'persona-fisica',
  //               replacementOriginal: 'iPersonaCompradoraFisica',
  //               replacement: 'iPersonaCompradoraFisica',
  //               extraReplacements: [],
  //               checked: true,
  //               subSteps: [
  //                 {
  //                     type: 'iRadioC',
  //                     question: 'El comprador (persona que desea adquirir el vehículo) celebra este contrato:',
  //                     identifier: 'iPersonaCompradoraFisica',
  //                     wordToReplace: 'iPersonaCompradoraFisica',
  //                     indications: 'Marque la opción Persona ...',
  //                     defaultRadioId: '4_1_opA_1_opA',
  //                     replacement: '',
  //                     extraReplacements: [
  //                     ],
  //                     radios: [
  //                       {
  //                         label: 'en su propio nombre y representación',
  //                         radioId: '4_1_opA_1_opA',
  //                         identifier: '4_1_opA_1_opA',
  //                         // tslint:disable-next-line:max-line-length
  //                         replacementOriginal: '4_1_opA_1_opA_1, mayor de edad, con domicilio en 4_1_opA_1_opA_2, con 4_1_opA_1_opA_3 número 4_1_opA_1_opA_4, y en su propio nombre y representación.',
  //                         // tslint:disable-next-line:max-line-length
  //                         replacement: '4_1_opA_1_opA_1, mayor de edad, con domicilio en 4_1_opA_1_opA_2, con 4_1_opA_1_opA_3 número 4_1_opA_1_opA_4, y en su propio nombre y representación.',
  //                         extraReplacements: [],
  //                         checked: false,
  //                         subSteps: [
  //                         {
  //                           question: 'Nombre completo del comprador:',
  //                           wordToReplace: '4_1_opA_1_opA_1',
  //                           identifier: '4_1_opA_1_opA_1',
  //                           type: 'iText',
  //                           replacement: '',
  //                         },
  //                         {
  //                           question: 'Dirección completa del lugar de residencia del comprador:',
  //                           wordToReplace: '4_1_opA_1_opA_2',
  //                           identifier: '4_1_opA_1_opA_2',
  //                           type: 'iText',
  //                           replacement: '',
  //                         },
  //                         {
  //                           type: 'iRadioB',
  //                           question: 'Tipo de documento de identificación del comprador',
  //                           identifier: '4_1_opA_1_opA_3',
  //                           wordToReplace: '4_1_opA_1_opA_3',
  //                           indications: 'Marque la opción Persona ...',
  //                           replacement: '',
  //                           radios: [
  //                             {
  //                               label: 'DNI',
  //                               replacementOriginal: 'DNI',
  //                               replacement: '',
  //                               radioId: '4_1_opA_1_opA_3_opA',
  //                               identifier: '4_1_opA_1_opA_3_opA',
  //                               extraReplacements: [],
  //                               checked: true,
  //                             },
  //                             {
  //                               label: 'NIE',
  //                               replacementOriginal: 'NIE',
  //                               replacement: '',
  //                               radioId: '4_1_opA_1_opA_3_opB',
  //                               identifier: '4_1_opA_1_opA_3_opB',
  //                               extraReplacements: [],
  //                               checked: false,
  //                             },
  //                             {
  //                               label: 'Pasaporte',
  //                               replacementOriginal: 'Pasaporte',
  //                               replacement: '',
  //                               radioId: '4_1_opA_1_opA_3_opC',
  //                               identifier: '4_1_opA_1_opA_3_opC',
  //                               extraReplacements: [],
  //                               checked: false,
  //                             }
  //                           ]
  //                         },
  //                         {
  //                           question: 'Número del documento',
  //                           wordToReplace: '4_1_opA_1_opA_4',
  //                           identifier: '4_1_opA_1_opA_4',
  //                           type: 'iText',
  //                           replacement: '',
  //                         }
  //                       ]
  //                       },
  //                       {
  //                         label: 'por medio de un representante (legal o voluntario)',
  //                         // tslint:disable-next-line:max-line-length
  //                         replacementOriginal: '4_1_opA_1_opB_5, mayor de edad, con 4_1_opA_1_opB_6: 4_1_opA_1_opB_7, quien actúa en calidad de 4_1_opA_1_opB_8, en virtud de escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de 4_1_opA_1_opB_1, con domicilio en 4_1_opA_1_opB_2 y 4_1_opA_1_opB_3 número 4_1_opA_1_opB_4.',
  //                         // tslint:disable-next-line:max-line-length
  //                         replacement: '4_1_opA_1_opB_5, mayor de edad, con 4_1_opA_1_opB_6: 4_1_opA_1_opB_7, quien actúa en calidad de 4_1_opA_1_opB_8, en virtud de escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de 4_1_opA_1_opB_1, con domicilio en 4_1_opA_1_opB_2 y 4_1_opA_1_opB_3 número 4_1_opA_1_opB_4.',
  //                         extraReplacements: [],
  //                         radioId: '4_1_opA_1_opB',
  //                         identifier: '4_1_opA_1_opB',
  //                         checked: false,
  //                         subSteps: [
  //                           {
  //                             question: 'Nombre completo del comprador:',
  //                             wordToReplace: '4_1_opA_1_opB_1',
  //                             identifier: '4_1_opA_1_opB_1',
  //                             type: 'iText',
  //                             replacement: '',
  //                           },
  //                           {
  //                             question: 'Dirección completa del lugar de residencia del comprador:',
  //                             wordToReplace: '4_1_opA_1_opB_2',
  //                             identifier: '4_1_opA_1_opB_2',
  //                             type: 'iText',
  //                             replacement: '',
  //                           },
  //                           {
  //                             type: 'iRadioB',
  //                             question: 'Tipo de dpcumento de identificación del comprador',
  //                             identifier: '4_1_opA_1_opB_3',
  //                             wordToReplace: '4_1_opA_1_opB_3',
  //                             indications: 'Marque la opción Persona ...',
  //                             replacement: '',
  //                             radios: [
  //                               {
  //                                 label: 'DNI',
  //                                 replacementOriginal: 'DNI',
  //                                 replacement: '',
  //                                 radioId: '4_1_opA_1_opB_3_opA',
  //                                 identifier: '4_1_opA_1_opB_3_opA',
  //                                 extraReplacements: [],
  //                                 checked: true,
  //                               },
  //                               {
  //                                 label: 'NIE',
  //                                 replacementOriginal: 'NIE',
  //                                 replacement: '',
  //                                 radioId: '4_1_opA_1_opB_3_opB',
  //                                 identifier: '4_1_opA_1_opB_3_opB',
  //                                 extraReplacements: [],
  //                                 checked: false,
  //                               },
  //                               {
  //                                 label: 'Pasaporte',
  //                                 replacementOriginal: 'Pasaporte',
  //                                 replacement: '',
  //                                 radioId: '4_1_opA_1_opB_3_opC',
  //                                 identifier: '4_1_opA_1_opB_3_opC',
  //                                 extraReplacements: [],
  //                                 checked: false,
  //                               }
  //                             ]
  //                           },
  //                           {
  //                             question: 'Número del documento',
  //                             wordToReplace: '4_1_opA_1_opB_4',
  //                             identifier: '4_1_opA_1_opB_4',
  //                             type: 'iText',
  //                             replacement: '',
  //                           },
  //                           {
  //                             question: 'Nombre completo de la persona que firma este contrato en nombre y representación del comprador:',
  //                             wordToReplace: '4_1_opA_1_opB_5',
  //                             identifier: '4_1_opA_1_opB_5',
  //                             type: 'iText',
  //                             replacement: '',
  //                           },
  //                           {
  //                             type: 'iRadioB',
  //                             question: 'Documento de identificación personal de la persona que firma este contrato en nombre y representación del comprador:',
  //                             identifier: '4_1_opA_1_opB_6',
  //                             wordToReplace: '4_1_opA_1_opB_6',
  //                             indications: 'Marque la opción Persona ...',
  //                             replacement: '',
  //                             radios: [
  //                               {
  //                                 label: 'DNI',
  //                                 replacementOriginal: 'DNI',
  //                                 replacement: '',
  //                                 radioId: '4_1_opA_1_opB_6_opA',
  //                                 identifier: '4_1_opA_1_opB_6_opA',
  //                                 extraReplacements: [],
  //                                 checked: true,
  //                               },
  //                               {
  //                                 label: 'NIE',
  //                                 replacementOriginal: 'NIE',
  //                                 replacement: '',
  //                                 radioId: '4_1_opA_1_opB_6_opB',
  //                                 identifier: '4_1_opA_1_opB_6_opB',
  //                                 extraReplacements: [],
  //                                 checked: false,
  //                               },
  //                               {
  //                                 label: 'Pasaporte',
  //                                 replacementOriginal: 'Pasaporte',
  //                                 replacement: '',
  //                                 radioId: '4_1_opA_1_opB_6_opC',
  //                                 identifier: '4_1_opA_1_opB_6_opC',
  //                                 extraReplacements: [],
  //                                 checked: false,
  //                               }
  //                             ]
  //                           },
  //                           {
  //                             question: 'Número del documento de identificación personal seleccionado:',
  //                             wordToReplace: '4_1_opA_1_opB_7',
  //                             identifier: '4_1_opA_1_opB_7',
  //                             type: 'iText',
  //                             replacement: '',
  //                           },
  //                           {
  //                             // tslint:disable-next-line:max-line-length
  //                             question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del comprador:',
  //                             wordToReplace: '4_1_opA_1_opB_8',
  //                             identifier: '4_1_opA_1_opB_8',
  //                             type: 'iText',
  //                             replacement: '',
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
  //               replacementOriginal: '4_1_opB_5, mayor de edad, con domicilio en 4_1_opB_6, con 4_1_opB_7 número 4_1_opB_8, en nombre y representación de: 4_1_opB_1, con N.I.F número 4_1_opB_2, e inscrita en: 4_1_opB_3 con la siguiente información: 4_1_opB_4.',
  //               // tslint:disable-next-line:max-line-length
  //               replacement: '4_1_opB_5, mayor de edad, con domicilio en 4_1_opB_6, con 4_1_opB_7 número 4_1_opB_8, en nombre y representación de: 4_1_opB_1, con N.I.F número 4_1_opB_2, e inscrita en: 4_1_opB_3 con la siguiente información: 4_1_opB_4.',
  //               extraReplacements: [],
  //               radioId: 'persona-juridica',
  //               identifier: 'persona-juridica',
  //               checked: false,
  //               subSteps: [
  //                 {
  //                   question: 'Nombre completo de la persona jurídica que desea comprador el vehículo:',
  //                   wordToReplace: '4_1_opB_1',
  //                   identifier: '4_1_opB_1',
  //                   type: 'iText',
  //                   replacement: '',
  //                 },
  //                 {
  //                   question: 'Número de Identificación Fiscal o NIF completo de la persona jurídica que desea comprador el vehículo:',
  //                   wordToReplace: '4_1_opB_2',
  //                   identifier: '4_1_opB_2',
  //                   type: 'iText',
  //                   replacement: '',
  //                 },
  //                 {
  //                   // tslint:disable-next-line:max-line-length
  //                   question: 'Indique el tipo de registro y lugar donde está inscrita la persona jurídica que desea comprador el vehículo:',
  //                   wordToReplace: '4_1_opB_3',
  //                   identifier: '4_1_opB_3',
  //                   type: 'iText',
  //                   replacement: '',
  //                 },
  //                 {
  //                   question: 'Datos registrales completos de la persona jurídica que desea comprador el vehículo:',
  //                   wordToReplace: '4_1_opB_4',
  //                   identifier: '4_1_opB_4',
  //                   type: 'iText',
  //                   replacement: '',
  //                 },
  //                 {
  //                   question: 'Nombre completo del representante persona física de la persona jurídica que desea comprador el vehículo:',
  //                   wordToReplace: '4_1_opB_5',
  //                   identifier: '4_1_opB_5',
  //                   type: 'iText',
  //                   replacement: '',
  //                 },
  //                 {
  //                   question: 'Domicilio completo del representante persona física de la persona jurídica que desea comprador el vehículo:',
  //                   wordToReplace: '4_1_opB_6',
  //                   identifier: '4_1_opB_6',
  //                   type: 'iText',
  //                   replacement: '',
  //                 },
  //                 {
  //                   type: 'iRadioB',
  //                   // tslint:disable-next-line:max-line-length
  //                   question: 'Documento de identidad del representante persona física de la persona jurídica que desea comprador el vehículo:',
  //                   identifier: '4_1_opB_7',
  //                   wordToReplace: '4_1_opB_7',
  //                   indications: 'Marque la opción Persona ...',
  //                   replacement: '',
  //                   radios: [
  //                     {
  //                       label: 'DNI',
  //                       replacementOriginal: 'DNI',
  //                       replacement: '',
  //                       radioId: '4_1_opB_7_opA',
  //                       identifier: '4_1_opB_7_opA',
  //                       extraReplacements: [],
  //                       checked: true,
  //                     },
  //                     {
  //                       label: 'NIE',
  //                       replacementOriginal: 'NIE',
  //                       replacement: '',
  //                       radioId: '4_1_opB_7_opB',
  //                       identifier: '4_1_opB_7_opB',
  //                       extraReplacements: [],
  //                       checked: false,
  //                     },
  //                     {
  //                       label: 'Pasaporte',
  //                       replacementOriginal: 'Pasaporte',
  //                       replacement: '',
  //                       radioId: '4_1_opB_7_opC',
  //                       identifier: '4_1_opB_7_opC',
  //                       extraReplacements: [],
  //                       checked: false,
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   question: 'Número del documento de identificación personal seleccionado:',
  //                   wordToReplace: '4_1_opB_8',
  //                   identifier: '4_1_opB_8',
  //                   type: 'iText',
  //                   replacement: '',
  //                 },
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
  //   type: 'iRadioC',
  //   subType: 'select',
  //   question: 'Tipo de vehículo que se desea vender mediante este contrato:',
  //   identifier: 'id5',
  //   wordToReplace: 'id5',
  //   indications: 'Marque la opción Persona ...',
  //   defaultRadioId: 'id5_opA',
  //   replacement: '',
  //   extraReplacements: [
  //   ],
  //   radios: [
  //     {
  //       label: 'ciclomotor (vehículo con dos ruedas, con pedales y que cuenta con un pequeño motor)',
  //       radioId: 'id5_opA',
  //       identifier: 'id5_opA',
  //       replacementOriginal: 'Tipo de Vehículo automóvil: ciclomotor',
  //       replacement: 'Tipo de Vehículo automóvil: ciclomotor',
  //       extraReplacements: [
  //       ],
  //       checked: false,
  //       subSteps: []
  //     },
  //     {
  //       label: 'motocicleta o moto (vehículo de dos ruedas con motor)',
  //       // tslint:disable-next-line:max-line-length
  //       replacementOriginal: 'id5_opB_1',
  //       replacement: 'id5_opB_1',
  //       extraReplacements: [
  //       ],
  //       radioId: 'id5_opB',
  //       identifier: 'id5_opB',
  //       checked: false,
  //       subSteps: [
  //         {
  //           type: 'iRadioC',
  //           subType: 'select',
  //           question: 'Tipo de motocicleta que se desea vender mediante este contrato:',
  //           identifier: 'id5_opB_1',
  //           wordToReplace: 'id5_opB_1',
  //           indications: 'Marque la opción Persona ...',
  //           defaultRadioId: 'id5_opA',
  //           replacement: '',
  //           extraReplacements: [
  //           ],
  //           radios: [
  //             {
  //               label: 'scooter (motocicleta urbana de pequeña cilindrada)',
  //               radioId: 'id5_opA_1_opA',
  //               identifier: 'id5_opA_1_opA',
  //               replacementOriginal: 'Tipo de Vehículo automóvil: motocicleta scooter',
  //               replacement: 'Tipo de Vehículo automóvil: motocicleta scooter',
  //               extraReplacements: [],
  //               checked: true,
  //               subSteps: []
  //             },
  //             {
  //               label: 'motocross (motocicleta de campo)',
  //               replacementOriginal: 'Tipo de Vehículo automóvil: motocicleta de motocross',
  //               replacement: 'motocross (motocicleta de campo)',
  //               extraReplacements: [],
  //               radioId: 'id5_opA_1_opB',
  //               identifier: 'id5_opA_1_opB',
  //               checked: false,
  //               subSteps: []
  //             },
  //             {
  //               label: 'motocicleta eléctrica (motocicleta con motor eléctrico)',
  //               replacementOriginal: 'Tipo de Vehículo automóvil: motocicleta eléctrica',
  //               replacement: 'Tipo de Vehículo automóvil: motocicleta eléctrica',
  //               extraReplacements: [],
  //               radioId: 'id5_opA_1_opC',
  //               identifier: 'id5_opA_1_opC',
  //               checked: false,
  //               subSteps: []
  //             },
  //             {
  //               label: 'motocicleta deportiva o superbike',
  //               replacementOriginal: 'Tipo de Vehículo automóvil: motocicleta deportiva',
  //               replacement: 'Tipo de Vehículo automóvil: motocicleta deportiva',
  //               extraReplacements: [],
  //               radioId: 'id5_opA_1_opD',
  //               identifier: 'id5_opA_1_opD',
  //               checked: false,
  //               subSteps: []
  //             },
  //             {
  //               label: 'motocicleta naked (motocicleta con motor al descubierto)',
  //               replacementOriginal: 'Tipo de Vehículo automóvil: motocicleta naked',
  //               replacement: 'Tipo de Vehículo automóvil: motocicleta naked',
  //               extraReplacements: [],
  //               radioId: 'id5_opA_1_opE',
  //               identifier: 'id5_opA_1_opE',
  //               checked: false,
  //               subSteps: []
  //             },
  //             {
  //               label: 'motocicleta gran turismo (motocicleta de carretera)',
  //               replacementOriginal: 'Tipo de Vehículo automóvil: motocicleta gran turismo',
  //               replacement: 'Tipo de Vehículo automóvil: motocicleta gran turismo',
  //               extraReplacements: [],
  //               radioId: 'id5_opA_1_opF',
  //               identifier: 'id5_opA_1_opF',
  //               checked: false,
  //               subSteps: []
  //             },
  //             {
  //               label: 'otro tipo de motocicleta',
  //               replacementOriginal: 'Tipo de Vehículo automóvil: motocicleta tipo id5_opA_1_opG_1',
  //               replacement: 'Tipo de Vehículo automóvil: motocicleta tipo id5_opA_1_opG_1',
  //               extraReplacements: [],
  //               radioId: 'id5_opA_1_opG',
  //               identifier: 'id5_opA_1_opG',
  //               checked: false,
  //               subSteps: [
  //                 {
  //                   question: 'Tipo de motocicleta que se desea vender mediante este contrato:',
  //                   placeholder: 'moto tral, enduro',
  //                   wordToReplace: 'id5_opA_1_opG_1',
  //                   identifier: 'id5_opA_1_opG_1',
  //                   type: 'iText',
  //                   replacement: '',
  //                 },
  //               ]
  //             },
  //           ],
  //         },
  //       ]
  //     },
  //     {
  //       label: 'motocarro (vehículo de tres ruedas dotado de plataforma para el transporte de mercancías)',
  //       radioId: 'id5_opC',
  //       identifier: 'id5_opC',
  //       replacementOriginal: 'Tipo de Vehículo automóvil: motocarro',
  //       replacement: 'Tipo de Vehículo automóvil: motocarro',
  //       extraReplacements: [
  //       ],
  //       checked: false,
  //       subSteps: []
  //     },
  //     {
  //       label: 'turismo o coche (vehículo que permite el transporte de hasta 9 personas)',
  //       // tslint:disable-next-line:max-line-length
  //       replacementOriginal: 'id5_opD_1',
  //       replacement: 'id5_opD_1',
  //       extraReplacements: [
  //       ],
  //       radioId: 'id5_opD',
  //       identifier: 'id5_opD',
  //       checked: false,
  //       subSteps: [
  //         {
  //           type: 'iRadioC',
  //           subType: 'select',
  //           question: 'Tipo de vehículo que se desea vender mediante este contrato:',
  //           identifier: 'id5_opD_1',
  //           wordToReplace: 'id5_opD_1',
  //           indications: 'Marque la opción Persona ...',
  //           defaultRadioId: 'id5_opA',
  //           replacement: '',
  //           extraReplacements: [
  //           ],
  //           radios: [
  //             {
  //               label: 'monovolumen (vehículo amplio con 5 plazas o más)',
  //               radioId: 'id5_opD_1_opA',
  //               identifier: 'id5_opD_1_opA',
  //               replacementOriginal: 'Tipo de Vehículo automóvil: coche monovolumen',
  //               replacement: 'Tipo de Vehículo automóvil: coche monovolumen',
  //               extraReplacements: [],
  //               checked: true,
  //               subSteps: []
  //             },
  //             {
  //               label: 'berlina (coche de 4 o más plazas con luna trasera fija)',
  //               replacementOriginal: 'Tipo de Vehículo automóvil: coche berlina',
  //               replacement: 'Tipo de Vehículo automóvil: coche berlina',
  //               extraReplacements: [],
  //               radioId: 'id5_opD_1_opB',
  //               identifier: 'id5_opD_1_opB',
  //               checked: false,
  //               subSteps: []
  //             },
  //             {
  //               label: 'cupé (coche con forma de berlina pero que cuenta con tres puertas)',
  //               replacementOriginal: 'Tipo de Vehículo automóvil: coche cupé',
  //               replacement: 'Tipo de Vehículo automóvil: coche cupé',
  //               extraReplacements: [],
  //               radioId: 'id5_opD_1_opC',
  //               identifier: 'id5_opD_1_opC',
  //               checked: false,
  //               subSteps: []
  //             },
  //             {
  //               label: 'descapotable (coche con techo plegable o capota)',
  //               replacementOriginal: 'Tipo de Vehículo automóvil: coche descapotable',
  //               replacement: 'Tipo de Vehículo automóvil: coche descapotable',
  //               extraReplacements: [],
  //               radioId: 'id5_opD_1_opD',
  //               identifier: 'id5_opD_1_opD',
  //               checked: false,
  //               subSteps: []
  //             },
  //             {
  //               label: 'todoterreno (vehículo adaptado para su uso en terrenos agrarios)',
  //               replacementOriginal: 'Tipo de Vehículo automóvil: coche todoterreno',
  //               replacement: 'Tipo de Vehículo automóvil: coche todoterreno',
  //               extraReplacements: [],
  //               radioId: 'id5_opD_1_opE',
  //               identifier: 'id5_opD_1_opE',
  //               checked: false,
  //               subSteps: []
  //             },
  //             {
  //               label: 'otro tipo de turismo',
  //               replacementOriginal: 'Tipo de Vehículo automóvil: coche tipo id5_opD_1_opF_1',
  //               replacement: 'Tipo de Vehículo automóvil: coche tipo id5_opD_1_opF_1',
  //               extraReplacements: [],
  //               radioId: 'id5_opD_1_opF',
  //               identifier: 'id5_opD_1_opF',
  //               checked: false,
  //               subSteps: [
  //                 {
  //                   question: 'Tipo de turismo o coche que se desea vender mediante este contrato:',
  //                   placeholder: 'suv, familiar, de competeción',
  //                   wordToReplace: 'id5_opD_1_opF_1',
  //                   identifier: 'id5_opD_1_opF_1',
  //                   type: 'iText',
  //                   replacement: '',
  //                 },
  //               ]
  //             },
  //           ],
  //         },
  //       ]
  //     },
  //     {
  //       label: 'furgón o furgoneta (vehículo que permite el transporte de mercancías hasta 3.500 kilos)',
  //       radioId: 'id5_opE',
  //       identifier: 'id5_opE',
  //       replacementOriginal: 'Tipo de Vehículo automóvil: furgoneta',
  //       replacement: 'Tipo de Vehículo automóvil: furgoneta',
  //       extraReplacements: [
  //       ],
  //       checked: false,
  //       subSteps: []
  //     },
  //     {
  //       label: 'camión (vehículo que permite el transporte de mercancías de más de 3.500 kilos)',
  //       radioId: 'id5_opF',
  //       identifier: 'id5_opF',
  //       replacementOriginal: 'Tipo de Vehículo automóvil: camión',
  //       replacement: 'Tipo de Vehículo automóvil: camión',
  //       extraReplacements: [
  //       ],
  //       checked: false,
  //       subSteps: []
  //     },
  //     {
  //       label: 'autobús o autocar (vehículo que permite el transporte de más de 9 personas)',
  //       radioId: 'id5_opG',
  //       identifier: 'id5_opG',
  //       replacementOriginal: 'Tipo de Vehículo automóvil: camión',
  //       replacement: 'Tipo de Vehículo automóvil: camión',
  //       extraReplacements: [
  //       ],
  //       checked: false,
  //       subSteps: []
  //     },
  //     {
  //       label: 'otro vehículo',
  //       radioId: 'id5_opH',
  //       identifier: 'id5_opH',
  //       replacementOriginal: 'Tipo de Vehículo automóvil: id5_opH_1',
  //       replacement: 'Tipo de Vehículo automóvil: id5_opH_1',
  //       extraReplacements: [
  //       ],
  //       checked: true,
  //       subSteps: [
  //         {
  //           question: 'Tipo de vehículo que se desea vender mediante este contrato distinto a los indicados en la pregunta anterior:',
  //           placeholder: 'autocaravana, quad',
  //           wordToReplace: 'id5_opH_1',
  //           identifier: 'id5_opH_1',
  //           type: 'iText',
  //           replacement: '',
  //         }
  //       ]
  //     }
  //   ],
  // },
  // {
  //   type: 'iText',
  //   identifier: 'id6',
  //   wordToReplace: 'id6',
  //   replacement: '',
  //   placeholder: 'Seat, Citroen, Suzuki,...',
  //   question: 'Tipo de vehículo que se desea vender mediante este contrato:',
  //   indications: {
  //     areIndications: true,
  //     indicationsType: 'insideText',
  //     value: 'Indique en este espacio la marca fabricante del vehículo que se desea vender mediante este contrato.'
  //   },
  //   mandatory: true,
  //   isFocused: false
  // },
  // {
  //   type: 'iText',
  //   identifier: 'id7',
  //   wordToReplace: 'id7',
  //   replacement: '',
  //   placeholder: 'Ibiza, Polo, C4,...',
  //   question: 'Modelo específico del vehículo que se desea vender:',
  //   indications: {
  //     areIndications: true,
  //     indicationsType: 'insideText',
  //     value: 'Indique en este espacio el modelo específico del vehículo que se desea vender.'
  //   },
  //   mandatory: true,
  //   isFocused: false
  // },
  // {
  //   type: 'iText',
  //   identifier: 'id8',
  //   wordToReplace: 'id8',
  //   replacement: '',
  //   placeholder: 'Ibiza, Polo, C4,...',
  //   question: 'Número de serie y bastidor (o simplemente conocido como nº de bastidor) del vehículo que se desea vender:',
  //   indications: {
  //     areIndications: true,
  //     indicationsType: 'outsideText',
  //     // tslint:disable-next-line:max-line-length
  //     value: 'Indique en este espacio el número de serie y bastidor (o simplemente conocido como nº de bastidor) del vehículo que se desea vender. Este es el número de identificación único del vehículo y puede encontrarlo, por ejemplo, en los papeles del vehículo o en el vehículo mismo grabado o en una pegatina que, en ocasiones, se encuentra en la puerta del conductor (coche), o bajo la zona donde se introduce la llave (contacto) en las motos.'
  //   },
  //   mandatory: true,
  //   isFocused: false
  // },
  // {
  //   type: 'iText',
  //   identifier: 'id9',
  //   wordToReplace: 'id9',
  //   replacement: '',
  //   placeholder: 'Escribe un número mayor que cero',
  //   question: 'Kilometraje o número de kilómetros recorridos según se indica en el cuenta kilómetros del vehículo que se desea vender:',
  //   indications: {
  //     areIndications: true,
  //     indicationsType: 'insideText',
  //     // tslint:disable-next-line:max-line-length
  //     value: 'Indique en este espacio kilometraje o número de kilómetros recorridos según se indica en el cuenta kilómetros del vehículo que se desea vender.'
  //   },
  //   mandatory: true,
  //   isFocused: false
  // },
  // {
  //   type: 'iText',
  //   identifier: 'id10',
  //   wordToReplace: 'id10',
  //   replacement: '',
  //   placeholder: '2483YBY',
  //   question: 'Matrícula del vehículo que se desea vender:',
  //   indications: {
  //     areIndications: true,
  //     indicationsType: 'insideText',
  //     // tslint:disable-next-line:max-line-length
  //     value: 'Indique en este espacio la matrícula del vehículo que se desea vender mediante este contrato de compraventa.'
  //   },
  //   mandatory: true,
  //   isFocused: false
  // },
  // {
  //   type: 'iText',
  //   identifier: 'id11',
  //   wordToReplace: 'id11',
  //   replacement: '',
  //   placeholder: 'Julio 2002',
  //   question: 'MMes y año de la primera matriculación del vehículo que desea vender:',
  //   indications: {
  //     areIndications: true,
  //     indicationsType: 'insideText',
  //     // tslint:disable-next-line:max-line-length
  //     value: 'Indique en este espacio el mes y año de la primera matriculación del vehículo que se desea vender.'
  //   },
  //   mandatory: true,
  //   isFocused: false
  // },
  // {
  //   type: 'iText',
  //   identifier: 'id12',
  //   wordToReplace: 'id12',
  //   replacement: '',
  //   placeholder: 'rojo, negro,...',
  //   question: 'MMes y año de la primera matriculación del vehículo que desea vender:',
  //   indications: {
  //     areIndications: true,
  //     indicationsType: 'insideText',
  //     // tslint:disable-next-line:max-line-length
  //     value: 'Indique el color del vehículo que se desea vender mediante este contrato de compraventa.'
  //   },
  //   mandatory: true,
  //   isFocused: false
  // },
  // {
  //   type: 'iRadioC',
  //   question: 'El vehículo tiene otras características especiales que quiere añadir:',
  //   identifier: 'idnew1',
  //   wordToReplace: 'idnew1',
  //   indications: 'Marque la opción Persona ...',
  //   defaultRadioId: 'idnew1_opA',
  //   replacement: '',
  //   extraReplacements: [
  //   ],
  //   radios: [
  //     {
  //       label: 'Sí',
  //       replacementOriginal: '- Otras características del vehículo: idnew1_opA_1',
  //       replacement: '- Otras características del vehículo: idnew1_opA_1',
  //       extraReplacements: [],
  //       radioId: 'idnew1_opA',
  //       identifier: 'idnew1_opA',
  //       checked: false,
  //       subSteps: [
  //         {
  //           question: 'Indique otras características del vehículo',
  //           placeholder: 'Aire acondicionado',
  //           wordToReplace: 'idnew1_opA_1',
  //           identifier: 'idnew1_opA_1',
  //           type: 'iText',
  //           replacement: '',
  //         },
  //       ]
  //     },
  //     {
  //       label: 'No',
  //       replacementOriginal: '',
  //       replacement: '',
  //       extraReplacements: [],
  //       radioId: 'idnew1_opB',
  //       identifier: 'idnew1_opB',
  //       checked: true,
  //       subSteps: []
  //     },
  //   ],
  // },
  // {
  //   type: 'iText',
  //   identifier: 'id13',
  //   wordToReplace: 'id13',
  //   replacement: '',
  //   placeholder: 'Sin plomo 95',
  //   question: 'Tipo de combustible que utiliza el vehículo que se desea vender:',
  //   indications: {
  //     areIndications: true,
  //     indicationsType: 'insideText',
  //     // tslint:disable-next-line:max-line-length
  //     value: 'Indique en este espacio el tipo específico de combustible que utiliza el vehículo que se desea vender.'
  //   },
  //   mandatory: true,
  //   isFocused: false
  // },
  // {
  //   type: 'iRadioB',
  //   question: 'El vehículo que se desea vender mediante este contrato, ¿lleva el motor original (el motor de fábrica)?',
  //   identifier: 'id14',
  //   wordToReplace: 'id14',
  //   indications: 'Marque la opción Persona ...',
  //   replacement: '',
  //   radios: [
  //     {
  //       label: 'Sí',
  //       replacementOriginal: 'Sí',
  //       replacement: 'Sí',
  //       radioId: 'id14_opA',
  //       identifier: 'id14_opA',
  //       extraReplacements: [],
  //       checked: true,
  //     },
  //     {
  //       label: 'No',
  //       replacementOriginal: 'No',
  //       replacement: 'No',
  //       radioId: 'id14_opB',
  //       identifier: 'id14_opB',
  //       extraReplacements: [],
  //       checked: false,
  //     },
  //   ]
  // },
  // {
  //   type: 'iText',
  //   identifier: 'id15',
  //   wordToReplace: 'id15',
  //   replacement: '',
  //   placeholder: '',
  //   question: 'Número de propietarios que ha tenido el vehículo que se desea vender antes que el actual propietario vendedor:',
  //   indications: {
  //     areIndications: true,
  //     indicationsType: 'insideText',
  //     // tslint:disable-next-line:max-line-length
  //     value: 'Introduzca el número de propietarios que ha tenido el vehículo que se desea vender antes que el actual propietario que vendedor. Si el propietario que ahora lo vende es el primer y único propietario que ha tenido el vehículo introduzca 0.'
  //   },
  //   mandatory: true,
  //   isFocused: false
  // },
  // {
  //   type: 'iRadioC',
  //   subType: 'select',
  //   question: 'El estado de conservación del vehículo que se desea vender es:',
  //   identifier: 'id16',
  //   wordToReplace: 'id16',
  //   indications: 'Marque la opción Persona ...',
  //   defaultRadioId: 'id16_opA',
  //   replacement: '',
  //   extraReplacements: [
  //   ],
  //   radios: [
  //     {
  //       label: 'Perfecto estado de conservación, como nuevo.',
  //       replacementOriginal: 'Perfecto estado de conservación, como nuevo.',
  //       replacement: 'Perfecto estado de conservación, como nuevo',
  //       extraReplacements: [],
  //       radioId: 'id16_opA',
  //       identifier: 'id16_opA',
  //       checked: false,
  //       subSteps: []
  //     },
  //     {
  //       label: 'Buen estado de conservación, con el desgaste propio a la antigüedad del vehículo.',
  //       replacementOriginal: 'Buen estado de conservación, con el desgaste propio a la antigüedad del vehículo. id16_opB_1',
  //       replacement: 'Buen estado de conservación, con el desgaste propio a la antigüedad del vehículo. id16_opB_1',
  //       extraReplacements: [],
  //       radioId: 'id16_opB',
  //       identifier: 'id16_opB',
  //       checked: true,
  //       subSteps: [
  //         {
  //           question: 'Desperfectos o golpes visibles que tiene el vehículo que se desea vender',
  //           placeholder: 'Opcional',
  //           wordToReplace: 'id16_opB_1',
  //           identifier: 'id16_opB_1',
  //           type: 'iText',
  //           replacement: '',
  //           isEmpty: {
  //             prepend: 'Los desperfectos y/o golpes visibles que tiene el Vehículo son los siguientes: ',
  //             append: '',
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       label: 'Estado de conservación no adecuado para un uso normal e inmediato del vehículo.',
  //       replacementOriginal: 'Estado de conservación no adecuado para un uso normal e inmediato del vehículo. id16_opC_1',
  //       replacement: 'Estado de conservación no adecuado para un uso normal e inmediato del vehículo. id16_opC_1',
  //       extraReplacements: [],
  //       radioId: 'id16_opC',
  //       identifier: 'id16_opC',
  //       checked: true,
  //       subSteps: [
  //         {
  //           question: 'Desperfectos o golpes visibles que tiene el vehículo que se desea vender',
  //           placeholder: 'Opcional',
  //           wordToReplace: 'id16_opC_1',
  //           identifier: 'id16_opC_1',
  //           type: 'iText',
  //           replacement: '',
  //           isEmpty: {
  //             prepend: 'Los desperfectos y/o golpes visibles que tiene el Vehículo son los siguientes: ',
  //             append: '',
  //           }
  //         }
  //       ]
  //     },
  //   ],
  // },
  // {
  //   type: 'iRadioC',
  //   question: 'El vehículo que se desea vender ha pasado la ITV alguna vez:',
  //   identifier: 'id17_weirdBehaviour',
  //   wordToReplace: 'id17',
  //   indications: 'Marque la opción Persona ...',
  //   defaultRadioId: 'id17_opA',
  //   replacement: '',
  //   extraReplacements: [
  //   ],
  //   radios: [
  //     {
  //       label: 'Sí',
  //       // tslint:disable-next-line:max-line-length
  //       replacementOriginal: 'Que el Vehículo objeto del presente Contrato de compraventa se encuentra revisado reglamentariamente por la ITV de id17_opA_1 en fecha id17_opA_2.',
  //       // tslint:disable-next-line:max-line-length
  //       replacement: 'Que el Vehículo objeto del presente Contrato de compraventa se encuentra revisado reglamentariamente por la ITV de id17_opA_1 en fecha id17_opA_2.',
  //       extraReplacements: [],
  //       radioId: 'id17_opA',
  //       identifier: 'id17_opA',
  //       checked: false,
  //       subSteps: [
  //         {
  //           question: 'Municipio y/o nombre del centro de ITV en el que el vehículo que se desea vender pasó su última Inspección ITV:',
  //           placeholder: 'Ej. Alcorcón - OCA ITV, S.A.',
  //           wordToReplace: 'id17_opA_1',
  //           identifier: 'id17_opA_1',
  //           type: 'iText',
  //           replacement: '',
  //         },
  //         {
  //           question: 'Fecha en la que el vehículo que se desea vender pasó la última ITV:',
  //           placeholder: 'Ej. Alcorcón - OCA ITV, S.A.',
  //           wordToReplace: 'id17_opA_1',
  //           identifier: 'id17_opA_1',
  //           type: 'iDate',
  //           replacement: '',
  //         }
  //       ]
  //     },
  //     {
  //       label: 'No',
  //       replacementOriginal: '',
  //       replacement: '',
  //       extraReplacements: [],
  //       radioId: 'id17_opB',
  //       identifier: 'id17_opB',
  //       checked: true,
  //       subSteps: []
  //     }
  //   ],
  // },
  // {
  //   question: 'Mes y año en el que el vehículo que se desea vender debe pasar la próxima ITV:',
  //   placeholder: 'Octubre 2019',
  //   wordToReplace: 'id18',
  //   identifier: 'id18',
  //   type: 'iText',
  //   replacement: '',
  // },
  // {
  //   question: 'Precio (en euros) que se fija para la venta del vehículo que se desea vender:',
  //   placeholder: 'Escriba un número mayor que cero',
  //   wordToReplace: 'id19',
  //   identifier: 'id19',
  //   type: 'iNumber',
  //   replacement: '',
  //   extraReplacements: [],
  //   rules: [
  //     {
  //       condition: false,
  //       rulename: 'extraReplacementToCharacter',
  //       identifier: 'blablam',
  //       wordToReplace: 'blablam',
  //       replacement: ''
  //     }
  //   ]
  // },
  // {
  //   type: 'iRadioC',
  //   question: 'Se va a pagar una cantidad en concepto de señal o reserva:',
  //   identifier: 'id20',
  //   wordToReplace: 'id20',
  //   indications: 'Marque la opción Persona ...',
  //   defaultRadioId: 'id20_opA',
  //   replacement: '',
  //   extraReplacements: [
  //   ],
  //   radios: [
  //     {
  //       label: 'Sí',
  //       // tslint:disable-next-line:max-line-length
  //       replacementOriginal: 'Se acuerda abonar en concepto de señal a la fecha de firma de este Contrato la cantidad de id20_opA_1 € (blablam2), que se restará al precio total a la hora de realizar el pago.',
  //       // tslint:disable-next-line:max-line-length
  //       replacement: 'Se acuerda abonar en concepto de señal a la fecha de firma de este Contrato la cantidad de id20_opA_1 € (blablam2), que se restará al precio total a la hora de realizar el pago.',
  //       extraReplacements: [],
  //       radioId: 'id20_opA',
  //       identifier: 'id20_opA',
  //       checked: false,
  //       subSteps: [
  //         {
  //           // tslint:disable-next-line:max-line-length
  //           question: 'Cantidad (en euros) que se desea pagar en concepto de señal o de reserva del vehículo al momento de firmar el contrato:',
  //           placeholder: 'Escriba un número mayor que 0.',
  //           wordToReplace: 'id20_opA_1',
  //           identifier: 'id20_opA_1',
  //           type: 'iNumber',
  //           replacement: '',
  //           extraReplacements: [],
  //           rules: [
  //             {
  //               condition: false,
  //               rulename: 'extraReplacementToCharacter',
  //               identifier: 'blablam2',
  //               wordToReplace: 'blablam2',
  //               replacement: ''
  //             }
  //           ],
  //         }
  //       ]
  //     },
  //     {
  //       label: 'No',
  //       replacementOriginal: '',
  //       replacement: '',
  //       extraReplacements: [],
  //       radioId: 'id20_opB',
  //       identifier: 'id20_opB',
  //       checked: true,
  //       subSteps: []
  //     }
  //   ],
  // },
  // {
  //   type: 'iRadioC',
  //   subType: 'select',
  //   question: 'Método de pago del precio del vehículo que se desea vender:',
  //   identifier: 'id21',
  //   wordToReplace: 'id21',
  //   indications: 'Marque la opción Persona ...',
  //   defaultRadioId: 'id21_opA',
  //   replacement: '',
  //   extraReplacements: [
  //   ],
  //   radios: [
  //     {
  //       label: 'Ingreso o transferencia bancaria',
  //       // tslint:disable-next-line:max-line-length
  //       replacementOriginal: 'El pago del precio por la Parte Compradora se realizará mediante ingreso o transferencia bancaria. Este pago se realizará en la fecha de entrega del Vehículo en la siguiente cuenta bancaria: Entidad bancaria: id21_opA_1 IBAN identificador de la cuenta: id21_opA_2 Titular de la cuenta: id21_opA_3',
  //       // tslint:disable-next-line:max-line-length
  //       replacement: 'El pago del precio por la Parte Compradora se realizará mediante ingreso o transferencia bancaria. Este pago se realizará en la fecha de entrega del Vehículo en la siguiente cuenta bancaria: Entidad bancaria: id21_opA_1 IBAN identificador de la cuenta: id21_opA_2 Titular de la cuenta: id21_opA_3',
  //       extraReplacements: [],
  //       radioId: 'id21_opA',
  //       identifier: 'id21_opA',
  //       checked: false,
  //       subSteps: [
  //         {
  //           // tslint:disable-next-line:max-line-length
  //           question: 'Nombre o denominación completa de la entidad bancaria en la que se encuentra abierta la cuenta en la que el comprador deberá ingresar el precio del vehículo que se desea vender:',
  //           placeholder: 'Banco de mi caja de ahorros.',
  //           wordToReplace: 'id21_opA_1',
  //           identifier: 'id21_opA_1',
  //           type: 'iText',
  //           replacement: '',
  //         },
  //         {
  //           // tslint:disable-next-line:max-line-length
  //           question: 'IBAN o número identificador de la cuenta bancaria donde el comprador ingresará el precio del vehículo se desea vender:',
  //           placeholder: 'Banco de mi caja de ahorros.',
  //           wordToReplace: 'id21_opA_2',
  //           identifier: 'id21_opA_2',
  //           type: 'iText',
  //           replacement: '',
  //         },
  //         {
  //           // tslint:disable-next-line:max-line-length
  //           question: 'Nombre y apellidos completos del titular de la cuenta bancaria en la que el comprador ingresará el precio del vehículo se desea vender:',
  //           placeholder: 'Pepito de los Palotes',
  //           wordToReplace: 'id21_opA_3',
  //           identifier: 'id21_opA_3',
  //           type: 'iText',
  //           replacement: '',
  //         }
  //       ]
  //     },
  //     {
  //       label: 'En efectivo',
  //       // tslint:disable-next-line:max-line-length
  //       replacementOriginal: 'El pago del precio por la Parte Compradora se realizará mediante efectivo. La Parte Compradora hará entrega de la suma total especificada anteriormente en el mismo momento de la entrega del Vehículo.',
  //       // tslint:disable-next-line:max-line-length
  //       replacement: 'El pago del precio por la Parte Compradora se realizará mediante efectivo. La Parte Compradora hará entrega de la suma total especificada anteriormente en el mismo momento de la entrega del Vehículo.',
  //       extraReplacements: [],
  //       radioId: 'id21_opB',
  //       identifier: 'id21_opB',
  //       checked: true,
  //       subSteps: []
  //     },
  //     {
  //       label: 'Cheque',
  //       // tslint:disable-next-line:max-line-length
  //       replacementOriginal: 'El pago del precio por la Parte Compradora se realizará mediante cheque. La Parte Compradora hará entrega de un cheque correspondiente a la suma total especificada anteriormente en el mismo momento de la entrega del Vehículo.',
  //       // tslint:disable-next-line:max-line-length
  //       replacement: 'El pago del precio por la Parte Compradora se realizará mediante cheque. La Parte Compradora hará entrega de un cheque correspondiente a la suma total especificada anteriormente en el mismo momento de la entrega del Vehículo.',
  //       extraReplacements: [],
  //       radioId: 'id21_opC',
  //       identifier: 'id21_opC',
  //       checked: true,
  //       subSteps: []
  //     },
  //     {
  //       label: 'Otro',
  //       // tslint:disable-next-line:max-line-length
  //       replacementOriginal: 'El pago del precio por la Parte Compradora se realizará mediante: id21_opD_1. Este pago se realizará en la fecha de entrega del Vehículo',
  //       // tslint:disable-next-line:max-line-length
  //       replacement: 'El pago del precio por la Parte Compradora se realizará mediante: id21_opD_1. Este pago se realizará en la fecha de entrega del Vehículo',
  //       extraReplacements: [],
  //       radioId: 'id21_opD',
  //       identifier: 'id21_opD',
  //       checked: true,
  //       subSteps: [
  //         {
  //           // tslint:disable-next-line:max-line-length
  //           question: 'Especifique el método de pago mediante el cual el comprador pagará al vendedor el precio del vehículo que se desea vender:',
  //           placeholder: 'Mitad en cheque, mitad en efectivo',
  //           wordToReplace: 'id21_opD_1',
  //           identifier: 'id21_opD_1',
  //           type: 'iText',
  //           replacement: '',
  //         }
  //       ]
  //     },
  //   ],
  // },
  // {
  //   // tslint:disable-next-line:max-line-length
  //   question: 'Lugar en el que el vendedor deberá hacer entrega del vehículo en favor del comprador:',
  //   placeholder: 'Domicilio del vendedor',
  //   wordToReplace: 'id22',
  //   identifier: 'id22',
  //   type: 'iText',
  //   replacement: '',
  // },
  // {
  //   type: 'iRadioC',
  //   question: 'El vendedor deberá hacer entrega del vehículo en favor del comprador:',
  //   identifier: 'id23',
  //   wordToReplace: 'id23',
  //   indications: 'Marque la opción Persona ...',
  //   defaultRadioId: 'id23_opA',
  //   replacement: '',
  //   extraReplacements: [
  //   ],
  //   radios: [
  //     {
  //       label: 'en el momento de firma de este contrato',
  //       // tslint:disable-next-line:max-line-length
  //       replacementOriginal: 'en el momento de firma de este contrato',
  //       // tslint:disable-next-line:max-line-length
  //       replacement: 'en el momento de firma de este contrato',
  //       extraReplacements: [],
  //       radioId: 'id23_opA',
  //       identifier: 'id23_opA',
  //       checked: false,
  //       subSteps: [
  //       ]
  //     },
  //     {
  //       label: 'en una fecha posterior a la fecha de firma de este contrato',
  //       // tslint:disable-next-line:max-line-length
  //       replacementOriginal: 'dentro del plazo de id23_opB_1 desde la fecha recogida en el encabezado de este Contrato.',
  //       // tslint:disable-next-line:max-line-length
  //       replacement: 'dentro del plazo de id23_opB_1 desde la fecha recogida en el encabezado de este Contrato.',
  //       extraReplacements: [],
  //       radioId: 'id23_opB',
  //       identifier: 'id23_opB',
  //       checked: false,
  //       subSteps: [
  //         {
  //           // tslint:disable-next-line:max-line-length
  //           question: 'Plazo (desde la firma de este contrato) en el que el vendedor deberá hacer entrega del vehículo en favor del comprador (en "meses", "semanas", etc.):',
  //           placeholder: 'Ej. 15 días',
  //           wordToReplace: 'id23_opB_1',
  //           identifier: 'id23_opB_1',
  //           type: 'iText',
  //           replacement: '',
  //           extraReplacements: []
  //         }
  //       ]
  //     },
  //   ],
  // },
  // {
  //   type: 'iRadioC',
  //   // tslint:disable-next-line:max-line-length
  //   question: 'además del permiso de circulación del vehículo, la ficha técnica, y el recibo del impuesto de circulación del año anterior, el comprador recibió otro documento/accesorio relativo al vehículo que se desea vender?',
  //   identifier: 'id24',
  //   wordToReplace: 'id24',
  //   indications: 'Marque la opción Persona ...',
  //   defaultRadioId: 'id24_opA',
  //   replacement: '',
  //   extraReplacements: [
  //   ],
  //   radios: [
  //     {
  //       label: 'Sí',
  //       replacementOriginal: '7. Otros: id24_opA_1',
  //       replacement: '7. Otros: id24_opA_1',
  //       extraReplacements: [],
  //       radioId: 'id24_opA',
  //       identifier: 'id24_opA',
  //       checked: false,
  //       subSteps: [
  //         {
  //           question: 'Indique qué otros documentos o accesorios recibe el comprador:',
  //           placeholder: 'Ej. 15 días',
  //           wordToReplace: 'id24_opA_1',
  //           identifier: 'id24_opA_1',
  //           type: 'iText',
  //           replacement: '',
  //           extraReplacements: []
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
  //       radioId: 'id24_opB',
  //       identifier: 'id24_opB',
  //       checked: false,
  //       subSteps: [
  //       ]
  //     },
  //   ],
  // },
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
