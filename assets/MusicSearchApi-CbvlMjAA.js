import{a as c}from"./common--nYADsze.js";const a=c(),e=async t=>{try{return(await a.get(`/music/search/${t}`)).data}catch(s){throw console.log(s),s}},n=async(t,s)=>{try{return(await a.post(`/music/thrown/${t}`,s)).data}catch(o){throw console.log(o),o}};export{e as g,n as p};
