import{r as a,j as e,L as c}from"./index-C_vzieaQ.js";import{u as d}from"./useQuery-BhwtPsbn.js";import{S as g,M as m}from"./MovieListItem-khRBHhMg.js";import{P as u,g as x}from"./ProgressArea-D4Bc2vrq.js";import"./commons-BJ5SslBL.js";import"./axios-Bo0ATomq.js";const p=({status:t,getModingBack:o})=>{const[s,l]=a.useState(),{data:r}=d({queryKey:["modingListResult",t],queryFn:()=>x(t)});return a.useEffect(()=>{r&&(l(r),console.log(s),s&&o(s[0].poster))},[r,s]),e.jsx(e.Fragment,{children:s&&e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex flex-col mt-3  px-[1.6vh]",children:[e.jsx(c,{to:`/fund/list/${s[0].movieId}`,state:{type:"list"},children:e.jsx("img",{className:"w-[100%] aspect-square object-cover brightness-[90%]",src:s[0].poster,alt:""})}),e.jsx("div",{className:"absolute w-[100%] top-0 right-3",children:e.jsx(g,{status:s[0].status,textSize:"2.5vh"})}),e.jsx("div",{className:"mt-2",children:e.jsx(u,{crowd:s[0].crowdCnt,joinCnt:s[0].peopleCnt})})]}),e.jsx("div",{className:"movie-list none-scroller px-[1.6vh] mt-5 grid grid-cols-3 gap-[1.2vh] overflow-auto pb-20",children:s.map((i,n)=>n!==0?e.jsx(c,{to:`/fund/list/${i.movieId}`,state:{type:"list"},children:e.jsx(m,{state:i.status,url:i.poster,heigth:"23vh"})},n):null)})]})})},y=()=>{const[t,o]=a.useState("progress"),[s,l]=a.useState(""),r=n=>{l(n)};a.useEffect(()=>{},[r]);const i="flex flex-col items-center text-[2vh] basis-1/2 p-1";return e.jsxs("div",{className:"fundinglist-container",style:{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${s})`,backgroundSize:"auto 800px, contain",backgroundRepeat:"no-repeat"},children:[e.jsx("div",{className:"text-center text-3xl pt-3",children:"MODING"}),e.jsxs("div",{className:"flex justify-around mt-2",children:[e.jsxs("div",{className:`${i} border-red-700 ${t=="progress"?"select":""}`,onClick:()=>o("progress"),children:[e.jsx("div",{children:"무딩중"}),e.jsx("div",{children:"TOP10"})]}),e.jsxs("div",{className:`${i} border-red-700 ${t=="request"?"select":""}`,onClick:()=>o("request"),children:[e.jsx("div",{children:"무딩 요청"}),e.jsx("div",{children:"TOP10"})]})]}),e.jsx(p,{status:t,getModingBack:r})]})};export{y as default};
