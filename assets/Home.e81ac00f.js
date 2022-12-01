import{_ as st}from"./line_bnr01.bc4c66f3.js";import{c as ct,g as lt,o as ut,a as at,r as dt,b as ft,d as mt,e as m,f as et,w as ot,F as pt,h as Z,i as C}from"./index.ae8501c5.js";const bt="/assets/fv_letter.65f67d7d.png",vt="/assets/fv_ttl.50890815.png",_t="/assets/fv_deco01.e8922a97.png",gt="/assets/fv_deco02.38de1b93.png",ht="/assets/ico_badge.48b8f503.png",yt="/assets/flow_img01.e9ea8b75.png",wt="/assets/btn_bg.b9a87813.png",xt="/assets/flow_img02.d9f00aca.png";var rt={exports:{}};(function(nt,P){(function(h,r){nt.exports=r()})(ct,function(){return function(h){function r(o){if(i[o])return i[o].exports;var c=i[o]={exports:{},id:o,loaded:!1};return h[o].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}var i={};return r.m=h,r.c=i,r.p="dist/",r(0)}([function(h,r,i){function o(n){return n&&n.__esModule?n:{default:n}}var c=Object.assign||function(n){for(var k=1;k<arguments.length;k++){var T=arguments[k];for(var H in T)Object.prototype.hasOwnProperty.call(T,H)&&(n[H]=T[H])}return n},v=i(1),w=(o(v),i(6)),a=o(w),p=i(7),s=o(p),u=i(8),l=o(u),b=i(9),j=o(b),S=i(10),Y=o(S),K=i(11),U=o(K),J=i(14),R=o(J),N=[],G=!1,_={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},E=function(){var n=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(n&&(G=!0),G)return N=(0,U.default)(N,_),(0,Y.default)(N,_.once),N},F=function(){N=(0,R.default)(),E()},e=function(){N.forEach(function(n,k){n.node.removeAttribute("data-aos"),n.node.removeAttribute("data-aos-easing"),n.node.removeAttribute("data-aos-duration"),n.node.removeAttribute("data-aos-delay")})},t=function(n){return n===!0||n==="mobile"&&j.default.mobile()||n==="phone"&&j.default.phone()||n==="tablet"&&j.default.tablet()||typeof n=="function"&&n()===!0},d=function(n){_=c(_,n),N=(0,R.default)();var k=document.all&&!window.atob;return t(_.disable)||k?e():(_.disableMutationObserver||l.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),_.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",_.easing),document.querySelector("body").setAttribute("data-aos-duration",_.duration),document.querySelector("body").setAttribute("data-aos-delay",_.delay),_.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?E(!0):_.startEvent==="load"?window.addEventListener(_.startEvent,function(){E(!0)}):document.addEventListener(_.startEvent,function(){E(!0)}),window.addEventListener("resize",(0,s.default)(E,_.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(E,_.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,Y.default)(N,_.once)},_.throttleDelay)),_.disableMutationObserver||l.default.ready("[data-aos]",F),N)};h.exports={init:d,refresh:E,refreshHard:F}},function(h,r){},,,,,function(h,r){(function(i){function o(t,d,n){function k(f){var O=A,B=z;return A=z=void 0,$=f,x=t.apply(B,O)}function T(f){return $=f,y=setTimeout(W,d),I?k(f):x}function H(f){var O=f-M,B=f-$,it=d-O;return D?F(it,L-B):it}function V(f){var O=f-M,B=f-$;return M===void 0||O>=d||O<0||D&&B>=L}function W(){var f=e();return V(f)?X(f):void(y=setTimeout(W,H(f)))}function X(f){return y=void 0,g&&A?k(f):(A=z=void 0,x)}function tt(){y!==void 0&&clearTimeout(y),$=0,A=M=z=y=void 0}function Q(){return y===void 0?x:X(e())}function q(){var f=e(),O=V(f);if(A=arguments,z=this,M=f,O){if(y===void 0)return T(M);if(D)return y=setTimeout(W,d),k(M)}return y===void 0&&(y=setTimeout(W,d)),x}var A,z,L,x,y,M,$=0,I=!1,D=!1,g=!0;if(typeof t!="function")throw new TypeError(u);return d=p(d)||0,v(n)&&(I=!!n.leading,D="maxWait"in n,L=D?E(p(n.maxWait)||0,d):L,g="trailing"in n?!!n.trailing:g),q.cancel=tt,q.flush=Q,q}function c(t,d,n){var k=!0,T=!0;if(typeof t!="function")throw new TypeError(u);return v(n)&&(k="leading"in n?!!n.leading:k,T="trailing"in n?!!n.trailing:T),o(t,d,{leading:k,maxWait:d,trailing:T})}function v(t){var d=typeof t>"u"?"undefined":s(t);return!!t&&(d=="object"||d=="function")}function w(t){return!!t&&(typeof t>"u"?"undefined":s(t))=="object"}function a(t){return(typeof t>"u"?"undefined":s(t))=="symbol"||w(t)&&_.call(t)==b}function p(t){if(typeof t=="number")return t;if(a(t))return l;if(v(t)){var d=typeof t.valueOf=="function"?t.valueOf():t;t=v(d)?d+"":d}if(typeof t!="string")return t===0?t:+t;t=t.replace(j,"");var n=Y.test(t);return n||K.test(t)?U(t.slice(2),n?2:8):S.test(t)?l:+t}var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u="Expected a function",l=NaN,b="[object Symbol]",j=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,K=/^0o[0-7]+$/i,U=parseInt,J=(typeof i>"u"?"undefined":s(i))=="object"&&i&&i.Object===Object&&i,R=(typeof self>"u"?"undefined":s(self))=="object"&&self&&self.Object===Object&&self,N=J||R||Function("return this")(),G=Object.prototype,_=G.toString,E=Math.max,F=Math.min,e=function(){return N.Date.now()};h.exports=c}).call(r,function(){return this}())},function(h,r){(function(i){function o(e,t,d){function n(g){var f=q,O=A;return q=A=void 0,M=g,L=e.apply(O,f)}function k(g){return M=g,x=setTimeout(V,t),$?n(g):L}function T(g){var f=g-y,O=g-M,B=t-f;return I?E(B,z-O):B}function H(g){var f=g-y,O=g-M;return y===void 0||f>=t||f<0||I&&O>=z}function V(){var g=F();return H(g)?W(g):void(x=setTimeout(V,T(g)))}function W(g){return x=void 0,D&&q?n(g):(q=A=void 0,L)}function X(){x!==void 0&&clearTimeout(x),M=0,q=y=A=x=void 0}function tt(){return x===void 0?L:W(F())}function Q(){var g=F(),f=H(g);if(q=arguments,A=this,y=g,f){if(x===void 0)return k(y);if(I)return x=setTimeout(V,t),n(y)}return x===void 0&&(x=setTimeout(V,t)),L}var q,A,z,L,x,y,M=0,$=!1,I=!1,D=!0;if(typeof e!="function")throw new TypeError(s);return t=a(t)||0,c(d)&&($=!!d.leading,I="maxWait"in d,z=I?_(a(d.maxWait)||0,t):z,D="trailing"in d?!!d.trailing:D),Q.cancel=X,Q.flush=tt,Q}function c(e){var t=typeof e>"u"?"undefined":p(e);return!!e&&(t=="object"||t=="function")}function v(e){return!!e&&(typeof e>"u"?"undefined":p(e))=="object"}function w(e){return(typeof e>"u"?"undefined":p(e))=="symbol"||v(e)&&G.call(e)==l}function a(e){if(typeof e=="number")return e;if(w(e))return u;if(c(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=c(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(b,"");var d=S.test(e);return d||Y.test(e)?K(e.slice(2),d?2:8):j.test(e)?u:+e}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",u=NaN,l="[object Symbol]",b=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,K=parseInt,U=(typeof i>"u"?"undefined":p(i))=="object"&&i&&i.Object===Object&&i,J=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,R=U||J||Function("return this")(),N=Object.prototype,G=N.toString,_=Math.max,E=Math.min,F=function(){return R.Date.now()};h.exports=o}).call(r,function(){return this}())},function(h,r){function i(p){var s=void 0,u=void 0;for(s=0;s<p.length;s+=1)if(u=p[s],u.dataset&&u.dataset.aos||u.children&&i(u.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(){return!!o()}function v(p,s){var u=window.document,l=o(),b=new l(w);a=s,b.observe(u.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function w(p){p&&p.forEach(function(s){var u=Array.prototype.slice.call(s.addedNodes),l=Array.prototype.slice.call(s.removedNodes),b=u.concat(l);if(i(b))return a()})}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){};r.default={isSupported:c,ready:v}},function(h,r){function i(u,l){if(!(u instanceof l))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var c=function(){function u(l,b){for(var j=0;j<b.length;j++){var S=b[j];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(l,S.key,S)}}return function(l,b,j){return b&&u(l.prototype,b),j&&u(l,j),l}}(),v=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function u(){i(this,u)}return c(u,[{key:"phone",value:function(){var l=o();return!(!v.test(l)&&!w.test(l.substr(0,4)))}},{key:"mobile",value:function(){var l=o();return!(!a.test(l)&&!p.test(l.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),u}();r.default=new s},function(h,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(c,v,w){var a=c.node.getAttribute("data-aos-once");v>c.position?c.node.classList.add("aos-animate"):typeof a<"u"&&(a==="false"||!w&&a!=="true")&&c.node.classList.remove("aos-animate")},o=function(c,v){var w=window.pageYOffset,a=window.innerHeight;c.forEach(function(p,s){i(p,a+w,v)})};r.default=o},function(h,r,i){function o(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(r,"__esModule",{value:!0});var c=i(12),v=o(c),w=function(a,p){return a.forEach(function(s,u){s.node.classList.add("aos-init"),s.position=(0,v.default)(s.node,p.offset)}),a};r.default=w},function(h,r,i){function o(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(r,"__esModule",{value:!0});var c=i(13),v=o(c),w=function(a,p){var s=0,u=0,l=window.innerHeight,b={offset:a.getAttribute("data-aos-offset"),anchor:a.getAttribute("data-aos-anchor"),anchorPlacement:a.getAttribute("data-aos-anchor-placement")};switch(b.offset&&!isNaN(b.offset)&&(u=parseInt(b.offset)),b.anchor&&document.querySelectorAll(b.anchor)&&(a=document.querySelectorAll(b.anchor)[0]),s=(0,v.default)(a).top,b.anchorPlacement){case"top-bottom":break;case"center-bottom":s+=a.offsetHeight/2;break;case"bottom-bottom":s+=a.offsetHeight;break;case"top-center":s+=l/2;break;case"bottom-center":s+=l/2+a.offsetHeight;break;case"center-center":s+=l/2+a.offsetHeight/2;break;case"top-top":s+=l;break;case"bottom-top":s+=a.offsetHeight+l;break;case"center-top":s+=a.offsetHeight/2+l}return b.anchorPlacement||b.offset||isNaN(p)||(u=p),s+u};r.default=w},function(h,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o){for(var c=0,v=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)c+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),v+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:v,left:c}};r.default=i},function(h,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(c){return{node:c}})};r.default=i}])})})(rt);const kt=lt(rt.exports),jt=Z('<section class="first-view"><dl class="first-view-box"><dt class="first-view-box__img"><img src="'+bt+'" alt=""></dt><dd class="first-view-box__ttl"><h2 class="first-view-box__ttl--img"><img src="'+vt+'" alt=""></h2><div class="first-view-box__ttl--deco01"><img src="'+_t+'" alt=""></div><div class="first-view-box__ttl--deco02"><img src="'+gt+'" alt=""></div></dd></dl></section>',1),Ot={class:"about"},St=m("h2",{class:"common-ttl01"},"\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9NFT\u30EC\u30BF\u30FC\u3063\u3066\uFF1F",-1),Nt={class:"about-box"},Mt=Z('<div class="about-box__item" data-aos="fade-in" data-aos-duration="3000"><h3 class="about-box__item--ttl">\u4E16\u754C\u306B\u305F\u3063\u305F1\u3064<br>\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u304B\u3089\u306E<span>NFT\u30EC\u30BF\u30FC</span></h3><p class="about-box__item--txt">\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u306E\u6545\u90F7\u3001\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9\u30FB\u65E7\u30E9\u30C3\u30D7\u30E9\u30F3\u30C9\u5DDE\u516C\u8A8D\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30AF\u30EA\u30B9\u30DE\u30B9\u307E\u3067\u306B\u304A\u5C4A\u3051\u3044\u305F\u3057\u307E\u3059\u3002</p></div><div class="about-box__item" data-aos="fade-in" data-aos-duration="3000"><h3 class="about-box__item--ttl">\u5927\u5207\u306A\u65B9\u306E\u304A\u540D\u524D\u304CNFT\u306B\u8A18\u8F09\u3055\u308C\u307E\u3059\u3002</h3><p class="about-box__item--example">\u4F8B\uFF1A\u306F\u3058\u3081\u3061\u3083\u3093\u3078</p></div><div class="about-box__item" data-aos="fade-in" data-aos-duration="3000"><h3 class="about-box__item--ttl">\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9\u306E\u4EBA\u6C17\u753B\u5BB6\u306B\u3088\u308B\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u306E\u6E29\u304B\u3044\u30A4\u30E9\u30B9\u30C8\u304C\u63CF\u304B\u308C\u3066\u3044\u307E\u3059\u3002</h3><div class="about-box__item--img"><img src="'+ht+'" alt="\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u306E\u6E29\u304B\u3044\u30A4\u30E9\u30B9\u30C8"></div></div>',3),At={class:"about-box__btn","data-aos":"fade-in","data-aos-duration":"3000"},Et=m("br",null,null,-1),Tt=Z('<section class="letter"><h2 class="common-ttl01">\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u304B\u3089\u306E\u624B\u7D19</h2><div class="letter__item" data-aos="fade-in" data-aos-duration="3000"><h3 class="letter__item--ttl"> \u304A\u7236\u3055\u3093\u3001\u304A\u6BCD\u3055\u3093\u304B\u3089<br> \u304A\u3058\u3044\u3061\u3083\u3093\u3001\u304A\u3070\u3042\u3061\u3083\u3093\u304B\u3089<br> \u304A\u53CB\u9054\u304B\u3089\u3084\u3054\u81EA\u5206\u7528\u306B\uFF01 </h3><p class="letter__item--txt">\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9\u306E\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u304B\u3089\u3042\u306A\u305F\u306E\u5927\u5207\u306A\u65B9\u3078\u5FC3\u6E29\u307E\u308B\u304A\u624B\u7D19\u3092\u304A\u5C4A\u3051\u3044\u305F\u3057\u307E\u3059\u3002\u304A\u624B\u7D19\u306B\u306F\u3001\u3042\u306A\u305F\u304B\u3089\u306E\u30AA\u30EA\u30B8\u30CA\u30EB\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u309260\u6587\u5B57\u307E\u3067\u5165\u308C\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002</p><p class="letter__item--txt">\u4E16\u754C\u306B\u305F\u3063\u305F\u4E00\u901A\u306E\u3001\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u3068\u3042\u306A\u305F\u306E\u5171\u540C\u4F5C\u696D\u306B\u3088\u308B\u300C\u5922\u306E\u30B3\u30E9\u30DC\u30EC\u30FC\u30B7\u30E7\u30F3\u300D\u3067\u3059\u3002</p><p class="letter__item--txt">\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9NFT\u30EC\u30BF\u30FC\u3092\u901A\u3057\u3066\u3001\u4E00\u4EBA\u3067\u3082\u591A\u304F\u306E\u65B9\u306B\u3001\u611B\u30FB\u5BDB\u5BB9\u30FB\u732E\u8EAB\u306E\u6C17\u6301\u3061\u3092\u5FD8\u308C\u305A\u3001\u3044\u3064\u3082\u5FC3\u306B\u5922\u3068\u30E6\u30FC\u30E2\u30A2\u3092\u6301\u3061\u7D9A\u3051\u3001\u611F\u52D5\u3068\u52C7\u6C17\u3092\u4E0E\u3048\u3089\u308C\u308B\u304A\u624B\u4F1D\u3044\u304C\u3067\u304D\u308C\u3070\u3068\u9858\u3063\u3066\u3044\u307E\u3059\u3002</p></div></section>',1),qt={class:"flow"},zt=m("h2",{class:"common-ttl01"},"\u304A\u7533\u3057\u8FBC\u307F\u624B\u9806",-1),Lt={class:"flow-list"},Dt={class:"flow-list__item","data-aos":"fade-in","data-aos-duration":"3000"},Pt=m("p",{class:"flow-list__item--num"},"1",-1),Ft=m("p",{class:"flow-list__item--ttl"},[m("span",null,"DIVER"),C("\u30A6\u30A9\u30EC\u30C3\u30C8"),m("br"),C(" \u30C0\u30A6\u30F3\u30ED\u30FC\u30C9 ")],-1),Ht={class:"flow-list__item--wallet"},$t=m("img",{src:yt,alt:"DIVER"},null,-1),It=m("span",null,"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u624B\u9806\u306F\u3053\u3061\u3089",-1),Bt={class:"flow-list__item","data-aos":"fade-in","data-aos-duration":"3000"},Ct=m("p",{class:"flow-list__item--num"},"2",-1),Vt=m("p",{class:"flow-list__item--ttl"},[C(" \u5C02\u7528\u30D5\u30A9\u30FC\u30E0\u304B\u3089"),m("br"),C(" \u304A\u7533\u3057\u8FBC\u307F ")],-1),Wt=m("img",{src:wt,alt:"\u304A\u7533\u3057\u8FBC\u307F\u306F\u3053\u3061\u3089"},null,-1),Yt=m("span",null,[C("\u304A\u7533\u3057\u8FBC\u307F\u306F"),m("br"),C("\u3053\u3061\u3089")],-1),Rt=Z('<div class="flow-list__item" data-aos="fade-in" data-aos-duration="3000"><p class="flow-list__item--num">3</p><p class="flow-list__item--ttl"> 12\u670825\u65E5\u306ENFT\u30EC\u30BF\u30FC<br> \u5230\u7740\u3092\u5F85\u3064 </p><div class="flow-list__item--img"><img src="'+xt+'" alt=""></div></div>',1),Gt=m("div",{class:"flow-bnr","data-aos":"fade-in","data-aos-duration":"3000"},[m("p",{class:"flow-bnr__ttl"},"\u308F\u304B\u3089\u306A\u3044\u3053\u3068\u304C\u3042\u308C\u3070LINE\u3067\u8CEA\u554F\u3057\u3088\u3046\uFF01"),m("a",{href:"https://lin.ee/RnUwEAN",target:"_blank",rel:"noopener",class:"flow-bnr__img"},[m("img",{src:st,alt:"\u516C\u5F0FLINE\u30B5\u30DD\u30FC\u30C8!"})])],-1),Jt={__name:"Home",setup(nt){return ut(()=>{const P=document.querySelector("main");P.classList.remove(...P.classList),P.classList.add("main-wrap")}),at(()=>{kt.init()}),at(()=>{const P="\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u304B\u3089\u306ENFT",h="\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u306E\u6545\u90F7\u3001\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9\u30FB\u65E7\u30E9\u30C3\u30D7\u30E9\u30F3\u30C9\u5DDE\u516C\u8A8D\u306ENFT\u30EC\u30BF\u30FC\u3092\u30AF\u30EA\u30B9\u30DE\u30B9\u307E\u3067\u306B\u304A\u5C4A\u3051\u3044\u305F\u3057\u307E\u3059\u3002",r="https://santa-nft.com/",i="website";document.querySelector("link[rel='canonical']").setAttribute("href",r),document.title=P,document.querySelector("meta[name='description']").setAttribute("content",h),document.querySelector("meta[property='og:title']").setAttribute("content",P),document.querySelector("meta[property='og:description']").setAttribute("content",h),document.querySelector("meta[property='og:type']").setAttribute("content",i),document.querySelector("meta[property='og:url']").setAttribute("content",r)}),(P,h)=>{const r=dt("router-link");return ft(),mt(pt,null,[jt,m("section",Ot,[St,m("div",Nt,[Mt,m("div",At,[et(r,{class:"about-box__btn--link",to:{name:"Application"}},{default:ot(()=>[C(" \u304A\u7533\u3057\u8FBC\u307F\u306F"),Et,C("\u3053\u3061\u3089 ")]),_:1})])])]),Tt,m("section",qt,[zt,m("div",Lt,[m("div",Dt,[Pt,Ft,m("div",Ht,[$t,et(r,{class:"header-nav__list--link",to:{name:"Howto"}},{default:ot(()=>[It]),_:1})])]),m("div",Bt,[Ct,Vt,et(r,{class:"flow-list__item--btn",to:{name:"Application"}},{default:ot(()=>[Wt,Yt]),_:1})]),Rt]),Gt])],64)}}};export{Jt as default};
