const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainLayout-DJWGE0S-.js","assets/QSpinner-DySJdxf2.js","assets/QBtn-BAGuL1f9.js","assets/QTooltip-DbcdaYcY.js","assets/focus-manager-BJWzFvJg.js","assets/MainLayout-DMZ7MZxk.css","assets/AccueilPage-DGw5E7Q5.js","assets/QCardSection-DiPhpq1x.js","assets/QPage-CoaxcoGq.js","assets/firebase-CKH9GCJR.js","assets/AccueilPage-CjIeU_sc.css","assets/LoginPage-DN8ociRT.js","assets/QInput-CMMqmE8M.js","assets/QForm-BMnk-5Pl.js","assets/LoginPage-B8Cv7L0o.css","assets/CalendrierPage-Cc_-sZ_T.js","assets/ClosePopup-CMw7oFdM.js","assets/CalendrierPage-CRHyUSra.css","assets/ArchivePage-CfzeULfv.js","assets/ArchivePage-Cv4hUW_e.css","assets/ErrorNotFound-DRnTRg8R.js"])))=>i.map(i=>d[i]);
const yu=function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),bu=function(e){return"/Harmonies-Locales/"+e},to={},zt=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=o(n.map(l=>{if(l=bu(l),l in to)return;to[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":yu,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function vi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const oe={},ln=[],Ze=()=>{},wu=()=>!1,Xr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),yi=e=>e.startsWith("onUpdate:"),he=Object.assign,bi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Eu=Object.prototype.hasOwnProperty,te=(e,t)=>Eu.call(e,t),V=Array.isArray,un=e=>cr(e)==="[object Map]",ja=e=>cr(e)==="[object Set]",Iu=e=>cr(e)==="[object RegExp]",q=e=>typeof e=="function",ue=e=>typeof e=="string",Ut=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Va=e=>(le(e)||q(e))&&q(e.then)&&q(e.catch),Wa=Object.prototype.toString,cr=e=>Wa.call(e),Su=e=>cr(e).slice(8,-1),Ka=e=>cr(e)==="[object Object]",wi=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mn=vi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Tu=/-(\w)/g,Ue=Zr(e=>e.replace(Tu,(t,n)=>n?n.toUpperCase():"")),Cu=/\B([A-Z])/g,en=Zr(e=>e.replace(Cu,"-$1").toLowerCase()),es=Zr(e=>e.charAt(0).toUpperCase()+e.slice(1)),ys=Zr(e=>e?`on${es(e)}`:""),Nt=(e,t)=>!Object.is(e,t),Dn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},za=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Au=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Pu=e=>{const t=ue(e)?Number(e):NaN;return isNaN(t)?e:t};let no;const ts=()=>no||(no=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ei(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ue(r)?xu(r):Ei(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(ue(e)||le(e))return e}const Ru=/;(?![^(]*\))/g,ku=/:([^]+)/,Ou=/\/\*[^]*?\*\//g;function xu(e){const t={};return e.replace(Ou,"").split(Ru).forEach(n=>{if(n){const r=n.split(ku);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ii(e){let t="";if(ue(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const r=Ii(e[n]);r&&(t+=r+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Nu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lu=vi(Nu);function qa(e){return!!e||e===""}const Ga=e=>!!(e&&e.__v_isRef===!0),Mu=e=>ue(e)?e:e==null?"":V(e)||le(e)&&(e.toString===Wa||!q(e.toString))?Ga(e)?Mu(e.value):JSON.stringify(e,Ja,2):String(e),Ja=(e,t)=>Ga(t)?Ja(e,t.value):un(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[bs(r,i)+" =>"]=s,n),{})}:ja(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>bs(n))}:Ut(t)?bs(t):le(t)&&!V(t)&&!Ka(t)?String(t):t,bs=(e,t="")=>{var n;return Ut(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class Du{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Oe,!t&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Uu(){return Oe}let ce;const ws=new WeakSet;class Ya{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ws.has(this)&&(ws.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ro(this),Za(this);const t=ce,n=je;ce=this,je=!0;try{return this.fn()}finally{ec(this),ce=t,je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ci(t);this.deps=this.depsTail=void 0,ro(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ws.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ws(this)&&this.run()}get dirty(){return Ws(this)}}let Qa=0,Un,Fn;function Xa(e,t=!1){if(e.flags|=8,t){e.next=Fn,Fn=e;return}e.next=Un,Un=e}function Si(){Qa++}function Ti(){if(--Qa>0)return;if(Fn){let t=Fn;for(Fn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Un;){let t=Un;for(Un=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Za(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ec(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ci(r),Fu(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Ws(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(tc(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function tc(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Gn))return;e.globalVersion=Gn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Ws(e)){e.flags&=-3;return}const n=ce,r=je;ce=e,je=!0;try{Za(e);const s=e.fn(e._value);(t.version===0||Nt(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ce=n,je=r,ec(e),e.flags&=-3}}function Ci(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ci(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Fu(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let je=!0;const nc=[];function Ft(){nc.push(je),je=!1}function Ht(){const e=nc.pop();je=e===void 0?!0:e}function ro(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ce;ce=void 0;try{t()}finally{ce=n}}}let Gn=0;class Hu{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ai{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!ce||!je||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new Hu(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,rc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=r)}return n}trigger(t){this.version++,Gn++,this.notify(t)}notify(t){Si();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ti()}}}function rc(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)rc(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ks=new WeakMap,Jt=Symbol(""),zs=Symbol(""),Jn=Symbol("");function _e(e,t,n){if(je&&ce){let r=Ks.get(e);r||Ks.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ai),s.map=r,s.key=n),s.track()}}function ct(e,t,n,r,s,i){const o=Ks.get(e);if(!o){Gn++;return}const a=c=>{c&&c.trigger()};if(Si(),t==="clear")o.forEach(a);else{const c=V(e),l=c&&wi(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,d)=>{(d==="length"||d===Jn||!Ut(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Jn)),t){case"add":c?l&&a(o.get("length")):(a(o.get(Jt)),un(e)&&a(o.get(zs)));break;case"delete":c||(a(o.get(Jt)),un(e)&&a(o.get(zs)));break;case"set":un(e)&&a(o.get(Jt));break}}Ti()}function sn(e){const t=Q(e);return t===e?t:(_e(t,"iterate",Jn),De(e)?t:t.map(ve))}function ns(e){return _e(e=Q(e),"iterate",Jn),e}const $u={__proto__:null,[Symbol.iterator](){return Es(this,Symbol.iterator,ve)},concat(...e){return sn(this).concat(...e.map(t=>V(t)?sn(t):t))},entries(){return Es(this,"entries",e=>(e[1]=ve(e[1]),e))},every(e,t){return it(this,"every",e,t,void 0,arguments)},filter(e,t){return it(this,"filter",e,t,n=>n.map(ve),arguments)},find(e,t){return it(this,"find",e,t,ve,arguments)},findIndex(e,t){return it(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return it(this,"findLast",e,t,ve,arguments)},findLastIndex(e,t){return it(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return it(this,"forEach",e,t,void 0,arguments)},includes(...e){return Is(this,"includes",e)},indexOf(...e){return Is(this,"indexOf",e)},join(e){return sn(this).join(e)},lastIndexOf(...e){return Is(this,"lastIndexOf",e)},map(e,t){return it(this,"map",e,t,void 0,arguments)},pop(){return Pn(this,"pop")},push(...e){return Pn(this,"push",e)},reduce(e,...t){return so(this,"reduce",e,t)},reduceRight(e,...t){return so(this,"reduceRight",e,t)},shift(){return Pn(this,"shift")},some(e,t){return it(this,"some",e,t,void 0,arguments)},splice(...e){return Pn(this,"splice",e)},toReversed(){return sn(this).toReversed()},toSorted(e){return sn(this).toSorted(e)},toSpliced(...e){return sn(this).toSpliced(...e)},unshift(...e){return Pn(this,"unshift",e)},values(){return Es(this,"values",ve)}};function Es(e,t,n){const r=ns(e),s=r[t]();return r!==e&&!De(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Bu=Array.prototype;function it(e,t,n,r,s,i){const o=ns(e),a=o!==e&&!De(e),c=o[t];if(c!==Bu[t]){const f=c.apply(e,i);return a?ve(f):f}let l=n;o!==e&&(a?l=function(f,d){return n.call(this,ve(f),d,e)}:n.length>2&&(l=function(f,d){return n.call(this,f,d,e)}));const u=c.call(o,l,r);return a&&s?s(u):u}function so(e,t,n,r){const s=ns(e);let i=n;return s!==e&&(De(e)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,e)}):i=function(o,a,c){return n.call(this,o,ve(a),c,e)}),s[t](i,...r)}function Is(e,t,n){const r=Q(e);_e(r,"iterate",Jn);const s=r[t](...n);return(s===-1||s===!1)&&ki(n[0])?(n[0]=Q(n[0]),r[t](...n)):s}function Pn(e,t,n=[]){Ft(),Si();const r=Q(e)[t].apply(e,n);return Ti(),Ht(),r}const ju=vi("__proto__,__v_isRef,__isVue"),sc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ut));function Vu(e){Ut(e)||(e=String(e));const t=Q(this);return _e(t,"has",e),t.hasOwnProperty(e)}class ic{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Zu:lc:i?cc:ac).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=V(t);if(!s){let c;if(o&&(c=$u[n]))return c;if(n==="hasOwnProperty")return Vu}const a=Reflect.get(t,n,ye(t)?t:r);return(Ut(n)?sc.has(n):ju(n))||(s||_e(t,"get",n),i)?a:ye(a)?o&&wi(n)?a:a.value:le(a)?s?fc(a):Tn(a):a}}class oc extends ic{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=Yt(i);if(!De(r)&&!Yt(r)&&(i=Q(i),r=Q(r)),!V(t)&&ye(i)&&!ye(r))return c?!1:(i.value=r,!0)}const o=V(t)&&wi(n)?Number(n)<t.length:te(t,n),a=Reflect.set(t,n,r,ye(t)?t:s);return t===Q(s)&&(o?Nt(r,i)&&ct(t,"set",n,r):ct(t,"add",n,r)),a}deleteProperty(t,n){const r=te(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&ct(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Ut(n)||!sc.has(n))&&_e(t,"has",n),r}ownKeys(t){return _e(t,"iterate",V(t)?"length":Jt),Reflect.ownKeys(t)}}class Wu extends ic{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ku=new oc,zu=new Wu,qu=new oc(!0);const qs=e=>e,yr=e=>Reflect.getPrototypeOf(e);function Gu(e,t,n){return function(...r){const s=this.__v_raw,i=Q(s),o=un(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?qs:t?Gs:ve;return!t&&_e(i,"iterate",c?zs:Jt),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function br(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ju(e,t){const n={get(s){const i=this.__v_raw,o=Q(i),a=Q(s);e||(Nt(s,a)&&_e(o,"get",s),_e(o,"get",a));const{has:c}=yr(o),l=t?qs:e?Gs:ve;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&_e(Q(s),"iterate",Jt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Q(i),a=Q(s);return e||(Nt(s,a)&&_e(o,"has",s),_e(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Q(a),l=t?qs:e?Gs:ve;return!e&&_e(c,"iterate",Jt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return he(n,e?{add:br("add"),set:br("set"),delete:br("delete"),clear:br("clear")}:{add(s){!t&&!De(s)&&!Yt(s)&&(s=Q(s));const i=Q(this);return yr(i).has.call(i,s)||(i.add(s),ct(i,"add",s,s)),this},set(s,i){!t&&!De(i)&&!Yt(i)&&(i=Q(i));const o=Q(this),{has:a,get:c}=yr(o);let l=a.call(o,s);l||(s=Q(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Nt(i,u)&&ct(o,"set",s,i):ct(o,"add",s,i),this},delete(s){const i=Q(this),{has:o,get:a}=yr(i);let c=o.call(i,s);c||(s=Q(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&ct(i,"delete",s,void 0),l},clear(){const s=Q(this),i=s.size!==0,o=s.clear();return i&&ct(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Gu(s,e,t)}),n}function Pi(e,t){const n=Ju(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(te(n,s)&&s in r?n:r,s,i)}const Yu={get:Pi(!1,!1)},Qu={get:Pi(!1,!0)},Xu={get:Pi(!0,!1)};const ac=new WeakMap,cc=new WeakMap,lc=new WeakMap,Zu=new WeakMap;function ef(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tf(e){return e.__v_skip||!Object.isExtensible(e)?0:ef(Su(e))}function Tn(e){return Yt(e)?e:Ri(e,!1,Ku,Yu,ac)}function uc(e){return Ri(e,!1,qu,Qu,cc)}function fc(e){return Ri(e,!0,zu,Xu,lc)}function Ri(e,t,n,r,s){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=tf(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function fn(e){return Yt(e)?fn(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function De(e){return!!(e&&e.__v_isShallow)}function ki(e){return e?!!e.__v_raw:!1}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function rs(e){return!te(e,"__v_skip")&&Object.isExtensible(e)&&za(e,"__v_skip",!0),e}const ve=e=>le(e)?Tn(e):e,Gs=e=>le(e)?fc(e):e;function ye(e){return e?e.__v_isRef===!0:!1}function dc(e){return hc(e,!1)}function nf(e){return hc(e,!0)}function hc(e,t){return ye(e)?e:new rf(e,t)}class rf{constructor(t,n){this.dep=new Ai,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Q(t),this._value=n?t:ve(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||De(t)||Yt(t);t=r?t:Q(t),Nt(t,n)&&(this._rawValue=t,this._value=r?t:ve(t),this.dep.trigger())}}function dn(e){return ye(e)?e.value:e}const sf={get:(e,t,n)=>t==="__v_raw"?e:dn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ye(s)&&!ye(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function pc(e){return fn(e)?e:new Proxy(e,sf)}class of{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ai(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Xa(this,!0),!0}get value(){const t=this.dep.track();return tc(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function af(e,t,n=!1){let r,s;return q(e)?r=e:(r=e.get,s=e.set),new of(r,s,n)}const wr={},Lr=new WeakMap;let qt;function cf(e,t=!1,n=qt){if(n){let r=Lr.get(n);r||Lr.set(n,r=[]),r.push(e)}}function lf(e,t,n=oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=E=>s?E:De(E)||s===!1||s===0?lt(E,1):lt(E);let u,f,d,g,_=!1,T=!1;if(ye(e)?(f=()=>e.value,_=De(e)):fn(e)?(f=()=>l(e),_=!0):V(e)?(T=!0,_=e.some(E=>fn(E)||De(E)),f=()=>e.map(E=>{if(ye(E))return E.value;if(fn(E))return l(E);if(q(E))return c?c(E,2):E()})):q(e)?t?f=c?()=>c(e,2):e:f=()=>{if(d){Ft();try{d()}finally{Ht()}}const E=qt;qt=u;try{return c?c(e,3,[g]):e(g)}finally{qt=E}}:f=Ze,t&&s){const E=f,F=s===!0?1/0:s;f=()=>lt(E(),F)}const D=Uu(),O=()=>{u.stop(),D&&D.active&&bi(D.effects,u)};if(i&&t){const E=t;t=(...F)=>{E(...F),O()}}let b=T?new Array(e.length).fill(wr):wr;const S=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(t){const F=u.run();if(s||_||(T?F.some(($,W)=>Nt($,b[W])):Nt(F,b))){d&&d();const $=qt;qt=u;try{const W=[F,b===wr?void 0:T&&b[0]===wr?[]:b,g];c?c(t,3,W):t(...W),b=F}finally{qt=$}}}else u.run()};return a&&a(S),u=new Ya(f),u.scheduler=o?()=>o(S,!1):S,g=E=>cf(E,!1,u),d=u.onStop=()=>{const E=Lr.get(u);if(E){if(c)c(E,4);else for(const F of E)F();Lr.delete(u)}},t?r?S(!0):b=u.run():o?o(S.bind(null,!0),!0):u.run(),O.pause=u.pause.bind(u),O.resume=u.resume.bind(u),O.stop=O,O}function lt(e,t=1/0,n){if(t<=0||!le(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ye(e))lt(e.value,t,n);else if(V(e))for(let r=0;r<e.length;r++)lt(e[r],t,n);else if(ja(e)||un(e))e.forEach(r=>{lt(r,t,n)});else if(Ka(e)){for(const r in e)lt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&lt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lr(e,t,n,r){try{return r?e(...r):e()}catch(s){ss(s,t,n)}}function Ve(e,t,n,r){if(q(e)){const s=lr(e,t,n,r);return s&&Va(s)&&s.catch(i=>{ss(i,t,n)}),s}if(V(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ve(e[i],t,n,r));return s}}function ss(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||oe;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,c,l)===!1)return}a=a.parent}if(i){Ft(),lr(i,null,10,[e,c,l]),Ht();return}}uf(e,n,s,r,o)}function uf(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const we=[];let Qe=-1;const hn=[];let It=null,on=0;const gc=Promise.resolve();let Mr=null;function mc(e){const t=Mr||gc;return e?t.then(this?e.bind(this):e):t}function ff(e){let t=Qe+1,n=we.length;for(;t<n;){const r=t+n>>>1,s=we[r],i=Yn(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Oi(e){if(!(e.flags&1)){const t=Yn(e),n=we[we.length-1];!n||!(e.flags&2)&&t>=Yn(n)?we.push(e):we.splice(ff(t),0,e),e.flags|=1,_c()}}function _c(){Mr||(Mr=gc.then(yc))}function df(e){V(e)?hn.push(...e):It&&e.id===-1?It.splice(on+1,0,e):e.flags&1||(hn.push(e),e.flags|=1),_c()}function io(e,t,n=Qe+1){for(;n<we.length;n++){const r=we[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;we.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vc(e){if(hn.length){const t=[...new Set(hn)].sort((n,r)=>Yn(n)-Yn(r));if(hn.length=0,It){It.push(...t);return}for(It=t,on=0;on<It.length;on++){const n=It[on];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}It=null,on=0}}const Yn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function yc(e){try{for(Qe=0;Qe<we.length;Qe++){const t=we[Qe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),lr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Qe<we.length;Qe++){const t=we[Qe];t&&(t.flags&=-2)}Qe=-1,we.length=0,vc(),Mr=null,(we.length||hn.length)&&yc()}}let Ce=null,bc=null;function Dr(e){const t=Ce;return Ce=e,bc=e&&e.type.__scopeId||null,t}function hf(e,t=Ce,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&yo(-1);const i=Dr(t);let o;try{o=e(...s)}finally{Dr(i),r._d&&yo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Nv(e,t){if(Ce===null)return e;const n=us(Ce),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=oe]=t[s];i&&(q(i)&&(i={mounted:i,updated:i}),i.deep&&lt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Vt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ft(),Ve(c,n,8,[e.el,a,e,t]),Ht())}}const wc=Symbol("_vte"),Ec=e=>e.__isTeleport,Hn=e=>e&&(e.disabled||e.disabled===""),oo=e=>e&&(e.defer||e.defer===""),ao=e=>typeof SVGElement<"u"&&e instanceof SVGElement,co=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Js=(e,t)=>{const n=e&&e.to;return ue(n)?t?t(n):null:n},Ic={name:"Teleport",__isTeleport:!0,process(e,t,n,r,s,i,o,a,c,l){const{mc:u,pc:f,pbc:d,o:{insert:g,querySelector:_,createText:T,createComment:D}}=l,O=Hn(t.props);let{shapeFlag:b,children:S,dynamicChildren:E}=t;if(e==null){const F=t.el=T(""),$=t.anchor=T("");g(F,n,r),g($,n,r);const W=(M,K)=>{b&16&&(s&&s.isCE&&(s.ce._teleportTarget=M),u(S,M,K,s,i,o,a,c))},Y=()=>{const M=t.target=Js(t.props,_),K=Sc(M,t,T,g);M&&(o!=="svg"&&ao(M)?o="svg":o!=="mathml"&&co(M)&&(o="mathml"),O||(W(M,K),Cr(t,!1)))};O&&(W(n,$),Cr(t,!0)),oo(t.props)?de(()=>{Y(),t.el.__isMounted=!0},i):Y()}else{if(oo(t.props)&&!e.el.__isMounted){de(()=>{Ic.process(e,t,n,r,s,i,o,a,c,l),delete e.el.__isMounted},i);return}t.el=e.el,t.targetStart=e.targetStart;const F=t.anchor=e.anchor,$=t.target=e.target,W=t.targetAnchor=e.targetAnchor,Y=Hn(e.props),M=Y?n:$,K=Y?F:W;if(o==="svg"||ao($)?o="svg":(o==="mathml"||co($))&&(o="mathml"),E?(d(e.dynamicChildren,E,M,s,i,o,a),Ui(e,t,!0)):c||f(e,t,M,K,s,i,o,a,!1),O)Y?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Er(t,n,F,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const J=t.target=Js(t.props,_);J&&Er(t,J,null,l,0)}else Y&&Er(t,$,W,l,1);Cr(t,O)}},remove(e,t,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:c,targetStart:l,targetAnchor:u,target:f,props:d}=e;if(f&&(s(l),s(u)),i&&s(c),o&16){const g=i||!Hn(d);for(let _=0;_<a.length;_++){const T=a[_];r(T,t,n,g,!!T.dynamicChildren)}}},move:Er,hydrate:pf};function Er(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=e,f=i===2;if(f&&r(o,t,n),(!f||Hn(u))&&c&16)for(let d=0;d<l.length;d++)s(l[d],t,n,2);f&&r(a,t,n)}function pf(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:l,createText:u}},f){const d=t.target=Js(t.props,c);if(d){const g=Hn(t.props),_=d._lpa||d.firstChild;if(t.shapeFlag&16)if(g)t.anchor=f(o(e),t,a(e),n,r,s,i),t.targetStart=_,t.targetAnchor=_&&o(_);else{t.anchor=o(e);let T=_;for(;T;){if(T&&T.nodeType===8){if(T.data==="teleport start anchor")t.targetStart=T;else if(T.data==="teleport anchor"){t.targetAnchor=T,d._lpa=t.targetAnchor&&o(t.targetAnchor);break}}T=o(T)}t.targetAnchor||Sc(d,t,u,l),f(_&&o(_),t,d,n,r,s,i)}Cr(t,g)}return t.anchor&&o(t.anchor)}const Lv=Ic;function Cr(e,t){const n=e.ctx;if(n&&n.ut){let r,s;for(t?(r=e.el,s=e.anchor):(r=e.targetStart,s=e.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Sc(e,t,n,r){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[wc]=i,e&&(r(s,e),r(i,e)),i}const St=Symbol("_leaveCb"),Ir=Symbol("_enterCb");function Tc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ni(()=>{e.isMounted=!0}),Mi(()=>{e.isUnmounting=!0}),e}const Le=[Function,Array],Cc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Le,onEnter:Le,onAfterEnter:Le,onEnterCancelled:Le,onBeforeLeave:Le,onLeave:Le,onAfterLeave:Le,onLeaveCancelled:Le,onBeforeAppear:Le,onAppear:Le,onAfterAppear:Le,onAppearCancelled:Le},Ac=e=>{const t=e.subTree;return t.component?Ac(t.component):t},gf={name:"BaseTransition",props:Cc,setup(e,{slots:t}){const n=Hi(),r=Tc();return()=>{const s=t.default&&xi(t.default(),!0);if(!s||!s.length)return;const i=Pc(s),o=Q(e),{mode:a}=o;if(r.isLeaving)return Ss(i);const c=lo(i);if(!c)return Ss(i);let l=Qn(c,o,r,n,f=>l=f);c.type!==Ee&&Dt(c,l);let u=n.subTree&&lo(n.subTree);if(u&&u.type!==Ee&&!Pt(c,u)&&Ac(n).type!==Ee){let f=Qn(u,o,r,n);if(Dt(u,f),a==="out-in"&&c.type!==Ee)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Ss(i);a==="in-out"&&c.type!==Ee?f.delayLeave=(d,g,_)=>{const T=Rc(r,u);T[String(u.key)]=u,d[St]=()=>{g(),d[St]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{_(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function Pc(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ee){t=n;break}}return t}const mf=gf;function Rc(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Qn(e,t,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:g,onAfterLeave:_,onLeaveCancelled:T,onBeforeAppear:D,onAppear:O,onAfterAppear:b,onAppearCancelled:S}=t,E=String(e.key),F=Rc(n,e),$=(M,K)=>{M&&Ve(M,r,9,K)},W=(M,K)=>{const J=K[1];$(M,K),V(M)?M.every(L=>L.length<=1)&&J():M.length<=1&&J()},Y={mode:o,persisted:a,beforeEnter(M){let K=c;if(!n.isMounted)if(i)K=D||c;else return;M[St]&&M[St](!0);const J=F[E];J&&Pt(e,J)&&J.el[St]&&J.el[St](),$(K,[M])},enter(M){let K=l,J=u,L=f;if(!n.isMounted)if(i)K=O||l,J=b||u,L=S||f;else return;let X=!1;const pe=M[Ir]=Pe=>{X||(X=!0,Pe?$(L,[M]):$(J,[M]),Y.delayedLeave&&Y.delayedLeave(),M[Ir]=void 0)};K?W(K,[M,pe]):pe()},leave(M,K){const J=String(e.key);if(M[Ir]&&M[Ir](!0),n.isUnmounting)return K();$(d,[M]);let L=!1;const X=M[St]=pe=>{L||(L=!0,K(),pe?$(T,[M]):$(_,[M]),M[St]=void 0,F[J]===e&&delete F[J])};F[J]=e,g?W(g,[M,X]):X()},clone(M){const K=Qn(M,t,n,r,s);return s&&s(K),K}};return Y}function Ss(e){if(os(e))return e=ht(e),e.children=null,e}function lo(e){if(!os(e))return Ec(e.type)&&e.children?Pc(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&q(n.default))return n.default()}}function Dt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Dt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function xi(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Fe?(o.patchFlag&128&&s++,r=r.concat(xi(o.children,t,a))):(t||o.type!==Ee)&&r.push(a!=null?ht(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function is(e,t){return q(e)?he({name:e.name},t,{setup:e}):e}function kc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ur(e,t,n,r,s=!1){if(V(e)){e.forEach((_,T)=>Ur(_,t&&(V(t)?t[T]:t),n,r,s));return}if(pn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ur(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?us(r.component):r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===oe?a.refs={}:a.refs,f=a.setupState,d=Q(f),g=f===oe?()=>!1:_=>te(d,_);if(l!=null&&l!==c&&(ue(l)?(u[l]=null,g(l)&&(f[l]=null)):ye(l)&&(l.value=null)),q(c))lr(c,a,12,[o,u]);else{const _=ue(c),T=ye(c);if(_||T){const D=()=>{if(e.f){const O=_?g(c)?f[c]:u[c]:c.value;s?V(O)&&bi(O,i):V(O)?O.includes(i)||O.push(i):_?(u[c]=[i],g(c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else _?(u[c]=o,g(c)&&(f[c]=o)):T&&(c.value=o,e.k&&(u[e.k]=o))};o?(D.id=-1,de(D,n)):D()}}}ts().requestIdleCallback;ts().cancelIdleCallback;const pn=e=>!!e.type.__asyncLoader,os=e=>e.type.__isKeepAlive,_f={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Hi(),r=n.ctx;if(!r.renderer)return()=>{const b=t.default&&t.default();return b&&b.length===1?b[0]:b};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:f}}}=r,d=f("div");r.activate=(b,S,E,F,$)=>{const W=b.component;l(b,S,E,0,a),c(W.vnode,b,S,E,W,a,F,b.slotScopeIds,$),de(()=>{W.isDeactivated=!1,W.a&&Dn(W.a);const Y=b.props&&b.props.onVnodeMounted;Y&&Me(Y,W.parent,b)},a)},r.deactivate=b=>{const S=b.component;Hr(S.m),Hr(S.a),l(b,d,null,1,a),de(()=>{S.da&&Dn(S.da);const E=b.props&&b.props.onVnodeUnmounted;E&&Me(E,S.parent,b),S.isDeactivated=!0},a)};function g(b){Ts(b),u(b,n,a,!0)}function _(b){s.forEach((S,E)=>{const F=ti(S.type);F&&!b(F)&&T(E)})}function T(b){const S=s.get(b);S&&(!o||!Pt(S,o))?g(S):o&&Ts(o),s.delete(b),i.delete(b)}Bn(()=>[e.include,e.exclude],([b,S])=>{b&&_(E=>On(b,E)),S&&_(E=>!On(S,E))},{flush:"post",deep:!0});let D=null;const O=()=>{D!=null&&($r(n.subTree.type)?de(()=>{s.set(D,Sr(n.subTree))},n.subTree.suspense):s.set(D,Sr(n.subTree)))};return Ni(O),Li(O),Mi(()=>{s.forEach(b=>{const{subTree:S,suspense:E}=n,F=Sr(S);if(b.type===F.type&&b.key===F.key){Ts(F);const $=F.component.da;$&&de($,E);return}g(b)})}),()=>{if(D=null,!t.default)return o=null;const b=t.default(),S=b[0];if(b.length>1)return o=null,b;if(!Zn(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return o=null,S;let E=Sr(S);if(E.type===Ee)return o=null,E;const F=E.type,$=ti(pn(E)?E.type.__asyncResolved||{}:F),{include:W,exclude:Y,max:M}=e;if(W&&(!$||!On(W,$))||Y&&$&&On(Y,$))return E.shapeFlag&=-257,o=E,S;const K=E.key==null?F:E.key,J=s.get(K);return E.el&&(E=ht(E),S.shapeFlag&128&&(S.ssContent=E)),D=K,J?(E.el=J.el,E.component=J.component,E.transition&&Dt(E,E.transition),E.shapeFlag|=512,i.delete(K),i.add(K)):(i.add(K),M&&i.size>parseInt(M,10)&&T(i.values().next().value)),E.shapeFlag|=256,o=E,$r(S.type)?S:E}}},Mv=_f;function On(e,t){return V(e)?e.some(n=>On(n,t)):ue(e)?e.split(",").includes(t):Iu(e)?(e.lastIndex=0,e.test(t)):!1}function vf(e,t){Oc(e,"a",t)}function yf(e,t){Oc(e,"da",t)}function Oc(e,t,n=ge){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(as(t,r,n),n){let s=n.parent;for(;s&&s.parent;)os(s.parent.vnode)&&bf(r,t,n,s),s=s.parent}}function bf(e,t,n,r){const s=as(t,e,r,!0);xc(()=>{bi(r[t],s)},n)}function Ts(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Sr(e){return e.shapeFlag&128?e.ssContent:e}function as(e,t,n=ge,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Ft();const a=ur(n),c=Ve(t,n,e,o);return a(),Ht(),c});return r?s.unshift(i):s.push(i),i}}const mt=e=>(t,n=ge)=>{(!er||e==="sp")&&as(e,(...r)=>t(...r),n)},wf=mt("bm"),Ni=mt("m"),Ef=mt("bu"),Li=mt("u"),Mi=mt("bum"),xc=mt("um"),If=mt("sp"),Sf=mt("rtg"),Tf=mt("rtc");function Cf(e,t=ge){as("ec",e,t)}const Af="components";function Pf(e,t){return kf(Af,e,!0,t)||e}const Rf=Symbol.for("v-ndc");function kf(e,t,n=!0,r=!1){const s=Ce||ge;if(s){const i=s.type;{const a=ti(i,!1);if(a&&(a===t||a===Ue(t)||a===es(Ue(t))))return i}const o=uo(s[e]||i[e],t)||uo(s.appContext[e],t);return!o&&r?i:o}}function uo(e,t){return e&&(e[t]||e[Ue(t)]||e[es(Ue(t))])}function Dv(e,t,n,r){let s;const i=n,o=V(e);if(o||ue(e)){const a=o&&fn(e);let c=!1;a&&(c=!De(e),e=ns(e)),s=new Array(e.length);for(let l=0,u=e.length;l<u;l++)s[l]=t(c?ve(e[l]):e[l],l,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,i)}else if(le(e))if(e[Symbol.iterator])s=Array.from(e,(a,c)=>t(a,c,void 0,i));else{const a=Object.keys(e);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=t(e[u],u,c,i)}}else s=[];return s}const Ys=e=>e?el(e)?us(e):Ys(e.parent):null,$n=he(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ys(e.parent),$root:e=>Ys(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Lc(e),$forceUpdate:e=>e.f||(e.f=()=>{Oi(e.update)}),$nextTick:e=>e.n||(e.n=mc.bind(e.proxy)),$watch:e=>Qf.bind(e)}),Cs=(e,t)=>e!==oe&&!e.__isScriptSetup&&te(e,t),Of={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Cs(r,t))return o[t]=1,r[t];if(s!==oe&&te(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&te(l,t))return o[t]=3,i[t];if(n!==oe&&te(n,t))return o[t]=4,n[t];Qs&&(o[t]=0)}}const u=$n[t];let f,d;if(u)return t==="$attrs"&&_e(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==oe&&te(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,te(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Cs(s,t)?(s[t]=n,!0):r!==oe&&te(r,t)?(r[t]=n,!0):te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==oe&&te(e,o)||Cs(t,o)||(a=i[0])&&te(a,o)||te(r,o)||te($n,o)||te(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function fo(e){return V(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Qs=!0;function xf(e){const t=Lc(e),n=e.proxy,r=e.ctx;Qs=!1,t.beforeCreate&&ho(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:g,updated:_,activated:T,deactivated:D,beforeDestroy:O,beforeUnmount:b,destroyed:S,unmounted:E,render:F,renderTracked:$,renderTriggered:W,errorCaptured:Y,serverPrefetch:M,expose:K,inheritAttrs:J,components:L,directives:X,filters:pe}=t;if(l&&Nf(l,r,null),o)for(const re in o){const Z=o[re];q(Z)&&(r[re]=Z.bind(n))}if(s){const re=s.call(n,n);le(re)&&(e.data=Tn(re))}if(Qs=!0,i)for(const re in i){const Z=i[re],st=q(Z)?Z.bind(n,n):q(Z.get)?Z.get.bind(n,n):Ze,vt=!q(Z)&&q(Z.set)?Z.set.bind(n):Ze,ze=He({get:st,set:vt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Se=>ze.value=Se})}if(a)for(const re in a)Nc(a[re],r,n,re);if(c){const re=q(c)?c.call(n):c;Reflect.ownKeys(re).forEach(Z=>{Ar(Z,re[Z])})}u&&ho(u,e,"c");function fe(re,Z){V(Z)?Z.forEach(st=>re(st.bind(n))):Z&&re(Z.bind(n))}if(fe(wf,f),fe(Ni,d),fe(Ef,g),fe(Li,_),fe(vf,T),fe(yf,D),fe(Cf,Y),fe(Tf,$),fe(Sf,W),fe(Mi,b),fe(xc,E),fe(If,M),V(K))if(K.length){const re=e.exposed||(e.exposed={});K.forEach(Z=>{Object.defineProperty(re,Z,{get:()=>n[Z],set:st=>n[Z]=st})})}else e.exposed||(e.exposed={});F&&e.render===Ze&&(e.render=F),J!=null&&(e.inheritAttrs=J),L&&(e.components=L),X&&(e.directives=X),M&&kc(e)}function Nf(e,t,n=Ze){V(e)&&(e=Xs(e));for(const r in e){const s=e[r];let i;le(s)?"default"in s?i=et(s.from||r,s.default,!0):i=et(s.from||r):i=et(s),ye(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ho(e,t,n){Ve(V(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Nc(e,t,n,r){let s=r.includes(".")?qc(n,r):()=>n[r];if(ue(e)){const i=t[e];q(i)&&Bn(s,i)}else if(q(e))Bn(s,e.bind(n));else if(le(e))if(V(e))e.forEach(i=>Nc(i,t,n,r));else{const i=q(e.handler)?e.handler.bind(n):t[e.handler];q(i)&&Bn(s,i,e)}}function Lc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Fr(c,l,o,!0)),Fr(c,t,o)),le(t)&&i.set(t,c),c}function Fr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Fr(e,i,n,!0),s&&s.forEach(o=>Fr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Lf[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Lf={data:po,props:go,emits:go,methods:xn,computed:xn,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:xn,directives:xn,watch:Df,provide:po,inject:Mf};function po(e,t){return t?e?function(){return he(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function Mf(e,t){return xn(Xs(e),Xs(t))}function Xs(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function xn(e,t){return e?he(Object.create(null),e,t):t}function go(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:he(Object.create(null),fo(e),fo(t??{})):t}function Df(e,t){if(!e)return t;if(!t)return e;const n=he(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Mc(){return{app:null,config:{isNativeTag:wu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uf=0;function Ff(e,t){return function(r,s=null){q(r)||(r=he({},r)),s!=null&&!le(s)&&(s=null);const i=Mc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Uf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:vd,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&q(u.install)?(o.add(u),u.install(l,...f)):q(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,d){if(!c){const g=l._ceVNode||Ae(r,s);return g.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),e(g,u,d),c=!0,l._container=u,u.__vue_app__=l,us(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ve(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=gn;gn=l;try{return u()}finally{gn=f}}};return l}}let gn=null;function Ar(e,t){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[e]=t}}function et(e,t,n=!1){const r=ge||Ce;if(r||gn){const s=gn?gn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&q(t)?t.call(r&&r.proxy):t}}const Dc={},Uc=()=>Object.create(Dc),Fc=e=>Object.getPrototypeOf(e)===Dc;function Hf(e,t,n,r=!1){const s={},i=Uc();e.propsDefaults=Object.create(null),Hc(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:uc(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function $f(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=Q(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(cs(e.emitsOptions,d))continue;const g=t[d];if(c)if(te(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const _=Ue(d);s[_]=Zs(c,a,_,g,e,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{Hc(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!te(t,f)&&((u=en(f))===f||!te(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Zs(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!te(t,f))&&(delete i[f],l=!0)}l&&ct(e.attrs,"set","")}function Hc(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Mn(c))continue;const l=t[c];let u;s&&te(s,u=Ue(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:cs(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Q(n),l=a||oe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Zs(s,c,f,l[f],e,!te(l,f))}}return o}function Zs(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=te(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&q(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=ur(s);r=l[n]=c.call(null,t),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}const Bf=new WeakMap;function $c(e,t,n=!1){const r=n?Bf:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!q(e)){const u=f=>{c=!0;const[d,g]=$c(f,t,!0);he(o,d),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return le(e)&&r.set(e,ln),ln;if(V(i))for(let u=0;u<i.length;u++){const f=Ue(i[u]);mo(f)&&(o[f]=oe)}else if(i)for(const u in i){const f=Ue(u);if(mo(f)){const d=i[u],g=o[f]=V(d)||q(d)?{type:d}:he({},d),_=g.type;let T=!1,D=!0;if(V(_))for(let O=0;O<_.length;++O){const b=_[O],S=q(b)&&b.name;if(S==="Boolean"){T=!0;break}else S==="String"&&(D=!1)}else T=q(_)&&_.name==="Boolean";g[0]=T,g[1]=D,(T||te(g,"default"))&&a.push(f)}}const l=[o,a];return le(e)&&r.set(e,l),l}function mo(e){return e[0]!=="$"&&!Mn(e)}const Bc=e=>e[0]==="_"||e==="$stable",Di=e=>V(e)?e.map(Xe):[Xe(e)],jf=(e,t,n)=>{if(t._n)return t;const r=hf((...s)=>Di(t(...s)),n);return r._c=!1,r},jc=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Bc(s))continue;const i=e[s];if(q(i))t[s]=jf(s,i,r);else if(i!=null){const o=Di(i);t[s]=()=>o}}},Vc=(e,t)=>{const n=Di(t);e.slots.default=()=>n},Wc=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},Vf=(e,t,n)=>{const r=e.slots=Uc();if(e.vnode.shapeFlag&32){const s=t._;s?(Wc(r,t,n),n&&za(r,"_",s,!0)):jc(t,r)}else t&&Vc(e,t)},Wf=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=oe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Wc(s,t,n):(i=!t.$stable,jc(t,s)),o=t}else t&&(Vc(e,t),o={default:1});if(i)for(const a in s)!Bc(a)&&o[a]==null&&delete s[a]},de=sd;function Kf(e){return zf(e)}function zf(e,t){const n=ts();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:g=Ze,insertStaticContent:_}=e,T=(h,p,m,v=null,I=null,w=null,R=void 0,P=null,A=!!p.dynamicChildren)=>{if(h===p)return;h&&!Pt(h,p)&&(v=y(h),Se(h,I,w,!0),h=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:C,ref:B,shapeFlag:x}=p;switch(C){case ls:D(h,p,m,v);break;case Ee:O(h,p,m,v);break;case Ps:h==null&&b(p,m,v,R);break;case Fe:L(h,p,m,v,I,w,R,P,A);break;default:x&1?F(h,p,m,v,I,w,R,P,A):x&6?X(h,p,m,v,I,w,R,P,A):(x&64||x&128)&&C.process(h,p,m,v,I,w,R,P,A,U)}B!=null&&I&&Ur(B,h&&h.ref,w,p||h,!p)},D=(h,p,m,v)=>{if(h==null)r(p.el=a(p.children),m,v);else{const I=p.el=h.el;p.children!==h.children&&l(I,p.children)}},O=(h,p,m,v)=>{h==null?r(p.el=c(p.children||""),m,v):p.el=h.el},b=(h,p,m,v)=>{[h.el,h.anchor]=_(h.children,p,m,v,h.el,h.anchor)},S=({el:h,anchor:p},m,v)=>{let I;for(;h&&h!==p;)I=d(h),r(h,m,v),h=I;r(p,m,v)},E=({el:h,anchor:p})=>{let m;for(;h&&h!==p;)m=d(h),s(h),h=m;s(p)},F=(h,p,m,v,I,w,R,P,A)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),h==null?$(p,m,v,I,w,R,P,A):M(h,p,I,w,R,P,A)},$=(h,p,m,v,I,w,R,P)=>{let A,C;const{props:B,shapeFlag:x,transition:H,dirs:z}=h;if(A=h.el=o(h.type,w,B&&B.is,B),x&8?u(A,h.children):x&16&&Y(h.children,A,null,v,I,As(h,w),R,P),z&&Vt(h,null,v,"created"),W(A,h,h.scopeId,R,v),B){for(const ae in B)ae!=="value"&&!Mn(ae)&&i(A,ae,null,B[ae],w,v);"value"in B&&i(A,"value",null,B.value,w),(C=B.onVnodeBeforeMount)&&Me(C,v,h)}z&&Vt(h,null,v,"beforeMount");const G=qf(I,H);G&&H.beforeEnter(A),r(A,p,m),((C=B&&B.onVnodeMounted)||G||z)&&de(()=>{C&&Me(C,v,h),G&&H.enter(A),z&&Vt(h,null,v,"mounted")},I)},W=(h,p,m,v,I)=>{if(m&&g(h,m),v)for(let w=0;w<v.length;w++)g(h,v[w]);if(I){let w=I.subTree;if(p===w||$r(w.type)&&(w.ssContent===p||w.ssFallback===p)){const R=I.vnode;W(h,R,R.scopeId,R.slotScopeIds,I.parent)}}},Y=(h,p,m,v,I,w,R,P,A=0)=>{for(let C=A;C<h.length;C++){const B=h[C]=P?Tt(h[C]):Xe(h[C]);T(null,B,p,m,v,I,w,R,P)}},M=(h,p,m,v,I,w,R)=>{const P=p.el=h.el;let{patchFlag:A,dynamicChildren:C,dirs:B}=p;A|=h.patchFlag&16;const x=h.props||oe,H=p.props||oe;let z;if(m&&Wt(m,!1),(z=H.onVnodeBeforeUpdate)&&Me(z,m,p,h),B&&Vt(p,h,m,"beforeUpdate"),m&&Wt(m,!0),(x.innerHTML&&H.innerHTML==null||x.textContent&&H.textContent==null)&&u(P,""),C?K(h.dynamicChildren,C,P,m,v,As(p,I),w):R||Z(h,p,P,null,m,v,As(p,I),w,!1),A>0){if(A&16)J(P,x,H,m,I);else if(A&2&&x.class!==H.class&&i(P,"class",null,H.class,I),A&4&&i(P,"style",x.style,H.style,I),A&8){const G=p.dynamicProps;for(let ae=0;ae<G.length;ae++){const ne=G[ae],Re=x[ne],Te=H[ne];(Te!==Re||ne==="value")&&i(P,ne,Re,Te,I,m)}}A&1&&h.children!==p.children&&u(P,p.children)}else!R&&C==null&&J(P,x,H,m,I);((z=H.onVnodeUpdated)||B)&&de(()=>{z&&Me(z,m,p,h),B&&Vt(p,h,m,"updated")},v)},K=(h,p,m,v,I,w,R)=>{for(let P=0;P<p.length;P++){const A=h[P],C=p[P],B=A.el&&(A.type===Fe||!Pt(A,C)||A.shapeFlag&70)?f(A.el):m;T(A,C,B,null,v,I,w,R,!0)}},J=(h,p,m,v,I)=>{if(p!==m){if(p!==oe)for(const w in p)!Mn(w)&&!(w in m)&&i(h,w,p[w],null,I,v);for(const w in m){if(Mn(w))continue;const R=m[w],P=p[w];R!==P&&w!=="value"&&i(h,w,P,R,I,v)}"value"in m&&i(h,"value",p.value,m.value,I)}},L=(h,p,m,v,I,w,R,P,A)=>{const C=p.el=h?h.el:a(""),B=p.anchor=h?h.anchor:a("");let{patchFlag:x,dynamicChildren:H,slotScopeIds:z}=p;z&&(P=P?P.concat(z):z),h==null?(r(C,m,v),r(B,m,v),Y(p.children||[],m,B,I,w,R,P,A)):x>0&&x&64&&H&&h.dynamicChildren?(K(h.dynamicChildren,H,m,I,w,R,P),(p.key!=null||I&&p===I.subTree)&&Ui(h,p,!0)):Z(h,p,m,B,I,w,R,P,A)},X=(h,p,m,v,I,w,R,P,A)=>{p.slotScopeIds=P,h==null?p.shapeFlag&512?I.ctx.activate(p,m,v,R,A):pe(p,m,v,I,w,R,A):Pe(h,p,A)},pe=(h,p,m,v,I,w,R)=>{const P=h.component=dd(h,v,I);if(os(h)&&(P.ctx.renderer=U),hd(P,!1,R),P.asyncDep){if(I&&I.registerDep(P,fe,R),!h.el){const A=P.subTree=Ae(Ee);O(null,A,p,m)}}else fe(P,h,p,m,I,w,R)},Pe=(h,p,m)=>{const v=p.component=h.component;if(nd(h,p,m))if(v.asyncDep&&!v.asyncResolved){re(v,p,m);return}else v.next=p,v.update();else p.el=h.el,v.vnode=p},fe=(h,p,m,v,I,w,R)=>{const P=()=>{if(h.isMounted){let{next:x,bu:H,u:z,parent:G,vnode:ae}=h;{const Ge=Kc(h);if(Ge){x&&(x.el=ae.el,re(h,x,R)),Ge.asyncDep.then(()=>{h.isUnmounted||P()});return}}let ne=x,Re;Wt(h,!1),x?(x.el=ae.el,re(h,x,R)):x=ae,H&&Dn(H),(Re=x.props&&x.props.onVnodeBeforeUpdate)&&Me(Re,G,x,ae),Wt(h,!0);const Te=_o(h),qe=h.subTree;h.subTree=Te,T(qe,Te,f(qe.el),y(qe),h,I,w),x.el=Te.el,ne===null&&rd(h,Te.el),z&&de(z,I),(Re=x.props&&x.props.onVnodeUpdated)&&de(()=>Me(Re,G,x,ae),I)}else{let x;const{el:H,props:z}=p,{bm:G,m:ae,parent:ne,root:Re,type:Te}=h,qe=pn(p);Wt(h,!1),G&&Dn(G),!qe&&(x=z&&z.onVnodeBeforeMount)&&Me(x,ne,p),Wt(h,!0);{Re.ce&&Re.ce._injectChildStyle(Te);const Ge=h.subTree=_o(h);T(null,Ge,m,v,h,I,w),p.el=Ge.el}if(ae&&de(ae,I),!qe&&(x=z&&z.onVnodeMounted)){const Ge=p;de(()=>Me(x,ne,Ge),I)}(p.shapeFlag&256||ne&&pn(ne.vnode)&&ne.vnode.shapeFlag&256)&&h.a&&de(h.a,I),h.isMounted=!0,p=m=v=null}};h.scope.on();const A=h.effect=new Ya(P);h.scope.off();const C=h.update=A.run.bind(A),B=h.job=A.runIfDirty.bind(A);B.i=h,B.id=h.uid,A.scheduler=()=>Oi(B),Wt(h,!0),C()},re=(h,p,m)=>{p.component=h;const v=h.vnode.props;h.vnode=p,h.next=null,$f(h,p.props,v,m),Wf(h,p.children,m),Ft(),io(h),Ht()},Z=(h,p,m,v,I,w,R,P,A=!1)=>{const C=h&&h.children,B=h?h.shapeFlag:0,x=p.children,{patchFlag:H,shapeFlag:z}=p;if(H>0){if(H&128){vt(C,x,m,v,I,w,R,P,A);return}else if(H&256){st(C,x,m,v,I,w,R,P,A);return}}z&8?(B&16&&Ne(C,I,w),x!==C&&u(m,x)):B&16?z&16?vt(C,x,m,v,I,w,R,P,A):Ne(C,I,w,!0):(B&8&&u(m,""),z&16&&Y(x,m,v,I,w,R,P,A))},st=(h,p,m,v,I,w,R,P,A)=>{h=h||ln,p=p||ln;const C=h.length,B=p.length,x=Math.min(C,B);let H;for(H=0;H<x;H++){const z=p[H]=A?Tt(p[H]):Xe(p[H]);T(h[H],z,m,null,I,w,R,P,A)}C>B?Ne(h,I,w,!0,!1,x):Y(p,m,v,I,w,R,P,A,x)},vt=(h,p,m,v,I,w,R,P,A)=>{let C=0;const B=p.length;let x=h.length-1,H=B-1;for(;C<=x&&C<=H;){const z=h[C],G=p[C]=A?Tt(p[C]):Xe(p[C]);if(Pt(z,G))T(z,G,m,null,I,w,R,P,A);else break;C++}for(;C<=x&&C<=H;){const z=h[x],G=p[H]=A?Tt(p[H]):Xe(p[H]);if(Pt(z,G))T(z,G,m,null,I,w,R,P,A);else break;x--,H--}if(C>x){if(C<=H){const z=H+1,G=z<B?p[z].el:v;for(;C<=H;)T(null,p[C]=A?Tt(p[C]):Xe(p[C]),m,G,I,w,R,P,A),C++}}else if(C>H)for(;C<=x;)Se(h[C],I,w,!0),C++;else{const z=C,G=C,ae=new Map;for(C=G;C<=H;C++){const ke=p[C]=A?Tt(p[C]):Xe(p[C]);ke.key!=null&&ae.set(ke.key,C)}let ne,Re=0;const Te=H-G+1;let qe=!1,Ge=0;const An=new Array(Te);for(C=0;C<Te;C++)An[C]=0;for(C=z;C<=x;C++){const ke=h[C];if(Re>=Te){Se(ke,I,w,!0);continue}let Je;if(ke.key!=null)Je=ae.get(ke.key);else for(ne=G;ne<=H;ne++)if(An[ne-G]===0&&Pt(ke,p[ne])){Je=ne;break}Je===void 0?Se(ke,I,w,!0):(An[Je-G]=C+1,Je>=Ge?Ge=Je:qe=!0,T(ke,p[Je],m,null,I,w,R,P,A),Re++)}const Zi=qe?Gf(An):ln;for(ne=Zi.length-1,C=Te-1;C>=0;C--){const ke=G+C,Je=p[ke],eo=ke+1<B?p[ke+1].el:v;An[C]===0?T(null,Je,m,eo,I,w,R,P,A):qe&&(ne<0||C!==Zi[ne]?ze(Je,m,eo,2):ne--)}}},ze=(h,p,m,v,I=null)=>{const{el:w,type:R,transition:P,children:A,shapeFlag:C}=h;if(C&6){ze(h.component.subTree,p,m,v);return}if(C&128){h.suspense.move(p,m,v);return}if(C&64){R.move(h,p,m,U);return}if(R===Fe){r(w,p,m);for(let x=0;x<A.length;x++)ze(A[x],p,m,v);r(h.anchor,p,m);return}if(R===Ps){S(h,p,m);return}if(v!==2&&C&1&&P)if(v===0)P.beforeEnter(w),r(w,p,m),de(()=>P.enter(w),I);else{const{leave:x,delayLeave:H,afterLeave:z}=P,G=()=>r(w,p,m),ae=()=>{x(w,()=>{G(),z&&z()})};H?H(w,G,ae):ae()}else r(w,p,m)},Se=(h,p,m,v=!1,I=!1)=>{const{type:w,props:R,ref:P,children:A,dynamicChildren:C,shapeFlag:B,patchFlag:x,dirs:H,cacheIndex:z}=h;if(x===-2&&(I=!1),P!=null&&Ur(P,null,m,h,!0),z!=null&&(p.renderCache[z]=void 0),B&256){p.ctx.deactivate(h);return}const G=B&1&&H,ae=!pn(h);let ne;if(ae&&(ne=R&&R.onVnodeBeforeUnmount)&&Me(ne,p,h),B&6)vr(h.component,m,v);else{if(B&128){h.suspense.unmount(m,v);return}G&&Vt(h,null,p,"beforeUnmount"),B&64?h.type.remove(h,p,m,U,v):C&&!C.hasOnce&&(w!==Fe||x>0&&x&64)?Ne(C,p,m,!1,!0):(w===Fe&&x&384||!I&&B&16)&&Ne(A,p,m),v&&nn(h)}(ae&&(ne=R&&R.onVnodeUnmounted)||G)&&de(()=>{ne&&Me(ne,p,h),G&&Vt(h,null,p,"unmounted")},m)},nn=h=>{const{type:p,el:m,anchor:v,transition:I}=h;if(p===Fe){rn(m,v);return}if(p===Ps){E(h);return}const w=()=>{s(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(h.shapeFlag&1&&I&&!I.persisted){const{leave:R,delayLeave:P}=I,A=()=>R(m,w);P?P(h.el,w,A):A()}else w()},rn=(h,p)=>{let m;for(;h!==p;)m=d(h),s(h),h=m;s(p)},vr=(h,p,m)=>{const{bum:v,scope:I,job:w,subTree:R,um:P,m:A,a:C}=h;Hr(A),Hr(C),v&&Dn(v),I.stop(),w&&(w.flags|=8,Se(R,h,p,m)),P&&de(P,p),de(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ne=(h,p,m,v=!1,I=!1,w=0)=>{for(let R=w;R<h.length;R++)Se(h[R],p,m,v,I)},y=h=>{if(h.shapeFlag&6)return y(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),m=p&&p[wc];return m?d(m):p};let N=!1;const k=(h,p,m)=>{h==null?p._vnode&&Se(p._vnode,null,null,!0):T(p._vnode||null,h,p,null,null,null,m),p._vnode=h,N||(N=!0,io(),vc(),N=!1)},U={p:T,um:Se,m:ze,r:nn,mt:pe,mc:Y,pc:Z,pbc:K,n:y,o:e};return{render:k,hydrate:void 0,createApp:Ff(k)}}function As({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Wt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function qf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ui(e,t,n=!1){const r=e.children,s=t.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Tt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ui(o,a)),a.type===ls&&(a.el=o.el)}}function Gf(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Kc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Kc(t)}function Hr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Jf=Symbol.for("v-scx"),Yf=()=>et(Jf);function Bn(e,t,n){return zc(e,t,n)}function zc(e,t,n=oe){const{immediate:r,deep:s,flush:i,once:o}=n,a=he({},n),c=t&&r||!t&&i!=="post";let l;if(er){if(i==="sync"){const g=Yf();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Ze,g.resume=Ze,g.pause=Ze,g}}const u=ge;a.call=(g,_,T)=>Ve(g,u,_,T);let f=!1;i==="post"?a.scheduler=g=>{de(g,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,_)=>{_?g():Oi(g)}),a.augmentJob=g=>{t&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const d=lf(e,t,a);return er&&(l?l.push(d):c&&d()),d}function Qf(e,t,n){const r=this.proxy,s=ue(e)?e.includes(".")?qc(r,e):()=>r[e]:e.bind(r,r);let i;q(t)?i=t:(i=t.handler,n=t);const o=ur(this),a=zc(s,i.bind(r),n);return o(),a}function qc(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Xf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ue(t)}Modifiers`]||e[`${en(t)}Modifiers`];function Zf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||oe;let s=n;const i=t.startsWith("update:"),o=i&&Xf(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>ue(u)?u.trim():u)),o.number&&(s=n.map(Au)));let a,c=r[a=ys(t)]||r[a=ys(Ue(t))];!c&&i&&(c=r[a=ys(en(t))]),c&&Ve(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ve(l,e,6,s)}}function Gc(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!q(e)){const c=l=>{const u=Gc(l,t,!0);u&&(a=!0,he(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(le(e)&&r.set(e,null),null):(V(i)?i.forEach(c=>o[c]=null):he(o,i),le(e)&&r.set(e,o),o)}function cs(e,t){return!e||!Xr(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(e,t[0].toLowerCase()+t.slice(1))||te(e,en(t))||te(e,t))}function _o(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:g,ctx:_,inheritAttrs:T}=e,D=Dr(e);let O,b;try{if(n.shapeFlag&4){const E=s||r,F=E;O=Xe(l.call(F,E,u,f,g,d,_)),b=a}else{const E=t;O=Xe(E.length>1?E(f,{attrs:a,slots:o,emit:c}):E(f,null)),b=t.props?a:ed(a)}}catch(E){jn.length=0,ss(E,e,1),O=Ae(Ee)}let S=O;if(b&&T!==!1){const E=Object.keys(b),{shapeFlag:F}=S;E.length&&F&7&&(i&&E.some(yi)&&(b=td(b,i)),S=ht(S,b,!1,!0))}return n.dirs&&(S=ht(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&Dt(S,n.transition),O=S,Dr(D),O}const ed=e=>{let t;for(const n in e)(n==="class"||n==="style"||Xr(n))&&((t||(t={}))[n]=e[n]);return t},td=(e,t)=>{const n={};for(const r in e)(!yi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function nd(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?vo(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!cs(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?vo(r,o,l):!0:!!o;return!1}function vo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!cs(n,i))return!0}return!1}function rd({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const $r=e=>e.__isSuspense;function sd(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):df(e)}const Fe=Symbol.for("v-fgt"),ls=Symbol.for("v-txt"),Ee=Symbol.for("v-cmt"),Ps=Symbol.for("v-stc"),jn=[];let xe=null;function Jc(e=!1){jn.push(xe=e?null:[])}function id(){jn.pop(),xe=jn[jn.length-1]||null}let Xn=1;function yo(e,t=!1){Xn+=e,e<0&&xe&&t&&(xe.hasOnce=!0)}function Yc(e){return e.dynamicChildren=Xn>0?xe||ln:null,id(),Xn>0&&xe&&xe.push(e),e}function Uv(e,t,n,r,s,i){return Yc(Zc(e,t,n,r,s,i,!0))}function Qc(e,t,n,r,s){return Yc(Ae(e,t,n,r,s,!0))}function Zn(e){return e?e.__v_isVNode===!0:!1}function Pt(e,t){return e.type===t.type&&e.key===t.key}const Xc=({key:e})=>e??null,Pr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||ye(e)||q(e)?{i:Ce,r:e,k:t,f:!!n}:e:null);function Zc(e,t=null,n=null,r=0,s=null,i=e===Fe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xc(t),ref:t&&Pr(t),scopeId:bc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ce};return a?(Fi(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ue(n)?8:16),Xn>0&&!o&&xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xe.push(c),c}const Ae=od;function od(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Rf)&&(e=Ee),Zn(e)){const a=ht(e,t,!0);return n&&Fi(a,n),Xn>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(e)]=a:xe.push(a)),a.patchFlag=-2,a}if(_d(e)&&(e=e.__vccOpts),t){t=ad(t);let{class:a,style:c}=t;a&&!ue(a)&&(t.class=Ii(a)),le(c)&&(ki(c)&&!V(c)&&(c=he({},c)),t.style=Ei(c))}const o=ue(e)?1:$r(e)?128:Ec(e)?64:le(e)?4:q(e)?2:0;return Zc(e,t,n,r,s,o,i,!0)}function ad(e){return e?ki(e)||Fc(e)?he({},e):e:null}function ht(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?ld(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Xc(l),ref:t&&t.ref?n&&i?V(i)?i.concat(Pr(t)):[i,Pr(t)]:Pr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Fe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ht(e.ssContent),ssFallback:e.ssFallback&&ht(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Dt(u,c.clone(u)),u}function cd(e=" ",t=0){return Ae(ls,null,e,t)}function Fv(e="",t=!1){return t?(Jc(),Qc(Ee,null,e)):Ae(Ee,null,e)}function Xe(e){return e==null||typeof e=="boolean"?Ae(Ee):V(e)?Ae(Fe,null,e.slice()):Zn(e)?Tt(e):Ae(ls,null,String(e))}function Tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ht(e)}function Fi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Fi(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Fc(t)?t._ctx=Ce:s===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),r&64?(n=16,t=[cd(t)]):n=8);e.children=t,e.shapeFlag|=n}function ld(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ii([t.class,r.class]));else if(s==="style")t.style=Ei([t.style,r.style]);else if(Xr(s)){const i=t[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Me(e,t,n,r=null){Ve(e,t,7,[n,r])}const ud=Mc();let fd=0;function dd(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||ud,i={uid:fd++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Du(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$c(r,s),emitsOptions:Gc(r,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Zf.bind(null,i),e.ce&&e.ce(i),i}let ge=null;const Hi=()=>ge||Ce;let Br,ei;{const e=ts(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Br=t("__VUE_INSTANCE_SETTERS__",n=>ge=n),ei=t("__VUE_SSR_SETTERS__",n=>er=n)}const ur=e=>{const t=ge;return Br(e),e.scope.on(),()=>{e.scope.off(),Br(t)}},bo=()=>{ge&&ge.scope.off(),Br(null)};function el(e){return e.vnode.shapeFlag&4}let er=!1;function hd(e,t=!1,n=!1){t&&ei(t);const{props:r,children:s}=e.vnode,i=el(e);Hf(e,r,i,t),Vf(e,s,n);const o=i?pd(e,t):void 0;return t&&ei(!1),o}function pd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Of);const{setup:r}=n;if(r){Ft();const s=e.setupContext=r.length>1?md(e):null,i=ur(e),o=lr(r,e,0,[e.props,s]),a=Va(o);if(Ht(),i(),(a||e.sp)&&!pn(e)&&kc(e),a){if(o.then(bo,bo),t)return o.then(c=>{wo(e,c)}).catch(c=>{ss(c,e,0)});e.asyncDep=o}else wo(e,o)}else tl(e)}function wo(e,t,n){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=pc(t)),tl(e)}function tl(e,t,n){const r=e.type;e.render||(e.render=r.render||Ze);{const s=ur(e);Ft();try{xf(e)}finally{Ht(),s()}}}const gd={get(e,t){return _e(e,"get",""),e[t]}};function md(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,gd),slots:e.slots,emit:e.emit,expose:t}}function us(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(pc(rs(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $n)return $n[n](e)},has(t,n){return n in t||n in $n}})):e.proxy}function ti(e,t=!0){return q(e)?e.displayName||e.name:e.name||t&&e.__name}function _d(e){return q(e)&&"__vccOpts"in e}const He=(e,t)=>af(e,t,er);function $i(e,t,n){const r=arguments.length;return r===2?le(t)&&!V(t)?Zn(t)?Ae(e,null,[t]):Ae(e,t):Ae(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zn(n)&&(n=[n]),Ae(e,t,n))}const vd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ni;const Eo=typeof window<"u"&&window.trustedTypes;if(Eo)try{ni=Eo.createPolicy("vue",{createHTML:e=>e})}catch{}const nl=ni?e=>ni.createHTML(e):e=>e,yd="http://www.w3.org/2000/svg",bd="http://www.w3.org/1998/Math/MathML",at=typeof document<"u"?document:null,Io=at&&at.createElement("template"),wd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?at.createElementNS(yd,e):t==="mathml"?at.createElementNS(bd,e):n?at.createElement(e,{is:n}):at.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>at.createTextNode(e),createComment:e=>at.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>at.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Io.innerHTML=nl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Io.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},yt="transition",Rn="animation",yn=Symbol("_vtc"),rl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sl=he({},Cc,rl),Ed=e=>(e.displayName="Transition",e.props=sl,e),Hv=Ed((e,{slots:t})=>$i(mf,il(e),t)),Kt=(e,t=[])=>{V(e)?e.forEach(n=>n(...t)):e&&e(...t)},So=e=>e?V(e)?e.some(t=>t.length>1):e.length>1:!1;function il(e){const t={};for(const L in e)L in rl||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,_=Id(s),T=_&&_[0],D=_&&_[1],{onBeforeEnter:O,onEnter:b,onEnterCancelled:S,onLeave:E,onLeaveCancelled:F,onBeforeAppear:$=O,onAppear:W=b,onAppearCancelled:Y=S}=t,M=(L,X,pe,Pe)=>{L._enterCancelled=Pe,Et(L,X?u:a),Et(L,X?l:o),pe&&pe()},K=(L,X)=>{L._isLeaving=!1,Et(L,f),Et(L,g),Et(L,d),X&&X()},J=L=>(X,pe)=>{const Pe=L?W:b,fe=()=>M(X,L,pe);Kt(Pe,[X,fe]),To(()=>{Et(X,L?c:i),Ye(X,L?u:a),So(Pe)||Co(X,r,T,fe)})};return he(t,{onBeforeEnter(L){Kt(O,[L]),Ye(L,i),Ye(L,o)},onBeforeAppear(L){Kt($,[L]),Ye(L,c),Ye(L,l)},onEnter:J(!1),onAppear:J(!0),onLeave(L,X){L._isLeaving=!0;const pe=()=>K(L,X);Ye(L,f),L._enterCancelled?(Ye(L,d),ri()):(ri(),Ye(L,d)),To(()=>{L._isLeaving&&(Et(L,f),Ye(L,g),So(E)||Co(L,r,D,pe))}),Kt(E,[L,pe])},onEnterCancelled(L){M(L,!1,void 0,!0),Kt(S,[L])},onAppearCancelled(L){M(L,!0,void 0,!0),Kt(Y,[L])},onLeaveCancelled(L){K(L),Kt(F,[L])}})}function Id(e){if(e==null)return null;if(le(e))return[Rs(e.enter),Rs(e.leave)];{const t=Rs(e);return[t,t]}}function Rs(e){return Pu(e)}function Ye(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[yn]||(e[yn]=new Set)).add(t)}function Et(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[yn];n&&(n.delete(t),n.size||(e[yn]=void 0))}function To(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Sd=0;function Co(e,t,n,r){const s=e._endId=++Sd,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=ol(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,d),i()},d=g=>{g.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),e.addEventListener(l,d)}function ol(e,t){const n=window.getComputedStyle(e),r=_=>(n[_]||"").split(", "),s=r(`${yt}Delay`),i=r(`${yt}Duration`),o=Ao(s,i),a=r(`${Rn}Delay`),c=r(`${Rn}Duration`),l=Ao(a,c);let u=null,f=0,d=0;t===yt?o>0&&(u=yt,f=o,d=i.length):t===Rn?l>0&&(u=Rn,f=l,d=c.length):(f=Math.max(o,l),u=f>0?o>l?yt:Rn:null,d=u?u===yt?i.length:c.length:0);const g=u===yt&&/\b(transform|all)(,|$)/.test(r(`${yt}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:g}}function Ao(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Po(n)+Po(e[r])))}function Po(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ri(){return document.body.offsetHeight}function Td(e,t,n){const r=e[yn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ro=Symbol("_vod"),Cd=Symbol("_vsh"),Ad=Symbol(""),Pd=/(^|;)\s*display\s*:/;function Rd(e,t,n){const r=e.style,s=ue(n);let i=!1;if(n&&!s){if(t)if(ue(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Rr(r,a,"")}else for(const o in t)n[o]==null&&Rr(r,o,"");for(const o in n)o==="display"&&(i=!0),Rr(r,o,n[o])}else if(s){if(t!==n){const o=r[Ad];o&&(n+=";"+o),r.cssText=n,i=Pd.test(n)}}else t&&e.removeAttribute("style");Ro in e&&(e[Ro]=i?r.display:"",e[Cd]&&(r.display="none"))}const ko=/\s*!important$/;function Rr(e,t,n){if(V(n))n.forEach(r=>Rr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=kd(e,t);ko.test(n)?e.setProperty(en(r),n.replace(ko,""),"important"):e[r]=n}}const Oo=["Webkit","Moz","ms"],ks={};function kd(e,t){const n=ks[t];if(n)return n;let r=Ue(t);if(r!=="filter"&&r in e)return ks[t]=r;r=es(r);for(let s=0;s<Oo.length;s++){const i=Oo[s]+r;if(i in e)return ks[t]=i}return t}const xo="http://www.w3.org/1999/xlink";function No(e,t,n,r,s,i=Lu(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(xo,t.slice(6,t.length)):e.setAttributeNS(xo,t,n):n==null||i&&!qa(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ut(n)?String(n):n)}function Lo(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?nl(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=qa(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Od(e,t,n,r){e.addEventListener(t,n,r)}function xd(e,t,n,r){e.removeEventListener(t,n,r)}const Mo=Symbol("_vei");function Nd(e,t,n,r,s=null){const i=e[Mo]||(e[Mo]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=Ld(t);if(r){const l=i[t]=Ud(r,s);Od(e,a,l,c)}else o&&(xd(e,a,o,c),i[t]=void 0)}}const Do=/(?:Once|Passive|Capture)$/;function Ld(e){let t;if(Do.test(e)){t={};let r;for(;r=e.match(Do);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let Os=0;const Md=Promise.resolve(),Dd=()=>Os||(Md.then(()=>Os=0),Os=Date.now());function Ud(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ve(Fd(r,n.value),t,5,[r])};return n.value=e,n.attached=Dd(),n}function Fd(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Uo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hd=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?Td(e,r,o):t==="style"?Rd(e,n,r):Xr(t)?yi(t)||Nd(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$d(e,t,r,o))?(Lo(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&No(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ue(r))?Lo(e,Ue(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),No(e,t,r,o))};function $d(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Uo(t)&&q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Uo(t)&&ue(n)?!1:t in e}const al=new WeakMap,cl=new WeakMap,jr=Symbol("_moveCb"),Fo=Symbol("_enterCb"),Bd=e=>(delete e.props.mode,e),jd=Bd({name:"TransitionGroup",props:he({},sl,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Hi(),r=Tc();let s,i;return Li(()=>{if(!s.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!zd(s[0].el,n.vnode.el,o))return;s.forEach(Vd),s.forEach(Wd);const a=s.filter(Kd);ri(),a.forEach(c=>{const l=c.el,u=l.style;Ye(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=l[jr]=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",f),l[jr]=null,Et(l,o))};l.addEventListener("transitionend",f)})}),()=>{const o=Q(e),a=il(o);let c=o.tag||Fe;if(s=[],i)for(let l=0;l<i.length;l++){const u=i[l];u.el&&u.el instanceof Element&&(s.push(u),Dt(u,Qn(u,a,r,n)),al.set(u,u.el.getBoundingClientRect()))}i=t.default?xi(t.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&Dt(u,Qn(u,a,r,n))}return Ae(c,null,i)}}}),$v=jd;function Vd(e){const t=e.el;t[jr]&&t[jr](),t[Fo]&&t[Fo]()}function Wd(e){cl.set(e,e.el.getBoundingClientRect())}function Kd(e){const t=al.get(e),n=cl.get(e),r=t.left-n.left,s=t.top-n.top;if(r||s){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",e}}function zd(e,t,n){const r=e.cloneNode(),s=e[yn];s&&s.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(r);const{hasTransform:o}=ol(r);return i.removeChild(r),o}const qd=["ctrl","shift","alt","meta"],Gd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>qd.some(n=>e[`${n}Key`]&&!t.includes(n))},Bv=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const a=Gd[t[o]];if(a&&a(s,t))return}return e(s,...i)})},Jd=he({patchProp:Hd},wd);let Ho;function Yd(){return Ho||(Ho=Kf(Jd))}const Qd=(...e)=>{const t=Yd().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Zd(r);if(!s)return;const i=t._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Xd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Xd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Zd(e){return ue(e)?document.querySelector(e):e}function Bi(e,t,n,r){return Object.defineProperty(e,t,{get:n,set:r,enumerable:!0}),e}const Qt=dc(!1);let si;function eh(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:t[0]||""}}function th(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const ll="ontouchstart"in window||window.navigator.maxTouchPoints>0;function nh(e){const t=e.toLowerCase(),n=th(t),r=eh(t,n),s={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};r.browser&&(s[r.browser]=!0,s.version=r.version,s.versionNumber=parseInt(r.version,10)),r.platform&&(s[r.platform]=!0);const i=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(i===!0||t.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,r.browser="edge"):s.crios?(s.chrome=!0,r.browser="chrome"):s.fxios&&(s.firefox=!0,r.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(r.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&i!==!0)&&(s.webkit=!0),s.opr&&(r.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(r.browser="blackberry",s.blackberry=!0):s.playbook?(r.browser="playbook",s.playbook=!0):s.android?(r.browser="android",s.android=!0):s.kindle?(r.browser="kindle",s.kindle=!0):s.silk&&(r.browser="silk",s.silk=!0)),s.name=r.browser,s.platform=r.platform,t.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),Qt.value===!0&&(si={is:{...s}}),ll===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:o,[o]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const $o=navigator.userAgent||navigator.vendor||window.opera,rh={has:{touch:!1,webStorage:!1},within:{iframe:!1}},tt={userAgent:$o,is:nh($o),has:{touch:ll},within:{iframe:window.self!==window.top}},ii={install(e){const{$q:t}=e;Qt.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,tt),Qt.value=!1}),t.platform=Tn(this)):t.platform=this}};{let e;Bi(tt.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(ii,tt),Qt.value===!0&&(Object.assign(ii,si,rh),si=null)}function jv(e){return rs(is(e))}function Vv(e){return rs(e)}const fs=(e,t)=>{const n=Tn(e);for(const r in e)Bi(t,r,()=>n[r],s=>{n[r]=s});return t},bn={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(bn,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function tr(){}function Wv(e){return e.button===0}function Kv(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function zv(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;for(;n;){if(t.push(n),n.tagName==="HTML")return t.push(document),t.push(window),t;n=n.parentElement}}function qv(e){e.stopPropagation()}function Bo(e){e.cancelable!==!1&&e.preventDefault()}function Gv(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function Jv(e,t){if(e===void 0||t===!0&&e.__dragPrevented===!0)return;const n=t===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",Bo,bn.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",Bo,bn.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function Yv(e,t,n){const r=`__q_${t}_evt`;e[r]=e[r]!==void 0?e[r].concat(n):n,n.forEach(s=>{s[0].addEventListener(s[1],e[s[2]],bn[s[3]])})}function Qv(e,t){const n=`__q_${t}_evt`;e[n]!==void 0&&(e[n].forEach(r=>{r[0].removeEventListener(r[1],e[r[2]],bn[r[3]])}),e[n]=void 0)}function sh(e,t=250,n){let r=null;function s(){const i=arguments,o=()=>{r=null,e.apply(this,i)};r!==null&&clearTimeout(r),r=setTimeout(o,t)}return s.cancel=()=>{r!==null&&clearTimeout(r)},s}const xs=["sm","md","lg","xl"],{passive:jo}=bn,ih=fs({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:tr,setDebounce:tr,install({$q:e,onSSRHydrated:t}){if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,i=n===void 0||tt.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],o=e.config.screen?.bodyClasses===!0;this.__update=f=>{const[d,g]=i();if(g!==this.height&&(this.height=g),d!==this.width)this.width=d;else if(f!==!0)return;let _=this.sizes;this.gt.xs=d>=_.sm,this.gt.sm=d>=_.md,this.gt.md=d>=_.lg,this.gt.lg=d>=_.xl,this.lt.sm=d<_.sm,this.lt.md=d<_.md,this.lt.lg=d<_.lg,this.lt.xl=d<_.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,_=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",_!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${_}`)),this.name=_)};let a,c={},l=16;this.setSizes=f=>{xs.forEach(d=>{f[d]!==void 0&&(c[d]=f[d])})},this.setDebounce=f=>{l=f};const u=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&xs.forEach(d=>{this.sizes[d]=parseInt(f.getPropertyValue(`--q-size-${d}`),10)}),this.setSizes=d=>{xs.forEach(g=>{d[g]&&(this.sizes[g]=d[g])}),this.__update(!0)},this.setDebounce=d=>{a!==void 0&&r.removeEventListener("resize",a,jo),a=d>0?sh(this.__update,d):this.__update,r.addEventListener("resize",a,jo)},this.setDebounce(l),Object.keys(c).length!==0?(this.setSizes(c),c=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Qt.value===!0?t.push(u):u()}}),me=fs({isActive:!1,mode:!1},{__media:void 0,set(e){me.mode=e,e==="auto"?(me.__media===void 0&&(me.__media=window.matchMedia("(prefers-color-scheme: dark)"),me.__updateMedia=()=>{me.set("auto")},me.__media.addListener(me.__updateMedia)),e=me.__media.matches):me.__media!==void 0&&(me.__media.removeListener(me.__updateMedia),me.__media=void 0),me.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){me.set(me.isActive===!1)},install({$q:e,ssrContext:t}){const{dark:n}=e.config;e.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function oh(e,t,n=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof t!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}let ul=!1;function ah(e){ul=e.isComposing===!0}function ch(e){return ul===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function Xv(e,t){return ch(e)===!0?!1:[].concat(t).includes(e.keyCode)}function fl(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function lh({is:e,has:t,within:n},r){const s=[e.desktop===!0?"desktop":"mobile",`${t.touch===!1?"no-":""}touch`];if(e.mobile===!0){const i=fl(e);i!==void 0&&s.push("platform-"+i)}if(e.nativeMobile===!0){const i=e.nativeMobileWrapper;s.push(i),s.push("native-mobile"),e.ios===!0&&(r[i]===void 0||r[i].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else e.electron===!0?s.push("electron"):e.bex===!0&&s.push("bex");return n.iframe===!0&&s.push("within-iframe"),s}function uh(){const{is:e}=tt,t=document.body.className,n=new Set(t.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(e.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const s=fl(e);s!==void 0&&n.add(`platform-${s}`)}}tt.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),tt.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");t!==r&&(document.body.className=r)}function fh(e){for(const t in e)oh(t,e[t])}const dh={install(e){if(this.__installed!==!0){if(Qt.value===!0)uh();else{const{$q:t}=e;t.config.brand!==void 0&&fh(t.config.brand);const n=lh(tt,t.config);document.body.classList.add.apply(document.body.classList,n)}tt.is.ios===!0&&document.body.addEventListener("touchstart",tr),window.addEventListener("keydown",ah,!0)}}},dl=()=>!0;function hh(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function ph(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function gh(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return dl;const t=["#/"];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(hh).map(ph)),()=>t.includes(window.location.hash)}const mh={__history:[],add:tr,remove:tr,install({$q:e}){if(this.__installed===!0)return;const{cordova:t,capacitor:n}=tt.is;if(t!==!0&&n!==!0)return;const r=e.config[t===!0?"cordova":"capacitor"];if(r?.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=dl),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const s=gh(Object.assign({backButtonExit:!0},r)),i=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},Vo={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days",prevMonth:"Previous month",nextMonth:"Next month",prevYear:"Previous year",nextYear:"Next year",today:"Today",prevRangeYears:e=>`Previous ${e} years`,nextRangeYears:e=>`Next ${e} years`},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},pagination:{first:"First page",prev:"Previous page",next:"Next page",last:"Last page"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Wo(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((t,n)=>n===0?t.toLowerCase():n>1||t.length<4?t.toUpperCase():t[0].toUpperCase()+t.slice(1).toLowerCase()).join("-")}const Ct=fs({__qLang:{}},{getLocale:Wo,set(e=Vo,t){const n={...e,rtl:e.rtl===!0,getLocale:Wo};{if(n.set=Ct.set,Ct.__langConfig===void 0||Ct.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(Ct.__qLang,n)}},install({$q:e,lang:t,ssrContext:n}){e.lang=Ct.__qLang,Ct.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(t||Vo))}}),_h={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},Vr=fs({iconMapFn:null,__qIconSet:{}},{set(e,t){const n={...e};n.set=Vr.set,Object.assign(Vr.__qIconSet,n)},install({$q:e,iconSet:t,ssrContext:n}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,Bi(e,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set")}}),this.set(t||_h))}}),vh="_q_",Zv="_q_l_",ey="_q_pc_",ty="_q_fo_";function ny(){}const Ko={};let hl=!1;function yh(){hl=!0}function zo(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}function ry(e){return typeof e=="number"&&isFinite(e)}const qo=[ii,dh,me,ih,mh,Ct,Vr];function Go(e,t){t.forEach(n=>{n.install(e),n.__installed=!0})}function bh(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(vh,n.$q),Go(n,qo),t.components!==void 0&&Object.values(t.components).forEach(r=>{zo(r)===!0&&r.name!==void 0&&e.component(r.name,r)}),t.directives!==void 0&&Object.values(t.directives).forEach(r=>{zo(r)===!0&&r.name!==void 0&&e.directive(r.name,r)}),t.plugins!==void 0&&Go(n,Object.values(t.plugins).filter(r=>typeof r.install=="function"&&qo.includes(r)===!1)),Qt.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}const wh=function(e,t={}){const n={version:"2.18.1"};hl===!1?(t.config!==void 0&&Object.assign(Ko,t.config),n.config={...Ko},yh()):n.config=t.config||{},bh(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},Eh={name:"Quasar",version:"2.18.1",install:wh,lang:Ct,iconSet:Vr},Ih=is({name:"App"}),Sh=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n};function Th(e,t,n,r,s,i){const o=Pf("router-view");return Jc(),Qc(o)}const Ch=Sh(Ih,[["render",Th]]),Ah=e=>e,Ph=Ah;/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof document<"u";function pl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Rh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&pl(e.default)}const ee=Object.assign;function Ns(e,t){const n={};for(const r in t){const s=t[r];n[r]=We(s)?s.map(e):e(s)}return n}const Vn=()=>{},We=Array.isArray,gl=/#/g,kh=/&/g,Oh=/\//g,xh=/=/g,Nh=/\?/g,ml=/\+/g,Lh=/%5B/g,Mh=/%5D/g,_l=/%5E/g,Dh=/%60/g,vl=/%7B/g,Uh=/%7C/g,yl=/%7D/g,Fh=/%20/g;function ji(e){return encodeURI(""+e).replace(Uh,"|").replace(Lh,"[").replace(Mh,"]")}function Hh(e){return ji(e).replace(vl,"{").replace(yl,"}").replace(_l,"^")}function oi(e){return ji(e).replace(ml,"%2B").replace(Fh,"+").replace(gl,"%23").replace(kh,"%26").replace(Dh,"`").replace(vl,"{").replace(yl,"}").replace(_l,"^")}function $h(e){return oi(e).replace(xh,"%3D")}function Bh(e){return ji(e).replace(gl,"%23").replace(Nh,"%3F")}function jh(e){return e==null?"":Bh(e).replace(Oh,"%2F")}function nr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Vh=/\/$/,Wh=e=>e.replace(Vh,"");function Ls(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Gh(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:nr(o)}}function Kh(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Jo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function zh(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&wn(t.matched[r],n.matched[s])&&bl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function wn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function bl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!qh(e[n],t[n]))return!1;return!0}function qh(e,t){return We(e)?Yo(e,t):We(t)?Yo(t,e):e===t}function Yo(e,t){return We(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Gh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var rr;(function(e){e.pop="pop",e.push="push"})(rr||(rr={}));var Wn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Wn||(Wn={}));function Jh(e){if(!e)if(an){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Wh(e)}const Yh=/^[^#]+#/;function Qh(e,t){return e.replace(Yh,"#")+t}function Xh(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ds=()=>({left:window.scrollX,top:window.scrollY});function Zh(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Xh(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Qo(e,t){return(history.state?history.state.position-t:-1)+e}const ai=new Map;function ep(e,t){ai.set(e,t)}function tp(e){const t=ai.get(e);return ai.delete(e),t}let np=()=>location.protocol+"//"+location.host;function wl(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Jo(c,"")}return Jo(n,e)+r+s}function rp(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=wl(e,location),_=n.value,T=t.value;let D=0;if(d){if(n.value=g,t.value=d,o&&o===_){o=null;return}D=T?d.position-T.position:0}else r(g);s.forEach(O=>{O(n.value,_,{delta:D,type:rr.pop,direction:D?D>0?Wn.forward:Wn.back:Wn.unknown})})};function c(){o=n.value}function l(d){s.push(d);const g=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(ee({},d.state,{scroll:ds()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Xo(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ds():null}}function sp(e){const{history:t,location:n}=window,r={value:wl(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:np()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=ee({},t.state,Xo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ee({},s.value,t.state,{forward:c,scroll:ds()});i(u.current,u,!0);const f=ee({},Xo(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function ip(e){e=Jh(e);const t=sp(e),n=rp(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ee({location:"",base:e,go:r,createHref:Qh.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function op(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ip(e)}function ap(e){return typeof e=="string"||e&&typeof e=="object"}function El(e){return typeof e=="string"||typeof e=="symbol"}const Il=Symbol("");var Zo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Zo||(Zo={}));function En(e,t){return ee(new Error,{type:e,[Il]:!0},t)}function ot(e,t){return e instanceof Error&&Il in e&&(t==null||!!(e.type&t))}const ea="[^/]+?",cp={sensitive:!1,strict:!1,start:!0,end:!0},lp=/[.+*?^${}()[\]/\\]/g;function up(e,t){const n=ee({},cp,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const d=l[f];let g=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(lp,"\\$&"),g+=40;else if(d.type===1){const{value:_,repeatable:T,optional:D,regexp:O}=d;i.push({name:_,repeatable:T,optional:D});const b=O||ea;if(b!==ea){g+=10;try{new RegExp(`(${b})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+E.message)}}let S=T?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(S=D&&l.length<2?`(?:/${S})`:"/"+S),D&&(S+="?"),s+=S,g+=20,D&&(g+=-8),T&&(g+=-20),b===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",_=i[d-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:T,optional:D}=g,O=_ in l?l[_]:"";if(We(O)&&!T)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=We(O)?O.join("/"):O;if(!b)if(D)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function fp(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Sl(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=fp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ta(r))return 1;if(ta(s))return-1}return s.length-r.length}function ta(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const dp={type:0,value:""},hp=/[a-zA-Z0-9_]/;function pp(e){if(!e)return[[]];if(e==="/")return[[dp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:hp.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function gp(e,t,n){const r=up(pp(e.path),n),s=ee(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function mp(e,t){const n=[],r=new Map;t=ia({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,d,g){const _=!g,T=ra(f);T.aliasOf=g&&g.record;const D=ia(t,f),O=[T];if("alias"in f){const E=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of E)O.push(ra(ee({},T,{components:g?g.record.components:T.components,path:F,aliasOf:g?g.record:T})))}let b,S;for(const E of O){const{path:F}=E;if(d&&F[0]!=="/"){const $=d.record.path,W=$[$.length-1]==="/"?"":"/";E.path=d.record.path+(F&&W+F)}if(b=gp(E,d,D),g?g.alias.push(b):(S=S||b,S!==b&&S.alias.push(b),_&&f.name&&!sa(b)&&o(f.name)),Tl(b)&&c(b),T.children){const $=T.children;for(let W=0;W<$.length;W++)i($[W],b,g&&g.children[W])}g=g||b}return S?()=>{o(S)}:Vn}function o(f){if(El(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const d=yp(f,n);n.splice(d,0,f),f.record.name&&!sa(f)&&r.set(f.record.name,f)}function l(f,d){let g,_={},T,D;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw En(1,{location:f});D=g.record.name,_=ee(na(d.params,g.keys.filter(S=>!S.optional).concat(g.parent?g.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),f.params&&na(f.params,g.keys.map(S=>S.name))),T=g.stringify(_)}else if(f.path!=null)T=f.path,g=n.find(S=>S.re.test(T)),g&&(_=g.parse(T),D=g.record.name);else{if(g=d.name?r.get(d.name):n.find(S=>S.re.test(d.path)),!g)throw En(1,{location:f,currentLocation:d});D=g.record.name,_=ee({},d.params,f.params),T=g.stringify(_)}const O=[];let b=g;for(;b;)O.unshift(b.record),b=b.parent;return{name:D,path:T,params:_,matched:O,meta:vp(O)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function na(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ra(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:_p(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function _p(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function sa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vp(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function ia(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function yp(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Sl(e,t[i])<0?r=i:n=i+1}const s=bp(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function bp(e){let t=e;for(;t=t.parent;)if(Tl(t)&&Sl(e,t)===0)return t}function Tl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function wp(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ml," "),o=i.indexOf("="),a=nr(o<0?i:i.slice(0,o)),c=o<0?null:nr(i.slice(o+1));if(a in t){let l=t[a];We(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function oa(e){let t="";for(let n in e){const r=e[n];if(n=$h(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(We(r)?r.map(i=>i&&oi(i)):[r&&oi(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Ep(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=We(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Ip=Symbol(""),aa=Symbol(""),hs=Symbol(""),Cl=Symbol(""),ci=Symbol("");function kn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function At(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(En(4,{from:n,to:t})):d instanceof Error?c(d):ap(d)?c(En(2,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(d=>c(d))})}function Ms(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(pl(c)){const u=(c.__vccOpts||c)[t];u&&i.push(At(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Rh(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const g=(f.__vccOpts||f)[t];return g&&At(g,n,r,o,a,s)()}))}}return i}function ca(e){const t=et(hs),n=et(Cl),r=He(()=>{const c=dn(e.to);return t.resolve(c)}),s=He(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(wn.bind(null,u));if(d>-1)return d;const g=la(c[l-2]);return l>1&&la(u)===g&&f[f.length-1].path!==g?f.findIndex(wn.bind(null,c[l-2])):d}),i=He(()=>s.value>-1&&Pp(n.params,r.value.params)),o=He(()=>s.value>-1&&s.value===n.matched.length-1&&bl(n.params,r.value.params));function a(c={}){if(Ap(c)){const l=t[dn(e.replace)?"replace":"push"](dn(e.to)).catch(Vn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:He(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Sp(e){return e.length===1?e[0]:e}const Tp=is({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ca,setup(e,{slots:t}){const n=Tn(ca(e)),{options:r}=et(hs),s=He(()=>({[ua(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ua(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Sp(t.default(n));return e.custom?i:$i("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Cp=Tp;function Ap(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Pp(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!We(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function la(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ua=(e,t,n)=>e??t??n,Rp=is({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=et(ci),s=He(()=>e.route||r.value),i=et(aa,0),o=He(()=>{let l=dn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=He(()=>s.value.matched[o.value]);Ar(aa,He(()=>o.value+1)),Ar(Ip,a),Ar(ci,s);const c=dc();return Bn(()=>[c.value,a.value,e.name],([l,u,f],[d,g,_])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!wn(u,g)||!d)&&(u.enterCallbacks[f]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,d=f&&f.components[u];if(!d)return fa(n.default,{Component:d,route:l});const g=f.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,D=$i(d,ee({},_,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return fa(n.default,{Component:D,route:l})||D}}});function fa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const kp=Rp;function Op(e){const t=mp(e.routes,e),n=e.parseQuery||wp,r=e.stringifyQuery||oa,s=e.history,i=kn(),o=kn(),a=kn(),c=nf(bt);let l=bt;an&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ns.bind(null,y=>""+y),f=Ns.bind(null,jh),d=Ns.bind(null,nr);function g(y,N){let k,U;return El(y)?(k=t.getRecordMatcher(y),U=N):U=y,t.addRoute(U,k)}function _(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function T(){return t.getRoutes().map(y=>y.record)}function D(y){return!!t.getRecordMatcher(y)}function O(y,N){if(N=ee({},N||c.value),typeof y=="string"){const m=Ls(n,y,N.path),v=t.resolve({path:m.path},N),I=s.createHref(m.fullPath);return ee(m,v,{params:d(v.params),hash:nr(m.hash),redirectedFrom:void 0,href:I})}let k;if(y.path!=null)k=ee({},y,{path:Ls(n,y.path,N.path).path});else{const m=ee({},y.params);for(const v in m)m[v]==null&&delete m[v];k=ee({},y,{params:f(m)}),N.params=f(N.params)}const U=t.resolve(k,N),se=y.hash||"";U.params=u(d(U.params));const h=Kh(r,ee({},y,{hash:Hh(se),path:U.path})),p=s.createHref(h);return ee({fullPath:h,hash:se,query:r===oa?Ep(y.query):y.query||{}},U,{redirectedFrom:void 0,href:p})}function b(y){return typeof y=="string"?Ls(n,y,c.value.path):ee({},y)}function S(y,N){if(l!==y)return En(8,{from:N,to:y})}function E(y){return W(y)}function F(y){return E(ee(b(y),{replace:!0}))}function $(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:k}=N;let U=typeof k=="function"?k(y):k;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=b(U):{path:U},U.params={}),ee({query:y.query,hash:y.hash,params:U.path!=null?{}:y.params},U)}}function W(y,N){const k=l=O(y),U=c.value,se=y.state,h=y.force,p=y.replace===!0,m=$(k);if(m)return W(ee(b(m),{state:typeof m=="object"?ee({},se,m.state):se,force:h,replace:p}),N||k);const v=k;v.redirectedFrom=N;let I;return!h&&zh(r,U,k)&&(I=En(16,{to:v,from:U}),ze(U,U,!0,!1)),(I?Promise.resolve(I):K(v,U)).catch(w=>ot(w)?ot(w,2)?w:vt(w):Z(w,v,U)).then(w=>{if(w){if(ot(w,2))return W(ee({replace:p},b(w.to),{state:typeof w.to=="object"?ee({},se,w.to.state):se,force:h}),N||v)}else w=L(v,U,!0,p,se);return J(v,U,w),w})}function Y(y,N){const k=S(y,N);return k?Promise.reject(k):Promise.resolve()}function M(y){const N=rn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function K(y,N){let k;const[U,se,h]=xp(y,N);k=Ms(U.reverse(),"beforeRouteLeave",y,N);for(const m of U)m.leaveGuards.forEach(v=>{k.push(At(v,y,N))});const p=Y.bind(null,y,N);return k.push(p),Ne(k).then(()=>{k=[];for(const m of i.list())k.push(At(m,y,N));return k.push(p),Ne(k)}).then(()=>{k=Ms(se,"beforeRouteUpdate",y,N);for(const m of se)m.updateGuards.forEach(v=>{k.push(At(v,y,N))});return k.push(p),Ne(k)}).then(()=>{k=[];for(const m of h)if(m.beforeEnter)if(We(m.beforeEnter))for(const v of m.beforeEnter)k.push(At(v,y,N));else k.push(At(m.beforeEnter,y,N));return k.push(p),Ne(k)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),k=Ms(h,"beforeRouteEnter",y,N,M),k.push(p),Ne(k))).then(()=>{k=[];for(const m of o.list())k.push(At(m,y,N));return k.push(p),Ne(k)}).catch(m=>ot(m,8)?m:Promise.reject(m))}function J(y,N,k){a.list().forEach(U=>M(()=>U(y,N,k)))}function L(y,N,k,U,se){const h=S(y,N);if(h)return h;const p=N===bt,m=an?history.state:{};k&&(U||p?s.replace(y.fullPath,ee({scroll:p&&m&&m.scroll},se)):s.push(y.fullPath,se)),c.value=y,ze(y,N,k,p),vt()}let X;function pe(){X||(X=s.listen((y,N,k)=>{if(!vr.listening)return;const U=O(y),se=$(U);if(se){W(ee(se,{replace:!0,force:!0}),U).catch(Vn);return}l=U;const h=c.value;an&&ep(Qo(h.fullPath,k.delta),ds()),K(U,h).catch(p=>ot(p,12)?p:ot(p,2)?(W(ee(b(p.to),{force:!0}),U).then(m=>{ot(m,20)&&!k.delta&&k.type===rr.pop&&s.go(-1,!1)}).catch(Vn),Promise.reject()):(k.delta&&s.go(-k.delta,!1),Z(p,U,h))).then(p=>{p=p||L(U,h,!1),p&&(k.delta&&!ot(p,8)?s.go(-k.delta,!1):k.type===rr.pop&&ot(p,20)&&s.go(-1,!1)),J(U,h,p)}).catch(Vn)}))}let Pe=kn(),fe=kn(),re;function Z(y,N,k){vt(y);const U=fe.list();return U.length?U.forEach(se=>se(y,N,k)):console.error(y),Promise.reject(y)}function st(){return re&&c.value!==bt?Promise.resolve():new Promise((y,N)=>{Pe.add([y,N])})}function vt(y){return re||(re=!y,pe(),Pe.list().forEach(([N,k])=>y?k(y):N()),Pe.reset()),y}function ze(y,N,k,U){const{scrollBehavior:se}=e;if(!an||!se)return Promise.resolve();const h=!k&&tp(Qo(y.fullPath,0))||(U||!k)&&history.state&&history.state.scroll||null;return mc().then(()=>se(y,N,h)).then(p=>p&&Zh(p)).catch(p=>Z(p,y,N))}const Se=y=>s.go(y);let nn;const rn=new Set,vr={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:D,getRoutes:T,resolve:O,options:e,push:E,replace:F,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:st,install(y){const N=this;y.component("RouterLink",Cp),y.component("RouterView",kp),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>dn(c)}),an&&!nn&&c.value===bt&&(nn=!0,E(s.location).catch(se=>{}));const k={};for(const se in bt)Object.defineProperty(k,se,{get:()=>c.value[se],enumerable:!0});y.provide(hs,N),y.provide(Cl,uc(k)),y.provide(ci,c);const U=y.unmount;rn.add(y),y.unmount=function(){rn.delete(y),rn.size<1&&(l=bt,X&&X(),X=null,c.value=bt,nn=!1,re=!1),U()}}};function Ne(y){return y.reduce((N,k)=>N.then(()=>M(k)),Promise.resolve())}return vr}function xp(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>wn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>wn(l,c))||s.push(c))}return[n,r,s]}function sy(){return et(hs)}const Np=[{path:"/",component:()=>zt(()=>import("./MainLayout-DJWGE0S-.js"),__vite__mapDeps([0,1,2,3,4,5])),children:[{path:"",redirect:"/home"},{path:"home",component:()=>zt(()=>import("./AccueilPage-DGw5E7Q5.js"),__vite__mapDeps([6,1,7,8,9,10]))},{path:"login",component:()=>zt(()=>import("./LoginPage-DN8ociRT.js"),__vite__mapDeps([11,1,12,8,4,2,13,9,14]))},{path:"calendrier",component:()=>zt(()=>import("./CalendrierPage-Cc_-sZ_T.js"),__vite__mapDeps([15,1,8,12,4,9,16,2,3,7,13,17])),meta:{requiresAuth:!0}},{path:"archives",component:()=>zt(()=>import("./ArchivePage-CfzeULfv.js"),__vite__mapDeps([18,8,1,9,16,2,3,4,7,12,19])),meta:{requiresAuth:!0}}]},{path:"/:catchAll(.*)*",component:()=>zt(()=>import("./ErrorNotFound-DRnTRg8R.js"),__vite__mapDeps([20,2,1]))}],Lp=()=>{};var da={};/**
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
 */const Al=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Mp=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[f],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Al(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Mp(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new Dp;const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Dp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Up=function(e){const t=Al(e);return Pl.encodeByteArray(t,!0)},Wr=function(e){return Up(e).replace(/\./g,"")},Rl=function(e){try{return Pl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Fp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hp=()=>Fp().__FIREBASE_DEFAULTS__,$p=()=>{if(typeof process>"u"||typeof da>"u")return;const e=da.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Bp=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Rl(e[1]);return t&&JSON.parse(t)},ps=()=>{try{return Lp()||Hp()||$p()||Bp()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},kl=e=>{var t,n;return(n=(t=ps())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},iy=e=>{const t=kl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ol=()=>{var e;return(e=ps())===null||e===void 0?void 0:e.config},xl=e=>{var t;return(t=ps())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class jp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function gs(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vp(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function oy(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Wr(JSON.stringify(n)),Wr(JSON.stringify(o)),""].join(".")}const Kn={};function Wp(){const e={prod:[],emulator:[]};for(const t of Object.keys(Kn))Kn[t]?e.emulator.push(t):e.prod.push(t);return e}function Kp(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let ha=!1;function zp(e,t){if(typeof window>"u"||typeof document>"u"||!gs(window.location.host)||Kn[e]===t||Kn[e]||ha)return;Kn[e]=t;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",i=Wp().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,g){d.setAttribute("width","24"),d.setAttribute("id",g),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function l(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{ha=!0,o()},d}function u(d,g){d.setAttribute("id",g),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=Kp(r),g=n("text"),_=document.getElementById(g)||document.createElement("span"),T=n("learnmore"),D=document.getElementById(T)||document.createElement("a"),O=n("preprendIcon"),b=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const S=d.element;a(S),u(D,T);const E=l();c(b,O),S.append(b,_,D,E),document.body.appendChild(S)}i?(_.innerText="Preview backend disconnected.",b.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(b.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Gp(){var e;const t=(e=ps())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yp(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Qp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xp(){const e=Ie();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ay(){return!Gp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zp(){try{return typeof indexedDB=="object"}catch{return!1}}function eg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const tg="FirebaseError";class $t extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=tg,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fr.prototype.create)}}class fr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?ng(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $t(s,a,r)}}function ng(e,t){return e.replace(rg,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const rg=/\{\$([^}]+)}/g;function sg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function In(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(pa(i)&&pa(o)){if(!In(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function pa(e){return e!==null&&typeof e=="object"}/**
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
 */function dr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Nn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function Ln(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function ig(e,t){const n=new og(e,t);return n.subscribe.bind(n)}class og{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ag(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Ds),s.error===void 0&&(s.error=Ds),s.complete===void 0&&(s.complete=Ds);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ag(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ds(){}/**
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
 */function _t(e){return e&&e._delegate?e._delegate:e}class Sn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class cg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new jp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ug(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gt){return this.instances.has(t)}getOptions(t=Gt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lg(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Gt){return this.component?this.component.multipleInstances?t:Gt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lg(e){return e===Gt?void 0:e}function ug(e){return e.instantiationMode==="EAGER"}/**
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
 */class fg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new cg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ie||(ie={}));const dg={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},hg=ie.INFO,pg={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},gg=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=pg[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Nl{constructor(t){this.name=t,this._logLevel=hg,this._logHandler=gg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ie))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...t),this._logHandler(this,ie.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...t),this._logHandler(this,ie.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...t),this._logHandler(this,ie.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...t),this._logHandler(this,ie.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...t),this._logHandler(this,ie.ERROR,...t)}}const mg=(e,t)=>t.some(n=>e instanceof n);let ga,ma;function _g(){return ga||(ga=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vg(){return ma||(ma=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ll=new WeakMap,li=new WeakMap,Ml=new WeakMap,Us=new WeakMap,Vi=new WeakMap;function yg(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Lt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ll.set(n,e)}).catch(()=>{}),Vi.set(t,e),t}function bg(e){if(li.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});li.set(e,t)}let ui={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return li.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ml.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function wg(e){ui=e(ui)}function Eg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fs(this),t,...n);return Ml.set(r,t.sort?t.sort():[t]),Lt(r)}:vg().includes(e)?function(...t){return e.apply(Fs(this),t),Lt(Ll.get(this))}:function(...t){return Lt(e.apply(Fs(this),t))}}function Ig(e){return typeof e=="function"?Eg(e):(e instanceof IDBTransaction&&bg(e),mg(e,_g())?new Proxy(e,ui):e)}function Lt(e){if(e instanceof IDBRequest)return yg(e);if(Us.has(e))return Us.get(e);const t=Ig(e);return t!==e&&(Us.set(e,t),Vi.set(t,e)),t}const Fs=e=>Vi.get(e);function Sg(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Lt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Lt(o.result),c.oldVersion,c.newVersion,Lt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Tg=["get","getKey","getAll","getAllKeys","count"],Cg=["put","add","delete","clear"],Hs=new Map;function _a(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Hs.get(t))return Hs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Cg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Tg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Hs.set(t,i),i}wg(e=>({...e,get:(t,n,r)=>_a(t,n)||e.get(t,n,r),has:(t,n)=>!!_a(t,n)||e.has(t,n)}));/**
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
 */class Ag{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Pg(e){const t=e.getComponent();return t?.type==="VERSION"}const fi="@firebase/app",va="0.13.2";/**
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
 */const pt=new Nl("@firebase/app"),Rg="@firebase/app-compat",kg="@firebase/analytics-compat",Og="@firebase/analytics",xg="@firebase/app-check-compat",Ng="@firebase/app-check",Lg="@firebase/auth",Mg="@firebase/auth-compat",Dg="@firebase/database",Ug="@firebase/data-connect",Fg="@firebase/database-compat",Hg="@firebase/functions",$g="@firebase/functions-compat",Bg="@firebase/installations",jg="@firebase/installations-compat",Vg="@firebase/messaging",Wg="@firebase/messaging-compat",Kg="@firebase/performance",zg="@firebase/performance-compat",qg="@firebase/remote-config",Gg="@firebase/remote-config-compat",Jg="@firebase/storage",Yg="@firebase/storage-compat",Qg="@firebase/firestore",Xg="@firebase/ai",Zg="@firebase/firestore-compat",em="firebase",tm="11.10.0";/**
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
 */const di="[DEFAULT]",nm={[fi]:"fire-core",[Rg]:"fire-core-compat",[Og]:"fire-analytics",[kg]:"fire-analytics-compat",[Ng]:"fire-app-check",[xg]:"fire-app-check-compat",[Lg]:"fire-auth",[Mg]:"fire-auth-compat",[Dg]:"fire-rtdb",[Ug]:"fire-data-connect",[Fg]:"fire-rtdb-compat",[Hg]:"fire-fn",[$g]:"fire-fn-compat",[Bg]:"fire-iid",[jg]:"fire-iid-compat",[Vg]:"fire-fcm",[Wg]:"fire-fcm-compat",[Kg]:"fire-perf",[zg]:"fire-perf-compat",[qg]:"fire-rc",[Gg]:"fire-rc-compat",[Jg]:"fire-gcs",[Yg]:"fire-gcs-compat",[Qg]:"fire-fst",[Zg]:"fire-fst-compat",[Xg]:"fire-vertex","fire-js":"fire-js",[em]:"fire-js-all"};/**
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
 */const Kr=new Map,rm=new Map,hi=new Map;function ya(e,t){try{e.container.addComponent(t)}catch(n){pt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function sr(e){const t=e.name;if(hi.has(t))return pt.debug(`There were multiple attempts to register component ${t}.`),!1;hi.set(t,e);for(const n of Kr.values())ya(n,e);for(const n of rm.values())ya(n,e);return!0}function Dl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function $e(e){return e==null?!1:e.settings!==void 0}/**
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
 */const sm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new fr("app","Firebase",sm);/**
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
 */class im{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const hr=tm;function om(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:di,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Mt.create("bad-app-name",{appName:String(s)});if(n||(n=Ol()),!n)throw Mt.create("no-options");const i=Kr.get(s);if(i){if(In(n,i.options)&&In(r,i.config))return i;throw Mt.create("duplicate-app",{appName:s})}const o=new fg(s);for(const c of hi.values())o.addComponent(c);const a=new im(n,r,o);return Kr.set(s,a),a}function am(e=di){const t=Kr.get(e);if(!t&&e===di&&Ol())return om();if(!t)throw Mt.create("no-app",{appName:e});return t}function zn(e,t,n){var r;let s=(r=nm[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pt.warn(a.join(" "));return}sr(new Sn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const cm="firebase-heartbeat-database",lm=1,ir="firebase-heartbeat-store";let $s=null;function Ul(){return $s||($s=Sg(cm,lm,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ir)}catch(n){console.warn(n)}}}}).catch(e=>{throw Mt.create("idb-open",{originalErrorMessage:e.message})})),$s}async function um(e){try{const n=(await Ul()).transaction(ir),r=await n.objectStore(ir).get(Fl(e));return await n.done,r}catch(t){if(t instanceof $t)pt.warn(t.message);else{const n=Mt.create("idb-get",{originalErrorMessage:t?.message});pt.warn(n.message)}}}async function ba(e,t){try{const r=(await Ul()).transaction(ir,"readwrite");await r.objectStore(ir).put(t,Fl(e)),await r.done}catch(n){if(n instanceof $t)pt.warn(n.message);else{const r=Mt.create("idb-set",{originalErrorMessage:n?.message});pt.warn(r.message)}}}function Fl(e){return`${e.name}!${e.options.appId}`}/**
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
 */const fm=1024,dm=30;class hm{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wa();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>dm){const o=mm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wa(),{heartbeatsToSend:r,unsentEntries:s}=pm(this._heartbeatsCache.heartbeats),i=Wr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return pt.warn(n),""}}}function wa(){return new Date().toISOString().substring(0,10)}function pm(e,t=fm){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ea(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ea(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zp()?eg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await um(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ba(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ba(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ea(e){return Wr(JSON.stringify({version:2,heartbeats:e})).length}function mm(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function _m(e){sr(new Sn("platform-logger",t=>new Ag(t),"PRIVATE")),sr(new Sn("heartbeat",t=>new hm(t),"PRIVATE")),zn(fi,va,e),zn(fi,va,"esm2017"),zn("fire-js","")}_m("");function Wi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Hl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vm=Hl,$l=new fr("auth","Firebase",Hl());/**
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
 */const zr=new Nl("@firebase/auth");function ym(e,...t){zr.logLevel<=ie.WARN&&zr.warn(`Auth (${hr}): ${e}`,...t)}function kr(e,...t){zr.logLevel<=ie.ERROR&&zr.error(`Auth (${hr}): ${e}`,...t)}/**
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
 */function Ke(e,...t){throw Ki(e,...t)}function nt(e,...t){return Ki(e,...t)}function Bl(e,t,n){const r=Object.assign(Object.assign({},vm()),{[t]:n});return new fr("auth","Firebase",r).create(t,{appName:e.name})}function dt(e){return Bl(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ki(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return $l.create(e,...t)}function j(e,t,...n){if(!e)throw Ki(t,...n)}function ut(e){const t="INTERNAL ASSERTION FAILED: "+e;throw kr(t),new Error(t)}function gt(e,t){e||ut(t)}/**
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
 */function pi(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function bm(){return Ia()==="http:"||Ia()==="https:"}function Ia(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function wm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bm()||Yp()||"connection"in navigator)?navigator.onLine:!0}function Em(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class pr{constructor(t,n){this.shortDelay=t,this.longDelay=n,gt(n>t,"Short delay should be less than long delay!"),this.isMobile=qp()||Qp()}get(){return wm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zi(e,t){gt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class jl{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Im={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Sm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Tm=new pr(3e4,6e4);function Bt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function jt(e,t,n,r,s={}){return Vl(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=dr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:c},i);return Jp()||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&gs(e.emulatorConfig.host)&&(l.credentials="include"),jl.fetch()(await Wl(e,e.config.apiHost,n,a),l)})}async function Vl(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Im),t);try{const s=new Am(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Tr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Tr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Tr(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Bl(e,u,l);Ke(e,u)}}catch(s){if(s instanceof $t)throw s;Ke(e,"network-request-failed",{message:String(s)})}}async function gr(e,t,n,r,s={}){const i=await jt(e,t,n,r,s);return"mfaPendingCredential"in i&&Ke(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wl(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?zi(e.config,s):`${e.config.apiScheme}://${s}`;return Sm.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Cm(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Am{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),Tm.get())})}}function Tr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nt(e,t,r);return s.customData._tokenResponse=n,s}function Sa(e){return e!==void 0&&e.enterprise!==void 0}class Pm{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Cm(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Rm(e,t){return jt(e,"GET","/v2/recaptchaConfig",Bt(e,t))}/**
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
 */async function km(e,t){return jt(e,"POST","/v1/accounts:delete",t)}async function qr(e,t){return jt(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function qn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Om(e,t=!1){const n=_t(e),r=await n.getIdToken(t),s=qi(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:qn(Bs(s.auth_time)),issuedAtTime:qn(Bs(s.iat)),expirationTime:qn(Bs(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Bs(e){return Number(e)*1e3}function qi(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return kr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rl(n);return s?JSON.parse(s):(kr("Failed to decode base64 JWT payload"),null)}catch(s){return kr("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ta(e){const t=qi(e);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function or(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof $t&&xm(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function xm({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Nm{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gi{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qn(this.lastLoginAt),this.creationTime=qn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await or(e,qr(n,{idToken:r}));j(s?.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Kl(i.providerUserInfo):[],a=Mm(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!a?.length,u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new gi(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function Lm(e){const t=_t(e);await Gr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Mm(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Kl(e){return e.map(t=>{var{providerId:n}=t,r=Wi(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Dm(e,t){const n=await Vl(e,{},async()=>{const r=dr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=await Wl(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return e.emulatorConfig&&gs(e.emulatorConfig.host)&&(c.credentials="include"),jl.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Um(e,t){return jt(e,"POST","/v2/accounts:revokeToken",Bt(e,t))}/**
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
 */class mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ta(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){j(t.length!==0,"internal-error");const n=Ta(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Dm(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new mn;return r&&(j(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new mn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
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
 */function wt(e,t){j(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Be{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Wi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await or(this,this.stsTokenManager.getToken(this.auth,t));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Om(this,t)}reload(){return Lm(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Be(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Gr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(dt(this.auth));const t=await this.getIdToken();return await or(this,km(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:E,isAnonymous:F,providerData:$,stsTokenManager:W}=n;j(S&&W,t,"internal-error");const Y=mn.fromJSON(this.name,W);j(typeof S=="string",t,"internal-error"),wt(f,t.name),wt(d,t.name),j(typeof E=="boolean",t,"internal-error"),j(typeof F=="boolean",t,"internal-error"),wt(g,t.name),wt(_,t.name),wt(T,t.name),wt(D,t.name),wt(O,t.name),wt(b,t.name);const M=new Be({uid:S,auth:t,email:d,emailVerified:E,displayName:f,isAnonymous:F,photoURL:_,phoneNumber:g,tenantId:T,stsTokenManager:Y,createdAt:O,lastLoginAt:b});return $&&Array.isArray($)&&(M.providerData=$.map(K=>Object.assign({},K))),D&&(M._redirectEventId=D),M}static async _fromIdTokenResponse(t,n,r=!1){const s=new mn;s.updateFromServerResponse(n);const i=new Be({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Gr(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Kl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new mn;a.updateFromIdToken(r);const c=new Be({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new gi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
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
 */const Ca=new Map;function ft(e){gt(e instanceof Function,"Expected a class definition");let t=Ca.get(e);return t?(gt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ca.set(e,t),t)}/**
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
 */class zl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}zl.type="NONE";const Aa=zl;/**
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
 */function Or(e,t,n){return`firebase:${e}:${t}:${n}`}class _n{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Or(this.userKey,s.apiKey,i),this.fullPersistenceKey=Or("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await qr(this.auth,{idToken:t}).catch(()=>{});return n?Be._fromGetAccountInfoResponse(this.auth,n,t):null}return Be._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new _n(ft(Aa),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ft(Aa);const o=Or(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const d=await qr(t,{idToken:u}).catch(()=>{});if(!d)break;f=await Be._fromGetAccountInfoResponse(t,d,u)}else f=Be._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _n(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new _n(i,t,r))}}/**
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
 */function Pa(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Yl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ql(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xl(t))return"Blackberry";if(Zl(t))return"Webos";if(Gl(t))return"Safari";if((t.includes("chrome/")||Jl(t))&&!t.includes("edge/"))return"Chrome";if(Ql(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function ql(e=Ie()){return/firefox\//i.test(e)}function Gl(e=Ie()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Jl(e=Ie()){return/crios\//i.test(e)}function Yl(e=Ie()){return/iemobile/i.test(e)}function Ql(e=Ie()){return/android/i.test(e)}function Xl(e=Ie()){return/blackberry/i.test(e)}function Zl(e=Ie()){return/webos/i.test(e)}function Gi(e=Ie()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Fm(e=Ie()){var t;return Gi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Hm(){return Xp()&&document.documentMode===10}function eu(e=Ie()){return Gi(e)||Ql(e)||Zl(e)||Xl(e)||/windows phone/i.test(e)||Yl(e)}/**
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
 */function tu(e,t=[]){let n;switch(e){case"Browser":n=Pa(Ie());break;case"Worker":n=`${Pa(Ie())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${r}`}/**
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
 */class $m{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Bm(e,t={}){return jt(e,"GET","/v2/passwordPolicy",Bt(e,t))}/**
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
 */const jm=6;class Vm{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class Wm{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ra(this),this.idTokenSubscription=new Ra(this),this.beforeStateQueue=new $m(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await _n.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await qr(this,{idToken:t}),r=await Be._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if($e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Gr(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Em()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if($e(this.app))return Promise.reject(dt(this));const n=t?_t(t):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return $e(this.app)?Promise.reject(dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Bm(this),n=new Vm(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new fr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Um(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ft(t)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=tu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&ym(`Error while retrieving App Check token: ${n.error}`),n?.token}}function tn(e){return _t(e)}class Ra{constructor(t){this.auth=t,this.observer=null,this.addObserver=ig(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ms={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Km(e){ms=e}function nu(e){return ms.loadJS(e)}function zm(){return ms.recaptchaEnterpriseScript}function qm(){return ms.gapiScript}function Gm(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class Jm{constructor(){this.enterprise=new Ym}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class Ym{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const Qm="recaptcha-enterprise",ru="NO_RECAPTCHA";class Xm{constructor(t){this.type=Qm,this.auth=tn(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Rm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Pm(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Sa(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(ru)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Jm().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Sa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=zm();c.length!==0&&(c+=a),nu(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ka(e,t,n,r=!1,s=!1){const i=new Xm(e);let o;if(s)o=ru;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function mi(e,t,n,r,s){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ka(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await ka(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(o)})}/**
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
 */function Zm(e,t){const n=Dl(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(In(i,t??{}))return s;Ke(s,"already-initialized")}return n.initialize({options:t})}function e_(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(ft);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function t_(e,t,n){const r=tn(e);j(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=su(t),{host:o,port:a}=n_(t),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(In(l,r.config.emulator)&&In(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,gs(o)?(Vp(`${i}//${o}${c}`),zp("Auth",!0)):r_()}function su(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function n_(e){const t=su(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Oa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Oa(o)}}}function Oa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function r_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Ji{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ut("not implemented")}_getIdTokenResponse(t){return ut("not implemented")}_linkToIdToken(t,n){return ut("not implemented")}_getReauthenticationResolver(t){return ut("not implemented")}}async function s_(e,t){return jt(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function i_(e,t){return gr(e,"POST","/v1/accounts:signInWithPassword",Bt(e,t))}/**
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
 */async function o_(e,t){return gr(e,"POST","/v1/accounts:signInWithEmailLink",Bt(e,t))}async function a_(e,t){return gr(e,"POST","/v1/accounts:signInWithEmailLink",Bt(e,t))}/**
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
 */class ar extends Ji{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new ar(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ar(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mi(t,n,"signInWithPassword",i_);case"emailLink":return o_(t,{email:this._email,oobCode:this._password});default:Ke(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mi(t,r,"signUpPassword",s_);case"emailLink":return a_(t,{idToken:n,email:this._email,oobCode:this._password});default:Ke(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function vn(e,t){return gr(e,"POST","/v1/accounts:signInWithIdp",Bt(e,t))}/**
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
 */const c_="http://localhost";class Xt extends Ji{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Xt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Wi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Xt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return vn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,vn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,vn(t,n)}buildRequest(){const t={requestUri:c_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=dr(n)}return t}}/**
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
 */function l_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function u_(e){const t=Nn(Ln(e)).link,n=t?Nn(Ln(t)).deep_link_id:null,r=Nn(Ln(e)).deep_link_id;return(r?Nn(Ln(r)).link:null)||r||n||t||e}class Yi{constructor(t){var n,r,s,i,o,a;const c=Nn(Ln(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=l_((s=c.mode)!==null&&s!==void 0?s:null);j(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=u_(t);try{return new Yi(n)}catch{return null}}}/**
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
 */class Cn{constructor(){this.providerId=Cn.PROVIDER_ID}static credential(t,n){return ar._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Yi.parseLink(n);return j(r,"argument-error"),ar._fromEmailAndCode(t,r.code,r.tenantId)}}Cn.PROVIDER_ID="password";Cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class iu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mr extends iu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rt extends mr{constructor(){super("facebook.com")}static credential(t){return Xt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rt.credential(t.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
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
 */class kt extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Xt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
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
 */class Ot extends mr{constructor(){super("github.com")}static credential(t){return Xt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ot.credential(t.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
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
 */class xt extends mr{constructor(){super("twitter.com")}static credential(t,n){return Xt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return xt.credential(n,r)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
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
 */async function f_(e,t){return gr(e,"POST","/v1/accounts:signUp",Bt(e,t))}/**
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
 */class Zt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await Be._fromIdTokenResponse(t,r,s),o=xa(r);return new Zt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=xa(r);return new Zt({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function xa(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Jr extends $t{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Jr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Jr(t,n,r,s)}}function ou(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jr._fromErrorAndOperation(e,i,t,r):i})}async function d_(e,t,n=!1){const r=await or(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Zt._forOperation(e,"link",r)}/**
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
 */async function h_(e,t,n=!1){const{auth:r}=e;if($e(r.app))return Promise.reject(dt(r));const s="reauthenticate";try{const i=await or(e,ou(r,s,t,e),n);j(i.idToken,r,"internal-error");const o=qi(i.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(e.uid===a,r,"user-mismatch"),Zt._forOperation(e,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Ke(r,"user-mismatch"),i}}/**
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
 */async function au(e,t,n=!1){if($e(e.app))return Promise.reject(dt(e));const r="signIn",s=await ou(e,r,t),i=await Zt._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function p_(e,t){return au(tn(e),t)}/**
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
 */async function cu(e){const t=tn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function cy(e,t,n){if($e(e.app))return Promise.reject(dt(e));const r=tn(e),o=await mi(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",f_).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&cu(e),c}),a=await Zt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function ly(e,t,n){return $e(e.app)?Promise.reject(dt(e)):p_(_t(e),Cn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cu(e),r})}function g_(e,t,n,r){return _t(e).onIdTokenChanged(t,n,r)}function m_(e,t,n){return _t(e).beforeAuthStateChanged(t,n)}function uy(e,t,n,r){return _t(e).onAuthStateChanged(t,n,r)}function fy(e){return _t(e).signOut()}const Yr="__sak";/**
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
 */class lu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yr,"1"),this.storage.removeItem(Yr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const __=1e3,v_=10;class uu extends lu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Hm()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,v_):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},__)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}uu.type="LOCAL";const y_=uu;/**
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
 */class fu extends lu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}fu.type="SESSION";const du=fu;/**
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
 */function b_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _s{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new _s(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await b_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_s.receivers=[];/**
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
 */function Qi(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class w_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Qi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rt(){return window}function E_(e){rt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function hu(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function I_(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function S_(){var e;return((e=navigator?.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function T_(){return hu()?self:null}/**
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
 */const pu="firebaseLocalStorageDb",C_=1,Qr="firebaseLocalStorage",gu="fbase_key";class _r{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vs(e,t){return e.transaction([Qr],t?"readwrite":"readonly").objectStore(Qr)}function A_(){const e=indexedDB.deleteDatabase(pu);return new _r(e).toPromise()}function _i(){const e=indexedDB.open(pu,C_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Qr,{keyPath:gu})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Qr)?t(r):(r.close(),await A_(),t(await _i()))})})}async function Na(e,t,n){const r=vs(e,!0).put({[gu]:t,value:n});return new _r(r).toPromise()}async function P_(e,t){const n=vs(e,!1).get(t),r=await new _r(n).toPromise();return r===void 0?null:r.value}function La(e,t){const n=vs(e,!0).delete(t);return new _r(n).toPromise()}const R_=800,k_=3;class mu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _i(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>k_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_s._getInstance(T_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await I_(),!this.activeServiceWorker)return;this.sender=new w_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||S_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await _i();return await Na(t,Yr,"1"),await La(t,Yr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Na(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>P_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>La(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=vs(s,!1).getAll();return new _r(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mu.type="LOCAL";const O_=mu;new pr(3e4,6e4);/**
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
 */function x_(e,t){return t?ft(t):(j(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Xi extends Ji{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return vn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return vn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return vn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function N_(e){return au(e.auth,new Xi(e),e.bypassAuthState)}function L_(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),h_(n,new Xi(e),e.bypassAuthState)}async function M_(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),d_(n,new Xi(e),e.bypassAuthState)}/**
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
 */class _u{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return N_;case"linkViaPopup":case"linkViaRedirect":return M_;case"reauthViaPopup":case"reauthViaRedirect":return L_;default:Ke(this.auth,"internal-error")}}resolve(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const D_=new pr(2e3,1e4);class cn extends _u{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const t=Qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,D_.get())};t()}}cn.currentPopupAction=null;/**
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
 */const U_="pendingRedirect",xr=new Map;class F_ extends _u{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=xr.get(this.auth._key());if(!t){try{const r=await H_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}xr.set(this.auth._key(),t)}return this.bypassAuthState||xr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function H_(e,t){const n=j_(t),r=B_(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $_(e,t){xr.set(e._key(),t)}function B_(e){return ft(e._redirectPersistence)}function j_(e){return Or(U_,e.config.apiKey,e.name)}async function V_(e,t,n=!1){if($e(e.app))return Promise.reject(dt(e));const r=tn(e),s=x_(r,t),o=await new F_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const W_=10*60*1e3;class K_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!z_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!vu(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=W_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ma(t))}saveEventToCache(t){this.cachedEventUids.add(Ma(t)),this.lastProcessedEventTime=Date.now()}}function Ma(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function vu({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function z_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vu(e);default:return!1}}/**
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
 */async function q_(e,t={}){return jt(e,"GET","/v1/projects",t)}/**
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
 */const G_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,J_=/^https?/;async function Y_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await q_(e);for(const n of t)try{if(Q_(n))return}catch{}Ke(e,"unauthorized-domain")}function Q_(e){const t=pi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!J_.test(n))return!1;if(G_.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const X_=new pr(3e4,6e4);function Da(){const e=rt().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Z_(e){return new Promise((t,n)=>{var r,s,i;function o(){Da(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Da(),n(nt(e,"network-request-failed"))},timeout:X_.get()})}if(!((s=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=rt().gapi)===null||i===void 0)&&i.load)o();else{const a=Gm("iframefcb");return rt()[a]=()=>{gapi.load?o():n(nt(e,"network-request-failed"))},nu(`${qm()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Nr=null,t})}let Nr=null;function ev(e){return Nr=Nr||Z_(e),Nr}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const tv=new pr(5e3,15e3),nv="__/auth/iframe",rv="emulator/auth/iframe",sv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ov(e){const t=e.config;j(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?zi(t,rv):`https://${e.config.authDomain}/${nv}`,r={apiKey:t.apiKey,appName:e.name,v:hr},s=iv.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${dr(r).slice(1)}`}async function av(e){const t=await ev(e),n=rt().gapi;return j(n,e,"internal-error"),t.open({where:document.body,url:ov(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nt(e,"network-request-failed"),a=rt().setTimeout(()=>{i(o)},tv.get());function c(){rt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const cv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lv=500,uv=600,fv="_blank",dv="http://localhost";class Ua{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hv(e,t,n,r=lv,s=uv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},cv),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ie().toLowerCase();n&&(a=Jl(l)?fv:n),ql(l)&&(t=t||dv,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(Fm(l)&&a!=="_self")return pv(t||"",a),new Ua(null);const f=window.open(t||"",a,u);j(f,e,"popup-blocked");try{f.focus()}catch{}return new Ua(f)}function pv(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const gv="__/auth/handler",mv="emulator/auth/handler",_v=encodeURIComponent("fac");async function Fa(e,t,n,r,s,i){j(e.config.authDomain,e,"auth-domain-config-required"),j(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:hr,eventId:s};if(t instanceof iu){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",sg(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof mr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${_v}=${encodeURIComponent(c)}`:"";return`${vv(e)}?${dr(a).slice(1)}${l}`}function vv({config:e}){return e.emulator?zi(e,mv):`https://${e.authDomain}/${gv}`}/**
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
 */const js="webStorageSupport";class yv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=du,this._completeRedirectFn=V_,this._overrideRedirectResult=$_}async _openPopup(t,n,r,s){var i;gt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Fa(t,n,r,pi(),s);return hv(t,o,Qi())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Fa(t,n,r,pi(),s);return E_(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await av(t),r=new K_(t);return n.register("authEvent",s=>(j(s?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(js,{type:js},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[js];o!==void 0&&n(!!o),Ke(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Y_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return eu()||Gl()||Gi()}}const bv=yv;var Ha="@firebase/auth",$a="1.10.8";/**
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
 */class wv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ev(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Iv(e){sr(new Sn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tu(e)},l=new Wm(r,s,i,c);return e_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),sr(new Sn("auth-internal",t=>{const n=tn(t.getProvider("auth").getImmediate());return(r=>new wv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(Ha,$a,Ev(e)),zn(Ha,$a,"esm2017")}/**
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
 */const Sv=5*60,Tv=xl("authIdTokenMaxAge")||Sv;let Ba=null;const Cv=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Tv)return;const s=n?.token;Ba!==s&&(Ba=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Av(e=am()){const t=Dl(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Zm(e,{popupRedirectResolver:bv,persistence:[O_,y_,du]}),r=xl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Cv(i.toString());m_(n,o,()=>o(n.currentUser)),g_(n,a=>o(a))}}const s=kl("auth");return s&&t_(n,`http://${s}`),n}function Pv(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Km({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Pv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Iv("Browser");const Vs=Ph(function(){const t=Op({scrollBehavior:()=>({left:0,top:0}),routes:Np,history:op("/Harmonies-Locales/")});return t.beforeEach((n,r,s)=>{const i=Av();n.matched.some(a=>a.meta.requiresAuth)&&!i.currentUser?s({path:"/login"}):s()}),t});async function Rv(e,t){const n=e(Ch);n.use(Eh,t);const r=rs(typeof Vs=="function"?await Vs({}):Vs);return{app:n,router:r}}const kv={config:{}},Ov="/Harmonies-Locales/";async function xv({app:e,router:t},n){let r=!1;const s=a=>{try{return t.resolve(a).href}catch{}return Object(a)===a?null:a},i=a=>{if(r=!0,typeof a=="string"&&/^https?:\/\//.test(a)){window.location.href=a;return}const c=s(a);c!==null&&(window.location.href=c)},o=window.location.href.replace(window.location.origin,"");for(let a=0;r===!1&&a<n.length;a++)try{await n[a]({app:e,router:t,ssrContext:null,redirect:i,urlPath:o,publicPath:Ov})}catch(c){if(c&&c.url){i(c.url);return}console.error("[Quasar] boot error:",c);return}r!==!0&&(e.use(t),e.mount("#q-app"))}Rv(Qd,kv).then(e=>{const[t,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(s=>{if(s.status==="rejected"){console.error("[Quasar] boot error:",s.reason);return}return s.value.default})]:["all",r=>r.map(s=>s.default)];return Promise[t]([zt(()=>import("./firebase-CKH9GCJR.js").then(r=>r.h),[])]).then(r=>{const s=n(r).filter(i=>typeof i=="function");xv(e,s)})});export{Yv as $,Zc as A,Fv as B,cd as C,Pf as D,fy as E,sy as F,Uv as G,Fe as H,Dv as I,Mu as J,ly as K,cy as L,Gv as M,Q as N,Bv as O,Ii as P,Nv as Q,dn as R,yf as S,$v as T,vf as U,ty as V,Vv as W,Qv as X,tt as Y,Jv as Z,Sh as _,He as a,Kv as a0,Wv as a1,Hv as a2,Mv as a3,wf as a4,mh as a5,ry as a6,zv as a7,Xv as a8,ii as a9,$e as aA,om as aB,Bo as aa,Ko as ab,Bi as ac,Lv as ad,Ef as ae,sh as af,ch as ag,qv as ah,am as ai,Dl as aj,iy as ak,gs as al,Vp as am,zp as an,In as ao,oy as ap,_t as aq,Nl as ar,ie as as,$t as at,ay as au,Ie as av,hr as aw,sr as ax,Sn as ay,zn as az,Mi as b,jv as c,mc as d,ny as e,et as f,Hi as g,$i as h,Qt as i,Zv as j,ey as k,bn as l,Tn as m,tr as n,Ni as o,Ar as p,xc as q,dc as r,is as s,Av as t,uy as u,Qc as v,Bn as w,hf as x,Jc as y,Ae as z};
