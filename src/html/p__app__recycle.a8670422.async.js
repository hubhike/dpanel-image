"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1610],{2830:function(y,h,t){t.d(h,{Z:function(){return M}});var D=t(87462),s=t(62435),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"}}]},name:"tool",theme:"outlined"},u=p,l=t(84089),O=function(i,f){return s.createElement(l.Z,(0,D.Z)({},i,{ref:f,icon:u}))},c=s.forwardRef(O),M=c},80821:function(y,h,t){t.d(h,{Z:function(){return f}});var D=t(5574),s=t.n(D),p=t(93246),u=t(54006),l=t(31418),O=t(86738),c=t(14726),M=t(83062),v=t(62435),i=t(86074);function f(n){var g=(0,v.useState)(!1),T=s()(g,2),_=T[0],R=T[1],P=l.Z.useApp(),r=(0,u.useIntl)(),a=function(){R(!0),n.action().then(function(e){if(R(!1),typeof n.onSuccess=="function"&&n.onSuccess(e),n.messageSuccess){var m="";n.messageSuccess.indexOf(".")>-1?m=r.formatMessage({id:n.messageSuccess}):m=n.messageSuccess,n.asynced?(0,p.Rk)(P,m):(0,p.$h)(P,m)}}).catch(function(e){R(!1),typeof n.onError=="function"&&n.onError(e)})};return n.confirm?(0,i.jsx)(O.Z,{style:{width:500},title:"\u63D0\u793A",description:n.confirm,onConfirm:a,okText:"Yes",cancelText:"No",children:(0,i.jsx)(c.ZP,{disabled:n.disabled,icon:n.icon,loading:_,danger:n.danger,type:n.type,children:n.children})}):(0,i.jsx)(M.Z,{title:n.tips,children:(0,i.jsx)(c.ZP,{disabled:n.disabled,icon:n.icon,loading:_,onClick:a,danger:n.danger,type:n.type,children:n.children})})}},67108:function(y,h,t){t.r(h),t.d(h,{default:function(){return R}});var D=t(15009),s=t.n(D),p=t(99289),u=t.n(p),l=t(12010),O=t(62597),c=t(83062),M=t(78957),v=t(68508),i=t(54006),f=t(2830),n=t(62435),g=t(96974),T=t(80821),_=t(86074);function R(){var P=(0,g.UO)(),r=(0,n.useRef)();return(0,n.useEffect)(function(){var a;(a=r.current)===null||a===void 0||a.reload()},[P]),(0,_.jsx)(l.Z,{actionRef:r,columns:[{title:"\u540D\u79F0",ellipsis:!0,dataIndex:"siteTitle"},{title:"\u6807\u8BC6",ellipsis:!0,dataIndex:"siteName"},{title:"\u5220\u9664\u65E5\u671F",ellipsis:!0,dataIndex:"deletedAt",search:!1,width:180},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:100,render:function(o,e,m,E){return[(0,_.jsx)(i.Link,{to:"/app/create/image?id="+e.id,type:"link",children:(0,_.jsx)(c.Z,{title:"\u518D\u6B21\u6784\u5EFA",children:(0,_.jsx)(f.Z,{})})},"rebuild")]}}],rowKey:"id",request:function(){var a=u()(s()().mark(function o(e,m,E){var d,A,b;return s()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,(0,O.cl)({pageSize:(d=e.pageSize)!==null&&d!==void 0?d:10,page:(A=e.current)!==null&&A!==void 0?A:1,isDelete:!0,siteTitle:e.siteTitle,siteName:e.siteName});case 2:return b=j.sent,j.abrupt("return",{data:b.data.list,success:!0,total:b.data.total});case 4:case"end":return j.stop()}},o)}));return function(o,e,m){return a.apply(this,arguments)}}(),rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},tableAlertOptionRender:function(o){var e=o.selectedRowKeys;return(0,_.jsx)(M.Z,{size:16,children:(0,_.jsx)(T.Z,{danger:!0,type:"primary",action:function(){return(0,O.xb)({id:e})},onSuccess:function(){var E,d;return!((E=r.current)===null||E===void 0)&&E.reloadAndRest&&((d=r.current)===null||d===void 0||d.reloadAndRest()),!0},onError:function(){var E,d;return!((E=r.current)===null||E===void 0)&&E.reset&&((d=r.current)===null||d===void 0||d.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"})})},pagination:{pageSize:10},search:{collapsed:!1},tableExtraRender:function(){return(0,_.jsx)(v.Z,{mode:"horizontal",selectedKeys:["recycle"],items:[{label:(0,_.jsx)(i.Link,{to:"/app/list",replace:!0,children:"\u5BB9\u5668\u5217\u8868"}),key:"all"},{label:(0,_.jsx)(i.Link,{to:"/app/recycle",replace:!0,children:"\u56DE\u6536\u7AD9"}),key:"recycle"}]})}})}},62597:function(y,h,t){t.d(h,{$G:function(){return O},Ct:function(){return T},Tb:function(){return i},cl:function(){return M},iE:function(){return n},xb:function(){return R}});var D=t(15009),s=t.n(D),p=t(99289),u=t.n(p),l=t(54006);function O(r){return c.apply(this,arguments)}function c(){return c=u()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/app/site/create-by-image",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),c.apply(this,arguments)}function M(r){return v.apply(this,arguments)}function v(){return v=u()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/app/site/get-list",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),v.apply(this,arguments)}function i(r){return f.apply(this,arguments)}function f(){return f=u()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.request)("/api/app/log/run",{method:"POST",data:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),f.apply(this,arguments)}function n(r){return g.apply(this,arguments)}function g(){return g=u()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.request)("/api/app/site/get-detail",{data:a,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),g.apply(this,arguments)}function T(r){return _.apply(this,arguments)}function _(){return _=u()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/app/container/delete",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),_.apply(this,arguments)}function R(r){return P.apply(this,arguments)}function P(){return P=u()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/app/site/delete",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),P.apply(this,arguments)}}}]);