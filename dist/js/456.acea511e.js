"use strict";(self["webpackChunkProyectoTickets"]=self["webpackChunkProyectoTickets"]||[]).push([[456],{456:function(t,e,r){r.r(e),r.d(e,{createSwipeBackGesture:function(){return g}});var s=r(587),i=r(545);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class n{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){return new a(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)}createBlocker(t={}){return new l(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)}capture(t,e,r){if(!this.start(t,e,r))return!1;const s=this.requestedStart;let i=-1e4;if(s.forEach((t=>{i=Math.max(i,t)})),i===r){this.capturedId=e,s.clear();const r=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(r),!0}return s.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)}enableGesture(t,e){const r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(c)}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(c)}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}}class a{constructor(t,e,r,s,i){this.id=e,this.name=r,this.disableScroll=i,this.priority=1e6*s+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class l{constructor(t,e,r,s){this.id=e,this.disable=r,this.disableScroll=s,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const c="backdrop-no-scroll",o=new n,d=(t,e,r,s)=>{const i=u(t)?{capture:!!s.capture,passive:!!s.passive}:!!s.capture;let n,a;return t["__zone_symbol__addEventListener"]?(n="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(n="addEventListener",a="removeEventListener"),t[n](e,r,i),()=>{t[a](e,r,i)}},u=t=>{if(void 0===h)try{const e=Object.defineProperty({},"passive",{get:()=>{h=!0}});t.addEventListener("optsTest",(()=>{}),e)}catch(e){h=!1}return!!h};let h;const b=2e3,v=(t,e,r,s,i)=>{let n,a,l,c,o,u,h,v=0;const m=s=>{v=Date.now()+b,e(s)&&(!a&&r&&(a=d(t,"touchmove",r,i)),l||(l=d(s.target,"touchend",y,i)),c||(c=d(s.target,"touchcancel",y,i)))},S=s=>{v>Date.now()||e(s)&&(!u&&r&&(u=d(p(t),"mousemove",r,i)),h||(h=d(p(t),"mouseup",f,i)))},y=t=>{X(),s&&s(t)},f=t=>{g(),s&&s(t)},X=()=>{a&&a(),l&&l(),c&&c(),a=l=c=void 0},g=()=>{u&&u(),h&&h(),u=h=void 0},w=()=>{X(),g()},Y=(e=!0)=>{e?(n||(n=d(t,"touchstart",m,i)),o||(o=d(t,"mousedown",S,i))):(n&&n(),o&&o(),n=o=void 0,w())},G=()=>{Y(!1),s=r=e=void 0};return{enable:Y,stop:w,destroy:G}},p=t=>t instanceof Document?t:t.ownerDocument,m=(t,e,r)=>{const s=r*(Math.PI/180),i="x"===t,n=Math.cos(s),a=e*e;let l=0,c=0,o=!1,d=0;return{start(t,e){l=t,c=e,d=0,o=!0},detect(t,e){if(!o)return!1;const r=t-l,s=e-c,u=r*r+s*s;if(u<a)return!1;const h=Math.sqrt(u),b=(i?r:s)/h;return d=b>n?1:b<-n?-1:0,o=!1,!0},isGesture(){return 0!==d},getDirection(){return d}}},S=t=>{let e=!1,r=!1,s=!0,i=!1;const n=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),a=n.canStart,l=n.onWillStart,c=n.onStart,d=n.onEnd,u=n.notCaptured,h=n.onMove,b=n.threshold,p=n.passive,S=n.blurOnStart,g={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},w=m(n.direction,n.threshold,n.maxAngle),Y=o.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),G=t=>{const e=X(t);return!(r||!s)&&(f(t,g),g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime=e,g.velocityX=g.velocityY=g.deltaX=g.deltaY=0,g.event=t,(!a||!1!==a(g))&&(Y.release(),!!Y.start()&&(r=!0,0===b?D():(w.start(g.startX,g.startY),!0))))},_=t=>{e?!i&&s&&(i=!0,y(g,t),requestAnimationFrame(k)):(y(g,t),w.detect(g.currentX,g.currentY)&&(w.isGesture()&&D()||q()))},k=()=>{e&&(i=!1,h&&h(g))},D=()=>!(Y&&!Y.capture())&&(e=!0,s=!1,g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime,l?l(g).then(I):I(),!0),E=()=>{if("undefined"!==typeof document){const t=document.activeElement;(null===t||void 0===t?void 0:t.blur)&&t.blur()}},I=()=>{S&&E(),c&&c(g),s=!0},T=()=>{e=!1,r=!1,i=!1,s=!0,Y.release()},M=t=>{const r=e,i=s;T(),i&&(y(g,t),r?d&&d(g):u&&u(g))},L=v(n.el,G,_,M,{capture:!1,passive:p}),q=()=>{T(),L.stop(),u&&u(g)};return{enable(t=!0){t||(e&&M(void 0),T()),L.enable(t)},destroy(){Y.destroy(),L.destroy()}}},y=(t,e)=>{if(!e)return;const r=t.currentX,s=t.currentY,i=t.currentTime;f(e,t);const n=t.currentX,a=t.currentY,l=t.currentTime=X(e),c=l-i;if(c>0&&c<100){const e=(n-r)/c,i=(a-s)/c;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*i+.3*t.velocityY}t.deltaX=n-t.startX,t.deltaY=a-t.startY,t.event=e},f=(t,e)=>{let r=0,s=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];r=t.clientX,s=t.clientY}else void 0!==t.pageX&&(r=t.pageX,s=t.pageY)}e.currentX=r,e.currentY=s},X=t=>t.timeStamp||Date.now(),g=(t,e,r,n,a)=>{const l=t.ownerDocument.defaultView,c=(0,i.i)(t),o=t=>{const e=50,{startX:r}=t;return c?r>=l.innerWidth-e:r<=e},d=t=>c?-t.deltaX:t.deltaX,u=t=>c?-t.velocityX:t.velocityX,h=t=>o(t)&&e(),b=t=>{const e=d(t),r=e/l.innerWidth;n(r)},v=t=>{const e=d(t),r=l.innerWidth,i=e/r,n=u(t),c=r/2,o=n>=0&&(n>.2||e>c),h=o?1-i:i,b=h*r;let v=0;if(b>5){const t=b/Math.abs(n);v=Math.min(t,540)}a(o,i<=0?.01:(0,s.j)(0,i,.9999),v)};return S({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:h,onStart:r,onMove:b,onEnd:v})}}}]);
//# sourceMappingURL=456.acea511e.js.map