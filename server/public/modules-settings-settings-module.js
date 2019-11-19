(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-settings-settings-module"],{

/***/ "./src/app/modules/settings/settings-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/settings/settings-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "./src/app/modules/settings/settings.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");





var routes = [
    {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/settings/settings.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/settings/settings.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-menu\">\n    <div class=\"sub-menu__container\">\n        <ul class=\"sub-menu__nav sub-menu__nav--my-forms\" style=\"justify-content: center;\">\n            <li class=\"sub-menu__nav__button sub-menu__nav__button--without-hover\">\n                {{user.username}}\n            </li>\n        </ul>\n    </div>\n</div>\n\n<div class=\"settings\">\n    <app-list-errors [errors]=\"errors\"></app-list-errors>\n    <form class=\"settings__container\" [formGroup]=\"settingsForm\" (ngSubmit)=\"submitForm()\">\n        <div class=\"settings__profile-image\">\n            <div class=\"settings__profile-image__container\">\n                <div class=\"settings__profile__image__img\">\n                    <img src=\"{{user.image}}\" alt=\"profile image\" #imageSrc>\n                </div>\n                <fieldset class=\"settings__profile__image__input\">\n                    <label class=\"input-file\">\n                        Cambiar imagen de perfil\n                        <input type=\"file\" name=\"profile-image\" (change)=\"onFileChange($event)\">\n                    </label>\n                </fieldset>\n            </div>\n        </div>\n        <div class=\"settings__form\">\n            <div class=\"settings__form__container\">\n                <fieldset class=\"settings__form__group\">\n                    <input type=\"text\" placeholder=\"Nombre de usuario\" formControlName=\"username\">\n                    <input type=\"text\" placeholder=\"Nombre y apellidos\" formControlName=\"nameAndSurname\">\n                    <input type=\"text\" placeholder=\"Corren electrónico\" formControlName=\"email\">\n                </fieldset>\n                <fieldset class=\"settings__form__group\">\n                    <textarea name=\"description\" cols=\"30\" rows=\"10\"\n                    placeholder=\"Description\" formControlName=\"description\"></textarea>\n                    <input type=\"date\" placeholder=\"Fecha de nacimiento\" formControlName=\"dateOfBirth\">\n                    <input type=\"text\" placeholder=\"Empresa\" formControlName=\"companyName\">\n                    <input type=\"text\" placeholder=\"Contacto\" formControlName=\"contactInformation\">\n                </fieldset>\n                <div class=\"settings__form__button-container\">\n                    <button type=\"submit\" class=\"button-filled icon icon-save-solid\"></button>\n                </div>\n            </div>\n        </div>\n        <hr>\n        <div class=\"settings__buttons\">\n            <div class=\"settings__buttons__container\">\n                <button class=\"button-filled trigger\" type=\"button\" (click)=\"toggleModal()\">\n                    Cambiar contraseña\n                </button>\n                <button class=\"button-filled\" type=\"button\" (click)=\"logout()\">\n                    Cerrar sesión\n                </button>\n                <button class=\"button-filled\" type=\"button\">\n                    Eliminar cuenta\n                </button>\n            </div>\n        </div>\n    </form>\n</div>\n\n<div class=\"modal\" #modal>\n    <div class=\"modal__content\" style=\"padding: 2rem\">\n        <div class=\"modal__content__modal-middle modal__content__modal-middle--change-password\">\n            <div class=\"modal__content__modal-middle__container\">\n                <input type=\"password\" placeholder=\"Contraseña actual\" #oldPass>\n                <input type=\"password\" placeholder=\"Contraseña nueva\" #newPass>\n            </div>\n        </div>\n        <div class=\"modal__content__modal-bottom\">\n            <button class=\"button-filled\"\n            id=\"modal-button\" (click)=\"changePassword(this.oldPass.value, newPass.value)\">Guardar</button>\n            <button class=\"button-filled\"\n            id=\"modal-button\" (click)=\"toggleModal()\">Cancelar</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/settings/settings.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/settings/settings.component.ts ***!
  \********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");






var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(router, userService, fb, toastr) {
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.toastr = toastr;
        this.user = new _core__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.errors = {};
        this.isSubmitting = false;
        // create form group using the form builder
        this.settingsForm = this.fb.group({
            image: '',
            username: '',
            email: '',
            description: '',
            nameAndSurname: '',
            contactInformation: '',
            dateOfBirth: '',
            companyName: '',
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // Make a fresh copy of the current user's object to place in editable form fields
        Object.assign(this.user, this.userService.getCurrentUser());
        // Fill the form
        console.log(this.user);
        this.settingsForm.patchValue(this.user);
    };
    SettingsComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            var fileSize = file.size / 1024 / 1024; // in MB
            if (this.hasExtension(event.target.value, ['.jpg', '.gif', '.png'])) {
                if (fileSize > 1) {
                    event.target.value = '';
                    this.toastr.error('File is bigger than 1 MB', 'Error', {
                        positionClass: 'toast-bottom-right',
                        progressBar: true,
                        progressAnimation: 'decreasing'
                    });
                }
                else {
                    reader.readAsDataURL(file);
                    reader.onload = function (e) {
                        var image = new Image();
                        //Set the Base64 string return from FileReader as source.
                        image.src = e.target.result;
                        image.onload = function () {
                            if (image.height === image.width) {
                                _this.settingsForm.patchValue({
                                    image: reader.result
                                });
                                _this.imageSrc.nativeElement.src = reader.result;
                            }
                            else {
                                event.target.value = '';
                                _this.toastr.error('Size error width and height must be equal', 'Error', {
                                    positionClass: 'toast-bottom-right',
                                    progressBar: true,
                                    progressAnimation: 'decreasing'
                                });
                            }
                        };
                    };
                }
            }
            else {
                event.target.value = '';
                this.toastr.error('File must be of type jpg gif or png', 'Error', {
                    positionClass: 'toast-bottom-right',
                    progressBar: true,
                    progressAnimation: 'decreasing'
                });
            }
        }
    };
    SettingsComponent.prototype.hasExtension = function (element, exts) {
        return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(element);
    };
    SettingsComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        // update the model
        var updatedUser = this.validation(this.settingsForm.value);
        console.log(updatedUser);
        this.userService
            .update(updatedUser)
            .subscribe(function (newUser) {
            _this.toastr.success('User updated', '', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
        }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    SettingsComponent.prototype.validation = function (values) {
        var updatedUser = {};
        var entries = Object.entries(values);
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var _a = entries_1[_i], key = _a[0], value = _a[1];
            if (values[key] !== this.user[key]) {
                updatedUser[key] = value;
                this.user[key] = value;
            }
        }
        return updatedUser;
    };
    // updateUser(values: Object) {
    //   console.log(values);
    //   (<any>Object).assign(this.user, values);
    // }
    SettingsComponent.prototype.toggleModal = function () {
        this.modal.nativeElement.classList.toggle('show-modal');
    };
    SettingsComponent.prototype.changePassword = function (oldPass, newPass) {
        var _this = this;
        if (oldPass === newPass) {
            this.toastr.error('Old and new password are the same', '', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
        }
        else if (oldPass === '' || newPass === '') {
            this.toastr.error('Fields cannot be empty', '', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
        }
        else {
            this.userService
                .changePassword({
                oldPassword: oldPass,
                newPassword: newPass,
            })
                .subscribe(function (updatedUser) {
                if (updatedUser.invalidPassword) {
                    _this.toastr.error('Current password is wrong', '', {
                        positionClass: 'toast-bottom-right',
                        progressBar: true,
                        progressAnimation: 'decreasing'
                    });
                }
                else {
                    _this.toggleModal();
                    _this.toastr.success('User updated', '', {
                        positionClass: 'toast-bottom-right',
                        progressBar: true,
                        progressAnimation: 'decreasing'
                    });
                }
            }, function (err) {
                _this.errors = err;
                _this.isSubmitting = false;
            });
        }
    };
    SettingsComponent.prototype.logout = function () {
        this.userService.purgeAuth();
        this.router.navigateByUrl('/');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SettingsComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageSrc'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SettingsComponent.prototype, "imageSrc", void 0);
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/modules/settings/settings.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/settings.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/settings/settings.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/modules/settings/settings-routing.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.component */ "./src/app/modules/settings/settings.component.ts");






var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingsRoutingModule"]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-settings-settings-module.js.map