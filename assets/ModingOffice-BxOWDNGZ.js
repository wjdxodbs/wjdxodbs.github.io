import{r as i,j as t,L as g}from"./index-DH76QrY1.js";const o=[{id:0,category:"로맨스",url:"http://www.honcho-sfx.com/blog/wp-content/uploads/2015/08/Deadpool-trailer-300x300.jpg"},{id:1,category:"드라마",url:"http://www.honcho-sfx.com/blog/wp-content/uploads/2015/08/Deadpool-trailer-300x300.jpg"},{id:2,category:"액션",url:"http://www.honcho-sfx.com/blog/wp-content/uploads/2015/08/Deadpool-trailer-300x300.jpg"},{id:3,category:"공포",url:"http://www.honcho-sfx.com/blog/wp-content/uploads/2015/08/Deadpool-trailer-300x300.jpg"},{id:4,category:"SF",url:"http://www.honcho-sfx.com/blog/wp-content/uploads/2015/08/Deadpool-trailer-300x300.jpg"},{id:5,category:"코미디",url:"http://www.honcho-sfx.com/blog/wp-content/uploads/2015/08/Deadpool-trailer-300x300.jpg"},{id:6,category:"기타",url:"http://www.honcho-sfx.com/blog/wp-content/uploads/2015/08/Deadpool-trailer-300x300.jpg"}],x=()=>{const[d,l]=i.useState(0),[a,c]=i.useState(0),h=()=>({transform:`translateZ(-275px) rotateY(${d/o.length*-360}deg)`}),p=e=>{c(e.touches[0].clientX)},u=e=>{if(!a)return;const n=e.touches[0].clientX-a;n>50?(l(s=>(s-1+o.length)%o.length),c(0)):n<-50&&(l(s=>(s+1)%o.length),c(0))};return t.jsx("div",{className:"wrapper",onTouchStart:p,onTouchMove:u,children:t.jsx("div",{className:"object",children:t.jsx("div",{className:"carousel",style:h(),children:o.map((e,r)=>t.jsx(g,{to:"/movie/list",state:{category:e.id},className:"cell",children:t.jsx("div",{children:t.jsx("h3",{className:"text-white",children:e.category})})},r))})})})},m=()=>t.jsxs("div",{className:"movielist-container",children:[t.jsx("div",{className:"text-center p-2",children:"ModingOffice"}),t.jsx(x,{})]});export{m as default};