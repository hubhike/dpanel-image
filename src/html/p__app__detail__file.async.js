"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5738],{80821:function(te,I,a){a.d(I,{Z:function(){return K}});var U=a(5574),R=a.n(U),W=a(93246),d=a(54006),S=a(31418),w=a(86738),y=a(14726),V=a(62435),O=a(86074);function K(f){var Z=(0,V.useState)(!1),B=R()(Z,2),L=B[0],j=B[1],H=S.Z.useApp(),N=(0,d.useIntl)(),Y=function(){j(!0),f.action().then(function($){if(j(!1),typeof f.onSuccess=="function"&&f.onSuccess($),f.messageSuccess){var A="";f.messageSuccess.indexOf(".")>-1?A=N.formatMessage({id:f.messageSuccess}):A=f.messageSuccess,f.asynced?(0,W.Rk)(H,A):(0,W.$h)(H,A)}}).catch(function($){j(!1),typeof f.onError=="function"&&f.onError($)})};return f.confirm?(0,O.jsx)(w.Z,{style:{width:500},title:"\u63D0\u793A",description:f.confirm,onConfirm:Y,okText:"Yes",cancelText:"No",children:(0,O.jsx)(y.ZP,{disabled:f.disabled,icon:f.icon,loading:L,danger:f.danger,type:f.type,children:f.children})}):(0,O.jsx)(y.ZP,{disabled:f.disabled,icon:f.icon,loading:L,onClick:Y,danger:f.danger,type:f.type,children:f.children})}},21615:function(te,I,a){a.r(I),a.d(I,{default:function(){return Ne}});var U=a(5574),R=a.n(U),W=a(15009),d=a.n(W),S=a(99289),w=a.n(S),y=a(54006);function V(r){return O.apply(this,arguments)}function O(){return O=w()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.request)("/api/app/explorer/get-path-list",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),O.apply(this,arguments)}function K(r){return f.apply(this,arguments)}function f(){return f=w()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.request)("/api/app/explorer/export",{data:i,method:"POST",responseType:"blob"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),f.apply(this,arguments)}function Z(r){return B.apply(this,arguments)}function B(){return B=w()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.request)("/api/app/explorer/import",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),B.apply(this,arguments)}function L(r){return j.apply(this,arguments)}function j(){return j=w()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.request)("/api/app/explorer/delete",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),j.apply(this,arguments)}function H(r){return N.apply(this,arguments)}function N(){return N=w()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.request)("/api/app/explorer/unzip",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),N.apply(this,arguments)}function Y(r){return G.apply(this,arguments)}function G(){return G=w()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.request)("/api/app/explorer/get-content",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),G.apply(this,arguments)}function $(r){return A.apply(this,arguments)}function A(){return A=w()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.request)("/api/app/explorer/import-file-content",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),A.apply(this,arguments)}function le(r){return k.apply(this,arguments)}function k(){return k=w()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.request)("/api/app/explorer/chmod",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),k.apply(this,arguments)}var se=a(93613),oe=a(29158),ce=a(2741),de=a(12010),T=a(14726),F=a(62435),fe=(0,F.createContext)({}),M=fe,he=a(24969),me=a(48689),ne=a(78957),re=a(80821),ve=a(88484),ae=a(37476),pe=a(91604),Fe=a(97961),t=a(86074);function xe(){var r=(0,F.useRef)(),i=(0,F.useContext)(M),c=i.fileListRef,e=i.containerMd5,C=i.currentPath,v=(0,y.useModel)("@@initialState"),m=v.initialState,p=v.loading,g=v.error,s=v.refresh,n=v.setInitialState;return(0,t.jsx)(ae.Y,{formRef:r,trigger:(0,t.jsx)(T.ZP,{icon:(0,t.jsx)(ve.Z,{}),children:"\u4E0A\u4F20"}),title:"\u4E0A\u4F20\u6587\u4EF6\u5230\u5BB9\u5668",onFinish:function(){var u=w()(d()().mark(function o(l){var h,E,P,x;return d()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return P=[],l.importFileList&&l.importFileList.map(function(ie){P.push({name:ie.name,path:ie.response.data.path})}),Z({fileList:P,md5:e,destPath:C}),(h=r.current)===null||h===void 0||h.resetFields(),c&&typeof((E=c.current)===null||E===void 0?void 0:E.reloadAndRest)=="function"&&((x=c.current)===null||x===void 0||x.reloadAndRest()),b.abrupt("return",!0);case 6:case"end":return b.stop()}},o)}));return function(o){return u.apply(this,arguments)}}(),children:(0,t.jsx)(pe.Z,{name:"importFileList",fieldProps:{multiple:!0,name:"file",action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function(o){return new Promise(function(l){(0,Fe._2)({path:o.name}).then(function(h){l(!0)})})}}})})}var ge=a(23430),je=a(93162);function Ee(r){var i=(0,F.useContext)(M),c=i.containerMd5;return(0,t.jsx)(re.Z,{action:function(){return K({md5:c,fileList:r.selectFileList})},onSuccess:function(C){var v=new Blob([C],{type:"application/zip"});(0,je.saveAs)(v,"export.zip")},icon:(0,t.jsx)(ge.Z,{}),children:"\u4E0B\u8F7D"})}var z=a(38345),D=a(63434),Pe=a(24739),_=a(5966);function ye(r){var i=(0,F.useRef)(),c=(0,F.useContext)(M),e=c.currentPath,C=c.reloadFileList,v=c.containerMd5,m=function(s){var n=s.split(""),u=0,o=0,l=0;return n[1]=="r"&&(u+=4),n[2]=="w"&&(u+=2),n[3]=="x"&&(u+=1),n[4]=="r"&&(o+=4),n[5]=="w"&&(o+=2),n[6]=="x"&&(o+=1),n[7]=="r"&&(l+=4),n[8]=="w"&&(l+=2),n[9]=="x"&&(l+=1),"".concat(u).concat(o).concat(l)},p=function(s){var n;if((n=i.current)===null||n===void 0||n.setFieldValue("permission",s),s.length>=1){var u;(u=i.current)===null||u===void 0||u.setFieldsValue({ownerRead:s[0]&4,ownerWrite:s[0]&2,ownerExec:s[0]&1})}if(s.length>=2){var o;(o=i.current)===null||o===void 0||o.setFieldsValue({groupRead:s[1]&4,groupWrite:s[1]&2,groupExec:s[1]&1})}if(s.length>=3){var l;(l=i.current)===null||l===void 0||l.setFieldsValue({everyoneRead:s[2]&4,everyoneWrite:s[2]&2,everyoneExec:s[2]&1})}};return(0,t.jsxs)(ae.Y,{modalProps:{forceRender:!0},title:r.selectFileObject.length==1?"\u4FEE\u6539 ".concat(r.selectFileObject[0].name," \u6743\u9650"):"\u6279\u91CF\u6587\u4EF6\u4FEE\u6539\u6743\u9650",trigger:(0,t.jsx)(T.ZP,{children:"\u6743\u9650"}),layout:"horizontal",onOpenChange:function(s){if(r.selectFileObject.length==0){var n;(n=i.current)===null||n===void 0||n.resetFields()}if(r.selectFileObject.length==1){var u;p(m(r.selectFileObject[0].mode)),(u=i.current)===null||u===void 0||u.setFieldValue("owner",r.selectFileObject[0].owner)}},formRef:i,onValuesChange:function(s,n){if(s.permission)p(s.permission);else{var u=["-",n.ownerRead?"r":"-",n.ownerWrite?"w":"-",n.ownerExec?"x":"-",n.groupRead?"r":"-",n.groupWrite?"w":"-",n.groupExec?"x":"-",n.everyoneRead?"r":"-",n.everyoneWrite?"w":"-",n.everyoneExec?"x":"-"];p(m(u.join("")))}},onFinish:function(){var g=w()(d()().mark(function s(n){var u,o,l,h;return d()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return l=[],r.selectFileObject.map(function(x){l.push(x.name)}),P.next=4,le({md5:v,fileList:l,mod:parseInt((u=n.permission)!==null&&u!==void 0?u:"600"),hasChildren:(o=n.hasChildren)!==null&&o!==void 0?o:!0,owner:n.owner});case 4:return h=P.sent,C(),P.abrupt("return",!0);case 7:case"end":return P.stop()}},s)}));return function(s){return g.apply(this,arguments)}}(),children:[(0,t.jsxs)(z.Z,{direction:"row",gutter:[20,10],children:[(0,t.jsxs)(z.Z,{bordered:!0,title:"\u6240\u6709\u8005",headerBordered:!0,children:[(0,t.jsx)(D.Z,{label:"\u8BFB\u53D6",name:"ownerRead"}),(0,t.jsx)(D.Z,{label:"\u5199\u5165",name:"ownerWrite"}),(0,t.jsx)(D.Z,{label:"\u6267\u884C",name:"ownerExec"})]}),(0,t.jsxs)(z.Z,{bordered:!0,title:"\u7528\u6237\u7EC4",headerBordered:!0,children:[(0,t.jsx)(D.Z,{label:"\u8BFB\u53D6",name:"groupRead"}),(0,t.jsx)(D.Z,{label:"\u5199\u5165",name:"groupWrite"}),(0,t.jsx)(D.Z,{label:"\u6267\u884C",name:"groupExec"})]}),(0,t.jsxs)(z.Z,{bordered:!0,title:"\u516C\u5171",headerBordered:!0,children:[(0,t.jsx)(D.Z,{label:"\u8BFB\u53D6",name:"everyoneRead"}),(0,t.jsx)(D.Z,{label:"\u5199\u5165",name:"everyoneWrite"}),(0,t.jsx)(D.Z,{label:"\u6267\u884C",name:"everyoneExec"})]})]}),(0,t.jsx)(z.Z,{children:(0,t.jsxs)(Pe.UW,{children:[(0,t.jsx)(_.Z,{label:"\u6743\u9650",name:"permission",fieldProps:{maxLength:3}}),(0,t.jsx)(_.Z,{label:"\u6240\u6709\u8005",name:"owner"}),(0,t.jsx)(D.Z,{label:"\u5E94\u7528\u5230\u5B50\u76EE\u5F55",name:"hasChildren",initialValue:!0})]})})]})}var ue=a(31418),q=a(93246);function Ce(r){var i=(0,F.useContext)(M),c=i.currentPath,e=i.reloadFileList,C=i.containerMd5,v=ue.Z.useApp();return(0,t.jsx)(T.ZP,{onClick:function(){if(r.selectFileObject.length>1)return(0,q.YZ)(v,"\u89E3\u538B\u64CD\u4F5C\u53EA\u652F\u6301\u5355\u6587\u4EF6\u64CD\u4F5C"),!1;var p=r.selectFileObject[0];if(p.name.lastIndexOf(".zip")!=p.name.length-4)return(0,q.YZ)(v,"\u89E3\u538B\u64CD\u4F5C\u53EA\u652F\u6301 zip \u6587\u4EF6"),!1;H({md5:C,file:p.name}).then(function(g){e()})},children:"\u89E3\u538B"})}function we(r){var i=(0,F.useContext)(M),c=i.fileListRef,e=i.containerMd5,C=i.currentPath,v=i.editFileRef;return(0,t.jsxs)(ne.Z,{size:16,children:[(0,t.jsx)(Ee,{selectFileList:r.selectFileList}),(0,t.jsx)(xe,{}),(0,t.jsx)(ye,{selectFileObject:r.selectFileObject}),(0,t.jsx)(Ce,{selectFileObject:r.selectFileObject}),(0,t.jsx)(T.ZP,{type:"primary",icon:(0,t.jsx)(he.Z,{}),onClick:function(){var p;(p=v.current)===null||p===void 0||p.newFile()},children:"\u65B0\u5EFA\u6587\u4EF6"}),(0,t.jsx)(re.Z,{danger:!0,type:"default",icon:(0,t.jsx)(me.Z,{}),action:function(){return L({md5:e,fileList:r.selectFileList})},onSuccess:function(){var p;if(c&&typeof((p=c.current)===null||p===void 0?void 0:p.reloadAndRest)=="function"){var g;(g=c.current)===null||g===void 0||g.reloadAndRest()}},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u5220\u9664"})]})}var J=a(83062),Q=a(66309);function Re(r){return r.change==0?(0,t.jsx)(J.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u88AB\u4FEE\u6539",children:(0,t.jsx)(Q.Z,{color:"blue",children:"MODIFIED"})}):r.change==1?(0,t.jsx)(J.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u65B0\u589E\u7684\u6587\u4EF6",children:(0,t.jsx)(Q.Z,{color:"green",children:"ADD"})}):r.change==2?(0,t.jsx)(J.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u88AB\u5220\u9664\u6587\u4EF6",children:(0,t.jsx)(Q.Z,{color:"error",children:"DELETED"})}):r.change==100?(0,t.jsx)(J.Z,{title:"\u6302\u8F7D\u7684\u6301\u4E45\u5316\u76EE\u5F55",children:(0,t.jsx)(Q.Z,{color:"cyan",children:"VOLUME"})}):(0,t.jsx)(t.Fragment,{})}var Oe=a(19632),ee=a.n(Oe),Ze=a(27254),Be=(0,F.forwardRef)(function(r,i){var c=(0,F.useContext)(M),e=c.showPath,C=(0,F.useState)([{title:"\u6839\u76EE\u5F55",path:"/"}]),v=R()(C,2),m=v[0],p=v[1];(0,F.useImperativeHandle)(i,function(){return{addHistory:function(n,u){p([].concat(ee()(m),[{title:n,path:u}]))},initHistory:function(n){p([{title:"\u6839\u76EE\u5F55",path:"/"}].concat(ee()(n)))}}});var g=function(n){e(m[n].title,m[n].path);var u=m.filter(function(o,l){return l<=n});p(ee()(u))};return(0,t.jsx)(ne.Z.Compact,{children:m.map(function(s,n){return(0,t.jsx)(T.ZP,{icon:(0,t.jsx)(Ze.Z,{}),type:n==m.length-1?"primary":"dashed",onClick:function(){g(n)},children:s.title},n)})})}),Le=Be,De=a(97269),Ae=a(62370),Te=a(90672),Me=a(97462),be=a(85576),Se=a(20713),Ie=(0,F.forwardRef)(function(r,i){var c=(0,F.useContext)(M),e=c.currentPath,C=c.reloadFileList,v=c.containerMd5,m=(0,F.useRef)(),p=(0,F.useState)(!1),g=R()(p,2),s=g[0],n=g[1],u=ue.Z.useApp();return(0,F.useImperativeHandle)(i,function(){return{newFile:function(){var l;n(!0),(l=m.current)===null||l===void 0||l.resetFields()},editFile:function(l,h,E){var P;n(!0),(P=m.current)===null||P===void 0||P.resetFields(),Y({md5:v,file:h}).then(function(x){var X,b;if(x.data.content==""&&E!="0"){(0,q.YZ)(u,"\u4E0D\u652F\u6301\u7F16\u8F91\u7684\u6587\u4EF6\u7C7B\u578B"),n(!1);return}(X=m.current)===null||X===void 0||X.setFieldValue("newValue",x.data.content),(b=m.current)===null||b===void 0||b.setFieldValue("newName",l)})}}}),(0,t.jsx)(be.Z,{width:"800px",title:"\u65B0\u5EFA\u6587\u4EF6",open:s,onCancel:function(){return n(!1)},footer:!1,children:(0,t.jsxs)(De.A,{formRef:m,onFinish:function(){var o=w()(d()().mark(function l(h){var E;return d()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return $({destPath:e,file:h.newName.indexOf("/")!==0?"/"+h.newName:h.newName,content:h.newValue,md5:v}),(E=m.current)===null||E===void 0||E.resetFields(),n(!1),C(),x.abrupt("return",!0);case 5:case"end":return x.stop()}},l)}));return function(l){return o.apply(this,arguments)}}(),children:[(0,t.jsx)(_.Z,{label:"\u6587\u4EF6\u540D",name:"newName",fieldProps:{addonBefore:e},placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D\uFF1B\u652F\u6301\u65B0\u5EFA\u76EE\u5F55\uFF0C\u9700\u8981\u6307\u5B9A\u5B8C\u6574\u8DEF\u5F84\uFF0C\u4F8B\u5982\uFF1A/test/test.txt"}),(0,t.jsxs)(Ae.Z,{label:"\u5185\u5BB9",children:[(0,t.jsx)(Te.Z,{hidden:!0,name:"newValue"}),(0,t.jsx)(Me.Z,{name:["newValue"],children:function(l){var h=l.newValue;return(0,t.jsx)(Se.ZP,{theme:"dark",height:"500px",value:h,onChange:function(P){var x;(x=m.current)===null||x===void 0||x.setFieldValue("newValue",P)}})}})]})]})})}),We=Ie;function Ue(r){var i=(0,F.useRef)(),c=(0,F.useRef)(),e=(0,F.useRef)(),C=(0,F.useState)("/"),v=R()(C,2),m=v[0],p=v[1];(0,F.useEffect)(function(){if(r.initialValue){for(var s,n=r.initialValue.split("/"),u=[],o="",l=1;l<n.length;l++)o+="/"+n[l],u.push({title:n[l],path:o});g(n[n.length-1],r.initialValue),(s=i.current)===null||s===void 0||s.initHistory([].concat(u))}},[r.initialValue]);var g=function(n,u){var o,l;if((o=i.current)===null||o===void 0||o.addHistory(n,u),p(u),e&&typeof((l=e.current)===null||l===void 0?void 0:l.reloadAndRest)=="function"){var h;(h=e.current)===null||h===void 0||h.reloadAndRest()}};return(0,t.jsxs)(M.Provider,{value:{fileListRef:e,containerMd5:r.md5,currentPath:m,showPath:g,reloadFileList:function(){var n;if(e&&typeof((n=e.current)===null||n===void 0?void 0:n.reloadAndRest)=="function"){var u;(u=e.current)===null||u===void 0||u.reloadAndRest()}},editFileRef:c},children:[(0,t.jsx)(de.Z,{rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},tableAlertOptionRender:function(n){var u=n.selectedRowKeys,o=n.selectedRows,l=[];return o.map(function(h){l.push(h.name)}),(0,t.jsx)(we,{selectFileList:l,selectFileObject:o})},headerTitle:(0,t.jsx)(Le,{ref:i}),actionRef:e,search:!1,rowKey:"showName",pagination:!1,request:w()(d()().mark(function s(){return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",new Promise(function(o,l){r.md5&&V({md5:r.md5,path:m}).then(function(h){if(h.data.list){var E={data:h.data.list,success:!0,total:h.data.list.length};o(E)}else o({data:[],success:!0,total:0})})}));case 1:case"end":return u.stop()}},s)})),columns:[{title:"\u540D\u79F0",dataIndex:"showName",key:"name",render:function(E,u,o,l,h){var E;return u.isDir?E=(0,t.jsx)(T.ZP,{onClick:function(){return g(u.showName,u.name)},type:"link",icon:(0,t.jsx)(se.Z,{}),children:u.showName}):u.linkName?E=(0,t.jsx)(T.ZP,{type:"text",icon:(0,t.jsx)(oe.Z,{}),children:"".concat(u.showName," -> ").concat(u.linkName)}):E=(0,t.jsx)(T.ZP,{type:"text",icon:(0,t.jsx)(ce.Z,{}),onClick:function(){var x;(x=c.current)===null||x===void 0||x.editFile(u.showName,u.name,u.size)},children:u.showName}),E}},{title:"\u72B6\u6001",key:"status",width:110,render:function(n,u,o,l,h){return(0,t.jsx)(Re,{change:u.change})}},{title:"\u6743\u9650",dataIndex:"mode",key:"mode"},{title:"\u7528\u6237",dataIndex:"owner"},{title:"\u7528\u6237\u7EC4",dataIndex:"group"},{title:"\u5927\u5C0F",dataIndex:"size",key:"size"},{title:"\u4FEE\u6539\u65F6\u95F4",dataIndex:"modTime",key:"modTime"}]}),(0,t.jsx)(We,{ref:c})]})}var Ve=Ue;function Ke(){var r,i,c=(0,y.useParams)(),e=(0,y.useSearchParams)(),C=R()(e,2),v=C[0],m=C[1];return(0,t.jsx)("div",{children:(0,t.jsx)(Ve,{md5:(r=c.id)!==null&&r!==void 0?r:"",initialValue:(i=v.get("path"))!==null&&i!==void 0?i:""})})}var Ne=Ke},97961:function(te,I,a){a.d(I,{MF:function(){return K},_2:function(){return V},fN:function(){return w}});var U=a(15009),R=a.n(U),W=a(99289),d=a.n(W),S=a(54006);function w(Z){return y.apply(this,arguments)}function y(){return y=d()(R()().mark(function Z(B){return R()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",(0,S.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:B}));case 1:case"end":return j.stop()}},Z)})),y.apply(this,arguments)}function V(Z){return O.apply(this,arguments)}function O(){return O=d()(R()().mark(function Z(B){return R()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,(0,S.request)("/api/common/attach/delete",{method:"POST",data:B});case 2:return j.abrupt("return",j.sent);case 3:case"end":return j.stop()}},Z)})),O.apply(this,arguments)}function K(){return f.apply(this,arguments)}function f(){return f=d()(R()().mark(function Z(){return R()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.abrupt("return",(0,S.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return L.stop()}},Z)})),f.apply(this,arguments)}}}]);
