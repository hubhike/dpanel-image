"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7667],{30159:function(I,v,e){e.d(v,{Z:function(){return d}});var c=e(87462),u=e(62435),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm-88-532h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z"}}]},name:"pause-circle",theme:"outlined"},m=h,f=e(84089),g=function(t,a){return u.createElement(f.Z,(0,c.Z)({},t,{ref:a,icon:m}))},o=u.forwardRef(g),d=o},74842:function(I,v,e){e.d(v,{Z:function(){return d}});var c=e(87462),u=e(62435),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"}}]},name:"play-circle",theme:"outlined"},m=h,f=e(84089),g=function(t,a){return u.createElement(f.Z,(0,c.Z)({},t,{ref:a,icon:m}))},o=u.forwardRef(g),d=o},87784:function(I,v,e){e.d(v,{Z:function(){return d}});var c=e(87462),u=e(62435),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]},name:"stop",theme:"outlined"},m=h,f=e(84089),g=function(t,a){return u.createElement(f.Z,(0,c.Z)({},t,{ref:a,icon:m}))},o=u.forwardRef(g),d=o},12044:function(I,v,e){e.d(v,{j:function(){return h}});var c=e(34155),u=typeof c!="undefined"&&c.versions!=null&&c.versions.node!=null,h=function(){return typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.matchMedia!="undefined"&&!u}},80821:function(I,v,e){e.d(v,{Z:function(){return t}});var c=e(5574),u=e.n(c),h=e(93246),m=e(54006),f=e(31418),g=e(86738),o=e(14726),d=e(62435),C=e(86074);function t(a){var x=(0,d.useState)(!1),j=u()(x,2),y=j[0],E=j[1],i=f.Z.useApp(),p=(0,m.useIntl)(),P=function(){E(!0),a.action().then(function(B){if(E(!1),typeof a.onSuccess=="function"&&a.onSuccess(B),a.messageSuccess){var S="";a.messageSuccess.indexOf(".")>-1?S=p.formatMessage({id:a.messageSuccess}):S=a.messageSuccess,a.asynced?(0,h.Rk)(i,S):(0,h.$h)(i,S)}}).catch(function(B){E(!1),typeof a.onError=="function"&&a.onError(B)})};return a.confirm?(0,C.jsx)(g.Z,{style:{width:500},title:"\u63D0\u793A",description:a.confirm,onConfirm:P,okText:"Yes",cancelText:"No",children:(0,C.jsx)(o.ZP,{disabled:a.disabled,icon:a.icon,loading:y,danger:a.danger,type:a.type,children:a.children})}):(0,C.jsx)(o.ZP,{disabled:a.disabled,icon:a.icon,loading:y,onClick:P,danger:a.danger,type:a.type,children:a.children})}},85221:function(I,v,e){e.r(v),e.d(v,{default:function(){return V}});var c=e(15009),u=e.n(c),h=e(99289),m=e.n(h),f=e(5574),g=e.n(f),o=e(80821),d=e(62435),C=e(12320),t=e(86074),a=new C.Terminal({fontFamily:'Menlo, Monaco, "Courier New", monospace',fontWeight:400,fontSize:16,cursorStyle:"block",cursorBlink:!0,theme:{foreground:"#dddddd",cursor:"gray"}}),x=(0,d.forwardRef)(function(M,T){return(0,d.useEffect)(function(){a.open(document.getElementById("terminal-container"))},[]),(0,d.useImperativeHandle)(T,function(){return{write:function(R){a.write(R)},clear:function(){a.clear()}}}),(0,t.jsx)("div",{id:"terminal-container",style:{width:"100%",height:"200px"}})}),j=x,y=e(24910),E=e(43425),i=e(74842),p=e(87784),P=e(33160),r=e(30159),B=e(6110),S=e(38345),$=e(97269),K=e(62370),F=e(54006),L=e(78957),z=e(96074),G=e(75891),N=e(84567);function V(){var M=(0,F.useParams)(),T=(0,d.useRef)(),_=(0,d.useState)(),R=g()(_,2),s=R[0],Y=R[1],b=(0,d.useState)({deleteImage:!1}),U=g()(b,2),H=U[0],w=U[1],Z=(0,d.useRef)(),W=(0,F.useModel)("subscriber");return W.addDataHandler("composeUp",function(){var l=W.getDataByType("composeUp"),n=l.pop();if(n){var O;(O=Z.current)===null||O===void 0||O.write(n.data)}}),(0,d.useEffect)(function(){var l;(0,y.YZ)({id:parseInt((l=M.id)!==null&&l!==void 0?l:"")}).then(function(n){Y(n.data)})},[]),(0,t.jsx)(B._z,{header:{extra:[]},children:(0,t.jsxs)(S.Z,{ghost:!0,direction:"column",gutter:[10,10],children:[(0,t.jsx)(S.Z,{title:(0,t.jsx)(E.Z,{}),subTitle:"\u64CD\u4F5C - "+(s==null?void 0:s.title),headerBordered:!0,children:(0,t.jsxs)(L.Z,{children:[(0,t.jsx)(o.Z,{icon:(0,t.jsx)(i.Z,{}),action:function(){var n;return statusOperate({md5:(n=s==null?void 0:s.Id)!==null&&n!==void 0?n:"",operate:"start"})},messageSuccess:"\u542F\u52A8\u6210\u529F",onSuccess:function(){return setReload(reload+1)},children:"\u542F\u52A8"}),(0,t.jsx)(o.Z,{action:function(){var n;return statusOperate({md5:(n=s==null?void 0:s.Id)!==null&&n!==void 0?n:"",operate:"stop"})},messageSuccess:"\u505C\u6B62\u6210\u529F",icon:(0,t.jsx)(p.Z,{}),onSuccess:function(){return setReload(reload+1)},children:"\u505C\u6B62"}),(0,t.jsx)(o.Z,{action:function(){var n;return statusOperate({md5:(n=s==null?void 0:s.Id)!==null&&n!==void 0?n:"",operate:"restart"})},messageSuccess:"\u91CD\u542F\u6210\u529F",onSuccess:function(){return setReload(reload+1)},icon:(0,t.jsx)(P.Z,{}),children:"\u91CD\u542F"}),(0,t.jsx)(o.Z,{action:function(){var n;return statusOperate({md5:(n=s==null?void 0:s.Id)!==null&&n!==void 0?n:"",operate:"pause"})},messageSuccess:"\u6682\u505C\u6210\u529F",onSuccess:function(){return setReload(reload+1)},icon:(0,t.jsx)(r.Z,{}),children:"\u6682\u505C"}),(0,t.jsx)(o.Z,{action:function(){var n;return statusOperate({md5:(n=s==null?void 0:s.Id)!==null&&n!==void 0?n:"",operate:"unpause"})},messageSuccess:"\u542F\u52A8\u6210\u529F",onSuccess:function(){return setReload(reload+1)},icon:(0,t.jsx)(i.Z,{}),children:"\u6062\u590D"}),(0,t.jsx)(z.Z,{type:"vertical"}),(0,t.jsx)(o.Z,{type:"primary",action:function(){var n,O;return(n=Z.current)===null||n===void 0||n.clear(),(0,y.Am)({id:(O=s==null?void 0:s.id)!==null&&O!==void 0?O:0})},messageSuccess:"\u90E8\u7F72\u6210\u529F\uFF0C\u8BF7\u5230\u5BB9\u5668\u7BA1\u7406\u4E2D\u67E5\u770B",children:"\u90E8\u7F72\u5BB9\u5668"}),(0,t.jsx)(o.Z,{type:"primary",action:function(){var n,O;return(n=Z.current)===null||n===void 0||n.clear(),(0,y.cO)({id:(O=s==null?void 0:s.id)!==null&&O!==void 0?O:0,deleteImage:H.deleteImage})},danger:!0,confirm:(0,t.jsxs)(L.Z,{style:{width:280},direction:"vertical",children:[(0,t.jsx)(G.Z.Text,{children:"\u5220\u9664\u5BB9\u5668\u540E\u65E0\u6CD5\u6062\u590D,\u786E\u8BA4\u5417\uFF1F"}),(0,t.jsx)(N.Z,{name:"deleteImage",onChange:function(n){return w({deleteImage:n.target.checked})},children:"\u5220\u9664\u955C\u50CF\uFF1F"})]}),children:"\u9500\u6BC1\u5BB9\u5668"})]})}),(0,t.jsx)(S.Z,{title:"\u90E8\u7F72\u65E5\u5FD7",children:(0,t.jsx)($.A,{formRef:T,onFinish:function(){var l=m()(u()().mark(function n(O){var A,J;return u()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,(0,y.Am)({id:parseInt((A=M.id)!==null&&A!==void 0?A:"")});case 2:return J=D.sent,D.abrupt("return",!1);case 4:case"end":return D.stop()}},n)}));return function(n){return l.apply(this,arguments)}}(),submitter:!1,children:(0,t.jsx)(K.Z,{name:"runLog",children:(0,t.jsx)(j,{ref:Z})})})})]})})}},24910:function(I,v,e){e.d(v,{Am:function(){return t},YZ:function(){return y},cO:function(){return x},im:function(){return g},pm:function(){return d}});var c=e(15009),u=e.n(c),h=e(99289),m=e.n(h),f=e(54006);function g(i){return o.apply(this,arguments)}function o(){return o=m()(u()().mark(function i(p){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,f.request)("/api/app/compose/create",{method:"POST",data:p}));case 1:case"end":return r.stop()}},i)})),o.apply(this,arguments)}function d(i){return C.apply(this,arguments)}function C(){return C=m()(u()().mark(function i(p){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,f.request)("/api/app/compose/get-list",{method:"POST",data:p}));case 1:case"end":return r.stop()}},i)})),C.apply(this,arguments)}function t(i){return a.apply(this,arguments)}function a(){return a=m()(u()().mark(function i(p){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,f.request)("/api/app/compose/deploy",{method:"POST",data:p}));case 1:case"end":return r.stop()}},i)})),a.apply(this,arguments)}function x(i){return j.apply(this,arguments)}function j(){return j=m()(u()().mark(function i(p){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,f.request)("/api/app/compose/uninstall",{method:"POST",data:p}));case 1:case"end":return r.stop()}},i)})),j.apply(this,arguments)}function y(i){return E.apply(this,arguments)}function E(){return E=m()(u()().mark(function i(p){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,f.request)("/api/app/compose/get-detail",{method:"POST",data:p}));case 1:case"end":return r.stop()}},i)})),E.apply(this,arguments)}}}]);