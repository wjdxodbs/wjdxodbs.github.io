import{c as s}from"./index-BnLlduAm.js";const o=s(),a=async()=>{try{const{data:t}=await o.get("/users/user/thrown-song");return t}catch(t){throw console.log(t),t}},r=async()=>{try{const{data:t}=await o.get("/users/user/picked-song");return t}catch(t){throw console.log(t),t}},c=async()=>{try{const{data:t}=await o.get("/users/user/profile");return t}catch(t){throw console.log(t),t}},n=async()=>{try{const{data:t}=await o.get("/users/user/notification");return t}catch(t){throw console.log(t),t}};export{r as a,a as b,n as c,c as g};
