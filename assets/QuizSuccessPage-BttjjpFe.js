import{r as i,a as t,j as s,F as r,J as m,x as u,B as d,y as x,z as p,w as j,C as h,E as N,D as g,K as v}from"./index-BDR06oeM.js";const z=()=>{const[e,o]=i.useState(!1),a=t();i.useEffect(()=>{const l=async()=>{try{(await v("quiz")).couponStatus?a("/quiz/close",{replace:!0}):a("/quiz/coupon",{replace:!0})}catch(c){console.error("Error checking coupon validity:",c)}};if(e){const c=setTimeout(()=>{l()},2500);return()=>clearTimeout(c)}},[e,a]);const n=async()=>{o(!0)};return s.jsxs("div",{className:"QuizSuccessPage",children:[s.jsxs("div",{className:"quiz-success-header",children:[s.jsxs("h2",{children:["축하합니다 ",s.jsx("br",{}),"모든 문제를 맞췄어요!"]}),s.jsx("p",{className:"ment",children:"상자를 클릭하여 쿠폰을 뽑아볼까요?"})]}),s.jsx("div",{className:"quiz-success-lottie",onClick:n,children:e?s.jsx(r,{}):s.jsx(m,{})}),s.jsxs("div",{children:[s.jsx("h3",{children:"상자에서 획득 할 수 있는 쿠폰"}),s.jsxs("div",{className:"quiz-success-footer",children:[s.jsxs("div",{className:"quiz-success-img",children:[s.jsxs("div",{className:"content",children:[s.jsx("img",{src:u,alt:"abroad",className:"img"}),s.jsx("p",{className:"coupon-info",children:"무제한 쓰롱"})]}),s.jsxs("div",{className:"content",children:[s.jsx("img",{src:d,alt:"unlimited",className:"img"}),s.jsx("p",{className:"coupon-info",children:"5개 쓰롱 추가"})]}),s.jsxs("div",{className:"content",children:[s.jsx("img",{src:x,alt:"boom",className:"img"}),s.jsx("p",{className:"coupon-info",children:"2배 쓰롱 추가"})]}),s.jsxs("div",{className:"content",children:[s.jsx("img",{src:p,alt:"boom",className:"img"}),s.jsx("p",{className:"coupon-info",children:"레벨 쓰롱 추가"})]})]}),s.jsxs("div",{className:"quiz-success-img",children:[s.jsxs("div",{className:"content",children:[s.jsx("img",{src:j,alt:"abroad",className:"img"}),s.jsx("p",{className:"coupon-info",children:"범위 밖 노래 조회"})]}),s.jsxs("div",{className:"content",children:[s.jsx("img",{src:h,alt:"unlimited",className:"img"}),s.jsx("p",{className:"coupon-info",children:"닉네임 변경"})]}),s.jsxs("div",{className:"content",children:[s.jsx("img",{src:N,alt:"boom",className:"img"}),s.jsx("p",{className:"coupon-info",children:'"?" 음악 조회'})]}),s.jsxs("div",{className:"content",children:[s.jsx("img",{src:g,alt:"boom",className:"img"}),s.jsx("p",{className:"coupon-info",children:"꽝"})]})]})]})]})]})};export{z as default};
