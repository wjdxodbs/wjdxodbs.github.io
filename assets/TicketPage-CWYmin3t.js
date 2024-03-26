import{j as e,r as d,b as i}from"./index-Bu7gmcRr.js";const r="/assets/moviePost-Bp-XsBOg.png",a="/assets/ticket-Cw_cjn3t.png",n=()=>e.jsxs("div",{className:"card-face card-back",children:[e.jsx("img",{className:" w-[100%] h-[77vh]",src:a}),e.jsxs("div",{className:"absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-[90%] h-[80%] z-10 border-solid border-[2px] border-red-600 text-red-600",children:[e.jsxs("div",{className:"absolute w-[100%] flex justify-between top-[-2.5vh] text-[1.5vh] font-bold",children:[e.jsx("div",{children:"예약번호:"}),e.jsx("div",{children:"전체관람가"})]}),e.jsxs("div",{className:"dash-line w-[100%] h-[10vh] p-[0.5vh] flex flex-col",children:[e.jsx("div",{className:"text-[2vh] font-bold",children:"Title"}),e.jsx("div",{className:"flex items-center justify-center flex-1 text-[2.5vh] font-bold",children:"엘리멘탈"})]}),e.jsxs("div",{className:"flex h-[10vh]",children:[e.jsxs("div",{className:"dash-line flex-1 p-[0.5vh] flex flex-col",style:{borderRight:"2px dashed red"},children:[e.jsx("div",{className:"text-[2vh] font-bold",children:"Date"}),e.jsx("div",{className:"flex items-center justify-center flex-1 text-[2.5vh] font-bold",children:"4/6(토)"})]}),e.jsxs("div",{className:"dash-line flex-1 p-[0.5vh] flex flex-col",children:[e.jsx("div",{className:"text-[2vh] font-bold",children:"Time"}),e.jsx("div",{className:"flex items-center justify-center flex-1 text-[2.5vh] font-bold",children:"12:02"})]})]}),e.jsxs("div",{className:"dash-line w-[100%] h-[10vh] p-[0.5vh] flex flex-col",children:[e.jsx("div",{className:"text-[2vh] font-bold",children:"Place"}),e.jsx("div",{className:"flex items-center justify-center flex-1 text-[2.5vh] font-bold",children:"CGV 건대입구 4층 4관"})]}),e.jsxs("div",{className:"dash-line w-[100%] h-[10vh] p-[0.5vh] flex flex-col",children:[e.jsx("div",{className:"text-[2vh] font-bold",children:"Seat"}),e.jsx("div",{className:"flex items-center justify-center flex-1 text-[2.5vh] font-bold",children:"F12"})]}),e.jsxs("div",{className:"w-[100%] h-[10vh] p-[0.5vh] flex flex-col",children:[e.jsx("div",{className:"text-[2vh] font-bold",children:"QR"}),e.jsx("div",{className:"flex items-center justify-center flex-1 text-[2.5vh] font-bold",children:"엘리멘탈"})]})]})]}),h=()=>{const[l,s]=d.useState(!1),t=()=>{s(c=>!c)};return e.jsx("div",{className:"card-container w-[42vh] h-[77vh] ",onClick:t,children:e.jsxs("div",{className:`card ${l?"is-flipped":""}`,children:[e.jsx("img",{className:"card-face card-front ticket-mask w-[45vh] h-[77vh]",src:r}),e.jsx(n,{})]})})},x=({setOpen:l})=>{const s=()=>l(!1);return e.jsx("div",{className:"absolute top-0 left-0 h-[100vh] w-[100%] bg-black/80 flex justify-center items-center",children:e.jsxs("div",{className:"bg-bgGray w-[43vh] h-[78vh] rounded-[2vh] border border-solid border-red-600 flex flex-col shadow-bgTT shadow-red-600",children:[e.jsxs("div",{className:"p-[1vh] flex flex-col items-center ",children:[e.jsx("div",{className:"p-[3vh] text-[3vh] font-bold",children:"상영안내"}),e.jsx("hr",{className:"w-[90%] border border-red-600 shadow-bgTT shadow-red-600"}),e.jsxs("div",{className:"flex flex-col items-center justify-center h-[19vh] text-[2vh]",children:[e.jsx("div",{children:"모바일 티켓으로 현장 발권없이"}),e.jsx("div",{children:"바로 입장이 가능합니다."})]}),e.jsx("hr",{className:"w-[90%] border border-red-600 shadow-bgTT shadow-red-600"}),e.jsxs("div",{className:"flex flex-col items-center justify-center h-[19vh] text-[2vh]",children:[e.jsx("div",{children:"쾌적한 관람을 위해"}),e.jsx("div",{children:"상영시간 전에 입장 부탁드립니다."})]}),e.jsx("hr",{className:"w-[90%] border border-red-600 shadow-bgTT shadow-red-600"}),e.jsxs("div",{className:"flex flex-col items-center justify-center h-[19vh] text-[2vh]",children:[e.jsx("div",{children:"입장 지연에 따른 관람 불편을 최소화하기 위해"}),e.jsx("div",{children:"본 영화는 10분 후 상영이 시작됩니다."})]})]}),e.jsx("button",{className:"w-[100%] border-none bg-red-600 text-[3vh] flex-1 rounded-b-[2vh] text-white cursor-pointer",onClick:s,children:"확인"})]})})},v=()=>{const[l,s]=d.useState(!1),t=()=>s(!0);return e.jsxs("div",{className:"TicketPage",children:[e.jsx(i,{centerText:"모바일 티켓"}),e.jsxs("div",{className:"h-[93vh] flex flex-col items-center justify-between p-[4vh]",children:[e.jsx(h,{}),e.jsxs("div",{className:"flex justify-between w-[100%] text-[2.5vh]",children:[e.jsxs("div",{className:"flex gap-[1vh]",children:[e.jsx("div",{children:"입장알림"}),e.jsx("div",{className:"text-[#4EFF8A] font-bold",children:"ON"})]}),e.jsx("div",{className:"cursor-pointer",onClick:t,children:"안내사항"})]})]}),l&&e.jsx(x,{setOpen:s})]})};export{v as default};
