const evt = document.createEvent("HTMLEvents");
evt.initEvent("change", false, true);
let radios;

function fillInputText(value) {
    document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-text > div > div > div > div > div.form-creator__fields-area__field__middle > input[type=text]").value = value;
    document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-text > div > div > div > div > div.form-creator__fields-area__field__middle > input[type=text]").click();
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
           if (step.type === 'date') {
               setTimeout( () => { 
                fillInputDate(step.value);
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