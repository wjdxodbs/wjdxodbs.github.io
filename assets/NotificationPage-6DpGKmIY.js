import{k as g,l as k,r as T,j as t}from"./index-BPkW46Wv.js";import{H as A}from"./Header-BK3SYZUt.js";import{a as E,d as N}from"./dayjs.min-BUzgHZUK.js";import{c as S}from"./MyPageHistoryApi-nLDnakPA.js";import"./iconBase-Cautryn5.js";import"./AddressContent-BHQ4JirU.js";import"./common-BryWrCT5.js";var w={exports:{}};(function(l,f){(function(i,a){l.exports=a()})(g,function(){return function(i,a,r){i=i||{};var o=a.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function j(e,n,c,_){return o.fromToBase(e,n,c,_)}r.en.relativeTime=s,o.fromToBase=function(e,n,c,_,D){for(var M,h,Y,p=c.$locale().relativeTime||s,x=i.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],b=x.length,u=0;u<b;u+=1){var d=x[u];d.d&&(M=_?r(e).diff(c,d.d,!0):c.diff(e,d.d,!0));var m=(i.rounding||Math.round)(Math.abs(M));if(Y=M>0,m<=d.r||!d.r){m<=1&&u>0&&(d=x[u-1]);var v=p[d.l];D&&(m=D(""+m)),h=typeof v=="string"?v.replace("%d",m):v(m,n,d.l,Y);break}}if(n)return h;var y=Y?p.future:p.past;return typeof y=="function"?y(h):y.replace("%s",h)},o.to=function(e,n){return j(e,n,this,!0)},o.from=function(e,n){return j(e,n,this)};var L=function(e){return e.$u?r.utc():r()};o.toNow=function(e){return this.to(L(this),e)},o.fromNow=function(e){return this.from(L(this),e)}}})})(w);var B=w.exports;const $=k(B);var G={exports:{}};(function(l,f){(function(i,a){l.exports=a(E)})(g,function(i){function a(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var r=a(i),o={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(s){return s+"일"},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(s){return s<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}};return r.default.locale(o,null,!0),o})})(G);N.extend($);N.locale("ko");const H=()=>{const[l,f]=T.useState([]);T.useEffect(()=>{i(),f([])},[]);const i=async()=>{const r=await S();f(r)},a=r=>N(r).fromNow();return t.jsx("div",{className:"NotificationBody",children:l.length>0?l.map((r,o)=>t.jsxs("div",{className:"body",children:[t.jsxs("div",{className:"header",children:[t.jsx("div",{className:"category",children:"퀴즈/이벤트"}),t.jsx("div",{className:"date",children:a(r.date)})]}),t.jsx("div",{className:"title",children:"매일 30분만 열리는 깜짝 퀴즈 타임!"}),t.jsx("div",{className:"sub-title",children:"문제를 다 맞추면 특별한 랜덤박스를 지급해 드려요 (선착순)"})]},o)):t.jsx("div",{className:"SearchedWords",children:t.jsxs("div",{className:"no-word-container",children:[t.jsx("div",{className:"title",children:"앗!"}),t.jsx("div",{className:"subtitle",children:"알림 내역이 없습니다."})]})})})},I=()=>t.jsxs("div",{className:"NotificationPage",children:[t.jsx(A,{centerText:"내 알림"}),t.jsx("div",{className:"body",children:t.jsx(H,{})})]});export{I as default};
