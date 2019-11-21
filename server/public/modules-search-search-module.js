(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-search-search-module"],{

/***/ "./src/app/modules/search/search-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/search/search-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.component */ "./src/app/modules/search/search.component.ts");
/* harmony import */ var _search_transaction_search_transaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-transaction/search-transaction.component */ "./src/app/modules/search/search-transaction/search-transaction.component.ts");





var routes = [
    {
        path: '',
        component: _search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
    },
    {
        path: 'user-forms',
        component: _search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
    },
    {
        path: 'search-transaction',
        component: _search_transaction_search_transaction_component__WEBPACK_IMPORTED_MODULE_4__["SearchTransactionComponent"],
    }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/search/search-transaction/search-transaction.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/search/search-transaction/search-transaction.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-transaction\" #searchTransactionDiv>\n  <div class=\"search-transaction__container\">\n      <label for=\"transactionId\"></label>\n      <input type=\"text\" name=\"transactionId\" id=\"transactionId\" placeholder=\"Transaction Id\" \n      [(ngModel)]=\"transactionId\" (keyup.enter)=\"findTransaction()\" #transactionIdInput>\n      <input type=\"submit\" value=\"Find\" (click)=\"findTransaction()\">\n      <label class=\"search-transaction__container__message\">Type in the transaction id you got when you finished the form. Check you email.</label>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/search/search-transaction/search-transaction.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/search/search-transaction/search-transaction.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SearchTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTransactionComponent", function() { return SearchTransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SearchTransactionComponent = /** @class */ (function () {
    function SearchTransactionComponent(formService, commonsService, router) {
        this.formService = formService;
        this.commonsService = commonsService;
        this.router = router;
    }
    SearchTransactionComponent.prototype.ngOnInit = function () {
        window.addEventListener('resize', this.resizeDiv.bind(this));
        this.resizeDiv();
    };
    SearchTransactionComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.resizeDiv.bind(this));
    };
    SearchTransactionComponent.prototype.resizeDiv = function () {
        var menuHeight = document.querySelector('.nav').clientHeight;
        this.searchTransactionDiv.nativeElement.style.height = (window.innerHeight - menuHeight) + 'px';
    };
    SearchTransactionComponent.prototype.findTransaction = function () {
        var _this = this;
        // pt0y2tta
        this.formService.getPaidCertifiedForm(this.transactionId).subscribe(function (data) {
            if (data.certifiedForm) {
                _this.router.navigate([('/certified-forms/' + data.certifiedForm.id)], { queryParams: { transactionId: _this.transactionId } });
                _this.commonsService.toastMessage('success', 'Transaction found', 'Transaction found');
            }
            else if (data.transactionNotFound) {
                _this.transactionIdInput.nativeElement.style.borderBottom = '3px solid #C44D58';
                _this.commonsService.toastMessage('error', 'Transaction Id does not exist', 'Transaction id not found');
            }
            else if (data.formExpired) {
                _this.transactionIdInput.nativeElement.style.borderBottom = '3px solid #C44D58';
                _this.commonsService.toastMessage('error', 'The period of 30 days to change the document has expired', 'Transaction expired');
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchTransactionDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchTransactionComponent.prototype, "searchTransactionDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transactionIdInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchTransactionComponent.prototype, "transactionIdInput", void 0);
    SearchTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-transaction',
            template: __webpack_require__(/*! ./search-transaction.component.html */ "./src/app/modules/search/search-transaction/search-transaction.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["FormService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["CommonsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SearchTransactionComponent);
    return SearchTransactionComponent;
}());



/***/ }),

/***/ "./src/app/modules/search/search.component.html":
/*!******************************************************!*\
  !*** ./src/app/modules/search/search.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-menu\" #subMenu>\n    <div class=\"sub-menu__container sub-menu__container--search-page\">\n        <ul class=\"sub-menu__nav sub-menu__nav--search-page\" (click)=\"topMenuNav($event)\">\n            <li class=\"sub-menu__nav__button sub-menu__nav__button--search-page sub-menu__nav__button--current\" data-toogle=\"lawyer-forms\" (click)=\"setUrl(false)\">\n                Creados por abogados\n            </li>\n            <li class=\"sub-menu__nav__button sub-menu__nav__button--search-page\" data-toogle=\"user-forms\" (click)=\"setUrl(true)\" #userFormsTab>\n                Creados por otros usuarios\n            </li>\n        </ul>\n    </div>\n</div>\n\n<div id=\"lawyer-forms\" class=\"lawyer-forms sub-menu-target\" >\n    <div class=\"lawyer-forms__container\">\n        <div class=\"lawyer-forms__header\">\n            <div class=\"lawyer-forms__top-right-link\">\n                <span>\n                    <a routerLink=\"/search/search-transaction\">\n                        Find form by transaction id\n                    </a>\n                    <span class=\"icon icon-search\"></span>\n                </span>\n                <span>\n                    <a routerLink=\"/create-form\" *appShowAuthed=\"true\">\n                        Create my own form\n                    </a>\n                    <a routerLink=\"/auth/login\" *appShowAuthed=\"false\">\n                        Create my own form\n                    </a>\n                    <span class=\"icon icon-link-solid\"></span>\n                </span>\n            </div>\n            <div class=\"lawyer-forms__title\">\n                <h1>Documentos creados por nuestros abogados</h1>\n                <p>Mientras rellena un formulario podrá ver, en tiempo real, como un documento redactado por abogados es generado para su posterior descarga.</p>\n            </div>\n        </div>\n        <div class=\"lawyer-forms__blocks-container\">\n            <div class=\"lawyer-forms__block\">\n                <div class=\"lawyer-forms__block__title\">\n                    <span class=\"icon icon-building-solid\"></span>\n                    <h2>Empresa</h2>\n                </div>\n                <!-- Tree copied from https://gist.github.com/dylancwood/7368914 -->\n                <div class=\"tree-container\">\n                    <ul class=\"tree\">\n                        <li>\n                            <a [routerLink]=\"['/certified-forms/pacto-de-socios']\">Pacto de socios</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Prestación de servicios</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Compraventa mercantil</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Tratamiento de datos de carácter personal</a>\n                        </li>\n                        <li class=\"last\">\n                            <a href=\"#\">Constitución de Sociedad Civil</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"lawyer-forms__block\">\n                <div class=\"lawyer-forms__block__title\">\n                    <span class=\"icon icon-briefcase-solid\"></span>\n                    <h2>Laboral</h2>\n                </div>\n                <!-- Tree copied from https://gist.github.com/dylancwood/7368914 -->\n                <div class=\"tree-container\">\n                    <ul class=\"tree\">\n                        <li>\n                            <a href=\"#\">Contrato para empleado doméstico</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Contrato de trabajo para comercial</a>\n                        </li>\n                        <li class=\"last\">\n                            <a href=\"#\">Contrato de trabajo de alta dirección</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"lawyer-forms__block\">\n                <div class=\"lawyer-forms__block__title\">\n                    <span class=\"icon icon-home-solid\"></span>\n                    <h2>Laboral</h2>\n                </div>\n                <!-- Tree copied from https://gist.github.com/dylancwood/7368914 -->\n                <div class=\"tree-container\">\n                    <ul class=\"tree\">\n                        <li>\n                            <a href=\"#\">Alquiler de vivienda de corta duración</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Alquiler de vivienda con opción a compra</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Alquiler de Habitación</a>\n                        </li>\n                        <li class=\"last\">\n                            <a href=\"#\">Alquiler de plaza de garaje</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"lawyer-forms__block\">\n                <div class=\"lawyer-forms__block__title\">\n                    <span class=\"icon icon-store-alt-solid\"></span>\n                    <h2>Compraventa</h2>\n                </div>\n                <!-- Tree copied from https://gist.github.com/dylancwood/7368914 -->\n                <div class=\"tree-container\">\n                    <ul class=\"tree\">\n                        <li>\n                            <a href=\"#\">Contrato de compraventa de vivienda</a>\n                        </li>\n                        <li class=\"last\">\n                            <a [routerLink]=\"['/certified-forms/contrato-arras-penitenciales']\">Arras penitenciales</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"lawyer-forms__block\">\n                <div class=\"lawyer-forms__block__title\">\n                    <span class=\"icon icon-window-maximize-regular\"></span>\n                    <h2>Internet</h2>\n                </div>\n                <!-- Tree copied from https://gist.github.com/dylancwood/7368914 -->\n                <div class=\"tree-container\">\n                    <ul class=\"tree\">\n                        <li>\n                            <a href=\"#\">Condiciones de uso de Aplicación Móvil</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Política de cookies</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Condiciones de uso de Tienda Online</a>\n                        </li>\n                        <li class=\"last\">\n                            <a href=\"#\">Condiciones de uso de Página Web</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div id=\"user-forms\" class=\"search\" style=\"display: none\">\n    <div class=\"search__container\">\n        <div class=\"search__button\">\n            <input type=\"text\" (keyup.enter)=\"search(input.value)\" #input>\n        </div>\n        <div class=\"search__orderby\">\n            <div class=\"search__orderby__container\">\n                <label for=\"orderby\">Order by: </label>\n                <select id=\"orderby\" autofocus=\"true\" (change)=\"setOrder($event.target.value)\">\n                    <option value=\"Date\">Date</option>\n                    <option value=\"Like\">Likes</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"search__results\">\n            <div class=\"search__results__container\">\n\n                <div class=\"search__results__result\" *ngFor=\"let form of results\">\n                    <div class=\"search__results__result__document\" [routerLink]=\"['/fill-form', form.slug]\">\n                        <div class=\"search__results__result__document__container\">\n                            <div class=\"search__results__result__document__container__date\">\n                                <span>{{form.updatedAt | date: 'dd/MM/yyyy'}}</span>\n                            </div>\n                            <div class=\"search__results__result__document__container__title\">\n                                <span>{{ form.title }}</span>\n                            </div>\n                            <div class=\"search__results__result__document__container__description\">\n                                <span>{{ form.description.substring(0, 136) }}</span>\n                            </div>\n                            <div class=\"search__results__result__document__container__likes-views\">\n                                <div class=\"search__results__result__document__container__likes-views__likes\">\n                                    <span class=\"icon icon-like-button\"></span>\n                                    <span>{{ form.likesCount }}</span>\n                                </div>\n                                <div class=\"search__results__result__document__container__likes-views__views\">\n                                    <span class=\"icon icon-eye-solid\"></span>\n                                    <span>{{ form.viewsCount }}</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"search__results__result__more-info\">\n                        <div class=\"search__results__result__more-info__author\">\n                            <img src=\"{{\n                                !form.author.image ? 'assets/images/avatar.jpeg' : form.author.image\n                            }}\" alt=\"avatar\">\n                            <span [routerLink]=\"['/profile', form.author.username]\">{{ form.author.username }}</span>\n                        </div>\n                        <div class=\"search__results__result__more-info__tags\">\n                            <span>\n                                <span *ngFor=\"let tag of form.tags; let i = index\">{{tag}}<span *ngIf=\"form.tags.length !== i + 1\">, </span>\n\n                                </span>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"loader\" [style.display]=\"loadingQuery ? 'flex' : 'none'\">\n        <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n            width=\"80px\" height=\"80px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n        <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n            <animateTransform attributeType=\"xml\"\n            attributeName=\"transform\"\n            type=\"rotate\"\n            from=\"0 25 25\"\n            to=\"360 25 25\"\n            dur=\"0.6s\"\n            repeatCount=\"indefinite\"/>\n            </path>\n        </svg>\n    </div>\n    \n    <div class=\"noMoreForms\" *ngIf=\"noMoreForms === true\">\n        <h2>- No more forms to load -</h2>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/search/search.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/search/search.component.ts ***!
  \****************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(userService, searchService, commonsService, location) {
        this.userService = userService;
        this.searchService = searchService;
        this.commonsService = commonsService;
        this.location = location;
        this.listConfig = new _core__WEBPACK_IMPORTED_MODULE_2__["FormListConfig"]();
        this.loadingQuery = false;
        this.results = [];
        this.limit = 10;
        this.currentPage = 1;
        this.noMoreForms = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingQuery = true;
        this.listConfig.orderBy = 'Date';
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            _this.isAuthenticated = authenticated;
            _this.setListTo('all');
            // Load the current user's data
            _this.userService.currentUser.subscribe(function (user) {
                _this.currentUser = user.username;
            });
            _this.searchService.search(_this.listConfig)
                .subscribe(function (forms) {
                _this.loadingQuery = false;
                _this.results = forms;
            });
        });
        if (window.location.pathname === '/search/user-forms') {
            this.userFormsTab.nativeElement.click();
        }
    };
    SearchComponent.prototype.setListTo = function (type) {
        if (type === void 0) { type = ''; }
        // Takes all forms
        this.listConfig = {
            type: type,
            limit: this.limit,
            orderBy: 'Date',
            offset: (this.limit * (this.currentPage - 1)),
            query: '',
        };
    };
    SearchComponent.prototype.setVisibilityOfFooter = function (visible) {
        document.getElementsByTagName('footer')[0].hidden = visible;
    };
    SearchComponent.prototype.moreForms = function () {
        var _this = this;
        this.loadingQuery = true;
        this.setPageTo();
        // Create limit and offset filter (if necessary)
        if (this.limit) {
            this.listConfig.limit = this.limit;
            this.listConfig.offset = (this.limit * (this.currentPage - 1));
        }
        this.searchService.search(this.listConfig).subscribe(function (forms) {
            if (forms.length !== 0) {
                _this.results = _this.results.concat(forms);
                _this.setVisibilityOfFooter(true);
            }
            else {
                _this.noMoreForms = true;
                _this.setVisibilityOfFooter(false);
            }
            _this.loadingQuery = false;
        });
    };
    SearchComponent.prototype.onScroll = function () {
        if (!this.loadingQuery && this.noMoreForms === false) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                this.moreForms();
            }
        }
    };
    SearchComponent.prototype.search = function (inputSearch) {
        var _this = this;
        this.loadingQuery = true;
        this.listConfig.offset = 0;
        this.currentPage = 1;
        this.results = [];
        this.noMoreForms = false;
        this.listConfig.query = inputSearch;
        this.searchService.search(this.listConfig)
            .subscribe(function (forms) {
            _this.loadingQuery = false;
            _this.results = forms;
        });
    };
    SearchComponent.prototype.setPageTo = function () {
        this.currentPage += 1;
    };
    SearchComponent.prototype.setOrder = function (order) {
        var _this = this;
        this.loadingQuery = true;
        this.listConfig.offset = 0;
        this.currentPage = 1;
        this.results = [];
        this.noMoreForms = false;
        this.listConfig.orderBy = order;
        this.searchService.search(this.listConfig).subscribe(function (forms) {
            _this.loadingQuery = false;
            _this.results = forms;
        });
    };
    SearchComponent.prototype.topMenuNav = function (e) {
        this.commonsService.subMenuNav(e, this.subMenu.nativeElement);
    };
    SearchComponent.prototype.setUrl = function (userForms) {
        if (userForms) {
            this.location.replaceState('/search/user-forms');
        }
        else {
            this.location.replaceState('/search');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchComponent.prototype, "subMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userFormsTab'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchComponent.prototype, "userFormsTab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SearchComponent.prototype, "onScroll", null);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/modules/search/search.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["CommonsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/search/search.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/search/search.module.ts ***!
  \*************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/modules/search/search-routing.module.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.component */ "./src/app/modules/search/search.component.ts");
/* harmony import */ var _search_transaction_search_transaction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-transaction/search-transaction.component */ "./src/app/modules/search/search-transaction/search-transaction.component.ts");







var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _search_transaction_search_transaction_component__WEBPACK_IMPORTED_MODULE_6__["SearchTransactionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_4__["SearchRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-search-search-module.js.map