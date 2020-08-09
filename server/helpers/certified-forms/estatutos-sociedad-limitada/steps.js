const steps = [
  {
    type: 'start',
    title: 'Estatutos de una Sociedad Limitada',
    description: `Los estatutos de una sociedad son el pacto que contiene los derechos y obligaciones de los socios, y las normas que regulan dicha sociedad. Supone uno de los pasos iniciales para constituir una sociedad y deben estar en la escritura de constitución de la misma.`,
    isCurrentStep: true
  },
  {
    "replacement": "",
    "identifier": "id-unid-0",
    "wordToReplace": "id-unid-0",
    "question": "Nombre que tiene la sociedad limitada",
    "placeholder": "P.ej: Metalurgia Juan y Silvia, SL",
    "mandatory": false,
    "isFocused": false,
    "type": "iText",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "No olvides incluir tras el nombre las siglas SL"
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
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "Duración temporal",
        "replacement": "limitada, constituyéndose por un plazo máximo de id-unid-3_opB_0. Dicho plazo empezará a contar desde el comienzo de las actividades sociales. Transcurrido dicho plazo la sociedad quedará disuelta de pleno derecho, salvo que previo a la finalización del plazo anteriormente establecido se hubiese acordado expresamente  una prórroga y se haya dejado constancia de la misma mediante inscripción de la prórroga en el Registro Mercantil",
        "replacementOriginal": "limitada, constituyéndose por un plazo máximo de id-unid-3_opB_0. Dicho plazo empezará a contar desde el comienzo de las actividades sociales. Transcurrido dicho plazo la sociedad quedará disuelta de pleno derecho, salvo que previo a la finalización del plazo anteriormente establecido se hubiese acordado expresamente  una prórroga y se haya dejado constancia de la misma mediante inscripción de la prórroga en el Registro Mercantil",
        "radioId": "id-unid-3_opB",
        "identifier": "id-unid-3_opB",
        checked: false,
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-3_opB_0",
            "wordToReplace": "id-unid-3_opB_0",
            "question": "Indica el plazo de duración de la sociedad",
            "placeholder": "P.ej: 1 año y 60 días",
            "mandatory": false,
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
  },
  {
    "replacement": "",
    "identifier": "id-unid-4",
    "wordToReplace": "id-unid-4",
    "question": "¿Cuándo empezarán a realizarse las actividades de las sociedad?",
    "type": "iRadioC",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "En la misma fecha de la escritura de constitución",
        "replacement": "La sociedad dará comienzo a sus operaciones desde el día de la fecha de la escritura de constitución.",
        "replacementOriginal": "La sociedad dará comienzo a sus operaciones desde el día de la fecha de la escritura de constitución.",
        "radioId": "id-unid-4_opA",
        "identifier": "id-unid-4_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "En la misma fecha de inscripción en el Registro Mercantil",
        "replacement": "La sociedad dará comienzo a sus operaciones desde la fecha de su inscripción en el Registro Mercantil.",
        "replacementOriginal": "La sociedad dará comienzo a sus operaciones desde la fecha de su inscripción en el Registro Mercantil.",
        "radioId": "id-unid-4_opB",
        "identifier": "id-unid-4_opB",
        "subSteps": [],
        "extraReplacements": [],
        checked: false,
      },
      {
        "label": "En una fecha distinta y posterior a la de la escritura de constitución",
        "replacement": "La sociedad dará comienzo a sus operaciones en la fecha id-unid-4_opC_0.",
        "replacementOriginal": "La sociedad dará comienzo a sus operaciones en la fecha id-unid-4_opC_0.",
        "radioId": "id-unid-4_opC",
        "identifier": "id-unid-4_opC",
        checked: false,
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-4_opC_0",
            "wordToReplace": "id-unid-4_opC_0",
            "question": "Indica la fecha concreta posterior a la escritura de constitución",
            "type": "iDate",
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
  },
  {
    "replacement": "",
    "identifier": "id-unid-5",
    "wordToReplace": "id-unid-5",
    "question": "Indique la fecha de cierre del ejercicio social de la empresa",
    "type": "iRadioC",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "El ejercicio social es el período de tiempo que completa una etapa social a los efectos contables y fiscales exigidos por la Ley.<br>\nToda sociedad mercantil tiene una finalidad de lucro, y las ganancias, el cumplimiento por el órgano de administración de determinadas obligaciones contables y documentales, la aprobación de cuentas, el destino del resultado, los impuestos que gravan las ganancias, etc., están siempre en relación con un tiempo determinado, que tiene un inicio y un final temporal, el llamado ejercicio social.<br>\nEl artículo 9 del T.R.L.S.A. que al regular el contenido mínimo de los Estatutos Sociales dispone que deberá constar, entre otros, (apartado j):  \"La fecha de cierre del ejercicio social. A falta de disposición estatutaria se entenderá que el ejercicio termina el 31 de diciembre de cada año\", de donde se deduce que los accionistas de la sociedad pueden decidir otra fecha de cierre del ejercicio social diferente a la señalada, pero que una vez decidida ésta, los ejercicios sociales se cerrarán en dicha fecha, y en su defecto, el 31 de diciembre, \"de cada año\", por lo que el periodo de tiempo de cada ejercicio será de un año, independientemente de cuál sea la fecha de cierre.<br><br>"
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "El 31 de diciembre",
        "replacement": "El ejercicio social termina el 31 de diciembre de cada año.",
        "replacementOriginal": "El ejercicio social termina el 31 de diciembre de cada año.",
        "radioId": "id-unid-5_opA",
        "identifier": "id-unid-5_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "En una fecha distinta",
        "replacement": "El ejercicio social terminará el día id-unid-5_opB_0 de cada año.",
        "replacementOriginal": "El ejercicio social terminará el día id-unid-5_opB_0 de cada año.",
        "radioId": "id-unid-5_opB",
        "identifier": "id-unid-5_opB",
        checked: false,
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-unid-5_opB_0",
            "wordToReplace": "id-unid-5_opB_0",
            "question": "Indique el día y el mes del cierre del ejercicio social",
            "placeholder": "P.ej: 31 de Mayo",
            "mandatory": false,
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
  },
  {
    "replacement": "",
    "identifier": "id-unid-6",
    "wordToReplace": "id-unid-6",
    "question": "¿Qué órgano será el encargado de la creación, eliminación o traslado de las sucursales dentro o fuera de España?",
    "type": "iRadioB",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "La sucursal es todo establecimiento secundario dotado de representación permanente y de cierta autonomía de gestión, a través del cual se desarrollen, total o parcialmente, las actividades de la sociedad. Está definición contempla la sucursal desde el punto de vista del art. 295 del Reglamento del Registro Mercantil (RRM), que es el que aquí interesa.<br>\nAl lado del domicilio social, principal centro de actividades de la sociedad o lugar donde se halla la administración y dirección de la compañía, toda sociedad de capital puede crear, trasladar y cerrar sucursales.<br>\nLa competencia para acordar la creación, la supresión o el traslado de sucursales es, salvo disposición contraria de los estatutos, del órgano de administración Ley de Sociedades de Capital (Real Decreto Legislativo 1/2010, de 2 de julio)"
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "El órgano de administración",
        "replacement": "Para decidir sobre la creación, supresión o traslado de sucursales, será competente el órgano de Administración.",
        "replacementOriginal": "Para decidir sobre la creación, supresión o traslado de sucursales, será competente el órgano de Administración.",
        "radioId": "id-unid-6_opA",
        "identifier": "id-unid-6_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "La Junta General",
        "replacement": "Para decidir sobre la creación, supresión o traslado de sucursales, será competente la Junta General.",
        "replacementOriginal": "Para decidir sobre la creación, supresión o traslado de sucursales, será competente la Junta General.",
        "radioId": "id-unid-6_opB",
        "identifier": "id-unid-6_opB",
        "subSteps": [],
        "extraReplacements": [],
        checked: false,
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-7",
    "wordToReplace": "id-unid-7",
    "question": "¿Qué órgano podrá cambiar el domicilio social de la sociedad? (en el ámbito nacional)",
    "type": "iRadioB",
    "indications": {
      "areIndications": "",
      "indicationsType": "",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "El órgano de administración",
        "replacement": "Para decidir sobre el traslado del domicilio dentro del territorio nacional, será competente el órgano de Administración.",
        "replacementOriginal": "Para decidir sobre el traslado del domicilio dentro del territorio nacional, será competente el órgano de Administración.",
        "radioId": "id-unid-7_opA",
        "identifier": "id-unid-7_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "La Junta General",
        "replacement": "Para decidir sobre el traslado del domicilio dentro o fuera del territorio nacional, será necesario acuerdo de la Junta General.",
        "replacementOriginal": "Para decidir sobre el traslado del domicilio dentro o fuera del territorio nacional, será necesario acuerdo de la Junta General.",
        "radioId": "id-unid-7_opB",
        "identifier": "id-unid-7_opB",
        "subSteps": [],
        "extraReplacements": [],
        checked: false,
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-unid-8",
    "wordToReplace": "id-unid-8",
    "question": "Indique el capital social de la empresa",
    "placeholder": "P.ej: 6000",
    "mandatory": false,
    "type": "iNumber",
    "indications": {
      "areIndications": true,
      "indicationsType": "insideText",
      "value": "No puede ser inferior a 3.000,00 € y deberá estar totalmente suscrito y desembolsado en el momento de constitución de la Sociedad. Sólo pueden hacerse aportaciones económicas, en ningún caso pueden ser trabajo personal."
    }
  },
  {
    "replacement": "",
    "identifier": "id-unid-9",
    "wordToReplace": "id-unid-9",
    "question": "¿En cuántas participaciones sociales se divide el capital? (Número de participaciones sociales)",
    "placeholder": "P.ej: 150",
    "type": "iNumber",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": `Las características de las participaciones sociales de una sociedad limitada son:
      <ul>
        <li>Representan una parte alícuota del capital social y deben de estar numeradas.</li>
        <li>Las participaciones suponen un valor nominal, y tienen carácter de indivisibles y acumulables.</li>
      <li>Con las excepciones que señala la LSRL las participaciones atribuyen los mismos derechos a todos los socios de la mercantil.</li>
      <li>Dado que las participaciones son acumulables un socio de una s.l. puede tener todas o varias participaciones.</li>
      <li>Las participaciones son indivisibles y no susceptibles de ser fraccionadas, por tanto el número de socios no pueda incrementarse ilimitadamente al margen del aumento de capital de la sociedad.</li>
      </ul>`
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-10",
    "wordToReplace": "id-dec-10",
    "question": "Cantidad en euros del valor nominal de cada participación",
    "placeholder": "P.ej: 300",
    "type": "iText",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "El capital social de las sociedades limitadas se divide en participaciones, y cada participación tendrá un valor nominal que vendrá determinado por la proporción que exista entre el capital social (no inferior a 3.000 €) y el número de participaciones que se creen. A continuación te pongo algunos ejemplos:<br>\nSi se crea una SL con un capital social de 3.000 € dividido en 3.000 participaciones, el valor nominal de cada participación será de 1 € (3.000 € / 3.000 participaciones).\nSi la SL se constituye con un capital social de 4.000 € y se crean 100 participaciones, el valor nominal de cada participación será de 40 € (4.000 € / 100 participaciones).\nTanto el número de participaciones que se creen como el capital social que se aporte (siempre respetando el mínimo legal de 3.000 €), dependerá de la voluntad de los socios de cada SL, teniendo en cuenta que si las participaciones tienen un valor nominal inferior será más fácil de que el número de partícipes que suscriban esas participaciones sea mayor, es decir, habrá más socios en esa sociedad, aunque este hecho tampoco impide que todas las participaciones sean suscritas por un socio único o dos."
    }
  },
  {
    "replacement": "",
    "identifier": "id-dec-11",
    "wordToReplace": "id-dec-11",
    "question": "Indique la forma en la que se convocará a la Junta General",
    "type": "iRadioC",
    "indications": {
      "areIndications": false,
      "indicationsType": "",
      "value": ""
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "En el Boletín Oficial del Registro Mercantil (BORME) y un periódico de los de mayor circulación",
        "replacement": "La Junta General se convocará: mediante anuncio publicado en el Boletín Oficial del Registro Mercantil y en uno de los diarios de mayor circulación en la provincia del domicilio social.",
        "replacementOriginal": "La Junta General se convocará: mediante anuncio publicado en el Boletín Oficial del Registro Mercantil y en uno de los diarios de mayor circulación en la provincia del domicilio social.",
        "radioId": "id-dec-11_opA",
        "identifier": "id-dec-11_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "De manera individual y escrita",
        "replacement": "La Junta General se convocará: por cualquier procedimiento de comunicación, individual y escrita que asegure la recepción del anuncio por todos los socios.",
        "replacementOriginal": "La Junta General se convocará: por cualquier procedimiento de comunicación, individual y escrita que asegure la recepción del anuncio por todos los socios.",
        "radioId": "id-dec-11_opB",
        "identifier": "id-dec-11_opB",
        "subSteps": [],
        "extraReplacements": [],
        checked: false,
      },
      {
        "label": "A través de una página web",
        "replacement": "La Junta General se convocará: mediante anuncio publicado en la página web de la sociedad id-dec-11_opC_0. En este caso, el anuncio de la convocatoria deberá permanecer publicado en la web de la sociedad hasta la efectiva celebración de la Junta.",
        "replacementOriginal": "La Junta General se convocará: mediante anuncio publicado en la página web de la sociedad id-dec-11_opC_0. En este caso, el anuncio de la convocatoria deberá permanecer publicado en la web de la sociedad hasta la efectiva celebración de la Junta.",
        "radioId": "id-dec-11_opC",
        "identifier": "id-dec-11_opC",
        checked: false,
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-11_opC_0",
            "wordToReplace": "id-dec-11_opC_0",
            "question": "URL de la página de la sociedad",
            "placeholder": "P.ej: www.automatikdocs.com",
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
  },
  {
    "replacement": "",
    "identifier": "id-dec-12",
    "wordToReplace": "id-dec-12",
    "question": "La junta se celebrará en:",
    "type": "iRadioB",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Lugar y tiempo de celebración de la junta de accionistas. Salvo que los estatutos dispongan expresamente otra cosa, el lugar donde debe reunirse la junta general de accionistas es el término municipal donde tenga su domicilio social. Así lo establece el art. 175.1 de la Ley de Sociedades de Capital (LSC). El lugar exacto de celebración podrá coincidir o no con el domicilio social siempre que se respete lo expuesto anteriormente, presumiéndose si en la convocatoria no figura el lugar de celebración, que será el domicilio social.  Únicamente en casos excepcionales la reunión puede celebrarse fuera del municipio:"
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "el municipio del domicilio social",
        "replacement": "La Junta General se celebrará en la localidad donde la sociedad tenga su domicilio. Si en la convocatoria no se especificase el lugar de celebración, se entenderá que la Junta ha sido convocada para su celebración en el domicilio social. En cambio, si la Junta  fuese Universal, podrá celebrarse en cualquier lugar del territorio nacional o extranjero.",
        "replacementOriginal": "La Junta General se celebrará en la localidad donde la sociedad tenga su domicilio. Si en la convocatoria no se especificase el lugar de celebración, se entenderá que la Junta ha sido convocada para su celebración en el domicilio social. En cambio, si la Junta  fuese Universal, podrá celebrarse en cualquier lugar del territorio nacional o extranjero.",
        "radioId": "id-dec-12_opA",
        "identifier": "id-dec-12_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "un municipio diferente al del domicilio social",
        "replacement": "La junta General se podrá celebrar en la localidad donde la sociedad no tenga su domicilio. Si en la convocatoria no se especificase el lugar de celebración, se entenderá que la Junta ha sido convocada para su celebración en el domicilio social.",
        "replacementOriginal": "La junta General se podrá celebrar en la localidad donde la sociedad no tenga su domicilio. Si en la convocatoria no se especificase el lugar de celebración, se entenderá que la Junta ha sido convocada para su celebración en el domicilio social.",
        "radioId": "id-dec-12_opB",
        "identifier": "id-dec-12_opB",
        "subSteps": [],
        "extraReplacements": [],
        checked: false,
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-13",
    "wordToReplace": "id-dec-13",
    "question": "Modalidad de administración que tendrá la sociedad",
    "type": "iRadioC",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Modalidades de órgano de administración que existen<br><br>- Administrador Único: el poder de representación corresponderá a una sola persona, física o jurídica, que será quien ejerza las funciones de administración y representación, no pudiendo delegar su cargo en un tercero.<br><br>- Dos o más administradores solidarios: el poder de representación corresponderá a cada persona, de forma que cada uno de ellos podrá actuar de forma separada, sin necesidad del otro, pudiendo realizar de forma individual cualquier acto que vincule a la sociedad.<br><br>- Dos o más administradores mancomunados: el poder de representación se ejercerá mancomunadamente por al menos dos de ellos en la forma que determinen los estatutos sociales.<br><br>- Consejo de Administración: se trata de un órgano de carácter colegiado, en el que será necesario el acuerdo de la mayoría de sus miembros para llevar a cabo una actuación. El consejo de administración en el caso de sociedades limitadas deberá estar formado por un mínimo de tres consejeros y un máximo de doce."
    },
    "extraReplacements": [],
    "radios": [
      {
        "label": "Administrador único",
        "replacement": "La Junta General elegirá al órgano de Administración, que será el encargado de administrar la Sociedad. El órgano de Administración quedará constituido por un Administrador único a quien corresponderá el poder de representación.",
        "replacementOriginal": "La Junta General elegirá al órgano de Administración, que será el encargado de administrar la Sociedad. El órgano de Administración quedará constituido por un Administrador único a quien corresponderá el poder de representación.",
        "radioId": "id-dec-13_opA",
        "identifier": "id-dec-13_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "Administradores solidarios",
        "replacement": "La Junta General elegirá al órgano de Administración, que será el encargado de administrar la Sociedad. El órgano de Administración quedará constituido por id-dec-13_opB_0 Administradores solidarios. El poder de representación corresponderá a cada uno de los Administradores con carácter solidarios.",
        "replacementOriginal": "La Junta General elegirá al órgano de Administración, que será el encargado de administrar la Sociedad. El órgano de Administración quedará constituido por id-dec-13_opB_0 Administradores solidarios. El poder de representación corresponderá a cada uno de los Administradores con carácter solidarios.",
        "radioId": "id-dec-13_opB",
        "identifier": "id-dec-13_opB",
        checked: false,
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-13_opB_0",
            "wordToReplace": "id-dec-13_opB_0",
            "question": "¿Cuántos administradores solidarios tendrá la sociedad?",
            "placeholder": "P. ej: 2",
            "mandatory": false,
            "type": "iNumber",
            rules: [],
            "indications": {
              "areIndications": true,
              "indicationsType": "insideText",
              "value": "Deben ser como mínimo dos, y no existe número máximo"
            }
          }
        ],
        "extraReplacements": []
      },
      {
        "label": "Administradores conjuntos o mancomunados",
        "replacement": "La Junta General elegirá al órgano de Administración, que será el encargado de administrar la Sociedad. El órgano de Administración quedará constituido por id-dec-13_opC_0 Administradores conjuntos. El poder de representación corresponderá a los Administradores conjuntos, que lo ejercerán mancomunadamente todos ellos.",
        "replacementOriginal": "La Junta General elegirá al órgano de Administración, que será el encargado de administrar la Sociedad. El órgano de Administración quedará constituido por id-dec-13_opC_0 Administradores conjuntos. El poder de representación corresponderá a los Administradores conjuntos, que lo ejercerán mancomunadamente todos ellos.",
        "radioId": "id-dec-13_opC",
        "identifier": "id-dec-13_opC",
        checked: false,
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-13_opC_0",
            "wordToReplace": "id-dec-13_opC_0",
            "question": "¿Cuántos Administradores mancomunados tendrá la sociedad?",
            "placeholder": "P. ej: 2",
            "type": "iNumber",
            rules: [],
            "indications": {
              "areIndications": true,
              "indicationsType": "outsideText",
              "value": "Deben existir como mínimo dos administradores mancomunados. Será necesario que al menos dos de ellos actúen conjuntamente, esto dotará, por un lado, de una mayor seguridad a la compañía respecto a la toma de decisiones, ya que no será posible que sean adoptadas de forma unilateral por uno solo de ellos, no obstante, hay que tener en consideración que esto puede ralentizar la toma de decisiones, pues será necesario al menos el consenso de dos de ellos."
            }
          }
        ],
        "extraReplacements": []
      },
      {
        "label": "Consejo de administración",
        "replacement": "La Junta General elegirá al órgano de Administración, que será el encargado de administrar la Sociedad. El órgano de Administración quedará constituido por un Consejo de Administración integrado por id-dec-13_opD_0 consejeros, que actuarán colegiadamente. id-dec-13_opD_1",
        "replacementOriginal": "La Junta General elegirá al órgano de Administración, que será el encargado de administrar la Sociedad. El órgano de Administración quedará constituido por un Consejo de Administración integrado por id-dec-13_opD_0 consejeros, que actuarán colegiadamente. id-dec-13_opD_1",
        "radioId": "id-dec-13_opD",
        "identifier": "id-dec-13_opD",
        checked: false,
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-13_opD_0",
            "wordToReplace": "id-dec-13_opD_0",
            "question": "¿Cuántos consejeros tendrá el consejo de administración?",
            "placeholder": "P. ej: 3",
            "type": "iNumber",
            rules: [],
            "indications": {
              "areIndications": true,
              "indicationsType": "outsideText",
              "value": "Ha de ser igual o superior a tres y no superior a doce. El consejo de administración es un órgano colegiado que necesita el acuerdo mayoritario de sus miembros para la adopción de cualquier decisión de la compañía. En este caso, la representación de la sociedad no recae de forma individual en cada uno de los miembros del consejo, sino que dicha representación es colegiada."
            }
          },
          {
            "replacement": "",
            "identifier": "id-dec-13_opD_1",
            "wordToReplace": "id-dec-13_opD_1",
            "question": "¿El voto del presidente decidirá en caso de empate en las votaciones que realice el consejo de administración? (voto dirimente)",
            "type": "iRadioB",
            "indications": {
              "areIndications": false,
              "indicationsType": "insideText",
              "value": ""
            },
            "radios": [
              {
                "label": "No",
                "replacement": "El voto del Presiente será no dirimente. ",
                "replacementOriginal": "El voto del Presiente será no dirimente. ",
                "radioId": "id-dec-13_opD_1_opA",
                "identifier": "id-dec-13_opD_1_opA",
                checked: true,
              },
              {
                "label": "Sí",
                "replacement": "El voto del Presidente será dirimente.",
                "replacementOriginal": "El voto del Presidente será dirimente.",
                "radioId": "id-dec-13_opD_1_opB",
                "identifier": "id-dec-13_opD_1_opB",
                checked: false,
              }
            ]
          }
        ],
        "extraReplacements": []
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-14",
    "wordToReplace": "id-dec-14",
    "question": "¿Deberán los administradores de la sociedad ser socios?",
    "type": "iRadioB",
    "indications": {
      "areIndications": true,
      "indicationsType": "outsideText",
      "value": "Aunque a veces da la impresión de que socio y administrador son sinónimos, lo cierto es que no es así. En ocasiones será una misma persona la que ocupe ambos puestos, si bien las tareas a realizar no son las mismas."
    },
    "radios": [
      {
        "label": "Sí ",
        "replacement": "",
        "replacementOriginal": "",
        "radioId": "id-dec-14_opA",
        "identifier": "id-dec-14_opA",
        "subSteps": [],
        checked: true,
      },
      {
        "label": "No",
        "replacement": "no",
        "replacementOriginal": "no",
        "radioId": "id-dec-14_opB",
        "identifier": "id-dec-14_opB",
        "subSteps": [],
        checked: false,
      }
    ]
  },
  {
    "replacement": "",
    "identifier": "id-dec-15",
    "wordToReplace": "id-dec-15",
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
        "radioId": "id-dec-15_opA",
        "identifier": "id-dec-15_opA",
        "subSteps": [],
        "extraReplacements": [],
        checked: true,
      },
      {
        "label": "1 año",
        "replacement": "Los Administradores ejercerán su cargo por un plazo máximo de 1 año. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "replacementOriginal": "Los Administradores ejercerán su cargo por un plazo máximo de 1 año. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "radioId": "id-dec-15_opB",
        "identifier": "id-dec-15_opB",
        "subSteps": [],
        "extraReplacements": [],
        checked: false,
      },
      {
        "label": "2 años",
        "replacement": "Los Administradores ejercerán su cargo por un plazo máximo de 2 años. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "replacementOriginal": "Los Administradores ejercerán su cargo por un plazo máximo de 2 años. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "radioId": "id-dec-15_opC",
        "identifier": "id-dec-15_opC",
        "subSteps": [],
        "extraReplacements": [],
        checked: false,
      },
      {
        "label": "5 años",
        "replacement": "Los Administradores ejercerán su cargo por un plazo máximo de 5 años. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "replacementOriginal": "Los Administradores ejercerán su cargo por un plazo máximo de 5 años. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "radioId": "id-dec-15_opD",
        "identifier": "id-dec-15_opD",
        "subSteps": [],
        "extraReplacements": [],
        checked: false,
      },
      {
        "label": "Otro plazo",
        "replacement": "Los Administradores ejercerán su cargo por plazo de id-dec-15_opE_0. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "replacementOriginal": "Los Administradores ejercerán su cargo por plazo de id-dec-15_opE_0. Vencido el plazo, el nombramiento caducará cuando se haya celebrado la siguiente Junta General, o bien, cuando haya transcurrido el término legal para la celebración de la Junta en la que se aprueben las cuentas del ejercicio anterior.",
        "radioId": "id-dec-15_opE",
        "identifier": "id-dec-15_opE",
        checked: false,
        "subSteps": [
          {
            "replacement": "",
            "identifier": "id-dec-15_opE_0",
            "wordToReplace": "id-dec-15_opE_0",
            "question": "Indique el plazo de duración del cargo de los administradores de la sociedad",
            "placeholder": "P.ej: 1 año y 6 meses",
            "mandatory": false,
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
                    "question": "Sistema de retribución",
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
    title: 'Estatutos de una Sociedad Limitada',
    description: `Los estatutos de una sociedad son el pacto que contiene los derechos y obligaciones de los socios, y las normas que regulan dicha sociedad. Supone uno de los pasos iniciales para constituir una sociedad y deben estar en la escritura de constitución de la misma.`,
    checkoutProcess: {
      isInited: false,
      phase: 0
    }
  }
];

module.exports = steps;