import{d as f,r as g,a as y,o as C,b as l,c as _,F as v,e as S,n as m,f as c,t as B,p as F,g as k,u as E,h as b,w as h,i as p,j as $,T as V,k as I,l as R,m as A}from"./index.3c9f8f3a.js";import{g as X}from"./index.c6ddc126.js";import{_ as D}from"./_plugin-vue_export-helper.cdc0426e.js";import{u as N}from"./ThemeStore.4bc70d0d.js";const P=a=>(F("data-v-13e31808"),a=a(),k(),a),j={class:"tab-bar"},q=P(()=>c("div",{class:"tab-bar-border"},null,-1)),z=["onClick"],L={class:"tab-bar-item__text"},M=f({__name:"EcTabBar",props:{tabs:null,bgColor:{default:"#A5B4FC"},textColor:{default:"#F3F4F6"},selectedBgColor:{default:"#6366F1"},selectedTextColor:{default:"#F9FAFB"},shadowColor:{default:"rgba(29, 78, 216, 0.2)"}},emits:["change"],setup(a,{emit:s}){E(e=>({"4562c709":e.$props.textColor,"1d37c7b1":e.$props.bgColor,"12832a36":e.$props.shadowColor,"4b959306":r.startX+"px","4b20c8e6":r.width+"px","9ad1d4d4":e.$props.selectedBgColor,"00262fae":e.$props.selectedTextColor}));const n=g(0),r=y({startX:0,width:0});function i(e){n.value=e,s("change",e);const o=document.querySelectorAll(".tab-bar-item")[e].getBoundingClientRect();X.to(r,{startX:o.left,width:o.width,duration:.3})}return C(()=>i(0)),(e,u)=>(l(),_("ul",j,[q,(l(!0),_(v,null,S(a.tabs,(o,t)=>(l(),_("li",{key:t,class:m(["tab-bar-item",n.value===t?"tab-bar-item--active":""]),onClick:d=>i(t)},[c("div",{class:m(["tab-bar-item__icon",o.icon])},null,2),c("div",L,B(o.text),1)],10,z))),128))]))}});const W=D(M,[["__scopeId","data-v-13e31808"]]),O=f({__name:"index",setup(a){const s=N(),n=A(),r=[{icon:"i-carbon-home",text:"\u9996\u9875",path:"/"},{icon:"i-carbon-list-checked",text:"\u5F85\u529E",path:"/todo"},{icon:"i-carbon-person",text:"\u5173\u4E8E",path:"/about"}];function i(t){n.replace(r[t].path)}const e=g(!1);C(()=>e.value=!0);let u=0;function o(t){if(!t.target)return;const d=t.target.scrollTop;e.value=d<u,u=d}return(t,d)=>{const x=$("RouterView");return l(),_(v,null,[c("div",{onScroll:o,"h-full":"","overflow-scroll":""},[b(x,null,{default:h(({Component:T,route:w})=>[b(V,{name:"fade",mode:"out-in"},{default:h(()=>[(l(),I(R(T),{key:w.path}))]),_:2},1024)]),_:1})],32),c("div",{absolute:"","bottom-0":"","w-full":"","p-3":"","transition-all":"","duration-500":"",transform:"",class:m([e.value?"translate-y-0":"translate-y-full"])},[b(W,{"bg-color":p(s).colors.lightPrimaryColor,"text-color":p(s).colors.lightText,"selected-bg-color":p(s).colors.primaryColor,"selected-text-color":p(s).colors.lightPrimaryText,tabs:r,onChange:i,"rounded-4":""},null,8,["bg-color","text-color","selected-bg-color","selected-text-color"])],2)],64)}}});export{O as default};
