import{a as c,b as e,c as n}from"./common-BDZuGjqk.js";const t=c(),i=e(),m=async o=>{try{const{data:a}=await t.get(`/music/search/${o}`);return a}catch(a){throw console.log(a),a}},u=async o=>{try{const a=new FormData;a.append("imageUrl",o);const{data:s}=await i.post("/music/upload-image",a);return s}catch(a){throw console.error(a),a}},g=async(o,a)=>{try{const{data:s}=await t.post(`/music/thrown-song/${o}`,a);return s}catch(s){if(n.isAxiosError(s)&&s.response){const{code:r}=s.response.data;return r}}};export{g as a,m as g,u as p};