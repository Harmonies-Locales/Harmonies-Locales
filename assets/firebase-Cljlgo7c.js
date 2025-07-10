import{b as Al,_ as wl,d as Rl,i as ca,p as Vl,u as Pl,e as Sl,f as Cl,h as Ot,L as bl,j as jt,F as Dl,k as Nl,l as kl,S as xl,m as Ol,C as Ml,r as os,n as Fl,g as Ll,q as Ul}from"./index-35c79a8a-BO3F9RrB.js";var uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yt,ha;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,E,A){for(var g=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)g[Lt-2]=arguments[Lt];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],E=v.g[2];var A=v.g[3],g=p+(A^_&(E^A))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+y[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+y[2]+606105819&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(A^_&(E^A))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+y[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+y[6]+2821735955&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(A^_&(E^A))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+y[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+y[10]+4294925233&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(A^_&(E^A))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+y[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+y[14]+2792965006&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(E^A&(_^E))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+y[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+y[11]+643717713&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^A&(_^E))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+y[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+y[15]+3634488961&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^A&(_^E))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+y[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+y[3]+4107603335&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^A&(_^E))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+y[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+y[7]+1735328473&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(_^E^A)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+y[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+y[11]+1839030562&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^A)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+y[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+y[7]+4139469664&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^A)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+y[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+y[3]+3572445317&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^A)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+y[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+y[15]+530742520&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(E^(_|~A))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+y[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+y[14]+2878612391&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~A))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+y[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+y[10]+4293915773&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~A))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+y[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+y[6]+2734768916&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~A))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+y[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+y[2]+718787259&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+A&4294967295}n.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,y=this.B,E=this.h,A=0;A<p;){if(E==0)for(;A<=_;)i(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<p;)if(y[E++]=v.charCodeAt(A++),E==this.blockSize){i(this,y),E=0;break}}else for(;A<p;)if(y[E++]=v[A++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)v[_++]=this.g[p]>>>y&255;return v};function o(v,p){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function u(v,p){this.h=p;for(var _=[],y=!0,E=v.length-1;0<=E;E--){var A=v[E]|0;y&&A==p||(_[E]=A,y=!1)}this.g=_}var c={};function h(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return T;if(0>v)return D(d(-v));for(var p=[],_=1,y=0;v>=_;y++)p[y]=v/_|0,_*=4294967296;return new u(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return D(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),y=T,E=0;E<v.length;E+=8){var A=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+A),p);8>A?(A=d(Math.pow(p,A)),y=y.j(A).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var T=h(0),w=h(1),S=h(16777216);r=u.prototype,r.m=function(){if(x(this))return-D(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b(this))return"0";if(x(this))return"-"+D(this).toString(v);for(var p=d(Math.pow(v,6)),_=this,y="";;){var E=it(_,p).g;_=$(_,E.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,b(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function b(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function x(v){return v.h==-1}r.l=function(v){return v=$(this,v),x(v)?-1:b(v)?0:1};function D(v){for(var p=v.g.length,_=[],y=0;y<p;y++)_[y]=~v.g[y];return new u(_,~v.h).add(w)}r.abs=function(){return x(this)?D(this):this},r.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0,E=0;E<=p;E++){var A=y+(this.i(E)&65535)+(v.i(E)&65535),g=(A>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,A&=65535,g&=65535,_[E]=g<<16|A}return new u(_,_[_.length-1]&-2147483648?-1:0)};function $(v,p){return v.add(D(p))}r.j=function(v){if(b(this)||b(v))return T;if(x(this))return x(v)?D(this).j(D(v)):D(D(this).j(v));if(x(v))return D(this.j(D(v)));if(0>this.l(S)&&0>v.l(S))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var A=this.i(y)>>>16,g=this.i(y)&65535,Lt=v.i(E)>>>16,Le=v.i(E)&65535;_[2*y+2*E]+=g*Le,B(_,2*y+2*E),_[2*y+2*E+1]+=A*Le,B(_,2*y+2*E+1),_[2*y+2*E+1]+=g*Lt,B(_,2*y+2*E+1),_[2*y+2*E+2]+=A*Lt,B(_,2*y+2*E+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new u(_,0)};function B(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function K(v,p){this.g=v,this.h=p}function it(v,p){if(b(p))throw Error("division by zero");if(b(v))return new K(T,T);if(x(v))return p=it(D(v),p),new K(D(p.g),D(p.h));if(x(p))return p=it(v,D(p)),new K(D(p.g),p.h);if(30<v.g.length){if(x(v)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=w,y=p;0>=y.l(v);)_=Ft(_),y=Ft(y);var E=at(_,1),A=at(y,1);for(y=at(y,2),_=at(_,2);!b(y);){var g=A.add(y);0>=g.l(v)&&(E=E.add(_),A=g),y=at(y,1),_=at(_,1)}return p=$(v,E.j(p)),new K(E,p)}for(E=T;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=d(_),g=A.j(p);x(g)||0<g.l(v);)_-=y,A=d(_),g=A.j(p);b(A)&&(A=w),E=E.add(A),v=$(v,g)}return new K(E,v)}r.A=function(v){return it(this,v).h},r.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&v.i(y);return new u(_,this.h&v.h)},r.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|v.i(y);return new u(_,this.h|v.h)},r.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^v.i(y);return new u(_,this.h^v.h)};function Ft(v){for(var p=v.g.length+1,_=[],y=0;y<p;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(_,v.h)}function at(v,p){var _=p>>5;p%=32;for(var y=v.g.length-_,E=[],A=0;A<y;A++)E[A]=0<p?v.i(A+_)>>>p|v.i(A+_+1)<<32-p:v.i(A+_);return new u(E,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,ha=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=d,u.fromString=m,Yt=u}).apply(typeof uo<"u"?uo:typeof self<"u"?self:typeof window<"u"?window:{});var Bn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fa,en,da,Qn,as,ma,pa,ga;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bn=="object"&&Bn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in l))break t;l=l[I]}s=s[s.length-1],f=l[s],a=a(f),a!=f&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,f=!1,I={next:function(){if(!f&&l<s.length){var R=l++;return{value:a(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function d(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function m(s,a,l){return s.call.apply(s.bind,arguments)}function T(s,a,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(a,I)}}return function(){return s.apply(a,arguments)}}function w(s,a,l){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:T,w.apply(null,arguments)}function S(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function b(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,I,R){for(var C=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)C[Q-2]=arguments[Q];return a.prototype[I].apply(f,C)}}function x(s){const a=s.length;if(0<a){const l=Array(a);for(let f=0;f<a;f++)l[f]=s[f];return l}return[]}function D(s,a){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const I=s.length||0,R=f.length||0;s.length=I+R;for(let C=0;C<R;C++)s[I+C]=f[C]}else s.push(f)}}class ${constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function B(s){return/^[\s\xa0]*$/.test(s)}function K(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function it(s){return it[" "](s),s}it[" "]=function(){};var Ft=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function at(s,a,l){for(const f in s)a.call(l,s[f],f,s)}function v(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function p(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(l in f)s[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function E(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function A(s){c.setTimeout(()=>{throw s},0)}function g(){var s=Nr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Lt{constructor(){this.h=this.g=null}add(a,l){const f=Le.get();f.set(a,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Le=new $(()=>new Bu,s=>s.reset());class Bu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,qe=!1,Nr=new Lt,ui=()=>{const s=c.Promise.resolve(void 0);Ue=()=>{s.then(zu)}};var zu=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){A(l)}var a=Le;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}qe=!1};function Kt(){this.s=this.s,this.C=this.C}Kt.prototype.s=!1,Kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var $u=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function je(s,a){if(ft.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Ft){t:{try{it(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Gu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&je.aa.h.call(this)}}b(je,ft);var Gu={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var An="closure_listenable_"+(1e6*Math.random()|0),Ku=0;function Qu(s,a,l,f,I){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!f,this.ha=I,this.key=++Ku,this.da=this.fa=!1}function wn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Rn(s){this.src=s,this.g={},this.h=0}Rn.prototype.add=function(s,a,l,f,I){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var C=xr(s,a,f,I);return-1<C?(a=s[C],l||(a.fa=!1)):(a=new Qu(a,this.src,R,!!f,I),a.fa=l,s.push(a)),a};function kr(s,a){var l=a.type;if(l in s.g){var f=s.g[l],I=Array.prototype.indexOf.call(f,a,void 0),R;(R=0<=I)&&Array.prototype.splice.call(f,I,1),R&&(wn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function xr(s,a,l,f){for(var I=0;I<s.length;++I){var R=s[I];if(!R.da&&R.listener==a&&R.capture==!!l&&R.ha==f)return I}return-1}var Or="closure_lm_"+(1e6*Math.random()|0),Mr={};function li(s,a,l,f,I){if(Array.isArray(a)){for(var R=0;R<a.length;R++)li(s,a[R],l,f,I);return null}return l=fi(l),s&&s[An]?s.K(a,l,d(f)?!!f.capture:!1,I):Wu(s,a,l,!1,f,I)}function Wu(s,a,l,f,I,R){if(!a)throw Error("Invalid event type");var C=d(I)?!!I.capture:!!I,Q=Lr(s);if(Q||(s[Or]=Q=new Rn(s)),l=Q.add(a,l,f,C,R),l.proxy)return l;if(f=Hu(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)$u||(I=C),I===void 0&&(I=!1),s.addEventListener(a.toString(),f,I);else if(s.attachEvent)s.attachEvent(hi(a.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Hu(){function s(l){return a.call(s.src,s.listener,l)}const a=Xu;return s}function ci(s,a,l,f,I){if(Array.isArray(a))for(var R=0;R<a.length;R++)ci(s,a[R],l,f,I);else f=d(f)?!!f.capture:!!f,l=fi(l),s&&s[An]?(s=s.i,a=String(a).toString(),a in s.g&&(R=s.g[a],l=xr(R,l,f,I),-1<l&&(wn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete s.g[a],s.h--)))):s&&(s=Lr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=xr(a,l,f,I)),(l=-1<s?a[s]:null)&&Fr(l))}function Fr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[An])kr(a.i,s);else{var l=s.type,f=s.proxy;a.removeEventListener?a.removeEventListener(l,f,s.capture):a.detachEvent?a.detachEvent(hi(l),f):a.addListener&&a.removeListener&&a.removeListener(f),(l=Lr(a))?(kr(l,s),l.h==0&&(l.src=null,a[Or]=null)):wn(s)}}}function hi(s){return s in Mr?Mr[s]:Mr[s]="on"+s}function Xu(s,a){if(s.da)s=!0;else{a=new je(a,this);var l=s.listener,f=s.ha||s.src;s.fa&&Fr(s),s=l.call(f,a)}return s}function Lr(s){return s=s[Or],s instanceof Rn?s:null}var Ur="__closure_events_fn_"+(1e9*Math.random()>>>0);function fi(s){return typeof s=="function"?s:(s[Ur]||(s[Ur]=function(a){return s.handleEvent(a)}),s[Ur])}function dt(){Kt.call(this),this.i=new Rn(this),this.M=this,this.F=null}b(dt,Kt),dt.prototype[An]=!0,dt.prototype.removeEventListener=function(s,a,l,f){ci(this,s,a,l,f)};function Tt(s,a){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=a.type||a,typeof a=="string")a=new ft(a,s);else if(a instanceof ft)a.target=a.target||s;else{var I=a;a=new ft(f,s),y(a,I)}if(I=!0,l)for(var R=l.length-1;0<=R;R--){var C=a.g=l[R];I=Vn(C,f,!0,a)&&I}if(C=a.g=s,I=Vn(C,f,!0,a)&&I,I=Vn(C,f,!1,a)&&I,l)for(R=0;R<l.length;R++)C=a.g=l[R],I=Vn(C,f,!1,a)&&I}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],f=0;f<l.length;f++)wn(l[f]);delete s.g[a],s.h--}}this.F=null},dt.prototype.K=function(s,a,l,f){return this.i.add(String(s),a,!1,l,f)},dt.prototype.L=function(s,a,l,f){return this.i.add(String(s),a,!0,l,f)};function Vn(s,a,l,f){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,R=0;R<a.length;++R){var C=a[R];if(C&&!C.da&&C.capture==l){var Q=C.listener,ut=C.ha||C.src;C.fa&&kr(s.i,C),I=Q.call(ut,f)!==!1&&I}}return I&&!f.defaultPrevented}function di(s,a,l){if(typeof s=="function")l&&(s=w(s,l));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function mi(s){s.g=di(()=>{s.g=null,s.i&&(s.i=!1,mi(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Yu extends Kt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:mi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(s){Kt.call(this),this.h=s,this.g={}}b(Be,Kt);var pi=[];function gi(s){at(s.g,function(a,l){this.g.hasOwnProperty(l)&&Fr(a)},s),s.g={}}Be.prototype.N=function(){Be.aa.N.call(this),gi(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qr=c.JSON.stringify,Ju=c.JSON.parse,Zu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function jr(){}jr.prototype.h=null;function _i(s){return s.h||(s.h=s.i())}function yi(){}var ze={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Br(){ft.call(this,"d")}b(Br,ft);function zr(){ft.call(this,"c")}b(zr,ft);var ue={},Ti=null;function Pn(){return Ti=Ti||new dt}ue.La="serverreachability";function Ei(s){ft.call(this,ue.La,s)}b(Ei,ft);function $e(s){const a=Pn();Tt(a,new Ei(a))}ue.STAT_EVENT="statevent";function vi(s,a){ft.call(this,ue.STAT_EVENT,s),this.stat=a}b(vi,ft);function Et(s){const a=Pn();Tt(a,new vi(a,s))}ue.Ma="timingevent";function Ii(s,a){ft.call(this,ue.Ma,s),this.size=a}b(Ii,ft);function Ge(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function Ke(){this.g=!0}Ke.prototype.xa=function(){this.g=!1};function tl(s,a,l,f,I,R){s.info(function(){if(s.g)if(R)for(var C="",Q=R.split("&"),ut=0;ut<Q.length;ut++){var z=Q[ut].split("=");if(1<z.length){var mt=z[0];z=z[1];var pt=mt.split("_");C=2<=pt.length&&pt[1]=="type"?C+(mt+"="+z+"&"):C+(mt+"=redacted&")}}else C=null;else C=R;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+a+`
`+l+`
`+C})}function el(s,a,l,f,I,R,C){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+a+`
`+l+`
`+R+" "+C})}function Ee(s,a,l,f){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+rl(s,l)+(f?" "+f:"")})}function nl(s,a){s.info(function(){return"TIMEOUT: "+a})}Ke.prototype.info=function(){};function rl(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var C=1;C<I.length;C++)I[C]=""}}}}return qr(l)}catch{return a}}var Sn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ai={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$r;function Cn(){}b(Cn,jr),Cn.prototype.g=function(){return new XMLHttpRequest},Cn.prototype.i=function(){return{}},$r=new Cn;function Qt(s,a,l,f){this.j=s,this.i=a,this.l=l,this.R=f||1,this.U=new Be(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wi}function wi(){this.i=null,this.g="",this.h=!1}var Ri={},Gr={};function Kr(s,a,l){s.L=1,s.v=kn(Ut(a)),s.m=l,s.P=!0,Vi(s,null)}function Vi(s,a){s.F=Date.now(),bn(s),s.A=Ut(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),qi(l.i,"t",f),s.C=0,l=s.j.J,s.h=new wi,s.g=so(s.j,l?a:null,!s.m),0<s.O&&(s.M=new Yu(w(s.Y,s,s.g),s.O)),a=s.U,l=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(pi[0]=I.toString()),I=pi);for(var R=0;R<I.length;R++){var C=li(l,I[R],f||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),$e(),tl(s.i,s.u,s.A,s.l,s.R,s.m)}Qt.prototype.ca=function(s){s=s.target;const a=this.M;a&&qt(s)==3?a.j():this.Y(s)},Qt.prototype.Y=function(s){try{if(s==this.g)t:{const pt=qt(this.g);var a=this.g.Ba();const Ae=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Qi(this.g)))){this.J||pt!=4||a==7||(a==8||0>=Ae?$e(3):$e(2)),Qr(this);var l=this.g.Z();this.X=l;e:if(Pi(this)){var f=Qi(this.g);s="";var I=f.length,R=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){le(this),Qe(this);var C="";break e}this.h.i=new c.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,s+=this.h.i.decode(f[a],{stream:!(R&&a==I-1)});f.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,el(this.i,this.u,this.A,this.l,this.R,pt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,ut=this.g;if((Q=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Q)){var z=Q;break e}}z=null}if(l=z)Ee(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wr(this,l);else{this.o=!1,this.s=3,Et(12),le(this),Qe(this);break t}}if(this.P){l=!0;let St;for(;!this.J&&this.C<C.length;)if(St=sl(this,C),St==Gr){pt==4&&(this.s=4,Et(14),l=!1),Ee(this.i,this.l,null,"[Incomplete Response]");break}else if(St==Ri){this.s=4,Et(15),Ee(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else Ee(this.i,this.l,St,null),Wr(this,St);if(Pi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||C.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)Ee(this.i,this.l,C,"[Invalid Chunked Response]"),le(this),Qe(this);else if(0<C.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),ts(mt),mt.M=!0,Et(11))}}else Ee(this.i,this.l,C,null),Wr(this,C);pt==4&&le(this),this.o&&!this.J&&(pt==4?to(this.j,this):(this.o=!1,bn(this)))}else vl(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),le(this),Qe(this)}}}catch{}finally{}};function Pi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function sl(s,a){var l=s.C,f=a.indexOf(`
`,l);return f==-1?Gr:(l=Number(a.substring(l,f)),isNaN(l)?Ri:(f+=1,f+l>a.length?Gr:(a=a.slice(f,f+l),s.C=f+l,a)))}Qt.prototype.cancel=function(){this.J=!0,le(this)};function bn(s){s.S=Date.now()+s.I,Si(s,s.I)}function Si(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Ge(w(s.ba,s),a)}function Qr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Qt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(nl(this.i,this.A),this.L!=2&&($e(),Et(17)),le(this),this.s=2,Qe(this)):Si(this,this.S-s)};function Qe(s){s.j.G==0||s.J||to(s.j,s)}function le(s){Qr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,gi(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Wr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Hr(l.h,s))){if(!s.K&&Hr(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Un(l),Fn(l);else break t;Zr(l),Et(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Ge(w(l.Za,l),6e3));if(1>=Di(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else he(l,11)}else if((s.K||l.g==s)&&Un(l),!B(a))for(I=l.Da.g.parse(a),a=0;a<I.length;a++){let z=I[a];if(l.T=z[0],z=z[1],l.G==2)if(z[0]=="c"){l.K=z[1],l.ia=z[2];const mt=z[3];mt!=null&&(l.la=mt,l.j.info("VER="+l.la));const pt=z[4];pt!=null&&(l.Aa=pt,l.j.info("SVER="+l.Aa));const Ae=z[5];Ae!=null&&typeof Ae=="number"&&0<Ae&&(f=1.5*Ae,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const St=s.g;if(St){const jn=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jn){var R=f.h;R.g||jn.indexOf("spdy")==-1&&jn.indexOf("quic")==-1&&jn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Xr(R,R.h),R.h=null))}if(f.D){const es=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;es&&(f.ya=es,H(f.I,f.D,es))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var C=s;if(f.qa=ro(f,f.J?f.ia:null,f.W),C.K){Ni(f.h,C);var Q=C,ut=f.L;ut&&(Q.I=ut),Q.B&&(Qr(Q),bn(Q)),f.g=C}else Ji(f);0<l.i.length&&Ln(l)}else z[0]!="stop"&&z[0]!="close"||he(l,7);else l.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?he(l,7):Jr(l):z[0]!="noop"&&l.l&&l.l.ta(z),l.v=0)}}$e(4)}catch{}}var il=class{constructor(s,a){this.g=s,this.map=a}};function Ci(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Di(s){return s.h?1:s.g?s.g.size:0}function Hr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Xr(s,a){s.g?s.g.add(a):s.h=a}function Ni(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Ci.prototype.cancel=function(){if(this.i=ki(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ki(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return x(s.i)}function ol(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],l=s.length,f=0;f<l;f++)a.push(s[f]);return a}a=[],l=0;for(f in s)a[l++]=s[f];return a}function al(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const f in s)a[l++]=f;return a}}}function xi(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=al(s),f=ol(s),I=f.length,R=0;R<I;R++)a.call(void 0,f[R],l&&l[R],s)}var Oi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ul(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),I=null;if(0<=f){var R=s[l].substring(0,f);I=s[l].substring(f+1)}else R=s[l];a(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function ce(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ce){this.h=s.h,Dn(this,s.j),this.o=s.o,this.g=s.g,Nn(this,s.s),this.l=s.l;var a=s.i,l=new Xe;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Mi(this,l),this.m=s.m}else s&&(a=String(s).match(Oi))?(this.h=!1,Dn(this,a[1]||"",!0),this.o=We(a[2]||""),this.g=We(a[3]||"",!0),Nn(this,a[4]),this.l=We(a[5]||"",!0),Mi(this,a[6]||"",!0),this.m=We(a[7]||"")):(this.h=!1,this.i=new Xe(null,this.h))}ce.prototype.toString=function(){var s=[],a=this.j;a&&s.push(He(a,Fi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(He(a,Fi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(He(l,l.charAt(0)=="/"?hl:cl,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",He(l,dl)),s.join("")};function Ut(s){return new ce(s)}function Dn(s,a,l){s.j=l?We(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Nn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Mi(s,a,l){a instanceof Xe?(s.i=a,ml(s.i,s.h)):(l||(a=He(a,fl)),s.i=new Xe(a,s.h))}function H(s,a,l){s.i.set(a,l)}function kn(s){return H(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function We(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function He(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,ll),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function ll(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Fi=/[#\/\?@]/g,cl=/[#\?:]/g,hl=/[#\?]/g,fl=/[#\?@]/g,dl=/#/g;function Xe(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Wt(s){s.g||(s.g=new Map,s.h=0,s.i&&ul(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=Xe.prototype,r.add=function(s,a){Wt(this),this.i=null,s=ve(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function Li(s,a){Wt(s),a=ve(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Ui(s,a){return Wt(s),a=ve(s,a),s.g.has(a)}r.forEach=function(s,a){Wt(this),this.g.forEach(function(l,f){l.forEach(function(I){s.call(a,I,f,this)},this)},this)},r.na=function(){Wt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let f=0;f<a.length;f++){const I=s[f];for(let R=0;R<I.length;R++)l.push(a[f])}return l},r.V=function(s){Wt(this);let a=[];if(typeof s=="string")Ui(this,s)&&(a=a.concat(this.g.get(ve(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return Wt(this),this.i=null,s=ve(this,s),Ui(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function qi(s,a,l){Li(s,a),0<l.length&&(s.i=null,s.g.set(ve(s,a),x(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var f=a[l];const R=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var I=R;C[f]!==""&&(I+="="+encodeURIComponent(String(C[f]))),s.push(I)}}return this.i=s.join("&")};function ve(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function ml(s,a){a&&!s.j&&(Wt(s),s.i=null,s.g.forEach(function(l,f){var I=f.toLowerCase();f!=I&&(Li(this,f),qi(this,I,l))},s)),s.j=a}function pl(s,a){const l=new Ke;if(c.Image){const f=new Image;f.onload=S(Ht,l,"TestLoadImage: loaded",!0,a,f),f.onerror=S(Ht,l,"TestLoadImage: error",!1,a,f),f.onabort=S(Ht,l,"TestLoadImage: abort",!1,a,f),f.ontimeout=S(Ht,l,"TestLoadImage: timeout",!1,a,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else a(!1)}function gl(s,a){const l=new Ke,f=new AbortController,I=setTimeout(()=>{f.abort(),Ht(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(I),R.ok?Ht(l,"TestPingServer: ok",!0,a):Ht(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),Ht(l,"TestPingServer: error",!1,a)})}function Ht(s,a,l,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(l)}catch{}}function _l(){this.g=new Zu}function yl(s,a,l){const f=l||"";try{xi(s,function(I,R){let C=I;d(I)&&(C=qr(I)),a.push(f+R+"="+encodeURIComponent(C))})}catch(I){throw a.push(f+"type="+encodeURIComponent("_badmap")),I}}function xn(s){this.l=s.Ub||null,this.j=s.eb||!1}b(xn,jr),xn.prototype.g=function(){return new On(this.l,this.j)},xn.prototype.i=function(s){return function(){return s}}({});function On(s,a){dt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(On,dt),r=On.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Je(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ye(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Je(this)),this.g&&(this.readyState=3,Je(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ji(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ji(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ye(this):Je(this),this.readyState==3&&ji(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,Ye(this))},r.Qa=function(s){this.g&&(this.response=s,Ye(this))},r.ga=function(){this.g&&Ye(this)};function Ye(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Je(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Je(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(On.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Bi(s){let a="";return at(s,function(l,f){a+=f,a+=":",a+=l,a+=`\r
`}),a}function Yr(s,a,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=Bi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):H(s,a,l))}function J(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(J,dt);var Tl=/^https?$/i,El=["POST","PUT"];r=J.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$r.g(),this.v=this.o?_i(this.o):_i($r),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(R){zi(this,R);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)l.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(El,a,void 0))||f||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,C]of l)this.g.setRequestHeader(R,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ki(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){zi(this,R)}};function zi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,$i(s),Mn(s)}function $i(s){s.A||(s.A=!0,Tt(s,"complete"),Tt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Tt(this,"complete"),Tt(this,"abort"),Mn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mn(this,!0)),J.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Gi(this):this.bb())},r.bb=function(){Gi(this)};function Gi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||qt(s)!=4||s.Z()!=2)){if(s.u&&qt(s)==4)di(s.Ea,0,s);else if(Tt(s,"readystatechange"),qt(s)==4){s.h=!1;try{const C=s.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var f;if(f=C===0){var I=String(s.D).match(Oi)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!Tl.test(I?I.toLowerCase():"")}l=f}if(l)Tt(s,"complete"),Tt(s,"success");else{s.m=6;try{var R=2<qt(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",$i(s)}}finally{Mn(s)}}}}function Mn(s,a){if(s.g){Ki(s);const l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Tt(s,"ready");try{l.onreadystatechange=f}catch{}}}function Ki(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function qt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Ju(a)}};function Qi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function vl(s){const a={};s=(s.g&&2<=qt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(B(s[f]))continue;var l=E(s[f]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=a[I]||[];a[I]=R,R.push(l)}v(a,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ze(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Wi(s){this.Aa=0,this.i=[],this.j=new Ke,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ze("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ze("baseRetryDelayMs",5e3,s),this.cb=Ze("retryDelaySeedMs",1e4,s),this.Wa=Ze("forwardChannelMaxRetries",2,s),this.wa=Ze("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ci(s&&s.concurrentRequestLimit),this.Da=new _l,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Wi.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,f){Et(0),this.W=s,this.H=a||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=ro(this,null,this.W),Ln(this)};function Jr(s){if(Hi(s),s.G==3){var a=s.U++,l=Ut(s.I);if(H(l,"SID",s.K),H(l,"RID",a),H(l,"TYPE","terminate"),tn(s,l),a=new Qt(s,s.j,a),a.L=2,a.v=kn(Ut(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=so(a.j,null),a.g.ea(a.v)),a.F=Date.now(),bn(a)}no(s)}function Fn(s){s.g&&(ts(s),s.g.cancel(),s.g=null)}function Hi(s){Fn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Un(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Ln(s){if(!bi(s.h)&&!s.s){s.s=!0;var a=s.Ga;Ue||ui(),qe||(Ue(),qe=!0),Nr.add(a,s),s.B=0}}function Il(s,a){return Di(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Ge(w(s.Ga,s,a),eo(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Qt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Yi(this,I,a),l=Ut(this.I),H(l,"RID",s),H(l,"CVER",22),this.D&&H(l,"X-HTTP-Session-Id",this.D),tn(this,l),R&&(this.O?a="headers="+encodeURIComponent(String(Bi(R)))+"&"+a:this.m&&Yr(l,this.m,R)),Xr(this.h,I),this.Ua&&H(l,"TYPE","init"),this.P?(H(l,"$req",a),H(l,"SID","null"),I.T=!0,Kr(I,l,null)):Kr(I,l,a),this.G=2}}else this.G==3&&(s?Xi(this,s):this.i.length==0||bi(this.h)||Xi(this))};function Xi(s,a){var l;a?l=a.l:l=s.U++;const f=Ut(s.I);H(f,"SID",s.K),H(f,"RID",l),H(f,"AID",s.T),tn(s,f),s.m&&s.o&&Yr(f,s.m,s.o),l=new Qt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Yi(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Xr(s.h,l),Kr(l,f,a)}function tn(s,a){s.H&&at(s.H,function(l,f){H(a,f,l)}),s.l&&xi({},function(l,f){H(a,f,l)})}function Yi(s,a,l){l=Math.min(s.i.length,l);var f=s.l?w(s.l.Na,s.l,s):null;t:{var I=s.i;let R=-1;for(;;){const C=["count="+l];R==-1?0<l?(R=I[0].g,C.push("ofs="+R)):R=0:C.push("ofs="+R);let Q=!0;for(let ut=0;ut<l;ut++){let z=I[ut].g;const mt=I[ut].map;if(z-=R,0>z)R=Math.max(0,I[ut].g-100),Q=!1;else try{yl(mt,C,"req"+z+"_")}catch{f&&f(mt)}}if(Q){f=C.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,f}function Ji(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Ue||ui(),qe||(Ue(),qe=!0),Nr.add(a,s),s.v=0}}function Zr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Ge(w(s.Fa,s),eo(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Zi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Ge(w(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Fn(this),Zi(this))};function ts(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Zi(s){s.g=new Qt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Ut(s.qa);H(a,"RID","rpc"),H(a,"SID",s.K),H(a,"AID",s.T),H(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&H(a,"TO",s.ja),H(a,"TYPE","xmlhttp"),tn(s,a),s.m&&s.o&&Yr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=kn(Ut(a)),l.m=null,l.P=!0,Vi(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Fn(this),Zr(this),Et(19))};function Un(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function to(s,a){var l=null;if(s.g==a){Un(s),ts(s),s.g=null;var f=2}else if(Hr(s.h,a))l=a.D,Ni(s.h,a),f=1;else return;if(s.G!=0){if(a.o)if(f==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var I=s.B;f=Pn(),Tt(f,new Ii(f,l)),Ln(s)}else Ji(s);else if(I=a.s,I==3||I==0&&0<a.X||!(f==1&&Il(s,a)||f==2&&Zr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),I){case 1:he(s,5);break;case 4:he(s,10);break;case 3:he(s,6);break;default:he(s,2)}}}function eo(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function he(s,a){if(s.j.info("Error code "+a),a==2){var l=w(s.fb,s),f=s.Xa;const I=!f;f=new ce(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Dn(f,"https"),kn(f),I?pl(f.toString(),l):gl(f.toString(),l)}else Et(2);s.G=0,s.l&&s.l.sa(a),no(s),Hi(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function no(s){if(s.G=0,s.ka=[],s.l){const a=ki(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function ro(s,a,l){var f=l instanceof ce?Ut(l):new ce(l);if(f.g!="")a&&(f.g=a+"."+f.g),Nn(f,f.s);else{var I=c.location;f=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var R=new ce(null);f&&Dn(R,f),a&&(R.g=a),I&&Nn(R,I),l&&(R.l=l),f=R}return l=s.D,a=s.ya,l&&a&&H(f,l,a),H(f,"VER",s.la),tn(s,f),f}function so(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new J(new xn({eb:l})):new J(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function io(){}r=io.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function qn(){}qn.prototype.g=function(s,a){return new wt(s,a)};function wt(s,a){dt.call(this),this.g=new Wi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!B(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!B(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Ie(this)}b(wt,dt),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Jr(this.g)},wt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=qr(s),s=l);a.i.push(new il(a.Ya++,s)),a.G==3&&Ln(a)},wt.prototype.N=function(){this.g.l=null,delete this.j,Jr(this.g),delete this.g,wt.aa.N.call(this)};function oo(s){Br.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}b(oo,Br);function ao(){zr.call(this),this.status=1}b(ao,zr);function Ie(s){this.g=s}b(Ie,io),Ie.prototype.ua=function(){Tt(this.g,"a")},Ie.prototype.ta=function(s){Tt(this.g,new oo(s))},Ie.prototype.sa=function(s){Tt(this.g,new ao)},Ie.prototype.ra=function(){Tt(this.g,"b")},qn.prototype.createWebChannel=qn.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,ga=function(){return new qn},pa=function(){return Pn()},ma=ue,as={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sn.NO_ERROR=0,Sn.TIMEOUT=8,Sn.HTTP_ERROR=6,Qn=Sn,Ai.COMPLETE="complete",da=Ai,yi.EventType=ze,ze.OPEN="a",ze.CLOSE="b",ze.ERROR="c",ze.MESSAGE="d",dt.prototype.listen=dt.prototype.K,en=yi,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,fa=J}).apply(typeof Bn<"u"?Bn:typeof self<"u"?self:typeof window<"u"?window:{});const lo="@firebase/firestore",co="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xe="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new bl("@firebase/firestore");function we(){return pe.logLevel}function k(r,...t){if(pe.logLevel<=jt.DEBUG){const e=t.map(Rs);pe.debug(`Firestore (${xe}): ${r}`,...e)}}function zt(r,...t){if(pe.logLevel<=jt.ERROR){const e=t.map(Rs);pe.error(`Firestore (${xe}): ${r}`,...e)}}function Zt(r,...t){if(pe.logLevel<=jt.WARN){const e=t.map(Rs);pe.warn(`Firestore (${xe}): ${r}`,...e)}}function Rs(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,_a(r,n,e)}function _a(r,t,e){let n=`FIRESTORE (${xe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw zt(n),new Error(n)}function G(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||_a(t,i,n)}function L(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Dl{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ql{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class jl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Bl{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0,42304);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Bt,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Bt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string",31837,{l:n}),new ya(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string",2055,{h:t}),new _t(t)}}class zl{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $l{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new zl(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ho{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gl{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Fl(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){G(this.o===void 0,3512);const n=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,k("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ho(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(G(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ho(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Kl(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function U(r,t){return r<t?-1:r>t?1:0}function us(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),i=t.codePointAt(e);if(n!==i){if(n<128&&i<128)return U(n,i);{const o=Ta(),u=Ql(o.encode(fo(r,e)),o.encode(fo(t,e)));return u!==0?u:U(n,i)}}e+=n>65535?2:1}return U(r.length,t.length)}function fo(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function Ql(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return U(r[e],t[e]);return U(r.length,t.length)}function Ce(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="__name__";class bt{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&M(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof bt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=bt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const n=bt.isNumericId(t),i=bt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?bt.extractNumericId(t).compare(bt.extractNumericId(e)):us(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Yt.fromString(t.substring(4,t.length-2))}}class W extends bt{construct(t,e,n){return new W(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new W(e)}static emptyPath(){return new W([])}}const Wl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends bt{construct(t,e,n){return new ct(t,e,n)}static isValidIdentifier(t){return Wl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mo}static keyField(){return new ct([mo])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new N(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new N(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(n+=c,i++):(o(),i++)}if(o(),u)throw new N(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(W.fromString(t))}static fromName(t){return new O(W.fromString(t).popFirst(5))}static empty(){return new O(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new W(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(r,t,e){if(!e)throw new N(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Hl(r,t,e,n){if(t===!0&&n===!0)throw new N(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function po(r){if(!O.isDocumentKey(r))throw new N(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function go(r){if(O.isDocumentKey(r))throw new N(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function va(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function fr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function At(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=fr(r);throw new N(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(r,t){const e={typeString:r};return t&&(e.value=t),e}function gn(r,t){if(!va(r))throw new N(V.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const u=r[n];if(i&&typeof u!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new N(V.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=-62135596800,yo=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*yo);return new X(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<_o)throw new N(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yo}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(gn(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-_o;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:rt("string",X._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new X(0,0))}static max(){return new F(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=-1;function Xl(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=F.fromTimestamp(n===1e9?new X(e+1,0):new X(e,n));return new te(i,O.empty(),t)}function Yl(r){return new te(r.readTime,r.key,cn)}class te{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new te(F.min(),O.empty(),cn)}static max(){return new te(F.max(),O.empty(),cn)}}function Jl(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:U(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Zl)throw r;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,n)=>{e(t)})}static reject(t){return new P((e,n)=>{n(t)})}static waitFor(t){return new P((e,n)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},h=>n(h))}),u=!0,o===i&&e()})}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next(i=>i?P.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new P((n,i)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{u[d]=m,++c,c===o&&n(u)},m=>i(m))}})}static doWhile(t,e){return new P((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function ec(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Me(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this._e(n),this.ae=n=>e.writeSequenceNumber(n))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}dr.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=-1;function mr(r){return r==null}function Zn(r){return r===0&&1/r==-1/0}function nc(r){return typeof r=="number"&&Number.isInteger(r)&&!Zn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="";function rc(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=To(t)),t=sc(r.get(e),t);return To(t)}function sc(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case Ia:e+="";break;default:e+=o}}return e}function To(r){return r+Ia+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function oe(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Aa(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new zn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new zn(this.root,t,this.comparator,!1)}getReverseIterator(){return new zn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new zn(this.root,t,this.comparator,!0)}}class zn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new lt(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new vo(this.data.getIterator())}getIteratorFrom(t){return new vo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class vo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new st(ct.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ce(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new wa("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const ic=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(r){if(G(!!r,39018),typeof r=="string"){let t=0;const e=ic.exec(r);if(G(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:tt(r.seconds),nanos:tt(r.nanos)}}function tt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ne(r){return typeof r=="string"?ht.fromBase64String(r):ht.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="server_timestamp",Va="__type__",Pa="__previous_value__",Sa="__local_write_time__";function Ss(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Va])===null||e===void 0?void 0:e.stringValue)===Ra}function pr(r){const t=r.mapValue.fields[Pa];return Ss(t)?pr(t):t}function hn(r){const t=ee(r.mapValue.fields[Sa].timestampValue);return new X(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,e,n,i,o,u,c,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const tr="(default)";class fn{constructor(t,e){this.projectId=t,this.database=e||tr}static empty(){return new fn("","")}get isDefaultDatabase(){return this.database===tr}isEqual(t){return t instanceof fn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="__type__",ac="__max__",$n={mapValue:{}},ba="__vector__",er="value";function re(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ss(r)?4:lc(r)?9007199254740991:uc(r)?10:11:M(28295,{value:r})}function Mt(r,t){if(r===t)return!0;const e=re(r);if(e!==re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return hn(r).isEqual(hn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=ee(i.timestampValue),c=ee(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return ne(i.bytesValue).isEqual(ne(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=tt(i.doubleValue),c=tt(o.doubleValue);return u===c?Zn(u)===Zn(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return Ce(r.arrayValue.values||[],t.arrayValue.values||[],Mt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Eo(u)!==Eo(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Mt(u[h],c[h])))return!1;return!0}(r,t);default:return M(52216,{left:r})}}function dn(r,t){return(r.values||[]).find(e=>Mt(e,t))!==void 0}function be(r,t){if(r===t)return 0;const e=re(r),n=re(t);if(e!==n)return U(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=tt(o.integerValue||o.doubleValue),h=tt(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return Io(r.timestampValue,t.timestampValue);case 4:return Io(hn(r),hn(t));case 5:return us(r.stringValue,t.stringValue);case 6:return function(o,u){const c=ne(o),h=ne(u);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=U(c[d],h[d]);if(m!==0)return m}return U(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=U(tt(o.latitude),tt(u.latitude));return c!==0?c:U(tt(o.longitude),tt(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Ao(r.arrayValue,t.arrayValue);case 10:return function(o,u){var c,h,d,m;const T=o.fields||{},w=u.fields||{},S=(c=T[er])===null||c===void 0?void 0:c.arrayValue,b=(h=w[er])===null||h===void 0?void 0:h.arrayValue,x=U(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((m=b?.values)===null||m===void 0?void 0:m.length)||0);return x!==0?x:Ao(S,b)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===$n.mapValue&&u===$n.mapValue)return 0;if(o===$n.mapValue)return 1;if(u===$n.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=u.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const w=us(h[T],m[T]);if(w!==0)return w;const S=be(c[h[T]],d[m[T]]);if(S!==0)return S}return U(h.length,m.length)}(r.mapValue,t.mapValue);default:throw M(23264,{le:e})}}function Io(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return U(r,t);const e=ee(r),n=ee(t),i=U(e.seconds,n.seconds);return i!==0?i:U(e.nanos,n.nanos)}function Ao(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=be(e[i],n[i]);if(o)return o}return U(e.length,n.length)}function De(r){return ls(r)}function ls(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ee(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ne(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return O.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=ls(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${ls(e.fields[u])}`;return i+"}"}(r.mapValue):M(61005,{value:r})}function Wn(r){switch(re(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=pr(r);return t?16+Wn(t):16;case 5:return 2*r.stringValue.length;case 6:return ne(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+Wn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return oe(n.fields,(o,u)=>{i+=o.length+Wn(u)}),i}(r.mapValue);default:throw M(13486,{value:r})}}function wo(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function cs(r){return!!r&&"integerValue"in r}function Cs(r){return!!r&&"arrayValue"in r}function Ro(r){return!!r&&"nullValue"in r}function Vo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Hn(r){return!!r&&"mapValue"in r}function uc(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ca])===null||e===void 0?void 0:e.stringValue)===ba}function on(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return oe(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=on(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=on(r.arrayValue.values[e]);return t}return Object.assign({},r)}function lc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===ac}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Hn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=on(e)}setAll(t){let e=ct.emptyPath(),n={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}u?n[c.lastSegment()]=on(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());Hn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Mt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Hn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){oe(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new It(on(this.value))}}function Da(r){const t=[];return oe(r.fields,(e,n)=>{const i=new ct([e]);if(Hn(n)){const o=Da(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,n,i,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new yt(t,0,F.min(),F.min(),F.min(),It.empty(),0)}static newFoundDocument(t,e,n,i){return new yt(t,1,e,F.min(),n,i,0)}static newNoDocument(t,e){return new yt(t,2,e,F.min(),F.min(),It.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,F.min(),F.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e){this.position=t,this.inclusive=e}}function Po(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=O.comparator(O.fromName(u.referenceValue),e.key):n=be(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function So(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Mt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,e="asc"){this.field=t,this.dir=e}}function cc(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{}class nt extends Na{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new fc(t,e,n):e==="array-contains"?new pc(t,n):e==="in"?new gc(t,n):e==="not-in"?new _c(t,n):e==="array-contains-any"?new yc(t,n):new nt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new dc(t,n):new mc(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(be(e,this.value)):e!==null&&re(this.value)===re(e)&&this.matchesComparison(be(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends Na{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Ct(t,e)}matches(t){return ka(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ka(r){return r.op==="and"}function xa(r){return hc(r)&&ka(r)}function hc(r){for(const t of r.filters)if(t instanceof Ct)return!1;return!0}function hs(r){if(r instanceof nt)return r.field.canonicalString()+r.op.toString()+De(r.value);if(xa(r))return r.filters.map(t=>hs(t)).join(",");{const t=r.filters.map(e=>hs(e)).join(",");return`${r.op}(${t})`}}function Oa(r,t){return r instanceof nt?function(n,i){return i instanceof nt&&n.op===i.op&&n.field.isEqual(i.field)&&Mt(n.value,i.value)}(r,t):r instanceof Ct?function(n,i){return i instanceof Ct&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,c)=>o&&Oa(u,i.filters[c]),!0):!1}(r,t):void M(19439)}function Ma(r){return r instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${De(e.value)}`}(r):r instanceof Ct?function(e){return e.op.toString()+" {"+e.getFilters().map(Ma).join(" ,")+"}"}(r):"Filter"}class fc extends nt{constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class dc extends nt{constructor(t,e){super(t,"in",e),this.keys=Fa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class mc extends nt{constructor(t,e){super(t,"not-in",e),this.keys=Fa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Fa(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>O.fromName(n.referenceValue))}class pc extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Cs(e)&&dn(e.arrayValue,this.value)}}class gc extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&dn(this.value.arrayValue,e)}}class _c extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(dn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!dn(this.value.arrayValue,e)}}class yc extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Cs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>dn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,e=null,n=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.Pe=null}}function Co(r,t=null,e=[],n=[],i=null,o=null,u=null){return new Tc(r,t,e,n,i,o,u)}function bs(r){const t=L(r);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>hs(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),mr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>De(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>De(n)).join(",")),t.Pe=e}return t.Pe}function Ds(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!cc(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Oa(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!So(r.startAt,t.startAt)&&So(r.endAt,t.endAt)}function fs(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,e=null,n=[],i=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Ec(r,t,e,n,i,o,u,c){return new _n(r,t,e,n,i,o,u,c)}function gr(r){return new _n(r)}function bo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function La(r){return r.collectionGroup!==null}function an(r){const t=L(r);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new st(ct.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new rr(o,n))}),e.has(ct.keyField().canonicalString())||t.Te.push(new rr(ct.keyField(),n))}return t.Te}function Dt(r){const t=L(r);return t.Ie||(t.Ie=vc(t,an(r))),t.Ie}function vc(r,t){if(r.limitType==="F")return Co(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new rr(i.field,o)});const e=r.endAt?new nr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new nr(r.startAt.position,r.startAt.inclusive):null;return Co(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function ds(r,t){const e=r.filters.concat([t]);return new _n(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function ms(r,t,e){return new _n(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function _r(r,t){return Ds(Dt(r),Dt(t))&&r.limitType===t.limitType}function Ua(r){return`${bs(Dt(r))}|lt:${r.limitType}`}function Re(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Ma(i)).join(", ")}]`),mr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>De(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>De(i)).join(",")),`Target(${n})`}(Dt(r))}; limitType=${r.limitType})`}function yr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):O.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of an(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,c,h){const d=Po(u,c,h);return u.inclusive?d<=0:d<0}(n.startAt,an(n),i)||n.endAt&&!function(u,c,h){const d=Po(u,c,h);return u.inclusive?d>=0:d>0}(n.endAt,an(n),i))}(r,t)}function Ic(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function qa(r){return(t,e)=>{let n=!1;for(const i of an(r)){const o=Ac(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function Ac(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),d=c.data.field(o);return h!==null&&d!==null?be(h,d):M(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){oe(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Aa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new Y(O.comparator);function $t(){return wc}const ja=new Y(O.comparator);function nn(...r){let t=ja;for(const e of r)t=t.insert(e.key,e);return t}function Ba(r){let t=ja;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function fe(){return un()}function za(){return un()}function un(){return new _e(r=>r.toString(),(r,t)=>r.isEqual(t))}const Rc=new Y(O.comparator),Vc=new st(O.comparator);function q(...r){let t=Vc;for(const e of r)t=t.add(e);return t}const Pc=new st(U);function Sc(){return Pc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zn(t)?"-0":t}}function $a(r){return{integerValue:""+r}}function Cc(r,t){return nc(t)?$a(t):Ns(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this._=void 0}}function bc(r,t,e){return r instanceof sr?function(i,o){const u={fields:{[Va]:{stringValue:Ra},[Sa]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ss(o)&&(o=pr(o)),o&&(u.fields[Pa]=o),{mapValue:u}}(e,t):r instanceof mn?Ka(r,t):r instanceof pn?Qa(r,t):function(i,o){const u=Ga(i,o),c=Do(u)+Do(i.Ee);return cs(u)&&cs(i.Ee)?$a(c):Ns(i.serializer,c)}(r,t)}function Dc(r,t,e){return r instanceof mn?Ka(r,t):r instanceof pn?Qa(r,t):e}function Ga(r,t){return r instanceof ir?function(n){return cs(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class sr extends Tr{}class mn extends Tr{constructor(t){super(),this.elements=t}}function Ka(r,t){const e=Wa(t);for(const n of r.elements)e.some(i=>Mt(i,n))||e.push(n);return{arrayValue:{values:e}}}class pn extends Tr{constructor(t){super(),this.elements=t}}function Qa(r,t){let e=Wa(t);for(const n of r.elements)e=e.filter(i=>!Mt(i,n));return{arrayValue:{values:e}}}class ir extends Tr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Do(r){return tt(r.integerValue||r.doubleValue)}function Wa(r){return Cs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Nc(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof mn&&i instanceof mn||n instanceof pn&&i instanceof pn?Ce(n.elements,i.elements,Mt):n instanceof ir&&i instanceof ir?Mt(n.Ee,i.Ee):n instanceof sr&&i instanceof sr}(r.transform,t.transform)}class kc{constructor(t,e){this.version=t,this.transformResults=e}}class Pt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Pt}static exists(t){return new Pt(void 0,t)}static updateTime(t){return new Pt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Xn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Er{}function Ha(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ks(r.key,Pt.none()):new yn(r.key,r.data,Pt.none());{const e=r.data,n=It.empty();let i=new st(ct.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new ae(r.key,n,new Rt(i.toArray()),Pt.none())}}function xc(r,t,e){r instanceof yn?function(i,o,u){const c=i.value.clone(),h=ko(i.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof ae?function(i,o,u){if(!Xn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=ko(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(Xa(i)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function ln(r,t,e,n){return r instanceof yn?function(o,u,c,h){if(!Xn(o.precondition,u))return c;const d=o.value.clone(),m=xo(o.fieldTransforms,h,u);return d.setAll(m),u.convertToFoundDocument(u.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof ae?function(o,u,c,h){if(!Xn(o.precondition,u))return c;const d=xo(o.fieldTransforms,h,u),m=u.data;return m.setAll(Xa(o)),m.setAll(d),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(r,t,e,n):function(o,u,c){return Xn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function Oc(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=Ga(n.transform,i||null);o!=null&&(e===null&&(e=It.empty()),e.set(n.field,o))}return e||null}function No(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ce(n,i,(o,u)=>Nc(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class yn extends Er{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ae extends Er{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Xa(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function ko(r,t,e){const n=new Map;G(r.length===e.length,32656,{Ae:e.length,Re:r.length});for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,c=t.data.field(o.field);n.set(o.field,Dc(u,c,e[i]))}return n}function xo(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,bc(o,u,t))}return n}class ks extends Er{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Mc extends Er{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&xc(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ln(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ln(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=za();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const h=Ha(u,c);h!==null&&n.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Ce(this.mutations,t.mutations,(e,n)=>No(e,n))&&Ce(this.baseMutations,t.baseMutations,(e,n)=>No(e,n))}}class xs{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){G(t.mutations.length===n.length,58842,{Ve:t.mutations.length,me:n.length});let i=function(){return Rc}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new xs(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,j;function qc(r){switch(r){case V.OK:return M(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function Ya(r){if(r===void 0)return zt("GRPC error has no .code"),V.UNKNOWN;switch(r){case et.OK:return V.OK;case et.CANCELLED:return V.CANCELLED;case et.UNKNOWN:return V.UNKNOWN;case et.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case et.INTERNAL:return V.INTERNAL;case et.UNAVAILABLE:return V.UNAVAILABLE;case et.UNAUTHENTICATED:return V.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case et.NOT_FOUND:return V.NOT_FOUND;case et.ALREADY_EXISTS:return V.ALREADY_EXISTS;case et.PERMISSION_DENIED:return V.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case et.ABORTED:return V.ABORTED;case et.OUT_OF_RANGE:return V.OUT_OF_RANGE;case et.UNIMPLEMENTED:return V.UNIMPLEMENTED;case et.DATA_LOSS:return V.DATA_LOSS;default:return M(39323,{code:r})}}(j=et||(et={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=new Yt([4294967295,4294967295],0);function Oo(r){const t=Ta().encode(r),e=new ha;return e.update(t),new Uint8Array(e.digest())}function Mo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Yt([e,n],0),new Yt([i,o],0)]}class Os{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new rn(`Invalid padding: ${e}`);if(n<0)throw new rn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new rn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new rn(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Yt.fromNumber(this.fe)}pe(t,e,n){let i=t.add(e.multiply(Yt.fromNumber(n)));return i.compare(jc)===1&&(i=new Yt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=Oo(t),[n,i]=Mo(e);for(let o=0;o<this.hashCount;o++){const u=this.pe(n,i,o);if(!this.ye(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Os(o,i,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.fe===0)return;const e=Oo(t),[n,i]=Mo(e);for(let o=0;o<this.hashCount;o++){const u=this.pe(n,i,o);this.we(u)}}we(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class rn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Tn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new vr(F.min(),i,new Y(U),$t(),q())}}class Tn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Tn(n,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e,n,i){this.Se=t,this.removedTargetIds=e,this.key=n,this.be=i}}class Ja{constructor(t,e){this.targetId=t,this.De=e}}class Za{constructor(t,e,n=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Fo{constructor(){this.ve=0,this.Ce=Lo(),this.Fe=ht.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=q(),e=q(),n=q();return this.Ce.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:M(38017,{changeType:o})}}),new Tn(this.Fe,this.Me,t,e,n)}ke(){this.xe=!1,this.Ce=Lo()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Bc{constructor(t){this.We=t,this.Ge=new Map,this.ze=$t(),this.je=Gn(),this.Je=Gn(),this.He=new Y(U)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,e=>{const n=this.tt(e);switch(t.state){case 0:this.nt(e)&&n.Be(t.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(t.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(n.Ke(),n.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),n.Be(t.resumeToken));break;default:M(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach((n,i)=>{this.nt(i)&&e(i)})}it(t){const e=t.targetId,n=t.De.count,i=this.st(e);if(i){const o=i.target;if(fs(o))if(n===0){const u=new O(o.path);this.Xe(e,u,yt.newNoDocument(u,F.min()))}else G(n===1,20013,{expectedCount:n});else{const u=this.ot(e);if(u!==n){const c=this._t(t),h=c?this.ut(c,t,u):1;if(h!==0){this.rt(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=ne(n).toUint8Array()}catch(h){if(h instanceof wa)return Zt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Os(u,i,o)}catch(h){return Zt(h instanceof rn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.fe===0?null:c}ut(t,e,n){return e.De.count===n-this.ht(t,e.targetId)?0:2}ht(t,e){const n=this.We.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.We.lt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Xe(e,o,null),i++)}),i}Pt(t){const e=new Map;this.Ge.forEach((o,u)=>{const c=this.st(u);if(c){if(o.current&&fs(c.target)){const h=new O(c.target.path);this.Tt(h).has(u)||this.It(u,h)||this.Xe(u,h,yt.newNoDocument(h,t))}o.Ne&&(e.set(u,o.Le()),o.ke())}});let n=q();this.Je.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.ze.forEach((o,u)=>u.setReadTime(t));const i=new vr(t,e,this.He,this.ze,n);return this.ze=$t(),this.je=Gn(),this.Je=Gn(),this.He=new Y(U),i}Ze(t,e){if(!this.nt(t))return;const n=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,n),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,n){if(!this.nt(t))return;const i=this.tt(t);this.It(t,e)?i.qe(e,1):i.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),n&&(this.ze=this.ze.insert(e,n))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new Fo,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new st(U),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new st(U),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Fo),this.We.getRemoteKeysForTarget(t).forEach(e=>{this.Xe(t,e,null)})}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function Gn(){return new Y(O.comparator)}function Lo(){return new Y(O.comparator)}const zc={asc:"ASCENDING",desc:"DESCENDING"},$c={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gc={and:"AND",or:"OR"};class Kc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ps(r,t){return r.useProto3Json||mr(t)?t:{value:t}}function or(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function tu(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Qc(r,t){return or(r,t.toTimestamp())}function Nt(r){return G(!!r,49232),F.fromTimestamp(function(e){const n=ee(e);return new X(n.seconds,n.nanos)}(r))}function Ms(r,t){return gs(r,t).canonicalString()}function gs(r,t){const e=function(i){return new W(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function eu(r){const t=W.fromString(r);return G(ou(t),10190,{key:t.toString()}),t}function _s(r,t){return Ms(r.databaseId,t.path)}function ns(r,t){const e=eu(t);if(e.get(1)!==r.databaseId.projectId)throw new N(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new N(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O(ru(e))}function nu(r,t){return Ms(r.databaseId,t)}function Wc(r){const t=eu(r);return t.length===4?W.emptyPath():ru(t)}function ys(r){return new W(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ru(r){return G(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Uo(r,t,e){return{name:_s(r,t),fields:e.value.mapValue.fields}}function Hc(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(G(m===void 0||typeof m=="string",58123),ht.fromBase64String(m||"")):(G(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ht.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(d){const m=d.code===void 0?V.UNKNOWN:Ya(d.code);return new N(m,d.message||"")}(u);e=new Za(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=ns(r,n.document.name),o=Nt(n.document.updateTime),u=n.document.createTime?Nt(n.document.createTime):F.min(),c=new It({mapValue:{fields:n.document.fields}}),h=yt.newFoundDocument(i,o,u,c),d=n.targetIds||[],m=n.removedTargetIds||[];e=new Yn(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=ns(r,n.document),o=n.readTime?Nt(n.readTime):F.min(),u=yt.newNoDocument(i,o),c=n.removedTargetIds||[];e=new Yn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=ns(r,n.document),o=n.removedTargetIds||[];e=new Yn([],o,i,null)}else{if(!("filter"in t))return M(11601,{At:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new Uc(i,o),c=n.targetId;e=new Ja(c,u)}}return e}function Xc(r,t){let e;if(t instanceof yn)e={update:Uo(r,t.key,t.value)};else if(t instanceof ks)e={delete:_s(r,t.key)};else if(t instanceof ae)e={update:Uo(r,t.key,t.data),updateMask:ih(t.fieldMask)};else{if(!(t instanceof Mc))return M(16599,{Rt:t.type});e={verify:_s(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const c=u.transform;if(c instanceof sr)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof mn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof pn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ir)return{fieldPath:u.field.canonicalString(),increment:c.Ee};throw M(20930,{transform:u.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Qc(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(r,t.precondition)),e}function Yc(r,t){return r&&r.length>0?(G(t!==void 0,14353),r.map(e=>function(i,o){let u=i.updateTime?Nt(i.updateTime):Nt(o);return u.isEqual(F.min())&&(u=Nt(o)),new kc(u,i.transformResults||[])}(e,t))):[]}function Jc(r,t){return{documents:[nu(r,t.path)]}}function Zc(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=nu(r,i);const o=function(d){if(d.length!==0)return iu(Ct.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(d){if(d.length!==0)return d.map(m=>function(w){return{field:Ve(w.field),direction:nh(w.dir)}}(m))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=ps(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{Vt:e,parent:i}}function th(r){let t=Wc(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){G(n===1,65062);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(T){const w=su(T);return w instanceof Ct&&xa(w)?w.getFilters():[w]}(e.where));let u=[];e.orderBy&&(u=function(T){return T.map(w=>function(b){return new rr(Pe(b.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(T){let w;return w=typeof T=="object"?T.value:T,mr(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(T){const w=!!T.before,S=T.values||[];return new nr(S,w)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const w=!T.before,S=T.values||[];return new nr(S,w)}(e.endAt)),Ec(t,i,u,o,c,"F",h,d)}function eh(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function su(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Pe(e.unaryFilter.field);return nt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Pe(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Pe(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Pe(e.unaryFilter.field);return nt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(r):r.fieldFilter!==void 0?function(e){return nt.create(Pe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Ct.create(e.compositeFilter.filters.map(n=>su(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(r):M(30097,{filter:r})}function nh(r){return zc[r]}function rh(r){return $c[r]}function sh(r){return Gc[r]}function Ve(r){return{fieldPath:r.canonicalString()}}function Pe(r){return ct.fromServerFormat(r.fieldPath)}function iu(r){return r instanceof nt?function(e){if(e.op==="=="){if(Vo(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NAN"}};if(Ro(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vo(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NOT_NAN"}};if(Ro(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ve(e.field),op:rh(e.op),value:e.value}}}(r):r instanceof Ct?function(e){const n=e.getFilters().map(i=>iu(i));return n.length===1?n[0]:{compositeFilter:{op:sh(e.op),filters:n}}}(r):M(54877,{filter:r})}function ih(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ou(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t,e,n,i,o=F.min(),u=F.min(),c=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Xt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.gt=t}}function ah(r){const t=th({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ms(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.Dn=new lh}addToCollectionParentIndex(t,e){return this.Dn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(te.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(te.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class lh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new st(W.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new st(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},au=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(au,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new Ne(0)}static ur(){return new Ne(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="LruGarbageCollector",ch=1048576;function Bo([r,t],[e,n]){const i=U(r,e);return i===0?U(t,n):i}class hh{constructor(t){this.Tr=t,this.buffer=new st(Bo),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Bo(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class fh{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){k(jo,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Me(e)?k(jo,"Ignoring IndexedDB error during garbage collection: ",e):await Oe(e)}await this.Rr(3e5)})}}class dh{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return P.resolve(dr.ue);const n=new hh(e);return this.Vr.forEachTarget(t,i=>n.Er(i.sequenceNumber)).next(()=>this.Vr.gr(t,i=>n.Er(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(qo)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qo):this.pr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let n,i,o,u,c,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,u=Date.now(),this.nthSequenceNumber(t,i))).next(T=>(n=T,c=Date.now(),this.removeTargets(t,n,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(T=>(d=Date.now(),we()<=jt.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-m}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${T} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:T})))}}function mh(r,t){return new dh(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.changes=new _e(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&ln(n.mutation,i,Rt.empty(),X.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=q()){const i=fe();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=nn();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=fe();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,q()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,i){let o=$t();const u=un(),c=function(){return un()}();return e.forEach((h,d)=>{const m=n.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof ae)?o=o.insert(d.key,d):m!==void 0?(u.set(d.key,m.mutation.getFieldMask()),ln(m.mutation,d,m.mutation.getFieldMask(),X.now())):u.set(d.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>u.set(d,m)),e.forEach((d,m)=>{var T;return c.set(d,new gh(m,(T=u.get(d))!==null&&T!==void 0?T:null))}),c))}recalculateAndSaveOverlays(t,e){const n=un();let i=new Y((u,c)=>u-c),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=n.get(h)||Rt.empty();m=c.applyToLocalView(d,m),n.set(h,m);const T=(i.get(c.batchId)||q()).add(h);i=i.insert(c.batchId,T)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,T=za();m.forEach(w=>{if(!o.has(w)){const S=Ha(e.get(w),n.get(w));S!==null&&T.set(w,S),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(t,d,T))}return P.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):La(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):P.resolve(fe());let c=cn,h=o;return u.next(d=>P.forEach(d,(m,T)=>(c<T.largestBatchId&&(c=T.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,q())).next(m=>({batchId:c,changes:Ba(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(n=>{let i=nn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=nn();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,h=>{const d=function(T,w){return new _n(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(m=>{m.forEach((T,w)=>{u=u.insert(T,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((h,d)=>{const m=d.getKey();u.get(m)===null&&(u=u.insert(m,yt.newInvalidDocument(m)))});let c=nn();return u.forEach((h,d)=>{const m=o.get(h);m!==void 0&&ln(m.mutation,d,Rt.empty(),X.now()),yr(e,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return P.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Nt(i.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,function(i){return{name:i.name,query:ah(i.bundledQuery),readTime:Nt(i.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.overlays=new Y(O.comparator),this.kr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=fe();return P.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.wt(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.kr.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const i=fe(),o=e.length+1,u=new O(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Y((d,m)=>d-m);const u=this.overlays.getIterator();for(;u.hasNext();){const d=u.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=o.get(d.largestBatchId);m===null&&(m=fe(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=fe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=i)););return P.resolve(c)}wt(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Lc(e,n));let o=this.kr.get(e);o===void 0&&(o=q(),this.kr.set(e,o)),this.kr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.qr=new st(ot.Qr),this.$r=new st(ot.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const n=new ot(t,e);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Wr(new ot(t,e))}Gr(t,e){t.forEach(n=>this.removeReference(n,e))}zr(t){const e=new O(new W([])),n=new ot(e,t),i=new ot(e,t+1),o=[];return this.$r.forEachInRange([n,i],u=>{this.Wr(u),o.push(u.key)}),o}jr(){this.qr.forEach(t=>this.Wr(t))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new O(new W([])),n=new ot(e,t),i=new ot(e,t+1);let o=q();return this.$r.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new ot(t,0),n=this.qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ot{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return O.comparator(t.key,e.key)||U(t.Hr,e.Hr)}static Ur(t,e){return U(t.Hr,e.Hr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new st(ot.Qr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Fc(o,e,n,i);this.mutationQueue.push(u);for(const c of i)this.Yr=this.Yr.add(new ot(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(u)}lookupMutationBatch(t,e){return P.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Xr(n),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ps:this.er-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ot(e,0),i=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([n,i],u=>{const c=this.Zr(u.Hr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st(U);return e.forEach(i=>{const o=new ot(i,0),u=new ot(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,u],c=>{n=n.add(c.Hr)})}),P.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;O.isDocumentKey(o)||(o=o.child(""));const u=new ot(new O(o),0);let c=new st(U);return this.Yr.forEachWhile(h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(h.Hr)),!0)},u),P.resolve(this.ei(c))}ei(t){const e=[];return t.forEach(n=>{const i=this.Zr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){G(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return P.forEach(e.mutations,i=>{const o=new ot(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Yr=n})}rr(t){}containsKey(t,e){const n=new ot(e,0),i=this.Yr.firstAfterOrEqual(n);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t){this.ni=t,this.docs=function(){return new Y(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.ni(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let n=$t();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():yt.newInvalidDocument(i))}),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=$t();const u=e.path,c=new O(u.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!u.isPrefixOf(d.path))break;d.path.length>u.length+1||Jl(Yl(m),n)<=0||(i.has(m.key)||yr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,i){M(9500)}ri(t,e){return P.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Ah(this)}getSize(t){return P.resolve(this.size)}}class Ah extends ph{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Or.addEntry(t,i)):this.Or.removeEntry(n)}),P.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t){this.persistence=t,this.ii=new _e(e=>bs(e),Ds),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.si=0,this.oi=new Fs,this.targetCount=0,this._i=Ne.ar()}forEachTarget(t,e){return this.ii.forEach((n,i)=>e(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.si&&(this.si=e),P.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new Ne(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.hr(e),P.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.ii.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.ii.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.ii.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.oi.Kr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.oi.Gr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.oi.Jr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e){this.ai={},this.overlays={},this.ui=new dr(0),this.ci=!1,this.ci=!0,this.li=new Eh,this.referenceDelegate=t(this),this.hi=new wh(this),this.indexManager=new uh,this.remoteDocumentCache=function(i){return new Ih(i)}(n=>this.referenceDelegate.Pi(n)),this.serializer=new oh(e),this.Ti=new yh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Th,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ai[t.toKey()];return n||(n=new vh(e,this.referenceDelegate),this.ai[t.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,n){k("MemoryPersistence","Starting transaction:",t);const i=new Rh(this.ui.next());return this.referenceDelegate.Ii(),n(i).next(o=>this.referenceDelegate.di(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ei(t,e){return P.or(Object.values(this.ai).map(n=>()=>n.containsKey(t,e)))}}class Rh extends tc{constructor(t){super(),this.currentSequenceNumber=t}}class Ls{constructor(t){this.persistence=t,this.Ai=new Fs,this.Ri=null}static Vi(t){return new Ls(t)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(t,e,n){return this.Ai.addReference(n,e),this.mi.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.Ai.removeReference(n,e),this.mi.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach(i=>this.mi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.mi.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.mi,n=>{const i=O.fromPath(n);return this.fi(t,i).next(o=>{o||e.removeEntry(i,F.min())})}).next(()=>(this.Ri=null,e.apply(t)))}updateLimboDocument(t,e){return this.fi(t,e).next(n=>{n?this.mi.delete(e.toString()):this.mi.add(e.toString())})}Pi(t){return 0}fi(t,e){return P.or([()=>P.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class ar{constructor(t,e){this.persistence=t,this.gi=new _e(n=>rc(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=mh(this,e)}static Vi(t,e){return new ar(t,e)}Ii(){}di(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}yr(t){let e=0;return this.gr(t,n=>{e++}).next(()=>e)}gr(t,e){return P.forEach(this.gi,(n,i)=>this.Sr(t,n,i).next(o=>o?P.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ri(t,u=>this.Sr(t,u,e).next(c=>{c||(n++,o.removeEntry(u,F.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),P.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Wn(t.data.value)),e}Sr(t,e,n){return P.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.gi.get(e);return P.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Is=n,this.ds=i}static Es(t,e){let n=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Us(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Nl()?8:ec(kl())>0?6:4}()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ps(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ys(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Vh;return this.ws(t,e,u).next(c=>{if(o.result=c,this.Rs)return this.Ss(t,e,u,c.size)})}).next(()=>o.result)}Ss(t,e,n,i){return n.documentReadCount<this.Vs?(we()<=jt.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Re(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(we()<=jt.DEBUG&&k("QueryEngine","Query:",Re(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(we()<=jt.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Re(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Dt(e))):P.resolve())}ps(t,e){if(bo(e))return P.resolve(null);let n=Dt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ms(e,null,"F"),n=Dt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=q(...o);return this.gs.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const d=this.bs(e,c);return this.Ds(e,d,u,h.readTime)?this.ps(t,ms(e,null,"F")):this.vs(t,d,e,h)}))})))}ys(t,e,n,i){return bo(e)||i.isEqual(F.min())?P.resolve(null):this.gs.getDocuments(t,n).next(o=>{const u=this.bs(e,o);return this.Ds(e,u,n,i)?P.resolve(null):(we()<=jt.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Re(e)),this.vs(t,u,e,Xl(i,cn)).next(c=>c))})}bs(t,e){let n=new st(qa(t));return e.forEach((i,o)=>{yr(t,o)&&(n=n.add(o))}),n}Ds(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ws(t,e,n){return we()<=jt.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Re(e)),this.gs.getDocumentsMatchingQuery(t,e,te.min(),n)}vs(t,e,n,i){return this.gs.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="LocalStore",Sh=3e8;class Ch{constructor(t,e,n,i){this.persistence=t,this.Cs=e,this.serializer=i,this.Fs=new Y(U),this.Ms=new _e(o=>bs(o),Ds),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(n)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new _h(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Fs))}}function bh(r,t,e,n){return new Ch(r,t,e,n)}async function lu(r,t){const e=L(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let h=q();for(const d of i){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(d=>({Bs:d,removedBatchIds:u,addedBatchIds:c}))})})}function Dh(r,t){const e=L(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const T=d.batch,w=T.keys();let S=P.resolve();return w.forEach(b=>{S=S.next(()=>m.getEntry(h,b)).next(x=>{const D=d.docVersions.get(b);G(D!==null,48541),x.version.compareTo(D)<0&&(T.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),m.addEntry(x)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,T))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function cu(r){const t=L(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.hi.getLastRemoteSnapshotVersion(e))}function Nh(r,t){const e=L(r),n=t.snapshotVersion;let i=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.Os.newChangeBuffer({trackRemovals:!0});i=e.Fs;const c=[];t.targetChanges.forEach((m,T)=>{const w=i.get(T);if(!w)return;c.push(e.hi.removeMatchingKeys(o,m.removedDocuments,T).next(()=>e.hi.addMatchingKeys(o,m.addedDocuments,T)));let S=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?S=S.withResumeToken(ht.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),i=i.insert(T,S),function(x,D,$){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Sh?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(w,S,m)&&c.push(e.hi.updateTargetData(o,S))});let h=$t(),d=q();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(kh(o,u,t.documentUpdates).next(m=>{h=m.Ls,d=m.ks})),!n.isEqual(F.min())){const m=e.hi.getLastRemoteSnapshotVersion(o).next(T=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(m)}return P.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Fs=i,o))}function kh(r,t,e){let n=q(),i=q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=$t();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):k(qs,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Ls:u,ks:i}})}function xh(r,t){const e=L(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Ps),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Oh(r,t){const e=L(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.hi.getTargetData(n,t).next(o=>o?(i=o,P.resolve(i)):e.hi.allocateTargetId(n).next(u=>(i=new Xt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.hi.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(n.targetId,n),e.Ms.set(t,n.targetId)),n})}async function Ts(r,t,e){const n=L(r),i=n.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Me(u))throw u;k(qs,`Failed to update sequence numbers for target ${t}: ${u}`)}n.Fs=n.Fs.remove(t),n.Ms.delete(i.target)}function zo(r,t,e){const n=L(r);let i=F.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",u=>function(h,d,m){const T=L(h),w=T.Ms.get(m);return w!==void 0?P.resolve(T.Fs.get(w)):T.hi.getTargetData(d,m)}(n,u,Dt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>n.Cs.getDocumentsMatchingQuery(u,t,e?i:F.min(),e?o:q())).next(c=>(Mh(n,Ic(t),c),{documents:c,qs:o})))}function Mh(r,t,e){let n=r.xs.get(t)||F.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.xs.set(t,n)}class $o{constructor(){this.activeTargetIds=Sc()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Fh{constructor(){this.Fo=new $o,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,n){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new $o,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="ConnectivityMonitor";class Ko{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){k(Go,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){k(Go,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn=null;function Es(){return Kn===null?Kn=function(){return 268435456+Math.round(2147483648*Math.random())}():Kn++,"0x"+Kn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="RestConnection",Uh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qh{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===tr?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(t,e,n,i,o){const u=Es(),c=this.Go(t,e.toUriEncodedString());k(rs,`Sending RPC '${t}' ${u}:`,c,n);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,i,o);const{host:d}=new URL(c),m=ca(d);return this.jo(t,c,h,n,m).then(T=>(k(rs,`Received RPC '${t}' ${u}: `,T),T),T=>{throw Zt(rs,`RPC '${t}' ${u} failed with error: `,T,"url: ",c,"request:",n),T})}Jo(t,e,n,i,o,u){return this.Wo(t,e,n,i,o)}zo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xe}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}Go(t,e){const n=Uh[t];return`${this.$o}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class Bh extends qh{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,n,i,o){const u=Es();return new Promise((c,h)=>{const d=new fa;d.setWithCredentials(!0),d.listenOnce(da.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Qn.NO_ERROR:const T=d.getResponseJson();k(gt,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(T)),c(T);break;case Qn.TIMEOUT:k(gt,`RPC '${t}' ${u} timed out`),h(new N(V.DEADLINE_EXCEEDED,"Request time out"));break;case Qn.HTTP_ERROR:const w=d.getStatus();if(k(gt,`RPC '${t}' ${u} failed with status:`,w,"response text:",d.getResponseText()),w>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const b=S?.error;if(b&&b.status&&b.message){const x=function($){const B=$.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(B)>=0?B:V.UNKNOWN}(b.status);h(new N(x,b.message))}else h(new N(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new N(V.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:t,streamId:u,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{k(gt,`RPC '${t}' ${u} completed.`)}});const m=JSON.stringify(i);k(gt,`RPC '${t}' ${u} sending request:`,i),d.send(e,"POST",m,n,15)})}P_(t,e,n){const i=Es(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=ga(),c=pa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");k(gt,`Creating RPC '${t}' stream ${i}: ${m}`,h);const T=u.createWebChannel(m,h);this.T_(T);let w=!1,S=!1;const b=new jh({Ho:D=>{S?k(gt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(w||(k(gt,`Opening RPC '${t}' stream ${i} transport.`),T.open(),w=!0),k(gt,`RPC '${t}' stream ${i} sending:`,D),T.send(D))},Yo:()=>T.close()}),x=(D,$,B)=>{D.listen($,K=>{try{B(K)}catch(it){setTimeout(()=>{throw it},0)}})};return x(T,en.EventType.OPEN,()=>{S||(k(gt,`RPC '${t}' stream ${i} transport opened.`),b.s_())}),x(T,en.EventType.CLOSE,()=>{S||(S=!0,k(gt,`RPC '${t}' stream ${i} transport closed`),b.__(),this.I_(T))}),x(T,en.EventType.ERROR,D=>{S||(S=!0,Zt(gt,`RPC '${t}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),b.__(new N(V.UNAVAILABLE,"The operation could not be completed")))}),x(T,en.EventType.MESSAGE,D=>{var $;if(!S){const B=D.data[0];G(!!B,16349);const K=B,it=K?.error||(($=K[0])===null||$===void 0?void 0:$.error);if(it){k(gt,`RPC '${t}' stream ${i} received error:`,it);const Ft=it.status;let at=function(_){const y=et[_];if(y!==void 0)return Ya(y)}(Ft),v=it.message;at===void 0&&(at=V.INTERNAL,v="Unknown error status: "+Ft+" with message "+it.message),S=!0,b.__(new N(at,v)),T.close()}else k(gt,`RPC '${t}' stream ${i} received:`,B),b.a_(B)}}),x(c,ma.STAT_EVENT,D=>{D.stat===as.PROXY?k(gt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===as.NOPROXY&&k(gt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.o_()},0),b}terminate(){this.u_.forEach(t=>t.close()),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter(e=>e===t)}}function ss(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(r){return new Kc(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=n,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,e-n);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="PersistentStream";class fu{constructor(t,e,n,i,o,u,c,h){this.Fi=t,this.w_=n,this.S_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new hu(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(zt(e.toString()),zt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.b_===e&&this.W_(n,i)},n=>{t(()=>{const i=new N(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)})})}W_(t,e){const n=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.e_(()=>{n(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{n(()=>this.G_(i))}),this.stream.onMessage(i=>{n(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(t){return k(Qo,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget(()=>this.b_===t?e():(k(Qo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zh extends fu{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=Hc(this.serializer,t),n=function(o){if(!("targetChange"in o))return F.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?F.min():u.readTime?Nt(u.readTime):F.min()}(t);return this.listener.J_(e,n)}H_(t){const e={};e.database=ys(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=fs(h)?{documents:Jc(o,h)}:{query:Zc(o,h).Vt},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=tu(o,u.resumeToken);const d=ps(o,u.expectedCount);d!==null&&(c.expectedCount=d)}else if(u.snapshotVersion.compareTo(F.min())>0){c.readTime=or(o,u.snapshotVersion.toTimestamp());const d=ps(o,u.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const n=eh(this.serializer,t);n&&(e.labels=n),this.k_(e)}Y_(t){const e={};e.database=ys(this.serializer),e.removeTarget=t,this.k_(e)}}class $h extends fu{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return G(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){G(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Yc(t.writeResults,t.commitTime),n=Nt(t.commitTime);return this.listener.ta(n,e)}na(){const t={};t.database=ys(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Xc(this.serializer,n))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{}class Kh extends Gh{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new N(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Wo(t,gs(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(V.UNKNOWN,o.toString())})}Jo(t,e,n,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Jo(t,gs(e,n),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(V.UNKNOWN,u.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Qh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(zt(e),this._a=!1):k("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="RemoteStore";class Wh{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo(u=>{n.enqueueAndForget(async()=>{ye(this)&&(k(ge,"Restarting streams for network reachability change."),await async function(h){const d=L(h);d.Ia.add(4),await En(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Ar(d)}(this))})}),this.Aa=new Qh(n,i)}}async function Ar(r){if(ye(r))for(const t of r.da)await t(!0)}async function En(r){for(const t of r.da)await t(!1)}function du(r,t){const e=L(r);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),$s(e)?zs(e):Fe(e).x_()&&Bs(e,t))}function js(r,t){const e=L(r),n=Fe(e);e.Ta.delete(t),n.x_()&&mu(e,t),e.Ta.size===0&&(n.x_()?n.B_():ye(e)&&e.Aa.set("Unknown"))}function Bs(r,t){if(r.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Fe(r).H_(t)}function mu(r,t){r.Ra.$e(t),Fe(r).Y_(t)}function zs(r){r.Ra=new Bc({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>r.Ta.get(t)||null,lt:()=>r.datastore.serializer.databaseId}),Fe(r).start(),r.Aa.aa()}function $s(r){return ye(r)&&!Fe(r).M_()&&r.Ta.size>0}function ye(r){return L(r).Ia.size===0}function pu(r){r.Ra=void 0}async function Hh(r){r.Aa.set("Online")}async function Xh(r){r.Ta.forEach((t,e)=>{Bs(r,t)})}async function Yh(r,t){pu(r),$s(r)?(r.Aa.la(t),zs(r)):r.Aa.set("Unknown")}async function Jh(r,t,e){if(r.Aa.set("Online"),t instanceof Za&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i.Ta.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.Ta.delete(c),i.Ra.removeTarget(c))}(r,t)}catch(n){k(ge,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ur(r,n)}else if(t instanceof Yn?r.Ra.Ye(t):t instanceof Ja?r.Ra.it(t):r.Ra.et(t),!e.isEqual(F.min()))try{const n=await cu(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.Ra.Pt(u);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ta.get(d);m&&o.Ta.set(d,m.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,d)=>{const m=o.Ta.get(h);if(!m)return;o.Ta.set(h,m.withResumeToken(ht.EMPTY_BYTE_STRING,m.snapshotVersion)),mu(o,h);const T=new Xt(m.target,h,d,m.sequenceNumber);Bs(o,T)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){k(ge,"Failed to raise snapshot:",n),await ur(r,n)}}async function ur(r,t,e){if(!Me(t))throw t;r.Ia.add(1),await En(r),r.Aa.set("Offline"),e||(e=()=>cu(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{k(ge,"Retrying IndexedDB access"),await e(),r.Ia.delete(1),await Ar(r)})}function gu(r,t){return t().catch(e=>ur(r,e,t))}async function wr(r){const t=L(r),e=se(t);let n=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Ps;for(;Zh(t);)try{const i=await xh(t.localStore,n);if(i===null){t.Pa.length===0&&e.B_();break}n=i.batchId,tf(t,i)}catch(i){await ur(t,i)}_u(t)&&yu(t)}function Zh(r){return ye(r)&&r.Pa.length<10}function tf(r,t){r.Pa.push(t);const e=se(r);e.x_()&&e.Z_&&e.X_(t.mutations)}function _u(r){return ye(r)&&!se(r).M_()&&r.Pa.length>0}function yu(r){se(r).start()}async function ef(r){se(r).na()}async function nf(r){const t=se(r);for(const e of r.Pa)t.X_(e.mutations)}async function rf(r,t,e){const n=r.Pa.shift(),i=xs.from(n,t,e);await gu(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await wr(r)}async function sf(r,t){t&&se(r).Z_&&await async function(n,i){if(function(u){return qc(u)&&u!==V.ABORTED}(i.code)){const o=n.Pa.shift();se(n).N_(),await gu(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await wr(n)}}(r,t),_u(r)&&yu(r)}async function Wo(r,t){const e=L(r);e.asyncQueue.verifyOperationInProgress(),k(ge,"RemoteStore received new credentials");const n=ye(e);e.Ia.add(3),await En(e),n&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Ar(e)}async function of(r,t){const e=L(r);t?(e.Ia.delete(2),await Ar(e)):t||(e.Ia.add(2),await En(e),e.Aa.set("Unknown"))}function Fe(r){return r.Va||(r.Va=function(e,n,i){const o=L(e);return o.ia(),new zh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Zo:Hh.bind(null,r),e_:Xh.bind(null,r),n_:Yh.bind(null,r),J_:Jh.bind(null,r)}),r.da.push(async t=>{t?(r.Va.N_(),$s(r)?zs(r):r.Aa.set("Unknown")):(await r.Va.stop(),pu(r))})),r.Va}function se(r){return r.ma||(r.ma=function(e,n,i){const o=L(e);return o.ia(),new $h(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:ef.bind(null,r),n_:sf.bind(null,r),ea:nf.bind(null,r),ta:rf.bind(null,r)}),r.da.push(async t=>{t?(r.ma.N_(),await wr(r)):(await r.ma.stop(),r.Pa.length>0&&(k(ge,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,c=new Gs(t,e,u,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ks(r,t){if(zt("AsyncQueue",`${t}: ${r}`),Me(r))return new N(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static emptySet(t){return new Se(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||O.comparator(e.key,n.key):(e,n)=>O.comparator(e.key,n.key),this.keyedMap=nn(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Se)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Se;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.fa=new Y(O.comparator)}track(t){const e=t.doc.key,n=this.fa.get(e);n?t.type!==0&&n.type===3?this.fa=this.fa.insert(e,t):t.type===3&&n.type!==1?this.fa=this.fa.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.fa=this.fa.remove(e):t.type===1&&n.type===2?this.fa=this.fa.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):M(63341,{At:t,ga:n}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal((e,n)=>{t.push(n)}),t}}class ke{constructor(t,e,n,i,o,u,c,h,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new ke(t,e,Se.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_r(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(t=>t.ba())}}class uf{constructor(){this.queries=Xo(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,n){const i=L(e),o=i.queries;i.queries=Xo(),o.forEach((u,c)=>{for(const h of c.wa)h.onError(n)})})(this,new N(V.ABORTED,"Firestore shutting down"))}}function Xo(){return new _e(r=>Ua(r),_r)}async function Qs(r,t){const e=L(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.Sa()&&t.ba()&&(n=2):(o=new af,n=t.ba()?0:1);try{switch(n){case 0:o.ya=await e.onListen(i,!0);break;case 1:o.ya=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=Ks(u,`Initialization of query '${Re(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&Hs(e)}async function Ws(r,t){const e=L(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.wa.indexOf(t);u>=0&&(o.wa.splice(u,1),o.wa.length===0?i=t.ba()?0:1:!o.Sa()&&t.ba()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function lf(r,t){const e=L(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.wa)c.Ca(i)&&(n=!0);u.ya=i}}n&&Hs(e)}function cf(r,t,e){const n=L(r),i=n.queries.get(t);if(i)for(const o of i.wa)o.onError(e);n.queries.delete(t)}function Hs(r){r.Da.forEach(t=>{t.next()})}var vs,Yo;(Yo=vs||(vs={})).Fa="default",Yo.Cache="cache";class Xs{constructor(t,e,n){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new ke(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const n=e!=="Offline";return(!this.options.ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=ke.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==vs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t){this.key=t}}class Eu{constructor(t){this.key=t}}class hf{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=q(),this.mutatedKeys=q(),this.Xa=qa(t),this.eu=new Se(this.Xa)}get tu(){return this.Ha}nu(t,e){const n=e?e.ru:new Ho,i=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,T)=>{const w=i.get(m),S=yr(this.query,T)?T:null,b=!!w&&this.mutatedKeys.has(w.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;w&&S?w.data.isEqual(S.data)?b!==x&&(n.track({type:3,doc:S}),D=!0):this.iu(w,S)||(n.track({type:2,doc:S}),D=!0,(h&&this.Xa(S,h)>0||d&&this.Xa(S,d)<0)&&(c=!0)):!w&&S?(n.track({type:0,doc:S}),D=!0):w&&!S&&(n.track({type:1,doc:w}),D=!0,(h||d)&&(c=!0)),D&&(S?(u=u.add(S),o=x?o.add(m):o.delete(m)):(u=u.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const m=this.query.limitType==="F"?u.last():u.first();u=u.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{eu:u,ru:n,Ds:c,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const u=t.ru.pa();u.sort((m,T)=>function(S,b){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:D})}};return x(S)-x(b)}(m.type,T.type)||this.Xa(m.doc,T.doc)),this.su(n),i=i!=null&&i;const c=e&&!i?this.ou():[],h=this.Za.size===0&&this.current&&!i?1:0,d=h!==this.Ya;return this.Ya=h,u.length!==0||d?{snapshot:new ke(this.query,t.eu,o,u,t.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Ho,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=q(),this.eu.forEach(n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))});const e=[];return t.forEach(n=>{this.Za.has(n)||e.push(new Eu(n))}),this.Za.forEach(n=>{t.has(n)||e.push(new Tu(n))}),e}uu(t){this.Ha=t.qs,this.Za=q();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return ke.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ys="SyncEngine";class ff{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class df{constructor(t){this.key=t,this.lu=!1}}class mf{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new _e(c=>Ua(c),_r),this.Tu=new Map,this.Iu=new Set,this.du=new Y(O.comparator),this.Eu=new Map,this.Au=new Fs,this.Ru={},this.Vu=new Map,this.mu=Ne.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function pf(r,t,e=!0){const n=Vu(r);let i;const o=n.Pu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.cu()):i=await vu(n,t,e,!0),i}async function gf(r,t){const e=Vu(r);await vu(e,t,!0,!1)}async function vu(r,t,e,n){const i=await Oh(r.localStore,Dt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await _f(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&du(r.remoteStore,i),c}async function _f(r,t,e,n,i){r.gu=(T,w,S)=>async function(x,D,$,B){let K=D.view.nu($);K.Ds&&(K=await zo(x.localStore,D.query,!1).then(({documents:v})=>D.view.nu(v,K)));const it=B&&B.targetChanges.get(D.targetId),Ft=B&&B.targetMismatches.get(D.targetId)!=null,at=D.view.applyChanges(K,x.isPrimaryClient,it,Ft);return Zo(x,D.targetId,at._u),at.snapshot}(r,T,w,S);const o=await zo(r.localStore,t,!0),u=new hf(t,o.qs),c=u.nu(o.documents),h=Tn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=u.applyChanges(c,r.isPrimaryClient,h);Zo(r,e,d._u);const m=new ff(t,e,u);return r.Pu.set(t,m),r.Tu.has(e)?r.Tu.get(e).push(t):r.Tu.set(e,[t]),d.snapshot}async function yf(r,t,e){const n=L(r),i=n.Pu.get(t),o=n.Tu.get(i.targetId);if(o.length>1)return n.Tu.set(i.targetId,o.filter(u=>!_r(u,t))),void n.Pu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Ts(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&js(n.remoteStore,i.targetId),Is(n,i.targetId)}).catch(Oe)):(Is(n,i.targetId),await Ts(n.localStore,i.targetId,!0))}async function Tf(r,t){const e=L(r),n=e.Pu.get(t),i=e.Tu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),js(e.remoteStore,n.targetId))}async function Ef(r,t,e){const n=Pf(r);try{const i=await function(u,c){const h=L(u),d=X.now(),m=c.reduce((S,b)=>S.add(b.key),q());let T,w;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let b=$t(),x=q();return h.Os.getEntries(S,m).next(D=>{b=D,b.forEach(($,B)=>{B.isValidDocument()||(x=x.add($))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,b)).next(D=>{T=D;const $=[];for(const B of c){const K=Oc(B,T.get(B.key).overlayedDocument);K!=null&&$.push(new ae(B.key,K,Da(K.value.mapValue),Pt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,$,c)}).next(D=>{w=D;const $=D.applyToLocalDocumentSet(T,x);return h.documentOverlayCache.saveOverlays(S,D.batchId,$)})}).then(()=>({batchId:w.batchId,changes:Ba(T)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(u,c,h){let d=u.Ru[u.currentUser.toKey()];d||(d=new Y(U)),d=d.insert(c,h),u.Ru[u.currentUser.toKey()]=d}(n,i.batchId,e),await vn(n,i.changes),await wr(n.remoteStore)}catch(i){const o=Ks(i,"Failed to persist write");e.reject(o)}}async function Iu(r,t){const e=L(r);try{const n=await Nh(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Eu.get(o);u&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.lu=!0:i.modifiedDocuments.size>0?G(u.lu,14607):i.removedDocuments.size>0&&(G(u.lu,42227),u.lu=!1))}),await vn(e,n,t)}catch(n){await Oe(n)}}function Jo(r,t,e){const n=L(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Pu.forEach((o,u)=>{const c=u.view.va(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const h=L(u);h.onlineState=c;let d=!1;h.queries.forEach((m,T)=>{for(const w of T.wa)w.va(c)&&(d=!0)}),d&&Hs(h)}(n.eventManager,t),i.length&&n.hu.J_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function vf(r,t,e){const n=L(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Eu.get(t),o=i&&i.key;if(o){let u=new Y(O.comparator);u=u.insert(o,yt.newNoDocument(o,F.min()));const c=q().add(o),h=new vr(F.min(),new Map,new Y(U),u,c);await Iu(n,h),n.du=n.du.remove(o),n.Eu.delete(t),Js(n)}else await Ts(n.localStore,t,!1).then(()=>Is(n,t,e)).catch(Oe)}async function If(r,t){const e=L(r),n=t.batch.batchId;try{const i=await Dh(e.localStore,t);wu(e,n,null),Au(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await vn(e,i)}catch(i){await Oe(i)}}async function Af(r,t,e){const n=L(r);try{const i=await function(u,c){const h=L(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(T=>(G(T!==null,37113),m=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(n.localStore,t);wu(n,t,e),Au(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await vn(n,i)}catch(i){await Oe(i)}}function Au(r,t){(r.Vu.get(t)||[]).forEach(e=>{e.resolve()}),r.Vu.delete(t)}function wu(r,t,e){const n=L(r);let i=n.Ru[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Ru[n.currentUser.toKey()]=i}}function Is(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Tu.get(t))r.Pu.delete(n),e&&r.hu.pu(n,e);r.Tu.delete(t),r.isPrimaryClient&&r.Au.zr(t).forEach(n=>{r.Au.containsKey(n)||Ru(r,n)})}function Ru(r,t){r.Iu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(js(r.remoteStore,e),r.du=r.du.remove(t),r.Eu.delete(e),Js(r))}function Zo(r,t,e){for(const n of e)n instanceof Tu?(r.Au.addReference(n.key,t),wf(r,n)):n instanceof Eu?(k(Ys,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,t),r.Au.containsKey(n.key)||Ru(r,n.key)):M(19791,{yu:n})}function wf(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Iu.has(n)||(k(Ys,"New document in limbo: "+e),r.Iu.add(n),Js(r))}function Js(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const e=new O(W.fromString(t)),n=r.mu.next();r.Eu.set(n,new df(e)),r.du=r.du.insert(e,n),du(r.remoteStore,new Xt(Dt(gr(e.path)),n,"TargetPurposeLimboResolution",dr.ue))}}async function vn(r,t,e){const n=L(r),i=[],o=[],u=[];n.Pu.isEmpty()||(n.Pu.forEach((c,h)=>{u.push(n.gu(h,t,e).then(d=>{var m;if((d||e)&&n.isPrimaryClient){const T=d?!d.fromCache:(m=e?.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){i.push(d);const T=Us.Es(h.targetId,d);o.push(T)}}))}),await Promise.all(u),n.hu.J_(i),await async function(h,d){const m=L(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>P.forEach(d,w=>P.forEach(w.Is,S=>m.persistence.referenceDelegate.addReference(T,w.targetId,S)).next(()=>P.forEach(w.ds,S=>m.persistence.referenceDelegate.removeReference(T,w.targetId,S)))))}catch(T){if(!Me(T))throw T;k(qs,"Failed to update sequence numbers: "+T)}for(const T of d){const w=T.targetId;if(!T.fromCache){const S=m.Fs.get(w),b=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(b);m.Fs=m.Fs.insert(w,x)}}}(n.localStore,o))}async function Rf(r,t){const e=L(r);if(!e.currentUser.isEqual(t)){k(Ys,"User change. New user:",t.toKey());const n=await lu(e.localStore,t);e.currentUser=t,function(o,u){o.Vu.forEach(c=>{c.forEach(h=>{h.reject(new N(V.CANCELLED,u))})}),o.Vu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await vn(e,n.Bs)}}function Vf(r,t){const e=L(r),n=e.Eu.get(t);if(n&&n.lu)return q().add(n.key);{let i=q();const o=e.Tu.get(t);if(!o)return i;for(const u of o){const c=e.Pu.get(u);i=i.unionWith(c.view.tu)}return i}}function Vu(r){const t=L(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Iu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=vf.bind(null,t),t.hu.J_=lf.bind(null,t.eventManager),t.hu.pu=cf.bind(null,t.eventManager),t}function Pf(r){const t=L(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=If.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Af.bind(null,t),t}class lr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ir(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return bh(this.persistence,new Ph,t.initialUser,this.serializer)}Du(t){return new uu(Ls.Vi,this.serializer)}bu(t){return new Fh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lr.provider={build:()=>new lr};class Sf extends lr{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){G(this.persistence.referenceDelegate instanceof ar,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new fh(n,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new uu(n=>ar.Vi(n,e),this.serializer)}}class As{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Jo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rf.bind(null,this.syncEngine),await of(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new uf}()}createDatastore(t){const e=Ir(t.databaseInfo.databaseId),n=function(o){return new Bh(o)}(t.databaseInfo);return function(o,u,c,h){return new Kh(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,c){return new Wh(n,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Jo(this.syncEngine,e,0),function(){return Ko.C()?new Ko:new Lh}())}createSyncEngine(t,e){return function(i,o,u,c,h,d,m){const T=new mf(i,o,u,c,h,d);return m&&(T.fu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=L(i);k(ge,"RemoteStore shutting down."),o.Ia.add(5),await En(o),o.Ea.shutdown(),o.Aa.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}As.provider={build:()=>new As};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):zt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="FirestoreClient";class Cf{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=Vs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{k(ie,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(k(ie,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ks(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function is(r,t){r.asyncQueue.verifyOperationInProgress(),k(ie,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await lu(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>{Zt("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{k("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{Zt("Terminating Firestore due to IndexedDb database deletion failed",i)})}),r._offlineComponents=t}async function ta(r,t){r.asyncQueue.verifyOperationInProgress();const e=await bf(r);k(ie,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Wo(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Wo(t.remoteStore,i)),r._onlineComponents=t}async function bf(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){k(ie,"Using user provided OfflineComponentProvider");try{await is(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Zt("Error using user provided cache. Falling back to memory cache: "+e),await is(r,new lr)}}else k(ie,"Using default OfflineComponentProvider"),await is(r,new Sf(void 0));return r._offlineComponents}async function Pu(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(k(ie,"Using user provided OnlineComponentProvider"),await ta(r,r._uninitializedComponentsProvider._online)):(k(ie,"Using default OnlineComponentProvider"),await ta(r,new As))),r._onlineComponents}function Df(r){return Pu(r).then(t=>t.syncEngine)}async function cr(r){const t=await Pu(r),e=t.eventManager;return e.onListen=pf.bind(null,t.syncEngine),e.onUnlisten=yf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=gf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Tf.bind(null,t.syncEngine),e}function Nf(r,t,e={}){const n=new Bt;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,d){const m=new Zs({next:w=>{m.Ou(),u.enqueueAndForget(()=>Ws(o,T));const S=w.docs.has(c);!S&&w.fromCache?d.reject(new N(V.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&h&&h.source==="server"?d.reject(new N(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),T=new Xs(gr(c.path),m,{includeMetadataChanges:!0,ka:!0});return Qs(o,T)}(await cr(r),r.asyncQueue,t,e,n)),n.promise}function kf(r,t,e={}){const n=new Bt;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,d){const m=new Zs({next:w=>{m.Ou(),u.enqueueAndForget(()=>Ws(o,T)),w.fromCache&&h.source==="server"?d.reject(new N(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),T=new Xs(c,m,{includeMetadataChanges:!0,ka:!0});return Qs(o,T)}(await cr(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="firestore.googleapis.com",na=!0;class ra{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new N(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cu,this.ssl=na}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:na;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=au;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ch)throw new N(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Su((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Rr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ra({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ra(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ql;switch(n.type){case"firstParty":return new $l(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ea.get(e);n&&(k("ComponentProvider","Removing Datastore"),ea.delete(e),n.terminate())}(this),Promise.resolve()}}function xf(r,t,e,n={}){var i;r=At(r,Rr);const o=ca(t),u=r._getSettings(),c=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),h=`${t}:${e}`;o&&(Vl(`https://${h}`),Pl("Firestore",!0)),u.host!==Cu&&u.host!==h&&Zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},u),{host:h,ssl:o,emulatorOptions:n});if(!Sl(d,c)&&(r._setSettings(d),n.mockUserToken)){let m,T;if(typeof n.mockUserToken=="string")m=n.mockUserToken,T=_t.MOCK_USER;else{m=Cl(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const w=n.mockUserToken.sub||n.mockUserToken.user_id;if(!w)throw new N(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new _t(w)}r._authCredentials=new jl(new ya(m,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Te(this.firestore,t,this._query)}}class Z{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Z(this.firestore,t,this._key)}toJSON(){return{type:Z._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(gn(e,Z._jsonSchema))return new Z(t,n||null,new O(W.fromString(e.referencePath)))}}Z._jsonSchemaVersion="firestore/documentReference/1.0",Z._jsonSchema={type:rt("string",Z._jsonSchemaVersion),referencePath:rt("string")};class Jt extends Te{constructor(t,e,n){super(t,e,gr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Z(this.firestore,null,new O(t))}withConverter(t){return new Jt(this.firestore,t,this._path)}}function nd(r,t,...e){if(r=Ot(r),Ea("collection","path",t),r instanceof Rr){const n=W.fromString(t,...e);return go(n),new Jt(r,null,n)}{if(!(r instanceof Z||r instanceof Jt))throw new N(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return go(n),new Jt(r.firestore,null,n)}}function Of(r,t,...e){if(r=Ot(r),arguments.length===1&&(t=Vs.newId()),Ea("doc","path",t),r instanceof Rr){const n=W.fromString(t,...e);return po(n),new Z(r,null,new O(n))}{if(!(r instanceof Z||r instanceof Jt))throw new N(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return po(n),new Z(r.firestore,r instanceof Jt?r.converter:null,new O(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="AsyncQueue";class ia{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new hu(this,"async_queue_retry"),this.oc=()=>{const n=ss();n&&k(sa,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=t;const e=ss();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=ss();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const e=new Bt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Me(t))throw t;k(sa,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const e=this._c.then(()=>(this.nc=!0,t().catch(n=>{throw this.tc=n,this.nc=!1,zt("INTERNAL UNHANDLED ERROR: ",oa(n)),n}).then(n=>(this.nc=!1,n))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const i=Gs.createAndSchedule(this,t,e,n,o=>this.lc(o));return this.ec.push(i),i}ac(){this.tc&&M(47125,{hc:oa(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function oa(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(r,["next","error","complete"])}class Gt extends Rr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new ia,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ia(t),this._firestoreClient=void 0,await t}}}function Mf(r,t){const e=typeof r=="object"?r:Al(),n=typeof r=="string"?r:tr,i=wl(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Rl("firestore");o&&xf(i,...o)}return i}function Vr(r){if(r._terminated)throw new N(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ff(r),r._firestoreClient}function Ff(r){var t,e,n;const i=r._freezeSettings(),o=function(c,h,d,m){return new oc(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Su(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Cf(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c?._online.build();return{_offline:c?._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vt(ht.fromBase64String(t))}catch(e){throw new N(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Vt(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(gn(t,Vt._jsonSchema))return Vt.fromBase64String(t.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:rt("string",Vt._jsonSchemaVersion),bytes:rt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kt._jsonSchemaVersion}}static fromJSON(t){if(gn(t,kt._jsonSchema))return new kt(t.latitude,t.longitude)}}kt._jsonSchemaVersion="firestore/geoPoint/1.0",kt._jsonSchema={type:rt("string",kt._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(gn(t,xt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new xt(t.vectorValues);throw new N(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xt._jsonSchemaVersion="firestore/vectorValue/1.0",xt._jsonSchema={type:rt("string",xt._jsonSchemaVersion),vectorValues:rt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=/^__.*__$/;class Uf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new yn(t,this.data,e,this.fieldTransforms)}}class bu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ae(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Du(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:r})}}class ei{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new ei(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:n,mc:!1});return i.fc(t),i}gc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return hr(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(Du(this.Ec)&&Lf.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class qf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ir(t)}Dc(t,e,n,i=!1){return new ei({Ec:t,methodName:e,bc:n,path:ct.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sr(r){const t=r._freezeSettings(),e=Ir(r._databaseId);return new qf(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Nu(r,t,e,n,i,o={}){const u=r.Dc(o.merge||o.mergeFields?2:0,t,e,i);ni("Data must be an object, but it was:",u,n);const c=ku(n,u);let h,d;if(o.merge)h=new Rt(u.fieldMask),d=u.fieldTransforms;else if(o.mergeFields){const m=[];for(const T of o.mergeFields){const w=ws(t,T,e);if(!u.contains(w))throw new N(V.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Ou(m,w)||m.push(w)}h=new Rt(m),d=u.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=u.fieldTransforms;return new Uf(new It(c),h,d)}class Cr extends ti{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Cr}}function jf(r,t,e,n){const i=r.Dc(1,t,e);ni("Data must be an object, but it was:",i,n);const o=[],u=It.empty();oe(n,(h,d)=>{const m=ri(t,h,e);d=Ot(d);const T=i.gc(m);if(d instanceof Cr)o.push(m);else{const w=In(d,T);w!=null&&(o.push(m),u.set(m,w))}});const c=new Rt(o);return new bu(u,c,i.fieldTransforms)}function Bf(r,t,e,n,i,o){const u=r.Dc(1,t,e),c=[ws(t,n,e)],h=[i];if(o.length%2!=0)throw new N(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(ws(t,o[w])),h.push(o[w+1]);const d=[],m=It.empty();for(let w=c.length-1;w>=0;--w)if(!Ou(d,c[w])){const S=c[w];let b=h[w];b=Ot(b);const x=u.gc(S);if(b instanceof Cr)d.push(S);else{const D=In(b,x);D!=null&&(d.push(S),m.set(S,D))}}const T=new Rt(d);return new bu(m,T,u.fieldTransforms)}function zf(r,t,e,n=!1){return In(e,r.Dc(n?4:3,t))}function In(r,t){if(xu(r=Ot(r)))return ni("Unsupported field value:",t,r),ku(r,t);if(r instanceof ti)return function(n,i){if(!Du(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return function(n,i){const o=[];let u=0;for(const c of n){let h=In(c,i.yc(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=Ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Cc(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=X.fromDate(n);return{timestampValue:or(i.serializer,o)}}if(n instanceof X){const o=new X(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:or(i.serializer,o)}}if(n instanceof kt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Vt)return{bytesValue:tu(i.serializer,n._byteString)};if(n instanceof Z){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ms(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof xt)return function(u,c){return{mapValue:{fields:{[Ca]:{stringValue:ba},[er]:{arrayValue:{values:u.toArray().map(d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Ns(c.serializer,d)})}}}}}}(n,i);throw i.wc(`Unsupported field value: ${fr(n)}`)}(r,t)}function ku(r,t){const e={};return Aa(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):oe(r,(n,i)=>{const o=In(i,t.Vc(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function xu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof X||r instanceof kt||r instanceof Vt||r instanceof Z||r instanceof ti||r instanceof xt)}function ni(r,t,e){if(!xu(e)||!va(e)){const n=fr(e);throw n==="an object"?t.wc(r+" a custom object"):t.wc(r+" "+n)}}function ws(r,t,e){if((t=Ot(t))instanceof Pr)return t._internalPath;if(typeof t=="string")return ri(r,t);throw hr("Field path arguments must be of type string or ",r,!1,void 0,e)}const $f=new RegExp("[~\\*/\\[\\]]");function ri(r,t,e){if(t.search($f)>=0)throw hr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Pr(...t.split("."))._internalPath}catch{throw hr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function hr(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${n}`),u&&(h+=` in document ${i}`),h+=")"),new N(V.INVALID_ARGUMENT,c+r+h)}function Ou(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Z(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Gf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(si("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Gf extends Mu{data(){return super.data()}}function si(r,t){return typeof t=="string"?ri(r,t):t instanceof Pr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ii{}class Kf extends ii{}function rd(r,t,...e){let n=[];t instanceof ii&&n.push(t),n=n.concat(e),function(o){const u=o.filter(h=>h instanceof oi).length,c=o.filter(h=>h instanceof br).length;if(u>1||u>0&&c>0)throw new N(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class br extends Kf{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new br(t,e,n)}_apply(t){const e=this._parse(t);return Lu(t._query,e),new Te(t.firestore,t.converter,ds(t._query,e))}_parse(t){const e=Sr(t.firestore);return function(o,u,c,h,d,m,T){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){la(T,m);const b=[];for(const x of T)b.push(ua(h,o,x));w={arrayValue:{values:b}}}else w=ua(h,o,T)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||la(T,m),w=zf(c,u,T,m==="in"||m==="not-in");return nt.create(d,m,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function sd(r,t,e){const n=t,i=si("where",r);return br._create(i,n,e)}class oi extends ii{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new oi(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Ct.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let u=i;const c=o.getFlattenedFilters();for(const h of c)Lu(u,h),u=ds(u,h)}(t._query,e),new Te(t.firestore,t.converter,ds(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ua(r,t,e){if(typeof(e=Ot(e))=="string"){if(e==="")throw new N(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!La(t)&&e.indexOf("/")!==-1)throw new N(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(W.fromString(e));if(!O.isDocumentKey(n))throw new N(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return wo(r,new O(n))}if(e instanceof Z)return wo(r,e._key);throw new N(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fr(e)}.`)}function la(r,t){if(!Array.isArray(r)||r.length===0)throw new N(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Lu(r,t){const e=function(i,o){for(const u of i)for(const c of u.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Qf{convertValue(t,e="none"){switch(re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return oe(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[er].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(u=>tt(u.doubleValue));return new xt(o)}convertGeoPoint(t){return new kt(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=pr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(hn(t));default:return null}}convertTimestamp(t){const e=ee(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=W.fromString(t);G(ou(n),9688,{name:t});const i=new fn(n.get(1),n.get(3)),o=new O(n.popFirst(5));return i.isEqual(e)||zt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(r,t,e){let n;return n=r?r.toFirestore(t):t,n}class sn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class de extends Mu{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Jn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(si("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=de._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}de._jsonSchemaVersion="firestore/documentSnapshot/1.0",de._jsonSchema={type:rt("string",de._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class Jn extends de{data(t={}){return super.data(t)}}class me{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new sn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Jn(this._firestore,this._userDataWriter,n.key,n,new sn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(c=>{const h=new Jn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new sn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Jn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new sn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return c.type!==0&&(d=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),m=u.indexOf(c.doc.key)),{type:Wf(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=me._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Vs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Wf(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(r){r=At(r,Z);const t=At(r.firestore,Gt);return Nf(Vr(t),r._key).then(e=>qu(t,r,e))}me._jsonSchemaVersion="firestore/querySnapshot/1.0",me._jsonSchema={type:rt("string",me._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};class ai extends Qf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Vt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Z(this.firestore,null,e)}}function od(r){r=At(r,Te);const t=At(r.firestore,Gt),e=Vr(t),n=new ai(t);return Fu(r._query),kf(e,r._query).then(i=>new me(t,n,r,i))}function ad(r,t,e){r=At(r,Z);const n=At(r.firestore,Gt),i=Uu(r.converter,t);return Dr(n,[Nu(Sr(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,Pt.none())])}function ud(r,t,e,...n){r=At(r,Z);const i=At(r.firestore,Gt),o=Sr(i);let u;return u=typeof(t=Ot(t))=="string"||t instanceof Pr?Bf(o,"updateDoc",r._key,t,e,n):jf(o,"updateDoc",r._key,t),Dr(i,[u.toMutation(r._key,Pt.exists(!0))])}function ld(r){return Dr(At(r.firestore,Gt),[new ks(r._key,Pt.none())])}function cd(r,t){const e=At(r.firestore,Gt),n=Of(r),i=Uu(r.converter,t);return Dr(e,[Nu(Sr(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,Pt.exists(!1))]).then(()=>n)}function hd(r,...t){var e,n,i;r=Ot(r);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof t[u]!="object"||aa(t[u])||(o=t[u++]);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(aa(t[u])){const T=t[u];t[u]=(e=T.next)===null||e===void 0?void 0:e.bind(T),t[u+1]=(n=T.error)===null||n===void 0?void 0:n.bind(T),t[u+2]=(i=T.complete)===null||i===void 0?void 0:i.bind(T)}let h,d,m;if(r instanceof Z)d=At(r.firestore,Gt),m=gr(r._key.path),h={next:T=>{t[u]&&t[u](qu(d,r,T))},error:t[u+1],complete:t[u+2]};else{const T=At(r,Te);d=At(T.firestore,Gt),m=T._query;const w=new ai(d);h={next:S=>{t[u]&&t[u](new me(d,w,T,S))},error:t[u+1],complete:t[u+2]},Fu(r._query)}return function(w,S,b,x){const D=new Zs(x),$=new Xs(S,D,b);return w.asyncQueue.enqueueAndForget(async()=>Qs(await cr(w),$)),()=>{D.Ou(),w.asyncQueue.enqueueAndForget(async()=>Ws(await cr(w),$))}}(Vr(d),m,c,h)}function Dr(r,t){return function(n,i){const o=new Bt;return n.asyncQueue.enqueueAndForget(async()=>Ef(await Df(n),i,o)),o.promise}(Vr(r),t)}function qu(r,t,e){const n=e.docs.get(t._key),i=new ai(r);return new de(r,i,t._key,n,new sn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){xe=i})(xl),Ol(new Ml("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new Gt(new Bl(n.getProvider("auth-internal")),new Gl(u,n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fn(d.options.projectId,m)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),os(lo,co,t),os(lo,co,"esm2017")})();var Hf="firebase",Xf="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */os(Hf,Xf,"app");const Yf={apiKey:"AIzaSyAc8uuxvM7CkOrY5bbc5p1yjzLLINoRr1g",authDomain:"harmonies-locales.firebaseapp.com",projectId:"harmonies-locales",storageBucket:"harmonies-locales.firebasestorage.app",messagingSenderId:"383478262217",appId:"1:383478262217:web:d9b3727bbdeb4da6b12018",measurementId:"G-C5FWCQB13Z"},ju=Ul(Yf),Jf=Mf(ju),Zf=Ll(ju),fd=Object.freeze(Object.defineProperty({__proto__:null,auth:Zf,db:Jf},Symbol.toStringTag,{value:"Module"}));export{Of as a,id as b,nd as c,Jf as d,cd as e,ld as f,od as g,fd as h,hd as o,rd as q,ad as s,ud as u,sd as w};
