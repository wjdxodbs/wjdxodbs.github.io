import{j as e,u as o,r as n}from"./index-Bmgexmlp.js";const u="/assets/quizlogo-B9BEBHZV.webp",j=({onClick:a,label:c,visible:l=!0})=>l?e.jsx("div",{className:"QuizButton",children:e.jsx("button",{onClick:a,children:c})}):null,g=()=>{const a=o(),[c,l]=n.useState([{id:1,text:e.jsxs(e.Fragment,{children:["문제는 ",e.jsx("span",{className:"highlight",children:"총 3문제"}),"입니다."]}),checked:!1},{id:2,text:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"highlight",children:"객관식, 주관식, OX"})," 문제로 주관식은 공백, 영어, 한글 모두 정답으로 인정됩니다."]}),checked:!1},{id:3,text:e.jsxs(e.Fragment,{children:["문제당 제한 시간은 ",e.jsx("span",{className:"highlight",children:"10초"}),"입니다."]}),checked:!1},{id:4,text:e.jsxs(e.Fragment,{children:["한 문제라도 틀리면 ",e.jsx("span",{className:"highlight-red",children:"끝!"})," ",e.jsx("br",{}),"3문제 ",e.jsx("span",{className:"highlight",children:"모두 맞춰야"})," 정답으로 인정됩니다."]}),checked:!1},{id:5,text:e.jsxs(e.Fragment,{children:["매일 ",e.jsx("span",{className:"highlight",children:"기회는 한 번"}),"뿐이니 신중하게 풀어주세요."]}),checked:!1}]),[t,h]=n.useState(!1),d=()=>c.every(s=>s.checked),r=s=>{l(c.map(i=>i.id===s?{...i,checked:!i.checked}:i))};n.useEffect(()=>{h(d())},[c]);const x=()=>{a("/quiz/solve")};return e.jsxs("div",{className:"QuizInfo",children:[e.jsxs("div",{className:"quiz-group",children:[e.jsx("p",{className:"heading",children:"다음 안내 사항을 확인해주세요."}),e.jsx("div",{className:"quiz-check",children:c.map(s=>e.jsxs("div",{className:"check-item",children:[e.jsx("input",{id:`checkbox-${s.id}`,type:"checkbox",checked:s.checked,onChange:()=>r(s.id)}),e.jsx("label",{htmlFor:`checkbox-${s.id}`,children:s.text})]},s.id))})]}),e.jsx("div",{className:`quiz-button ${t?"visible":""}`,children:e.jsx(j,{onClick:x,label:"퀴즈 풀기",visible:t})})]})},p=()=>e.jsxs("div",{className:"QuizMainPage",children:[e.jsxs("div",{className:"quiz-header",children:[e.jsx("img",{src:u,alt:"QuizLogo"}),e.jsxs("p",{children:["하루 한 번 현재 페이지에서만 ",e.jsx("br",{}),"풀 수 있는 특별한 기회!"]}),e.jsx("p",{children:"정답을 맞추면 푸짐한 쿠폰을 드려요"})]}),e.jsx("div",{className:"quiz-info",children:e.jsx(g,{})})]});export{p as default};
