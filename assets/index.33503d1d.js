import{d as r,b as n,c as u,f as i,t as o,y as l,a as _,h as c,z as d,F as p,e as m,A as f}from"./index.bfcb9711.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";const x={"px-5":"","overflow-auto":""},F={"mt-10":"","text-5xl":"","font-light":""},B={"mt-1":"","mb-4":"","text-md":"","text-gray-5":""},C=r({__name:"EcHeader",props:{title:null,description:null},setup(t){return(s,e)=>(n(),u("header",x,[i("h1",F,o(t.title),1),i("p",B,o(t.description),1)]))}}),$={"py-3":""},E=r({__name:"todo-item",props:{title:null},setup(t){return(s,e)=>(n(),u("li",$,o(t.title),1))}}),y={},g={"px-5":""};function k(t,s){return n(),u("ul",g,[l(t.$slots,"default")])}const D=h(y,[["render",k]]),b=r({__name:"index",setup(t){const s=_([]);for(let e=0;e<100;e++)s.push({title:`\u8FD9\u662F\u7B2C${e+1}\u6761\u5F85\u529E`,date:new Date,duration:1e3,finished:!1});return(e,w)=>(n(),u("main",null,[c(C,{title:"Todo",description:"\u8FD9\u91CC\u662F\u4E00\u4E9B\u4F60\u6253\u7B97\u505A\uFF0C\u4F46\u662F\u6CA1\u6709\u5B8C\u6210\u7684\u4E8B\u60C5"}),c(D,null,{default:d(()=>[(n(!0),u(p,null,m(s,a=>(n(),f(E,{key:a.title,title:a.title},null,8,["title"]))),128))]),_:1})]))}});export{b as default};
