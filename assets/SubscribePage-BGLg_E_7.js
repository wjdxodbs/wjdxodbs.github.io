import{j as e,r as o}from"./index-BUx5xPjx.js";import{N as m}from"./NavHeader-D-xVWBQ6.js";import{I as h,_ as b}from"./index-D4hz-5tp.js";import{p as s}from"./영화포스터-Bxtv0lMT.js";import{F as v}from"./index-2H6sUrQ5.js";import"./index-BWKp-rOp.js";const j=({id:t,name:r,state:a,count:n,url:c,handleClick:i,isType:l})=>e.jsxs("div",{className:"w-[100%] relative shadow-test rounded-[1.5vh]",children:[e.jsx("img",{className:"w-[100%] h-[100%] object-cover rounded-[1.5vh] brightness-[90%]",src:c,loading:"lazy",alt:"영화포스터"}),e.jsxs("div",{className:"absolute inset-0 flex flex-col justify-between",children:[e.jsx("div",{className:"flex justify-between items-center p-[1vh]",children:l?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 bg-[#C00202] blur-sm"}),e.jsx("div",{className:"relative text-[1.5vh] px-[1vh] py-[0.5vh]",children:a})]}),e.jsx(v,{className:"text-[#C00202] text-[2.5vh] cursor-pointer",onClick:()=>{i(t)}})]}):e.jsx("div",{})}),e.jsxs("div",{className:"py-[1vh] px-[2vh] flex flex-col gap-[1vh] bg-black rounded-b-[1.5vh] bg-opacity-80 ",children:[e.jsx("div",{className:"text-[2vh]",children:r}),e.jsx("div",{className:"text-[1.5vh] text-[#C00202] font-bold ",children:`${n}명 ${l?"좋아해요":"요청했어요"}`})]})]})]}),d=({type:t})=>{const[r,a]=o.useState([]),n=t==="좋아요";o.useEffect(()=>{a(n?[{id:1,name:"엘리멘탈",state:"무딩중",count:3663,url:s},{id:2,name:"불한당",state:"무딩예정",count:1763,url:s},{id:3,name:"엘리멘탈",state:"무딩중",count:3663,url:s},{id:4,name:"불한당",state:"무딩예정",count:1763,url:s},{id:5,name:"엘리멘탈",state:"무딩중",count:3663,url:s},{id:6,name:"불한당",state:"무딩예정",count:1763,url:s}]:[{id:1,name:"엘리멘탈",state:"무딩중",count:3663,url:s},{id:2,name:"불한당",state:"무딩예정",count:1763,url:s},{id:3,name:"엘리멘탈",state:"무딩중",count:3663,url:s},{id:4,name:"불한당",state:"무딩예정",count:1763,url:s},{id:5,name:"엘리멘탈",state:"무딩중",count:3663,url:s},{id:6,name:"불한당",state:"무딩예정",count:1763,url:s}])},[]);const c=i=>{a(l=>l.filter(x=>x.id!==i)),b(n?"좋아요를 취소했어요.":"요청을 취소했어요.",{duration:1500})};return e.jsxs(e.Fragment,{children:[r.map(i=>e.jsx(j,{...i,handleClick:c,isType:n},i.id)),e.jsx(h,{containerStyle:{margin:"0 auto"},toastOptions:{style:{background:"#363636",color:"#fff",fontSize:"2vh"}}})]})},u=({value:t,label:r,checkedValue:a,onChange:n})=>e.jsxs("label",{className:`flex-1 flex items-center justify-center text-[2vh] cursor-pointer ${a===t&&"border-t-2 border-t-transparent border-b-2 border-b-red-600 font-bold text-white"}`,children:[e.jsx("input",{type:"radio",name:"subscribe",value:t,className:"hidden peer",checked:a===t,onChange:n}),r]}),p=({check:t,handleChange:r})=>e.jsxs("div",{className:"w-[100%] h-[5vh] flex border-b-[1px] border-b-red-600 text-textGray",children:[e.jsx(u,{value:"like",label:"좋아요",checkedValue:t,onChange:r}),e.jsx(u,{value:"req",label:"펀딩 요청",checkedValue:t,onChange:r})]}),w=()=>{const[t,r]=o.useState("like"),a=n=>{r(n.target.value)};return e.jsxs("div",{className:"flex flex-col subscribe-container",children:[e.jsx(m,{leftWord:"관심 있는 소식만 모았어요"}),e.jsxs("div",{children:[e.jsx(p,{check:t,handleChange:a}),e.jsx("div",{className:"none-scroll max-h-[88vh] overflow-auto p-[3vh] pb-[10vh] grid grid-cols-2 gap-[3vh]",children:t==="like"?e.jsx(d,{type:"좋아요"}):e.jsx(d,{type:"펀딩요청"})})]})]})};export{w as default};
