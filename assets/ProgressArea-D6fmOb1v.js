import{a as f}from"./commons-D5rr2GKD.js";import{r as a,j as e}from"./index-DH76QrY1.js";const n="/fundings",o=f();async function $(t){console.log("top10");const{data:s}=await o.get(`${n}/?status=${t}`);return console.log(s),s}async function j(t,s){await o.post(`${n}/${t}/attendance`,s),console.log("보냄")}async function b(t){const{data:s}=await o.get(`${n}/open/${t}`);return console.log(s),s}async function y(t){return console.log(t),(await o.get(`${n}/${t}/participation`)).data}const w=({crowd:t,joinCnt:s,height:p,size:c})=>{const[i,d]=a.useState(0),[l,h]=a.useState(0);console.log(l);const u=a.useRef(null);return a.useEffect(()=>{const g=Math.round(s/t*100);d(g);const r=u.current,x=(r==null?void 0:r.offsetWidth)??0;h(Math.round(x/100*g))},[i]),e.jsxs("div",{className:"relative",children:[c=="big"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"absolute top-[-6vh] right-1 text-4xl",children:[i,"%"]})}),e.jsx("div",{className:`progressbar relative w-[100%] h-[${p}]`,ref:u,children:e.jsx("div",{className:"bar absolute top-[50%] trnaslate-y-[-50%] w-[100px] h-[100%]",style:{width:`${l}px`},children:e.jsx("span",{})})}),c=="big"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"absolute mt-1 right-2",children:[s,"/",t]})})]})};export{w as P,b as a,$ as b,y as g,j as p};