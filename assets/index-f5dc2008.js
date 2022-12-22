import{p as z,S as Z,z as J,v as M,A as W,D as G,E as K,b as D,y as l,h as p,e as N,n as _,j as X}from"./vendor-cf07880b.js";import{b as g,u as Y,g as tt,n as st,e as A,_ as et,a as E,c as at,Z as it,d as rt,f as nt,T as U,s as ct}from"./index-029c98ac.js";var ot=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,lt=(t,s,e,i)=>{for(var a=i>1?void 0:i?ht(s,e):s,r=t.length-1,n;r>=0;r--)(n=t[r])&&(a=(i?n(s,e,a):n(a))||a);return i&&a&&ot(s,e,a),a};class H extends Z{constructor(s){super(),this.key="",this.key=s}save(){this.queue=[...this.queue],localStorage.setItem(this.key,JSON.stringify(this.queue))}}lt([z({value:[]})],H.prototype,"queue",2);const ut=7200*1e3;class dt{constructor(s){this.provider=Y().bridgeStore.bridge.provider,this.store=new H(`evm.txs.${s||this.provider.account}`),this.checking=new Set,this.check(!0)}get queue(){return this.store.queue}async add(s){if(!s.chainId){const{network:e}=this.provider;s.chainId=e.chainId,s.scan=e.scan}s.pending=!0,this.queue.unshift(s),this.store.save(),this.provider.nonce=+s.nonce+1}delDelay(s,e=0){setTimeout(()=>this.del(s),e)}del(s){var i,a;const e=(a=(i=s.hash)!=null?i:s.ts)!=null?a:s;this.queue.some((r,n)=>{if([r.hash,r.ts,r].includes(e)){n===0&&(this.provider.nonce=0);const c=this.queue.splice(n,1);return this.store.save(),c}})}async check(s){this.queue.forEach(async(e,i)=>{if(s&&i===0){const a=await tt(this.provider.account),r=+e.nonce;this.provider.nonce=r>a?r+1:a}if(e.done||new Date().getTime()-e.ts>=ut)return this.del(e);if(!e.err&&!(!s&&e.pending)){e.pending=!0;try{const a=await this.provider.provider.waitForTransaction(e.hash),{status:r}=a;e.status=r,r===1?(e.done=!0,this.del(e)):e.err=!0}catch(a){e.err=a}e.pending=!1}}),this.store.save()}}const L={},C=(t=g.bridge.account)=>L[t]||(L[t]=new dt(t)),ft=async t=>t?typeof t=="object"?t:await et(Object.assign({"./abi/Locker.codes.json":()=>E(()=>import("./Locker.codes-d3f42ed5.js"),[]),"./abi/Resolver.codes.json":()=>E(()=>import("./Resolver.codes-ee4f74d3.js"),[])}),`./abi/${t}.codes.json`):{};class gt{constructor(s,{errorCodes:e="",seq:i=void 0,delay:a=0,allowAlmostSuccess:r=!1,onSent:n=()=>{}}={}){this.pending=!0,this.status=-1,this.allowAlmostSuccess=r,this.txPromise=s,this.err=void 0,this.hash="",this.errorCodes=e,this.seq=i,this.delay=a,this.onSent=n}get success(){return this.status===1}get almostSuccess(){return this.status===4}get ignored(){return this.status===3}async wait(s=!1){return(async()=>{let e=!1;const i=await ft(this.errorCodes);try{const a=await this.txPromise;this.onSent(a);const{hash:r,nonce:n}=a;this.seq.nonce=n,this.seq&&(delete this.seq.overrides,C().add(Object.assign(this.seq,{hash:r}))),this.hash=r,this.status=2;const c=async()=>{const{status:o,events:h}=await a.wait(1);if(o!==1)throw this.seq&&(this.seq.err=!0),new Error("Failed");h.some(({event:x,args:$}={})=>{if(x==="Failure"){let{info:y,detail:v,error:b}=$;const j=b.toString(),I=i[b],Q={code:j,message:I,error:b,info:y==null?void 0:y.toString(),detail:v==null?void 0:v.toString()};this.seq&&(this.seq.err=!0);const T=new Error(I);throw Object.assign(T,{code:j,raw:Q}),this.allowAlmostSuccess&&(this.status=4),T}}),this.status=1,this.seq&&(this.seq.done=!0),this.delay?C().delDelay(r,this.delay):C().del(r)};s?(e=!0,c()):await c()}catch(a){throw await st(a),a.code===4001?this.status=3:this.status!==4&&(this.status=0),this.err=a,a}finally{this.pending=!1;const a=this.status===1;A.emit("tx-status",this.hash),a&&A.emit("tx-success",this.hash),e=a}return e})()}}const S={A:2,B:4,C:6},u=t=>[t,S[t]],pt={"0x1":{"0x03783fac2efed8fbc9ad443e592ee30e61d65f471140c10ca155e937b435b760":u("A"),"0x1f675bff07515f5df96737194ea945c36c41e7b4fcef307b7cd4d0e602a69111":u("B"),"0x017e667f4b8c174291d1543c466717566e206df1bfd6f30271055ddafdb18f72":u("C")},"0xaa36a7":{"0x03783fac2efed8fbc9ad443e592ee30e61d65f471140c10ca155e937b435b760":u("A"),"0x1f675bff07515f5df96737194ea945c36c41e7b4fcef307b7cd4d0e602a69111":u("B"),"0x017e667f4b8c174291d1543c466717566e206df1bfd6f30271055ddafdb18f72":u("C")}},B=[64,130],q=async()=>(await nt()).bridge,m=async t=>t||(await q()).account,R=async()=>pt[(await q()).network.current.chainId],wt=async()=>Object.fromEntries(Object.entries(await R()).map(t=>[t[1][0],t[0]])),f=async t=>at("Locker",{account:await m(t)}),k=t=>t.replace(/^0x/,""),O=t=>B[t.length<B[1]?0:1],mt=t=>(t=k(t),`0x${t.slice(0,O(t))}`),V=t=>{t=k(t);const s=O(t);return t.slice(s,s+1).toUpperCase()},xt=t=>(t=k(t),parseInt(t.slice(O(t)+1,t.length)||"0",16)),$t=t=>{var s,e;return(e=S[(s=V(t))!=null?s:"C"])!=null?e:S.C},jt=async t=>{t||(t=await m(t));const s=J(M("C"));let e="";return e=W(BigInt(t)^BigInt(s)),[e.replace("0x",""),"c","0"].join("")},It=async t=>await(await f()).nameExists(t),Tt=async(t,s=!1)=>(t||(t=await m()),await(await f(t))[s?"getUserPassesInfo":"getUserPassList"](t)),yt=async t=>{let s="";if(!t||t===it)return s;const e=await f();try{s=await e.getNameByHash(G(t))}catch(i){}return s},At=async(t,s)=>{var r;const e=await f(s),i=await R();let a={id:t,cate:"C",len:6,name:""};try{const[n,c,o]=await e.getUserPassInfo(t),h=(r=i[c])!=null?r:Object.values(a);a={id:n,cate:h[0],hash:o,len:h[1],name:await yt(o)}}catch(n){}return a},Et=async(t,s="")=>{let{id:e,code:i,cate:a}=t;const r=!!e;e||(i=mt(t),a=(await wt())[V(t)],e=xt(t));const n=await f(),c=r?"lockName":"lockPass",o={},h=r?[+e,s]:[i,s,a,+e];await rt(o,n,c,h);const x=n[c](...h);return new gt(x,{errorCodes:"Locker",allowAlmostSuccess:!0,seq:{type:r?"LockName":"lockPass",title:r?"Lock Name":"Lock Pass",ts:new Date().getTime(),overrides:o}})},Lt=async t=>{t||(t=await m());const e=await(await f(t)).getUserInvitedNumber(t);return K(e[1],0)},vt="";var bt=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,F=(t,s,e,i)=>{for(var a=i>1?void 0:i?_t(s,e):s,r=t.length-1,n;r>=0;r--)(n=t[r])&&(a=(i?n(s,e,a):n(a))||a);return i&&a&&bt(s,e,a),a};let P=class extends U(vt){constructor(){super(...arguments),this.bindBridge=new D(this,g)}get bridge(){return g.bridge}get txScanUri(){const{hash:t}=this.tx;return t?`${this.bridge.network.current.scan}/tx/${t}`:""}render(){return l`<dui-link class="uri mt-4" href="${this.txScanUri}" target="_blank" rel="noopener">View Transaction: ${ct(this.tx.hash)}</dui-link>`}};F([p({type:Object})],P.prototype,"tx",2);P=F([N("tx-view")],P);const Ct=`.tx-state{display:flex;flex-direction:column;align-items:center;flex-grow:1}.tx-state-icon.success{color:green}.tx-state-icon.failed{color:red}.tx-state-icon.warn{color:orange}.tx-state-msg{word-break:break-word;white-space:normal}
`;var St=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,w=(t,s,e,i)=>{for(var a=i>1?void 0:i?Pt(s,e):s,r=t.length-1,n;r>=0;r--)(n=t[r])&&(a=(i?n(s,e,a):n(a))||a);return i&&a&&St(s,e,a),a};let d=class extends U(Ct){constructor(){super(),this.bindBridge=new D(this,g),this.txType=!1,this.onlyAwaitHash=!1,this.opts={}}get bridge(){return g.bridge}get icons(){var a;const[t='<i class="mdi mdi-check-all"></i>',s='<i class="mdi mdi-check"></i>',e='<i class="mdi mdi-close"></i>',i='<i class="mdi mdi-loading"></i>']=(a=this.opts.icons)!=null?a:[];return{success:t,failed:e,wait:i,almostSuccess:s}}get hashOk(){return this.onlyAwaitHash&&this.tx.hash}get state(){var a,r,n;let[t,s,e]=["","",""];const{state:i}=this.opts;switch(this.tx.status){case-1:[t,s,e]=[this.icons.wait,(i==null?void 0:i.wait)||"Waiting for confirmation...","wait"];break;case 0:[t,s,e]=[this.icons.failed,(r=(a=this.tx.err)==null?void 0:a.message)!=null?r:"Something went wrong","failed"];break;case 1:[t,s,e]=[this.icons.success,(i==null?void 0:i.success)||"Success","success"];break;case 2:[t,s]=[this.icons.wait,"Confirm the transaction."];break;case 4:[t,s,e]=[this.icons.almostSuccess,((n=this.tx.err)==null?void 0:n.message)||"Almost Success","warn"];break}return this.hashOk&&([t,s,e]=[this.icons.success,(i==null?void 0:i.success)||"Success","success"]),{icon:t,txt:s,css:e}}get txScanUri(){const{hash:t}=this.tx;return t?`${this.bridge.network.current.scan}/tx/${t}`:""}render(){return l`<div class="tx-state m-4"><div class="tx-state-icon my-3 text-3xl mx-auto ${this.state.css}">${_(this.tx.pending&&!this.hashOk,()=>l`<slot name="pending"><i class="mdi mdi-loading"></i></slot>`,()=>l`<span>${X(this.state.icon)}</span>`)}</div><div class="tx-state-msg my-4"><slot>${this.state.txt}</slot></div><div class="flex gap-4">${_(this.tx.hash,()=>l`${_(this.tx.success||this.tx.almostSuccess,()=>l`<slot name="view"><tx-view .tx="${this.tx}"></tx-view></slot>`,()=>l`<tx-view .tx="${this.tx}"></tx-view>`)}`)}</div></div>`}};w([p({type:Object})],d.prototype,"tx",2);w([p({type:Boolean})],d.prototype,"txType",2);w([p({type:Boolean})],d.prototype,"onlyAwaitHash",2);w([p({type:Object})],d.prototype,"opts",2);d=w([N("tx-state")],d);export{B as L,jt as a,At as b,It as c,Lt as d,f as e,Tt as f,$t as g,R as h,yt as i,Et as l,gt as t};
