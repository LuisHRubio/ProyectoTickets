"use strict";(self["webpackChunkProyectoTickets"]=self["webpackChunkProyectoTickets"]||[]).push([[168],{168:function(e,t,o){o.r(t),o.d(t,{startTapClick:function(){return i}});var n=o(587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const i=e=>{let t,o,i,v,f=10*-u,p=0;const m=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),L=new WeakMap,h=()=>void 0!==t&&null!==t.parentElement,E=e=>{f=(0,n.u)(e),b(e)},w=e=>{f=(0,n.u)(e),y(e)},k=e=>{const t=(0,n.u)(e)-u;f<t&&b(e)},T=e=>{const t=(0,n.u)(e)-u;f<t&&y(e)},g=e=>{y(e)},S=()=>{clearTimeout(v),v=void 0,o&&(q(!1),o=void 0)},b=e=>{o||h()||(t=void 0,R(s(e),e))},y=e=>{R(void 0,e)},R=(e,t)=>{if(e&&e===o)return;clearTimeout(v),v=void 0;const{x:i,y:s}=(0,n.q)(t);if(o){if(L.has(o))throw new Error("internal error");o.classList.contains(c)||C(o,i,s),q(!0)}if(e){const t=L.get(e);t&&(clearTimeout(t),L.delete(e));const o=a(e)?0:d;e.classList.remove(c),v=setTimeout((()=>{C(e,i,s),v=void 0}),o)}o=e},C=(e,t,o)=>{p=Date.now(),e.classList.add(c);const n=m&&r(e);n&&n.addRipple&&(P(),i=n.addRipple(t,o))},P=()=>{void 0!==i&&(i.then((e=>e())),i=void 0)},q=e=>{P();const t=o;if(!t)return;const n=l-Date.now()+p;if(e&&n>0&&!a(t)){const e=setTimeout((()=>{t.classList.remove(c),L.delete(t)}),l);L.set(t,e)}else t.classList.remove(c)},x=document;x.addEventListener("ionScrollStart",(e=>{t=e.target,S()})),x.addEventListener("ionScrollEnd",(()=>{t=void 0})),x.addEventListener("ionGestureCaptured",S),x.addEventListener("touchstart",E,!0),x.addEventListener("touchcancel",w,!0),x.addEventListener("touchend",w,!0),x.addEventListener("mousedown",k,!0),x.addEventListener("mouseup",T,!0),x.addEventListener("contextmenu",g,!0)},s=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}}},a=e=>e.classList.contains("ion-activatable-instant"),r=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},c="ion-activated",d=200,l=200,u=2500}}]);
//# sourceMappingURL=168.d12517ac.js.map