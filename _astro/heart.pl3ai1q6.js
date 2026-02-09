import{r as c}from"./index.DYrVU9rO.js";var l={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function C(){if(p)return u;p=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(a,o,t){var i=null;if(t!==void 0&&(i=""+t),o.key!==void 0&&(i=""+o.key),"key"in o){t={};for(var n in o)n!=="key"&&(t[n]=o[n])}else t=o;return o=t.ref,{$$typeof:e,type:a,key:i,ref:o!==void 0?o:null,props:t}}return u.Fragment=r,u.jsx=s,u.jsxs=s,u}var d;function h(){return d||(d=1,l.exports=C()),l.exports}var $=h();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(...e)=>e.filter((r,s,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===s).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,a)=>a?a.toUpperCase():s.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=e=>{const r=k(e);return r.charAt(0).toUpperCase()+r.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=c.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:t,iconNode:i,...n},f)=>c.createElement("svg",{ref:f,...w,width:r,height:r,stroke:e,strokeWidth:a?Number(s)*24/Number(r):s,className:x("lucide",o),...!t&&!A(n)&&{"aria-hidden":"true"},...n},[...i.map(([v,R])=>c.createElement(v,R)),...Array.isArray(t)?t:[t]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(e,r)=>{const s=c.forwardRef(({className:a,...o},t)=>c.createElement(_,{ref:t,iconNode:r,className:x(`lucide-${E(m(e))}`,`lucide-${e}`,a),...o}));return s.displayName=m(e),s};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],J=j("heart",L);export{J as H,j as c,$ as j};
