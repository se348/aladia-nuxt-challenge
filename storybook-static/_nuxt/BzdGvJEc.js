import{b as i,c as l,d,r as m,n as u,o as r}from"./CQ21Uy9f.js";const b=["src"],p={__name:"ButtonAtom",props:{color:{type:String,default:""},borderColor:{type:String,default:null},imageUrl:{type:String,default:null}},emits:["handle-any-click"],setup(o,{emit:n}){const s=n,t=o,a=i(()=>{let e="w-full text-white font-bold py-2 px-4 rounded mb-4 transition duration-300 flex items-center justify-center";return t.borderColor?e+=` border border-${t.borderColor}`:e+=` bg-${t.color}-500 hover:bg-${t.color}-700`,e}),c=e=>{s("handle-any-click",e)};return(e,f)=>(r(),l("button",{class:u(a.value),onClick:c},[o.imageUrl?(r(),l("img",{key:0,src:`/images/${o.imageUrl}`,alt:"button icon",class:"inline-block mr-2 w-5 h-5"},null,8,b)):d("",!0),m(e.$slots,"default")],2))}};export{p as _};
