"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[995],{7364:(H,L,u)=>{function m(e,r,t,n){return new(t||(t=Promise))(function(o,l){function c(y){try{a(n.next(y))}catch(R){l(R)}}function d(y){try{a(n.throw(y))}catch(R){l(R)}}function a(y){y.done?o(y.value):function(o){return o instanceof t?o:new t(function(l){l(o)})}(y.value).then(c,d)}a((n=n.apply(e,r||[])).next())})}u.d(L,{zS:()=>Lt,cx:()=>Pt,sG:()=>at});var f=u(7716),_=u(9838),ct=u(7574),ft=u(8640);const tt=new ct.y(ft.Z);var et=u(6215),U=u(5917),dt=u(2836),ht=u(6682),pt=u(7393);class mt{constructor(r,t){this.predicate=r,this.inclusive=t}call(r,t){return t.subscribe(new vt(r,this.predicate,this.inclusive))}}class vt extends pt.L{constructor(r,t,n){super(r),this.predicate=t,this.inclusive=n,this.index=0}_next(r){const t=this.destination;let n;try{n=this.predicate(r,this.index++)}catch(i){return void t.error(i)}this.nextOrComplete(r,n)}nextOrComplete(r,t){const n=this.destination;Boolean(t)?n.next(r):(this.inclusive&&n.next(r),n.complete())}}var E=u(5435),F=u(3190),j=u(8307),gt=u(8049),A=u(8002),D=u(7349),nt=u(2996),J=u(5257),rt=u(5304),K=u(8583);const St=["*"],B={useTransferState:!0,alwaysMonitor:!1,manualIdle:!1,baseURIForScullyContent:"http://localhost:1668"},Y=new f.OlP("scullyLibConfig",{factory:()=>B}),O=e=>(e.includes("#")&&(e=e.split("#")[0]),e.includes("?")&&(e=e.split("?")[0]),e.endsWith("/")?e.slice(0,-1):e);function $(e,r="json"){return new Promise((t,n)=>{const i=new XMLHttpRequest;i.responseType=r,i.addEventListener("load",o=>{if(200!==i.status)return n(i);t(i.response)}),i.addEventListener("error",(...o)=>n(o)),i.open("get",e,!0),i.send()})}const z=()=>window&&"running"===window.ScullyIO,V=()=>window&&"generated"===window.ScullyIO;function it(e,r){return e.endsWith("/")&&r.startsWith("/")?`${e}${r.substr(1)}`:e.endsWith("/")||r.startsWith("/")?`${e}${r}`:`${e}/${r}`}const X="ScullyIO-transfer-state",Q="/** ___SCULLY_STATE_START___ */",q="/** ___SCULLY_STATE_END___ */";let ot=(()=>{class e{constructor(t,n){this.document=t,this.router=n,this.inlineOnly=!1,this.currentBaseUrl="//",this.stateBS=new et.X({}),this.state$=this.stateBS.pipe((0,E.h)(i=>void 0!==i)),this.nextUrl=this.router.events.pipe((0,E.h)(i=>i instanceof _.OD),(0,F.w)(i=>O(this.initialUrl)===O(i.url)?(this.initialUrl="__done__with__Initial__navigation__",tt):(0,U.of)(i)),(0,j.b)(()=>this.stateBS.next(void 0)),(0,F.w)(i=>this.router.events.pipe((0,E.h)(o=>o instanceof _.m2&&o.url===i.url),(0,gt.P)())),(0,A.U)(i=>O(i.urlAfterRedirects||i.url)),(0,D.d)(1))}startMonitoring(){window&&window["ScullyIO-injected"]&&window["ScullyIO-injected"].inlineStateOnly&&(this.inlineOnly=!0),this.setupEnvForTransferState(),this.setupStartNavMonitoring()}setupEnvForTransferState(){if(z()){this.injectScript();const t=window["ScullyIO-exposed"]||{};t.transferState&&(this.stateBS.next(t.transferState),this.saveState(t.transferState))}else V()&&(this.initialUrl=window.location.pathname||"__no_NO_no__",this.initialUrl="/"!==this.initialUrl&&this.initialUrl.endsWith("/")?this.initialUrl.slice(0,-1):this.initialUrl,this.stateBS.next(window&&window[X]||{}))}injectScript(){this.script=this.document.createElement("script"),this.script.setAttribute("id",X);let t=document.body.lastChild;for(;"SCRIPT"===t.previousSibling.nodeName;)t=t.previousSibling;document.body.insertBefore(this.script,t)}getState(t){return this.fetchTransferState(),this.state$.pipe((0,nt.j)(t))}stateHasKey(t){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(t)}stateKeyHasValue(t){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(t)&&null!=this.stateBS.value[t]}setState(t,n){const i=Object.assign(Object.assign({},this.stateBS.value),{[t]:n});this.stateBS.next(i),this.saveState(i)}saveState(t){z()&&(this.script.textContent=`{window['${X}']=_u(\`${Q}${function(e){const r={"'":"_~q~",$:"_~o~","`":"_~b~","/":"_~s~","<":"_~l~",">":"_~g~"};return e.replace(/[\$`'<>\/]/g,t=>r[t]).replace(/\\\"/g,"_~d~")}(JSON.stringify(t))}${q}\`);function _u(t){t=t.split('${Q}')[1].split('${q}')[0];const u={'_~b~': "\`",'_~q~': "'",'_~o~': '$','_~s~': '/','_~l~': '<','_~g~': '>'};return JSON.parse(t.replace(/_~d~/g,'\\\\"').replace(/_~[^]~/g, (s) => u[s]).replace(/\\n/g,'\\\\n').replace(/\\t/g,'\\\\t').replace(/\\r/g,'\\\\r'));}}`)}setupStartNavMonitoring(){!V()||this.nextUrl.subscribe()}useScullyTransferState(t,n){return V()?this.getState(t):n.pipe((0,j.b)(i=>this.setState(t,i)))}fetchTransferState(){return m(this,void 0,void 0,function*(){const t=o=>o.split("/").filter(l=>""!==l.trim())[0];yield new Promise(o=>setTimeout(o,0));const n=yield this.nextUrl.pipe((0,J.q)(1)).toPromise(),i=t(n);this.currentBaseUrl!==i&&(this.currentBaseUrl=i,this.nextUrl.pipe(function(e,r=!1){return t=>t.lift(new mt(e,r))}(o=>t(o)===this.currentBaseUrl),(0,F.w)(o=>this.inlineOnly?this.readFromIndex(o):this.readFromJson(o)),(0,rt.K)(o=>(console.warn("Error while loading of parsing Scully state:",o),(0,U.of)({}))),(0,j.b)(o=>{this.stateBS.next(o)})).subscribe({complete:()=>{this.currentBaseUrl="//"}}))})}readFromJson(t){return $(st(it(t,"/data.json")))}readFromIndex(t){return $(st(it(t,"/index.html")),"text").then(n=>{const i=n.split(Q)[1].split(q)[0];return JSON.parse(function(e){const r={"_~q~":"'","_~b~":"`","_~o~":"$","_~s~":"/","_~l~":"<","_~g~":">"};return e.replace(/_~d~/g,'\\"').replace(/_~[^]~/g,t=>r[t]).replace(/\n/g,"\\n").replace(/\r/g,"\\r")}(i))})}}return e.\u0275fac=function(t){return new(t||e)(f.LFG(K.K0),f.LFG(_.F0))},e.\u0275prov=f.Yz7({factory:function(){return new e(f.LFG(K.K0),f.LFG(_.F0))},token:e,providedIn:"root"}),e})();function st(e){return e.startsWith("/")?e.slice(1):e}let Ot=(()=>{class e{constructor(t,n,i,o){this.zone=t,this.router=n,this.initialUrl=function(e){return e.endsWith("/")?e.slice(0,-1):e}(window&&window.location&&window.location.pathname)||"",this.imState=new et.X({idle:!1,timeOut:5e3}),this.idle$=this.imState.pipe((0,nt.j)("idle")),this.initApp=new Event("AngularInitialized",{bubbles:!0,cancelable:!1}),this.appReady=new Event("AngularReady",{bubbles:!0,cancelable:!1}),this.appTimeout=new Event("AngularTimeout",{bubbles:!0,cancelable:!1}),this.scullyLibConfig=Object.assign({},B,i);const c=!!(window["ScullyIO-exposed"]||{}).manualIdle;!this.scullyLibConfig.manualIdle&&window&&(this.scullyLibConfig.alwaysMonitor||z())&&(window.dispatchEvent(this.initApp),this.router.events.pipe((0,E.h)(d=>d instanceof _.m2&&void 0!==d.urlAfterRedirects),(0,E.h)(d=>!c||d.urlAfterRedirects!==this.initialUrl),(0,j.b)(()=>this.zoneIdleCheck())).subscribe()),this.scullyLibConfig.manualIdle&&window.dispatchEvent(this.initApp),this.scullyLibConfig.useTransferState&&o.startMonitoring()}fireManualMyAppReadyEvent(){return m(this,void 0,void 0,function*(){return window.dispatchEvent(this.appReady)})}init(){return m(this,void 0,void 0,function*(){return this.idle$.pipe((0,J.q)(1)).toPromise()})}zoneIdleCheck(){return m(this,void 0,void 0,function*(){if(void 0===Zone)return this.simpleTimeout();const t=Zone.current.get("TaskTrackingZone");if(void 0===t)return this.simpleTimeout();this.imState.value.idle&&(yield this.setState("idle",!1)),this.zone.runOutsideAngular(()=>{let n,i=0;const o=Date.now(),l=()=>{clearTimeout(n),Date.now()-o>3e4?window.dispatchEvent(this.appTimeout):t.macroTasks.length>0&&void 0!==t.macroTasks.find(c=>c.source.includes("XMLHttpRequest"))||i<1?n=setTimeout(()=>{i+=1,l()},50):this.zone.run(()=>{setTimeout(()=>{window.dispatchEvent(this.appReady),this.setState("idle",!0)},250)})};l()})})}simpleTimeout(){return m(this,void 0,void 0,function*(){console.warn("Scully is using timeouts, add the needed polyfills instead!"),yield new Promise(t=>setTimeout(t,this.imState.value.timeOut)),window.dispatchEvent(this.appReady)})}setPupeteerTimeoutValue(t){this.imState.next(Object.assign(Object.assign({},this.imState.value),{timeOut:t}))}setState(t,n){this.imState.next(Object.assign(Object.assign({},this.imState.value),{[t]:n}))}}return e.\u0275fac=function(t){return new(t||e)(f.LFG(f.R0b),f.LFG(_.F0),f.LFG(Y),f.LFG(ot))},e.\u0275prov=f.Yz7({factory:function(){return new e(f.LFG(f.R0b),f.LFG(_.F0),f.LFG(Y),f.LFG(ot))},token:e,providedIn:"root"}),e})(),at=(()=>{class e{constructor(t){this.router=t,this.refresh=new dt.t(1),this.allRoutes$=this.refresh.pipe((0,F.w)(()=>$("assets/scully-routes.json")),(0,rt.K)(()=>(console.warn("Scully routes file not found, are you running the Scully generated version of your site?"),(0,U.of)([]))),(0,E.h)(n=>Array.isArray(n)),(0,A.U)(this.cleanDups),(0,D.d)({refCount:!1,bufferSize:1})),this.available$=this.allRoutes$.pipe((0,A.U)(n=>n.filter(i=>!i.hasOwnProperty("published")||!1!==i.published)),(0,D.d)({refCount:!1,bufferSize:1})),this.unPublished$=this.allRoutes$.pipe((0,A.U)(n=>n.filter(i=>!!i.hasOwnProperty("published")&&!1===i.published)),(0,D.d)({refCount:!1,bufferSize:1})),this.topLevel$=this.available$.pipe((0,A.U)(n=>n.filter(i=>!i.route.slice(1).includes("/"))),(0,D.d)({refCount:!1,bufferSize:1})),this.reload()}getCurrent(){return location?(0,ht.T)((0,U.of)(new _.m2(0,"","")),this.router.events).pipe((0,E.h)(t=>t instanceof _.m2),(0,F.w)(()=>this.available$),(0,A.U)(t=>{const n=O(encodeURI(location.pathname).trim());return t.find(i=>n===O(i.route.trim())||i.slugs&&Array.isArray(i.slugs)&&i.slugs.find(o=>n.endsWith(O(o.trim()))))})):(0,U.of)()}cleanDups(t){const n=new Map;return t.forEach(i=>n.set(JSON.stringify(Object.assign(Object.assign({},i),{route:Ct(i)?"":i.route})),i)),[...n.values()]}reload(){this.refresh.next()}}return e.\u0275fac=function(t){return new(t||e)(f.LFG(_.F0))},e.\u0275prov=f.Yz7({factory:function(){return new e(f.LFG(_.F0))},token:e,providedIn:"root"}),e})();function Ct(e){const r=Object.keys(e);return!(1===r.length&&r.includes("route")||2===r.length&&r.includes("route")&&r.includes("title"))}let W,Lt=(()=>{class e{constructor(t,n,i,o,l){this.elmRef=t,this.srs=n,this.router=i,this.location=o,this.conf=l,this.baseUrl=this.conf.useTransferState||B.useTransferState,this.elm=this.elmRef.nativeElement,this.routes=this.srs.allRoutes$.pipe((0,J.q)(1)).toPromise(),this.routeUpdates$=this.router.events.pipe((0,E.h)(c=>c instanceof _.m2),(0,E.h)(c=>W&&!W.endsWith(O(c.urlAfterRedirects))),(0,j.b)(c=>this.replaceContent())),this.routeSub=this.routeUpdates$.subscribe()}ngOnInit(){this.elm&&this.handlePage()}handlePage(){return m(this,void 0,void 0,function*(){const t=O(location.href);if(W===t)return;W=t;const n=document.createElement("template"),i=this.getCSSId(this.elm);if(window.scullyContent){const d=window.scullyContent.html;n.innerHTML=i!==window.scullyContent.cssId?d.split(window.scullyContent.cssId).join(i):d}else yield $(t+"/index.html","text").catch(d=>{if((0,f.X6Q)()){const a=new URL(location.href);return $(`${this.conf.baseURIForScullyContent}/${O(a.pathname)}/index.html`,"text")}return Promise.reject(d)}).then(d=>{try{const a=d.split("\x3c!--scullyContent-begin--\x3e")[1].split("\x3c!--scullyContent-end--\x3e")[0];if(a.includes("_ngcontent")){const y="_ngcontent"+a.split("_ngcontent")[1].split("=")[0];n.innerHTML=a.split(y).join(i)}else n.innerHTML=a}catch(a){n.innerHTML='<h2 id="___scully-parsing-error___">Sorry, could not parse static page content</h2>\n            <p>This might happen if you are not using the static generated pages.</p>'}}).catch(d=>{n.innerHTML='<h2 id="___scully-parsing-error___">Sorry, could not load static page content</h2>',console.error("problem during loading static scully content",d)});const o=this.elm.parentElement||document.body,l=document.createComment("scullyContent-begin"),c=document.createComment("scullyContent-end");o.insertBefore(l,this.elm),o.insertBefore(n.content,this.elm),o.insertBefore(c,this.elm),setTimeout(()=>document.querySelectorAll("[href]").forEach(this.upgradeToRoutelink.bind(this)),10)})}upgradeToRoutelink(t){return m(this,void 0,void 0,function*(){if(!["A","BUTTON"].includes(t.tagName))return;const n=t.dataset.hash;if(n)return t.setAttribute("href","#"+n),t.setAttribute("onclick",""),void(t.onclick=d=>{d.preventDefault();const a=document.getElementById(n);if(a){const y=new URL(window.location.href);y.hash=n,history.replaceState("","",y.toString()),a.scrollIntoView()}});const i=yield this.routes,o=t.getAttribute("href"),l=O(o.toLowerCase()),c=i.find(d=>O(d.route.toLowerCase())===l);l&&c&&!l.startsWith("#")&&(t.onclick=d=>m(this,void 0,void 0,function*(){const a=c.route.split("/"),y=location.pathname.split("/");y.pop(),d.preventDefault(),(yield this.router.navigate(a).catch(v=>(console.error("routing error",v),!1)))&&y.every((v,x)=>a[x]===v)&&a.length!==y.length+1&&setTimeout(()=>this.replaceContent(),10)}))})}replaceContent(){window.scullyContent=void 0;const t=this.elm.parentElement;let n=function(e,r){const t=[],n=document.createNodeIterator(e,NodeFilter.SHOW_COMMENT,{acceptNode:o=>o.nodeValue&&!o.nodeValue.includes(r)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});let i;for(;i=n.nextNode();)t.push(i);return t}(t,"scullyContent-begin")[0];for(;n&&n!==this.elm;){const i=n.nextSibling;t.removeChild(n),n=i}this.handlePage()}getCSSId(t){return t.getAttributeNames().find(n=>n.startsWith("_ngcontent"))||""}ngOnDestroy(){this.routeSub.unsubscribe(),W="//"}}return e.\u0275fac=function(t){return new(t||e)(f.Y36(f.SBq),f.Y36(at),f.Y36(_.F0),f.Y36(K.Ye),f.Y36(Y))},e.\u0275cmp=f.Xpm({type:e,selectors:[["scully-content"]],ngContentSelectors:St,decls:1,vars:0,template:function(t,n){1&t&&(f.F$t(),f.Hsn(0))},styles:["\n      :host {\n        display: none;\n      }\n      scully-content {\n        display: none;\n      }\n    "],encapsulation:2,changeDetection:0}),e})(),lt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({}),e})(),Pt=(()=>{class e{constructor(t){this.idle=t}static forRoot(t=B){return t=Object.assign({},B,t),{ngModule:e,providers:[{provide:Y,useValue:t}]}}}return e.\u0275fac=function(t){return new(t||e)(f.LFG(Ot))},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[lt],lt]}),e})()},2996:(H,L,u)=>{u.d(L,{j:()=>C});var s=u(8002);function C(...w){const T=w.length;if(0===T)throw new Error("list of properties cannot be empty.");return P=>(0,s.U)(function(w,T){return I=>{let m=I;for(let M=0;M<T;M++){const h=null!=m?m[w[M]]:void 0;if(void 0===h)return;m=h}return m}}(w,T))(P)}},8486:(H,L,u)=>{u.d(L,{s:()=>M});var s=u(7716),C=u(8583),g=u(3738),w=u(9838),T=u(2675);function P(h,S){if(1&h&&s._UZ(0,"img",8),2&h){const p=s.oxw().$implicit;s.Q6J("src",p.img,s.LSH)}}function I(h,S){if(1&h&&(s.TgZ(0,"mat-chip-list",9),s.TgZ(1,"mat-chip"),s._uU(2),s.qZA(),s.qZA()),2&h){const p=S.$implicit;s.xp6(1),s.uIk("aria-label",p),s.xp6(1),s.Oqu(p)}}function m(h,S){if(1&h&&(s.TgZ(0,"div",2),s.TgZ(1,"mat-card",3),s.TgZ(2,"mat-card-header"),s.TgZ(3,"h2",4),s.TgZ(4,"a"),s._uU(5),s.qZA(),s.qZA(),s.TgZ(6,"h5",5),s._uU(7),s.ALo(8,"date"),s.qZA(),s.YNc(9,P,1,1,"img",6),s.qZA(),s.TgZ(10,"mat-card-content"),s._uU(11),s.qZA(),s.TgZ(12,"mat-card-footer"),s.YNc(13,I,3,2,"mat-chip-list",7),s.qZA(),s.qZA(),s.qZA()),2&h){const p=S.$implicit;s.xp6(1),s.Q6J("routerLink",p.route),s.xp6(4),s.Oqu(p.title),s.xp6(2),s.Oqu(s.lcZ(8,6,p.createdAt)),s.xp6(2),s.Q6J("ngIf",p.img),s.xp6(2),s.Oqu(p.description),s.xp6(2),s.Q6J("ngForOf",p.tags)}}let M=(()=>{class h{constructor(){}}return h.\u0275fac=function(p){return new(p||h)},h.\u0275cmp=s.Xpm({type:h,selectors:[["app-cards"]],inputs:{routes:"routes"},decls:3,vars:3,consts:[[1,"row"],["class","col-12 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"col-12","col-md-4","col-lg-3","col-xl-2"],[2,"cursor","pointer",3,"routerLink"],["mat-card-title",""],["mat-card-subtitle",""],["mat-card-md-image","",3,"src",4,"ngIf"],["aria-label","Etiquetas",4,"ngFor","ngForOf"],["mat-card-md-image","",3,"src"],["aria-label","Etiquetas"]],template:function(p,b){1&p&&(s.TgZ(0,"div",0),s.YNc(1,m,14,8,"div",1),s.ALo(2,"async"),s.qZA()),2&p&&(s.xp6(1),s.Q6J("ngForOf",s.lcZ(2,1,b.routes)))},directives:[C.sg,g.a8,w.rH,g.dk,g.n5,g.$j,C.O5,g.dn,g.rt,g.nc,T.qn,T.HS],pipes:[C.Ov,C.uU],encapsulation:2}),h})()},3766:(H,L,u)=>{u.d(L,{k:()=>I});var s=u(739),C=u(2996),g=u(8002),w=u(7716),T=u(7364),P=u(9838);let I=(()=>{class m{constructor(h,S){this.scullyService=h,this.activatedRoute=S}getRoute(h){return(0,s.aj)([this.activatedRoute.params.pipe((0,C.j)("title")),this.scullyService.available$]).pipe((0,g.U)(([S,p])=>p.find(b=>b.route===`${h}/${S}`)))}getPublishedRoutes(h){return this.scullyService.available$.pipe((0,g.U)(S=>S.filter(p=>{var b;return p.route.startsWith(`${h}/`)&&(null===(b=p.sourceFile)||void 0===b?void 0:b.endsWith(".md"))})),(0,g.U)(S=>S.sort((p,b)=>{var Z,N;return new Date((null===(Z=b.createdAt)||void 0===Z?void 0:Z.toString())||"2021-11-10").getTime()-new Date((null===(N=p.createdAt)||void 0===N?void 0:N.toString())||"2021-11-10").getTime()})))}}return m.\u0275fac=function(h){return new(h||m)(w.LFG(T.sG),w.LFG(P.gz))},m.\u0275prov=w.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);