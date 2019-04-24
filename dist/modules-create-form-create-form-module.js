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

module.exports = "<div id=\"sub-menu\">\n    <div class=\"sub-menu-container\">\n        <div class=\"sub-menu-left-button\">\n            <button routerLink=\"/guide\" class=\"button\">Guide</button>\n        </div>\n        <ul class=\"sub-menu-nav\" (click)=\"topMenuNav($event)\">\n            <li class=\"current\"><a href=\"form-creator\" class=\"sub-menu-button\" #linkFormButton>Form</a></li>\n            <li ><a href=\"information\" class=\"sub-menu-button\" #linkInformationButton>Information</a></li>\n            <li *ngIf=\"state === 'editAuthor'\"><a href=\"comments\" class=\"sub-menu-button\">Comments</a></li>\n        </ul>\n        <div class=\"sub-menu-right-button\">\n            <span class=\"sub-menu-right-button\">Preview</span>\n            <label class=\"switch\">\n                <input type=\"checkbox\" (change)=\"preview(); generateText();\">\n                <span class=\"slider round\"></span>\n            </label>\n        </div>\n    </div>\n</div>\n<div class=\"container\" #formBasedDocDiv>\n    <div class=\"form-creator content\" id=\"form-creator\" #formCreatorDiv>\n        <div class=\"form-creator-container\">\n            <div class=\"fields-area\">\n                    <div class=\"fields-container\" #formAreaDiv id=\"formAreaDiv\" (keyup)=\"generateText()\" (click)=\"generateText()\">\n                        <div *ngIf=\"state === 'editAuthor'\">\n                            <div *ngFor=\"let field of fields\">\n                                <app-input-text *ngIf=\"field['type'] == 'iText'\" [state]=\"state\" [field]=\"field\"></app-input-text>\n                                <!-- <app-input-date *ngIf=\"field['type'] == 'iDate'\" [state]=\"state\" [field]=\"field\"></app-input-date> -->\n                                <app-input-radio-a *ngIf=\"field['type'] == 'iRadioA'\" [state]=\"state\" [field]=\"field\"></app-input-radio-a>\n                                <app-input-radio-b *ngIf=\"field['type'] == 'iRadioB'\" [state]=\"state\" [field]=\"field\"></app-input-radio-b>\n                                <app-input-radio-c *ngIf=\"field['type'] == 'iRadioC'\" [state]=\"state\" [field]=\"field\"></app-input-radio-c>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"add-question-button d-block\">\n                        <div class=\"tooltip\" (click)=\"toogleQuestionMenu($event)\">\n                            <span class=\"icon icon-plus-solid\" id=\"add-question-button\"></span>\n                            <span class=\"add-question-menu\" #addQuestionMenuDiv>\n                                <span class=\"icon icon-times-solid close-question-menu\"></span>\n                                <div class=\"group\">\n                                    <span>Text</span>\n                                    <div class=\"buttons-group\">\n                                        <button (click)=\"injectComponent(inputs[0])\">Text</button>\n                                    </div>\n                                </div>\n                                <div class=\"group\">\n                                    <span>Radio</span>\n                                    <div class=\"buttons-group\">\n                                        <button (click)=\"injectComponent(inputs[1])\">Radio a</button>\n                                        <button (click)=\"injectComponent(inputs[2])\">Radio b</button>\n                                        <button (click)=\"injectComponent(inputs[3])\">Radio c</button>\n                                    </div>\n                                </div>\n                                <div class=\"group\">\n                                    <span>Others</span>\n                                    <div class=\"buttons-group\">\n                                        <button>Date</button>\n                                    </div>\n                                </div>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            <div class=\"text-area\">\n                <div id=\"expand-editor-button\" class=\"d-flex\">\n                    <span class=\"icon icon-expand-solid\" (click)=\"enableFullScreen('editor-container')\"></span>\n                    <button class=\"save-button-editor\" [disabled]=\"isSubmitting\" (click)=\"submitForm()\">\n                        <span class=\"icon icon-save-regular\"></span>\n                    </button>\n                    <button class=\"button-delete-editor\" *ngIf=\"updatingForm\"\n                    [ngClass]=\"{disabled: isDeleting}\" (click)=\"deleteForm()\">\n                        <span class=\"icon icon-trash-alt-regular\"></span>\n                    </button>\n                </div>\n                <div id=\"expand-editor-button\" class=\"d-none-flex\" (click)=\"enableFullScreen('editor-preview')\">\n                    <span class=\"icon icon-expand-solid\"></span>\n                </div>\n                <!-- Create the editor container -->\n                <div id=\"editor-container\" class=\"d-block\">\n                    <quill-editor id=\"editor\" (onContentChanged)=\"quillText = $event.html\" \n                                [ngModel]=\"quillText\" [ngModelOptions]=\"{standalone: true}\" \n                                [customOptions]=\"customOptions\" [modules]=\"quillModules\"\n                                 #quill></quill-editor>\n                </div>\n                <div class=\"d-none ql-editor textToGeneratePreview\" id=\"editor-preview\" #textPreviewDiv>{{textPreview}}</div>\n            </div>\n        </div>\n    </div>\n    <div id=\"information\" class=\"content\">\n        <app-list-errors class=\"information-error\" [errors]=\"errors\"></app-list-errors>\n        <form [formGroup]=\"formGroup\" class=\"information\">\n            <div class=\"information-container\">\n                <div class=\"section-left\">\n                    <input formControlName=\"title\" type=\"text\" placeholder=\"Título\" #title>\n                    <textarea formControlName=\"description\" name=\"description\" id=\"description\" cols=\"30\" rows=\"6\" placeholder=\"description\" #description (keyup)=validateDescription($event)></textarea>\n                    <textarea formControlName=\"indications\" name=\"indications\" id=\"indications\" cols=\"30\" rows=\"10\" placeholder=\"indications\"></textarea>\n                </div>\n                <div class=\"section-right\">\n                    <div class=\"information-tags\">\n                        <input type=\"text\" placeholder=\"tags\"\n                                [formControl]=\"tags\" (keyup.enter)=\"addTag()\" >\n                        <div class=\"tags-container\">\n                            <span class=\"tag\" *ngFor=\"let tag of form.tags\">\n                                <span class=\"tag-container\">\n                                    {{ tag }} <span class=\"icon icon-times-solid\" (click)=\"removeTag(tag)\"></span>\n                                </span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"information-buttons\">\n                        <div class=\"information-switch-button\">\n                            <label class=\"switch\">\n                                <input type=\"checkbox\" checked formControlName=\"public\">\n                                <span class=\"slider round\"></span>\n                            </label>\n                            <span class=\"information-switch-button-label\">\n                                Formulario público\n                            </span>\n                        </div>\n                        <div class=\"information-switch-button\">\n                            <label class=\"switch\">\n                                <input type=\"checkbox\" checked formControlName=\"commentsEnabled\">\n                                <span class=\"slider round\"></span>\n                            </label>\n                            <span class=\"information-switch-button-label\">\n                                Comentarios activos\n                            </span>\n                        </div>\n                        <div class=\"information-switch-button\">\n                            <label class=\"switch\">\n                                <input type=\"checkbox\" checked formControlName=\"enabled\">\n                                <span class=\"slider round\"></span>\n                            </label>\n                            <span class=\"information-switch-button-label\">\n                                Formulario activo\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"information-notifications\">\n                        <span class=\"information-notifications-title\">Activar notificaciones</span>\n                        <div class=\"information-notifications-checkboxes\">\n                            <div class=\"form-group\">\n                                <input type=\"checkbox\" name=\"notifications\" id=\"notifications\" value=\"Notifications\" checked>\n                                <label for=\"notifications\">&emsp;Comentarios</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n        <div class=\"save-form-button\">\n            <button class=\"save-button\" [disabled]=\"isSubmitting\" (click)=\"submitForm()\">\n                <span class=\"icon icon-save-regular\"></span>\n            </button>\n            <button class=\"save-button button-delete\" *ngIf=\"updatingForm\"\n            [ngClass]=\"{disabled: isDeleting}\" (click)=\"deleteForm()\">\n                <span class=\"icon icon-trash-alt-regular\"></span>\n            </button>\n        </div>\n    </div>\n    <div id=\"comments\" class=\"content\" *ngIf=\"state === 'editAuthor'\">\n        <app-comments [form]=\"form\" class=\"comments\"></app-comments>\n    </div>\n</div>"

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
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/Sortable.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_8__);









var CreateFormComponent = /** @class */ (function () {
    function CreateFormComponent(componentInjectorService, elementRef, renderer, formService, commonsService, route, router, fb, toastr) {
        this.componentInjectorService = componentInjectorService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.formService = formService;
        this.commonsService = commonsService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
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
    // LIFE CYCLE HOOKS
    CreateFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If there's a form prefetched, load it
        this.route.data.subscribe(function (data) {
            if (data.form) {
                _this.quillText = data.form.text;
                _this.textPreview = data.form.text;
                _this.form = data.form;
                _this.formGroup.patchValue(data.form);
                _this.fields = _this.form.fields;
                // Recompose the id to update the form
                for (var _i = 0, _a = _this.form.fields; _i < _a.length; _i++) {
                    var field = _a[_i];
                    field['id'] = field['type'] + field['referenceNumber'];
                }
                _this.updatingForm = true;
                _this.state = 'editAuthor';
            }
            else {
                _this.state = 'newAuthor';
                _this.updatingForm = false;
            }
        });
        this.quillConfig();
    };
    CreateFormComponent.prototype.ngAfterViewInit = function () {
        this.setDivHeight();
        window.addEventListener('resize', this.setDivHeight);
        this.enableSortablejs();
    };
    CreateFormComponent.prototype.injectComponent = function (component) {
        this.componentInjectorService.appendComponentToBody('Component', component, 'formAreaDiv', 'formAreaDiv', 'divWhereIsDeleteButton', {});
        this.injectedComponents = this.formAreaDiv.nativeElement.querySelectorAll('.inputCollection');
    };
    CreateFormComponent.prototype.preview = function () {
        this.commonsService.replaceClassDnoneForDblock(this.formBasedDocDiv);
        this.commonsService.replaceClassDnoneflexForDflex(this.formBasedDocDiv);
        this.commonsService.replaceClassDnonegridForDgrid(this.formBasedDocDiv);
        this.commonsService.replaceOtherClasses(this.formBasedDocDiv);
    };
    CreateFormComponent.prototype.generateText = function () {
        this.injectedComponents = this.formAreaDiv.nativeElement.querySelectorAll('.inputCollection');
        var valuesToInsert = {};
        // Clean the authorForm.fields so when updating it doesn't duplicate inputs to save
        this.form.fields = [];
        var _loop_1 = function (injectedComponent) {
            // ÑAPA ALERT: buscar un método mejor para esto please
            var firstParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var secondParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var thirdParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var fourthParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            if (this_1.checkIfParentIsCurrentDiv(firstParent, secondParent, thirdParent, fourthParent)) {
                // TEXT
                if (injectedComponent.id.includes('iText')) {
                    var idWithOutFilter = injectedComponent.id.replace('iText', '');
                    if (injectedComponent === document.activeElement) {
                        valuesToInsert['focused' + idWithOutFilter] = [injectedComponent.value];
                    }
                    else {
                        valuesToInsert[idWithOutFilter] = [injectedComponent.value];
                    }
                    // Save
                    var newField = {
                        type: 'iText',
                        referenceNumber: idWithOutFilter,
                        question: this_1.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter).value,
                        indications: this_1.formAreaDiv.nativeElement.querySelector('.indications' + idWithOutFilter).value,
                        mandatory: this_1.formAreaDiv.nativeElement.querySelector('.mandatory' + idWithOutFilter).checked
                    };
                    this_1.form.fields.push(newField);
                }
                // RADIO-A
                if (injectedComponent.id.includes('iRadioA') === true) {
                    var idWithOutFilter = injectedComponent.id.replace('iRadioA', '');
                    var name_1 = 'input[name="' + ('name' + idWithOutFilter) + '"]';
                    var radios = this_1.formAreaDiv.nativeElement.querySelector('#' + injectedComponent.id).querySelectorAll(name_1);
                    for (var i = 0, length_1 = radios.length; i < length_1; i++) {
                        if (radios[i].checked) {
                            if (radios[i] === document.activeElement) {
                                valuesToInsert['focused' + idWithOutFilter] = [radios[i].value];
                            }
                            else {
                                valuesToInsert[idWithOutFilter] = [radios[i].value];
                            }
                            // only one radio can be logically checked
                            break;
                        }
                    }
                    // Save
                    var newField = {
                        type: 'iRadioA',
                        referenceNumber: idWithOutFilter,
                        radios: Array.prototype.slice.call(radios).map(function (radio) { return radio.value; }),
                        question: this_1.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter).value,
                        indications: this_1.formAreaDiv.nativeElement.querySelector('.indications' + idWithOutFilter).value,
                        mandatory: this_1.formAreaDiv.nativeElement.querySelector('.mandatory' + idWithOutFilter).checked
                    };
                    this_1.form.fields.push(newField);
                }
                // RADIO-B
                if (injectedComponent.id.includes('iRadioB') === true) {
                    var idWithOutFilter_1 = injectedComponent.id.replace('iRadioB', '');
                    var name_2 = 'input[name="' + ('name' + idWithOutFilter_1) + '"]';
                    var radios = this_1.formAreaDiv.nativeElement.querySelector('#' + injectedComponent.id).querySelectorAll(name_2);
                    for (var i = 0, length_2 = radios.length; i < length_2; i++) {
                        if (radios[i].checked) {
                            if (radios[i] === document.activeElement) {
                                valuesToInsert['focused' + idWithOutFilter_1] = [radios[i].parentNode.parentNode.querySelector('.name' + idWithOutFilter_1).value];
                            }
                            else {
                                valuesToInsert[idWithOutFilter_1] = [radios[i].parentNode.parentNode.querySelector('.name' + idWithOutFilter_1).value];
                            }
                            // only one radio can be logically checked
                            break;
                        }
                    }
                    // Save form settings
                    var newField = {
                        type: 'iRadioB',
                        referenceNumber: idWithOutFilter_1,
                        radios: Array.prototype.slice.call(radios).map(function (rad) {
                            var radio = {
                                radio: rad.value,
                                value: rad.parentNode.parentNode.querySelector('.name' + idWithOutFilter_1).value,
                                referenceNumber: idWithOutFilter_1,
                            };
                            return radio;
                        }),
                        question: this_1.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter_1).value,
                        indications: this_1.formAreaDiv.nativeElement.querySelector('.indications' + idWithOutFilter_1).value,
                        mandatory: this_1.formAreaDiv.nativeElement.querySelector('.mandatory' + idWithOutFilter_1).checked
                    };
                    this_1.form.fields.push(newField);
                }
                // RADIO-C
                if (injectedComponent.id.includes('iRadioC') === true) {
                    var idWithOutFilter_2 = injectedComponent.id.replace('iRadioC', '');
                    var name_3 = 'input[name="' + ('name' + idWithOutFilter_2) + '"]';
                    var radios = this_1.formAreaDiv.nativeElement.querySelectorAll(name_3);
                    for (var i = 0, length_3 = radios.length; i < length_3; i++) {
                        if (radios[i].checked) {
                            valuesToInsert[idWithOutFilter_2] = [radios[i].getAttribute('data-texto')];
                            // only one radio can be logically checked
                            break;
                        }
                    }
                    // Save form settings
                    var newField = {
                        type: 'iRadioC',
                        referenceNumber: idWithOutFilter_2,
                        radios: Array.prototype.slice.call(radios).map(function (rad) {
                            var radio = {
                                radio: rad.value,
                                value: rad.getAttribute('data-contentToExport'),
                                referenceNumber: idWithOutFilter_2,
                                randomId: rad.id
                            };
                            return radio;
                        }),
                        question: this_1.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter_2).value,
                        indications: this_1.formAreaDiv.nativeElement.querySelector('.indications' + idWithOutFilter_2).value,
                        mandatory: this_1.formAreaDiv.nativeElement.querySelector('.mandatory' + idWithOutFilter_2).checked
                    };
                    this_1.form.fields.push(newField);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.injectedComponents; _i < _a.length; _i++) {
            var injectedComponent = _a[_i];
            _loop_1(injectedComponent);
        }
        var isValuestoInsertEmpty = Object.entries(valuesToInsert).length === 0 && valuesToInsert.constructor === Object;
        if (isValuestoInsertEmpty) {
            this.textPreview = this.quillText;
        }
        else {
            this.textPreview = this.commonsService.replaceIdsWithValues(valuesToInsert, this.quillText);
        }
        while (this.textPreviewDiv.nativeElement.firstChild) {
            this.textPreviewDiv.nativeElement.removeChild(this.textPreviewDiv.nativeElement.firstChild);
        }
        this.textPreviewDiv.nativeElement.insertAdjacentHTML('beforeend', this.textPreview);
        var focusedElement = document.getElementById('focused');
        if (focusedElement) {
            focusedElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    CreateFormComponent.prototype.checkIfParentIsCurrentDiv = function (firstParent, secondParent, thirdParent, fourthParent) {
        if (firstParent.id.includes('formAreaDiv') || secondParent.id.includes('formAreaDiv')
            || thirdParent.id.includes('formAreaDiv') || fourthParent.id.includes('formAreaDiv')) {
            return true;
        }
        else {
            return false;
        }
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
    CreateFormComponent.prototype.updateAuthorForm = function (values) {
        Object.assign(this.form, values);
    };
    CreateFormComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.validate()) {
            // Checks if user has introduced any input, if not user cannot submit unless user is updating the form
            if (this.injectedComponents || this.updatingForm) {
                // saves author Form
                this.generateText();
                // saves the generated text
                this.form.text = this.quillText;
                this.isSubmitting = true;
                // update the model
                this.updateAuthorForm(this.formGroup.value);
                this.formService
                    .save(this.form)
                    .subscribe(function (form) {
                    if (!_this.updatingForm) {
                        _this.toastr.success('Has been created', form.title, {
                            positionClass: 'toast-bottom-right',
                            progressBar: true,
                            progressAnimation: 'decreasing'
                        });
                        _this.router.navigateByUrl('/create-form/edit/' + form.slug);
                    }
                    else {
                        _this.toastr.success('Has been updated', form.title, {
                            positionClass: 'toast-bottom-right',
                            progressBar: true,
                            progressAnimation: 'decreasing'
                        });
                    }
                    _this.isSubmitting = false;
                }, function (err) {
                    _this.errors = err;
                    _this.isSubmitting = false;
                });
            }
            else {
                alert('Form is empty');
            }
        }
    };
    CreateFormComponent.prototype.validate = function () {
        if (this.form.fields.length === 0) {
            this.linkFormButton.nativeElement.click();
            this.toastr.error('There are no fields in the form', 'Form empty', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
            return false;
        }
        if (this.formGroup.controls.title.invalid) {
            this.isFormValid = false;
            this.title.nativeElement.classList.add('input-error');
            this.linkInformationButton.nativeElement.click();
            this.toastr.error('Title is not valid', 'Form empty', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
            return false;
        }
        else {
            this.title.nativeElement.classList.remove('input-error');
        }
        if (this.formGroup.controls.description.invalid) {
            this.isFormValid = false;
            this.description.nativeElement.classList.add('input-error');
            this.linkInformationButton.nativeElement.click();
            this.toastr.error('Description is not valid', 'Form empty', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
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
    CreateFormComponent.prototype.deleteForm = function () {
        var _this = this;
        if (confirm('Are you sure you want to delete?')) {
            this.isDeleting = true;
            this.formService.destroy(this.form.slug)
                .subscribe(function (success) {
                _this.toastr.success('Has been deleted', _this.form.title, {
                    positionClass: 'toast-bottom-right',
                    progressBar: true,
                    progressAnimation: 'decreasing'
                });
                _this.router.navigateByUrl('/');
            });
        }
    };
    // UTILITY
    CreateFormComponent.prototype.quillConfig = function () {
        this.customOptions = [{
                import: 'formats/font',
                whitelist: ['roboto', 'times-new-roman', 'arial', 'lato', 'montserrat']
            }];
        this.quillModules = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': ['black', 'grey', '#556270', '#4ECDC4', '#C44D58', '#FF6B6B', '#C7F464'] },
                    { 'background': [] }],
                [{ 'font': ['', 'roboto', 'times-new-roman', 'arial', 'lato', 'montserrat'] }],
                [{ 'align': [] }],
                ['clean']
            ]
        };
    };
    CreateFormComponent.prototype.setDivHeight = function () {
        if (window.innerWidth > 885) {
            if (document.querySelector('#form-creator') !== null) {
                var newHeight = window.innerHeight - document.querySelector('#form-creator').offsetTop + 'px';
                var toolBarOffsetTop = document.querySelector('.ql-toolbar').offsetTop;
                var toolBarOffsetHeight = document.querySelector('.ql-toolbar').offsetHeight;
                var newHeightForEditor = window.innerHeight - (toolBarOffsetTop + toolBarOffsetHeight) + 'px';
                document.querySelector('#form-creator').style.height = newHeight;
                document.querySelector('#editor-container').style.height = newHeightForEditor;
            }
        }
    };
    CreateFormComponent.prototype.topMenuNav = function (e) {
        e.preventDefault();
        var menuLinks = document.querySelectorAll('.sub-menu-button');
        var contentSection = document.querySelector('.container');
        var contentDivs = document.querySelectorAll('.content');
        if (e.target.tagName === 'A') {
            if (!e.target.classList.contains('current')) {
                // Remove class current from menu buttons
                menuLinks.forEach(function (button) {
                    button.parentElement.classList.remove('current');
                });
                e.target.parentElement.classList.add('current');
                var target_1 = e.target.getAttribute('href');
                contentSection.classList.add('animation-outro');
                contentSection.classList.remove('animation-intro');
                setTimeout(function () {
                    contentDivs.forEach(function (div) {
                        if (div.id === target_1) {
                            div.style.display = 'flex';
                        }
                        else {
                            div.style.display = 'none';
                        }
                    });
                    contentSection.classList.add('animation-intro');
                    contentSection.classList.remove('animation-outro');
                }, 400);
            }
        }
    };
    CreateFormComponent.prototype.toogleQuestionMenu = function (e) {
        // Relocate menu
        var navHeight = document.querySelector('#form-creator').offsetTop;
        var questionNavHeight = this.addQuestionMenuDiv.nativeElement.offsetTop;
        if (questionNavHeight < navHeight) {
            this.addQuestionMenuDiv.nativeElement.style.transform = "translateY(" + navHeight + "px)";
        }
        else {
            this.addQuestionMenuDiv.nativeElement.style.transform = "translateY(0px)";
        }
        if (this.addQuestionMenuDiv.nativeElement.style.display === 'block') {
            if (e.target.classList.contains('close-question-menu') || e.target.tagName === 'BUTTON') {
                this.addQuestionMenuDiv.nativeElement.style.display = 'none';
                this.addQuestionMenuDiv.nativeElement.classList.remove('smooth-intro');
            }
        }
        else {
            this.addQuestionMenuDiv.nativeElement.style.display = 'block';
            this.addQuestionMenuDiv.nativeElement.classList.add('smooth-intro');
        }
    };
    CreateFormComponent.prototype.enableSortablejs = function () {
        var content = document.querySelector('#formAreaDiv');
        var sortable = sortablejs__WEBPACK_IMPORTED_MODULE_7__["create"](content, {
            handle: '.dragAndDropBotton',
            scrollSensitivity: 200,
            scroll: true,
            ghostClass: 'ghost',
            animation: 300,
            fallbackTolerance: 40,
            dragClass: 'sortable-drag'
        });
    };
    CreateFormComponent.prototype.enableFullScreen = function (id) {
        var el = document.getElementById(id);
        if (screenfull__WEBPACK_IMPORTED_MODULE_8__ && screenfull__WEBPACK_IMPORTED_MODULE_8__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_8__["request"](el);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addQuestionMenuDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateFormComponent.prototype, "addQuestionMenuDiv", void 0);
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
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
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








var CreateFormModule = /** @class */ (function () {
    function CreateFormModule() {
    }
    CreateFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_create_form_component__WEBPACK_IMPORTED_MODULE_5__["CreateFormComponent"]],
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



/***/ })

}]);
//# sourceMappingURL=modules-create-form-create-form-module.js.map