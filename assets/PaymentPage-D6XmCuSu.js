import{r as c,j as p}from"./index-CXBEtvYE.js";import{N as _}from"./NoneNavHeader-LfASzaCl.js";import{p as L}from"./영화포스터-Bxtv0lMT.js";import"./index-B9AsNjQU.js";var E;function U(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=document.querySelector('[src="'.concat(e,'"]'));if(o!=null&&E!==void 0)return E;if(o!=null&&N(t)!==void 0)return Promise.resolve(N(t));var s=document.createElement("script");return s.src=e,r.priority!==void 0&&(s.fetchPriority=r.priority),E=new Promise(function(a,i){document.head.appendChild(s),window.addEventListener("TossPayments:initialize:".concat(t),function(){N(t)!==void 0?a(N(t)):i(new Error("[TossPayments SDK] Failed to load script: [".concat(e,"]")))})}),E}function N(e){return window[e]}var H="https://js.tosspayments.com/v1/payment-widget";function K(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=o.src,a=s===void 0?H:s;return typeof window>"u"?Promise.resolve({}):U(a,"PaymentWidget").then(function(i){return i(e,t,r)})}const q="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let B=(e=21)=>{let t="",r=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+=q[r[e]&63];return t},G={data:""},V=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||G,Y=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,J=/\/\*[^]*?\*\/|  +/g,D=/\n+/g,x=(e,t)=>{let r="",o="",s="";for(let a in e){let i=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+i+";":o+=a[1]=="f"?x(i,a):a+"{"+x(i,a[1]=="k"?"":t)+"}":typeof i=="object"?o+=x(i,t?t.replace(/([^,])+/g,n=>a.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):a):i!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=x.p?x.p(a,i):a+":"+i+";")}return r+(t&&s?t+"{"+s+"}":s)+o},y={},F=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+F(e[r]);return t}return e},Q=(e,t,r,o,s)=>{let a=F(e),i=y[a]||(y[a]=(l=>{let d=0,u=11;for(;d<l.length;)u=101*u+l.charCodeAt(d++)>>>0;return"go"+u})(a));if(!y[i]){let l=a!==e?e:(d=>{let u,h,f=[{}];for(;u=Y.exec(d.replace(J,""));)u[4]?f.shift():u[3]?(h=u[3].replace(D," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][u[1]]=u[2].replace(D," ").trim();return f[0]})(e);y[i]=x(s?{["@keyframes "+i]:l}:l,r?"":"."+i)}let n=r&&y.g?y.g:null;return r&&(y.g=y[i]),((l,d,u,h)=>{h?d.data=d.data.replace(h,l):d.data.indexOf(l)===-1&&(d.data=u?l+d.data:d.data+l)})(y[i],t,o,n),i},Z=(e,t,r)=>e.reduce((o,s,a)=>{let i=t[a];if(i&&i.call){let n=i(r),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;i=l?"."+l:n&&typeof n=="object"?n.props?"":x(n,""):n===!1?"":n}return o+s+(i??"")},"");function C(e){let t=this||{},r=e.call?e(t.p):e;return Q(r.unshift?r.raw?Z(r,[].slice.call(arguments,1),t.p):r.reduce((o,s)=>Object.assign(o,s&&s.call?s(t.p):s),{}):r,V(t.target),t.g,t.o,t.k)}let R,z,M;C.bind({g:1});let v=C.bind({k:1});function X(e,t,r,o){x.p=t,R=e,z=r,M=o}function b(e,t){let r=this||{};return function(){let o=arguments;function s(a,i){let n=Object.assign({},a),l=n.className||s.className;r.p=Object.assign({theme:z&&z()},n),r.o=/ *go\d+/.test(l),n.className=C.apply(r,o)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),M&&d[0]&&M(n),R(d,n)}return t?t(s):s}}var ee=e=>typeof e=="function",A=(e,t)=>ee(e)?e(t):e,te=(()=>{let e=0;return()=>(++e).toString()})(),W=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),re=20,$=new Map,ae=1e3,I=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),w({type:4,toastId:e})},ae);$.set(e,t)},se=e=>{let t=$.get(e);t&&clearTimeout(t)},T=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,re)};case 1:return t.toast.id&&se(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return e.toasts.find(a=>a.id===r.id)?T(e,{type:1,toast:r}):T(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?I(o):e.toasts.forEach(a=>{I(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===o||o===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},k=[],S={toasts:[],pausedAt:void 0},w=e=>{S=T(S,e),k.forEach(t=>{t(S)})},oe={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ie=(e={})=>{let[t,r]=c.useState(S);c.useEffect(()=>(k.push(r),()=>{let s=k.indexOf(r);s>-1&&k.splice(s,1)}),[t]);let o=t.toasts.map(s=>{var a,i;return{...e,...e[s.type],...s,duration:s.duration||((a=e[s.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||oe[s.type],style:{...e.style,...(i=e[s.type])==null?void 0:i.style,...s.style}}});return{...t,toasts:o}},ne=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||te()}),j=e=>(t,r)=>{let o=ne(t,e,r);return w({type:2,toast:o}),o.id},m=(e,t)=>j("blank")(e,t);m.error=j("error");m.success=j("success");m.loading=j("loading");m.custom=j("custom");m.dismiss=e=>{w({type:3,toastId:e})};m.remove=e=>w({type:4,toastId:e});m.promise=(e,t,r)=>{let o=m.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(s=>(m.success(A(t.success,s),{id:o,...r,...r==null?void 0:r.success}),s)).catch(s=>{m.error(A(t.error,s),{id:o,...r,...r==null?void 0:r.error})}),e};var le=(e,t)=>{w({type:1,toast:{id:e,height:t}})},de=()=>{w({type:5,time:Date.now()})},ce=e=>{let{toasts:t,pausedAt:r}=ie(e);c.useEffect(()=>{if(r)return;let a=Date.now(),i=t.map(n=>{if(n.duration===1/0)return;let l=(n.duration||0)+n.pauseDuration-(a-n.createdAt);if(l<0){n.visible&&m.dismiss(n.id);return}return setTimeout(()=>m.dismiss(n.id),l)});return()=>{i.forEach(n=>n&&clearTimeout(n))}},[t,r]);let o=c.useCallback(()=>{r&&w({type:6,time:Date.now()})},[r]),s=c.useCallback((a,i)=>{let{reverseOrder:n=!1,gutter:l=8,defaultPosition:d}=i||{},u=t.filter(g=>(g.position||d)===(a.position||d)&&g.height),h=u.findIndex(g=>g.id===a.id),f=u.filter((g,O)=>O<h&&g.visible).length;return u.filter(g=>g.visible).slice(...n?[f+1]:[0,f]).reduce((g,O)=>g+(O.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:le,startPause:de,endPause:o,calculateOffset:s}}},ue=v`
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
}`,Ee=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${je} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ne=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return t!==void 0?typeof t=="string"?c.createElement(Ee,null,t):t:r==="blank"?null:c.createElement(we,null,c.createElement(ge,{...o}),r!=="loading"&&c.createElement(be,null,r==="error"?c.createElement(fe,{...o}):c.createElement(xe,{...o})))},Pe=e=>`
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
`,Oe=(e,t)=>{let r=e.includes("top")?1:-1,[o,s]=W()?[ke,Se]:[Pe(r),$e(r)];return{animation:t?`${v(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ze=c.memo(({toast:e,position:t,style:r,children:o})=>{let s=e.height?Oe(e.position||t||"top-center",e.visible):{opacity:0},a=c.createElement(Ne,{toast:e}),i=c.createElement(Ce,{...e.ariaProps},A(e.message,e));return c.createElement(Ae,{className:e.className,style:{...s,...r,...e.style}},typeof o=="function"?o({icon:a,message:i}):c.createElement(c.Fragment,null,a,i))});X(c.createElement);var Me=({id:e,className:t,style:r,onHeightUpdate:o,children:s})=>{let a=c.useCallback(i=>{if(i){let n=()=>{let l=i.getBoundingClientRect().height;o(e,l)};n(),new MutationObserver(n).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return c.createElement("div",{ref:a,className:t,style:r},s)},Te=(e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:W()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...s}},De=C`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,P=16,Ie=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:s,containerStyle:a,containerClassName:i})=>{let{toasts:n,handlers:l}=ce(r);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:P,left:P,right:P,bottom:P,pointerEvents:"none",...a},className:i,onMouseEnter:l.startPause,onMouseLeave:l.endPause},n.map(d=>{let u=d.position||t,h=l.calculateOffset(d,{reverseOrder:e,gutter:o,defaultPosition:t}),f=Te(u,h);return c.createElement(Me,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?De:"",style:f},d.type==="custom"?A(d.message,d):s?s(d):c.createElement(ze,{toast:d,position:u}))}))},Fe=m;const Ue=()=>{const e="test_ck_P9BRQmyarY9dWpMpp71vrJ07KzLN",t="v0sCzAipMwncSa6owyId4",[r,o]=c.useState(null),[s,a]=c.useState(0),[i,n]=c.useState(!1);c.useEffect(()=>{a(50),(async()=>{try{const u=await K(e,t);o(u)}catch(u){console.error("Error fetching payment widget:",u)}})()},[]),c.useEffect(()=>{if(r==null)return;r.renderPaymentMethods("#payment-widget",{value:s},{variantKey:"DEFAULT"}).on("ready",()=>{n(!0)}),r.renderAgreement("#agreement",{variantKey:"AGREEMENT"})},[r,s]);const l=async()=>{try{await(r==null?void 0:r.requestPayment({orderId:B(),orderName:"토스 티셔츠 외 2건",successUrl:`${window.location.origin}/fund/payment/success`,failUrl:`${window.location.origin}/fund/payment/fail`}))}catch(d){console.error("Error requesting payment:",d);const u=d.message;Fe(u,{duration:2e3})}};return p.jsxs("div",{className:"bg-white h-[100vh]",children:[p.jsxs("div",{className:"text-black bg-[#F5F5F5] rounded-b-[3vh] shadow-bgShadow",children:[p.jsx(_,{centerText:"펀딩신청"}),p.jsxs("div",{className:"flex justify-between p-[3vh]",children:[p.jsx("div",{className:"text-[20px] font-bold",children:"총 결제 금액"}),p.jsx("div",{className:"text-[20px] font-bold",children:"10,000원"})]})]}),p.jsxs("div",{className:"none-scroll flex flex-col gap-[5vh] overflow-auto w-[100%] h-[83vh] pt-[3vh]",children:[p.jsxs("div",{className:"text-[#333D4B] flex flex-col gap-[2vh] px-[3vh] z-[2]",children:[p.jsx("div",{className:"font-bold text-[20px]",children:"펀딩 정보"}),p.jsxs("div",{className:"flex gap-[2vh]",children:[p.jsx("img",{src:L,alt:"",className:"w-[13vh] rounded-[1vh]"}),p.jsxs("div",{className:"flex flex-col justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{children:"엘리멘탈"}),p.jsx("div",{children:"2024.03.09(토) 15:00"}),p.jsx("div",{children:"CGV 강남"})]}),p.jsx("div",{children:"일반 1"})]})]})]}),p.jsxs("div",{className:"relative top-[-11vh]",children:[p.jsx("div",{className:"w-[100%] h-[5vh] bg-white absolute top-0 z-[1]"}),p.jsxs("div",{className:"",children:[p.jsx("div",{id:"payment-widget"}),p.jsx("div",{id:"agreement"})]})]}),i&&p.jsx("button",{id:"payment-button",disabled:!i,onClick:l,className:"w-[100%] px-[3vh] fixed bottom-[2vh] border-none bg-transparent",children:p.jsx("div",{className:"w-[100%] py-[2vh] shadow-bgRed bg-red-600 rounded-[1vh] text-[2.5vh] font-bold text-white",children:"결제하기"})}),p.jsx(Ie,{containerStyle:{margin:"0 auto"},toastOptions:{style:{background:"#363636",color:"#fff",fontSize:"2vh"}}})]})]})};export{Ue as default};
