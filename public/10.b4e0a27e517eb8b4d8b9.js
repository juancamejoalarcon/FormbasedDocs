(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"a7/b":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),i=u("pMnS"),o=u("ZYCi"),r=u("Ip0R"),s=u("ey9i"),c=function(){function l(l,n,u,t){this.userService=l,this.searchService=n,this.formService=u,this.toastr=t,this.listConfig=new s.c,this.loadingQuery=!1,this.results=[],this.limit=20,this.currentPage=1,this.noMoreForms=!1,this.isDeleting=!1,this.listConfigFilled=new s.c,this.loadingQueryFilled=!1,this.resultsFilled=[],this.limitFilled=20,this.currentPageFilled=1,this.noMoreFormsFilled=!1}return l.prototype.ngOnInit=function(){var l=this;this.user=this.userService.getCurrentUser(),this.loadingQuery=!0,this.listConfig.orderBy="Date",this.setListTo("all"),this.searchService.searchProfile(this.listConfig).subscribe(function(n){l.loadingQuery=!1,l.results=n}),this.loadingQueryFilled=!0,this.listConfigFilled.orderBy="Date",this.setListToFilled(),this.searchService.searchFilledForms(this.listConfigFilled).subscribe(function(n){l.loadingQueryFilled=!1,l.resultsFilled=n})},l.prototype.setListTo=function(l){void 0===l&&(l=""),this.listConfig={type:l,limit:this.limit,orderBy:"Date",offset:this.limit*(this.currentPage-1),query:"",author:this.user.username}},l.prototype.setListToFilled=function(){this.listConfigFilled={type:"Filled",limit:this.limit,orderBy:"Date",offset:this.limit*(this.currentPage-1),query:"",filledBy:this.user.username}},l.prototype.moreForms=function(){var l=this;this.loadingQuery=!0,this.setPageTo(),this.limit&&(this.listConfig.limit=this.limit,this.listConfig.offset=this.limit*(this.currentPage-1)),this.searchService.searchProfile(this.listConfig).subscribe(function(n){0!==n.length?l.results=l.results.concat(n):l.noMoreForms=!0,l.loadingQuery=!1})},l.prototype.moreFormsFilled=function(){var l=this;this.loadingQueryFilled=!0,this.setPageToFilled(),this.limitFilled&&(this.listConfigFilled.limit=this.limit,this.listConfigFilled.offset=this.limitFilled*(this.currentPageFilled-1)),this.searchService.searchFilledForms(this.listConfigFilled).subscribe(function(n){0!==n.length?l.resultsFilled=l.resultsFilled.concat(n):l.noMoreFormsFilled=!0,l.loadingQueryFilled=!1})},l.prototype.setPageTo=function(){this.currentPage+=1},l.prototype.setPageToFilled=function(){this.currentPageFilled+=1},l.prototype.setOrder=function(l){var n=this;this.loadingQuery=!0,this.listConfig.offset=0,this.currentPage=1,this.results=[],this.noMoreForms=!1,this.listConfig.orderBy=l,this.searchService.searchProfile(this.listConfig).subscribe(function(l){n.loadingQuery=!1,n.results=l})},l.prototype.setOrderFilled=function(l){var n=this;this.loadingQueryFilled=!0,this.listConfigFilled.offset=0,this.currentPageFilled=1,this.resultsFilled=[],this.noMoreFormsFilled=!1,this.listConfigFilled.orderBy=l,this.searchService.searchFilledForms(this.listConfigFilled).subscribe(function(l){n.loadingQueryFilled=!1,n.resultsFilled=l})},l.prototype.deleteForm=function(l){var n=this;confirm("Are you sure you want to delete?")&&(this.isDeleting=!0,this.formService.destroy(l.slug).subscribe(function(u){n.toastr.success("Deleted",l.title,{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}),n.results=n.results.filter(function(n){return n!==l})}))},l.prototype.deleteFilled=function(l){var n=this;confirm("Are you sure you want to delete?")&&(this.isDeleting=!0,this.formService.destroy(l.slug).subscribe(function(u){n.toastr.success("Deleted",l.title,{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}),n.resultsFilled=n.resultsFilled.filter(function(n){return n!==l})}))},l.prototype.updateForm=function(l,n){var u=this;n[l.srcElement.value]=l.srcElement.checked,this.formService.save(n).subscribe(function(l){u.toastr.success("Has been Updated",l.title,{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"})})},l.prototype.topMenuNav=function(l){l.preventDefault();var n=document.querySelectorAll(".sub-menu-button"),u=document.querySelector(".container"),t=document.querySelectorAll(".content");if("A"===l.target.tagName&&!l.target.classList.contains("current")){n.forEach(function(l){l.parentElement.classList.remove("current")}),l.target.parentElement.classList.add("current");var e=l.target.getAttribute("href");u.classList.add("animation-outro"),u.classList.remove("animation-intro"),setTimeout(function(){t.forEach(function(l){l.style.display=l.id===e?"block":"none"}),u.classList.add("animation-intro"),u.classList.remove("animation-outro")},400)}},l}(),a=u("f4AX"),b=u("TZhc"),d=u("VIHj"),m=u("SZbH"),h=t.ob({encapsulation:2,styles:[],data:{}});function f(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,29,"tr",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,4,"td",[["data-column","Formulario"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.pb(3,671744,null,0,o.o,[o.l,o.a,r.h],{routerLink:[0,"routerLink"]},null),t.Bb(4,2),(l()(),t.Ib(5,null,["",""])),(l()(),t.qb(6,0,null,null,4,"td",[["data-column","Status"]],null,null,null,null,null)),(l()(),t.qb(7,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,0,"input",[["id","status"],["name","status"],["type","checkbox"],["value","enabled"]],[[8,"checked",0]],[[null,"change"]],function(l,n,u){var t=!0;return"change"===n&&(t=!1!==l.component.updateForm(u,l.context.$implicit)&&t),t},null,null)),(l()(),t.qb(9,0,null,null,1,"label",[["for","status"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u2003Activo"])),(l()(),t.qb(11,0,null,null,4,"td",[["data-column","Visibilidad"]],null,null,null,null,null)),(l()(),t.qb(12,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.qb(13,0,null,null,0,"input",[["id","visibility"],["name","visibility"],["type","checkbox"],["value","public"]],[[8,"checked",0]],[[null,"change"]],function(l,n,u){var t=!0;return"change"===n&&(t=!1!==l.component.updateForm(u,l.context.$implicit)&&t),t},null,null)),(l()(),t.qb(14,0,null,null,1,"label",[["for","visibility"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u2003P\xfablico"])),(l()(),t.qb(16,0,null,null,4,"td",[["data-column","Comentarios"]],null,null,null,null,null)),(l()(),t.qb(17,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.qb(18,0,null,null,0,"input",[["id","comentarios"],["name","comentarios"],["type","checkbox"],["value","commentsEnabled"]],[[8,"checked",0]],[[null,"change"]],function(l,n,u){var t=!0;return"change"===n&&(t=!1!==l.component.updateForm(u,l.context.$implicit)&&t),t},null,null)),(l()(),t.qb(19,0,null,null,1,"label",[["for","comentarios"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u2003Comentarios"])),(l()(),t.qb(21,0,null,null,1,"td",[["data-column","Likes"]],null,null,null,null,null)),(l()(),t.Ib(22,null,["",""])),(l()(),t.qb(23,0,null,null,1,"td",[["data-column","Visualizaciones"]],null,null,null,null,null)),(l()(),t.Ib(24,null,["",""])),(l()(),t.qb(25,0,null,null,2,"td",[["data-column","Actualizado"]],null,null,null,null,null)),(l()(),t.Ib(26,null,["",""])),t.Eb(27,2),(l()(),t.qb(28,0,null,null,1,"td",[["data-column","Eliminar"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteForm(l.context.$implicit)&&t),t},null,null)),(l()(),t.qb(29,0,null,null,0,"span",[["class","icon icon-trash-alt-regular delete"]],null,null,null,null,null))],function(l,n){var u=l(n,4,0,"/create-form/edit",n.context.$implicit.slug);l(n,3,0,u)},function(l,n){l(n,2,0,t.Ab(n,3).target,t.Ab(n,3).href),l(n,5,0,n.context.$implicit.title),l(n,8,0,n.context.$implicit.enabled),l(n,13,0,n.context.$implicit.public),l(n,18,0,n.context.$implicit.commentsEnabled),l(n,22,0,n.context.$implicit.likesCount),l(n,24,0,n.context.$implicit.viewsCount);var u=t.Jb(n,26,0,l(n,27,0,t.Ab(n.parent,0),n.context.$implicit.updatedAt,"dd/MM/yyyy"));l(n,26,0,u)})}function p(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,2,"span",[["class","load-more-my-forms"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"button",[["class","load-more-button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.moreForms()&&t),t},null,null)),(l()(),t.Ib(-1,null,["Cargar m\xe1s"]))],null,null)}function g(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,2,"div",[["class","noMoreForms"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["- No more forms to load -"]))],null,null)}function y(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,4,"td",[["data-column","Formulario"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.pb(3,671744,null,0,o.o,[o.l,o.a,r.h],{routerLink:[0,"routerLink"]},null),t.Bb(4,2),(l()(),t.Ib(5,null,[" "," "])),(l()(),t.qb(6,0,null,null,1,"td",[["data-column","Eliminar"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteFilled(l.context.$implicit)&&t),t},null,null)),(l()(),t.qb(7,0,null,null,0,"span",[["class","icon icon-trash-alt-regular delete"]],null,null,null,null,null))],function(l,n){var u=l(n,4,0,"/fill-form/edit",n.context.$implicit.slug);l(n,3,0,u)},function(l,n){l(n,2,0,t.Ab(n,3).target,t.Ab(n,3).href),l(n,5,0,n.context.$implicit.title)})}function F(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,2,"span",[["class","load-more-my-forms"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"button",[["class","load-more-button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.moreFormsFilled()&&t),t},null,null)),(l()(),t.Ib(-1,null,["Cargar m\xe1s"]))],null,null)}function v(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,2,"div",[["class","noMoreForms"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["- No more forms to load -"]))],null,null)}function q(l){return t.Kb(0,[t.Cb(0,r.d,[t.v]),(l()(),t.qb(1,0,null,null,8,"div",[["id","sub-menu"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,7,"div",[["class","sub-menu-container sub-menu-container-myforms"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,6,"ul",[["class","sub-menu-nav"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.topMenuNav(u)&&t),t},null,null)),(l()(),t.qb(4,0,null,null,2,"li",[["class","current"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"a",[["class","sub-menu-button"],["href","created"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Created"])),(l()(),t.qb(7,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,1,"a",[["class","sub-menu-button"],["href","filled"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Filled"])),(l()(),t.qb(10,0,null,null,44,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.qb(11,0,null,null,29,"div",[["class","content"],["id","created"]],null,null,null,null,null)),(l()(),t.qb(12,0,null,null,20,"table",[],null,null,null,null,null)),(l()(),t.qb(13,0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),t.qb(14,0,null,null,15,"tr",[],null,null,null,null,null)),(l()(),t.qb(15,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Formulario"])),(l()(),t.qb(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Status"])),(l()(),t.qb(19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Visibilidad"])),(l()(),t.qb(21,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Comentarios"])),(l()(),t.qb(23,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Likes"])),(l()(),t.qb(25,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Visualizaciones"])),(l()(),t.qb(27,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Actualizado"])),(l()(),t.qb(29,0,null,null,0,"th",[],null,null,null,null,null)),(l()(),t.qb(30,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,f)),t.pb(32,278528,null,0,r.j,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.hb(16777216,null,null,1,null,p)),t.pb(34,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,g)),t.pb(36,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(37,0,null,null,3,"div",[["class","loader"]],[[4,"display",null]],null,null,null,null)),(l()(),t.qb(38,0,null,null,2,":svg:svg",[[":xml:space","preserve"],[":xmlns:xlink","http://www.w3.org/1999/xlink"],["height","80px"],["id","loader-1"],["style","enable-background:new 0 0 50 50;"],["version","1.1"],["viewBox","0 0 50 50"],["width","80px"],["x","0px"],["xmlns","http://www.w3.org/2000/svg"],["y","0px"]],null,null,null,null,null)),(l()(),t.qb(39,0,null,null,1,":svg:path",[["d","M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"],["fill","#000"]],null,null,null,null,null)),(l()(),t.qb(40,0,null,null,0,":svg:animateTransform",[["attributeName","transform"],["attributeType","xml"],["dur","0.6s"],["from","0 25 25"],["repeatCount","indefinite"],["to","360 25 25"],["type","rotate"]],null,null,null,null,null)),(l()(),t.qb(41,0,null,null,13,"div",[["class","content"],["id","filled"]],null,null,null,null,null)),(l()(),t.qb(42,0,null,null,8,"table",[],null,null,null,null,null)),(l()(),t.qb(43,0,null,null,4,"thead",[],null,null,null,null,null)),(l()(),t.qb(44,0,null,null,3,"tr",[],null,null,null,null,null)),(l()(),t.qb(45,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Formulario"])),(l()(),t.qb(47,0,null,null,0,"th",[],null,null,null,null,null)),(l()(),t.qb(48,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,y)),t.pb(50,278528,null,0,r.j,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.hb(16777216,null,null,1,null,F)),t.pb(52,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,v)),t.pb(54,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,32,0,u.results),l(n,34,0,!1===u.noMoreForms),l(n,36,0,!0===u.noMoreForms),l(n,50,0,u.resultsFilled),l(n,52,0,!1===u.noMoreFormsFilled),l(n,54,0,!0===u.noMoreFormsFilled)},function(l,n){l(n,37,0,n.component.loadingQuery?"flex":"none")})}function k(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-my-forms",[],null,null,null,q,h)),t.pb(1,114688,null,0,c,[a.a,b.a,d.a,m.j],null,null)],function(l,n){l(n,1,0)},null)}var C=t.mb("app-my-forms",c,k,{},{},[]),I=function(){return function(){}}(),x=u("ecC8");u.d(n,"MyFormsModuleNgFactory",function(){return M});var M=t.nb(e,[],function(l){return t.xb([t.yb(512,t.j,t.cb,[[8,[i.a,C]],[3,t.j],t.y]),t.yb(4608,r.m,r.l,[t.v,[2,r.s]]),t.yb(1073742336,r.b,r.b,[]),t.yb(1073742336,o.p,o.p,[[2,o.v],[2,o.l]]),t.yb(1073742336,I,I,[]),t.yb(1073742336,e,e,[]),t.yb(1024,o.j,function(){return[[{path:"",component:c,canActivate:[x.a]}]]},[])])})}}]);