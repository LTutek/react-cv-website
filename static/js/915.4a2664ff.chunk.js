"use strict";(self.webpackChunksdx_react_example=self.webpackChunksdx_react_example||[]).push([[915],{897:function(t,n,e){e.d(n,{S:function(){return u},i:function(){return d},r:function(){return o}});var r="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")(),u=o.Symbol,a=Object.prototype,c=a.hasOwnProperty,f=a.toString,l=u?u.toStringTag:void 0;var s=Object.prototype.toString;var h=u?u.toStringTag:void 0;function v(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":h&&h in Object(t)?function(t){var n=c.call(t,l),e=t[l];try{t[l]=void 0;var r=!0}catch(o){}var i=f.call(t);return r&&(n?t[l]=e:delete t[l]),i}(t):function(t){return s.call(t)}(t)}function d(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==v(t)}},2915:function(t,n,e){e.r(n),e.d(n,{sdx_itunes_autocomplete:function(){return j}});var r=e(5671),i=e(3144),o=e(9187),u=e(897);function a(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}var c=function(){return u.r.Date.now()},f=/\s/;var l=/^\s+/;function s(t){return t?t.slice(0,function(t){for(var n=t.length;n--&&f.test(t.charAt(n)););return n}(t)+1).replace(l,""):t}var h=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,d=/^0o[0-7]+$/i,p=parseInt;function g(t){if("number"==typeof t)return t;if((0,u.i)(t))return NaN;if(a(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=a(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=s(t);var e=v.test(t);return e||d.test(t)?p(t.slice(2),e?2:8):h.test(t)?NaN:+t}var m=Math.max,y=Math.min;function b(t,n,e){var r,i,o,u,f,l,s=0,h=!1,v=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(n){var e=r,o=i;return r=i=void 0,s=n,u=t.apply(o,e)}function b(t){return s=t,f=setTimeout(x,n),h?p(t):u}function j(t){var e=t-l;return void 0===l||e>=n||e<0||v&&t-s>=o}function x(){var t=c();if(j(t))return T(t);f=setTimeout(x,function(t){var e=n-(t-l);return v?y(e,o-(t-s)):e}(t))}function T(t){return f=void 0,d&&r?p(t):(r=i=void 0,u)}function O(){var t=c(),e=j(t);if(r=arguments,i=this,l=t,e){if(void 0===f)return b(l);if(v)return clearTimeout(f),f=setTimeout(x,n),p(l)}return void 0===f&&(f=setTimeout(x,n)),u}return n=g(n)||0,a(e)&&(h=!!e.leading,o=(v="maxWait"in e)?m(g(e.maxWait)||0,n):o,d="trailing"in e?!!e.trailing:d),O.cancel=function(){void 0!==f&&clearTimeout(f),s=0,r=l=i=f=void 0},O.flush=function(){return void 0===f?u:T(c())},O}var j=function(){function t(n){(0,r.Z)(this,t),(0,o.r)(this,n),this.artists=[],this.loading=!1,this.fetchThrottled=function(t,n,e){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return a(e)&&(r="leading"in e?!!e.leading:r,i="trailing"in e?!!e.trailing:i),b(t,n,{leading:r,maxWait:n,trailing:i})}(this.fetch,500)}return(0,i.Z)(t,[{key:"onChange",value:function(t){this.loading=!0,this.fetchThrottled(t)}},{key:"fetch",value:function(t){function n(n){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t){var n=this;this.artists=[],t.length<3?this.loading=!1:fetch("https://itunes.apple.com/search?term=".concat(encodeURI(t),"&entity=musicArtist&limit=10"),{method:"post"}).then((function(t){return t.json()})).then((function(t){return n.artists=t.results.map((function(t){return t.artistName}))})).then((function(){return setTimeout((function(){n.loading=!1}),100)}))}))},{key:"render",value:function(){var t=this;return(0,o.h)("sdx-select",{label:"Your favourite artist on iTunes",placeholder:"Search artists...",onInput:function(n){var e=n.target.value;t.onChange(e[0])},keyboardBehavior:"autocomplete",filterFunction:function(){return!0},loading:this.loading},this.artists.map((function(t){return(0,o.h)("sdx-select-option",null,t)})))}}]),t}()}}]);
//# sourceMappingURL=915.4a2664ff.chunk.js.map