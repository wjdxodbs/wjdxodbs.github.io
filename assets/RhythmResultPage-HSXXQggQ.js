import{q as n,a as l,j as s}from"./index-BFfqBe_w.js";import{r as h}from"./rhythm-CCoC5dST.js";import{Q as m}from"./QuizCryLottie-DHDihHKb.js";import{p as a}from"./ContentResultApi-BIvLb7Fi.js";const p=()=>{var c;const r=n(),t=l(),e=(c=r.state)==null?void 0:c.score,o=async()=>{sessionStorage.setItem("scoreAchieved","true"),await a("rhythm"),t("/rhythm/success",{replace:!0})},i=async()=>{await a("rhythm"),t("/rhythm/game",{replace:!0})};return s.jsx("div",{className:"resultPage",children:e>=2e3?s.jsxs("div",{className:"successContainer",children:[s.jsx("h1",{children:"Success"}),s.jsxs("p",{children:["Score: ",e]}),s.jsx("img",{src:h,alt:"game"}),s.jsx("button",{className:"successButton",onClick:o,children:"Success"})]}):s.jsxs("div",{className:"failureContainer",children:[s.jsx("h1",{children:"Game Over"}),s.jsxs("p",{children:["Score: ",e]}),s.jsx(m,{}),s.jsx("button",{className:"failureButton",onClick:i,children:"Retry"})]})})};export{p as default};