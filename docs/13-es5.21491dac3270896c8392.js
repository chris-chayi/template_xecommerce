!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{jD90:function(e,o,i){"use strict";i.r(o),i.d(o,"ListPageModule",function(){return C});var r=i("ofXK"),c=i("3Pt+"),a=i("TEn/"),s=i("tyNb"),u=i("mrSG"),b=i("x/JU"),l=i("fXoL"),d=i("Gdn9");function f(t,n){if(1&t&&(l.Mb(0,"ion-slide"),l.Mb(1,"ion-label",11),l.nc(2),l.Lb(),l.Lb()),2&t){var e=n.$implicit,o=n.index,i=l.Wb();l.zb(1),l.Bb("focus",i.activeCat==o),l.zb(1),l.pc(" ",e," ")}}var p=function(t){return["/products",t]};function g(t,n){if(1&t&&(l.Mb(0,"ion-col",14),l.Mb(1,"ion-card",15),l.Mb(2,"ion-card-content"),l.Kb(3,"ion-img",16),l.Mb(4,"ion-label"),l.nc(5),l.Mb(6,"p"),l.nc(7),l.Xb(8,"currency"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&t){var e=n.$implicit;l.cc("routerLink",l.ec(7,p,e.id)),l.zb(3),l.cc("src",e.image),l.zb(2),l.pc(" ",e.title," "),l.zb(2),l.oc(l.Zb(8,4,e.price,"USD"))}}function h(t,n){if(1&t&&(l.Mb(0,"ion-row",12),l.lc(1,g,9,9,"ion-col",13),l.Xb(2,"async"),l.Lb()),2&t){var e=l.Wb();l.zb(1),l.cc("ngForOf",l.Yb(2,1,e.products))}}function v(t,n){1&t&&(l.Mb(0,"ion-col",18),l.Mb(1,"ion-card",15),l.Mb(2,"ion-card-content"),l.Kb(3,"ion-skeleton-text",19),l.Mb(4,"ion-label"),l.Kb(5,"ion-skeleton-text",20),l.Mb(6,"p"),l.Kb(7,"ion-skeleton-text",20),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb())}var m=function(){return[]};function L(t,n){1&t&&l.lc(0,v,8,0,"ion-col",17),2&t&&l.cc("ngForOf",l.dc(1,m).constructor(5))}var M,k,w,x=[{path:"",component:(M=function(){function e(n,o){var i=this;t(this,e),this.productService=n,this.modalCtrl=o,this.categories=[],this.activeCat=0,this.opts={slidesPerView:2.1,centeredSlides:!0},this.productService.getCategories().subscribe(function(t){i.categories=t}),this.loadAllProducts()}var o,i,r;return o=e,(i=[{key:"ngOnInit",value:function(){}},{key:"loadAllProducts",value:function(){this.products=this.productService.getProducts()}},{key:"catBack",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.slides.getPreviousIndex();case 2:t.t0=t.sent,0==(n=t.t0-1)?this.loadAllProducts():this.products=this.productService.getProductsForCategory(this.categories[n]),this.activeCat=n;case 5:case"end":return t.stop()}},t,this)}))}},{key:"catForward",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.slides.getActiveIndex();case 2:n=t.sent,this.products=this.productService.getProductsForCategory(this.categories[n]),this.activeCat=n;case 4:case"end":return t.stop()}},t,this)}))}},{key:"openCart",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalCtrl.create({component:b.a,cssClass:"cart-modal"});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}},t,this)}))}}])&&n(o.prototype,i),r&&n(o,r),e}(),M.\u0275fac=function(t){return new(t||M)(l.Jb(d.a),l.Jb(a.K))},M.\u0275cmp=l.Db({type:M,selectors:[["app-list"]],viewQuery:function(t,n){var e;1&t&&l.qc(a.E,1),2&t&&l.fc(e=l.Vb())&&(n.slides=e.first)},decls:19,vars:6,consts:[["translucent","true"],["fullscreen","true"],["collapse","condense"],["size","large"],[3,"options","ionSlideNextStart","ionSlidePrevStart"],[4,"ngFor","ngForOf"],["class","ion-justify-content-center",4,"ngIf","ngIfElse"],["loading",""],["vertical","bottom","horizontal","end","slot","fixed"],["color","medium",3,"click"],["name","cart"],["color","medium",1,"ion-text-capitalize"],[1,"ion-justify-content-center"],["size","12","tappable","",3,"routerLink",4,"ngFor","ngForOf"],["size","12","tappable","",3,"routerLink"],[1,"ion-text-center"],[1,"ion-margin-bottom",3,"src"],["size","12",4,"ngFor","ngForOf"],["size","12"],["animated","",1,"skeleton-img"],["animated",""]],template:function(t,n){if(1&t&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-title"),l.nc(3,"Ionic Shop"),l.Lb(),l.Lb(),l.Lb(),l.Mb(4,"ion-content",1),l.Mb(5,"ion-header",2),l.Mb(6,"ion-toolbar"),l.Mb(7,"ion-title",3),l.nc(8,"Ionic Shop"),l.Lb(),l.Lb(),l.Lb(),l.Mb(9,"ion-slides",4),l.Ub("ionSlideNextStart",function(){return n.catForward()})("ionSlidePrevStart",function(){return n.catBack()}),l.lc(10,f,3,3,"ion-slide",5),l.Lb(),l.Mb(11,"ion-grid"),l.lc(12,h,3,3,"ion-row",6),l.Xb(13,"async"),l.lc(14,L,1,2,"ng-template",null,7,l.mc),l.Lb(),l.Mb(16,"ion-fab",8),l.Mb(17,"ion-fab-button",9),l.Ub("click",function(){return n.openCart()}),l.Kb(18,"ion-icon",10),l.Lb(),l.Lb(),l.Lb()),2&t){var e,o=l.gc(15);l.zb(9),l.cc("options",n.opts),l.zb(1),l.cc("ngForOf",n.categories),l.zb(2),l.cc("ngIf",(null==(e=l.Yb(13,4,n.products))?null:e.length)>0)("ngIfElse",o)}},directives:[a.u,a.H,a.G,a.p,a.E,r.j,a.t,r.k,a.q,a.r,a.v,a.D,a.z,a.B,a.o,a.M,s.h,a.j,a.k,a.w,a.C],pipes:[r.b,r.d],styles:["ion-slides[_ngcontent-%COMP%]{height:60px;background:var(--ion-color-light)}.skeleton-img[_ngcontent-%COMP%]{width:50%;height:150px;margin:auto auto 25px}.focus[_ngcontent-%COMP%]{font-weight:500;color:var(--ion-color-dark);transition:1s}"]}),M)}],y=((w=function n(){t(this,n)}).\u0275fac=function(t){return new(t||w)},w.\u0275mod=l.Hb({type:w}),w.\u0275inj=l.Gb({imports:[[s.i.forChild(x)],s.i]}),w),C=((k=function n(){t(this,n)}).\u0275fac=function(t){return new(t||k)},k.\u0275mod=l.Hb({type:k}),k.\u0275inj=l.Gb({imports:[[r.c,c.a,a.I,y]]}),k)}}])}();