import{u as i,k as u,r as d,j as s}from"./index-BUx5xPjx.js";import{a as r}from"./axios-Bo0ATomq.js";import{L as g}from"./Loading-ukYnbC-A.js";import{T as p}from"./Common-ouThrvOH.js";import{t as o}from"./commonFunction-C6ZaZWw1.js";import"./index-D4hz-5tp.js";const j=()=>{const a=i(),[e]=u();return d.useEffect(()=>{const n={amount:Number(e.get("amount")),fundingCount:Number(e.get("fundingCount")),fundingId:Number(e.get("fundingId")),method:e.get("method"),paymentKey:e.get("paymentKey")};async function m(){try{console.log(e.get("orderId"));const t=await r.post(`http://j10C204.p.ssafy.io:8084/fundings/orders/${e.get("orderId")}/confirm`,JSON.stringify(n),{headers:{"Content-Type":"application/json"}});o("성공"),a("/fund/payment/completed",{replace:!0,state:t.data})}catch(t){o("에러"),r.isAxiosError(t)&&t.response&&a(`/fund/payment/fail?message=${t.response.data.message}`)}}m()},[]),s.jsxs(s.Fragment,{children:[s.jsx(p,{}),s.jsx(g,{})]})};export{j as default};
