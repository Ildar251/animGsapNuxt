import{u as B,v as X,x as R,y as Y,z as j,A as Z,B as E,C as H,D as ee,E as q,m as M,F as te,r as $,p as ie,o as O,c as W,G as ne,H as K,_ as D,a as w,b as p,w as S,d as x,t as re,I as se,J as oe,P as V,K as N,L,M as ae,N as de,f as ce,R as le,O as z,Q as T,S as ue,T as fe,U as me,V as ge,W as he,X as P,Y as pe,Z as _e}from"./Cx-Ilekh.js";import{_ as ye}from"./MLEzxxKW.js";import{_ as ve}from"./Da4a-7Rn.js";async function we(e,t){return await be(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function be(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,n)=>{const i=new Image;i.onload=()=>{const r={width:i.width,height:i.height,ratio:i.width/i.height};t(r)},i.onerror=r=>n(r),i.src=e})}function C(e){return t=>t?e[t]||t:e.missingValue}function Se({formatter:e,keyMap:t,joinWith:n="/",valueMap:i}={}){e||(e=(s,o)=>`${s}=${o}`),t&&typeof t!="function"&&(t=C(t));const r=i||{};return Object.keys(r).forEach(s=>{typeof r[s]!="function"&&(r[s]=C(r[s]))}),(s={})=>Object.entries(s).filter(([a,c])=>typeof c<"u").map(([a,c])=>{const u=r[a];return typeof u=="function"&&(c=u(s[a])),a=typeof t=="function"?t(a):a,e(a,c)}).join(n)}function y(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function xe(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const n of e.split(" ")){const i=Number.parseInt(n.replace("x",""));i&&t.add(i)}return Array.from(t)}function qe(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function Ae(e){const t={};if(typeof e=="string")for(const n of e.split(/[\s,]+/).filter(i=>i)){const i=n.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function ke(e){const t={options:e},n=(r,s={})=>G(t,r,s),i=(r,s={},o={})=>n(r,{...o,modifiers:j(s,o.modifiers||{})}).url;for(const r in e.presets)i[r]=(s,o,a)=>i(s,o,{...e.presets[r],...a});return i.options=e,i.getImage=n,i.getMeta=(r,s)=>Ie(t,r,s),i.getSizes=(r,s)=>$e(t,r,s),t.$img=i,i}async function Ie(e,t,n){const i=G(e,t,{...n});return typeof i.getMeta=="function"?await i.getMeta():await we(e,i.url)}function G(e,t,n){var u,f;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:r}=Ne(e,n.provider||e.options.provider),s=Re(e,n.preset);if(t=B(t)?t:X(t),!i.supportsAlias){for(const d in e.options.alias)if(t.startsWith(d)){const m=e.options.alias[d];m&&(t=R(m,t.slice(d.length)))}}if(i.validateDomains&&B(t)){const d=Y(t).host;if(!e.options.domains.find(m=>m===d))return{url:t}}const o=j(n,s,r);o.modifiers={...o.modifiers};const a=o.modifiers.format;(u=o.modifiers)!=null&&u.width&&(o.modifiers.width=y(o.modifiers.width)),(f=o.modifiers)!=null&&f.height&&(o.modifiers.height=y(o.modifiers.height));const c=i.getImage(t,o,e);return c.format=c.format||a||"",c}function Ne(e,t){const n=e.options.providers[t];if(!n)throw new Error("Unknown provider: "+t);return n}function Re(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function $e(e,t,n){var v,A,k,l,g;const i=y((v=n.modifiers)==null?void 0:v.width),r=y((A=n.modifiers)==null?void 0:A.height),s=Ae(n.sizes),o=(k=n.densities)!=null&&k.trim()?xe(n.densities.trim()):e.options.densities;qe(o);const a=i&&r?r/i:0,c=[],u=[];if(Object.keys(s).length>=1){for(const h in s){const _=F(h,String(s[h]),r,a,e);if(_!==void 0){c.push({size:_.size,screenMaxWidth:_.screenMaxWidth,media:`(max-width: ${_.screenMaxWidth}px)`});for(const I of o)u.push({width:_._cWidth*I,src:U(e,t,n,_,I)})}}ze(c)}else for(const h of o){const _=Object.keys(s)[0];let I=_?F(_,String(s[_]),r,a,e):void 0;I===void 0&&(I={size:"",screenMaxWidth:0,_cWidth:(l=n.modifiers)==null?void 0:l.width,_cHeight:(g=n.modifiers)==null?void 0:g.height}),u.push({width:h,src:U(e,t,n,I,h)})}je(u);const f=u[u.length-1],d=c.length?c.map(h=>`${h.media?h.media+" ":""}${h.size}`).join(", "):void 0,m=d?"w":"x",b=u.map(h=>`${h.src} ${h.width}${m}`).join(", ");return{sizes:d,srcset:b,src:f==null?void 0:f.src}}function F(e,t,n,i,r){const s=r.options.screens&&r.options.screens[e]||Number.parseInt(e),o=t.endsWith("vw");if(!o&&/^\d+$/.test(t)&&(t=t+"px"),!o&&!t.endsWith("px"))return;let a=Number.parseInt(t);if(!s||!a)return;o&&(a=Math.round(a/100*s));const c=i?Math.round(a*i):n;return{size:t,screenMaxWidth:s,_cWidth:a,_cHeight:c}}function U(e,t,n,i,r){return e.$img(t,{...n.modifiers,width:i._cWidth?i._cWidth*r:void 0,height:i._cHeight?i._cHeight*r:void 0},n)}function ze(e){var n;e.sort((i,r)=>i.screenMaxWidth-r.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const r=e[i];r.media===t&&e.splice(i,1),t=r.media}for(let i=0;i<e.length;i++)e[i].media=((n=e[i+1])==null?void 0:n.media)||""}function je(e){e.sort((n,i)=>n.width-i.width);let t=null;for(let n=e.length-1;n>=0;n--){const i=e[n];i.width===t&&e.splice(n,1),t=i.width}}const He=Se({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>E(e)+"_"+E(t)}),Me=(e,{modifiers:t={},baseURL:n}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const r=He(t)||"_";return n||(n=R(i.options.nuxt.baseURL,"/_ipx")),{url:R(n,r,Z(e))}},Oe=!0,We=!0,Be=Object.freeze(Object.defineProperty({__proto__:null,getImage:Me,supportsAlias:We,validateDomains:Oe},Symbol.toStringTag,{value:"Module"})),J={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp","webp"],quality:100};J.providers={ipxStatic:{provider:Be,defaults:{}}};const Q=()=>{const e=ee(),t=H();return t.$img||t._img||(t._img=ke({...J,nuxt:{baseURL:e.app.baseURL},runtimeConfig:e}))};function Ee(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const Ke={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],required:!1,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,required:!1,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],required:!1}},Le=e=>{const t=q(()=>({provider:e.provider,preset:e.preset})),n=q(()=>({width:y(e.width),height:y(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=Q(),r=q(()=>({...e.modifiers,width:y(e.width),height:y(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:n,modifiers:r}},Te={...Ke,placeholder:{type:[Boolean,String,Number,Array],required:!1},placeholderClass:{type:String,required:!1}},Ce=["src"],Fe=M({__name:"NuxtImg",props:Te,emits:["load","error"],setup(e,{emit:t}){const n=e,i=te(),r=t,s=!1,o=Q(),a=Le(n),c=$(!1),u=$(),f=q(()=>o.getSizes(n.src,{...a.options.value,sizes:n.sizes,densities:n.densities,modifiers:{...a.modifiers.value,width:y(n.width),height:y(n.height)}})),d=q(()=>{const l={...a.attrs.value,"data-nuxt-img":""};return(!n.placeholder||c.value)&&(l.sizes=f.value.sizes,l.srcset=f.value.srcset),l}),m=q(()=>{let l=n.placeholder;if(l===""&&(l=!0),!l||c.value)return!1;if(typeof l=="string")return l;const g=Array.isArray(l)?l:typeof l=="number"?[l,l]:[10,10];return o(n.src,{...a.modifiers.value,width:g[0],height:g[1],quality:g[2]||50,blur:g[3]||3},a.options.value)}),b=q(()=>n.sizes?f.value.src:o(n.src,a.modifiers.value,a.options.value)),v=q(()=>m.value?m.value:b.value),k=H().isHydrating;return ie(()=>{if(m.value){const l=new Image;b.value&&(l.src=b.value),n.sizes&&(l.sizes=f.value.sizes||"",l.srcset=f.value.srcset),l.onload=g=>{c.value=!0,r("load",g)},Ee("nuxt-image");return}u.value&&(u.value.complete&&k&&(u.value.getAttribute("data-error")?r("error",new Event("error")):r("load",new Event("load"))),u.value.onload=l=>{r("load",l)},u.value.onerror=l=>{r("error",l)})}),(l,g)=>(O(),W("img",ne({ref_key:"imgEl",ref:u,class:n.placeholder&&!c.value?n.placeholderClass:void 0},{...K(s)?{onerror:"this.setAttribute('data-error', 1)"}:{},...d.value,...K(i)},{src:v.value}),null,16,Ce))}}),Ue={class:"header"},De={class:"container container-flex"},Ve={class:"menu"},Pe={class:"menu__item"},Ge={class:"menu__item"},Je={class:"menu__item"},Qe={class:"menu__item"},Xe={class:"menu__item"},Ye={class:"menu__item"},Ze={class:"buttons"},et={__name:"Header",props:{isAuth:Boolean,showModal:Function},setup(e){const t=e;return(n,i)=>{const r=Fe,s=ye,o=ve;return O(),W("header",Ue,[w("div",De,[p(r,{src:"/logo.png",alt:"logo",format:"webp",width:"152",height:"61"}),w("ul",Ve,[w("li",Pe,[p(s,{to:"/"},{default:S(()=>i[0]||(i[0]=[x("Главная")])),_:1})]),w("li",Ge,[p(s,{to:"/about"},{default:S(()=>i[1]||(i[1]=[x("О проекте")])),_:1})]),w("li",Je,[p(s,{to:"/"},{default:S(()=>i[2]||(i[2]=[x("Возможности")])),_:1})]),w("li",Qe,[p(s,{to:"/"},{default:S(()=>i[3]||(i[3]=[x("Карточки")])),_:1})]),w("li",Xe,[p(s,{to:"/"},{default:S(()=>i[4]||(i[4]=[x("Статистика")])),_:1})]),w("li",Ye,[p(s,{to:"/"},{default:S(()=>i[5]||(i[5]=[x("FAQ")])),_:1})])]),w("div",Ze,[p(o,null,{default:S(()=>[x(re(t.isAuth?"Выйти":"Войти"),1)]),_:1}),p(o,{className:"primary",showModal:n.openModal},{default:S(()=>i[6]||(i[6]=[x("Регистрация")])),_:1},8,["showModal"])])])])}}},tt=D(et,[["__scopeId","data-v-88b0476f"]]),it=M({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const t=e.renderKey,n=e.route,i={};for(const r in e.route)Object.defineProperty(i,r,{get:()=>t===e.renderKey?e.route[r]:n[r],enumerable:!0});return se(V,oe(i)),()=>N(e.vnode,{ref:e.vnodeRef})}}),nt=M({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t,slots:n,expose:i}){const r=H(),s=$(),o=L(V,null);let a;i({pageRef:s});const c=L(ae,null);let u;const f=r.deferHydration();if(r.isHydrating){const d=r.hooks.hookOnce("app:error",f);de().beforeEach(d)}return e.pageKey&&ce(()=>e.pageKey,(d,m)=>{d!==m&&r.callHook("page:loading:start")}),()=>N(le,{name:e.name,route:e.route,...t},{default:d=>{const m=st(o,d.route,d.Component),b=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!b)return u;f();return}if(u&&c&&!c.isCurrent(d.route))return u;if(m&&o&&(!c||c!=null&&c.isCurrent(o)))return b?u:null;const v=z(d,e.pageKey);!r.isHydrating&&!ot(o,d.route,d.Component)&&a===v&&r.callHook("page:loading:end"),a=v;const A=!!(e.transition??d.route.meta.pageTransition??T),k=A&&rt([e.transition,d.route.meta.pageTransition,T,{onAfterLeave:()=>{r.callHook("page:transition:finish",d.Component)}}].filter(Boolean)),l=e.keepalive??d.route.meta.keepalive??ue;return u=fe(pe,A&&k,me(l,N(ge,{suspensible:!0,onPending:()=>r.callHook("page:start",d.Component),onResolve:()=>{he(()=>r.callHook("page:finish",d.Component).then(()=>r.callHook("page:loading:end")).finally(f))}},{default:()=>{const g=N(it,{key:v||void 0,vnode:n.default?N(P,void 0,n.default(d)):d.Component,route:d.route,renderKey:v||void 0,trackRootNodes:A,vnodeRef:s});return l&&(g.type.name=d.Component.type.name||d.Component.type.__name||"RouteProvider"),g}}))).default(),u}})}});function rt(e){const t=e.map(n=>({...n,onAfterLeave:n.onAfterLeave?_e(n.onAfterLeave):void 0}));return j(...t)}function st(e,t,n){if(!e)return!1;const i=t.matched.findIndex(r=>{var s;return((s=r.components)==null?void 0:s.default)===(n==null?void 0:n.type)});return!i||i===-1?!1:t.matched.slice(0,i).some((r,s)=>{var o,a,c;return((o=r.components)==null?void 0:o.default)!==((c=(a=e.matched[s])==null?void 0:a.components)==null?void 0:c.default)})||n&&z({route:t,Component:n})!==z({route:e,Component:n})}function ot(e,t,n){return e?t.matched.findIndex(r=>{var s;return((s=r.components)==null?void 0:s.default)===(n==null?void 0:n.type)})<t.matched.length-1:!1}const at={};function dt(e,t){const n=tt,i=nt;return O(),W(P,null,[p(n),p(i)],64)}const ft=D(at,[["render",dt]]);export{ft as default};
