import{k as it,l as at,g as Q,d as U,j as r,R as ct,c as ot,r as A,h as B}from"./index-Z2rYjAJg.js";import{G as X}from"./iconBase-D0I5ewFB.js";import{y as ut}from"./youtubeMusic-xhMXNxMa.js";import{t as lt,T as dt}from"./toastMsg-AdkdipjZ.js";import{H as ht}from"./Header-tdHiBLaV.js";import{w as ft}from"./whiteBox-CgJCDTJb.js";import{s as mt}from"./atoms-CBt0LDoT.js";function vt(l){return X({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M388.8 896.4v-27.198c.6-2.2 1.6-4.2 2-6.4 8.8-57.2 56.4-102.4 112.199-106.2 62.4-4.4 115.2 31.199 132.4 89.199 2.2 7.6 3.8 15.6 5.8 23.4v27.2c-.6 1.8-1.6 3.399-1.8 5.399-8.6 52.8-46.6 93-98.6 104.4-4 .8-8 2-12 3h-27.2c-1.8-.6-3.6-1.6-5.4-1.8-52-8.4-91.599-45.4-103.6-96.8-1.2-5-2.6-9.6-3.8-14.2zm252.4-768.797l-.001 27.202c-.6 2.2-1.6 4.2-1.8 6.4-9 57.6-56.8 102.6-113.2 106.2-62.2 4-114.8-32-131.8-90.2-2.2-7.401-3.8-15-5.6-22.401v-27.2c.6-1.8 1.6-3.4 2-5.2 9.6-52 39.8-86 90.2-102.2 6.6-2.2 13.6-3.4 20.4-5.2h27.2c1.8.6 3.6 1.6 5.4 1.8 52.2 8.6 91.6 45.4 103.6 96.8 1.201 4.8 2.401 9.4 3.601 13.999zm-.001 370.801v27.2c-.6 2.2-1.6 4.2-2 6.4-9 57.4-58.6 103.6-114.6 106-63 2.8-116.4-35.2-131.4-93.8-1.6-6.2-3-12.4-4.4-18.6v-27.2c.6-2.2 1.6-4.2 2-6.4 8.8-57.4 58.6-103.601 114.6-106.2 63-3 116.4 35.2 131.4 93.8 1.6 6.4 3 12.6 4.4 18.8z"},child:[]}]})(l)}var tt={exports:{}};(function(l,h){(function(M,j){l.exports=j()})(it,function(){var M=1e3,j=6e4,_=36e5,y="millisecond",x="second",O="minute",C="hour",D="day",W="week",g="month",J="quarter",S="year",H="date",G="Invalid Date",et=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,st=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,nt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var s=["th","st","nd","rd"],t=i%100;return"["+i+(s[(t-20)%10]||s[t]||s[0])+"]"}},V=function(i,s,t){var n=String(i);return!n||n.length>=s?i:""+Array(s+1-n.length).join(t)+i},rt={s:V,z:function(i){var s=-i.utcOffset(),t=Math.abs(s),n=Math.floor(t/60),e=t%60;return(s<=0?"+":"-")+V(n,2,"0")+":"+V(e,2,"0")},m:function i(s,t){if(s.date()<t.date())return-i(t,s);var n=12*(t.year()-s.year())+(t.month()-s.month()),e=s.clone().add(n,g),a=t-e<0,c=s.clone().add(n+(a?-1:1),g);return+(-(n+(t-e)/(a?e-c:c-e))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:g,y:S,w:W,d:D,D:H,h:C,m:O,s:x,ms:y,Q:J}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},R="en",N={};N[R]=nt;var K="$isDayjsObject",F=function(i){return i instanceof E||!(!i||!i[K])},Z=function i(s,t,n){var e;if(!s)return R;if(typeof s=="string"){var a=s.toLowerCase();N[a]&&(e=a),t&&(N[a]=t,e=a);var c=s.split("-");if(!e&&c.length>1)return i(c[0])}else{var u=s.name;N[u]=s,e=u}return!n&&e&&(R=e),e||!n&&R},f=function(i,s){if(F(i))return i.clone();var t=typeof s=="object"?s:{};return t.date=i,t.args=arguments,new E(t)},o=rt;o.l=Z,o.i=F,o.w=function(i,s){return f(i,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var E=function(){function i(t){this.$L=Z(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[K]=!0}var s=i.prototype;return s.parse=function(t){this.$d=function(n){var e=n.date,a=n.utc;if(e===null)return new Date(NaN);if(o.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var c=e.match(et);if(c){var u=c[2]-1||0,d=(c[7]||"0").substring(0,3);return a?new Date(Date.UTC(c[1],u,c[3]||1,c[4]||0,c[5]||0,c[6]||0,d)):new Date(c[1],u,c[3]||1,c[4]||0,c[5]||0,c[6]||0,d)}}return new Date(e)}(t),this.init()},s.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},s.$utils=function(){return o},s.isValid=function(){return this.$d.toString()!==G},s.isSame=function(t,n){var e=f(t);return this.startOf(n)<=e&&e<=this.endOf(n)},s.isAfter=function(t,n){return f(t)<this.startOf(n)},s.isBefore=function(t,n){return this.endOf(n)<f(t)},s.$g=function(t,n,e){return o.u(t)?this[n]:this.set(e,t)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(t,n){var e=this,a=!!o.u(n)||n,c=o.p(t),u=function(k,$){var w=o.w(e.$u?Date.UTC(e.$y,$,k):new Date(e.$y,$,k),e);return a?w:w.endOf(D)},d=function(k,$){return o.w(e.toDate()[k].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice($)),e)},m=this.$W,v=this.$M,p=this.$D,T="set"+(this.$u?"UTC":"");switch(c){case S:return a?u(1,0):u(31,11);case g:return a?u(1,v):u(0,v+1);case W:var b=this.$locale().weekStart||0,I=(m<b?m+7:m)-b;return u(a?p-I:p+(6-I),v);case D:case H:return d(T+"Hours",0);case C:return d(T+"Minutes",1);case O:return d(T+"Seconds",2);case x:return d(T+"Milliseconds",3);default:return this.clone()}},s.endOf=function(t){return this.startOf(t,!1)},s.$set=function(t,n){var e,a=o.p(t),c="set"+(this.$u?"UTC":""),u=(e={},e[D]=c+"Date",e[H]=c+"Date",e[g]=c+"Month",e[S]=c+"FullYear",e[C]=c+"Hours",e[O]=c+"Minutes",e[x]=c+"Seconds",e[y]=c+"Milliseconds",e)[a],d=a===D?this.$D+(n-this.$W):n;if(a===g||a===S){var m=this.clone().set(H,1);m.$d[u](d),m.init(),this.$d=m.set(H,Math.min(this.$D,m.daysInMonth())).$d}else u&&this.$d[u](d);return this.init(),this},s.set=function(t,n){return this.clone().$set(t,n)},s.get=function(t){return this[o.p(t)]()},s.add=function(t,n){var e,a=this;t=Number(t);var c=o.p(n),u=function(v){var p=f(a);return o.w(p.date(p.date()+Math.round(v*t)),a)};if(c===g)return this.set(g,this.$M+t);if(c===S)return this.set(S,this.$y+t);if(c===D)return u(1);if(c===W)return u(7);var d=(e={},e[O]=j,e[C]=_,e[x]=M,e)[c]||1,m=this.$d.getTime()+t*d;return o.w(m,this)},s.subtract=function(t,n){return this.add(-1*t,n)},s.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||G;var a=t||"YYYY-MM-DDTHH:mm:ssZ",c=o.z(this),u=this.$H,d=this.$m,m=this.$M,v=e.weekdays,p=e.months,T=e.meridiem,b=function($,w,Y,L){return $&&($[w]||$(n,a))||Y[w].slice(0,L)},I=function($){return o.s(u%12||12,$,"0")},k=T||function($,w,Y){var L=$<12?"AM":"PM";return Y?L.toLowerCase():L};return a.replace(st,function($,w){return w||function(Y){switch(Y){case"YY":return String(n.$y).slice(-2);case"YYYY":return o.s(n.$y,4,"0");case"M":return m+1;case"MM":return o.s(m+1,2,"0");case"MMM":return b(e.monthsShort,m,p,3);case"MMMM":return b(p,m);case"D":return n.$D;case"DD":return o.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return b(e.weekdaysMin,n.$W,v,2);case"ddd":return b(e.weekdaysShort,n.$W,v,3);case"dddd":return v[n.$W];case"H":return String(u);case"HH":return o.s(u,2,"0");case"h":return I(1);case"hh":return I(2);case"a":return k(u,d,!0);case"A":return k(u,d,!1);case"m":return String(d);case"mm":return o.s(d,2,"0");case"s":return String(n.$s);case"ss":return o.s(n.$s,2,"0");case"SSS":return o.s(n.$ms,3,"0");case"Z":return c}return null}($)||c.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(t,n,e){var a,c=this,u=o.p(n),d=f(t),m=(d.utcOffset()-this.utcOffset())*j,v=this-d,p=function(){return o.m(c,d)};switch(u){case S:a=p()/12;break;case g:a=p();break;case J:a=p()/3;break;case W:a=(v-m)/6048e5;break;case D:a=(v-m)/864e5;break;case C:a=v/_;break;case O:a=v/j;break;case x:a=v/M;break;default:a=v}return e?a:o.a(a)},s.daysInMonth=function(){return this.endOf(g).$D},s.$locale=function(){return N[this.$L]},s.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),a=Z(t,n,!0);return a&&(e.$L=a),e},s.clone=function(){return o.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},i}(),q=E.prototype;return f.prototype=q,[["$ms",y],["$s",x],["$m",O],["$H",C],["$W",D],["$M",g],["$y",S],["$D",H]].forEach(function(i){q[i[1]]=function(s){return this.$g(s,i[0],i[1])}}),f.extend=function(i,s){return i.$i||(i(s,E,f),i.$i=!0),f},f.locale=Z,f.isDayjs=F,f.unix=function(i){return f(1e3*i)},f.en=N[R],f.Ls=N,f.p={},f})})(tt);var $t=tt.exports;const Mt=at($t);function pt(l){return X({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M120,16V8a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm80,32a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,200,48ZM50.34,45.66A8,8,0,0,0,61.66,34.34l-8-8A8,8,0,0,0,42.34,37.66Zm87,26.45a8,8,0,1,0-2.64,15.78C153.67,91.08,168,108.32,168,128a8,8,0,0,0,16,0C184,100.6,163.93,76.57,137.32,72.11ZM232,176v24a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16V128a88,88,0,0,1,88.67-88c48.15.36,87.33,40.29,87.33,89v31A16,16,0,0,1,232,176ZM56,160H200V129c0-40-32.05-72.71-71.45-73H128a72,72,0,0,0-72,72Zm160,40V176H40v24H216Z"},child:[]}]})(l)}const z=Q({key:"optionModalState",default:!1}),P=Q({key:"reportModalState",default:!1}),xt=()=>{const l=U(P),h=U(z);return r.jsxs("div",{className:"OptionModal",children:[r.jsx("div",{className:"background",onClick:()=>h(!1)}),r.jsxs("div",{className:"content",children:[r.jsxs("div",{className:"report",children:[r.jsx(pt,{}),r.jsx("div",{onClick:()=>{h(!1),l(!0)},children:"신고하기"})]}),r.jsx("button",{className:"close",onClick:()=>h(!1),children:"닫기"})]})]})},gt=({content:l})=>{const h=U(P),M=()=>{lt("신고 완료"),h(!1)};return r.jsx("li",{onClick:M,children:l})},jt=["마음에 들지 않습니다","스팸","혐호 발언 또는 상징","불법 또는 규제 상품 판매","기타 문제"],yt=()=>{const l=U(P);return r.jsxs("div",{className:"ReportModal",children:[r.jsx("div",{className:"background",onClick:()=>l(!1)}),r.jsxs("div",{className:"container",children:[r.jsx("div",{className:"report",children:"신고"}),r.jsx("hr",{}),r.jsxs("div",{className:"content",children:[r.jsxs("div",{className:"title",children:[r.jsx("div",{children:"이 음악을 신고하는 이유"}),r.jsx("div",{children:"회원님의 신고는 익명으로 처리됩니다."})]}),r.jsx("ul",{className:"reson",children:jt.map(h=>r.jsx(gt,{content:h},h))})]})]})]})},Dt=({marker:l})=>{const h=Mt(l.thrownDate),M=ct(P),[j,_]=ot(z),y=()=>{const x="youtubemusic://watch?list=gwuCZYJdnT8";window.location.href=x};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"MusicPickDetailBottom",children:[r.jsxs("div",{className:"top",children:[r.jsx("div",{className:"option",children:r.jsx(vt,{onClick:()=>_(!0)})}),r.jsx("div",{className:"content",children:l.content}),r.jsx("div",{className:"date",children:h.format("YY.MM.DD")})]}),r.jsxs("div",{className:"bottom",children:[r.jsxs("button",{className:"listen",onCanPlay:y,children:[r.jsx("img",{src:ut,alt:""}),r.jsx("div",{children:"바로 듣기"})]}),r.jsx("button",{className:"pick",children:"줍기"})]})]}),j&&r.jsx(xt,{}),M&&r.jsx(yt,{}),r.jsx(dt,{})]})},St=({marker:l})=>{const h=A.useRef(null),[M,j]=A.useState(!1),_=B(mt);return A.useEffect(()=>{if(h.current){console.log(h.current);const y=h.current.scrollWidth,x=h.current.clientWidth;console.log(y),console.log(x),y>x?j(!0):j(!1)}},[]),r.jsxs("div",{className:"MusicPickDetailTop",children:[r.jsx("img",{className:"album-image",src:l.albumImage,alt:""}),r.jsxs("div",{className:"cover",children:[r.jsx("div",{className:"black-cover"}),r.jsx("div",{className:"black-gradient"}),r.jsxs("div",{className:"content",children:[r.jsx(ht,{func:_}),r.jsxs("div",{className:"content-bottom",children:[r.jsxs("div",{children:[r.jsx("div",{className:"title",children:r.jsx("div",{ref:h,className:`scrolling-text ${M?"animated":""}`,children:l.title})}),r.jsx("div",{className:"artist",children:l.artist})]}),r.jsx("img",{src:l.itemImage,alt:"",onError:y=>{y.currentTarget.src=ft}})]})]})]})]})},Ht=()=>{const l=B(z),h=B(P),M={throwId:1,title:"I Don't Think That I Like Her Her",artist:"Charlie Puth",albumImage:"https://i.namu.wiki/i/gQq7yL2gbO3_EWZJvfmoFynKLj6fPk76XkIXuyyy8B2HKvK4U_O9db0j8oMUUFy3yrGCZFBazNVK9iSYwjNyEw.webp",itemImage:"itemImageUrl",content:"봄에 비가 오면 생각나는 노래 ☔ ",thrownDate:"2024-04-24T19:49:30"};return A.useEffect(()=>{l(),h()},[]),r.jsxs("div",{className:"MusicPickDetailPage",children:[r.jsx(St,{marker:M}),r.jsx(Dt,{marker:M})]})};export{Ht as default};
