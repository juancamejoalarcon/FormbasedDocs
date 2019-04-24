(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-guide-guide-module"],{

/***/ "./src/app/modules/guide/guide-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/guide/guide-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: GuideRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideRoutingModule", function() { return GuideRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guide_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guide.component */ "./src/app/modules/guide/guide.component.ts");




var routes = [
    {
        path: '',
        component: _guide_component__WEBPACK_IMPORTED_MODULE_3__["GuideComponent"],
    },
];
var GuideRoutingModule = /** @class */ (function () {
    function GuideRoutingModule() {
    }
    GuideRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GuideRoutingModule);
    return GuideRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/guide/guide.component.html":
/*!****************************************************!*\
  !*** ./src/app/modules/guide/guide.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sub-menu\">\n  <div class=\"sub-menu-container sub-menu-container-myforms\">\n      <ul class=\"sub-menu-nav\" (click)=\"topMenuNav($event)\">\n          <li class=\"current\"><a href=\"introduction\" class=\"sub-menu-button\">Intro</a></li>\n          <li><a href=\"input-list\" class=\"sub-menu-button\">Input list</a></li>\n          <li><a href=\"other\" class=\"sub-menu-button\">FAQS and others</a></li>\n      </ul>\n  </div>\n</div>\n<div class=\"container\">\n\n  <div id=\"introduction\" class=\"content\">\n      <div class=\"introduction-container\">\n\n          <div class=\"section\">\n              <div class=\"section-container\">\n                  <div class=\"text\">\n                      <h2>Introduction</h2>\n                      <p>\n                          Form-Based Docs are documents or texts generated as a result of filling a form. \n                          Depending on your answers the text generated will vary. This app gives you the possibility to\n                          create both the form and the text.    \n                      </p>\n                  </div>\n                  <div class=\"image-container\">\n                      <img src=\"assets/images/text.gif\" alt=\"formbaseddocs\">\n                  </div>\n              </div>\n          </div>\n\n      </div>\n  </div>\n\n  <div id=\"input-list\" class=\"content\">\n\n      <div class=\"input-list-container\">\n\n          <div class=\"section\">\n              <div class=\"section-container\">\n                  <div class=\"text\">\n                      <h2>Text input</h2>\n                      <p>\n                          The most simple input. Just locate the identifier right where you want\n                          to show the input of the user. The user will type in and the identifier\n                          will be replaced by the input.  \n                      </p>\n                  </div>\n                  <div class=\"image-container\">\n                      <img src=\"assets/images/text.gif\" alt=\"formbaseddocs\">\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"section\">\n              <div class=\"section-container\">\n                  <div class=\"text\">\n                      <h2>Radio-a input</h2>\n                      <p>\n                          Same as with the Text Input type, but in this case\n                          the identifier will be replaced by the value introduced right next to the radio\n                          button.\n                      </p>\n                  </div>\n                  <div class=\"image-container\">\n                      <img src=\"assets/images/radio-a.gif\" alt=\"formbaseddocs\">\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"section\">\n              <div class=\"section-container\">\n                  <div class=\"text\">\n                      <h2>Radio-b input</h2>\n                      <p>\n                          This radio works very similar to the first radio, but now the identifier will\n                          be replaced, not with the value typed in next to the radio button, but with the value\n                          typed in the window that can be opened clicking on the icon next to it.\n                      </p>\n                  </div>\n                  <div class=\"image-container\">\n                      <img src=\"assets/images/radio-b.gif\" alt=\"formbaseddocs\">\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"section\">\n              <div class=\"section-container\">\n                  <div class=\"text\">\n                      <h2>Radio-c input (conditional)</h2>\n                      <p>\n                          There will be times where you will want to prompt the user with different questions,\n                          depending on his or her answers. With this button, clicking on the icon next to it, a \n                          window will be shown where you will be able to set the questions that will be shown to the user\n                          when clicking on that particular radio button. The logic is the same as before.\n                      </p>\n                  </div>\n                  <div class=\"image-container\">\n                      <img src=\"assets/images/radio-c.gif\" alt=\"formbaseddocs\">\n                  </div>\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <div id=\"other\" class=\"content\">\n      <div class=\"other-container\">\n\n          <div class=\"section\">\n              <div class=\"section-container\">\n                  <div class=\"text\">\n                      <h2>Indications</h2>\n                      <p>\n                          In case you need to clarify or you need to set a couple of instructions on\n                          how to fill an specific field, use the right side menu to create the instructions.\n                      </p>\n                  </div>\n                  <div class=\"image-container\">\n                      <img src=\"assets/images/indications.gif\" alt=\"formbaseddocs\">\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"section\">\n              <div class=\"section-container\">\n                  <div class=\"text\">\n                      <h2>Change the identifier</h2>\n                      <p>\n                          In order to make the form more confortable for you to manage, you can change the identifier.\n                      </p>\n                  </div>\n                  <div class=\"image-container\">\n                      <img src=\"assets/images/newid.gif\" alt=\"formbaseddocs\">\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/guide/guide.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/guide/guide.component.ts ***!
  \**************************************************/
/*! exports provided: GuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideComponent", function() { return GuideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuideComponent = /** @class */ (function () {
    function GuideComponent() {
    }
    GuideComponent.prototype.ngOnInit = function () {
    };
    GuideComponent.prototype.topMenuNav = function (e) {
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
    GuideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guide',
            template: __webpack_require__(/*! ./guide.component.html */ "./src/app/modules/guide/guide.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GuideComponent);
    return GuideComponent;
}());



/***/ }),

/***/ "./src/app/modules/guide/guide.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/guide/guide.module.ts ***!
  \***********************************************/
/*! exports provided: GuideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideModule", function() { return GuideModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _guide_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guide-routing.module */ "./src/app/modules/guide/guide-routing.module.ts");
/* harmony import */ var _guide_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guide.component */ "./src/app/modules/guide/guide.component.ts");





var GuideModule = /** @class */ (function () {
    function GuideModule() {
    }
    GuideModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_guide_component__WEBPACK_IMPORTED_MODULE_4__["GuideComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _guide_routing_module__WEBPACK_IMPORTED_MODULE_3__["GuideRoutingModule"]
            ]
        })
    ], GuideModule);
    return GuideModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-guide-guide-module.js.map