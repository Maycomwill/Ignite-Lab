var l=Object.defineProperty;var s=(e,n)=>l(e,"name",{value:n,configurable:!0});import{$ as u}from"./index.module.bfb50f19.js";import{B as h}from"./Button.ffd05c47.js";import{T as f}from"./Text.4afaaba6.js";import{a as t,F as i,j as r}from"./jsx-runtime.6ef4d586.js";import{u as k}from"./index.59707fa5.js";import{r as m}from"./index.90586bf6.js";import{I as p,r as x}from"./IconBase.esm.29f72e23.js";import"./clsx.m.256e9345.js";import"./iframe.d07f4ef8.js";var o=new Map;o.set("bold",function(e){return t(i,{children:[r("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});o.set("duotone",function(e){return t(i,{children:[r("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),r("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),r("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});o.set("fill",function(){return r(i,{children:r("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"})})});o.set("light",function(e){return t(i,{children:[r("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});o.set("thin",function(e){return t(i,{children:[r("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});o.set("regular",function(e){return t(i,{children:[r("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),r("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var y=s(function(n,d){return x(n,d,o)},"renderPath"),c=m.exports.forwardRef(function(e,n){return r(p,{...Object.assign({ref:n},e,{renderPath:y})})});c.displayName="User";const L=c;function g({children:e}){return r("div",{className:"h-40 max-h-44 flex flex-col items-center justify-evenly gap-2 bg-gray-800 rounded w-80 px-4 py-4 text-center shadow-md",children:e})}s(g,"AlunoCardRoot");function j({className:e,children:n}){return r(u,{className:"text-green-500 w-6 h-6 ",children:n})}s(j,"AlunoCardIcon");function W(e){const n=k();return t("div",{className:"flex flex-col gap-4",children:[r("div",{className:"flex flex-1 justify-center items-center ",...e,children:t(f,{color:"white",children:["Aluno(a): ",e.nome]})}),r("div",{children:r(h,{size:"sm",onClick:()=>n(`/${e.alunoId}`),children:"Mais detalhes"})})]})}s(W,"AlunoCardContent");const a={Root:g,Icon:j,Content:W},F={title:"Components/AlunoCard",component:a.Root,args:{children:[r(a.Icon,{children:r(L,{})}),r(a.Content,{nome:"Maycom Willams de Farias Silva",turma:"3\xBA ano A",turno:"Diurno",alunoId:"Id"})]},argTypes:{children:{table:{disable:!0}}}},P={},R=["Default"];export{P as Default,R as __namedExportsOrder,F as default};
//# sourceMappingURL=AlunoCard.stories.122c0187.js.map
