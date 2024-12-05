import{M as K,N as u,O as Z,P as x,Q,R as J,S as G,T as z,U as F,V as k,W,X as tt,Y as et,Z as nt,D as d,i as rt,I as it,m as _}from"./CQ21Uy9f.js";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let T;const E=typeof window<"u"&&window.trustedTypes;if(E)try{T=E.createPolicy("vue",{createHTML:t=>t})}catch{}const B=T?t=>T.createHTML(t):t=>t,st="http://www.w3.org/2000/svg",ot="http://www.w3.org/1998/Math/MathML",f=typeof document<"u"?document:null,A=f&&f.createElement("template"),ct={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?f.createElementNS(st,t):e==="mathml"?f.createElementNS(ot,t):n?f.createElement(t,{is:n}):f.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>f.createTextNode(t),createComment:t=>f.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>f.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{A.innerHTML=B(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=A.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},at=Symbol("_vtc");function lt(t,e,n){const r=t[at];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const O=Symbol("_vod"),ft=Symbol("_vsh"),ut=Symbol(""),dt=/(^|;)\s*display\s*:/;function pt(t,e,n){const r=t.style,i=u(n);let s=!1;if(n&&!i){if(e)if(u(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&m(r,c,"")}else for(const o in e)n[o]==null&&m(r,o,"");for(const o in n)o==="display"&&(s=!0),m(r,o,n[o])}else if(i){if(e!==n){const o=r[ut];o&&(n+=";"+o),r.cssText=n,s=dt.test(n)}}else e&&t.removeAttribute("style");O in t&&(t[O]=s?r.display:"",t[ft]&&(r.display="none"))}const N=/\s*!important$/;function m(t,e,n){if(z(n))n.forEach(r=>m(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=mt(t,e);N.test(n)?t.setProperty(F(r),n.replace(N,""),"important"):t[r]=n}}const P=["Webkit","Moz","ms"],g={};function mt(t,e){const n=g[e];if(n)return n;let r=G(e);if(r!=="filter"&&r in t)return g[e]=r;r=k(r);for(let i=0;i<P.length;i++){const s=P[i]+r;if(s in t)return g[e]=s}return e}const M="http://www.w3.org/1999/xlink";function I(t,e,n,r,i,s=et(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(M,e.slice(6,e.length)):t.setAttributeNS(M,e,n):n==null||s&&!W(n)?t.removeAttribute(e):t.setAttribute(e,s?"":tt(n)?String(n):n)}function L(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?B(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const c=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=W(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function ht(t,e,n,r){t.addEventListener(e,n,r)}function gt(t,e,n,r){t.removeEventListener(e,n,r)}const U=Symbol("_vei");function St(t,e,n,r,i=null){const s=t[U]||(t[U]={}),o=s[e];if(r&&o)o.value=r;else{const[c,a]=bt(e);if(r){const l=s[e]=vt(r,i);ht(t,c,l,a)}else o&&(gt(t,c,o,a),s[e]=void 0)}}const R=/(?:Once|Passive|Capture)$/;function bt(t){let e;if(R.test(t)){e={};let r;for(;r=t.match(R);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):F(t.slice(2)),e]}let S=0;const _t=Promise.resolve(),Tt=()=>S||(_t.then(()=>S=0),S=Date.now());function vt(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nt(wt(r,n.value),e,5,[r])};return n.value=t,n.attached=Tt(),n}function wt(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const y=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ct=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?lt(t,r,o):e==="style"?pt(t,n,r):Q(e)?J(e)||St(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Et(t,e,r,o))?(L(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&I(t,e,r,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!u(r))?L(t,G(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),I(t,e,r,o))};function Et(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&y(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return y(e)&&u(n)?!1:e in t}const At=["ctrl","shift","alt","meta"],Ot={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>At.some(n=>t[`${n}Key`]&&!e.includes(n))},Ft=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const c=Ot[e[o]];if(c&&c(i,e))return}return t(i,...s)})},Nt=x({patchProp:Ct},ct);let j;function Pt(){return j||(j=Z(Nt))}const Mt=(...t)=>{const e=Pt().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Lt(r);if(!i)return;const s=e._component;!K(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,It(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function It(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Lt(t){return u(t)?document.querySelector(t):t}var Ut=Object.defineProperty,Rt=(t,e)=>{for(var n in e)Ut(t,n,{get:e[n],enumerable:!0})};const{sanitizeStoryContextUpdate:yt}=__STORYBOOK_MODULE_PREVIEW_API__;var jt={};Rt(jt,{applyDecorators:()=>V,mount:()=>X,parameters:()=>Y,render:()=>$,renderToCanvas:()=>q});var $=(t,e)=>{let{id:n,component:r}=e;if(!r)throw new Error(`Unable to render story ${n} as the component annotation is missing from the default export`);return()=>d(r,t,Ht(t,e))},Wt=t=>{globalThis.PLUGINS_SETUP_FUNCTIONS??(globalThis.PLUGINS_SETUP_FUNCTIONS=new Set),globalThis.PLUGINS_SETUP_FUNCTIONS.add(t)},Dt=async(t,e)=>{globalThis&&globalThis.PLUGINS_SETUP_FUNCTIONS&&await Promise.all([...globalThis.PLUGINS_SETUP_FUNCTIONS].map(n=>n(t,e)))},h=new Map;async function q({storyFn:t,forceRemount:e,showMain:n,showException:r,storyContext:i,id:s},o){let c=h.get(o);if(c&&!e){let l=t(),p=D(l,i);return Kt(c.reactiveArgs,p),()=>{b(c.vueApp,o)}}c&&e&&b(c.vueApp,o);let a=Mt({setup(){i.args=_(i.args);let l=t(),p=D(l,i),v={vueApp:a,reactiveArgs:_(p)};return h.set(o,v),()=>d(l)}});return a.config.errorHandler=(l,p,v)=>{var w;(w=window.__STORYBOOK_PREVIEW__)!=null&&w.storyRenders.some(C=>C.id===s&&C.phase==="playing")?setTimeout(()=>{throw l},0):r(l)},await Dt(a,i),a.mount(o),n(),()=>{b(a,o)}}function Ht(t,e){let{argTypes:n}=e,r=Object.entries(t).filter(([i])=>{var s,o;return((o=(s=n[i])==null?void 0:s.table)==null?void 0:o.category)==="slots"}).map(([i,s])=>[i,typeof s=="function"?s:()=>s]);return Object.fromEntries(r)}function D(t,e){return t.props&&rt(t)?t.props:e.args}function Kt(t,e){if(Object.keys(e).length===0)return;let n=it(t)?t:_(t);Object.keys(n).forEach(r=>{r in e||delete n[r]}),Object.assign(n,e)}function b(t,e){t==null||t.unmount(),h.has(e)&&h.delete(e)}function Gt(t){return typeof t=="function"?{render:t,name:t.name}:t}function H(t,e){let n=t;return n===null?null:typeof n=="function"?n:e?{...Gt(n),components:{...n.components||{},story:e}}:{render(){return d(n)}}}function V(t,e){return e.reduce((n,r)=>i=>{let s,o=r(c=>{let a=yt(c);return c&&(a.args=Object.assign(i.args,a.args)),s=n({...i,...a}),s},i);return s||(s=n(i)),o===s?s:H(o,()=>d(s))},n=>H(t(n)))}var X=t=>async(e,n)=>(e&&(t.originalStoryFn=()=>()=>d(e,n==null?void 0:n.props,n==null?void 0:n.slots)),await t.renderToCanvas(),t.canvas),Y={renderer:"vue3"};const Bt=Object.freeze(Object.defineProperty({__proto__:null,applyDecorators:V,mount:X,parameters:Y,render:$,renderToCanvas:q},Symbol.toStringTag,{value:"Module"}));export{Bt as a,jt as e,q as r,Wt as s,Ft as w};