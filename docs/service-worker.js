if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,o)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const c=e=>r(e,i),l={module:{uri:i},exports:t,require:c};s[i]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(o(...e),t)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"random-param-for-hado"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.ee0dae6d.css",revision:null},{url:"index.html",revision:"f2c486fb2e6a37beb8420360adac199e"},{url:"js/app.943f86ab.js",revision:null},{url:"js/chunk-vendors.50422737.js",revision:null},{url:"manifest.json",revision:"518e421aa6a0cf0a4c54b5ef004d4372"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
