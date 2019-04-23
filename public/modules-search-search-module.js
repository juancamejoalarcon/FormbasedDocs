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




var routes = [
    {
        path: '',
        component: _search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
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

/***/ "./src/app/modules/search/search.component.html":
/*!******************************************************!*\
  !*** ./src/app/modules/search/search.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"search\">\n  <div class=\"search-container\">\n      <div class=\"search-button\">\n          <input type=\"text\" (keyup.enter)=\"search(input.value)\" #input>\n      </div>\n      <div class=\"orderby-search\">\n          <div class=\"orderby-search-container\">\n              <label for=\"orderby\">Order by: </label>\n              <select id=\"orderby\" autofocus=\"true\" (change)=\"setOrder($event.target.value)\">\n                  <option value=\"Date\">Date</option>\n                  <option value=\"Likes\">Likes</option>\n                  <option value=\"Views\">Views</option>\n              </select>\n          </div>\n      </div>\n      <div class=\"search-results\">\n          <div class=\"search-results-container\">\n\n              <div class=\"result\" *ngFor=\"let form of results\">\n                  <div class=\"document\">\n                      <div class=\"document-container\">\n                          <div class=\"date\">\n                              <span>{{form.updatedAt | date: 'dd/MM/yyyy'}}</span>\n                          </div>\n                          <div class=\"title\">\n                            <span [routerLink]=\"['/fill-form', form.slug]\">\n                                {{ form.title }}\n                            </span>\n                          </div>\n                          <div class=\"description\">\n                              <span>{{ form.description.substring(0, 136) }}</span>\n                          </div>\n                          <div class=\"likes-views\">\n                              <div class=\"likes\">\n                                  <span class=\"icon icon-like-button\"></span>\n                                  <span>{{ form.likesCount }}</span>\n                              </div>\n                              <div class=\"views\">\n                                  <span class=\"icon icon-eye-solid\"></span>\n                                  <span>{{ form.viewsCount }}</span>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"more-info\">\n                    <div class=\"author\">\n                        <img src=\"{{\n                            form.author.image === null ? 'assets/images/avatar.jpeg' : form.author.image\n                        }}\" alt=\"avatar\">\n                        <span class=\"profile-link\" [routerLink]=\"['/profile', form.author.username]\">\n                            {{ form.author.username }}\n                        </span>\n                    </div>\n                  </div>\n              </div>\n              \n\n          </div>\n      </div>\n  </div>\n</section>\n\n<!--Div is shown when there no author forms-->\n<!-- <div [hidden]=\"loading || results.length\">No Forms are here... yet.</div> -->\n\n<div class=\"loader\" [style.display]=\"loadingQuery ? 'flex' : 'none'\">\n    <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n      width=\"80px\" height=\"80px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n   <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n     <animateTransform attributeType=\"xml\"\n       attributeName=\"transform\"\n       type=\"rotate\"\n       from=\"0 25 25\"\n       to=\"360 25 25\"\n       dur=\"0.6s\"\n       repeatCount=\"indefinite\"/>\n     </path>\n   </svg>\n</div>\n\n<div class=\"noMoreForms\" *ngIf=\"noMoreForms === true\">\n    <h2>- No more forms to load -</h2>\n</div>"

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



var SearchComponent = /** @class */ (function () {
    function SearchComponent(userService, searchService) {
        this.userService = userService;
        this.searchService = searchService;
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
            }
            else {
                _this.noMoreForms = true;
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
            _core__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])
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
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/modules/search/search-routing.module.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.component */ "./src/app/modules/search/search.component.ts");





var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_3__["SearchRoutingModule"]
            ]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-search-search-module.js.map