const __vite__fileDeps=["./MyButton.stories-CMjziv2E.js","./vue.esm-bundler-DERtEVBW.js","./MyButton-BfyGbg8N.css","./entry-preview-BE6zF8BJ.js","./entry-preview-docs-nZTcgqAr.js","./index-XEbeu6MI.js","./preview-TCN6m6T-.js","./index-DXimoRZY.js","./preview-CwqMn10d.js","./index-DrFu-skq.js","./preview-BAz7FMXc.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const f="modulepreload",R=function(t,i){return new URL(t,i).href},p={},_=function(i,c,l){let e=Promise.resolve();if(c&&c.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),E=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.all(c.map(n=>{if(n=R(n,l),n in p)return;p[n]=!0;const a=n.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(!!l)for(let u=r.length-1;u>=0;u--){const O=r[u];if(O.href===n&&(!a||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${d}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":f,a||(s.as="script",s.crossOrigin=""),s.href=n,E&&s.setAttribute("nonce",E),document.head.appendChild(s),a)return new Promise((u,O)=>{s.addEventListener("load",u),s.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${n}`)))})}))}return e.then(()=>i()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,m=T({page:"preview"});L.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const y={"../vector-vue/src/MyButton/MyButton.stories.js":async()=>_(()=>import("./MyButton.stories-CMjziv2E.js"),__vite__mapDeps([0,1,2]),import.meta.url)};async function S(t){return y[t]()}const{composeConfigs:P,PreviewWeb:I,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,V=async(t=[])=>{const i=await Promise.all([t.at(0)??_(()=>import("./entry-preview-BE6zF8BJ.js"),__vite__mapDeps([3,1]),import.meta.url),t.at(1)??_(()=>import("./entry-preview-docs-nZTcgqAr.js"),__vite__mapDeps([4,5,1]),import.meta.url),t.at(2)??_(()=>import("./preview-TCN6m6T-.js"),__vite__mapDeps([6,7]),import.meta.url),t.at(3)??_(()=>import("./preview-r9w4iw56.js"),[],import.meta.url),t.at(4)??_(()=>import("./preview-Ct5NkTJf.js"),[],import.meta.url),t.at(5)??_(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([8,9]),import.meta.url),t.at(6)??_(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),t.at(7)??_(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),t.at(8)??_(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([10,9]),import.meta.url),t.at(9)??_(()=>import("./preview-BpcF_O6y.js"),[],import.meta.url),t.at(10)??_(()=>import("./preview-BcrGd3F6.js"),[],import.meta.url),t.at(11)??_(()=>import("./preview-BFzpVMGc.js"),[],import.meta.url)]);return P(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new I(S,V);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{_};
