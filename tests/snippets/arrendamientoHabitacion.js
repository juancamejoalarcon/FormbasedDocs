const evt = document.createEvent("HTMLEvents");
evt.initEvent("change", false, true);
let radios;

function fillInputText(value) {
    document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-text > div > div > div > div > div.form-creator__fields-area__field__middle > input[type=text]").value = value;
    document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-text > div > div > div > div > div.form-creator__fields-area__field__middle > input[type=text]").click();
}

function fillInputTextarea(value) {
    document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-text > div > div > div > div > div.form-creator__fields-area__field__middle > textarea").value = value;
    document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-text > div > div > div > div > div.form-creator__fields-area__field__middle > textarea").click();
}

function fillInputNumber(value) {
    document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-number > div > div > div > div > div.form-creator__fields-area__field__middle > input[type=text]").value = value;
    document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-number > div > div > div > div > div.form-creator__fields-area__field__middle > input[type=text]").click();
}

function fillInputDate(value) {
    document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-date > div > div > div > div > div.form-creator__fields-area__field__middle > div > input[type=date]").value = value;
    document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-date > div > div > div > div > div.form-creator__fields-area__field__middle > div > input[type=date]").dispatchEvent(evt);
}

function onRangeSelected(value) {
    document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-for-each > div > div > div > div > div.form-creator__fields-area__field__middle > div > input").value = value;
    document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-for-each > div > div > div > div > div.form-creator__fields-area__field__middle > div > input").dispatchEvent(evt);
}

function selectRadioB(value) {
    radios = document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-radio-b > div > div > div > div > div.form-creator__fields-area__field__middle > div").children;
    radios[value - 1].firstElementChild.click();
}

function selectRadioC(value) {
    radios = document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-radio-c > div > div > div > div > div.form-creator__fields-area__field__middle > div").children;
    radios[value - 1].firstElementChild.click();
}

function nextStep() {
    document.querySelector("#fields-area > div > div.form-creator__fields-area__bottom > div > div:nth-child(3) > span.form-creator__fields-area__bottom__arrow-button__label").click();
}
let steps = [
    {
        type: 'text',
        value: 'Madrid'
    },
    {
        type: 'date',
        value: '2020-02-12'
    },
    {
        type: 'range',
        value: '4'
    },
    {
        type: 'radioC',
        value: '2'
    },
    {
        type: 'text',
        value: 'Banco Santander, S.A'
    },
    {
        type: 'text',
        value: 'Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
        pregunta: 'Domicilio social completo de la persona jurídica...'
    },
    {
        type: 'text',
        value: 'B29805314',
        pregunta: 'NIF (Número de Identificación Fiscal)...'
    },
    {
        type: 'text',
        value: 'Registro Mercantil de Madrid',
        pregunta: 'Tipo de registro y lugar donde ...'
    },
    {
        type: 'text',
        value: 'Tomo 123, folio 10, hoja SE-1234',
        pregunta: 'Datos registrales de la perso ...'
    },
    {
        type: 'range',
        value: '2'
    },
    {
        type: 'text',
        value: 'Sara Houston Buesa',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Camino Lorem ipsum dolor, 93A 10ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '54113125J',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'representante legal',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Juan Camejo Alarcón',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Urbanización Lorem ipsum dolor sit, 138 6ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '3',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '71928721Q',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'apoderado',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'radioC',
        value: '2'
    },
    {
        type: 'text',
        value: 'Indra Sistemas, S.A'
    },
    {
        type: 'text',
        value: 'C. Comercial Lorem ipsum dolor, 3B 11ºA',
        pregunta: 'Domicilio social completo de la persona jurídica...'
    },
    {
        type: 'text',
        value: 'A18313189',
        pregunta: 'NIF (Número de Identificación Fiscal)...'
    },
    {
        type: 'text',
        value: 'Registro Mercantil de Albacete',
        pregunta: 'Tipo de registro y lugar donde ...'
    },
    {
        type: 'text',
        value: 'Tomo 100, folio 20, hoja SE-999',
        pregunta: 'Datos registrales de la perso ...'
    },
    {
        type: 'range',
        value: '2'
    },
    {
        type: 'text',
        value: 'Antonio Banderas',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Alameda Lorem, 56B',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '93066379F',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'representante legal',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Brad Pitt',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Camino Lorem ipsum dolor, 93A 10ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '3',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: 'Y1841513D',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'apoderado total',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora 3...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora (propietaria) para realizar el contrato, actú...'
    },
    {
        type: 'text',
        value: 'Alberto Sabina Fajardo',
        pregunta: 'Nombre completo del arrendador (propietario),...'
    },
    {
        type: 'text',
        value: 'Pasadizo Lorem ipsum dolor sit, 20B 14ºB',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '44418223W',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora 3...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: 'La persona arrendadora (propietaria) para realizar el contrato, actú...'
    },
    {
        type: 'text',
        value: 'Stalin Moreno',
        pregunta: 'Nombre completo del arrendador (propietario),...'
    },
    {
        type: 'text',
        value: 'Vía Lorem ipsum dolor sit, 97A 2ºE',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: 'X2497232F',
        pregunta: 'Introduzca el número que corresponde con el documento ...'
    },
    {
        type: 'text',
        value: 'Jazmín Gamez Sandoval',
        pregunta: 'Nombre completo de la persona que firma este contrato en nombre y ...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '17464671N',
        pregunta: 'Número del documento se...'
    },
    {
        type: 'text',
        value: 'apoderado',
        pregunta: 'Calidad o concepto en el que esta persona firma este contrato en nombre...'
    },
    {
        type: 'text',
        value: 'Cañada Lorem ipsum dolor, 174 8ºD',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'textarea',
        value: 'abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.com',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },

    // Segundo for each
    {
        type: 'range',
        value: '4'
    },
    {
        type: 'radioC',
        value: '2'
    },
    {
        type: 'text',
        value: 'Banco Santander, S.A'
    },
    {
        type: 'text',
        value: 'Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
        pregunta: 'Domicilio social completo de la persona jurídica...'
    },
    {
        type: 'text',
        value: 'B29805314',
        pregunta: 'NIF (Número de Identificación Fiscal)...'
    },
    {
        type: 'text',
        value: 'Registro Mercantil de Madrid',
        pregunta: 'Tipo de registro y lugar donde ...'
    },
    {
        type: 'text',
        value: 'Tomo 123, folio 10, hoja SE-1234',
        pregunta: 'Datos registrales de la perso ...'
    },
    {
        type: 'range',
        value: '2'
    },
    {
        type: 'text',
        value: 'Sara Houston Buesa',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Camino Lorem ipsum dolor, 93A 10ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '54113125J',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'representante legal',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Juan Camejo Alarcón',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Urbanización Lorem ipsum dolor sit, 138 6ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '3',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '71928721Q',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'apoderado',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'radioC',
        value: '2'
    },
    {
        type: 'text',
        value: 'Indra Sistemas, S.A'
    },
    {
        type: 'text',
        value: 'C. Comercial Lorem ipsum dolor, 3B 11ºA',
        pregunta: 'Domicilio social completo de la persona jurídica...'
    },
    {
        type: 'text',
        value: 'A18313189',
        pregunta: 'NIF (Número de Identificación Fiscal)...'
    },
    {
        type: 'text',
        value: 'Registro Mercantil de Albacete',
        pregunta: 'Tipo de registro y lugar donde ...'
    },
    {
        type: 'text',
        value: 'Tomo 100, folio 20, hoja SE-999',
        pregunta: 'Datos registrales de la perso ...'
    },
    {
        type: 'range',
        value: '2'
    },
    {
        type: 'text',
        value: 'Antonio Banderas',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Alameda Lorem, 56B',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '93066379F',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'representante legal',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Brad Pitt',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Camino Lorem ipsum dolor, 93A 10ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '3',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: 'Y1841513D',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'apoderado total',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora 3...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora (propietaria) para realizar el contrato, actú...'
    },
    {
        type: 'text',
        value: 'Alberto Sabina Fajardo',
        pregunta: 'Nombre completo del arrendador (propietario),...'
    },
    {
        type: 'text',
        value: 'Pasadizo Lorem ipsum dolor sit, 20B 14ºB',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '44418223W',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora 3...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: 'La persona arrendadora (propietaria) para realizar el contrato, actú...'
    },
    {
        type: 'text',
        value: 'Stalin Moreno',
        pregunta: 'Nombre completo del arrendador (propietario),...'
    },
    {
        type: 'text',
        value: 'Vía Lorem ipsum dolor sit, 97A 2ºE',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: 'X2497232F',
        pregunta: 'Introduzca el número que corresponde con el documento ...'
    },
    {
        type: 'text',
        value: 'Jazmín Gamez Sandoval',
        pregunta: 'Nombre completo de la persona que firma este contrato en nombre y ...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '17464671N',
        pregunta: 'Número del documento se...'
    },
    {
        type: 'text',
        value: 'apoderado',
        pregunta: 'Calidad o concepto en el que esta persona firma este contrato en nombre...'
    },
    {
        type: 'text',
        value: 'Cañada Lorem ipsum dolor, 174 8ºD',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'textarea',
        value: 'abimorar-1000@yopmail.com mavissuwanne-0839@yopmail.com',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'text',
        value: 'Paseo de las Delicias 12, Escalera 5, 2.º B, 38296, Tenerife, España',
        pregunta: 'Dirección completa de la vivienda...'
    },
    {
        type: 'number',
        value: '200',
        pregunta: 'Superficie útil de la vivienda en metros cuad...'
    },
    {
        type: 'number',
        value: '3',
        pregunta: 'Indique el número de habitaciones que tiene la viv...'
    },
    {
        type: 'textarea',
        value: 'Una cocina, un salón, un garaje y un jardín de 10m2',
        pregunta: 'Haga una descripción detallada de los componentes de la vivienda...'
    },
    {
        type: 'text',
        value: 'Madrid N. 34',
        pregunta: 'Lugar y, en su caso, número del Registro de la prop...'
    },
    {
        type: 'text',
        value: 'Tomo 1 Libro 377 Folio 204 Finca 2',
        pregunta: 'Datos registrales de la vivie...'
    },
    {
        type: 'text',
        value: '9872023 VH5797S 0001 WX',
        pregunta: 'Referencia catastral de la vivie...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: '¿La vivienda forma parte de una Comunid...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: 'Quién asumirá los gastos generales u ordina...'
    },
    {
        type: 'number',
        value: '10',
        pregunta: 'Que porcentaje de estos gastos generales u ordi...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'Estos gastos generales u ordinario...'
    },
    {
        type: 'number',
        value: '20',
        pregunta: 'Importe mensual (en euros) de estos ga...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: '¿Quién asumirá los gastos extraordinarios...'
    },
    {
        type: 'number',
        value: '10',
        pregunta: '¿Qué porcentaje de estos gastos extraordinario...'
    },
    {
        type: 'number',
        value: '25',
        pregunta: 'Superficie útil de la habitación que...'
    },
    {
        type: 'textarea',
        value: 'La habitación que se encuentra enfrente del aseo.',
        pregunta: 'Haga una descripción de la habitación que se va a al...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: '¿La habitación se alquila amueblada de manera que el arrendatario (inquilino) pueda hacer us...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: '¿La habitación se alquila amueblada de manera que el arrendatario (inquilino) pueda hacer us...'
    },
    {
        type: 'textarea',
        value: 'Una cama, una mesa de escritorio, una mesilla de noche y un armario',
        pregunta: 'Descripción detallada de los muebles d...'
    },
    {
        type: 'radioB',
        value: '1'
    },
]

// START
document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > div > div > button").click();
setTimeout( () => { 
    document.querySelector("#modal-button").click();
    steps.forEach((step, i ) => {
           if (step.type === 'text') {
               setTimeout( () => { 
                fillInputText(step.value);
                nextStep();
               }, i * 200);
           }
           if (step.type === 'textarea') {
               setTimeout( () => { 
                fillInputTextarea(step.value);
                nextStep();
               }, i * 200);
           }
           if (step.type === 'date') {
               setTimeout( () => { 
                fillInputDate(step.value);
                nextStep();
               }, i * 200);
           }
           if (step.type === 'number') {
            setTimeout( () => { 
             fillInputNumber(step.value);
             nextStep();
            }, i * 200);
        }
          if (step.type === 'range') {
               setTimeout( () => { 
                onRangeSelected(step.value);
                nextStep();
               }, i * 200);
           }
          if (step.type === 'radioB') {
               setTimeout( () => { 
                selectRadioB(step.value);
                nextStep();
               }, i * 200);
           }
           if (step.type === 'radioC') {
               setTimeout( () => { 
                selectRadioC(step.value);
                nextStep();
               }, i * 200);
           }
    })
}, 400);