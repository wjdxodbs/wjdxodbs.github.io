import{d as r,q as n,r as s,j as m}from"./index-u2Gvw5X7.js";import{L as c}from"./Loading-BgOpaWmb.js";import{a as u}from"./commons-D5rr2GKD.js";import"./axios-Bo0ATomq.js";const l=()=>{const a=r(),[e]=n();return s.useEffect(()=>{const o={amount:Number(e.get("amount")),fundingCount:Number(e.get("fundingCount")),fundingId:Number(e.get("fundingId")),method:e.get("method"),paymentKey:e.get("paymentKey")};console.log(o),(async()=>{try{console.log(e.get("orderId"));const t=await u().post(`/fundings/orders/${e.get("orderId")}/confirm`,o);a("/fund/payment/completed",{replace:!0,state:t.data})}catch(t){console.log(t)}})()},[]),m.jsx(c,{})};export{l as default};
