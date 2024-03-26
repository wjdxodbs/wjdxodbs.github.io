import{r as u,j as l,b as W}from"./index-Bu7gmcRr.js";import{p as _}from"./영화포스터-Bxtv0lMT.js";var N;function U(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=document.querySelector('[src="'.concat(e,'"]'));if(i!=null&&N!==void 0)return N;if(i!=null&&E(t)!==void 0)return Promise.resolve(E(t));var s=document.createElement("script");return s.src=e,a.priority!==void 0&&(s.fetchPriority=a.priority),N=new Promise(function(r,o){document.head.appendChild(s),window.addEventListener("TossPayments:initialize:".concat(t),function(){E(t)!==void 0?r(E(t)):o(new Error("[TossPayments SDK] Failed to load script: [".concat(e,"]")))})}),N}function E(e){return window[e]}var H="https://js.tosspayments.com/v1/payment-widget";function K(e,t,a){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=i.src,r=s===void 0?H:s;return typeof window>"u"?Promise.resolve({}):U(r,"PaymentWidget").then(function(o){return o(e,t,a)})}const q="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let B=(e=21)=>{let t="",a=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+=q[a[e]&63];return t},G={data:""},V=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||G,Y=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,J=/\/\*[^]*?\*\/|  +/g,D=/\n+/g,x=(e,t)=>{let a="",i="",s="";for(let r in e){let o=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+o+";":i+=r[1]=="f"?x(o,r):r+"{"+x(o,r[1]=="k"?"":t)+"}":typeof o=="object"?i+=x(o,t?t.replace(/([^,])+/g,n=>r.replace(/(^:.*)|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,n):n?n+" "+d:d)):r):o!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=x.p?x.p(r,o):r+":"+o+";")}return a+(t&&s?t+"{"+s+"}":s)+i},y={},F=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+F(e[a]);return t}return e},Q=(e,t,a,i,s)=>{let r=F(e),o=y[r]||(y[r]=(d=>{let c=0,p=11;for(;c<d.length;)p=101*p+d.charCodeAt(c++)>>>0;return"go"+p})(r));if(!y[o]){let d=r!==e?e:(c=>{let p,f,m=[{}];for(;p=Y.exec(c.replace(J,""));)p[4]?m.shift():p[3]?(f=p[3].replace(D," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][p[1]]=p[2].replace(D," ").trim();return m[0]})(e);y[o]=x(s?{["@keyframes "+o]:d}:d,a?"":"."+o)}let n=a&&y.g?y.g:null;return a&&(y.g=y[o]),((d,c,p,f)=>{f?c.data=c.data.replace(f,d):c.data.indexOf(d)===-1&&(c.data=p?d+c.data:c.data+d)})(y[o],t,i,n),o},Z=(e,t,a)=>e.reduce((i,s,r)=>{let o=t[r];if(o&&o.call){let n=o(a),d=n&&n.props&&n.props.className||/^go/.test(n)&&n;o=d?"."+d:n&&typeof n=="object"?n.props?"":x(n,""):n===!1?"":n}return i+s+(o??"")},"");function C(e){let t=this||{},a=e.call?e(t.p):e;return Q(a.unshift?a.raw?Z(a,[].slice.call(arguments,1),t.p):a.reduce((i,s)=>Object.assign(i,s&&s.call?s(t.p):s),{}):a,V(t.target),t.g,t.o,t.k)}let L,z,M;C.bind({g:1});let v=C.bind({k:1});function X(e,t,a,i){x.p=t,L=e,z=a,M=i}function b(e,t){let a=this||{};return function(){let i=arguments;function s(r,o){let n=Object.assign({},r),d=n.className||s.className;a.p=Object.assign({theme:z&&z()},n),a.o=/ *go\d+/.test(d),n.className=C.apply(a,i)+(d?" "+d:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),M&&c[0]&&M(n),L(c,n)}return t?t(s):s}}var ee=e=>typeof e=="function",A=(e,t)=>ee(e)?e(t):e,te=(()=>{let e=0;return()=>(++e).toString()})(),R=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ae=20,$=new Map,re=1e3,I=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),w({type:4,toastId:e})},re);$.set(e,t)},se=e=>{let t=$.get(e);t&&clearTimeout(t)},T=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ae)};case 1:return t.toast.id&&se(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return e.toasts.find(r=>r.id===a.id)?T(e,{type:1,toast:a}):T(e,{type:0,toast:a});case 3:let{toastId:i}=t;return i?I(i):e.toasts.forEach(r=>{I(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===i||i===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+s}))}}},k=[],S={toasts:[],pausedAt:void 0},w=e=>{S=T(S,e),k.forEach(t=>{t(S)})},ie={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},oe=(e={})=>{let[t,a]=u.useState(S);u.useEffect(()=>(k.push(a),()=>{let s=k.indexOf(a);s>-1&&k.splice(s,1)}),[t]);let i=t.toasts.map(s=>{var r,o;return{...e,...e[s.type],...s,duration:s.duration||((r=e[s.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||ie[s.type],style:{...e.style,...(o=e[s.type])==null?void 0:o.style,...s.style}}});return{...t,toasts:i}},ne=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||te()}),j=e=>(t,a)=>{let i=ne(t,e,a);return w({type:2,toast:i}),i.id},h=(e,t)=>j("blank")(e,t);h.error=j("error");h.success=j("success");h.loading=j("loading");h.custom=j("custom");h.dismiss=e=>{w({type:3,toastId:e})};h.remove=e=>w({type:4,toastId:e});h.promise=(e,t,a)=>{let i=h.loading(t.loading,{...a,...a==null?void 0:a.loading});return e.then(s=>(h.success(A(t.success,s),{id:i,...a,...a==null?void 0:a.success}),s)).catch(s=>{h.error(A(t.error,s),{id:i,...a,...a==null?void 0:a.error})}),e};var le=(e,t)=>{w({type:1,toast:{id:e,height:t}})},de=()=>{w({type:5,time:Date.now()})},ce=e=>{let{toasts:t,pausedAt:a}=oe(e);u.useEffect(()=>{if(a)return;let r=Date.now(),o=t.map(n=>{if(n.duration===1/0)return;let d=(n.duration||0)+n.pauseDuration-(r-n.createdAt);if(d<0){n.visible&&h.dismiss(n.id);return}return setTimeout(()=>h.dismiss(n.id),d)});return()=>{o.forEach(n=>n&&clearTimeout(n))}},[t,a]);let i=u.useCallback(()=>{a&&w({type:6,time:Date.now()})},[a]),s=u.useCallback((r,o)=>{let{reverseOrder:n=!1,gutter:d=8,defaultPosition:c}=o||{},p=t.filter(g=>(g.position||c)===(r.position||c)&&g.height),f=p.findIndex(g=>g.id===r.id),m=p.filter((g,O)=>O<f&&g.visible).length;return p.filter(g=>g.visible).slice(...n?[m+1]:[0,m]).reduce((g,O)=>g+(O.height||0)+d,0)},[t]);return{toasts:t,handlers:{updateHeight:le,startPause:de,endPause:i,calculateOffset:s}}},ue=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,pe=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,me=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,fe=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ue} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${pe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${me} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,he=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ge=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${he} 1s linear infinite;
`,ye=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ve=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,xe=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ye} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ve} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,be=b("div")`
  position: absolute;
`,we=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,je=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ne=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${je} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ee=({toast:e})=>{let{icon:t,type:a,iconTheme:i}=e;return t!==void 0?typeof t=="string"?u.createElement(Ne,null,t):t:a==="blank"?null:u.createElement(we,null,u.createElement(ge,{...i}),a!=="loading"&&u.createElement(be,null,a==="error"?u.createElement(fe,{...i}):u.createElement(xe,{...i})))},Pe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,$e=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ke="0%{opacity:0;} 100%{opacity:1;}",Se="0%{opacity:1;} 100%{opacity:0;}",Ae=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ce=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Oe=(e,t)=>{let a=e.includes("top")?1:-1,[i,s]=R()?[ke,Se]:[Pe(a),$e(a)];return{animation:t?`${v(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ze=u.memo(({toast:e,position:t,style:a,children:i})=>{let s=e.height?Oe(e.position||t||"top-center",e.visible):{opacity:0},r=u.createElement(Ee,{toast:e}),o=u.createElement(Ce,{...e.ariaProps},A(e.message,e));return u.createElement(Ae,{className:e.className,style:{...s,...a,...e.style}},typeof i=="function"?i({icon:r,message:o}):u.createElement(u.Fragment,null,r,o))});X(u.createElement);var Me=({id:e,className:t,style:a,onHeightUpdate:i,children:s})=>{let r=u.useCallback(o=>{if(o){let n=()=>{let d=o.getBoundingClientRect().height;i(e,d)};n(),new MutationObserver(n).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return u.createElement("div",{ref:r,className:t,style:a},s)},Te=(e,t)=>{let a=e.includes("top"),i=a?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:R()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...i,...s}},De=C`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,P=16,Ie=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:i,children:s,containerStyle:r,containerClassName:o})=>{let{toasts:n,handlers:d}=ce(a);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:P,left:P,right:P,bottom:P,pointerEvents:"none",...r},className:o,onMouseEnter:d.startPause,onMouseLeave:d.endPause},n.map(c=>{let p=c.position||t,f=d.calculateOffset(c,{reverseOrder:e,gutter:i,defaultPosition:t}),m=Te(p,f);return u.createElement(Me,{id:c.id,key:c.id,onHeightUpdate:d.updateHeight,className:c.visible?De:"",style:m},c.type==="custom"?A(c.message,c):s?s(c):u.createElement(ze,{toast:c,position:p}))}))},Fe=h;const Le=()=>l.jsx("div",{className:"bg-black fixed inset-0 bg-opacity-30 z-10 flex items-center justify-center m-auto",children:l.jsxs("div",{className:"loader z-50",children:[l.jsx("div",{className:"bar1"}),l.jsx("div",{className:"bar2"}),l.jsx("div",{className:"bar3"}),l.jsx("div",{className:"bar4"}),l.jsx("div",{className:"bar5"}),l.jsx("div",{className:"bar6"}),l.jsx("div",{className:"bar7"}),l.jsx("div",{className:"bar8"}),l.jsx("div",{className:"bar9"}),l.jsx("div",{className:"bar10"}),l.jsx("div",{className:"bar11"}),l.jsx("div",{className:"bar12"})]})}),_e=()=>{const e="test_ck_P9BRQmyarY9dWpMpp71vrJ07KzLN",t="v0sCzAipMwncSa6owyId4",[a,i]=u.useState(null),[s,r]=u.useState(0),[o,n]=u.useState(!0),[d,c]=u.useState(!1);u.useEffect(()=>{r(50),(async()=>{try{const m=await K(e,t);i(m)}catch(m){console.error("Error fetching payment widget:",m)}})()},[]),u.useEffect(()=>{if(a==null)return;a.renderPaymentMethods("#payment-widget",{value:s},{variantKey:"DEFAULT"}).on("ready",()=>{c(!0),n(!1)}),a.renderAgreement("#agreement",{variantKey:"AGREEMENT"})},[a,s]);const p=async()=>{try{await(a==null?void 0:a.requestPayment({orderId:B(),orderName:"토스 티셔츠 외 2건",successUrl:`${window.location.origin}/fund/payment/success`,failUrl:`${window.location.origin}/fund/payment/fail`}))}catch(f){console.error("Error requesting payment:",f);const m=f.message;Fe(m,{duration:2e3})}};return l.jsxs("div",{className:"bg-white h-[100vh]",children:[l.jsxs("div",{className:"text-black bg-[#F5F5F5] rounded-b-[3vh] shadow-bgShadow",children:[l.jsx(W,{centerText:"펀딩신청"}),l.jsxs("div",{className:"flex justify-between p-[3vh]",children:[l.jsx("div",{className:"text-[20px] font-bold",children:"총 결제 금액"}),l.jsx("div",{className:"text-[20px] font-bold",children:"10,000원"})]})]}),l.jsxs("div",{className:"none-scroll flex flex-col gap-[5vh] overflow-auto w-[100%] h-[69vh] pt-[3vh]",children:[l.jsxs("div",{className:"text-[#333D4B] flex flex-col gap-[2vh] px-[3vh] z-[2]",children:[l.jsx("div",{className:"font-bold text-[20px]",children:"펀딩 정보"}),l.jsxs("div",{className:"flex gap-[2vh]",children:[l.jsx("img",{src:_,alt:"",className:"w-[13vh] rounded-[1vh]"}),l.jsxs("div",{className:"flex flex-col justify-between",children:[l.jsxs("div",{children:[l.jsx("div",{children:"엘리멘탈"}),l.jsx("div",{children:"2024.03.09(토) 15:00"}),l.jsx("div",{children:"CGV 강남"})]}),l.jsx("div",{children:"일반 1"})]})]})]}),l.jsxs("div",{className:"relative top-[-11vh]",children:[l.jsx("div",{className:"w-[100%] h-[5vh] bg-white absolute top-0 z-[1]"}),l.jsxs("div",{className:"",children:[l.jsx("div",{id:"payment-widget"}),l.jsx("div",{id:"agreement"})]})]})]}),d&&l.jsx("button",{id:"payment-button",disabled:!d,onClick:p,className:"w-[100%] p-[3vh] border-none bg-transparent",children:l.jsx("div",{className:"w-[100%] py-[2vh] shadow-bgRed bg-red-600 rounded-[1vh] text-[2.5vh] font-bold text-white",children:"결제하기"})}),o&&l.jsx(Le,{}),l.jsx(Ie,{containerStyle:{margin:"0 auto"},toastOptions:{style:{background:"#363636",color:"#fff",fontSize:"2vh"}}})]})};export{_e as default};
