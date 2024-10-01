// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol:void 0,e="function"==typeof n?n.toStringTag:"";var f=t&&"symbol"==typeof Symbol.toStringTag?function(t){var n,f,l,a,y;if(null==t)return o.call(t);f=t[e],y=e,n=null!=(a=t)&&r.call(a,y);try{t[e]=void 0}catch(r){return o.call(t)}return l=o.call(t),n?t[e]=f:delete t[e],l}:function(t){return o.call(t)},l="function"==typeof ArrayBuffer;function a(t){return l&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===f(t)}export{a as default};
//# sourceMappingURL=mod.js.map
