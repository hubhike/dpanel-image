"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5738],{80821:function(te,U,a){a.d(U,{Z:function(){return z}});var K=a(5574),w=a.n(K),V=a(93246),d=a(54006),A=a(31418),R=a(86738),P=a(14726),N=a(62435),L=a(86074);function z(f){var H=(0,N.useState)(!1),D=w()(H,2),$=D[0],T=D[1],C=A.Z.useApp(),B=(0,d.useIntl)(),Z=function(){T(!0),f.action().then(function(Y){if(T(!1),typeof f.onSuccess=="function"&&f.onSuccess(Y),f.messageSuccess){var M="";f.messageSuccess.indexOf(".")>-1?M=B.formatMessage({id:f.messageSuccess}):M=f.messageSuccess,f.asynced?(0,V.Rk)(C,M):(0,V.$h)(C,M)}}).catch(function(Y){T(!1),typeof f.onError=="function"&&f.onError(Y)})};return f.confirm?(0,L.jsx)(R.Z,{style:{width:500},title:"\u63D0\u793A",description:f.confirm,onConfirm:Z,okText:"Yes",cancelText:"No",children:(0,L.jsx)(P.ZP,{disabled:f.disabled,icon:f.icon,loading:$,danger:f.danger,type:f.type,children:f.children})}):(0,L.jsx)(P.ZP,{disabled:f.disabled,icon:f.icon,loading:$,onClick:Z,danger:f.danger,type:f.type,children:f.children})}},21615:function(te,U,a){a.r(U),a.d(U,{default:function(){return Ke}});var K=a(5574),w=a.n(K),V=a(15009),d=a.n(V),A=a(99289),R=a.n(A),P=a(54006);function N(r){return L.apply(this,arguments)}function L(){return L=R()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.request)("/api/app/explorer/get-path-list",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),L.apply(this,arguments)}function z(r){return f.apply(this,arguments)}function f(){return f=R()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.request)("/api/app/explorer/export",{data:i,method:"POST",responseType:"blob"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),f.apply(this,arguments)}function H(r){return D.apply(this,arguments)}function D(){return D=R()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.request)("/api/app/explorer/import",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),D.apply(this,arguments)}function $(r){return T.apply(this,arguments)}function T(){return T=R()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.request)("/api/app/explorer/delete",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),T.apply(this,arguments)}function C(r){return B.apply(this,arguments)}function B(){return B=R()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.request)("/api/app/explorer/unzip",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),B.apply(this,arguments)}function Z(r){return m.apply(this,arguments)}function m(){return m=R()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.request)("/api/app/explorer/get-content",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),m.apply(this,arguments)}function Y(r){return M.apply(this,arguments)}function M(){return M=R()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.request)("/api/app/explorer/import-file-content",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),M.apply(this,arguments)}function le(r){return X.apply(this,arguments)}function X(){return X=R()(d()().mark(function r(i){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.request)("/api/app/explorer/chmod",{data:i,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),X.apply(this,arguments)}var se=a(93613),oe=a(29158),ce=a(2741),de=a(12010),S=a(14726),g=a(62435),fe=(0,g.createContext)({}),I=fe,he=a(24969),me=a(48689),ne=a(78957),re=a(80821),ve=a(88484),ae=a(37476),pe=a(91604),Fe=a(97961),t=a(86074);function ge(){var r=(0,g.useRef)(),i=(0,g.useContext)(I),c=i.fileListRef,e=i.containerMd5,O=i.currentPath,p=(0,P.useModel)("@@initialState"),v=p.initialState,F=p.loading,j=p.error,s=p.refresh,n=p.setInitialState;return(0,t.jsx)(ae.Y,{formRef:r,trigger:(0,t.jsx)(S.ZP,{icon:(0,t.jsx)(ve.Z,{}),children:"\u4E0A\u4F20"}),title:"\u4E0A\u4F20\u6587\u4EF6\u5230\u5BB9\u5668",onFinish:function(){var u=R()(d()().mark(function o(l){var h,E,y,x;return d()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return y=[],l.importFileList&&l.importFileList.map(function(ie){y.push({name:ie.name,path:ie.response.data.path})}),H({fileList:y,md5:e,destPath:O}),(h=r.current)===null||h===void 0||h.resetFields(),c&&typeof((E=c.current)===null||E===void 0?void 0:E.reloadAndRest)=="function"&&((x=c.current)===null||x===void 0||x.reloadAndRest()),W.abrupt("return",!0);case 6:case"end":return W.stop()}},o)}));return function(o){return u.apply(this,arguments)}}(),children:(0,t.jsx)(pe.Z,{name:"importFileList",fieldProps:{multiple:!0,name:"file",action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function(o){return new Promise(function(l){var h;(0,Fe._2)({path:(h=o.response.data.path)!==null&&h!==void 0?h:""}).then(function(E){l(!0)})})}}})})}var xe=a(23430),je=a(93162);function Ee(r){var i=(0,g.useContext)(I),c=i.containerMd5;return(0,t.jsx)(re.Z,{action:function(){return z({md5:c,fileList:r.selectFileList})},onSuccess:function(O){var p=new Blob([O],{type:"application/zip"});(0,je.saveAs)(p,"export.zip")},icon:(0,t.jsx)(xe.Z,{}),children:"\u4E0B\u8F7D"})}var G=a(38345),b=a(63434),ye=a(24739),_=a(5966);function Pe(r){var i=(0,g.useRef)(),c=(0,g.useContext)(I),e=c.currentPath,O=c.reloadFileList,p=c.containerMd5,v=function(s){var n=s.split(""),u=0,o=0,l=0;return n[1]=="r"&&(u+=4),n[2]=="w"&&(u+=2),n[3]=="x"&&(u+=1),n[4]=="r"&&(o+=4),n[5]=="w"&&(o+=2),n[6]=="x"&&(o+=1),n[7]=="r"&&(l+=4),n[8]=="w"&&(l+=2),n[9]=="x"&&(l+=1),"".concat(u).concat(o).concat(l)},F=function(s){var n;if((n=i.current)===null||n===void 0||n.setFieldValue("permission",s),s.length>=1){var u;(u=i.current)===null||u===void 0||u.setFieldsValue({ownerRead:s[0]&4,ownerWrite:s[0]&2,ownerExec:s[0]&1})}if(s.length>=2){var o;(o=i.current)===null||o===void 0||o.setFieldsValue({groupRead:s[1]&4,groupWrite:s[1]&2,groupExec:s[1]&1})}if(s.length>=3){var l;(l=i.current)===null||l===void 0||l.setFieldsValue({everyoneRead:s[2]&4,everyoneWrite:s[2]&2,everyoneExec:s[2]&1})}};return(0,t.jsxs)(ae.Y,{modalProps:{forceRender:!0},title:r.selectFileObject.length==1?"\u4FEE\u6539 ".concat(r.selectFileObject[0].name," \u6743\u9650"):"\u6279\u91CF\u6587\u4EF6\u4FEE\u6539\u6743\u9650",trigger:(0,t.jsx)(S.ZP,{children:"\u6743\u9650"}),layout:"horizontal",onOpenChange:function(s){if(r.selectFileObject.length==0){var n;(n=i.current)===null||n===void 0||n.resetFields()}if(r.selectFileObject.length==1){var u;F(v(r.selectFileObject[0].mode)),(u=i.current)===null||u===void 0||u.setFieldValue("owner",r.selectFileObject[0].owner)}},formRef:i,onValuesChange:function(s,n){if(s.permission)F(s.permission);else{var u=["-",n.ownerRead?"r":"-",n.ownerWrite?"w":"-",n.ownerExec?"x":"-",n.groupRead?"r":"-",n.groupWrite?"w":"-",n.groupExec?"x":"-",n.everyoneRead?"r":"-",n.everyoneWrite?"w":"-",n.everyoneExec?"x":"-"];F(v(u.join("")))}},onFinish:function(){var j=R()(d()().mark(function s(n){var u,o,l,h;return d()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return l=[],r.selectFileObject.map(function(x){l.push(x.name)}),y.next=4,le({md5:p,fileList:l,mod:parseInt((u=n.permission)!==null&&u!==void 0?u:"600"),hasChildren:(o=n.hasChildren)!==null&&o!==void 0?o:!0,owner:n.owner});case 4:return h=y.sent,O(),y.abrupt("return",!0);case 7:case"end":return y.stop()}},s)}));return function(s){return j.apply(this,arguments)}}(),children:[(0,t.jsxs)(G.Z,{direction:"row",gutter:[20,10],children:[(0,t.jsxs)(G.Z,{bordered:!0,title:"\u6240\u6709\u8005",headerBordered:!0,children:[(0,t.jsx)(b.Z,{label:"\u8BFB\u53D6",name:"ownerRead"}),(0,t.jsx)(b.Z,{label:"\u5199\u5165",name:"ownerWrite"}),(0,t.jsx)(b.Z,{label:"\u6267\u884C",name:"ownerExec"})]}),(0,t.jsxs)(G.Z,{bordered:!0,title:"\u7528\u6237\u7EC4",headerBordered:!0,children:[(0,t.jsx)(b.Z,{label:"\u8BFB\u53D6",name:"groupRead"}),(0,t.jsx)(b.Z,{label:"\u5199\u5165",name:"groupWrite"}),(0,t.jsx)(b.Z,{label:"\u6267\u884C",name:"groupExec"})]}),(0,t.jsxs)(G.Z,{bordered:!0,title:"\u516C\u5171",headerBordered:!0,children:[(0,t.jsx)(b.Z,{label:"\u8BFB\u53D6",name:"everyoneRead"}),(0,t.jsx)(b.Z,{label:"\u5199\u5165",name:"everyoneWrite"}),(0,t.jsx)(b.Z,{label:"\u6267\u884C",name:"everyoneExec"})]})]}),(0,t.jsx)(G.Z,{children:(0,t.jsxs)(ye.UW,{children:[(0,t.jsx)(_.Z,{label:"\u6743\u9650",name:"permission",fieldProps:{maxLength:3}}),(0,t.jsx)(_.Z,{label:"\u6240\u6709\u8005",name:"owner"}),(0,t.jsx)(b.Z,{label:"\u5E94\u7528\u5230\u5B50\u76EE\u5F55",name:"hasChildren",initialValue:!0})]})})]})}var ue=a(31418),q=a(93246);function Ce(r){var i=(0,g.useContext)(I),c=i.currentPath,e=i.reloadFileList,O=i.containerMd5,p=ue.Z.useApp();return(0,t.jsx)(S.ZP,{onClick:function(){if(r.selectFileObject.length>1)return(0,q.YZ)(p,"\u89E3\u538B\u64CD\u4F5C\u53EA\u652F\u6301\u5355\u6587\u4EF6\u64CD\u4F5C"),!1;var F=r.selectFileObject[0];if(F.name.lastIndexOf(".zip")!=F.name.length-4)return(0,q.YZ)(p,"\u89E3\u538B\u64CD\u4F5C\u53EA\u652F\u6301 zip \u6587\u4EF6"),!1;C({md5:O,file:F.name}).then(function(j){e()})},children:"\u89E3\u538B"})}function we(r){var i=(0,g.useContext)(I),c=i.fileListRef,e=i.containerMd5,O=i.currentPath,p=i.editFileRef;return(0,t.jsxs)(ne.Z,{size:16,children:[(0,t.jsx)(Ee,{selectFileList:r.selectFileList}),(0,t.jsx)(ge,{}),(0,t.jsx)(Pe,{selectFileObject:r.selectFileObject}),(0,t.jsx)(Ce,{selectFileObject:r.selectFileObject}),(0,t.jsx)(S.ZP,{type:"primary",icon:(0,t.jsx)(he.Z,{}),onClick:function(){var F;(F=p.current)===null||F===void 0||F.newFile()},children:"\u65B0\u5EFA\u6587\u4EF6"}),(0,t.jsx)(re.Z,{danger:!0,type:"default",icon:(0,t.jsx)(me.Z,{}),action:function(){return $({md5:e,fileList:r.selectFileList})},onSuccess:function(){var F;if(c&&typeof((F=c.current)===null||F===void 0?void 0:F.reloadAndRest)=="function"){var j;(j=c.current)===null||j===void 0||j.reloadAndRest()}},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u5220\u9664"})]})}var k=a(83062),J=a(66309);function Oe(r){return r.change==0?(0,t.jsx)(k.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u88AB\u4FEE\u6539",children:(0,t.jsx)(J.Z,{color:"blue",children:"MODIFIED"})}):r.change==1?(0,t.jsx)(k.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u65B0\u589E\u7684\u6587\u4EF6",children:(0,t.jsx)(J.Z,{color:"green",children:"ADD"})}):r.change==2?(0,t.jsx)(k.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u88AB\u5220\u9664\u6587\u4EF6",children:(0,t.jsx)(J.Z,{color:"error",children:"DELETED"})}):r.change==100?(0,t.jsx)(k.Z,{title:"\u6302\u8F7D\u7684\u6301\u4E45\u5316\u76EE\u5F55",children:(0,t.jsx)(J.Z,{color:"cyan",children:"VOLUME"})}):(0,t.jsx)(t.Fragment,{})}var Re=a(19632),ee=a.n(Re),Be=a(27254),Ze=(0,g.forwardRef)(function(r,i){var c=(0,g.useContext)(I),e=c.showPath,O=(0,g.useState)([{title:"\u6839\u76EE\u5F55",path:"/"}]),p=w()(O,2),v=p[0],F=p[1];(0,g.useImperativeHandle)(i,function(){return{addHistory:function(n,u){F([].concat(ee()(v),[{title:n,path:u}]))},initHistory:function(n){F([{title:"\u6839\u76EE\u5F55",path:"/"}].concat(ee()(n)))}}});var j=function(n){e(v[n].title,v[n].path);var u=v.filter(function(o,l){return l<=n});F(ee()(u))};return(0,t.jsx)(ne.Z.Compact,{children:v.map(function(s,n){return(0,t.jsx)(S.ZP,{icon:(0,t.jsx)(Be.Z,{}),type:n==v.length-1?"primary":"dashed",onClick:function(){j(n)},children:s.title},n)})})}),Le=Ze,Te=a(97269),De=a(62370),be=a(90672),Ae=a(97462),Me=a(85576),Se=a(20713),Ie=(0,g.forwardRef)(function(r,i){var c=(0,g.useContext)(I),e=c.currentPath,O=c.reloadFileList,p=c.containerMd5,v=(0,g.useRef)(),F=(0,g.useState)(!1),j=w()(F,2),s=j[0],n=j[1],u=ue.Z.useApp();return(0,g.useImperativeHandle)(i,function(){return{newFile:function(){var l;n(!0),(l=v.current)===null||l===void 0||l.resetFields()},editFile:function(l,h,E){var y;n(!0),(y=v.current)===null||y===void 0||y.resetFields(),Z({md5:p,file:h}).then(function(x){var Q,W;if(x.data.content==""&&E!="0"){(0,q.YZ)(u,"\u4E0D\u652F\u6301\u7F16\u8F91\u7684\u6587\u4EF6\u7C7B\u578B"),n(!1);return}(Q=v.current)===null||Q===void 0||Q.setFieldValue("newValue",x.data.content),(W=v.current)===null||W===void 0||W.setFieldValue("newName",l)})}}}),(0,t.jsx)(Me.Z,{width:"800px",title:"\u65B0\u5EFA\u6587\u4EF6",open:s,onCancel:function(){return n(!1)},footer:!1,children:(0,t.jsxs)(Te.A,{formRef:v,onFinish:function(){var o=R()(d()().mark(function l(h){var E;return d()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return Y({destPath:e,file:h.newName.indexOf("/")!==0?"/"+h.newName:h.newName,content:h.newValue,md5:p}),(E=v.current)===null||E===void 0||E.resetFields(),n(!1),O(),x.abrupt("return",!0);case 5:case"end":return x.stop()}},l)}));return function(l){return o.apply(this,arguments)}}(),children:[(0,t.jsx)(_.Z,{label:"\u6587\u4EF6\u540D",name:"newName",fieldProps:{addonBefore:e},placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D\uFF1B\u652F\u6301\u65B0\u5EFA\u76EE\u5F55\uFF0C\u9700\u8981\u6307\u5B9A\u5B8C\u6574\u8DEF\u5F84\uFF0C\u4F8B\u5982\uFF1A/test/test.txt"}),(0,t.jsxs)(De.Z,{label:"\u5185\u5BB9",children:[(0,t.jsx)(be.Z,{hidden:!0,name:"newValue"}),(0,t.jsx)(Ae.Z,{name:["newValue"],children:function(l){var h=l.newValue;return(0,t.jsx)(Se.ZP,{theme:"dark",height:"500px",value:h,onChange:function(y){var x;(x=v.current)===null||x===void 0||x.setFieldValue("newValue",y)}})}})]})]})})}),We=Ie;function Ue(r){var i=(0,g.useRef)(),c=(0,g.useRef)(),e=(0,g.useRef)(),O=(0,g.useState)("/"),p=w()(O,2),v=p[0],F=p[1];(0,g.useEffect)(function(){if(r.initialValue){for(var s,n=r.initialValue.split("/"),u=[],o="",l=1;l<n.length;l++)o+="/"+n[l],u.push({title:n[l],path:o});j(n[n.length-1],r.initialValue),(s=i.current)===null||s===void 0||s.initHistory([].concat(u))}},[r.initialValue]);var j=function(n,u){var o,l;if((o=i.current)===null||o===void 0||o.addHistory(n,u),F(u),e&&typeof((l=e.current)===null||l===void 0?void 0:l.reloadAndRest)=="function"){var h;(h=e.current)===null||h===void 0||h.reloadAndRest()}};return(0,t.jsxs)(I.Provider,{value:{fileListRef:e,containerMd5:r.md5,currentPath:v,showPath:j,reloadFileList:function(){var n;if(e&&typeof((n=e.current)===null||n===void 0?void 0:n.reloadAndRest)=="function"){var u;(u=e.current)===null||u===void 0||u.reloadAndRest()}},editFileRef:c},children:[(0,t.jsx)(de.Z,{rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},tableAlertOptionRender:function(n){var u=n.selectedRowKeys,o=n.selectedRows,l=[];return o.map(function(h){l.push(h.name)}),(0,t.jsx)(we,{selectFileList:l,selectFileObject:o})},headerTitle:(0,t.jsx)(Le,{ref:i}),actionRef:e,search:!1,rowKey:"showName",pagination:!1,request:R()(d()().mark(function s(){return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",new Promise(function(o,l){r.md5&&N({md5:r.md5,path:v}).then(function(h){if(h.data.list){var E={data:h.data.list,success:!0,total:h.data.list.length};o(E)}else o({data:[],success:!0,total:0})})}));case 1:case"end":return u.stop()}},s)})),columns:[{title:"\u540D\u79F0",dataIndex:"showName",key:"name",render:function(E,u,o,l,h){var E;return u.isDir?E=(0,t.jsx)(S.ZP,{onClick:function(){return j(u.showName,u.name)},type:"link",icon:(0,t.jsx)(se.Z,{}),children:u.showName}):u.linkName?E=(0,t.jsx)(S.ZP,{type:"text",icon:(0,t.jsx)(oe.Z,{}),children:"".concat(u.showName," -> ").concat(u.linkName)}):E=(0,t.jsx)(S.ZP,{type:"text",icon:(0,t.jsx)(ce.Z,{}),onClick:function(){var x;(x=c.current)===null||x===void 0||x.editFile(u.showName,u.name,u.size)},children:u.showName}),E}},{title:"\u72B6\u6001",key:"status",width:110,render:function(n,u,o,l,h){return(0,t.jsx)(Oe,{change:u.change})}},{title:"\u6743\u9650",dataIndex:"mode",key:"mode"},{title:"\u7528\u6237",dataIndex:"owner"},{title:"\u7528\u6237\u7EC4",dataIndex:"group"},{title:"\u5927\u5C0F",dataIndex:"size",key:"size"},{title:"\u4FEE\u6539\u65F6\u95F4",dataIndex:"modTime",key:"modTime"}]}),(0,t.jsx)(We,{ref:c})]})}var Ve=Ue;function $e(){var r,i,c=(0,P.useParams)(),e=(0,P.useSearchParams)(),O=w()(e,2),p=O[0],v=O[1];return(0,t.jsx)("div",{children:(0,t.jsx)(Ve,{md5:(r=c.id)!==null&&r!==void 0?r:"",initialValue:(i=p.get("path"))!==null&&i!==void 0?i:""})})}var Ke=$e},97961:function(te,U,a){a.d(U,{MF:function(){return $},_2:function(){return H},fN:function(){return R},hG:function(){return z},vC:function(){return N}});var K=a(15009),w=a.n(K),V=a(99289),d=a.n(V),A=a(54006);function R(C){return P.apply(this,arguments)}function P(){return P=d()(w()().mark(function C(B){return w()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,A.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:B}));case 1:case"end":return m.stop()}},C)})),P.apply(this,arguments)}function N(C){return L.apply(this,arguments)}function L(){return L=d()(w()().mark(function C(B){return w()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,A.request)("/api/app/image/import-by-container-tar",{method:"POST",data:B}));case 1:case"end":return m.stop()}},C)})),L.apply(this,arguments)}function z(C){return f.apply(this,arguments)}function f(){return f=d()(w()().mark(function C(B){return w()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,A.request)("/api/app/image/import-by-image-tar",{method:"POST",data:B}));case 1:case"end":return m.stop()}},C)})),f.apply(this,arguments)}function H(C){return D.apply(this,arguments)}function D(){return D=d()(w()().mark(function C(B){return w()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,A.request)("/api/common/attach/delete",{method:"POST",data:B});case 2:return m.abrupt("return",m.sent);case 3:case"end":return m.stop()}},C)})),D.apply(this,arguments)}function $(){return T.apply(this,arguments)}function T(){return T=d()(w()().mark(function C(){return w()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.abrupt("return",(0,A.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return Z.stop()}},C)})),T.apply(this,arguments)}}}]);
