import{j as e,f as G,i as H,k as N,l as k,m as v,o as w,e as y,t as g,r as b}from"./index-C_vzieaQ.js";import{N as E}from"./NoneNavHeader-vnX4mPUJ.js";import{c as L}from"./index-prcx37CQ.js";import{T as P}from"./Common-BS4uVQHZ.js";import{p as B}from"./영화포스터-Bxtv0lMT.js";import{a as T}from"./axios-Bo0ATomq.js";import{a as S}from"./commons-BJ5SslBL.js";import{P as Q}from"./Prompt-IXwvRPSR.js";import"./index-CP8RP8bd.js";import"./iconBase-rz0zWS2w.js";import"./ModalButton-B1bDj6iS.js";const p=({label:s,color:t})=>e.jsxs("div",{className:"flex items-center gap-[0.5vh]",children:[e.jsx("div",{className:"text-[2vh]",children:s}),e.jsx("div",{className:`w-[2.5vh] h-[2.3vh] bg-${t} rounded-t-lg rounded-b-sm`})]}),R=()=>e.jsxs("div",{className:"flex justify-end gap-[2vh]",children:[e.jsx(p,{label:"선택불가",color:"bgGray"}),e.jsx(p,{label:"선택가능",color:"textGray"}),e.jsx(p,{label:"선택좌석",color:"red-600"})]}),A=G({key:"selectSeatsAtom",default:[]}),j=H({key:"selectSeatsLengthSelector",get:({get:s})=>s(A).length}),C=N({key:"isSelectedSelector",get:s=>({get:t})=>t(A).includes(s)}),J=N({key:"isSelectableSelector",get:({seatId:s,max:t})=>({get:a})=>{const l=a(j),c=a(C(s));return l<t||c}}),U=({seatId:s,max:t,isOccupied:a})=>{const l=k(A),c=v(C(s)),o=v(J({seatId:s,max:t})),r=i=>{const d=i.target.checked;!a&&o&&l(x=>d?[...x,s]:x.filter(h=>h!==s))},n=`w-[4vh] h-[3.3vh] rounded-b-sm rounded-t-xl flex justify-center items-center font-bold text-[1.5vh] cursor-pointer ${a||!o?"bg-bgGray":c?"bg-red-600":"bg-textGray"}`;return e.jsxs("label",{className:"relative",children:[e.jsx("div",{className:n,children:a||!o?e.jsx(L,{className:"text-[4vh] text-textGray"}):s}),e.jsx("input",{className:"hidden ",type:"checkbox",disabled:a||!o,checked:c,onChange:r})]})},O=({max:s})=>{const t=v(j),a=v(A),l=w(A),c=y(),o=async()=>{var r;if(t<s){g("인원을 선택해주세요");return}try{const[n,i]=a[0];console.log(n,i);const d={fundingId:1,seats:{seat:[{col:11,line:"J"}]}};console.log(d);const x=await S().post("reservations/make",d);console.log(x.data);const h=await S().get("/reservations/get/7");console.log(h),l(),c("/user/ticket/7",{state:h.data,replace:!0})}catch(n){console.log(n),T.isAxiosError(n)&&((r=n.response)==null?void 0:r.data.code)==="Reservation_400_6"&&(g("이미 예약 된 자석입니다."),l())}};return e.jsxs("div",{className:"text-black bg-white w-full h-[20vh] rounded-t-2xl ",children:[e.jsxs("div",{className:"p-[2vh] flex gap-[3vh]",children:[e.jsxs("div",{className:"flex flex-col justify-between grow text-[2.5vh]",children:[e.jsxs("div",{className:"flex gap-[2vh]",children:[e.jsx("div",{className:"font-bold",children:"CGV 강남"}),e.jsx("div",{children:"3.15(금) 15:00"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"font-bold",children:"엘리멘탈"}),e.jsx("div",{children:`인원 ${t} / ${s}`})]})]}),e.jsx("img",{className:"h-[10vh] object-cover rounded",src:B,alt:"영화포스터"})]}),e.jsx("button",{className:" w-[100%] h-[6vh] bg-red-600 shadow-bgRed text-white font-bold text-[2.5vh] ",onClick:o,children:"예매"}),e.jsx(P,{})]})},q="data:image/webp;base64,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",_=()=>{const s=w(A),t=v(j),[a,l]=b.useState(!1),[c]=b.useState(1),o=["B5","C6","D7"],r=y(),n=()=>{t?l(!0):r(-1)},i=()=>l(!1),d=()=>{s(),i(),r(-1)},x="ABCDEFGH".split(""),h=Array.from({length:8},(f,m)=>m+1);return b.useEffect(()=>{const f=m=>{t&&(m.preventDefault(),m.returnValue="")};return window.addEventListener("beforeunload",f),()=>window.removeEventListener("beforeunload",f)},[t]),e.jsxs("div",{className:"h-[100vh] flex flex-col",children:[e.jsx(E,{centerText:"좌석예매",onBackButtonClick:n}),e.jsxs("div",{className:"flex flex-col justify-between h-[93vh]",children:[e.jsxs("div",{className:"flex-1 flex flex-col gap-[5vh] p-[3vh]",children:[e.jsx(R,{}),e.jsxs("div",{className:"flex flex-col items-center gap-[5vh]",children:[e.jsxs("div",{className:"relative flex flex-col items-center",children:[e.jsx("img",{className:"w-[100%] h-[5vh]",src:q,alt:"영화관스크린"}),e.jsx("div",{className:"text-[2vh] text-[#A09FB0] font-bold",children:"SCREEN"})]}),e.jsx("div",{className:"flex flex-col gap-[2vh]",children:x.map(f=>e.jsx("div",{className:"flex gap-[2vh]",children:e.jsx("div",{className:"flex items-center justify-center gap-[1vh]",children:h.map(m=>{const u=`${f}${m}`;return e.jsx(U,{seatId:u,max:c,isOccupied:o.includes(u)},u)})})},f))})]})]}),e.jsx(O,{max:c})]}),a&&e.jsx(Q,{onClose:i,onConfirm:d})]})};export{_ as default};
