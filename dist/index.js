parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"4n4P":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=[{dataIndex:"",title:"全部"},{dataIndex:1,title:"支付宝"},{dataIndex:2,title:"微信支付"},{dataIndex:3,title:"QQ钱包"},{dataIndex:4,title:"网银支付"},{dataIndex:5,title:"京东支付"},{dataIndex:6,title:"银联支付"},{dataIndex:7,title:"百度支付"},{dataIndex:8,title:"财付通"},{dataIndex:9,title:"点卡支付"},{dataIndex:10,title:"云闪付"}];exports.default=t;
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"payType",{enumerable:!0,get:function(){return e.default}});var e=r(require("./payType"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./payType":"4n4P"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map