import{r as c}from"./index-DSs0NPxt.js";let P={data:""},F=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||P,L=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,R=/\/\*[^]*?\*\/|  +/g,A=/\n+/g,b=(t,e)=>{let a="",s="",o="";for(let r in t){let i=t[r];r[0]=="@"?r[1]=="i"?a=r+" "+i+";":s+=r[1]=="f"?b(i,r):r+"{"+b(i,r[1]=="k"?"":e)+"}":typeof i=="object"?s+=b(i,e?e.replace(/([^,])+/g,n=>r.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):r):i!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=b.p?b.p(r,i):r+":"+i+";")}return a+(e&&o?e+"{"+o+"}":o)+s},h={},N=t=>{if(typeof t=="object"){let e="";for(let a in t)e+=a+N(t[a]);return e}return t},_=(t,e,a,s,o)=>{let r=N(t),i=h[r]||(h[r]=(l=>{let d=0,u=11;for(;d<l.length;)u=101*u+l.charCodeAt(d++)>>>0;return"go"+u})(r));if(!h[i]){let l=r!==t?t:(d=>{let u,f,m=[{}];for(;u=L.exec(d.replace(R,""));)u[4]?m.shift():u[3]?(f=u[3].replace(A," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][u[1]]=u[2].replace(A," ").trim();return m[0]})(t);h[i]=b(o?{["@keyframes "+i]:l}:l,a?"":"."+i)}let n=a&&h.g?h.g:null;return a&&(h.g=h[i]),((l,d,u,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=u?l+d.data:d.data+l)})(h[i],e,s,n),i},K=(t,e,a)=>t.reduce((s,o,r)=>{let i=e[r];if(i&&i.call){let n=i(a),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;i=l?"."+l:n&&typeof n=="object"?n.props?"":b(n,""):n===!1?"":n}return s+o+(i??"")},"");function I(t){let e=this||{},a=t.call?t(e.p):t;return _(a.unshift?a.raw?K(a,[].slice.call(arguments,1),e.p):a.reduce((s,o)=>Object.assign(s,o&&o.call?o(e.p):o),{}):a,F(e.target),e.g,e.o,e.k)}let z,T,j;I.bind({g:1});let y=I.bind({k:1});function U(t,e,a,s){b.p=e,z=t,T=a,j=s}function v(t,e){let a=this||{};return function(){let s=arguments;function o(r,i){let n=Object.assign({},r),l=n.className||o.className;a.p=Object.assign({theme:T&&T()},n),a.o=/ *go\d+/.test(l),n.className=I.apply(a,s)+(l?" "+l:""),e&&(n.ref=i);let d=t;return t[0]&&(d=n.as||t,delete n.as),j&&d[0]&&j(n),z(d,n)}return e?e(o):o}}var W=t=>typeof t=="function",M=(t,e)=>W(t)?t(e):t,Y=(()=>{let t=0;return()=>(++t).toString()})(),H=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Z=20,D=new Map,q=1e3,C=t=>{if(D.has(t))return;let e=setTimeout(()=>{D.delete(t),x({type:4,toastId:t})},q);D.set(t,e)},B=t=>{let e=D.get(t);e&&clearTimeout(e)},S=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,Z)};case 1:return e.toast.id&&B(e.toast.id),{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case 2:let{toast:a}=e;return t.toasts.find(r=>r.id===a.id)?S(t,{type:1,toast:a}):S(t,{type:0,toast:a});case 3:let{toastId:s}=e;return s?C(s):t.toasts.forEach(r=>{C(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===s||s===void 0?{...r,visible:!1}:r)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let o=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+o}))}}},E=[],k={toasts:[],pausedAt:void 0},x=t=>{k=S(k,t),E.forEach(e=>{e(k)})},G={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},J=(t={})=>{let[e,a]=c.useState(k);c.useEffect(()=>(E.push(a),()=>{let o=E.indexOf(a);o>-1&&E.splice(o,1)}),[e]);let s=e.toasts.map(o=>{var r,i;return{...t,...t[o.type],...o,duration:o.duration||((r=t[o.type])==null?void 0:r.duration)||(t==null?void 0:t.duration)||G[o.type],style:{...t.style,...(i=t[o.type])==null?void 0:i.style,...o.style}}});return{...e,toasts:s}},Q=(t,e="blank",a)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...a,id:(a==null?void 0:a.id)||Y()}),w=t=>(e,a)=>{let s=Q(e,t,a);return x({type:2,toast:s}),s.id},p=(t,e)=>w("blank")(t,e);p.error=w("error");p.success=w("success");p.loading=w("loading");p.custom=w("custom");p.dismiss=t=>{x({type:3,toastId:t})};p.remove=t=>x({type:4,toastId:t});p.promise=(t,e,a)=>{let s=p.loading(e.loading,{...a,...a==null?void 0:a.loading});return t.then(o=>(p.success(M(e.success,o),{id:s,...a,...a==null?void 0:a.success}),o)).catch(o=>{p.error(M(e.error,o),{id:s,...a,...a==null?void 0:a.error})}),t};var V=(t,e)=>{x({type:1,toast:{id:t,height:e}})},X=()=>{x({type:5,time:Date.now()})},tt=t=>{let{toasts:e,pausedAt:a}=J(t);c.useEffect(()=>{if(a)return;let r=Date.now(),i=e.map(n=>{if(n.duration===1/0)return;let l=(n.duration||0)+n.pauseDuration-(r-n.createdAt);if(l<0){n.visible&&p.dismiss(n.id);return}return setTimeout(()=>p.dismiss(n.id),l)});return()=>{i.forEach(n=>n&&clearTimeout(n))}},[e,a]);let s=c.useCallback(()=>{a&&x({type:6,time:Date.now()})},[a]),o=c.useCallback((r,i)=>{let{reverseOrder:n=!1,gutter:l=8,defaultPosition:d}=i||{},u=e.filter(g=>(g.position||d)===(r.position||d)&&g.height),f=u.findIndex(g=>g.id===r.id),m=u.filter((g,O)=>O<f&&g.visible).length;return u.filter(g=>g.visible).slice(...n?[m+1]:[0,m]).reduce((g,O)=>g+(O.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:V,startPause:X,endPause:s,calculateOffset:o}}},et=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,at=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,rt=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ot=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${et} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${at} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${rt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,st=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,it=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${st} 1s linear infinite;
`,nt=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,lt=y`
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
}`,dt=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${nt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${lt} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ct=v("div")`
  position: absolute;
`,ut=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,pt=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,mt=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${pt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ft=({toast:t})=>{let{icon:e,type:a,iconTheme:s}=t;return e!==void 0?typeof e=="string"?c.createElement(mt,null,e):e:a==="blank"?null:c.createElement(ut,null,c.createElement(it,{...s}),a!=="loading"&&c.createElement(ct,null,a==="error"?c.createElement(ot,{...s}):c.createElement(dt,{...s})))},gt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ht=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,yt="0%{opacity:0;} 100%{opacity:1;}",bt="0%{opacity:1;} 100%{opacity:0;}",vt=v("div")`
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
`,xt=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,wt=(t,e)=>{let a=t.includes("top")?1:-1,[s,o]=H()?[yt,bt]:[gt(a),ht(a)];return{animation:e?`${y(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},$t=c.memo(({toast:t,position:e,style:a,children:s})=>{let o=t.height?wt(t.position||e||"top-center",t.visible):{opacity:0},r=c.createElement(ft,{toast:t}),i=c.createElement(xt,{...t.ariaProps},M(t.message,t));return c.createElement(vt,{className:t.className,style:{...o,...a,...t.style}},typeof s=="function"?s({icon:r,message:i}):c.createElement(c.Fragment,null,r,i))});U(c.createElement);var Dt=({id:t,className:e,style:a,onHeightUpdate:s,children:o})=>{let r=c.useCallback(i=>{if(i){let n=()=>{let l=i.getBoundingClientRect().height;s(t,l)};n(),new MutationObserver(n).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return c.createElement("div",{ref:r,className:e,style:a},o)},Et=(t,e)=>{let a=t.includes("top"),s=a?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:H()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(a?1:-1)}px)`,...s,...o}},kt=I`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,Ot=({reverseOrder:t,position:e="top-center",toastOptions:a,gutter:s,children:o,containerStyle:r,containerClassName:i})=>{let{toasts:n,handlers:l}=tt(a);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...r},className:i,onMouseEnter:l.startPause,onMouseLeave:l.endPause},n.map(d=>{let u=d.position||e,f=l.calculateOffset(d,{reverseOrder:t,gutter:s,defaultPosition:e}),m=Et(u,f);return c.createElement(Dt,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?kt:"",style:m},d.type==="custom"?M(d.message,d):o?o(d):c.createElement($t,{toast:d,position:u}))}))},Mt=p;const Tt=t=>{const e=new Date,a=new Date(t);e.setHours(0,0,0,0),a.setHours(0,0,0,0);const s=(a.getTime()-e.getTime())/(1e3*60*60),o=s/24,r=new Intl.RelativeTimeFormat("ko-KR",{numeric:"always"});let i;return Math.abs(s)<24?i=r.format(Math.round(s),"hour"):Math.abs(o)<7?i=r.format(Math.round(o),"day"):Math.abs(o)<28?i=r.format(Math.ceil(o/7),"week"):i=a.toLocaleDateString("ko-KR",{month:"2-digit",day:"2-digit"}),i};function jt(t){return new Date(t).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",weekday:"short"}).replace(/(\d{4})\. (\d{2})\. (\d{2})\./,"$1.$2.$3")}function St(t){return new Date(t).toLocaleDateString("ko-KR",{month:"2-digit",day:"2-digit",weekday:"short"}).replace(/(\d{4})\. (\d{2})\. (\d{2})\./,"$1.$2.$3")}function At(t,e){let a=t.split(":"),s=new Date;s.setHours(parseInt(a[0]),parseInt(a[1]),0,0),s.setMinutes(s.getMinutes()+e);let o=s.getHours().toString().padStart(2,"0"),r=s.getMinutes().toString().padStart(2,"0");return`${o}:${r}`}const Ct=t=>Mt(t,{duration:1500});export{Ot as I,At as a,St as b,jt as f,Tt as g,Ct as t};
