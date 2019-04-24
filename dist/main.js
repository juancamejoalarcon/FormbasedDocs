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
	"./modules/create-form/create-form.module": [
		"./src/app/modules/create-form/create-form.module.ts",
		"common",
		"modules-create-form-create-form-module"
	],
	"./modules/fill-form/fill-form.module": [
		"./src/app/modules/fill-form/fill-form.module.ts",
		"common",
		"modules-fill-form-fill-form-module"
	],
	"./modules/guide/guide.module": [
		"./src/app/modules/guide/guide.module.ts",
		"modules-guide-guide-module"
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
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
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
        path: 'guide',
        loadChildren: './modules/guide/guide.module#GuideModule',
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

module.exports = "<nav id=\"nav\" #navbar>\n  <div class=\"nav-container\">\n      <img src=\"/assets/images/logo.png\" alt=\"logo\" class=\"nav-logo\">\n      <ul class=\"nav-menu\">\n          <li routerLinkActive=\"current\">\n            <a routerLink=\"/search\" class=\"nav-menu-button\">Search</a>\n          </li>\n          <li *appShowAuthed=\"false\">\n            <a routerLink=\"/auth/login\" class=\"nav-menu-button\">Create form</a>\n          </li>\n          <li routerLinkActive=\"current\" *appShowAuthed=\"true\">\n            <a routerLink=\"/create-form\" class=\"nav-menu-button\">Create form</a>\n          </li>\n          <li routerLinkActive=\"current\" *appShowAuthed=\"true\">\n            <a routerLink=\"/my-forms\" class=\"nav-menu-button\">My forms</a>\n          </li>\n          <li routerLinkActive=\"current\" *appShowAuthed=\"true\">\n            <a routerLink=\"/settings\" class=\"nav-menu-button\">Settings</a>\n          </li>\n          <li routerLinkActive=\"current\" *appShowAuthed=\"false\">\n            <a routerLink=\"/auth/login\" class=\"nav-menu-button\">Login</a>\n          </li>\n      </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

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
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (event['url'] === '/auth/login' || event['url'] === '/auth/signup' || event['url'] === '/signup' || event['url'] === '/login') {
                    _this.navbar.nativeElement.hidden = true;
                }
                else {
                    _this.navbar.nativeElement.hidden = false;
                }
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "navbar", void 0);
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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");







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
                _services__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_5__["CommentsService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["FormService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["JwtService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["ProfilesService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["SearchService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["TagsService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["CommonsService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["ComponentInjectorService"]
            ],
            declarations: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, HttpTokenInterceptor, ApiService, AuthGuard, CommentsService, FormService, JwtService, ProfilesService, SearchService, TagsService, UserService, CommonsService, ComponentInjectorService, Errors, User, Profile, Form, FormListConfig, Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ApiService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["CommentsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["FormService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["JwtService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfilesService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ProfilesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["SearchService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["TagsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonsService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["CommonsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentInjectorService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ComponentInjectorService"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ "./src/app/core/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _models__WEBPACK_IMPORTED_MODULE_2__["Errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _models__WEBPACK_IMPORTED_MODULE_2__["User"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return _models__WEBPACK_IMPORTED_MODULE_2__["Profile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _models__WEBPACK_IMPORTED_MODULE_2__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormListConfig", function() { return _models__WEBPACK_IMPORTED_MODULE_2__["FormListConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _models__WEBPACK_IMPORTED_MODULE_2__["Comment"]; });

/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors */ "./src/app/core/interceptors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_3__["HttpTokenInterceptor"]; });







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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/core/services/index.ts");



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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["JwtService"]])
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

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
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

/***/ "./src/app/core/services/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/core/services/user.service.ts");
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

/***/ "./src/app/core/services/comments.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/comments.service.ts ***!
  \***************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
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

/***/ "./src/app/core/services/commons.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/commons.service.ts ***!
  \**************************************************/
/*! exports provided: CommonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonsService", function() { return CommonsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonsService = /** @class */ (function () {
    function CommonsService() {
    }
    CommonsService.prototype.replaceClassDnoneForDblock = function (domElement) {
        var divsToHide = domElement.nativeElement.querySelectorAll('.d-block');
        var divsToShow = domElement.nativeElement.querySelectorAll('.d-none');
        for (var _i = 0, divsToShow_1 = divsToShow; _i < divsToShow_1.length; _i++) {
            var divToShow = divsToShow_1[_i];
            divToShow.classList.replace('d-none', 'd-block');
        }
        for (var _a = 0, divsToHide_1 = divsToHide; _a < divsToHide_1.length; _a++) {
            var divToHide = divsToHide_1[_a];
            divToHide.classList.replace('d-block', 'd-none');
        }
    };
    CommonsService.prototype.replaceClassDnoneflexForDflex = function (domElement) {
        var divsToHide = domElement.nativeElement.querySelectorAll('.d-flex');
        var divsToShow = domElement.nativeElement.querySelectorAll('.d-none-flex');
        for (var _i = 0, divsToShow_2 = divsToShow; _i < divsToShow_2.length; _i++) {
            var divToShow = divsToShow_2[_i];
            divToShow.classList.replace('d-none-flex', 'd-flex');
        }
        for (var _a = 0, divsToHide_2 = divsToHide; _a < divsToHide_2.length; _a++) {
            var divToHide = divsToHide_2[_a];
            divToHide.classList.replace('d-flex', 'd-none-flex');
        }
    };
    CommonsService.prototype.replaceClassDnonegridForDgrid = function (domElement) {
        var divsToHide = domElement.nativeElement.querySelectorAll('.d-grid-100');
        var divsToShow = domElement.nativeElement.querySelectorAll('.d-none-grid-100');
        for (var _i = 0, divsToShow_3 = divsToShow; _i < divsToShow_3.length; _i++) {
            var divToShow = divsToShow_3[_i];
            divToShow.classList.replace('d-none-grid-100', 'd-grid-100');
        }
        for (var _a = 0, divsToHide_3 = divsToHide; _a < divsToHide_3.length; _a++) {
            var divToHide = divsToHide_3[_a];
            divToHide.classList.replace('d-grid-100', 'd-none-grid-100');
        }
    };
    CommonsService.prototype.replaceOtherClasses = function (domElement) {
        var divsToHide = domElement.nativeElement.querySelectorAll('.radio-create-form');
        var divsToShow = domElement.nativeElement.querySelectorAll('.radio-fill-form');
        for (var _i = 0, divsToShow_4 = divsToShow; _i < divsToShow_4.length; _i++) {
            var divToShow = divsToShow_4[_i];
            divToShow.classList.replace('radio-fill-form', 'radio-create-form');
        }
        for (var _a = 0, divsToHide_4 = divsToHide; _a < divsToHide_4.length; _a++) {
            var divToHide = divsToHide_4[_a];
            divToHide.classList.replace('radio-create-form', 'radio-fill-form');
        }
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
                valuesToInsert[newKey][0] = '<mark id="focused">' + valuesToInsert[newKey][0] + '</mark>';
            }
            else {
                valuesToInsert[key][0] = '<mark>' + valuesToInsert[key][0] + '</mark>';
            }
        });
        var valuesToInsertKeys = new RegExp(Object.keys(valuesToInsert).join('|'), 'g');
        return text.replace(valuesToInsertKeys, function (matched) {
            return valuesToInsert[matched];
        });
    };
    CommonsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonsService);
    return CommonsService;
}());



/***/ }),

/***/ "./src/app/core/services/component-injector.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/services/component-injector.service.ts ***!
  \*************************************************************/
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
        this.renderer.addClass(this.deleteButton, 'remove-radio');
        this.renderer.addClass(this.deleteButton, 'd-block');
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

/***/ "./src/app/core/services/form.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/form.service.ts ***!
  \***********************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
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

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: ApiService, AuthGuard, CommentsService, FormService, JwtService, ProfilesService, SearchService, TagsService, UserService, CommonsService, ComponentInjectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/core/services/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.service */ "./src/app/core/services/comments.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"]; });

/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.service */ "./src/app/core/services/form.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return _form_service__WEBPACK_IMPORTED_MODULE_3__["FormService"]; });

/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/services/jwt.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"]; });

/* harmony import */ var _profiles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profiles.service */ "./src/app/core/services/profiles.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfilesService", function() { return _profiles_service__WEBPACK_IMPORTED_MODULE_5__["ProfilesService"]; });

/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.service */ "./src/app/core/services/search.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return _search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"]; });

/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tags.service */ "./src/app/core/services/tags.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return _tags_service__WEBPACK_IMPORTED_MODULE_7__["TagsService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.service */ "./src/app/core/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]; });

/* harmony import */ var _commons_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commons.service */ "./src/app/core/services/commons.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonsService", function() { return _commons_service__WEBPACK_IMPORTED_MODULE_9__["CommonsService"]; });

/* harmony import */ var _component_injector_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component-injector.service */ "./src/app/core/services/component-injector.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentInjectorService", function() { return _component_injector_service__WEBPACK_IMPORTED_MODULE_10__["ComponentInjectorService"]; });














/***/ }),

/***/ "./src/app/core/services/jwt.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/jwt.service.ts ***!
  \**********************************************/
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

/***/ "./src/app/core/services/profiles.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/profiles.service.ts ***!
  \***************************************************/
/*! exports provided: ProfilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesService", function() { return ProfilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
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

/***/ "./src/app/core/services/search.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/search.service.ts ***!
  \*************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
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

/***/ "./src/app/core/services/tags.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/tags.service.ts ***!
  \***********************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
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

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/services/jwt.service.ts");
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
        if (user.image === undefined) {
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
    UserService.prototype.attemptAuth = function (type, credentials) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '/signup';
        return this.apiService.post('/user' + route, { user: credentials })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            _this.setAuth(data.user, credentials.rememberme);
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
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/comments/comment-response/comment-response.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/comments/comment-response/comment-response.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-top\">\n    <div class=\"author\">\n        <img src=\"assets/images/avatar.jpg\" alt=\"avatar\">\n        <h4>{{comment.author.username}}</h4>\n    </div>\n    <span class=\"date\">{{comment.updatedAt | date: 'dd/MM/yyyy'}}</span>\n</div>\n<div class=\"comment-middle\" [ngClass]=\"{'comment-d-none': isEditing}\">\n    <p #commentBodyLong>\n        {{ comment.body }}\n    </p>\n    <p #commentBodyShort>\n        {{ comment.body.substring(0, maxLenght) }}\n    </p>\n    <span *ngIf=\"showMore === false && comment.body.length > maxLenght\" (click)=\"commentBody(true)\">Leer más</span>\n    <span *ngIf=\"showMore === true\" (click)=\"commentBody(false)\">Leer menos</span>\n</div>\n<div class=\"comment-middle comment-middle-edit\" [ngClass]=\"{'comment-d-none': !isEditing}\" *ngIf=\"canModify\">\n    <textarea cols=\"50\" rows=\"5\" [value]=\"comment.body\" #editTextArea></textarea>\n    <input type=\"submit\" value=\"Update\" (click)=\"updateComment(editTextArea.value)\">\n    <br>\n    <button class=\"button\" (click)=\"isEditing = false\">Cancel</button>\n</div>\n<div class=\"comment-bottom comment-bottom-edit\" [ngClass]=\"{'comment-d-none': isEditing}\" *ngIf=\"canModify\">\n    <button class=\"button edit\" (click)=\"isEditing = true\">Editar</button>\n    <button class=\"button edit\" (click)=\"deleteClicked()\">Eliminar</button>\n</div>"

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

module.exports = "<div class=\"comment-top\">\n    <div class=\"author\">\n        <img src=\"assets/images/avatar.jpg\" alt=\"avatar\">\n        <h4>{{comment.author.username}}</h4>\n    </div>\n    <span class=\"date\">{{comment.updatedAt | date: 'dd/MM/yyyy'}}</span>\n</div>\n<div class=\"comment-middle\" [ngClass]=\"{'comment-d-none': isEditing}\">\n    <p #commentBodyLong>\n        {{ comment.body }}\n    </p>\n    <p #commentBodyShort>\n        {{ comment.body.substring(0, maxLenght) }}\n    </p>\n    <span *ngIf=\"showMore === false && comment.body.length > maxLenght\" (click)=\"commentBody(true)\">Leer más</span>\n    <span *ngIf=\"showMore === true\" (click)=\"commentBody(false)\">Leer menos</span>\n</div>\n<div class=\"comment-middle comment-middle-edit\" [ngClass]=\"{'comment-d-none': !isEditing}\">\n    <textarea cols=\"50\" rows=\"5\" [value]=\"comment.body\" #editTextArea></textarea>\n    <input type=\"submit\" class=\"update-comment\" value=\"Update\" (click)=\"updateComment(editTextArea.value)\">\n    <br>\n    <button class=\"button\" (click)=\"isEditing = false\">Cancel</button>\n</div>\n<div class=\"comment-bottom\" [ngClass]=\"{'comment-d-none': isEditing}\">\n    <div class=\"likes\">\n        <span class=\"icon icon-like-button\" *ngIf=\"!isAuth\"></span>\n        <span class=\"icon icon-thumbs-up-regular comment-not-liked\" (click)=\"likeComment()\" *ngIf=\"!comment.liked && isAuth\"></span>\n        <span class=\"icon icon-like-button comment-liked\" *ngIf=\"comment.liked && isAuth\" (click)=\"dislikeComment()\"></span>\n\n        <span> &emsp; {{ comment.likesCount }}</span>\n    </div>\n    <span *appShowAuthed=\"true\">\n        <button class=\"button\" *ngIf=\"!canModify\" \n        (click)=\"showResponses(!responsesAreShowing)\" [disabled]=\"responsesAreShowing\">Responder</button>\n    </span>\n\n    <button class=\"button edit\" (click)=\"isEditing = true\" *ngIf=\"canModify\">Editar</button>\n    <button class=\"button edit\" (click)=\"deleteClicked()\" *ngIf=\"canModify\">Eliminar</button>\n    <span class=\"responses-bottom\" (click)=\"showResponses(!responsesAreShowing)\">\n        Respuestas ({{comment.responses.length}})  \n        <!-- Arrow down -->\n        <span *ngIf=\"!responsesAreShowing\">&#9662;</span>\n        <!-- Arrow up -->\n        <span *ngIf=\"responsesAreShowing\">&#9652;</span>\n    </span>\n</div>\n<div class=\"comment-responses\" *ngIf=\"responsesAreShowing\">\n    <div class=\"comment-response-line\"></div>\n    <div class=\"comment-responses-container\">\n        <app-comment-response class=\"comment-response\" \n        *ngFor=\"let commentResponse of comment.responses\" [slug]=\"slug\" \n        (deleteComment)=\"onDeleteComment(commentResponse)\" [comment]=\"commentResponse\"></app-comment-response>\n        <div class=\"new-comment\" *ngIf=\"!canModify\">\n            <textarea cols=\"50\" rows=\"5\" #commentTextArea></textarea>\n            <input type=\"submit\" value=\"Respond\" (click)=\"addCommentResponse(commentTextArea.value)\">\n        </div>\n    </div>\n</div>\n\n"

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

module.exports = "\n    <div class=\"comments-container\">\n        <div class=\"new-comment\" *appShowAuthed=\"true\">\n            <textarea cols=\"70\" rows=\"5\" #commentTextArea></textarea>\n            <input type=\"submit\" value=\"Comment\" (click)=\"addComment(commentTextArea.value)\" [disabled]=\"isSubmitting\">\n        </div>\n        <div class=\"new-comment\" *appShowAuthed=\"false\">\n            <textarea cols=\"70\" rows=\"5\" disabled style=\"background-color:#ECF9F8;\"></textarea>\n            <input type=\"submit\" value=\"Comment\" (click)=\"redirectToLogin()\">\n        </div>\n        <div class=\"orderby-comments\">\n            <div class=\"orderby-comments-container\">\n                <label for=\"orderby\">Order by: </label>\n                <select id=\"orderby\" autofocus=\"true\" (change)=\"setOrder($event.target.value)\">\n                    <option value=\"Date\">Date</option>\n                    <option value=\"Likes\">Likes</option>\n                </select>\n            </div>\n        </div>\n        <app-comment class=\"comment\" \n                    *ngFor=\"let comment of comments\" [comment]=\"comment\"\n                    [slug]=\"form.slug\" (deleteComment)=\"onDeleteComment(comment)\"></app-comment>\n\n        <!-- <div class=\"comment\">\n            <div class=\"comment-top\">\n                <div class=\"author\">\n                    <img src=\"assets/images/avatar.jpg\" alt=\"avatar\">\n                    <h4>Juan Camejo Alarcón</h4>\n                </div>\n                <span class=\"date\">15.05.2019</span>\n            </div>\n            <div class=\"comment-middle\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n                    Praesent cursus nunc ac justo facilisis lacinia. Orci varius \n                    natoque penatibus et magnis dis parturient montes, nascetur \n                    ridiculus mus. Vestibulum cursus vulputate urna vitae sodales. \n                    Integer viverra urna leo. Nullam euismod augue eget neque gravida \n                    scelerisque. Nunc nibh lorem, suscipit eu aliquam eu, laoreet id mi.\n                </p>\n                <span>Leer más</span>\n            </div>\n            <div class=\"comment-bottom\">\n                <div class=\"likes\">\n                    <span class=\"icon icon-like-button\"></span>\n                    <span>5.500</span>\n                </div>\n                <button class=\"button\">Responder</button>\n                <span class=\"responses-bottom\">Respuestas (10)  &#9660;</span>\n            </div>\n            <div class=\"comment-responses\">\n                <div class=\"comment-response-line\"></div>\n                <div class=\"comment-responses-container\">\n                    <div class=\"comment-response\">\n                        <div class=\"comment-top\">\n                            <div class=\"author\">\n                                <img src=\"assets/images/avatar.jpg\" alt=\"avatar\">\n                                <h4>Juan Camejo Alarcón</h4>\n                            </div>\n                            <span class=\"date\">15.05.2019</span>\n                        </div>\n                        <div class=\"comment-middle\">\n                            <p>\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n                                Praesent cursus nunc ac justo facilisis lacinia. Orci varius \n                                natoque penatibus et magnis dis parturient montes, nascetur \n                                ridiculus mus. Vestibulum cursus vulputate urna vitae sodales. \n                                Integer viverra urna leo. Nullam euismod augue eget neque gravida \n                                scelerisque. Nunc nibh lorem, suscipit eu aliquam eu, laoreet id mi.\n                            </p>\n                            <span>Leer más</span>\n                        </div>\n                    </div>\n                    <div class=\"comment-response\">\n                        <div class=\"comment-top\">\n                            <div class=\"author\">\n                                <img src=\"assets/images/avatar.jpg\" alt=\"avatar\">\n                                <h4>Juan Camejo Alarcón</h4>\n                            </div>\n                            <span class=\"date\">15.05.2019</span>\n                        </div>\n                        <div class=\"comment-middle\">\n                            <p>\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n                                Praesent cursus nunc ac justo facilisis lacinia. Orci varius \n                                natoque penatibus et magnis dis parturient montes, nascetur \n                                ridiculus mus. Vestibulum cursus vulputate urna vitae sodales. \n                                Integer viverra urna leo. Nullam euismod augue eget neque gravida \n                                scelerisque. Nunc nibh lorem, suscipit eu aliquam eu, laoreet id mi.\n                            </p>\n                            <span>Leer más</span>\n                        </div>\n                    </div>\n                    <div class=\"new-comment\">\n                        <textarea cols=\"50\" rows=\"5\"></textarea>\n                        <input type=\"submit\" value=\"Respond\">\n                    </div>\n                </div>\n            </div>\n        </div> -->\n\n        <!-- <div class=\"comment\">\n            <div class=\"comment-top\">\n                <div class=\"author\">\n                    <img src=\"assets/images/avatar.jpg\" alt=\"avatar\">\n                    <h4>Juan Camejo Alarcón</h4>\n                </div>\n                <span class=\"date\">15.05.2019</span>\n            </div>\n            <div class=\"comment-middle\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n                    Praesent cursus nunc ac justo facilisis lacinia. Orci varius \n                    natoque penatibus et magnis dis parturient montes, nascetur \n                    ridiculus mus. Vestibulum cursus vulputate urna vitae sodales. \n                    Integer viverra urna leo. Nullam euismod augue eget neque gravida \n                    scelerisque. Nunc nibh lorem, suscipit eu aliquam eu, laoreet id mi.\n                </p>\n                <span>Leer más</span>\n            </div>\n            <div class=\"comment-bottom\">\n                <div class=\"likes\">\n                    <span class=\"icon icon-like-button\"></span>\n                    <span>5.500</span>\n                </div>\n                <button class=\"button edit\">Editar</button>\n                <button class=\"button edit\">Eliminar</button>\n                <span class=\"responses-bottom\">Respuestas (10)  &#9660;</span>\n            </div>\n        </div> -->\n\n    </div>\n"

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

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, InputTextComponent, InputRadioAComponent, InputRadioBComponent, InputRadioCComponent, NewRadioAComponent, NewRadioBComponent, NewRadioCComponent, HiddenInputsComponent */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioAComponent", function() { return _inputs__WEBPACK_IMPORTED_MODULE_1__["NewRadioAComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioBComponent", function() { return _inputs__WEBPACK_IMPORTED_MODULE_1__["NewRadioBComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRadioCComponent", function() { return _inputs__WEBPACK_IMPORTED_MODULE_1__["NewRadioCComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HiddenInputsComponent", function() { return _inputs__WEBPACK_IMPORTED_MODULE_1__["HiddenInputsComponent"]; });





/***/ }),

/***/ "./src/app/shared/inputs/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/inputs/index.ts ***!
  \****************************************/
/*! exports provided: InputTextComponent, InputRadioAComponent, InputRadioBComponent, InputRadioCComponent, NewRadioAComponent, NewRadioBComponent, NewRadioCComponent, HiddenInputsComponent */
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

module.exports = "<!-- Radio-a -->\n<div class=\"field smooth-intro divWhereIsDeleteButton\" [id]=\"'parentId' + randomId\" #delete [ngClass]=\"{'field-fill-form': isNewUser() || isEditUser() }\">\n    <div class=\"field-content d-none-grid-100\" [ngClass]=\"{'field-content-fill-form': isNewUser() || isEditUser() }\">\n        <div class=\"field-area\">\n\n            <!-- HEADER-->\n            <div class=\"field-area-top d-block\" *ngIf=\"isEditAuthor() || isNewAuthor()\">\n                <div class=\"label\">\n                    <span>Radio A</span>\n                </div>\n                <div class=\"dragAndDropBotton\">\n                    <span class=\"icon icon-ellipsis-h-solid\"></span>\n                    <span class=\"icon icon-ellipsis-h-solid\"></span>\n                </div>\n                <div class=\"identifier\">\n                    <span class=\"identifier-label\">\n                        Id:\n                    </span>\n                    <span class=\"identifier-id\">\n                        <span (dblclick)=\"showChangeIdInputField()\" #draggableText>{{referenceNumber}}</span>\n                        <input (blur)=\"showChangeIdInputField()\" (keyup.enter)=\"changeIdInput.blur()\" \n                                (keyup)=\"changeId($event)\" type=\"text\" value=\"{{referenceNumber}}\" #changeIdInput>\n                    </span>\n                </div>\n            </div>\n\n            <span *ngIf=\"isNewAuthor()\">\n                <div class=\"field-area-top field-area-top-fill-form d-none-flex\"\n                (click)=\"toggleModal(false)\"\n                *ngIf=\"indications !== '' && indications !== undefined\">\n                    <div class=\"indication\">\n                        <span class=\"icon icon-info-circle-solid\"></span>\n                    </div>\n                </div>\n            </span>\n            \n            <span *ngIf=\"isEditAuthor()\">\n                <div class=\"field-area-top field-area-top-fill-form d-none-flex\"\n                    (click)=\"toggleModal(false)\"\n                    *ngIf=\"field.indications !== '' && field.indications !== undefined\">\n                    <div class=\"indication\">\n                        <span class=\"icon icon-info-circle-solid\"></span>\n                    </div>\n                </div>\n            </span>\n\n            <span *ngIf=\"isNewUser() || isEditUser()\">\n                <div class=\"field-area-top\"\n                    (click)=\"toggleModal(false)\"\n                    *ngIf=\"field.indications !== '' && field.indications !== undefined\">\n\n                    <div class=\"indication\">\n                        <span class=\"icon icon-info-circle-solid\"></span>\n                    </div>\n                    \n                </div>\n            </span>\n\n            <div class=\"field-area-middle\">\n              \n                <input *ngIf=\"isEditAuthor()\"\n                type=\"text\" \n                id=\"question\"\n                class=\"{{questionIdentifier}} question-field d-block\"\n                placeholder=\"Question\" [(ngModel)]=\"field.question\">\n\n                <input *ngIf=\"isNewAuthor()\"\n                type=\"text\"\n                id=\"question\"\n                class=\"{{questionIdentifier}} question-field d-block\"\n                placeholder=\"Question\" [(ngModel)]=\"question\">\n\n                <span class=\"question d-none\" *ngIf=\"isNewAuthor()\">{{question}}</span>\n                <span class=\"question d-none\" *ngIf=\"isEditAuthor()\">{{field.question}}</span>\n                <span class=\"question\" *ngIf=\"isNewUser() || isEditUser()\">{{field.question}}</span>\n                \n                <div #radios id=\"{{randomId}}\" class=\"inputRadio inputCollection\">\n                    <span *ngIf=\"isEditAuthor() || isNewUser() || isEditUser()\">\n                      <app-new-radio-a *ngFor=\"let radio of field.radios\" [state]=\"state\" [valueRadio]=\"radio\" [field]=\"field\"></app-new-radio-a>\n                    </span>\n                </div>\n\n                <div class=\"add-another-radio-button d-block\" (click)=\"addNewRadio()\" *ngIf=\"isEditAuthor() || isNewAuthor()\">\n                    <span class=\"icon icon-plus-circle-solid\"></span>\n                </div>\n            </div>\n            \n            <div class=\"field-area-bottom d-block\" *ngIf=\"isNewAuthor() || isEditAuthor()\">\n                <label class=\"switch d-block\" >\n                        <input type=\"checkbox\" class=\"{{mandatoryIdentifier}}\" [(ngModel)]=\"mandatory\" *ngIf=\"isNewAuthor()\">\n                        <input type=\"checkbox\" class=\"{{mandatoryIdentifier}}\" [(ngModel)]=\"field.mandatory\" *ngIf=\"isEditAuthor()\">\n                    <span class=\"slider round\"></span>\n                </label>\n                <span class=\"switch-label d-block\">Obligatorio</span>\n            </div>\n\n            <div class=\"field-area-bottom field-area-bottom-input-text d-none-flex\" *ngIf=\"isNewAuthor() && mandatory\">\n                <span class=\"mandatory\">\n                    Obligatorio *\n                </span>\n            </div>\n            <div class=\"field-area-bottom field-area-bottom-input-text\" \n                *ngIf=\"(isEditAuthor() || isNewUser() || isEditUser()) && field.mandatory\" [ngClass]=\"{'d-none-flex': isEditAuthor() }\">\n                <span class=\"mandatory\">\n                    Obligatorio *\n                </span>\n            </div>\n        </div>\n        <div class=\"right-button d-flex\" id=\"right-button\" *ngIf=\"isNewAuthor() || isEditAuthor()\">\n            <div class=\"tooltip\">\n                <span class=\"icon icon-ellipsis-v-solid\" id=\"right-button-menu\" #rightMenuButton (click)=\"showRightMenu()\"></span>\n                <span class=\"right-button-menu\" #rightMenu>\n                    <div class=\"group\">\n                        <span #showModalButton>Indicactions for this field</span>\n                    </div>\n                </span>\n            </div>\n        </div>\n    </div>\n    <div class=\"remove-button d-block\" *ngIf=\"isEditAuthor()\" (click)=\"deleteElementDiv()\">\n        <span class=\"icon icon-trash-alt-regular\"></span>\n    </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal\" #modal>\n    <div class=\"modal-content\">\n        <div class=\"modal-top modal-top-input-text\">\n            <h5>Indicaciones para pregunta</h5>\n            <span *ngIf=\"isNewAuthor()\">{{question}}</span>\n            <span *ngIf=\"isEditAuthor()\">{{field.question}}</span>\n\n            <span *ngIf=\"isNewUser()\">{{field.question}}</span>\n        </div>\n        <div class=\"modal-middle modal-middle-input-text\">\n            <textarea class=\"d-block {{indicationsIdentifier}}\" cols=\"30\" rows=\"10\" [(ngModel)]=\"indications\" *ngIf=\"isNewAuthor()\"></textarea>\n            <textarea class=\"d-block {{indicationsIdentifier}}\" cols=\"30\" rows=\"10\" [(ngModel)]=\"field.indications\" *ngIf=\"isEditAuthor()\"></textarea>\n            <p class=\"d-none\" *ngIf=\"isNewAuthor()\">{{indications}}</p>\n            <p class=\"d-none\" *ngIf=\"isEditAuthor()\">{{field.indications}}</p>\n\n            <p class=\"d-block\" *ngIf=\"isNewUser()\">{{field.indications}}</p>\n        </div>\n        <div class=\"modal-bottom modal-bottom-input-text\">\n            <button class=\"button d-block\" (click)=\"toggleModal(false)\" *ngIf=\"isNewAuthor() || isEditAuthor()\">Guardar</button>\n            <button class=\"button delete-indications d-block\" (click)=\"toggleModal(true)\" *ngIf=\"isNewAuthor() || isEditAuthor()\">Borrar</button>\n            <button class=\"button\" (click)=\"toggleModal(false)\" [ngClass]=\"{'d-none': isNewAuthor() || isEditAuthor() }\">Entendido</button>\n        </div>\n    </div>\n</div>"

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
/* harmony import */ var _new_radio_a__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-radio-a */ "./src/app/shared/inputs/input-radio-a/new-radio-a/index.ts");




var InputRadioAComponent = /** @class */ (function () {
    function InputRadioAComponent(commonsService, componentInjectorService) {
        this.commonsService = commonsService;
        this.componentInjectorService = componentInjectorService;
    }
    InputRadioAComponent.prototype.ngOnInit = function () {
        if (this.isNewUser() || this.isEditUser()) {
            this.randomId = this.field['referenceNumber'];
        }
        else {
            this.getRandomId();
        }
    };
    InputRadioAComponent.prototype.ngAfterViewInit = function () {
        this.enableDrag();
    };
    InputRadioAComponent.prototype.getRandomId = function () {
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
            this.randomId = 'iRadioA' + this.referenceNumber;
            this.questionIdentifier = 'question' + this.referenceNumber;
            this.indicationsIdentifier = 'indications' + this.referenceNumber;
            this.mandatoryIdentifier = 'mandatory' + this.referenceNumber;
        }
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
        // Update injected radios first, after change reference number
        var name = 'input[name="' + ('name' + this.referenceNumber) + '"]';
        var radios = this.radios.nativeElement.querySelectorAll(name).forEach(function (radio) {
            radio.name = 'name' + newValue;
        });
        this.referenceNumber = newValue;
        this.randomId = 'iRadioA' + this.referenceNumber;
        this.questionIdentifier = 'question' + this.referenceNumber;
        this.indicationsIdentifier = 'indications' + this.referenceNumber;
        this.mandatoryIdentifier = 'mandatory' + this.referenceNumber;
        this.enableDrag();
    };
    InputRadioAComponent.prototype.enableDrag = function () {
        if (this.isEditAuthor() || this.isNewAuthor()) {
            this.commonsService.enableDrag(this.draggableText.nativeElement, this.referenceNumber);
        }
    };
    InputRadioAComponent.prototype.showChangeIdInputField = function () {
        if (this.draggableText.nativeElement.style.display === 'none') {
            this.draggableText.nativeElement.style.display = 'block';
            this.changeIdInput.nativeElement.style.display = 'none';
            if (this.changeIdInput.nativeElement.value === 'i') {
                this.getRandomId();
                this.enableDrag();
            }
        }
        else {
            this.draggableText.nativeElement.style.display = 'none';
            this.changeIdInput.nativeElement.style.display = 'block';
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
                this.toggleModal(false);
            }
        }
        else {
            this.rightMenu.nativeElement.style.display = 'none';
            window.removeEventListener('click', this.functionReference);
        }
    };
    InputRadioAComponent.prototype.toggleModal = function (eraseIndications) {
        this.modal.nativeElement.classList.toggle('show-modal');
        if (eraseIndications) {
            this.indications = '';
        }
    };
    InputRadioAComponent.prototype.addNewRadio = function () {
        this.componentInjectorService.appendComponentToBody('Radio', _new_radio_a__WEBPACK_IMPORTED_MODULE_3__["NewRadioAComponent"], this.randomId, 'parentId' + this.randomId, 'form-check-inline', { randomName: 'name' + this.referenceNumber });
    };
    InputRadioAComponent.prototype.deleteElementDiv = function () {
        this.delete.nativeElement.remove();
    };
    InputRadioAComponent.prototype.isNewAuthor = function () { return this.state === undefined; };
    InputRadioAComponent.prototype.isNewUser = function () { return this.state === 'newUser'; };
    InputRadioAComponent.prototype.isEditAuthor = function () { return this.state === 'editAuthor'; };
    InputRadioAComponent.prototype.isEditUser = function () { return this.state === 'editUser'; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputRadioAComponent.prototype, "state", void 0);
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
    InputRadioAComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-radio-a',
            template: __webpack_require__(/*! ./input-radio-a.component.html */ "./src/app/shared/inputs/input-radio-a/input-radio-a.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["CommonsService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["ComponentInjectorService"]])
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

module.exports = "<div class=\"field-area-radio-input radio form-check-inline radio-create-form\" #delete\n[ngClass]=\"{'radio-fill-form': isNewUser() || isEditUser() }\">\n        <!-- radio-fill-form -->\n    <input type=\"radio\" id=\"{{ randomId }}\" name=\"{{randomName}}\" checked value=\"{{radio}}\" *ngIf=\"isNewAuthor()\">\n    <label for=\"{{ randomId }}\" *ngIf=\"isNewAuthor()\"></label>\n    <input type=\"radio\" id=\"{{ randomId }}\" name=\"{{randomName}}\" checked value=\"{{valueRadio}}\" *ngIf=\"isEditAuthor()\">\n    <label for=\"{{ randomId }}\" *ngIf=\"isEditAuthor()\"></label>\n    <input class=\"{{field.referenceNumber}}\" type=\"radio\" id=\"{{ randomId }}\" name=\"{{randomName}}\" value=\"{{valueRadio}}\" *ngIf=\"isNewUser()\">\n    <label for=\"{{ randomId }}\" *ngIf=\"isNewUser()\"></label>\n    <input class=\"{{field.referenceNumber}}\" type=\"radio\" id=\"{{ randomId }}\" name=\"{{randomName}}\" value=\"{{valueRadio}}\" \n            [checked]=\"valueRadio === field.value\" *ngIf=\"isEditUser()\">\n    <label for=\"{{ randomId }}\" *ngIf=\"isEditUser()\"></label>\n\n\n\n    <input [(ngModel)]=\"radio\" type=\"text\" class=\"d-block\" name=\"radio\" *ngIf=\"isNewAuthor()\">\n    <label class=\"d-none label-fill-form\" *ngIf=\"isNewAuthor()\">\n        {{radio}}\n    </label>\n    <input [(ngModel)]=\"valueRadio\" type=\"text\" class=\"d-block\" name=\"radio\" *ngIf=\"isEditAuthor()\">\n    <label class=\"d-none label-fill-form\" *ngIf=\"isEditAuthor()\">{{valueRadio}}</label>\n\n    <label class=\"d-block label-fill-form\" *ngIf=\"isNewUser() || isEditUser()\">{{valueRadio}}</label>\n\n    <div class=\"remove-radio d-block\" (click)=\"deleteElementDiv()\" *ngIf=\"isEditAuthor()\">\n        <span class=\"icon icon-times-solid\"></span>\n    </div>\n</div>\n\n"

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


var NewRadioAComponent = /** @class */ (function () {
    function NewRadioAComponent() {
    }
    NewRadioAComponent.prototype.ngOnInit = function () {
        if (this.isNewUser() || this.isEditUser()) {
            this.randomName = 'name' + this.field['referenceNumber'];
        }
        else {
            this.getRandomName();
        }
        this.getRandomId();
    };
    NewRadioAComponent.prototype.getRandomId = function () {
        this.randomId = 'iNewRadioA' + Math.random().toString(36).substring(7);
    };
    NewRadioAComponent.prototype.getRandomName = function () {
        if (this.isEditAuthor()) {
            this.randomName = 'name' + this.field['referenceNumber'];
        }
        else {
            this.randomName = this.optionalValues['randomName'];
        }
    };
    NewRadioAComponent.prototype.deleteElementDiv = function () {
        this.delete.nativeElement.remove();
    };
    NewRadioAComponent.prototype.isNewAuthor = function () { return this.state === undefined; };
    NewRadioAComponent.prototype.isNewUser = function () { return this.state === 'newUser'; };
    NewRadioAComponent.prototype.isEditAuthor = function () { return this.state === 'editAuthor'; };
    NewRadioAComponent.prototype.isEditUser = function () { return this.state === 'editUser'; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewRadioAComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewRadioAComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewRadioAComponent.prototype, "valueRadio", void 0);
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
        })
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

module.exports = "<!-- Radio-a -->\n<div class=\"field smooth-intro divWhereIsDeleteButton\" [id]=\"'parentId' + randomId\" #delete\n[ngClass]=\"{'field-fill-form': isNewUser() || isEditUser() }\">\n    <div class=\"field-content d-none-grid-100\" [ngClass]=\"{'field-content-fill-form': isNewUser() || isEditUser() }\">\n        <div class=\"field-area\">\n\n            <!-- HEADER-->\n            <div class=\"field-area-top d-block\" *ngIf=\"isEditAuthor() || isNewAuthor()\">\n                <div class=\"label\">\n                    <span>Radio B</span>\n                </div>\n                <div class=\"dragAndDropBotton\">\n                    <span class=\"icon icon-ellipsis-h-solid\"></span>\n                    <span class=\"icon icon-ellipsis-h-solid\"></span>\n                </div>\n                <div class=\"identifier\">\n                    <span class=\"identifier-label\">\n                        Id:\n                    </span>\n                    <span class=\"identifier-id\">\n                        <span (dblclick)=\"showChangeIdInputField()\" #draggableText>{{referenceNumber}}</span>\n                        <input (blur)=\"showChangeIdInputField()\" (keyup.enter)=\"changeIdInput.blur()\" \n                                (keyup)=\"changeId($event)\" type=\"text\" value=\"{{referenceNumber}}\" #changeIdInput>\n                    </span>\n                </div>\n            </div>\n\n\n            <span *ngIf=\"isNewAuthor()\">\n                <div class=\"field-area-top field-area-top-fill-form d-none-flex\"\n                (click)=\"toggleModal(false)\"\n                *ngIf=\"indications !== '' && indications !== undefined\">\n                    <div class=\"indication\">\n                        <span class=\"icon icon-info-circle-solid\"></span>\n                    </div>\n                </div>\n            </span>\n            \n            <span *ngIf=\"isEditAuthor()\">\n                <div class=\"field-area-top field-area-top-fill-form d-none-flex\"\n                    (click)=\"toggleModal(false)\"\n                    *ngIf=\"field.indications !== '' && field.indications !== undefined\">\n                    <div class=\"indication\">\n                        <span class=\"icon icon-info-circle-solid\"></span>\n                    </div>\n                </div>\n            </span>\n\n            <span *ngIf=\"isNewUser() || isEditUser()\">\n                <div class=\"field-area-top\"\n                    (click)=\"toggleModal(false)\"\n                    *ngIf=\"field.indications !== '' && field.indications !== undefined\">\n\n                    <div class=\"indication\">\n                        <span class=\"icon icon-info-circle-solid\"></span>\n                    </div>\n                    \n                </div>\n            </span>\n\n            <div class=\"field-area-middle\">\n              \n                <input *ngIf=\"isEditAuthor()\"\n                type=\"text\" \n                id=\"question\"\n                class=\"{{questionIdentifier}} question-field d-block\"\n                placeholder=\"Question\" [(ngModel)]=\"field.question\">\n\n                <input *ngIf=\"isNewAuthor()\"\n                type=\"text\"\n                id=\"question\"\n                class=\"{{questionIdentifier}} question-field d-block\"\n                placeholder=\"Question\" [(ngModel)]=\"question\">\n\n                <span class=\"question d-none\" *ngIf=\"isNewAuthor()\">{{question}}</span>\n                <span class=\"question d-none\" *ngIf=\"isEditAuthor()\">{{field.question}}</span>\n                <span class=\"question\" *ngIf=\"isNewUser() || isEditUser()\">{{field.question}}</span>\n                \n                <div #radios id=\"{{randomId}}\" class=\"inputRadio inputCollection\">\n                    <span *ngIf=\"isEditAuthor() || isNewUser() || isEditUser()\">\n                      <app-new-radio-b *ngFor=\"let radio of field.radios\" [state]=\"state\" [valueRadio]=\"radio.radio\" [field]=\"radio\"></app-new-radio-b>\n                    </span>\n                </div>\n\n                <div class=\"add-another-radio-button d-block\" (click)=\"addNewRadio()\" *ngIf=\"isEditAuthor() || isNewAuthor()\">\n                    <span class=\"icon icon-plus-circle-solid\"></span>\n                </div>\n            </div>\n            \n            <div class=\"field-area-bottom d-block\" *ngIf=\"isNewAuthor() || isEditAuthor()\">\n                <label class=\"switch d-block\" >\n                        <input type=\"checkbox\" class=\"{{mandatoryIdentifier}}\" [(ngModel)]=\"mandatory\" *ngIf=\"isNewAuthor()\">\n                        <input type=\"checkbox\" class=\"{{mandatoryIdentifier}}\" [(ngModel)]=\"field.mandatory\" *ngIf=\"isEditAuthor()\">\n                    <span class=\"slider round\"></span>\n                </label>\n                <span class=\"switch-label d-block\">Obligatorio</span>\n            </div>\n\n            <div class=\"field-area-bottom field-area-bottom-input-text d-none-flex\" *ngIf=\"isNewAuthor() && mandatory\">\n                <span class=\"mandatory\">\n                    Obligatorio *\n                </span>\n            </div>\n            <div class=\"field-area-bottom field-area-bottom-input-text\" \n                *ngIf=\"(isEditAuthor() || isNewUser() || isEditUser()) && field.mandatory\" [ngClass]=\"{'d-none-flex': isEditAuthor() }\">\n                <span class=\"mandatory\">\n                    Obligatorio *\n                </span>\n            </div>\n        </div>\n        <div class=\"right-button d-flex\" id=\"right-button\" *ngIf=\"isNewAuthor() || isEditAuthor()\">\n            <div class=\"tooltip\">\n                <span class=\"icon icon-ellipsis-v-solid\" id=\"right-button-menu\" #rightMenuButton (click)=\"showRightMenu()\"></span>\n                <span class=\"right-button-menu\" #rightMenu>\n                    <div class=\"group\">\n                        <span #showModalButton>Indicactions for this field</span>\n                    </div>\n                </span>\n            </div>\n        </div>\n    </div>\n    <div class=\"remove-button d-block\" *ngIf=\"isEditAuthor()\" (click)=\"deleteDiv()\">\n        <span class=\"icon icon-trash-alt-regular\"></span>\n    </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal\" #modal>\n    <div class=\"modal-content\">\n        <div class=\"modal-top modal-top-input-text\">\n            <h5>Indicaciones para pregunta</h5>\n            <span *ngIf=\"isNewAuthor()\">{{question}}</span>\n            <span *ngIf=\"isEditAuthor()\">{{field.question}}</span>\n\n            <span *ngIf=\"isNewUser()\">{{field.question}}</span>\n        </div>\n        <div class=\"modal-middle modal-middle-input-text\">\n            <textarea class=\"d-block {{indicationsIdentifier}}\" cols=\"30\" rows=\"10\" [(ngModel)]=\"indications\" *ngIf=\"isNewAuthor()\"></textarea>\n            <textarea class=\"d-block {{indicationsIdentifier}}\" cols=\"30\" rows=\"10\" [(ngModel)]=\"field.indications\" *ngIf=\"isEditAuthor()\"></textarea>\n            <p class=\"d-none\" *ngIf=\"isNewAuthor()\">{{indications}}</p>\n            <p class=\"d-none\" *ngIf=\"isEditAuthor()\">{{field.indications}}</p>\n\n            <p class=\"d-block\" *ngIf=\"isNewUser()\">{{field.indications}}</p>\n        </div>\n        <div class=\"modal-bottom modal-bottom-input-text\">\n            <button class=\"button d-block\" (click)=\"toggleModal(false)\" *ngIf=\"isNewAuthor() || isEditAuthor()\">Guardar</button>\n            <button class=\"button delete-indications d-block\" (click)=\"toggleModal(true)\" *ngIf=\"isNewAuthor() || isEditAuthor()\">Borrar</button>\n            <button class=\"button\" (click)=\"toggleModal(false)\" [ngClass]=\"{'d-none': isNewAuthor() || isEditAuthor() }\">Entendido</button>\n        </div>\n    </div>\n</div>"

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
/* harmony import */ var _new_radio_b__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-radio-b */ "./src/app/shared/inputs/input-radio-b/new-radio-b/index.ts");




var InputRadioBComponent = /** @class */ (function () {
    function InputRadioBComponent(commonsService, componentInjectorService) {
        this.commonsService = commonsService;
        this.componentInjectorService = componentInjectorService;
    }
    InputRadioBComponent.prototype.ngOnInit = function () {
        if (this.isNewUser() || this.isEditUser()) {
            this.randomId = this.field['referenceNumber'];
        }
        else {
            this.getRandomId();
        }
    };
    InputRadioBComponent.prototype.ngAfterViewInit = function () {
        this.enableDrag();
    };
    InputRadioBComponent.prototype.getRandomId = function () {
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
            this.randomId = 'iRadioB' + this.referenceNumber;
            this.questionIdentifier = 'question' + this.referenceNumber;
            this.indicationsIdentifier = 'indications' + this.referenceNumber;
            this.mandatoryIdentifier = 'mandatory' + this.referenceNumber;
        }
    };
    InputRadioBComponent.prototype.changeId = function (e) {
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
        this.randomId = 'iRadioB' + this.referenceNumber;
        this.questionIdentifier = 'question' + this.referenceNumber;
        this.indicationsIdentifier = 'indications' + this.referenceNumber;
        this.mandatoryIdentifier = 'mandatory' + this.referenceNumber;
        this.enableDrag();
    };
    InputRadioBComponent.prototype.enableDrag = function () {
        if (this.isEditAuthor() || this.isNewAuthor()) {
            this.commonsService.enableDrag(this.draggableText.nativeElement, this.referenceNumber);
        }
    };
    InputRadioBComponent.prototype.showChangeIdInputField = function () {
        if (this.draggableText.nativeElement.style.display === 'none') {
            this.draggableText.nativeElement.style.display = 'block';
            this.changeIdInput.nativeElement.style.display = 'none';
            if (this.changeIdInput.nativeElement.value === 'i') {
                this.getRandomId();
                this.enableDrag();
            }
        }
        else {
            this.draggableText.nativeElement.style.display = 'none';
            this.changeIdInput.nativeElement.style.display = 'block';
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
                this.toggleModal(false);
            }
        }
        else {
            this.rightMenu.nativeElement.style.display = 'none';
            window.removeEventListener('click', this.functionReference);
        }
    };
    InputRadioBComponent.prototype.toggleModal = function (eraseIndications) {
        this.modal.nativeElement.classList.toggle('show-modal');
        if (eraseIndications) {
            this.indications = '';
        }
    };
    InputRadioBComponent.prototype.addNewRadio = function () {
        this.componentInjectorService.appendComponentToBody('Radio', _new_radio_b__WEBPACK_IMPORTED_MODULE_3__["NewRadioBComponent"], this.randomId, 'parentId' + this.randomId, 'form-check-inline', { randomName: 'name' + this.referenceNumber });
    };
    InputRadioBComponent.prototype.deleteElementDiv = function () {
        this.delete.nativeElement.remove();
    };
    InputRadioBComponent.prototype.isNewAuthor = function () { return this.state === undefined; };
    InputRadioBComponent.prototype.isNewUser = function () { return this.state === 'newUser'; };
    InputRadioBComponent.prototype.isEditAuthor = function () { return this.state === 'editAuthor'; };
    InputRadioBComponent.prototype.isEditUser = function () { return this.state === 'editUser'; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputRadioBComponent.prototype, "state", void 0);
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
    InputRadioBComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-radio-b',
            template: __webpack_require__(/*! ./input-radio-b.component.html */ "./src/app/shared/inputs/input-radio-b/input-radio-b.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["CommonsService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["ComponentInjectorService"]])
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

module.exports = "<div #delete>\n    <div class=\"field-area-radio-input radio form-check-inline radio-create-form\" [ngClass]=\"{'radio-fill-form': isNewUser() || isEditUser() }\">\n        <input type=\"radio\" id=\"{{ randomId }}\" name=\"{{randomName}}\" checked value=\"{{radio}}\" *ngIf=\"isNewAuthor()\">\n        <label for=\"{{ randomId }}\" *ngIf=\"isNewAuthor()\"></label>\n        <input type=\"radio\" id=\"{{ randomId }}\" name=\"{{randomName}}\" checked value=\"{{valueRadio}}\" *ngIf=\"isEditAuthor()\">\n        <label for=\"{{ randomId }}\" *ngIf=\"isEditAuthor()\"></label>\n        <input class=\"{{field.referenceNumber}}\" type=\"radio\" id=\"{{ randomId }}\" name=\"{{randomName}}\" value=\"{{field.value}}\" *ngIf=\"isNewUser()\">\n        <label for=\"{{ randomId }}\" *ngIf=\"isNewUser()\"></label>\n        <input class=\"{{field.referenceNumber}}\" type=\"radio\" id=\"{{ randomId }}\" name=\"{{randomName}}\" value=\"{{field.value}}\" \n                [checked]=\"field.checked === true\" *ngIf=\"isEditUser()\">\n        <label for=\"{{ randomId }}\" *ngIf=\"isEditUser()\"></label>\n\n\n\n        <input [(ngModel)]=\"radio\" type=\"text\" class=\"d-block\" name=\"{{randomName}}\" *ngIf=\"isNewAuthor()\">\n        <label class=\"d-none label-fill-form\" *ngIf=\"isNewAuthor()\">\n            {{radio}}\n        </label>\n        <input [(ngModel)]=\"valueRadio\" type=\"text\" class=\"d-block\"  name=\"{{randomName}}\" *ngIf=\"isEditAuthor()\">\n        <label class=\"d-none label-fill-form\" *ngIf=\"isEditAuthor()\">{{valueRadio}}</label>\n\n        <label class=\"d-block label-fill-form\" *ngIf=\"isNewUser() || isEditUser()\">{{valueRadio}}</label>\n        \n        <div class=\"modal-button d-block modal-button-radio\" (click)=\"toggleModal()\" *ngIf=\"isNewAuthor() || isEditAuthor()\">\n            <span class=\"icon icon-modal-icon\"></span>\n        </div>\n        <div class=\"remove-radio d-block\" (click)=\"deleteElementDiv()\" *ngIf=\"isEditAuthor()\">\n            <span class=\"icon icon-times-solid\"></span>\n        </div>\n    </div>\n    <!-- Modal -->\n    <div class=\"modal\" #modal>\n        <div class=\"modal-content\">\n            <div class=\"modal-top modal-top-input-text\">\n                <h5>Este texto se sustituirá por el identificador</h5>\n            </div>\n            <div class=\"modal-middle\">\n                <textarea class=\"{{randomName}}\" cols=\"30\" rows=\"10\" *ngIf=\"isNewAuthor()\"></textarea>\n                <textarea class=\"{{randomName}}\" cols=\"30\" rows=\"10\"\n                            value=\"{{field.value}}\" *ngIf=\"isEditAuthor()\"></textarea>\n            </div>\n            <div class=\"modal-bottom\">\n                <button class=\"button\" (click)=\"toggleModal()\">Guardar</button>\n            </div>\n        </div>\n    </div>\n</div>"

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


var NewRadioBComponent = /** @class */ (function () {
    function NewRadioBComponent() {
        this.randomNumberForModal = 'i' + Math.random().toString(36).substring(7);
    }
    NewRadioBComponent.prototype.ngOnInit = function () {
        if (this.isNewUser() || this.isEditUser()) {
            this.randomName = 'name' + this.field['referenceNumber'];
        }
        else {
            this.getRandomName();
        }
        this.getRandomId();
    };
    NewRadioBComponent.prototype.getRandomId = function () {
        this.randomId = 'iNewRadioA' + Math.random().toString(36).substring(7);
    };
    NewRadioBComponent.prototype.getRandomName = function () {
        if (this.isEditAuthor()) {
            this.randomName = 'name' + this.field['referenceNumber'];
        }
        else {
            this.randomName = this.optionalValues['randomName'];
        }
    };
    NewRadioBComponent.prototype.toggleModal = function () {
        this.modal.nativeElement.classList.toggle('show-modal');
    };
    NewRadioBComponent.prototype.deleteElementDiv = function () {
        this.delete.nativeElement.remove();
    };
    NewRadioBComponent.prototype.isNewAuthor = function () { return this.state === undefined; };
    NewRadioBComponent.prototype.isNewUser = function () { return this.state === 'newUser'; };
    NewRadioBComponent.prototype.isEditAuthor = function () { return this.state === 'editAuthor'; };
    NewRadioBComponent.prototype.isEditUser = function () { return this.state === 'editUser'; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewRadioBComponent.prototype, "state", void 0);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
            this.draggableText.nativeElement.style.display = 'block';
            this.changeIdInput.nativeElement.style.display = 'none';
            if (this.changeIdInput.nativeElement.value === 'i') {
                this.getRandomId();
                this.enableDrag();
            }
        }
        else {
            this.draggableText.nativeElement.style.display = 'none';
            this.changeIdInput.nativeElement.style.display = 'block';
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

module.exports = "\n<div class=\"form-creator-container\" #formBasedDocDiv>\n  <div class=\"fields-area fields-area-conditional\">\n    <div class=\"fields-container fields-container-conditional\" #formAreaDiv [id]=\"'modalFormAreaDiv' + idOfRadioParent\" (keyup)=\"generateText()\" (click)=\"generateText()\">\n      <div *ngIf=\"state === 'editAuthor'\">\n        <div *ngFor=\"let field of fields\">\n            <app-input-text *ngIf=\"field['type'] == 'iText'\" [state]=\"state\" [field]=\"field\"></app-input-text>\n            <!-- <app-input-date *ngIf=\"field['type'] == 'iDate'\" [state]=\"state\" [field]=\"field\"></app-input-date> -->\n            <app-input-radio-a *ngIf=\"field['type'] == 'iRadioA'\" [state]=\"state\" [field]=\"field\"></app-input-radio-a>\n            <app-input-radio-b *ngIf=\"field['type'] == 'iRadioB'\" [state]=\"state\" [field]=\"field\"></app-input-radio-b>\n            <app-input-radio-c *ngIf=\"field['type'] == 'iRadioC'\" [state]=\"state\" [field]=\"field\"></app-input-radio-c>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"add-question-button add-question-button d-block\">\n        <div class=\"tooltip\" (click)=\"toogleQuestionMenu($event)\">\n            <span class=\"icon icon-plus-solid\" id=\"add-question-button2\"></span>\n            <span class=\"add-question-menu\" #addQuestionMenuDiv>\n              <span class=\"icon icon-times-solid close-question-menu {{randomId}}\"></span>\n              <div class=\"group\">\n                <span>Text</span>\n                <div class=\"buttons-group\">\n                  <button (click)=\"injectComponent(inputs[0])\">Text</button>\n                </div>\n              </div>\n              <div class=\"group\">\n                <span>Radio</span>\n                <div class=\"buttons-group\">\n                  <button (click)=\"injectComponent(inputs[1])\">Radio a</button>\n                  <button (click)=\"injectComponent(inputs[2])\">Radio b</button>\n                  <button (click)=\"injectComponent(inputs[3])\">Radio c</button>\n                </div>\n              </div>\n              <div class=\"group\">\n                <span>Others</span>\n                <div class=\"buttons-group\">\n                  <button>Date</button>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"text-area text-area-conditional\">\n        <!-- Create the editor container -->\n        <div class=\"editor-container-conditional d-block\" #editorContainer>\n            <quill-editor (onContentChanged)=\"contentToExport.text = $event.html\"\n                          [ngModel]=\"contentToExport.text\" [ngModelOptions]=\"{standalone: true}\" \n                        [customOptions]=\"customOptions\" [modules]=\"quillModules\"\n                          #quill></quill-editor>\n        </div>\n        <div class=\"d-none textToGeneratePreview\" #textPreviewDiv>{{textPreview}}</div>\n      </div>\n    </div>\n\n"

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
        this.commonsService.replaceClassDnoneForDblock(this.formBasedDocDiv);
        this.commonsService.replaceClassDnoneflexForDflex(this.formBasedDocDiv);
        this.commonsService.replaceClassDnonegridForDgrid(this.formBasedDocDiv);
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

module.exports = "<!-- Texto -->\n<div #delete class=\"field smooth-intro divWhereIsDeleteButton\" [ngClass]=\"{'field-fill-form': isNewUser() || isEditUser() }\">\n    <div class=\"field-content d-none-grid-100\" [ngClass]=\"{'field-content-fill-form': isNewUser() || isEditUser() }\">\n        <div class=\"field-area\">\n            <!-- HEADER-->\n            <div class=\"field-area-top d-block\" *ngIf=\"isEditAuthor() || isNewAuthor()\">\n                <div class=\"label\">\n                    <span>Text</span>\n                </div>\n                <div class=\"dragAndDropBotton\">\n                    <span class=\"icon icon-ellipsis-h-solid\"></span>\n                    <span class=\"icon icon-ellipsis-h-solid\"></span>\n                </div>\n                <div class=\"identifier\">\n                    <span class=\"identifier-label\">\n                        Id:\n                    </span>\n                    <span class=\"identifier-id\">\n                        <span (dblclick)=\"showChangeIdInputField()\" #draggableText>{{referenceNumber}}</span>\n                        <input (blur)=\"showChangeIdInputField()\" (keyup.enter)=\"changeIdInput.blur()\" \n                                (keyup)=\"changeId($event)\" type=\"text\" value=\"{{referenceNumber}}\" #changeIdInput>\n                    </span>\n                </div>\n            </div>\n\n            <span *ngIf=\"isNewAuthor()\">\n                <div class=\"field-area-top field-area-top-fill-form d-none-flex\"\n                (click)=\"toggleModal(false)\"\n                *ngIf=\"indications !== '' && indications !== undefined\">\n                    <div class=\"indication\">\n                        <span class=\"icon icon-info-circle-solid\"></span>\n                    </div>\n                </div>\n            </span>\n            \n            <span *ngIf=\"isEditAuthor()\">\n                <div class=\"field-area-top field-area-top-fill-form d-none-flex\"\n                    (click)=\"toggleModal(false)\"\n                    *ngIf=\"field.indications !== '' && field.indications !== undefined\">\n                <div class=\"indication\">\n                    <span class=\"icon icon-info-circle-solid\"></span>\n                </div>\n            </div>\n            </span>\n\n            <span *ngIf=\"isNewUser() || isEditUser()\">\n                <div class=\"field-area-top\"\n                    (click)=\"toggleModal(false)\"\n                    *ngIf=\"field.indications !== '' && field.indications !== undefined\">\n\n                    <div class=\"indication\">\n                        <span class=\"icon icon-info-circle-solid\"></span>\n                    </div>\n                    \n                </div>\n            </span>\n\n                                    <!-- Texto\n            <div class=\"field field-fill-form\">\n                    <div class=\"field-content field-content-fill-form\">\n                        <div class=\"field-area\">\n\n                            <div class=\"field-area-bottom\">\n                                <span class=\"mandatory\">\n                                    Obligatorio *\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n\n            <!-- END OF HEADER-->\n            <div class=\"field-area-middle\">\n\n                <input *ngIf=\"isEditAuthor()\"\n                type=\"text\" \n                id=\"question\"\n                class=\"{{questionIdentifier}} d-block\"\n                placeholder=\"Question\" [(ngModel)]=\"field.question\">\n\n                <input *ngIf=\"isNewAuthor()\"\n                type=\"text\"\n                id=\"question\"\n                class=\"{{questionIdentifier}} d-block\"\n                placeholder=\"Question\" [(ngModel)]=\"question\">\n\n                <span class=\"question d-none\" *ngIf=\"isNewAuthor()\">{{question}}</span>\n                <span class=\"question d-none\" *ngIf=\"isEditAuthor()\">{{field.question}}</span>\n                <span class=\"question\" *ngIf=\"isNewUser() || isEditUser()\">{{field.question}}</span>\n\n                <input *ngIf=\"isNewAuthor() || isEditAuthor() || isNewUser()\"\n                class=\"inputCollection\" \n                id=\"{{randomId}}\" type=\"text\" [ngClass]=\"{'d-none': isNewAuthor() || isEditAuthor() }\">\n                \n                <input *ngIf=\"isEditUser()\"\n                class=\"inputCollection\" \n                id=\"{{randomId}}\" type=\"text\" [value]=\"field['value']\">\n\n            </div>\n            <div class=\"field-area-bottom d-block\" *ngIf=\"isNewAuthor() || isEditAuthor()\">\n                <label class=\"switch d-block\" >\n                        <input type=\"checkbox\" class=\"{{mandatoryIdentifier}}\" [(ngModel)]=\"mandatory\" *ngIf=\"isNewAuthor()\">\n                        <input type=\"checkbox\" class=\"{{mandatoryIdentifier}}\" [(ngModel)]=\"field.mandatory\" *ngIf=\"isEditAuthor()\">\n                    <span class=\"slider round\"></span>\n                </label>\n                <span class=\"switch-label d-block\">Obligatorio</span>\n            </div>\n\n            <div class=\"field-area-bottom field-area-bottom-input-text d-none-flex\" *ngIf=\"isNewAuthor() && mandatory\">\n                <span class=\"mandatory\">\n                    Obligatorio *\n                </span>\n            </div>\n            <div class=\"field-area-bottom field-area-bottom-input-text\" \n                *ngIf=\"(isEditAuthor() || isNewUser() || isEditUser()) && field.mandatory\" [ngClass]=\"{'d-none-flex': isEditAuthor() }\">\n                <span class=\"mandatory\">\n                    Obligatorio *\n                </span>\n            </div>\n\n        </div>\n        <div class=\"right-button d-flex\" id=\"right-button\" *ngIf=\"isNewAuthor() || isEditAuthor()\">\n            <div class=\"tooltip\">\n                <span class=\"icon icon-ellipsis-v-solid\" id=\"right-button-menu\" #rightMenuButton (click)=\"showRightMenu()\"></span>\n                <span class=\"right-button-menu\" #rightMenu>\n                    <div class=\"group\">\n                        <span #showModalButton>Indicactions for this field</span>\n                    </div>\n                </span>\n            </div>\n        </div>\n    </div>\n    <div class=\"remove-button d-block\" *ngIf=\"isEditAuthor()\" (click)=\"deleteDiv()\">\n        <span class=\"icon icon-trash-alt-regular\"></span>\n    </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal\" #modal>\n    <div class=\"modal-content\">\n        <div class=\"modal-top modal-top-input-text\">\n            <h5>Indicaciones para pregunta</h5>\n            <span *ngIf=\"isNewAuthor()\">{{question}}</span>\n            <span *ngIf=\"isEditAuthor()\">{{field.question}}</span>\n\n            <span *ngIf=\"isNewUser()\">{{field.question}}</span>\n        </div>\n        <div class=\"modal-middle modal-middle-input-text\">\n            <textarea class=\"d-block {{indicationsIdentifier}}\" cols=\"30\" rows=\"10\" [(ngModel)]=\"indications\" *ngIf=\"isNewAuthor()\"></textarea>\n            <textarea class=\"d-block {{indicationsIdentifier}}\" cols=\"30\" rows=\"10\" [(ngModel)]=\"field.indications\" *ngIf=\"isEditAuthor()\"></textarea>\n            <p class=\"d-none\" *ngIf=\"isNewAuthor()\">{{indications}}</p>\n            <p class=\"d-none\" *ngIf=\"isEditAuthor()\">{{field.indications}}</p>\n\n            <p class=\"d-block\" *ngIf=\"isNewUser()\">{{field.indications}}</p>\n        </div>\n        <div class=\"modal-bottom modal-bottom-input-text\">\n            <button class=\"button d-block\" (click)=\"toggleModal(false)\" *ngIf=\"isNewAuthor() || isEditAuthor()\">Guardar</button>\n            <button class=\"button delete-indications d-block\" (click)=\"toggleModal(true)\" *ngIf=\"isNewAuthor() || isEditAuthor()\">Borrar</button>\n            <button class=\"button\" (click)=\"toggleModal(false)\" [ngClass]=\"{'d-none': isNewAuthor() || isEditAuthor() }\">Entendido</button>\n        </div>\n    </div>\n</div>"

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
    function InputTextComponent(commonsService) {
        this.commonsService = commonsService;
    }
    InputTextComponent.prototype.ngOnInit = function () {
        if (this.isNewUser() || this.isEditUser()) {
            this.randomId = this.field['referenceNumber'];
        }
        else {
            this.getRandomId();
        }
    };
    InputTextComponent.prototype.ngAfterViewInit = function () {
        this.enableDrag();
    };
    InputTextComponent.prototype.getRandomId = function () {
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
            this.randomId = 'iText' + this.referenceNumber;
            this.questionIdentifier = 'question' + this.referenceNumber;
            this.indicationsIdentifier = 'indications' + this.referenceNumber;
            this.mandatoryIdentifier = 'mandatory' + this.referenceNumber;
        }
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
        this.randomId = 'iText' + this.referenceNumber;
        this.questionIdentifier = 'question' + this.referenceNumber;
        this.indicationsIdentifier = 'indications' + this.referenceNumber;
        this.mandatoryIdentifier = 'mandatory' + this.referenceNumber;
        this.enableDrag();
    };
    InputTextComponent.prototype.enableDrag = function () {
        if (this.isEditAuthor() || this.isNewAuthor()) {
            this.commonsService.enableDrag(this.draggableText.nativeElement, this.referenceNumber);
        }
    };
    InputTextComponent.prototype.showChangeIdInputField = function () {
        if (this.draggableText.nativeElement.style.display === 'none') {
            this.draggableText.nativeElement.style.display = 'block';
            this.changeIdInput.nativeElement.style.display = 'none';
            if (this.changeIdInput.nativeElement.value === 'i') {
                this.getRandomId();
                this.enableDrag();
            }
        }
        else {
            this.draggableText.nativeElement.style.display = 'none';
            this.changeIdInput.nativeElement.style.display = 'block';
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
                this.toggleModal(false);
            }
        }
        else {
            this.rightMenu.nativeElement.style.display = 'none';
            window.removeEventListener('click', this.functionReference);
        }
    };
    InputTextComponent.prototype.toggleModal = function (eraseIndications) {
        this.modal.nativeElement.classList.toggle('show-modal');
        if (eraseIndications) {
            this.indications = '';
        }
    };
    InputTextComponent.prototype.deleteDiv = function () {
        this.delete.nativeElement.remove();
    };
    InputTextComponent.prototype.isNewAuthor = function () { return this.state === undefined; };
    InputTextComponent.prototype.isNewUser = function () { return this.state === 'newUser'; };
    InputTextComponent.prototype.isEditAuthor = function () { return this.state === 'editAuthor'; };
    InputTextComponent.prototype.isEditUser = function () { return this.state === 'editUser'; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputTextComponent.prototype, "state", void 0);
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
    InputTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-text',
            template: __webpack_require__(/*! ./input-text.component.html */ "./src/app/shared/inputs/input-text/input-text.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["CommonsService"]])
    ], InputTextComponent);
    return InputTextComponent;
}());



/***/ }),

/***/ "./src/app/shared/list-errors.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/list-errors.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"error-messages\" *ngIf=\"errorList\">\n  <li *ngFor=\"let error of errorList\">\n    {{ error }}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/shared/list-errors.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/list-errors.component.ts ***!
  \*************************************************/
/*! exports provided: ListErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function() { return ListErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");



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
            template: __webpack_require__(/*! ./list-errors.component.html */ "./src/app/shared/list-errors.component.html")
        })
    ], ListErrorsComponent);
    return ListErrorsComponent;
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
/* harmony import */ var _list_errors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-errors.component */ "./src/app/shared/list-errors.component.ts");
/* harmony import */ var _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-authed.directive */ "./src/app/shared/show-authed.directive.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inputs */ "./src/app/shared/inputs/index.ts");
/* harmony import */ var _inputs_input_radio_c_new_radio_c_modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inputs/input-radio-c/new-radio-c/modal-content/modal-content.component */ "./src/app/shared/inputs/input-radio-c/new-radio-c/modal-content/modal-content.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/shared/comments/comments.component.ts");
/* harmony import */ var _comments_comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comments/comment/comment.component */ "./src/app/shared/comments/comment/comment.component.ts");
/* harmony import */ var _comments_comment_response_comment_response_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comments/comment-response/comment-response.component */ "./src/app/shared/comments/comment-response/comment-response.component.ts");












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
            declarations: [
                _list_errors_component__WEBPACK_IMPORTED_MODULE_4__["ListErrorsComponent"],
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
                _comments_comment_response_comment_response_component__WEBPACK_IMPORTED_MODULE_11__["CommentResponseComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _list_errors_component__WEBPACK_IMPORTED_MODULE_4__["ListErrorsComponent"],
                _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__["ShowAuthedDirective"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputTextComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputRadioAComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["NewRadioAComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputRadioBComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["NewRadioBComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["InputRadioCComponent"],
                _inputs__WEBPACK_IMPORTED_MODULE_7__["NewRadioCComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_9__["CommentsComponent"]
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
    api_url: 'https://formbaseddocs.herokuapp.com'
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

module.exports = __webpack_require__(/*! /Users/Juan/Desktop/Proyectos/formbaseddocs/5.Code/formbaseddocs/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map