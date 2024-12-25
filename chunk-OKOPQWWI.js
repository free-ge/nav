import{c as It}from"./chunk-HLPRR7XT.js";import{n as bt,o as $t}from"./chunk-ZSHELREV.js";import{a as St}from"./chunk-AKSAVGQE.js";import{Z}from"./chunk-32COWQRF.js";import{$b as vt,Ec as _t,Fc as Ot,Hb as E,Hc as Dt,Jb as T,Kb as v,Lb as J,Pd as Pt,Xb as m,Yb as p,Yd as B,Zb as W,_b as yt,d as Wt,ec as xt,f as ut,fd as wt,gb as ht,gc as U,gd as ot,lb as f,mb as gt,oc as Mt,od as at,pc as h,qc as w,rc as $,sc as Ct,tb as D}from"./chunk-R3E7TWHM.js";var lt=Wt((dt,ct)=>{"use strict";(function(s,i){typeof dt=="object"&&typeof ct<"u"?ct.exports=i():typeof define=="function"&&define.amd?define(i):(s=typeof globalThis<"u"?globalThis:s||self).dayjs=i()})(dt,function(){"use strict";var s=1e3,i=6e4,n=36e5,t="millisecond",_="second",P="minute",z="hour",S="day",j="week",b="month",q="quarter",k="year",H="date",ft="Invalid Date",jt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Ft=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Lt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(d){var a=["th","st","nd","rd"],e=d%100;return"["+d+(a[(e-20)%10]||a[e]||a[0])+"]"}},rt=function(d,a,e){var r=String(d);return!r||r.length>=a?d:""+Array(a+1-r.length).join(e)+d},Rt={s:rt,z:function(d){var a=-d.utcOffset(),e=Math.abs(a),r=Math.floor(e/60),o=e%60;return(a<=0?"+":"-")+rt(r,2,"0")+":"+rt(o,2,"0")},m:function d(a,e){if(a.date()<e.date())return-d(e,a);var r=12*(e.year()-a.year())+(e.month()-a.month()),o=a.clone().add(r,b),c=e-o<0,l=a.clone().add(r+(c?-1:1),b);return+(-(r+(e-o)/(c?o-l:l-o))||0)},a:function(d){return d<0?Math.ceil(d)||0:Math.floor(d)},p:function(d){return{M:b,y:k,w:j,d:S,D:H,h:z,m:P,s:_,ms:t,Q:q}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(d){return d===void 0}},Q="en",F={};F[Q]=Lt;var pt="$isDayjsObject",st=function(d){return d instanceof nt||!(!d||!d[pt])},et=function d(a,e,r){var o;if(!a)return Q;if(typeof a=="string"){var c=a.toLowerCase();F[c]&&(o=c),e&&(F[c]=e,o=c);var l=a.split("-");if(!o&&l.length>1)return d(l[0])}else{var g=a.name;F[g]=a,o=g}return!r&&o&&(Q=o),o||!r&&Q},x=function(d,a){if(st(d))return d.clone();var e=typeof a=="object"?a:{};return e.date=d,e.args=arguments,new nt(e)},u=Rt;u.l=et,u.i=st,u.w=function(d,a){return x(d,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var nt=function(){function d(e){this.$L=et(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[pt]=!0}var a=d.prototype;return a.parse=function(e){this.$d=function(r){var o=r.date,c=r.utc;if(o===null)return new Date(NaN);if(u.u(o))return new Date;if(o instanceof Date)return new Date(o);if(typeof o=="string"&&!/Z$/i.test(o)){var l=o.match(jt);if(l){var g=l[2]-1||0,y=(l[7]||"0").substring(0,3);return c?new Date(Date.UTC(l[1],g,l[3]||1,l[4]||0,l[5]||0,l[6]||0,y)):new Date(l[1],g,l[3]||1,l[4]||0,l[5]||0,l[6]||0,y)}}return new Date(o)}(e),this.init()},a.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},a.$utils=function(){return u},a.isValid=function(){return this.$d.toString()!==ft},a.isSame=function(e,r){var o=x(e);return this.startOf(r)<=o&&o<=this.endOf(r)},a.isAfter=function(e,r){return x(e)<this.startOf(r)},a.isBefore=function(e,r){return this.endOf(r)<x(e)},a.$g=function(e,r,o){return u.u(e)?this[r]:this.set(o,e)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(e,r){var o=this,c=!!u.u(r)||r,l=u.p(e),g=function(R,O){var N=u.w(o.$u?Date.UTC(o.$y,O,R):new Date(o.$y,O,R),o);return c?N:N.endOf(S)},y=function(R,O){return u.w(o.toDate()[R].apply(o.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(O)),o)},M=this.$W,C=this.$M,I=this.$D,A="set"+(this.$u?"UTC":"");switch(l){case k:return c?g(1,0):g(31,11);case b:return c?g(1,C):g(0,C+1);case j:var L=this.$locale().weekStart||0,G=(M<L?M+7:M)-L;return g(c?I-G:I+(6-G),C);case S:case H:return y(A+"Hours",0);case z:return y(A+"Minutes",1);case P:return y(A+"Seconds",2);case _:return y(A+"Milliseconds",3);default:return this.clone()}},a.endOf=function(e){return this.startOf(e,!1)},a.$set=function(e,r){var o,c=u.p(e),l="set"+(this.$u?"UTC":""),g=(o={},o[S]=l+"Date",o[H]=l+"Date",o[b]=l+"Month",o[k]=l+"FullYear",o[z]=l+"Hours",o[P]=l+"Minutes",o[_]=l+"Seconds",o[t]=l+"Milliseconds",o)[c],y=c===S?this.$D+(r-this.$W):r;if(c===b||c===k){var M=this.clone().set(H,1);M.$d[g](y),M.init(),this.$d=M.set(H,Math.min(this.$D,M.daysInMonth())).$d}else g&&this.$d[g](y);return this.init(),this},a.set=function(e,r){return this.clone().$set(e,r)},a.get=function(e){return this[u.p(e)]()},a.add=function(e,r){var o,c=this;e=Number(e);var l=u.p(r),g=function(C){var I=x(c);return u.w(I.date(I.date()+Math.round(C*e)),c)};if(l===b)return this.set(b,this.$M+e);if(l===k)return this.set(k,this.$y+e);if(l===S)return g(1);if(l===j)return g(7);var y=(o={},o[P]=i,o[z]=n,o[_]=s,o)[l]||1,M=this.$d.getTime()+e*y;return u.w(M,this)},a.subtract=function(e,r){return this.add(-1*e,r)},a.format=function(e){var r=this,o=this.$locale();if(!this.isValid())return o.invalidDate||ft;var c=e||"YYYY-MM-DDTHH:mm:ssZ",l=u.z(this),g=this.$H,y=this.$m,M=this.$M,C=o.weekdays,I=o.months,A=o.meridiem,L=function(O,N,X,it){return O&&(O[N]||O(r,c))||X[N].slice(0,it)},G=function(O){return u.s(g%12||12,O,"0")},R=A||function(O,N,X){var it=O<12?"AM":"PM";return X?it.toLowerCase():it};return c.replace(Ft,function(O,N){return N||function(X){switch(X){case"YY":return String(r.$y).slice(-2);case"YYYY":return u.s(r.$y,4,"0");case"M":return M+1;case"MM":return u.s(M+1,2,"0");case"MMM":return L(o.monthsShort,M,I,3);case"MMMM":return L(I,M);case"D":return r.$D;case"DD":return u.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return L(o.weekdaysMin,r.$W,C,2);case"ddd":return L(o.weekdaysShort,r.$W,C,3);case"dddd":return C[r.$W];case"H":return String(g);case"HH":return u.s(g,2,"0");case"h":return G(1);case"hh":return G(2);case"a":return R(g,y,!0);case"A":return R(g,y,!1);case"m":return String(y);case"mm":return u.s(y,2,"0");case"s":return String(r.$s);case"ss":return u.s(r.$s,2,"0");case"SSS":return u.s(r.$ms,3,"0");case"Z":return l}return null}(O)||l.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(e,r,o){var c,l=this,g=u.p(r),y=x(e),M=(y.utcOffset()-this.utcOffset())*i,C=this-y,I=function(){return u.m(l,y)};switch(g){case k:c=I()/12;break;case b:c=I();break;case q:c=I()/3;break;case j:c=(C-M)/6048e5;break;case S:c=(C-M)/864e5;break;case z:c=C/n;break;case P:c=C/i;break;case _:c=C/s;break;default:c=C}return o?c:u.a(c)},a.daysInMonth=function(){return this.endOf(b).$D},a.$locale=function(){return F[this.$L]},a.locale=function(e,r){if(!e)return this.$L;var o=this.clone(),c=et(e,r,!0);return c&&(o.$L=c),o},a.clone=function(){return u.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},d}(),mt=nt.prototype;return x.prototype=mt,[["$ms",t],["$s",_],["$m",P],["$H",z],["$W",S],["$M",b],["$y",k],["$D",H]].forEach(function(d){mt[d[1]]=function(a){return this.$g(a,d[0],d[1])}}),x.extend=function(d,a){return d.$i||(d(a,nt,x),d.$i=!0),x},x.locale=et,x.isDayjs=st,x.unix=function(d){return x(1e3*d)},x.en=F[Q],x.Ls=F,x.p={},x})});var Tt=class s{data;date="";day="";week="";dayOfYear="";constructor(){let i=$t();this.date=B("_calendarDate",{year:i.year,month:i.month}),this.day=i.zeroDate,this.week=i.dayText,this.dayOfYear=B("_dayOfYear",{day:bt()})}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=D({type:s,selectors:[["app-calendar"]],inputs:{data:"data"},decls:11,vars:10,consts:[[1,"calendar","family","citems"],[1,"ctop"],[1,"box"],[1,"cday"],[1,"cdate"],[1,"mr-1.5"]],template:function(n,t){n&1&&(m(0,"div",0)(1,"div",1),h(2),p(),m(3,"div",2)(4,"div",3),h(5),p(),m(6,"div",4)(7,"span",5),h(8),p(),m(9,"span"),h(10),p()()()()),n&2&&(v("zoom",t.data.zoom),f(),v("background",t.data.topColor),f(),$(" ",t.date," "),f(),v("background",t.data.bgColor),f(2),w(t.day),f(3),w(t.dayOfYear),f(2),w(t.week))},styles:[".calendar[_ngcontent-%COMP%]{width:130px;height:var(--componentHeight);max-height:100%;border-radius:12px;text-align:center;overflow:hidden;color:#fff;box-shadow:0 0 8px #0006;display:flex;flex-direction:column}.calendar[_ngcontent-%COMP%]   .ctop[_ngcontent-%COMP%]{font-size:17px;height:40px;line-height:0;display:flex;align-items:center;justify-content:center;font-weight:500}.calendar[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{flex:1}.calendar[_ngcontent-%COMP%]   .cday[_ngcontent-%COMP%]{font-weight:700;font-size:40px;line-height:1;padding:24px 0 5px}.calendar[_ngcontent-%COMP%]   .cdate[_ngcontent-%COMP%]{color:#ffffffb3;font-size:13px}"]})};var kt=class s{data;runDays=0;unit="";constructor(){let i=Date.now()-Pt.runtime;i=i<0?0:i;let n=Math.floor(i/(1e3*60*60*24*365));n>0?(this.runDays=n,this.unit=B("_year")):(this.runDays=Math.floor(i/(1e3*60*60*24)),this.unit=B("_day"))}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=D({type:s,selectors:[["app-runtime"]],inputs:{data:"data"},decls:9,vars:5,consts:[[1,"runtime","family","citems"],[1,"title"],[1,"days"],[1,"day"],[1,"unit"],["src","https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/runtime.svg",1,"img"]],template:function(n,t){n&1&&(m(0,"div",0)(1,"div",1),h(2),p(),m(3,"div",2)(4,"span",3),h(5),p(),m(6,"span",4),h(7),p()(),W(8,"img",5),p()),n&2&&(v("zoom",t.data.zoom),f(2),w(t.data.title),f(3),w(t.runDays),f(2),w(t.unit))},styles:[".runtime[_ngcontent-%COMP%]{pointer-events:none;position:relative;width:230px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;color:#fff;box-shadow:0 0 15px #0003;display:flex;justify-content:center;padding:30px;flex-direction:column;background:linear-gradient(135deg,#8bc6ec,#9599e2);font-weight:700}.runtime[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{z-index:2;position:relative;font-size:18px;color:#f9f6f6}.runtime[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]{z-index:2;position:relative;margin-top:10px;font-size:48px;line-height:1;color:#d67272}.runtime[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{vertical-align:text-bottom}.runtime[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{font-size:15px;margin-left:2px;margin-bottom:2px;font-weight:500}.runtime[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{position:absolute;bottom:30px;right:30px;width:70px}"]})};function Jt(s,i){if(s&1&&(m(0,"div",5),h(1),p()),s&2){let n=U();f(),w(n.countdownStr)}}function Ut(s,i){s&1&&W(0,"img",6)}function Bt(s,i){s&1&&W(0,"img",6)}var Yt=class s{data;countdownStr="";isRest=!1;timer;constructor(){document.addEventListener("visibilitychange",this.visibilitychange.bind(this))}ngOnInit(){this.init(),Z.on("COMPONENT_OK",()=>{clearTimeout(this.timer),setTimeout(()=>{this.init()},100)})}ngOnDestroy(){clearTimeout(this.timer),document.removeEventListener("visibilitychange",this.visibilitychange)}visibilitychange(i){i.target.hidden?clearTimeout(this.timer):this.init()}init(){if(this.data){let i=new Date,n=i.getTime(),t=new Date(this.data.startDate);t.setFullYear(i.getFullYear()),t.setMonth(i.getMonth()),t.setDate(i.getDate());let _=t.getTime(),P=new Date(this.data.date);P.setFullYear(i.getFullYear()),P.setMonth(i.getMonth()),P.setDate(i.getDate());let z=P.getTime(),S=(z-n)/1e3,j=S/(60*60),b=Math.floor(j%1*10)/10,q=Math.floor(S/60%60),k=Math.floor(S%60),H=Math.floor(j)+b;if(n>=_&&n<=z)H>=1?this.countdownStr=`${H}\u5C0F\u65F6`:q>0?this.countdownStr=`${q}\u5206\u949F`:k>=0&&(this.countdownStr=`${k}\u79D2`);else return this.isRest=!0,clearTimeout(this.timer);this.isRest=!1}this.timer=setTimeout(()=>this.init(),1e3)}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=D({type:s,selectors:[["app-offwork"]],inputs:{data:"data"},decls:7,vars:8,consts:[["other",""],[1,"offwork","family","citems"],[1,"title"],["class","coutdown",4,"ngIf"],["src","https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/rest.svg","class","img",4,"ngIf","ngIfElse"],[1,"coutdown"],["src","https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/rest.svg",1,"img"]],template:function(n,t){if(n&1&&(m(0,"div",1)(1,"div",2),h(2),p(),E(3,Jt,2,1,"div",3)(4,Ut,1,0,"img",4)(5,Bt,1,0,"ng-template",null,0,Dt),p()),n&2){let _=Mt(6);v("zoom",t.data.zoom),J("rest",t.isRest),f(2),$(" ",t.isRest?t.data.restTitle:t.data.workTitle," "),f(),T("ngIf",!t.isRest),f(),T("ngIf",t.isRest)("ngIfElse",_)}},dependencies:[at,ot],styles:[".offwork[_ngcontent-%COMP%]{pointer-events:none;position:relative;width:170px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;box-shadow:0 0 15px #0003;display:flex;align-items:center;flex-direction:column;font-weight:700;background-color:#fff}.offwork.rest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:22px;color:#666}.offwork[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-top:20px;z-index:2;position:relative;font-size:14px;color:gray;text-align:center}.offwork[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;width:100%}.offwork[_ngcontent-%COMP%]   .coutdown[_ngcontent-%COMP%]{z-index:2;position:relative;font-size:24px;color:#666}"]})};var zt=class s{constructor(i){this.jumpService=i}data;static \u0275fac=function(n){return new(n||s)(gt(St))};static \u0275cmp=D({type:s,selectors:[["app-image"]],inputs:{data:"data"},decls:3,vars:7,consts:[[1,"cimage","family","citems",3,"click"],[1,"text"]],template:function(n,t){n&1&&(m(0,"div",0),xt("click",function(P){return t.jumpService.goUrl(P,t.data.go)}),m(1,"div",1),h(2),p()()),n&2&&(v("background-image",t.data.url&&"url("+t.data.url+")")("zoom",t.data.zoom),J("cursor-pointer",t.data.go),f(2),w(t.data.text))},styles:[".cimage[_ngcontent-%COMP%]{position:relative;width:170px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;color:#fff;box-shadow:0 0 15px #0003;background-size:cover}.cimage[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0;width:100%;font-size:12px;text-align:center;font-weight:500}"]})};var tt=ut(lt());var Ht=class s{data;component={};constructor(){}ngOnInit(){this.init(),Z.on("COMPONENT_OK",()=>{setTimeout(()=>{this.init()},100)})}init(){let i={};this.data.date&&(i.dateStr=(0,tt.default)(this.data.date).format("YYYY.MM.DD"),i.dayStr=(0,tt.default)((0,tt.default)(this.data.date).format("YYYY-MM-DD")).diff((0,tt.default)().format("YYYY-MM-DD"),"day"),i.dayStr=i.dayStr<0?0:i.dayStr,i.dayStr=i.dayStr>9999?9999:i.dayStr),this.component=i}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=D({type:s,selectors:[["app-countdown"]],inputs:{data:"data"},decls:8,vars:15,consts:[[1,"holiday","family","citems"],[1,"top"],[1,"box"],[1,"days"],[1,"date"]],template:function(n,t){n&1&&(m(0,"div",0)(1,"div",1),h(2),p(),m(3,"div",2)(4,"div",3),h(5),p(),m(6,"div",4),h(7),p()()()),n&2&&(v("zoom",t.data.zoom),f(),v("background",t.data.topColor),f(),$(" ",t.data.title," "),f(),v("background-image",t.data.url&&"url("+t.data.url+")")("background-color",t.data.bgColor),f(),v("color",t.data.dayColor),f(),$(" ",t.component.dayStr," "),f(),v("color",t.data.dateColor),f(),$(" - ",t.component.dateStr," - "))},styles:[".holiday[_ngcontent-%COMP%]{position:relative;width:160px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;color:#fff;box-shadow:0 0 15px #0003;display:flex;flex-direction:column;text-align:center}.holiday[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{padding:6px 10px;font-weight:500}.holiday[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{position:relative;flex:1;background-size:cover}.holiday[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]{font-weight:700;font-size:50px;margin-top:16px}.holiday[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0;width:100%;font-weight:500}"]})};var Et=class s{data;constructor(){}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=D({type:s,selectors:[["app-html"]],inputs:{data:"data"},decls:2,vars:5,consts:[[1,"html","family","citems",3,"innerHTML"]],template:function(n,t){n&1&&(W(0,"div",0),_t(1,"safeHtml")),n&2&&(v("zoom",t.data.zoom),T("innerHTML",Ot(1,3,t.data.html),ht))},dependencies:[It],styles:[".html[_ngcontent-%COMP%]{position:relative;width:var(--componentHeight);height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;box-shadow:0 0 15px #0003}"]})};var Y=ut(lt());function Zt(s,i){s&1&&(m(0,"span",10),h(1,"\u4F11"),p())}function Kt(s,i){if(s&1&&(yt(0),h(1),vt()),s&2){let n=U(2);f(),$("- ",n.items[0].afterDay,"")}}function Vt(s,i){s&1&&(m(0,"span",10),h(1,"\u4F11"),p())}function qt(s,i){if(s&1&&(m(0,"div",14),h(1),p()),s&2){let n=U().$implicit;f(),$("",n.diffDay,"\u5929")}}function Qt(s,i){if(s&1&&(m(0,"div",11)(1,"div",12),h(2),E(3,Vt,2,0,"span",6),p(),E(4,qt,2,1,"div",13),p()),s&2){let n=i.$implicit;f(2),Ct(" ",n.title," ",n.dateStr,""),f(),T("ngIf",n.day>0),f(),T("ngIf",n.diffDay>0)}}function Gt(s,i){if(s&1&&(m(0,"div",1)(1,"div",2)(2,"div",3),h(3),p(),m(4,"div",4),h(5),p(),m(6,"div",5),E(7,Zt,2,0,"span",6),m(8,"span"),h(9),E(10,Kt,2,1,"ng-container",7),p()()(),m(11,"div",8),E(12,Qt,5,4,"div",9),p()()),s&2){let n=U();v("zoom",n.data.zoom),f(),J("today",n.items[0].isToday||n.items[0].isRest),f(2),$(" ",n.items[0].isToday||n.items[0].isRest?"\u4ECA\u5929\u5C31\u662F":"\u8DDD\u79BB"+n.items[0].title," "),f(2),w(n.items[0].diffStr),f(2),T("ngIf",n.items[0].day>0),f(2),$("",n.items[0].dateStr," "),f(),T("ngIf",n.items[0].afterDay),f(2),T("ngForOf",n.items)}}var Nt=class s{data;items=[];constructor(){}ngOnInit(){this.init(),Z.on("COMPONENT_OK",()=>{setTimeout(()=>{this.init()},100)})}init(){let i={},n=(0,Y.default)((0,Y.default)().format("YYYY-MM-DD"));this.data.items&&(i=[...this.data.items].filter(t=>{t.date=(0,Y.default)(t.date).format("YYYY-MM-DD");let _=(0,Y.default)(t.date);return t.day>0&&(_=_.add(t.day-1,"day")),!_.isBefore(n)}).slice(0,4).map(t=>(t.dateStr=(0,Y.default)(t.date).format("MM.DD"),t.diffDay=(0,Y.default)((0,Y.default)(t.date).format("YYYY-MM-DD")).diff(n,"day"),t.diffDay=t.diffDay<0?0:t.diffDay,t.diffDay=t.diffDay>999?999:t.diffDay,t.diffStr=t.diffDay,t.day>0&&(t.afterDay=(0,Y.default)(t.date).add(t.day-1,"day").format("MM.DD"),t.afterDay===t.dateStr&&(t.afterDay=null)),t.isToday=t.dateStr===(0,Y.default)().format("MM.DD"),t.diffDay<=0&&(t.isToday?t.diffStr=t.title:(t.isRest=!0,t.diffStr="\u4F11\u606F\u65E5")),t))),this.items=i}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=D({type:s,selectors:[["app-holiday"]],inputs:{data:"data"},decls:1,vars:1,consts:[["class","holiday family citems",3,"zoom",4,"ngIf"],[1,"holiday","family","citems"],[1,"left"],[1,"title"],[1,"days"],[1,"flex","items-center","justify-center","whitespace-nowrap"],["class","tag",4,"ngIf"],[4,"ngIf"],[1,"right"],["class","items",4,"ngFor","ngForOf"],[1,"tag"],[1,"items"],[1,"cleft"],["class","cright",4,"ngIf"],[1,"cright"]],template:function(n,t){n&1&&E(0,Gt,13,10,"div",0),n&2&&T("ngIf",t.items.length)},dependencies:[at,wt,ot],styles:[".holiday[_ngcontent-%COMP%]{position:relative;width:320px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;box-shadow:0 0 15px #0003;display:flex;background-color:#fff;color:#666}.holiday[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:500;font-size:16px}.holiday[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:140px;padding:12px 0 12px 12px;display:flex;flex-direction:column}.holiday[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]{font-size:46px;text-align:center;font-weight:700;color:#000000d9;flex:1;display:flex;align-items:center;justify-content:center}.holiday[_ngcontent-%COMP%]   .left.today[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]{font-size:30px}.holiday[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{background-color:#dffcea;color:#55aa6f;font-size:10px;font-weight:500;padding:1px 2px;border-radius:2px;display:inline-flex;align-items:center;justify-content:center;margin-right:3px;margin-left:2px}.holiday[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:1;padding:12px}.holiday[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:4px 0;color:#000c}.holiday[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]:not(:nth-last-child(1)){margin-bottom:3px;border-bottom:1px solid #eee}.holiday[_ngcontent-%COMP%]   .cleft[_ngcontent-%COMP%]{position:relative;white-space:nowrap;display:flex;align-items:center}.holiday[_ngcontent-%COMP%]   .cleft[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{position:absolute;top:50%;left:-5px;transform:translate(-100%,-50%)}.holiday[_ngcontent-%COMP%]   .cright[_ngcontent-%COMP%]{font-weight:500}"]})};export{Tt as a,kt as b,Yt as c,zt as d,lt as e,Ht as f,Et as g,Nt as h};
