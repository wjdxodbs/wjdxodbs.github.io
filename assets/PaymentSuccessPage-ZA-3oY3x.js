import{u as o,k as i,r as m,j as u}from"./index-DxiVO21r.js";import{a as s}from"./axios-Bo0ATomq.js";import{L as d}from"./Loading-DBdWS1Pb.js";var f={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const y=()=>{const a=o(),[e]=i();return m.useEffect(()=>{const n={amount:Number(e.get("amount")),fundingCount:Number(e.get("fundingCount")),fundingId:Number(e.get("fundingId")),method:e.get("method"),paymentKey:e.get("paymentKey")};async function r(){try{const t=await s.post(`${f.VITE_BASE_URL}:8084/fundings/orders/${e.get("orderId")}/confirm`,JSON.stringify(n),{headers:{"Content-Type":"application/json"}});a("/fund/payment/completed",{replace:!0,state:t.data})}catch(t){s.isAxiosError(t)&&t.response&&a(`/fund/payment/fail?message=${t.response.data.message}`)}}r()},[]),u.jsx(d,{})};export{y as default};
