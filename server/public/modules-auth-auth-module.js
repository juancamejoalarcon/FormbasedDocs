(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "./src/app/modules/auth/auth-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/modules/auth/auth.component.ts");
/* harmony import */ var _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recover-password/recover-password.component */ "./src/app/modules/auth/recover-password/recover-password.component.ts");
/* harmony import */ var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./no-auth-guard.service */ "./src/app/modules/auth/no-auth-guard.service.ts");






var routes = [
    {
        path: 'login',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["NoAuthGuard"]]
    },
    {
        path: 'signup',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["NoAuthGuard"]]
    },
    {
        path: 'recover-password',
        component: _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_4__["RecoverPasswordComponent"],
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["NoAuthGuard"]]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.component.html":
/*!**************************************************!*\
  !*** ./src/app/modules/auth/auth.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in-search-button sign-in-search-button--return\" >\n    <a [routerLink]=\"['/search']\" *ngIf=\"!this.queryParams['formPath']\">\n        <span class=\"icon icon-search\"></span>\n    </a>\n    <a [routerLink]=\"[('/certified-forms/'+ this.queryParams['formPath'])]\" *ngIf=\"this.queryParams['formPath']\"\n    class=\"sign-in-search-button__return-to-form\">\n        <span class=\"icon icon-arrow-left-solid \"></span>\n        <span>Return to form</span>\n    </a>\n</div>\n<div class=\"sign-in\">\n    <div class=\"sign-in__container\">\n        <img src=\"/assets/images/logo.png\" alt=\"login image\" class=\"sign-in__container__top-image\">\n        <h1 class=\"sign-in__container__title\">{{ title }}</h1>\n        <a [routerLink]=\"['../login']\" *ngIf=\"authType == 'signup'\" class=\"sign-in__container__need-account\">I already have an account</a>\n        <a [routerLink]=\"['../signup']\" *ngIf=\"authType == 'login'\" class=\"sign-in__container__need-account\">Do you need an account?</a>\n        <app-list-errors [errors]=\"errors\"></app-list-errors>\n        <form class=\"sign-in__container__form\" [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n            <fieldset [disabled]=\"isSubmitting\">\n\n                <div class=\"sign-in__container__form__form-group\" *ngIf=\"authType == 'login'\">\n                    <label for=\"name\"></label>\n                    <input type=\"text\" name=\"name\" id=\"name\" formControlName=\"email\" placeholder=\"USERNAME or EMAIL\">\n                </div>\n\n                <div class=\"sign-in__container__form__form-group--signup\" *ngIf=\"authType == 'signup'\">\n                    <label for=\"name\"></label>\n                    <input type=\"text\" name=\"name\" id=\"name\" formControlName=\"username\" placeholder=\"USERNAME\">\n                </div>\n\n                <div class=\"sign-in__container__form__form-group--signup\" *ngIf=\"authType == 'signup'\">\n                    <label for=\"email\"></label>\n                    <input type=\"email\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"EMAIL\">\n                </div>\n\n                <div [ngClass]=\"{'sign-in__container__form__form-group': authType === 'login', 'sign-in__container__form__form-group--signup': authType === 'signup'}\">\n                    <label for=\"password\"></label>\n                    <input type=\"password\" name=\"password\" id=\"password\" formControlName=\"password\" placeholder=\"PASSWORD\">\n                </div>\n\n                <div class=\"sign-in__container__form__form-group--signup\" *ngIf=\"authType == 'signup'\">\n                    <label for=\"repeat-password\"></label>\n                    <input type=\"password\" name=\"repeat-password\" id=\"repeat-password\" formControlName=\"repeatPassword\" placeholder=\"REPEAT PASSWORD\">\n                </div>\n\n                <div class=\"sign-in__container__form__checkbox--signup\" *ngIf=\"authType == 'signup'\">\n                    <small class=\"privacy-error\" #privacyError *ngIf=\"authType == 'signup'\">Debe leer y aceptar la política de privacidad</small>\n                    <label for=\"privacy-checkbox\" id=\"privacy-label\" (click)=\"remindUserToReadPrivacyPolicy($event)\">\n                        <input type=\"checkbox\" class=\"filled-in\" name=\"privacy\" id=\"privacy-checkbox\" value=\"privacy\" disabled #privacyCheckbox/>\n                        <span id=\"privacy-span\">He leído y acepto el aviso legal y la <a class=\"trigger\" (click)=\"toogleModal(modal)\">política de privacidad</a></span>\n                    </label>\n                </div>\n                <div class=\"sign-in__container__form__checkbox--signup\" *ngIf=\"authType == 'signup'\">\n                    <label for=\"notifications\">\n                        <input type=\"checkbox\" class=\"filled-in\" name=\"notifications\" id=\"notifications\" formControlName=\"notifications\" value=\"Notifications\" checked />\n                        <span>Desea que le enviemos notificaciones a su correo</span>\n                    </label>\n                </div>\n                <div [ngClass]=\"{'sign-in__container__form__checkbox': authType === 'login', 'sign-in__container__form__checkbox--signup': authType === 'signup'}\">\n                    <label for=\"rememberme\">\n                        <input type=\"checkbox\" class=\"filled-in\" name=\"rememberme\" id=\"rememberme\" formControlName=\"rememberme\" value=\"Remember me\" checked />\n                        <span>Remember me</span>\n                    </label>\n                </div>\n\n                <input type=\"submit\" value=\"{{ title }}\" (click)=\"checkIfPrivacyChecked($event)\">\n            </fieldset>\n            <a [routerLink]=\"['../recover-password']\" class=\"sign-in__container__need-account\">I forgot my password</a>\n        </form>\n    </div>\n</div>\n\n<div class=\"modal\" #modal>\n    <div class=\"modal__content modal__content--privacy\">\n        <div class=\"modal__content__top modal__content__top--privacy\">\n            <h2>Políticas de privacidad</h2>\n        </div>\n        <div class=\"modal__content__modal-middle modal__content__modal-middle--privacy\" #modalMiddle>\n            <div class=\"modal__content__modal-middle__container\">\n                <p>Juan Camejo Alarcón te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio Web www.formbaseddocs.com.\n                        En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 15⁄1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (LOPD), y al Real Decreto 1720⁄2007, de 21 de diciembre, conocido como el Reglamento de desarrollo de la LOPD. Cumple también con el Reglamento (UE) 2016⁄679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).\n                        El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.                    \n                </p>\n                <h3>Identidad del responsable</h3>\n                    <ul>         \n                        <li>Titular: Juan Camejo Alarcón</li>\n                        <li>NIF/CIF: 54113125J</li>\n                        <li>Correo electrónico: juancamejo93@gmail.com</li>\n                        <li>Sitio Web: juancamejoalarcon.com</li>\n                    </ul>\n                <h3>Principios aplicados en el tratamiento de datos</h3>\n                <p>En el tratamiento de tus datos personales, el Titular aplicará los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protección de datos:</p>\n                <ul>\n                    <li>Principio de licitud, lealtad y transparencia: El Titular siempre requerirá el consentimiento para el tratamiento de tus datos personales que puede ser para uno o varios fines específicos sobre los que te informará previamente con absoluta transparencia.</li>\n                    <li>Principio de minimización de datos: El Titular te solicitará solo los datos estrictamente necesarios para el fin o los fines que los solicita.</li>\n                    <li>Principio de minimización de datos: El Titular te solicitará solo los datos estrictamente necesarios para el fin o los fines que los solicita.</li>\n                    <li>Principio de limitación del plazo de conservación: Los datos se mantendrán durante el tiempo estrictamente necesario para el fin o los fines del tratamiento. El Titular te informará del plazo de conservación correspondiente según la finalidad. En el caso de suscripciones, el Titular revisará periódicamente las listas y eliminará aquellos registros inactivos durante un tiempo considerable.</li>\n                    <li>Principio de integridad y confidencialidad: Tus datos serán tratados de tal manera que su seguridad, confidencialidad e integridad esté garantizada. Debes saber que el Titular toma las precauciones necesarias para evitar el acceso no autorizado o uso indebido de los datos de sus usuarios por parte de terceros.</li>\n                </ul>\n                <h3>Obtención de datos personales</h3>\n                <p>Para navegar por formbaseddocs no es necesario que facilites ningún dato personal. Los casos en los que sí proporcionas tus datos personales son los de creación de una cuenta, y su modificación.</p>\n                <h3>Tus derechos</h3>\n                <p>El Titular te informa que sobre tus datos personales tienes derecho a:</p>\n                <ul>\n                    <li>Solicitar el acceso a los datos almacenados.</li>\n                    <li>Solicitar una rectificación o la cancelación.</li>\n                    <li>Solicitar la limitación de su tratamiento.</li>\n                    <li>Oponerte al tratamiento.</li>\n                    <li>Solicitar la portabilidad de tus datos.</li>\n                </ul>\n                <p>El ejercicio de estos derechos es personal y por tanto debe ser ejercido directamente por el interesado, solicitándolo directamente al Titular, lo que significa que cualquier cliente, suscriptor o colaborador que haya facilitado sus datos en algún momento puede dirigirse al Titular y pedir información sobre los datos que tiene almacenados y cómo los ha obtenido, solicitar la rectificación de los mismos, solicitar la portabilidad de sus datos personales, oponerse al tratamiento, limitar su uso o solicitar la cancelación de esos datos en los ficheros del Titular.\n                        Para ejercitar tus derechos de acceso, rectificación, cancelación, portabilidad y oposición tienes que enviar un correo electrónico a juancamejo93@gmail.com junto con la prueba válida en derecho como una fotocopia del D.N.I. o equivalente.\n                        Tienes derecho a la tutela judicial efectiva y a presentar una reclamación ante la autoridad de control, en este caso, la Agencia Española de Protección de Datos, si consideras que el tratamiento de datos personales que te conciernen infringe el Reglamento.\n                </p>\n                <h3>Finalidad del tratamiento de datos personales</h3>\n                <p>Cuando te conectas al sitio Web para mandar un correo al Titular, creas una cuenta o realizas una contratación, estás facilitando información de carácter personal de la que el responsable es el Titular. Esta información puede incluir datos de carácter personal como pueden ser tu dirección IP, nombre y apellidos, dirección física, dirección de correo electrónico, número de teléfono, y otra información. Al facilitar esta información, das tu consentimiento para que tu información sea recopilada, utilizada, gestionada y almacenada por superadmin.es , sólo como se describe en el Aviso Legal y en la presente Política de Privacidad.\n                        Los datos personales y la finalidad del tratamiento por parte del Titular es diferente según el sistema de captura de información:\n                        Existen otras finalidades por las que el Titular trata tus datos personales:</p>\n                <ul>\n                    <li>Para garantizar el cumplimiento de las condiciones recogidas en el Aviso Legal y en la ley aplicable. Esto puede incluir el desarrollo de herramientas y algoritmos que ayuden a este sitio Web a garantizar la confidencialidad de los datos personales que recoge.</li>\n                    <li>Para apoyar y mejorar los servicios que ofrece este sitio Web.</li>\n                    <li>Para analizar la navegación. El Titular recoge otros datos no identificativos que se obtienen mediante el uso de cookies que se descargan en tu ordenador cuando navegas por el sitio Web cuyas caracterísiticas y finalidad están detalladas en la Política de Cookies .</li>\n                    <li>Para gestionar las redes sociales. el Titular tiene presencia en redes sociales. Si te haces seguidor en las redes sociales del Titular el tratamiento de los datos personales se regirá por este apartado, así como por aquellas condiciones de uso, políticas de privacidad y normativas de acceso que pertenezcan a la red social que proceda en cada caso y que has aceptado previamente.</li>\n                </ul>\n                <p>El Titular tratará tus datos personales con la finalidad de administrar correctamente su presencia en la red social, informarte de sus actividades, productos o servicios, así como para cualquier otra finalidad que las normativas de las redes sociales permitan.\n                        En ningún caso el Titular utilizará los perfiles de seguidores en redes sociales para enviar publicidad de manera individual.\n                </p>\n                <h3>Seguridad de los datos personales</h3>\n                <p>Para proteger tus datos personales, el Titular toma todas las precauciones razonables y sigue las mejores prácticas de la industria para evitar su pérdida, mal uso, acceso indebido, divulgación, alteración o destrucción de los mismos.\n                        El sitio Web está alojado en PROVEEDOR DE ALOJAMIENTO WEB. La seguridad de tus datos está garantizada, ya que toman todas las medidas de seguridad necesarias para ello. Puedes consultar su política de privacidad para tener más información.\n                </p>\n                <h3>Contenido de otros sitios web</h3>\n                <p>Las páginas de este sitio Web pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si hubieras visitado la otra web.\n                        Estos sitios Web pueden recopilar datos sobre ti, utilizar cookies, incrustar un código de seguimiento adicional de terceros, y supervisar tu interacción usando este código.\n                </p>\n                <h3>Política de Cookies</h3>\n                <p>Para que este sitio Web funcione correctamente necesita utilizar cookies, que es una información que se almacena en tu navegador web.\n                        En la página Política de Cookies puedes consultar toda la información relativa a la política de recogida, la finalidad y el tratamiento de las cookies.\n                </p>\n                <h3>Legitimación para el tratamiento de datos</h3>\n                <p>La base legal para el tratamiento de tus datos es: el consentimiento.\n                        Para contactar con el Titular, suscribirte a un boletín o realizar comentarios en este sitio Web tienes que aceptar la presente Política de Privacidad.\n                </p>\n                <h3>Categorías de datos personales</h3>\n                <p>Las categorías de datos personales que trata el Titular son:</p>\n                <ul>\n                    <li>Datos identificativos.</li>\n                </ul>\n                <h3>Conservación de datos personales</h3>\n                <p>Los datos personales que proporciones al Titular se conservarán hasta que solicites su supresión.</p>\n                <h3>Navegación Web</h3>\n                <p>Al navegar por www.formbaseddocs.com se pueden recoger datos no identificativos, que pueden incluir, la dirección IP, geolocalización, un registro de cómo se utilizan los servicios y sitios, hábitos de navegación y otros datos que no pueden ser utilizados para identificarte.\n                        El sitio Web utiliza los siguientes servicios de análisis de terceros:\n                        El Titular utiliza la información obtenida para obtener datos estadísticos, analizar tendencias, administrar el sitio, estudiar patrones de navegación y para recopilar información demográfica.\n                </p>\n                <h3>Exactitud y veracidad de los datos personales</h3>\n                <p>Te comprometes a que los datos facilitados al Titular sean correctos, completos, exactos y vigentes, así como a mantenerlos debidamente actualizados.\n                        Como Usuario del sitio Web eres el único responsable de la veracidad y corrección de los datos que remitas al sitio exonerando a el Titular de cualquier responsabilidad al respecto.\n                </p>\n                <h3>Aceptación y consentimiento</h3>\n                <p>Como Usuario del sitio Web declaras haber sido informado de las condiciones sobre protección de datos de carácter personal, aceptas y consientes el tratamiento de los mismos por parte de el Titular en la forma y para las finalidades indicadas en esta Política de Privacidad.</p>\n                <h3>Revocabilidad</h3>\n                <p>Para ejercitar tus derechos de acceso, rectificación, cancelación, portabilidad y oposición tienes que enviar un correo electrónico a juancamejo93@gmail.com junto con la prueba válida en derecho como una fotocopia del D.N.I. o equivalente.\n                        El ejercicio de tus derechos no incluye ningún dato que el Titular esté obligado a conservar con fines administrativos, legales o de seguridad.\n                </p>\n                <h3>Cambios en la Política de Privacidad</h3>\n                <p>El Titular se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria.\n                        Estas políticas estarán vigentes hasta que sean modificadas por otras debidamente publicadas.\n                </p>\n            </div>\n        </div>\n        <div class=\"modal__content__modal-bottom modal__content__modal-bottom--privacy\">\n            <button class=\"button-filled button-filled__disabled\" id=\"modal-button\" (click)=\"closeModalAndEnableCheckbox()\" #closeModalButton>Entendido</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/auth/auth.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/auth/auth.component.ts ***!
  \************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");





var AuthComponent = /** @class */ (function () {
    function AuthComponent(route, router, userService, commonsService, fb) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.commonsService = commonsService;
        this.fb = fb;
        this.authType = '';
        this.title = '';
        this.errors = { errors: {} };
        this.isSubmitting = false;
        this.queryParams = {};
        // use FormBuilder to create a form group
        this.form = this.fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'rememberme': [true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (data) {
            // Get the last piece of the URL (it's either 'login' or 'signup')
            _this.authType = data[data.length - 1].path;
            // Set a title for the page accordingly
            _this.title = (_this.authType === 'login') ? 'Sign in' : 'Sign up';
            // add form control for username if this is the signup page
            if (_this.authType === 'signup') {
                _this.form.addControl('username', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
                _this.form.addControl('repeatPassword', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
                _this.form.addControl('notifications', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
            }
        });
        this.route.queryParams.subscribe(function (params) {
            if (!_this.commonsService.isObjectEmpty(params)) {
                _this.queryParams = params;
            }
        });
        this.checkIfUserHasScrolledToBottom();
    };
    AuthComponent.prototype.toogleModal = function (modal) {
        this.commonsService.toggleModal(modal, true);
    };
    AuthComponent.prototype.checkIfUserHasScrolledToBottom = function () {
        var _this = this;
        this.modalMiddle.nativeElement.addEventListener('scroll', function (e) {
            if (e.srcElement.scrollHeight - e.srcElement.scrollTop === e.srcElement.clientHeight) {
                _this.enablePrivacyButton();
                _this.privacyCheckbox.nativeElement.disabled = false;
            }
        });
    };
    AuthComponent.prototype.enablePrivacyButton = function () {
        this.closeModalButton.nativeElement.classList.remove('button-filled__disabled');
    };
    AuthComponent.prototype.checkIfPrivacyChecked = function (e) {
        if (this.authType === 'signup') {
            e.preventDefault();
            if (!this.privacyCheckbox.nativeElement.checked) {
                this.privacyError.nativeElement.style.display = 'block';
            }
            else {
                this.privacyError.nativeElement.style.display = 'none';
                this.submitForm();
            }
        }
    };
    AuthComponent.prototype.closeModalAndEnableCheckbox = function () {
        if (this.closeModalButton.nativeElement.classList.contains('button-filled__disabled')) {
            alert('Debes leer todas las condiciones');
        }
        else {
            this.toogleModal(this.modal.nativeElement);
        }
    };
    AuthComponent.prototype.remindUserToReadPrivacyPolicy = function (e) {
        e.preventDefault();
        if (e.target.nodeName !== 'A') {
            if (this.privacyCheckbox.nativeElement.disabled === true) {
                alert('Debes leer todas las condiciones');
            }
            else {
                this.privacyCheckbox.nativeElement.checked = !this.privacyCheckbox.nativeElement.checked;
            }
        }
        // When the screen is too big, the modal does not have any scroll, because it fits the screen
        // so we need to double check
        if (this.modalMiddle.nativeElement.scrollHeight === this.modalMiddle.nativeElement.clientHeight) {
            this.enablePrivacyButton();
            this.privacyCheckbox.nativeElement.disabled = false;
        }
    };
    AuthComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        this.errors = { errors: {} };
        var credentials = this.form.value;
        this.userService
            .attemptAuth(this.authType, credentials, this.form.value.rememberme)
            .subscribe(function (data) {
            if (_this.queryParams['formPath']) {
                _this.router.navigateByUrl("/certified-forms/" + _this.queryParams['formPath']);
            }
            else {
                _this.router.navigateByUrl('/');
            }
        }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AuthComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalMiddle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AuthComponent.prototype, "modalMiddle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeModalButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AuthComponent.prototype, "closeModalButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('privacyCheckbox'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AuthComponent.prototype, "privacyCheckbox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('privacyError'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AuthComponent.prototype, "privacyError", void 0);
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-page',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/modules/auth/auth.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _core__WEBPACK_IMPORTED_MODULE_4__["CommonsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/modules/auth/auth.component.ts");
/* harmony import */ var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-auth-guard.service */ "./src/app/modules/auth/no-auth-guard.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/auth/auth-routing.module.ts");
/* harmony import */ var _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recover-password/recover-password.component */ "./src/app/modules/auth/recover-password/recover-password.component.ts");







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"]
            ],
            declarations: [
                _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
                _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_6__["RecoverPasswordComponent"]
            ],
            providers: [
                _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["NoAuthGuard"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/no-auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/no-auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return NoAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var NoAuthGuard = /** @class */ (function () {
    function NoAuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    NoAuthGuard.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (isAuth) { return !isAuth; }));
    };
    NoAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], NoAuthGuard);
    return NoAuthGuard;
}());



/***/ }),

/***/ "./src/app/modules/auth/recover-password/recover-password.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/auth/recover-password/recover-password.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"recover\">\n  <div class=\"recover__container\">\n      <h1 class=\"recover__container__title\" #title *ngIf=\"!isResetPassword\">Type in your e-mail</h1>\n      <h1 class=\"recover__container__title\" *ngIf=\"isResetPassword\">Type in your new password</h1>\n      <label for=\"email\"></label>\n      <input type=\"email\" name=\"email\" id=\"name\" placeholder=\"E-MAIL\" [(ngModel)]=\"email\" #emailInput *ngIf=\"!isResetPassword\">\n      <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"PASSWORD\" [(ngModel)]=\"password\" #passwordInput *ngIf=\"isResetPassword\">\n      <br *ngIf=\"isResetPassword\">\n      <input type=\"password\" name=\"repeatPassword\" id=\"repeatPassword\" placeholder=\"REPEAT PASSWORD\" [(ngModel)]=\"repeatPassword\" #repeatPasswordInput *ngIf=\"isResetPassword\">\n      <span class=\"secondary-color d-none\" #invalidError>Invalid email</span>\n      <input type=\"submit\" value=\"Send link\" #sendLinkButton (click)=\"sendEmail()\" *ngIf=\"!isResetPassword\">\n      <input type=\"submit\" value=\"Reset\" (click)=\"resetPassword()\" *ngIf=\"isResetPassword\">\n      <label class=\"recover__container__message d-none\" #confirmationMessage *ngIf=\"!isResetPassword\">Check your e-mail. You will receive an e-mail with instructions to reset your password</label>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/auth/recover-password/recover-password.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/auth/recover-password/recover-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RecoverPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverPasswordComponent", function() { return RecoverPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");




var RecoverPasswordComponent = /** @class */ (function () {
    function RecoverPasswordComponent(commonsService, userService, route, router) {
        this.commonsService = commonsService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.isResetPassword = false;
    }
    RecoverPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params.token) {
                _this.token = params.token;
                _this.isResetPassword = true;
            }
            else {
                _this.isResetPassword = false;
            }
        });
    };
    RecoverPasswordComponent.prototype.sendEmail = function () {
        var _this = this;
        if (this.commonsService.validateEmail(this.email)) {
            this.userService.forgotPassword(this.email).subscribe(function (data) {
                if (data.emailSent) {
                    _this.commonsService.toastMessage('success', 'Check your email for further instructions', 'Email sent');
                    _this.emailInput.nativeElement.style.borderBottom = '3px solid #556270';
                    _this.invalidError.nativeElement.classList.add('d-none');
                    _this.confirmationMessage.nativeElement.classList.remove('d-none');
                    _this.title.nativeElement.classList.add('d-none');
                    _this.emailInput.nativeElement.classList.add('d-none');
                    _this.sendLinkButton.nativeElement.classList.add('d-none');
                }
                else if (data.emailNotFound) {
                    _this.commonsService.toastMessage('error', 'Account with this email could not be found', 'Email not found');
                    _this.emailInput.nativeElement.style.borderBottom = '3px solid #C44D58';
                    _this.invalidError.nativeElement.classList.remove('d-none');
                }
            });
        }
        else {
            this.emailInput.nativeElement.style.borderBottom = '3px solid #C44D58';
            this.invalidError.nativeElement.classList.remove('d-none');
            this.commonsService.toastMessage('error', 'Validation error', 'Invalid email');
        }
    };
    RecoverPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        if (this.validatePassword()) {
            this.userService.resetPassword(this.token, this.password, this.repeatPassword)
                .subscribe(function (data) {
                console.log(data);
                if (data.passwordRestored) {
                    _this.commonsService.toastMessage('success', 'Try to log in', 'Password restored');
                    _this.router.navigate(['/auth/login']);
                }
                else if (data.noToken) {
                    _this.router.navigate(['/auth/recover-password']);
                    _this.commonsService.toastMessage('error', 'Token expired or does not exist', 'Token error');
                }
                else {
                    _this.commonsService.toastMessage('error', 'Error', 'Something went wrong');
                }
            });
        }
    };
    RecoverPasswordComponent.prototype.validatePassword = function () {
        if (!this.password || this.password === '') {
            this.commonsService.toastMessage('error', 'Password is empty', 'Empty field');
            this.passwordInput.nativeElement.style.borderBottom = '3px solid #C44D58';
            return false;
        }
        else if (!this.repeatPassword || this.repeatPassword === '') {
            this.commonsService.toastMessage('error', 'Repeat password is empty', 'Empty field');
            this.repeatPasswordInput.nativeElement.style.borderBottom = '3px solid #C44D58';
            return false;
        }
        else if (this.password !== this.repeatPassword) {
            this.passwordInput.nativeElement.style.borderBottom = '3px solid #C44D58';
            this.repeatPasswordInput.nativeElement.style.borderBottom = '3px solid #C44D58';
            this.commonsService.toastMessage('error', '', 'Fields do not match');
            return false;
        }
        this.passwordInput.nativeElement.style.borderBottom = '3px solid #556270';
        this.repeatPasswordInput.nativeElement.style.borderBottom = '3px solid #556270';
        return true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('emailInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RecoverPasswordComponent.prototype, "emailInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('invalidError'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RecoverPasswordComponent.prototype, "invalidError", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('passwordInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RecoverPasswordComponent.prototype, "passwordInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('repeatPasswordInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RecoverPasswordComponent.prototype, "repeatPasswordInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmationMessage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RecoverPasswordComponent.prototype, "confirmationMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('title'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RecoverPasswordComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sendLinkButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RecoverPasswordComponent.prototype, "sendLinkButton", void 0);
    RecoverPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recover-password',
            template: __webpack_require__(/*! ./recover-password.component.html */ "./src/app/modules/auth/recover-password/recover-password.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["CommonsService"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RecoverPasswordComponent);
    return RecoverPasswordComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map