"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3355],{28307:function(U,C,r){var b=r(5574),a=r.n(b),O=r(38345),t=r(97269),n=r(5966),h=r(62370),p=r(14726),T=r(85265),E=r(78957),D=r(38703),g=r(62435),_=r(80821),v=r(3393),j=r(54006),i=r(86074),o=(0,g.forwardRef)(function(c,M){var u=(0,g.useState)(!1),I=a()(u,2),B=I[0],P=I[1],R=(0,g.useState)(),y=a()(R,2),F=y[0],s=y[1],d=(0,j.useModel)("subscriber"),l=(0,g.useRef)();return d.addDataHandler("imageDownload",function(){var e=d.getDataByType("imageDownload"),m=e.pop();m&&s(m.data)}),(0,g.useImperativeHandle)(M,function(){return{upgradeImage:function(m){var f;return P(!0),(f=l.current)===null||f===void 0||f.setFieldValue("imageUrl",m),(0,v.Gb)({tag:m,type:"pull"})},setImageName:function(m){var f;P(!0),(f=l.current)===null||f===void 0||f.setFieldValue("imageUrl",m)}}}),[(0,i.jsx)(p.ZP,{onClick:function(){var m;P(!0),(m=l.current)===null||m===void 0||m.resetFields(),s({start:{downloading:0,extracting:0}})},children:"\u62C9\u53D6\u65B0\u955C\u50CF"},"remoteBtn"),(0,i.jsxs)(T.Z,{forceRender:!0,open:B,title:"\u4E0B\u8F7D\u8FDC\u7A0B\u955C\u50CF",width:800,onClose:function(){return P(!1)},footer:!1,children:[(0,i.jsx)(O.Z,{children:(0,i.jsxs)(E.Z,{direction:"vertical",size:"middle",children:[(0,i.jsxs)("div",{children:["1\u3001\u955C\u50CF\u540D\u79F0\u4E2D\u4E0D\u5305\u542B\u4ED3\u5E93\u5730\u5740\u65F6\uFF0C \u9ED8\u8BA4\u4ECE ",(0,i.jsx)("a",{href:"https://hub.docker.com/",target:"_blank",children:"docker hub"})," \u4E2D\u4E0B\u8F7D\uFF0C \u4F60\u53EF\u4EE5\u5728\u4E0A\u9762",(0,i.jsx)("a",{href:"https://hub.docker.com/search?q=",target:"_blank",children:"\u3010\u67E5\u627E\u3011"}),"\u9700\u8981\u7684\u955C\u50CF"]}),(0,i.jsxs)("div",{children:["2\u3001\u955C\u50CF\u4E2D\u5305\u542B\u4ED3\u5E93\u5730\u5740\u65F6\uFF0C\u8BF7\u786E",(0,i.jsx)("a",{href:"/image/registry",target:"_blank",children:"\u3010\u6DFB\u52A0\u3011"}),"\u8FC7\u8BE5\u4ED3\u5E93\uFF0C\u5E76\u6709 Pull \u6743\u9650"]}),(0,i.jsx)("div",{children:"3\u3001\u65E0\u7528\u7684\u955C\u50CF\u53CA\u7F13\u5B58\u6587\u4EF6\u53EF\u4EE5\u5728\u955C\u50CF\u7BA1\u7406\u4E2D\u8FDB\u884C\u5220\u9664\u548C\u6E05\u7406"})]})}),(0,i.jsx)(O.Z,{title:"\u4E0B\u8F7D\u955C\u50CF",headerBordered:!0,children:(0,i.jsxs)(t.A,{submitter:!1,formRef:l,children:[(0,i.jsxs)(E.Z.Compact,{children:[(0,i.jsx)(n.Z,{width:400,name:"imageUrl",placeholder:"\u8BF7\u8F93\u5165\u955C\u50CF\u5730\u5740"}),(0,i.jsx)(_.Z,{action:function(){var m,f,A=(m=(f=l.current)===null||f===void 0?void 0:f.getFieldValue("imageUrl"))!==null&&m!==void 0?m:"";return(0,v.Gb)({tag:A,type:"pull"})},onSuccess:function(){var m,f;s({finish:{downloading:100,extracting:100}}),P(!1);var A=(m=(f=l.current)===null||f===void 0?void 0:f.getFieldValue("imageUrl"))!==null&&m!==void 0?m:"";c.onFinish&&c.onFinish(A)},messageSuccess:"\u4E0B\u8F7D\u5B8C\u6210",children:"\u4E0B\u8F7D\u955C\u50CF"})]}),(0,i.jsx)(h.Z,{label:"\u4E0B\u8F7D\u8FDB\u5EA6",children:F&&Object.keys(F).map(function(e){return(0,i.jsx)(D.Z,{percent:F[e].downloading,success:{percent:F[e].extracting}},e)})})]})})]},"remoteDrawer")]});C.Z=o},80821:function(U,C,r){r.d(C,{Z:function(){return g}});var b=r(5574),a=r.n(b),O=r(93246),t=r(54006),n=r(31418),h=r(86738),p=r(14726),T=r(83062),E=r(62435),D=r(86074);function g(_){var v=(0,E.useState)(!1),j=a()(v,2),i=j[0],o=j[1],c=n.Z.useApp(),M=(0,t.useIntl)(),u=function(){o(!0),_.action().then(function(B){if(o(!1),typeof _.onSuccess=="function"&&_.onSuccess(B),_.messageSuccess){var P="";_.messageSuccess.indexOf(".")>-1?P=M.formatMessage({id:_.messageSuccess}):P=_.messageSuccess,_.asynced?(0,O.Rk)(c,P):(0,O.$h)(c,P)}}).catch(function(B){o(!1),typeof _.onError=="function"&&_.onError(B)})};return _.confirm?(0,D.jsx)(h.Z,{style:{width:500},title:"\u63D0\u793A",description:_.confirm,onConfirm:u,okText:"Yes",cancelText:"No",children:(0,D.jsx)(p.ZP,{disabled:_.disabled,icon:_.icon,loading:i,danger:_.danger,type:_.type,children:_.children})}):(0,D.jsx)(T.Z,{title:_.tips,children:(0,D.jsx)(p.ZP,{disabled:_.disabled,icon:_.icon,loading:i,onClick:u,danger:_.danger,type:_.type,children:_.children})})}},3393:function(U,C,r){r.d(C,{Gb:function(){return T},Pn:function(){return _},Rb:function(){return j},YU:function(){return h},_U:function(){return D}});var b=r(15009),a=r.n(b),O=r(99289),t=r.n(O),n=r(54006);function h(o){return p.apply(this,arguments)}function p(){return p=t()(a()().mark(function o(c){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,n.request)("/api/app/image/get-detail",{method:"POST",data:c}));case 1:case"end":return u.stop()}},o)})),p.apply(this,arguments)}function T(o){return E.apply(this,arguments)}function E(){return E=t()(a()().mark(function o(c){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,n.request)("/api/app/image/tag-remote",{method:"POST",data:c}));case 1:case"end":return u.stop()}},o)})),E.apply(this,arguments)}function D(o){return g.apply(this,arguments)}function g(){return g=t()(a()().mark(function o(c){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,n.request)("/api/app/image/tag-add",{method:"POST",data:c}));case 1:case"end":return u.stop()}},o)})),g.apply(this,arguments)}function _(o){return v.apply(this,arguments)}function v(){return v=t()(a()().mark(function o(c){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,n.request)("/api/app/image/tag-delete",{method:"POST",data:c}));case 1:case"end":return u.stop()}},o)})),v.apply(this,arguments)}function j(o){return i.apply(this,arguments)}function i(){return i=t()(a()().mark(function o(c){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,n.request)("/api/app/image/export",{method:"POST",data:c,responseType:"blob"}));case 1:case"end":return u.stop()}},o)})),i.apply(this,arguments)}},18148:function(U,C,r){r.d(C,{$q:function(){return j},Fj:function(){return P},KG:function(){return h},KX:function(){return y},T8:function(){return _},Xn:function(){return D},ao:function(){return o},c5:function(){return I},c7:function(){return M}});var b=r(15009),a=r.n(b),O=r(99289),t=r.n(O),n=r(54006);function h(s){return p.apply(this,arguments)}function p(){return p=t()(a()().mark(function s(d){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,n.request)("/api/app/image/get-list",{method:"POST",data:d}));case 1:case"end":return e.stop()}},s)})),p.apply(this,arguments)}function T(s){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime().mark(function s(d){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,request("/api/app/log/image-build",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},s)})),E.apply(this,arguments)}function D(s){return g.apply(this,arguments)}function g(){return g=t()(a()().mark(function s(d){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,n.request)("/api/app/image/get-list-build",{method:"POST",data:d}));case 1:case"end":return e.stop()}},s)})),g.apply(this,arguments)}function _(s){return v.apply(this,arguments)}function v(){return v=t()(a()().mark(function s(d){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.request)("/api/app/image/get-build-task",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},s)})),v.apply(this,arguments)}function j(s){return i.apply(this,arguments)}function i(){return i=t()(a()().mark(function s(d){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.request)("/api/app/image/delete-build-task",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},s)})),i.apply(this,arguments)}function o(s){return c.apply(this,arguments)}function c(){return c=t()(a()().mark(function s(d){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.request)("/api/app/image/image-delete",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},s)})),c.apply(this,arguments)}function M(){return u.apply(this,arguments)}function u(){return u=t()(a()().mark(function s(){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,n.request)("/api/app/image/image-prune",{method:"POST"});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},s)})),u.apply(this,arguments)}function I(){return B.apply(this,arguments)}function B(){return B=t()(a()().mark(function s(){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,n.request)("/api/app/image/build-prune",{method:"POST"});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},s)})),B.apply(this,arguments)}function P(s){return R.apply(this,arguments)}function R(){return R=t()(a()().mark(function s(d){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.request)("/api/app/image/update-title",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},s)})),R.apply(this,arguments)}function y(s){return F.apply(this,arguments)}function F(){return F=t()(a()().mark(function s(d){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,n.request)("/api/app/image/tag-sync",{method:"POST",data:d}));case 1:case"end":return e.stop()}},s)})),F.apply(this,arguments)}},5251:function(U,C,r){r.d(C,{FI:function(){return a},ZM:function(){return O}});function b(t){return t.trim()}function a(t){var n="";t<.1*1024?n=t.toFixed(2)+"B":t<.1*1024*1024?n=(t/1024).toFixed(2)+"KB":t<1*1024*1024*1024?n=(t/(1024*1024)).toFixed(2)+"MB":n=(t/(1024*1024*1024)).toFixed(2)+"GB";var h=n+"",p=h.indexOf("."),T=h.substr(p+1,2);return T=="00"?h.substring(0,p)+h.substr(p+3,2):n}function O(t){if(t){var n=new Date(t),h=n.getFullYear()+"-",p=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",T=(n.getDate()<10?"0"+n.getDate():n.getDate())+" ",E=(n.getHours()<10?"0"+n.getHours():n.getHours())+":",D=(n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes())+":",g=n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds();return h+p+T+E+D+g}}}}]);