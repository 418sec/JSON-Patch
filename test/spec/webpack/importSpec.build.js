!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"JsonPatchError",function(){return m}),n.d(o,"deepClone",function(){return y}),n.d(o,"getValueByPointer",function(){return A}),n.d(o,"applyOperation",function(){return _}),n.d(o,"applyPatch",function(){return E}),n.d(o,"applyReducer",function(){return g}),n.d(o,"validator",function(){return P}),n.d(o,"validate",function(){return x}),n.d(o,"_areEquals",function(){return T});var r={};n.r(r),n.d(r,"unobserve",function(){return C}),n.d(r,"observe",function(){return R}),n.d(r,"generate",function(){return I}),n.d(r,"compare",function(){return B});var i={};n.r(i),n.d(i,"JsonPatchError",function(){return w}),n.d(i,"deepClone",function(){return s}),n.d(i,"escapePathComponent",function(){return h}),n.d(i,"unescapePathComponent",function(){return l}),n.d(i,"default",function(){return S}),n.d(i,"getValueByPointer",function(){return A}),n.d(i,"applyOperation",function(){return _}),n.d(i,"applyPatch",function(){return E}),n.d(i,"applyReducer",function(){return g}),n.d(i,"validator",function(){return P}),n.d(i,"validate",function(){return x}),n.d(i,"_areEquals",function(){return T}),n.d(i,"unobserve",function(){return C}),n.d(i,"observe",function(){return R}),n.d(i,"generate",function(){return I}),n.d(i,"compare",function(){return B});
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017 Joachim Wester
 * MIT license
 */
var a,u=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=Object.prototype.hasOwnProperty;function c(e,t){return p.call(e,t)}function f(e){if(Array.isArray(e)){for(var t=new Array(e.length),n=0;n<t.length;n++)t[n]=""+n;return t}if(Object.keys)return Object.keys(e);t=[];for(var o in e)c(e,o)&&t.push(o);return t}function s(e){switch(typeof e){case"object":return JSON.parse(JSON.stringify(e));case"undefined":return null;default:return e}}function d(e){for(var t,n=0,o=e.length;n<o;){if(!((t=e.charCodeAt(n))>=48&&t<=57))return!1;n++}return!0}function h(e){return-1===e.indexOf("/")&&-1===e.indexOf("~")?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function l(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}function v(e,t){var n=[e];for(var o in t){var r="object"==typeof t[o]?JSON.stringify(t[o],null,2):t[o];void 0!==r&&n.push(o+": "+r)}return n.join("\n")}var w=function(e){function t(t,n,o,r,i){var a=this.constructor,u=e.call(this,v(t,{name:n,index:o,operation:r,tree:i}))||this;return u.name=n,u.index=o,u.operation=r,u.tree=i,Object.setPrototypeOf(u,a.prototype),u.message=v(t,{name:n,index:o,operation:r,tree:i}),u}return u(t,e),t}(Error),m=w,y=s,b={add:function(e,t,n){return e[t]=this.value,{newDocument:n}},remove:function(e,t,n){var o=e[t];return delete e[t],{newDocument:n,removed:o}},replace:function(e,t,n){var o=e[t];return e[t]=this.value,{newDocument:n,removed:o}},move:function(e,t,n){var o=A(n,this.path);o&&(o=s(o));var r=_(n,{op:"remove",path:this.from}).removed;return _(n,{op:"add",path:this.path,value:r}),{newDocument:n,removed:o}},copy:function(e,t,n){var o=A(n,this.from);return _(n,{op:"add",path:this.path,value:s(o)}),{newDocument:n}},test:function(e,t,n){return{newDocument:n,test:T(e[t],this.value)}},_get:function(e,t,n){return this.value=e[t],{newDocument:n}}},O={add:function(e,t,n){return d(t)?e.splice(t,0,this.value):e[t]=this.value,{newDocument:n,index:t}},remove:function(e,t,n){return{newDocument:n,removed:e.splice(t,1)[0]}},replace:function(e,t,n){var o=e[t];return e[t]=this.value,{newDocument:n,removed:o}},move:b.move,copy:b.copy,test:b.test,_get:b._get};function A(e,t){if(""==t)return e;var n={op:"_get",path:t};return _(e,n),n.value}function _(e,t,n,o,r,i){if(void 0===n&&(n=!1),void 0===o&&(o=!0),void 0===r&&(r=!0),void 0===i&&(i=0),n&&("function"==typeof n?n(t,0,e,t.path):P(t,0)),""===t.path){var a={newDocument:e};if("add"===t.op)return a.newDocument=t.value,a;if("replace"===t.op)return a.newDocument=t.value,a.removed=e,a;if("move"===t.op||"copy"===t.op)return a.newDocument=A(e,t.from),"move"===t.op&&(a.removed=e),a;if("test"===t.op){if(a.test=T(e,t.value),!1===a.test)throw new m("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return a.newDocument=e,a}if("remove"===t.op)return a.removed=e,a.newDocument=null,a;if("_get"===t.op)return t.value=e,a;if(n)throw new m("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,t,e);return a}o||(e=s(e));var u=(t.path||"").split("/"),p=e,c=1,f=u.length,h=void 0,v=void 0,w=void 0;for(w="function"==typeof n?n:P;;){if((v=u[c])&&-1!=v.indexOf("~")&&(v=l(v)),r&&"__proto__"==v)throw new TypeError("JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(n&&void 0===h&&(void 0===p[v]?h=u.slice(0,c).join("/"):c==f-1&&(h=t.path),void 0!==h&&w(t,0,e,h)),c++,Array.isArray(p)){if("-"===v)v=p.length;else{if(n&&!d(v))throw new m("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,t,e);d(v)&&(v=~~v)}if(c>=f){if(n&&"add"===t.op&&v>p.length)throw new m("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,t,e);if(!1===(a=O[t.op].call(t,p,v,e)).test)throw new m("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return a}}else if(c>=f){if(!1===(a=b[t.op].call(t,p,v,e)).test)throw new m("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return a}if(p=p[v],n&&c<f&&(!p||"object"!=typeof p))throw new m("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,t,e)}}function E(e,t,n,o,r){if(void 0===o&&(o=!0),void 0===r&&(r=!0),n&&!Array.isArray(t))throw new m("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");o||(e=s(e));for(var i=new Array(t.length),a=0,u=t.length;a<u;a++)i[a]=_(e,t[a],n,!0,r,a),e=i[a].newDocument;return i.newDocument=e,i}function g(e,t,n){var o=_(e,t);if(!1===o.test)throw new m("Test operation failed","TEST_OPERATION_FAILED",n,t,e);return o.newDocument}function P(e,t,n,o){if("object"!=typeof e||null===e||Array.isArray(e))throw new m("Operation is not an object","OPERATION_NOT_AN_OBJECT",t,e,n);if(!b[e.op])throw new m("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",t,e,n);if("string"!=typeof e.path)throw new m("Operation `path` property is not a string","OPERATION_PATH_INVALID",t,e,n);if(0!==e.path.indexOf("/")&&e.path.length>0)throw new m('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",t,e,n);if(("move"===e.op||"copy"===e.op)&&"string"!=typeof e.from)throw new m("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",t,e,n);if(("add"===e.op||"replace"===e.op||"test"===e.op)&&void 0===e.value)throw new m("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",t,e,n);if(("add"===e.op||"replace"===e.op||"test"===e.op)&&function e(t){if(void 0===t)return!0;if(t)if(Array.isArray(t)){for(var n=0,o=t.length;n<o;n++)if(e(t[n]))return!0}else if("object"==typeof t){var r=f(t),i=r.length;for(n=0;n<i;n++)if(e(t[r[n]]))return!0}return!1}(e.value))throw new m("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",t,e,n);if(n)if("add"==e.op){var r=e.path.split("/").length,i=o.split("/").length;if(r!==i+1&&r!==i)throw new m("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",t,e,n)}else if("replace"===e.op||"remove"===e.op||"_get"===e.op){if(e.path!==o)throw new m("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",t,e,n)}else if("move"===e.op||"copy"===e.op){var a=x([{op:"_get",path:e.from,value:void 0}],n);if(a&&"OPERATION_PATH_UNRESOLVABLE"===a.name)throw new m("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",t,e,n)}}function x(e,t,n){try{if(!Array.isArray(e))throw new m("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(t)E(s(t),s(e),n||!0);else{n=n||P;for(var o=0;o<e.length;o++)n(e[o],o,t,void 0)}}catch(e){if(e instanceof m)return e;throw e}}function T(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){var n,o,r,i=Array.isArray(e),a=Array.isArray(t);if(i&&a){if((o=e.length)!=t.length)return!1;for(n=o;0!=n--;)if(!T(e[n],t[n]))return!1;return!0}if(i!=a)return!1;var u=Object.keys(e);if((o=u.length)!==Object.keys(t).length)return!1;for(n=o;0!=n--;)if(!t.hasOwnProperty(u[n]))return!1;for(n=o;0!=n--;)if(!T(e[r=u[n]],t[r]))return!1;return!0}return e!=e&&t!=t}
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017 Joachim Wester
 * MIT license
 */
var D=new WeakMap,N=function(e){this.observers=new Map,this.obj=e},j=function(e,t){this.callback=e,this.observer=t};function C(e,t){t.unobserve()}function R(e,t){var n,o=function(e){return D.get(e)}(e);if(o){var r=function(e,t){return e.observers.get(t)}(o,t);n=r&&r.observer}else o=new N(e),D.set(e,o);if(n)return n;if(n={},o.value=s(e),t){n.callback=t,n.next=null;var i=function(){I(n)},a=function(){clearTimeout(n.next),n.next=setTimeout(i)};"undefined"!=typeof window&&(window.addEventListener("mouseup",a),window.addEventListener("keyup",a),window.addEventListener("mousedown",a),window.addEventListener("keydown",a),window.addEventListener("change",a))}return n.patches=[],n.object=e,n.unobserve=function(){I(n),clearTimeout(n.next),function(e,t){e.observers.delete(t.callback)}(o,n),"undefined"!=typeof window&&(window.removeEventListener("mouseup",a),window.removeEventListener("keyup",a),window.removeEventListener("mousedown",a),window.removeEventListener("keydown",a),window.removeEventListener("change",a))},o.observers.set(t,new j(t,n)),n}function I(e,t){void 0===t&&(t=!1);var n=D.get(e.object);L(n.value,e.object,e.patches,"",t),e.patches.length&&E(n.value,e.patches);var o=e.patches;return o.length>0&&(e.patches=[],e.callback&&e.callback(o)),o}function L(e,t,n,o,r){if(t!==e){"function"==typeof t.toJSON&&(t=t.toJSON());for(var i=f(t),a=f(e),u=!1,p=a.length-1;p>=0;p--){var d=e[v=a[p]];if(!c(t,v)||void 0===t[v]&&void 0!==d&&!1===Array.isArray(t))Array.isArray(e)===Array.isArray(t)?(r&&n.push({op:"test",path:o+"/"+h(v),value:s(d)}),n.push({op:"remove",path:o+"/"+h(v)}),u=!0):(r&&n.push({op:"test",path:o,value:e}),n.push({op:"replace",path:o,value:t}),!0);else{var l=t[v];"object"==typeof d&&null!=d&&"object"==typeof l&&null!=l&&Array.isArray(d)===Array.isArray(l)?L(d,l,n,o+"/"+h(v),r):d!==l&&(!0,r&&n.push({op:"test",path:o+"/"+h(v),value:s(d)}),n.push({op:"replace",path:o+"/"+h(v),value:s(l)}))}}if(u||i.length!=a.length)for(p=0;p<i.length;p++){var v;c(e,v=i[p])||void 0===t[v]||n.push({op:"add",path:o+"/"+h(v),value:s(t[v])})}}}function B(e,t,n){void 0===n&&(n=!1);var o=[];return L(e,t,o,"",n),o}var S=Object.assign({},o,r,{JsonPatchError:w,deepClone:s,escapePathComponent:h,unescapePathComponent:l});function k(e){expect(typeof e).withContext("result from import should be an object").toEqual("object"),expect(typeof e).withContext("result from import should not be a function").not.toEqual("function"),expect(e.applyOperation).withContext("applyOperation should be a method within the object").toBeDefined(),expect(e.applyPatch).withContext("applyPatch should be a method within the object").toBeDefined(),expect(e.applyReducer).withContext("applyReducer should be a method within the object").toBeDefined(),expect(e.getValueByPointer).withContext("getValueByPointer should be a method within the object").toBeDefined(),expect(e.validate).withContext("validate should be a method within the object").toBeDefined(),expect(e.validator).withContext("validator should be a method within the object").toBeDefined(),expect(e._areEquals).withContext("_areEquals should be a method within the object").toBeDefined(),expect(e.JsonPatchError).withContext("JsonPatchError should be a method within the object").toBeDefined(),expect(e.deepClone).withContext("deepClone should be a method within the object").toBeDefined(),expect(e.escapePathComponent).withContext("escapePathComponent should be a method within the object").toBeDefined(),expect(e.unescapePathComponent).withContext("unescapePathComponent should be a method within the object").toBeDefined(),expect(e.unobserve).withContext("unobserve should be a method within the object").toBeDefined(),expect(e.observe).withContext("observe should be a method within the object").toBeDefined(),expect(e.generate).withContext("generate should be a method within the object").toBeDefined(),expect(e.compare).withContext("compare should be a method within the object").toBeDefined()}describe("This package imported by Webpack",function(){describe("import default",function(){it("should have the expected structure",function(){k(S)})}),describe("import asterisk",function(){it("should have the expected structure",function(){k(i)})}),describe("named import",function(){it("should have the expected structure",function(){expect(_).withContext("applyOperation should be defined").toBeDefined()})})})}]);