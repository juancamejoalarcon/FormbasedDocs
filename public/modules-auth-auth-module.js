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
/* harmony import */ var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./no-auth-guard.service */ "./src/app/modules/auth/no-auth-guard.service.ts");





var routes = [
    {
        path: 'login',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["NoAuthGuard"]]
    },
    {
        path: 'signup',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["NoAuthGuard"]]
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

module.exports = "<div class=\"login-search-button\">\n    <a [routerLink]=\"['/search']\" >\n        <svg version=\"1.1\" width=\"25px\" height=\"25px\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 475.1 475.1\" style=\"enable-background:new 0 0 475.1 475.1;\" xml:space=\"preserve\">\n            <g>\n                <path d=\"M464.5,412.8l-97.9-97.9c23.6-34.1,35.4-72,35.4-113.9c0-27.2-5.3-53.2-15.9-78.1c-10.6-24.8-24.8-46.3-42.8-64.2\n                    s-39.4-32.3-64.2-42.8C254.2,5.3,228.2,0,201,0c-27.2,0-53.2,5.3-78.1,15.8C98.1,26.4,76.7,40.7,58.7,58.7\n                    c-18,18-32.3,39.4-42.8,64.2C5.3,147.8,0,173.8,0,201c0,27.2,5.3,53.2,15.8,78.1c10.6,24.8,24.8,46.2,42.8,64.2\n                    c18,18,39.4,32.3,64.2,42.8c24.8,10.6,50.9,15.8,78.1,15.8c41.9,0,79.9-11.8,113.9-35.4l97.9,97.6c6.9,7.2,15.4,10.8,25.7,10.8\n                    c9.9,0,18.5-3.6,25.7-10.8c7.2-7.2,10.8-15.8,10.8-25.7C475.1,428.5,471.6,419.9,464.5,412.8z M291.4,291.4\n                    c-25,25-55.1,37.5-90.4,37.5c-35.2,0-65.3-12.5-90.4-37.5c-25-25-37.5-55.1-37.5-90.4c0-35.2,12.5-65.3,37.5-90.4\n                    c25-25,55.1-37.5,90.4-37.5c35.2,0,65.3,12.5,90.4,37.5c25,25,37.5,55.1,37.5,90.4C328.9,236.2,316.4,266.3,291.4,291.4z\"/>\n            </g>\n        </svg>\n    </a>\n</div>\n<div id=\"login\">\n    <div class=\"login-container\">\n        <img src=\"/assets/images/logo.png\" alt=\"login image\" class=\"login-top-image\">\n        <h1 class=\"login-title\">{{ title }}</h1>\n        <a [routerLink]=\"['../login']\" *ngIf=\"authType == 'signup'\" class=\"need-account\">I already have an account</a>\n        <a [routerLink]=\"['../signup']\" *ngIf=\"authType == 'login'\" class=\"need-account\">Do you need an account?</a>\n        <app-list-errors [errors]=\"errors\"></app-list-errors>\n          <form class=\"form login-form\" [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n              <fieldset [disabled]=\"isSubmitting\">\n\n                <div class=\"form-group\" *ngIf=\"authType == 'login'\">\n                    <label for=\"name\"></label>\n                    <input type=\"text\" name=\"name\" id=\"name\" formControlName=\"email\" placeholder=\"USERNAME or EMAIL\">\n                </div>\n\n                <div class=\"form-group form-group-signup\" *ngIf=\"authType == 'signup'\">\n                    <label for=\"name\"></label>\n                    <input type=\"text\" name=\"name\" id=\"name\" formControlName=\"username\" placeholder=\"USERNAME\">\n                </div>\n\n                <div class=\"form-group form-group-signup\" *ngIf=\"authType == 'signup'\">\n                    <label for=\"email\"></label>\n                    <input type=\"email\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"EMAIL\">\n                </div>\n\n                <div class=\"form-group\" [ngClass]=\"{'form-group-signup': authType === 'signup'}\">\n                    <label for=\"password\"></label>\n                    <input type=\"password\" name=\"password\" id=\"password\" formControlName=\"password\" placeholder=\"PASSWORD\">\n                </div>\n\n                <div class=\"form-group form-group-signup\" *ngIf=\"authType == 'signup'\">\n                    <label for=\"repeat-password\"></label>\n                    <input type=\"password\" name=\"repeat-password\" id=\"repeat-password\" formControlName=\"repeatPassword\" placeholder=\"REPEAT PASSWORD\">\n                </div>\n\n                <div class=\"form-group checkbox\" *ngIf=\"authType == 'login'\">\n                    <input type=\"checkbox\" name=\"rememberme\" id=\"rememberme\" formControlName=\"rememberme\" value=\"Remember me\" checked>\n                    <label for=\"rememberme\">Remember me</label>\n                </div>\n\n                <div class=\"form-group form-group-signup checkbox-signup\" *ngIf=\"authType == 'signup'\">\n                    <input type=\"checkbox\" name=\"privacy\" id=\"privacy\" value=\"privacy\" #privacy>\n                    <label>\n                        <span>\n                            He leído y acepto el aviso legal y la <a class=\"trigger trigger-privacy\" (click)=\"toogleModal()\">política de privacidad</a>\n                        </span>\n                    </label>\n                </div>\n                <small class=\"privacy-error\" #privacyError>Debe leer y aceptar la política de privacidad</small>\n\n                <div class=\"form-group form-group-signup checkbox-signup\" *ngIf=\"authType == 'signup'\">\n                        <input type=\"checkbox\" name=\"rememberme\" id=\"rememberme\" formControlName=\"rememberme\" value=\"Remember me\" checked>\n                        <label for=\"rememberme\">Remember me</label>\n                </div>\n\n                <input type=\"submit\" value=\"{{ title }}\" (click)=\"checkIfPrivacyChecked($event)\">\n              </fieldset>\n          </form>\n        <div class=\"login-divider\">\n            <div class=\"line\"></div>\n            <span>or</span>\n            <div class=\"line\"></div>\n        </div>\n        <div class=\"login-social\">\n            <ul>\n                <li>\n                    <a href=\"https://www.facebook.com/\">\n\n                        <svg version=\"1.1\" class=\"login-social-icon\" width=\"40px\" height=\"40px\"\n                        focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" \n                        xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 264 512\" \n                        style=\"enable-background:new 0 0 264 512;\" xml:space=\"preserve\">\n                        <path d=\"M215.8,85H264V3.6C255.7,2.5,227.1,0,193.8,0C124.3,0,76.7,42.4,76.7,120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3\n                        v-62.7C170.7,103,178,85,215.8,85L215.8,85z\"/>\n                        </svg>\n\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.twitter.com/\">\n\n                        <svg version=\"1.1\" class=\"login-social-icon\" width=\"48px\" height=\"48px\"\n                                focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                    x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n                            <path d=\"M459.4,151.7c0.3,4.5,0.3,9.1,0.3,13.6c0,138.7-105.6,298.6-298.6,298.6c-59.5,0-114.7-17.2-161.1-47.1\n                                c8.4,1,16.6,1.3,25.3,1.3c49.1,0,94.2-16.6,130.3-44.8c-46.1-1-84.8-31.2-98.1-72.8c6.5,1,13,1.6,19.8,1.6c9.4,0,18.8-1.3,27.6-3.6\n                                c-48.1-9.7-84.1-52-84.1-103v-1.3c14,7.8,30.2,12.7,47.4,13.3c-28.3-18.8-46.8-51-46.8-87.4c0-19.5,5.2-37.4,14.3-53\n                                C87.4,130.9,165,172.5,252.1,177.1c-1.6-7.8-2.6-15.9-2.6-24c0-57.8,46.8-104.9,104.9-104.9c30.2,0,57.5,12.7,76.7,33.1\n                                c23.7-4.5,46.5-13.3,66.6-25.3c-7.8,24.4-24.4,44.8-46.1,57.8c21.1-2.3,41.6-8.1,60.4-16.2C497.7,118.3,479.8,136.8,459.4,151.7\n                                L459.4,151.7z\"/>\n                        </svg>\n\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.google.com/\">\n\n                        <svg version=\"1.1\" class=\"login-social-icon\" height=\"50px\"\n                                focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                x=\"0px\" y=\"0px\" viewBox=\"0 0 640 512\" style=\"enable-background:new 0 0 640 512;\" xml:space=\"preserve\">\n                            <path d=\"M386.1,228.5c1.8,9.7,3.1,19.4,3.1,32c0,109.8-73.6,187.5-184.4,187.5c-106.1,0-192-85.9-192-192s85.9-192,192-192\n                                c51.9,0,95.1,18.9,128.6,50.3l-52.1,50c-14.1-13.6-39-29.6-76.5-29.6c-65.5,0-118.9,54.2-118.9,121.3s53.4,121.3,118.9,121.3\n                                c76,0,104.5-54.7,109-82.8h-109v-66L386.1,228.5L386.1,228.5z M571.5,234.9v-55.7h-56v55.7h-55.7v56h55.7v55.7h56v-55.7h55.7v-56\n                                L571.5,234.9L571.5,234.9z\"/>\n                        </svg>\n\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal-privacy\" #modal>\n    <div class=\"modal-content-privacy\">\n        <div class=\"modal-top-privacy\">\n            <h1>Política de privacidad</h1>\n        </div>\n        <div class=\"modal-middle-privacy\">\n            <p>Juan Camejo Alarcón te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio Web www.formbaseddocs.com.\n                    En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 15⁄1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (LOPD), y al Real Decreto 1720⁄2007, de 21 de diciembre, conocido como el Reglamento de desarrollo de la LOPD. Cumple también con el Reglamento (UE) 2016⁄679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).\n                    El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.                    \n            </p>\n            <h3>Identidad del responsable</h3>\n                <ul>         \n                    <li>Titular: Juan Camejo Alarcón</li>\n                    <li>NIF/CIF: 54113125J</li>\n                    <li>Correo electrónico: juancamejo93@gmail.com</li>\n                    <li>Sitio Web: juancamejoalarcon.com</li>\n                </ul>\n            <h3>Principios aplicados en el tratamiento de datos</h3>\n            <p>En el tratamiento de tus datos personales, el Titular aplicará los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protección de datos:</p>\n            <ul>\n                <li>Principio de licitud, lealtad y transparencia: El Titular siempre requerirá el consentimiento para el tratamiento de tus datos personales que puede ser para uno o varios fines específicos sobre los que te informará previamente con absoluta transparencia.</li>\n                <li>Principio de minimización de datos: El Titular te solicitará solo los datos estrictamente necesarios para el fin o los fines que los solicita.</li>\n                <li>Principio de minimización de datos: El Titular te solicitará solo los datos estrictamente necesarios para el fin o los fines que los solicita.</li>\n                <li>Principio de limitación del plazo de conservación: Los datos se mantendrán durante el tiempo estrictamente necesario para el fin o los fines del tratamiento. El Titular te informará del plazo de conservación correspondiente según la finalidad. En el caso de suscripciones, el Titular revisará periódicamente las listas y eliminará aquellos registros inactivos durante un tiempo considerable.</li>\n                <li>Principio de integridad y confidencialidad: Tus datos serán tratados de tal manera que su seguridad, confidencialidad e integridad esté garantizada. Debes saber que el Titular toma las precauciones necesarias para evitar el acceso no autorizado o uso indebido de los datos de sus usuarios por parte de terceros.</li>\n            </ul>\n            <h3>Obtención de datos personales</h3>\n            <p>Para navegar por formbaseddocs no es necesario que facilites ningún dato personal. Los casos en los que sí proporcionas tus datos personales son los de creación de una cuenta, y su modificación.</p>\n            <h3>Tus derechos</h3>\n            <p>El Titular te informa que sobre tus datos personales tienes derecho a:</p>\n            <ul>\n                <li>Solicitar el acceso a los datos almacenados.</li>\n                <li>Solicitar una rectificación o la cancelación.</li>\n                <li>Solicitar la limitación de su tratamiento.</li>\n                <li>Oponerte al tratamiento.</li>\n                <li>Solicitar la portabilidad de tus datos.</li>\n            </ul>\n            <p>El ejercicio de estos derechos es personal y por tanto debe ser ejercido directamente por el interesado, solicitándolo directamente al Titular, lo que significa que cualquier cliente, suscriptor o colaborador que haya facilitado sus datos en algún momento puede dirigirse al Titular y pedir información sobre los datos que tiene almacenados y cómo los ha obtenido, solicitar la rectificación de los mismos, solicitar la portabilidad de sus datos personales, oponerse al tratamiento, limitar su uso o solicitar la cancelación de esos datos en los ficheros del Titular.\n                    Para ejercitar tus derechos de acceso, rectificación, cancelación, portabilidad y oposición tienes que enviar un correo electrónico a juancamejo93@gmail.com junto con la prueba válida en derecho como una fotocopia del D.N.I. o equivalente.\n                    Tienes derecho a la tutela judicial efectiva y a presentar una reclamación ante la autoridad de control, en este caso, la Agencia Española de Protección de Datos, si consideras que el tratamiento de datos personales que te conciernen infringe el Reglamento.\n            </p>\n            <h3>Finalidad del tratamiento de datos personales</h3>\n            <p>Cuando te conectas al sitio Web para mandar un correo al Titular, creas una cuenta o realizas una contratación, estás facilitando información de carácter personal de la que el responsable es el Titular. Esta información puede incluir datos de carácter personal como pueden ser tu dirección IP, nombre y apellidos, dirección física, dirección de correo electrónico, número de teléfono, y otra información. Al facilitar esta información, das tu consentimiento para que tu información sea recopilada, utilizada, gestionada y almacenada por superadmin.es , sólo como se describe en el Aviso Legal y en la presente Política de Privacidad.\n                    Los datos personales y la finalidad del tratamiento por parte del Titular es diferente según el sistema de captura de información:\n                    Existen otras finalidades por las que el Titular trata tus datos personales:</p>\n            <ul>\n                <li>Para garantizar el cumplimiento de las condiciones recogidas en el Aviso Legal y en la ley aplicable. Esto puede incluir el desarrollo de herramientas y algoritmos que ayuden a este sitio Web a garantizar la confidencialidad de los datos personales que recoge.</li>\n                <li>Para apoyar y mejorar los servicios que ofrece este sitio Web.</li>\n                <li>Para analizar la navegación. El Titular recoge otros datos no identificativos que se obtienen mediante el uso de cookies que se descargan en tu ordenador cuando navegas por el sitio Web cuyas caracterísiticas y finalidad están detalladas en la Política de Cookies .</li>\n                <li>Para gestionar las redes sociales. el Titular tiene presencia en redes sociales. Si te haces seguidor en las redes sociales del Titular el tratamiento de los datos personales se regirá por este apartado, así como por aquellas condiciones de uso, políticas de privacidad y normativas de acceso que pertenezcan a la red social que proceda en cada caso y que has aceptado previamente.</li>\n            </ul>\n            <p>El Titular tratará tus datos personales con la finalidad de administrar correctamente su presencia en la red social, informarte de sus actividades, productos o servicios, así como para cualquier otra finalidad que las normativas de las redes sociales permitan.\n                    En ningún caso el Titular utilizará los perfiles de seguidores en redes sociales para enviar publicidad de manera individual.\n            </p>\n            <h3>Seguridad de los datos personales</h3>\n            <p>Para proteger tus datos personales, el Titular toma todas las precauciones razonables y sigue las mejores prácticas de la industria para evitar su pérdida, mal uso, acceso indebido, divulgación, alteración o destrucción de los mismos.\n                    El sitio Web está alojado en PROVEEDOR DE ALOJAMIENTO WEB. La seguridad de tus datos está garantizada, ya que toman todas las medidas de seguridad necesarias para ello. Puedes consultar su política de privacidad para tener más información.\n            </p>\n            <h3>Contenido de otros sitios web</h3>\n            <p>Las páginas de este sitio Web pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si hubieras visitado la otra web.\n                    Estos sitios Web pueden recopilar datos sobre ti, utilizar cookies, incrustar un código de seguimiento adicional de terceros, y supervisar tu interacción usando este código.\n            </p>\n            <h3>Política de Cookies</h3>\n            <p>Para que este sitio Web funcione correctamente necesita utilizar cookies, que es una información que se almacena en tu navegador web.\n                    En la página Política de Cookies puedes consultar toda la información relativa a la política de recogida, la finalidad y el tratamiento de las cookies.\n            </p>\n            <h3>Legitimación para el tratamiento de datos</h3>\n            <p>La base legal para el tratamiento de tus datos es: el consentimiento.\n                    Para contactar con el Titular, suscribirte a un boletín o realizar comentarios en este sitio Web tienes que aceptar la presente Política de Privacidad.\n            </p>\n            <h3>Categorías de datos personales</h3>\n            <p>Las categorías de datos personales que trata el Titular son:</p>\n            <ul>\n                <li>Datos identificativos.</li>\n            </ul>\n            <h3>Conservación de datos personales</h3>\n            <p>Los datos personales que proporciones al Titular se conservarán hasta que solicites su supresión.</p>\n            <h3>Navegación Web</h3>\n            <p>Al navegar por www.formbaseddocs.com se pueden recoger datos no identificativos, que pueden incluir, la dirección IP, geolocalización, un registro de cómo se utilizan los servicios y sitios, hábitos de navegación y otros datos que no pueden ser utilizados para identificarte.\n                    El sitio Web utiliza los siguientes servicios de análisis de terceros:\n                    El Titular utiliza la información obtenida para obtener datos estadísticos, analizar tendencias, administrar el sitio, estudiar patrones de navegación y para recopilar información demográfica.\n            </p>\n            <h3>Exactitud y veracidad de los datos personales</h3>\n            <p>Te comprometes a que los datos facilitados al Titular sean correctos, completos, exactos y vigentes, así como a mantenerlos debidamente actualizados.\n                    Como Usuario del sitio Web eres el único responsable de la veracidad y corrección de los datos que remitas al sitio exonerando a el Titular de cualquier responsabilidad al respecto.\n            </p>\n            <h3>Aceptación y consentimiento</h3>\n            <p>Como Usuario del sitio Web declaras haber sido informado de las condiciones sobre protección de datos de carácter personal, aceptas y consientes el tratamiento de los mismos por parte de el Titular en la forma y para las finalidades indicadas en esta Política de Privacidad.</p>\n            <h3>Revocabilidad</h3>\n            <p>Para ejercitar tus derechos de acceso, rectificación, cancelación, portabilidad y oposición tienes que enviar un correo electrónico a juancamejo93@gmail.com junto con la prueba válida en derecho como una fotocopia del D.N.I. o equivalente.\n                    El ejercicio de tus derechos no incluye ningún dato que el Titular esté obligado a conservar con fines administrativos, legales o de seguridad.\n            </p>\n            <h3>Cambios en la Política de Privacidad</h3>\n            <p>El Titular se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria.\n                    Estas políticas estarán vigentes hasta que sean modificadas por otras debidamente publicadas.\n            </p>\n        </div>\n        <div class=\"modal-bottom-privacy\">\n            <button class=\"button close-button-privacy\" (click)=\"toogleModal()\" #closeModal>Entendido</button>\n        </div>\n    </div>\n</div>"

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
    function AuthComponent(route, router, userService, fb) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.authType = '';
        this.title = '';
        this.errors = { errors: {} };
        this.isSubmitting = false;
        // use FormBuilder to create a form group
        this.form = this.fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'rememberme': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
            }
        });
        window.addEventListener('click', function (event) {
            if (event.target === _this.modal.nativeElement) {
                _this.toogleModal();
            }
        });
    };
    AuthComponent.prototype.toogleModal = function () {
        this.modal.nativeElement.classList.toggle('show-modal');
    };
    AuthComponent.prototype.checkIfPrivacyChecked = function (e) {
        if (this.authType === 'signup') {
            e.preventDefault();
            if (!this.privacy.nativeElement.checked) {
                this.privacyError.nativeElement.style.display = 'block';
            }
            else {
                this.privacyError.nativeElement.style.display = 'none';
                this.submitForm();
            }
        }
    };
    AuthComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        this.errors = { errors: {} };
        var credentials = this.form.value;
        this.userService
            .attemptAuth(this.authType, credentials)
            .subscribe(function (data) { return _this.router.navigateByUrl('/'); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AuthComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('privacy'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AuthComponent.prototype, "privacy", void 0);
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
                _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]
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



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map