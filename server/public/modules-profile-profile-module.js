(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-profile-profile-module"],{

/***/ "./src/app/modules/profile/profile-resolver.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/profile/profile-resolver.service.ts ***!
  \*************************************************************/
/*! exports provided: ProfileResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileResolver", function() { return ProfileResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ProfileResolver = /** @class */ (function () {
    function ProfileResolver(router, profilesService) {
        this.router = router;
        this.profilesService = profilesService;
    }
    ProfileResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.profilesService.get(route.params['user'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.router.navigateByUrl('/'); }));
    };
    ProfileResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_3__["ProfilesService"]])
    ], ProfileResolver);
    return ProfileResolver;
}());



/***/ }),

/***/ "./src/app/modules/profile/profile-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/profile/profile-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/modules/profile/profile.component.ts");
/* harmony import */ var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-resolver.service */ "./src/app/modules/profile/profile-resolver.service.ts");





var routes = [
    {
        path: ':user',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        resolve: {
            user: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ProfileResolver"]
        }
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/profile/profile.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/profile/profile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\">\n    <div class=\"profile__container\">\n        <div class=\"profile__image\">\n            <img src=\"{{\n                !user.image ? 'assets/images/avatar.jpeg' : form.author.image\n            }}\" alt=\"avatar\">\n        </div>\n        <div class=\"profile__info\">\n            <span class=\"profile__info__name\">{{ user.username }}</span>\n            <span class=\"profile__info__description\" *ngIf=\"user.description\">\n                {{ user.description}}\n            </span>\n            <span class=\"description\" *ngIf=\"!user.description\">\n                User has not added any description yet.\n            </span>\n            <span class=\"profile__info__contact\" *ngIf=\"user.contactInformation\">\n                {{ user.contactInformation }}\n            </span>\n            <span class=\"profile__info__company-name\" *ngIf=\"user.companyName\">\n                {{ user.companyName }}\n            </span>\n        </div>\n    </div>\n</div>\n\n<div class=\"search__container\">\n    <div class=\"search__button\">\n        <input type=\"text\" (keyup.enter)=\"search(input.value)\" #input>\n    </div>\n    <div class=\"search__orderby\">\n        <div class=\"search__orderby__container\">\n            <label for=\"orderby\">Order by: </label>\n            <select id=\"orderby\" autofocus=\"true\" (change)=\"setOrder($event.target.value)\">\n                <option value=\"Date\">Date</option>\n                <option value=\"Like\">Likes</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"search__results\">\n        <div class=\"search__results__container\">\n\n            <div class=\"search__results__result\" *ngFor=\"let form of results\">\n                <div class=\"search__results__result__document\" [routerLink]=\"['/fill-form', form.slug]\">\n                    <div class=\"search__results__result__document__container\">\n                        <div class=\"search__results__result__document__container__date\">\n                            <span>{{form.updatedAt | date: 'dd/MM/yyyy'}}</span>\n                        </div>\n                        <div class=\"search__results__result__document__container__title\">\n                            <span>{{ form.title }}</span>\n                        </div>\n                        <div class=\"search__results__result__document__container__description\">\n                            <span>{{ form.description.substring(0, 136) }}</span>\n                        </div>\n                        <div class=\"search__results__result__document__container__likes-views\">\n                            <div class=\"search__results__result__document__container__likes-views__likes\">\n                                <span class=\"icon icon-like-button\"></span>\n                                <span>{{ form.likesCount }}</span>\n                            </div>\n                            <div class=\"search__results__result__document__container__likes-views__views\">\n                                <span class=\"icon icon-eye-solid\"></span>\n                                <span>{{ form.viewsCount }}</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"search__results__result__more-info\">\n                    <div class=\"search__results__result__more-info__author\">\n                        <img src=\"{{\n                            !form.author.image ? 'assets/images/avatar.jpeg' : form.author.image\n                        }}\" alt=\"avatar\">\n                        <span [routerLink]=\"['/profile', form.author.username]\">{{ form.author.username }}</span>\n                    </div>\n                    <div class=\"search__results__result__more-info__tags\">\n                        <span>tag, tag, tag, tag, tag, tag, tag, tag, \n                            tag, tag, tag, tag, tag, tag, tag, tag</span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n    \n    <!--Div is shown when there no author forms-->\n    <!-- <div [hidden]=\"loading || results.length\">No Forms are here... yet.</div> -->\n    \n    <div class=\"loader\" [style.display]=\"loadingQuery ? 'flex' : 'none'\">\n        <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        width=\"80px\" height=\"80px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n        <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n        <animateTransform attributeType=\"xml\"\n            attributeName=\"transform\"\n            type=\"rotate\"\n            from=\"0 25 25\"\n            to=\"360 25 25\"\n            dur=\"0.6s\"\n            repeatCount=\"indefinite\"/>\n        </path>\n        </svg>\n    </div>\n    \n    <div class=\"noMoreForms\" *ngIf=\"noMoreForms === true\">\n        <h2>- No more forms to load -</h2>\n    </div>"

/***/ }),

/***/ "./src/app/modules/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, searchService) {
        this.route = route;
        this.searchService = searchService;
        this.listConfig = new _core__WEBPACK_IMPORTED_MODULE_3__["FormListConfig"]();
        this.loadingQuery = false;
        this.results = [];
        this.limit = 10;
        this.currentPage = 1;
        this.noMoreForms = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data.user;
        });
        this.loadingQuery = true;
        this.listConfig.orderBy = 'Date';
        this.setListTo('all');
        this.searchService.searchProfile(this.listConfig)
            .subscribe(function (forms) {
            _this.loadingQuery = false;
            _this.results = forms;
        });
    };
    ProfileComponent.prototype.setListTo = function (type) {
        if (type === void 0) { type = ''; }
        // Takes all forms
        this.listConfig = {
            type: type,
            limit: this.limit,
            orderBy: 'Date',
            offset: (this.limit * (this.currentPage - 1)),
            query: '',
            author: this.user.username
        };
    };
    ProfileComponent.prototype.moreForms = function () {
        var _this = this;
        this.loadingQuery = true;
        this.setPageTo();
        // Create limit and offset filter (if necessary)
        if (this.limit) {
            this.listConfig.limit = this.limit;
            this.listConfig.offset = (this.limit * (this.currentPage - 1));
        }
        this.searchService.searchProfile(this.listConfig).subscribe(function (forms) {
            if (forms.length !== 0) {
                _this.results = _this.results.concat(forms);
            }
            else {
                _this.noMoreForms = true;
            }
            _this.loadingQuery = false;
        });
    };
    ProfileComponent.prototype.onScroll = function () {
        if (!this.loadingQuery && this.noMoreForms === false) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                this.moreForms();
            }
        }
    };
    ProfileComponent.prototype.setPageTo = function () {
        this.currentPage += 1;
    };
    ProfileComponent.prototype.setOrder = function (order) {
        var _this = this;
        this.loadingQuery = true;
        this.listConfig.offset = 0;
        this.currentPage = 1;
        this.results = [];
        this.noMoreForms = false;
        this.listConfig.orderBy = order;
        this.searchService.searchProfile(this.listConfig).subscribe(function (forms) {
            _this.loadingQuery = false;
            _this.results = forms;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ProfileComponent.prototype, "onScroll", null);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/modules/profile/profile.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/modules/profile/profile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/profile/profile.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-resolver.service */ "./src/app/modules/profile/profile-resolver.service.ts");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/modules/profile/profile-routing.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.component */ "./src/app/modules/profile/profile.component.ts");







var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            providers: [_profile_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ProfileResolver"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-profile-profile-module.js.map