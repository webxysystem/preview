"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[963],{963:(P,d,a)=>{a.r(d),a.d(d,{ChatPageModule:()=>b});var u=a(9808),c=a(4182),o=a(6359),l=a(333),e=a(2096);const m=["body"],g=function(t){return{sended:t}};function p(t,i){if(1&t&&(e.TgZ(0,"div",14)(1,"div",15),e._uU(2),e.qZA()()),2&t){const n=i.$implicit;e.Q6J("ngClass",e.VKq(2,g,"sended"==n.status)),e.xp6(2),e.hij(" ",n.content," ")}}const C=[{path:"",component:(()=>{class t{constructor(){this.messages=[{content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. \n      Dolorum, optio laboriosam illum nostrum, voluptatibus animi illo fugiat, ullam repudiandae voluptatem vel. \n      Cupiditate quae et quia sapiente aliquam odio, doloribus non. ",status:"sended"},{content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. \n      Dolorum, optio laboriosam illum nostrum, voluptatibus animi illo fugiat, ullam repudiandae voluptatem vel. \n      Cupiditate quae et quia sapiente aliquam odio, doloribus non. ",status:"received"},{content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. \n      Dolorum, optio laboriosam illum nostrum, voluptatibus animi illo fugiat, ullam repudiandae voluptatem vel. \n      Cupiditate quae et quia sapiente aliquam odio, doloribus non. ",status:"sended"},{content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. \n      Dolorum, optio laboriosam illum nostrum, voluptatibus animi illo fugiat, ullam repudiandae voluptatem vel. \n      Cupiditate quae et quia sapiente aliquam odio, doloribus non. ",status:"received"},{content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. \n      Dolorum, optio laboriosam illum nostrum, voluptatibus animi illo fugiat, ullam repudiandae voluptatem vel. \n      Cupiditate quae et quia sapiente aliquam odio, doloribus non. ",status:"sended"},{content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. \n      Dolorum, optio laboriosam illum nostrum, voluptatibus animi illo fugiat, ullam repudiandae voluptatem vel. \n      Cupiditate quae et quia sapiente aliquam odio, doloribus non. ",status:"received"},{content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. \n      Dolorum, optio laboriosam illum nostrum, voluptatibus animi illo fugiat, ullam repudiandae voluptatem vel. \n      Cupiditate quae et quia sapiente aliquam odio, doloribus non. ",status:"sended"},{content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. \n      Dolorum, optio laboriosam illum nostrum, voluptatibus animi illo fugiat, ullam repudiandae voluptatem vel. \n      Cupiditate quae et quia sapiente aliquam odio, doloribus non. ",status:"received"}]}ionViewWillEnter(){this.body.scrollToBottom()}ngOnInit(){}send(n){this.messages.push({content:n.value,status:"sended"}),n.value="",this.body.scrollToBottom(500)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-chat"]],viewQuery:function(n,r){if(1&n&&e.Gf(m,5),2&n){let s;e.iGM(s=e.CRH())&&(r.body=s.first)}},decls:20,vars:3,consts:[[1,"container-header"],["routerLink","/profile","name","arrow-down-outline",1,"close"],[1,"container-user"],["src","assets/images/6bfbfd27378295.563642d27afb2.png"],[1,"user"],[1,"name"],["body",""],[1,"container-body"],["class","container-message",3,"ngClass",4,"ngFor","ngForOf"],[1,"container-footer"],[1,"footer"],["placeholder","Mensaje",3,"rows"],["msg",""],[3,"disabled","click"],[1,"container-message",3,"ngClass"],[1,"message"]],template:function(n,r){if(1&n){const s=e.EpF();e.TgZ(0,"ion-header")(1,"div",0),e._UZ(2,"ion-icon",1),e.TgZ(3,"div",2),e._UZ(4,"ion-img",3),e.TgZ(5,"div",4)(6,"span",5),e._uU(7,"Cristina"),e.qZA(),e.TgZ(8,"span"),e._uU(9,"Activo(a) ahora"),e.qZA()()()()(),e.TgZ(10,"ion-content",null,6)(12,"div",7),e.YNc(13,p,3,4,"div",8),e.qZA()(),e.TgZ(14,"div",9)(15,"div",10),e._UZ(16,"ion-textarea",11,12),e.TgZ(18,"ion-button",13),e.NdJ("click",function(){e.CHM(s);const v=e.MAs(17);return r.send(v)}),e._uU(19,"Enviar"),e.qZA()()()}if(2&n){const s=e.MAs(17);e.xp6(13),e.Q6J("ngForOf",r.messages),e.xp6(3),e.Q6J("rows",1),e.xp6(2),e.Q6J("disabled",!s.value)}},directives:[o.Gu,o.gu,o.YI,l.rH,o.Xz,o.W2,u.sg,u.mk,o.g2,o.j9,o.YG],styles:[".container-header[_ngcontent-%COMP%]{background:#1e1e1e;display:flex;align-items:center}.container-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{font-size:2rem;transform:rotate(90deg);padding:1rem}.container-header[_ngcontent-%COMP%]   .container-user[_ngcontent-%COMP%]{display:flex}.container-header[_ngcontent-%COMP%]   .container-user[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:50px;height:50px;min-width:50px;min-height:50px;border-radius:50%;object-fit:cover;margin-right:.5rem}.container-header[_ngcontent-%COMP%]   .container-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{display:flex;flex-direction:column}.container-header[_ngcontent-%COMP%]   .container-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:700;color:#b01858}.container-body[_ngcontent-%COMP%]{background:#1e1e1e;padding:1rem 1rem 5rem}.container-body[_ngcontent-%COMP%]   .container-message[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:flex-start;margin-bottom:.8rem}.container-body[_ngcontent-%COMP%]   .container-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding:1rem;max-width:70vw;background:#b01858;border-radius:1.5rem}.container-body[_ngcontent-%COMP%]   .container-message.sended[_ngcontent-%COMP%]{align-items:flex-end}.container-body[_ngcontent-%COMP%]   .container-message.sended[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background:#17edd380}.container-footer[_ngcontent-%COMP%]{position:fixed;display:flex;justify-content:space-evenly;width:100%;bottom:.5rem}.container-footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{width:90%;background:#666666;border-radius:2rem;display:flex;align-items:center}.container-footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{--padding-start: 1.5rem;margin-top:.5rem;margin-bottom:.5rem}.container-footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:1.1rem;color:#17edd3;--background: initial;--box-shadow: none;border:none}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(C)],l.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.ez,c.u5,o.Pc,f]]}),t})()}}]);