(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/auth/auth.module": [
		"./src/app/modules/auth/auth.module.ts",
		"modules-auth-auth-module"
	],
	"./modules/certified-forms/certified-forms.module": [
		"./src/app/modules/certified-forms/certified-forms.module.ts",
		"modules-certified-forms-certified-forms-module"
	],
	"./modules/create-form/create-form.module": [
		"./src/app/modules/create-form/create-form.module.ts",
		"modules-create-form-create-form-module"
	],
	"./modules/fill-form/fill-form.module": [
		"./src/app/modules/fill-form/fill-form.module.ts",
		"modules-fill-form-fill-form-module"
	],
	"./modules/my-forms/my-forms.module": [
		"./src/app/modules/my-forms/my-forms.module.ts",
		"modules-my-forms-my-forms-module"
	],
	"./modules/profile/profile.module": [
		"./src/app/modules/profile/profile.module.ts",
		"modules-profile-profile-module"
	],
	"./modules/search/search.module": [
		"./src/app/modules/search/search.module.ts",
		"modules-search-search-module"
	],
	"./modules/settings/settings.module": [
		"./src/app/modules/settings/settings.module.ts",
		"modules-settings-settings-module"
	],
	"./modules/static-pages/static-pages.module": [
		"./src/app/modules/static-pages/static-pages.module.ts",
		"modules-static-pages-static-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    },
    {
        path: 'search',
        loadChildren: './modules/search/search.module#SearchModule',
    },
    {
        path: 'auth',
        loadChildren: './modules/auth/auth.module#AuthModule',
    },
    {
        path: 'certified-forms',
        loadChildren: './modules/certified-forms/certified-forms.module#CertifiedFormsModule',
    },
    {
        path: 'create-form',
        loadChildren: './modules/create-form/create-form.module#CreateFormModule',
    },
    {
        path: 'fill-form',
        loadChildren: './modules/fill-form/fill-form.module#FillFormModule',
    },
    {
        path: 'my-forms',
        loadChildren: './modules/my-forms/my-forms.module#MyFormsModule',
    },
    {
        path: 'settings',
        loadChildren: './modules/settings/settings.module#SettingsModule',
    },
    {
        path: 'profile',
        loadChildren: './modules/profile/profile.module#ProfileModule',
    },
    {
        path: 'static-pages',
        loadChildren: './modules/static-pages/static-pages.module#StaticPagesModule',
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    // preload all modules;
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\" #navbar>\n  <div class=\"nav__container\">\n    <img src=\"/assets/images/logo.png\" alt=\"logo\" class=\"nav__logo\" routerLink=\"/search\">\n    <ul class=\"nav__menu\">\n      <li  class=\"nav__menu__button\" routerLinkActive=\"nav__menu__button--current\">\n        <a routerLink=\"/search\">Search</a>\n      </li>\n      <li  class=\"nav__menu__button\" routerLinkActive=\"nav__menu__button--current\" *appShowAuthed=\"false\">\n        <a routerLink=\"/auth/login\">Create form</a>\n      </li>\n      <li class=\"nav__menu__button\" routerLinkActive=\"nav__menu__button--current\" *appShowAuthed=\"true\">\n        <a routerLink=\"/create-form\">Create form</a>\n      </li>\n      <li class=\"nav__menu__button\" routerLinkActive=\"nav__menu__button--current\" *appShowAuthed=\"true\">\n        <a routerLink=\"/my-forms\">My forms</a>\n      </li>\n      <li class=\"nav__menu__button\" routerLinkActive=\"nav__menu__button--current\" *appShowAuthed=\"true\">\n        <a routerLink=\"/settings\">Settings</a>\n      </li>\n      <li class=\"nav__menu__button\" routerLinkActive=\"nav__menu__button--current\" *appShowAuthed=\"false\">\n        <a routerLink=\"/auth/login\">Login</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<!-- SPINNER -->\n<app-loading-spinner></app-loading-spinner>\n  <!-- END OF SPINNER -->\n\n<router-outlet></router-outlet>\n\n<footer class=\"footer\" #footer>\n  <div class=\"footer__container\">\n    <div class=\"footer__social\">\n      <ul class=\"footer__social__links\">\n        <li>\n          <a href=\"www.google.com\">\n            <span class=\"icon icon-facebook-f-brands\"></span>\n          </a>\n        </li>\n        <li>\n          <a href=\"www.google.com\">\n            <span class=\"icon icon-twitter-brands\"></span>\n          </a>\n        </li>\n        <li>\n          <a href=\"www.google.com\">\n            <span class=\"icon icon-google-plus-g-brands\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"footer__email\">\n      <a href=\"\">formbaseddocs@gmail</a>\n    </div>\n    <div class=\"footer__legal\">\n      <ul class=\"footer__legal__links\">\n        <li>\n          <a href=\"\">Condiciones de uso</a>\n        </li>\n        <li>\n          <a href=\"\">Nota de privacidad</a>\n        </li>\n        <li>\n          <span>© 2019 Camejo Alarcón abogados</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.includedUrlsForNavbar = [
            '/auth/login',
            '/auth/signup',
            '/auth/recover-password'
        ];
        this.includedUrlsForFooter = [
            '/auth/login',
            '/auth/signup',
            '/auth/recover-password',
            'certified-forms',
            'create-form',
            'fill-form',
            'search-transaction'
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.populate();
        this.userService.isAuthenticated.subscribe(function (isAuthenticated) {
            if (isAuthenticated) {
                _this.isAuth = true;
            }
            else {
                _this.isAuth = false;
            }
        });
        this.onPageLoad();
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (_this.included(event['url'], _this.includedUrlsForNavbar)) {
                    _this.navbar.nativeElement.hidden = true;
                }
                else {
                    _this.navbar.nativeElement.hidden = false;
                }
                if (_this.included(event['url'], _this.includedUrlsForFooter)) {
                    _this.footer.nativeElement.hidden = true;
                }
                else {
                    _this.footer.nativeElement.hidden = false;
                }
            }
        });
    };
    AppComponent.prototype.included = function (url, includedUrls) {
        var isIncluded = false;
        includedUrls.forEach(function (includedUrl) {
            if (url.includes(includedUrl)) {
                isIncluded = true;
            }
        });
        return isIncluded;
    };
    AppComponent.prototype.onPageLoad = function () {
        if (this.included(window.location.href, this.includedUrlsForNavbar)) {
            this.navbar.nativeElement.hidden = true;
        }
        else {
            this.navbar.nativeElement.hidden = false;
        }
        if (this.included(window.location.href, this.includedUrlsForFooter)) {
            this.footer.nativeElement.hidden = true;
        }
        else {
            this.footer.nativeElement.hidden = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "navbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "footer", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _core__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/http.token.interceptor */ "./src/app/core/interceptors/http.token.interceptor.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http */ "./src/app/core/http/index.ts");
/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singleton */ "./src/app/core/singleton/index.ts");








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_4__["HttpTokenInterceptor"], multi: true },
                _http__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
                _http__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
                _http__WEBPACK_IMPORTED_MODULE_5__["CheckoutService"],
                _http__WEBPACK_IMPORTED_MODULE_5__["CommentsService"],
                _http__WEBPACK_IMPORTED_MODULE_5__["ConvertService"],
                _http__WEBPACK_IMPORTED_MODULE_5__["FormService"],
                _http__WEBPACK_IMPORTED_MODULE_5__["JwtService"],
                _http__WEBPACK_IMPORTED_MODULE_5__["ProfilesService"],
                _http__WEBPACK_IMPORTED_MODULE_5__["SearchService"],
                _http__WEBPACK_IMPORTED_MODULE_5__["TagsService"],
                _http__WEBPACK_IMPORTED_MODULE_5__["UserService"],
                _http__WEBPACK_IMPORTED_MODULE_5__["CommonsService"],
                _http__WEBPACK_IMPORTED_MODULE_5__["ComponentInjectorService"],
                _singleton__WEBPACK_IMPORTED_MODULE_6__["StepModelService"],
                _singleton__WEBPACK_IMPORTED_MODULE_6__["StateService"],
                _singleton__WEBPACK_IMPORTED_MODULE_6__["OdfCreatorService"],
                _singleton__WEBPACK_IMPORTED_MODULE_6__["PlainTextCreatorService"]
            ],
            declarations: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/http/api.service.ts":
/*!******************************************!*\
  !*** ./src/app/core/http/api.service.ts ***!
  \******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.formatErrors = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"](); }
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/http/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/http/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/core/http/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/http/checkout.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/http/checkout.service.ts ***!
  \***********************************************/
/*! exports provided: CheckoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return CheckoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/http/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



// import { Profile } from '../models';

var CheckoutService = /** @class */ (function () {
    function CheckoutService(apiService) {
        this.apiService = apiService;
    }
    CheckoutService.prototype.getToken = function (method) {
        return this.apiService.get("/checkout/new?method=" + method)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.clientToken; }));
    };
    CheckoutService.prototype.pay = function (steps, email, nonce, formType, method) {
        return this.apiService
            .post("/checkout", {
            'steps': steps,
            'formType': formType,
            'email': email,
            'payment_method_nonce': nonce,
            'method': method
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    CheckoutService.prototype.sendMail = function (transactionId, uri) {
        return this.apiService
            .post("/checkout/sendMail", { 'transactionId': transactionId, 'uri': uri }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    CheckoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CheckoutService);
    return CheckoutService;
}());



/***/ }),

/***/ "./src/app/core/http/comments.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/http/comments.service.ts ***!
  \***********************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/http/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CommentsService = /** @class */ (function () {
    function CommentsService(apiService) {
        this.apiService = apiService;
    }
    CommentsService.prototype.add = function (slug, payload) {
        return this.apiService
            .post("/form/" + slug + "/comments", { comment: { body: payload } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.comment; }));
    };
    CommentsService.prototype.getAll = function (slug, order) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('orderBy', order);
        return this.apiService.get("/form/" + slug + "/comments", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.comments; }));
    };
    CommentsService.prototype.destroy = function (commentId, formSlug) {
        return this.apiService
            .delete("/form/" + formSlug + "/comments/" + commentId);
    };
    CommentsService.prototype.like = function (slug, id) {
        return this.apiService.post("/form/" + slug + "/comments/" + id + "/like")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.comment; }));
    };
    CommentsService.prototype.dislike = function (slug, id) {
        return this.apiService.delete("/form/" + slug + "/comments/" + id + "/like")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.comment; }));
    };
    CommentsService.prototype.responseToComment = function (slug, payload, commentId) {
        return this.apiService
            .post("/form/" + slug + "/comments/" + commentId + "/response", { comment: { body: payload } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.comment; }));
    };
    CommentsService.prototype.updateComment = function (slug, payload, commentId) {
        return this.apiService
            .put("/form/" + slug + "/comments/" + commentId, { comment: { body: payload } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.comment; }));
    };
    CommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "./src/app/core/http/commons.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/http/commons.service.ts ***!
  \**********************************************/
/*! exports provided: CommonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonsService", function() { return CommonsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var CommonsService = /** @class */ (function () {
    function CommonsService(toastr) {
        this.toastr = toastr;
        this.isDocumentVisible = false;
    }
    CommonsService.prototype.toggleModal = function (modal, closeWhenClickedOuside) {
        if (closeWhenClickedOuside === void 0) { closeWhenClickedOuside = true; }
        if (!modal.classList.contains('show-modal')) {
            modal.classList.toggle('show-modal');
            window.addEventListener('click', modalEventListener);
        }
        else {
            modal.classList.toggle('show-modal');
            // Instead of remove I add another one, workarround
            // that adds another event that will be deleted as well
            window.addEventListener('click', modalEventListener);
        }
        function modalEventListener() {
            if (closeWhenClickedOuside) {
                if (event.target === modal) {
                    modal.classList.toggle('show-modal');
                    window.removeEventListener('click', modalEventListener);
                }
            }
        }
    };
    CommonsService.prototype.toggleLightbox = function (lightBox, closeWhenClickedOuside) {
        if (closeWhenClickedOuside === void 0) { closeWhenClickedOuside = true; }
        if (!lightBox.classList.contains('show-lightbox')) {
            lightBox.classList.toggle('show-lightbox');
            window.addEventListener('click', modalEventListener);
        }
        else {
            lightBox.classList.toggle('show-lightbox');
            // Instead of remove I add another one, workarround
            // that adds another event that will be deleted as well
            window.addEventListener('click', modalEventListener);
        }
        function modalEventListener() {
            if (closeWhenClickedOuside) {
                if (event.target === lightBox) {
                    lightBox.classList.toggle('show-lightbox');
                    window.removeEventListener('click', modalEventListener);
                }
            }
        }
    };
    CommonsService.prototype.showIndicationsInsideTextPlainText = function (wordToReplace, indications) {
        var aTags = document.querySelector('#editor-preview').getElementsByTagName('*');
        var element;
        var scrollTop;
        for (var i = 0; i < aTags.length; i++) {
            if (aTags[i].getAttribute('data-identifier') === wordToReplace) {
                element = aTags[i];
                scrollTop = document.querySelector('#editor-preview').scrollTop;
                element.scrollIntoView({ behavior: 'smooth' });
                break;
            }
        }
        var scrollTimeout;
        var scrollListenner = function () {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function () {
                displayIndicator();
                document.querySelector('#editor-preview').removeEventListener('scroll', scrollListenner);
            }, 100);
        }.bind(this);
        document.querySelector('#editor-preview').addEventListener('scroll', scrollListenner);
        // If it is not scrolling
        setTimeout(function () {
            if (scrollTop === document.querySelector('#editor-preview').scrollTop) {
                displayIndicator();
                document.querySelector('#editor-preview').removeEventListener('scroll', scrollListenner);
            }
        }, 100);
        function displayIndicator() {
            var para = document.createElement('div');
            para.innerHTML = "<div class=\"indicator-content\" style=\"margin:auto;width:95%\">\n                                <button id=\"close-indication\">&#10006;</button>\n                                <span style=\"width: 100%;\">" + indications + "\n                                </span>\n                            </div>";
            para.style.top = ((element.getBoundingClientRect().top)
                + (window.innerHeight / 100 * 4)) + 'px';
            para.style.left = document.querySelector('#editor-preview').getBoundingClientRect().left + 'px';
            para.style.width = document.querySelector('#editor-preview').clientWidth + 'px';
            para.classList.add('indicator');
            para.style.position = 'absolute';
            para.classList.add('smooth-intro');
            element.appendChild(para);
            window.addEventListener('click', removeIndication);
            function removeIndication(e) {
                if (e.target.classList.contains('icon-info-circle-solid')
                    || e.target.classList.contains('indication')) {
                    if (document.querySelectorAll('.indicator').length >= 2) {
                        para.parentNode.removeChild(para);
                        window.removeEventListener('click', removeIndication);
                    }
                }
                else {
                    para.parentNode.removeChild(para);
                    window.removeEventListener('click', removeIndication);
                }
            }
        }
    };
    CommonsService.prototype.subMenuNav = function (e, subMenuElement) {
        e.preventDefault();
        if (e.target.nodeName === 'LI') {
            subMenuElement.querySelectorAll('.sub-menu__nav__button').forEach(function (button) {
                if (button.classList.contains('sub-menu__nav__button--current')) {
                    var contentOfDivToHide_1 = document.querySelector('#' + button.getAttribute('data-toogle'));
                    contentOfDivToHide_1.classList.add('lateral-ease-outro');
                    contentOfDivToHide_1.classList.remove('lateral-ease-intro');
                    setTimeout(function () { contentOfDivToHide_1.style.display = 'none'; }, 400);
                }
                button.classList.remove('sub-menu__nav__button--current');
            });
            e.target.classList.add('sub-menu__nav__button--current');
            var contentOfDivToDisplay_1 = document.querySelector('#' + e.target.getAttribute('data-toogle'));
            // window.location.href = '#' + e.target.getAttribute('data-toogle');
            contentOfDivToDisplay_1.classList.remove('lateral-ease-outro');
            contentOfDivToDisplay_1.classList.add('lateral-ease-intro');
            setTimeout(function () { contentOfDivToDisplay_1.style.display = 'block'; }, 400);
        }
    };
    CommonsService.prototype.resizeEditor = function (isLoaded) {
        if (isLoaded === void 0) { isLoaded = true; }
        if (window.innerWidth > 885) {
            if (document.querySelector('#form-creator') !== null) {
                var newHeight = window.innerHeight - document.querySelector('#form-creator').offsetTop + 'px';
                // const toolBarOffsetTop = (document.querySelector('.ql-toolbar') as HTMLElement).offsetTop;
                // const toolBarOffsetHeight = (document.querySelector('.ql-toolbar') as HTMLElement).offsetHeight;
                // const newHeightForEditor = window.innerHeight - (toolBarOffsetTop + toolBarOffsetHeight) + 'px';
                document.getElementById('text-area').style.display = 'block';
                document.getElementById('fields-area').style.display = 'block';
                document.getElementById('scrollToTop').style.display = 'none';
                document.querySelector('#form-creator').style.height = newHeight;
                document.querySelector('#fields-area').style.height = newHeight;
                document.querySelector('#text-area').style.height = newHeight;
                // (document.querySelector('#editor-container') as HTMLElement).style.height = newHeightForEditor;
            }
        }
        else {
            // Mobile mode
            if (isLoaded) {
                if (document.getElementById('fields-area').style.display === 'none') {
                    document.getElementById('fields-area').style.display = 'none';
                    document.getElementById('text-area').style.display = 'block';
                    document.getElementById('scrollToTop').style.display = 'block';
                    var newHeight = window.innerHeight - document.querySelector('#text-area').offsetTop + 'px';
                    document.querySelector('#text-area').style.height = newHeight;
                }
                else {
                    document.getElementById('fields-area').style.display = 'block';
                    document.getElementById('text-area').style.display = 'none';
                    document.getElementById('scrollToTop').style.display = 'none';
                    var newHeight = window.innerHeight - document.querySelector('#fields-area').offsetTop + 'px';
                    document.querySelector('#fields-area').style.height = newHeight;
                }
            }
        }
    };
    CommonsService.prototype.previewDocumentButton = function (setDocumentVisible) {
        if (setDocumentVisible) {
            document.getElementById('fields-area').style.display = 'none';
            document.getElementById('text-area').style.display = 'block';
            document.getElementById('scrollToTop').style.display = 'block';
        }
        else {
            document.getElementById('fields-area').style.display = 'block';
            document.getElementById('text-area').style.display = 'none';
            document.getElementById('scrollToTop').style.display = 'none';
        }
        this.resizeEditor(true);
    };
    CommonsService.prototype.isObjectEmpty = function (obj) {
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    };
    CommonsService.prototype.enableFullScreen = function (id) {
        var el = document.getElementById(id);
        if (screenfull__WEBPACK_IMPORTED_MODULE_2__ && screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["request"](el);
        }
    };
    CommonsService.prototype.replaceClassDnone = function (domElement) {
        var _this = this;
        var elementsWithReplacement = [
            ['d-block', 'd-none'],
            ['d-flex', 'd-none-flex'],
            ['d-grid-100', 'd-none-grid'],
            ['d-inline', 'd-none-inline'],
        ];
        elementsWithReplacement.forEach(function (element) {
            _this.replaceClassInAllElements(domElement, element[0], element[1]);
        });
    };
    CommonsService.prototype.replaceClassInAllElements = function (domElement, newClassName, classNameToReplace) {
        var elementsWithNewClassName = domElement.nativeElement.querySelectorAll('.' + newClassName);
        var elementsWithClassNameToReplace = domElement.nativeElement.querySelectorAll('.' + classNameToReplace);
        for (var _i = 0, elementsWithNewClassName_1 = elementsWithNewClassName; _i < elementsWithNewClassName_1.length; _i++) {
            var element = elementsWithNewClassName_1[_i];
            element.classList.replace(newClassName, classNameToReplace);
        }
        for (var _a = 0, elementsWithClassNameToReplace_1 = elementsWithClassNameToReplace; _a < elementsWithClassNameToReplace_1.length; _a++) {
            var element = elementsWithClassNameToReplace_1[_a];
            element.classList.replace(classNameToReplace, newClassName);
        }
    };
    CommonsService.prototype.replaceOtherClasses = function (domElement) {
        var divsToHide = domElement.nativeElement.querySelectorAll('.radio-create-form');
        var divsToShow = domElement.nativeElement.querySelectorAll('.radio-fill-form');
        for (var _i = 0, divsToShow_1 = divsToShow; _i < divsToShow_1.length; _i++) {
            var divToShow = divsToShow_1[_i];
            divToShow.classList.replace('radio-fill-form', 'radio-create-form');
        }
        for (var _a = 0, divsToHide_1 = divsToHide; _a < divsToHide_1.length; _a++) {
            var divToHide = divsToHide_1[_a];
            divToHide.classList.replace('radio-create-form', 'radio-fill-form');
        }
    };
    // This function will climb the dom untill certain level specified checking if any dom element id
    // contains the string specified
    CommonsService.prototype.checkIfParentElementIdContainsString = function (element, stringSearched, depth) {
        for (var i = 0; i < depth; i++) {
            if (element.id.includes(stringSearched)) {
                return true;
            }
            else {
                element = element.parentElement;
            }
        }
        return false;
    };
    CommonsService.prototype.disableButtons = function (domElement, buttonsAreDisabled) {
        var buttons = domElement.nativeElement.querySelectorAll('button');
        if (buttonsAreDisabled === false) {
            buttonsAreDisabled = true;
            for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
                var button = buttons_1[_i];
                button.disabled = true;
            }
        }
        else {
            buttonsAreDisabled = false;
            for (var _a = 0, buttons_2 = buttons; _a < buttons_2.length; _a++) {
                var button = buttons_2[_a];
                button.disabled = false;
            }
        }
        return buttonsAreDisabled;
    };
    CommonsService.prototype.enableDrag = function (domElement, referenceNumber) {
        domElement.id = 'dragId' + referenceNumber;
        domElement.draggable = true;
        domElement.ondragstart = function drag(ev) {
            ev.dataTransfer.setData('Text', referenceNumber);
        };
    };
    CommonsService.prototype.replaceIdsWithValues = function (valuesToInsert, text) {
        // This function adds the highlight when the users types in.
        Object.keys(valuesToInsert).forEach(function (key) {
            if (key.includes('focused')) {
                var newKey = key.replace('focused', '');
                if (key !== newKey) {
                    Object.defineProperty(valuesToInsert, newKey, Object.getOwnPropertyDescriptor(valuesToInsert, key));
                    delete valuesToInsert[key];
                }
                valuesToInsert[newKey][0] = "<mark id=\"focused\" data-identifier=\"" + newKey + "\">" + valuesToInsert[newKey][0] + '</mark>';
            }
            else {
                valuesToInsert[key][0] = "<mark data-identifier=\"" + key + "\">" + valuesToInsert[key][0] + '</mark>';
            }
        });
        var valuesToInsertKeys = new RegExp(Object.keys(valuesToInsert).join('|'), 'g');
        return text.replace(valuesToInsertKeys, function (matched) {
            return valuesToInsert[matched];
        });
    };
    CommonsService.prototype.toggleSpinner = function () {
        document.getElementById('spinner').classList.toggle('show-spinner');
    };
    CommonsService.prototype.validateEmail = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    CommonsService.prototype.toastMessage = function (type, message1, message2) {
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
    CommonsService.prototype.getBrowserType = function () {
        var windowVariable = window;
        if (!!windowVariable.chrome && (!!windowVariable.chrome.webstore || !!windowVariable.chrome.runtime)) {
            return 'Chrome';
        }
    };
    CommonsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CommonsService);
    return CommonsService;
}());



/***/ }),

/***/ "./src/app/core/http/component-injector.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/http/component-injector.service.ts ***!
  \*********************************************************/
/*! exports provided: ComponentInjectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentInjectorService", function() { return ComponentInjectorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComponentInjectorService = /** @class */ (function () {
    function ComponentInjectorService(componentFactoryResolver, appRef, injector, rendererFactory) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.rendererFactory = rendererFactory;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    ComponentInjectorService.prototype.appendComponentToBody = function (type, elementToInject, idOfDivWhereToInject, parentId, divWhereIsButton, optionalValues) {
        var _this = this;
        // 1. Create a component reference from the component
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(elementToInject)
            .create(this.injector);
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        // 3. Get DOM element from component
        var domElem = componentRef.hostView
            .rootNodes[0];
        // 4. Creates the button that deletes the injected component
        switch (type) {
            case 'Component':
                this.componentDeleteButton();
                break;
            case 'Radio':
                this.radioDeleteButton();
                break;
            case 'InputsHidden':
                break;
        }
        if (type !== 'InputsHidden') {
            this.renderer.listen(this.deleteButton, 'click', function () {
                _this.appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
            domElem.getElementsByClassName(divWhereIsButton)[0].appendChild(this.deleteButton);
        }
        // 5. Add variables to de component
        componentRef.instance['id'] = idOfDivWhereToInject;
        componentRef.instance['parentId'] = parentId;
        componentRef.instance['optionalValues'] = optionalValues;
        componentRef.changeDetectorRef.detectChanges();
        // // create wrapper container div so Sortable js works
        var wrappedDomElem = document.createElement('div');
        wrappedDomElem.appendChild(domElem);
        // 6. Append DOM element to the body element
        document.getElementById(idOfDivWhereToInject).appendChild(wrappedDomElem);
    };
    ComponentInjectorService.prototype.radioDeleteButton = function () {
        this.deleteButton = this.renderer.createElement('div');
        this.renderer.addClass(this.deleteButton, 'form-creator__fields-area__field__middle__radio-input__remove-radio');
        this.renderer.addClass(this.deleteButton, 'remove-radio');
        var icon = this.renderer.createElement('span');
        this.renderer.addClass(icon, 'icon');
        this.renderer.addClass(icon, 'icon-times-solid');
        this.renderer.appendChild(this.deleteButton, icon);
    };
    ComponentInjectorService.prototype.componentDeleteButton = function () {
        this.deleteButton = this.renderer.createElement('div');
        var icon = this.renderer.createElement('span');
        this.renderer.addClass(icon, 'icon');
        this.renderer.addClass(icon, 'icon-trash-alt-regular');
        this.renderer.appendChild(this.deleteButton, icon);
        this.renderer.addClass(this.deleteButton, 'remove-button');
        this.renderer.addClass(this.deleteButton, 'd-block');
        this.renderer.addClass(this.deleteButton, 'smooth-intro');
    };
    ComponentInjectorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]])
    ], ComponentInjectorService);
    return ComponentInjectorService;
}());



/***/ }),

/***/ "./src/app/core/http/convert.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/http/convert.service.ts ***!
  \**********************************************/
/*! exports provided: ConvertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertService", function() { return ConvertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/http/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



// import { Profile } from '../models';

var ConvertService = /** @class */ (function () {
    function ConvertService(apiService) {
        this.apiService = apiService;
    }
    ConvertService.prototype.toPdf = function (filename, uri) {
        return this.apiService.post('/convert/toPdf', {
            fileName: filename,
            doc: uri
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    ConvertService.prototype.toWord = function (filename, uri) {
        return this.apiService.post('/convert/toWord', {
            fileName: filename,
            doc: uri
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    ConvertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ConvertService);
    return ConvertService;
}());



/***/ }),

/***/ "./src/app/core/http/form.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/http/form.service.ts ***!
  \*******************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/http/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var FormService = /** @class */ (function () {
    function FormService(apiService) {
        this.apiService = apiService;
    }
    FormService.prototype.query = function (config) {
        // Convert any filters over to Angular's URLSearchParams
        var params = {};
        Object.keys(config)
            .forEach(function (key) {
            params[key] = config[key];
        });
        return this.apiService
            .get('/form' + ((config.type === 'feed') ? '/feed' : ''), new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: params }));
    };
    FormService.prototype.get = function (slug) {
        return this.apiService.get('/form/' + slug)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.form; }));
    };
    FormService.prototype.getCertifiedForm = function (slug) {
        return this.apiService.get('/form/certified-forms/' + slug)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.certifiedForm; }));
    };
    FormService.prototype.getPaidCertifiedForm = function (slug) {
        return this.apiService.get('/form/paid-certified-forms/' + slug)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    FormService.prototype.getWithView = function (slug) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('view', 'true');
        return this.apiService.get('/form/' + slug, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.form; }));
    };
    FormService.prototype.destroy = function (slug) {
        return this.apiService.delete('/form/' + slug);
    };
    FormService.prototype.save = function (form) {
        if (form.type === 'Filled') {
            // New form
            if (form.slug === form.originalSlug) {
                delete form.slug;
                return this.apiService.post('/form/fill', { form: form })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.form; }));
            }
            else {
                return this.apiService.put('/form/' + form.slug, { form: form })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.form; }));
            }
        }
        else if (form.type === 'Certified') {
            return this.apiService.post('/form/certified-forms/fill', { form: form })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.form; }));
        }
        else {
            // If we're updating an existing form
            if (form.slug) {
                return this.apiService.put('/form/' + form.slug, { form: form })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.form; }));
                // Otherwise, create a new form
            }
            else {
                return this.apiService.post('/form/create', { form: form })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.form; }));
            }
        }
    };
    FormService.prototype.like = function (slug) {
        return this.apiService.post('/form/' + slug + '/like');
    };
    FormService.prototype.disLike = function (slug) {
        return this.apiService.delete('/form/' + slug + '/like');
    };
    FormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "./src/app/core/http/index.ts":
/*!************************************!*\
  !*** ./src/app/core/http/index.ts ***!
  \************************************/
/*! exports provided: ApiService, AuthGuard, CheckoutService, CommentsService, FormService, JwtService, ProfilesService, SearchService, TagsService, UserService, CommonsService, ComponentInjectorService, ConvertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "./src/app/core/http/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/core/http/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _checkout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.service */ "./src/app/core/http/checkout.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return _checkout_service__WEBPACK_IMPORTED_MODULE_2__["CheckoutService"]; });

/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.service */ "./src/app/core/http/comments.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"]; });

/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.service */ "./src/app/core/http/form.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return _form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"]; });

/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/http/jwt.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"]; });

/* harmony import */ var _profiles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profiles.service */ "./src/app/core/http/profiles.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfilesService", function() { return _profiles_service__WEBPACK_IMPORTED_MODULE_6__["ProfilesService"]; });

/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search.service */ "./src/app/core/http/search.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return _search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"]; });

/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tags.service */ "./src/app/core/http/tags.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return _tags_service__WEBPACK_IMPORTED_MODULE_8__["TagsService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.service */ "./src/app/core/http/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]; });

/* harmony import */ var _commons_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./commons.service */ "./src/app/core/http/commons.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonsService", function() { return _commons_service__WEBPACK_IMPORTED_MODULE_10__["CommonsService"]; });

/* harmony import */ var _component_injector_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component-injector.service */ "./src/app/core/http/component-injector.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentInjectorService", function() { return _component_injector_service__WEBPACK_IMPORTED_MODULE_11__["ComponentInjectorService"]; });

/* harmony import */ var _convert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./convert.service */ "./src/app/core/http/convert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConvertService", function() { return _convert_service__WEBPACK_IMPORTED_MODULE_12__["ConvertService"]; });
















/***/ }),

/***/ "./src/app/core/http/jwt.service.ts":
/*!******************************************!*\
  !*** ./src/app/core/http/jwt.service.ts ***!
  \******************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function () {
        if (window.localStorage['jwtToken'] !== undefined) {
            return window.localStorage['jwtToken'];
        }
        else if (window.sessionStorage['jwtToken'] !== undefined) {
            return window.sessionStorage['jwtToken'];
        }
    };
    JwtService.prototype.saveTokenInLocal = function (token) {
        window.localStorage['jwtToken'] = token;
    };
    JwtService.prototype.saveTokenInSession = function (token) {
        window.sessionStorage['jwtToken'] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('jwtToken');
    };
    JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/core/http/profiles.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/http/profiles.service.ts ***!
  \***********************************************/
/*! exports provided: ProfilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesService", function() { return ProfilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/http/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProfilesService = /** @class */ (function () {
    function ProfilesService(apiService) {
        this.apiService = apiService;
    }
    ProfilesService.prototype.get = function (username) {
        return this.apiService.get('/profile/' + username)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.profile; }));
    };
    ProfilesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ProfilesService);
    return ProfilesService;
}());



/***/ }),

/***/ "./src/app/core/http/search.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/http/search.service.ts ***!
  \*********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/http/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var SearchService = /** @class */ (function () {
    function SearchService(apiService) {
        this.apiService = apiService;
    }
    SearchService.prototype.search = function (config) {
        var params;
        if (config.query === '') {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('orderBy', config.orderBy)
                .set('limit', config.limit)
                .set('offset', config.offset);
        }
        else {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('orderBy', config.orderBy)
                .set('limit', config.limit)
                .set('offset', config.offset)
                .set('query', config.query);
        }
        return this.apiService.get('/search', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.forms; }));
    };
    SearchService.prototype.searchProfile = function (config) {
        var params;
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('orderBy', config.orderBy)
            .set('limit', config.limit)
            .set('offset', config.offset)
            .set('author', config.author);
        return this.apiService.get('/search', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.forms; }));
    };
    SearchService.prototype.searchFilledForms = function (config) {
        var params;
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('orderBy', config.orderBy)
            .set('limit', config.limit)
            .set('offset', config.offset)
            .set('filledBy', config.filledBy)
            .set('type', config.type);
        return this.apiService.get('/search', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.forms; }));
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/core/http/tags.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/http/tags.service.ts ***!
  \*******************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/http/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TagsService = /** @class */ (function () {
    function TagsService(apiService) {
        this.apiService = apiService;
    }
    TagsService.prototype.getAll = function () {
        return this.apiService.get('/tags')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.tags; }));
    };
    TagsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], TagsService);
    return TagsService;
}());



/***/ }),

/***/ "./src/app/core/http/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/http/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/http/api.service.ts");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/http/jwt.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UserService = /** @class */ (function () {
    function UserService(apiService, jwtService) {
        this.apiService = apiService;
        this.jwtService = jwtService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.currentUser = this.currentUserSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])());
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    UserService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(function (data) { return _this.setAuth(data.user, true); }, function (err) { return _this.purgeAuth(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    };
    UserService.prototype.setAuth = function (user, remembermeChecked) {
        // Save JWT sent from server in localstorage or session
        if (remembermeChecked) {
            this.jwtService.saveTokenInLocal(user.token);
        }
        else {
            this.jwtService.saveTokenInSession(user.token);
        }
        if (!user.image) {
            user.image = 'assets/images/avatar.jpg';
        }
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    };
    UserService.prototype.purgeAuth = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({});
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    UserService.prototype.attemptAuth = function (type, credentials, rememberme) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '/signup';
        return this.apiService.post('/user' + route, { user: credentials })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            _this.setAuth(data.user, rememberme);
            return data;
        }));
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    // Update the user on the server (email, pass, etc)
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.apiService
            .put('/user', { user: user })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            // Update the currentUser observable
            _this.currentUserSubject.next(data.user);
            return data.user;
        }));
    };
    UserService.prototype.changePassword = function (passwords) {
        return this.apiService
            .put('/user/change-password', passwords)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data; }));
    };
    UserService.prototype.forgotPassword = function (email) {
        return this.apiService
            .post('/user/forgot-password', { email: email })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data; }));
    };
    UserService.prototype.resetPassword = function (token, newPassword, verifyPassword) {
        return this.apiService
            .post('/user/reset-password', { token: token, newPassword: newPassword, verifyPassword: verifyPassword })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data; }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, HttpTokenInterceptor, ApiService, AuthGuard, CheckoutService, CommentsService, FormService, JwtService, ProfilesService, SearchService, TagsService, UserService, CommonsService, ComponentInjectorService, ConvertService, Errors, User, Profile, Form, FormListConfig, Comment, StepModelService, StateService, OdfCreatorService, PlainTextCreatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http */ "./src/app/core/http/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["ApiService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["CheckoutService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["CommentsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["FormService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["JwtService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfilesService", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["ProfilesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["SearchService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["TagsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonsService", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["CommonsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentInjectorService", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["ComponentInjectorService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConvertService", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["ConvertService"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ "./src/app/core/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _models__WEBPACK_IMPORTED_MODULE_2__["Errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _models__WEBPACK_IMPORTED_MODULE_2__["User"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return _models__WEBPACK_IMPORTED_MODULE_2__["Profile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _models__WEBPACK_IMPORTED_MODULE_2__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormListConfig", function() { return _models__WEBPACK_IMPORTED_MODULE_2__["FormListConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _models__WEBPACK_IMPORTED_MODULE_2__["Comment"]; });

/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors */ "./src/app/core/interceptors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_3__["HttpTokenInterceptor"]; });

/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./singleton */ "./src/app/core/singleton/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StepModelService", function() { return _singleton__WEBPACK_IMPORTED_MODULE_4__["StepModelService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return _singleton__WEBPACK_IMPORTED_MODULE_4__["StateService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OdfCreatorService", function() { return _singleton__WEBPACK_IMPORTED_MODULE_4__["OdfCreatorService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlainTextCreatorService", function() { return _singleton__WEBPACK_IMPORTED_MODULE_4__["PlainTextCreatorService"]; });








/***/ }),

/***/ "./src/app/core/interceptors/http.token.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/http.token.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return HttpTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http */ "./src/app/core/http/index.ts");



var HttpTokenInterceptor = /** @class */ (function () {
    function HttpTokenInterceptor(jwtService) {
        this.jwtService = jwtService;
    }
    HttpTokenInterceptor.prototype.intercept = function (req, next) {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        var token = this.jwtService.getToken();
        if (token) {
            headersConfig['Authorization'] = "Token " + token;
        }
        var request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
    };
    HttpTokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http__WEBPACK_IMPORTED_MODULE_2__["JwtService"]])
    ], HttpTokenInterceptor);
    return HttpTokenInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/index.ts":
/*!********************************************!*\
  !*** ./src/app/core/interceptors/index.ts ***!
  \********************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.token.interceptor */ "./src/app/core/interceptors/http.token.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__["HttpTokenInterceptor"]; });




/***/ }),

/***/ "./src/app/core/models/comment.model.ts":
/*!**********************************************!*\
  !*** ./src/app/core/models/comment.model.ts ***!
  \**********************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/core/models/errors.model.ts":
/*!*********************************************!*\
  !*** ./src/app/core/models/errors.model.ts ***!
  \*********************************************/
/*! exports provided: Errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors; });
var Errors = /** @class */ (function () {
    function Errors() {
        this.errors = {};
    }
    return Errors;
}());



/***/ }),

/***/ "./src/app/core/models/form-list-config.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/models/form-list-config.model.ts ***!
  \*******************************************************/
/*! exports provided: FormListConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormListConfig", function() { return FormListConfig; });
var FormListConfig = /** @class */ (function () {
    function FormListConfig() {
        this.type = 'all';
    }
    return FormListConfig;
}());



/***/ }),

/***/ "./src/app/core/models/form.model.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models/form.model.ts ***!
  \*******************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
var Form = /** @class */ (function () {
    function Form() {
        this.title = '';
        this.description = '';
        this.id = '';
        this.text = '';
        this.fields = [];
        this.tags = [];
        this.comments = [];
    }
    return Form;
}());



/***/ }),

/***/ "./src/app/core/models/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/*! exports provided: Errors, User, Profile, Form, FormListConfig, Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.model */ "./src/app/core/models/errors.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _errors_model__WEBPACK_IMPORTED_MODULE_0__["Errors"]; });

/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.model */ "./src/app/core/models/user.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user_model__WEBPACK_IMPORTED_MODULE_1__["User"]; });

/* harmony import */ var _profile_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.model */ "./src/app/core/models/profile.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return _profile_model__WEBPACK_IMPORTED_MODULE_2__["Profile"]; });

/* harmony import */ var _form_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.model */ "./src/app/core/models/form.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _form_model__WEBPACK_IMPORTED_MODULE_3__["Form"]; });

/* harmony import */ var _form_list_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-list-config.model */ "./src/app/core/models/form-list-config.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormListConfig", function() { return _form_list_config_model__WEBPACK_IMPORTED_MODULE_4__["FormListConfig"]; });

/* harmony import */ var _comment_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment.model */ "./src/app/core/models/comment.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _comment_model__WEBPACK_IMPORTED_MODULE_5__["Comment"]; });









/***/ }),

/***/ "./src/app/core/models/profile.model.ts":
/*!**********************************************!*\
  !*** ./src/app/core/models/profile.model.ts ***!
  \**********************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile() {
    }
    return Profile;
}());



/***/ }),

/***/ "./src/app/core/models/user.model.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models/user.model.ts ***!
  \*******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/core/singleton/index.ts":
/*!*****************************************!*\
  !*** ./src/app/core/singleton/index.ts ***!
  \*****************************************/
/*! exports provided: StepModelService, StateService, OdfCreatorService, PlainTextCreatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _step_model_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step-model.service */ "./src/app/core/singleton/step-model.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StepModelService", function() { return _step_model_service__WEBPACK_IMPORTED_MODULE_0__["StepModelService"]; });

/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.service */ "./src/app/core/singleton/state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return _state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]; });

/* harmony import */ var _odf_creator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./odf-creator.service */ "./src/app/core/singleton/odf-creator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OdfCreatorService", function() { return _odf_creator_service__WEBPACK_IMPORTED_MODULE_2__["OdfCreatorService"]; });

/* harmony import */ var _plain_text_creator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plain-text-creator.service */ "./src/app/core/singleton/plain-text-creator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlainTextCreatorService", function() { return _plain_text_creator_service__WEBPACK_IMPORTED_MODULE_3__["PlainTextCreatorService"]; });







/***/ }),

/***/ "./src/app/core/singleton/odf-creator.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/singleton/odf-creator.service.ts ***!
  \*******************************************************/
/*! exports provided: OdfCreatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OdfCreatorService", function() { return OdfCreatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http */ "./src/app/core/http/index.ts");
/* harmony import */ var _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/js/wodotexteditor/localfileeditor.js */ "./src/assets/js/wodotexteditor/localfileeditor.js");




var OdfCreatorService = /** @class */ (function () {
    function OdfCreatorService(commonsService) {
        this.commonsService = commonsService;
        this.reader = new FileReader();
    }
    OdfCreatorService.prototype.init = function (formType, uri, idOfContainer) {
        var _this = this;
        if (uri === void 0) { uri = ''; }
        this.commonsService.toggleSpinner();
        if (uri !== '') {
            this.createEditorFromURI(formType, idOfContainer, uri);
        }
        else {
            _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_3__["createEditor"](formType, idOfContainer);
        }
        return new Promise(function (resolve, reject) {
            var checkIfEditorCreated = setInterval(function () {
                if (document.getElementsByTagName('office:text').length &&
                    window['editor'].getEditorSession() &&
                    window['editor'].getEditorSession().getOdfCanvas()) {
                    _this.originalDocumentBodyClone = document.getElementById(idOfContainer).getElementsByTagName('office:text')[0].cloneNode(true);
                    _this.idOfContainer = idOfContainer;
                    _this.resizeDocumentContainer();
                    _this.commonsService.toggleSpinner();
                    clearInterval(checkIfEditorCreated);
                    resolve('Document ready');
                }
            }, 300);
        });
    };
    OdfCreatorService.prototype.closeAndDestroyEditor = function () {
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_3__["closeAndDestroyEditor"]();
    };
    OdfCreatorService.prototype.createEditorFromURI = function (formType, idOfContainer, dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([ab], { type: mimeString });
        var url = URL.createObjectURL(blob);
        window['DOCUMENTOURL'] = url;
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_3__["createEditor"](formType, idOfContainer);
    };
    OdfCreatorService.prototype.resizeDocumentContainer = function () {
        this.resizeEvent = function () {
            _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_3__["documentToFitScreen"]();
        };
        window.addEventListener('resize', this.resizeEvent);
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_3__["documentToFitScreen"]();
    };
    OdfCreatorService.prototype.destroyResizeDocumentContainer = function () {
        window.removeEventListener('resize', this.resizeEvent);
    };
    // DRAG AND DROP
    OdfCreatorService.prototype.setCursorPositionForDragAndDrop = function (e) {
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_3__["setCursorPositionForDragAndDrop"](e);
    };
    OdfCreatorService.prototype.setDragAndDropForSetUp = function () {
        var _this = this;
        // Dragover
        document.getElementById(this.idOfContainer).getElementsByTagName('office:text')[0].addEventListener('dragover', function (event) {
            event.preventDefault();
            _this.setCursorPositionForDragAndDrop(event);
        });
        // Drop
        document.getElementsByTagName('office:text')[0].addEventListener('drop', function (event) {
            _this.setCursorPositionForDragAndDrop(event);
            var cursorNode = document.getElementsByTagName('office:text')[0].getElementsByTagName('cursor')[0];
            cursorNode.parentNode.childNodes.forEach(function (element, index) {
                if (element['tagName'] === 'cursor') {
                    if (cursorNode.parentNode.childNodes[index + 1] !== undefined) {
                        // Si es un espacio usamos un div anterior, porque no lo detecta
                        if (cursorNode.parentNode.childNodes[index + 1]['tagName'] == 'text:s') {
                            var textContent = document.createTextNode(event['dataTransfer'].getData('text'));
                            cursorNode.parentNode.insertBefore(textContent, cursorNode.nextSibling);
                        }
                        else {
                            cursorNode.parentNode.childNodes[index + 1].textContent =
                                event['dataTransfer'].getData('text') + cursorNode.parentNode.childNodes[index + 1].textContent;
                        }
                    }
                    else {
                        var textContent = document.createTextNode(event['dataTransfer'].getData('text'));
                        cursorNode.parentNode.insertBefore(textContent, cursorNode);
                    }
                }
            });
            _this.refreshAndReload(event);
        });
    };
    OdfCreatorService.prototype.refreshAndReload = function (event) {
        var _this = this;
        this.commonsService.toggleSpinner();
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_3__["getEditor"]().getDocumentAsByteArray(function (err, data) {
            if (err) {
                alert(err);
                _this.commonsService.toggleSpinner();
                return;
            }
            // TODO: odfcontainer should have a property mimetype
            var mimetype = 'application/vnd.oasis.opendocument.text';
            var blob = new Blob([data.buffer], { type: mimetype });
            window['ODTDOCUMENT'] = blob;
            _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_3__["getEditor"]().closeDocument(function () {
                _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_3__["getEditor"]().openDocumentFromUrl(URL.createObjectURL(blob), function () {
                    _this.setDragAndDropForSetUp();
                    _this.commonsService.toggleSpinner();
                    // If caret goes back to begining this needs to be fired after load
                    _this.setCursorPositionForDragAndDrop(event);
                });
            });
        });
    };
    OdfCreatorService.prototype.getDocumentToSave = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_3__["getEditor"]().getDocumentAsByteArray(function (err, data) {
                if (err) {
                    alert(err);
                    _this.commonsService.toggleSpinner();
                    return;
                }
                // TODO: odfcontainer should have a property mimetype
                var mimetype = 'application/vnd.oasis.opendocument.text';
                var blob = new Blob([data.buffer], { type: mimetype });
                _this.reader.readAsDataURL(blob);
                _this.reader.onloadend = function () {
                    resolve(_this.reader.result);
                };
            });
        });
    };
    OdfCreatorService.prototype.setPreview = function (htmlText) {
        var _this = this;
        if (htmlText === void 0) { htmlText = ''; }
        this.commonsService.toggleSpinner();
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_3__["getEditor"]().getDocumentAsByteArray(function (err, data) {
            if (err) {
                alert(err);
                _this.commonsService.toggleSpinner();
                return;
            }
            // TODO: odfcontainer should have a property mimetype
            var mimetype = 'application/vnd.oasis.opendocument.text';
            var blob = new Blob([data.buffer], { type: mimetype });
            window['ODTDOCUMENT'] = blob;
            _this.reader.readAsDataURL(blob);
            _this.reader.onloadend = function () {
                _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_3__["getEditor"]().closeAndDestroyEditor(function () {
                    _this.init('fillForm', _this.reader.result, _this.idOfContainer).then(function () {
                        _this.commonsService.toggleSpinner();
                    });
                });
            };
        });
    };
    OdfCreatorService.prototype.unsetPreview = function () {
        var _this = this;
        this.commonsService.toggleSpinner();
        return new Promise(function (resolve, reject) {
            _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_3__["getEditor"]().closeAndDestroyEditor(function () {
                _this.init('createForm', _this.reader.result, _this.idOfContainer).then(function () {
                    _this.setDragAndDropForSetUp();
                    _this.commonsService.toggleSpinner();
                    resolve('Exit preview');
                });
            });
        });
    };
    /************************/
    /* INDICATIONS */
    /************************/
    OdfCreatorService.prototype.showIndicationInsideText = function (wordToReplace, indications) {
        var elementContainingWord = document.querySelector("[data-identifier=" + wordToReplace + "]");
        var para = document.createElement('div');
        para.innerHTML = "<div class=\"indicator-content not-selectable\">\n                        <button id=\"close-indication\">&#10006;</button>\n                        <span class=\"not-selectable\" style=\"margin:auto; width:100%\">" + indications + "\n                        </span>\n                    </div>";
        para.style.top = elementContainingWord.getBoundingClientRect().top.toString();
        para.style.left = elementContainingWord.getBoundingClientRect().left.toString();
        para.classList.add('indicator');
        para.classList.add('smooth-intro');
        para.classList.add('not-selectable');
        elementContainingWord.appendChild(para);
        var removeIndication = function (e) {
            if (e.target.classList.contains('icon-info-circle-solid')
                || e.target.classList.contains('indication')) {
                if (document.querySelectorAll('.indicator').length >= 2) {
                    para.parentNode.removeChild(para);
                    window.removeEventListener('click', removeIndication);
                }
            }
            else {
                para.parentNode.removeChild(para);
                window.removeEventListener('click', removeIndication);
            }
        };
        window.addEventListener('click', removeIndication);
        this.scrollToElementWithClass('indicator', para.offsetHeight);
    };
    /*****************************/
    /*END OF INDICATIONS**********/
    /*****************************/
    OdfCreatorService.prototype.buildDocument = function (steps) {
        this.currentDocumentBodyClone = this.originalDocumentBodyClone.cloneNode(true);
        // 1.- Change doc structure
        this.structuralChanges(steps);
        // 2.- Change values
        this.replacements(steps);
        document.getElementsByTagName('office:text')[0].parentElement.replaceChild(this.currentDocumentBodyClone.cloneNode(true), document.getElementsByTagName('office:text')[0]);
        this.scrollToElementWithClass('focused');
    };
    OdfCreatorService.prototype.scrollToElementWithClass = function (className, offset) {
        if (offset === void 0) { offset = 0; }
        var element = document.querySelector('.' + className);
        if (element) {
            element.parentElement
                .scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        }
    };
    /************************/
    /* CHANGE DOC STRUCTURE */
    /************************/
    OdfCreatorService.prototype.structuralChanges = function (steps) {
        // console.log(steps);
        steps.forEach(function (step) {
            if (step.type === 'iRadioC') {
                // this.buildForRadioC(step);
            }
            else if (step.type === 'iCheckbox') {
                // this.buildForCheckbox(step);
            }
            else if (step.type === 'iForEach') {
                // this.buildForEach(step);
            }
        });
    };
    /*****************************/
    /*END OF CHANGE DOC STRUCTURE*/
    /*****************************/
    OdfCreatorService.prototype.replacements = function (steps) {
        var _this = this;
        steps.forEach(function (step) {
            if (step.type === 'iText' || step.type === 'iDate' || step.type === 'iRadioA' || step.type === 'iRadioB') {
                var elementsContainingWord = _this.findAllwords(step.wordToReplace);
                var regexp_1 = new RegExp(step.wordToReplace, 'g');
                elementsContainingWord.forEach(function (elementContainingWord) {
                    var element = elementContainingWord;
                    if (element.innerHTML !== step.wordToReplace) {
                        // Find the innermost element containing the word
                        element = _this.findExactContainingElement(step.wordToReplace, element);
                    }
                    if (element) {
                        element.innerHTML = element.innerHTML.replace(regexp_1, "<span class=\"" + (step.isFocused ? 'highlight focused' : '') + "\" data-identifier=\"" + step.wordToReplace + "\">" + step.replacement + "</span>");
                    }
                });
            }
            else if (step.type === 'iRadioB') {
                var elementsContainingWord = _this.findAllwords(step.wordToReplace);
                var replacement_1;
                var regexp_2 = new RegExp(step.wordToReplace, 'g');
                elementsContainingWord.forEach(function (elementContainingWord) {
                    step.radios.forEach(function (radio) {
                        if (radio.checked) {
                            replacement_1 = radio.replacement;
                            var element = elementContainingWord;
                            if (element.innerHTML !== step.wordToReplace) {
                                // Find the innermost element containing the word
                                element = _this.findExactContainingElement(step.wordToReplace, element);
                            }
                            if (element) {
                                element.innerHTML = element.innerHTML.replace(regexp_2, "<span class=\" " + (step.isFocused ? 'focused' : '') + "\" data-identifier=\"" + step.wordToReplace + "\">" + step.replacement + "</span>");
                            }
                        }
                    });
                });
            }
        });
    };
    OdfCreatorService.prototype.findword = function (wordToReplace, bodyClone) {
        if (bodyClone === void 0) { bodyClone = this.currentDocumentBodyClone; }
        // USE ARRAY FOR ALL VALUES
        var children = bodyClone.childNodes;
        for (var i = 0; i < children.length; i++) {
            if (!this.elementIsExcluded(children[i])) {
                if (children[i].innerHTML.includes(wordToReplace) || children[i].textContent.includes(wordToReplace)) {
                    return children[i];
                }
            }
        }
    };
    OdfCreatorService.prototype.findAllwords = function (wordToReplace, bodyClone) {
        if (bodyClone === void 0) { bodyClone = this.currentDocumentBodyClone; }
        var allEelementsContainingWord = [];
        var children = bodyClone.childNodes;
        for (var i = 0; i < children.length; i++) {
            if (!this.elementIsExcluded(children[i])) {
                if (children[i].innerHTML.includes(wordToReplace)) {
                    allEelementsContainingWord.push(children[i]);
                }
            }
        }
        return allEelementsContainingWord;
    };
    OdfCreatorService.prototype.findExactContainingElement = function (wordToReplace, bodyClone) {
        var element = bodyClone;
        while (element.childNodes && element.childNodes.length > 0 && element.innerHTML.includes(wordToReplace)) {
            element.childNodes.forEach((function (el) {
                if (el.nodeName !== '#text') {
                    if (el.innerHTML.includes(wordToReplace)) {
                        element = el;
                    }
                }
                else {
                    if (el.textContent.includes(wordToReplace)) {
                        element = el;
                    }
                }
            }));
        }
        if (element.nodeName === '#text') {
            element = element.parentNode;
        }
        return element;
    };
    OdfCreatorService.prototype.elementIsExcluded = function (element) {
        var excludedElements = [
            'office:text',
            'text:sequence-decls',
            'text:sequence-decl',
            'draw:frame',
            'draw:image',
            'office:annotation',
            'office:annotation-end',
            'dc:creator',
            'dc:date'
        ];
        return excludedElements.includes(element.nodeName);
    };
    OdfCreatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http__WEBPACK_IMPORTED_MODULE_2__["CommonsService"]])
    ], OdfCreatorService);
    return OdfCreatorService;
}());



/***/ }),

/***/ "./src/app/core/singleton/plain-text-creator.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/singleton/plain-text-creator.service.ts ***!
  \**************************************************************/
/*! exports provided: PlainTextCreatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlainTextCreatorService", function() { return PlainTextCreatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http */ "./src/app/core/http/index.ts");



var PlainTextCreatorService = /** @class */ (function () {
    function PlainTextCreatorService(commonsService) {
        this.commonsService = commonsService;
    }
    PlainTextCreatorService.prototype.init = function (editorDivId, previewDivId) {
        this.editorDiv = editorDivId;
        this.previewTextDiv = previewDivId;
    };
    PlainTextCreatorService.prototype.quillModules = function () {
        return {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
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
                ['link', 'image'],
                ['clean']
            ]
        };
    };
    PlainTextCreatorService.prototype.customOptions = function () {
        return [{
                import: 'formats/font',
                whitelist: ['roboto', 'times-new-roman', 'arial', 'lato', 'montserrat']
            }];
    };
    PlainTextCreatorService.prototype.setAdditionalQuillButtons = function (quillElement) {
        var _this = this;
        var span = document.createElement('span');
        span.classList.add('ql-formats');
        var button = document.createElement('button');
        button.className = 'icon icon-expand-solid';
        button.addEventListener('click', function () {
            _this.commonsService.enableFullScreen('editor-container');
        });
        span.appendChild(button);
        quillElement.querySelector('.ql-toolbar').appendChild(span);
    };
    PlainTextCreatorService.prototype.setPreview = function (quillText) {
        if (quillText === void 0) { quillText = ''; }
        document.getElementById(this.editorDiv).classList.replace('d-block', 'd-none');
        document.getElementById(this.previewTextDiv).classList.replace('d-none', 'd-block');
        this.quillText = quillText;
    };
    PlainTextCreatorService.prototype.unsetPreview = function () {
        document.getElementById(this.editorDiv).classList.replace('d-none', 'd-block');
        document.getElementById(this.previewTextDiv).classList.replace('d-block', 'd-none');
    };
    PlainTextCreatorService.prototype.setQuillText = function (quillText) {
        this.quillText = quillText;
    };
    /************************/
    /* INDICATIONS */
    /************************/
    PlainTextCreatorService.prototype.showIndicationInsideText = function (wordToReplace, indications) {
        var aTags = document.querySelector('#editor-preview').getElementsByTagName('*');
        var element;
        var scrollTop;
        for (var i = 0; i < aTags.length; i++) {
            if (aTags[i].getAttribute('data-identifier') === wordToReplace) {
                element = aTags[i];
                scrollTop = document.querySelector('#editor-preview').scrollTop;
                element.scrollIntoView({ behavior: 'smooth' });
                break;
            }
        }
        var scrollTimeout;
        var scrollListenner = function () {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function () {
                displayIndicator();
                document.querySelector('#editor-preview').removeEventListener('scroll', scrollListenner);
            }, 100);
        };
        document.querySelector('#editor-preview').addEventListener('scroll', scrollListenner);
        // If it is not scrolling
        setTimeout(function () {
            if (scrollTop === document.querySelector('#editor-preview').scrollTop) {
                displayIndicator();
                document.querySelector('#editor-preview').removeEventListener('scroll', scrollListenner);
            }
        }, 100);
        var displayIndicator = function () {
            var para = document.createElement('div');
            para.innerHTML = "<div class=\"indicator-content\" style=\"margin:auto;width:95%\">\n                            <button id=\"close-indication\">&#10006;</button>\n                            <span style=\"width: 100%;\">" + indications + "\n                            </span>\n                        </div>";
            para.style.top = ((element.getBoundingClientRect().top)
                + (window.innerHeight / 100 * 4)) + 'px';
            para.style.left = document.querySelector('#editor-preview').getBoundingClientRect().left + 'px';
            para.style.width = document.querySelector('#editor-preview').clientWidth + 'px';
            para.classList.add('indicator');
            para.style.position = 'absolute';
            para.classList.add('smooth-intro');
            element.appendChild(para);
            window.addEventListener('click', removeIndication);
            function removeIndication(e) {
                if (e.target.classList.contains('icon-info-circle-solid')
                    || e.target.classList.contains('indication')) {
                    if (document.querySelectorAll('.indicator').length >= 2) {
                        para.parentNode.removeChild(para);
                        window.removeEventListener('click', removeIndication);
                    }
                }
                else {
                    para.parentNode.removeChild(para);
                    window.removeEventListener('click', removeIndication);
                }
            }
        };
    };
    /*****************************/
    /*END OF INDICATIONS**********/
    /*****************************/
    PlainTextCreatorService.prototype.buildDocument = function (steps) {
        var textPreview = this.replacements(steps);
        var textPreviewDiv = document.getElementById(this.previewTextDiv);
        while (textPreviewDiv.firstChild) {
            textPreviewDiv.removeChild(textPreviewDiv.firstChild);
        }
        textPreviewDiv.insertAdjacentHTML('beforeend', textPreview);
        this.scrollToElement();
    };
    PlainTextCreatorService.prototype.replacements = function (steps) {
        var textPreview = this.quillText;
        steps.forEach(function (step) {
            if (step.type === 'iText' || step.type === 'iRadioA' || step.type === 'iRadioB') {
                var replacement = "<mark id=\"" + (step.isFocused ? 'focused' : '') + "\" data-identifier=\"" + step.wordToReplace + "\">" + step.replacement + "</mark>";
                textPreview = textPreview.replace(step.wordToReplace, replacement);
            }
            else if (step.type === 'iRadioC') {
                // this.buildForRadioC(step);
            }
            else if (step.type === 'iCheckbox') {
                // this.buildForCheckbox(step);
            }
            else if (step.type === 'iForEach') {
                // this.buildForEach(step);
            }
        });
        return textPreview;
    };
    PlainTextCreatorService.prototype.scrollToElement = function () {
        var focusedElement = document.getElementById('focused');
        if (focusedElement) {
            focusedElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    PlainTextCreatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http__WEBPACK_IMPORTED_MODULE_2__["CommonsService"]])
    ], PlainTextCreatorService);
    return PlainTextCreatorService;
}());



/***/ }),

/***/ "./src/app/core/singleton/state.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/singleton/state.service.ts ***!
  \*************************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var StateService = /** @class */ (function () {
    function StateService() {
        this.stateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.state = this.stateSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    StateService.prototype.setState = function (stateType) {
        this.stateSubject.next(stateType);
    };
    StateService.prototype.getCurrentState = function () {
        return this.stateSubject;
    };
    StateService.prototype.stateSubscribe = function () {
        return this.state;
    };
    StateService.prototype.setDocumentType = function (documentType) {
        this.documentType = documentType;
    };
    StateService.prototype.getDocumentType = function () {
        return this.documentType;
    };
    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/core/singleton/step-model.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/singleton/step-model.service.ts ***!
  \******************************************************/
/*! exports provided: StepModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepModelService", function() { return StepModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _odf_creator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./odf-creator.service */ "./src/app/core/singleton/odf-creator.service.ts");
/* harmony import */ var _plain_text_creator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plain-text-creator.service */ "./src/app/core/singleton/plain-text-creator.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state.service */ "./src/app/core/singleton/state.service.ts");






var StepModelService = /** @class */ (function () {
    function StepModelService(odfCreatorService, plainTextCreatorService, stateService) {
        this.odfCreatorService = odfCreatorService;
        this.plainTextCreatorService = plainTextCreatorService;
        this.stateService = stateService;
        this.stepsEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    StepModelService.prototype.init = function (steps, documentType) {
        this.steps = steps;
        this.documentType = documentType;
        if (this.documentType === 'plain') {
            this.documentService = this.plainTextCreatorService;
        }
        else if (this.documentType === 'office') {
            this.documentService = this.odfCreatorService;
        }
    };
    StepModelService.prototype.setInitialState = function () {
        var _this = this;
        this.steps.forEach(function (step) {
            switch (step.type) {
                case 'iText':
                    _this.input(step.replacement, step.type, step.wordToReplace, false);
                    break;
                default:
                    break;
            }
        });
        this.buildDocument();
    };
    StepModelService.prototype.addNewStep = function (step) {
        this.steps.push(step);
    };
    StepModelService.prototype.removeStep = function () {
        this.stepsEvent.next('remove-step');
    };
    StepModelService.prototype.buildDocument = function () {
        this.documentService.buildDocument(this.steps);
    };
    StepModelService.prototype.input = function (replacement, inputType, wordToReplace, buildDocumentAfter) {
        if (buildDocumentAfter === void 0) { buildDocumentAfter = true; }
        // 1. Find the step
        this.steps.forEach(function (step) {
            if (step.wordToReplace === wordToReplace) {
                step.replacement = replacement;
                step.isFocused = true;
            }
            else {
                step.isFocused = false;
            }
        });
        if (buildDocumentAfter) {
            this.buildDocument();
        }
    };
    StepModelService.prototype.getStepsModel = function () {
        return this.steps;
    };
    StepModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_odf_creator_service__WEBPACK_IMPORTED_MODULE_3__["OdfCreatorService"],
            _plain_text_creator_service__WEBPACK_IMPORTED_MODULE_4__["PlainTextCreatorService"],
            _state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]])
    ], StepModelService);
    return StepModelService;
}());



/***/ }),

/***/ "./src/app/shared/comments/comment-response/comment-response.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/comments/comment-response/comment-response.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comments__comment__top\">\n    <div class=\"comments__comment__top__author\">\n        <img src=\"assets/images/avatar.jpg\" alt=\"avatar\">\n        <h4>{{comment.author.username}}</h4>\n    </div>\n    <span class=\"comments__comment__top__date\">{{comment.updatedAt | date: 'dd/MM/yyyy'}}</span>\n</div>\n<div class=\"comments__comment__middle\" [ngClass]=\"{'comment-d-none': isEditing}\">\n    <p #commentBodyLong>\n        {{ comment.body }}\n    </p>\n    <p #commentBodyShort>\n        {{ comment.body.substring(0, maxLenght) }}\n    </p>\n    <span *ngIf=\"showMore === false && comment.body.length > maxLenght\" (click)=\"commentBody(true)\">Leer más</span>\n    <span *ngIf=\"showMore === true\" (click)=\"commentBody(false)\">Leer menos</span>\n</div>\n<div class=\"comments__comment__middle comment-middle-edit\" [ngClass]=\"{'comment-d-none': !isEditing}\" *ngIf=\"canModify\">\n    <textarea cols=\"50\" rows=\"5\" [value]=\"comment.body\" #editTextArea></textarea>\n    <input type=\"submit\" value=\"Update\" (click)=\"updateComment(editTextArea.value)\">\n    <br>\n    <button class=\"button\" (click)=\"isEditing = false\">Cancel</button>\n</div>\n<div class=\"comment-bottom comment-bottom-edit\" [ngClass]=\"{'comment-d-none': isEditing}\" *ngIf=\"canModify\">\n    <button class=\"comments__comment__bottom__button edit\" (click)=\"isEditing = true\">Editar</button>\n    <button class=\"comments__comment__bottom__button edit\" (click)=\"deleteClicked()\">Eliminar</button>\n</div>"

/***/ }),

/***/ "./src/app/shared/comments/comment-response/comment-response.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/comments/comment-response/comment-response.component.ts ***!
  \********************************************************************************/
/*! exports provided: CommentResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentResponseComponent", function() { return CommentResponseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var CommentResponseComponent = /** @class */ (function () {
    function CommentResponseComponent(userService, commentsService, toastr) {
        this.userService = userService;
        this.commentsService = commentsService;
        this.toastr = toastr;
        this.deleteComment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showMore = false;
        this.maxLenght = 250;
        this.isSubmitting = false;
        this.isEditing = false;
    }
    CommentResponseComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load the current user's data
        this.userService.currentUser.subscribe(function (userData) {
            _this.canModify = (userData.username === _this.comment.author.username);
        });
        this.commentBody(false);
    };
    CommentResponseComponent.prototype.commentBody = function (show) {
        this.showMore = show;
        if (this.comment.body.length > this.maxLenght) {
            if (!this.showMore) {
                this.commentBodyLong.nativeElement.style.display = 'none';
                this.commentBodyShort.nativeElement.style.display = 'block';
            }
            else {
                this.commentBodyLong.nativeElement.style.display = 'block';
                this.commentBodyShort.nativeElement.style.display = 'none';
            }
        }
        else {
            this.commentBodyLong.nativeElement.style.display = 'block';
            this.commentBodyShort.nativeElement.style.display = 'none';
        }
    };
    CommentResponseComponent.prototype.updateComment = function (input) {
        var _this = this;
        this.isSubmitting = true;
        this.commentsService
            .updateComment(this.slug, input, this.comment._id)
            .subscribe(function (comment) {
            _this.comment.body = comment.body;
            _this.isEditing = false;
            _this.editTextArea.nativeElement.value = '';
        }, function (errors) {
            _this.isSubmitting = false;
            _this.toastr.error(errors, 'Comment error', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
        });
    };
    CommentResponseComponent.prototype.deleteClicked = function () {
        this.deleteComment.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentResponseComponent.prototype, "comment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CommentResponseComponent.prototype, "slug", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentResponseComponent.prototype, "deleteComment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentBodyLong'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CommentResponseComponent.prototype, "commentBodyLong", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentBodyShort'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CommentResponseComponent.prototype, "commentBodyShort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editTextArea'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CommentResponseComponent.prototype, "editTextArea", void 0);
    CommentResponseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment-response',
            template: __webpack_require__(/*! ./comment-response.component.html */ "./src/app/shared/comments/comment-response/comment-response.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["CommentsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CommentResponseComponent);
    return CommentResponseComponent;
}());



/***/ }),

/***/ "./src/app/shared/comments/comment/comment.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/comments/comment/comment.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comments__comment\">\n    <div class=\"comments__comment__top\">\n        <div class=\"comments__comment__top__author\">\n            <img src=\"assets/images/avatar.jpg\" alt=\"avatar\">\n            <h4>{{comment.author.username}}</h4>\n        </div>\n        <span class=\"comments__comment__top__date\">{{comment.updatedAt | date: 'dd/MM/yyyy'}}</span>\n    </div>\n    <div class=\"comments__comment__middle\" [ngClass]=\"{'comment-d-none': isEditing}\">\n        <p #commentBodyLong>\n            {{ comment.body }}\n        </p>\n        <p #commentBodyShort>\n            {{ comment.body.substring(0, maxLenght) }}\n        </p>\n        <span *ngIf=\"showMore === false && comment.body.length > maxLenght\" (click)=\"commentBody(true)\">Leer más</span>\n        <span *ngIf=\"showMore === true\" (click)=\"commentBody(false)\">Leer menos</span>\n    </div>\n    <div class=\"comments__comment__middle comment-middle-edit\" [ngClass]=\"{'comment-d-none': !isEditing}\">\n        <textarea cols=\"50\" rows=\"5\" [value]=\"comment.body\" #editTextArea></textarea>\n        <input type=\"submit\" class=\"update-comment\" value=\"Update\" (click)=\"updateComment(editTextArea.value)\">\n        <br>\n        <button class=\"button\" (click)=\"isEditing = false\">Cancel</button>\n    </div>\n    <div class=\"comments__comment__bottom\" [ngClass]=\"{'comment-d-none': isEditing}\">\n        <div class=\"comments__comment__bottom__likes\">\n            <span class=\"icon icon-like-button\" *ngIf=\"!isAuth\"></span>\n            <span class=\"icon icon-thumbs-up-regular comment-not-liked\" (click)=\"likeComment()\" *ngIf=\"!comment.liked && isAuth\"></span>\n            <span class=\"icon icon-like-button comment-liked\" *ngIf=\"comment.liked && isAuth\" (click)=\"dislikeComment()\"></span>\n\n            <span> &emsp; {{ comment.likesCount }}</span>\n        </div>\n        <span *appShowAuthed=\"true\">\n            <button class=\"comments__comment__bottom__button\" *ngIf=\"!canModify\" \n            (click)=\"showResponses(!responsesAreShowing)\" [disabled]=\"responsesAreShowing\">Responder</button>\n        </span>\n\n        <button class=\"comments__comment__bottom__button edit\" (click)=\"isEditing = true\" *ngIf=\"canModify\">Editar</button>\n        <button class=\"comments__comment__bottom__button edit\" (click)=\"deleteClicked()\" *ngIf=\"canModify\">Eliminar</button>\n        <span class=\"comments__comment__bottom__responses-bottom\" (click)=\"showResponses(!responsesAreShowing)\">\n            Respuestas ({{comment.responses.length}})  \n            <!-- Arrow down -->\n            <span *ngIf=\"!responsesAreShowing\">&#9662;</span>\n            <!-- Arrow up -->\n            <span *ngIf=\"responsesAreShowing\">&#9652;</span>\n        </span>\n    </div>\n    <div class=\"comments__comment__comment-responses\" *ngIf=\"responsesAreShowing\">\n        <div class=\"comments__comment__comment-responses__line\"></div>\n        <div class=\"comments__comment__comment-responses__container\">\n            <app-comment-response class=\"comments__comment comments__comment--response\" \n            *ngFor=\"let commentResponse of comment.responses\" [slug]=\"slug\" \n            (deleteComment)=\"onDeleteComment(commentResponse)\" [comment]=\"commentResponse\"></app-comment-response>\n            <div class=\"comments__new-comment\" *ngIf=\"!canModify\">\n                <textarea cols=\"50\" rows=\"5\" #commentTextArea></textarea>\n                <input type=\"submit\" value=\"Respond\" (click)=\"addCommentResponse(commentTextArea.value)\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/comments/comment/comment.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/comments/comment/comment.component.ts ***!
  \**************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var CommentComponent = /** @class */ (function () {
    function CommentComponent(elementRef, userService, commentsService, toastr) {
        this.elementRef = elementRef;
        this.userService = userService;
        this.commentsService = commentsService;
        this.toastr = toastr;
        this.deleteComment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showMore = false;
        this.responsesAreShowing = false;
        this.maxLenght = 250;
        this.isAuth = false;
        this.isSubmitting = false;
        this.isEditing = false;
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load the current user's data
        this.userService.currentUser.subscribe(function (userData) {
            _this.canModify = (userData.username === _this.comment.author.username);
            _this.isAuth = true;
            _this.currentUserData = userData;
        });
        this.commentBody(false);
    };
    CommentComponent.prototype.commentBody = function (show) {
        this.showMore = show;
        if (this.comment.body.length > this.maxLenght) {
            if (!this.showMore) {
                this.commentBodyLong.nativeElement.style.display = 'none';
                this.commentBodyShort.nativeElement.style.display = 'block';
            }
            else {
                this.commentBodyLong.nativeElement.style.display = 'block';
                this.commentBodyShort.nativeElement.style.display = 'none';
            }
        }
        else {
            this.commentBodyLong.nativeElement.style.display = 'block';
            this.commentBodyShort.nativeElement.style.display = 'none';
        }
    };
    CommentComponent.prototype.likeComment = function () {
        var _this = this;
        this.commentsService.like(this.slug, this.comment.id).subscribe(function (comment) {
            _this.comment.liked = comment.liked;
            _this.comment.likesCount = comment.likesCount;
        });
    };
    CommentComponent.prototype.dislikeComment = function () {
        var _this = this;
        this.commentsService.dislike(this.slug, this.comment.id).subscribe(function (comment) {
            _this.comment.liked = comment.liked;
            _this.comment.likesCount = comment.likesCount;
        });
    };
    CommentComponent.prototype.deleteClicked = function () {
        this.deleteComment.emit(true);
    };
    CommentComponent.prototype.showResponses = function (responsesAreShowing) {
        this.responsesAreShowing = responsesAreShowing;
    };
    CommentComponent.prototype.addCommentResponse = function (input) {
        var _this = this;
        if (input !== '') {
            this.isSubmitting = true;
            this.commentsService
                .responseToComment(this.slug, input, this.comment.id)
                .subscribe(function (comment) {
                comment['_id'] = comment.id;
                comment.author = _this.currentUserData;
                _this.comment.responses.push(comment);
                _this.isSubmitting = false;
                _this.commentTextArea.nativeElement.value = '';
            }, function (errors) {
                _this.isSubmitting = false;
                _this.toastr.error(errors, 'Comment error', {
                    positionClass: 'toast-bottom-right',
                    progressBar: true,
                    progressAnimation: 'decreasing'
                });
            });
        }
        else {
            this.toastr.error('Comment is empty', '', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
        }
    };
    CommentComponent.prototype.updateComment = function (input) {
        var _this = this;
        this.isSubmitting = true;
        this.commentsService
            .updateComment(this.slug, input, this.comment.id)
            .subscribe(function (comment) {
            _this.comment.body = comment.body;
            _this.isEditing = false;
            _this.editTextArea.nativeElement.value = '';
        }, function (errors) {
            _this.isSubmitting = false;
            _this.toastr.error(errors, 'Comment error', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
        });
    };
    CommentComponent.prototype.onDeleteComment = function (comment) {
        var _this = this;
        this.commentsService.destroy(comment._id, this.slug)
            .subscribe(function (success) {
            _this.comment.responses = _this.comment.responses.filter(function (item) { return item !== comment; });
            _this.toastr.success('Comment deleted', '', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core__WEBPACK_IMPORTED_MODULE_2__["Comment"])
    ], CommentComponent.prototype, "comment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CommentComponent.prototype, "slug", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentComponent.prototype, "deleteComment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentBodyLong'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CommentComponent.prototype, "commentBodyLong", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentBodyShort'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CommentComponent.prototype, "commentBodyShort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentTextArea'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CommentComponent.prototype, "commentTextArea", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editTextArea'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CommentComponent.prototype, "editTextArea", void 0);
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/shared/comments/comment/comment.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _core__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["CommentsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/shared/comments/comments.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/comments/comments.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;\">\n    <div class=\"comments__new-comment\" *appShowAuthed=\"true\">\n        <textarea cols=\"70\" rows=\"5\" #commentTextArea></textarea>\n        <input type=\"submit\" value=\"Comment\" (click)=\"addComment(commentTextArea.value)\" [disabled]=\"isSubmitting\">\n    </div>\n    <div class=\"comments__new-comment\" *appShowAuthed=\"false\">\n        <textarea cols=\"70\" rows=\"5\" disabled style=\"background-color:#ECF9F8;\"></textarea>\n        <input type=\"submit\" value=\"Comment\" (click)=\"redirectToLogin()\">\n    </div>\n    <div class=\"comments__orderby-comments\">\n        <div class=\"comments__orderby-comments__container\">\n            <label for=\"orderby\">Order by: </label>\n            <select id=\"orderby\" autofocus=\"true\" (change)=\"setOrder($event.target.value)\">\n                <option value=\"Date\">Date</option>\n                <option value=\"Likes\">Likes</option>\n            </select>\n        </div>\n    </div>\n    <app-comment \n                *ngFor=\"let comment of comments\" [comment]=\"comment\"\n                [slug]=\"form.slug\" (deleteComment)=\"onDeleteComment(comment)\"></app-comment>\n</div>"

/***/ }),

/***/ "./src/app/shared/comments/comments.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/comments/comments.component.ts ***!
  \*******************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(router, elementRef, commentsService, toastr) {
        this.router = router;
        this.elementRef = elementRef;
        this.commentsService = commentsService;
        this.toastr = toastr;
        this.isSubmitting = false;
    }
    CommentsComponent.prototype.ngOnInit = function () {
        this.populateComments();
    };
    CommentsComponent.prototype.populateComments = function () {
        var _this = this;
        this.commentsService.getAll(this.form.slug, this.orderBy)
            .subscribe(function (comments) {
            _this.comments = comments;
            _this.commentsLength = comments.length;
        });
    };
    CommentsComponent.prototype.setOrder = function (order) {
        this.orderBy = order;
        this.populateComments();
    };
    CommentsComponent.prototype.addComment = function (input) {
        var _this = this;
        if (input !== '') {
            this.isSubmitting = true;
            this.commentsService
                .add(this.form.slug, input)
                .subscribe(function (comment) {
                _this.comments.unshift(comment);
                _this.isSubmitting = false;
                _this.toastr.success('Comment added', '', {
                    positionClass: 'toast-bottom-right',
                    progressBar: true,
                    progressAnimation: 'decreasing'
                });
                _this.commentTextArea.nativeElement.value = '';
            }, function (errors) {
                _this.isSubmitting = false;
                _this.toastr.error(errors, 'Comment error', {
                    positionClass: 'toast-bottom-right',
                    progressBar: true,
                    progressAnimation: 'decreasing'
                });
            });
        }
        else {
            this.toastr.error('Comment is empty', '', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
        }
    };
    CommentsComponent.prototype.onDeleteComment = function (comment) {
        var _this = this;
        this.commentsService.destroy(comment.id, this.form.slug)
            .subscribe(function (success) {
            _this.comments = _this.comments.filter(function (item) { return item !== comment; });
            _this.toastr.success('Comment deleted', '', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
        });
    };
    CommentsComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/auth/login']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core__WEBPACK_IMPORTED_MODULE_3__["Form"])
    ], CommentsComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentTextArea'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CommentsComponent.prototype, "commentTextArea", void 0);
    CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/shared/comments/comments.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _core__WEBPACK_IMPORTED_MODULE_3__["CommentsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: LikesButtonComponent, ListErrorsComponent, LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _likes_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes-button */ "./src/app/shared/components/likes-button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LikesButtonComponent", function() { return _likes_button__WEBPACK_IMPORTED_MODULE_0__["LikesButtonComponent"]; });

/* harmony import */ var _list_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-errors */ "./src/app/shared/components/list-errors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function() { return _list_errors__WEBPACK_IMPORTED_MODULE_1__["ListErrorsComponent"]; });

/* harmony import */ var _loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-spinner */ "./src/app/shared/components/loading-spinner/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return _loading_spinner__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerComponent"]; });






/***/ }),

/***/ "./src/app/shared/components/likes-button/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/likes-button/index.ts ***!
  \*********************************************************/
/*! exports provided: LikesButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _likes_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes-button.component */ "./src/app/shared/components/likes-button/likes-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LikesButtonComponent", function() { return _likes_button_component__WEBPACK_IMPORTED_MODULE_0__["LikesButtonComponent"]; });




/***/ }),

/***/ "./src/app/shared/components/likes-button/likes-button.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/likes-button/likes-button.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-menu__likes-views__likes\" *appShowAuthed=\"false\">\n    <span class=\"icon icon-thumbs-up\"></span>\n    <span>&emsp; {{ form.likesCount }}</span>\n</div>\n<div class=\"sub-menu__likes-views__likes\" *appShowAuthed=\"true\">\n    <span class=\"icon icon-thumbs-up like-form-button\" (click)=\"disLikeForm()\" *ngIf=\"form.liked\"></span>\n    <span class=\"icon icon-thumbs-up-regular like-form-button\" (click)=\"likeForm()\" *ngIf=\"!form.liked\"></span>\n    <span>&emsp; {{ form.likesCount }}</span>\n</div>\n<div class=\"sub-menu__likes-views__views\">\n    <span class=\"icon icon-eye-solid\"></span>\n    <span> &emsp; {{ form.viewsCount }}</span>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/likes-button/likes-button.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/likes-button/likes-button.component.ts ***!
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
            template: __webpack_require__(/*! ./likes-button.component.html */ "./src/app/shared/components/likes-button/likes-button.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["FormService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LikesButtonComponent);
    return LikesButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/list-errors/index.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/list-errors/index.ts ***!
  \********************************************************/
/*! exports provided: ListErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_errors_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-errors.component */ "./src/app/shared/components/list-errors/list-errors.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function() { return _list_errors_component__WEBPACK_IMPORTED_MODULE_0__["ListErrorsComponent"]; });




/***/ }),

/***/ "./src/app/shared/components/list-errors/list-errors.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/list-errors/list-errors.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"error-messages\" *ngIf=\"errorList\">\n  <li *ngFor=\"let error of errorList\">\n    {{ error }}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/shared/components/list-errors/list-errors.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/list-errors/list-errors.component.ts ***!
  \************************************************************************/
/*! exports provided: ListErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function() { return ListErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");



var ListErrorsComponent = /** @class */ (function () {
    function ListErrorsComponent() {
        this.formattedErrors = [];
    }
    Object.defineProperty(ListErrorsComponent.prototype, "errors", {
        set: function (errorList) {
            this.formattedErrors = Object.keys(errorList.errors || {})
                .map(function (key) { return key + " " + errorList.errors[key]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListErrorsComponent.prototype, "errorList", {
        get: function () { return this.formattedErrors; },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core__WEBPACK_IMPORTED_MODULE_2__["Errors"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["Errors"]])
    ], ListErrorsComponent.prototype, "errors", null);
    ListErrorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-errors',
            template: __webpack_require__(/*! ./list-errors.component.html */ "./src/app/shared/components/list-errors/list-errors.component.html")
        })
    ], ListErrorsComponent);
    return ListErrorsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/loading-spinner/index.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/index.ts ***!
  \************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-spinner.component */ "./src/app/shared/components/loading-spinner/loading-spinner.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return _loading_spinner_component__WEBPACK_IMPORTED_MODULE_0__["LoadingSpinnerComponent"]; });




/***/ }),

/***/ "./src/app/shared/components/loading-spinner/loading-spinner.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/loading-spinner.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\" id=\"spinner\">\n  <div id=\"main\">\n      <span class=\"spinner\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/loading-spinner/loading-spinner.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/loading-spinner.component.ts ***!
  \********************************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading-spinner',
            template: __webpack_require__(/*! ./loading-spinner.component.html */ "./src/app/shared/components/loading-spinner/loading-spinner.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, InputTextComponent, InputRadioAComponent, InputRadioBComponent, InputRadioCComponent, OdfEditorService, InputCommonsService, NewRadioAComponent, NewRadioBComponent, NewRadioCComponent, HiddenInputsComponent, IndicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs */ "./src/app/shared/inputs/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputTextComponent", function() { return _inputs__WEBPACK_IMPORTED_MODULE_1__["InputTextComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputRadioAComponent", function() { return _inputs__WEBPACK_IMPORTED_MODULE_1__["InputRadioAComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputRadioBComponent", function() { return _inputs__WEBPACK_IMPORTED_MODULE_1__["InputRadioBComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputRadioCComponent", function() { return _inputs__WEBPACK_IMPORTED_MODULE_1__["InputRadioCComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputCommonsService", function() { return _inputs__WEBPACK_IMPORTED_MODULE_1__["InputCommonsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioAComponent", function() { return _inputs__WEBPACK_IMPORTED_MODULE_1__["NewRadioAComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioBComponent", function() { return _inputs__WEBPACK_IMPORTED_MODULE_1__["NewRadioBComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioCComponent", function() { return _inputs__WEBPACK_IMPORTED_MODULE_1__["NewRadioCComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HiddenInputsComponent", function() { return _inputs__WEBPACK_IMPORTED_MODULE_1__["HiddenInputsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndicationsComponent", function() { return _inputs__WEBPACK_IMPORTED_MODULE_1__["IndicationsComponent"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/shared/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OdfEditorService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["OdfEditorService"]; });






/***/ }),

/***/ "./src/app/shared/inputs/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/inputs/index.ts ***!
  \****************************************/
/*! exports provided: InputTextComponent, InputRadioAComponent, InputRadioBComponent, InputRadioCComponent, InputCommonsService, NewRadioAComponent, NewRadioBComponent, NewRadioCComponent, HiddenInputsComponent, IndicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-text */ "./src/app/shared/inputs/input-text/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputTextComponent", function() { return _input_text__WEBPACK_IMPORTED_MODULE_0__["InputTextComponent"]; });

/* harmony import */ var _input_radio_a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-radio-a */ "./src/app/shared/inputs/input-radio-a/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputRadioAComponent", function() { return _input_radio_a__WEBPACK_IMPORTED_MODULE_1__["InputRadioAComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioAComponent", function() { return _input_radio_a__WEBPACK_IMPORTED_MODULE_1__["NewRadioAComponent"]; });

/* harmony import */ var _input_radio_b__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-radio-b */ "./src/app/shared/inputs/input-radio-b/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputRadioBComponent", function() { return _input_radio_b__WEBPACK_IMPORTED_MODULE_2__["InputRadioBComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioBComponent", function() { return _input_radio_b__WEBPACK_IMPORTED_MODULE_2__["NewRadioBComponent"]; });

/* harmony import */ var _input_radio_c__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-radio-c */ "./src/app/shared/inputs/input-radio-c/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputRadioCComponent", function() { return _input_radio_c__WEBPACK_IMPORTED_MODULE_3__["InputRadioCComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioCComponent", function() { return _input_radio_c__WEBPACK_IMPORTED_MODULE_3__["NewRadioCComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HiddenInputsComponent", function() { return _input_radio_c__WEBPACK_IMPORTED_MODULE_3__["HiddenInputsComponent"]; });

/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/app/shared/inputs/shared/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputCommonsService", function() { return _shared__WEBPACK_IMPORTED_MODULE_4__["InputCommonsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndicationsComponent", function() { return _shared__WEBPACK_IMPORTED_MODULE_4__["IndicationsComponent"]; });


// export * from './input-date';






/***/ }),

/***/ "./src/app/shared/inputs/input-radio-a/index.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-a/index.ts ***!
  \******************************************************/
/*! exports provided: InputRadioAComponent, NewRadioAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_radio_a_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-radio-a.component */ "./src/app/shared/inputs/input-radio-a/input-radio-a.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputRadioAComponent", function() { return _input_radio_a_component__WEBPACK_IMPORTED_MODULE_0__["InputRadioAComponent"]; });

/* harmony import */ var _new_radio_a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-radio-a */ "./src/app/shared/inputs/input-radio-a/new-radio-a/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioAComponent", function() { return _new_radio_a__WEBPACK_IMPORTED_MODULE_1__["NewRadioAComponent"]; });





/***/ }),

/***/ "./src/app/shared/inputs/input-radio-a/input-radio-a.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-a/input-radio-a.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-creator__fields-area__field\" [id]=\"'parentId' + referenceNumber\" #delete>\n    <div class=\"form-creator__fields-area__field__container\">\n        <div class=\"form-creator__fields-area__field__field-area form-creator__fields-area__field__field-area--input-text\">\n            <!-- CREATE FORM -->\n            <div class=\"form-creator__fields-area__field__top d-flex\" *ngIf=\"state === 'create-form'\">\n                <div class=\"form-creator__fields-area__field__top__identifier\">\n                    <span class=\"form-creator__fields-area__field__top__identifier__label\">\n                        Id:\n                    </span>\n                    <span class=\"form-creator__fields-area__field__top__identifier__id\">\n                        <span (dblclick)=\"showChangeIdInputField()\" (mousedown)=\"enableDrag()\" #draggableText>{{referenceNumber}}</span>\n                        <input (blur)=\"showChangeIdInputField()\" (keyup.enter)=\"changeIdInput.blur()\" \n                        (keyup)=\"changeId($event)\" type=\"text\" value=\"{{referenceNumber}}\" #changeIdInput style=\"display: none\">\n                    </span>\n                </div>\n            </div>\n            <!---------------->\n            <!-- FILL FORM -->\n            <div class=\"form-creator__fields-area__field__top form-creator__fields-area__field__top--fill-form\" *ngIf=\"state === 'fill-form'\">\n                <div class=\"indication\" *ngIf=\"indications.areIndications\">\n                    <span class=\"icon icon-info-circle-solid trigger\" (click)=\"showIndication($event)\"></span>\n                </div>\n            </div>\n            <!---------------->\n\n            <!------------>\n            <!-- MIDDLE -->\n            <!------------>\n            <div class=\"form-creator__fields-area__field__middle\">\n\n                <input type=\"text\" placeholder=\"Question\" id=\"question\" placeholder=\"Question\" (keyup)=\"onQuestionChanged(questionValue.value)\" \n                [(ngModel)]=\"question\" #questionValue *ngIf=\"state === 'create-form'\">\n                <span class=\"form-creator__fields-area__field__middle__question\" \n                *ngIf=\"state === 'fill-form'\">{{question}}</span>\n\n                <div #radios id=\"{{referenceNumber}}\">\n                    <span *ngIf=\"!isNewForm\">\n                      <app-new-radio-a *ngFor=\"let radio of field.radios\" [field]=\"radio\"></app-new-radio-a>\n                    </span>\n                </div>\n\n                <div class=\"form-creator__fields-area__field__middle__add-another-radio-button d-flex\"\n                *ngIf=\"state === 'create-form'\">\n                    <span class=\"icon icon-plus-circle-solid\" (click)=\"addNewRadio()\"></span>\n                </div>\n            </div>\n            <!------------>\n            <!-- BOTTOM -->\n            <!------------>\n            <div class=\"form-creator__fields-area__field__bottom\">\n                <div class=\"form-creator__fields-area__field__bottom__trash divWhereIsDeleteButton\" #divWhereIsDeleteButton>\n                    <div class=\"remove-button d-block smooth-intro\" (click)=\"deleteDiv()\" *ngIf=\"!isNewForm\">\n                        <span class=\"icon icon-trash-alt-regular\"></span>\n                    </div>\n                </div>\n                <div class=\"form-creator__fields-area__field__bottom__mandatory d-flex\" *ngIf=\"state === 'create-form'\">\n                    <span class=\"form-creator__fields-area__field__bottom__mandatory__switch-label\">Obligatorio</span>\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" [checked]=\"mandatory\" (click)=\"onMandatoryChange(mandatoryInput.checked)\" #mandatoryInput>\n                        <span class=\"slider slider--round\"></span>\n                    </label>\n                </div>\n                <span class=\"form-creator__fields-area__field__bottom__mandatory-label\">\n                    <span *ngIf=\"state === 'fill-form' && mandatory\">\n                        Obligatorio *\n                    </span>\n                </span>\n                <div class=\"form-creator__fields-area__field__bottom__menu d-block\" *ngIf=\"state === 'create-form'\">     \n                    <div class=\"tooltip\">\n                        <span class=\"icon icon-ellipsis-v-solid\" id=\"right-button-menu\" #rightMenuButton (click)=\"showRightMenu()\"></span>\n                        <span class=\"tooltip__right-button-menu\" #rightMenu>\n                            <div class=\"tooltip__right-button-menu__group\">\n                                <span #showModalButton (click)=\"toogleModal(modal)\">Indicactions for this field</span>\n                            </div>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <!------------------->\n            <!-- END OF BOTTOM -->\n            <!------------------->\n        </div>\n    </div>\n</div>\n\n<div class=\"modal\" #modal>\n    <div class=\"modal__content modal__content--add-new-question\">\n        <app-indications \n        (closeModal)=\"toogleModal(modal)\"\n        [indications]='this.indications'\n        (sendIndications)=\"onIndicationsChanged($event)\"\n        ></app-indications>\n    </div>\n</div>\n    \n<div class=\"modal\" #modalIndication>\n    <div class=\"modal__content modal__content--question-indication\">\n        <div class=\"modal__content__top modal__content__top--privacy\">\n            <h2>{{question}}</h2>\n        </div>\n        <div class=\"modal__content__modal-middle modal__content__modal-middle--question-indication\">\n            <div class=\"modal__content__modal-middle__container\" [innerHTML]=\"this.indications.value\">\n            </div>\n        </div>\n        <div class=\"new-modal-content__footer new-modal-content__footer--indicactions\">\n            <button class=\"btn next-btn\" (click)=\"toogleModal(modalIndication);\">Entendido</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/inputs/input-radio-a/input-radio-a.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-a/input-radio-a.component.ts ***!
  \************************************************************************/
/*! exports provided: InputRadioAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRadioAComponent", function() { return InputRadioAComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/inputs/shared/index.ts");
/* harmony import */ var _new_radio_a__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-radio-a */ "./src/app/shared/inputs/input-radio-a/new-radio-a/index.ts");





var InputRadioAComponent = /** @class */ (function () {
    function InputRadioAComponent(commonsService, stepModelService, stateService, componentInjectorService, inputCommonsService, odfCreatorService, plainTextCreatorService) {
        this.commonsService = commonsService;
        this.stepModelService = stepModelService;
        this.stateService = stateService;
        this.componentInjectorService = componentInjectorService;
        this.inputCommonsService = inputCommonsService;
        this.odfCreatorService = odfCreatorService;
        this.plainTextCreatorService = plainTextCreatorService;
        this.mandatory = false;
        this.indications = {
            areIndications: false,
            indicationsType: 'outsideText',
            value: ''
        };
    }
    InputRadioAComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentType = this.stateService.getDocumentType();
        if (!this.field) {
            this.createStep();
            this.getRandomId();
            this.isNewForm = true;
        }
        else {
            this.step = this.field;
            this.isNewForm = false;
            this.mandatory = this.step.mandatory;
            this.referenceNumber = this.step.identifier;
            this.indications = this.step.indications;
            this.question = this.step.question;
        }
        this.stateService.stateSubscribe().subscribe(function (state) {
            _this.state = state;
            if (_this.state === 'create-form') {
                _this.step.replacement = '';
                _this.divWhereIsDeleteButton.nativeElement.hidden = false;
            }
            else {
                _this.divWhereIsDeleteButton.nativeElement.hidden = true;
            }
        });
        if (this.documentType === 'plain') {
            this.documentService = this.plainTextCreatorService;
        }
        else if (this.documentType === 'office') {
            this.documentService = this.odfCreatorService;
        }
    };
    InputRadioAComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        var steps = this.stepModelService.getStepsModel();
        steps = steps.filter(function (step) { return step !== _this.step; });
        this.stepModelService.init(steps, this.documentType);
        this.stepModelService.removeStep();
    };
    InputRadioAComponent.prototype.createStep = function () {
        this.step = {
            type: 'iRadioA',
            identifier: '',
            wordToReplace: '',
            replacement: '',
            radios: [],
            question: '',
            indications: this.indications,
            mandatory: false,
            isFocused: false
        };
        this.indications = this.step.indications;
        this.stepModelService.addNewStep(this.step);
    };
    InputRadioAComponent.prototype.onQuestionChanged = function (value) {
        this.step.question = value;
    };
    InputRadioAComponent.prototype.getRandomId = function () {
        // I add a character so that when we query the id without the inputTex it works
        this.referenceNumber = 'i' + Math.random().toString(36).substring(7);
        this.step.identifier = this.referenceNumber;
        this.step.wordToReplace = this.referenceNumber;
    };
    InputRadioAComponent.prototype.changeId = function (e) {
        var newValue = e.target.value;
        if (newValue[0] !== 'i') {
            newValue = 'i' + newValue;
            this.changeIdInput.nativeElement.value = newValue;
        }
        if (newValue.length > 10) {
            newValue = newValue.substring(0, 10);
            this.changeIdInput.nativeElement.value = newValue;
        }
        this.referenceNumber = newValue;
        this.step.identifier = 'iText' + this.referenceNumber;
        this.step.wordToReplace = this.referenceNumber;
        this.enableDrag();
    };
    InputRadioAComponent.prototype.enableDrag = function () {
        this.commonsService.enableDrag(this.draggableText.nativeElement, this.referenceNumber);
    };
    InputRadioAComponent.prototype.showChangeIdInputField = function () {
        if (this.draggableText.nativeElement.style.display === 'none') {
            this.draggableText.nativeElement.style.display = 'inline';
            this.changeIdInput.nativeElement.style.display = 'none';
            if (this.changeIdInput.nativeElement.value === 'i') {
                this.getRandomId();
                this.enableDrag();
            }
        }
        else {
            this.draggableText.nativeElement.style.display = 'none';
            this.changeIdInput.nativeElement.style.display = 'inline';
            this.changeIdInput.nativeElement.focus();
        }
    };
    InputRadioAComponent.prototype.showRightMenu = function () {
        var _this = this;
        if (this.rightMenu.nativeElement.style.display !== 'block') {
            this.rightMenu.nativeElement.style.display = 'block';
            this.rightMenu.nativeElement.classList.add('smooth-intro');
            this.functionReference = this.hideMenuRight.bind(this);
            setTimeout(function () {
                window.addEventListener('click', _this.functionReference);
            }, 200);
        }
    };
    InputRadioAComponent.prototype.hideMenuRight = function (e) {
        if (this.rightMenu.nativeElement.contains(event.target)) {
            if (event.target === this.showModalButton.nativeElement) {
                this.rightMenu.nativeElement.style.display = 'none';
                window.removeEventListener('click', this.functionReference);
                // this.toggleModal(false);
            }
        }
        else {
            this.rightMenu.nativeElement.style.display = 'none';
            window.removeEventListener('click', this.functionReference);
        }
    };
    InputRadioAComponent.prototype.toogleModal = function (modal) {
        this.commonsService.toggleModal(modal, false);
    };
    InputRadioAComponent.prototype.showIndication = function (e) {
        e.preventDefault();
        if (this.indications.indicationsType === 'outsideText') {
            this.commonsService.toggleModal(this.modalIndication.nativeElement);
        }
        else {
            this.documentService.showIndicationInsideText(this.step.wordToReplace, this.indications.value);
        }
    };
    InputRadioAComponent.prototype.onIndicationsChanged = function (indications) {
        this.step.indications = indications;
    };
    InputRadioAComponent.prototype.addNewRadio = function () {
        this.componentInjectorService.appendComponentToBody('Radio', _new_radio_a__WEBPACK_IMPORTED_MODULE_4__["NewRadioAComponent"], this.referenceNumber, 'parentId' + this.referenceNumber, 'divWhereIsDeleteButton', { identifier: this.referenceNumber });
    };
    InputRadioAComponent.prototype.onMandatoryChange = function (mandatory) {
        this.step.mandatory = mandatory;
        this.mandatory = mandatory;
    };
    InputRadioAComponent.prototype.deleteDiv = function () {
        var _this = this;
        var steps = this.stepModelService.getStepsModel();
        steps = steps.filter(function (step) { return step !== _this.step; });
        this.stepModelService.init(steps, this.documentType);
        this.stepModelService.removeStep();
        this.delete.nativeElement.remove();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputRadioAComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('delete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioAComponent.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('draggableText'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioAComponent.prototype, "draggableText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('radios'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioAComponent.prototype, "radios", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('changeIdInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioAComponent.prototype, "changeIdInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioAComponent.prototype, "rightMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightMenuButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioAComponent.prototype, "rightMenuButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showModalButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioAComponent.prototype, "showModalButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioAComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalIndication'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioAComponent.prototype, "modalIndication", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('divWhereIsDeleteButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioAComponent.prototype, "divWhereIsDeleteButton", void 0);
    InputRadioAComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-radio-a',
            template: __webpack_require__(/*! ./input-radio-a.component.html */ "./src/app/shared/inputs/input-radio-a/input-radio-a.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["CommonsService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["StepModelService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["ComponentInjectorService"],
            _shared__WEBPACK_IMPORTED_MODULE_3__["InputCommonsService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["OdfCreatorService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["PlainTextCreatorService"]])
    ], InputRadioAComponent);
    return InputRadioAComponent;
}());



/***/ }),

/***/ "./src/app/shared/inputs/input-radio-a/new-radio-a/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-a/new-radio-a/index.ts ***!
  \******************************************************************/
/*! exports provided: NewRadioAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_radio_a_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-radio-a.component */ "./src/app/shared/inputs/input-radio-a/new-radio-a/new-radio-a.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioAComponent", function() { return _new_radio_a_component__WEBPACK_IMPORTED_MODULE_0__["NewRadioAComponent"]; });




/***/ }),

/***/ "./src/app/shared/inputs/input-radio-a/new-radio-a/new-radio-a.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-a/new-radio-a/new-radio-a.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-creator__fields-area__field__middle__radio-input radio divWhereIsDeleteButton\" #delete \n    [ngClass]=\"{'form-creator__fields-area__field__middle__radio-input--fill-form': state === 'fill-form' }\">\n\n    <p>\n        <label>\n            <input class=\"with-gap\" type=\"radio\" name=\"{{randomName}}\" [checked]=\"checked\" value=\"{{radioValue}}\" (change)=\"onInputChange(radioInput.checked)\" #radioInput/>\n            <span>\n                <div *ngIf=\"state === 'create-form'\"></div>\n                <div *ngIf=\"state === 'fill-form'\">{{radioValue}}</div>\n            </span>\n        </label>\n    </p>\n\n    <input [(ngModel)]=\"radioValue\" type=\"text\" class=\"d-block\" name=\"radio\" (keyup)=\"onQuestionChange()\" *ngIf=\"state === 'create-form'\">\n\n    <div class=\"form-creator__fields-area__field__middle__radio-input__remove-radio remove-radio d-block\" *ngIf=\"!isNewForm && state === 'create-form'\">\n        <span class=\"icon icon-times-solid\" (click)=\"deleteElementDiv()\"></span>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/shared/inputs/input-radio-a/new-radio-a/new-radio-a.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-a/new-radio-a/new-radio-a.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NewRadioAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRadioAComponent", function() { return NewRadioAComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core */ "./src/app/core/index.ts");



var NewRadioAComponent = /** @class */ (function () {
    function NewRadioAComponent(stateService, stepModelService) {
        this.stateService = stateService;
        this.stepModelService = stepModelService;
        this.checked = false;
    }
    NewRadioAComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateService.stateSubscribe().subscribe(function (state) {
            _this.state = state;
            if (_this.isNewForm && _this.state === 'fill-form') {
                _this.delete.nativeElement.querySelector('.remove-radio').style.display = 'none';
            }
            else if (_this.isNewForm) {
                _this.delete.nativeElement.querySelector('.remove-radio').style.display = 'block';
            }
        });
        if (this.optionalValues) {
            this.identifier = this.optionalValues.identifier;
            this.randomName = 'name' + this.optionalValues.identifier;
            this.pushNewRadio();
            this.isNewForm = true;
        }
        else {
            this.isNewForm = false;
            this.radio = this.field;
            this.identifier = this.field.identifier;
            this.randomName = 'name' + this.field.identifier;
            this.radioValue = this.field.label;
            this.checked = this.field.checked;
        }
    };
    NewRadioAComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.stepModelService.getStepsModel().forEach(function (step) {
            if (step.identifier === _this.identifier) {
                var filterRadios = step.radios.filter(function (radio) { return radio !== _this.radio; });
                step.radios = filterRadios;
            }
        });
    };
    NewRadioAComponent.prototype.pushNewRadio = function () {
        var _this = this;
        this.stepModelService.getStepsModel().forEach(function (step) {
            if (step.identifier === _this.identifier) {
                _this.radio = {
                    label: '',
                    replacementOriginal: '',
                    replacement: '',
                    radioId: '',
                    identifier: _this.identifier,
                    extraReplacements: [],
                    checked: false
                };
                step.radios.push(_this.radio);
            }
        });
    };
    NewRadioAComponent.prototype.onInputChange = function (checked) {
        var _this = this;
        this.stepModelService.getStepsModel().forEach(function (step) {
            if (step.identifier === _this.identifier) {
                step.radios.forEach(function (radio) {
                    radio.checked = false;
                });
                _this.radio.checked = checked;
                _this.stepModelService.input(_this.radioValue, step.type, step.wordToReplace, true);
            }
        });
    };
    NewRadioAComponent.prototype.onQuestionChange = function () {
        this.radio.label = this.radioValue;
    };
    NewRadioAComponent.prototype.deleteElementDiv = function () {
        this.delete.nativeElement.remove();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewRadioAComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewRadioAComponent.prototype, "optionalValues", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('delete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NewRadioAComponent.prototype, "delete", void 0);
    NewRadioAComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-radio-a',
            template: __webpack_require__(/*! ./new-radio-a.component.html */ "./src/app/shared/inputs/input-radio-a/new-radio-a/new-radio-a.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["StepModelService"]])
    ], NewRadioAComponent);
    return NewRadioAComponent;
}());



/***/ }),

/***/ "./src/app/shared/inputs/input-radio-b/index.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-b/index.ts ***!
  \******************************************************/
/*! exports provided: InputRadioBComponent, NewRadioBComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_radio_b_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-radio-b.component */ "./src/app/shared/inputs/input-radio-b/input-radio-b.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputRadioBComponent", function() { return _input_radio_b_component__WEBPACK_IMPORTED_MODULE_0__["InputRadioBComponent"]; });

/* harmony import */ var _new_radio_b__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-radio-b */ "./src/app/shared/inputs/input-radio-b/new-radio-b/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioBComponent", function() { return _new_radio_b__WEBPACK_IMPORTED_MODULE_1__["NewRadioBComponent"]; });





/***/ }),

/***/ "./src/app/shared/inputs/input-radio-b/input-radio-b.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-b/input-radio-b.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-creator__fields-area__field\" [id]=\"'parentId' + referenceNumber\" #delete>\n    <div class=\"form-creator__fields-area__field__container\">\n        <div class=\"form-creator__fields-area__field__field-area form-creator__fields-area__field__field-area--input-text\">\n            <!-- CREATE FORM -->\n            <div class=\"form-creator__fields-area__field__top d-flex\" *ngIf=\"state === 'create-form'\">\n                <div class=\"form-creator__fields-area__field__top__identifier\">\n                    <span class=\"form-creator__fields-area__field__top__identifier__label\">\n                        Id:\n                    </span>\n                    <span class=\"form-creator__fields-area__field__top__identifier__id\">\n                        <span (dblclick)=\"showChangeIdInputField()\" (mousedown)=\"enableDrag()\" #draggableText>{{referenceNumber}}</span>\n                        <input (blur)=\"showChangeIdInputField()\" (keyup.enter)=\"changeIdInput.blur()\" \n                        (keyup)=\"changeId($event)\" type=\"text\" value=\"{{referenceNumber}}\" #changeIdInput style=\"display: none\">\n                    </span>\n                </div>\n            </div>\n            <!---------------->\n            <!-- FILL FORM -->\n            <div class=\"form-creator__fields-area__field__top form-creator__fields-area__field__top--fill-form\" *ngIf=\"state === 'fill-form'\">\n                <div class=\"indication\" *ngIf=\"indications.areIndications\">\n                    <span class=\"icon icon-info-circle-solid trigger\" (click)=\"showIndication($event)\"></span>\n                </div>\n            </div>\n            <!---------------->\n\n            <!------------>\n            <!-- MIDDLE -->\n            <!------------>\n            <div class=\"form-creator__fields-area__field__middle\">\n\n                <input type=\"text\" placeholder=\"Question\" id=\"question\" placeholder=\"Question\" (keyup)=\"onQuestionChanged(questionValue.value)\" \n                [(ngModel)]=\"question\" #questionValue *ngIf=\"state === 'create-form'\">\n                <span class=\"form-creator__fields-area__field__middle__question\" \n                *ngIf=\"state === 'fill-form'\">{{question}}</span>\n\n                <div #radios id=\"{{referenceNumber}}\">\n                    <span *ngIf=\"!isNewForm\">\n                      <app-new-radio-b *ngFor=\"let radio of field.radios\" [field]=\"radio\"></app-new-radio-b>\n                    </span>\n                </div>\n\n                <div class=\"form-creator__fields-area__field__middle__add-another-radio-button d-flex\"\n                *ngIf=\"state === 'create-form'\">\n                    <span class=\"icon icon-plus-circle-solid\" (click)=\"addNewRadio()\"></span>\n                </div>\n            </div>\n            <!------------>\n            <!-- BOTTOM -->\n            <!------------>\n            <div class=\"form-creator__fields-area__field__bottom\">\n                <div class=\"form-creator__fields-area__field__bottom__trash divWhereIsDeleteButton\" #divWhereIsDeleteButton>\n                    <div class=\"remove-button d-block smooth-intro\" (click)=\"deleteDiv()\" *ngIf=\"!isNewForm\">\n                        <span class=\"icon icon-trash-alt-regular\"></span>\n                    </div>\n                </div>\n                <div class=\"form-creator__fields-area__field__bottom__mandatory d-flex\" *ngIf=\"state === 'create-form'\">\n                    <span class=\"form-creator__fields-area__field__bottom__mandatory__switch-label\">Obligatorio</span>\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" [checked]=\"mandatory\" (click)=\"onMandatoryChange(mandatoryInput.checked)\" #mandatoryInput>\n                        <span class=\"slider slider--round\"></span>\n                    </label>\n                </div>\n                <span class=\"form-creator__fields-area__field__bottom__mandatory-label\">\n                    <span *ngIf=\"state === 'fill-form' && mandatory\">\n                        Obligatorio *\n                    </span>\n                </span>\n                <div class=\"form-creator__fields-area__field__bottom__menu d-block\" *ngIf=\"state === 'create-form'\">     \n                    <div class=\"tooltip\">\n                        <span class=\"icon icon-ellipsis-v-solid\" id=\"right-button-menu\" #rightMenuButton (click)=\"showRightMenu()\"></span>\n                        <span class=\"tooltip__right-button-menu\" #rightMenu>\n                            <div class=\"tooltip__right-button-menu__group\">\n                                <span #showModalButton (click)=\"toogleModal(modal)\">Indicactions for this field</span>\n                            </div>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <!------------------->\n            <!-- END OF BOTTOM -->\n            <!------------------->\n        </div>\n    </div>\n</div>\n\n<div class=\"modal\" #modal>\n    <div class=\"modal__content modal__content--add-new-question\">\n        <app-indications \n        (closeModal)=\"toogleModal(modal)\"\n        [indications]='this.indications'\n        (sendIndications)=\"onIndicationsChanged($event)\"\n        ></app-indications>\n    </div>\n</div>\n    \n<div class=\"modal\" #modalIndication>\n    <div class=\"modal__content modal__content--question-indication\">\n        <div class=\"modal__content__top modal__content__top--privacy\">\n            <h2>{{question}}</h2>\n        </div>\n        <div class=\"modal__content__modal-middle modal__content__modal-middle--question-indication\">\n            <div class=\"modal__content__modal-middle__container\" [innerHTML]=\"this.indications.value\">\n            </div>\n        </div>\n        <div class=\"new-modal-content__footer new-modal-content__footer--indicactions\">\n            <button class=\"btn next-btn\" (click)=\"toogleModal(modalIndication);\">Entendido</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/inputs/input-radio-b/input-radio-b.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-b/input-radio-b.component.ts ***!
  \************************************************************************/
/*! exports provided: InputRadioBComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRadioBComponent", function() { return InputRadioBComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/inputs/shared/index.ts");
/* harmony import */ var _new_radio_b__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-radio-b */ "./src/app/shared/inputs/input-radio-b/new-radio-b/index.ts");





var InputRadioBComponent = /** @class */ (function () {
    function InputRadioBComponent(commonsService, stepModelService, stateService, componentInjectorService, inputCommonsService, odfCreatorService, plainTextCreatorService) {
        this.commonsService = commonsService;
        this.stepModelService = stepModelService;
        this.stateService = stateService;
        this.componentInjectorService = componentInjectorService;
        this.inputCommonsService = inputCommonsService;
        this.odfCreatorService = odfCreatorService;
        this.plainTextCreatorService = plainTextCreatorService;
        this.mandatory = false;
        this.indications = {
            areIndications: false,
            indicationsType: 'outsideText',
            value: ''
        };
    }
    InputRadioBComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentType = this.stateService.getDocumentType();
        if (!this.field) {
            this.createStep();
            this.getRandomId();
            this.isNewForm = true;
        }
        else {
            this.step = this.field;
            this.isNewForm = false;
            this.mandatory = this.step.mandatory;
            this.referenceNumber = this.step.identifier;
            this.indications = this.step.indications;
            this.question = this.step.question;
        }
        this.stateService.stateSubscribe().subscribe(function (state) {
            _this.state = state;
            if (_this.state === 'create-form') {
                _this.step.replacement = '';
                _this.divWhereIsDeleteButton.nativeElement.hidden = false;
            }
            else {
                _this.divWhereIsDeleteButton.nativeElement.hidden = true;
            }
        });
        if (this.documentType === 'plain') {
            this.documentService = this.plainTextCreatorService;
        }
        else if (this.documentType === 'office') {
            this.documentService = this.odfCreatorService;
        }
    };
    InputRadioBComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        var steps = this.stepModelService.getStepsModel();
        steps = steps.filter(function (step) { return step !== _this.step; });
        this.stepModelService.init(steps, this.documentType);
        this.stepModelService.removeStep();
    };
    InputRadioBComponent.prototype.createStep = function () {
        this.step = {
            type: 'iRadioB',
            identifier: '',
            wordToReplace: '',
            replacement: '',
            radios: [],
            question: '',
            indications: this.indications,
            mandatory: false,
            isFocused: false
        };
        this.indications = this.step.indications;
        this.stepModelService.addNewStep(this.step);
    };
    InputRadioBComponent.prototype.onQuestionChanged = function (value) {
        this.step.question = value;
    };
    InputRadioBComponent.prototype.getRandomId = function () {
        // I add a character so that when we query the id without the inputTex it works
        this.referenceNumber = 'i' + Math.random().toString(36).substring(7);
        this.step.identifier = this.referenceNumber;
        this.step.wordToReplace = this.referenceNumber;
    };
    InputRadioBComponent.prototype.changeId = function (e) {
        var newValue = e.target.value;
        if (newValue[0] !== 'i') {
            newValue = 'i' + newValue;
            this.changeIdInput.nativeElement.value = newValue;
        }
        if (newValue.length > 10) {
            newValue = newValue.substring(0, 10);
            this.changeIdInput.nativeElement.value = newValue;
        }
        this.referenceNumber = newValue;
        this.step.identifier = 'iText' + this.referenceNumber;
        this.step.wordToReplace = this.referenceNumber;
        this.enableDrag();
    };
    InputRadioBComponent.prototype.enableDrag = function () {
        this.commonsService.enableDrag(this.draggableText.nativeElement, this.referenceNumber);
    };
    InputRadioBComponent.prototype.showChangeIdInputField = function () {
        if (this.draggableText.nativeElement.style.display === 'none') {
            this.draggableText.nativeElement.style.display = 'inline';
            this.changeIdInput.nativeElement.style.display = 'none';
            if (this.changeIdInput.nativeElement.value === 'i') {
                this.getRandomId();
                this.enableDrag();
            }
        }
        else {
            this.draggableText.nativeElement.style.display = 'none';
            this.changeIdInput.nativeElement.style.display = 'inline';
            this.changeIdInput.nativeElement.focus();
        }
    };
    InputRadioBComponent.prototype.showRightMenu = function () {
        var _this = this;
        if (this.rightMenu.nativeElement.style.display !== 'block') {
            this.rightMenu.nativeElement.style.display = 'block';
            this.rightMenu.nativeElement.classList.add('smooth-intro');
            this.functionReference = this.hideMenuRight.bind(this);
            setTimeout(function () {
                window.addEventListener('click', _this.functionReference);
            }, 200);
        }
    };
    InputRadioBComponent.prototype.hideMenuRight = function (e) {
        if (this.rightMenu.nativeElement.contains(event.target)) {
            if (event.target === this.showModalButton.nativeElement) {
                this.rightMenu.nativeElement.style.display = 'none';
                window.removeEventListener('click', this.functionReference);
                // this.toggleModal(false);
            }
        }
        else {
            this.rightMenu.nativeElement.style.display = 'none';
            window.removeEventListener('click', this.functionReference);
        }
    };
    InputRadioBComponent.prototype.toogleModal = function (modal) {
        this.commonsService.toggleModal(modal, false);
    };
    InputRadioBComponent.prototype.showIndication = function (e) {
        e.preventDefault();
        if (this.indications.indicationsType === 'outsideText') {
            this.commonsService.toggleModal(this.modalIndication.nativeElement);
        }
        else {
            this.documentService.showIndicationInsideText(this.step.wordToReplace, this.indications.value);
        }
    };
    InputRadioBComponent.prototype.onIndicationsChanged = function (indications) {
        this.step.indications = indications;
    };
    InputRadioBComponent.prototype.addNewRadio = function () {
        this.componentInjectorService.appendComponentToBody('Radio', _new_radio_b__WEBPACK_IMPORTED_MODULE_4__["NewRadioBComponent"], this.referenceNumber, 'parentId' + this.referenceNumber, 'divWhereIsDeleteButton', { identifier: this.referenceNumber });
    };
    InputRadioBComponent.prototype.onMandatoryChange = function (mandatory) {
        this.step.mandatory = mandatory;
        this.mandatory = mandatory;
    };
    InputRadioBComponent.prototype.deleteDiv = function () {
        var _this = this;
        var steps = this.stepModelService.getStepsModel();
        steps = steps.filter(function (step) { return step !== _this.step; });
        this.stepModelService.init(steps, this.documentType);
        this.stepModelService.removeStep();
        this.delete.nativeElement.remove();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputRadioBComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('delete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioBComponent.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('draggableText'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioBComponent.prototype, "draggableText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('radios'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioBComponent.prototype, "radios", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('changeIdInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioBComponent.prototype, "changeIdInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioBComponent.prototype, "rightMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightMenuButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioBComponent.prototype, "rightMenuButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showModalButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioBComponent.prototype, "showModalButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioBComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalIndication'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioBComponent.prototype, "modalIndication", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('divWhereIsDeleteButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioBComponent.prototype, "divWhereIsDeleteButton", void 0);
    InputRadioBComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-radio-b',
            template: __webpack_require__(/*! ./input-radio-b.component.html */ "./src/app/shared/inputs/input-radio-b/input-radio-b.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["CommonsService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["StepModelService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["ComponentInjectorService"],
            _shared__WEBPACK_IMPORTED_MODULE_3__["InputCommonsService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["OdfCreatorService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["PlainTextCreatorService"]])
    ], InputRadioBComponent);
    return InputRadioBComponent;
}());



/***/ }),

/***/ "./src/app/shared/inputs/input-radio-b/new-radio-b/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-b/new-radio-b/index.ts ***!
  \******************************************************************/
/*! exports provided: NewRadioBComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_radio_b_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-radio-b.component */ "./src/app/shared/inputs/input-radio-b/new-radio-b/new-radio-b.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioBComponent", function() { return _new_radio_b_component__WEBPACK_IMPORTED_MODULE_0__["NewRadioBComponent"]; });




/***/ }),

/***/ "./src/app/shared/inputs/input-radio-b/new-radio-b/new-radio-b.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-b/new-radio-b/new-radio-b.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-creator__fields-area__field__middle__radio-input radio divWhereIsDeleteButton\" #delete \n    [ngClass]=\"{'form-creator__fields-area__field__middle__radio-input--fill-form': state === 'fill-form' }\">\n\n    <p>\n        <label>\n            <input class=\"with-gap\" type=\"radio\" name=\"{{randomName}}\" [checked]=\"checked\" value=\"{{radioValue}}\" (change)=\"onInputChange(radioInput.checked)\" #radioInput/>\n            <span>\n                <div *ngIf=\"state === 'create-form'\"></div>\n                <div *ngIf=\"state === 'fill-form'\">{{question}}</div>\n            </span>\n        </label>\n    </p>\n\n    <input [(ngModel)]=\"question\" type=\"text\" name=\"radio\" (keyup)=\"onQuestionChange()\" *ngIf=\"state === 'create-form'\">\n\n    <div class=\"modal-button d-block modal-button-radio\" (click)=\"toggleModal()\" *ngIf=\"state === 'create-form'\">\n        <span class=\"icon icon-modal-icon\"></span>\n    </div>\n\n    <div class=\"form-creator__fields-area__field__middle__radio-input__remove-radio remove-radio d-block\" *ngIf=\"!isNewForm && state === 'create-form'\">\n        <span class=\"icon icon-times-solid\" (click)=\"deleteElementDiv()\"></span>\n    </div>\n\n    <!-- Modal -->\n    <div class=\"modal\" #modal>\n        <div class=\"modal__content modal__content--add-new-question\">\n            <div class=\"new-modal-content\">\n                <div class=\"modal__content__top modal__content__top--privacy\">\n                    <h3>Este texto se sustituirá por el identificador</h3>\n                </div>\n                <div class=\"new-modal-content__body\" style=\"border-bottom: 3px solid #556270;\">\n                    <textarea style=\"height: 85%;\" cols=\"30\" rows=\"10\" (keyup)=\"onValueChanged()\" [(ngModel)]=\"radioValue\"></textarea>\n                </div>\n                <div class=\"modal__content__modal-bottom modal__content__modal-bottom--privacy\">\n                    <button class=\"button-filled\" (click)=\"toggleModal()\">Guardar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/inputs/input-radio-b/new-radio-b/new-radio-b.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-b/new-radio-b/new-radio-b.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NewRadioBComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRadioBComponent", function() { return NewRadioBComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core */ "./src/app/core/index.ts");



var NewRadioBComponent = /** @class */ (function () {
    function NewRadioBComponent(stateService, stepModelService) {
        this.stateService = stateService;
        this.stepModelService = stepModelService;
        this.randomNumberForModal = 'i' + Math.random().toString(36).substring(7);
        this.checked = false;
    }
    NewRadioBComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateService.stateSubscribe().subscribe(function (state) {
            _this.state = state;
            if (_this.isNewForm && _this.state === 'fill-form') {
                _this.delete.nativeElement.querySelector('.remove-radio').style.display = 'none';
            }
            else if (_this.isNewForm) {
                _this.delete.nativeElement.querySelector('.remove-radio').style.display = 'block';
            }
        });
        if (this.optionalValues) {
            this.identifier = this.optionalValues.identifier;
            this.randomName = 'name' + this.optionalValues.identifier;
            this.pushNewRadio();
            this.isNewForm = true;
        }
        else {
            this.isNewForm = false;
            this.radio = this.field;
            this.identifier = this.field.identifier;
            this.randomName = 'name' + this.field.identifier;
            this.question = this.field.label;
            this.radioValue = this.field.replacementOriginal;
            this.checked = this.field.checked;
        }
    };
    NewRadioBComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.stepModelService.getStepsModel().forEach(function (step) {
            if (step.identifier === _this.identifier) {
                var filterRadios = step.radios.filter(function (radio) { return radio !== _this.radio; });
                step.radios = filterRadios;
            }
        });
    };
    NewRadioBComponent.prototype.pushNewRadio = function () {
        var _this = this;
        this.stepModelService.getStepsModel().forEach(function (step) {
            if (step.identifier === _this.identifier) {
                _this.radio = {
                    label: '',
                    replacementOriginal: '',
                    replacement: '',
                    radioId: '',
                    identifier: _this.identifier,
                    extraReplacements: [],
                    checked: false
                };
                step.radios.push(_this.radio);
            }
        });
    };
    NewRadioBComponent.prototype.onInputChange = function (checked) {
        var _this = this;
        this.stepModelService.getStepsModel().forEach(function (step) {
            if (step.identifier === _this.identifier) {
                step.radios.forEach(function (radio) {
                    radio.checked = false;
                });
                _this.radio.checked = checked;
                _this.stepModelService.input(_this.radioValue, step.type, step.wordToReplace, true);
            }
        });
    };
    NewRadioBComponent.prototype.onValueChanged = function () {
        this.radio.replacementOriginal = this.radioValue;
    };
    NewRadioBComponent.prototype.onQuestionChange = function () {
        this.radio.label = this.question;
    };
    NewRadioBComponent.prototype.deleteElementDiv = function () {
        this.delete.nativeElement.remove();
    };
    NewRadioBComponent.prototype.toggleModal = function () {
        this.modal.nativeElement.classList.toggle('show-modal');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewRadioBComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewRadioBComponent.prototype, "valueRadio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewRadioBComponent.prototype, "optionalValues", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('delete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NewRadioBComponent.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NewRadioBComponent.prototype, "modal", void 0);
    NewRadioBComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-radio-b',
            template: __webpack_require__(/*! ./new-radio-b.component.html */ "./src/app/shared/inputs/input-radio-b/new-radio-b/new-radio-b.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["StepModelService"]])
    ], NewRadioBComponent);
    return NewRadioBComponent;
}());



/***/ }),

/***/ "./src/app/shared/inputs/input-radio-c/hidden-inputs/hidden-inputs.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-c/hidden-inputs/hidden-inputs.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"smooth-intro\" [id]=\"'inputsHidden' + randomId\" >\n    <div class=\"d-none smooth-intro\" #divForMutationObserver (click)=\"generateRadioValue()\" (keyup)=\"generateRadioValue()\">\n        <div *ngFor=\"let field of contentToExport['fields']\">\n\n            <!-- Texto -->\n            <div class=\"field field-fill-form\" [ngClass]=\"{'field-input-hidden': isALoop()}\" *ngIf=\"field.type ===  'iText'\">\n                <div class=\"field-content field-content-fill-form\">\n                    <div class=\"field-area\">\n\n                        <div class=\"field-area-top field-area-top-fill-form d-flex\"\n                            (click)=\"toggleModal(field.question, field.indications)\"\n                            *ngIf=\"field.indications !== '' && field.indications !== undefined\">\n                            <div class=\"indication\">\n                                <span class=\"icon icon-info-circle-solid\"></span>\n                            </div>\n                        </div>\n                        <div class=\"field-area-middle\">\n                            <span class=\"question\">{{field.question}}</span>\n                            <input class=\"inputsOfHiddenDiv\" id=\"{{field.type + field.referenceNumber}}\" \n                                    value=\"{{field.value}}\" type=\"text\" placeholder=\"Question\">\n\n                        </div>\n\n                        <div class=\"field-area-bottom d-flex\" *ngIf=\"field.mandatory\">\n                            <span class=\"mandatory\">\n                                Obligatorio *\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Radio A -->\n            <div class=\"field field-fill-form\" [ngClass]=\"{'field-input-hidden': isALoop()}\" *ngIf=\"field.type ===  'iRadioA'\">\n                <div class=\"field-content field-content-fill-form\">\n                    <div class=\"field-area\">\n\n                        <div class=\"field-area-top field-area-top-fill-form d-flex\"\n                            (click)=\"toggleModal(field.question, field.indications)\"\n                            *ngIf=\"field.indications !== '' && field.indications !== undefined\">\n                            <div class=\"indication\">\n                                <span class=\"icon icon-info-circle-solid\"></span>\n                            </div>\n                        </div>\n\n                        <div class=\"field-area-middle\">\n                            <span class=\"question\">{{field.question}}</span>\n                            <div class=\"inputsOfHiddenDiv\" id=\"{{field.type + field.referenceNumber}}\">\n                                <div class=\"field-area-radio-input radio-conditional radio-fill-form type-radio-b\" *ngFor=\"let radio of field.radios\">\n                                    <label>\n                                        <!-- Revisar el id y el label for el id puede dar error -->\n                                        <input class=\"{{field.referenceNumber}}\" type=\"radio\" id=\"{{ field.referenceNumber }}\" \n                                        name=\"{{field['referenceNumber']}}\" value=\"{{radio}}\" [checked]=\"radio === field['checkedValue']\">\n                                        <span class=\"check\"></span>\n                                    </label>\n    \n                                    <label class=\"label-fill-form\">\n                                        {{radio}}\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"field-area-bottom d-flex\" *ngIf=\"field.mandatory\">\n                            <span class=\"mandatory\">\n                                Obligatorio *\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Radio B -->\n            <div class=\"field field-fill-form\" [ngClass]=\"{'field-input-hidden': isALoop()}\" *ngIf=\"field.type ===  'iRadioB'\">\n                <div class=\"field-content field-content-fill-form\">\n                    <div class=\"field-area\">\n                        <div class=\"field-area-top field-area-top-fill-form d-flex\"\n                            (click)=\"toggleModal(field.question, field.indications)\"\n                            *ngIf=\"field.indications !== '' && field.indications !== undefined\">\n                            <div class=\"indication\">\n                                <span class=\"icon icon-info-circle-solid\"></span>\n                            </div>\n                        </div>\n                        <div class=\"field-area-middle\">\n                            <span class=\"question\">{{field.question}}</span>\n                            <div class=\"inputsOfHiddenDiv\" id=\"{{field.type + field.referenceNumber}}\">\n                                <div class=\"field-area-radio-input radio-conditional radio-fill-form type-radio-b\" *ngFor=\"let radio of field.radios\">\n                                    <label>\n                                        <!-- Revisar el id y el label for el id puede dar error -->\n                                        <input class=\"{{field.referenceNumber}}\" type=\"radio\" id=\"{{ field.referenceNumber }}\" name=\"{{radio['referenceNumber']}}\"\n                                        checked value=\"{{radio['value']}}\" [checked]=\"radio['value'] === field['checkedValue']\">\n                                        <span class=\"check\"></span>\n                                    </label>\n        \n                                    <label class=\"label-fill-form\">\n                                        {{radio['radio']}}\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"field-area-bottom d-flex\" *ngIf=\"field.mandatory\">\n                            <span class=\"mandatory\">\n                                Obligatorio *\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>                 \n            <!-- Radio C -->\n            <div class=\"field field-fill-form\" [ngClass]=\"{'field-input-hidden': isALoop()}\" *ngIf=\"field.type ===  'iRadioC'\" #radios>\n                <div class=\"field-content field-content-fill-form\">\n                    <div class=\"field-area\">\n                        <div class=\"field-area-top field-area-top-fill-form d-flex\"\n                            (click)=\"toggleModal(field.question, field.indications)\"\n                            *ngIf=\"field.indications !== '' && field.indications !== undefined\">\n                            <div class=\"indication\">\n                                <span class=\"icon icon-info-circle-solid\"></span>\n                            </div>\n                        </div>\n                        <div class=\"field-area-middle\">\n                            <span class=\"question\">{{field.question}}</span>\n                            <div class=\"field-area-radio-input radio-conditional radio-fill-form type-radio-b\" *ngFor=\"let radio of field.radios\">\n                                <label>\n                                    <!-- Revisar el id y el label for el id puede dar error -->\n                                    <input class=\"radiosOfInputHidden inputsOfHiddenDiv\" type=\"radio\" [id]=\"'loopRadio' + radio['randomId']\" \n                                    name=\"{{radio['referenceNumber']}}\" \n                                    [attr.data-contentToExport]=\"radio['value']\" (click)=\"showHiddenInput()\" [checked]=\"radio['checkedValue']\">\n                                    <span class=\"check\"></span>\n                                </label>\n\n                                <label class=\"label-fill-form\">\n                                    {{radio['radio']}}\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"field-area-bottom d-flex\" *ngIf=\"field.mandatory\">\n                            <span class=\"mandatory\">\n                                Obligatorio *\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <span *ngFor=\"let radio of field.radios\">\n                    <app-hidden-inputs [isInsideALoop]=\"true\" [state]=\"state\" [optionalValues]=\"radio['randomId']\" [hidden]=false></app-hidden-inputs>\n                </span>\n            </div>  \n\n        </div>\n    </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal\" #modal>\n    <div class=\"modal-content\">\n        <div class=\"modal-top modal-top-input-text\">\n            <h5>Indicaciones para pregunta</h5>\n            <span>{{currentQuestion}}</span>\n        </div>\n        <div class=\"modal-middle modal-middle-input-text\">\n            <p [ngClass]=\"{'d-none': isNewAuthor() || isEditAuthor() }\">{{currentIndications}}</p>\n        </div>\n        <div class=\"modal-bottom modal-bottom-input-text\">\n            <button class=\"button\" (click)=\"toggleModal(currentQuestion, currentIndications)\"\n            [ngClass]=\"{'d-none': isNewAuthor() || isEditAuthor() }\">Entendido</button>\n        </div>\n    </div>\n</div>\n    "

/***/ }),

/***/ "./src/app/shared/inputs/input-radio-c/hidden-inputs/hidden-inputs.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-c/hidden-inputs/hidden-inputs.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HiddenInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiddenInputsComponent", function() { return HiddenInputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core */ "./src/app/core/index.ts");



var HiddenInputsComponent = /** @class */ (function () {
    function HiddenInputsComponent(commonsService) {
        var _this = this;
        this.commonsService = commonsService;
        this.injectedComponents = [];
        this.contentToExport = {
            text: '',
            fields: []
        };
        this.observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.attributeName === 'class') {
                    _this.updateContentToExport();
                }
            });
        });
    }
    HiddenInputsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isNewUser() || this.isEditUser()) {
            this.getRandomId();
            // Prefetch values
            // const contentToExport = document.getElementById(this.randomId)['value'];
            // this.contentToExport = contentToExport !== null ? JSON.parse(contentToExport) : this.contentToExport;
            this.updateContentToExport();
        }
        else {
            this.getRandomId();
        }
        this.observer.observe(this.divForMutationObserver.nativeElement, { attributes: true });
        if (this.isEditUser()) {
            // Force click so it can update the value
            setTimeout(function () { _this.divForMutationObserver.nativeElement.click(); }, 10);
            setTimeout(function () {
                _this.contentToExport.fields.forEach(function (field) {
                    if (field.type === 'iRadioC') {
                        field.radios.forEach(function (radio) {
                            if (radio.checkedValue) {
                                document.getElementsByName(radio['referenceNumber']).forEach(function (radioByName) {
                                    if (radioByName.checked) {
                                        radioByName.click();
                                    }
                                });
                            }
                        });
                    }
                });
            }, 10);
        }
    };
    HiddenInputsComponent.prototype.getRandomId = function () {
        if (this.isInsideALoop) {
            this.randomId = this.optionalValues;
        }
        else {
            this.randomId = this.optionalValues['randomId'];
        }
    };
    HiddenInputsComponent.prototype.generateRadioValue = function () {
        var _this = this;
        this.injectedComponents = this.divForMutationObserver.nativeElement.querySelectorAll('.inputsOfHiddenDiv');
        var valuesToInsert = {};
        var _loop_1 = function (injectedComponent) {
            var firstParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var secondParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var thirdParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            if (this_1.checkIfParentIsCurrentDiv(firstParent, secondParent, thirdParent)) {
                // TEXT
                if (injectedComponent.id.includes('iText')) {
                    var idWithOutFilter_1 = injectedComponent.id.replace('iText', '');
                    valuesToInsert[idWithOutFilter_1] = [injectedComponent.value];
                    // Save the value for user form
                    if (this_1.isNewUser() || this_1.isEditUser()) {
                        this_1.contentToExport.fields.forEach(function (field) {
                            if (field.referenceNumber === idWithOutFilter_1) {
                                field.value = injectedComponent.value;
                            }
                        });
                    }
                }
                // DATE
                // if (injectedComponent.id.includes('iDate')) {
                //   const idWithOutFilter = injectedComponent.id.replace('iDate', '');
                //   valuesToInsert[idWithOutFilter] = [injectedComponent.value];
                //   // Save the value for user form
                //   if (this.isNewUser() || this.isEditUser()) {
                //     this.contentToExport.fields.forEach( (field: any) => {
                //       if (field.referenceNumber === idWithOutFilter) {
                //         field.value = injectedComponent.value;
                //       }
                //     });
                //   }
                // }
                // RADIO A
                if (injectedComponent.id.includes('iRadioA')) {
                    var idWithOutFilter_2 = injectedComponent.id.replace('iRadioA', '');
                    var name_1 = 'input[name="' + (idWithOutFilter_2) + '"]';
                    var radios = injectedComponent.querySelectorAll(name_1);
                    var checkedValue_1;
                    for (var i = 0, length_1 = radios.length; i < length_1; i++) {
                        if (radios[i].checked) {
                            valuesToInsert[idWithOutFilter_2] = [radios[i].value];
                            checkedValue_1 = radios[i].value;
                            // only one radio can be logically checked
                            break;
                        }
                    }
                    // Save the value for user form
                    if (this_1.isNewUser() || this_1.isEditUser()) {
                        this_1.contentToExport.fields.forEach(function (field) {
                            if (field.referenceNumber === idWithOutFilter_2) {
                                field.checkedValue = checkedValue_1;
                            }
                        });
                    }
                }
                // RADIO B
                if (injectedComponent.id.includes('iRadioB')) {
                    var idWithOutFilter_3 = injectedComponent.id.replace('iRadioB', '');
                    var name_2 = 'input[name="' + (idWithOutFilter_3) + '"]';
                    var radios = injectedComponent.querySelectorAll(name_2);
                    var checkedValue_2;
                    for (var i = 0, length_2 = radios.length; i < length_2; i++) {
                        if (radios[i].checked) {
                            valuesToInsert[idWithOutFilter_3] = [radios[i].value];
                            checkedValue_2 = radios[i].value;
                            // only one radio can be logically checked
                            break;
                        }
                    }
                    // Save the value for user form
                    if (this_1.isNewUser() || this_1.isEditUser()) {
                        this_1.contentToExport.fields.forEach(function (field) {
                            if (field.referenceNumber === idWithOutFilter_3) {
                                field.checkedValue = checkedValue_2;
                            }
                        });
                    }
                }
                // RADIO C
                if (!this_1.isALoop()) {
                    if (injectedComponent.id.includes('iNewRadioC')) {
                        if (injectedComponent.checked) {
                            var idWithOutFilter_4 = injectedComponent.name;
                            valuesToInsert[idWithOutFilter_4] = [injectedComponent.getAttribute('data-texto')];
                            // Save the value for user form
                            var idOfSelectedRadio_1 = injectedComponent.id.replace('loopRadio', '');
                            if (this_1.isNewUser() || this_1.isEditUser()) {
                                this_1.contentToExport.fields.forEach(function (field) {
                                    if (field.referenceNumber === idWithOutFilter_4) {
                                        field.radios.forEach(function (radio) {
                                            if (radio.randomId === idOfSelectedRadio_1) {
                                                radio.value = injectedComponent.getAttribute('data-contentToExport');
                                                radio.checkedValue = true;
                                            }
                                            else {
                                                radio.checkedValue = false;
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    }
                }
                else {
                    if (injectedComponent.id.includes('iNewRadioC')) {
                        if (injectedComponent.checked) {
                            var idWithOutFilter_5 = injectedComponent.name;
                            valuesToInsert[idWithOutFilter_5] = [injectedComponent.getAttribute('data-texto')];
                            var idOfSelectedRadio_2 = injectedComponent.id.replace('loopRadio', '');
                            if (this_1.isNewUser() || this_1.isEditUser()) {
                                this_1.contentToExport.fields.forEach(function (field) {
                                    if (field.referenceNumber === idWithOutFilter_5) {
                                        field.radios.forEach(function (radio) {
                                            if (radio.randomId === idOfSelectedRadio_2) {
                                                radio.value = injectedComponent.getAttribute('data-contentToExport');
                                                radio.checkedValue = true;
                                            }
                                            else {
                                                radio.checkedValue = false;
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.injectedComponents; _i < _a.length; _i++) {
            var injectedComponent = _a[_i];
            _loop_1(injectedComponent);
        }
        var radioTextValue = this.commonsService.replaceIdsWithValues(valuesToInsert, this.contentToExport.text);
        // Eliminar el <p>
        // radioTextValue = radioTextValue.slice(3);
        // radioTextValue = radioTextValue.slice(0, radioTextValue.length - 4);
        if (!this.isALoop()) {
            document.getElementById(this.randomId).setAttribute('data-texto', radioTextValue);
            // Carefull with this
            document.getElementById(this.randomId).setAttribute('data-contentToExport', JSON.stringify(this.contentToExport));
        }
        else {
            // Esto es un hack que hice, hago loop sobre todos los que tienen ese id,
            // porque a veces coge los inputs de los modales
            document.querySelectorAll('#' + 'loopRadio' + this.randomId).forEach(function (element) {
                element.setAttribute('data-texto', radioTextValue);
                // Carefull with this
                element.setAttribute('data-contentToExport', JSON.stringify(_this.contentToExport));
            });
        }
    };
    HiddenInputsComponent.prototype.showHiddenInput = function () {
        var _this = this;
        var radios = this.radios.nativeElement.querySelectorAll('.radiosOfInputHidden');
        radios.forEach(function (radio) {
            var id2 = radio.id.replace('loopRadio', '');
            if (radio.checked) {
                _this.radios.nativeElement.querySelector('#inputsHidden' + id2).childNodes[0].classList.replace('d-none', 'd-block');
            }
            else {
                _this.radios.nativeElement.querySelector('#inputsHidden' + id2).childNodes[0].classList.replace('d-block', 'd-none');
            }
        });
        // classList.replace('d-none', 'd-block')
        // this.commonsService.replaceClassDnoneForDblock(document.getElementById('inputsHidden' + id));
    };
    HiddenInputsComponent.prototype.updateContentToExport = function () {
        if (!this.isALoop()) {
            if (document.getElementById(this.randomId) !== null) {
                var contentToExport = document.getElementById(this.randomId).getAttribute('data-contentToExport');
                this.contentToExport = contentToExport !== null ? JSON.parse(contentToExport) : this.contentToExport;
            }
        }
        else {
            if (document.getElementById(this.randomId) !== null) {
                var contentToExport = document.getElementById('loopRadio' + this.randomId).getAttribute('data-contentToExport');
                this.contentToExport = contentToExport !== null ? JSON.parse(contentToExport) : this.contentToExport;
            }
            else {
                if (this.isNewUser() || this.isEditUser()) {
                    var contentToExport = document.getElementById('loopRadio' + this.randomId).getAttribute('data-contentToExport');
                    this.contentToExport = contentToExport !== null ? JSON.parse(contentToExport) : this.contentToExport;
                }
            }
        }
    };
    HiddenInputsComponent.prototype.checkIfParentIsCurrentDiv = function (firstParent, secondParent, thirdParent) {
        if (firstParent.id.includes('inputsHidden' + this.randomId)
            || secondParent.id.includes('inputsHidden' + this.randomId) || thirdParent.id.includes('inputsHidden' + this.randomId)) {
            return true;
        }
        else {
            return false;
        }
    };
    HiddenInputsComponent.prototype.toggleModal = function (question, indications) {
        this.modal.nativeElement.classList.toggle('show-modal');
        this.currentQuestion = question;
        this.currentIndications = indications;
    };
    // Force click so it can update the value
    HiddenInputsComponent.prototype.forceClick = function () {
        this.dateDiv.nativeElement.click();
    };
    HiddenInputsComponent.prototype.isALoop = function () { return this.isInsideALoop === true; };
    HiddenInputsComponent.prototype.isNewAuthor = function () { return this.state === undefined; };
    HiddenInputsComponent.prototype.isNewUser = function () { return this.state === 'newUser'; };
    HiddenInputsComponent.prototype.isEditAuthor = function () { return this.state === 'editAuthor'; };
    HiddenInputsComponent.prototype.isEditUser = function () { return this.state === 'editUser'; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('divForMutationObserver'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HiddenInputsComponent.prototype, "divForMutationObserver", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('radios'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HiddenInputsComponent.prototype, "radios", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dateDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HiddenInputsComponent.prototype, "dateDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HiddenInputsComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], HiddenInputsComponent.prototype, "isInsideALoop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HiddenInputsComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HiddenInputsComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HiddenInputsComponent.prototype, "optionalValues", void 0);
    HiddenInputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hidden-inputs',
            template: __webpack_require__(/*! ./hidden-inputs.component.html */ "./src/app/shared/inputs/input-radio-c/hidden-inputs/hidden-inputs.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["CommonsService"]])
    ], HiddenInputsComponent);
    return HiddenInputsComponent;
}());



/***/ }),

/***/ "./src/app/shared/inputs/input-radio-c/hidden-inputs/index.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-c/hidden-inputs/index.ts ***!
  \********************************************************************/
/*! exports provided: HiddenInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hidden_inputs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hidden-inputs.component */ "./src/app/shared/inputs/input-radio-c/hidden-inputs/hidden-inputs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HiddenInputsComponent", function() { return _hidden_inputs_component__WEBPACK_IMPORTED_MODULE_0__["HiddenInputsComponent"]; });




/***/ }),

/***/ "./src/app/shared/inputs/input-radio-c/index.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-c/index.ts ***!
  \******************************************************/
/*! exports provided: InputRadioCComponent, NewRadioCComponent, HiddenInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_radio_c_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-radio-c.component */ "./src/app/shared/inputs/input-radio-c/input-radio-c.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputRadioCComponent", function() { return _input_radio_c_component__WEBPACK_IMPORTED_MODULE_0__["InputRadioCComponent"]; });

/* harmony import */ var _new_radio_c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-radio-c */ "./src/app/shared/inputs/input-radio-c/new-radio-c/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioCComponent", function() { return _new_radio_c__WEBPACK_IMPORTED_MODULE_1__["NewRadioCComponent"]; });

/* harmony import */ var _hidden_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hidden-inputs */ "./src/app/shared/inputs/input-radio-c/hidden-inputs/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HiddenInputsComponent", function() { return _hidden_inputs__WEBPACK_IMPORTED_MODULE_2__["HiddenInputsComponent"]; });






/***/ }),

/***/ "./src/app/shared/inputs/input-radio-c/input-radio-c.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-c/input-radio-c.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Radio-c -->\n<div #idForHiddenInputs [id]=\"'idForHiddenInputs' + randomId\">\n    <div class=\"field smooth-intro divWhereIsDeleteButton\" [id]=\"'parentId' + randomId\" #delete\n    [ngClass]=\"{'field-fill-form': isNewUser() || isEditUser() }\">\n        <div class=\"field-content d-none-grid-100\" [ngClass]=\"{'field-content-fill-form': isNewUser() || isEditUser() }\">\n            <div class=\"field-area\">\n    \n                <!-- HEADER-->\n                <div class=\"field-area-top d-block\" *ngIf=\"isEditAuthor() || isNewAuthor()\">\n                    <div class=\"label\">\n                        <span>Radio C</span>\n                    </div>\n                    <div class=\"dragAndDropBotton\">\n                        <span class=\"icon icon-ellipsis-h-solid\"></span>\n                        <span class=\"icon icon-ellipsis-h-solid\"></span>\n                    </div>\n                    <div class=\"identifier\">\n                        <span class=\"identifier-label\">\n                            Id:\n                        </span>\n                        <span class=\"identifier-id\">\n                            <span (dblclick)=\"showChangeIdInputField()\" #draggableText>{{referenceNumber}}</span>\n                            <input (blur)=\"showChangeIdInputField()\" (keyup.enter)=\"changeIdInput.blur()\" \n                                    (keyup)=\"changeId($event)\" type=\"text\" value=\"{{referenceNumber}}\" #changeIdInput>\n                        </span>\n                    </div>\n                </div>\n    \n                <span *ngIf=\"isNewAuthor()\">\n                    <div class=\"field-area-top field-area-top-fill-form d-none-flex\"\n                    (click)=\"toggleModal(false)\"\n                    *ngIf=\"indications !== '' && indications !== undefined\">\n                        <div class=\"indication\">\n                            <span class=\"icon icon-info-circle-solid\"></span>\n                        </div>\n                    </div>\n                </span>\n                \n                <span *ngIf=\"isEditAuthor()\">\n                    <div class=\"field-area-top field-area-top-fill-form d-none-flex\"\n                        (click)=\"toggleModal(false)\"\n                        *ngIf=\"field.indications !== '' && field.indications !== undefined\">\n                        <div class=\"indication\">\n                            <span class=\"icon icon-info-circle-solid\"></span>\n                        </div>\n                    </div>\n                </span>\n\n                <span *ngIf=\"isNewUser() || isEditUser()\">\n                    <div class=\"field-area-top\"\n                        (click)=\"toggleModal(false)\"\n                        *ngIf=\"field.indications !== '' && field.indications !== undefined\">\n    \n                        <div class=\"indication\">\n                            <span class=\"icon icon-info-circle-solid\"></span>\n                        </div>\n                        \n                    </div>\n                </span>\n    \n                <div class=\"field-area-middle\">\n                  \n                    <input *ngIf=\"isEditAuthor()\"\n                    type=\"text\" \n                    id=\"question\"\n                    class=\"{{questionIdentifier}} question-field d-block\"\n                    placeholder=\"Question\" [(ngModel)]=\"field.question\">\n    \n                    <input *ngIf=\"isNewAuthor()\"\n                    type=\"text\"\n                    id=\"question\"\n                    class=\"{{questionIdentifier}} question-field d-block\"\n                    placeholder=\"Question\" [(ngModel)]=\"question\">\n    \n                    <span class=\"question d-none\" *ngIf=\"isNewAuthor()\">{{question}}</span>\n                    <span class=\"question d-none\" *ngIf=\"isEditAuthor()\">{{field.question}}</span>\n                    <span class=\"question\" *ngIf=\"isNewUser() || isEditUser()\">{{field.question}}</span>\n                    \n                    <div #radios id=\"{{randomId}}\" class=\"inputRadio inputCollection\" (click)=\"onRadioSelected()\">\n                        <span *ngIf=\"isEditAuthor() || isNewUser() || isEditUser()\">\n                          <app-new-radio-c *ngFor=\"let radio of field.radios\" [field]=\"radio\" [state]=\"state\"></app-new-radio-c>\n                        </span>\n                    </div>\n    \n                    <div class=\"add-another-radio-button d-block\" (click)=\"addNewRadio()\" *ngIf=\"isEditAuthor() || isNewAuthor()\">\n                        <span class=\"icon icon-plus-circle-solid\"></span>\n                    </div>\n                </div>\n                \n                <div class=\"field-area-bottom d-block\" *ngIf=\"isNewAuthor() || isEditAuthor()\">\n                    <label class=\"switch d-block\" >\n                            <input type=\"checkbox\" class=\"{{mandatoryIdentifier}}\" [(ngModel)]=\"mandatory\" *ngIf=\"isNewAuthor()\">\n                            <input type=\"checkbox\" class=\"{{mandatoryIdentifier}}\" [(ngModel)]=\"field.mandatory\" *ngIf=\"isEditAuthor()\">\n                        <span class=\"slider round\"></span>\n                    </label>\n                    <span class=\"switch-label d-block\">Obligatorio</span>\n                </div>\n\n                <div class=\"field-area-bottom field-area-bottom-input-text d-none-flex\" *ngIf=\"isNewAuthor() && mandatory\">\n                    <span class=\"mandatory\">\n                        Obligatorio *\n                    </span>\n                </div>\n                <div class=\"field-area-bottom field-area-bottom-input-text\" \n                    *ngIf=\"(isEditAuthor() || isNewUser() || isEditUser()) && field.mandatory\" [ngClass]=\"{'d-none-flex': isEditAuthor() }\">\n                    <span class=\"mandatory\">\n                        Obligatorio *\n                    </span>\n                </div>\n            </div>\n            <div class=\"right-button d-flex\" id=\"right-button\" *ngIf=\"isNewAuthor() || isEditAuthor()\">\n                <div class=\"tooltip\">\n                    <span class=\"icon icon-ellipsis-v-solid\" id=\"right-button-menu\" #rightMenuButton (click)=\"showRightMenu()\"></span>\n                    <span class=\"right-button-menu\" #rightMenu>\n                        <div class=\"group\">\n                            <span #showModalButton>Indicactions for this field</span>\n                        </div>\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"remove-button d-block\" *ngIf=\"isEditAuthor()\" (click)=\"deleteDiv()\">\n            <span class=\"icon icon-trash-alt-regular\"></span>\n        </div>\n    </div>\n    <span *ngIf=\"isEditAuthor() || isNewUser() || isEditUser()\">\n        <app-hidden-inputs *ngFor=\"let radio of field.radios\" [optionalValues]=\"{randomId: radio.randomId}\"\n                        [isInsideALoop]=\"false\" [state]=\"state\"></app-hidden-inputs>\n    </span>\n</div>\n    \n<!-- Modal -->\n<div class=\"modal\" #modal>\n    <div class=\"modal-content\">\n        <div class=\"modal-top modal-top-input-text\">\n            <h5>Indicaciones para pregunta</h5>\n            <span *ngIf=\"isNewAuthor()\">{{question}}</span>\n            <span *ngIf=\"isEditAuthor()\">{{field.question}}</span>\n\n            <span *ngIf=\"isNewUser()\">{{field.question}}</span>\n        </div>\n        <div class=\"modal-middle modal-middle-input-text\">\n            <textarea class=\"d-block {{indicationsIdentifier}}\" cols=\"30\" rows=\"10\" [(ngModel)]=\"indications\" *ngIf=\"isNewAuthor()\"></textarea>\n            <textarea class=\"d-block {{indicationsIdentifier}}\" cols=\"30\" rows=\"10\" [(ngModel)]=\"field.indications\" *ngIf=\"isEditAuthor()\"></textarea>\n            <p class=\"d-none\" *ngIf=\"isNewAuthor()\">{{indications}}</p>\n            <p class=\"d-none\" *ngIf=\"isEditAuthor()\">{{field.indications}}</p>\n\n            <p class=\"d-block\" *ngIf=\"isNewUser()\">{{field.indications}}</p>\n        </div>\n        <div class=\"modal-bottom modal-bottom-input-text\">\n            <button class=\"button d-block\" (click)=\"toggleModal(false)\" *ngIf=\"isNewAuthor() || isEditAuthor()\">Guardar</button>\n            <button class=\"button delete-indications d-block\" (click)=\"toggleModal(true)\" *ngIf=\"isNewAuthor() || isEditAuthor()\">Borrar</button>\n            <button class=\"button\" (click)=\"toggleModal(false)\" [ngClass]=\"{'d-none': isNewAuthor() || isEditAuthor() }\">Entendido</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/inputs/input-radio-c/input-radio-c.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-c/input-radio-c.component.ts ***!
  \************************************************************************/
/*! exports provided: InputRadioCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRadioCComponent", function() { return InputRadioCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");
/* harmony import */ var _new_radio_c__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-radio-c */ "./src/app/shared/inputs/input-radio-c/new-radio-c/index.ts");
/* harmony import */ var _hidden_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hidden-inputs */ "./src/app/shared/inputs/input-radio-c/hidden-inputs/index.ts");





var InputRadioCComponent = /** @class */ (function () {
    function InputRadioCComponent(commonsService, componentInjectorService) {
        this.commonsService = commonsService;
        this.componentInjectorService = componentInjectorService;
    }
    InputRadioCComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isNewUser() || this.isEditUser()) {
            this.randomId = this.field['referenceNumber'];
            this.referenceNumber = this.field['referenceNumber'];
        }
        else {
            this.getRandomId();
        }
        if (this.isEditUser()) {
            // Force click so it can update the value
            setTimeout(function () { _this.radios.nativeElement.click(); }, 10);
        }
    };
    InputRadioCComponent.prototype.ngAfterViewInit = function () {
        this.enableDrag();
    };
    InputRadioCComponent.prototype.getRandomId = function () {
        if (this.isEditAuthor()) {
            this.referenceNumber = this.field['referenceNumber'];
            this.randomId = this.field['id'];
            this.questionIdentifier = 'question' + this.field['referenceNumber'];
            this.indicationsIdentifier = 'indications' + this.field['referenceNumber'];
            this.mandatoryIdentifier = 'mandatory' + this.field['referenceNumber'];
        }
        else {
            // I add a character so that when we query the id without the inputTex it works
            this.referenceNumber = 'i' + Math.random().toString(36).substring(7);
            this.randomId = 'iRadioC' + this.referenceNumber;
            this.questionIdentifier = 'question' + this.referenceNumber;
            this.indicationsIdentifier = 'indications' + this.referenceNumber;
            this.mandatoryIdentifier = 'mandatory' + this.referenceNumber;
        }
    };
    InputRadioCComponent.prototype.getRandomIdForNewRadio = function () {
        this.randomIdForNewRadio = 'iNewRadioC' + 'i' + Math.random().toString(36).substring(7);
    };
    InputRadioCComponent.prototype.changeId = function (e) {
        var _this = this;
        var newValue = e.target.value;
        if (newValue[0] !== 'i') {
            newValue = 'i' + newValue;
            this.changeIdInput.nativeElement.value = newValue;
        }
        if (newValue.length > 10) {
            newValue = newValue.substring(0, 10);
            this.changeIdInput.nativeElement.value = newValue;
        }
        // Update injected radios first, after change reference number
        var name = 'input[name="' + ('name' + this.referenceNumber) + '"]';
        this.radios.nativeElement.querySelectorAll(name).forEach(function (radio) {
            radio.name = 'name' + newValue;
        });
        this.radios.nativeElement.querySelectorAll('.name' + this.referenceNumber).forEach(function (element) {
            element.classList.replace('name' + _this.referenceNumber, 'name' + newValue);
        });
        this.referenceNumber = newValue;
        this.randomId = 'iRadioC' + this.referenceNumber;
        this.questionIdentifier = 'question' + this.referenceNumber;
        this.indicationsIdentifier = 'indications' + this.referenceNumber;
        this.mandatoryIdentifier = 'mandatory' + this.referenceNumber;
        this.enableDrag();
    };
    InputRadioCComponent.prototype.enableDrag = function () {
        if (this.isEditAuthor() || this.isNewAuthor()) {
            this.commonsService.enableDrag(this.draggableText.nativeElement, this.referenceNumber);
        }
    };
    InputRadioCComponent.prototype.showChangeIdInputField = function () {
        if (this.draggableText.nativeElement.style.display === 'none') {
            this.draggableText.nativeElement.style.display = 'inline';
            this.changeIdInput.nativeElement.style.display = 'none';
            if (this.changeIdInput.nativeElement.value === 'i') {
                this.getRandomId();
                this.enableDrag();
            }
        }
        else {
            this.draggableText.nativeElement.style.display = 'none';
            this.changeIdInput.nativeElement.style.display = 'inline';
            this.changeIdInput.nativeElement.focus();
        }
    };
    InputRadioCComponent.prototype.showRightMenu = function () {
        var _this = this;
        if (this.rightMenu.nativeElement.style.display !== 'block') {
            this.rightMenu.nativeElement.style.display = 'block';
            this.rightMenu.nativeElement.classList.add('smooth-intro');
            this.functionReference = this.hideMenuRight.bind(this);
            setTimeout(function () {
                window.addEventListener('click', _this.functionReference);
            }, 200);
        }
    };
    InputRadioCComponent.prototype.hideMenuRight = function (e) {
        if (this.rightMenu.nativeElement.contains(event.target)) {
            if (event.target === this.showModalButton.nativeElement) {
                this.rightMenu.nativeElement.style.display = 'none';
                window.removeEventListener('click', this.functionReference);
                this.toggleModal(false);
            }
        }
        else {
            this.rightMenu.nativeElement.style.display = 'none';
            window.removeEventListener('click', this.functionReference);
        }
    };
    InputRadioCComponent.prototype.toggleModal = function (eraseIndications) {
        this.modal.nativeElement.classList.toggle('show-modal');
        if (eraseIndications) {
            this.indications = '';
        }
    };
    InputRadioCComponent.prototype.addNewRadio = function () {
        this.getRandomIdForNewRadio();
        this.componentInjectorService.appendComponentToBody('Radio', _new_radio_c__WEBPACK_IMPORTED_MODULE_3__["NewRadioCComponent"], this.randomId, 'parentId' + this.randomId, 'form-check-inline', {
            randomName: 'name' + this.referenceNumber,
            randomId: this.randomIdForNewRadio
        });
        this.componentInjectorService.appendComponentToBody('InputsHidden', _hidden_inputs__WEBPACK_IMPORTED_MODULE_4__["HiddenInputsComponent"], 'idForHiddenInputs' + this.randomId, 'idForHiddenInputs' + this.randomId, '', { randomId: this.randomIdForNewRadio });
        this.onRadioSelected();
    };
    InputRadioCComponent.prototype.deleteElementDiv = function () {
        this.delete.nativeElement.remove();
        this.idForHiddenInputs.nativeElement.remove();
    };
    InputRadioCComponent.prototype.onRadioSelected = function () {
        var name = 'input[name="' + ('name' + this.referenceNumber) + '"]';
        var radios = this.radios.nativeElement.querySelectorAll(name);
        for (var i = 0, length_1 = radios.length; i < length_1; i++) {
            if (radios[i].checked) {
                document.getElementById('inputsHidden' + radios[i].id).hidden = false;
                if (this.isNewUser() || this.isEditUser()) {
                    this.idForHiddenInputs.nativeElement.querySelector('#inputsHidden' + radios[i].id)
                        .childNodes[0].classList.replace('d-none', 'd-block');
                }
                // only one radio can be logically checked
            }
            else {
                document.getElementById('inputsHidden' + radios[i].id).hidden = true;
                if (this.isNewUser() || this.isEditUser()) {
                    this.idForHiddenInputs.nativeElement.querySelector('#inputsHidden' + radios[i].id)
                        .childNodes[0].classList.replace('d-block', 'd-none');
                }
            }
        }
    };
    InputRadioCComponent.prototype.isNewAuthor = function () { return this.state === undefined; };
    InputRadioCComponent.prototype.isNewUser = function () { return this.state === 'newUser'; };
    InputRadioCComponent.prototype.isEditAuthor = function () { return this.state === 'editAuthor'; };
    InputRadioCComponent.prototype.isEditUser = function () { return this.state === 'editUser'; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputRadioCComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputRadioCComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('delete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioCComponent.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('idForHiddenInputs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioCComponent.prototype, "idForHiddenInputs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('draggableText'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioCComponent.prototype, "draggableText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('radios'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioCComponent.prototype, "radios", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('changeIdInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioCComponent.prototype, "changeIdInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioCComponent.prototype, "rightMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightMenuButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioCComponent.prototype, "rightMenuButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showModalButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioCComponent.prototype, "showModalButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputRadioCComponent.prototype, "modal", void 0);
    InputRadioCComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-radio-c',
            template: __webpack_require__(/*! ./input-radio-c.component.html */ "./src/app/shared/inputs/input-radio-c/input-radio-c.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["CommonsService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["ComponentInjectorService"]])
    ], InputRadioCComponent);
    return InputRadioCComponent;
}());



/***/ }),

/***/ "./src/app/shared/inputs/input-radio-c/new-radio-c/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-c/new-radio-c/index.ts ***!
  \******************************************************************/
/*! exports provided: NewRadioCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_radio_c_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-radio-c.component */ "./src/app/shared/inputs/input-radio-c/new-radio-c/new-radio-c.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioCComponent", function() { return _new_radio_c_component__WEBPACK_IMPORTED_MODULE_0__["NewRadioCComponent"]; });




/***/ }),

/***/ "./src/app/shared/inputs/input-radio-c/new-radio-c/modal-content/modal-content.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-c/new-radio-c/modal-content/modal-content.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-creator-container\" #formBasedDocDiv>\n  <div class=\"fields-area fields-area-conditional\">\n    <div class=\"fields-container fields-container-conditional\" #formAreaDiv [id]=\"'modalFormAreaDiv' + idOfRadioParent\" (keyup)=\"generateText()\" (click)=\"generateText()\">\n      <div *ngIf=\"state === 'editAuthor'\">\n        <div *ngFor=\"let field of fields\">\n            <app-input-text *ngIf=\"field['type'] == 'iText'\" [field]=\"field\"></app-input-text>\n            <!-- <app-input-date *ngIf=\"field['type'] == 'iDate'\" [state]=\"state\" [field]=\"field\"></app-input-date> -->\n            <!-- <app-input-radio-a *ngIf=\"field['type'] == 'iRadioA'\" [state]=\"state\" [field]=\"field\"></app-input-radio-a>\n            <app-input-radio-b *ngIf=\"field['type'] == 'iRadioB'\" [state]=\"state\" [field]=\"field\"></app-input-radio-b>\n            <app-input-radio-c *ngIf=\"field['type'] == 'iRadioC'\" [state]=\"state\" [field]=\"field\"></app-input-radio-c> -->\n        </div>\n      </div>\n    </div>\n\n    <div class=\"add-question-button add-question-button d-block\">\n        <div class=\"tooltip\" (click)=\"toogleQuestionMenu($event)\">\n            <span class=\"icon icon-plus-solid\" id=\"add-question-button2\"></span>\n            <span class=\"add-question-menu\" #addQuestionMenuDiv>\n              <span class=\"icon icon-times-solid close-question-menu {{randomId}}\"></span>\n              <div class=\"group\">\n                <span>Text</span>\n                <div class=\"buttons-group\">\n                  <button (click)=\"injectComponent(inputs[0])\">Text</button>\n                </div>\n              </div>\n              <div class=\"group\">\n                <span>Radio</span>\n                <div class=\"buttons-group\">\n                  <button (click)=\"injectComponent(inputs[1])\">Radio a</button>\n                  <button (click)=\"injectComponent(inputs[2])\">Radio b</button>\n                  <button (click)=\"injectComponent(inputs[3])\">Radio c</button>\n                </div>\n              </div>\n              <div class=\"group\">\n                <span>Others</span>\n                <div class=\"buttons-group\">\n                  <button>Date</button>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"text-area text-area-conditional\">\n        <!-- Create the editor container -->\n        <div class=\"editor-container-conditional d-block\" #editorContainer>\n            <quill-editor (onContentChanged)=\"contentToExport.text = $event.html\"\n                          [ngModel]=\"contentToExport.text\" [ngModelOptions]=\"{standalone: true}\" \n                        [customOptions]=\"customOptions\" [modules]=\"quillModules\"\n                          #quill></quill-editor>\n        </div>\n        <div class=\"d-none textToGeneratePreview\" #textPreviewDiv>{{textPreview}}</div>\n      </div>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/shared/inputs/input-radio-c/new-radio-c/modal-content/modal-content.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-c/new-radio-c/modal-content/modal-content.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContentComponent", function() { return ModalContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core */ "./src/app/core/index.ts");
/* harmony import */ var _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../input-text/input-text.component */ "./src/app/shared/inputs/input-text/input-text.component.ts");
/* harmony import */ var _input_radio_a_input_radio_a_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../input-radio-a/input-radio-a.component */ "./src/app/shared/inputs/input-radio-a/input-radio-a.component.ts");
/* harmony import */ var _input_radio_b_input_radio_b_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../input-radio-b/input-radio-b.component */ "./src/app/shared/inputs/input-radio-b/input-radio-b.component.ts");
/* harmony import */ var _input_radio_c_input_radio_c_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../input-radio-c/input-radio-c.component */ "./src/app/shared/inputs/input-radio-c/input-radio-c.component.ts");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/Sortable.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_7__);




// import { InputDateComponent } from '../../../input-date/input-date.component';




var ModalContentComponent = /** @class */ (function () {
    function ModalContentComponent(componentInjectorService, commonsService) {
        this.componentInjectorService = componentInjectorService;
        this.commonsService = commonsService;
        this.inputs = [
            _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"],
            _input_radio_a_input_radio_a_component__WEBPACK_IMPORTED_MODULE_4__["InputRadioAComponent"],
            _input_radio_b_input_radio_b_component__WEBPACK_IMPORTED_MODULE_5__["InputRadioBComponent"],
            _input_radio_c_input_radio_c_component__WEBPACK_IMPORTED_MODULE_6__["InputRadioCComponent"]
        ];
        this.quillText = '';
        this.injectedComponents = [];
        this.isButtonDisabled = false;
        this.contentToExport = {
            text: '',
            fields: []
        };
        // Use just when Editor Author
        this.fields = [];
    }
    ModalContentComponent.prototype.ngOnInit = function () {
        if (this.isEditAuthor()) {
            var parsedData = JSON.parse(this.field.value);
            this.contentToExport.fields = parsedData.fields;
            this.fields = parsedData.fields;
            this.contentToExport.text = this.textPreview = parsedData.text;
        }
        else {
        }
        this.quillConfig();
        this.getRandomId();
    };
    ModalContentComponent.prototype.ngAfterViewInit = function () {
        this.setDivHeight();
        this.enableSortablejs();
    };
    ModalContentComponent.prototype.injectComponent = function (component) {
        this.componentInjectorService.appendComponentToBody('Component', component, 'modalFormAreaDiv' + this.idOfRadioParent, 'modalFormAreaDiv' + this.idOfRadioParent, 'divWhereIsDeleteButton', {});
        this.injectedComponents = this.formAreaDiv.nativeElement.querySelectorAll('.inputCollection');
    };
    ModalContentComponent.prototype.preview = function () {
        // this.commonsService.replaceClassDnoneForDblock(this.formBasedDocDiv);
        // this.commonsService.replaceClassDnoneflexForDflex(this.formBasedDocDiv);
        // this.commonsService.replaceClassDnonegridForDgrid(this.formBasedDocDiv);
        this.commonsService.replaceOtherClasses(this.formBasedDocDiv);
    };
    ModalContentComponent.prototype.generateText = function () {
        this.injectedComponents = this.formAreaDiv.nativeElement.querySelectorAll('.inputCollection');
        var valuesToInsert = {};
        // Clean the contentToExport.fields so when updating it doesn't duplicate inputs to save
        this.contentToExport.fields = [];
        var _loop_1 = function (injectedComponent) {
            var firstParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var secondParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var thirdParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var fourthParent = injectedComponent.parentNode.parentNode.parentNode.parentNode
                .parentNode.parentNode.parentNode.parentNode.parentNode;
            if (this_1.checkIfParentIsCurrenModal(firstParent, secondParent, thirdParent, fourthParent)) {
                // TEXT
                if (injectedComponent.id.includes('iText')) {
                    var idWithOutFilter = injectedComponent.id.replace('iText', '');
                    valuesToInsert[idWithOutFilter] = [injectedComponent.value];
                    // Save
                    var newField = {
                        type: 'iText',
                        referenceNumber: idWithOutFilter,
                        id: 'iText' + idWithOutFilter,
                        question: this_1.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter).value,
                        indications: this_1.formAreaDiv.nativeElement.querySelector('.indications' + idWithOutFilter).value,
                        mandatory: this_1.formAreaDiv.nativeElement.querySelector('.mandatory' + idWithOutFilter).checked
                    };
                    this_1.contentToExport.fields.push(newField);
                }
                // DATE
                // if (injectedComponent.id.includes('iDate') === true) {
                //   const idWithOutFilter = injectedComponent.id.replace('iDate', '');
                //   valuesToInsert[idWithOutFilter] = [injectedComponent.value];
                //   // Save
                //   const newField: any = {
                //     type: 'iDate',
                //     referenceNumber: idWithOutFilter,
                //     question: this.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter).value,
                //     dateFormat: injectedComponent.parentNode.querySelector('.dateFormatSelectorDiv').value
                //   };
                //   this.contentToExport.fields.push(newField);
                // }
                // RADIO-A
                if (injectedComponent.id.includes('iRadioA') === true) {
                    var idWithOutFilter = injectedComponent.id.replace('iRadioA', '');
                    var name_1 = 'input[name="' + ('name' + idWithOutFilter) + '"]';
                    var radios = this_1.formAreaDiv.nativeElement.querySelector('#' + injectedComponent.id).querySelectorAll(name_1);
                    for (var i = 0, length_1 = radios.length; i < length_1; i++) {
                        if (radios[i].checked) {
                            valuesToInsert[idWithOutFilter] = [radios[i].value];
                            // only one radio can be logically checked
                            break;
                        }
                    }
                    // Save
                    var newField = {
                        type: 'iRadioA',
                        referenceNumber: idWithOutFilter,
                        id: 'iRadioA' + idWithOutFilter,
                        radios: Array.prototype.slice.call(radios).map(function (radio) { return radio.value; }),
                        question: this_1.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter).value,
                        indications: this_1.formAreaDiv.nativeElement.querySelector('.indications' + idWithOutFilter).value,
                        mandatory: this_1.formAreaDiv.nativeElement.querySelector('.mandatory' + idWithOutFilter).checked
                    };
                    this_1.contentToExport.fields.push(newField);
                }
                // RADIO-B
                if (injectedComponent.id.includes('iRadioB') === true) {
                    var idWithOutFilter_1 = injectedComponent.id.replace('iRadioB', '');
                    var name_2 = 'input[name="' + ('name' + idWithOutFilter_1) + '"]';
                    var radios = this_1.formAreaDiv.nativeElement.querySelector('#' + injectedComponent.id).querySelectorAll(name_2);
                    for (var i = 0, length_2 = radios.length; i < length_2; i++) {
                        if (radios[i].checked) {
                            valuesToInsert[idWithOutFilter_1] = [radios[i].parentNode.parentNode.querySelector('.name' + idWithOutFilter_1).value];
                            // only one radio can be logically checked
                            break;
                        }
                    }
                    // Save form settings
                    var newField = {
                        type: 'iRadioB',
                        referenceNumber: idWithOutFilter_1,
                        id: 'iRadioB' + idWithOutFilter_1,
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
                    this_1.contentToExport.fields.push(newField);
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
                        id: 'iRadioC' + idWithOutFilter_2,
                        radios: Array.prototype.slice.call(radios).map(function (rad) {
                            var radio = {
                                radio: rad.value,
                                value: rad.getAttribute('data-contentToExport'),
                                referenceNumber: idWithOutFilter_2,
                                randomId: rad.id
                            };
                            return radio;
                        }),
                        question: this_1.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter_2).value
                    };
                    this_1.contentToExport.fields.push(newField);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.injectedComponents; _i < _a.length; _i++) {
            var injectedComponent = _a[_i];
            _loop_1(injectedComponent);
        }
        this.textPreview = this.commonsService.replaceIdsWithValues(valuesToInsert, this.contentToExport.text);
        while (this.textPreviewDiv.nativeElement.firstChild) {
            this.textPreviewDiv.nativeElement.removeChild(this.textPreviewDiv.nativeElement.firstChild);
        }
        this.textPreviewDiv.nativeElement.insertAdjacentHTML('beforeend', this.textPreview);
        document.getElementById(this.idOfRadioParent).setAttribute('data-contentToExport', JSON.stringify(this.contentToExport));
    };
    ModalContentComponent.prototype.checkIfParentIsCurrenModal = function (firstParent, secondParent, thirdParent, fourthParent) {
        if (firstParent.id.includes(this.idOfRadioParent) || secondParent.id.includes(this.idOfRadioParent)
            || thirdParent.id.includes(this.idOfRadioParent) || fourthParent.id.includes(this.idOfRadioParent)) {
            return true;
        }
        else {
            return false;
        }
    };
    // UTILITY
    ModalContentComponent.prototype.quillConfig = function () {
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
    ModalContentComponent.prototype.setDivHeight = function () {
        if (window.innerWidth > 885) {
            setTimeout(function () {
                var newHeight = this.formBasedDocDiv.nativeElement.clientHeight;
                this.formBasedDocDiv.nativeElement.style.height = newHeight;
                this.editorContainer.nativeElement.style.height = newHeight;
            }.bind(this), 100);
        }
    };
    ModalContentComponent.prototype.getRandomId = function () {
        this.randomId = 'idForQuestionMenu' + 'i' + Math.random().toString(36).substring(7);
    };
    ModalContentComponent.prototype.toogleQuestionMenu = function (e) {
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
            if (e.target.classList.contains(this.randomId) || e.target.tagName === 'BUTTON') {
                this.addQuestionMenuDiv.nativeElement.style.display = 'none';
                this.addQuestionMenuDiv.nativeElement.classList.remove('smooth-intro');
            }
        }
        else {
            this.addQuestionMenuDiv.nativeElement.style.display = 'block';
            this.addQuestionMenuDiv.nativeElement.classList.add('smooth-intro');
        }
    };
    ModalContentComponent.prototype.enableSortablejs = function () {
        var sortable = sortablejs__WEBPACK_IMPORTED_MODULE_7__["create"](this.formAreaDiv.nativeElement, {
            handle: '.dragAndDropBotton',
            scrollSensitivity: 200,
            scroll: true,
            ghostClass: 'ghost',
            animation: 300,
            fallbackTolerance: 40,
            dragClass: 'sortable-drag'
        });
    };
    ModalContentComponent.prototype.isNewAuthor = function () { return this.state === undefined; };
    ModalContentComponent.prototype.isNewUser = function () { return this.state === 'newUser'; };
    ModalContentComponent.prototype.isEditAuthor = function () { return this.state === 'editAuthor'; };
    ModalContentComponent.prototype.isEditUser = function () { return this.state === 'editUser'; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalContentComponent.prototype, "idOfRadioParent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalContentComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalContentComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('quill'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalContentComponent.prototype, "quill", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputsMenuDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModalContentComponent.prototype, "inputsMenuDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formBasedDocDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModalContentComponent.prototype, "formBasedDocDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formAreaDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModalContentComponent.prototype, "formAreaDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textPreviewDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModalContentComponent.prototype, "textPreviewDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addQuestionMenuDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModalContentComponent.prototype, "addQuestionMenuDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editorContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModalContentComponent.prototype, "editorContainer", void 0);
    ModalContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-content',
            template: __webpack_require__(/*! ./modal-content.component.html */ "./src/app/shared/inputs/input-radio-c/new-radio-c/modal-content/modal-content.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["ComponentInjectorService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["CommonsService"]])
    ], ModalContentComponent);
    return ModalContentComponent;
}());



/***/ }),

/***/ "./src/app/shared/inputs/input-radio-c/new-radio-c/new-radio-c.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-c/new-radio-c/new-radio-c.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #delete>\n    <div class=\"field-area-radio-input radio form-check-inline radio-create-form\" [ngClass]=\"{'radio-fill-form': isNewUser() || isEditUser() }\">\n\n        <input type=\"radio\" [id]=\"randomId\" name=\"{{randomName}}\" value=\"{{radio}}\" *ngIf=\"isNewAuthor()\">\n        <label for=\"{{ randomId }}\" *ngIf=\"isNewAuthor()\"></label>\n\n        <input type=\"radio\" [id]=\"randomId\" name=\"{{randomName}}\" [attr.data-contentToExport]=\"field['value']\" checked value=\"{{field['radio']}}\" *ngIf=\"isEditAuthor()\">\n        <label for=\"{{ randomId }}\" *ngIf=\"isEditAuthor()\"></label>\n\n        <input class=\"{{field.referenceNumber}}\" type=\"radio\" id=\"{{ randomId }}\" name=\"{{randomName}}\" value=\"{{field['radio']}}\"\n        [attr.data-contentToExport]=\"field['value']\" *ngIf=\"isNewUser()\">\n        <label for=\"{{ randomId }}\" *ngIf=\"isNewUser()\"></label>\n\n        <input class=\"{{field.referenceNumber}}\" type=\"radio\" [id]=\"randomId\" name=\"{{randomName}}\" value=\"{{field.value}}\" \n        [attr.data-contentToExport]=\"field['data-contentToExport']\" [checked]=\"field.checked === true\" *ngIf=\"isEditUser()\">\n        <label for=\"{{ randomId }}\" *ngIf=\"isEditUser()\"></label>\n\n\n        <input [(ngModel)]=\"radio\" type=\"text\" class=\"d-block\" name=\"{{randomName}}\" *ngIf=\"isNewAuthor()\">\n        <label class=\"d-none label-fill-form\" *ngIf=\"isNewAuthor()\">\n            {{radio}}\n        </label>\n        <input [(ngModel)]=\"field.radio\" type=\"text\" class=\"d-block\"  name=\"{{randomName}}\" *ngIf=\"isEditAuthor()\">\n        <label class=\"d-none label-fill-form\" *ngIf=\"isEditAuthor()\">{{field.radio}}</label>\n        <label class=\"d-block label-fill-form\" *ngIf=\"isNewUser() || isEditUser()\">{{field.radio}}</label>\n\n        \n        <div class=\"modal-button d-block modal-button-radio\" (click)=\"toggleModal()\" *ngIf=\"isNewAuthor() || isEditAuthor()\">\n            <span class=\"icon icon-multiple-modal\"></span>\n        </div>\n        <div class=\"remove-radio d-block\" (click)=\"deleteElementDiv()\" *ngIf=\"isEditAuthor()\">\n            <span class=\"icon icon-times-solid\"></span>\n        </div>\n    </div>\n    <!-- Modal -->\n    <div class=\"modal\" #modal>\n        <div class=\"modal-content\">\n            <div class=\"modal-top modal-top-input-text\">\n                <h5>Este texto se sustituirá por el identificador</h5>\n            </div>\n            <div class=\"modal-middle\">\n                <textarea class=\"{{randomName}}\" cols=\"30\" rows=\"10\" *ngIf=\"isNewAuthor()\"></textarea>\n                <textarea class=\"{{randomName}}\" cols=\"30\" rows=\"10\"\n                            value=\"{{field.value}}\" *ngIf=\"isEditAuthor()\"></textarea>\n            </div>\n            <div class=\"modal-bottom\">\n                <button class=\"button\" (click)=\"toggleModal()\">Guardar</button>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal -->\n    <div class=\"modal-conditional\" id=\"{{randomNumberForModal}}\" #modalConditional>\n        <div class=\"modal-conditional-content\">\n            <div class=\"modal-conditional-top\">\n                <h3>Opción</h3>\n                <div class=\"preview-conditional\">\n                    <span class=\"preview-conditional-button\">Preview</span>\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" (change)=\"modalContent.preview()\">\n                        <span class=\"slider round\"></span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"modal-conditional-middle\">\n              <app-modal-content class=\"form-creator\" [idOfRadioParent]=\"randomId\" *ngIf=\"isNewAuthor()\" #modalContent></app-modal-content>\n              <app-modal-content class=\"form-creator\" [idOfRadioParent]=\"randomId\" [field]=\"field\" [state]=\"state\" *ngIf=\"isEditAuthor()\" #modalContent></app-modal-content>\n            </div>\n            <div class=\"modal-conditional-bottom\">\n                <button class=\"button\" (click)=\"toggleModal(); modalContent.generateText();\">Guardar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/inputs/input-radio-c/new-radio-c/new-radio-c.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/inputs/input-radio-c/new-radio-c/new-radio-c.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NewRadioCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRadioCComponent", function() { return NewRadioCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewRadioCComponent = /** @class */ (function () {
    function NewRadioCComponent() {
        this.randomNumberForModal = 'i' + Math.random().toString(36).substring(7);
    }
    NewRadioCComponent.prototype.ngOnInit = function () {
        if (this.isNewUser() || this.isEditUser()) {
            this.randomName = 'name' + this.field['referenceNumber'];
        }
        else {
            this.getRandomName();
        }
        this.getRandomId();
    };
    NewRadioCComponent.prototype.getRandomName = function () {
        if (this.isEditAuthor()) {
            this.randomName = 'name' + this.field['referenceNumber'];
        }
        else {
            this.randomName = this.optionalValues['randomName'];
        }
    };
    NewRadioCComponent.prototype.getRandomId = function () {
        if (this.isEditAuthor() || this.isNewUser() || this.isEditUser()) {
            this.randomId = this.field['randomId'];
        }
        else {
            this.randomId = this.optionalValues['randomId'];
        }
    };
    NewRadioCComponent.prototype.toggleModal = function () {
        this.modalConditional.nativeElement.classList.toggle('show-modal');
    };
    NewRadioCComponent.prototype.deleteElementDiv = function () {
        document.getElementById('idForHiddenInputs' + this.field['referenceNumber']).remove();
        this.delete.nativeElement.remove();
    };
    NewRadioCComponent.prototype.isNewAuthor = function () { return this.state === undefined; };
    NewRadioCComponent.prototype.isNewUser = function () { return this.state === 'newUser'; };
    NewRadioCComponent.prototype.isEditAuthor = function () { return this.state === 'editAuthor'; };
    NewRadioCComponent.prototype.isEditUser = function () { return this.state === 'editUser'; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewRadioCComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewRadioCComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewRadioCComponent.prototype, "valueRadio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewRadioCComponent.prototype, "optionalValues", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('delete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NewRadioCComponent.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalConditional'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NewRadioCComponent.prototype, "modalConditional", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewRadioCComponent.prototype, "modalContent", void 0);
    NewRadioCComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-radio-c',
            template: __webpack_require__(/*! ./new-radio-c.component.html */ "./src/app/shared/inputs/input-radio-c/new-radio-c/new-radio-c.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewRadioCComponent);
    return NewRadioCComponent;
}());



/***/ }),

/***/ "./src/app/shared/inputs/input-text/index.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/inputs/input-text/index.ts ***!
  \***************************************************/
/*! exports provided: InputTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_text_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-text.component */ "./src/app/shared/inputs/input-text/input-text.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputTextComponent", function() { return _input_text_component__WEBPACK_IMPORTED_MODULE_0__["InputTextComponent"]; });




/***/ }),

/***/ "./src/app/shared/inputs/input-text/input-text.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/inputs/input-text/input-text.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-creator__fields-area__field\" #delete>\n    <div class=\"form-creator__fields-area__field__container\">\n        <div class=\"form-creator__fields-area__field__field-area form-creator__fields-area__field__field-area--input-text\">\n            <!-- CREATE FORM -->\n            <div class=\"form-creator__fields-area__field__top d-flex\" *ngIf=\"state === 'create-form'\">\n                <div class=\"form-creator__fields-area__field__top__identifier\">\n                    <span class=\"form-creator__fields-area__field__top__identifier__label\">\n                        Id:\n                    </span>\n                    <span class=\"form-creator__fields-area__field__top__identifier__id\">\n                        <span (dblclick)=\"showChangeIdInputField()\" (mousedown)=\"enableDrag()\" #draggableText>{{referenceNumber}}</span>\n                        <input (blur)=\"showChangeIdInputField()\" (keyup.enter)=\"changeIdInput.blur()\" \n                        (keyup)=\"changeId($event)\" type=\"text\" value=\"{{referenceNumber}}\" #changeIdInput style=\"display: none\">\n                    </span>\n                </div>\n            </div>\n            <!---------------->\n            <!-- FILL FORM -->\n            <div class=\"form-creator__fields-area__field__top form-creator__fields-area__field__top--fill-form\" *ngIf=\"state === 'fill-form'\">\n                <div class=\"indication\" *ngIf=\"indications.areIndications\">\n                    <span class=\"icon icon-info-circle-solid trigger\" (click)=\"showIndication($event)\"></span>\n                </div>\n            </div>\n            <!---------------->\n            <div class=\"form-creator__fields-area__field__middle\">\n                <input type=\"text\" placeholder=\"Question\" id=\"question\" placeholder=\"Question\" (keyup)=\"onQuestionChanged(questionValue.value)\" \n                [(ngModel)]=\"question\" #questionValue *ngIf=\"state === 'create-form'\">\n                <span class=\"form-creator__fields-area__field__middle__question\" \n                *ngIf=\"state === 'fill-form'\">{{question}}</span>\n\n                <input type=\"text\" (keyup)=\"input(answer.value)\" [value]='this.step.replacement' #answer *ngIf=\"state === 'fill-form'\">\n            </div>\n            <div class=\"form-creator__fields-area__field__bottom\">\n                <div class=\"form-creator__fields-area__field__bottom__trash divWhereIsDeleteButton\" #divWhereIsDeleteButton>\n                    <div class=\"remove-button d-block smooth-intro\" (click)=\"deleteDiv()\" *ngIf=\"!isNewForm\">\n                        <span class=\"icon icon-trash-alt-regular\"></span>\n                    </div>\n                </div>\n                <div class=\"form-creator__fields-area__field__bottom__mandatory d-flex\" *ngIf=\"state === 'create-form'\">\n                    <span class=\"form-creator__fields-area__field__bottom__mandatory__switch-label\">Obligatorio</span>\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" [checked]=\"mandatory\" (click)=\"onMandatoryChange(mandatoryInput.checked)\" #mandatoryInput>\n                        <span class=\"slider slider--round\"></span>\n                    </label>\n                </div>\n                <span class=\"form-creator__fields-area__field__bottom__mandatory-label\">\n                    <span *ngIf=\"state === 'fill-form' && mandatory\">\n                        Obligatorio *\n                    </span>\n                </span>\n                <div class=\"form-creator__fields-area__field__bottom__menu d-block\" *ngIf=\"state === 'create-form'\">     \n                    <div class=\"tooltip\">\n                        <span class=\"icon icon-ellipsis-v-solid\" id=\"right-button-menu\" #rightMenuButton (click)=\"showRightMenu()\"></span>\n                        <span class=\"tooltip__right-button-menu\" #rightMenu>\n                            <div class=\"tooltip__right-button-menu__group\">\n                                <span #showModalButton (click)=\"toogleModal(modal)\">Indicactions for this field</span>\n                            </div>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal\" #modal>\n    <div class=\"modal__content modal__content--add-new-question\">\n        <app-indications \n        (closeModal)=\"toogleModal(modal)\"\n        [indications]='this.indications'\n        (sendIndications)=\"onIndicationsChanged($event)\"\n        ></app-indications>\n    </div>\n</div>\n    \n<div class=\"modal\" #modalIndication>\n    <div class=\"modal__content modal__content--question-indication\">\n        <div class=\"modal__content__top modal__content__top--privacy\">\n            <h2>{{question}}</h2>\n        </div>\n        <div class=\"modal__content__modal-middle modal__content__modal-middle--question-indication\">\n            <div class=\"modal__content__modal-middle__container\" [innerHTML]=\"this.indications.value\">\n            </div>\n        </div>\n        <div class=\"new-modal-content__footer new-modal-content__footer--indicactions\">\n            <button class=\"btn next-btn\" (click)=\"toogleModal(modalIndication);\">Entendido</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/inputs/input-text/input-text.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/inputs/input-text/input-text.component.ts ***!
  \******************************************************************/
/*! exports provided: InputTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextComponent", function() { return InputTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");



var InputTextComponent = /** @class */ (function () {
    function InputTextComponent(commonsService, stepModelService, stateService, odfCreatorService, plainTextCreatorService) {
        this.commonsService = commonsService;
        this.stepModelService = stepModelService;
        this.stateService = stateService;
        this.odfCreatorService = odfCreatorService;
        this.plainTextCreatorService = plainTextCreatorService;
        this.mandatory = false;
        this.indications = {
            areIndications: false,
            indicationsType: 'outsideText',
            value: ''
        };
    }
    InputTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentType = this.stateService.getDocumentType();
        if (!this.field) {
            this.createStep();
            this.getRandomId();
            this.isNewForm = true;
        }
        else {
            this.step = this.field;
            this.isNewForm = false;
            this.mandatory = this.step.mandatory;
            this.referenceNumber = this.step.identifier;
            this.indications = this.step.indications;
            this.question = this.step.question;
        }
        this.stateService.stateSubscribe().subscribe(function (state) {
            _this.state = state;
            if (_this.state === 'create-form') {
                _this.step.replacement = '';
                _this.divWhereIsDeleteButton.nativeElement.hidden = false;
            }
            else {
                _this.divWhereIsDeleteButton.nativeElement.hidden = true;
            }
        });
        if (this.documentType === 'plain') {
            this.documentService = this.plainTextCreatorService;
        }
        else if (this.documentType === 'office') {
            this.documentService = this.odfCreatorService;
        }
    };
    InputTextComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        var steps = this.stepModelService.getStepsModel();
        steps = steps.filter(function (step) { return step !== _this.step; });
        this.stepModelService.init(steps, this.documentType);
        this.stepModelService.removeStep();
    };
    /**NEW FORM**/
    InputTextComponent.prototype.createStep = function () {
        this.step = {
            type: 'iText',
            identifier: '',
            wordToReplace: '',
            replacement: '',
            question: '',
            indications: this.indications,
            mandatory: false,
            isFocused: false
        };
        this.indications = this.step.indications;
        this.stepModelService.addNewStep(this.step);
    };
    InputTextComponent.prototype.onQuestionChanged = function (value) {
        this.step.question = value;
    };
    InputTextComponent.prototype.getRandomId = function () {
        // I add a character so that when we query the id without the inputTex it works
        this.referenceNumber = 'i' + Math.random().toString(36).substring(7);
        this.step.identifier = this.referenceNumber;
        this.step.wordToReplace = this.referenceNumber;
    };
    InputTextComponent.prototype.changeId = function (e) {
        var newValue = e.target.value;
        if (newValue[0] !== 'i') {
            newValue = 'i' + newValue;
            this.changeIdInput.nativeElement.value = newValue;
        }
        if (newValue.length > 10) {
            newValue = newValue.substring(0, 10);
            this.changeIdInput.nativeElement.value = newValue;
        }
        this.referenceNumber = newValue;
        this.step.identifier = 'iText' + this.referenceNumber;
        this.step.wordToReplace = this.referenceNumber;
        this.enableDrag();
    };
    /************/
    InputTextComponent.prototype.enableDrag = function () {
        this.commonsService.enableDrag(this.draggableText.nativeElement, this.referenceNumber);
    };
    InputTextComponent.prototype.showChangeIdInputField = function () {
        if (this.draggableText.nativeElement.style.display === 'none') {
            this.draggableText.nativeElement.style.display = 'inline';
            this.changeIdInput.nativeElement.style.display = 'none';
            if (this.changeIdInput.nativeElement.value === 'i') {
                this.getRandomId();
                this.enableDrag();
            }
        }
        else {
            this.draggableText.nativeElement.style.display = 'none';
            this.changeIdInput.nativeElement.style.display = 'inline';
            this.changeIdInput.nativeElement.focus();
        }
    };
    InputTextComponent.prototype.showRightMenu = function () {
        var _this = this;
        if (this.rightMenu.nativeElement.style.display !== 'block') {
            this.rightMenu.nativeElement.style.display = 'block';
            this.rightMenu.nativeElement.classList.add('smooth-intro');
            this.functionReference = this.hideMenuRight.bind(this);
            setTimeout(function () {
                window.addEventListener('click', _this.functionReference);
            }, 200);
        }
    };
    InputTextComponent.prototype.hideMenuRight = function (e) {
        if (this.rightMenu.nativeElement.contains(event.target)) {
            if (event.target === this.showModalButton.nativeElement) {
                this.rightMenu.nativeElement.style.display = 'none';
                window.removeEventListener('click', this.functionReference);
                // this.toggleModal(false);
            }
        }
        else {
            this.rightMenu.nativeElement.style.display = 'none';
            window.removeEventListener('click', this.functionReference);
        }
    };
    InputTextComponent.prototype.toogleModal = function (modal) {
        this.commonsService.toggleModal(modal, false);
    };
    InputTextComponent.prototype.showIndication = function (e) {
        e.preventDefault();
        if (this.indications.indicationsType === 'outsideText') {
            this.commonsService.toggleModal(this.modalIndication.nativeElement);
        }
        else {
            this.documentService.showIndicationInsideText(this.step.wordToReplace, this.indications.value);
        }
    };
    InputTextComponent.prototype.onIndicationsChanged = function (indications) {
        this.step.indications = indications;
    };
    InputTextComponent.prototype.input = function (replacement) {
        this.stepModelService.input(replacement, this.step.type, this.step.wordToReplace);
    };
    InputTextComponent.prototype.onMandatoryChange = function (mandatory) {
        this.step.mandatory = mandatory;
        this.mandatory = mandatory;
    };
    InputTextComponent.prototype.deleteDiv = function () {
        var _this = this;
        var steps = this.stepModelService.getStepsModel();
        steps = steps.filter(function (step) { return step !== _this.step; });
        this.stepModelService.init(steps, this.documentType);
        this.stepModelService.removeStep();
        this.delete.nativeElement.remove();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputTextComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('delete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputTextComponent.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('draggableText'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputTextComponent.prototype, "draggableText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('changeIdInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputTextComponent.prototype, "changeIdInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputTextComponent.prototype, "rightMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightMenuButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputTextComponent.prototype, "rightMenuButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showModalButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputTextComponent.prototype, "showModalButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputTextComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalIndication'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputTextComponent.prototype, "modalIndication", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('divWhereIsDeleteButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputTextComponent.prototype, "divWhereIsDeleteButton", void 0);
    InputTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-text',
            template: __webpack_require__(/*! ./input-text.component.html */ "./src/app/shared/inputs/input-text/input-text.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["CommonsService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["StepModelService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["OdfCreatorService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["PlainTextCreatorService"]])
    ], InputTextComponent);
    return InputTextComponent;
}());



/***/ }),

/***/ "./src/app/shared/inputs/shared/index.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/inputs/shared/index.ts ***!
  \***********************************************/
/*! exports provided: InputCommonsService, IndicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indications */ "./src/app/shared/inputs/shared/indications/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndicationsComponent", function() { return _indications__WEBPACK_IMPORTED_MODULE_0__["IndicationsComponent"]; });

/* harmony import */ var _input_commons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-commons.service */ "./src/app/shared/inputs/shared/input-commons.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputCommonsService", function() { return _input_commons_service__WEBPACK_IMPORTED_MODULE_1__["InputCommonsService"]; });





/***/ }),

/***/ "./src/app/shared/inputs/shared/indications/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/inputs/shared/indications/index.ts ***!
  \***********************************************************/
/*! exports provided: IndicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indications.component */ "./src/app/shared/inputs/shared/indications/indications.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndicationsComponent", function() { return _indications_component__WEBPACK_IMPORTED_MODULE_0__["IndicationsComponent"]; });




/***/ }),

/***/ "./src/app/shared/inputs/shared/indications/indications.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/inputs/shared/indications/indications.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"new-modal-content\" #indicationsDiv>\n    <div class=\"new-modal-content__header\">\n        <div class=\"new-modal-content__header__tabs\">\n            <button class=\"new-modal-content__header__tabs__tab new-modal-content__header__tabs__tab--active\" \n            (click)=\"openTab(tab1, this.button1); changeIndicationsType('outsideText');\" #button1>\n                Outside text\n            </button>\n            <button class=\"new-modal-content__header__tabs__tab\" \n            (click)=\"openTab(tab2, this.button2); changeIndicationsType('insideText');\" #button2>\n                Inside text\n            </button>\n        </div>\n    </div>\n    <div class=\"new-modal-content__body\">    \n        <div class=\"editor-container-modal-new-question\" style=\"height: 75%;\" #tab1>\n            <!-- Create the editor container -->\n            <quill-editor (onContentChanged)=\"quillText = $event.html; changeIndicationsValue($event.html)\" \n                [ngModel]=\"quillText\" [modules]=\"{\n                    toolbar: [\n                    ['bold', 'italic', 'underline', 'strike'], \n                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],\n                    [{ 'size': ['small', false, 'large', 'huge'] }],\n                    [{ 'direction': 'rtl' }],\n                    ['link']]}\"\n                #quill>\n            </quill-editor>\n            \n        </div>\n        \n        <div style=\"display:none; height: 85%;\" #tab2>\n            <textarea name=\"\" id=\"\" rows=\"10\" placeholder=\"Indicacion for this field...\" #normalText (keyup)=\"changeIndicationsValue(normalText.value)\"></textarea>\n        </div>\n    </div>\n    <input type=\"text\" [value]=\"this.indications.value\" hidden>         \n    <div class=\"new-modal-content__footer new-modal-content__footer--indicactions\">\n        <button class=\"btn next-btn\" (click)=\"closeModal.emit();\">Hecho</button>\n        <button class=\"btn next-btn next-btn--delete\" (click)=\"changeIndicationsValue(''); closeModal.emit();\">Eliminar</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/inputs/shared/indications/indications.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/inputs/shared/indications/indications.component.ts ***!
  \***************************************************************************/
/*! exports provided: IndicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicationsComponent", function() { return IndicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndicationsComponent = /** @class */ (function () {
    function IndicationsComponent() {
        this.sendIndications = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.quillText = '';
    }
    IndicationsComponent.prototype.ngOnInit = function () {
        this.quillConfig();
    };
    IndicationsComponent.prototype.quillConfig = function () {
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
    IndicationsComponent.prototype.openTab = function (tab, button) {
        this.indicationsDiv.nativeElement.querySelector('.new-modal-content__header__tabs__tab--active')
            .classList.toggle('new-modal-content__header__tabs__tab--active');
        [this.tab1, this.tab2].forEach(function (element) {
            element.nativeElement.style.display = 'none';
        });
        tab.style.display = 'block';
        button.classList.toggle('new-modal-content__header__tabs__tab--active');
    };
    IndicationsComponent.prototype.changeIndicationsType = function (type) {
        this.indications.indicationsType = type;
        if (type === 'outsideText') {
            this.changeIndicationsValue(this.quillText);
        }
        else {
            this.changeIndicationsValue(this.normalText.nativeElement.value);
        }
    };
    IndicationsComponent.prototype.changeIndicationsValue = function (value) {
        console.log(value);
        if (value && value !== '') {
            this.indications.value = value;
            this.indications.areIndications = true;
            this.sendIndications.emit(this.indications);
        }
        else {
            this.indications.areIndications = false;
            this.sendIndications.emit(this.indications);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('indicationsDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], IndicationsComponent.prototype, "indicationsDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tab1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], IndicationsComponent.prototype, "tab1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tab2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], IndicationsComponent.prototype, "tab2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('normalText'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], IndicationsComponent.prototype, "normalText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IndicationsComponent.prototype, "indications", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IndicationsComponent.prototype, "sendIndications", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], IndicationsComponent.prototype, "closeModal", void 0);
    IndicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-indications',
            template: __webpack_require__(/*! ./indications.component.html */ "./src/app/shared/inputs/shared/indications/indications.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndicationsComponent);
    return IndicationsComponent;
}());



/***/ }),

/***/ "./src/app/shared/inputs/shared/input-commons.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/inputs/shared/input-commons.service.ts ***!
  \***************************************************************/
/*! exports provided: InputCommonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCommonsService", function() { return InputCommonsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputCommonsService = /** @class */ (function () {
    function InputCommonsService() {
    }
    InputCommonsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputCommonsService);
    return InputCommonsService;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: OdfEditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _odf_editor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./odf-editor.service */ "./src/app/shared/services/odf-editor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OdfEditorService", function() { return _odf_editor_service__WEBPACK_IMPORTED_MODULE_0__["OdfEditorService"]; });




/***/ }),

/***/ "./src/app/shared/services/odf-editor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/odf-editor.service.ts ***!
  \*******************************************************/
/*! exports provided: OdfEditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OdfEditorService", function() { return OdfEditorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/js/wodotexteditor/localfileeditor.js */ "./src/assets/js/wodotexteditor/localfileeditor.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");




var OdfEditorService = /** @class */ (function () {
    function OdfEditorService(commonsService) {
        this.commonsService = commonsService;
    }
    OdfEditorService.prototype.createEditor = function (formType, idOfContainer) {
        if (idOfContainer === void 0) { idOfContainer = 'editorContainer'; }
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_2__["createEditor"](formType, idOfContainer);
    };
    OdfEditorService.prototype.createEditorFromURI = function (formType, idOfContainer, dataURI) {
        if (idOfContainer === void 0) { idOfContainer = 'editorContainer'; }
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
        // create a view into the buffer
        var ia = new Uint8Array(ab);
        // set the bytes of the buffer to the correct values
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        // write the ArrayBuffer to a blob, and you're done
        var blob = new Blob([ab], { type: mimeString });
        // return URL
        var url = URL.createObjectURL(blob);
        window['DOCUMENTOURL'] = url;
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_2__["createEditor"](formType, idOfContainer);
    };
    OdfEditorService.prototype.resizeDocumentContainer = function () {
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_2__["documentToFitScreen"]();
    };
    OdfEditorService.prototype.closeEditor = function () {
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_2__["closeDocument"]();
    };
    OdfEditorService.prototype.closeAndDestroyEditor = function () {
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_2__["closeAndDestroyEditor"]();
    };
    OdfEditorService.prototype.setCursorPositionForDragAndDrop = function (e) {
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_2__["setCursorPositionForDragAndDrop"](e);
    };
    OdfEditorService.prototype.saveForPreview = function () {
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_2__["saveForPreview"]();
    };
    OdfEditorService.prototype.removeCursor = function () {
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_2__["removeCursor"]();
    };
    OdfEditorService.prototype.loadPreview = function () {
        _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_2__["loadPreview"]();
    };
    OdfEditorService.prototype.getEditorSession = function () {
        return _assets_js_wodotexteditor_localfileeditor_js__WEBPACK_IMPORTED_MODULE_2__["getEditorSession"]();
    };
    OdfEditorService.prototype.setDragAndDropForSetUp = function () {
        var _this = this;
        // Dragover
        document.getElementsByTagName('office:text')[0].addEventListener('dragover', function (event) {
            event.preventDefault();
            _this.setCursorPositionForDragAndDrop(event);
        });
        // Drop
        document.getElementsByTagName('office:text')[0].addEventListener('drop', function (event) {
            _this.setCursorPositionForDragAndDrop(event);
            var cursorNode = document.getElementsByTagName('office:text')[0].getElementsByTagName('cursor')[0];
            cursorNode.parentNode.childNodes.forEach(function (element, index) {
                if (element['tagName'] === 'cursor') {
                    if (cursorNode.parentNode.childNodes[index + 1] !== undefined) {
                        // Si es un espacio usamos un div anterior, porque no lo detecta
                        if (cursorNode.parentNode.childNodes[index + 1]['tagName'] == 'text:s') {
                            var textContent = document.createTextNode(event['dataTransfer'].getData('text'));
                            cursorNode.parentNode.insertBefore(textContent, cursorNode.nextSibling);
                        }
                        else {
                            cursorNode.parentNode.childNodes[index + 1].textContent =
                                event['dataTransfer'].getData('text') + cursorNode.parentNode.childNodes[index + 1].textContent;
                        }
                    }
                    else {
                        var textContent = document.createTextNode(event['dataTransfer'].getData('text'));
                        cursorNode.parentNode.insertBefore(textContent, cursorNode);
                    }
                }
            });
            _this.commonsService.toggleSpinner();
            setTimeout(function () {
                _this.saveForPreview();
            }, 200);
            setTimeout(function () {
                _this.saveForPreview();
                _this.closeEditor();
                _this.loadPreview();
            }, 800);
            setTimeout(function () {
                _this.setDragAndDropForSetUp();
                _this.commonsService.toggleSpinner();
            }, 1200);
        });
    };
    OdfEditorService.prototype.replaceWord = function (steps, documentBodyClone) {
        var _this = this;
        this.documentBodyClone = documentBodyClone;
        window['documentBodyCloneGlobal'] = documentBodyClone;
        // I replace the body of the document because, if not, after the first replacement it will not
        // be able to find the word again
        document.getElementsByTagName('office:text')[0]
            .parentElement
            .replaceChild(this.documentBodyClone.cloneNode(true), document.getElementsByTagName('office:text')[0]);
        // Find all the DOM elements where the word is located
        steps.forEach(function (step) {
            console.log(step);
            if (step.type === 'inputText' || step.type === 'inputDate' || step.type === 'iText' || step.type === 'iRadioA') {
                _this.valuesToChange = [];
                _this.findword(_this.documentBodyClone.getElementsByTagName('*'), document.getElementsByTagName('office:text')[0].getElementsByTagName('*'), step.wordToReplace);
                _this.valuesToChange.forEach(function (valueToChange) {
                    var innerHTML = valueToChange.clone.parentElement.innerHTML;
                    var regexp = new RegExp(step.wordToReplace, 'g');
                    var innerHTMLreplaced;
                    if (step.isFocused) {
                        innerHTMLreplaced = innerHTML.replace(regexp, "<span class=\"highlight focused\" data-identifier=\"" + step.wordToReplace + "\">" + step.replacement + "</span>");
                    }
                    else {
                        innerHTMLreplaced = innerHTML.replace(regexp, "<span class=\"highlight\" data-identifier=\"" + step.wordToReplace + "\">" + step.replacement + "</span>");
                    }
                    valueToChange.element.parentElement.innerHTML = innerHTMLreplaced;
                });
                _this.documentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
            }
            else if (step.type === 'inputRadioC') {
                _this.valuesToChange = [];
                _this.findword(_this.documentBodyClone.getElementsByTagName('*'), document.getElementsByTagName('office:text')[0].getElementsByTagName('*'), step.wordToReplace);
                step.options.forEach(function (option) {
                    if (option.checked) {
                        _this.valuesToChange.forEach(function (valueToChange) {
                            var innerHTML = valueToChange.clone.parentElement.innerHTML;
                            var regexp = new RegExp(step.wordToReplace, 'g');
                            var innerHTMLreplaced;
                            innerHTMLreplaced = innerHTML.replace(regexp, "<span>" + option.value + "</span>");
                            valueToChange.element.parentElement.innerHTML = innerHTMLreplaced;
                        });
                    }
                });
                _this.documentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
            }
            else if (step.type === 'inputRange') {
                _this.valuesToChange = [];
                _this.findword(_this.documentBodyClone.getElementsByTagName('*'), document.getElementsByTagName('office:text')[0].getElementsByTagName('*'), step.id);
                var subSteps = [];
                var index = 1;
                while (steps[steps.indexOf(step) + index] !== undefined && steps[steps.indexOf(step) + index].isSubStep) {
                    subSteps.push(steps[steps.indexOf(step) + index]);
                    index++;
                }
                _this.rangeReplacement(step.value, _this.valuesToChange, subSteps);
                _this.documentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
            }
        });
        this.scrollToElementWithClassFocus('focused');
    };
    OdfEditorService.prototype.scrollToElementWithClassFocus = function (className, offset) {
        if (offset === void 0) { offset = 0; }
        if (document.getElementsByClassName(className).length) {
            document.getElementsByClassName(className)[0]
                .parentElement
                .scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            setTimeout(function () {
                document.getElementById('webodfeditor-canvascontainer1').scrollBy(0, offset);
            }, 500);
            // Adjust scroll so it scrolls in div
            // document.getElementById('webodfeditor-canvascontainer1').scrollTo(0,
            //     ((document.getElementsByClassName('focused')[0].parentElement.parentElement.getBoundingClientRect().top +
            //     document.getElementById('webodfeditor-canvascontainer1').scrollTop) -
            //     document.getElementsByTagName('nav')[0].offsetHeight -
            //     document.getElementsByClassName('sub-menu')[0].clientHeight -
            //     document.getElementsByClassName('webodfeditor-toolbarcontainer')[0].clientHeight
            // ));
        }
    };
    OdfEditorService.prototype.showIndicationModal = function (word, documentBodyClone) {
        var element;
        findword(documentBodyClone.getElementsByTagName('*'), document.getElementsByTagName('office:text')[0].getElementsByTagName('*'), word);
        // change <p> to <label>
        var imgLabel;
        imgLabel = document.createElement("label");
        imgLabel.innerHTML = "Image ";
        imgLabel.style.left = element.parentElement.getBoundingClientRect().left + "px";
        imgLabel.style.top = element.parentElement.getBoundingClientRect().top + "px";
        // you don't need the next line ;)
        //imgLabel.style.top = "0px";
        imgLabel.style.color = "Black";
        imgLabel.style.position = "absolute";
        document.getElementsByTagName('office:text')[0].appendChild(imgLabel);
        // This functions traverses the DOM looking for the element that contains the word
        // in two objects, the clone original one and in the one we are going to replace the word
        function findword(cloneOfElements, elements, wordToReplace) {
            for (var i = 0; i < cloneOfElements.length; i++) {
                if (cloneOfElements[i].childNodes.length === 0) {
                    if (cloneOfElements[i].textContent.includes(wordToReplace)) {
                        element = elements[i];
                    }
                }
                else {
                    if (elements[i] !== undefined) {
                        findword(cloneOfElements[i].childNodes, elements[i].childNodes, wordToReplace);
                    }
                }
            }
        }
    };
    OdfEditorService.prototype.showIndicationInsideText = function (wordToReplace, indications) {
        var element;
        findword(window['documentBodyCloneGlobal'].getElementsByTagName('*'), document.getElementsByTagName('office:text')[0].getElementsByTagName('*'), wordToReplace);
        var para = document.createElement('div');
        para.innerHTML = "<div class=\"indicator-content not-selectable\">\n                            <button id=\"close-indication\">&#10006;</button>\n                            <span class=\"not-selectable\" style=\"margin:auto; width:100%\">" + indications + "\n                            </span>\n                        </div>";
        para.style.top = element.getBoundingClientRect().top;
        para.style.left = element.getBoundingClientRect().left;
        para.classList.add('indicator');
        para.classList.add('smooth-intro');
        para.classList.add('not-selectable');
        element.appendChild(para);
        window.addEventListener('click', removeIndication);
        this.scrollToElementWithClassFocus('indicator', para.offsetHeight);
        function removeIndication(e) {
            if (e.target.classList.contains('icon-info-circle-solid')
                || e.target.classList.contains('indication')) {
                if (document.querySelectorAll('.indicator').length >= 2) {
                    para.parentNode.removeChild(para);
                    window.removeEventListener('click', removeIndication);
                }
            }
            else {
                para.parentNode.removeChild(para);
                window.removeEventListener('click', removeIndication);
            }
        }
        function findword(cloneOfElements, elements, wordToReplace2) {
            var dataIdentifier = document.querySelectorAll("[data-identifier]");
            if (dataIdentifier.length) {
                dataIdentifier.forEach(function (e) {
                    if (e.getAttribute('data-identifier') === wordToReplace2) {
                        element = e;
                    }
                });
            }
            else {
                for (var i = 0; i < cloneOfElements.length; i++) {
                    if (cloneOfElements[i].childNodes.length === 0) {
                        if (cloneOfElements[i].textContent.includes(wordToReplace2)) {
                            if (elements[i].parentElement.tagName === 'text:span') {
                                element = elements[i].parentElement.parentElement;
                            }
                            else {
                                element = elements[i].parentElement;
                            }
                        }
                    }
                    else {
                        if (elements[i] !== undefined) {
                            findword(cloneOfElements[i].childNodes, elements[i].childNodes, wordToReplace2);
                        }
                    }
                }
            }
        }
        // function getPosition(el: any) {
        // const scrollResult =  el.parentElement.getBoundingClientRect().top - 
        //     document.getElementsByClassName('sub-menu')[0].clientHeight -
        //     document.getElementsByTagName("office:text")[0].getBoundingClientRect().top - 
        //     document.getElementsByTagName("nav")[0].clientHeight;
        //     document.getElementById('webodfeditor-canvascontainer1').scrollTop = scrollResult;
        // }
    };
    // This functions traverses the DOM looking for the element that contains the word
    // in two objects, the clone original one and in the one we are going to replace the word
    OdfEditorService.prototype.findword = function (cloneOfElements, elements, wordToReplace) {
        var _loop_1 = function (i) {
            if (!this_1.elementIsExcluded(cloneOfElements[i])) {
                if (cloneOfElements[i].childNodes.length === 0) {
                    if (cloneOfElements[i].textContent.includes(wordToReplace)) {
                        var twoValues = {
                            clone: cloneOfElements[i],
                            element: elements[i]
                        };
                        /* Check if object is already inside the array */
                        if (!(this_1.valuesToChange.filter(function (e) { return e.clone === cloneOfElements[i]; }).length > 0)) {
                            this_1.valuesToChange.push(twoValues);
                        }
                    }
                }
                else {
                    if (elements[i] !== undefined) {
                        this_1.findword(cloneOfElements[i].childNodes, elements[i].childNodes, wordToReplace);
                    }
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < cloneOfElements.length; i++) {
            _loop_1(i);
        }
    };
    // When traversing the DOM odf element, I know that some elements will not contain what I am looking for
    // so I exclud them from the search
    OdfEditorService.prototype.elementIsExcluded = function (element) {
        var excludedElements = [
            'office:text',
            'text:sequence-decls',
            'text:sequence-decl',
            'draw:frame',
            'draw:image',
            'office:annotation',
            'office:annotation-end',
            'dc:creator',
            'dc:date'
        ];
        return excludedElements.includes(element.nodeName);
    };
    OdfEditorService.prototype.rangeReplacement = function (timesToRepeat, valuesToChange, subSteps) {
        // If they are located at the same paragraph
        if (valuesToChange[0].element.parentElement.parentElement === valuesToChange[1].element.parentElement.parentElement) {
            for (var i = 0; i < timesToRepeat; i++) {
                console.log(subSteps[i]);
                var clone = valuesToChange[0].element.parentElement.parentElement.cloneNode(true);
                valuesToChange[0].element
                    .parentElement.parentElement.parentNode
                    .insertBefore(clone, valuesToChange[0].element.parentElement.parentElement.nextElementSibling);
            }
        }
        else {
            var _loop_2 = function (i) {
                // We have to take all the elements to be appended
                var firstElementPlace = valuesToChange[0].element.parentElement;
                var secondElementPlace = valuesToChange[1].element.parentElement;
                while (firstElementPlace.parentElement.nodeName !== 'office:text') {
                    firstElementPlace = firstElementPlace.parentNode;
                }
                while (secondElementPlace.parentElement.nodeName !== 'office:text') {
                    secondElementPlace = secondElementPlace.parentNode;
                }
                var arrayOfElementsToAppend = [];
                var currentElement = firstElementPlace;
                while (currentElement !== secondElementPlace) {
                    arrayOfElementsToAppend.push(currentElement.cloneNode(true));
                    currentElement = currentElement.nextElementSibling;
                }
                arrayOfElementsToAppend.push(secondElementPlace.cloneNode(true));
                var nextSibling = valuesToChange[1].element.parentElement.parentElement.nextElementSibling;
                arrayOfElementsToAppend.forEach(function (element) {
                    valuesToChange[1].element.parentElement.parentElement.parentNode.insertBefore(element, nextSibling);
                });
                // this.replaceTextForRangeReplacement(arrayOfElementsToAppend, subSteps);
            };
            for (var i = 0; i < timesToRepeat; i++) {
                _loop_2(i);
            }
        }
    };
    OdfEditorService.prototype.replaceTextForRangeReplacement = function (arrayOfElementsToAppend, subSteps) {
        subSteps.forEach(function (substep) {
            // this.valuesToChange = [];
            // this.findword(
            //     arrayOfElementsToAppend,
            //     arrayOfElementsToAppend,
            //     substep.wordToCreateTheReplace
            // );
            // this.valuesToChange.forEach((valueToChange: any) => {
            //     const innerHTML = valueToChange.clone.parentElement.innerHTML;
            //     const regexp = new RegExp(substep.wordToCreateTheReplace, 'g');
            //     console.log(regexp);
            //     let innerHTMLreplaced: any;
            //     if (substep.isFocused) {
            //         innerHTMLreplaced = innerHTML.replace(regexp,
            //             `<span class="highlight focused">${substep.wordToReplace}</span>`
            //             );
            //     } else {
            //         innerHTMLreplaced = innerHTML.replace(regexp,
            //             `<span class="highlight">${substep.wordToReplace}</span>`
            //             );
            //     }
            //     valueToChange.element.parentElement.innerHTML = innerHTMLreplaced;
            // });
            // // console.log(this.valuesToChange);
            // this.documentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
        });
    };
    OdfEditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["CommonsService"]])
    ], OdfEditorService);
    return OdfEditorService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-authed.directive */ "./src/app/shared/show-authed.directive.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inputs */ "./src/app/shared/inputs/index.ts");
/* harmony import */ var _inputs_input_radio_c_new_radio_c_modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inputs/input-radio-c/new-radio-c/modal-content/modal-content.component */ "./src/app/shared/inputs/input-radio-c/new-radio-c/modal-content/modal-content.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/shared/comments/comments.component.ts");
/* harmony import */ var _comments_comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comments/comment/comment.component */ "./src/app/shared/comments/comment/comment.component.ts");
/* harmony import */ var _comments_comment_response_comment_response_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comments/comment-response/comment-response.component */ "./src/app/shared/comments/comment-response/comment-response.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services */ "./src/app/shared/services/index.ts");













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"].forRoot()
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_12__["OdfEditorService"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputCommonsService"]
            ],
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_4__["ListErrorsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_4__["LikesButtonComponent"],
                _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__["ShowAuthedDirective"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputTextComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputRadioAComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["NewRadioAComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputRadioBComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["NewRadioBComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputRadioCComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["NewRadioCComponent"],
                _inputs_input_radio_c_new_radio_c_modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_8__["ModalContentComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["HiddenInputsComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_9__["CommentsComponent"],
                _comments_comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"],
                _comments_comment_response_comment_response_component__WEBPACK_IMPORTED_MODULE_11__["CommentResponseComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["IndicationsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_4__["LoadingSpinnerComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _components__WEBPACK_IMPORTED_MODULE_4__["ListErrorsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_4__["LikesButtonComponent"],
                _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__["ShowAuthedDirective"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputTextComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputRadioAComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["NewRadioAComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputRadioBComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["NewRadioBComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputRadioCComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["NewRadioCComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_9__["CommentsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_4__["LoadingSpinnerComponent"]
            ],
            entryComponents: [
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputTextComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputRadioAComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["NewRadioAComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputRadioBComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["NewRadioBComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputRadioCComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["NewRadioCComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["HiddenInputsComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/show-authed.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/show-authed.directive.ts ***!
  \*************************************************/
/*! exports provided: ShowAuthedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAuthedDirective", function() { return ShowAuthedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");



var ShowAuthedDirective = /** @class */ (function () {
    function ShowAuthedDirective(templateRef, userService, viewContainer) {
        this.templateRef = templateRef;
        this.userService = userService;
        this.viewContainer = viewContainer;
    }
    ShowAuthedDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (isAuthenticated) {
            if (isAuthenticated && _this.condition || !isAuthenticated && !_this.condition) {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }
            else {
                _this.viewContainer.clear();
            }
        });
    };
    Object.defineProperty(ShowAuthedDirective.prototype, "appShowAuthed", {
        set: function (condition) {
            this.condition = condition;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], ShowAuthedDirective.prototype, "appShowAuthed", null);
    ShowAuthedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[appShowAuthed]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            _core__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], ShowAuthedDirective);
    return ShowAuthedDirective;
}());



/***/ }),

/***/ "./src/assets/js/wodotexteditor/localfileeditor.js":
/*!*********************************************************!*\
  !*** ./src/assets/js/wodotexteditor/localfileeditor.js ***!
  \*********************************************************/
/*! exports provided: createEditor, documentToFitScreen, setCursorPositionForDragAndDrop, closeDocument, saveForPreview, removeCursor, getEditorSession, getEditor, closeAndDestroyEditor, loadPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEditor", function() { return createEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentToFitScreen", function() { return documentToFitScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCursorPositionForDragAndDrop", function() { return setCursorPositionForDragAndDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeDocument", function() { return closeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveForPreview", function() { return saveForPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCursor", function() { return removeCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditorSession", function() { return getEditorSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditor", function() { return getEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAndDestroyEditor", function() { return closeAndDestroyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPreview", function() { return loadPreview; });
/**
 * Copyright (C) 2014 KO GmbH <copyright@kogmbh.com>
 *
 * @licstart
 * This file is part of WebODF.
 *
 * WebODF is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License (GNU AGPL)
 * as published by the Free Software Foundation, either version 3 of
 * the License, or (at your option) any later version.
 *
 * WebODF is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 * @licend
 *
 * @source: http://www.webodf.org/
 * @source: https://github.com/kogmbh/WebODF/
 */

/*global document, window, runtime, FileReader, alert, Uint8Array, Blob, saveAs, Wodo*/

function createEditor(formType, idOfContainer) {
    "use strict";

    var editor = null,
        editorOptions,
        loadedFilename;

    /*jslint emptyblock: true*/
    /**
     * @return {undefined}
     */
    function startEditing() {
    }
    /*jslint emptyblock: false*/

    /**
     * extract document url from the url-fragment
     *
     * @return {?string}
     */
    function guessDocUrl() {
        var pos, docUrl = String(document.location);
        // If the URL has a fragment (#...), try to load the file it represents
        // Eliminar esta mierda para que no de problemas
        // pos = docUrl.indexOf('#');
        // if (pos !== -1) {
        //     docUrl = docUrl.substr(pos + 1);
        // } else {
        //     // FILL FORM or CREATE FORM
        //     if (window.DOCUMENTOURL) {
        //         docUrl = window.DOCUMENTOURL;
        //     } else {
        //         docUrl = "welcome.odt";
        //     }
        // }

        // FILL FORM or CREATE FORM
        if (window.DOCUMENTOURL) {
            docUrl = window.DOCUMENTOURL;
        } else {
            docUrl = "assets/js/wodotexteditor/default.odt";
        }
        return docUrl || null;
    }

    function fileSelectHandler(evt) {
        var file, files, reader;
        files = (evt.target && evt.target.files) ||
            (evt.dataTransfer && evt.dataTransfer.files);
        function onLoadEnd() {
            if (reader.readyState === 2) {
                runtime.registerFile(file.name, reader.result);
                loadedFilename = file.name;
                editor.openDocumentFromUrl(loadedFilename, startEditing);
            }
        }
        if (files && files.length === 1) {
            if (!editor.isDocumentModified() ||
                window.confirm("There are unsaved changes to the file. Do you want to discard them?")) {
                editor.closeDocument(function() {
                    file = files[0];
                    reader = new FileReader();
                    reader.onloadend = onLoadEnd;
                    reader.readAsArrayBuffer(file);
                });
            }
        } else {
            alert("File could not be opened in this browser.");
        }
    }

    function enhanceRuntime() {
        var openedFiles = {},
            readFile = runtime.readFile;
        runtime.readFile = function (path, encoding, callback) {
            var array;
            if (openedFiles.hasOwnProperty(path)) {
                array = new Uint8Array(openedFiles[path]);
                callback(undefined, array);
            } else {
                return readFile(path, encoding, callback);
            }
        };
        runtime.registerFile = function (path, data) {
            openedFiles[path] = data;
        };
    }

    function createFileLoadForm() {
        var form = document.createElement("form"),
            input = document.createElement("input");

        function internalHandler(evt) {
            if (input.value !== "") {
                fileSelectHandler(evt);
            }
            // reset to "", so selecting the same file next time still trigger the change handler
            input.value = "";
        }
        form.appendChild(input);
        form.style.display = "none";
        input.id = "fileloader";
        input.setAttribute("type", "file");
        input.addEventListener("change", internalHandler, false);
        document.getElementById('wodoformbaseddocs').appendChild(form);
    }

    function load() {
        var form = document.getElementById("fileloader");
        if (!form) {
            enhanceRuntime();
            createFileLoadForm();
            form = document.getElementById("fileloader");
        }
        form.click();
        
    }

    function save() {
        function saveByteArrayLocally(err, data) {
            if (err) {
                alert(err);
                return;
            }
            // TODO: odfcontainer should have a property mimetype
            var mimetype = "application/vnd.oasis.opendocument.text",
                filename = loadedFilename || "doc.odt",
                blob = new Blob([data.buffer], {type: mimetype});
            saveAs(blob, filename);
            // TODO: hm, saveAs could fail or be cancelled
            editor.setDocumentModified(false);
        }

        editor.getDocumentAsByteArray(saveByteArrayLocally);
    }

    function emptySave() {
        
    }
    // Fill form
    editorOptions = {
        loadCallback: formType === 'fillForm' ? false : load,
        saveCallback: save,
        allFeaturesEnabled: formType === 'fillForm' ? false : true,
        viewOptions: formType === 'fillForm' ? false : true,
        directTextStylingEnabled: formType === 'fillForm' ? false : true,
        directParagraphStylingEnabled: formType === 'fillForm' ? false : true,
        paragraphStyleSelectingEnabled: formType === 'fillForm' ? false : true,
        paragraphStyleEditingEnabled: formType === 'fillForm' ? false : true,
        imageEditingEnabled: formType === 'fillForm' ? false : true,
        hyperlinkEditingEnabled: formType === 'fillForm' ? false : true,
        annotationsEnabled: formType === 'fillForm' ? false : true,
        zoomingEnabled: true,
        reviewModeEnabled: formType === 'fillForm' ? false : true,
        undoRedoEnabled: formType === 'fillForm' ? false : true,
        formType: formType

    };

    function onEditorCreated(err, e) {
        var docUrl = guessDocUrl();
        // console.log(window.DOCUMENTOURL);

        if (err) {
            // something failed unexpectedly
            alert(err);
            return;
        }

        editor = e;
        window.editor = editor;
        editor.setUserData({
            fullName: "WebODF-Curious",
            color:    "black"
        });

        window.addEventListener("beforeunload", function (e) {
            var confirmationMessage = "There are unsaved changes to the file.";

            if (editor.isDocumentModified()) {
                // Gecko + IE
                (e || window.event).returnValue = confirmationMessage;
                // Webkit, Safari, Chrome etc.
                return confirmationMessage;
            }
        });

        if (docUrl) {
            loadedFilename = docUrl;
            editor.openDocumentFromUrl(docUrl, startEditing);
        }
    }

    Wodo.createTextEditor(idOfContainer, editorOptions, onEditorCreated);

}

function documentToFitScreen() {
    Wodo.getEditor().setDocumentToFitScreen();
}

function setCursorPositionForDragAndDrop(event) {
    Wodo.getEditor().setCursorPositionForDragAndDrop(event);
}

function closeDocument() {
    Wodo.getEditor().closeDocument(()=>{});
}

function closeAndDestroyEditor() {
    Wodo.getEditor().closeAndDestroyEditor(()=>{});
}


function saveForPreview() {
    function saveByteArrayLocally(err, data) {
        if (err) {
            alert(err);
            return;
        }
        // TODO: odfcontainer should have a property mimetype
        var mimetype = "application/vnd.oasis.opendocument.text",
            // filename = loadedFilename || "doc.odt",
            blob = new Blob([data.buffer], {type: mimetype});
            window.DOCUMENTOPREVIEWURL = URL.createObjectURL(blob);
            window.ODTDOCUMENT = blob;
        // TODO: hm, saveAs could fail or be cancelled
        // Wodo.getEditor().setDocumentModified(false);
    }

    Wodo.getEditor().getDocumentAsByteArray(saveByteArrayLocally);
}

function loadPreview() {
    Wodo.getEditor().openDocumentFromUrl(window.DOCUMENTOPREVIEWURL, startEditing);
}

function removeCursor() {
    Wodo.getEditor().removeCursor();
}

function startEditing() {

}

function getEditorSession() {
    return Wodo.getEditor().getEditorSession();
}

function getEditor() {
    return Wodo.getEditor();
}



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api_url: 'http://localhost:3001'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Juan/Desktop/Proyectos/formbaseddocs/4.Code/FormbasedDocs/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map