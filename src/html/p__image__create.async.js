"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7523],{71566:function(Y,U,e){e.d(U,{Z:function(){return l}});var x=e(62435),t=e(93246),W=e(88484),m=e(31418),g=e(72723),_=e(14726),r=e(86074);function a(O){var B=(0,x.useRef)(null),i=m.Z.useApp(),o=function(){B.current&&(B.current.click(),B.current.onchange=function(u){if(!u||!u.target)return"";var F=new FileReader;F.onload=function(A){var D,N=(D=A.target)===null||D===void 0?void 0:D.result;if(N.indexOf("FROM ")<0){(0,t.YZ)(i,"\u5BFC\u5165Dockerfile\u6587\u4EF6\u9519\u8BEF");return}typeof O.onImport=="function"&&O.onImport(N)};var k=u.target;if(k.files)try{F.readAsText(k.files[0])}catch(A){(0,t.YZ)(i,"\u5BFC\u5165\u6587\u4EF6\u5FC5\u987B\u662F\u6587\u672C\u7C7B\u578B")}})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z.Item,{name:"importFile",label:"Dockerfile",children:(0,r.jsx)(_.ZP,{icon:(0,r.jsx)(W.Z,{}),block:!0,onClick:o,children:"\u5BFC\u5165\u672C\u5730Dockerfile\u6587\u4EF6"})}),(0,r.jsx)("input",{style:{display:"none"},type:"file",ref:B,name:"importFileInput"})]})}var b=e(20713),y=e(62370),T=e(5574),R=e.n(T),v=e(184),h=e(86615),f=e(97462),c=e(97961),n=e(34041);function d(O){var B=(0,x.useState)([]),i=R()(B,2),o=i[0],p=i[1];return(0,x.useEffect)(function(){(0,c.MF)().then(function(u){var F=Object.keys(u.data).map(function(k){return u.data[k]});p(F)})},[]),(0,r.jsx)(y.Z,{children:(0,r.jsxs)(v.a,{trigger:(0,r.jsx)(_.ZP,{block:!0,children:"\u4F7F\u7528\u6A21\u677F\u751F\u6210"}),onFinish:function(F){return new Promise(function(k,A){var D=F[F.language+"EnvVersion"].split("|"),N=R()(D,2),Q=N[0],j=N[1],I="FROM ".concat(Q,`
# \u5E94\u7528\u76EE\u5F55\u4F4D\u4E8E /app
# \u53EF\u901A\u7BA1\u5BB9\u5668 - \u6587\u4EF6\u7BA1\u7406, \u4E0A\u4F20\u4EE3\u7801\u81F3\u6B64\u76EE\u5F55\u5E76\u4FEE\u6539\u6743\u9650

WORKDIR /app
VOLUME [ "/app" ]
EXPOSE 80

# \u81EA\u5B9A\u4E49\u5B89\u88C5\u7EC4\u4EF6\u3001\u6269\u5C55\u6216\u662F\u5E93, \u4F8B\u5982:
# RUN apk add --no-cache --update vim
`);switch(F.language){case"php":I+=`
                
# \u7AD9\u70B9\u76EE\u5F55\u4F4D\u4E8E /app/wwwroot \u53EF\u4E0A\u4F20\u6216\u662F\u4FEE\u6539\u7AD9\u70B9\u6587\u4EF6
# nginx \u914D\u7F6E\u4F4D\u4E8E /app/nginx/ \u53EF\u4FEE\u6539\u589E\u52A0\u81EA\u5B9A\u4E49\u914D\u7F6E
# \u901A\u8FC7\u8BBF\u95EE\u5BB9\u5668\u8FD0\u884C\u6620\u5C04\u7AEF\u53E3\uFF0C\u67E5\u770B\u73AF\u5883\u53CA\u6269\u5C55\u4FE1\u606F

`,F.language=="php"&&F.phpExt&&(I+="RUN apk add --no-cache --update ",F.phpExt.map(function(M){I+="php".concat(j,"-").concat(M," ")}));break;case"golang":I+=`
# \u53EF\u4EE5\u4FEE\u6539 RUN_COMMAND \u73AF\u5883\u53D8\u91CF, \u66F4\u6539\u542F\u52A8\u6267\u884C\u547D\u4EE4
ENV RUN_COMMAND="go version"`;break;default:break}O.onFinish(I),k(!0)})},children:[(0,r.jsx)(h.Z.Group,{radioType:"button",name:"language",label:"\u7A0B\u5E8F\u8BED\u8A00",options:o.map(function(u){return{label:u.name,value:u.name}}),required:!0}),(0,r.jsx)(f.Z,{name:["language"],children:function(F){var k=F.language;return k?(0,r.jsx)(r.Fragment,{children:o.map(function(A){if(A.name==k)return(0,r.jsxs)("div",{children:[(0,r.jsx)(y.Z,{name:"".concat(A.name,"EnvVersion"),label:"\u73AF\u5883\u7248\u672C",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7A0B\u5E8F\u8FD0\u884C\u7684\u73AF\u5883"}],children:(0,r.jsx)(n.Z,{options:A.env.map(function(D){return{label:D.name,value:D.baseImage}}),placeholder:"\u8BF7\u9009\u62E9\u5177\u4F53\u7684\u73AF\u5883\u7248\u672C"},"".concat(A.name,"Select"))},A.name),A.name=="php"&&(0,r.jsx)(y.Z,{label:"php\u6269\u5C55",name:"phpExt",children:(0,r.jsx)(n.Z,{options:A.ext.map(function(D){return{label:D,value:D}}),mode:"multiple",placeholder:"\u8BF7\u9009\u62E9\u8981\u5B89\u88C5\u7684php\u6269\u5C55"},"phpExtSelect")},"phpExt")]},"envSelect")})}):(0,r.jsx)(r.Fragment,{})}})]})})}function l(O){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{onImport:function(i){var o;return(o=O.createFormRef.current)===null||o===void 0||o.setFieldValue("buildDockerfile",i),!0}}),(0,r.jsx)(d,{onFinish:function(i){var o;(o=O.createFormRef.current)===null||o===void 0||o.setFieldValue("buildDockerfile",i)}}),(0,r.jsx)(y.Z,{shouldUpdate:!0,children:function(i){var o=i.getFieldValue;return(0,r.jsx)(y.Z,{name:"buildDockerfile",children:(0,r.jsx)(b.ZP,{value:o("buildDockerfile"),onChange:function(u){var F;(F=O.createFormRef.current)===null||F===void 0||F.setFieldValue("buildDockerfile",u)},height:"1000px",theme:"light",style:{marginBottom:"20px"}})})}})]})}},33867:function(Y,U,e){e.r(U),e.d(U,{default:function(){return Q}});var x=e(15009),t=e.n(x),W=e(99289),m=e.n(W),g=e(5574),_=e.n(g),r=e(5966),a=e(86074);function b(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Z,{fieldProps:{min:2,max:255},rules:[{required:!0}],required:!0,placeholder:"\u6307\u5B9AGit\u5730\u5740\uFF0C\u79C1\u6709\u4ED3\u5E93\u8BF7\u9644\u52A0\u6743\u9650\u3002\u4EC5\u652F\u6301Master\u5206\u652F",label:"Git\u4ED3\u5E93\u5730\u5740",name:"buildGit"})})}var y=e(97961),T=e(1677);function R(j){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(T.Z,{max:1,label:j.label,required:!0,rules:[{required:!0}],fieldProps:{name:"file",accept:j.accept,action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function(M){return new Promise(function($){var G;(0,y._2)({path:(G=M.response.data.path)!==null&&G!==void 0?G:""}).then(function(H){$(!0)})})}},name:j.name})})}var v=e(38345),h=e(20713),f=e(54006),c=e(78957),n=e(14726),d=e(62435),l="";function O(j){(0,d.useEffect)(function(){l=""},[j]);var I=(0,f.useNavigate)(),M=(0,d.useState)(""),$=_()(M,2),G=$[0],H=$[1],S=(0,d.useRef)({}),w=(0,f.useModel)("subscriber");return(0,d.useEffect)(function(){w.addDataHandler("imageBuild",function(){var X=w.getDataByType("imageBuild");if(X&&(X.map(function(Z){Z.data.TaskId=="".concat(j.imageId)&&Z.data.Stream&&(l+=Z.data.Stream.stream)}),H(l),S&&S.current&&S.current.view)){var V;(V=S.current.view)===null||V===void 0||V.scrollDOM.scroll(0,99999)}})},[S.current]),(0,a.jsxs)(v.Z,{title:"\u6784\u5EFA\u65E5\u5FD7",subTitle:"\u4F60\u4E5F\u53EF\u4EE5\u8DF3\u8F6C\u81F3\u5217\u8868\u9875\uFF0C\u7B49\u5F85\u67E5\u770B\u6784\u5EFA\u65E5\u5FD7",children:[(0,a.jsx)(h.ZP,{ref:S,theme:"dark",style:{marginTop:"10px",backgroundColor:"#282c34"},height:"500px",value:G}),(0,a.jsx)(c.Z,{style:{marginTop:10},children:(0,a.jsx)(n.ZP,{type:"primary",onClick:function(){I("/image/list")},children:"\u5B8C\u6210&\u8DF3\u8F6C\u81F3\u5217\u8868"})})]})}var B=e(71566),i=e(75870),o=e(97462),p=e(34041),u=e(25449);function F(j){var I=(0,d.useState)(""),M=_()(I,2),$=M[0],G=M[1],H=(0,d.useState)([]),S=_()(H,2),w=S[0],X=S[1],V=function(E){var P=String(E);P!=""&&(P+="/"),G(P)};return(0,d.useEffect)(function(){var Z=[{value:"",label:"\u672C\u5730"}];(0,i.Ot)().then(function(E){E&&E.data.list.map(function(P){P.username=="anonymous"&&!j.showAnonymous||Z.push({value:P.serverAddress,label:P.title+"("+P.serverAddress+")"})}),X(Z)})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.Z,{label:"\u955C\u50CF\u4ED3\u5E93",tooltip:(0,a.jsxs)(a.Fragment,{children:["\u63A8\u9001\u524D\u8BF7\u4FDD\u8BC1\u4ED3\u5E93\u4E2D\u6709\u6307\u5B9A\u7684\u547D\u540D\u7A7A\u95F4, \u5982\u6CA1\u6709\u8BF7\u5148 ",(0,a.jsx)("a",{href:"",target:"_blank",children:"\u6DFB\u52A0\u4ED3\u5E93"})]}),name:"imageRegistry",initialValue:"",children:(0,a.jsx)(p.Z,{onChange:function(E){V(E)},options:w})}),(0,a.jsx)(o.Z,{name:["imageRegistry"],children:function(E){var P=E.imageRegistry;return(0,a.jsx)(r.Z,{fieldProps:{min:2,max:255,addonBefore:$||P},rules:[{required:!0}],required:!0,tooltip:"\u4F8B\u5982: name:tag\u3001namespace/name:tag\u3001registry/namespace/name:tag",placeholder:"\u53EA\u80FD\u4F7F\u7528\u5C0F\u5199\u82F1\u6587\u5B57\u7B26\u3001\u6570\u5B57\u3001_\u3001-\u3001",label:"\u955C\u50CF\u540D\u79F0",name:"imageTag"})}})]})}var k=e(18148),A=e(97269),D=e(2236),N=e(86615);function Q(){var j=(0,d.useRef)(),I=(0,d.useState)([]),M=_()(I,2),$=M[0],G=M[1],H=(0,f.useSearchParams)(),S=_()(H,2),w=S[0],X=S[1],V=(0,d.useState)("dockerfile"),Z=_()(V,2),E=Z[0],P=Z[1],ae=(0,f.useNavigate)(),le=(0,d.useState)(0),te=_()(le,2),ne=te[0],oe=te[1];return(0,d.useEffect)(function(){var K,L=(K=w.get("id"))!==null&&K!==void 0?K:0;L&&(0,k.T8)({id:parseInt(L)}).then(function(s){var z;P(s.data.task.buildType),s.data.task.buildZip&&G([{name:s.data.task.buildZip,fileName:s.data.task.buildZip,uid:"".concat(s.data.task.id),type:"zip",response:{data:{path:s.data.task.buildZip}}}]),(z=j.current)===null||z===void 0||z.setFieldsValue({imageTag:s.data.task.tag,imageRegistry:s.data.task.registry,uploadType:s.data.task.buildType,buildRoot:s.data.task.buildRoot,buildGit:s.data.task.buildGit,buildDockerfile:s.data.task.buildDockerfile})})},[]),(0,a.jsx)(v.Z,{direction:"column",ghost:!0,gutter:[0,10],children:ne==0?(0,a.jsx)(v.Z,{bordered:!0,headerBordered:!0,children:(0,a.jsxs)(A.A,{submitter:{render:function(L,s){return(0,a.jsx)(D.S,{children:s})}},onFinish:function(){var K=m()(t()().mark(function L(s){var z,de,q,pe,ee,ie,J,ue,re,se;return t()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(E!="containerTar"){C.next=8;break}return C.next=3,(0,y.vC)({tag:s.imageTag,registry:s.imageRegistry,tar:(z=s.containerTar[0].response.data.path)!==null&&z!==void 0?z:"",cmd:s.cmd});case 3:return de=C.sent,ae("/image/list"),C.abrupt("return",!0);case 8:if(E!="imageTar"){C.next=16;break}return C.next=11,(0,y.hG)({tag:s.imageTag,registry:s.imageRegistry,tar:(q=s.imageTar[0].response.data.path)!==null&&q!==void 0?q:""});case 11:return pe=C.sent,ae("/image/list"),C.abrupt("return",!0);case 16:return ie=(ee=w.get("id"))!==null&&ee!==void 0?ee:"0",J=$&&$[0]?$[0].fileName:"",ue={id:parseInt(ie),tag:s.imageTag,registry:s.imageRegistry,buildRoot:s.buildRoot,buildDockerfile:s.buildDockerfile,buildZip:J!=null?J:"",buildGit:s.buildGit,buildTemplate:"",buildType:E},s.buildZip&&s.buildZip.length>0&&(ue.buildZip=(re=s.buildZip[0].response.data.path)!==null&&re!==void 0?re:""),C.next=22,(0,y.fN)(ue);case 22:return se=C.sent,oe(se.data.imageId),C.abrupt("return",!1);case 25:case"end":return C.stop()}},L)}));return function(L){return K.apply(this,arguments)}}(),formRef:j,children:[(0,a.jsx)(F,{showAnonymous:!1}),(0,a.jsx)(o.Z,{name:["uploadType"],children:function(L){var s=L.uploadType;if(s=="containerTar")return[(0,a.jsx)(r.Z,{required:!0,tooltip:"\u901A\u8FC7\u5BB9\u5668\u5BFC\u5165\u955C\u50CF\u65F6\uFF0C\u5FC5\u987B\u6307\u5B9A\u542F\u52A8\u547D\u4EE4\uFF0C\u5426\u5219\u518D\u521B\u5EFA\u65F6\u65E0\u6CD5\u542F\u52A8",rules:[{required:!0}],label:"CMD",name:"cmd"})];if(s!="imageTar")return(0,a.jsx)(r.Z,{name:"buildRoot",label:"\u6784\u5EFA\u76EE\u5F55",tooltip:"\u6784\u5EFA\u76EE\u5F55\u662F\u6307Dockerfile\u6240\u5728\u7684\u5B50\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u4E3A\u6839\u76EE\u5F55\u5F00\u59CB",fieldProps:{addonBefore:"\u9ED8\u8BA4\u4E3A\u5305\u5185\u76EE\u5F55\u5F00\u59CB\uFF08./\uFF09"}})}}),(0,a.jsx)(N.Z.Group,{name:"uploadType",label:"\u6784\u5EFA\u65B9\u5F0F",initialValue:E,options:[{label:"Dockerfile",value:"dockerfile"},{label:"Zip\u6E90\u7801\u5305",value:"zip"},{label:"Git\u6E90\u7801\u4ED3\u5E93",value:"git"},{label:"\u5BFC\u5165\u5BB9\u5668Tar\u5305",value:"containerTar"},{label:"\u5BFC\u5165\u955C\u50CFTar\u5305",value:"imageTar"}],fieldProps:{onChange:function(L){P(L.target.value)}}}),E=="zip"&&(0,a.jsx)(R,{label:"\u4E0A\u4F20\u6784\u5EFA\u5305 (\u53EA\u5141\u8BB8\u4E0A\u4F20 .zip \u6587\u4EF6\uFF0C\u4E14\u4E0E\u5305\u4E2D\u7684 Dockerfile \u6307\u5B9A\u7684\u76EE\u5F55\u4FDD\u6301\u4E00\u81F4)",name:"buildZip",accept:".zip"}),E=="containerTar"&&(0,a.jsx)(R,{label:"\u5BFC\u5165\u5BB9\u5668\u5305\uFF08\u53EA\u5141\u8BB8\u4E0A\u4F20 .tar \u6587\u4EF6\uFF0C\u901A\u8FC7\u5BFC\u51FA\u5BB9\u5668\u751F\u6210\uFF09",name:"containerTar",accept:".tar"}),E=="imageTar"&&(0,a.jsx)(R,{label:"\u5BFC\u5165\u955C\u50CF\u5305\uFF08\u53EA\u5141\u8BB8\u4E0A\u4F20 .tar \u6587\u4EF6\uFF0C\u901A\u8FC7\u5BFC\u51FA\u955C\u50CF\u751F\u6210\uFF09",name:"imageTar",accept:".tar"}),E=="git"&&(0,a.jsx)(b,{}),E=="dockerfile"&&(0,a.jsx)(B.Z,{createFormRef:j})]})}):(0,a.jsx)(O,{imageId:ne})})}},97961:function(Y,U,e){e.d(U,{MF:function(){return h},_2:function(){return R},fN:function(){return _},hG:function(){return y},vC:function(){return a}});var x=e(15009),t=e.n(x),W=e(99289),m=e.n(W),g=e(54006);function _(c){return r.apply(this,arguments)}function r(){return r=m()(t()().mark(function c(n){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,g.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:n}));case 1:case"end":return l.stop()}},c)})),r.apply(this,arguments)}function a(c){return b.apply(this,arguments)}function b(){return b=m()(t()().mark(function c(n){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,g.request)("/api/app/image/import-by-container-tar",{method:"POST",data:n}));case 1:case"end":return l.stop()}},c)})),b.apply(this,arguments)}function y(c){return T.apply(this,arguments)}function T(){return T=m()(t()().mark(function c(n){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,g.request)("/api/app/image/import-by-image-tar",{method:"POST",data:n}));case 1:case"end":return l.stop()}},c)})),T.apply(this,arguments)}function R(c){return v.apply(this,arguments)}function v(){return v=m()(t()().mark(function c(n){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,g.request)("/api/common/attach/delete",{method:"POST",data:n});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},c)})),v.apply(this,arguments)}function h(){return f.apply(this,arguments)}function f(){return f=m()(t()().mark(function c(){return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,g.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return d.stop()}},c)})),f.apply(this,arguments)}},18148:function(Y,U,e){e.d(U,{$q:function(){return h},KG:function(){return _},T8:function(){return R},Xn:function(){return y},ao:function(){return c},c5:function(){return O},c7:function(){return d}});var x=e(15009),t=e.n(x),W=e(99289),m=e.n(W),g=e(54006);function _(i){return r.apply(this,arguments)}function r(){return r=m()(t()().mark(function i(o){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,g.request)("/api/app/image/get-list",{method:"POST",data:o}));case 1:case"end":return u.stop()}},i)})),r.apply(this,arguments)}function a(i){return b.apply(this,arguments)}function b(){return b=_asyncToGenerator(_regeneratorRuntime().mark(function i(o){return _regeneratorRuntime().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,request("/api/app/log/image-build",{method:"POST",data:o});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},i)})),b.apply(this,arguments)}function y(i){return T.apply(this,arguments)}function T(){return T=m()(t()().mark(function i(o){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,g.request)("/api/app/image/get-list-build",{method:"POST",data:o}));case 1:case"end":return u.stop()}},i)})),T.apply(this,arguments)}function R(i){return v.apply(this,arguments)}function v(){return v=m()(t()().mark(function i(o){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,g.request)("/api/app/image/get-build-task",{method:"POST",data:o});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},i)})),v.apply(this,arguments)}function h(i){return f.apply(this,arguments)}function f(){return f=m()(t()().mark(function i(o){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,g.request)("/api/app/image/delete-build-task",{method:"POST",data:o});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},i)})),f.apply(this,arguments)}function c(i){return n.apply(this,arguments)}function n(){return n=m()(t()().mark(function i(o){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,g.request)("/api/app/image/image-delete",{method:"POST",data:o});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},i)})),n.apply(this,arguments)}function d(){return l.apply(this,arguments)}function l(){return l=m()(t()().mark(function i(){return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,g.request)("/api/app/image/image-prune",{method:"POST"});case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},i)})),l.apply(this,arguments)}function O(){return B.apply(this,arguments)}function B(){return B=m()(t()().mark(function i(){return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,g.request)("/api/app/image/build-prune",{method:"POST"});case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},i)})),B.apply(this,arguments)}},75870:function(Y,U,e){e.d(U,{Ot:function(){return _},ZH:function(){return a},ix:function(){return y},t1:function(){return R}});var x=e(15009),t=e.n(x),W=e(99289),m=e.n(W),g=e(54006);function _(h){return r.apply(this,arguments)}function r(){return r=m()(t()().mark(function h(f){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/common/registry/get-list",{method:"POST",data:f}));case 1:case"end":return n.stop()}},h)})),r.apply(this,arguments)}function a(h){return b.apply(this,arguments)}function b(){return b=m()(t()().mark(function h(f){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/common/registry/create",{method:"POST",data:f}));case 1:case"end":return n.stop()}},h)})),b.apply(this,arguments)}function y(h){return T.apply(this,arguments)}function T(){return T=m()(t()().mark(function h(f){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/common/registry/delete",{method:"POST",data:f}));case 1:case"end":return n.stop()}},h)})),T.apply(this,arguments)}function R(h){return v.apply(this,arguments)}function v(){return v=m()(t()().mark(function h(f){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/common/registry/get-detail",{method:"POST",data:f}));case 1:case"end":return n.stop()}},h)})),v.apply(this,arguments)}}}]);
