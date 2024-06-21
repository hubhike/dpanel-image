"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7523],{96042:function(V,U,u){u.d(U,{Z:function(){return P}});var L=u(97857),t=u.n(L),W=u(5574),c=u.n(W),m=u(75870),A=u(34041),h=u(62435),e=u(86074);function P(y){var O=(0,h.useState)([]),k=c()(O,2),T=k[0],C=k[1];(0,h.useEffect)(function(){(0,m.Ot)().then(function(o){o&&C(o.data.list)})},[]);var g={};return y.multiple&&(g.mode="multiple"),y.top&&(g.placement="topLeft"),(0,e.jsx)(A.Z,t()({onChange:function(n){if(y.multiple){var d=n.map(function(s){return T[s]});y.onChangeList&&y.onChangeList(d)}else y.onChange&&y.onChange(T[n])},placeholder:"\u9009\u62E9\u955C\u50CF\u4ED3\u5E93\uFF0C\u672C\u5730\u4F7F\u7528\u7559\u7A7A\u5373\u53EF",options:T.map(function(o,n){return{value:n,label:o.title+"("+o.serverAddress+")"}})},g))}},18810:function(V,U,u){u.r(U),u.d(U,{default:function(){return Fe}});var L=u(15009),t=u.n(L),W=u(99289),c=u.n(W),m=u(5574),A=u.n(m),h=u(5966),e=u(86074);function P(){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(h.Z,{fieldProps:{min:2,max:255},rules:[{required:!0}],required:!0,placeholder:"\u6307\u5B9AGit\u5730\u5740\uFF0C\u79C1\u6709\u4ED3\u5E93\u8BF7\u9644\u52A0\u6743\u9650\u3002\u4EC5\u652F\u6301Master\u5206\u652F",label:"Git\u4ED3\u5E93\u5730\u5740",name:"buildGit"})})}var y=u(97961),O=u(1677);function k(E){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(O.Z,{max:1,label:E.label,required:!0,rules:[{required:!0}],fieldProps:{name:"file",accept:E.accept,action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function(F){return new Promise(function(p){var I;(0,y._2)({path:(I=F.response.data.path)!==null&&I!==void 0?I:""}).then(function(b){p(!0)})})}},name:E.name})})}var T=u(38345),C=u(20713),g=u(54006),o=u(78957),n=u(14726),d=u(62435),s="";function H(E){(0,d.useEffect)(function(){s=""},[E]);var D=(0,g.useNavigate)(),F=(0,d.useState)(""),p=A()(F,2),I=p[0],b=p[1],l=(0,d.useRef)({}),v=(0,g.useModel)("subscriber");return(0,d.useEffect)(function(){v.addDataHandler("imageBuild",function(){var f=v.getDataByType("imageBuild");if(f&&(f.map(function(M){M.data.TaskId=="".concat(E.imageId)&&M.data.Stream&&(s+=M.data.Stream.stream)}),b(s),l&&l.current&&l.current.view)){var j;(j=l.current.view)===null||j===void 0||j.scrollDOM.scroll(0,99999)}})},[l.current]),(0,e.jsxs)(T.Z,{title:"\u6784\u5EFA\u65E5\u5FD7",subTitle:"\u4F60\u4E5F\u53EF\u4EE5\u8DF3\u8F6C\u81F3\u5217\u8868\u9875\uFF0C\u7B49\u5F85\u67E5\u770B\u6784\u5EFA\u65E5\u5FD7",children:[(0,e.jsx)(C.ZP,{ref:l,theme:"dark",style:{marginTop:"10px",backgroundColor:"#282c34"},height:"500px",value:I}),(0,e.jsx)(o.Z,{style:{marginTop:10},children:(0,e.jsx)(n.ZP,{type:"primary",onClick:function(){D("/image/list")},children:"\u5B8C\u6210&\u8DF3\u8F6C\u81F3\u5217\u8868"})})]})}var w=u(93246),Y=u(88484),G=u(31418),J=u(72723);function N(E){var D=(0,d.useRef)(null),F=G.Z.useApp(),p=function(){D.current&&(D.current.click(),D.current.onchange=function(b){if(!b||!b.target)return"";var l=new FileReader;l.onload=function(f){var j,M=(j=f.target)===null||j===void 0?void 0:j.result;if(M.indexOf("FROM ")<0){(0,w.YZ)(F,"\u5BFC\u5165Dockerfile\u6587\u4EF6\u9519\u8BEF");return}typeof E.onImport=="function"&&E.onImport(M)};var v=b.target;if(v.files)try{l.readAsText(v.files[0])}catch(f){(0,w.YZ)(F,"\u5BFC\u5165\u6587\u4EF6\u5FC5\u987B\u662F\u6587\u672C\u7C7B\u578B")}})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(J.Z.Item,{name:"importFile",label:"Dockerfile",children:(0,e.jsx)(n.ZP,{icon:(0,e.jsx)(Y.Z,{}),block:!0,onClick:p,children:"\u5BFC\u5165\u672C\u5730Dockerfile\u6587\u4EF6"})}),(0,e.jsx)("input",{style:{display:"none"},type:"file",ref:D,name:"importFileInput"})]})}var i=u(62370),B=u(184),_=u(86615),r=u(97462),ne=u(34041);function de(E){var D=(0,d.useState)([]),F=A()(D,2),p=F[0],I=F[1];return(0,d.useEffect)(function(){(0,y.MF)().then(function(b){var l=Object.keys(b.data).map(function(v){return b.data[v]});I(l)})},[]),(0,e.jsx)(i.Z,{children:(0,e.jsxs)(B.a,{trigger:(0,e.jsx)(n.ZP,{block:!0,children:"\u4F7F\u7528\u6A21\u677F\u751F\u6210"}),onFinish:function(l){return new Promise(function(v,f){var j=l[l.language+"EnvVersion"].split("|"),M=A()(j,2),x=M[0],z=M[1],K="FROM ".concat(x,`
# \u5E94\u7528\u76EE\u5F55\u4F4D\u4E8E /app
# \u53EF\u901A\u7BA1\u5BB9\u5668 - \u6587\u4EF6\u7BA1\u7406, \u4E0A\u4F20\u4EE3\u7801\u81F3\u6B64\u76EE\u5F55\u5E76\u4FEE\u6539\u6743\u9650

WORKDIR /app
VOLUME [ "/app" ]
EXPOSE 80

# \u81EA\u5B9A\u4E49\u5B89\u88C5\u7EC4\u4EF6\u3001\u6269\u5C55\u6216\u662F\u5E93, \u4F8B\u5982:
# RUN apk add --no-cache --update vim
`);switch(l.language){case"php":K+=`
                
# \u7AD9\u70B9\u76EE\u5F55\u4F4D\u4E8E /app/wwwroot \u53EF\u4E0A\u4F20\u6216\u662F\u4FEE\u6539\u7AD9\u70B9\u6587\u4EF6
# nginx \u914D\u7F6E\u4F4D\u4E8E /app/nginx/ \u53EF\u4FEE\u6539\u589E\u52A0\u81EA\u5B9A\u4E49\u914D\u7F6E
# \u901A\u8FC7\u8BBF\u95EE\u5BB9\u5668\u8FD0\u884C\u6620\u5C04\u7AEF\u53E3\uFF0C\u67E5\u770B\u73AF\u5883\u53CA\u6269\u5C55\u4FE1\u606F

`,l.language=="php"&&l.phpExt&&(K+="RUN apk add --no-cache --update ",l.phpExt.map(function(q){K+="php".concat(z,"-").concat(q," ")}));break;case"golang":K+=`
# \u53EF\u4EE5\u4FEE\u6539 RUN_COMMAND \u73AF\u5883\u53D8\u91CF, \u66F4\u6539\u542F\u52A8\u6267\u884C\u547D\u4EE4
ENV RUN_COMMAND="go version"`;break;default:break}E.onFinish(K),v(!0)})},children:[(0,e.jsx)(_.Z.Group,{radioType:"button",name:"language",label:"\u7A0B\u5E8F\u8BED\u8A00",options:p.map(function(b){return{label:b.name,value:b.name}}),required:!0}),(0,e.jsx)(r.Z,{name:["language"],children:function(l){var v=l.language;return v?(0,e.jsx)(e.Fragment,{children:p.map(function(f){if(f.name==v)return(0,e.jsxs)("div",{children:[(0,e.jsx)(i.Z,{name:"".concat(f.name,"EnvVersion"),label:"\u73AF\u5883\u7248\u672C",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7A0B\u5E8F\u8FD0\u884C\u7684\u73AF\u5883"}],children:(0,e.jsx)(ne.Z,{options:f.env.map(function(j){return{label:j.name,value:j.baseImage}}),placeholder:"\u8BF7\u9009\u62E9\u5177\u4F53\u7684\u73AF\u5883\u7248\u672C"},"".concat(f.name,"Select"))},f.name),f.name=="php"&&(0,e.jsx)(i.Z,{label:"php\u6269\u5C55",name:"phpExt",children:(0,e.jsx)(ne.Z,{options:f.ext.map(function(j){return{label:j,value:j}}),mode:"multiple",placeholder:"\u8BF7\u9009\u62E9\u8981\u5B89\u88C5\u7684php\u6269\u5C55"},"phpExtSelect")},"phpExt")]},"envSelect")})}):(0,e.jsx)(e.Fragment,{})}})]})})}function pe(E){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(N,{onImport:function(F){var p;return(p=E.createFormRef.current)===null||p===void 0||p.setFieldValue("buildDockerfile",F),!0}}),(0,e.jsx)(de,{onFinish:function(F){var p;(p=E.createFormRef.current)===null||p===void 0||p.setFieldValue("buildDockerfile",F)}}),(0,e.jsx)(i.Z,{shouldUpdate:!0,children:function(F){var p=F.getFieldValue;return(0,e.jsx)(i.Z,{name:"buildDockerfile",children:(0,e.jsx)(C.ZP,{value:p("buildDockerfile"),onChange:function(b){var l;(l=E.createFormRef.current)===null||l===void 0||l.setFieldValue("buildDockerfile",b)},height:"600px",theme:"dark",style:{marginBottom:"20px"}})})}})]})}var ce=u(25449),me=u(96042);function ge(E){var D=(0,d.useState)(""),F=A()(D,2),p=F[0],I=F[1],b=function(v){var f=String(v.serverAddress);f!=""&&(f+="/"),I(f)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ce.Z,{label:"\u955C\u50CF\u4ED3\u5E93",tooltip:(0,e.jsxs)(e.Fragment,{children:["\u63A8\u9001\u524D\u8BF7\u4FDD\u8BC1\u4ED3\u5E93\u4E2D\u6709\u6307\u5B9A\u7684\u547D\u540D\u7A7A\u95F4, \u5982\u6CA1\u6709\u8BF7\u5148 ",(0,e.jsx)("a",{href:"",target:"_blank",children:"\u6DFB\u52A0\u4ED3\u5E93"})]}),name:"imageRegistry",initialValue:"",children:(0,e.jsx)(me.Z,{onChange:function(v){b(v)}})}),(0,e.jsx)(r.Z,{name:["imageRegistry"],children:function(v){var f=v.imageRegistry;return(0,e.jsx)(h.Z,{fieldProps:{min:2,max:255,addonBefore:p||f},rules:[{required:!0}],required:!0,tooltip:"\u4F8B\u5982: name:tag\u3001namespace/name:tag\u3001registry/namespace/name:tag",placeholder:"\u53EA\u80FD\u4F7F\u7528\u5C0F\u5199\u82F1\u6587\u5B57\u7B26\u3001\u6570\u5B57\u3001_\u3001-\u3001",label:"\u955C\u50CFTag",name:"imageTag"})}})]})}var _e=u(18148),fe=u(97269),he=u(2236),Q=u(90672),Ee=u(91845);function Fe(){var E=(0,d.useRef)(),D=(0,d.useState)([]),F=A()(D,2),p=F[0],I=F[1],b=(0,g.useSearchParams)(),l=A()(b,2),v=l[0],f=l[1],j=(0,d.useState)("dockerfile"),M=A()(j,2),x=M[0],z=M[1],K=(0,g.useNavigate)(),q=(0,d.useState)(0),ie=A()(q,2),se=ie[0],ve=ie[1];return(0,d.useEffect)(function(){var $,S=($=v.get("id"))!==null&&$!==void 0?$:0;S&&(0,_e.T8)({id:parseInt(S)}).then(function(a){var Z;z(a.data.task.buildType),a.data.task.buildZip&&I([{name:a.data.task.buildZip,fileName:a.data.task.buildZip,uid:"".concat(a.data.task.id),type:"zip",response:{data:{path:a.data.task.buildZip}}}]),(Z=E.current)===null||Z===void 0||Z.setFieldsValue({title:a.data.task.title,imageTag:a.data.task.tag,imageRegistry:a.data.task.registry,uploadType:a.data.task.buildType,buildRoot:a.data.task.buildRoot,buildGit:a.data.task.buildGit,buildDockerfile:a.data.task.buildDockerfile})})},[]),(0,e.jsx)(T.Z,{direction:"column",ghost:!0,gutter:[0,10],children:se==0?(0,e.jsx)(T.Z,{bordered:!0,headerBordered:!0,children:(0,e.jsxs)(fe.A,{submitter:{render:function(S,a){return(0,e.jsx)(he.S,{children:a})}},onFinish:function(){var $=c()(t()().mark(function S(a){var Z,ee,ue,Ce,re,le,X,ae,te,oe;return t()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if(x!="containerTar"){R.next=8;break}return R.next=3,(0,y.vC)({tag:a.imageTag,registry:a.imageRegistry,tar:(Z=a.containerTar[0].response.data.path)!==null&&Z!==void 0?Z:"",cmd:a.cmd,workDir:a.workDir,expose:a.expose?a.expose.split(`
`):[],env:a.env?a.env.split(`
`):[],volume:a.volume?a.volume.split(`
`):[]});case 3:return ee=R.sent,K("/image/list"),R.abrupt("return",!0);case 8:if(x!="imageTar"){R.next=16;break}return R.next=11,(0,y.hG)({tag:a.imageTag,registry:a.imageRegistry,tar:(ue=a.imageTar[0].response.data.path)!==null&&ue!==void 0?ue:""});case 11:return Ce=R.sent,K("/image/list"),R.abrupt("return",!0);case 16:return le=(re=v.get("id"))!==null&&re!==void 0?re:"0",X=p&&p[0]?p[0].fileName:"",ae={id:parseInt(le),tag:a.imageTag,title:a.title,registry:a.imageRegistry,buildRoot:a.buildRoot,buildDockerfile:a.buildDockerfile,buildZip:X!=null?X:"",buildGit:a.buildGit,buildType:x},a.buildZip&&a.buildZip.length>0&&(ae.buildZip=(te=a.buildZip[0].response.data.path)!==null&&te!==void 0?te:""),R.next=22,(0,y.fN)(ae);case 22:return oe=R.sent,ve(oe.data.imageId),R.abrupt("return",!1);case 25:case"end":return R.stop()}},S)}));return function(S){return $.apply(this,arguments)}}(),formRef:E,children:[(0,e.jsx)(h.Z,{label:"\u955C\u50CF\u540D\u79F0",name:"title",fieldProps:{onChange:function(S){var a="";if(S.target.value){var Z,ee=(0,Ee.N9)(S.target.value.trim(),{toneType:"none",type:"array"});a=ee.join(""),(Z=E.current)===null||Z===void 0||Z.setFieldValue("imageTag",a)}}}}),(0,e.jsx)(ge,{showAnonymous:!1}),(0,e.jsx)(_.Z.Group,{name:"uploadType",label:"\u6784\u5EFA\u65B9\u5F0F",initialValue:x,options:[{label:"Dockerfile",value:"dockerfile"},{label:"Zip\u6E90\u7801\u5305",value:"zip"},{label:"Git\u6E90\u7801\u4ED3\u5E93",value:"git"},{label:"\u5BFC\u5165\u5BB9\u5668Tar\u5305",value:"containerTar"},{label:"\u5BFC\u5165\u955C\u50CFTar\u5305",value:"imageTar"}],fieldProps:{onChange:function(S){z(S.target.value)}}}),(0,e.jsx)(r.Z,{name:["uploadType"],children:function(S){var a=S.uploadType;if(a=="containerTar")return[(0,e.jsx)(h.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u4E00\u822C\u6307\u5411\u4EE3\u7801\u7684\u6240\u5728\u76EE\u5F55",label:"\u5DE5\u4F5C\u76EE\u5F55",name:"workDir",placeholder:"\u9ED8\u8BA4\u4E3A / \u76EE\u5F55"},"workDir"),(0,e.jsx)(h.Z,{required:!0,tooltip:"\u901A\u8FC7\u5BB9\u5668\u5BFC\u5165\u955C\u50CF\u65F6\uFF0C\u5FC5\u987B\u6307\u5B9A\u542F\u52A8\u547D\u4EE4\uFF0C\u5426\u5219\u518D\u521B\u5EFA\u65F6\u65E0\u6CD5\u542F\u52A8",rules:[{required:!0}],label:"CMD",name:"cmd"},"cmd"),(0,e.jsx)(Q.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u5BF9\u5916\u66B4\u9732\u7684\u7AEF\u53E3\uFF0C\u4E00\u884C\u6307\u5B9A\u4E00\u4E2A\u7AEF\u53E3",label:"\u66B4\u9732\u7AEF\u53E3",name:"expose",placeholder:`80 
9000`},"expose"),(0,e.jsx)(Q.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u9700\u8981\u914D\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u4E00\u884C\u6307\u5B9A\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF",label:"\u73AF\u5883\u53D8\u91CF",name:"env",placeholder:`TEST_VALUE=123 
TEST_NO_VALUE=`},"env"),(0,e.jsx)(Q.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u9700\u8981\u6301\u4E45\u5316\u7684\u76EE\u5F55\uFF0C\u4E00\u884C\u6307\u5B9A\u4E00\u4E2A\u76EE\u5F55",label:"\u5B58\u50A8\u5377\u76EE\u5F55",name:"volume",placeholder:`/app 
/home`},"volume")];if(a!="imageTar"){if(a=="zip"||a=="git")return(0,e.jsx)(h.Z,{name:"buildRoot",label:"Dockerfile\u6587\u4EF6\u4F4D\u7F6E",tooltip:"\u6307\u5B9ADockerfile\u6240\u5728\u7684\u76EE\u5F55",fieldProps:{addonBefore:"\u9ED8\u8BA4\u4EE5\u5305\u6216\u662F\u4ED3\u5E93\u76EE\u5F55\u5F00\u59CB\uFF08/\uFF09"},placeholder:"/Dockerfile"})}}}),x=="zip"&&(0,e.jsx)(k,{label:"\u4E0A\u4F20\u6784\u5EFA\u5305 (\u53EA\u5141\u8BB8\u4E0A\u4F20 .zip \u6587\u4EF6\uFF0C\u4E14\u4E0E\u5305\u4E2D\u7684 Dockerfile \u6307\u5B9A\u7684\u76EE\u5F55\u4FDD\u6301\u4E00\u81F4)",name:"buildZip",accept:".zip"}),x=="containerTar"&&(0,e.jsx)(k,{label:"\u5BFC\u5165\u5BB9\u5668\u5305\uFF08\u53EA\u5141\u8BB8\u4E0A\u4F20 .tar \u6587\u4EF6\uFF0C\u901A\u8FC7\u5BFC\u51FA\u5BB9\u5668\u751F\u6210\uFF09",name:"containerTar",accept:".tar"}),x=="imageTar"&&(0,e.jsx)(k,{label:"\u5BFC\u5165\u955C\u50CF\u5305\uFF08\u53EA\u5141\u8BB8\u4E0A\u4F20 .tar \u6587\u4EF6\uFF0C\u901A\u8FC7\u5BFC\u51FA\u955C\u50CF\u751F\u6210\uFF09",name:"imageTar",accept:".tar"}),x=="git"&&(0,e.jsx)(P,{}),x=="dockerfile"&&(0,e.jsx)(pe,{createFormRef:E})]})}):(0,e.jsx)(H,{imageId:se})})}},97961:function(V,U,u){u.d(U,{MF:function(){return C},_2:function(){return k},fN:function(){return A},hG:function(){return y},vC:function(){return e}});var L=u(15009),t=u.n(L),W=u(99289),c=u.n(W),m=u(54006);function A(o){return h.apply(this,arguments)}function h(){return h=c()(t()().mark(function o(n){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,m.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:n}));case 1:case"end":return s.stop()}},o)})),h.apply(this,arguments)}function e(o){return P.apply(this,arguments)}function P(){return P=c()(t()().mark(function o(n){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,m.request)("/api/app/image/import-by-container-tar",{method:"POST",data:n}));case 1:case"end":return s.stop()}},o)})),P.apply(this,arguments)}function y(o){return O.apply(this,arguments)}function O(){return O=c()(t()().mark(function o(n){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,m.request)("/api/app/image/import-by-image-tar",{method:"POST",data:n}));case 1:case"end":return s.stop()}},o)})),O.apply(this,arguments)}function k(o){return T.apply(this,arguments)}function T(){return T=c()(t()().mark(function o(n){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,m.request)("/api/common/attach/delete",{method:"POST",data:n});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},o)})),T.apply(this,arguments)}function C(){return g.apply(this,arguments)}function g(){return g=c()(t()().mark(function o(){return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,m.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return d.stop()}},o)})),g.apply(this,arguments)}},18148:function(V,U,u){u.d(U,{$q:function(){return C},Fj:function(){return Y},KG:function(){return A},KX:function(){return J},T8:function(){return k},Xn:function(){return y},ao:function(){return o},c5:function(){return H},c7:function(){return d}});var L=u(15009),t=u.n(L),W=u(99289),c=u.n(W),m=u(54006);function A(i){return h.apply(this,arguments)}function h(){return h=c()(t()().mark(function i(B){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.request)("/api/app/image/get-list",{method:"POST",data:B}));case 1:case"end":return r.stop()}},i)})),h.apply(this,arguments)}function e(i){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function i(B){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,request("/api/app/log/image-build",{method:"POST",data:B});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},i)})),P.apply(this,arguments)}function y(i){return O.apply(this,arguments)}function O(){return O=c()(t()().mark(function i(B){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.request)("/api/app/image/get-list-build",{method:"POST",data:B}));case 1:case"end":return r.stop()}},i)})),O.apply(this,arguments)}function k(i){return T.apply(this,arguments)}function T(){return T=c()(t()().mark(function i(B){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,m.request)("/api/app/image/get-build-task",{method:"POST",data:B});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},i)})),T.apply(this,arguments)}function C(i){return g.apply(this,arguments)}function g(){return g=c()(t()().mark(function i(B){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,m.request)("/api/app/image/delete-build-task",{method:"POST",data:B});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},i)})),g.apply(this,arguments)}function o(i){return n.apply(this,arguments)}function n(){return n=c()(t()().mark(function i(B){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,m.request)("/api/app/image/image-delete",{method:"POST",data:B});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},i)})),n.apply(this,arguments)}function d(){return s.apply(this,arguments)}function s(){return s=c()(t()().mark(function i(){return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,m.request)("/api/app/image/image-prune",{method:"POST"});case 2:return _.abrupt("return",_.sent);case 3:case"end":return _.stop()}},i)})),s.apply(this,arguments)}function H(){return w.apply(this,arguments)}function w(){return w=c()(t()().mark(function i(){return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,m.request)("/api/app/image/build-prune",{method:"POST"});case 2:return _.abrupt("return",_.sent);case 3:case"end":return _.stop()}},i)})),w.apply(this,arguments)}function Y(i){return G.apply(this,arguments)}function G(){return G=c()(t()().mark(function i(B){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,m.request)("/api/app/image/update-title",{method:"POST",data:B});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},i)})),G.apply(this,arguments)}function J(i){return N.apply(this,arguments)}function N(){return N=c()(t()().mark(function i(B){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.request)("/api/app/image/tag-sync",{method:"POST",data:B}));case 1:case"end":return r.stop()}},i)})),N.apply(this,arguments)}},75870:function(V,U,u){u.d(U,{Ot:function(){return A},ZH:function(){return e},ix:function(){return y},t1:function(){return k}});var L=u(15009),t=u.n(L),W=u(99289),c=u.n(W),m=u(54006);function A(C){return h.apply(this,arguments)}function h(){return h=c()(t()().mark(function C(g){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/common/registry/get-list",{method:"POST",data:g}));case 1:case"end":return n.stop()}},C)})),h.apply(this,arguments)}function e(C){return P.apply(this,arguments)}function P(){return P=c()(t()().mark(function C(g){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/common/registry/create",{method:"POST",data:g}));case 1:case"end":return n.stop()}},C)})),P.apply(this,arguments)}function y(C){return O.apply(this,arguments)}function O(){return O=c()(t()().mark(function C(g){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/common/registry/delete",{method:"POST",data:g}));case 1:case"end":return n.stop()}},C)})),O.apply(this,arguments)}function k(C){return T.apply(this,arguments)}function T(){return T=c()(t()().mark(function C(g){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/common/registry/get-detail",{method:"POST",data:g}));case 1:case"end":return n.stop()}},C)})),T.apply(this,arguments)}}}]);