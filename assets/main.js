!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";var r=u(n(0));n(3);var o=n(4),a=u(n(5));function u(t){return t&&t.__esModule?t:{default:t}}function i(){var t=function(t){return[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(document.getElementsByName(t)))};t("card.title").forEach(function(t){var e=["#f44336","#009688","#4caf50","#ffc107","#e91e63"];t.style.color=e[Math.floor(Math.random()*e.length)]}),t("slot").forEach(function(t){t.addEventListener("click",function(){var e=t.querySelector(".body.collapsible");"true"===e.getAttribute("data-collapsed")?((0,o.expandSection)(e),e.setAttribute("data-collapsed","false")):(0,o.collapseSection)(e)})}),(0,r.default)(start)||(0,a.default)("counter",start)}"complete"===document.readyState||"loading"!==document.readyState?i():document.addEventListener("DOMContentLoaded",i)},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.collapseSection=function(t){var e=t.scrollHeight,n=t.style.transition;t.style.transition="",requestAnimationFrame(function(){t.style.height=e+"px",t.style.transition=n,requestAnimationFrame(function(){t.style.height="0px"})}),t.setAttribute("data-collapsed","true")},e.expandSection=function(t){t.style.height=t.scrollHeight+"px",t.addEventListener("transitionend",function e(){t.removeEventListener("transitionend",e),t.style.height=null}),t.setAttribute("data-collapsed","false")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(6)),o=a(n(0));function a(t){return t&&t.__esModule?t:{default:t}}function u(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}e.default=function(t,e){var n=document.getElementById(t);if((0,o.default)(e)||(0,r.default)(n))return;var a={days:n.querySelector(".days"),hours:n.querySelector(".hours"),minutes:n.querySelector(".minutes"),seconds:n.querySelector(".seconds")};l();var i=setInterval(l,s(1));function l(){var t=d(e);a.days.innerHTML=t.days,a.hours.innerHTML=("0"+t.hours).slice(-2),a.minutes.innerHTML=("0"+t.minutes).slice(-2),a.seconds.innerHTML=("0"+t.seconds).slice(-2),t.total<=c(10)&&([].concat(u(document.getElementsByClassName("countdown")))[0].classList.toggle("hidden"),[].concat(u(document.getElementsByClassName("livestream")))[0].classList.toggle("hidden"),clearInterval(i))}};var i=function(t){return function(){return t*(arguments.length<=0?void 0:arguments[0])}},s=i(1e3),c=i(s(60)),l=i(c(60)),d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(new Date).getTime();return{total:t-e,days:Math.floor((t-e)/l(24)),hours:Math.floor((t-e)/l(1)%24),minutes:Math.floor((t-e)/c(1)%24),seconds:Math.floor((t-e)/s(1)%60)}}},function(t,e){t.exports=function(t){return null===t}}]);