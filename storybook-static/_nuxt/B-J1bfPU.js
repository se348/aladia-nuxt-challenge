import{_ as x}from"./DlAUqK2U.js";import{c as p,e as _,d as A,o as u}from"./CQ21Uy9f.js";const v={props:{type:{type:String,default:"text"},placeholder:String,imageUrl:{type:String,default:null},modelValue:{type:String,default:""}}},V={class:"relative"},w=["type","placeholder","value"],S=["src"];function U(o,a,e,E,k,B){return u(),p("div",V,[_("input",{type:e.type,placeholder:e.placeholder,value:e.modelValue,onInput:a[0]||(a[0]=s=>o.$emit("update:modelValue",s.target.value)),onBlur:a[1]||(a[1]=s=>o.$emit("blur",s)),class:"w-full p-2 pl-10 border border-white bg-white text-black rounded focus:outline-none"},null,40,w),e.imageUrl?(u(),p("img",{key:0,src:e.imageUrl,alt:"icon",class:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"},null,8,S)):A("",!0)])}const I=x(v,[["render",U]]),N={title:"Components/InputAtom",component:I,argTypes:{type:{control:"text"},placeholder:{control:"text"},imageUrl:{control:"text"},modelValue:{control:"text"}}},l=o=>({components:{InputAtom:I},setup(){return{args:o}},template:'<InputAtom v-bind="args" />'}),t=l.bind({});t.args={type:"text",placeholder:"Enter text...",imageUrl:null,modelValue:""};const n=l.bind({});n.args={type:"text",placeholder:"Enter text...",imageUrl:"/images/icon.png",modelValue:""};const r=l.bind({});r.args={type:"password",placeholder:"Enter password...",imageUrl:null,modelValue:""};var m,c,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    InputAtom
  },
  setup() {
    return {
      args
    };
  },
  template: '<InputAtom v-bind="args" />'
})`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,g,f;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    InputAtom
  },
  setup() {
    return {
      args
    };
  },
  template: '<InputAtom v-bind="args" />'
})`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,b,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    InputAtom
  },
  setup() {
    return {
      args
    };
  },
  template: '<InputAtom v-bind="args" />'
})`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const P=["Default","WithIcon","Password"];export{t as Default,r as Password,n as WithIcon,P as __namedExportsOrder,N as default};
