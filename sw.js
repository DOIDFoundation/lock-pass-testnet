if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const c=s=>l(s,r),o={module:{uri:r},exports:u,require:c};e[r]=Promise.all(i.map((s=>o[s]||c(s)))).then((s=>(n(...s),u)))}}define(["./workbox-30e9d199"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"5cd4f11bb10d526cda07eb6159b70539"},{url:"assets/doid-symbol-legacy.e54d345f.js",revision:null},{url:"assets/doid-symbol.887138f8.js",revision:null},{url:"assets/Erc1155-legacy.6c99e288.js",revision:null},{url:"assets/Erc1155.a06e6baf.js",revision:null},{url:"assets/Erc721-legacy.d4c3f92e.js",revision:null},{url:"assets/Erc721.068eb702.js",revision:null},{url:"assets/index-legacy.16c12184.js",revision:null},{url:"assets/index-legacy.4d644e52.js",revision:null},{url:"assets/index-legacy.bcae89ce.js",revision:null},{url:"assets/index-legacy.fdcc92da.js",revision:null},{url:"assets/index.0eb45ea7.js",revision:null},{url:"assets/index.4219f37c.js",revision:null},{url:"assets/index.79a35c0c.css",revision:null},{url:"assets/index.89ef147f.css",revision:null},{url:"assets/index.a0790d9f.js",revision:null},{url:"assets/index.a08dbac4.css",revision:null},{url:"assets/index.bc8036e7.js",revision:null},{url:"assets/index.bf058e1b.css",revision:null},{url:"assets/list-legacy.afcb8b74.js",revision:null},{url:"assets/list.b616ca4e.css",revision:null},{url:"assets/list.c7d90a1f.js",revision:null},{url:"assets/Locker-legacy.461a0836.js",revision:null},{url:"assets/locker-legacy.69f0c1fc.js",revision:null},{url:"assets/locker.28d2961c.js",revision:null},{url:"assets/Locker.eeb0418d.js",revision:null},{url:"assets/polyfills-legacy.47ab4e0a.js",revision:null},{url:"index.html",revision:"5cd4f11bb10d526cda07eb6159b70539"},{url:"passes/index.html",revision:"5cd4f11bb10d526cda07eb6159b70539"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"6021f5e33ac1290a17274255a13f8489"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
