import{p as B,S as O,F as T,A as q,G as D,H,I as U}from"./vendor.0cd60ad9.js";import{b as R,u as F,m as Q,n as $,e as P,o as Z,_ as z,p as G,Z as J,q as M,r as V}from"./index.b11a84af.js";var K=Object.defineProperty,W=Object.getOwnPropertyDescriptor,X=(t,s,e,r)=>{for(var a=r>1?void 0:r?W(s,e):s,i=t.length-1,n;i>=0;i--)(n=t[i])&&(a=(r?n(s,e,a):n(a))||a);return r&&a&&K(s,e,a),a};class L extends O{constructor(s){super(),this.key="",this.key=s}save(){this.queue=[...this.queue],localStorage.setItem(this.key,JSON.stringify(this.queue))}}X([B({value:[]})],L.prototype,"queue",2);const Y=7200*1e3;class tt{constructor(s){this.provider=F().bridgeStore.bridge.provider,this.store=new L(`evm.txs.${s||this.provider.account}`),this.checking=new Set,this.check(!0)}get queue(){return this.store.queue}async add(s){if(!s.chainId){const{network:e}=this.provider;s.chainId=e.chainId,s.scan=e.scan}s.pending=!0,this.queue.unshift(s),this.store.save(),this.provider.nonce=+s.nonce+1}delDelay(s,e=0){setTimeout(()=>this.del(s),e)}del(s){var r,a;const e=(a=(r=s.hash)!=null?r:s.ts)!=null?a:s;this.queue.some((i,n)=>{if([i.hash,i.ts,i].includes(e)){n===0&&(this.provider.nonce=0);const c=this.queue.splice(n,1);return this.store.save(),c}})}async check(s){this.queue.forEach(async(e,r)=>{if(s&&r===0){const a=await Q(this.provider.account),i=+e.nonce;this.provider.nonce=i>a?i+1:a}if(e.done||new Date().getTime()-e.ts>=Y)return this.del(e);if(!e.err&&!(!s&&e.pending)){e.pending=!0;try{const a=await this.provider.provider.waitForTransaction(e.hash),{status:i}=a;e.status=i,i===1?(e.done=!0,this.del(e)):e.err=!0}catch(a){e.err=a}e.pending=!1}}),this.store.save()}}const _={},y=(t=R.bridge.account)=>_[t]||(_[t]=new tt(t)),et=async t=>t?typeof t=="object"?t:await Z(Object.assign({"./abi/Locker.codes.json":()=>z(()=>import("./Locker.codes.7346ac8c.js"),[])}),`./abi/${t}.codes.json`):{};class st{constructor(s,{errorCodes:e="",seq:r=void 0,delay:a=0,allowAlmostSuccess:i=!1}={}){this.pending=!0,this.status=-1,this.allowAlmostSuccess=i,this.txPromise=s,this.err=void 0,this.hash="",this.errorCodes=e,this.seq=r,this.delay=a}get success(){return this.status===1}get almostSuccess(){return this.status===4}get ignored(){return this.status===3}async wait(s=!1){return(async()=>{let e=!1;const r=await et(this.errorCodes);try{const a=await this.txPromise,{hash:i,nonce:n}=a;this.seq.nonce=n,this.seq&&(delete this.seq.overrides,y().add(Object.assign(this.seq,{hash:i}))),this.hash=i,this.status=2;const c=async()=>{const{status:o,events:h}=await a.wait(1);if(o!==1)throw this.seq&&(this.seq.err=!0),new Error("Failed");h.some(({event:l,args:C}={})=>{if(l==="Failure"){let{info:g,detail:w,error:p}=C;const x=p.toString(),k=r[p],A={code:x,message:k,error:p,info:g==null?void 0:g.toString(),detail:w==null?void 0:w.toString()};this.seq&&(this.seq.err=!0);const I=new Error(k);throw Object.assign(I,{code:x,raw:A}),this.allowAlmostSuccess&&(this.status=4),I}}),this.status=1,this.seq&&(this.seq.done=!0),this.delay?y().delDelay(i,this.delay):y().del(i)};s?(e=!0,c()):await c()}catch(a){throw await $(a),a.code===4001?this.status=3:this.status!==4&&(this.status=0),this.err=a,a}finally{this.pending=!1;const a=this.status===1;P.emit("tx-status",this.hash),a&&P.emit("tx-success",this.hash),e=a}return e})()}}const m={A:2,B:4,C:6},u=t=>[t,m[t]],at={"0x1":{"0x03783fac2efed8fbc9ad443e592ee30e61d65f471140c10ca155e937b435b760":u("A"),"0x1f675bff07515f5df96737194ea945c36c41e7b4fcef307b7cd4d0e602a69111":u("B"),"0x017e667f4b8c174291d1543c466717566e206df1bfd6f30271055ddafdb18f72":u("C")},"0xaa36a7":{"0x03783fac2efed8fbc9ad443e592ee30e61d65f471140c10ca155e937b435b760":u("A"),"0x1f675bff07515f5df96737194ea945c36c41e7b4fcef307b7cd4d0e602a69111":u("B"),"0x017e667f4b8c174291d1543c466717566e206df1bfd6f30271055ddafdb18f72":u("C")}},S=[64,130],E=async()=>(await V()).bridge,d=async t=>t||(await E()).account,j=async()=>at[(await E()).network.current.chainId],it=async()=>Object.fromEntries(Object.entries(await j()).map(t=>[t[1][0],t[0]])),f=async t=>G("Locker",{account:await d(t)}),b=t=>t.replace(/^0x/,""),v=t=>S[t.length<S[1]?0:1],rt=t=>(t=b(t),`0x${t.slice(0,v(t))}`),N=t=>{t=b(t);const s=v(t);return t.slice(s,s+1).toUpperCase()},nt=t=>(t=b(t),parseInt(t.slice(v(t)+1,t.length)||"0",16)),ut=t=>{var s,e;return(e=m[(s=N(t))!=null?s:"C"])!=null?e:m.C},ft=async t=>{t||(t=await d(t));const s=T(q("C"));let e="";return e=D(BigInt(t)^BigInt(s)),[e.replace("0x",""),"c","0"].join("")},dt=async t=>await(await f()).nameExists(t),lt=async(t,s=!1)=>(t||(t=await d()),await(await f(t))[s?"getUserPassesInfo":"getUserPassList"](t)),ct=async t=>{let s="";if(!t||t===J)return s;const e=await f();try{s=await e.getNameByHash(H(t))}catch(r){}return s},gt=async(t,s)=>{var i;const e=await f(s),r=await j();let a={id:t,cate:"C",len:6,name:""};try{const[n,c,o]=await e.getUserPassInfo(t),h=(i=r[c])!=null?i:Object.values(a);a={id:n,cate:h[0],hash:o,len:h[1],name:await ct(o)}}catch(n){}return a},wt=async(t,s="")=>{let{id:e,code:r,cate:a}=t;const i=!!e;e||(r=rt(t),a=(await it())[N(t)],e=nt(t));const n=await f(),c=i?"lockName":"lockPass",o={},h=i?[+e,s]:[r,s,a,+e];await M(o,n,c,h);const l=n[c](...h);return new st(l,{errorCodes:"Locker",allowAlmostSuccess:!0,seq:{type:i?"LockName":"lockPass",title:i?"Lock Name":"Lock Pass",ts:new Date().getTime(),overrides:o}})},pt=async t=>{t||(t=await d());const e=await(await f(t)).getUserInvitedNumber(t);return U(e[1],0)};export{S as L,ft as a,gt as b,dt as c,pt as d,f as e,lt as f,ut as g,j as h,ct as i,wt as l};
