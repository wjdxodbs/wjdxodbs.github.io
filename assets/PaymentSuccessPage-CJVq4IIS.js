import{u as i,k as u,r as p,j as s}from"./index-CONo9Ini.js";import{a as r}from"./axios-Bo0ATomq.js";import{L as f}from"./Loading-Dfti_NvO.js";import{T as c}from"./Common-DWQdBE7c.js";import{t as n}from"./commonFunction-CmDi4hQE.js";import"./index-IS5WMOzt.js";const l=()=>{const a=i(),[t]=u();return p.useEffect(()=>{const o={amount:Number(t.get("amount")),fundingCount:Number(t.get("fundingCount")),fundingId:Number(t.get("fundingId")),method:t.get("method"),paymentKey:t.get("paymentKey")};async function m(){try{const e=await r.post(`http://j10C204.p.ssafy.io:8084/fundings/orders/${t.get("orderId")}/confirm`,JSON.stringify(o),{headers:{"Content-Type":"application/json"}});n("성공"),a("/fund/payment/completed",{replace:!0,state:e.data})}catch(e){n("에러"),r.isAxiosError(e)&&e.response&&a(`/fund/payment/fail?message=${e.response.data.message}`)}}m()},[]),s.jsxs(s.Fragment,{children:[s.jsx(c,{}),s.jsx(f,{})]})};export{l as default};
