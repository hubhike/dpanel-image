"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1192],{80821:function(X,b,n){n.d(b,{Z:function(){return P}});var N=n(5574),f=n.n(N),U=n(93246),x=n(54006),w=n(31418),D=n(86738),Z=n(14726),g=n(62435),S=n(86074);function P(s){var C=(0,g.useState)(!1),L=f()(C,2),B=L[0],I=L[1],E=w.Z.useApp(),K=(0,x.useIntl)(),A=function(){I(!0),s.action().then(function(M){if(I(!1),typeof s.onSuccess=="function"&&s.onSuccess(M),s.messageSuccess){var p="";s.messageSuccess.indexOf(".")>-1?p=K.formatMessage({id:s.messageSuccess}):p=s.messageSuccess,s.asynced?(0,U.Rk)(E,p):(0,U.$h)(E,p)}}).catch(function(M){I(!1),typeof s.onError=="function"&&s.onError(M)})};return s.confirm?(0,S.jsx)(D.Z,{style:{width:500},title:"\u63D0\u793A",description:s.confirm,onConfirm:A,okText:"Yes",cancelText:"No",children:(0,S.jsx)(Z.ZP,{disabled:s.disabled,icon:s.icon,loading:B,danger:s.danger,type:s.type,children:s.children})}):(0,S.jsx)(Z.ZP,{disabled:s.disabled,icon:s.icon,loading:B,onClick:A,danger:s.danger,type:s.type,children:s.children})}},32010:function(X,b,n){n.r(b),n.d(b,{default:function(){return ce}});var N=n(15009),f=n.n(N),U=n(99289),x=n.n(U),w=n(5574),D=n.n(w),Z=n(80821),g=n(54006);function S(d){return P.apply(this,arguments)}function P(){return P=x()(f()().mark(function d(i){return f()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,g.request)("/api/app/volume/get-list",{method:"POST",data:i}));case 1:case"end":return u.stop()}},d)})),P.apply(this,arguments)}function s(d){return C.apply(this,arguments)}function C(){return C=x()(f()().mark(function d(i){return f()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,g.request)("/api/app/volume/create",{method:"POST",data:i}));case 1:case"end":return u.stop()}},d)})),C.apply(this,arguments)}function L(){return B.apply(this,arguments)}function B(){return B=x()(f()().mark(function d(){return f()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,g.request)("/api/app/volume/prune",{method:"POST"});case 2:return v.abrupt("return",v.sent);case 3:case"end":return v.stop()}},d)})),B.apply(this,arguments)}function I(d){return E.apply(this,arguments)}function E(){return E=x()(f()().mark(function d(i){return f()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,g.request)("/api/app/volume/delete",{method:"POST",data:i});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},d)})),E.apply(this,arguments)}function K(d){return A.apply(this,arguments)}function A(){return A=x()(f()().mark(function d(i){return f()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,g.request)("/api/app/volume/get-detail",{method:"POST",data:i}));case 1:case"end":return u.stop()}},d)})),A.apply(this,arguments)}var G=n(93246),M=n(184),p=n(5966),k=n(62370),q=n(86615),_=n(97462),ee=n(17186),ne=n(24739),te=n(31418),H=n(14726),Y=n(34041),O=n(62435),e=n(86074),re=(0,O.forwardRef)(function(d,i){var v=(0,O.useState)(!1),u=D()(v,2),$=u[0],V=u[1],z=te.Z.useApp(),T=(0,O.useRef)();return(0,O.useImperativeHandle)(i,function(){return{}}),(0,e.jsxs)(M.a,{name:"create",title:"\u6DFB\u52A0\u5B58\u50A8\u5377",open:$,onOpenChange:function(F){V(F)},formRef:T,trigger:(0,e.jsx)(H.ZP,{type:"primary",children:"\u6DFB\u52A0"}),onFinish:function(){var l=x()(f()().mark(function F(a){var c,t,r,m,o,j;return f()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return m=[],a.otherOptions&&a.otherOptions.map(function(R){m.push(R.name+`
`+R.value)}),h.next=4,s({name:a.name,driver:"local",type:a.type,nfsUrl:(c=a.nfsUrl)!==null&&c!==void 0?c:"",nfsMountPoint:(t=a.nfsMountPoint)!==null&&t!==void 0?t:"",nfsOptions:(r=a.nfsOptions)!==null&&r!==void 0?r:"",tmpfsOptions:a.tmpfsOptions,otherOptions:m});case 4:if(o=h.sent,!(o&&o.data&&o.data.info.Name!="")){h.next=10;break}return(0,G.$h)(z,"\u6DFB\u52A0\u5B58\u50A8\u5377\u6210\u529F"),d.onFinish&&d.onFinish(),(j=T.current)===null||j===void 0||j.resetFields(),h.abrupt("return",!0);case 10:case"end":return h.stop()}},F)}));return function(F){return l.apply(this,arguments)}}(),children:[(0,e.jsx)(p.Z,{label:"\u540D\u79F0",name:"name",placeholder:"\u6307\u5B9A\u552F\u4E00\u5B58\u50A8\u5377\u540D\u79F0"}),(0,e.jsx)(k.Z,{label:"\u7C7B\u578B",name:"driver",children:(0,e.jsx)(Y.Z,{defaultValue:"local",children:(0,e.jsx)(Y.Z.Option,{value:"local",children:"local"})})}),(0,e.jsx)(q.Z.Group,{name:"type",label:"\u5B58\u50A8\u7C7B\u578B",valueEnum:{default:"\u9ED8\u8BA4",tmpfs:"tmpfs",nfs:"Nfs",nfs4:"Nfs4",other:"\u81EA\u5B9A\u4E49"},initialValue:"default"}),(0,e.jsx)(_.Z,{name:["type"],children:function(F){var a=F.type;if(a=="other")return(0,e.jsx)(ee.u,{name:"otherOptions",creatorButtonProps:{creatorButtonText:"\u5B58\u50A8"},copyIconProps:!1,min:0,children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(p.Z,{name:"name",label:"\u540D\u79F0",placeholder:"\u4F8B\u5982:mountpoint"}),(0,e.jsx)(p.Z,{name:"value",label:"\u503C",placeholder:"\u4F8B\u5982:/etc/path"})]})});if(a=="nfs"||a=="nfs4")return[(0,e.jsx)(p.Z,{label:"\u5730\u5740",name:"nfsUrl",required:!0,rules:[{required:!0}],placeholder:"\u914D\u7F6ENfs\u670D\u52A1\u5730\u5740,\u4F8B\u5982 my.nfs.com \u6216\u662F 172.16.1.13 "},"nfsUrl"),(0,e.jsx)(p.Z,{label:"\u6302\u8F7D\u70B9",name:"nfsMountPoint",required:!0,rules:[{required:!0}],placeholder:"\u4F8B\u5982, /export/share, :/export/share, /share or :/share"},"nfsMountPoint"),(0,e.jsx)(p.Z,{label:"\u914D\u7F6E",name:"nfsOptions",initialValue:"rw,noatime,rsize=8192,wsize=8192,tcp,timeo=14"},"nfsOptions")];if(a=="tmpfs")return[(0,e.jsx)(p.Z,{label:"\u914D\u7F6E",name:"tmpfsOptions",initialValue:"size=100m,uid=1000"},"tmpfsOptions")]}})]})}),ae=re,ue=n(43425),le=n(12010),J=n(38345),W=n(66309),Q=n(78957),se=n(96074),ie=n(83062),oe=n(85576),y=n(26412),de=n(63490);function ce(){var d,i=(0,O.useRef)(),v=(0,O.useState)(""),u=D()(v,2),$=u[0],V=u[1],z=(0,O.useState)(),T=D()(z,2),l=T[0],F=T[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(le.Z,{rowKey:"Name",pagination:{pageSize:10},columns:[{title:"\u540D\u79F0",ellipsis:!0,dataIndex:"Name",width:250},{title:"\u72B6\u6001",ellipsis:!0,search:!1,render:function(c,t,r,m,o){return t.InUse?(0,e.jsx)(W.Z,{color:"cyan",children:"In Use"}):(0,e.jsx)(e.Fragment,{})}},{title:"\u7C7B\u578B",ellipsis:!0,width:80,search:!1,dataIndex:"Driver"},{title:"\u6302\u8F7D\u70B9",ellipsis:!0,search:!1,dataIndex:"Mountpoint"},{title:"\u521B\u5EFA\u65F6\u95F4",ellipsis:!0,width:200,search:!1,dataIndex:"CreatedAt",render:function(c,t,r,m,o){return new Date(t.CreatedAt).toLocaleString()}},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(c,t,r,m,o){return(0,e.jsx)(Q.Z,{split:(0,e.jsx)(se.Z,{type:"vertical"}),children:(0,e.jsx)(H.ZP,{type:"link",onClick:function(){V(t.Name)},children:(0,e.jsx)(ie.Z,{title:"\u7BA1\u7406",children:(0,e.jsx)(ue.Z,{})})})})}}],request:function(){var a=x()(f()().mark(function c(t,r,m){var o,j;return f()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,S({name:t.name});case 2:return o=h.sent,j=[],o.data.inUse?j=o.data.list.map(function(R){return o.data.inUse.indexOf(R.Name)!=-1?R.InUse=!0:R.InUse=!1,R}):j=o.data.list,h.abrupt("return",{data:j,success:!0,total:o.data.list.length});case 6:case"end":return h.stop()}},c)}));return function(c,t,r){return a.apply(this,arguments)}}(),toolBarRender:function(){return[(0,e.jsx)(ae,{onFinish:function(){var t,r;!((t=i.current)===null||t===void 0)&&t.reloadAndRest&&((r=i.current)===null||r===void 0||r.reloadAndRest())}}),(0,e.jsx)(Z.Z,{action:function(){return L()},onSuccess:function(){var t,r;return!((t=i.current)===null||t===void 0)&&t.reloadAndRest&&((r=i.current)===null||r===void 0||r.reloadAndRest()),!0},onError:function(){var t,r;return!((t=i.current)===null||t===void 0)&&t.reset&&((r=i.current)===null||r===void 0||r.reset()),!0},messageSuccess:"\u6E05\u9664\u6210\u529F",confirm:"\u662F\u5426\u6E05\u7406\u672A\u4F7F\u7528\u7684\u533F\u540D\u5B58\u50A8\uFF1F",children:"\u6E05\u7406\u672A\u4F7F\u7528\u5B58\u50A8"})]},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},actionRef:i,tableAlertOptionRender:function(c){var t=c.selectedRowKeys;return(0,e.jsx)(Q.Z,{size:16,children:(0,e.jsx)(Z.Z,{danger:!0,type:"primary",action:function(){return I({name:t})},onSuccess:function(){var m,o;return!((m=i.current)===null||m===void 0)&&m.reloadAndRest&&((o=i.current)===null||o===void 0||o.reloadAndRest()),!0},onError:function(){var m,o;return!((m=i.current)===null||m===void 0)&&m.reset&&((o=i.current)===null||o===void 0||o.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"})})}}),(0,e.jsxs)(oe.Z,{width:800,open:$!="",afterOpenChange:x()(f()().mark(function a(){var c;return f()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!$){r.next=5;break}return r.next=3,K({name:$});case 3:c=r.sent,F(c.data);case 5:case"end":return r.stop()}},a)})),footer:!1,onCancel:function(){return V("")},children:[(0,e.jsx)(J.Z,{title:"\u5B58\u50A8\u8BE6\u60C5",ghost:!0,children:(0,e.jsxs)(y.Z,{labelStyle:{width:"150px"},column:1,bordered:!0,children:[(0,e.jsx)(y.Z.Item,{label:"\u540D\u79F0",children:l==null?void 0:l.info.Name}),(0,e.jsx)(y.Z.Item,{label:"\u521B\u5EFA\u65F6\u95F4",children:new Date((d=l==null?void 0:l.info.CreatedAt)!==null&&d!==void 0?d:"").toLocaleString()}),(0,e.jsx)(y.Z.Item,{label:"\u6302\u8F7D\u70B9",children:l==null?void 0:l.info.Mountpoint}),(0,e.jsx)(y.Z.Item,{label:"\u7C7B\u578B",children:l==null?void 0:l.info.Driver}),(0,e.jsx)(y.Z.Item,{label:"Lables",children:(0,e.jsx)(y.Z,{labelStyle:{width:"150px"},column:1,bordered:!0,children:(l==null?void 0:l.info.Labels)&&Object.keys(l==null?void 0:l.info.Labels).map(function(a){return(0,e.jsx)(y.Z.Item,{label:a,children:l.info.Labels[a]})})})})]})}),(0,e.jsx)(J.Z,{title:"\u4F7F\u7528\u5BB9\u5668",ghost:!0,children:(0,e.jsx)(de.Z,{columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"Name",render:function(c,t,r){return(0,e.jsx)(g.Link,{target:"_blank",to:"/app/detail/edit/".concat(t.Id),children:t.Name})}},{title:"\u5BB9\u5668\u5185\u8DEF\u5F84",dataIndex:"Mount"},{title:"\u6743\u9650",render:function(c,t,r){return t.RW?(0,e.jsx)(W.Z,{children:"\u8BFB\u5199"}):(0,e.jsx)(W.Z,{children:"\u53EA\u8BFB"})}}],dataSource:l==null?void 0:l.inUseContainer,pagination:!1})})]})]})}}}]);