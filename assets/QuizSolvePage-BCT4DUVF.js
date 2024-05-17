import{r as t,j as e,c as S,m as v,a as I}from"./index-BFfqBe_w.js";import{a as C,I as Q}from"./index-_IGb_0Xv.js";import"./iconBase-DhHVUUgp.js";const b=({onUserInput:r,setCanSubmit:n,question:s,choices:u,index:l,previewUrl:a})=>{const[d,h]=t.useState(null),[c,f]=t.useState(!0),i=t.useRef(null);t.useEffect(()=>{},[u]),t.useEffect(()=>{i.current&&i.current.play()},[c]),t.useEffect(()=>{h(null)},[s]);const p=m=>{h(m),r(m),n(!0)},j=()=>{i.current&&(c?i.current.pause():i.current.play(),f(!c))};return e.jsxs("div",{className:"QuizMultipleChoice",children:[e.jsxs("div",{className:"quiz-header",children:[e.jsxs("h2",{children:["Q",l+1,"."]}),a&&e.jsxs("div",{className:"quiz-audio",onClick:j,children:[c?e.jsx(C,{}):e.jsx(Q,{}),e.jsx("audio",{ref:i,muted:c,src:a})]})]}),e.jsx("div",{className:"mc-question",children:e.jsx("p",{children:s})}),e.jsx("div",{className:"mc-choice",children:Object.entries(u).map(([m,x])=>e.jsx("div",{className:`choice ${d===m?"selected":""}`,onClick:()=>p(m),children:x},m))})]})},w="/assets/o-CzCdy8yD.webp",y="/assets/x-C_HdehgS.webp",k=({onUserInput:r,setCanSubmit:n,question:s,index:u})=>{const[l,a]=t.useState("");t.useEffect(()=>{a(""),n(!1)},[u]);const d=h=>{a(h),n(!0),r(h)};return e.jsxs("div",{className:"QuizOX",children:[e.jsxs("h2",{children:["Q",u+1,"."]}),e.jsx("div",{className:"ox-question",children:e.jsx("p",{children:s})}),e.jsxs("div",{className:"ox-answers",children:[e.jsx("div",{className:`o-answer ${l==="O"?"selected":""}`,onClick:()=>d("O"),children:e.jsx("img",{src:w,alt:"O"})}),e.jsx("div",{className:`x-answer ${l==="X"?"selected":""}`,onClick:()=>d("X"),children:e.jsx("img",{src:y,alt:"X"})})]})]})},E=({onUserInput:r,setCanSubmit:n,question:s,index:u,previewUrl:l,quizImage:a})=>{const[d,h]=t.useState(""),[c,f]=t.useState(!0),i=t.useRef(null);t.useEffect(()=>{h(""),i.current&&i.current.play()},[u,c]);const p=m=>{const x=m.target.value;h(x),n(x.trim()!==""),r(x.trim())},j=()=>{i.current&&(c?i.current.pause():i.current.play(),f(!c))};return e.jsxs("div",{className:"QuizSubjective",children:[e.jsxs("div",{className:"quiz-header",children:[e.jsxs("h2",{children:["Q",u+1,"."]}),l&&e.jsxs("div",{className:"quiz-audio",onClick:j,children:[c?e.jsx(C,{}):e.jsx(Q,{}),e.jsx("audio",{ref:i,muted:c,src:l})]})]}),e.jsxs("div",{className:"sub-question",children:[e.jsx("p",{children:s}),a&&e.jsx("img",{src:a,alt:"Quiz related image"})]}),e.jsx("h2",{children:"정답 입력"}),e.jsx("input",{type:"text",placeholder:"정답을 입력 해 주세요.",className:"sub-answer",value:d,onChange:p})]})},A=({initialTime:r,onTimeOut:n})=>{const[s,u]=t.useState(r);return t.useEffect(()=>{const l=setInterval(()=>{u(a=>a>0?a-1:(clearInterval(l),n(),0))},1e3);return()=>clearInterval(l)},[n]),e.jsxs("div",{className:"QuizTimeBar",children:[e.jsx("div",{className:`quiz-timer-bar ${s===0?"timeout":""}`}),e.jsx("div",{className:"quiz-timer",children:s})]})},q=S(),M=async()=>{var r;try{return(await q.get("/quizzes/list")).data}catch(n){throw v.isAxiosError(n)?console.error("Axios error:",((r=n.response)==null?void 0:r.data)||n.message):console.error("Unexpected error:",n),n}},O=async r=>{var n;try{return await q.post("/quizzes/result",r)}catch(s){throw console.log(s),v.isAxiosError(s)?console.error("Failed to post quiz result:",((n=s.response)==null?void 0:n.data)||s.message):console.error("Error posting quiz result:",s),s}};function U(){const[r,n]=t.useState(0),[s,u]=t.useState([]),[l,a]=t.useState(!1),[d,h]=t.useState(null),c=I(),f=t.useCallback(o=>{h(o)},[]);t.useEffect(()=>{(async()=>{const z=await M();u(z)})()},[]),t.useEffect(()=>{s.length>0&&r>=s.length&&c("/quiz/success",{replace:!0})},[r,c,s]),t.useEffect(()=>{a(d!==null)},[d]);const i=t.useCallback(()=>{p(null),c("/quiz/fail",{replace:!0})},[c]),p=t.useCallback(async(o=d)=>{o===null&&(o=null);const N={quizId:s[r].quizId,submit:o};try{const g=await O(N);r===s.length-1&&sessionStorage.setItem("quizCompleted","true"),g.data.status?(r===s.length-1&&sessionStorage.setItem("quizCompleted","true"),m()):j()}catch(g){console.error("Failed to submit the quiz:",g),j()}},[d,r,s,c]),j=t.useCallback(()=>{c("/quiz/fail",{replace:!0})},[c]),m=t.useCallback(()=>{h(null),a(!1),n(r+1)},[r]),x=t.useCallback(()=>{if(!s.length||r>=s.length)return e.jsx("div",{});const o=s[r],z={onUserInput:f,setCanSubmit:a,question:o.question,choices:o.choice,index:r,previewUrl:o.previewUrl,quizImage:o.quizImage};switch(o.quizType){case"객관식":return e.jsx(b,{...z});case"주관식":return e.jsx(E,{...z});case"OX":return e.jsx(k,{...z});default:return null}},[r,f,s]);return e.jsxs("div",{className:"QuizSolvePage",children:[e.jsx(A,{initialTime:20,onTimeOut:i},r),x(),l&&e.jsx("button",{onClick:()=>p(),className:"submission-button",children:"제출"})]})}export{U as default};