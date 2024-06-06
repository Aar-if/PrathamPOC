/*! For license information please see 626.8dcbeb1c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreactapp=self.webpackChunkreactapp||[]).push([[626,245],{874:(e,t,n)=>{var r=n(232);var u="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},o=r.useState,s=r.useEffect,a=r.useLayoutEffect,i=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(r){return!0}}var l="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),u=r[0].inst,l=r[1];return a((function(){u.value=n,u.getSnapshot=t,c(u)&&l({inst:u})}),[e,n,t]),s((function(){return c(u)&&l({inst:u}),e((function(){c(u)&&l({inst:u})}))}),[e]),i(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},525:(e,t,n)=>{var r=n(232),u=n(299);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},s=u.useSyncExternalStore,a=r.useRef,i=r.useEffect,c=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var f=a(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;f=c((function(){function e(e){if(!i){if(i=!0,s=e,e=r(e),void 0!==u&&d.hasValue){var t=d.value;if(u(t,e))return a=t}return a=e}if(t=a,o(s,e))return t;var n=r(e);return void 0!==u&&u(t,n)?t:(s=e,a=n)}var s,a,i=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]}),[t,n,r,u]);var v=s(e,f[0],f[1]);return i((function(){d.hasValue=!0,d.value=v}),[v]),l(v),v}},299:(e,t,n)=>{e.exports=n(874)},145:(e,t,n)=>{e.exports=n(525)},245:(e,t,n)=>{n.r(t),n.d(t,{create:()=>v,createStore:()=>u,default:()=>p,useStore:()=>f});const r=e=>{let t;const n=new Set,r=(e,r)=>{const u="function"===typeof e?e(t):e;if(!Object.is(u,t)){const e=t;t=(null!=r?r:"object"!==typeof u||null===u)?u:Object.assign({},t,u),n.forEach((n=>n(t,e)))}},u=()=>t,o={setState:r,getState:u,getInitialState:()=>s,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},s=t=e(r,u,o);return o},u=e=>e?r(e):r;var o=n(232),s=n(145);const{useDebugValue:a}=o,{useSyncExternalStoreWithSelector:i}=s;let c=!1;const l=e=>e;function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,n=arguments.length>2?arguments[2]:void 0;n&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);const r=i(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return a(r),r}const d=e=>{"function"!==typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t="function"===typeof e?u(e):e,n=(e,n)=>f(t,e,n);return Object.assign(n,t),n},v=e=>e?d(e):d;var p=e=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),v(e))}}]);
//# sourceMappingURL=626.8dcbeb1c.chunk.js.map