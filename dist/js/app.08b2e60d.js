(function(e){function t(t){for(var c,a,i=t[0],u=t[1],s=t[2],b=0,f=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"13af":function(e,t,n){},"168d":function(e,t,n){"use strict";n("e7e5")},"18db":function(e,t,n){"use strict";n("cdeb")},"4b38":function(e,t,n){"use strict";n("986a")},5264:function(e,t,n){"use strict";n("b58a")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,o,a){var i=Object(c["l"])("TheHeader"),u=Object(c["l"])("TheCompanyInfo"),s=Object(c["l"])("TheGallery"),l=Object(c["l"])("TheFooter");return Object(c["i"])(),Object(c["d"])(c["a"],null,[Object(c["g"])(i),Object(c["g"])(u),Object(c["g"])(s),Object(c["g"])(l)],64)}var o={class:"header"};function a(e,t,n,r,a,i){var u=Object(c["l"])("TheNavigation");return Object(c["i"])(),Object(c["d"])("header",o,[Object(c["g"])(u)])}var i={class:"navigation"},u=Object(c["e"])("div",{class:"navigation__logo"},[Object(c["f"])(" DooB "),Object(c["e"])("span")],-1),s={class:"container"},l=Object(c["e"])("div",{class:"navigation_extra"},[Object(c["e"])("button",null,[Object(c["f"])("EN "),Object(c["e"])("span",null,"▼")]),Object(c["e"])("a",{href:"#"},"Contact us →")],-1);function b(e,t,n,r,o,a){var b=Object(c["l"])("Menu");return Object(c["i"])(),Object(c["d"])("nav",i,[u,Object(c["e"])("div",s,[Object(c["g"])(b),l])])}var f=Object(c["e"])("i",{class:"fas fa-bars"},null,-1),d=[f];function O(e,t,n,r,o,a){var i=Object(c["l"])("MenuItem");return Object(c["i"])(),Object(c["d"])(c["a"],null,[Object(c["e"])("button",{class:"hamburger",onClick:t[0]||(t[0]=function(){return a.toggle&&a.toggle.apply(a,arguments)})},d),Object(c["e"])("ul",{class:Object(c["h"])(o.showMenu?"menu visible":"menu hidden")},[(Object(c["i"])(!0),Object(c["d"])(c["a"],null,Object(c["j"])(o.menuItems,(function(e){return Object(c["i"])(),Object(c["c"])(i,{"menu-item":e,key:e.id},null,8,["menu-item"])})),128))],2)],64)}n("9911");var j={class:"menu__item"},p=["href"];function v(e,t,n,r,o,a){return Object(c["i"])(),Object(c["d"])("li",j,[Object(c["e"])("a",{href:n.menuItem.link,class:"menu__item_link"},Object(c["m"])(n.menuItem.text),9,p)])}var m={props:{menuItem:Object}};m.render=v;var g=m,h={components:{MenuItem:g},data:function(){return{showMenu:!1,menuItems:[{id:0,text:"Home.",link:"#"},{id:1,text:"About us.",link:"#"},{id:3,text:"Portfolio.",link:"#"},{id:4,text:"Blog.",link:"#"},{id:5,text:"Contact us.",link:"#"}]}},methods:{toggle:function(){this.showMenu=!this.showMenu}}};n("5264");h.render=O;var _=h,y={components:{Menu:_}};n("69a1");y.render=b;var k=y,w={components:{TheNavigation:k}};n("4b38");w.render=a;var x=w,T={class:"company"},M={class:"container"},I={class:"company-info"},S=Object(c["e"])("h1",{class:"company-info__heading"}," The Spirit of Digital Agency. ",-1),B=Object(c["e"])("p",{class:"company-info__text"}," Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt. ",-1),C={class:"btns_wrapper"},P=Object(c["f"])("More About Us"),A=Object(c["f"])("Get In Touch"),D=Object(c["e"])("div",{class:"slider_wrapper"},[Object(c["e"])("div",{class:"slider"},"SHOULD'VE BEEN A SLICK SLIDER :(")],-1);function E(e,t,n,r,o,a){var i=Object(c["l"])("base-button");return Object(c["i"])(),Object(c["d"])("section",T,[Object(c["e"])("div",M,[Object(c["e"])("div",I,[S,B,Object(c["e"])("div",C,[Object(c["g"])(i,null,{default:Object(c["n"])((function(){return[P]})),_:1}),Object(c["g"])(i,null,{default:Object(c["n"])((function(){return[A]})),_:1})])]),D])])}function H(e,t,n,r,o,a){return Object(c["i"])(),Object(c["d"])("button",{class:"main_btn",onClick:t[0]||(t[0]=function(){return a.setBtnHandler&&a.setBtnHandler.apply(a,arguments)})},[Object(c["k"])(e.$slots,"default")])}var N={methods:{setBtnHandler:function(){alert("Worked")}}};n("5a28");N.render=H;var R=N,V={components:{BaseButton:R}};n("c4b2");V.render=E;var F=V,G={class:"gallery"},L={class:"container"},J=Object(c["e"])("h2",{class:"gallery__heading"},"See some of our Creative work.",-1),U={class:"gallery__images-wrapper"},q=Object(c["e"])("a",{href:"#",class:"gallery__link"},"See more of these",-1);function K(e,t,n,r,o,a){return Object(c["i"])(),Object(c["d"])("section",G,[Object(c["e"])("div",L,[J,Object(c["e"])("div",U,[(Object(c["i"])(),Object(c["d"])(c["a"],null,Object(c["j"])(6,(function(e){return Object(c["e"])("div",{key:e,class:"gallery__image"})})),64))]),q])])}var W={};n("18db");W.render=K;var Y=W,$=n("bdea"),z=n.n($),Q=n("d4d4"),X=n.n(Q),Z=n("72cf"),ee=n.n(Z),te={class:"footer"},ne={class:"container"},ce=Object(c["e"])("div",{class:"footer__logo"},"DOOB",-1),re=Object(c["e"])("h3",{class:"footer__heading"},"CREATIVITY ABOVE",-1),oe=Object(c["e"])("div",{class:"footer__rights"},"© 2019 - Doob,All Right Reserved",-1),ae=Object(c["e"])("div",{class:"footer__icons"},[Object(c["e"])("img",{src:z.a}),Object(c["e"])("img",{src:X.a}),Object(c["e"])("img",{src:ee.a})],-1);function ie(e,t,n,r,o,a){var i=Object(c["l"])("Menu");return Object(c["i"])(),Object(c["d"])("footer",te,[Object(c["e"])("div",ne,[ce,re,Object(c["g"])(i),oe,ae])])}var ue={components:{Menu:_}};n("168d");ue.render=ie;var se=ue,le={components:{TheHeader:x,TheCompanyInfo:F,TheGallery:Y,TheFooter:se}};n("b601");le.render=r;var be=le;Object(c["b"])(be).mount("#app")},"5a28":function(e,t,n){"use strict";n("b154")},"62be":function(e,t,n){},"69a1":function(e,t,n){"use strict";n("62be")},"72cf":function(e,t,n){e.exports=n.p+"img/Dribble.80639058.svg"},"986a":function(e,t,n){},b144:function(e,t,n){},b154:function(e,t,n){},b58a:function(e,t,n){},b601:function(e,t,n){"use strict";n("b144")},bdea:function(e,t,n){e.exports=n.p+"img/Facebook.09346ca6.svg"},c4b2:function(e,t,n){"use strict";n("13af")},cdeb:function(e,t,n){},d4d4:function(e,t,n){e.exports=n.p+"img/Twitter.7a1d6d37.svg"},e7e5:function(e,t,n){}});
//# sourceMappingURL=app.08b2e60d.js.map