!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.catta=e():t.catta=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=1)}([function(t,e){t.exports={method:"get",type:"",timeout:3,resultType:"json",cross:!0,credential:!0}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u={form:"application/x-www-form-urlencoded",json:"application/json",multipart:"multipart/form-data",text:"text/plain"};function a(t){return"function"==typeof t}function c(t){var e="";return function(t,e){Object.keys(t).map(function(n){var o=t[n];return e(o,n)})}(t,function(t,n){e+=n+"="+t+"&"}),e.slice(0,-1)}var s=function(){},f=function(t){return t()}(function(){var t={request:"the request was failed, please confirm remote origin is correct",timeout:function(t){return"the request has been take over given time ("+t+")"},abort:"the request has been abort",loadScriptFail:function(t){return"Fail to load script, "+t.target.src},uploadFile:"Can't upload file without FormData support",notSupport:function(t){return"Current browser do not support "+t}};return function(e){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];var i=a(t[e])?t[e].apply(t,o):t[e];return{name:e,message:"[Catta]["+function(t){return t[0].toUpperCase()+t.slice(1)}(e)+" Error]: "+i}}});function d(t,e){return e&&(t+=(/\?/.test(t)?"&":"?")+c(e)),t}function p(t,e){if(e instanceof HTMLFormElement){if(!m.formData)throw new Error(utils.throwError("notSupport","FormData").message);return{contentType:u.form,data:new FormData(e)}}return function(t){return"object"===(void 0===t?"undefined":i(t))&&t.constructor===Object}(e)?{contentType:u.json,data:"post"===t?JSON.stringify(e):e}:{contentType:u.text,data:e}}var l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!m.promise)throw new Error(f("notSupport","Promise").message);return e?Object.assign(r.a,t):Object.assign({},r.a,t)},m={promise:a(window.Promise),globalFetch:a(window.fetch),formData:a(window.FormData)},y=function(t,e){e=l(e);var n=new XMLHttpRequest;return new Promise(function(o,r){n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE)if(200===n.status){var t=void 0;t="json"===e.resultType?JSON.parse(n.responseText):"response"===e.resultType?n.response:n.responseText,o(t)}else r(f("request"))},n.onabort=function(){return r(f("abort"))},n.ontimeout=function(){return r(f("timeout",e.timeout+"s"))};var i=p(e.method,e.data);"get"===e.method&&(t=d(t,i.data)),n.open(e.method.toUpperCase(),t),n.timeout=1e3*e.timeout+50,n.withCredentials=e.credential,i.contentType&&n.setRequestHeader("Content-Type",i.contentType),e.headers&&Object.keys(e.headers).forEach(function(t){n.setRequestHeader(t,e.headers[t])}),"post"===e.method?n.send(i.data):n.send()})},b=function(t,e){return e=l(e),new Promise(function(n,o){if(m.globalFetch){var r={};if(r.method=e.method.toUpperCase(),r.mode=e.cross?"cors":"same-origin",r.credentials=e.credential?"include":"omit",e.data){var i=p(e.method,e.data);i.contentType&&(r.headers={"Content-Type":i.contentType}),e.headers&&Object.assign(r.headers,e.headers),"post"===e.method?r.body=i.data:t=d(t,i.data)}var u=window.setTimeout(function(){o(f("timeout",e.timeout+"s"))},1e3*e.timeout+50);fetch(t,r).then(function(t){window.clearTimeout(u);var o=void 0;o="response"===e.resultType?t:"json"===e.resultType?t.json():t.text(),n(o)}).catch(function(t){window.clearTimeout(u),o(f("request"),t)})}else o(f("notSupport","GlobalFetch"))})};function h(t,e){if(t){var n=document.createElement("script");return n.src=t,n.charset="UTF-8",new Promise(function(t,e){n.onload=function(){t(),document.body.removeChild(n)},n.onerror=function(t){e(new Error("Fail to load: "+t.target.src))},document.body.appendChild(n)})}}var w=function(t,e){return e=l(e),new Promise(function(n,o){var r=e.jsonp||{},i=String(Math.random()).replace(".",""),u=r.callbackName||"jsonp"+i;document.body||document.head;h(d(t,Object.assign({callback:u},e.data))).catch(function(){o(f("request")),window.clearTimeout(c)});var a=function(){r.callbackName||(window[u]=s)},c=window.setTimeout(function(){a(),o(f("timeout",e.timeout+"s"))},1e3*e.timeout+50);window[u]=function(){window.clearTimeout(c),n.apply(void 0,arguments),a()}})};n.d(e,"customAdapter",function(){return g}),n.d(e,"globalConfig",function(){return j}),n.d(e,"ajax",function(){return T}),n.d(e,"jsonp",function(){return S}),n.d(e,"fetch",function(){return x}),n.d(e,"getScript",function(){return O});var v={};e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("ajax"===e.type)return y(t,e);if("jsonp"===e.type)return w(t,e);if("fetch"===e.type)return b(t,e);if("script"===e.type)return h(t);for(var n in v){var o=v[n];if(o.detector(e))return o.processor(t,e)}return m.globalFetch?b(t,e):y(t,e)};function g(t,e){v[t]=e}function j(t){l(t,!0)}var T=y,S=w,x=b,O=h}])});