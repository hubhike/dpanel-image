"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2548],{80821:function(L,T,a){a.d(T,{Z:function(){return j}});var I=a(5574),r=a.n(I),E=a(93246),u=a(54006),s=a(31418),v=a(86738),c=a(14726),e=a(83062),p=a(62435),_=a(86074);function j(i){var b=(0,p.useState)(!1),F=r()(b,2),y=F[0],C=F[1],M=s.Z.useApp(),$=(0,u.useIntl)(),B=function(){C(!0),i.action().then(function(h){if(C(!1),typeof i.onSuccess=="function"&&i.onSuccess(h),i.messageSuccess){var m="";i.messageSuccess.indexOf(".")>-1?m=$.formatMessage({id:i.messageSuccess}):m=i.messageSuccess,i.asynced?(0,E.Rk)(M,m):(0,E.$h)(M,m)}}).catch(function(h){C(!1),typeof i.onError=="function"&&i.onError(h)})};return i.confirm?(0,_.jsx)(v.Z,{style:{width:500},title:"\u63D0\u793A",description:i.confirm,onConfirm:B,okText:"Yes",cancelText:"No",children:(0,_.jsx)(c.ZP,{disabled:i.disabled,icon:i.icon,loading:y,danger:i.danger,type:i.type,children:i.children})}):(0,_.jsx)(e.Z,{title:i.tips,children:(0,_.jsx)(c.ZP,{disabled:i.disabled,icon:i.icon,loading:y,onClick:B,danger:i.danger,type:i.type,children:i.children})})}},67667:function(L,T,a){a.r(T),a.d(T,{default:function(){return l}});var I=a(5574),r=a.n(I),E=a(80821),u=a(97857),s=a.n(u),v=a(28413),c=a(62435),e=a(86074);function p(d){var o=(0,c.useState)(),n=r()(o,2),W=n[0],z=n[1],U={colorField:"value",valueField:"value",scale:{color:{range:["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]}},legend:!1};return d.data?(0,e.jsx)(v.Z,s()(s()({},U),{},{height:500,data:{name:"root",children:d.data}})):(0,e.jsx)(e.Fragment,{})}var _=a(2831),j=a(18148),i=a(5251),b=a(45605),F=a(1210),y=a(95556),C=a(12122),M=a(50067),$=a(2830),B=a(26522),A=a(238),h=a(38345),m=a(74273),S=a(54006),O=a(26412),R=a(78957);function l(){var d,o,n,W,z,U,K,k,G,w,V,H,N,Y,X,te=(0,c.useState)(),J=r()(te,2),t=J[0],ne=J[1],ae=(0,c.useState)(),Q=r()(ae,2),f=Q[0],ie=Q[1],q=function(){(0,_.a)().then(function(P){ne(P.data);var D={total:0,container:0,volume:0,image:0,cache:0,item:[]};P.data.usage.Containers&&P.data.usage.Containers.map(function(g){var x,Z;D.container+=g.SizeRootFs+((x=g.SizeRw)!==null&&x!==void 0?x:0),D.item.push({name:g.Names[0],value:parseFloat(((g.SizeRootFs+((Z=g.SizeRw)!==null&&Z!==void 0?Z:0))/1024/1024).toFixed(2))})}),P.data.usage.Volumes&&P.data.usage.Volumes.map(function(g){D.volume+=g.UsageData.Size,D.item.push({name:g.Name,value:parseFloat((g.UsageData.Size/1024/1024).toFixed(2))})}),P.data.usage.Images&&P.data.usage.Images.map(function(g){var x,Z;D.image+=g.Size-((x=g.Sharedsize)!==null&&x!==void 0?x:0),D.item.push({name:g.RepoTags&&g.RepoTags.length>0?g.RepoTags[0]:g.Id,value:parseFloat(((g.Size-((Z=g.Sharedsize)!==null&&Z!==void 0?Z:0))/1024/1024).toFixed(2))})}),P.data.usage.BuildCache&&P.data.usage.BuildCache.map(function(g){D.cache+=g.Size}),D.total=P.data.usage.LayersSize,ie(D)})};return(0,c.useEffect)(function(){q()},[]),(0,e.jsxs)(h.Z,{direction:"column",gutter:[10,10],children:[(0,e.jsx)(h.Z,{title:(0,e.jsx)(b.Z,{}),subTitle:"\u57FA\u7840\u4FE1\u606F",bordered:!0,headerBordered:!0,children:(0,e.jsxs)(O.Z,{title:"\u7CFB\u7EDF\u4FE1\u606F",children:[(0,e.jsx)(O.Z.Item,{label:"\u9762\u677F\u4FE1\u606F",children:(0,e.jsxs)(R.Z,{direction:"horizontal",children:[(0,e.jsxs)("span",{children:["DPanel - ",t==null?void 0:t.dpanel.version]}),(0,e.jsx)("a",{target:"_blank",href:"https://github.com/donknap/dpanel",children:(0,e.jsx)(F.Z,{})})]})}),(0,e.jsx)(O.Z.Item,{label:"Docker Sdk \u7248\u672C",children:t==null?void 0:t.sdkVersion}),(0,e.jsx)(O.Z.Item,{label:"Docker\u7248\u672C",children:"".concat(t==null?void 0:t.info.OperatingSystem," - ").concat(t==null?void 0:t.info.ServerVersion," - ").concat(t==null?void 0:t.info.KernelVersion," - ").concat(t==null?void 0:t.info.Architecture)}),(0,e.jsx)(O.Z.Item,{label:"Cpu",children:t==null?void 0:t.info.NCPU}),(0,e.jsx)(O.Z.Item,{label:"Memory",children:(0,i.FI)((d=t==null?void 0:t.info.MemTotal)!==null&&d!==void 0?d:0)}),(0,e.jsx)(O.Z.Item,{label:"\u7CFB\u7EDF\u65F6\u95F4",children:new Date((o=t==null?void 0:t.info.SystemTime)!==null&&o!==void 0?o:"").toLocaleString()})]})}),(0,e.jsx)(h.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(y.Z,{}),subTitle:"\u5BB9\u5668",children:(0,e.jsxs)(m.Z.Group,{children:[(0,e.jsx)(m.Z,{statistic:{title:"\u5168\u90E8",value:(n=t==null?void 0:t.info.Containers)!==null&&n!==void 0?n:0,description:(0,e.jsx)(S.Link,{to:"/app/list",children:"\u67E5\u770B"})}}),(0,e.jsx)(m.Z.Divider,{}),(0,e.jsx)(m.Z,{statistic:{title:"\u8FD0\u884C\u4E2D",value:(W=t==null?void 0:t.info.ContainersRunning)!==null&&W!==void 0?W:0,status:"success"}}),(0,e.jsx)(m.Z,{statistic:{title:"\u505C\u6B62",value:((z=t==null?void 0:t.info.ContainersPaused)!==null&&z!==void 0?z:0)+((U=t==null?void 0:t.info.ContainersStopped)!==null&&U!==void 0?U:0),status:"error"}}),(0,e.jsx)(m.Z,{statistic:{title:"\u56DE\u6536\u7AD9",value:(K=t==null?void 0:t.total.containerTask)!==null&&K!==void 0?K:0,status:"default",description:(0,e.jsx)(S.Link,{to:"/app/list/recycle",children:"\u67E5\u770B"})}})]})}),(0,e.jsxs)(h.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(C.Z,{}),subTitle:"\u5176\u5B83",children:[(0,e.jsx)(m.Z,{statistic:{title:"\u955C\u50CF",value:"".concat((k=(t==null?void 0:t.usage.Images)&&t.usage.Images.length)!==null&&k!==void 0?k:0),status:"default",description:(0,e.jsx)(S.Link,{to:"/image/list",children:"\u67E5\u770B"})},chart:(0,e.jsx)(M.Z,{style:{fontSize:30,paddingTop:20}}),chartPlacement:"left"}),(0,e.jsx)(m.Z,{statistic:{title:"\u955C\u50CF\u4EFB\u52A1",value:(G=t==null?void 0:t.total.imageTask)!==null&&G!==void 0?G:0,status:"default",description:(0,e.jsx)(S.Link,{to:"/image/list/build",children:"\u67E5\u770B"})},chart:(0,e.jsx)($.Z,{style:{fontSize:30,paddingTop:20}}),chartPlacement:"left"}),(0,e.jsx)(m.Z,{statistic:{title:"\u7F51\u7EDC",value:t==null?void 0:t.total.network,status:"default",description:(0,e.jsx)(S.Link,{to:"/system/network",children:"\u67E5\u770B"})},chart:(0,e.jsx)(B.Z,{style:{fontSize:30,paddingTop:20}}),chartPlacement:"left"}),(0,e.jsx)(m.Z,{statistic:{title:"\u5B58\u50A8\u5377",value:(w=(t==null?void 0:t.usage.Volumes)&&(t==null?void 0:t.usage.Volumes.length))!==null&&w!==void 0?w:0,status:"default",description:(0,e.jsx)(S.Link,{to:"/system/volume",children:"\u67E5\u770B"})},chart:(0,e.jsx)(A.Z,{style:{fontSize:30,paddingTop:20}}),chartPlacement:"left"})]}),(0,e.jsx)(h.Z,{title:"\u5B58\u50A8\u7528\u91CF",split:"horizontal",headerBordered:!0,bordered:!0,children:(0,e.jsxs)(h.Z,{split:"vertical",gutter:[150,100],children:[f!=null&&f.item&&(f==null?void 0:f.item.length)>0?(0,e.jsx)(p,{data:(V=f==null?void 0:f.item)!==null&&V!==void 0?V:[]}):(0,e.jsx)(e.Fragment,{}),(0,e.jsxs)(h.Z,{split:"horizontal",children:[(0,e.jsx)(m.Z,{statistic:{title:"\u5BB9\u5668",value:(0,i.FI)((H=f==null?void 0:f.container)!==null&&H!==void 0?H:0),description:"\u5305\u542B\u7CFB\u7EDF\u5360\u7528\u53CA\u5BB9\u5668\u8FD0\u884C\u5199\u5165\u6570\u636E"}}),(0,e.jsx)(m.Z,{statistic:{title:"\u955C\u50CF",value:(0,i.FI)((N=f==null?void 0:f.image)!==null&&N!==void 0?N:0)}}),(0,e.jsx)(m.Z,{statistic:{title:"\u5B58\u50A8",value:(0,i.FI)((Y=f==null?void 0:f.volume)!==null&&Y!==void 0?Y:0),description:"\u53EA\u5305\u542B\u5B58\u50A8\u5377,\u4E0D\u5305\u542B\u6302\u8F7D\u76EE\u5F55"}}),(0,e.jsx)(m.Z,{statistic:{title:(0,e.jsxs)(R.Z,{children:[(0,e.jsx)("span",{children:"\u6784\u5EFA\u7F13\u5B58"}),(0,e.jsx)(E.Z,{action:function(){return(0,j.c5)()},type:"link",messageSuccess:"\u6E05\u9664\u6210\u529F",onSuccess:function(){q()},children:"\u6E05\u9664\u7F13\u5B58"})]}),value:(0,i.FI)((X=f==null?void 0:f.cache)!==null&&X!==void 0?X:0)}})]})]})})]})}},2831:function(L,T,a){a.d(T,{a:function(){return v},d:function(){return e}});var I=a(15009),r=a.n(I),E=a(99289),u=a.n(E),s=a(54006);function v(){return c.apply(this,arguments)}function c(){return c=u()(r()().mark(function _(){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,s.request)("/api/common/home/info",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},_)})),c.apply(this,arguments)}function e(){return p.apply(this,arguments)}function p(){return p=u()(r()().mark(function _(){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,s.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},_)})),p.apply(this,arguments)}},18148:function(L,T,a){a.d(T,{$q:function(){return F},Fj:function(){return m},KG:function(){return v},KX:function(){return O},T8:function(){return i},Xn:function(){return _},ao:function(){return C},c5:function(){return A},c7:function(){return $}});var I=a(15009),r=a.n(I),E=a(99289),u=a.n(E),s=a(54006);function v(l){return c.apply(this,arguments)}function c(){return c=u()(r()().mark(function l(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,s.request)("/api/app/image/get-list",{method:"POST",data:d}));case 1:case"end":return n.stop()}},l)})),c.apply(this,arguments)}function e(l){return p.apply(this,arguments)}function p(){return p=_asyncToGenerator(_regeneratorRuntime().mark(function l(d){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,request("/api/app/log/image-build",{method:"POST",data:d});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},l)})),p.apply(this,arguments)}function _(l){return j.apply(this,arguments)}function j(){return j=u()(r()().mark(function l(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,s.request)("/api/app/image/get-list-build",{method:"POST",data:d}));case 1:case"end":return n.stop()}},l)})),j.apply(this,arguments)}function i(l){return b.apply(this,arguments)}function b(){return b=u()(r()().mark(function l(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.request)("/api/app/image/get-build-task",{method:"POST",data:d});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},l)})),b.apply(this,arguments)}function F(l){return y.apply(this,arguments)}function y(){return y=u()(r()().mark(function l(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.request)("/api/app/image/delete-build-task",{method:"POST",data:d});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},l)})),y.apply(this,arguments)}function C(l){return M.apply(this,arguments)}function M(){return M=u()(r()().mark(function l(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.request)("/api/app/image/image-delete",{method:"POST",data:d});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},l)})),M.apply(this,arguments)}function $(){return B.apply(this,arguments)}function B(){return B=u()(r()().mark(function l(){return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,s.request)("/api/app/image/image-prune",{method:"POST"});case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}},l)})),B.apply(this,arguments)}function A(){return h.apply(this,arguments)}function h(){return h=u()(r()().mark(function l(){return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,s.request)("/api/app/image/build-prune",{method:"POST"});case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}},l)})),h.apply(this,arguments)}function m(l){return S.apply(this,arguments)}function S(){return S=u()(r()().mark(function l(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.request)("/api/app/image/update-title",{method:"POST",data:d});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},l)})),S.apply(this,arguments)}function O(l){return R.apply(this,arguments)}function R(){return R=u()(r()().mark(function l(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,s.request)("/api/app/image/tag-sync",{method:"POST",data:d}));case 1:case"end":return n.stop()}},l)})),R.apply(this,arguments)}},5251:function(L,T,a){a.d(T,{FI:function(){return r},ZM:function(){return E}});function I(u){return u.trim()}function r(u){var s="";u<.1*1024?s=u.toFixed(2)+"B":u<.1*1024*1024?s=(u/1024).toFixed(2)+"KB":u<1*1024*1024*1024?s=(u/(1024*1024)).toFixed(2)+"MB":s=(u/(1024*1024*1024)).toFixed(2)+"GB";var v=s+"",c=v.indexOf("."),e=v.substr(c+1,2);return e=="00"?v.substring(0,c)+v.substr(c+3,2):s}function E(u){if(u){var s=new Date(u),v=s.getFullYear()+"-",c=(s.getMonth()+1<10?"0"+(s.getMonth()+1):s.getMonth()+1)+"-",e=(s.getDate()<10?"0"+s.getDate():s.getDate())+" ",p=(s.getHours()<10?"0"+s.getHours():s.getHours())+":",_=(s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes())+":",j=s.getSeconds()<10?"0"+s.getSeconds():s.getSeconds();return v+c+e+p+_+j}}}}]);