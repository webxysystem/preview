"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1603],{1603:(j,c,r)=>{r.r(c),r.d(c,{HomePageModule:()=>O});var i=r(9808),w=r(4182),a=r(5649),p=r(333),e=r(2096),d=r(520);let m=(()=>{class t{constructor(n){this.httpClient=n}getPhotos(){return this.httpClient.get("https://jsonplaceholder.typicode.com/photos")}getRandomNumber(n,s){return Math.floor(Math.random()*(s-n+1)+n)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(d.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function h(t,o){if(1&t&&(e.TgZ(0,"div",3),e._UZ(1,"img",4),e.qZA()),2&t){const n=o.$implicit;e.Q6J("ngClass","gallery__item--"+(o.index+1)),e.xp6(1),e.Q6J("src",n.url?n.url:n,e.LSH)}}function u(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"div",1),e.YNc(2,h,2,2,"div",2),e.qZA(),e.BQk()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("ngClass",n.type),e.xp6(1),e.Q6J("ngForOf",n.images)}}let y=(()=>{class t{constructor(n){this.serviceGeneral=n,this.images=[],this.types={0:"primary",1:"reverse",2:"alt"},this.imagesForGallery=[]}ngOnInit(){}ngOnChanges(n){n.images.currentValue&&(this.convertFormatGallery(this.images),console.log(this.imagesForGallery))}getType(){return this.types[this.serviceGeneral.getRandomNumber(0,2)]}convertFormatGallery(n){let s=0,g=[];for(let l=0;l<=n.length;l++)if(5===s||l===n.length){const v={type:this.getType(),images:g};this.imagesForGallery.push(v),g=[],s=0,g.push(n[l]),s++}else g.push(n[l]),s++}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-gallery"]],inputs:{images:"images"},features:[e.TTD],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"gallery",3,"ngClass"],["class","gallery__item",3,"ngClass",4,"ngFor","ngForOf"],[1,"gallery__item",3,"ngClass"],[1,"gallery__img",3,"src"]],template:function(n,s){1&n&&e.YNc(0,u,3,2,"ng-container",0),2&n&&e.Q6J("ngForOf",s.imagesForGallery)},directives:[i.sg,i.mk],styles:[".gallery__img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.gallery.primary[_ngcontent-%COMP%]{padding:10px 35px;display:grid;grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(8,7vw);grid-gap:1rem}.gallery.primary[_ngcontent-%COMP%]   .gallery__item--1[_ngcontent-%COMP%]{grid-column:1/span 4;grid-row:1/span 2}.gallery.primary[_ngcontent-%COMP%]   .gallery__item--2[_ngcontent-%COMP%]{grid-column:5/span 4;grid-row:1/span 4}.gallery.primary[_ngcontent-%COMP%]   .gallery__item--3[_ngcontent-%COMP%]{grid-column:1/span 4;grid-row:3/span 3}.gallery.primary[_ngcontent-%COMP%]   .gallery__item--4[_ngcontent-%COMP%]{grid-column:1/span 4;grid-row:6/span 3}.gallery.primary[_ngcontent-%COMP%]   .gallery__item--5[_ngcontent-%COMP%]{grid-column:5/span 4;grid-row:5/span 4}.gallery.reverse[_ngcontent-%COMP%]{padding:10px 35px;display:grid;grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(8,7vw);grid-gap:1rem}.gallery.reverse[_ngcontent-%COMP%]   .gallery__item--1[_ngcontent-%COMP%]{grid-column:1/span 4;grid-row:1/span 4}.gallery.reverse[_ngcontent-%COMP%]   .gallery__item--2[_ngcontent-%COMP%]{grid-column:5/span 4;grid-row:1/span 2}.gallery.reverse[_ngcontent-%COMP%]   .gallery__item--3[_ngcontent-%COMP%]{grid-column:5/span 4;grid-row:3/span 2}.gallery.reverse[_ngcontent-%COMP%]   .gallery__item--4[_ngcontent-%COMP%]{grid-column:1/span 8;grid-row:5/span 2}.gallery.reverse[_ngcontent-%COMP%]   .gallery__item--5[_ngcontent-%COMP%]{grid-column:1/span 8;grid-row:7/span 2}.gallery.alt[_ngcontent-%COMP%]{padding:10px 35px;display:grid;grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(8,7vw);grid-gap:1rem}.gallery.alt[_ngcontent-%COMP%]   .gallery__item--1[_ngcontent-%COMP%]{grid-column:1/span 5;grid-row:1/span 2}.gallery.alt[_ngcontent-%COMP%]   .gallery__item--2[_ngcontent-%COMP%]{grid-column:6/span 3;grid-row:1/span 5}.gallery.alt[_ngcontent-%COMP%]   .gallery__item--3[_ngcontent-%COMP%]{grid-column:1/span 5;grid-row:3/span 4}.gallery.alt[_ngcontent-%COMP%]   .gallery__item--4[_ngcontent-%COMP%]{grid-column:6/span 3;grid-row:6/span 3}.gallery.alt[_ngcontent-%COMP%]   .gallery__item--5[_ngcontent-%COMP%]{grid-column:1/span 5;grid-row:7/span 2}"]}),t})();function _(t,o){if(1&t&&e._UZ(0,"app-gallery",9),2&t){const n=e.oxw();e.Q6J("images",n.publications)}}function f(t,o){if(1&t&&e._UZ(0,"app-gallery",9),2&t){const n=e.oxw();e.Q6J("images",n.photos)}}const P=[{path:"",component:(()=>{class t{constructor(n){this.generalService=n,this.allPublications=[],this.publications=[],this.images=["https://www.w3schools.com/w3images/wedding.jpg","https://www.w3schools.com/w3images/rocks.jpg","https://www.w3schools.com/w3images/falls2.jpg","https://www.w3schools.com/w3images/paris.jpg","https://www.w3schools.com/w3images/nature.jpg"],this.photos=["https://www.w3schools.com/w3images/wedding.jpg","https://www.w3schools.com/w3images/rocks.jpg","https://www.w3schools.com/w3images/falls2.jpg","https://www.w3schools.com/w3images/paris.jpg","https://www.w3schools.com/w3images/nature.jpg","https://www.w3schools.com/w3images/mist.jpg","https://www.w3schools.com/w3images/paris.jpg","https://www.w3schools.com/w3images/underwater.jpg","https://www.w3schools.com/w3images/ocean.jpg","https://www.w3schools.com/w3images/wedding.jpg","https://www.w3schools.com/w3images/mountainskies.jpg","https://www.w3schools.com/w3images/rocks.jpg","https://www.w3schools.com/w3images/underwater.jpg","https://www.w3schools.com/w3images/paris.jpg","https://www.w3schools.com/w3images/underwater.jpg","https://www.w3schools.com/w3images/ocean.jpg","https://www.w3schools.com/w3images/wedding.jpg","https://www.w3schools.com/w3images/mountainskies.jpg","https://www.w3schools.com/w3images/rocks.jpg","https://www.w3schools.com/w3images/underwater.jpg"],this.isRender=!1,this.showSecondFrame=!1}ngOnInit(){this.generalService.getPhotos().subscribe(n=>{this.allPublications=n,this.addPublication(),this.isRender=!0},n=>{console.log(n)})}loadData(n){console.log(n),this.showSecondFrame=!0}addPublication(){this.allPublications.splice(0,20).forEach(s=>{this.publications.push(s)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:16,vars:4,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],[3,"images",4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more data..."],[3,"images"]],template:function(n,s){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Home"),e.qZA()()(),e.TgZ(6,"ion-content",2)(7,"ion-header",3)(8,"ion-toolbar")(9,"ion-title",4),e._uU(10,"Home"),e.qZA()()(),e.TgZ(11,"div",5),e.YNc(12,_,1,1,"app-gallery",6),e.YNc(13,f,1,1,"app-gallery",6),e.TgZ(14,"ion-infinite-scroll",7),e.NdJ("ionInfinite",function(l){return s.loadData(l)}),e._UZ(15,"ion-infinite-scroll-content",8),e.qZA()()()),2&n&&(e.Q6J("translucent",!0),e.xp6(6),e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("ngIf",s.isRender),e.xp6(1),e.Q6J("ngIf",s.showSecondFrame))},directives:[a.Gu,a.sr,a.Sm,a.fG,a.wd,a.W2,i.O5,y,a.ju,a.MB],styles:[".frame[_ngcontent-%COMP%]{width:150px;height:150px}.list-publications[_ngcontent-%COMP%]{padding:25px 35px;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));grid-template-rows:repeat(auto-fit,260px);grid-auto-flow:dense;grid-gap:.3rem}"]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.Bz.forChild(P)],p.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.ez]]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.ez,w.u5,a.Pc,M,C]]}),t})()}}]);