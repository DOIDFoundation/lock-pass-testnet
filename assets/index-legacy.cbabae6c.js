System.register(["./index-legacy.39017a3b.js","./vendor-legacy.7a85ef05.js","./locker-legacy.380a2fbd.js"],(function(t,e){"use strict";var s,i,a,r,n,o,c,d,l,p,h,m,g,u,y,b,v,x;return{setters:[t=>{s=t.T,i=t.b,a=t.h},t=>{r=t.b,n=t.y,o=t.f,c=t.h,d=t.e,l=t.d,p=t.n,h=t.E,m=t.k},t=>{g=t.a,u=t.d,y=t.e,b=t.f,v=t.h,x=t.i}],execute:function(){var e=Object.defineProperty,w=Object.getOwnPropertyDescriptor,k=(t,s,i,a)=>{for(var r,n=a>1?void 0:a?w(s,i):s,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(a?r(s,i,n):r(n))||n);return a&&n&&e(s,i,n),n};let f=class extends(s("")){constructor(){super(...arguments),this.bindBridge=new r(this,i),this.name="",this.limit="0",this.inviteCode="",this.genInviteCode=async()=>{try{let t=await g();t&&(this.inviteCode=t)}catch(c){}}}get bridge(){return i.bridge}get inviteLink(){return`https://lockpass.doid.tech/?ic=${this.inviteCode}`}async connectedCallback(){super.connectedCallback(),this.limit=await u()}get shareText(){return`DOID lock name event is live. Mint your lock pass NFT for free and reserve your desired name now. Get invitation here: ${this.inviteLink}`}render(){return n`<p class="text-sm text-gray-500">You have <b>${this.limit}</b> invitations in total. Copy the invitation code or share the link.</p><div class="py-2">${this.inviteCode?n`<textarea class="block w-full h-24 my-3 border border-solid border-gray-200 py-2 px-2 text-gray-400" readonly="readonly">
${this.shareText}</textarea><dui-copy value="${this.shareText}" sm class="outlined"><span slot="copied">Copy<i class="ml-1 mdi mdi-check text-green-600"></i></span><span slot="copy">Copy<i class="ml-1 mdi mdi-content-copy"></i></span></dui-copy>`:+this.limit>0?n`<dui-button sm @click="${this.genInviteCode}">Share</dui-button>`:n``}</div>`}};k([c()],f.prototype,"name",2),k([o()],f.prototype,"limit",2),k([o()],f.prototype,"inviteCode",2),f=k([d("pass-share")],f);var $=Object.defineProperty,P=Object.getOwnPropertyDescriptor,C=(t,e,s,i)=>{for(var a,r=i>1?void 0:i?P(e,s):e,n=t.length-1;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&$(e,s,r),r};let j=class extends(s(":root{--posterSize: 90px}.pass{position:relative;min-height:8.5rem;display:flex;gap:1rem;border-width:1px;--tw-border-opacity: 1;border-color:rgba(209,213,219,var(--tw-border-opacity));padding:1rem}.pass .poster{margin-bottom:1rem;width:90px;width:var(--posterSize);height:90px;height:var(--posterSize)}.pass .poster:not(.minted){--tw-bg-opacity: 1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.pass .name.locked{font-size:1rem;line-height:1.5rem}.pass .status.locked{--tw-text-opacity: 1;color:rgba(22,163,74,var(--tw-text-opacity))}.pass .status.unlock{--tw-text-opacity: 1;color:rgba(107,114,128,var(--tw-text-opacity))}.pass .status.minted{--tw-text-opacity: 1;color:rgba(96,165,250,var(--tw-text-opacity))}\n")){constructor(){super(...arguments),this.bindBridge=new r(this,i),this.item={},this.tx=null,this.success=!1}get bridge(){return i.bridge}get scan(){return this.bridge.network.current.scan}get tokenLink(){return`${this.scan}/token/${a("Locker")}?a=${this.item.id}`}firstUpdate(){}render(){let t="",e="";return this.item.name?(t="locked",e="Locked"):(t="unlock",e="No name locked yet"),n`<div class="pass"><div class="poster ${l({minted:this.item.meta.image})}"><img src="${this.item.meta.image}" class="object-contain"></div><div class="flex flex-col justify-between text-xs"><div><span class="text-base">#${this.item.id}</span><p><dui-link class="text-black uri" href="${this.tokenLink}" target="_blank">View on etherscan</dui-link></p></div><div><div class="status ${t}">${e}</div>${p(this.item.name,(()=>n`<div class="name ${t}"><b class="text-blue-600">${this.item.name}</b>.doid</div>`),(()=>n`<div class="actions mt-2"><dui-button href="/?pid=${this.item.id}" sm>Lock a name</dui-button></div>`))}</div></div></div>`}};C([c({type:Object})],j.prototype,"item",2),C([o()],j.prototype,"tx",2),C([o()],j.prototype,"success",2),j=C([d("pass-item")],j);var L=Object.defineProperty,O=Object.getOwnPropertyDescriptor,D=(t,e,s,i)=>{for(var a,r=i>1?void 0:i?O(e,s):e,n=t.length-1;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&L(e,s,r),r};let T=t("ViewPasses",class extends(s(".Passes{height:300px;height:100%;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.pass-list{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1rem;gap:1rem}@media (min-width: 1024px){.pass-list{grid-template-columns:repeat(2,minmax(0,1fr))}}\n")){constructor(){super(...arguments),this.bindBridge=new r(this,i),this.name="",this.passes=[],this.pending=!1,this.ts=0}get bridge(){return i.bridge}async getUserPassList(){if(i.notReady)return;this.pending=!0;const{account:t}=i.bridge,e=await y();try{const s=await b(t,!0),i=await v();let a=await Promise.all(s.map((async t=>{const[s,a,r]=t,n=h(s,0),o=i[a]??[],d={id:n,cate:o[0],hash:r,meta:{}},l=await Promise.all([x(r),e.tokenURI(n)]);d.name=l[0],d.len=`${o[1]}`;try{d.meta=await(await fetch(l[1])).json()}catch(c){}return d})));this.passes=a.sort(((t,e)=>t.id-e.id)).sort(((t,e)=>t.name?e.name?t.id-e.id:-1:1))}catch(s){console.log(s,"get passess failed"),this.passes=[]}finally{this.ts++,this.pending=!1}}get empty(){return this.ts&&!this.passes.length}connectedCallback(){super.connectedCallback(),this.getUserPassList()}render(){return n`<div class="passes py-4"><div class="lg_w-3/5 my-8 mx-3 lg_mx-auto"><section><p class="text-base mb-2">Note</p><ul class="note list-disc mx-4"><li>You can only mint one Lock Pass for one wallet address.</li><li>Once you successfully locked your name. Your name will be reserved for 7 days after the official launch(22nd Dec,2022). Those locked but unminted names will be released to the public pool afterwards.</li></ul><a href="${"https://twitter.com/DoidFoundation"}" target="_blank" rel="noopener" class="uri inline-flex my-2 text-base">Follow DOID Twitter and stay connected</a></section>${p(i.noAccount,(()=>n`<div class="my-8 text-center"><connect-wallet-btn></connect-wallet-btn></div>`),(()=>n`<section class="mt-6"><h2 class="my-4 text-xl">My Lock Pass</h2><div class="py-4">${p(this.empty,(()=>n`No passes yet.`),(()=>n`${p(this.pending,(()=>n`<i class="mdi mdi-loading mr-1"></i>Loading...`),(()=>n`<div class="pass-list">${m(this.passes,(t=>n`<pass-item key="${t.id}" .item="${t}"></pass-item>`))}</div>`))}`))}</div></section><section class="mt-6"><h2 class="text-xl mb-2">Share Lock Pass Invitations</h2>${this.passes.length?n`<pass-share></pass-share>`:n``}</section>`))}</div></div>`}});D([c()],T.prototype,"name",2),D([o()],T.prototype,"passes",2),D([o()],T.prototype,"pending",2),D([o()],T.prototype,"ts",2),t("ViewPasses",T=D([d("view-passes")],T))}}}));
