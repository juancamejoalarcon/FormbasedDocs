(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{VtOq:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),i=u("SizQ"),o=u("f1M8"),r=u("KCa2"),a=u("g6Sl"),s=u("pUM3"),c=u("2xeN"),d=u("SK3e"),b=u("a+cq"),p=u("pMnS"),m=u("19fH"),f=u("Yi7+"),g=u("boqk"),v=u("i969"),h=u("2kAz"),q=u("r10Q"),A=u("Ip0R"),y=u("Nu1n"),C=u("fbZM"),k=u("ZYCi"),D=u("HatX"),I=u("SZbH"),x=u("lnN7"),S=u("Z+Mw"),E=u("ZYjt"),F=u("gIcY"),w=u("+Sai"),N=u("vWSW"),T=u("ey9i"),P=u("PCNd"),B=(u("Hfiq"),u("eQf+"),u("1eTr"),u("H5PF"),u("U/5H")),M=u("k7+O"),j=function(){function l(l,n,u,t,e,i,o,r,a){this.componentInjectorService=l,this.elementRef=n,this.renderer=u,this.formService=t,this.commonsService=e,this.route=i,this.router=o,this.fb=r,this.toastr=a,this.inputs=[m.a,g.a,h.a,q.a],this.quillText="",this.injectedComponents=[],this.isButtonDisabled=!1,this.form=new T.b,this.tags=new F.f,this.fields=[],this.errors={},this.isSubmitting=!1,this.updatingForm=!1,this.isDeleting=!1,this.isNewForm=!1,this.isFormValid=!1,this.formGroup=this.fb.group({title:["",F.s.required],description:["",F.s.required],indications:"",public:new F.f(!0),commentsEnabled:new F.f(!0),enabled:new F.f(!0)})}return l.prototype.ngOnInit=function(){var l=this;this.route.data.subscribe(function(n){if(n.form){l.quillText=n.form.text,l.textPreview=n.form.text,l.form=n.form,l.formGroup.patchValue(n.form),l.fields=l.form.fields;for(var u=0,t=l.form.fields;u<t.length;u++){var e=t[u];e.id=e.type+e.referenceNumber}l.updatingForm=!0,l.state="editAuthor"}else l.state="newAuthor",l.updatingForm=!1}),this.quillConfig()},l.prototype.ngAfterViewInit=function(){this.setDivHeight(),window.addEventListener("resize",this.setDivHeight),this.enableSortablejs()},l.prototype.injectComponent=function(l){this.componentInjectorService.appendComponentToBody("Component",l,"formAreaDiv","formAreaDiv","divWhereIsDeleteButton",{}),this.injectedComponents=this.formAreaDiv.nativeElement.querySelectorAll(".inputCollection")},l.prototype.preview=function(){this.commonsService.replaceClassDnoneForDblock(this.formBasedDocDiv),this.commonsService.replaceClassDnoneflexForDflex(this.formBasedDocDiv),this.commonsService.replaceClassDnonegridForDgrid(this.formBasedDocDiv),this.commonsService.replaceOtherClasses(this.formBasedDocDiv)},l.prototype.generateText=function(){this.injectedComponents=this.formAreaDiv.nativeElement.querySelectorAll(".inputCollection");var l={};this.form.fields=[];for(var n=function(n){if(u.checkIfParentIsCurrentDiv(n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)){if(n.id.includes("iText")){var t=n.id.replace("iText","");n===document.activeElement?l["focused"+t]=[n.value]:l[t]=[n.value];var e={type:"iText",referenceNumber:t,question:u.formAreaDiv.nativeElement.querySelector(".question"+t).value,indications:u.formAreaDiv.nativeElement.querySelector(".indications"+t).value,mandatory:u.formAreaDiv.nativeElement.querySelector(".mandatory"+t).checked};u.form.fields.push(e)}if(!0===n.id.includes("iRadioA")){for(var i='input[name="name'+(t=n.id.replace("iRadioA",""))+'"]',o=0,r=(d=u.formAreaDiv.nativeElement.querySelector("#"+n.id).querySelectorAll(i)).length;o<r;o++)if(d[o].checked){d[o]===document.activeElement?l["focused"+t]=[d[o].value]:l[t]=[d[o].value];break}e={type:"iRadioA",referenceNumber:t,radios:Array.prototype.slice.call(d).map(function(l){return l.value}),question:u.formAreaDiv.nativeElement.querySelector(".question"+t).value,indications:u.formAreaDiv.nativeElement.querySelector(".indications"+t).value,mandatory:u.formAreaDiv.nativeElement.querySelector(".mandatory"+t).checked},u.form.fields.push(e)}if(!0===n.id.includes("iRadioB")){for(var a=n.id.replace("iRadioB",""),s='input[name="name'+a+'"]',c=(o=0,(d=u.formAreaDiv.nativeElement.querySelector("#"+n.id).querySelectorAll(s)).length);o<c;o++)if(d[o].checked){d[o]===document.activeElement?l["focused"+a]=[d[o].parentNode.parentNode.querySelector(".name"+a).value]:l[a]=[d[o].parentNode.parentNode.querySelector(".name"+a).value];break}e={type:"iRadioB",referenceNumber:a,radios:Array.prototype.slice.call(d).map(function(l){return{radio:l.value,value:l.parentNode.parentNode.querySelector(".name"+a).value,referenceNumber:a}}),question:u.formAreaDiv.nativeElement.querySelector(".question"+a).value,indications:u.formAreaDiv.nativeElement.querySelector(".indications"+a).value,mandatory:u.formAreaDiv.nativeElement.querySelector(".mandatory"+a).checked},u.form.fields.push(e)}if(!0===n.id.includes("iRadioC")){for(var d,b=n.id.replace("iRadioC",""),p=(o=0,(d=u.formAreaDiv.nativeElement.querySelectorAll('input[name="name'+b+'"]')).length);o<p;o++)if(d[o].checked){l[b]=[d[o].getAttribute("data-texto")];break}e={type:"iRadioC",referenceNumber:b,radios:Array.prototype.slice.call(d).map(function(l){return{radio:l.value,value:l.getAttribute("data-contentToExport"),referenceNumber:b,randomId:l.id}}),question:u.formAreaDiv.nativeElement.querySelector(".question"+b).value,indications:u.formAreaDiv.nativeElement.querySelector(".indications"+b).value,mandatory:u.formAreaDiv.nativeElement.querySelector(".mandatory"+b).checked},u.form.fields.push(e)}}},u=this,t=0,e=this.injectedComponents;t<e.length;t++)n(e[t]);var i=0===Object.entries(l).length&&l.constructor===Object;for(this.textPreview=i?this.quillText:this.commonsService.replaceIdsWithValues(l,this.quillText);this.textPreviewDiv.nativeElement.firstChild;)this.textPreviewDiv.nativeElement.removeChild(this.textPreviewDiv.nativeElement.firstChild);this.textPreviewDiv.nativeElement.insertAdjacentHTML("beforeend",this.textPreview);var o=document.getElementById("focused");o&&o.scrollIntoView({behavior:"smooth"})},l.prototype.checkIfParentIsCurrentDiv=function(l,n,u,t){return!!(l.id.includes("formAreaDiv")||n.id.includes("formAreaDiv")||u.id.includes("formAreaDiv")||t.id.includes("formAreaDiv"))},l.prototype.addTag=function(){var l=this.tags.value;this.form.tags.indexOf(l)<0&&this.form.tags.push(l),this.tags.reset("")},l.prototype.removeTag=function(l){this.form.tags=this.form.tags.filter(function(n){return n!==l})},l.prototype.updateAuthorForm=function(l){Object.assign(this.form,l)},l.prototype.submitForm=function(){var l=this;this.validate()&&(this.injectedComponents||this.updatingForm?(this.generateText(),this.form.text=this.quillText,this.isSubmitting=!0,this.updateAuthorForm(this.formGroup.value),this.formService.save(this.form).subscribe(function(n){l.updatingForm?l.toastr.success("Has been updated",n.title,{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}):(l.toastr.success("Has been created",n.title,{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}),l.router.navigateByUrl("/create-form/edit/"+n.slug)),l.isSubmitting=!1},function(n){l.errors=n,l.isSubmitting=!1})):alert("Form is empty"))},l.prototype.validate=function(){return 0===this.form.fields.length?(this.linkFormButton.nativeElement.click(),this.toastr.error("There are no fields in the form","Form empty",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}),!1):this.formGroup.controls.title.invalid?(this.isFormValid=!1,this.title.nativeElement.classList.add("input-error"),this.linkInformationButton.nativeElement.click(),this.toastr.error("Title is not valid","Form empty",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}),!1):(this.title.nativeElement.classList.remove("input-error"),this.formGroup.controls.description.invalid?(this.isFormValid=!1,this.description.nativeElement.classList.add("input-error"),this.linkInformationButton.nativeElement.click(),this.toastr.error("Description is not valid","Form empty",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}),!1):(this.description.nativeElement.classList.remove("input-error"),!0))},l.prototype.validateDescription=function(l){l.target.value.length>400&&(l.target.value=l.target.value.substring(0,400))},l.prototype.deleteForm=function(){var l=this;confirm("Are you sure you want to delete?")&&(this.isDeleting=!0,this.formService.destroy(this.form.slug).subscribe(function(n){l.toastr.success("Has been deleted",l.form.title,{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}),l.router.navigateByUrl("/")}))},l.prototype.quillConfig=function(){this.customOptions=[{import:"formats/font",whitelist:["roboto","times-new-roman","arial","lato","montserrat"]}],this.quillModules={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:["black","grey","#556270","#4ECDC4","#C44D58","#FF6B6B","#C7F464"]},{background:[]}],[{font:["","roboto","times-new-roman","arial","lato","montserrat"]}],[{align:[]}],["clean"]]}},l.prototype.setDivHeight=function(){if(window.innerWidth>885&&null!==document.querySelector("#form-creator")){var l=window.innerHeight-document.querySelector("#form-creator").offsetTop+"px",n=document.querySelector(".ql-toolbar").offsetTop,u=document.querySelector(".ql-toolbar").offsetHeight,t=window.innerHeight-(n+u)+"px";document.querySelector("#form-creator").style.height=l,document.querySelector("#editor-container").style.height=t}},l.prototype.topMenuNav=function(l){l.preventDefault();var n=document.querySelectorAll(".sub-menu-button"),u=document.querySelector(".container"),t=document.querySelectorAll(".content");if("A"===l.target.tagName&&!l.target.classList.contains("current")){n.forEach(function(l){l.parentElement.classList.remove("current")}),l.target.parentElement.classList.add("current");var e=l.target.getAttribute("href");u.classList.add("animation-outro"),u.classList.remove("animation-intro"),setTimeout(function(){t.forEach(function(l){l.style.display=l.id===e?"flex":"none"}),u.classList.add("animation-intro"),u.classList.remove("animation-outro")},400)}},l.prototype.toogleQuestionMenu=function(l){var n=document.querySelector("#form-creator").offsetTop;this.addQuestionMenuDiv.nativeElement.style.transform=this.addQuestionMenuDiv.nativeElement.offsetTop<n?"translateY("+n+"px)":"translateY(0px)","block"===this.addQuestionMenuDiv.nativeElement.style.display?(l.target.classList.contains("close-question-menu")||"BUTTON"===l.target.tagName)&&(this.addQuestionMenuDiv.nativeElement.style.display="none",this.addQuestionMenuDiv.nativeElement.classList.remove("smooth-intro")):(this.addQuestionMenuDiv.nativeElement.style.display="block",this.addQuestionMenuDiv.nativeElement.classList.add("smooth-intro"))},l.prototype.enableSortablejs=function(){var l=document.querySelector("#formAreaDiv");B.create(l,{handle:".dragAndDropBotton",scrollSensitivity:200,scroll:!0,ghostClass:"ghost",animation:300,fallbackTolerance:40,dragClass:"sortable-drag"})},l.prototype.enableFullScreen=function(l){var n=document.getElementById(l);M&&M.enabled&&M.request(n)},l}(),O=u("VIHj"),G=t.ob({encapsulation:2,styles:[],data:{}});function L(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"a",[["class","sub-menu-button"],["href","comments"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Comments"]))],null,null)}function R(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-input-text",[],null,null,null,i.c,i.b)),t.pb(1,4308992,null,0,m.a,[f.a],{state:[0,"state"],field:[1,"field"]},null)],function(l,n){l(n,1,0,n.component.state,n.parent.context.$implicit)},null)}function V(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-input-radio-a",[],null,null,null,o.c,o.b)),t.pb(1,4308992,null,0,g.a,[f.a,v.a],{state:[0,"state"],field:[1,"field"]},null)],function(l,n){l(n,1,0,n.component.state,n.parent.context.$implicit)},null)}function H(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-input-radio-b",[],null,null,null,a.c,a.b)),t.pb(1,4308992,null,0,h.a,[f.a,v.a],{state:[0,"state"],field:[1,"field"]},null)],function(l,n){l(n,1,0,n.component.state,n.parent.context.$implicit)},null)}function U(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-input-radio-c",[],null,null,null,c.c,c.b)),t.pb(1,4308992,null,0,q.a,[f.a,v.a],{state:[0,"state"],field:[1,"field"]},null)],function(l,n){l(n,1,0,n.component.state,n.parent.context.$implicit)},null)}function K(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,R)),t.pb(2,16384,null,0,A.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,V)),t.pb(4,16384,null,0,A.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,H)),t.pb(6,16384,null,0,A.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,U)),t.pb(8,16384,null,0,A.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,"iText"==n.context.$implicit.type),l(n,4,0,"iRadioA"==n.context.$implicit.type),l(n,6,0,"iRadioB"==n.context.$implicit.type),l(n,8,0,"iRadioC"==n.context.$implicit.type)},null)}function Q(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,K)),t.pb(2,278528,null,0,A.j,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.fields)},null)}function _(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,3,"button",[["class","button-delete-editor"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteForm()&&t),t},null,null)),t.pb(1,278528,null,0,A.i,[t.t,t.u,t.k,t.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Db(2,{disabled:0}),(l()(),t.qb(3,0,null,null,0,"span",[["class","icon icon-trash-alt-regular"]],null,null,null,null,null))],function(l,n){var u=l(n,2,0,n.component.isDeleting);l(n,1,0,"button-delete-editor",u)},null)}function $(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,3,"span",[["class","tag"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,2,"span",[["class","tag-container"]],null,null,null,null,null)),(l()(),t.Ib(2,null,[" "," "])),(l()(),t.qb(3,0,null,null,0,"span",[["class","icon icon-times-solid"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.removeTag(l.context.$implicit)&&t),t},null,null))],null,function(l,n){l(n,2,0,n.context.$implicit)})}function Y(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,3,"button",[["class","save-button button-delete"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteForm()&&t),t},null,null)),t.pb(1,278528,null,0,A.i,[t.t,t.u,t.k,t.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Db(2,{disabled:0}),(l()(),t.qb(3,0,null,null,0,"span",[["class","icon icon-trash-alt-regular"]],null,null,null,null,null))],function(l,n){var u=l(n,2,0,n.component.isDeleting);l(n,1,0,"save-button button-delete",u)},null)}function Z(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,2,"div",[["class","content"],["id","comments"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"app-comments",[["class","comments"]],null,null,null,y.b,y.a)),t.pb(2,114688,null,0,C.a,[k.l,t.k,D.a,I.j],{form:[0,"form"]},null)],function(l,n){l(n,2,0,n.component.form)},null)}function W(l){return t.Kb(0,[t.Gb(402653184,1,{quill:0}),t.Gb(402653184,2,{formAreaDiv:0}),t.Gb(402653184,3,{formBasedDocDiv:0}),t.Gb(402653184,4,{inputsMenuDiv:0}),t.Gb(402653184,5,{textPreviewDiv:0}),t.Gb(402653184,6,{addQuestionMenuDiv:0}),t.Gb(402653184,7,{linkFormButton:0}),t.Gb(402653184,8,{linkInformationButton:0}),t.Gb(402653184,9,{title:0}),t.Gb(402653184,10,{description:0}),(l()(),t.qb(10,0,null,null,20,"div",[["id","sub-menu"]],null,null,null,null,null)),(l()(),t.qb(11,0,null,null,19,"div",[["class","sub-menu-container"]],null,null,null,null,null)),(l()(),t.qb(12,0,null,null,3,"div",[["class","sub-menu-left-button"]],null,null,null,null,null)),(l()(),t.qb(13,0,null,null,2,"button",[["class","button"],["routerLink","/guide"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,14).onClick()&&e),e},null,null)),t.pb(14,16384,null,0,k.m,[k.l,k.a,[8,null],t.E,t.k],{routerLink:[0,"routerLink"]},null),(l()(),t.Ib(-1,null,["Guide"])),(l()(),t.qb(16,0,null,null,8,"ul",[["class","sub-menu-nav"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.topMenuNav(u)&&t),t},null,null)),(l()(),t.qb(17,0,null,null,2,"li",[["class","current"]],null,null,null,null,null)),(l()(),t.qb(18,0,[[7,0],["linkFormButton",1]],null,1,"a",[["class","sub-menu-button"],["href","form-creator"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Form"])),(l()(),t.qb(20,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.qb(21,0,[[8,0],["linkInformationButton",1]],null,1,"a",[["class","sub-menu-button"],["href","information"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Information"])),(l()(),t.hb(16777216,null,null,1,null,L)),t.pb(24,16384,null,0,A.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(25,0,null,null,5,"div",[["class","sub-menu-right-button"]],null,null,null,null,null)),(l()(),t.qb(26,0,null,null,1,"span",[["class","sub-menu-right-button"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Preview"])),(l()(),t.qb(28,0,null,null,2,"label",[["class","switch"]],null,null,null,null,null)),(l()(),t.qb(29,0,null,null,0,"input",[["type","checkbox"]],null,[[null,"change"]],function(l,n,u){var t=!0,e=l.component;return"change"===n&&(e.preview(),t=!1!==e.generateText()&&t),t},null,null)),(l()(),t.qb(30,0,null,null,0,"span",[["class","slider round"]],null,null,null,null,null)),(l()(),t.qb(31,0,[[3,0],["formBasedDocDiv",1]],null,141,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.qb(32,0,[["formCreatorDiv",1]],null,52,"div",[["class","form-creator content"],["id","form-creator"]],null,null,null,null,null)),(l()(),t.qb(33,0,null,null,51,"div",[["class","form-creator-container"]],null,null,null,null,null)),(l()(),t.qb(34,0,null,null,30,"div",[["class","fields-area"]],null,null,null,null,null)),(l()(),t.qb(35,0,[[2,0],["formAreaDiv",1]],null,2,"div",[["class","fields-container"],["id","formAreaDiv"]],null,[[null,"keyup"],[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"keyup"===n&&(t=!1!==e.generateText()&&t),"click"===n&&(t=!1!==e.generateText()&&t),t},null,null)),(l()(),t.hb(16777216,null,null,1,null,Q)),t.pb(37,16384,null,0,A.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(38,0,null,null,26,"div",[["class","add-question-button d-block"]],null,null,null,null,null)),(l()(),t.qb(39,0,null,null,25,"div",[["class","tooltip"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toogleQuestionMenu(u)&&t),t},null,null)),(l()(),t.qb(40,0,null,null,0,"span",[["class","icon icon-plus-solid"],["id","add-question-button"]],null,null,null,null,null)),(l()(),t.qb(41,0,[[6,0],["addQuestionMenuDiv",1]],null,23,"span",[["class","add-question-menu"]],null,null,null,null,null)),(l()(),t.qb(42,0,null,null,0,"span",[["class","icon icon-times-solid close-question-menu"]],null,null,null,null,null)),(l()(),t.qb(43,0,null,null,5,"div",[["class","group"]],null,null,null,null,null)),(l()(),t.qb(44,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Text"])),(l()(),t.qb(46,0,null,null,2,"div",[["class","buttons-group"]],null,null,null,null,null)),(l()(),t.qb(47,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.injectComponent(e.inputs[0])&&t),t},null,null)),(l()(),t.Ib(-1,null,["Text"])),(l()(),t.qb(49,0,null,null,9,"div",[["class","group"]],null,null,null,null,null)),(l()(),t.qb(50,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Radio"])),(l()(),t.qb(52,0,null,null,6,"div",[["class","buttons-group"]],null,null,null,null,null)),(l()(),t.qb(53,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.injectComponent(e.inputs[1])&&t),t},null,null)),(l()(),t.Ib(-1,null,["Radio a"])),(l()(),t.qb(55,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.injectComponent(e.inputs[2])&&t),t},null,null)),(l()(),t.Ib(-1,null,["Radio b"])),(l()(),t.qb(57,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.injectComponent(e.inputs[3])&&t),t},null,null)),(l()(),t.Ib(-1,null,["Radio c"])),(l()(),t.qb(59,0,null,null,5,"div",[["class","group"]],null,null,null,null,null)),(l()(),t.qb(60,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Others"])),(l()(),t.qb(62,0,null,null,2,"div",[["class","buttons-group"]],null,null,null,null,null)),(l()(),t.qb(63,0,null,null,1,"button",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Date"])),(l()(),t.qb(65,0,null,null,19,"div",[["class","text-area"]],null,null,null,null,null)),(l()(),t.qb(66,0,null,null,5,"div",[["class","d-flex"],["id","expand-editor-button"]],null,null,null,null,null)),(l()(),t.qb(67,0,null,null,0,"span",[["class","icon icon-expand-solid"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.enableFullScreen("editor-container")&&t),t},null,null)),(l()(),t.qb(68,0,null,null,1,"button",[["class","save-button-editor"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.submitForm()&&t),t},null,null)),(l()(),t.qb(69,0,null,null,0,"span",[["class","icon icon-save-regular"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,_)),t.pb(71,16384,null,0,A.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(72,0,null,null,1,"div",[["class","d-none-flex"],["id","expand-editor-button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.enableFullScreen("editor-preview")&&t),t},null,null)),(l()(),t.qb(73,0,null,null,0,"span",[["class","icon icon-expand-solid"]],null,null,null,null,null)),(l()(),t.qb(74,0,null,null,8,"div",[["class","d-block"],["id","editor-container"]],null,null,null,null,null)),(l()(),t.qb(75,0,null,null,7,"quill-editor",[["id","editor"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"onContentChanged"]],function(l,n,u){var t=!0;return"onContentChanged"===n&&(t=!1!==(l.component.quillText=u.html)&&t),t},x.b,x.a)),t.pb(76,4898816,[[1,4],["quill",4]],0,S.b,[t.k,E.c,A.c,t.C,t.E,t.A,S.a],{modules:[0,"modules"],customOptions:[1,"customOptions"]},{onContentChanged:"onContentChanged"}),t.Fb(1024,null,F.k,function(l){return[l]},[S.b]),t.Fb(1024,null,F.l,function(l){return[l]},[S.b]),t.pb(79,671744,null,0,F.p,[[8,null],[6,F.k],[8,null],[6,F.l]],{model:[0,"model"],options:[1,"options"]},null),t.Db(80,{standalone:0}),t.Fb(2048,null,F.m,null,[F.p]),t.pb(82,16384,null,0,F.n,[[4,F.m]],null,null),(l()(),t.qb(83,0,[[5,0],["textPreviewDiv",1]],null,1,"div",[["class","d-none ql-editor textToGeneratePreview"],["id","editor-preview"]],null,null,null,null,null)),(l()(),t.Ib(84,null,["",""])),(l()(),t.qb(85,0,null,null,85,"div",[["class","content"],["id","information"]],null,null,null,null,null)),(l()(),t.qb(86,0,null,null,1,"app-list-errors",[["class","information-error"]],null,null,null,w.b,w.a)),t.pb(87,49152,null,0,N.a,[],{errors:[0,"errors"]},null),(l()(),t.qb(88,0,null,null,77,"form",[["class","information"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Ab(l,90).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Ab(l,90).onReset()&&e),e},null,null)),t.pb(89,16384,null,0,F.u,[],null,null),t.pb(90,540672,null,0,F.i,[[8,null],[8,null]],{form:[0,"form"]},null),t.Fb(2048,null,F.c,null,[F.i]),t.pb(92,16384,null,0,F.o,[[4,F.c]],null,null),(l()(),t.qb(93,0,null,null,72,"div",[["class","information-container"]],null,null,null,null,null)),(l()(),t.qb(94,0,null,null,18,"div",[["class","section-left"]],null,null,null,null,null)),(l()(),t.qb(95,0,[[9,0],["title",1]],null,5,"input",[["formControlName","title"],["placeholder","T\xedtulo"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Ab(l,96)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,96).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,96)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,96)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(96,16384,null,0,F.d,[t.E,t.k,[2,F.a]],null,null),t.Fb(1024,null,F.l,function(l){return[l]},[F.d]),t.pb(98,671744,null,0,F.h,[[3,F.c],[8,null],[8,null],[6,F.l],[2,F.w]],{name:[0,"name"]},null),t.Fb(2048,null,F.m,null,[F.h]),t.pb(100,16384,null,0,F.n,[[4,F.m]],null,null),(l()(),t.qb(101,0,[[10,0],["description",1]],null,5,"textarea",[["cols","30"],["formControlName","description"],["id","description"],["name","description"],["placeholder","description"],["rows","6"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Ab(l,102)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,102).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,102)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,102)._compositionEnd(u.target.value)&&e),"keyup"===n&&(e=!1!==i.validateDescription(u)&&e),e},null,null)),t.pb(102,16384,null,0,F.d,[t.E,t.k,[2,F.a]],null,null),t.Fb(1024,null,F.l,function(l){return[l]},[F.d]),t.pb(104,671744,null,0,F.h,[[3,F.c],[8,null],[8,null],[6,F.l],[2,F.w]],{name:[0,"name"]},null),t.Fb(2048,null,F.m,null,[F.h]),t.pb(106,16384,null,0,F.n,[[4,F.m]],null,null),(l()(),t.qb(107,0,null,null,5,"textarea",[["cols","30"],["formControlName","indications"],["id","indications"],["name","indications"],["placeholder","indications"],["rows","10"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Ab(l,108)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,108).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,108)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,108)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(108,16384,null,0,F.d,[t.E,t.k,[2,F.a]],null,null),t.Fb(1024,null,F.l,function(l){return[l]},[F.d]),t.pb(110,671744,null,0,F.h,[[3,F.c],[8,null],[8,null],[6,F.l],[2,F.w]],{name:[0,"name"]},null),t.Fb(2048,null,F.m,null,[F.h]),t.pb(112,16384,null,0,F.n,[[4,F.m]],null,null),(l()(),t.qb(113,0,null,null,52,"div",[["class","section-right"]],null,null,null,null,null)),(l()(),t.qb(114,0,null,null,9,"div",[["class","information-tags"]],null,null,null,null,null)),(l()(),t.qb(115,0,null,null,5,"input",[["placeholder","tags"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Ab(l,116)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,116).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,116)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,116)._compositionEnd(u.target.value)&&e),"keyup.enter"===n&&(e=!1!==i.addTag()&&e),e},null,null)),t.pb(116,16384,null,0,F.d,[t.E,t.k,[2,F.a]],null,null),t.Fb(1024,null,F.l,function(l){return[l]},[F.d]),t.pb(118,540672,null,0,F.g,[[8,null],[8,null],[6,F.l],[2,F.w]],{form:[0,"form"]},null),t.Fb(2048,null,F.m,null,[F.g]),t.pb(120,16384,null,0,F.n,[[4,F.m]],null,null),(l()(),t.qb(121,0,null,null,2,"div",[["class","tags-container"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,$)),t.pb(123,278528,null,0,A.j,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(124,0,null,null,33,"div",[["class","information-buttons"]],null,null,null,null,null)),(l()(),t.qb(125,0,null,null,10,"div",[["class","information-switch-button"]],null,null,null,null,null)),(l()(),t.qb(126,0,null,null,7,"label",[["class","switch"]],null,null,null,null,null)),(l()(),t.qb(127,0,null,null,5,"input",[["checked",""],["formControlName","public"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t.Ab(l,128).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==t.Ab(l,128).onTouched()&&e),e},null,null)),t.pb(128,16384,null,0,F.b,[t.E,t.k],null,null),t.Fb(1024,null,F.l,function(l){return[l]},[F.b]),t.pb(130,671744,null,0,F.h,[[3,F.c],[8,null],[8,null],[6,F.l],[2,F.w]],{name:[0,"name"]},null),t.Fb(2048,null,F.m,null,[F.h]),t.pb(132,16384,null,0,F.n,[[4,F.m]],null,null),(l()(),t.qb(133,0,null,null,0,"span",[["class","slider round"]],null,null,null,null,null)),(l()(),t.qb(134,0,null,null,1,"span",[["class","information-switch-button-label"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Formulario p\xfablico "])),(l()(),t.qb(136,0,null,null,10,"div",[["class","information-switch-button"]],null,null,null,null,null)),(l()(),t.qb(137,0,null,null,7,"label",[["class","switch"]],null,null,null,null,null)),(l()(),t.qb(138,0,null,null,5,"input",[["checked",""],["formControlName","commentsEnabled"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t.Ab(l,139).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==t.Ab(l,139).onTouched()&&e),e},null,null)),t.pb(139,16384,null,0,F.b,[t.E,t.k],null,null),t.Fb(1024,null,F.l,function(l){return[l]},[F.b]),t.pb(141,671744,null,0,F.h,[[3,F.c],[8,null],[8,null],[6,F.l],[2,F.w]],{name:[0,"name"]},null),t.Fb(2048,null,F.m,null,[F.h]),t.pb(143,16384,null,0,F.n,[[4,F.m]],null,null),(l()(),t.qb(144,0,null,null,0,"span",[["class","slider round"]],null,null,null,null,null)),(l()(),t.qb(145,0,null,null,1,"span",[["class","information-switch-button-label"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Comentarios activos "])),(l()(),t.qb(147,0,null,null,10,"div",[["class","information-switch-button"]],null,null,null,null,null)),(l()(),t.qb(148,0,null,null,7,"label",[["class","switch"]],null,null,null,null,null)),(l()(),t.qb(149,0,null,null,5,"input",[["checked",""],["formControlName","enabled"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t.Ab(l,150).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==t.Ab(l,150).onTouched()&&e),e},null,null)),t.pb(150,16384,null,0,F.b,[t.E,t.k],null,null),t.Fb(1024,null,F.l,function(l){return[l]},[F.b]),t.pb(152,671744,null,0,F.h,[[3,F.c],[8,null],[8,null],[6,F.l],[2,F.w]],{name:[0,"name"]},null),t.Fb(2048,null,F.m,null,[F.h]),t.pb(154,16384,null,0,F.n,[[4,F.m]],null,null),(l()(),t.qb(155,0,null,null,0,"span",[["class","slider round"]],null,null,null,null,null)),(l()(),t.qb(156,0,null,null,1,"span",[["class","information-switch-button-label"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Formulario activo "])),(l()(),t.qb(158,0,null,null,7,"div",[["class","information-notifications"]],null,null,null,null,null)),(l()(),t.qb(159,0,null,null,1,"span",[["class","information-notifications-title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Activar notificaciones"])),(l()(),t.qb(161,0,null,null,4,"div",[["class","information-notifications-checkboxes"]],null,null,null,null,null)),(l()(),t.qb(162,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.qb(163,0,null,null,0,"input",[["checked",""],["id","notifications"],["name","notifications"],["type","checkbox"],["value","Notifications"]],null,null,null,null,null)),(l()(),t.qb(164,0,null,null,1,"label",[["for","notifications"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u2003Comentarios"])),(l()(),t.qb(166,0,null,null,4,"div",[["class","save-form-button"]],null,null,null,null,null)),(l()(),t.qb(167,0,null,null,1,"button",[["class","save-button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.submitForm()&&t),t},null,null)),(l()(),t.qb(168,0,null,null,0,"span",[["class","icon icon-save-regular"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,Y)),t.pb(170,16384,null,0,A.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,Z)),t.pb(172,16384,null,0,A.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,14,0,"/guide"),l(n,24,0,"editAuthor"===u.state),l(n,37,0,"editAuthor"===u.state),l(n,71,0,u.updatingForm),l(n,76,0,u.quillModules,u.customOptions);var t=u.quillText,e=l(n,80,0,!0);l(n,79,0,t,e),l(n,87,0,u.errors),l(n,90,0,u.formGroup),l(n,98,0,"title"),l(n,104,0,"description"),l(n,110,0,"indications"),l(n,118,0,u.tags),l(n,123,0,u.form.tags),l(n,130,0,"public"),l(n,141,0,"commentsEnabled"),l(n,152,0,"enabled"),l(n,170,0,u.updatingForm),l(n,172,0,"editAuthor"===u.state)},function(l,n){var u=n.component;l(n,68,0,u.isSubmitting),l(n,75,0,t.Ab(n,82).ngClassUntouched,t.Ab(n,82).ngClassTouched,t.Ab(n,82).ngClassPristine,t.Ab(n,82).ngClassDirty,t.Ab(n,82).ngClassValid,t.Ab(n,82).ngClassInvalid,t.Ab(n,82).ngClassPending),l(n,84,0,u.textPreview),l(n,88,0,t.Ab(n,92).ngClassUntouched,t.Ab(n,92).ngClassTouched,t.Ab(n,92).ngClassPristine,t.Ab(n,92).ngClassDirty,t.Ab(n,92).ngClassValid,t.Ab(n,92).ngClassInvalid,t.Ab(n,92).ngClassPending),l(n,95,0,t.Ab(n,100).ngClassUntouched,t.Ab(n,100).ngClassTouched,t.Ab(n,100).ngClassPristine,t.Ab(n,100).ngClassDirty,t.Ab(n,100).ngClassValid,t.Ab(n,100).ngClassInvalid,t.Ab(n,100).ngClassPending),l(n,101,0,t.Ab(n,106).ngClassUntouched,t.Ab(n,106).ngClassTouched,t.Ab(n,106).ngClassPristine,t.Ab(n,106).ngClassDirty,t.Ab(n,106).ngClassValid,t.Ab(n,106).ngClassInvalid,t.Ab(n,106).ngClassPending),l(n,107,0,t.Ab(n,112).ngClassUntouched,t.Ab(n,112).ngClassTouched,t.Ab(n,112).ngClassPristine,t.Ab(n,112).ngClassDirty,t.Ab(n,112).ngClassValid,t.Ab(n,112).ngClassInvalid,t.Ab(n,112).ngClassPending),l(n,115,0,t.Ab(n,120).ngClassUntouched,t.Ab(n,120).ngClassTouched,t.Ab(n,120).ngClassPristine,t.Ab(n,120).ngClassDirty,t.Ab(n,120).ngClassValid,t.Ab(n,120).ngClassInvalid,t.Ab(n,120).ngClassPending),l(n,127,0,t.Ab(n,132).ngClassUntouched,t.Ab(n,132).ngClassTouched,t.Ab(n,132).ngClassPristine,t.Ab(n,132).ngClassDirty,t.Ab(n,132).ngClassValid,t.Ab(n,132).ngClassInvalid,t.Ab(n,132).ngClassPending),l(n,138,0,t.Ab(n,143).ngClassUntouched,t.Ab(n,143).ngClassTouched,t.Ab(n,143).ngClassPristine,t.Ab(n,143).ngClassDirty,t.Ab(n,143).ngClassValid,t.Ab(n,143).ngClassInvalid,t.Ab(n,143).ngClassPending),l(n,149,0,t.Ab(n,154).ngClassUntouched,t.Ab(n,154).ngClassTouched,t.Ab(n,154).ngClassPristine,t.Ab(n,154).ngClassDirty,t.Ab(n,154).ngClassValid,t.Ab(n,154).ngClassInvalid,t.Ab(n,154).ngClassPending),l(n,167,0,u.isSubmitting)})}function z(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-create-form",[],null,null,null,W,G)),t.pb(1,4308992,null,0,j,[v.a,t.k,t.E,O.a,f.a,k.a,k.l,F.e,I.j],null,null)],function(l,n){l(n,1,0)},null)}var J=t.mb("app-create-form",j,z,{},{},[]),X=u("67Y/"),ll=u("9Z1F"),nl=function(){function l(l,n,u){this.formsService=l,this.router=n,this.userService=u}return l.prototype.resolve=function(l,n){var u=this;return this.formsService.get(l.params.slug).pipe(Object(X.a)(function(l){if(u.userService.getCurrentUser().username===l.author.username)return l;u.router.navigateByUrl("/")}),Object(ll.a)(function(l){return u.router.navigateByUrl("/")}))},l}(),ul=u("f4AX"),tl=function(){return function(){}}(),el=u("ecC8");u.d(n,"CreateFormModuleNgFactory",function(){return il});var il=t.nb(e,[],function(l){return t.xb([t.yb(512,t.j,t.cb,[[8,[i.a,o.a,r.a,a.a,s.a,c.a,d.a,b.a,p.a,J]],[3,t.j],t.y]),t.yb(4608,A.m,A.l,[t.v,[2,A.s]]),t.yb(4608,F.v,F.v,[]),t.yb(4608,F.e,F.e,[]),t.yb(4608,nl,nl,[O.a,k.l,ul.a]),t.yb(1073742336,A.b,A.b,[]),t.yb(1073742336,F.t,F.t,[]),t.yb(1073742336,F.j,F.j,[]),t.yb(1073742336,F.r,F.r,[]),t.yb(1073742336,S.c,S.c,[]),t.yb(1073742336,P.a,P.a,[]),t.yb(1073742336,k.p,k.p,[[2,k.v],[2,k.l]]),t.yb(1073742336,tl,tl,[]),t.yb(1073742336,e,e,[]),t.yb(256,S.a,{modules:S.d},[]),t.yb(1024,k.j,function(){return[[{path:"",component:j},{path:"edit",component:j,canActivate:[el.a]},{path:"edit/:slug",component:j,canActivate:[el.a],resolve:{form:nl}}]]},[])])})}}]);