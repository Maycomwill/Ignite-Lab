var C=Object.defineProperty;var n=(e,t)=>C(e,"name",{value:t,configurable:!0});import{r as k}from"./index.90586bf6.js";import{a as R,u as b,b as L,c as j,d as h}from"./index.59707fa5.js";import{j as l,a as P}from"./jsx-runtime.6ef4d586.js";import{B as K}from"./Button.ffd05c47.js";import{T as U}from"./Text.4afaaba6.js";import{S as F}from"./Spinner.esm.f89e4782.js";/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N(e,t){if(e==null)return{};var s={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(s[a]=e[a]);return s}n(N,"_objectWithoutPropertiesLoose");function w(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}n(w,"isModifiedEvent");function O(e,t){return e.button===0&&(!t||t==="_self")&&!w(e)}n(O,"shouldProcessLinkClick");const z=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],B=k.exports.forwardRef(n(function(t,s){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:f,target:c,to:u,preventScrollReset:d}=t,m=N(t,z),x=R(u,{relative:a}),S=D(u,{replace:o,state:f,target:c,preventScrollReset:d,relative:a});function y(p){r&&r(p),p.defaultPrevented||S(p)}return n(y,"handleClick"),l("a",{...m,href:x,onClick:i?r:y,ref:s,target:c})},"LinkWithRef"));var g;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(g||(g={}));var v;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(v||(v={}));function D(e,t){let{target:s,replace:r,state:a,preventScrollReset:i,relative:o}=t===void 0?{}:t,f=b(),c=L(),u=j(e,{relative:o});return k.exports.useCallback(d=>{if(O(d,s)){d.preventDefault();let m=r!==void 0?r:h(c)===h(u);f(e,{replace:m,state:a,preventScrollReset:i,relative:o})}},[c,f,u,r,a,s,e,i,o])}n(D,"useLinkClickHandler");function q(){return P("div",{className:"h-screen w-screen bg-gray-900 flex flex-col items-center justify-center gap-4",children:[l("div",{children:l(U,{size:"xlg",className:"animate-pulse",children:"Carregando, aguarde um momento..."})}),l("div",{className:"animate-spin-slow text-green-500",children:l(F,{size:48})}),l("div",{children:l(B,{to:"/",children:l(K,{children:"Home"})})})]})}n(q,"Loading");export{q as L,B as a};
//# sourceMappingURL=Loading.8ccad6c2.js.map