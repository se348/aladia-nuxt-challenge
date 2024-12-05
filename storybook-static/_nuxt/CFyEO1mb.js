import{_ as d}from"./BzdGvJEc.js";import"./CQ21Uy9f.js";const A={title:"Components/ButtonAtom",component:d,argTypes:{color:{control:"text"},borderColor:{control:"text"},imageUrl:{control:"text"}}},n=g=>({components:{ButtonAtom:d},setup(){return{args:g}},template:'<ButtonAtom v-bind="args">Button Text</ButtonAtom>'}),t=n.bind({});t.args={color:"blue",borderColor:null,imageUrl:null};const o=n.bind({});o.args={color:"blue",borderColor:"red",imageUrl:null};const r=n.bind({});r.args={color:"blue",borderColor:null,imageUrl:"icon.png"};var e,s,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    ButtonAtom
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonAtom v-bind="args">Button Text</ButtonAtom>'
})`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var m,u,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    ButtonAtom
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonAtom v-bind="args">Button Text</ButtonAtom>'
})`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var l,p,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    ButtonAtom
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonAtom v-bind="args">Button Text</ButtonAtom>'
})`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const x=["Default","WithBorderColor","WithIcon"];export{t as Default,o as WithBorderColor,r as WithIcon,x as __namedExportsOrder,A as default};
