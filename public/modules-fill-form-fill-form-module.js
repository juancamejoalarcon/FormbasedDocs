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

module.exports = "<div id=\"sub-menu\">\n    <div class=\"sub-menu-container sub-menu-container-fill-form\">\n        <ul class=\"sub-menu-nav\" (click)=\"topMenuNav($event)\">\n            <li class=\"current\"><a href=\"form-creator\" class=\"sub-menu-button\" #linkFormButton>Form</a></li>\n            <li><a href=\"comments\" class=\"sub-menu-button\">Comments</a></li>\n        </ul>\n        <app-likes-button class=\"likes-views\" [form]=\"originalForm\"></app-likes-button>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"form-creator content\" id=\"form-creator\" #formCreatorDiv>\n        <div class=\"form-creator-container\">\n            <div class=\"fields-area\">\n                    <div class=\"fields-container fields-container-fill-formm\" id=\"listWithHandle\" #formAreaDiv (keyup)=\"generateText()\" (click)=\"generateText()\">\n                        \n                        <!-- Information label -->\n                        <div class=\"form-information-label\">\n                            <div class=\"label-top\">\n                                <div class=\"author-date\">\n                                    <div class=\"author\">\n                                        <div class=\"author-image-container\">\n                                            <img src=\"assets/images/avatar.jpg\" alt=\"avatar\">\n                                        </div>\n                                        <span [routerLink]=\"['/profile', form.author.username]\">\n                                            {{form.author.username}}\n                                        </span>\n                                    </div>\n                                    <div class=\"date\">\n                                        <span>Last updated:</span>\n                                        {{originalForm.updatedAt | date: 'dd/MM/yyyy'}}\n                                    </div>\n                                </div>\n                                <div class=\"information-modal-icon trigger-indications\"\n                                    (click)=\"toggleModal()\" *ngIf=\"form.indications !== '' && form.indications !== undefined\">\n                                    <span class=\"icon icon-info-solid\"></span>\n                                </div>\n                            </div>\n                            <div class=\"label-bottom\">\n                                <h1>{{form.title}}</h1>\n                                <p>{{form.description}}</p>\n                            </div>\n                        </div>\n\n                        <!-- Modal -->\n                        <div class=\"modal-indications\" #modal>\n                            <div class=\"modal-content-indications\">\n                                <div class=\"modal-top-indications\">\n                                    <h1>Indicaciones previas del autor</h1>\n                                </div>\n                                <div class=\"modal-middle-indications\">\n                                    <p>\n                                        {{form.indications}}\n                                    </p>\n                                </div>\n                                <div class=\"modal-bottom-indications\">\n                                    <button class=\"button close-button-indications\" (click)=\"toggleModal()\">Entendido</button>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div *ngFor=\"let field of fields\">\n                            <app-input-text *ngIf=\"field['type'] == 'iText'\" [state]=\"state\" [field]=\"field\"></app-input-text>\n                            <!-- <app-input-date *ngIf=\"field['type'] == 'iDate'\" [state]=\"state\" [field]=\"field\"></app-input-date> -->\n                            <app-input-radio-a *ngIf=\"field['type'] == 'iRadioA'\" [state]=\"state\" [field]=\"field\"></app-input-radio-a>\n                            <app-input-radio-b *ngIf=\"field['type'] == 'iRadioB'\" [state]=\"state\" [field]=\"field\"></app-input-radio-b>\n                            <app-input-radio-c *ngIf=\"field['type'] == 'iRadioC'\" [state]=\"state\" [field]=\"field\"></app-input-radio-c>\n                        </div>\n\n                    </div>\n                </div>\n            <div class=\"text-area text-area-fill-form\">\n                <!-- Create the editor container -->\n                <div id=\"editor-container\" class=\"editor-fill-form \">\n                    <div class=\"toolbar-fill-form\">\n                        <!-- <span class=\"icon icon-file-pdf-solid\"></span>\n                        <span class=\"icon icon-file-word-solid\"></span> -->\n                        <span class=\"icon icon-expand-solid expand-fill-form\" (click)=\"enableFullScreen('editor')\"></span>\n                        <button class=\"save-button-fill-form\" [disabled]=\"isSubmitting\" (click)=\"submitForm()\" *appShowAuthed=\"true\">\n                            <span class=\"icon icon-save-regular\"></span>\n                        </button>\n\n                        <button class=\"save-button-fill-form\" routerLink=\"/auth/login\" *appShowAuthed=\"false\">\n                            <span class=\"icon icon-save-regular\"></span>\n                        </button>\n                        \n                        <button class=\"button-delete-editor\" [disabled]=\"isDeleting\" *ngIf=\"updatingForm\" (click)=\"deleteForm()\">\n                            <span class=\"icon icon-trash-alt-regular\"></span>\n                        </button>\n                    </div>\n                    <div class=\"ql-editor\" id=\"editor\" #formBasedDocDiv>\n                        {{generatedText}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div id=\"comments\" class=\"content\">\n        <!-- Si el orginalForm no está cargado no se inicia aún -->\n        <app-comments [form]=\"originalForm\" class=\"comments\"\n        *ngIf=\"originalForm.title !== ''\"></app-comments>\n    </div>\n</div>"

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
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_5__);






var FillFormComponent = /** @class */ (function () {
    function FillFormComponent(formsService, userService, route, router, toastr) {
        this.formsService = formsService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        // Antes era fields: any. Estudiar si se puede usar authorForm fields
        this.fields = [];
        this.isDeleting = false;
        this.form = new _core__WEBPACK_IMPORTED_MODULE_3__["Form"]();
        this.originalForm = new _core__WEBPACK_IMPORTED_MODULE_3__["Form"]();
        this.errors = {};
        this.isSubmitting = false;
        this.updatingForm = false;
    }
    FillFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            var form = data.form;
            _this.form = form;
            _this.fields = form.fields;
            _this.generatedText = form.text;
            _this.state = form.type === 'Created' ? 'newUser' : 'editUser';
            if (form.type === 'Created') {
                _this.form.originalSlug = form.slug;
                _this.updatingForm = false;
            }
            else {
                _this.updatingForm = true;
            }
        });
        this.formsService.get(this.form.originalSlug).subscribe(function (originalForm) {
            _this.originalForm = originalForm;
        });
    };
    FillFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.setDivHeight();
        window.addEventListener('resize', this.setDivHeight);
        // Force click so it can update the value
        setTimeout(function () { _this.formAreaDiv.nativeElement.click(); }, 10);
        if (this.form.indications !== '' && this.state === 'newUser') {
            this.toggleModal();
        }
    };
    FillFormComponent.prototype.generateText = function () {
        this.formBasedDocDiv.nativeElement.innerHTML = '';
        this.generatedText = this.form.text;
        // Save user form settings
        var newFieldsToSave = [];
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            // TEXT
            if (field['type'] === 'iText') {
                var id = '#' + field['referenceNumber'];
                var regexp = new RegExp(field['referenceNumber'], 'g');
                var focused = this.formAreaDiv.nativeElement.querySelector(id) === document.activeElement;
                var valueToInsert = void 0;
                if (focused) {
                    valueToInsert = '<mark id="focused">' + this.formAreaDiv.nativeElement.querySelector(id).value + '</mark>';
                }
                else {
                    valueToInsert = '<mark>' + this.formAreaDiv.nativeElement.querySelector(id).value + '</mark>';
                }
                this.generatedText = this.generatedText.replace(regexp, valueToInsert);
                // Save user form settings
                field['value'] = this.formAreaDiv.nativeElement.querySelector(id).value;
            }
            // DATE
            // if (field['type'] === 'iDate') {
            //   const id = '#' + field['referenceNumber'];
            //   const regexp = new RegExp(field['referenceNumber'], 'g');
            //   const valueToInsert = '<mark>' + this.formAreaDiv.nativeElement.querySelector(id).value + '</mark>';
            //   this.generatedText = this.generatedText.replace(regexp, valueToInsert);
            //   // Save user form settings
            //   field['value'] = this.formAreaDiv.nativeElement.querySelector(id).value;
            // }
            // RADIO A
            if (field['type'] === 'iRadioA') {
                var radios = this.formAreaDiv.nativeElement.querySelectorAll('.' + field.referenceNumber);
                // We check the radio button selected and save the value in a variable
                for (var i = 0, length_1 = radios.length; i < length_1; i++) {
                    if (radios[i].checked) {
                        var regexp = new RegExp(field['referenceNumber'], 'g');
                        var focused = radios[i] === document.activeElement;
                        var valueToInsert = void 0;
                        if (focused) {
                            valueToInsert = '<mark id="focused">' + [radios[i].value] + '</mark>';
                        }
                        else {
                            valueToInsert = '<mark>' + [radios[i].value] + '</mark>';
                        }
                        this.generatedText = this.generatedText.replace(regexp, valueToInsert);
                        field['value'] = radios[i].value;
                        // only one radio can be logically checked, don't check the rest
                        break;
                    }
                }
            }
            // RADIO B
            if (field['type'] === 'iRadioB') {
                var radios = this.formAreaDiv.nativeElement.querySelectorAll('.' + field.referenceNumber);
                // We check the radio button selected and save the value in a variable
                for (var i = 0, length_2 = radios.length; i < length_2; i++) {
                    if (radios[i].checked) {
                        var regexp = new RegExp(field['referenceNumber'], 'g');
                        var focused = radios[i] === document.activeElement;
                        var valueToInsert = void 0;
                        if (focused) {
                            valueToInsert = '<mark id="focused">' + [radios[i].value] + '</mark>';
                        }
                        else {
                            valueToInsert = '<mark>' + [radios[i].value] + '</mark>';
                        }
                        this.generatedText = this.generatedText.replace(regexp, valueToInsert);
                        field.radios[i]['checked'] = true;
                        // only one radio can be logically checked, don't check the rest
                    }
                    else {
                        field.radios[i]['checked'] = false;
                    }
                }
            }
            // RADIO C
            if (field['type'] === 'iRadioC') {
                var radios = this.formAreaDiv.nativeElement.querySelectorAll('.' + field.referenceNumber);
                // We check the radio button selected and save the value in a variable
                for (var i = 0, length_3 = radios.length; i < length_3; i++) {
                    field.radios[i]['data-contentToExport'] = radios[i].getAttribute('data-contentToExport');
                    if (radios[i].checked) {
                        var regexp = new RegExp(field['referenceNumber'], 'g');
                        var focused = radios[i] === document.activeElement;
                        var valueToInsert = void 0;
                        if (focused) {
                            valueToInsert = '<mark id="focused">' + [radios[i].getAttribute('data-texto')] + '</mark>';
                        }
                        else {
                            valueToInsert = '<mark>' + [radios[i].getAttribute('data-texto')] + '</mark>';
                        }
                        this.generatedText = this.generatedText.replace(regexp, valueToInsert);
                        field.radios[i]['checked'] = true;
                    }
                    else {
                        field.radios[i]['checked'] = false;
                    }
                }
            }
            // Save user form settings
            newFieldsToSave.push(field);
        }
        // Save user form settings
        this.form.fields = newFieldsToSave;
        this.formBasedDocDiv.nativeElement.insertAdjacentHTML('beforeend', this.generatedText);
        var focusedElement = document.getElementById('focused');
        if (focusedElement) {
            focusedElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    FillFormComponent.prototype.submitForm = function () {
        var _this = this;
        // Saves author Form
        this.generateText();
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
    // UTILITY
    FillFormComponent.prototype.setDivHeight = function () {
        if (window.innerWidth > 885) {
            if (document.querySelector('#form-creator') !== null) {
                var newHeight = window.innerHeight - document.querySelector('#form-creator').offsetTop + 'px';
                // const toolBarOffsetTop = (document.querySelector('.ql-toolbar') as HTMLElement).offsetTop;
                // const toolBarOffsetHeight = (document.querySelector('.ql-toolbar') as HTMLElement).offsetHeight;
                // const newHeightForEditor = window.innerHeight - (toolBarOffsetTop + toolBarOffsetHeight) + 'px';
                document.querySelector('#form-creator').style.height = newHeight;
                document.querySelector('#editor-container').style.height = newHeight;
            }
        }
    };
    FillFormComponent.prototype.topMenuNav = function (e) {
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
    FillFormComponent.prototype.toggleModal = function () {
        this.modal.nativeElement.classList.toggle('show-modal');
    };
    FillFormComponent.prototype.enableFullScreen = function (id) {
        var el = document.getElementById(id);
        if (screenfull__WEBPACK_IMPORTED_MODULE_5__ && screenfull__WEBPACK_IMPORTED_MODULE_5__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_5__["request"](el);
        }
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
    FillFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fill-form',
            template: __webpack_require__(/*! ./fill-form.component.html */ "./src/app/modules/fill-form/fill-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["FormService"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
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
/* harmony import */ var _likes_button_likes_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./likes-button/likes-button.component */ "./src/app/modules/fill-form/likes-button/likes-button.component.ts");








var FillFormModule = /** @class */ (function () {
    function FillFormModule() {
    }
    FillFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_fill_form_component__WEBPACK_IMPORTED_MODULE_5__["FillFormComponent"], _likes_button_likes_button_component__WEBPACK_IMPORTED_MODULE_7__["LikesButtonComponent"]],
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



/***/ }),

/***/ "./src/app/modules/fill-form/likes-button/likes-button.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/fill-form/likes-button/likes-button.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"likes\" *appShowAuthed=\"false\">\n    <span class=\"icon icon-like-button\"></span>\n    <span>&emsp; {{ form.likesCount }}</span>\n</div>\n<div class=\"likes\" *appShowAuthed=\"true\">\n    <span class=\"icon icon-like-button like-form-button\" (click)=\"disLikeForm()\" *ngIf=\"form.liked\"></span>\n    <span class=\"icon icon-thumbs-up-regular like-form-button\" (click)=\"likeForm()\" *ngIf=\"!form.liked\"></span>\n    <span>&emsp; {{ form.likesCount }}</span>\n</div>\n<div class=\"views\">\n    <span class=\"icon icon-eye-solid\"></span>\n    <span> &emsp; {{ form.viewsCount }}</span>\n</div>"

/***/ }),

/***/ "./src/app/modules/fill-form/likes-button/likes-button.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/fill-form/likes-button/likes-button.component.ts ***!
  \**************************************************************************/
/*! exports provided: LikesButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesButtonComponent", function() { return LikesButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");



var LikesButtonComponent = /** @class */ (function () {
    function LikesButtonComponent(formsService, userService) {
        this.formsService = formsService;
        this.userService = userService;
    }
    LikesButtonComponent.prototype.ngOnInit = function () { };
    LikesButtonComponent.prototype.likeForm = function () {
        var _this = this;
        this.form.liked = true;
        this.form.likesCount += 1;
        this.formsService.like(this.form.slug).subscribe(function (form) {
            _this.form.liked = true;
        });
    };
    LikesButtonComponent.prototype.disLikeForm = function () {
        var _this = this;
        this.form.liked = false;
        this.form.likesCount -= 1;
        this.formsService.disLike(this.form.slug).subscribe(function (data) {
            _this.form.liked = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core__WEBPACK_IMPORTED_MODULE_2__["Form"])
    ], LikesButtonComponent.prototype, "form", void 0);
    LikesButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-likes-button',
            template: __webpack_require__(/*! ./likes-button.component.html */ "./src/app/modules/fill-form/likes-button/likes-button.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["FormService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LikesButtonComponent);
    return LikesButtonComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-fill-form-fill-form-module.js.map