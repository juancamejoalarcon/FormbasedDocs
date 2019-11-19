(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-fill-form-fill-form-module"],{

/***/ "./src/app/modules/fill-form/fill-form-resolver.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/fill-form/fill-form-resolver.service.ts ***!
  \*****************************************************************/
/*! exports provided: FillFormResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillFormResolver", function() { return FillFormResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var FillFormResolver = /** @class */ (function () {
    function FillFormResolver(formService, router, userService) {
        this.formService = formService;
        this.router = router;
        this.userService = userService;
    }
    FillFormResolver.prototype.resolve = function (route, state) {
        var _this = this;
        // Depende de si es un nuevo form o no
        if (!route.url.toString().includes('edit')) {
            return this.formService.getWithView(route.params['slug'])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (form) {
                return form;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.router.navigateByUrl('/'); }));
        }
        else {
            return this.formService.get(route.params['slug'])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (form) {
                if (_this.userService.getCurrentUser().username === form.filledBy.username) {
                    // The route keeps an old value so I force the update
                    route.data = { form: form };
                    return form;
                }
                else {
                    _this.router.navigateByUrl('/');
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.router.navigateByUrl('/'); }));
        }
    };
    FillFormResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["FormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], FillFormResolver);
    return FillFormResolver;
}());



/***/ }),

/***/ "./src/app/modules/fill-form/fill-form-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/fill-form/fill-form-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FillFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillFormRoutingModule", function() { return FillFormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fill_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fill-form.component */ "./src/app/modules/fill-form/fill-form.component.ts");
/* harmony import */ var _fill_form_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fill-form-resolver.service */ "./src/app/modules/fill-form/fill-form-resolver.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");






var routes = [
    {
        path: ':slug',
        component: _fill_form_component__WEBPACK_IMPORTED_MODULE_3__["FillFormComponent"],
        resolve: {
            form: _fill_form_resolver_service__WEBPACK_IMPORTED_MODULE_4__["FillFormResolver"]
        }
    },
    {
        path: 'edit',
        component: _fill_form_component__WEBPACK_IMPORTED_MODULE_3__["FillFormComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'edit/:slug',
        component: _fill_form_component__WEBPACK_IMPORTED_MODULE_3__["FillFormComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        resolve: {
            form: _fill_form_resolver_service__WEBPACK_IMPORTED_MODULE_4__["FillFormResolver"]
        }
    }
];
var FillFormRoutingModule = /** @class */ (function () {
    function FillFormRoutingModule() {
    }
    FillFormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FillFormRoutingModule);
    return FillFormRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/fill-form/fill-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/fill-form/fill-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-menu\">\n    <div class=\"sub-menu__container sub-menu__container--fill-form\" #subMenu>\n        <div class=\"sub-menu__left-button sub-menu__left-button--fill-form\">\n            <button class=\"button-filled button-filled--sub-menu-fill-form icon icon-save-solid\"\n            [disabled]=\"isSubmitting\" (click)=\"submitForm()\"></button>\n            <button class=\"button-filled button-filled--sub-menu-fill-form icon icon-trash-alt-regular\"\n            *ngIf=\"updatingForm\" [ngClass]=\"{disabled: isDeleting}\" (click)=\"deleteForm()\"></button>\n        </div>\n        <ul class=\"sub-menu__nav sub-menu__nav--fill-form\" (click)=\"topMenuNav($event)\">\n            <li class=\"sub-menu__nav__button sub-menu__nav__button--current\" data-toogle=\"form-creator\">\n                Form\n            </li>\n            <li class=\"sub-menu__nav__button\" data-toogle=\"comments\">\n                Comments\n            </li>\n        </ul>\n        <app-likes-button class=\"sub-menu__likes-views\" [form]=\"originalForm\"></app-likes-button>\n    </div>\n</div>\n<div class=\"form-creator\" id=\"form-creator\" #formCreatorDiv>\n    <div class=\"form-creator__container\">\n        <div class=\"form-creator__fields-area\" id=\"fields-area\">\n\n            <div class=\"form-creator__fields-area__container\" #formAreaDiv>\n                <div class=\"form-creator__fields-area__top\">\n                    <!-- START (Step 0) -->\n                    <div class=\"form-creator__fields-area__top__container\" *ngIf=\"this.currentStep === 0\">\n                        <div class=\"form-creator__fields-area__top__author-date\">\n                            <span class=\"form-creator__fields-area__top__author-date__author\">\n                                <div class=\"form-creator__fields-area__top__author-date__author__image-container\">\n                                    <img src=\"{{\n                                        !form.author.image ? 'assets/images/avatar.jpeg' : form.author.image\n                                    }}\" alt=\"avatar\">\n                                </div>\n                                <span [routerLink]=\"['/profile', form.author.username]\">\n                                    {{form.author.username}}\n                                </span>\n                            </span>\n                            <span class=\"form-creator__fields-area__top__author-date__date\">\n                                <span>Last updated:</span>\n                                {{originalForm.updatedAt | date: 'dd/MM/yyyy'}}\n                            </span>\n                        </div>\n                        <div class=\"form-creator__fields-area__top__before-start-button\">\n                            <div class=\"form-creator__fields-area__top__before-start-button__information-modal-icon trigger\"\n                            *ngIf=\"form.indications !== '' && form.indications !== undefined\">\n                                <span class=\"icon icon-info-solid\" (click)=\"toogleModal(modal)\"></span>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- END OF START (Step 0) -->\n                    <!-- PROGRESSBAR -->\n                    <div class=\"progress-container\" *ngIf=\"this.currentStep !== 0\">\n                        <div class=\"progress progress-large\">\n                            <span [style.width]=\"progresBarPercentage\">{{progresBarPercentage}}</span>\n                        </div>\n                    </div>\n                    <!-- END OF PROGRESSBAR -->\n                </div>\n\n                    <!-- Input radio -->\n                <div class=\"form-creator__fields-area__middle\">\n                    <div class=\"form-creator__fields-area__middle__container\" *ngIf=\"this.currentStep === 0\">\n                        <div class=\"form-creator__fields-area__middle__initial-screen\">\n                            <h2 class=\"form-creator__fields-area__middle__initial-screen__form-title\">\n                                {{form.title}}\n                            </h2>\n                            <span class=\"form-creator__fields-area__middle__initial-screen__description\">\n                                {{form.description}}\n                            </span>\n                            <button class=\"button-filled button-filled--start-form\" (click)=\"toogleModal(modal)\">\n                                Rellenar formulario\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"form-creator__fields-area__middle__container\" [ngStyle]=\"{'display': this.currentStep !== 0 ? 'block' : 'none'}\">\n                        <div *ngFor=\"let field of fields\" >\n                            <app-input-text *ngIf=\"field['type'] == 'iText'\" [field]=\"field\"></app-input-text>\n                            <app-input-radio-a *ngIf=\"field['type'] == 'iRadioA'\" [field]=\"field\"></app-input-radio-a>\n                            <app-input-radio-b *ngIf=\"field['type'] == 'iRadioB'\" [field]=\"field\"></app-input-radio-b>\n                            <!-- <app-input-radio-c *ngIf=\"field['type'] == 'iRadioC'\" [state]=\"state\" [field]=\"field\"></app-input-radio-c> -->\n                        </div>\n                    </div>\n                </div>\n                <!-- START -->\n                <div class=\"form-creator__fields-area__bottom form-creator__fields-area__bottom--initial-screen\" *ngIf=\"this.currentStep === 0\">\n                    <div class=\"form-creator__fields-area__bottom__step\">\n                        <span class=\"icon icon-file-regular\"></span>\n                        <span class=\"form-creator__fields-area__bottom__step__number\">1.</span>\n                        <span class=\"form-creator__fields-area__bottom__step__description\">Elige un documento</span>\n                    </div>\n                    <div class=\"form-creator__fields-area__bottom__step\">\n                        <span class=\"icon icon-list-alt-regular\"></span>\n                        <span class=\"form-creator__fields-area__bottom__step__number\">2.</span>\n                        <span class=\"form-creator__fields-area__bottom__step__description\">Rellena el formulario</span>\n                    </div>\n                    <div class=\"form-creator__fields-area__bottom__step\">\n                        <span class=\"icon icon-print-solid\"></span>\n                        <span class=\"form-creator__fields-area__bottom__step__number\">3.</span>\n                        <span class=\"form-creator__fields-area__bottom__step__description\">Guárdalo e imprímelo</span>\n                    </div>\n                </div>\n                <!-- END OF START -->\n                <div class=\"form-creator__fields-area__bottom\" *ngIf=\"this.currentStep !== 0\">\n                    <div class=\"form-creator__fields-area__bottom__container\">\n                        <div class=\"form-creator__fields-area__bottom__arrow-button\" \n                            *ngIf=\"this.form.fields.length >= 2 && currentStep !== 0\"(click)=\"setCurrentStep(currentStep - 1)\">\n                            <span class=\"icon icon-chevron-left-solid\"></span>\n                            <span class=\"form-creator__fields-area__bottom__arrow-button__label\">Anterior</span>\n                        </div>\n                        <div class=\"form-creator__fields-area__bottom__arrow-button\" (click)=\"nextStepAfterValidate()\" \n                            *ngIf=\"this.form.fields.length >= 2 && currentStep !== this.form.fields.length\">\n                            <span class=\"form-creator__fields-area__bottom__arrow-button__label\">Siguiente</span>\n                            <span class=\"icon icon-chevron-right-solid\"></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-creator__text-area\" id=\"text-area\"\n        [ngClass]=\"{'form-creator__text-area--quill-text': this.form.documentType === 'plain'}\">\n            <!-- Create the editor container -->\n            <div class=\"form-creator__text-area__quill-text-result\"  id=\"editor-preview\" #formBasedDocDiv\n            *ngIf=\"this.form.documentType === 'plain'\">\n                {{generatedText}}\n            </div>\n            <!-- Office document -->\n            <div id=\"wodoformbaseddocs\" style=\"width:100%; height:100%; margin:0px; padding:0px\" *ngIf=\"this.form.documentType === 'office'\">\n                <div id=\"editorContainer\" style=\"width:100%; height:100%; margin:0px; padding:0px\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"comments\" style=\"display: none\">\n    <div class=\"comments\">\n        <app-comments class=\"comments__container\" [form]=\"originalForm\"\n        *ngIf=\"originalForm.title !== ''\"></app-comments>\n    </div>\n</div>\n\n<div class=\"modal\" #modal>\n    <div class=\"modal__content modal__content--privacy\">\n        <div class=\"modal__content__top modal__content__top--privacy\">\n            <h2>Indicaciones antes de comenzar el formulario</h2>\n        </div>\n        <div class=\"modal__content__modal-middle modal__content__modal-middle--privacy\" id=\"modal-middle-privacy\">\n            <div class=\"modal__content__modal-middle__container\" [innerHTML]=\"form.indications\">\n            </div>\n        </div>\n        <div class=\"modal__content__modal-bottom modal__content__modal-bottom--privacy\">\n            <button class=\"button-filled\" id=\"modal-button\" (click)=\"toogleModal(modal); setCurrentStep(currentStep + 1);\">Rellenar</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/fill-form/fill-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/fill-form/fill-form.component.ts ***!
  \**********************************************************/
/*! exports provided: FillFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillFormComponent", function() { return FillFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var FillFormComponent = /** @class */ (function () {
    function FillFormComponent(formsService, userService, commonsService, route, router, toastr, odfCreatorService, plainTextCreatorService, stateService, stepModelService) {
        this.formsService = formsService;
        this.userService = userService;
        this.commonsService = commonsService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.odfCreatorService = odfCreatorService;
        this.plainTextCreatorService = plainTextCreatorService;
        this.stateService = stateService;
        this.stepModelService = stepModelService;
        // Antes era fields: any. Estudiar si se puede usar authorForm fields
        this.fields = [];
        this.isDeleting = false;
        this.form = new _core__WEBPACK_IMPORTED_MODULE_3__["Form"]();
        this.originalForm = new _core__WEBPACK_IMPORTED_MODULE_3__["Form"]();
        this.errors = {};
        this.isSubmitting = false;
        this.updatingForm = false;
        this.documentType = 'office';
        this.currentStep = 0;
        this.progresBarPercentage = '0%';
    }
    FillFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            var form = data.form;
            _this.form = form;
            _this.fields = form.fields;
            _this.generatedText = form.text;
            if (form.type === 'Created') {
                _this.form.originalSlug = form.slug;
                _this.updatingForm = false;
            }
            else {
                _this.updatingForm = true;
            }
            _this.updateProgressBarPercentage();
            _this.setInitialState();
            _this.setDocument();
            _this.setDivHeight();
            window.addEventListener('resize', _this.setDivHeight);
        });
        this.formsService.get(this.form.originalSlug).subscribe(function (originalForm) {
            _this.originalForm = originalForm;
        });
    };
    FillFormComponent.prototype.ngOnDestroy = function () {
        if (this.form.documentType === 'office') {
            this.odfCreatorService.closeAndDestroyEditor();
            this.odfCreatorService.destroyResizeDocumentContainer();
        }
    };
    FillFormComponent.prototype.setInitialState = function () {
        this.stateService.setState('fill-form');
        this.stateService.setDocumentType(this.form.documentType);
        this.documentType = this.form.documentType;
    };
    FillFormComponent.prototype.generateText = function () {
        // Save user form settings
        // this.form.fields = newFieldsToSave;
    };
    FillFormComponent.prototype.submitForm = function () {
        var _this = this;
        // Saves author Form
        this.isSubmitting = true;
        this.form.type = 'Filled';
        // post the changes
        this.formsService
            .save(this.form)
            .subscribe(function (form) {
            _this.toastr.success('Has been created', form.title, {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
            _this.router.navigateByUrl('/fill-form/edit/' + form.slug);
        }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    FillFormComponent.prototype.deleteForm = function () {
        var _this = this;
        this.isDeleting = true;
        this.formsService.destroy(this.form.slug)
            .subscribe(function (success) {
            _this.toastr.success('Has been deleted', _this.form.title, {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
            _this.router.navigateByUrl('/');
        });
    };
    // // UTILITY
    FillFormComponent.prototype.setDivHeight = function () {
        if (window.innerWidth > 885) {
            if (document.querySelector('#form-creator') !== null) {
                var newHeight = window.innerHeight - document.querySelector('#form-creator').offsetTop + 'px';
                document.querySelector('#form-creator').style.height = newHeight;
            }
        }
    };
    FillFormComponent.prototype.toogleModal = function (modal) {
        this.commonsService.toggleModal(modal, false);
    };
    FillFormComponent.prototype.setDocument = function () {
        var _this = this;
        this.commonsService.toggleSpinner();
        if (this.form.documentType === 'office') {
            this.setDivHeight();
            window.addEventListener('resize', this.setDivHeight);
            this.documentService = this.odfCreatorService;
            this.documentService.init('fillForm', this.form.text, 'editorContainer').then(function (data) {
                _this.commonsService.toggleSpinner();
                _this.documentService.setDragAndDropForSetUp();
                _this.stepModelService.init(_this.form.fields, _this.documentType);
                _this.stepModelService.setInitialState();
            });
        }
        else {
            this.documentService = this.plainTextCreatorService;
            this.documentService.init('editor-container', 'editor-preview');
            this.documentService.setQuillText(this.form.text);
            this.setDivHeight();
            window.addEventListener('resize', this.setDivHeight);
            this.stepModelService.init(this.form.fields, this.documentType);
            // this.stepModelService.setInitialState();
            this.commonsService.toggleSpinner();
        }
    };
    FillFormComponent.prototype.topMenuNav = function (e) {
        this.commonsService.subMenuNav(e, this.subMenu.nativeElement);
    };
    FillFormComponent.prototype.setCurrentStep = function (stepNum) {
        var _this = this;
        this.currentStep = stepNum;
        this.formAreaDiv.nativeElement.querySelectorAll('.form-creator__fields-area__field').forEach(function (step, index) {
            if (_this.currentStep === index + 1) {
                step.style.display = 'block';
            }
            else {
                step.style.display = 'none';
            }
        });
        this.updateProgressBarPercentage();
    };
    FillFormComponent.prototype.nextStepAfterValidate = function () {
        var currentStep = this.form.fields[this.currentStep - 1];
        if (currentStep['mandatory']) {
            if (currentStep['type'] === 'iText') {
                if (currentStep['replacement'] === '') {
                    this.commonsService.toastMessage('error', 'Validation error', 'This field is mandatory');
                }
                else {
                    this.setCurrentStep(this.currentStep + 1);
                }
            }
        }
        else {
            this.setCurrentStep(this.currentStep + 1);
        }
    };
    FillFormComponent.prototype.updateProgressBarPercentage = function () {
        this.progresBarPercentage = Math.round(((this.currentStep / this.form.fields.length) * 100)) + '%';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formAreaDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FillFormComponent.prototype, "formAreaDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formBasedDocDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FillFormComponent.prototype, "formBasedDocDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('linkFormButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FillFormComponent.prototype, "linkFormButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FillFormComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FillFormComponent.prototype, "subMenu", void 0);
    FillFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fill-form',
            template: __webpack_require__(/*! ./fill-form.component.html */ "./src/app/modules/fill-form/fill-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["FormService"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _core__WEBPACK_IMPORTED_MODULE_3__["CommonsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core__WEBPACK_IMPORTED_MODULE_3__["OdfCreatorService"],
            _core__WEBPACK_IMPORTED_MODULE_3__["PlainTextCreatorService"],
            _core__WEBPACK_IMPORTED_MODULE_3__["StateService"],
            _core__WEBPACK_IMPORTED_MODULE_3__["StepModelService"]])
    ], FillFormComponent);
    return FillFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/fill-form/fill-form.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/fill-form/fill-form.module.ts ***!
  \*******************************************************/
/*! exports provided: FillFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillFormModule", function() { return FillFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _fill_form_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fill-form-routing.module */ "./src/app/modules/fill-form/fill-form-routing.module.ts");
/* harmony import */ var _fill_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fill-form.component */ "./src/app/modules/fill-form/fill-form.component.ts");
/* harmony import */ var _fill_form_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fill-form-resolver.service */ "./src/app/modules/fill-form/fill-form-resolver.service.ts");







var FillFormModule = /** @class */ (function () {
    function FillFormModule() {
    }
    FillFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_fill_form_component__WEBPACK_IMPORTED_MODULE_5__["FillFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _fill_form_routing_module__WEBPACK_IMPORTED_MODULE_4__["FillFormRoutingModule"]
            ],
            providers: [
                _fill_form_resolver_service__WEBPACK_IMPORTED_MODULE_6__["FillFormResolver"]
            ]
        })
    ], FillFormModule);
    return FillFormModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-fill-form-fill-form-module.js.map