(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{108:function(e,t){},173:function(e,t,n){e.exports={background:"Login_background__1xZ4L",gradient:"Login_gradient__1dSGH",heading:"Login_heading__ZX2i0",Form:"Login_Form__i-yGQ",h3:"Login_h3__17oOv",Personal:"Login_Personal__q2ZQW",input:"Login_input__1r6WH",p:"Login_p__h1Ubf",lower:"Login_lower__3ktGX",btn:"Login_btn__2yFXR",Handles:"Login_Handles__un5b6",a:"Login_a__12HSN"}},183:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return _});var r=n(4),a=n(11),o=n(3),i=n.n(o),c=n(173),s=n.n(c),u=n(5),l=n(111),f=n(34),d=n(184),h=(n(107),n(33)),p=n(30),m=n(8),v=n(21),y=n(98),g=n(36),b=n(35);function w(){w=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(S){s=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),c=new j(a||[]);return r(i,"_invoke",{value:x(e,n,c)}),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var f={};function d(){}function h(){}function p(){}var m={};s(m,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&n.call(y,o)&&(m=y);var g=p.prototype=d.prototype=Object.create(m);function b(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function _(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(a,i){!function r(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(s.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=p,r(g,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=s(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(_.prototype),s(_.prototype,i,function(){return this}),e.AsyncIterator=_,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new _(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(g),s(g,c,"Generator"),s(g,o,function(){return this}),s(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=N,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function _(e){var t=e.serverSystemUrl,n=(e.auth,e.setAuth);console.log("===>",t),p.a.registerPlugin(v.a);var c=Object(o.useRef)(null),_=Object(o.useRef)(null),x=Object(u.n)(),E=(Object(u.j)(),Object(u.l)()),L=(x.name,x.id,Object(o.useState)(new m.d({paused:!1}))),O=Object(a.a)(L,1)[0],j=Object(o.useState)(new m.d({paused:!1})),N=Object(a.a)(j,1)[0],k=Object(o.useState)(!1),S=Object(a.a)(k,2),P=S[0],G=S[1],M=Object(o.useState)("logged in successfully!"),F=Object(a.a)(M,2),T=F[0],C=F[1],I=Object(l.a)({mode:"onChange"}),z=I.register,H=I.formState.errors,X=I.handleSubmit,Y=function(){var e=Object(r.a)(w().mark(function e(r){var a;return w().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("---\x3e",r),e.next=3,d.a.post("".concat(t,"/auth/login"),r,{validateStatus:!1,withCredentials:!0});case 3:a=e.sent,C(a.data.msg),200===a.status?(console.log("logged as -",a.data.user.role),C(a.data.msg),G(!P),setTimeout(function(){n(a.data.user.role),E("/competitions")},2e3)):E("/registration"),console.log("this is data of response ",a.data);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),q=Object(o.useCallback)(function(){var e=Object(r.a)(w().mark(function e(t){return w().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]),A=Object(o.useCallback)(function(){var e=Object(r.a)(w().mark(function e(t){return w().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]),R=Object(o.useState)({x:0,y:0}),W=Object(a.a)(R,2),Z=W[0],B=W[1],J={default:{x:Z.x-10,y:Z.y-12},text:{height:70,width:70,x:Z.x-33,y:Z.y-35,backgroundColor:"white",mixBlendMode:"difference"},subtext:{height:36,width:36,x:Z.x-16,y:Z.y-18,borderWidth:"2px"},btn:{height:40,width:40,x:Z.x-18,y:Z.y-20,backgroundColor:"white",mixBlendMode:"difference"},handlebefore:{opacity:0},handleafter:{opacity:1}},Q=Object(o.useState)("default"),U=Object(a.a)(Q,2),D=U[0],K=U[1],V=function(){return K("subtext")},$=function(){return K("btn")},ee=function(){return K("default")};Object(o.useEffect)(function(){var e=function(e){B({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),O.fromTo(c,1,{y:"-100%",opacity:0,ease:m.b.easeOut},{y:0,opacity:1,ease:m.b.easeOut}),N.fromTo(_,1,{opacity:0,ease:m.b.easeOut},{opacity:1,ease:m.b.easeOut}).delay(.5),function(){window.removeEventListener("mousemove",e)}},[]);var te=window.screen.width>600;return i.a.createElement("div",{className:"".concat(s.a.background)},i.a.createElement(h.motion.div,{className:"cursor",variants:J,animate:D,transition:{x:{delay:0},y:{delay:0}}}),i.a.createElement(h.motion.div,{onMouseEnter:$,onMouseLeave:ee,variants:J,initial:"handlebefore",animate:"handleafter",transition:{duration:"1",delay:"0.5"}},i.a.createElement(f.a,null)),P?i.a.createElement(y.a,{message:T}):null,i.a.createElement("div",{ref:function(e){c=e},onMouseEnter:function(){return K("text")},onMouseLeave:ee,className:"".concat(s.a.heading)},"Login"),i.a.createElement("form",{ref:function(e){_=e},onSubmit:X(Y),className:"".concat(s.a.Form)},i.a.createElement("div",{className:"".concat(s.a.Personal)},i.a.createElement("input",Object.assign({onMouseEnter:V,onMouseLeave:ee,className:"".concat(s.a.input),placeholder:"Email*",type:"text"},z("email",{required:"This field is required",pattern:{value:NaN,message:"Invalid Email address"}}))),H.email&&i.a.createElement("p",{className:"".concat(s.a.p)},H.email.message),i.a.createElement("input",Object.assign({onMouseEnter:V,onMouseLeave:ee,className:"".concat(s.a.input),placeholder:"Password*",type:"password"},z("password",{required:"You must specify a password",minLength:{value:4,message:"Password must have at least 8 characters"}}))),H.password&&i.a.createElement("p",{className:"".concat(s.a.p)},H.password.message),i.a.createElement("input",{onMouseEnter:$,onMouseLeave:ee,type:"submit",value:"LOGIN",className:"".concat(s.a.btn)}),i.a.createElement("div",{className:s.a.lower},i.a.createElement("a",{href:"/registration",className:s.a.a},"Don't have an account?"),i.a.createElement("a",{href:"",className:s.a.a},"Forgot Password?")))),te&&i.a.createElement(g.a,{id:"tsparticles",init:q,loaded:A,options:{particles:{number:{value:40,density:{enable:!0,value_area:500}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:3},image:{src:"",width:100,height:100}},opacity:{value:.7,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!0,distance:64.09640098708464,color:"#ffffff",opacity:.5,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"bubble"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:85.20998174071826,size:0,duration:2,opacity:0,speed:3},repulse:{distance:170,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,fpsLimit:120,fullScreen:{enable:!0,zIndex:0}}}))}},98:function(e,t,n){"use strict";var r=n(11),a=n(3),o=n.n(a),i=(n(99),n(33));t.a=function(e){var t=e.message,n=Object(a.useState)(!0),c=Object(r.a)(n,2),s=c[0],u=c[1];return Object(a.useEffect)(function(){var e=setTimeout(function(){u(!1)},2200);return function(){return clearTimeout(e)}},[t]),s?o.a.createElement(o.a.Fragment,null,o.a.createElement(i.motion.div,{animate:{y:["100vh","0vh"]},transition:{duration:.8},className:"flash-message"},t)):null}},99:function(e,t,n){}}]);
//# sourceMappingURL=14.6e4094ae.chunk.js.map