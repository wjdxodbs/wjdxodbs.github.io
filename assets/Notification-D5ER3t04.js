import{j as t,v as c,r as i}from"./index-C_vzieaQ.js";import{N as a}from"./NoneNavHeader-vnX4mPUJ.js";import"./index-CP8RP8bd.js";import"./iconBase-rz0zWS2w.js";import"./index-prcx37CQ.js";const r="/assets/char1-B39qnK4d.webp",l=()=>t.jsxs("div",{className:"h-[93vh] flex flex-col justify-center items-center gap-[5vh]",children:[t.jsx("img",{className:"w-[25vh] h-[25vh] ",src:r,alt:""}),t.jsxs("div",{className:"flex flex-col gap-[2vh] items-center",children:[t.jsx("div",{className:"font-bold text-[3vh]",children:"아직 도착한 알림이 없어요"}),t.jsx("div",{className:"font-bold text-[2vh] text-textGray",children:"소식이 도착하면 알려드릴게요"})]}),t.jsx("div",{className:"h-[10vh]"})]}),d=({type:o,content:e,postUrl:s,date:n})=>t.jsxs("div",{className:"flex gap-[2vh] justify-between",children:[t.jsxs("div",{className:"flex flex-col gap-[2vh]",children:[t.jsxs("div",{className:"flex gap-[1vh] text-[1.7vh] ",children:[t.jsx("div",{className:"font-bold text-red-600",children:o}),t.jsx("div",{className:"text-textGray",children:c(n)})]}),t.jsx("div",{className:"text-[2vh]",children:e})]}),t.jsx("img",{className:"h-[13vh] rounded-[0.5vh]",src:s,alt:""})]}),m=()=>{const[o]=i.useState([{id:0,type:"상영공지",content:"회원님이 예매하신 [ooooo] 이 3일 뒤에 상영합니다.",postUrl:"https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/8809529012721.jpg",date:"2024.03.24 15:00:00"},{id:1,type:"펀딩성공",content:"회원님이 펀딩하신 [ooooo] 이 성공 하였습니다.",postUrl:"https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/8809529012721.jpg",date:"2024.03.20 15:00:00"},{id:2,type:"펀딩시작",content:"회원님이 신청하신 [ooooo] 이 시작 되었습니다.",postUrl:"https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/8809529012721.jpg",date:"2024.03.10 15:00:00"},{id:3,type:"상영공지",content:"회원님이 예매하신 [ooooo] 이 3일 뒤에 상영합니다.",postUrl:"https://cdn.stupress.co.kr/news/photo/202105/110_112_155.jpg",date:"2024.03.24 15:00:00"},{id:4,type:"펀딩성공",content:"회원님이 펀딩하신 [ooooo] 이 성공 하였습니다.",postUrl:"https://cdn.stupress.co.kr/news/photo/202105/110_112_155.jpg",date:"2024.03.20 15:00:00"},{id:5,type:"펀딩시작",content:"회원님이 신청하신 [ooooo] 이 시작 되었습니다.",postUrl:"https://cdn.stupress.co.kr/news/photo/202105/110_112_155.jpg",date:"2024.03.10 15:00:00"}]);return t.jsxs("div",{children:[t.jsx(a,{centerText:"알림",type:"notification"}),o.length?t.jsx("div",{className:"none-scroll h-[93vh] overflow-auto p-[3vh] flex flex-col gap-[4vh]",children:o.map(e=>t.jsx(d,{...e},e.id))}):t.jsx(l,{})]})};export{m as default};
