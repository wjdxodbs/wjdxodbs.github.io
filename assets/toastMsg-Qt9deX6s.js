import{r as c,j as F}from"./index-KjmQu_IF.js";let H={data:""},_=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||H,L=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,R=/\/\*[^]*?\*\/|  +/g,I=/\n+/g,b=(t,e)=>{let a="",s="",o="";for(let r in t){let n=t[r];r[0]=="@"?r[1]=="i"?a=r+" "+n+";":s+=r[1]=="f"?b(n,r):r+"{"+b(n,r[1]=="k"?"":e)+"}":typeof n=="object"?s+=b(n,e?e.replace(/([^,])+/g,i=>r.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):r):n!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=b.p?b.p(r,n):r+":"+n+";")}return a+(e&&o?e+"{"+o+"}":o)+s},y={},M=t=>{if(typeof t=="object"){let e="";for(let a in t)e+=a+M(t[a]);return e}return t},U=(t,e,a,s,o)=>{let r=M(t),n=y[r]||(y[r]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(r));if(!y[n]){let l=r!==t?t:(d=>{let p,f,m=[{}];for(;p=L.exec(d.replace(R,""));)p[4]?m.shift():p[3]?(f=p[3].replace(I," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][p[1]]=p[2].replace(I," ").trim();return m[0]})(t);y[n]=b(o?{["@keyframes "+n]:l}:l,a?"":"."+n)}let i=a&&y.g?y.g:null;return a&&(y.g=y[n]),((l,d,p,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(y[n],e,s,i),n},Y=(t,e,a)=>t.reduce((s,o,r)=>{let n=e[r];if(n&&n.call){let i=n(a),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":b(i,""):i===!1?"":i}return s+o+(n??"")},"");function z(t){let e=this||{},a=t.call?t(e.p):t;return U(a.unshift?a.raw?Y(a,[].slice.call(arguments,1),e.p):a.reduce((s,o)=>Object.assign(s,o&&o.call?o(e.p):o),{}):a,_(e.target),e.g,e.o,e.k)}let P,C,N;z.bind({g:1});let h=z.bind({k:1});function Z(t,e,a,s){b.p=e,P=t,C=a,N=s}function x(t,e){let a=this||{};return function(){let s=arguments;function o(r,n){let i=Object.assign({},r),l=i.className||o.className;a.p=Object.assign({theme:C&&C()},i),a.o=/ *go\d+/.test(l),i.className=z.apply(a,s)+(l?" "+l:""),e&&(i.ref=n);let d=t;return t[0]&&(d=i.as||t,delete i.as),N&&d[0]&&N(i),P(d,i)}return e?e(o):o}}var q=t=>typeof t=="function",O=(t,e)=>q(t)?t(e):t,B=(()=>{let t=0;return()=>(++t).toString()})(),S=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),G=20,$=new Map,J=1e3,T=t=>{if($.has(t))return;let e=setTimeout(()=>{$.delete(t),v({type:4,toastId:t})},J);$.set(t,e)},Q=t=>{let e=$.get(t);e&&clearTimeout(e)},D=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,G)};case 1:return e.toast.id&&Q(e.toast.id),{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case 2:let{toast:a}=e;return t.toasts.find(r=>r.id===a.id)?D(t,{type:1,toast:a}):D(t,{type:0,toast:a});case 3:let{toastId:s}=e;return s?T(s):t.toasts.forEach(r=>{T(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===s||s===void 0?{...r,visible:!1}:r)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let o=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+o}))}}},k=[],j={toasts:[],pausedAt:void 0},v=t=>{j=D(j,t),k.forEach(e=>{e(j)})},V={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},W=(t={})=>{let[e,a]=c.useState(j);c.useEffect(()=>(k.push(a),()=>{let o=k.indexOf(a);o>-1&&k.splice(o,1)}),[e]);let s=e.toasts.map(o=>{var r,n;return{...t,...t[o.type],...o,duration:o.duration||((r=t[o.type])==null?void 0:r.duration)||(t==null?void 0:t.duration)||V[o.type],style:{...t.style,...(n=t[o.type])==null?void 0:n.style,...o.style}}});return{...e,toasts:s}},X=(t,e="blank",a)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...a,id:(a==null?void 0:a.id)||B()}),w=t=>(e,a)=>{let s=X(e,t,a);return v({type:2,toast:s}),s.id},u=(t,e)=>w("blank")(t,e);u.error=w("error");u.success=w("success");u.loading=w("loading");u.custom=w("custom");u.dismiss=t=>{v({type:3,toastId:t})};u.remove=t=>v({type:4,toastId:t});u.promise=(t,e,a)=>{let s=u.loading(e.loading,{...a,...a==null?void 0:a.loading});return t.then(o=>(u.success(O(e.success,o),{id:s,...a,...a==null?void 0:a.success}),o)).catch(o=>{u.error(O(e.error,o),{id:s,...a,...a==null?void 0:a.error})}),t};var K=(t,e)=>{v({type:1,toast:{id:t,height:e}})},tt=()=>{v({type:5,time:Date.now()})},et=t=>{let{toasts:e,pausedAt:a}=W(t);c.useEffect(()=>{if(a)return;let r=Date.now(),n=e.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(l<0){i.visible&&u.dismiss(i.id);return}return setTimeout(()=>u.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[e,a]);let s=c.useCallback(()=>{a&&v({type:6,time:Date.now()})},[a]),o=c.useCallback((r,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=n||{},p=e.filter(g=>(g.position||d)===(r.position||d)&&g.height),f=p.findIndex(g=>g.id===r.id),m=p.filter((g,A)=>A<f&&g.visible).length;return p.filter(g=>g.visible).slice(...i?[m+1]:[0,m]).reduce((g,A)=>g+(A.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:K,startPause:tt,endPause:s,calculateOffset:o}}},at=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,rt=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ot=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,st=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${at} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${rt} 0.15s ease-out forwards;
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
    animation: ${ot} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,it=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,nt=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${it} 1s linear infinite;
`,lt=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,dt=h`
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
}`,ct=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${lt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${dt} 0.2s ease-out forwards;
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
`,pt=x("div")`
  position: absolute;
`,ut=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,mt=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ft=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${mt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,gt=({toast:t})=>{let{icon:e,type:a,iconTheme:s}=t;return e!==void 0?typeof e=="string"?c.createElement(ft,null,e):e:a==="blank"?null:c.createElement(ut,null,c.createElement(nt,{...s}),a!=="loading"&&c.createElement(pt,null,a==="error"?c.createElement(st,{...s}):c.createElement(ct,{...s})))},yt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ht=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,bt="0%{opacity:0;} 100%{opacity:1;}",xt="0%{opacity:1;} 100%{opacity:0;}",vt=x("div")`
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
`,wt=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Et=(t,e)=>{let a=t.includes("top")?1:-1,[s,o]=S()?[bt,xt]:[yt(a),ht(a)];return{animation:e?`${h(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},$t=c.memo(({toast:t,position:e,style:a,children:s})=>{let o=t.height?Et(t.position||e||"top-center",t.visible):{opacity:0},r=c.createElement(gt,{toast:t}),n=c.createElement(wt,{...t.ariaProps},O(t.message,t));return c.createElement(vt,{className:t.className,style:{...o,...a,...t.style}},typeof s=="function"?s({icon:r,message:n}):c.createElement(c.Fragment,null,r,n))});Z(c.createElement);var kt=({id:t,className:e,style:a,onHeightUpdate:s,children:o})=>{let r=c.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;s(t,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return c.createElement("div",{ref:r,className:e,style:a},o)},jt=(t,e)=>{let a=t.includes("top"),s=a?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(a?1:-1)}px)`,...s,...o}},Ot=z`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,zt=({reverseOrder:t,position:e="top-center",toastOptions:a,gutter:s,children:o,containerStyle:r,containerClassName:n})=>{let{toasts:i,handlers:l}=et(a);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...r},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let p=d.position||e,f=l.calculateOffset(d,{reverseOrder:t,gutter:s,defaultPosition:e}),m=jt(p,f);return c.createElement(kt,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Ot:"",style:m},d.type==="custom"?O(d.message,d):o?o(d):c.createElement($t,{toast:d,position:p}))}))},At=u;const Nt=()=>F.jsx(zt,{containerStyle:{margin:"0 auto"},toastOptions:{style:{background:"#363636",color:"#fff",fontSize:"1.5dvh"}}}),Dt=t=>At(t,{duration:2e3});export{Nt as T,Dt as t};
