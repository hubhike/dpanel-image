"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5738],{80821:function(le,G,n){n.d(G,{Z:function(){return z}});var k=n(5574),E=n.n(k),J=n(93246),d=n(54006),b=n(31418),P=n(86738),C=n(14726),K=n(83062),N=n(62435),M=n(86074);function z(h){var H=(0,N.useState)(!1),W=E()(H,2),U=W[0],S=W[1],x=b.Z.useApp(),D=(0,d.useIntl)(),R=function(){S(!0),h.action().then(function(Y){if(S(!1),typeof h.onSuccess=="function"&&h.onSuccess(Y),h.messageSuccess){var Q="";h.messageSuccess.indexOf(".")>-1?Q=D.formatMessage({id:h.messageSuccess}):Q=h.messageSuccess,h.asynced?(0,J.Rk)(x,Q):(0,J.$h)(x,Q)}}).catch(function(Y){S(!1),typeof h.onError=="function"&&h.onError(Y)})};return h.confirm?(0,M.jsx)(P.Z,{style:{width:500},title:"\u63D0\u793A",description:h.confirm,onConfirm:R,okText:"Yes",cancelText:"No",children:(0,M.jsx)(C.ZP,{disabled:h.disabled,icon:h.icon,loading:U,danger:h.danger,type:h.type,children:h.children})}):(0,M.jsx)(K.Z,{title:h.tips,children:(0,M.jsx)(C.ZP,{disabled:h.disabled,icon:h.icon,loading:U,onClick:R,danger:h.danger,type:h.type,children:h.children})})}},21615:function(le,G,n){n.r(G),n.d(G,{default:function(){return Ge}});var k=n(5574),E=n.n(k),J=n(15009),d=n.n(J),b=n(99289),P=n.n(b),C=n(54006);function K(r){return N.apply(this,arguments)}function N(){return N=P()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.request)("/api/app/explorer/get-path-list",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),N.apply(this,arguments)}function M(r){return z.apply(this,arguments)}function z(){return z=P()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.request)("/api/app/explorer/export",{data:i,method:"POST",responseType:"blob"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),z.apply(this,arguments)}function h(r){return H.apply(this,arguments)}function H(){return H=P()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.request)("/api/app/explorer/import",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),H.apply(this,arguments)}function W(r){return U.apply(this,arguments)}function U(){return U=P()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.request)("/api/app/explorer/delete",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),U.apply(this,arguments)}function S(r){return x.apply(this,arguments)}function x(){return x=P()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.request)("/api/app/explorer/unzip",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),x.apply(this,arguments)}function D(r){return R.apply(this,arguments)}function R(){return R=P()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.request)("/api/app/explorer/get-content",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),R.apply(this,arguments)}function f(r){return Y.apply(this,arguments)}function Y(){return Y=P()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.request)("/api/app/explorer/import-file-content",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),Y.apply(this,arguments)}function Q(r){return te.apply(this,arguments)}function te(){return te=P()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.request)("/api/app/explorer/chmod",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),te.apply(this,arguments)}var me=n(93613),he=n(29158),fe=n(2741),ve=n(90639),$=n(14726),F=n(62435),pe=(0,F.createContext)({}),V=pe,Fe=n(24969),ge=n(48689),se=n(78957),oe=n(80821),xe=n(88484),ce=n(37476),je=n(91604),Ee=n(97961),t=n(86074);function ye(){var r=(0,F.useRef)(),i=(0,F.useContext)(V),c=i.fileListRef,e=i.containerMd5,y=i.currentPath,v=(0,C.useModel)("@@initialState"),g=v.initialState,m=v.loading,j=v.error,l=v.refresh,a=v.setInitialState;return(0,t.jsx)(ce.Y,{formRef:r,trigger:(0,t.jsx)($.ZP,{icon:(0,t.jsx)(xe.Z,{}),children:"\u4E0A\u4F20"}),title:"\u4E0A\u4F20\u6587\u4EF6\u5230\u5BB9\u5668",onFinish:function(){var u=P()(d()().mark(function o(s){var p,w,B,O;return d()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return B=[],s.importFileList&&s.importFileList.map(function(I){B.push({name:I.name,path:I.response.data.path})}),h({fileList:B,md5:e,destPath:y}),(p=r.current)===null||p===void 0||p.resetFields(),c&&typeof((w=c.current)===null||w===void 0?void 0:w.reloadAndRest)=="function"&&((O=c.current)===null||O===void 0||O.reloadAndRest()),Z.abrupt("return",!0);case 6:case"end":return Z.stop()}},o)}));return function(o){return u.apply(this,arguments)}}(),children:(0,t.jsx)(je.Z,{name:"importFileList",fieldProps:{multiple:!0,name:"file",action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function(o){return new Promise(function(s){var p;(0,Ee._2)({path:(p=o.response.data.path)!==null&&p!==void 0?p:""}).then(function(w){s(!0)})})}}})})}var Pe=n(23430),Ce=n(93162);function we(r){var i=(0,F.useContext)(V),c=i.containerMd5;return(0,t.jsx)(oe.Z,{action:function(){return M({md5:c,fileList:r.selectFileList})},onSuccess:function(y){var v=new Blob([y],{type:"application/zip"});(0,Ce.saveAs)(v,"export.zip")},icon:(0,t.jsx)(Pe.Z,{}),children:"\u4E0B\u8F7D"})}var _=n(38345),A=n(63434),Re=n(24739),ne=n(5966);function Oe(r){var i=(0,F.useRef)(),c=(0,F.useContext)(V),e=c.currentPath,y=c.reloadFileList,v=c.containerMd5,g=function(l){var a=l.split(""),u=0,o=0,s=0;return a[1]=="r"&&(u+=4),a[2]=="w"&&(u+=2),a[3]=="x"&&(u+=1),a[4]=="r"&&(o+=4),a[5]=="w"&&(o+=2),a[6]=="x"&&(o+=1),a[7]=="r"&&(s+=4),a[8]=="w"&&(s+=2),a[9]=="x"&&(s+=1),"".concat(u).concat(o).concat(s)},m=function(l){var a;if((a=i.current)===null||a===void 0||a.setFieldValue("permission",l),l.length>=1){var u;(u=i.current)===null||u===void 0||u.setFieldsValue({ownerRead:l[0]&4,ownerWrite:l[0]&2,ownerExec:l[0]&1})}if(l.length>=2){var o;(o=i.current)===null||o===void 0||o.setFieldsValue({groupRead:l[1]&4,groupWrite:l[1]&2,groupExec:l[1]&1})}if(l.length>=3){var s;(s=i.current)===null||s===void 0||s.setFieldsValue({everyoneRead:l[2]&4,everyoneWrite:l[2]&2,everyoneExec:l[2]&1})}};return(0,t.jsxs)(ce.Y,{modalProps:{forceRender:!0},title:r.selectFileObject.length==1?"\u4FEE\u6539 ".concat(r.selectFileObject[0].name," \u6743\u9650"):"\u6279\u91CF\u6587\u4EF6\u4FEE\u6539\u6743\u9650",trigger:(0,t.jsx)($.ZP,{children:"\u6743\u9650"}),layout:"horizontal",onOpenChange:function(l){if(r.selectFileObject.length==0){var a;(a=i.current)===null||a===void 0||a.resetFields()}if(r.selectFileObject.length==1){var u;m(g(r.selectFileObject[0].mode)),(u=i.current)===null||u===void 0||u.setFieldValue("owner",r.selectFileObject[0].owner)}},formRef:i,onValuesChange:function(l,a){if(l.permission)m(l.permission);else{var u=["-",a.ownerRead?"r":"-",a.ownerWrite?"w":"-",a.ownerExec?"x":"-",a.groupRead?"r":"-",a.groupWrite?"w":"-",a.groupExec?"x":"-",a.everyoneRead?"r":"-",a.everyoneWrite?"w":"-",a.everyoneExec?"x":"-"];m(g(u.join("")))}},onFinish:function(){var j=P()(d()().mark(function l(a){var u,o,s,p;return d()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return s=[],r.selectFileObject.map(function(O){s.push(O.name)}),B.next=4,Q({md5:v,fileList:s,mod:parseInt((u=a.permission)!==null&&u!==void 0?u:"600"),hasChildren:(o=a.hasChildren)!==null&&o!==void 0?o:!0,owner:a.owner});case 4:return p=B.sent,y(),B.abrupt("return",!0);case 7:case"end":return B.stop()}},l)}));return function(l){return j.apply(this,arguments)}}(),children:[(0,t.jsxs)(_.Z,{direction:"row",gutter:[20,10],children:[(0,t.jsxs)(_.Z,{bordered:!0,title:"\u6240\u6709\u8005",headerBordered:!0,children:[(0,t.jsx)(A.Z,{label:"\u8BFB\u53D6",name:"ownerRead"}),(0,t.jsx)(A.Z,{label:"\u5199\u5165",name:"ownerWrite"}),(0,t.jsx)(A.Z,{label:"\u6267\u884C",name:"ownerExec"})]}),(0,t.jsxs)(_.Z,{bordered:!0,title:"\u7528\u6237\u7EC4",headerBordered:!0,children:[(0,t.jsx)(A.Z,{label:"\u8BFB\u53D6",name:"groupRead"}),(0,t.jsx)(A.Z,{label:"\u5199\u5165",name:"groupWrite"}),(0,t.jsx)(A.Z,{label:"\u6267\u884C",name:"groupExec"})]}),(0,t.jsxs)(_.Z,{bordered:!0,title:"\u516C\u5171",headerBordered:!0,children:[(0,t.jsx)(A.Z,{label:"\u8BFB\u53D6",name:"everyoneRead"}),(0,t.jsx)(A.Z,{label:"\u5199\u5165",name:"everyoneWrite"}),(0,t.jsx)(A.Z,{label:"\u6267\u884C",name:"everyoneExec"})]})]}),(0,t.jsx)(_.Z,{children:(0,t.jsxs)(Re.UW,{children:[(0,t.jsx)(ne.Z,{label:"\u6743\u9650",name:"permission",fieldProps:{maxLength:3}}),(0,t.jsx)(ne.Z,{label:"\u6240\u6709\u8005",name:"owner"}),(0,t.jsx)(A.Z,{label:"\u5E94\u7528\u5230\u5B50\u76EE\u5F55",name:"hasChildren",initialValue:!0})]})})]})}var de=n(31418),re=n(93246);function Be(r){var i=(0,F.useContext)(V),c=i.currentPath,e=i.reloadFileList,y=i.containerMd5,v=de.Z.useApp();return(0,t.jsx)($.ZP,{onClick:function(){if(r.selectFileObject.length>1)return(0,re.YZ)(v,"\u89E3\u538B\u64CD\u4F5C\u53EA\u652F\u6301\u5355\u6587\u4EF6\u64CD\u4F5C"),!1;var m=r.selectFileObject[0];if(m.name.lastIndexOf(".zip")!=m.name.length-4)return(0,re.YZ)(v,"\u89E3\u538B\u64CD\u4F5C\u53EA\u652F\u6301 zip \u6587\u4EF6"),!1;S({md5:y,file:m.name}).then(function(j){e()})},children:"\u89E3\u538B"})}function Ze(r){var i=(0,F.useContext)(V),c=i.fileListRef,e=i.containerMd5,y=i.currentPath,v=i.editFileRef;return(0,t.jsxs)(se.Z,{size:16,children:[(0,t.jsx)(we,{selectFileList:r.selectFileList}),(0,t.jsx)(ye,{}),(0,t.jsx)(Oe,{selectFileObject:r.selectFileObject}),(0,t.jsx)(Be,{selectFileObject:r.selectFileObject}),(0,t.jsx)($.ZP,{type:"primary",icon:(0,t.jsx)(Fe.Z,{}),onClick:function(){var m;(m=v.current)===null||m===void 0||m.newFile()},children:"\u65B0\u5EFA\u6587\u4EF6"}),(0,t.jsx)(oe.Z,{danger:!0,type:"default",icon:(0,t.jsx)(ge.Z,{}),action:function(){return W({md5:e,fileList:r.selectFileList})},onSuccess:function(){var m;if(c&&typeof((m=c.current)===null||m===void 0?void 0:m.reloadAndRest)=="function"){var j;(j=c.current)===null||j===void 0||j.reloadAndRest()}},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u5220\u9664"})]})}var q=n(83062),ee=n(66309);function De(r){return r.change==0?(0,t.jsx)(q.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u88AB\u4FEE\u6539",children:(0,t.jsx)(ee.Z,{color:"blue",children:"MODIFIED"})}):r.change==1?(0,t.jsx)(q.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u65B0\u589E\u7684\u6587\u4EF6",children:(0,t.jsx)(ee.Z,{color:"green",children:"ADD"})}):r.change==2?(0,t.jsx)(q.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u88AB\u5220\u9664\u6587\u4EF6",children:(0,t.jsx)(ee.Z,{color:"error",children:"DELETED"})}):r.change==100?(0,t.jsx)(q.Z,{title:"\u6302\u8F7D\u7684\u6301\u4E45\u5316\u76EE\u5F55",children:(0,t.jsx)(ee.Z,{color:"cyan",children:"VOLUME"})}):(0,t.jsx)(t.Fragment,{})}var Te=n(19632),ae=n.n(Te),Le=n(27254),Me=(0,F.forwardRef)(function(r,i){var c=(0,F.useContext)(V),e=c.showPath,y=(0,F.useState)([{title:"\u6839\u76EE\u5F55",path:"/"}]),v=E()(y,2),g=v[0],m=v[1];(0,F.useImperativeHandle)(i,function(){return{addHistory:function(a,u){m([].concat(ae()(g),[{title:a,path:u}]))},initHistory:function(a){m([{title:"\u6839\u76EE\u5F55",path:"/"}].concat(ae()(a)))}}});var j=function(a){e(g[a].title,g[a].path);var u=g.filter(function(o,s){return s<=a});m(ae()(u))};return(0,t.jsx)(se.Z.Compact,{children:g.map(function(l,a){return(0,t.jsx)($.ZP,{icon:(0,t.jsx)(Le.Z,{}),type:a==g.length-1?"primary":"dashed",onClick:function(){j(a)},children:l.title},a)})})}),Ae=Me,be=n(97269),Se=n(62370),Ie=n(90672),We=n(97462),Ue=n(45360),$e=n(85576),Ve=n(20713),Ke=(0,F.forwardRef)(function(r,i){var c,e=(0,F.useContext)(V),y=e.currentPath,v=e.reloadFileList,g=e.containerMd5,m=(0,F.useRef)(),j=(0,F.useState)(!1),l=E()(j,2),a=l[0],u=l[1],o=de.Z.useApp(),s=Ue.ZP.useMessage(),p=E()(s,2),w=p[0],B=p[1];return(0,F.useImperativeHandle)(i,function(){return{newFile:function(){var T;u(!0),(T=m.current)===null||T===void 0||T.resetFields()},editFile:function(T,Z,I){var X;(X=m.current)===null||X===void 0||X.resetFields(),w.open({type:"loading",content:"\u6B63\u5728\u83B7\u53D6\u6587\u4EF6\u5185\u5BB9",duration:0}),D({md5:g,file:Z}).then(function(L){var ue,ie;if(L.data.content==""&&I!="0"){(0,re.YZ)(o,"\u4E0D\u652F\u6301\u7F16\u8F91\u7684\u6587\u4EF6\u7C7B\u578B"),u(!1);return}(ue=m.current)===null||ue===void 0||ue.setFieldValue("newValue",L.data.content),(ie=m.current)===null||ie===void 0||ie.setFieldValue("newName",T),w.destroy(),u(!0)})}}}),(0,t.jsxs)(t.Fragment,{children:[B,(0,t.jsx)($e.Z,{width:"800px",title:(c=m.current)!==null&&c!==void 0&&c.getFieldValue("newName")?"\u7F16\u8F91\u6587\u4EF6":"\u65B0\u5EFA\u6587\u4EF6",open:a,onCancel:function(){return u(!1)},footer:!1,forceRender:!0,children:(0,t.jsxs)(be.A,{formRef:m,onFinish:function(){var O=P()(d()().mark(function T(Z){var I;return d()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return f({destPath:y,file:Z.newName.indexOf("/")!==0?"/"+Z.newName:Z.newName,content:Z.newValue,md5:g}),(I=m.current)===null||I===void 0||I.resetFields(),u(!1),v(),L.abrupt("return",!0);case 5:case"end":return L.stop()}},T)}));return function(T){return O.apply(this,arguments)}}(),children:[(0,t.jsx)(ne.Z,{label:"\u6587\u4EF6\u540D",tooltip:"\u7F16\u8F91\u6587\u4EF6\u65F6\u4FEE\u6539\u6587\u4EF6\u540D\u53EF\u5B9E\u73B0\u590D\u5236\u529F\u80FD",name:"newName",fieldProps:{addonBefore:y},placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D\uFF1B\u652F\u6301\u65B0\u5EFA\u76EE\u5F55\uFF0C\u9700\u8981\u6307\u5B9A\u5B8C\u6574\u8DEF\u5F84\uFF0C\u4F8B\u5982\uFF1A/test/test.txt"}),(0,t.jsxs)(Se.Z,{label:"\u5185\u5BB9",children:[(0,t.jsx)(Ie.Z,{hidden:!0,name:"newValue"}),(0,t.jsx)(We.Z,{name:["newValue"],children:function(T){var Z=T.newValue;return(0,t.jsx)(Ve.ZP,{theme:"dark",height:"500px",value:Z,onChange:function(X){var L;(L=m.current)===null||L===void 0||L.setFieldValue("newValue",X)}})}})]})]})})]})}),Ne=Ke;function ze(r){var i=(0,F.useRef)(),c=(0,F.useRef)(),e=(0,F.useRef)(),y=(0,F.useState)("/"),v=E()(y,2),g=v[0],m=v[1];(0,F.useEffect)(function(){if(r.initialValue){for(var l,a=r.initialValue.split("/"),u=[],o="",s=1;s<a.length;s++)o+="/"+a[s],u.push({title:a[s],path:o});j(a[a.length-1],r.initialValue),(l=i.current)===null||l===void 0||l.initHistory([].concat(u))}},[r.initialValue]);var j=function(a,u){var o,s;if((o=i.current)===null||o===void 0||o.addHistory(a,u),m(u),e&&typeof((s=e.current)===null||s===void 0?void 0:s.reloadAndRest)=="function"){var p;(p=e.current)===null||p===void 0||p.reloadAndRest()}};return(0,t.jsxs)(V.Provider,{value:{fileListRef:e,containerMd5:r.md5,currentPath:g,showPath:j,reloadFileList:function(){var a;if(e&&typeof((a=e.current)===null||a===void 0?void 0:a.reloadAndRest)=="function"){var u;(u=e.current)===null||u===void 0||u.reloadAndRest()}},editFileRef:c},children:[(0,t.jsx)(ve.Z,{rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},tableAlertOptionRender:function(a){var u=a.selectedRowKeys,o=a.selectedRows,s=[];return o.map(function(p){s.push(p.name)}),(0,t.jsx)(Ze,{selectFileList:s,selectFileObject:o})},headerTitle:(0,t.jsx)(Ae,{ref:i}),actionRef:e,search:!1,rowKey:"showName",pagination:!1,request:P()(d()().mark(function l(){return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",new Promise(function(o,s){r.md5&&K({md5:r.md5,path:g}).then(function(p){if(p.data.list){var w={data:p.data.list,success:!0,total:p.data.list.length};o(w)}else o({data:[],success:!0,total:0})})}));case 1:case"end":return u.stop()}},l)})),columns:[{title:"\u540D\u79F0",dataIndex:"showName",key:"name",render:function(w,u,o,s,p){var w;return u.isDir?w=(0,t.jsx)($.ZP,{onClick:function(){return j(u.showName,u.name)},type:"link",icon:(0,t.jsx)(me.Z,{}),children:u.showName}):u.linkName?w=(0,t.jsx)($.ZP,{type:"text",icon:(0,t.jsx)(he.Z,{}),children:"".concat(u.showName," -> ").concat(u.linkName)}):w=(0,t.jsx)($.ZP,{type:"text",icon:(0,t.jsx)(fe.Z,{}),onClick:function(){var O;(O=c.current)===null||O===void 0||O.editFile(u.showName,u.name,u.size)},children:u.showName}),w}},{title:"\u72B6\u6001",key:"status",width:110,render:function(a,u,o,s,p){return(0,t.jsx)(De,{change:u.change})}},{title:"\u6743\u9650",dataIndex:"mode",key:"mode"},{title:"\u7528\u6237",dataIndex:"owner"},{title:"\u7528\u6237\u7EC4",dataIndex:"group"},{title:"\u5927\u5C0F",dataIndex:"size",key:"size"},{title:"\u4FEE\u6539\u65F6\u95F4",dataIndex:"modTime",key:"modTime"}]}),(0,t.jsx)(Ne,{ref:c})]})}var He=ze;function Ye(){var r,i,c=(0,C.useParams)(),e=(0,C.useSearchParams)(),y=E()(e,2),v=y[0],g=y[1];return(0,t.jsx)("div",{children:(0,t.jsx)(He,{md5:(r=c.id)!==null&&r!==void 0?r:"",initialValue:(i=v.get("path"))!==null&&i!==void 0?i:""})})}var Ge=Ye},97961:function(le,G,n){n.d(G,{MF:function(){return U},_2:function(){return H},fN:function(){return C},hG:function(){return z},ii:function(){return P},vC:function(){return N}});var k=n(15009),E=n.n(k),J=n(99289),d=n.n(J),b=n(54006),P=[{name:"amd64",arch:"amd64"},{name:"arm64",arch:"arm64"},{name:"i386",arch:"386"},{name:"arm/v6",arch:"arm"},{name:"arm/v7",arch:"arm"},{name:"arm/v8",arch:"arm64"},{name:"ppc64le",arch:"ppc64le"},{name:"riscv64",arch:"riscv64"}];function C(x){return K.apply(this,arguments)}function K(){return K=d()(E()().mark(function x(D){return E()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,b.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:D}));case 1:case"end":return f.stop()}},x)})),K.apply(this,arguments)}function N(x){return M.apply(this,arguments)}function M(){return M=d()(E()().mark(function x(D){return E()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,b.request)("/api/app/image/import-by-container-tar",{method:"POST",data:D}));case 1:case"end":return f.stop()}},x)})),M.apply(this,arguments)}function z(x){return h.apply(this,arguments)}function h(){return h=d()(E()().mark(function x(D){return E()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,b.request)("/api/app/image/import-by-image-tar",{method:"POST",data:D}));case 1:case"end":return f.stop()}},x)})),h.apply(this,arguments)}function H(x){return W.apply(this,arguments)}function W(){return W=d()(E()().mark(function x(D){return E()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,b.request)("/api/common/attach/delete",{method:"POST",data:D});case 2:return f.abrupt("return",f.sent);case 3:case"end":return f.stop()}},x)})),W.apply(this,arguments)}function U(){return S.apply(this,arguments)}function S(){return S=d()(E()().mark(function x(){return E()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",(0,b.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return R.stop()}},x)})),S.apply(this,arguments)}}}]);
