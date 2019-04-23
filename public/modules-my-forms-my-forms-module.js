(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-my-forms-my-forms-module"],{

/***/ "./src/app/modules/my-forms/my-forms-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/my-forms/my-forms-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MyFormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFormsRoutingModule", function() { return MyFormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-forms.component */ "./src/app/modules/my-forms/my-forms.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");





var routes = [
    {
        path: '',
        component: _my_forms_component__WEBPACK_IMPORTED_MODULE_3__["MyFormsComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
];
var MyFormsRoutingModule = /** @class */ (function () {
    function MyFormsRoutingModule() {
    }
    MyFormsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MyFormsRoutingModule);
    return MyFormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/my-forms/my-forms.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/my-forms/my-forms.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sub-menu\">\n    <div class=\"sub-menu-container sub-menu-container-myforms\">\n        <ul class=\"sub-menu-nav\" (click)=\"topMenuNav($event)\">\n            <li class=\"current\"><a href=\"created\" class=\"sub-menu-button\">Created</a></li>\n            <li ><a href=\"filled\" class=\"sub-menu-button\">Filled</a></li>\n        </ul>\n    </div>\n</div>\n<div class=\"container\">\n    <div id=\"created\" class=\"content\">\n        <table>\n            <thead>\n                <tr>\n                    <th>Formulario</th>\n                    <th>Status</th>\n                    <th>Visibilidad</th>\n                    <th>Comentarios</th>\n                    <th>Likes</th>\n                    <th>Visualizaciones</th>\n                    <th>Actualizado</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let form of results\">\n                    <td data-column=\"Formulario\">\n                        <a [routerLink]=\"['/create-form/edit', form.slug]\">{{ form.title }}</a>\n                    </td>\n                    <td data-column=\"Status\">\n                        <div class=\"form-group\">\n                            <input type=\"checkbox\" name=\"status\" id=\"status\" value=\"enabled\"\n                            [checked]=\"form.enabled\" (change)=\"updateForm($event, form)\">\n                            <label for=\"status\">&emsp;Activo</label>\n                        </div>\n                    </td>\n                    <td data-column=\"Visibilidad\">\n                        <div class=\"form-group\">\n                            <input type=\"checkbox\" name=\"visibility\" id=\"visibility\" value=\"public\"\n                            [checked]=\"form.public\" (change)=\"updateForm($event, form)\">\n                            <label for=\"visibility\">&emsp;Público</label>\n                        </div>       \n                    </td>\n                    <td data-column=\"Comentarios\">\n                        <div class=\"form-group\">\n                            <input type=\"checkbox\" name=\"comentarios\" id=\"comentarios\" value=\"commentsEnabled\"\n                            [checked]=\"form.commentsEnabled\" (change)=\"updateForm($event, form)\">\n                            <label for=\"comentarios\">&emsp;Comentarios</label>\n                        </div>  \n                    </td>\n                    <td data-column=\"Likes\">{{ form.likesCount }}</td>\n                    <td data-column=\"Visualizaciones\">{{ form.viewsCount }}</td>\n                    <td data-column=\"Actualizado\">{{form.updatedAt | date: 'dd/MM/yyyy'}}</td>\n                    <td data-column=\"Eliminar\" (click)=\"deleteForm(form)\"><span class=\"icon icon-trash-alt-regular delete\"></span></td>\n                </tr>\n            </tbody>\n        </table>\n        <span class=\"load-more-my-forms\" *ngIf=\"noMoreForms === false\">\n            <button class=\"load-more-button\" (click)=\"moreForms()\">Cargar más</button>\n        </span>\n\n        <div class=\"noMoreForms\" *ngIf=\"noMoreForms === true\">\n            <h2>- No more forms to load -</h2>\n        </div>\n\n        <div class=\"loader\" [style.display]=\"loadingQuery ? 'flex' : 'none'\">\n            <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                width=\"80px\" height=\"80px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n            <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                <animateTransform attributeType=\"xml\"\n                attributeName=\"transform\"\n                type=\"rotate\"\n                from=\"0 25 25\"\n                to=\"360 25 25\"\n                dur=\"0.6s\"\n                repeatCount=\"indefinite\"/>\n                </path>\n            </svg>\n        </div>\n    </div>\n    <div id=\"filled\" class=\"content\">\n        <table>\n            <thead>\n                <tr>\n                    <th>Formulario</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let form of resultsFilled\">\n                    <td data-column=\"Formulario\">\n                        <a [routerLink]=\"['/fill-form/edit', form.slug]\">\n                            {{form.title}}\n                        </a>\n                    </td>\n                    <td data-column=\"Eliminar\" (click)=\"deleteFilled(form)\"><span class=\"icon icon-trash-alt-regular delete\"></span></td>\n                </tr>\n            </tbody>\n        </table>\n        <span class=\"load-more-my-forms\" *ngIf=\"noMoreFormsFilled === false\">\n            <button class=\"load-more-button\" (click)=\"moreFormsFilled()\">Cargar más</button>\n        </span>\n\n        <div class=\"noMoreForms\" *ngIf=\"noMoreFormsFilled === true\">\n            <h2>- No more forms to load -</h2>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/my-forms/my-forms.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/my-forms/my-forms.component.ts ***!
  \********************************************************/
/*! exports provided: MyFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFormsComponent", function() { return MyFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var MyFormsComponent = /** @class */ (function () {
    function MyFormsComponent(userService, searchService, formService, toastr) {
        this.userService = userService;
        this.searchService = searchService;
        this.formService = formService;
        this.toastr = toastr;
        this.listConfig = new _core__WEBPACK_IMPORTED_MODULE_2__["FormListConfig"]();
        this.loadingQuery = false;
        this.results = [];
        this.limit = 20;
        this.currentPage = 1;
        this.noMoreForms = false;
        this.isDeleting = false;
        // Filled
        this.listConfigFilled = new _core__WEBPACK_IMPORTED_MODULE_2__["FormListConfig"]();
        this.loadingQueryFilled = false;
        this.resultsFilled = [];
        this.limitFilled = 20;
        this.currentPageFilled = 1;
        this.noMoreFormsFilled = false;
    }
    MyFormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.getCurrentUser();
        this.loadingQuery = true;
        this.listConfig.orderBy = 'Date';
        this.setListTo('all');
        this.searchService.searchProfile(this.listConfig)
            .subscribe(function (forms) {
            _this.loadingQuery = false;
            _this.results = forms;
        });
        // Filled
        this.loadingQueryFilled = true;
        this.listConfigFilled.orderBy = 'Date';
        this.setListToFilled();
        this.searchService.searchFilledForms(this.listConfigFilled)
            .subscribe(function (forms) {
            _this.loadingQueryFilled = false;
            _this.resultsFilled = forms;
        });
    };
    MyFormsComponent.prototype.setListTo = function (type) {
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
    MyFormsComponent.prototype.setListToFilled = function () {
        // Takes all forms
        this.listConfigFilled = {
            type: 'Filled',
            limit: this.limit,
            orderBy: 'Date',
            offset: (this.limit * (this.currentPage - 1)),
            query: '',
            filledBy: this.user.username,
        };
    };
    MyFormsComponent.prototype.moreForms = function () {
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
    MyFormsComponent.prototype.moreFormsFilled = function () {
        var _this = this;
        this.loadingQueryFilled = true;
        this.setPageToFilled();
        // Create limit and offset filter (if necessary)
        if (this.limitFilled) {
            this.listConfigFilled.limit = this.limit;
            this.listConfigFilled.offset = (this.limitFilled * (this.currentPageFilled - 1));
        }
        this.searchService.searchFilledForms(this.listConfigFilled).subscribe(function (forms) {
            if (forms.length !== 0) {
                _this.resultsFilled = _this.resultsFilled.concat(forms);
            }
            else {
                _this.noMoreFormsFilled = true;
            }
            _this.loadingQueryFilled = false;
        });
    };
    MyFormsComponent.prototype.setPageTo = function () {
        this.currentPage += 1;
    };
    MyFormsComponent.prototype.setPageToFilled = function () {
        this.currentPageFilled += 1;
    };
    MyFormsComponent.prototype.setOrder = function (order) {
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
    MyFormsComponent.prototype.setOrderFilled = function (order) {
        var _this = this;
        this.loadingQueryFilled = true;
        this.listConfigFilled.offset = 0;
        this.currentPageFilled = 1;
        this.resultsFilled = [];
        this.noMoreFormsFilled = false;
        this.listConfigFilled.orderBy = order;
        this.searchService.searchFilledForms(this.listConfigFilled).subscribe(function (forms) {
            _this.loadingQueryFilled = false;
            _this.resultsFilled = forms;
        });
    };
    MyFormsComponent.prototype.deleteForm = function (form) {
        var _this = this;
        if (confirm('Are you sure you want to delete?')) {
            this.isDeleting = true;
            this.formService.destroy(form.slug)
                .subscribe(function (success) {
                _this.toastr.success('Deleted', form.title, {
                    positionClass: 'toast-bottom-right',
                    progressBar: true,
                    progressAnimation: 'decreasing'
                });
                _this.results = _this.results.filter(function (currentForm) {
                    return currentForm !== form;
                });
            });
        }
    };
    MyFormsComponent.prototype.deleteFilled = function (form) {
        var _this = this;
        if (confirm('Are you sure you want to delete?')) {
            this.isDeleting = true;
            this.formService.destroy(form.slug)
                .subscribe(function (success) {
                _this.toastr.success('Deleted', form.title, {
                    positionClass: 'toast-bottom-right',
                    progressBar: true,
                    progressAnimation: 'decreasing'
                });
                _this.resultsFilled = _this.resultsFilled.filter(function (currentForm) {
                    return currentForm !== form;
                });
            });
        }
    };
    MyFormsComponent.prototype.updateForm = function (e, form) {
        var _this = this;
        form[e.srcElement.value] = e.srcElement.checked;
        this.formService
            .save(form)
            .subscribe(function (formUpdated) {
            _this.toastr.success('Has been Updated', formUpdated.title, {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
            });
        });
    };
    // UTILITY
    MyFormsComponent.prototype.topMenuNav = function (e) {
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
                            div.style.display = 'block';
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
    MyFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-forms',
            template: __webpack_require__(/*! ./my-forms.component.html */ "./src/app/modules/my-forms/my-forms.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["FormService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], MyFormsComponent);
    return MyFormsComponent;
}());



/***/ }),

/***/ "./src/app/modules/my-forms/my-forms.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/my-forms/my-forms.module.ts ***!
  \*****************************************************/
/*! exports provided: MyFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFormsModule", function() { return MyFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _my_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-forms-routing.module */ "./src/app/modules/my-forms/my-forms-routing.module.ts");
/* harmony import */ var _my_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-forms.component */ "./src/app/modules/my-forms/my-forms.component.ts");





var MyFormsModule = /** @class */ (function () {
    function MyFormsModule() {
    }
    MyFormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_my_forms_component__WEBPACK_IMPORTED_MODULE_4__["MyFormsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _my_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyFormsRoutingModule"]
            ]
        })
    ], MyFormsModule);
    return MyFormsModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-my-forms-my-forms-module.js.map