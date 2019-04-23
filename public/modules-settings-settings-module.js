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

module.exports = "<section id=\"settings\">\n    <div class=\"settings-container\">\n        \n        <app-list-errors [errors]=\"errors\"></app-list-errors>\n        \n        <form [formGroup]=\"settingsForm\" class=\"form settings-form\" (ngSubmit)=\"submitForm()\">\n            \n            <fieldset [disabled]=\"isSubmitting\">\n                \n                <fieldset class=\"img-settings-container\">\n                    <img src=\"{{user.image}}\" alt=\"avatar\">\n                    <input type=\"file\" (change)=\"onFileChange($event)\" />\n                </fieldset>\n                \n                <fieldset class=\"form-group-settings\">\n                    <label for=\"name\"></label>\n                    <input type=\"text\" name=\"name\" id=\"name\" \n                        placeholder=\"Username\" formControlName=\"username\">\n                </fieldset>\n                \n                <fieldset class=\"form-group-settings\">\n                    <label for=\"email\"></label>\n                    <input type=\"email\" name=\"email\" id=\"email\" \n                    placeholder=\"Email\" formControlName=\"email\">\n                </fieldset>\n                \n                <fieldset class=\"form-group-settings\">\n                    <label for=\"description\"></label>\n                    <textarea cols=\"70\" rows=\"5\" id=\"description\" \n                    placeholder=\"Description\" formControlName=\"description\"></textarea>\n                </fieldset>\n                \n                <fieldset class=\"form-group-settings\">\n                    <label for=\"contact\"></label>\n                    <input type=\"text\" name=\"contact\" id=\"contact\" \n                    placeholder=\"Contact information\" formControlName=\"contactInformation\">\n                </fieldset>\n                \n                <div class=\"submit-area\">\n                    <input type=\"submit\" value=\"Update\">\n                </div>\n            </fieldset>\n      </form>\n\n      <div class=\"settings-bottom-area\">\n          <button (click)=\"toggleModal()\">Cambiar contraseña</button>\n          <button (click)=\"logout()\">Cerrar sesión</button>\n      </div>\n\n\n  </div>\n</section>\n\n<!-- Modal -->\n<div class=\"modal\" #modal>\n    <div class=\"modal-content\">\n        <div class=\"modal-top modal-top-change-pass\">\n            <h5>Cambiar contraseña</h5>\n        </div>\n        <div class=\"modal-middle modal-middle-change-pass\">\n            <input type=\"password\" placeholder=\"Contraseña actual\" #oldPass>\n            <input type=\"password\" placeholder=\"Contraseña nueva\" #newPass>\n        </div>\n        <div class=\"modal-bottom\">\n            <button class=\"button\" \n                (click)=\"changePassword(this.oldPass.value, newPass.value)\"\n                >Guardar</button>\n\n            <button class=\"button cancel\" \n                (click)=\"toggleModal()\"\n                >Cancelar</button>\n\n        </div>\n    </div>\n</div>"

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
            contactInformation: '',
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // Make a fresh copy of the current user's object to place in editable form fields
        Object.assign(this.user, this.userService.getCurrentUser());
        // Fill the form
        this.settingsForm.patchValue(this.user);
    };
    SettingsComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            var fileSize = file.size / 1024 / 1024; // in MB
            if (this.hasExtension(event.target.value, ['.jpg', '.gif', '.png'])) {
                if (fileSize > 2) {
                    event.target.value = '';
                    this.toastr.error('File is bigger than 2 MB', 'Error', {
                        positionClass: 'toast-bottom-right',
                        progressBar: true,
                        progressAnimation: 'decreasing'
                    });
                }
                else {
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        _this.settingsForm.patchValue({
                            image: reader.result
                        });
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
        this.updateUser(this.settingsForm.value);
        this.userService
            .update(this.user)
            .subscribe(function (updatedUser) {
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
    SettingsComponent.prototype.updateUser = function (values) {
        Object.assign(this.user, values);
    };
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
                .update({
                password: newPass
            })
                .subscribe(function (updatedUser) {
                _this.toggleModal();
                _this.toastr.success('User updated', '', {
                    positionClass: 'toast-bottom-right',
                    progressBar: true,
                    progressAnimation: 'decreasing'
                });
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