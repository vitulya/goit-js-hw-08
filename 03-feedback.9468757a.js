function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,r,i,f,u,a,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function h(e){return c=e,u=setTimeout(E,t),l?b(e):f}function j(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-c>=i}function E(){var e=v();if(j(e))return w(e);u=setTimeout(E,function(e){var n=t-(e-a);return s?m(n,i-(e-c)):n}(e))}function w(e){return u=void 0,p&&o?b(e):(o=r=void 0,f)}function O(){var e=v(),n=j(e);if(o=arguments,r=this,a=e,n){if(void 0===u)return h(a);if(s)return u=setTimeout(E,t),b(a)}return void 0===u&&(u=setTimeout(E,t)),f}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},O.flush=function(){return void 0===u?f:w(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const b={formEl:document.querySelector(".feedback-form")},{elements:{email:h,message:j}}=b.formEl;function E(){const e=localStorage.getItem("feedback-form-state");try{return JSON.parse(e)}catch{return e}}b.formEl.addEventListener("input",e(t)((function(){const e={[h.name]:h.value,[j.name]:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),b.formEl.addEventListener("submit",(function(e){e.preventDefault(),console.log(E()),localStorage.clear(),e.target.reset()})),function(){const e=E();null!==e&&(h.value=e.email,j.value=e.message)}();
//# sourceMappingURL=03-feedback.9468757a.js.map
