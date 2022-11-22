System.register(["./index-legacy.248bdf8a.js"],(function(t,e){"use strict";var r,s,i,a,o,n,c,h,u,l,d,f,m,g,w,v,b,p,y,x,S;return{setters:[t=>{r=t.z,s=t.A,i=t.B,a=t.C,o=t.D,n=t.E,c=t.F,h=t.G,u=t.H,l=t.a,d=t.I,f=t.J,m=t.K,g=t.f,w=t.M,v=t.O,b=t.P,p=t.v,y=t.Z,x=t.Q,S=t.R}],execute:function(){t("i",C);const e=new r(s),F={},_=i.from(0),E=i.from(-1);function A(t,s,i,a){const o={fault:s,operation:i};return void 0!==a&&(o.value=a),e.throwError(t,r.errors.NUMERIC_FAULT,o)}let N="0";for(;N.length<256;)N+=N;function q(t){if("number"!=typeof t)try{t=i.from(t).toNumber()}catch(r){}return"number"==typeof t&&t>=0&&t<=256&&!(t%1)?"1"+N.substring(0,t):e.throwArgumentError("invalid decimal size","decimals",t)}function k(t,e){null==e&&(e=0);const r=q(e),s=(t=i.from(t)).lt(_);s&&(t=t.mul(E));let a=t.mod(r).toString();for(;a.length<r.length-1;)a="0"+a;a=a.match(/^([0-9]*[1-9]|0)(0*)/)[1];const o=t.div(r).toString();return t=1===r.length?o:o+"."+a,s&&(t="-"+t),t}function U(t,r){null==r&&(r=0);const s=q(r);"string"==typeof t&&t.match(/^-?[0-9.]+$/)||e.throwArgumentError("invalid decimal value","value",t);const a="-"===t.substring(0,1);a&&(t=t.substring(1)),"."===t&&e.throwArgumentError("missing value","value",t);const o=t.split(".");o.length>2&&e.throwArgumentError("too many decimal points","value",t);let n=o[0],c=o[1];for(n||(n="0"),c||(c="0");"0"===c[c.length-1];)c=c.substring(0,c.length-1);for(c.length>s.length-1&&A("fractional component exceeds decimals","underflow","parseFixed"),""===c&&(c="0");c.length<s.length-1;)c+="0";const h=i.from(n),u=i.from(c);let l=h.mul(s).add(u);return a&&(l=l.mul(E)),l}class O{constructor(t,s,i,a){t!==F&&e.throwError("cannot use FixedFormat constructor; use FixedFormat.from",r.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=s,this.width=i,this.decimals=a,this.name=(s?"":"u")+"fixed"+String(i)+"x"+String(a),this._multiplier=q(a),Object.freeze(this)}static from(t){if(t instanceof O)return t;"number"==typeof t&&(t=`fixed128x${t}`);let r=!0,s=128,i=18;if("string"==typeof t)if("fixed"===t);else if("ufixed"===t)r=!1;else{const a=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);a||e.throwArgumentError("invalid fixed format","format",t),r="u"!==a[1],s=parseInt(a[2]),i=parseInt(a[3])}else if(t){const a=(r,s,i)=>null==t[r]?i:(typeof t[r]!==s&&e.throwArgumentError("invalid fixed format ("+r+" not "+s+")","format."+r,t[r]),t[r]);r=a("signed","boolean",r),s=a("width","number",s),i=a("decimals","number",i)}return s%8&&e.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",s),i>80&&e.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",i),new O(F,r,s,i)}}class I{constructor(t,s,i,a){t!==F&&e.throwError("cannot use FixedNumber constructor; use FixedNumber.from",r.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=a,this._hex=s,this._value=i,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&e.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);const e=U(this._value,this.format.decimals),r=U(t._value,t.format.decimals);return I.fromValue(e.add(r),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);const e=U(this._value,this.format.decimals),r=U(t._value,t.format.decimals);return I.fromValue(e.sub(r),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);const e=U(this._value,this.format.decimals),r=U(t._value,t.format.decimals);return I.fromValue(e.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);const e=U(this._value,this.format.decimals),r=U(t._value,t.format.decimals);return I.fromValue(e.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){const t=this.toString().split(".");1===t.length&&t.push("0");let e=I.from(t[0],this.format);const r=!t[1].match(/^(0*)$/);return this.isNegative()&&r&&(e=e.subUnsafe(P.toFormat(e.format))),e}ceiling(){const t=this.toString().split(".");1===t.length&&t.push("0");let e=I.from(t[0],this.format);const r=!t[1].match(/^(0*)$/);return!this.isNegative()&&r&&(e=e.addUnsafe(P.toFormat(e.format))),e}round(t){null==t&&(t=0);const r=this.toString().split(".");if(1===r.length&&r.push("0"),(t<0||t>80||t%1)&&e.throwArgumentError("invalid decimal count","decimals",t),r[1].length<=t)return this;const s=I.from("1"+N.substring(0,t),this.format),i=j.toFormat(this.format);return this.mulUnsafe(s).addUnsafe(i).floor().divUnsafe(s)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(t){if(null==t)return this._hex;t%8&&e.throwArgumentError("invalid byte width","width",t);const r=i.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return a(r,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return I.fromString(this._value,t)}static fromValue(t,e,r){return null!=r||null==e||o(e)||(r=e,e=null),null==e&&(e=0),null==r&&(r="fixed"),I.fromString(k(t,e),O.from(r))}static fromString(t,e){null==e&&(e="fixed");const r=O.from(e),s=U(t,r.decimals);!r.signed&&s.lt(_)&&A("unsigned value cannot be negative","overflow","value",t);let i=null;r.signed?i=s.toTwos(r.width).toHexString():(i=s.toHexString(),i=a(i,r.width/8));const o=k(s,r.decimals);return new I(F,i,o,r)}static fromBytes(t,e){null==e&&(e="fixed");const r=O.from(e);if(n(t).length>r.width/8)throw new Error("overflow");let s=i.from(t);r.signed&&(s=s.fromTwos(r.width));const a=s.toTwos((r.signed?0:1)+r.width).toHexString(),o=k(s,r.decimals);return new I(F,a,o,r)}static from(t,s){if("string"==typeof t)return I.fromString(t,s);if(c(t))return I.fromBytes(t,s);try{return I.fromValue(t,0,s)}catch(i){if(i.code!==r.errors.INVALID_ARGUMENT)throw i}return e.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!(!t||!t._isFixedNumber)}}const P=I.from(1),j=I.from("0.5");new r("units/5.7.0");const T=["wei","kwei","mwei","gwei","szabo","finney","ether"];function C(t,e){if("string"==typeof e){const t=T.indexOf(e);-1!==t&&(e=3*t)}return k(t,null!=e?e:18)}var D=Object.defineProperty,L=Object.getOwnPropertyDescriptor;class $ extends u{constructor(t){super(),this.key="",this.key=t}save(){this.queue=[...this.queue],localStorage.setItem(this.key,JSON.stringify(this.queue))}}((t,e,r,s)=>{for(var i,a=s>1?void 0:s?L(e,r):e,o=t.length-1;o>=0;o--)(i=t[o])&&(a=(s?i(e,r,a):i(a))||a);s&&a&&D(e,r,a)})([h({value:[]})],$.prototype,"queue",2);class B{constructor(t){this.provider=d().bridgeStore.bridge.provider,this.store=new $(`evm.txs.${t||this.provider.account}`),this.checking=new Set,this.check(!0)}get queue(){return this.store.queue}async add(t){if(!t.chainId){const{network:e}=this.provider;t.chainId=e.chainId,t.scan=e.scan}t.pending=!0,this.queue.unshift(t),this.store.save(),this.provider.nonce=+t.nonce+1}delDelay(t,e=0){setTimeout((()=>this.del(t)),e)}del(t){const e=t.hash??t.ts??t;this.queue.some(((t,r)=>{if([t.hash,t.ts,t].includes(e)){0===r&&(this.provider.nonce=0);const t=this.queue.splice(r,1);return this.store.save(),t}}))}async check(t){this.queue.forEach((async(e,r)=>{if(t&&0===r){const t=await f(this.provider.account),r=+e.nonce;this.provider.nonce=r>t?r+1:t}if(e.done||(new Date).getTime()-e.ts>=72e5)return this.del(e);if(!e.err&&(t||!e.pending)){e.pending=!0;try{const t=await this.provider.provider.waitForTransaction(e.hash),{status:r}=t;e.status=r,1===r?(e.done=!0,this.del(e)):e.err=!0}catch(s){e.err=s}e.pending=!1}})),this.store.save()}}const H={},R=(t=l.bridge.account)=>H[t]||(H[t]=new B(t));class V{constructor(t,{errorCodes:e="",seq:r,delay:s=0,allowAlmostSuccess:i=!1}={}){this.pending=!0,this.status=-1,this.allowAlmostSuccess=i,this.txPromise=t,this.err=void 0,this.hash="",this.errorCodes=e,this.seq=r,this.delay=s}get success(){return 1===this.status}get almostSuccess(){return 4===this.status}get ignored(){return 3===this.status}async wait(t=!1){return(async()=>{let e=!1;const r=await(async t=>t?"object"==typeof t?t:await w(Object.assign({}),`./abi/${t}.codes.json`):{})(this.errorCodes);try{const s=await this.txPromise,{hash:i,nonce:a}=s;this.seq.nonce=a,this.seq&&(delete this.seq.overrides,R().add(Object.assign(this.seq,{hash:i}))),this.hash=i,this.status=2;const o=async()=>{const{status:t,events:e}=await s.wait(1);if(1!==t)throw this.seq&&(this.seq.err=!0),new Error("Failed");e.some((({event:t,args:e}={})=>{if("Failure"===t){let{info:t,detail:s,error:i}=e;const a=i.toString(),o=r[i],n={code:a,message:o,error:i,info:t?.toString(),detail:s?.toString()};this.seq&&(this.seq.err=!0);const c=new Error(o);throw Object.assign(c,{code:a,raw:n}),this.allowAlmostSuccess&&(this.status=4),c}})),this.status=1,this.seq&&(this.seq.done=!0),this.delay?R().delDelay(i,this.delay):R().del(i)};t?(e=!0,o()):await o()}catch(s){throw await m(s),4001===s.code?this.status=3:4!==this.status&&(this.status=0),this.err=s,s}finally{this.pending=!1;const t=1===this.status;g.emit("tx-status",this.hash),t&&g.emit("tx-success",this.hash),e=t}return e})()}}const z={A:2,B:4,C:6},M=t=>[t,z[t]],G={"0x1":{"0x03783fac2efed8fbc9ad443e592ee30e61d65f471140c10ca155e937b435b760":M("A"),"0x1f675bff07515f5df96737194ea945c36c41e7b4fcef307b7cd4d0e602a69111":M("B"),"0x017e667f4b8c174291d1543c466717566e206df1bfd6f30271055ddafdb18f72":M("C")},"0xaa36a7":{"0x03783fac2efed8fbc9ad443e592ee30e61d65f471140c10ca155e937b435b760":M("A"),"0x1f675bff07515f5df96737194ea945c36c41e7b4fcef307b7cd4d0e602a69111":M("B"),"0x017e667f4b8c174291d1543c466717566e206df1bfd6f30271055ddafdb18f72":M("C")}},J=t("L",130),Z=async()=>(await S()).bridge,K=async t=>t||(await Z()).account,Q=t("h",(async()=>G[(await Z()).network.current.chainId])),W=t("e",(async t=>v("Locker",{account:await K(t)}))),X=t=>t.replace(/^0x/,""),Y=t=>X(t).slice(J,J+1).toUpperCase(),tt=(t("g",(t=>z[Y(t)??"C"]??z.C)),t("a",(async t=>{const e=await Z(),r=n(b(p("C"))),s=e.provider.getSigner(t||e.account);let i="";try{i=await s.signMessage(r)}catch(a){throw await m(a)}return[i.replace("0x",""),"c","0"].join("")})),t("c",(async t=>{const e=await W();return await e.nameExists(t)})),t("f",(async(t,e=!1)=>{t||(t=await K());const r=await W(t);return await r[e?"getUserPassesInfo":"getUserPassList"](t)})),t("j",(async t=>{let e="";if(!t||t===y)return e;const r=await W();try{e=await r.getNameByHash(n(t))}catch(s){}return e})));t("b",(async(t,e)=>{const r=await W(e),s=await Q();let i={id:t,cate:"C",len:6,name:""};try{const[e,a,o]=await r.getUserPassInfo(t),n=s[a]??Object.values(i);i={id:e,cate:n[0],hash:o,len:n[1],name:await tt(o)}}catch(a){}return i})),t("l",(async(t,e="")=>{let{id:r,code:s,cate:i}=t;const a=!!r;r||(s=(t=>`0x${X(t).slice(0,J)}`)(t),i=(await(async()=>Object.fromEntries(Object.entries(await Q()).map((t=>[t[1][0],t[0]]))))())[Y(t)],r=(t=>(t=X(t),parseInt(t.slice(J+1,t.length)||"0",16)))(t));const o=await W(),n=a?"lockName":"lockPass",c={},h=a?[+r,e]:[s,e,i,+r];await x(c,o,n,h);const u=o[n](...h);return new V(u,{errorCodes:"Locker",allowAlmostSuccess:!0,seq:{type:a?"LockName":"lockPass",title:a?"Lock Name":"Lock Pass",ts:(new Date).getTime(),overrides:c}})})),t("d",(async t=>{t||(t=await K());const e=await W(t);return C((await e.getUserInvitedNumber(t))[1],0)}))}}}));
