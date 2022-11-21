System.register(["./index-legacy.09309c2e.js"],(function(t,e){"use strict";var r,s,i,a,n,o,c,h,u,l,f,d,m,g,w,v,b,p,y,x;return{setters:[t=>{r=t.w,s=t.z,i=t.B,a=t.A,n=t.C,o=t.D,c=t.E,h=t.F,u=t.G,l=t.a,f=t.H,d=t.I,m=t.J,g=t.f,w=t.K,v=t.M,b=t.O,p=t.Z,y=t.P,x=t.Q}],execute:function(){t("i",C);const e=new r(s),F={},_=i.from(0),S=i.from(-1);function E(t,s,i,a){const n={fault:s,operation:i};return void 0!==a&&(n.value=a),e.throwError(t,r.errors.NUMERIC_FAULT,n)}let N="0";for(;N.length<256;)N+=N;function q(t){if("number"!=typeof t)try{t=i.from(t).toNumber()}catch(r){}return"number"==typeof t&&t>=0&&t<=256&&!(t%1)?"1"+N.substring(0,t):e.throwArgumentError("invalid decimal size","decimals",t)}function U(t,e){null==e&&(e=0);const r=q(e),s=(t=i.from(t)).lt(_);s&&(t=t.mul(S));let a=t.mod(r).toString();for(;a.length<r.length-1;)a="0"+a;a=a.match(/^([0-9]*[1-9]|0)(0*)/)[1];const n=t.div(r).toString();return t=1===r.length?n:n+"."+a,s&&(t="-"+t),t}function k(t,r){null==r&&(r=0);const s=q(r);"string"==typeof t&&t.match(/^-?[0-9.]+$/)||e.throwArgumentError("invalid decimal value","value",t);const a="-"===t.substring(0,1);a&&(t=t.substring(1)),"."===t&&e.throwArgumentError("missing value","value",t);const n=t.split(".");n.length>2&&e.throwArgumentError("too many decimal points","value",t);let o=n[0],c=n[1];for(o||(o="0"),c||(c="0");"0"===c[c.length-1];)c=c.substring(0,c.length-1);for(c.length>s.length-1&&E("fractional component exceeds decimals","underflow","parseFixed"),""===c&&(c="0");c.length<s.length-1;)c+="0";const h=i.from(o),u=i.from(c);let l=h.mul(s).add(u);return a&&(l=l.mul(S)),l}class A{constructor(t,s,i,a){t!==F&&e.throwError("cannot use FixedFormat constructor; use FixedFormat.from",r.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=s,this.width=i,this.decimals=a,this.name=(s?"":"u")+"fixed"+String(i)+"x"+String(a),this._multiplier=q(a),Object.freeze(this)}static from(t){if(t instanceof A)return t;"number"==typeof t&&(t=`fixed128x${t}`);let r=!0,s=128,i=18;if("string"==typeof t)if("fixed"===t);else if("ufixed"===t)r=!1;else{const a=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);a||e.throwArgumentError("invalid fixed format","format",t),r="u"!==a[1],s=parseInt(a[2]),i=parseInt(a[3])}else if(t){const a=(r,s,i)=>null==t[r]?i:(typeof t[r]!==s&&e.throwArgumentError("invalid fixed format ("+r+" not "+s+")","format."+r,t[r]),t[r]);r=a("signed","boolean",r),s=a("width","number",s),i=a("decimals","number",i)}return s%8&&e.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",s),i>80&&e.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",i),new A(F,r,s,i)}}class O{constructor(t,s,i,a){t!==F&&e.throwError("cannot use FixedNumber constructor; use FixedNumber.from",r.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=a,this._hex=s,this._value=i,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&e.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);const e=k(this._value,this.format.decimals),r=k(t._value,t.format.decimals);return O.fromValue(e.add(r),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);const e=k(this._value,this.format.decimals),r=k(t._value,t.format.decimals);return O.fromValue(e.sub(r),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);const e=k(this._value,this.format.decimals),r=k(t._value,t.format.decimals);return O.fromValue(e.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);const e=k(this._value,this.format.decimals),r=k(t._value,t.format.decimals);return O.fromValue(e.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){const t=this.toString().split(".");1===t.length&&t.push("0");let e=O.from(t[0],this.format);const r=!t[1].match(/^(0*)$/);return this.isNegative()&&r&&(e=e.subUnsafe(I.toFormat(e.format))),e}ceiling(){const t=this.toString().split(".");1===t.length&&t.push("0");let e=O.from(t[0],this.format);const r=!t[1].match(/^(0*)$/);return!this.isNegative()&&r&&(e=e.addUnsafe(I.toFormat(e.format))),e}round(t){null==t&&(t=0);const r=this.toString().split(".");if(1===r.length&&r.push("0"),(t<0||t>80||t%1)&&e.throwArgumentError("invalid decimal count","decimals",t),r[1].length<=t)return this;const s=O.from("1"+N.substring(0,t),this.format),i=P.toFormat(this.format);return this.mulUnsafe(s).addUnsafe(i).floor().divUnsafe(s)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(t){if(null==t)return this._hex;t%8&&e.throwArgumentError("invalid byte width","width",t);const r=i.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return a(r,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return O.fromString(this._value,t)}static fromValue(t,e,r){return null!=r||null==e||n(e)||(r=e,e=null),null==e&&(e=0),null==r&&(r="fixed"),O.fromString(U(t,e),A.from(r))}static fromString(t,e){null==e&&(e="fixed");const r=A.from(e),s=k(t,r.decimals);!r.signed&&s.lt(_)&&E("unsigned value cannot be negative","overflow","value",t);let i=null;r.signed?i=s.toTwos(r.width).toHexString():(i=s.toHexString(),i=a(i,r.width/8));const n=U(s,r.decimals);return new O(F,i,n,r)}static fromBytes(t,e){null==e&&(e="fixed");const r=A.from(e);if(o(t).length>r.width/8)throw new Error("overflow");let s=i.from(t);r.signed&&(s=s.fromTwos(r.width));const a=s.toTwos((r.signed?0:1)+r.width).toHexString(),n=U(s,r.decimals);return new O(F,a,n,r)}static from(t,s){if("string"==typeof t)return O.fromString(t,s);if(c(t))return O.fromBytes(t,s);try{return O.fromValue(t,0,s)}catch(i){if(i.code!==r.errors.INVALID_ARGUMENT)throw i}return e.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!(!t||!t._isFixedNumber)}}const I=O.from(1),P=O.from("0.5");new r("units/5.7.0");const T=["wei","kwei","mwei","gwei","szabo","finney","ether"];function C(t,e){if("string"==typeof e){const t=T.indexOf(e);-1!==t&&(e=3*t)}return U(t,null!=e?e:18)}var j=Object.defineProperty,D=Object.getOwnPropertyDescriptor;class L extends u{constructor(t){super(),this.key="",this.key=t}save(){this.queue=[...this.queue],localStorage.setItem(this.key,JSON.stringify(this.queue))}}((t,e,r,s)=>{for(var i,a=s>1?void 0:s?D(e,r):e,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(s?i(e,r,a):i(a))||a);s&&a&&j(e,r,a)})([h({value:[]})],L.prototype,"queue",2);class B{constructor(t){this.provider=f().bridgeStore.bridge.provider,this.store=new L(`evm.txs.${t||this.provider.account}`),this.checking=new Set,this.check(!0)}get queue(){return this.store.queue}async add(t){if(!t.chainId){const{network:e}=this.provider;t.chainId=e.chainId,t.scan=e.scan}t.pending=!0,this.queue.unshift(t),this.store.save(),this.provider.nonce=+t.nonce+1}delDelay(t,e=0){setTimeout((()=>this.del(t)),e)}del(t){const e=t.hash??t.ts??t;this.queue.some(((t,r)=>{if([t.hash,t.ts,t].includes(e)){0===r&&(this.provider.nonce=0);const t=this.queue.splice(r,1);return this.store.save(),t}}))}async check(t){this.queue.forEach((async(e,r)=>{if(t&&0===r){const t=await d(this.provider.account),r=+e.nonce;this.provider.nonce=r>t?r+1:t}if(e.done||(new Date).getTime()-e.ts>=72e5)return this.del(e);if(!e.err&&(t||!e.pending)){e.pending=!0;try{const t=await this.provider.provider.waitForTransaction(e.hash),{status:r}=t;e.status=r,1===r?(e.done=!0,this.del(e)):e.err=!0}catch(s){e.err=s}e.pending=!1}})),this.store.save()}}const H={},V=(t=l.bridge.account)=>H[t]||(H[t]=new B(t));class ${constructor(t,{errorCodes:e="",seq:r,delay:s=0}={}){this.pending=!0,this.status=-1,this.txPromise=t,this.err=void 0,this.hash="",this.errorCodes=e,this.seq=r,this.delay=s}get success(){return 1===this.status}get ignored(){return 3===this.status}async wait(t=!1){return(async()=>{let e=!1;const r=await(async t=>({}))(this.errorCodes);try{const s=await this.txPromise,{hash:i,nonce:a}=s;this.seq.nonce=a,this.seq&&(delete this.seq.overrides,V().add(Object.assign(this.seq,{hash:i}))),this.hash=i,this.status=2;const n=async()=>{const{status:t,events:e}=await s.wait(1);if(1!==t)throw this.seq&&(this.seq.err=!0),new Error("Failed");e.some((({event:t,args:e}={})=>{if("Failure"===t){let{info:t,detail:s,error:i}=e;i=i.toString();const a={err:r[i],error:i,info:t?.toString(),detail:s?.toString()};throw this.seq&&(this.seq.err=!0),new Error(JSON.stringify(a))}})),this.status=1,this.seq&&(this.seq.done=!0),this.delay?V().delDelay(i,this.delay):V().del(i)};t?(e=!0,n()):await n()}catch(s){throw await m(s),this.status=0,4001===s.code&&(this.status=3),this.err=s,s}finally{this.pending=!1;const t=1===this.status;g.emit("tx-status",this.hash),t&&g.emit("tx-success",this.hash),e=t}return e})()}}const R={A:2,B:4,C:6},z=t=>[t,R[t]],M={"0x1":{"0x03783fac2efed8fbc9ad443e592ee30e61d65f471140c10ca155e937b435b760":z("A"),"0x1f675bff07515f5df96737194ea945c36c41e7b4fcef307b7cd4d0e602a69111":z("B"),"0x017e667f4b8c174291d1543c466717566e206df1bfd6f30271055ddafdb18f72":z("C")},"0xaa36a7":{"0x03783fac2efed8fbc9ad443e592ee30e61d65f471140c10ca155e937b435b760":z("A"),"0x1f675bff07515f5df96737194ea945c36c41e7b4fcef307b7cd4d0e602a69111":z("B"),"0x017e667f4b8c174291d1543c466717566e206df1bfd6f30271055ddafdb18f72":z("C")}},J=t("L",130),G=async()=>(await x()).bridge,Z=async t=>t||(await G()).account,K=t("h",(async()=>M[(await G()).network.current.chainId])),Q=t("e",(async t=>w("Locker",{account:await Z(t)}))),W=t=>t.replace(/^0x/,""),X=t=>W(t).slice(J,J+1).toUpperCase(),Y=(t("g",(t=>R[X(t)??"C"]??R.C)),t("a",(async t=>{const e=await G(),r=o(v(b("C"))),s=e.provider.getSigner(t||e.account);let i="";try{i=await s.signMessage(r)}catch(a){throw await m(a)}return[i.replace("0x",""),"c","0"].join("")})),t("c",(async t=>{const e=await Q();return await e.nameExists(t)})),t("f",(async(t,e=!1)=>{t||(t=await Z());const r=await Q(t);return await r[e?"getUserPassesInfo":"getUserPassList"](t)})),t("j",(async t=>{let e="";if(!t||t===p)return e;const r=await Q();try{e=await r.getNameByHash(o(t))}catch(s){}return e})));t("b",(async(t,e)=>{const r=await Q(e),s=await K();let i={id:t,cate:"C",len:6,name:""};try{const[e,a,n]=await r.getUserPassInfo(t),o=s[a]??Object.values(i);i={id:e,cate:o[0],hash:n,len:o[1],name:await Y(n)}}catch(a){}return i})),t("l",(async(t,e="")=>{let{id:r,code:s,cate:i}=t;const a=!!r;r||(s=(t=>`0x${W(t).slice(0,J)}`)(t),i=(await(async()=>Object.fromEntries(Object.entries(await K()).map((t=>[t[1][0],t[0]]))))())[X(t)],r=(t=>(t=W(t),parseInt(t.slice(J+1,t.length)||"0",16)))(t));const n=await Q(),o=a?"lockName":"lockPass",c={},h=a?[+r,e]:[s,e,i,+r];await y(c,n,o,h);const u=n[o](...h);return new $(u,{seq:{type:a?"LockName":"lockPass",title:a?"Lock Name":"Lock Pass",ts:(new Date).getTime(),overrides:c}})})),t("d",(async t=>{t||(t=await Z());const e=await Q(t);return C((await e.getUserInvitedNumber(t))[1],0)}))}}}));
