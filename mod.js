// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol.toStringTag:"";var n=t&&"symbol"==typeof Symbol.toStringTag?function(t){var n,l,a,f,y;if(null==t)return r.call(t);l=t[e],y=e,n=null!=(f=t)&&o.call(f,y);try{t[e]=void 0}catch(o){return r.call(t)}return a=r.call(t),n?t[e]=l:delete t[e],a}:function(t){return r.call(t)},l="function"==typeof ArrayBuffer;function a(t){return l&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===n(t)}export{a as default};
//# sourceMappingURL=mod.js.map
