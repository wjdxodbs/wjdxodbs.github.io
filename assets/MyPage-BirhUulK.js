import{u as i,j as e,e as c,f as o}from"./index-Bu7gmcRr.js";import{N as d}from"./NavHeader-BpGw9lio.js";const x="flex justify-between cursor-pointer",m="flex items-center gap-[1.5vh]",h=({name:t,url:s})=>{const a=i(),n=localStorage.getItem("jwt"),l=()=>{a(n?"/login":s)};return e.jsxs("div",{className:x,onClick:l,children:[e.jsx("div",{children:t}),e.jsx("div",{className:m,children:e.jsx(c,{})})]})},v=({title:t,items:s})=>e.jsxs("div",{className:"flex flex-col gap-[1.5vh]",children:[e.jsx("div",{className:"text-textGray text-[2vh]",children:t}),e.jsx("div",{className:"flex flex-col gap-[1vh] text-[2.3vh] font-bold",children:s.map(a=>e.jsx(h,{...a},a.name))})]}),u="/assets/char-DiOePQ4D.webp",r=[{title:"펀딩",items:[{name:"무딩중",url:"/user/fund/progress"},{name:"애프터 무딩",url:"/user/fund/completed"}]},{title:"설정",items:[{name:"알림 설정",url:"/user/notification/setting"}]},{title:"기타",items:[{name:"AI 카메라",url:"a"},{name:"좌석 예매",url:"/fund/reserve"},{name:"결제",url:"/fund/payment"}]}],f="my-[3vh] mx-[-3vh] border-0 h-[1px] bg-textGray",N=()=>e.jsxs("div",{children:[e.jsx(d,{leftWord:"마이무딩",rightWord:["IoSettingsOutline","edit"]}),e.jsxs("div",{className:"p-[3vh] flex flex-col gap-[5vh]",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center gap-[1vh]",children:[e.jsx("img",{src:u,alt:"",className:"w-[12vh] h-[12vh] rounded-[35%]"}),e.jsx("div",{className:"text-[2.5vh] font-bold",children:"로그인 후 이용해 주세요"})]}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"px-[3vh] py-[4vh] bg-bgGray w-[100%] rounded-[2vh]",children:r.map((t,s)=>e.jsxs(o.Fragment,{children:[e.jsx(v,{...t}),s<r.length-1&&e.jsx("hr",{className:f})]},s))})})]})]});export{N as default};
