"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7160:(M,_,l)=>{l.d(_,{c:()=>c});var a=l(2361),h=l(7683),u=l(3139);const c=(s,n)=>{let t,e;const o=(d,p,v)=>{if("undefined"==typeof document)return;const g=document.elementFromPoint(d,p);g&&n(g)?g!==t&&(m(),i(g,v)):m()},i=(d,p)=>{t=d,e||(e=t);const v=t;(0,a.c)(()=>v.classList.add("ion-activated")),p()},m=(d=!1)=>{if(!t)return;const p=t;(0,a.c)(()=>p.classList.remove("ion-activated")),d&&e!==t&&t.click(),t=void 0};return(0,u.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:d=>o(d.currentX,d.currentY,h.a),onMove:d=>o(d.currentX,d.currentY,h.b),onEnd:()=>{m(!0),(0,h.h)(),e=void 0}})}},8685:(M,_,l)=>{l.d(_,{g:()=>a});const a=(n,t,e,o,i)=>u(n[1],t[1],e[1],o[1],i).map(m=>h(n[0],t[0],e[0],o[0],m)),h=(n,t,e,o,i)=>i*(3*t*Math.pow(i-1,2)+i*(-3*e*i+3*e+o*i))-n*Math.pow(i-1,3),u=(n,t,e,o,i)=>s((o-=i)-3*(e-=i)+3*(t-=i)-(n-=i),3*e-6*t+3*n,3*t-3*n,n).filter(d=>d>=0&&d<=1),s=(n,t,e,o)=>{if(0===n)return((n,t,e)=>{const o=t*t-4*n*e;return o<0?[]:[(-t+Math.sqrt(o))/(2*n),(-t-Math.sqrt(o))/(2*n)]})(t,e,o);const i=(3*(e/=n)-(t/=n)*t)/3,m=(2*t*t*t-9*t*e+27*(o/=n))/27;if(0===i)return[Math.pow(-m,1/3)];if(0===m)return[Math.sqrt(-i),-Math.sqrt(-i)];const d=Math.pow(m/2,2)+Math.pow(i/3,3);if(0===d)return[Math.pow(m/2,.5)-t/3];if(d>0)return[Math.pow(-m/2+Math.sqrt(d),1/3)-Math.pow(m/2+Math.sqrt(d),1/3)-t/3];const p=Math.sqrt(Math.pow(-i/3,3)),v=Math.acos(-m/(2*Math.sqrt(Math.pow(-i/3,3)))),g=2*Math.pow(p,1/3);return[g*Math.cos(v/3)-t/3,g*Math.cos((v+2*Math.PI)/3)-t/3,g*Math.cos((v+4*Math.PI)/3)-t/3]}},5062:(M,_,l)=>{l.d(_,{i:()=>a});const a=h=>h&&""!==h.dir?"rtl"===h.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},1112:(M,_,l)=>{l.r(_),l.d(_,{startFocusVisible:()=>c});const a="ion-focused",u=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=s=>{let n=[],t=!0;const e=s?s.shadowRoot:document,o=s||document.body,i=f=>{n.forEach(w=>w.classList.remove(a)),f.forEach(w=>w.classList.add(a)),n=f},m=()=>{t=!1,i([])},d=f=>{t=u.includes(f.key),t||i([])},p=f=>{if(t&&f.composedPath){const w=f.composedPath().filter(E=>!!E.classList&&E.classList.contains("ion-focusable"));i(w)}},v=()=>{e.activeElement===o&&i([])};return e.addEventListener("keydown",d),e.addEventListener("focusin",p),e.addEventListener("focusout",v),e.addEventListener("touchstart",m),e.addEventListener("mousedown",m),{destroy:()=>{e.removeEventListener("keydown",d),e.removeEventListener("focusin",p),e.removeEventListener("focusout",v),e.removeEventListener("touchstart",m),e.removeEventListener("mousedown",m)},setFocus:i}}},1878:(M,_,l)=>{l.d(_,{C:()=>s,a:()=>u,d:()=>c});var a=l(5861),h=l(3756);const u=function(){var n=(0,a.Z)(function*(t,e,o,i,m,d){var p;if(t)return t.attachViewToDom(e,o,m,i);if(!(d||"string"==typeof o||o instanceof HTMLElement))throw new Error("framework delegate is missing");const v="string"==typeof o?null===(p=e.ownerDocument)||void 0===p?void 0:p.createElement(o):o;return i&&i.forEach(g=>v.classList.add(g)),m&&Object.assign(v,m),e.appendChild(v),yield new Promise(g=>(0,h.c)(v,g)),v});return function(e,o,i,m,d,p){return n.apply(this,arguments)}}(),c=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},s=()=>{let n,t;return{attachViewToDom:function(){var i=(0,a.Z)(function*(m,d,p={},v=[]){var g,f;if(n=m,d){const E="string"==typeof d?null===(g=n.ownerDocument)||void 0===g?void 0:g.createElement(d):d;v.forEach(r=>E.classList.add(r)),Object.assign(E,p),n.appendChild(E),yield new Promise(r=>(0,h.c)(E,r))}else if(n.children.length>0){const E=null===(f=n.ownerDocument)||void 0===f?void 0:f.createElement("div");v.forEach(r=>E.classList.add(r)),E.append(...n.children),n.appendChild(E)}const w=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),n.parentNode.insertBefore(t,n),w.appendChild(n),n});return function(d,p){return i.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&t&&(t.parentNode.insertBefore(n,t),t.remove()),Promise.resolve())}}},7683:(M,_,l)=>{l.d(_,{a:()=>u,b:()=>c,c:()=>h,d:()=>n,h:()=>s});const a={getEngine(){var t;const e=window;return e.TapticEngine||(null===(t=e.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:o})},notification(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:o})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},h=()=>{a.selection()},u=()=>{a.selectionStart()},c=()=>{a.selectionChanged()},s=()=>{a.selectionEnd()},n=t=>{a.impact(t)}},207:(M,_,l)=>{l.d(_,{a:()=>m,b:()=>p,f:()=>i,g:()=>o,i:()=>e,p:()=>v,s:()=>d});var a=l(5861),h=l(3756),u=l(7208);const s="ion-content",n=".ion-content-scroll-host",t=`${s}, ${n}`,e=g=>g&&"ION-CONTENT"===g.tagName,o=function(){var g=(0,a.Z)(function*(f){return e(f)?(yield new Promise(w=>(0,h.c)(f,w)),f.getScrollElement()):f});return function(w){return g.apply(this,arguments)}}(),i=g=>g.querySelector(n)||g.querySelector(t),m=g=>g.closest(t),d=(g,f)=>e(g)?g.scrollToTop(f):Promise.resolve(g.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),p=(g,f,w,E)=>e(g)?g.scrollByPoint(f,w,E):Promise.resolve(g.scrollBy({top:w,left:f,behavior:E>0?"smooth":"auto"})),v=g=>(0,u.a)(g,s)},7208:(M,_,l)=>{l.d(_,{a:()=>u,b:()=>h,p:()=>a});const a=c=>console.warn(`[Ionic Warning]: ${c}`),h=(c,...s)=>console.error(`[Ionic Error]: ${c}`,...s),u=(c,...s)=>console.error(`<${c.tagName.toLowerCase()}> must be used inside ${s.join(" or ")}.`)},8439:(M,_,l)=>{l.d(_,{s:()=>a});const a=e=>{try{if(e instanceof class t{constructor(o){this.value=o}})return e.value;if(!c()||"string"!=typeof e||""===e)return e;const o=document.createDocumentFragment(),i=document.createElement("div");o.appendChild(i),i.innerHTML=e,n.forEach(v=>{const g=o.querySelectorAll(v);for(let f=g.length-1;f>=0;f--){const w=g[f];w.parentNode?w.parentNode.removeChild(w):o.removeChild(w);const E=u(w);for(let r=0;r<E.length;r++)h(E[r])}});const m=u(o);for(let v=0;v<m.length;v++)h(m[v]);const d=document.createElement("div");d.appendChild(o);const p=d.querySelector("div");return null!==p?p.innerHTML:d.innerHTML}catch(o){return console.error(o),""}},h=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let i=e.attributes.length-1;i>=0;i--){const m=e.attributes.item(i),d=m.name;if(!s.includes(d.toLowerCase())){e.removeAttribute(d);continue}const p=m.value;null!=p&&p.toLowerCase().includes("javascript:")&&e.removeAttribute(d)}const o=u(e);for(let i=0;i<o.length;i++)h(o[i])},u=e=>null!=e.children?e.children:e.childNodes,c=()=>{var e;const o=window,i=null===(e=null==o?void 0:o.Ionic)||void 0===e?void 0:e.config;return!i||(i.get?i.get("sanitizerEnabled",!0):!0===i.sanitizerEnabled||void 0===i.sanitizerEnabled)},s=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"]},8117:(M,_,l)=>{l.d(_,{a:()=>a,b:()=>m,c:()=>n,d:()=>d,e:()=>r,f:()=>u,g:()=>h,h:()=>w,i:()=>t,j:()=>o,k:()=>p,l:()=>e,m:()=>s,n:()=>c,o:()=>i,p:()=>v,q:()=>g,r:()=>f,s:()=>E});const a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},1316:(M,_,l)=>{l.r(_),l.d(_,{KEYBOARD_DID_CLOSE:()=>h,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>E,keyboardDidClose:()=>v,keyboardDidOpen:()=>d,keyboardDidResize:()=>p,resetKeyboardAssist:()=>t,setKeyboardClose:()=>m,setKeyboardOpen:()=>i,startKeyboardAssist:()=>e,trackViewportChanges:()=>w});const a="ionKeyboardDidShow",h="ionKeyboardDidHide";let c={},s={},n=!1;const t=()=>{c={},s={},n=!1},e=r=>{o(r),r.visualViewport&&(s=E(r.visualViewport),r.visualViewport.onresize=()=>{w(r),d()||p(r)?i(r):v(r)&&m(r)})},o=r=>{r.addEventListener("keyboardDidShow",C=>i(r,C)),r.addEventListener("keyboardDidHide",()=>m(r))},i=(r,C)=>{g(r,C),n=!0},m=r=>{f(r),n=!1},d=()=>!n&&c.width===s.width&&(c.height-s.height)*s.scale>150,p=r=>n&&!v(r),v=r=>n&&s.height===r.innerHeight,g=(r,C)=>{const D=new CustomEvent(a,{detail:{keyboardHeight:C?C.keyboardHeight:r.innerHeight-s.height}});r.dispatchEvent(D)},f=r=>{const C=new CustomEvent(h);r.dispatchEvent(C)},w=r=>{c=Object.assign({},s),s=E(r.visualViewport)},E=r=>({width:Math.round(r.width),height:Math.round(r.height),offsetTop:r.offsetTop,offsetLeft:r.offsetLeft,pageTop:r.pageTop,pageLeft:r.pageLeft,scale:r.scale})},7741:(M,_,l)=>{l.d(_,{S:()=>h});const h={bubbles:{dur:1e3,circles:9,fn:(u,c,s)=>{const n=u*c/s-u+"ms",t=2*Math.PI*c/s;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(u,c,s)=>{const n=c/s,t=u*n-u+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(u,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(u,c,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*c+(c<s/2?180:-180)}deg)`,"animation-delay":u*c/s-u+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(u,c,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*c+(c<s/2?180:-180)}deg)`,"animation-delay":u*c/s-u+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(u,c,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":u*c/s-u+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(u,c,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":u*c/s-u+"ms"}})}}},6546:(M,_,l)=>{l.r(_),l.d(_,{createSwipeBackGesture:()=>s});var a=l(3756),h=l(5062),u=l(3139);l(3509);const s=(n,t,e,o,i)=>{const m=n.ownerDocument.defaultView,d=(0,h.i)(n),v=r=>d?-r.deltaX:r.deltaX;return(0,u.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:r=>(r=>{const{startX:y}=r;return d?y>=m.innerWidth-50:y<=50})(r)&&t(),onStart:e,onMove:r=>{const y=v(r)/m.innerWidth;o(y)},onEnd:r=>{const C=v(r),y=m.innerWidth,D=C/y,O=(r=>d?-r.velocityX:r.velocityX)(r),x=O>=0&&(O>.2||C>y/2),T=(x?1-D:D)*y;let b=0;if(T>5){const L=T/Math.abs(O);b=Math.min(L,540)}i(x,D<=0?.01:(0,a.l)(0,D,.9999),b)}})}},2854:(M,_,l)=>{l.d(_,{c:()=>u,g:()=>s,h:()=>h,o:()=>t});var a=l(5861);const h=(e,o)=>null!==o.closest(e),u=(e,o)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},o):o,s=e=>{const o={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(i=>null!=i).map(i=>i.trim()).filter(i=>""!==i):[])(e).forEach(i=>o[i]=!0),o},n=/^[a-z][a-z0-9+\-.]*:/,t=function(){var e=(0,a.Z)(function*(o,i,m,d){if(null!=o&&"#"!==o[0]&&!n.test(o)){const p=document.querySelector("ion-router");if(p)return null!=i&&i.preventDefault(),p.push(o,m,d)}return!1});return function(i,m,d,p){return e.apply(this,arguments)}}()},2816:(M,_,l)=>{l.d(_,{J:()=>c});var a=l(2096),h=l(333),u=l(6359);let c=(()=>{class s{constructor(t){this.router=t,this.image={},this.closeFrame=new a.vpe,this.maxHeight=0,this.like=!1}ngOnInit(){}ngOnChanges(t){t.image.currentValue&&this.getMeta(this.image.url)}close(){this.closeFrame.emit(!1)}goToProfile(){this.router.navigate(["/profile"])}getMeta(t){const e=new Image;e.src=t,e.onload=()=>this.maxHeight=e.height}}return s.\u0275fac=function(t){return new(t||s)(a.Y36(h.F0))},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-frame-total-screen"]],inputs:{image:"image"},outputs:{closeFrame:"closeFrame"},features:[a.TTD],decls:14,vars:5,consts:[[1,"frame-image"],[1,"container-image"],[1,"container-button"],["name","close-outline",1,"icon-close",3,"click"],[1,"image"],[1,"content"],[1,"title"],[1,"description"],[1,"container-options"],["size","large",1,"heart",3,"click"],["name","arrow-redo-outline","size","large",1,"go",3,"click"],["name","chatbox-outline","size","large",1,"go"]],template:function(t,e){1&t&&(a._UZ(0,"div",0),a.TgZ(1,"div",1)(2,"div",2)(3,"ion-icon",3),a.NdJ("click",function(){return e.close()}),a.qZA()(),a.TgZ(4,"div",4)(5,"div",5)(6,"div",6),a._uU(7,"Cristina Patmer"),a.qZA(),a.TgZ(8,"div",7),a._uU(9," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, optio laboriosam illum nostrum, voluptatibus animi illo fugiat, ullam repudiandae voluptatem vel. Cupiditate quae et quia sapiente aliquam odio, doloribus non. "),a.qZA(),a.TgZ(10,"div",8)(11,"ion-icon",9),a.NdJ("click",function(){return e.like=!e.like}),a.qZA(),a.TgZ(12,"ion-icon",10),a.NdJ("click",function(){return e.goToProfile()}),a.qZA(),a._UZ(13,"ion-icon",11),a.qZA()()()()),2&t&&(a.xp6(4),a.Udp("background"," url("+(null==e.image?null:e.image.url)+") no-repeat fixed center ")("height",e.maxHeight+"px"),a.xp6(7),a.uIk("name",e.like?"heart":"heart-outline"))},directives:[u.gu],styles:[".frame-image[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:50;background-color:#202124e6}.container-image[_ngcontent-%COMP%]{position:fixed;top:0;left:0;z-index:51;height:100vh;width:100vw;display:flex;flex-direction:column;align-items:center;padding-top:3rem}.image[_ngcontent-%COMP%]{position:relative;border-radius:6px;background:transparent;background-size:contain!important;background-blend-mode:soft-light;width:100%;max-height:70vh}.container-button[_ngcontent-%COMP%]{position:absolute;z-index:52;top:1rem;right:1rem}.container-button[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%]{font-size:32px}.container-options[_ngcontent-%COMP%]{margin-top:1rem;display:flex;width:100%;justify-content:space-between}.container-options[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%]{color:#b01858}.container-options[_ngcontent-%COMP%]   .go[_ngcontent-%COMP%]{color:#17edd380}.content[_ngcontent-%COMP%]{position:absolute;bottom:1rem;margin:0 2rem;border-radius:16px;padding:10px;background:linear-gradient(0deg,rgba(255,255,255,0) 0%,rgba(0,0,0,.7) 100%)}.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#b01858;font-size:18px;line-height:24px}"]}),s})()},5054:(M,_,l)=>{function a(h){return u=>{const c=u.value;return c?c===h.value?null:{stopFieldStrength:!0}:null}}l.d(_,{k:()=>a})},4466:(M,_,l)=>{l.d(_,{m:()=>c});var a=l(9808),h=l(6359),u=l(2096);let c=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=u.oAB({type:s}),s.\u0275inj=u.cJS({imports:[[a.ez,h.Pc]]}),s})()}}]);