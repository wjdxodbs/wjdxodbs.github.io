import{c as a}from"./index-BnLlduAm.js";const s=a(),n=async t=>{try{const{data:o}=await s.post("/users/user/coupon",t);return o}catch(o){throw console.log(o),o}},r=async()=>{try{const{data:t}=await s.get("/users/user/coupon");return t}catch(t){throw console.log(t),t}},e=async t=>{try{const{data:o}=await s.put("/users/user/nickname",t);return o}catch(o){throw console.log(o),o}};export{e as a,r as g,n as p};
