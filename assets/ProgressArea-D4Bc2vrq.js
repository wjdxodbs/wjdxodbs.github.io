import{a as h}from"./commons-BJ5SslBL.js";import{r as a,j as e}from"./index-C_vzieaQ.js";const c="/fundings",i=h();async function f(t){console.log("top10");const{data:s}=await i.get(`${c}/?status=${t}`);return console.log(s),s}async function v(t,s){await i.post(`${c}/${t}/attendance`,s),console.log("보냄")}const j=({crowd:t,joinCnt:s})=>{const[l,p]=a.useState(0),[u,d]=a.useState(0);console.log(u);const n=a.useRef(null);return a.useEffect(()=>{const r=Math.round(s/t*100);p(r);const o=n.current,g=(o==null?void 0:o.offsetWidth)??0;d(Math.round(g/100*r))},[]),e.jsxs("div",{className:"relative mb-7",children:[e.jsxs("div",{className:"absolute top-[-25px] right-3",children:[l,"%"]}),e.jsx("div",{className:"progressbar relative w-[100%] h-[4vh]",ref:n,children:e.jsx("div",{className:"bar absolute top-[50%] trnaslate-y-[-50%] w-[100px] h-[100%]",children:e.jsx("span",{})})}),e.jsxs("div",{className:"absolute mt-2 right-3",children:[s,"/",t]})]})};export{j as P,f as g,v as p};
