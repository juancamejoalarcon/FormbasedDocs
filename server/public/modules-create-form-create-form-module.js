(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-create-form-create-form-module"],{

/***/ "./src/app/modules/create-form/create-form-resolver.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/create-form/create-form-resolver.service.ts ***!
  \*********************************************************************/
/*! exports provided: CreateFormResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFormResolver", function() { return CreateFormResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CreateFormResolver = /** @class */ (function () {
    function CreateFormResolver(formsService, router, userService) {
        this.formsService = formsService;
        this.router = router;
        this.userService = userService;
    }
    CreateFormResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.formsService.get(route.params['slug'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (form) {
            if (_this.userService.getCurrentUser().username === form.author.username) {
                return form;
            }
            else {
                _this.router.navigateByUrl('/');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.router.navigateByUrl('/'); }));
    };
    CreateFormResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["FormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], CreateFormResolver);
    return CreateFormResolver;
}());



/***/ }),

/***/ "./src/app/modules/create-form/create-form-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/create-form/create-form-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CreateFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFormRoutingModule", function() { return CreateFormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-form.component */ "./src/app/modules/create-form/create-form.component.ts");
/* harmony import */ var _create_form_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-form-resolver.service */ "./src/app/modules/create-form/create-form-resolver.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");






var routes = [
    {
        path: '',
        component: _create_form_component__WEBPACK_IMPORTED_MODULE_3__["CreateFormComponent"],
    },
    {
        path: 'edit',
        component: _create_form_component__WEBPACK_IMPORTED_MODULE_3__["CreateFormComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'edit/:slug',
        component: _create_form_component__WEBPACK_IMPORTED_MODULE_3__["CreateFormComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        resolve: {
            form: _create_form_resolver_service__WEBPACK_IMPORTED_MODULE_4__["CreateFormResolver"]
        }
    }
];
var CreateFormRoutingModule = /** @class */ (function () {
    function CreateFormRoutingModule() {
    }
    CreateFormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CreateFormRoutingModule);
    return CreateFormRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/create-form/create-form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/create-form/create-form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-menu\">\n    <div class=\"sub-menu__container\" #subMenu>\n        <div class=\"sub-menu__left-button\">\n            <!-- <button routerLink=\"/guide\" class=\"button-filled button-filled--sub-menu\">Guide</button> -->\n            <button class=\"button-filled button-filled--sub-menu-fill-form icon icon-save-solid\"\n            [disabled]=\"isSubmitting\" (click)=\"submitForm()\"></button>\n            <button class=\"button-filled button-filled--sub-menu-fill-form icon icon-trash-alt-regular\"\n            *ngIf=\"updatingForm\" [ngClass]=\"{disabled: isDeleting}\" (click)=\"deleteForm()\"></button>\n        </div>\n        <ul class=\"sub-menu__nav sub-menu__nav--form\" (click)=\"topMenuNav($event)\">\n            <li class=\"sub-menu__nav__button sub-menu__nav__button--current\" data-toogle=\"form-creator\" #linkFormButton>\n                Form\n            </li>\n            <li class=\"sub-menu__nav__button\" data-toogle=\"information\" #linkInformationButton>\n                Information\n            </li>\n            <li class=\"sub-menu__nav__button\" data-toogle=\"comments\" *ngIf=\"updatingForm\">\n                Comments\n            </li>\n        </ul>\n        <div class=\"sub-menu__right-button\">\n            <span class=\"sub-menu__right-button__label\">Preview</span>\n            <label class=\"switch\">\n                <input type=\"checkbox\" (change)=\"preview(previewMode.checked);\" #previewMode>\n                <span class=\"slider slider--round\"></span>\n            </label>\n        </div>\n    </div>\n</div>\n<div class=\"form-creator\" id=\"form-creator\" #formBasedDocDiv>\n    <div class=\"form-creator__container\">\n        <div class=\"form-creator__fields-area\" id=\"fields-area\">\n            <div class=\"form-creator__fields-area__container\">\n                \n                <div class=\"form-creator__fields-area__top\">\n                    <div class=\"form-creator__fields-area__top__container\">\n                        <div>\n                        </div>\n                        <div class=\"form-creator__fields-area__top__add-question d-flex\" *ngIf=\"state === 'create-form'\">\n                            Add\n                            <span class=\"icon icon-plus-circle-solid\" (click)=\"toogleModal(addQuestionMenuModal, true)\"></span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-creator__fields-area__middle\">\n                    <div class=\"form-creator__fields-area__middle__container\" id=\"formAreaDiv\" #formAreaDiv>\n                        <div *ngIf=\"updatingForm\">\n                            <div *ngFor=\"let field of fields\">\n                                <app-input-text *ngIf=\"field['type'] == 'iText'\" [field]=\"field\"></app-input-text>\n                                <app-input-radio-a *ngIf=\"field['type'] == 'iRadioA'\" [field]=\"field\"></app-input-radio-a>\n                                <app-input-radio-b *ngIf=\"field['type'] == 'iRadioB'\" [field]=\"field\"></app-input-radio-b>\n                                <!-- <app-input-radio-c *ngIf=\"field['type'] == 'iRadioC'\" [state]=\"state\" [field]=\"field\"></app-input-radio-c> -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-creator__fields-area__bottom\">\n                    <div class=\"pagination\" *ngIf=\"this.form.fields.length\">\n                        <span class=\"pagination__left-icon icon icon-chevron-left-solid\" \n                            *ngIf=\"this.form.fields.length >= 2 && currentStep !== 0\" (click)=\"setCurrentStep(currentStep - 1)\"></span>\n                        <ul>\n                            <li *ngFor=\"let field of this.form.fields; let i = index\" \n                            [ngClass]=\"{'current-page': currentStep === i }\" (click)=\"setCurrentStep(i)\">{{i + 1}}</li>\n                        </ul>\n                        <span class=\"pagination__right-icon icon icon-chevron-right-solid\" \n                            *ngIf=\"this.form.fields.length >= 2 && currentStep !== this.form.fields.length - 1\" (click)=\"nextStepAfterValidate()\"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-creator__text-area\" id=\"text-area\" \n        [ngClass]=\"{'form-creator__text-area--quill-text': this.documentType === 'plain'}\">\n            <!-- Office document -->\n            <div id=\"wodoformbaseddocs\" style=\"width:100%; height:100%; margin:0px; padding:0px\" *ngIf=\"this.documentType === 'office'\">\n                <div id=\"editorContainer\" style=\"width:100%; height:100%; margin:0px; padding:0px\">\n                </div>\n            </div>\n            <!-- Plain text -->\n            <div id=\"expand-editor-button\" class=\"d-none-flex\" (click)=\"enableFullScreen('editor-preview')\"\n            *ngIf=\"this.documentType === 'plain'\">\n                <span class=\"icon icon-expand-solid\"></span>\n            </div>\n            <div id=\"editor-container\" class=\"d-block\" #quill *ngIf=\"this.documentType === 'plain' && plainTextSelected\">\n                <quill-editor id=\"editor\" (onContentChanged)=\"quillText = $event.html;\" \n                            [ngModel]=\"quillText\" [ngModelOptions]=\"{standalone: true}\" \n                            [customOptions]=\"customOptions\" [modules]=\"quillModules\"\n                            (onEditorCreated)=\"setAdditionalQuillButtons($event)\">\n                </quill-editor>\n            </div>\n            <!-- Result -->\n            <div class=\"form-creator__text-area__quill-text-result d-none\" id=\"editor-preview\" #textPreviewDiv\n            *ngIf=\"this.documentType === 'plain'\">\n                {{quillText}}\n            </div>\n        </div>\n    </div>\n</div>\n<form [formGroup]=\"formGroup\" class=\"information\" id=\"information\" style=\"display: none\">\n    <app-list-errors class=\"information-error\" [errors]=\"errors\"></app-list-errors>\n    <div class=\"information__container\">\n        <div class=\"information__section-left\">\n            <input formControlName=\"title\" type=\"text\" placeholder=\"Título\" #title>\n            <textarea formControlName=\"description\" name=\"description\" id=\"description\" cols=\"30\" \n            rows=\"6\" placeholder=\"description\" #description (keyup)=validateDescription($event)></textarea>\n            <!-- <textarea formControlName=\"indications\" name=\"indications\" id=\"description\" cols=\"30\" rows=\"10\" placeholder=\"indications\"></textarea> -->\n            <div class=\"information__section-left__indications\">\n                <!-- Create the editor container -->\n                <quill-editor placeholder=\"Indicaciones antes de rellenar el formulario\" \n                (onContentChanged)=\"this.form.indications = $event.html\"\n                formControlName=\"indications\"\n                [modules]=\"{\n                    toolbar: [\n                    ['bold', 'italic', 'underline', 'strike'], \n                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],\n                    [{ 'size': ['small', false, 'large', 'huge'] }],\n                    [{ 'direction': 'rtl' }],\n                    ['link']]}\">\n                </quill-editor>\n            </div>\n        </div>\n        <div class=\"information__section-right\">\n            <div class=\"information__section-right__tags\">\n                <input type=\"text\" placeholder=\"tags\"\n                [formControl]=\"tags\" (keyup.enter)=\"addTag()\">\n                <div class=\"information__section-right__tags__container\">\n                    <span class=\"tag-text\" *ngFor=\"let tag of form.tags\">\n                            {{ tag }} <span class=\"icon icon-times-solid\" (click)=\"removeTag(tag)\"></span>\n                    </span>\n                </div>\n            </div>\n            <div class=\"information__section-right__buttons\">\n                <div class=\"information__section-right__buttons__switch-button\">\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" checked formControlName=\"public\">\n                        <span class=\"slider slider--round\"></span>\n                    </label>\n                    <span class=\"information__section-right__buttons__switch-button__label\">\n                        Hacer el formulario privado\n                    </span>\n                </div>\n                <div class=\"information__section-right__buttons__switch-button\">\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" checked formControlName=\"commentsEnabled\">\n                        <span class=\"slider slider--round\"></span>\n                    </label>\n                    <span class=\"information__section-right__buttons__switch-button__label\">\n                        Desactivar comentarios\n                    </span>\n                </div>\n                <div class=\"information__section-right__buttons__switch-button\">\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" checked formControlName=\"enabled\">\n                        <span class=\"slider slider--round\"></span>\n                    </label>\n                    <span class=\"information__section-right__buttons__switch-button__label\">\n                        Mantener el formulario inactivo\n                    </span>\n                </div>\n            </div>\n            <div class=\"information__section-right__notifications\">\n                <span class=\"information__section-right__notifications__title\">Activar notificaciones</span>\n                <div class=\"information__section-right__notifications__checkboxes\">\n                    <div class=\"information__section-right__notifications__form-group\">\n                        <label for=\"notifications\">\n                            <input type=\"checkbox\" class=\"filled-in\" name=\"notifications\" id=\"notifications\" value=\"Notifications\" checked/>\n                            <span>Desea que le enviemos notificaciones a su correo</span>\n                        </label>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n<div id=\"comments\" style=\"display: none\" *ngIf=\"updatingForm\">\n    <div class=\"comments\">\n        <app-comments class=\"comments__container\" [form]=\"form\"></app-comments>\n    </div>\n</div>\n\n<!-- CHOOSE DOCUMENT TYPE -->\n<div class=\"modal\" #modalChooseDocument>\n    <div class=\"modal__content modal__content--choose-document-type\">\n        <div class=\"checkout-panel\">\n            <div class=\"checkout-panel__body checkout-panel__body--choose-document-type\">    \n\n                <div class=\"checkout-panel__body__document-type-selection\">\n                    <div class=\"checkout-panel__body__document-type-selection__container\">\n                        <div class=\"checkout-panel__body__document-type-selection__button-area\">\n                            <!-- <div class=\"checkout-panel__body__document-type-selection__button-area__info-button\">\n                                <span class=\"icon icon-info-circle-solid\"></span>\n                            </div> -->\n                            <div class=\"checkout-panel__body__document-type-selection__button-area__doc-button\"\n                            (click)=\"this.documentType = 'office'\" (dblclick)=\"toogleModal(modalChooseDocument); setDocument('office');\"\n                            [ngClass]=\"{'checkout-panel__body__document-type-selection__button-area__doc-button--active': this.documentType === 'office'}\">\n                                <span>Office doc</span>\n                                <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aliquam provident excepturi iure aut ipsum facere et id alias minima dignissimos necessitatibus nihil eaque nisi, explicabo fuga nulla perferendis impedit.</small>\n                            </div>\n                        </div>\n                        <div class=\"checkout-panel__body__document-type-selection__button-area\">\n                            <!-- <div class=\"checkout-panel__body__document-type-selection__button-area__info-button\">\n                                <span class=\"icon icon-info-circle-solid\"></span>\n                            </div> -->\n                            <div class=\"checkout-panel__body__document-type-selection__button-area__doc-button\"\n                            (click)=\"this.documentType = 'plain'\" (dblclick)=\"toogleModal(modalChooseDocument); setDocument('plain');\"\n                            [ngClass]=\"{'checkout-panel__body__document-type-selection__button-area__doc-button--active': this.documentType === 'plain'}\">\n                                <span>Plain text</span>\n                                <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aliquam provident excepturi iure aut ipsum facere et id alias minima dignissimos necessitatibus nihil eaque nisi, explicabo fuga nulla perferendis impedit.</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>         \n            <div class=\"checkout-panel__footer checkout-panel__footer--one-button\">\n                <button class=\"btn next-btn\" (click)=\"toogleModal(modalChooseDocument); setDocument(this.documentType);\">Listo</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- ADD QUESTION MENU -->\n<div class=\"modal\" #addQuestionMenuModal>\n    <div class=\"modal__content modal__content--add-new-question\">\n        <div class=\"modal__content__modal-middle modal__content__modal-middle--add-new-question\">\n            <div class=\"modal__content__modal-middle__container\">\n                <div class=\"modal__content__modal-middle__button-panel\">\n                    <div class=\"modal__content__modal-middle__button-panel__container\">\n                        <div class=\"modal__content__modal-middle__button-panel__row\">\n                            <span class=\"modal__content__modal-middle__button-panel__row__label\">\n                                Input text\n                                <sup class=\"icon icon-info-circle-solid\" (click)=\"toggleLightbox(lightBox); currentGuide = 'input-text'\"></sup>\n                            </span>\n                            <button class=\"button-filled button-filled--add-new-question\"\n                            (click)=\"injectComponent(inputs[0]); toogleModal(addQuestionMenuModal, true); setCurrentStep(this.form.fields.length - 1);\" >\n                                Add\n                                <span class=\"icon icon-plus-solid\"></span>\n                            </button>\n                        </div>\n                        <div class=\"modal__content__modal-middle__button-panel__row\">\n                            <span class=\"modal__content__modal-middle__button-panel__row__label\">\n                                Input radio a\n                                <sup class=\"icon icon-info-circle-solid\" (click)=\"toggleLightbox(lightBox); currentGuide = 'input-radio-a'\"></sup>\n                            </span>\n                            <button class=\"button-filled button-filled--add-new-question\"\n                            (click)=\"injectComponent(inputs[1]); toogleModal(addQuestionMenuModal, true); setCurrentStep(this.form.fields.length - 1);\">\n                                Add\n                                <span class=\"icon icon-plus-solid\"></span>\n                            </button>\n                        </div>\n                        <div class=\"modal__content__modal-middle__button-panel__row\">\n                            <span class=\"modal__content__modal-middle__button-panel__row__label\">\n                                Input radio b\n                                <sup class=\"icon icon-info-circle-solid\" (click)=\"toggleLightbox(lightBox); currentGuide = 'input-radio-b'\"></sup>\n                            </span>\n                            <button class=\"button-filled button-filled--add-new-question\"\n                            (click)=\"injectComponent(inputs[2]); toogleModal(addQuestionMenuModal, true); setCurrentStep(this.form.fields.length - 1);\">\n                                Add\n                                <span class=\"icon icon-plus-solid\"></span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal__content__modal-bottom modal__content__modal-bottom--privacy\">\n                <button class=\"button-filled\" id=\"modal-button\" (click)=\"toogleModal(addQuestionMenuModal, true)\">\n                    Cerrar\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"info-lightbox\" #lightBox>\n    <span class=\"close-info-lightbox\" (click)=\"toggleLightbox(lightBox)\">&times;</span>\n    <div class=\"info-lightbox__content\">\n        <app-input-text-guide *ngIf=\"currentGuide === 'input-text'\"></app-input-text-guide>\n        <app-input-radio-a-guide *ngIf=\"currentGuide === 'input-radio-a'\"></app-input-radio-a-guide>\n        <app-input-radio-b-guide *ngIf=\"currentGuide === 'input-radio-b'\"></app-input-radio-b-guide>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/create-form/create-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/create-form/create-form.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFormComponent", function() { return CreateFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var CreateFormComponent = /** @class */ (function () {
    function CreateFormComponent(componentInjectorService, elementRef, renderer, formService, commonsService, route, router, fb, toastr, stepModelService, stateService, odfCreatorService, plainTextCreatorService) {
        this.componentInjectorService = componentInjectorService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.formService = formService;
        this.commonsService = commonsService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.stepModelService = stepModelService;
        this.stateService = stateService;
        this.odfCreatorService = odfCreatorService;
        this.plainTextCreatorService = plainTextCreatorService;
        this.inputs = [
            _shared__WEBPACK_IMPORTED_MODULE_5__["InputTextComponent"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["InputRadioAComponent"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["InputRadioBComponent"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["InputRadioCComponent"]
        ];
        this.quillText = '';
        this.injectedComponents = [];
        this.isButtonDisabled = false;
        this.form = new _core__WEBPACK_IMPORTED_MODULE_4__["Form"]();
        this.tags = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.fields = [];
        this.errors = {};
        this.isSubmitting = false;
        this.updatingForm = false;
        this.isDeleting = false;
        this.isNewForm = false;
        this.isFormValid = false;
        // Nuevo
        this.documentType = 'office';
        this.currentStep = 0;
        this.isInPreviewMode = false;
        this.reader = new FileReader();
        // use the FormBuilder to create a form group
        this.formGroup = this.fb.group({
            'title': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            indications: '',
            public: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true),
            commentsEnabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true),
            enabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true)
        });
    }
    CreateFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If there's a form prefetched, load it
        this.route.data.subscribe(function (data) {
            if (data.form) {
                console.log(data.form);
                // this.stepModelService.init(this.form.fields, );
                _this.quillText = data.form.text;
                _this.textPreview = data.form.text;
                _this.form = data.form;
                _this.formGroup.patchValue(data.form);
                _this.fields = _this.form.fields;
                _this.form.documentType = data.form.documentType;
                _this.updatingForm = true;
                setTimeout(function () {
                    _this.setCurrentStep(_this.form.currentStep);
                }, 0);
            }
            else {
                _this.updatingForm = false;
                _this.toogleModal(_this.modalChooseDocument.nativeElement);
            }
            _this.setInitialState();
            if (_this.updatingForm) {
                _this.setDocument(_this.form.documentType);
            }
        });
    };
    CreateFormComponent.prototype.ngOnDestroy = function () {
        if (this.documentType === 'office') {
            this.odfCreatorService.closeAndDestroyEditor();
            this.odfCreatorService.destroyResizeDocumentContainer();
            window['DOCUMENTOURL'] = false;
        }
    };
    /***************/
    /***NEW FORM****/
    /***************/
    CreateFormComponent.prototype.preview = function (checked) {
        if (checked) {
            this.stateService.setState('fill-form');
            this.documentService.setPreview(this.quillText);
        }
        else {
            this.stateService.setState('create-form');
            this.documentService.unsetPreview();
        }
    };
    CreateFormComponent.prototype.setInitialState = function () {
        var _this = this;
        this.stateService.setState('create-form');
        this.stateService.stateSubscribe().subscribe(function (state) {
            _this.state = state;
        });
        this.stepModelService.stepsEvent.subscribe(function (event) {
            if (event === 'remove-step') {
                _this.setCurrentStep(_this.currentStep - 1);
                _this.form.fields = _this.stepModelService.getStepsModel();
            }
        });
    };
    CreateFormComponent.prototype.setDocument = function (documentType) {
        var _this = this;
        if (documentType === 'plain') {
            this.plainTextSelected = true;
        }
        this.documentType = documentType;
        this.form.documentType = documentType;
        this.stateService.setDocumentType(this.documentType);
        if (documentType === 'office') {
            this.setDivHeight();
            window.addEventListener('resize', this.setDivHeight);
            this.documentService = this.odfCreatorService;
            this.documentService.init('create-form', this.updatingForm ? this.form.text : '', 'editorContainer').then(function (data) {
                _this.documentService.setDragAndDropForSetUp();
            });
        }
        else {
            this.documentService = this.plainTextCreatorService;
            this.quillModules = this.documentService.quillModules();
            this.customOptions = this.documentService.customOptions();
            this.documentService.init('editor-container', 'editor-preview');
            this.setDivHeight();
            window.addEventListener('resize', this.setDivHeight);
        }
        this.stepModelService.init(this.form.fields, this.documentType);
    };
    CreateFormComponent.prototype.setDivHeight = function () {
        if (window.innerWidth > 885) {
            if (document.querySelector('#form-creator') !== null) {
                var newHeight = window.innerHeight - document.querySelector('#form-creator').offsetTop + 'px';
                // const toolBarOffsetTop = (document.querySelector('.ql-toolbar') as HTMLElement).offsetTop;
                // const toolBarOffsetHeight = (document.querySelector('.ql-toolbar') as HTMLElement).offsetHeight;
                // const newHeightForEditor = window.innerHeight - (toolBarOffsetTop + toolBarOffsetHeight) + 'px';
                document.querySelector('#form-creator').style.height = newHeight;
                // (document.querySelector('#editor-container') as HTMLElement).style.height = newHeightForEditor;
            }
        }
    };
    CreateFormComponent.prototype.setCurrentStep = function (stepNum) {
        var _this = this;
        this.currentStep = stepNum;
        this.formAreaDiv.nativeElement.querySelectorAll('.form-creator__fields-area__field').forEach(function (step, index) {
            if (_this.currentStep === index) {
                step.style.display = 'block';
            }
            else {
                step.style.display = 'none';
            }
        });
    };
    CreateFormComponent.prototype.nextStepAfterValidate = function () {
        console.log(this.form.fields[this.currentStep]);
        if (this.form.fields[this.currentStep]['mandatory'] && this.state === 'fill-form') {
            if (this.form.fields[this.currentStep]['type'] === 'iText') {
                if (this.form.fields[this.currentStep]['replacement'] === '') {
                    this.toastMessage('error', 'Validation error', 'This field is mandatory');
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
    CreateFormComponent.prototype.injectComponent = function (component) {
        this.componentInjectorService.appendComponentToBody('Component', component, 'formAreaDiv', 'formAreaDiv', 'divWhereIsDeleteButton', {});
        this.injectedComponents = this.formAreaDiv.nativeElement.querySelectorAll('.inputCollection');
    };
    CreateFormComponent.prototype.toogleModal = function (modal) {
        this.commonsService.toggleModal(modal, false);
    };
    /********************/
    /****END NEW FORM****/
    /********************/
    CreateFormComponent.prototype.toastMessage = function (type, message1, message2) {
        if (type === 'error') {
            this.toastr.error(message1, message2, {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
        }
        else if (type === 'success') {
            this.toastr.success(message1, message2, {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
        }
    };
    CreateFormComponent.prototype.topMenuNav = function (e) {
        this.commonsService.subMenuNav(e, this.subMenu.nativeElement);
    };
    CreateFormComponent.prototype.setAdditionalQuillButtons = function () {
        var _this = this;
        // Force check
        setTimeout(function () { _this.documentService.setAdditionalQuillButtons(_this.quill.nativeElement); }, 100);
    };
    CreateFormComponent.prototype.toggleLightbox = function (lightBox) {
        this.commonsService.toggleLightbox(lightBox, false);
    };
    CreateFormComponent.prototype.addTag = function () {
        // retrieve tag control
        var tag = this.tags.value;
        // only add tag if it does not exist yet
        if (this.form.tags.indexOf(tag) < 0) {
            this.form.tags.push(tag);
        }
        // clear the input
        this.tags.reset('');
    };
    CreateFormComponent.prototype.removeTag = function (tagName) {
        this.form.tags = this.form.tags.filter(function (tag) { return tag !== tagName; });
    };
    CreateFormComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.validate()) {
            // Checks if user has introduced any input, if not user cannot submit unless user is updating the form
            if (this.injectedComponents || this.updatingForm) {
                // saves author Form
                // saves the generated text
                if (this.documentType === 'office') {
                    if (this.state === 'fill-form') {
                        this.stateService.setState('create-form');
                        this.documentService.unsetPreview().then(function () {
                            _this.documentService.getDocumentToSave().then(function (data) {
                                _this.form.text = data;
                                _this.saveForm();
                            });
                        });
                    }
                    else {
                        this.documentService.getDocumentToSave().then(function (data) {
                            console.log(data);
                            _this.form.text = data;
                            _this.saveForm();
                        });
                    }
                }
                else {
                    this.form.text = this.quillText;
                    this.saveForm();
                }
            }
            else {
                alert('Form is empty');
            }
        }
    };
    CreateFormComponent.prototype.saveForm = function () {
        var _this = this;
        this.isSubmitting = true;
        // saves current step
        this.form.currentStep = this.currentStep;
        // update the model
        this.updateAuthorForm(this.formGroup.value);
        console.log(this.form);
        this.formService
            .save(this.form)
            .subscribe(function (form) {
            if (!_this.updatingForm) {
                _this.toastMessage('success', 'Has been created', form.title);
                _this.router.navigateByUrl('/create-form/edit/' + form.slug);
            }
            else {
                _this.toastMessage('success', 'Has been updated', form.title);
            }
            _this.isSubmitting = false;
        }, function (err) {
            _this.toastMessage('error', err.errors.message, 'Something went wrong');
            _this.isSubmitting = false;
        });
    };
    CreateFormComponent.prototype.updateAuthorForm = function (values) {
        Object.assign(this.form, values);
    };
    CreateFormComponent.prototype.deleteForm = function () {
        var _this = this;
        if (confirm('Are you sure you want to delete?')) {
            this.isDeleting = true;
            this.formService.destroy(this.form.slug)
                .subscribe(function (success) {
                _this.toastMessage('success', 'Has been deleted', _this.form.title);
                _this.router.navigateByUrl('/');
            });
        }
    };
    CreateFormComponent.prototype.validate = function () {
        if (this.form.fields.length === 0) {
            this.linkFormButton.nativeElement.click();
            this.toastMessage('error', 'There are no fields in the form', 'Form empty');
            return false;
        }
        if (this.formGroup.controls.title.invalid) {
            this.isFormValid = false;
            this.title.nativeElement.classList.add('input-error');
            this.linkInformationButton.nativeElement.click();
            this.toastMessage('error', 'Title is not valid', 'Form empty');
            return false;
        }
        else {
            this.title.nativeElement.classList.remove('input-error');
        }
        if (this.formGroup.controls.description.invalid) {
            this.isFormValid = false;
            this.description.nativeElement.classList.add('input-error');
            this.linkInformationButton.nativeElement.click();
            this.toastMessage('error', 'Description is not valid', 'Form empty');
            return false;
        }
        else {
            this.description.nativeElement.classList.remove('input-error');
        }
        return true;
    };
    CreateFormComponent.prototype.validateDescription = function (e) {
        if (e.target.value.length > 400) {
            e.target.value = e.target.value.substring(0, 400);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('quill'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateFormComponent.prototype, "quill", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formAreaDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateFormComponent.prototype, "formAreaDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formBasedDocDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateFormComponent.prototype, "formBasedDocDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputsMenuDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateFormComponent.prototype, "inputsMenuDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textPreviewDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateFormComponent.prototype, "textPreviewDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('linkFormButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateFormComponent.prototype, "linkFormButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('linkInformationButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateFormComponent.prototype, "linkInformationButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('title'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateFormComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('description'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateFormComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lightBox'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateFormComponent.prototype, "lightBox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalChooseDocument'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateFormComponent.prototype, "modalChooseDocument", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addQuestionMenuModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateFormComponent.prototype, "addQuestionMenuModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateFormComponent.prototype, "subMenu", void 0);
    CreateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-form',
            template: __webpack_require__(/*! ./create-form.component.html */ "./src/app/modules/create-form/create-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_4__["ComponentInjectorService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _core__WEBPACK_IMPORTED_MODULE_4__["FormService"],
            _core__WEBPACK_IMPORTED_MODULE_4__["CommonsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core__WEBPACK_IMPORTED_MODULE_4__["StepModelService"],
            _core__WEBPACK_IMPORTED_MODULE_4__["StateService"],
            _core__WEBPACK_IMPORTED_MODULE_4__["OdfCreatorService"],
            _core__WEBPACK_IMPORTED_MODULE_4__["PlainTextCreatorService"]])
    ], CreateFormComponent);
    return CreateFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/create-form/create-form.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/create-form/create-form.module.ts ***!
  \***********************************************************/
/*! exports provided: CreateFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFormModule", function() { return CreateFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _create_form_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-form-routing.module */ "./src/app/modules/create-form/create-form-routing.module.ts");
/* harmony import */ var _create_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-form.component */ "./src/app/modules/create-form/create-form.component.ts");
/* harmony import */ var _create_form_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-form-resolver.service */ "./src/app/modules/create-form/create-form-resolver.service.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _inputs_guide_components_input_text_guide_input_text_guide_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inputs-guide-components/input-text-guide/input-text-guide.component */ "./src/app/modules/create-form/inputs-guide-components/input-text-guide/input-text-guide.component.ts");
/* harmony import */ var _inputs_guide_components_input_radio_a_guide_input_radio_a_guide_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inputs-guide-components/input-radio-a-guide/input-radio-a-guide.component */ "./src/app/modules/create-form/inputs-guide-components/input-radio-a-guide/input-radio-a-guide.component.ts");
/* harmony import */ var _inputs_guide_components_input_radio_b_guide_input_radio_b_guide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inputs-guide-components/input-radio-b-guide/input-radio-b-guide.component */ "./src/app/modules/create-form/inputs-guide-components/input-radio-b-guide/input-radio-b-guide.component.ts");











var CreateFormModule = /** @class */ (function () {
    function CreateFormModule() {
    }
    CreateFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_create_form_component__WEBPACK_IMPORTED_MODULE_5__["CreateFormComponent"], _inputs_guide_components_input_text_guide_input_text_guide_component__WEBPACK_IMPORTED_MODULE_8__["InputTextGuideComponent"], _inputs_guide_components_input_radio_a_guide_input_radio_a_guide_component__WEBPACK_IMPORTED_MODULE_9__["InputRadioAGuideComponent"], _inputs_guide_components_input_radio_b_guide_input_radio_b_guide_component__WEBPACK_IMPORTED_MODULE_10__["InputRadioBGuideComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _create_form_routing_module__WEBPACK_IMPORTED_MODULE_4__["CreateFormRoutingModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"].forRoot()
            ],
            providers: [_create_form_resolver_service__WEBPACK_IMPORTED_MODULE_6__["CreateFormResolver"]]
        })
    ], CreateFormModule);
    return CreateFormModule;
}());



/***/ }),

/***/ "./src/app/modules/create-form/inputs-guide-components/input-radio-a-guide/input-radio-a-guide.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/create-form/inputs-guide-components/input-radio-a-guide/input-radio-a-guide.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"info-lightbox__title\">Input Radio A</h1>\n<div class=\"info-lightbox__description\">\n    <div class=\"info-lightbox__description__content\">\n        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. \n            Expedita assumenda necessitatibus veritatis? Ipsum voluptate \n            repellendus provident aut neque quia cupiditate, sit vel maiores \n            necessitatibus voluptas totam officiis. Ex, vero autem?</p>\n            <iframe src=\"https://giphy.com/embed/STqHZn9JUT7TDOPRsV\" width=\"480\" height=\"274\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>\n    </div>\n</div>\n<div class=\"info-lightbox__instructions\">\n    <div class=\"info-lightbox__instructions__content\">\n        <div class=\"info-lightbox__instructions__title\">\n            <h2>How to use it</h2>\n        </div>\n        <div class=\"info-lightbox__instructions__steps\">\n            <div class=\"info-lightbox__instructions__steps__step\">\n                <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                    Unde nihil aspernatur, omnis sapiente eveniet voluptate laudantium \n                    enim quibusdam esse! Praesentium, sunt! Voluptate, dolor nostrum. \n                    Ipsum numquam enim commodi perspiciatis? Dignissimos.</p>\n                <img src=\"https://images.unsplash.com/photo-1485439439964-39b6b5d20d7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80\" alt=\"\">\n            </div>\n            <div class=\"info-lightbox__instructions__steps__step\">\n                <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                    Unde nihil aspernatur, omnis sapiente eveniet voluptate laudantium \n                    enim quibusdam esse! Praesentium, sunt! Voluptate, dolor nostrum. \n                    Ipsum numquam enim commodi perspiciatis? Dignissimos.</p>\n                <img src=\"https://images.unsplash.com/photo-1485439439964-39b6b5d20d7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/create-form/inputs-guide-components/input-radio-a-guide/input-radio-a-guide.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/create-form/inputs-guide-components/input-radio-a-guide/input-radio-a-guide.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: InputRadioAGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRadioAGuideComponent", function() { return InputRadioAGuideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputRadioAGuideComponent = /** @class */ (function () {
    function InputRadioAGuideComponent() {
    }
    InputRadioAGuideComponent.prototype.ngOnInit = function () {
    };
    InputRadioAGuideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-radio-a-guide',
            template: __webpack_require__(/*! ./input-radio-a-guide.component.html */ "./src/app/modules/create-form/inputs-guide-components/input-radio-a-guide/input-radio-a-guide.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputRadioAGuideComponent);
    return InputRadioAGuideComponent;
}());



/***/ }),

/***/ "./src/app/modules/create-form/inputs-guide-components/input-radio-b-guide/input-radio-b-guide.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/create-form/inputs-guide-components/input-radio-b-guide/input-radio-b-guide.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  input-radio-b-guide works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/create-form/inputs-guide-components/input-radio-b-guide/input-radio-b-guide.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/create-form/inputs-guide-components/input-radio-b-guide/input-radio-b-guide.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: InputRadioBGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRadioBGuideComponent", function() { return InputRadioBGuideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputRadioBGuideComponent = /** @class */ (function () {
    function InputRadioBGuideComponent() {
    }
    InputRadioBGuideComponent.prototype.ngOnInit = function () {
    };
    InputRadioBGuideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-radio-b-guide',
            template: __webpack_require__(/*! ./input-radio-b-guide.component.html */ "./src/app/modules/create-form/inputs-guide-components/input-radio-b-guide/input-radio-b-guide.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputRadioBGuideComponent);
    return InputRadioBGuideComponent;
}());



/***/ }),

/***/ "./src/app/modules/create-form/inputs-guide-components/input-text-guide/input-text-guide.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/create-form/inputs-guide-components/input-text-guide/input-text-guide.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"info-lightbox__title\">Input Text</h1>\n<div class=\"info-lightbox__description\">\n    <div class=\"info-lightbox__description__content\">\n        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. \n            Expedita assumenda necessitatibus veritatis? Ipsum voluptate \n            repellendus provident aut neque quia cupiditate, sit vel maiores \n            necessitatibus voluptas totam officiis. Ex, vero autem?</p>\n            <iframe src=\"https://giphy.com/embed/STqHZn9JUT7TDOPRsV\" width=\"480\" height=\"274\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>\n    </div>\n</div>\n<div class=\"info-lightbox__instructions\">\n    <div class=\"info-lightbox__instructions__content\">\n        <div class=\"info-lightbox__instructions__title\">\n            <h2>How to use it</h2>\n        </div>\n        <div class=\"info-lightbox__instructions__steps\">\n            <div class=\"info-lightbox__instructions__steps__step\">\n                <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                    Unde nihil aspernatur, omnis sapiente eveniet voluptate laudantium \n                    enim quibusdam esse! Praesentium, sunt! Voluptate, dolor nostrum. \n                    Ipsum numquam enim commodi perspiciatis? Dignissimos.</p>\n                <img src=\"https://images.unsplash.com/photo-1485439439964-39b6b5d20d7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80\" alt=\"\">\n            </div>\n            <div class=\"info-lightbox__instructions__steps__step\">\n                <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                    Unde nihil aspernatur, omnis sapiente eveniet voluptate laudantium \n                    enim quibusdam esse! Praesentium, sunt! Voluptate, dolor nostrum. \n                    Ipsum numquam enim commodi perspiciatis? Dignissimos.</p>\n                <img src=\"https://images.unsplash.com/photo-1485439439964-39b6b5d20d7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/create-form/inputs-guide-components/input-text-guide/input-text-guide.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/create-form/inputs-guide-components/input-text-guide/input-text-guide.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: InputTextGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextGuideComponent", function() { return InputTextGuideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputTextGuideComponent = /** @class */ (function () {
    function InputTextGuideComponent() {
    }
    InputTextGuideComponent.prototype.ngOnInit = function () {
    };
    InputTextGuideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-text-guide',
            template: __webpack_require__(/*! ./input-text-guide.component.html */ "./src/app/modules/create-form/inputs-guide-components/input-text-guide/input-text-guide.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputTextGuideComponent);
    return InputTextGuideComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-create-form-create-form-module.js.map