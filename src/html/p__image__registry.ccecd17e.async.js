"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9013],{52688:function($,F,e){var R=e(1413),s=e(45987),y=e(62435),p=e(33468),O=e(86074),B=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],D=y.forwardRef(function(v,h){var o=v.fieldProps,n=v.unCheckedChildren,I=v.checkedChildren,P=v.proFieldProps,l=(0,s.Z)(v,B);return(0,O.jsx)(p.Z,(0,R.Z)({valueType:"switch",fieldProps:(0,R.Z)({unCheckedChildren:n,checkedChildren:I},o),ref:h,valuePropName:"checked",proFieldProps:P,filedConfig:{valuePropName:"checked",ignoreWidth:!0,customLightMode:!0}},l))});F.Z=D},5966:function($,F,e){var R=e(97685),s=e(1413),y=e(45987),p=e(21770),O=e(72723),B=e(55241),D=e(97435),v=e(62435),h=e(33468),o=e(86074),n=["fieldProps","proFieldProps"],I=["fieldProps","proFieldProps"],P="text",l=function(u){var t=u.fieldProps,E=u.proFieldProps,M=(0,y.Z)(u,n);return(0,o.jsx)(h.Z,(0,s.Z)({valueType:P,fieldProps:t,filedConfig:{valueType:P},proFieldProps:E},M))},f=function(u){var t=(0,p.Z)(u.open||!1,{value:u.open,onChange:u.onOpenChange}),E=(0,R.Z)(t,2),M=E[0],K=E[1];return(0,o.jsx)(O.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(b){var d,W=b.getFieldValue(u.name||[]);return(0,o.jsx)(B.Z,(0,s.Z)((0,s.Z)({getPopupContainer:function(a){return a&&a.parentNode?a.parentNode:a},onOpenChange:K,content:(0,o.jsxs)("div",{style:{padding:"4px 0"},children:[(d=u.statusRender)===null||d===void 0?void 0:d.call(u,W),u.strengthText?(0,o.jsx)("div",{style:{marginTop:10},children:(0,o.jsx)("span",{children:u.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},u.popoverProps),{},{open:M,children:u.children}))}})},_=function(u){var t=u.fieldProps,E=u.proFieldProps,M=(0,y.Z)(u,I),K=(0,v.useState)(!1),L=(0,R.Z)(K,2),b=L[0],d=L[1];return t!=null&&t.statusRender&&M.name?(0,o.jsx)(f,{name:M.name,statusRender:t==null?void 0:t.statusRender,popoverProps:t==null?void 0:t.popoverProps,strengthText:t==null?void 0:t.strengthText,open:b,onOpenChange:d,children:(0,o.jsx)("div",{children:(0,o.jsx)(h.Z,(0,s.Z)({valueType:"password",fieldProps:(0,s.Z)((0,s.Z)({},(0,D.Z)(t,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(T){var a;t==null||(a=t.onBlur)===null||a===void 0||a.call(t,T),d(!1)},onClick:function(T){var a;t==null||(a=t.onClick)===null||a===void 0||a.call(t,T),d(!0)}}),proFieldProps:E,filedConfig:{valueType:P}},M))})}):(0,o.jsx)(h.Z,(0,s.Z)({valueType:"password",fieldProps:t,proFieldProps:E,filedConfig:{valueType:P}},M))},r=l;r.Password=_,r.displayName="ProFormComponent",F.Z=r},80821:function($,F,e){e.d(F,{Z:function(){return o}});var R=e(5574),s=e.n(R),y=e(93246),p=e(54006),O=e(31418),B=e(86738),D=e(14726),v=e(62435),h=e(86074);function o(n){var I=(0,v.useState)(!1),P=s()(I,2),l=P[0],f=P[1],_=O.Z.useApp(),r=(0,p.useIntl)(),S=function(){f(!0),n.action().then(function(t){if(f(!1),typeof n.onSuccess=="function"&&n.onSuccess(t),n.messageSuccess){var E="";n.messageSuccess.indexOf(".")>-1?E=r.formatMessage({id:n.messageSuccess}):E=n.messageSuccess,n.asynced?(0,y.Rk)(_,E):(0,y.$h)(_,E)}}).catch(function(t){f(!1),typeof n.onError=="function"&&n.onError(t)})};return n.confirm?(0,h.jsx)(B.Z,{style:{width:500},title:"\u63D0\u793A",description:n.confirm,onConfirm:S,okText:"Yes",cancelText:"No",children:(0,h.jsx)(D.ZP,{disabled:n.disabled,icon:n.icon,loading:l,danger:n.danger,type:n.type,children:n.children})}):(0,h.jsx)(D.ZP,{disabled:n.disabled,icon:n.icon,loading:l,onClick:S,danger:n.danger,type:n.type,children:n.children})}},24396:function($,F,e){e.r(F),e.d(F,{default:function(){return b}});var R=e(15009),s=e.n(R),y=e(99289),p=e.n(y),O=e(80821),B=e(5574),D=e.n(B),v=e(75870),h=e(93246),o=e(184),n=e(5966),I=e(52688),P=e(97462),l=e(31418),f=e(14726),_=e(62435),r=e(86074),S=(0,_.forwardRef)(function(d,W){var T=(0,_.useState)(!1),a=D()(T,2),m=a[0],g=a[1],A=l.Z.useApp(),c=(0,_.useRef)(),N=(0,_.useState)(0),C=D()(N,2),j=C[0],G=C[1];return(0,_.useImperativeHandle)(W,function(){return{setEditId:function(i){(0,v.t1)({id:i}).then(function(x){g(!0),G(i)})},editDockerIo:function(i){var x;(x=c.current)===null||x===void 0||x.setFieldsValue({title:i.title,serverAddress:i.serverAddress}),G(-1),g(!0)}}}),(0,_.useEffect)(function(){j&&j>0&&(0,v.t1)({id:j}).then(function(Z){var i;(i=c.current)===null||i===void 0||i.setFieldsValue({title:Z.data.info.title,serverAddress:Z.data.info.serverAddress,username:Z.data.info.username})})},[j]),(0,r.jsxs)(o.a,{drawerProps:{forceRender:!0},name:"create",title:"\u6DFB\u52A0/\u7F16\u8F91\u955C\u50CF\u4ED3\u5E93",open:m,onOpenChange:function(i){g(i)},formRef:c,trigger:(0,r.jsx)(f.ZP,{type:"primary",onClick:function(){var i;(i=c.current)===null||i===void 0||i.resetFields(),G(0)},children:"\u6DFB\u52A0"}),onFinish:function(){var Z=p()(s()().mark(function i(x){var V,H,w,z;return s()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,(0,v.ZH)({id:j,title:x.title,serverAddress:x.serverAddress,username:(V=x.username)!==null&&V!==void 0?V:"",password:(H=x.password)!==null&&H!==void 0?H:""});case 2:if(w=U.sent,!(w&&w.data&&w.data.id>0)){U.next=8;break}return(0,h.$h)(A,"\u6DFB\u52A0\u6216\u662F\u7F16\u8F91\u955C\u50CF\u4ED3\u5E93\u6210\u529F"),d.onFinish&&d.onFinish(),(z=c.current)===null||z===void 0||z.resetFields(),U.abrupt("return",!0);case 8:case"end":return U.stop()}},i)}));return function(i){return Z.apply(this,arguments)}}(),children:[(0,r.jsx)(n.Z,{label:"\u540D\u79F0",name:"title",placeholder:"\u6307\u5B9A\u4ED3\u5E93\u4E00\u4E2A\u540D\u79F0",disabled:j==-1}),(0,r.jsx)(n.Z,{label:"Url",name:"serverAddress",placeholder:"\u53EA\u8F93\u5165\u4ED3\u5E93\u57DF\u540Dhost,\u4F8B\u5982:ccr.ccs.tencentyun.com",disabled:j==-1}),(0,r.jsx)(I.Z,{label:"\u914D\u7F6E\u4ED3\u5E93\u6743\u9650",name:"hasPermission",initialValue:!0}),(0,r.jsx)(P.Z,{name:["hasPermission"],children:function(i){var x=i.hasPermission;return x?[(0,r.jsx)(n.Z,{label:"\u7528\u6237\u540D",name:"username",placeholder:"\u914D\u7F6E\u4ED3\u5E93\u7528\u6237\u540D"},"username"),(0,r.jsx)(n.Z.Password,{label:"\u5BC6\u7801",name:"password",placeholder:"\u914D\u7F6E\u4ED3\u5E93\u5BC6\u7801,\u4E3A\u7A7A\u65F6\u4F7F\u7528\u65E7\u5BC6\u7801"},"password")]:(0,r.jsx)(r.Fragment,{})}})]})}),u=S,t=e(43425),E=e(12010),M=e(78957),K=e(96074),L=e(83062);function b(){var d=(0,_.useRef)(),W=(0,_.useRef)();return(0,r.jsx)(E.Z,{rowKey:"id",columns:[{title:"\u540D\u79F0",ellipsis:!0,dataIndex:"title"},{title:"Url",dataIndex:"serverAddress"},{title:"\u7528\u6237",dataIndex:"username"},{title:"\u64CD\u4F5C",width:100,render:function(a,m,g,A,c){return(0,r.jsx)(M.Z,{split:(0,r.jsx)(K.Z,{type:"vertical"}),children:(0,r.jsx)(f.ZP,{type:"link",onClick:function(){if(console.log(m),m.id>0){var C;(C=W.current)===null||C===void 0||C.setEditId(m.id)}else{var j;(j=W.current)===null||j===void 0||j.editDockerIo(m)}},children:(0,r.jsx)(L.Z,{title:"\u7BA1\u7406",children:(0,r.jsx)(t.Z,{})})})})}}],request:function(){var T=p()(s()().mark(function a(m,g,A){var c;return s()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,(0,v.Ot)({title:m.title,serverAddress:m.serverAddress});case 2:return c=C.sent,C.abrupt("return",{data:c.data.list,success:!0,total:c.data.list.length});case 4:case"end":return C.stop()}},a)}));return function(a,m,g){return T.apply(this,arguments)}}(),toolBarRender:function(){return[(0,r.jsx)(u,{onFinish:function(){var m,g;!((m=d.current)===null||m===void 0)&&m.reloadAndRest&&((g=d.current)===null||g===void 0||g.reloadAndRest())},ref:W})]},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},actionRef:d,tableAlertOptionRender:function(a){var m=a.selectedRowKeys;return(0,r.jsx)(M.Z,{size:16,children:(0,r.jsx)(O.Z,{danger:!0,type:"primary",action:function(){return(0,v.ix)({id:m})},onSuccess:function(){var A,c;return!((A=d.current)===null||A===void 0)&&A.reloadAndRest&&((c=d.current)===null||c===void 0||c.reloadAndRest()),!0},onError:function(){var A,c;return!((A=d.current)===null||A===void 0)&&A.reset&&((c=d.current)===null||c===void 0||c.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"})})}})}},75870:function($,F,e){e.d(F,{Ot:function(){return B},ZH:function(){return v},ix:function(){return o},t1:function(){return I}});var R=e(15009),s=e.n(R),y=e(99289),p=e.n(y),O=e(54006);function B(l){return D.apply(this,arguments)}function D(){return D=p()(s()().mark(function l(f){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,O.request)("/api/common/registry/get-list",{method:"POST",data:f}));case 1:case"end":return r.stop()}},l)})),D.apply(this,arguments)}function v(l){return h.apply(this,arguments)}function h(){return h=p()(s()().mark(function l(f){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,O.request)("/api/common/registry/create",{method:"POST",data:f}));case 1:case"end":return r.stop()}},l)})),h.apply(this,arguments)}function o(l){return n.apply(this,arguments)}function n(){return n=p()(s()().mark(function l(f){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,O.request)("/api/common/registry/delete",{method:"POST",data:f}));case 1:case"end":return r.stop()}},l)})),n.apply(this,arguments)}function I(l){return P.apply(this,arguments)}function P(){return P=p()(s()().mark(function l(f){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,O.request)("/api/common/registry/get-detail",{method:"POST",data:f}));case 1:case"end":return r.stop()}},l)})),P.apply(this,arguments)}}}]);