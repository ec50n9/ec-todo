import{d as x,r as g,a as w,o as $,b as u,c as p,F as M,e as N,n as y,f as t,t as B,p as F,g as V,u as R,h as E,i,w as f,T as S,j as P,k,l as U,m as h,q as X,s as j,v as q,x as H}from"./index.d279406e.js";import{g as z}from"./index.c6ddc126.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";import{u as L}from"./ThemeStore.1afb4f17.js";const W=e=>(F("data-v-0c560440"),e=e(),V(),e),G={class:"tab-bar"},J=W(()=>t("div",{class:"tab-bar-border"},null,-1)),K=["onClick"],O={class:"tab-bar-item__text"},Q=x({__name:"EcTabBar",props:{tabs:null,bgColor:{default:"#A5B4FC"},textColor:{default:"#F3F4F6"},selectedBgColor:{default:"#6366F1"},selectedTextColor:{default:"#F9FAFB"},shadowColor:{default:"rgba(29, 78, 216, 0.2)"}},emits:["change"],setup(e,{emit:c}){R(o=>({e3d9dbc4:o.$props.textColor,c38c57f4:o.$props.bgColor,"1f65f7ea":o.$props.shadowColor,"6cefef12":l.startX+"px","943e0750":l.width+"px",fcf4062a:o.$props.selectedBgColor,"620ed47a":o.$props.selectedTextColor}));const n=g(0),l=w({startX:0,width:0});function s(o){n.value=o,c("change",o);const a=document.querySelectorAll(".tab-bar-item")[o].getBoundingClientRect();z.to(l,{startX:a.left,width:a.width,duration:.3})}return $(()=>s(0)),(o,v)=>(u(),p("ul",G,[J,(u(!0),p(M,null,N(e.tabs,(a,r)=>(u(),p("li",{key:r,class:y(["tab-bar-item",n.value===r?"tab-bar-item--active":""]),onClick:b=>{n.value===r?a.selectedFunc&&a.selectedFunc(b.currentTarget):s(r)}},[t("div",{class:y(["tab-bar-item__icon",n.value===r&&a.selectedIcon||a.icon])},null,2),t("div",O,B(n.value===r&&a.selectedText||a.text),1)],10,K))),128))]))}});const Y=C(Q,[["__scopeId","data-v-0c560440"]]),Z=e=>(F("data-v-ccd0475e"),e=e(),V(),e),ee=Z(()=>t("div",{class:"modal-shadow"},null,-1)),te=x({__name:"EcModal",props:{visible:{type:Boolean}},emits:["update:visible"],setup(e,{emit:c}){function n(l){c("update:visible",!1)}return(l,s)=>(u(),E(P,{to:"body"},[i(S,{name:"fade",mode:"out-in"},{default:f(()=>[e.visible?(u(),p("div",{key:0,class:"modal-wrapper",onClick:n},[ee,t("div",{class:"modal",onClick:s[0]||(s[0]=o=>o.stopPropagation())},[k(l.$slots,"default",{},void 0,!0)])])):U("",!0)]),_:3})]))}});const oe=C(te,[["__scopeId","data-v-ccd0475e"]]),le={},ae={"px-4":"","py-2":"","text-white":"","bg-blue-6":"","rounded-md":"","select-none":""};function se(e,c){return u(),p("button",ae,[k(e.$slots,"default")])}const ne=C(le,[["render",se]]),ce={class:"ec-edit-text",relative:""},re=["id","value"],de=["for"],T=x({__name:"EcEditText",props:{name:null,modelValue:null,placeHolder:null},emits:["update:modelValue"],setup(e,{emit:c}){return(n,l)=>(u(),p("div",ce,[t("input",{type:"text",id:e.name,class:"ec-edit-text__input",placeholder:" ",value:e.modelValue,onInput:l[0]||(l[0]=s=>n.$emit("update:modelValue",s.target.value))},null,40,re),t("label",{class:"ec-edit-text__label",for:e.name},B(e.placeHolder),9,de)]))}});const ue={"w-full":"","p-4":""},ie={"p-6":"","bg-white":"","shadow-lg":"","rounded-xl":""},_e=t("h1",{"mb-4":"","text-xl":""},"\u6DFB\u52A0",-1),pe={flex:"","flex-col":"","gap-4":""},me={"mt-4":"",flex:"","justify-end":"","gap-4":""},fe=t("button",{"px-4":"","py-2":"","text-gray-7":"","bg-gray-1":"","rounded-md":""},"\u53D6\u6D88",-1),ve=t("button",{"px-4":"","py-2":"","text-white":"","bg-blue-6":"","rounded-md":""},"\u6DFB\u52A0",-1),ye=x({__name:"index",setup(e){const c=L(),n=g(),l=g(!1),s=w({title:"",desc:""}),o=H(),v=[{icon:"i-carbon-home",text:"\u9996\u9875",path:"/"},{icon:"i-carbon-list-checked",text:"\u5F85\u529E",path:"/todo",selectedIcon:"i-akar-icons:plus",selectedText:"\u6DFB\u52A0",selectedFunc:m=>{l.value=!0}},{icon:"i-carbon-person",text:"\u5173\u4E8E",path:"/about"}];function a(m){o.replace(v[m].path)}const r=g(!1);$(()=>r.value=!0);let b=0;function I(m){if(!m.target)return;const d=m.target.scrollTop;r.value=d<b,b=d}return(m,d)=>{const D=X("RouterView");return u(),p("div",{ref_key:"layout",ref:n},[t("div",{onScroll:I,"h-full":"","overflow-scroll":""},[i(D,null,{default:f(({Component:_,route:A})=>[i(S,{name:"fade",mode:"out-in"},{default:f(()=>[(u(),E(j(_),{key:A.path}))]),_:2},1024)]),_:1})],32),t("div",{absolute:"","bottom-0":"","w-full":"","p-3":"","transition-all":"","duration-500":"",transform:"",class:y([r.value?"translate-y-0":"translate-y-full"])},[i(Y,{"bg-color":h(c).colors.lightPrimaryColor,"text-color":h(c).colors.lightText,"selected-bg-color":h(c).colors.primaryColor,"selected-text-color":h(c).colors.lightPrimaryText,tabs:v,onChange:a,"rounded-4":""},null,8,["bg-color","text-color","selected-bg-color","selected-text-color"])],2),i(oe,{visible:l.value,"onUpdate:visible":d[2]||(d[2]=_=>l.value=_)},{default:f(()=>[t("div",ue,[t("div",ie,[_e,t("div",pe,[i(T,{name:"title",modelValue:s.title,"onUpdate:modelValue":d[0]||(d[0]=_=>s.title=_),"place-holder":"\u6807\u9898"},null,8,["modelValue"]),i(T,{name:"desc",modelValue:s.desc,"onUpdate:modelValue":d[1]||(d[1]=_=>s.desc=_),"place-holder":"\u5907\u6CE8"},null,8,["modelValue"])]),t("div",me,[i(ne,null,{default:f(()=>[q("hello")]),_:1}),fe,ve])])])]),_:1},8,["visible"])],512)}}});export{ye as default};
