function wonderCopy() {
    document.getElementById('texte_a_afficher').style.userSelect = 'auto';
    document.getElementById('texte_a_afficher').style.webkitUserSelect = 'auto';
    $('#texte_a_afficher').unbind("cut copy paste");
    copy(document.getElementById('texte_a_afficher').textContent);
};

function rocketCopy() {
    document.querySelector('.boilerWrapper').style.userSelect = 'auto';
    copy(document.querySelector('#boiler').textContent);
}

const evt = document.createEvent("HTMLEvents");
evt.initEvent("change", false, true);
let radios;
let inputs;
let select;

let steps = [];

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

function inputSelect(value) {
    select = document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > app-i-select > div > div > div > div > div.form-creator__fields-area__field__middle > div > select");
    inputs = select.children;
    select.value = inputs[value - 1].value;
    select.dispatchEvent(evt);
}

function nextStep() {
    document.querySelector("#fields-area > div > div.form-creator__fields-area__bottom > div > div:nth-child(3) > span.form-creator__fields-area__bottom__arrow-button__label").click();
}

let startAndFillForm = new Promise((resolve, reject) => {
    // START
    document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > div > div > button").click();
    const latency = 300;
    setTimeout(() => {
        document.querySelector("#modal-button").click();
        steps.forEach((step, i) => {
            if (step.type === 'text') {
                setTimeout(() => {
                    fillInputText(step.value);
                    nextStep();
                    if (step.finished) {
                        resolve(true);
                    }
                }, i * latency);
            }
            if (step.type === 'textarea') {
                setTimeout(() => {
                    fillInputTextarea(step.value);
                    nextStep();
                    if (step.finished) {
                        resolve(true);
                    }
                }, i * latency);
            }
            if (step.type === 'date') {
                setTimeout(() => {
                    fillInputDate(step.value);
                    nextStep();
                    if (step.finished) {
                        resolve(true);
                    }
                }, i * latency);
            }
            if (step.type === 'number') {
                setTimeout(() => {
                    fillInputNumber(step.value);
                    nextStep();
                    if (step.finished) {
                        resolve(true);
                    }
                }, i * latency);
            }
            if (step.type === 'range') {
                setTimeout(() => {
                    onRangeSelected(step.value);
                    nextStep();
                    if (step.finished) {
                        resolve(true);
                    }
                }, i * latency);
            }
            if (step.type === 'radioB') {
                setTimeout(() => {
                    selectRadioB(step.value);
                    nextStep();
                    if (step.finished) {
                        resolve(true);
                    }
                }, i * latency);
            }
            if (step.type === 'radioC') {
                setTimeout(() => {
                    selectRadioC(step.value);
                    nextStep();
                    if (step.finished) {
                        resolve(true);
                    }
                }, i * latency);
            }
            if (step.type === 'select') {
                setTimeout(() => {
                    inputSelect(step.value);
                    nextStep();
                    if (step.finished) {
                        resolve(true);
                    }
                }, i * latency);
            }
        });

    }, 400);
});

function checkIfOutputIsTheExpected() {
    if (document.getElementsByTagName('office:body')[0].textContent === outputExpected) {
        console.log('%c%s',
            'color: green; background: yellow; font-size: 24px;', 'EL TEXTO ES EL ESPERADO!')
    } else {
        console.log('%c%s',
            'color: white; background: red; font-size: 24px;', 'EL TEXTO NO ES EL ESPERADO! :(');
    }
}


function checkout() {
    // Checkout
    document.querySelector("#fields-area > div > div.form-creator__fields-area__middle > div > div > div > div > div > button").click();
    document.querySelector("#form-creator > app-form > div.modal.show-modal > app-checkout > div.modal__content__modal-bottom.modal__content__modal-bottom--privacy.checkout-panel__footer > button.btn.next-btn").click();
    document.querySelector("#name").value = 'juancamejo93@gmail.com';
    document.querySelector("#name").dispatchEvent(new Event('input'));
    if (!document.querySelector("#conditions").getAttribute('ng-reflect-model') || document.querySelector("#conditions").getAttribute('ng-reflect-model') == "false") {
        document.querySelector("#modal-middle-privacy > div > div > div > div > label").click();
    }
    document.querySelector("#form-creator > app-form > div.modal.show-modal > app-checkout > div.modal__content__modal-bottom.modal__content__modal-bottom--privacy.checkout-panel__footer > button.btn.next-btn").click();
}

startAndFillForm.then(() => {
    checkIfOutputIsTheExpected();
    checkout();
});