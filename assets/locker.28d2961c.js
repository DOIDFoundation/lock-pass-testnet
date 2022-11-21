import{z as w,A as J,B as m,C as j,D as K,E as _,F as W,G as X,H as Y,a as tt,I as et,J as st,K as V,f as R,M as rt,O as it,P as nt,v as ot,Z as at,Q as ct,R as ft}from"./index.bc8036e7.js";const c=new w(J),b={},$=m.from(0),q=m.from(-1);function M(s,t,e,r){const i={fault:t,operation:e};return r!==void 0&&(i.value=r),c.throwError(s,w.errors.NUMERIC_FAULT,i)}let y="0";for(;y.length<256;)y+=y;function F(s){if(typeof s!="number")try{s=m.from(s).toNumber()}catch(t){}return typeof s=="number"&&s>=0&&s<=256&&!(s%1)?"1"+y.substring(0,s):c.throwArgumentError("invalid decimal size","decimals",s)}function x(s,t){t==null&&(t=0);const e=F(t);s=m.from(s);const r=s.lt($);r&&(s=s.mul(q));let i=s.mod(e).toString();for(;i.length<e.length-1;)i="0"+i;i=i.match(/^([0-9]*[1-9]|0)(0*)/)[1];const n=s.div(e).toString();return e.length===1?s=n:s=n+"."+i,r&&(s="-"+s),s}function l(s,t){t==null&&(t=0);const e=F(t);(typeof s!="string"||!s.match(/^-?[0-9.]+$/))&&c.throwArgumentError("invalid decimal value","value",s);const r=s.substring(0,1)==="-";r&&(s=s.substring(1)),s==="."&&c.throwArgumentError("missing value","value",s);const i=s.split(".");i.length>2&&c.throwArgumentError("too many decimal points","value",s);let n=i[0],o=i[1];for(n||(n="0"),o||(o="0");o[o.length-1]==="0";)o=o.substring(0,o.length-1);for(o.length>e.length-1&&M("fractional component exceeds decimals","underflow","parseFixed"),o===""&&(o="0");o.length<e.length-1;)o+="0";const f=m.from(n),h=m.from(o);let u=f.mul(e).add(h);return r&&(u=u.mul(q)),u}class g{constructor(t,e,r,i){t!==b&&c.throwError("cannot use FixedFormat constructor; use FixedFormat.from",w.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=e,this.width=r,this.decimals=i,this.name=(e?"":"u")+"fixed"+String(r)+"x"+String(i),this._multiplier=F(i),Object.freeze(this)}static from(t){if(t instanceof g)return t;typeof t=="number"&&(t=`fixed128x${t}`);let e=!0,r=128,i=18;if(typeof t=="string"){if(t!=="fixed")if(t==="ufixed")e=!1;else{const n=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);n||c.throwArgumentError("invalid fixed format","format",t),e=n[1]!=="u",r=parseInt(n[2]),i=parseInt(n[3])}}else if(t){const n=(o,f,h)=>t[o]==null?h:(typeof t[o]!==f&&c.throwArgumentError("invalid fixed format ("+o+" not "+f+")","format."+o,t[o]),t[o]);e=n("signed","boolean",e),r=n("width","number",r),i=n("decimals","number",i)}return r%8&&c.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",r),i>80&&c.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",i),new g(b,e,r,i)}}class a{constructor(t,e,r,i){t!==b&&c.throwError("cannot use FixedNumber constructor; use FixedNumber.from",w.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=i,this._hex=e,this._value=r,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&c.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);const e=l(this._value,this.format.decimals),r=l(t._value,t.format.decimals);return a.fromValue(e.add(r),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);const e=l(this._value,this.format.decimals),r=l(t._value,t.format.decimals);return a.fromValue(e.sub(r),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);const e=l(this._value,this.format.decimals),r=l(t._value,t.format.decimals);return a.fromValue(e.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);const e=l(this._value,this.format.decimals),r=l(t._value,t.format.decimals);return a.fromValue(e.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){const t=this.toString().split(".");t.length===1&&t.push("0");let e=a.from(t[0],this.format);const r=!t[1].match(/^(0*)$/);return this.isNegative()&&r&&(e=e.subUnsafe(D.toFormat(e.format))),e}ceiling(){const t=this.toString().split(".");t.length===1&&t.push("0");let e=a.from(t[0],this.format);const r=!t[1].match(/^(0*)$/);return!this.isNegative()&&r&&(e=e.addUnsafe(D.toFormat(e.format))),e}round(t){t==null&&(t=0);const e=this.toString().split(".");if(e.length===1&&e.push("0"),(t<0||t>80||t%1)&&c.throwArgumentError("invalid decimal count","decimals",t),e[1].length<=t)return this;const r=a.from("1"+y.substring(0,t),this.format),i=ht.toFormat(this.format);return this.mulUnsafe(r).addUnsafe(i).floor().divUnsafe(r)}isZero(){return this._value==="0.0"||this._value==="0"}isNegative(){return this._value[0]==="-"}toString(){return this._value}toHexString(t){if(t==null)return this._hex;t%8&&c.throwArgumentError("invalid byte width","width",t);const e=m.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return j(e,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return a.fromString(this._value,t)}static fromValue(t,e,r){return r==null&&e!=null&&!K(e)&&(r=e,e=null),e==null&&(e=0),r==null&&(r="fixed"),a.fromString(x(t,e),g.from(r))}static fromString(t,e){e==null&&(e="fixed");const r=g.from(e),i=l(t,r.decimals);!r.signed&&i.lt($)&&M("unsigned value cannot be negative","overflow","value",t);let n=null;r.signed?n=i.toTwos(r.width).toHexString():(n=i.toHexString(),n=j(n,r.width/8));const o=x(i,r.decimals);return new a(b,n,o,r)}static fromBytes(t,e){e==null&&(e="fixed");const r=g.from(e);if(_(t).length>r.width/8)throw new Error("overflow");let i=m.from(t);r.signed&&(i=i.fromTwos(r.width));const n=i.toTwos((r.signed?0:1)+r.width).toHexString(),o=x(i,r.decimals);return new a(b,n,o,r)}static from(t,e){if(typeof t=="string")return a.fromString(t,e);if(W(t))return a.fromBytes(t,e);try{return a.fromValue(t,0,e)}catch(r){if(r.code!==w.errors.INVALID_ARGUMENT)throw r}return c.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!!(t&&t._isFixedNumber)}}const D=a.from(1),ht=a.from("0.5"),ut="units/5.7.0";new w(ut);const lt=["wei","kwei","mwei","gwei","szabo","finney","ether"];function mt(s,t){if(typeof t=="string"){const e=lt.indexOf(t);e!==-1&&(t=3*e)}return x(s,t!=null?t:18)}var dt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,wt=(s,t,e,r)=>{for(var i=r>1?void 0:r?gt(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&dt(t,e,i),i};class z extends Y{constructor(t){super(),this.key="",this.key=t}save(){this.queue=[...this.queue],localStorage.setItem(this.key,JSON.stringify(this.queue))}}wt([X({value:[]})],z.prototype,"queue",2);const pt=7200*1e3;class bt{constructor(t){this.provider=et().bridgeStore.bridge.provider,this.store=new z(`evm.txs.${t||this.provider.account}`),this.checking=new Set,this.check(!0)}get queue(){return this.store.queue}async add(t){if(!t.chainId){const{network:e}=this.provider;t.chainId=e.chainId,t.scan=e.scan}t.pending=!0,this.queue.unshift(t),this.store.save(),this.provider.nonce=+t.nonce+1}delDelay(t,e=0){setTimeout(()=>this.del(t),e)}del(t){var r,i;const e=(i=(r=t.hash)!=null?r:t.ts)!=null?i:t;this.queue.some((n,o)=>{if([n.hash,n.ts,n].includes(e)){o===0&&(this.provider.nonce=0);const f=this.queue.splice(o,1);return this.store.save(),f}})}async check(t){this.queue.forEach(async(e,r)=>{if(t&&r===0){const i=await st(this.provider.account),n=+e.nonce;this.provider.nonce=n>i?n+1:i}if(e.done||new Date().getTime()-e.ts>=pt)return this.del(e);if(!e.err&&!(!t&&e.pending)){e.pending=!0;try{const i=await this.provider.provider.waitForTransaction(e.hash),{status:n}=i;e.status=n,n===1?(e.done=!0,this.del(e)):e.err=!0}catch(i){e.err=i}e.pending=!1}}),this.store.save()}}const H={},P=(s=tt.bridge.account)=>H[s]||(H[s]=new bt(s)),yt=async s=>s?typeof s=="object"?s:await rt(Object.assign({}),`./abi/${s}.codes.json`):{};class xt{constructor(t,{errorCodes:e="",seq:r=void 0,delay:i=0,allowAlmostSuccess:n=!1}={}){this.pending=!0,this.status=-1,this.allowAlmostSuccess=n,this.txPromise=t,this.err=void 0,this.hash="",this.errorCodes=e,this.seq=r,this.delay=i}get success(){return this.status===1}get almostSuccess(){return this.status===4}get ignored(){return this.status===3}async wait(t=!1){return(async()=>{let e=!1;const r=await yt(this.errorCodes);try{const i=await this.txPromise,{hash:n,nonce:o}=i;this.seq.nonce=o,this.seq&&(delete this.seq.overrides,P().add(Object.assign(this.seq,{hash:n}))),this.hash=n,this.status=2;const f=async()=>{const{status:h,events:u}=await i.wait(1);if(h!==1)throw this.seq&&(this.seq.err=!0),new Error("Failed");u.some(({event:S,args:T}={})=>{if(S==="Failure"){let{info:E,detail:C,error:A}=T;const N=A.toString(),B=r[A],G={code:N,message:B,error:A,info:E==null?void 0:E.toString(),detail:C==null?void 0:C.toString()};this.seq&&(this.seq.err=!0);const L=new Error(B);throw Object.assign(L,{code:N,raw:G}),this.allowAlmostSuccess&&(this.status=4),L}}),this.status=1,this.seq&&(this.seq.done=!0),this.delay?P().delDelay(n,this.delay):P().del(n)};t?(e=!0,f()):await f()}catch(i){throw await V(i),i.code===4001?this.status=3:this.status!==4&&(this.status=0),this.err=i,i}finally{this.pending=!1;const i=this.status===1;R.emit("tx-status",this.hash),i&&R.emit("tx-success",this.hash),e=i}return e})()}}const U={A:2,B:4,C:6},d=s=>[s,U[s]],vt={"0x1":{"0x03783fac2efed8fbc9ad443e592ee30e61d65f471140c10ca155e937b435b760":d("A"),"0x1f675bff07515f5df96737194ea945c36c41e7b4fcef307b7cd4d0e602a69111":d("B"),"0x017e667f4b8c174291d1543c466717566e206df1bfd6f30271055ddafdb18f72":d("C")},"0xaa36a7":{"0x03783fac2efed8fbc9ad443e592ee30e61d65f471140c10ca155e937b435b760":d("A"),"0x1f675bff07515f5df96737194ea945c36c41e7b4fcef307b7cd4d0e602a69111":d("B"),"0x017e667f4b8c174291d1543c466717566e206df1bfd6f30271055ddafdb18f72":d("C")}},v=130,I=async()=>(await ft()).bridge,O=async s=>s||(await I()).account,Z=async()=>vt[(await I()).network.current.chainId],St=async()=>Object.fromEntries(Object.entries(await Z()).map(s=>[s[1][0],s[0]])),p=async s=>it("Locker",{account:await O(s)}),k=s=>s.replace(/^0x/,""),Et=s=>`0x${k(s).slice(0,v)}`,Q=s=>k(s).slice(v,v+1).toUpperCase(),Ct=s=>(s=k(s),parseInt(s.slice(v+1,s.length)||"0",16)),Ut=s=>{var t,e;return(e=U[(t=Q(s))!=null?t:"C"])!=null?e:U.C},_t=async s=>{const t=await I(),e=_(nt(ot("C"))),r=t.provider.getSigner(s||t.account);let i="";try{i=await r.signMessage(e)}catch(n){throw await V(n)}return[i.replace("0x",""),"c","0"].join("")},Ft=async s=>await(await p()).nameExists(s),It=async(s,t=!1)=>(s||(s=await O()),await(await p(s))[t?"getUserPassesInfo":"getUserPassList"](s)),At=async s=>{let t="";if(!s||s===at)return t;const e=await p();try{t=await e.getNameByHash(_(s))}catch(r){}return t},Ot=async(s,t)=>{var n;const e=await p(t),r=await Z();let i={id:s,cate:"C",len:6,name:""};try{const[o,f,h]=await e.getUserPassInfo(s),u=(n=r[f])!=null?n:Object.values(i);i={id:o,cate:u[0],hash:h,len:u[1],name:await At(h)}}catch(o){}return i},kt=async(s,t="")=>{let{id:e,code:r,cate:i}=s;const n=!!e;e||(r=Et(s),i=(await St())[Q(s)],e=Ct(s));const o=await p(),f=n?"lockName":"lockPass",h={},u=n?[+e,t]:[r,t,i,+e];await ct(h,o,f,u);const S=o[f](...u);return new xt(S,{errorCodes:"Locker",allowAlmostSuccess:!0,seq:{type:n?"LockName":"lockPass",title:n?"Lock Name":"Lock Pass",ts:new Date().getTime(),overrides:h}})},Tt=async s=>{s||(s=await O());const e=await(await p(s)).getUserInvitedNumber(s);return mt(e[1],0)};export{v as L,_t as a,Ot as b,Ft as c,Tt as d,p as e,It as f,Ut as g,Z as h,mt as i,At as j,kt as l};
