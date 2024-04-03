"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2548],{80821:function(U,p,t){t.d(p,{Z:function(){return h}});var P=t(5574),o=t.n(P),j=t(93246),l=t(54006),s=t(31418),v=t(86738),d=t(14726),e=t(62435),g=t(86074);function h(u){var E=(0,e.useState)(!1),D=o()(E,2),B=D[0],T=D[1],y=s.Z.useApp(),O=(0,l.useIntl)(),b=function(){T(!0),u.action().then(function(x){if(T(!1),typeof u.onSuccess=="function"&&u.onSuccess(x),u.messageSuccess){var _="";u.messageSuccess.indexOf(".")>-1?_=O.formatMessage({id:u.messageSuccess}):_=u.messageSuccess,u.asynced?(0,j.Rk)(y,_):(0,j.$h)(y,_)}}).catch(function(x){T(!1),typeof u.onError=="function"&&u.onError(x)})};return u.confirm?(0,g.jsx)(v.Z,{style:{width:500},title:"\u63D0\u793A",description:u.confirm,onConfirm:b,okText:"Yes",cancelText:"No",children:(0,g.jsx)(d.ZP,{disabled:u.disabled,icon:u.icon,loading:B,danger:u.danger,type:u.type,children:u.children})}):(0,g.jsx)(d.ZP,{disabled:u.disabled,icon:u.icon,loading:B,onClick:b,danger:u.danger,type:u.type,children:u.children})}},67667:function(U,p,t){t.r(p),t.d(p,{default:function(){return ee}});var P=t(5574),o=t.n(P),j=t(80821),l=t(97857),s=t.n(l),v=t(28413),d=t(62435),e=t(86074);function g(Z){var R=(0,d.useState)(),F=o()(R,2),A=F[0],W=F[1],L={colorField:"value",valueField:"value",scale:{color:{range:["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]}},legend:!1};return Z.data?(0,e.jsx)(v.Z,s()(s()({},L),{},{height:500,data:{name:"root",children:Z.data}})):(0,e.jsx)(e.Fragment,{})}var h=t(2831),u=t(18148),E=t(5251),D=t(45605),B=t(1210),T=t(95556),y=t(12122),O=t(50067),b=t(2830),C=t(26522),x=t(238),_=t(38345),i=t(74273),m=t(54006),r=t(26412),a=t(78957);function ee(){var Z,R,F,A,W,L,z,K,k,G,V,H,N,Y,X,te=(0,d.useState)(),J=o()(te,2),n=J[0],ne=J[1],ae=(0,d.useState)(),Q=o()(ae,2),c=Q[0],se=Q[1],w=function(){(0,h.a)().then(function($){ne($.data);var S={total:0,container:0,volume:0,image:0,cache:0,item:[]};$.data.usage.Containers.map(function(f){var I,M;S.container+=f.SizeRootFs+((I=f.SizeRw)!==null&&I!==void 0?I:0),S.item.push({name:f.Names[0],value:parseFloat(((f.SizeRootFs+((M=f.SizeRw)!==null&&M!==void 0?M:0))/1024/1024).toFixed(2))})}),$.data.usage.Volumes.map(function(f){S.volume+=f.UsageData.Size,S.item.push({name:f.Name,value:parseFloat((f.UsageData.Size/1024/1024).toFixed(2))})}),$.data.usage.Images.map(function(f){var I,M;S.image+=f.Size-((I=f.Sharedsize)!==null&&I!==void 0?I:0),S.item.push({name:f.RepoTags&&f.RepoTags.length>0?f.RepoTags[0]:f.Id,value:parseFloat(((f.Size-((M=f.Sharedsize)!==null&&M!==void 0?M:0))/1024/1024).toFixed(2))})}),$.data.usage.BuildCache.map(function(f){S.cache+=f.Size}),S.total=$.data.usage.LayersSize,se(S)})};return(0,d.useEffect)(function(){w()},[]),(0,e.jsxs)(_.Z,{direction:"column",gutter:[10,10],children:[(0,e.jsx)(_.Z,{title:(0,e.jsx)(D.Z,{}),subTitle:"\u57FA\u7840\u4FE1\u606F",bordered:!0,headerBordered:!0,children:(0,e.jsxs)(r.Z,{title:"\u7CFB\u7EDF\u4FE1\u606F",children:[(0,e.jsx)(r.Z.Item,{label:"\u9762\u677F\u4FE1\u606F",children:(0,e.jsxs)(a.Z,{direction:"horizontal",children:[(0,e.jsx)("span",{children:"DPanel - 1.0.0"}),(0,e.jsx)("a",{target:"_blank",href:"https://github.com/donknap/dpanel",children:(0,e.jsx)(B.Z,{})})]})}),(0,e.jsx)(r.Z.Item,{label:"Docker Sdk \u7248\u672C",children:n==null?void 0:n.sdkVersion}),(0,e.jsx)(r.Z.Item,{label:"Docker\u7248\u672C",children:"".concat(n==null?void 0:n.info.OperatingSystem," - ").concat(n==null?void 0:n.info.ServerVersion," - ").concat(n==null?void 0:n.info.KernelVersion," - ").concat(n==null?void 0:n.info.Architecture)}),(0,e.jsx)(r.Z.Item,{label:"Cpu",children:n==null?void 0:n.info.NCPU}),(0,e.jsx)(r.Z.Item,{label:"Memory",children:(0,E.FI)((Z=n==null?void 0:n.info.MemTotal)!==null&&Z!==void 0?Z:0)}),(0,e.jsx)(r.Z.Item,{label:"\u7CFB\u7EDF\u65F6\u95F4",children:new Date((R=n==null?void 0:n.info.SystemTime)!==null&&R!==void 0?R:"").toLocaleString()})]})}),(0,e.jsx)(_.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(T.Z,{}),subTitle:"\u5BB9\u5668",children:(0,e.jsxs)(i.Z.Group,{children:[(0,e.jsx)(i.Z,{statistic:{title:"\u5168\u90E8",value:(F=n==null?void 0:n.info.Containers)!==null&&F!==void 0?F:0,description:(0,e.jsx)(m.Link,{to:"/app/list",children:"\u67E5\u770B"})}}),(0,e.jsx)(i.Z.Divider,{}),(0,e.jsx)(i.Z,{statistic:{title:"\u8FD0\u884C\u4E2D",value:(A=n==null?void 0:n.info.ContainersRunning)!==null&&A!==void 0?A:0,status:"success"}}),(0,e.jsx)(i.Z,{statistic:{title:"\u505C\u6B62",value:((W=n==null?void 0:n.info.ContainersPaused)!==null&&W!==void 0?W:0)+((L=n==null?void 0:n.info.ContainersStopped)!==null&&L!==void 0?L:0),status:"error"}}),(0,e.jsx)(i.Z,{statistic:{title:"\u56DE\u6536\u7AD9",value:(z=n==null?void 0:n.total.containerTask)!==null&&z!==void 0?z:0,status:"default",description:(0,e.jsx)(m.Link,{to:"/app/list/recycle",children:"\u67E5\u770B"})}})]})}),(0,e.jsxs)(_.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(y.Z,{}),subTitle:"\u5176\u5B83",children:[(0,e.jsx)(i.Z,{statistic:{title:"\u955C\u50CF",value:"".concat((K=n==null?void 0:n.usage.Images.length)!==null&&K!==void 0?K:0),status:"default",description:(0,e.jsx)(m.Link,{to:"/image/list",children:"\u67E5\u770B"})},chart:(0,e.jsx)(O.Z,{style:{fontSize:30,paddingTop:20}}),chartPlacement:"left"}),(0,e.jsx)(i.Z,{statistic:{title:"\u955C\u50CF\u4EFB\u52A1",value:(k=n==null?void 0:n.total.imageTask)!==null&&k!==void 0?k:0,status:"default",description:(0,e.jsx)(m.Link,{to:"/image/list/build",children:"\u67E5\u770B"})},chart:(0,e.jsx)(b.Z,{style:{fontSize:30,paddingTop:20}}),chartPlacement:"left"}),(0,e.jsx)(i.Z,{statistic:{title:"\u7F51\u7EDC",value:n==null?void 0:n.total.network,status:"default",description:(0,e.jsx)(m.Link,{to:"/system/network",children:"\u67E5\u770B"})},chart:(0,e.jsx)(C.Z,{style:{fontSize:30,paddingTop:20}}),chartPlacement:"left"}),(0,e.jsx)(i.Z,{statistic:{title:"\u5B58\u50A8\u5377",value:(G=n==null?void 0:n.usage.Volumes.length)!==null&&G!==void 0?G:0,status:"default",description:(0,e.jsx)(m.Link,{to:"/system/volume",children:"\u67E5\u770B"})},chart:(0,e.jsx)(x.Z,{style:{fontSize:30,paddingTop:20}}),chartPlacement:"left"})]}),(0,e.jsx)(_.Z,{title:"\u5B58\u50A8\u7528\u91CF",split:"horizontal",headerBordered:!0,bordered:!0,children:(0,e.jsxs)(_.Z,{split:"vertical",gutter:[150,100],children:[c!=null&&c.item&&(c==null?void 0:c.item.length)>0?(0,e.jsx)(g,{data:(V=c==null?void 0:c.item)!==null&&V!==void 0?V:[]}):(0,e.jsx)(e.Fragment,{}),(0,e.jsxs)(_.Z,{split:"horizontal",children:[(0,e.jsx)(i.Z,{statistic:{title:"\u5BB9\u5668",value:(0,E.FI)((H=c==null?void 0:c.container)!==null&&H!==void 0?H:0),description:"\u5305\u542B\u7CFB\u7EDF\u5360\u7528\u53CA\u5BB9\u5668\u8FD0\u884C\u5199\u5165\u6570\u636E"}}),(0,e.jsx)(i.Z,{statistic:{title:"\u955C\u50CF",value:(0,E.FI)((N=c==null?void 0:c.image)!==null&&N!==void 0?N:0)}}),(0,e.jsx)(i.Z,{statistic:{title:"\u5B58\u50A8",value:(0,E.FI)((Y=c==null?void 0:c.volume)!==null&&Y!==void 0?Y:0),description:"\u53EA\u5305\u542B\u5B58\u50A8\u5377,\u4E0D\u5305\u542B\u6302\u8F7D\u76EE\u5F55"}}),(0,e.jsx)(i.Z,{statistic:{title:(0,e.jsxs)(a.Z,{children:[(0,e.jsx)("span",{children:"\u6784\u5EFA\u7F13\u5B58"}),(0,e.jsx)(j.Z,{action:function(){return(0,u.c5)()},type:"link",messageSuccess:"\u6E05\u9664\u6210\u529F",onSuccess:function(){w()},children:"\u6E05\u9664\u7F13\u5B58"})]}),value:(0,E.FI)((X=c==null?void 0:c.cache)!==null&&X!==void 0?X:0)}})]})]})})]})}},2831:function(U,p,t){t.d(p,{a:function(){return v}});var P=t(15009),o=t.n(P),j=t(99289),l=t.n(j),s=t(54006);function v(){return d.apply(this,arguments)}function d(){return d=l()(o()().mark(function e(){return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,s.request)("/api/common/home/info",{method:"POST"});case 2:return h.abrupt("return",h.sent);case 3:case"end":return h.stop()}},e)})),d.apply(this,arguments)}},18148:function(U,p,t){t.d(p,{$q:function(){return B},KG:function(){return v},T8:function(){return E},Xn:function(){return h},ao:function(){return y},c5:function(){return x},c7:function(){return b}});var P=t(15009),o=t.n(P),j=t(99289),l=t.n(j),s=t(54006);function v(i){return d.apply(this,arguments)}function d(){return d=l()(o()().mark(function i(m){return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,s.request)("/api/app/image/get-list",{method:"POST",data:m}));case 1:case"end":return a.stop()}},i)})),d.apply(this,arguments)}function e(i){return g.apply(this,arguments)}function g(){return g=_asyncToGenerator(_regeneratorRuntime().mark(function i(m){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,request("/api/app/log/image-build",{method:"POST",data:m});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},i)})),g.apply(this,arguments)}function h(i){return u.apply(this,arguments)}function u(){return u=l()(o()().mark(function i(m){return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,s.request)("/api/app/image/get-list-build",{method:"POST",data:m}));case 1:case"end":return a.stop()}},i)})),u.apply(this,arguments)}function E(i){return D.apply(this,arguments)}function D(){return D=l()(o()().mark(function i(m){return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,s.request)("/api/app/image/get-build-task",{method:"POST",data:m});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},i)})),D.apply(this,arguments)}function B(i){return T.apply(this,arguments)}function T(){return T=l()(o()().mark(function i(m){return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,s.request)("/api/app/image/delete-build-task",{method:"POST",data:m});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},i)})),T.apply(this,arguments)}function y(i){return O.apply(this,arguments)}function O(){return O=l()(o()().mark(function i(m){return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,s.request)("/api/app/image/image-delete",{method:"POST",data:m});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},i)})),O.apply(this,arguments)}function b(){return C.apply(this,arguments)}function C(){return C=l()(o()().mark(function i(){return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,s.request)("/api/app/image/image-prune",{method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},i)})),C.apply(this,arguments)}function x(){return _.apply(this,arguments)}function _(){return _=l()(o()().mark(function i(){return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,s.request)("/api/app/image/build-prune",{method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},i)})),_.apply(this,arguments)}},5251:function(U,p,t){t.d(p,{FI:function(){return o},ZM:function(){return j}});function P(l){return l.trim()}function o(l){var s="";l<.1*1024?s=l.toFixed(2)+"B":l<.1*1024*1024?s=(l/1024).toFixed(2)+"KB":l<1*1024*1024*1024?s=(l/(1024*1024)).toFixed(2)+"MB":s=(l/(1024*1024*1024)).toFixed(2)+"GB";var v=s+"",d=v.indexOf("."),e=v.substr(d+1,2);return e=="00"?v.substring(0,d)+v.substr(d+3,2):s}function j(l){if(l){var s=new Date(l),v=s.getFullYear()+"-",d=(s.getMonth()+1<10?"0"+(s.getMonth()+1):s.getMonth()+1)+"-",e=(s.getDate()<10?"0"+s.getDate():s.getDate())+" ",g=(s.getHours()<10?"0"+s.getHours():s.getHours())+":",h=(s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes())+":",u=s.getSeconds()<10?"0"+s.getSeconds():s.getSeconds();return v+d+e+g+h+u}}}}]);
