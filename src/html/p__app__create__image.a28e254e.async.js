"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3985],{44771:function(te,H,t){t.d(H,{Z:function(){return y}});var z=t(34041),a=t(25449),q=t(62435),g=t(86074);function y(O){return(0,g.jsx)(a.Z,{name:"restart",initialValue:O.defaultValue?O.defaultValue:"on-failure",children:(0,g.jsx)(z.Z,{options:[{value:"no",label:"\u4E0D\u91CD\u542F"},{value:"on-failure",label:"\u975E\u6B63\u5E38\u9000\u51FA\u65F6,\u6700\u591A5\u6B21 - on failure"},{value:"unless-stopped",label:"\u9000\u51FA\u540E\u91CD\u542F\uFF0C\u4E0D\u5305\u62EC\u624B\u52A8\u505C\u6B62\u7684 - unless stopped"},{value:"always",label:"\u603B\u662F\u9000\u51FA\u540E\u91CD\u542F - always"}]})})}},35880:function(te,H,t){var z=t(62435),a=(0,z.createContext)({});H.Z=a},33369:function(te,H,t){t.r(H),t.d(H,{default:function(){return Je}});var z=t(15009),a=t.n(z),q=t(99289),g=t.n(q),y=t(5574),O=t.n(y),W=t(6110),L=t(38345),$=t(97269),Q=t(2236),P=t(5966),M=t(97462),Y=t(92398),m=t(62435),K=t(35880),J=t(62370),V=t(12010),o=t(78957),_=t(14726),k=t(85576),r=t(75891),A=t(96074),U=t(83062),G=t(3393),d=t(18148),ge=t(5251),se=t(64789),Ee=t(75162),_e=t(28307),e=t(86074);function je(E){var S=(0,m.useState)(!1),j=O()(S,2),w=j[0],F=j[1],C=(0,m.useRef)(),p=(0,m.useContext)(K.Z),I=p.createFormRef,x=p.volumeListRef,v=p.createEnvRef,i=p.domainRef,n=(0,m.useRef)(),f=function(){var h=g()(a()().mark(function s(u){var l,Z,b,D,N,T,c,B,R,X,le;return a()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return F(!1),re.next=3,(0,G.YU)({md5:u});case 3:D=re.sent,E.redeploy||(B=(N=I.current)===null||N===void 0?void 0:N.getFieldsValue(),(T=I.current)===null||T===void 0||T.resetFields(),(c=I.current)===null||c===void 0||c.setFieldsValue({siteName:B.siteName,siteTitle:B.siteTitle})),D.data.info.Config.Env&&D.data.info.Config.Env.map(function(oe){var ue,he=oe.split("=");(ue=v.current)===null||ue===void 0||ue.addEnvItem(he[0],he[1])}),(l=I.current)===null||l===void 0||l.setFieldValue("imageName",D.data.info.RepoTags[0]),(Z=I.current)===null||Z===void 0||Z.setFieldValue("workDir",D.data.info.Config.WorkingDir),(b=i.current)===null||b===void 0||b.setExposePort(D.data.info.Config.ExposedPorts),D.data.info.Config.Volumes?(X=[],Object.keys(D.data.info.Config.Volumes).map(function(oe,ue){X.push(oe)}),(R=x.current)===null||R===void 0||R.setDefaultDestPath(X)):(le=x.current)===null||le===void 0||le.setDefaultDestPath([]);case 10:case"end":return re.stop()}},s)}));return function(u){return h.apply(this,arguments)}}();return(0,m.useEffect)(function(){E.fromImageId&&f(E.fromImageId)},[E.fromImageId]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(o.Z.Compact,{children:[(0,e.jsx)(P.Z,{label:"\u955C\u50CF",tooltip:E.redeploy?"\u66F4\u65B0\u5BB9\u5668\u65F6,\u53EA\u53EF\u4EE5\u9009\u62E9\u8BE5\u955C\u50CF\u4E0B\u7684\u4E0D\u540Ctag.\u4E5F\u53EF\u4EE5\u5F3A\u5236\u66F4\u65B0\u5DF2\u90E8\u7F72tag,\u66F4\u6B21\u90E8\u7F72":"\u65B0\u5EFA\u5BB9\u5668\u65F6,\u53EF\u4EE5\u4F7F\u7528\u672C\u5730\u955C\u50CF,\u4E5F\u53EF\u4EE5\u4E0B\u8F7D\u5168\u65B0\u7684\u955C\u50CF\u6216\u662F\u66F4\u65B0\u672C\u5730\u955C\u50CF\u7684tag",name:"imageName",width:"lg",disabled:!0,placeholder:"\u8BF7\u9009\u62E9\u955C\u50CF\uFF0C\u5982\u679C\u662F\u8FDC\u7A0B\u955C\u50CF\u8BF7\u5148\u4E0B\u8F7D",rules:[{required:!0}],required:!0}),(0,e.jsx)(J.Z,{label:" ",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(_.ZP,{type:"primary",onClick:function(){return F(!0)},children:E.redeploy?"\u66F4\u65B0\u955C\u50CF":"\u9009\u62E9\u955C\u50CF"},"showBtn"),(0,e.jsx)(k.Z,{open:w,width:1024,title:"\u9009\u62E9\u955C\u50CF",footer:!1,onCancel:function(){return F(!1)},children:(0,e.jsx)(V.Z,{columns:[{title:"Id",dataIndex:"Id",ellipsis:!0,search:!1,width:150},{title:"\u955C\u50CF\u540D\u79F0",dataIndex:"tag",render:function(s,u,l,Z){return(0,e.jsx)(r.Z.Text,{code:!0,copyable:!0,children:u.RepoTags[0]},u.RepoTags[0])}},{title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"Created",ellipsis:!0,search:!1,width:"180px",render:function(s,u,l,Z){return(0,e.jsx)("div",{children:(0,ge.ZM)(u.Created*1e3)},u.Id)},sorter:function(s,u){return s.Created-u.Created}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:"100px",render:function(s,u,l,Z){return(0,e.jsxs)(o.Z,{split:(0,e.jsx)(A.Z,{type:"vertical"}),children:[(0,e.jsx)(_.ZP,{size:"small",onClick:g()(a()().mark(function b(){return a()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.abrupt("return",f(u.Id));case 1:case"end":return N.stop()}},b)})),type:"link",icon:(0,e.jsx)(U.Z,{title:"\u4F7F\u7528\u955C\u50CF",children:(0,e.jsx)(se.Z,{})})},"addImage"),(0,e.jsx)(_.ZP,{size:"small",onClick:g()(a()().mark(function b(){var D;return a()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:u.RepoTags[0]&&((D=n.current)===null||D===void 0||D.setImageName(u.RepoTags[0]));case 1:case"end":return T.stop()}},b)})),type:"link",icon:(0,e.jsx)(U.Z,{title:"\u66F4\u65B0\u7248\u672C",children:(0,e.jsx)(Ee.Z,{})})},"updateImage")]})}}],request:function(){var h=g()(a()().mark(function s(u,l,Z){var b,D,N,T;return a()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return E.redeploy&&(D=(b=I.current)===null||b===void 0?void 0:b.getFieldValue("imageName"),u.tag=D?D.split(":")[0]:u.tag),B.next=3,(0,d.KG)({tag:u.tag});case 3:return N=B.sent,T=[],N.data.list&&(T=N.data.list.flatMap(function(R){return R.RepoTags.map(function(X){return{Id:R.Id,Created:R.Created,RepoTags:[X]}})})),B.abrupt("return",{data:T,success:!0,total:T.length});case 7:case"end":return B.stop()}},s)}));return function(s,u,l){return h.apply(this,arguments)}}(),toolBarRender:function(){return[(0,e.jsx)(_e.Z,{ref:n,onFinish:function(u){var l,Z;(l=C.current)===null||l===void 0||l.setFieldValue("tag",u),(Z=C.current)===null||Z===void 0||Z.submit()}},"remote")]},formRef:C,rowKey:"Id",pagination:{pageSize:5}})},"imageTableList")]})})]})})}var ie=t(60335),Fe=t(24969),Ce=t(27496),ne=t(24739),xe=t(63434),ee=t(17186),de=t(66309),De=(0,m.forwardRef)(function(E,S){var j=(0,m.useState)(!1),w=O()(j,2),F=w[0],C=w[1],p=(0,m.useRef)(),I=function(i){var n=(0,m.useState)([]),f=O()(n,2),h=f[0],s=f[1];return(0,m.useEffect)(function(){(0,ie.jV)({md5:i.name}).then(function(u){var l;return s((l=u.data.info.Config.Env)!==null&&l!==void 0?l:[]),!0})},[]),(0,e.jsxs)(L.Z,{bordered:!0,extra:i.action,style:{marginBottom:10},children:[(0,e.jsx)(L.Z,{title:"\u5173\u8054\u4FE1\u606F",children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(P.Z,{label:"\u5BB9\u5668\u540D\u79F0",name:"name",width:"md",readonly:!0}),(0,e.jsx)(P.Z,{label:"\u8BBF\u95EEHostName",name:"alise",width:"md",tooltip:"\u901A\u8FC7\u914D\u7F6E\u6B64\u540D\u79F0\uFF0C\u5728\u5BB9\u5668\u5185\u90E8\u8FDB\u884C\u8BF7\u6C42\u8BBF\u95EE"}),(0,e.jsx)(xe.Z,{label:"\u5173\u8054\u5B58\u50A8",name:"volume"})]})}),(0,e.jsx)(L.Z,{title:"\u73AF\u5883\u53D8\u91CF",children:(0,e.jsx)(o.Z,{direction:"vertical",children:h&&h.map(function(u,l){return(0,e.jsx)(r.Z.Text,{copyable:{icon:(0,e.jsx)(Fe.Z,{}),onCopy:function(){var b=u.split("=");E.onAddEnv(b[0],b[1])},tooltips:["add env","success"]},code:!0,ellipsis:{tooltip:u},style:{width:300},children:u},l)})},"linkEnv")})]})},x=function(i){var n,f,h=!1,s=(n=(f=p.current)===null||f===void 0?void 0:f.getList())!==null&&n!==void 0?n:[];if(s.map(function(l){l.name==i.name&&(h=!0)}),!h){var u;(u=p.current)===null||u===void 0||u.add(i)}};return(0,m.useImperativeHandle)(S,function(){return{setDefaultLink:function(i){i&&i.map(function(n){n.name!=""&&x(n)})}}}),(0,e.jsxs)(L.Z,{title:"\u5173\u8054\u5BB9\u5668",headerBordered:!0,children:[(0,e.jsx)(ee.u,{name:"links",actionRef:p,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5173\u8054"},actionGuard:{beforeAddRow:function(i,n){return C(!0),!1}},copyIconProps:!1,min:0,itemRender:function(i,n){return(0,e.jsx)(I,{action:i.action,name:n.record.name})}}),(0,e.jsx)(k.Z,{title:"\u9009\u62E9\u5BB9\u5668",width:1024,footer:!1,open:F,onCancel:function(){return C(!1)},children:(0,e.jsx)(V.Z,{columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"names",render:function(i,n,f,h){return(0,e.jsx)(o.Z,{direction:"vertical",style:{textAlign:"left"},children:n==null?void 0:n.Names.map(function(s){return s})},n.Id)}},{title:"\u7AEF\u53E3",dataIndex:"ports",search:!1,render:function(i,n,f,h){return n!=null&&n.Ports?(0,e.jsx)(o.Z,{direction:"vertical",style:{textAlign:"left"},children:n==null?void 0:n.Ports.map(function(s,u){return(0,e.jsx)(de.Z,{color:"#2db7f5",icon:s.PublicPort?(0,e.jsx)(Ce.Z,{}):"",children:"".concat(s.PublicPort?s.IP+":"+s.PublicPort+"->":"").concat(s.PrivatePort,"/").concat(s.Type)},u)})},n.Id):(0,e.jsx)(e.Fragment,{})}},{title:"\u8FD0\u884C\u5BB9\u5668",search:!1,render:function(i,n,f,h){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z.Text,{ellipsis:{tooltip:n.Image},children:n.Image},n.Id)})}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",ellipsis:!0,width:100,render:function(i,n,f,h){return[(0,e.jsx)(_.ZP,{type:"link",onClick:function(){(0,ie.jV)({md5:n.Id}).then(function(u){return x({name:u.data.info.Name,alise:u.data.info.Config.Hostname,volume:!1}),C(!1),!0})},children:(0,e.jsx)(se.Z,{})},n.Id)]}}],rowKey:"Id",request:function(){var v=g()(a()().mark(function i(n,f,h){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",new Promise(function(l,Z){(0,ie.IE)({tag:n.names}).then(function(b){var D={data:b.data.list,success:!0,total:b.data.list.length};l(D)})}));case 1:case"end":return u.stop()}},i)}));return function(i,n,f){return v.apply(this,arguments)}}(),pagination:{pageSize:5}})})]})}),Be=De,ye=t(89035),Pe=t(20713),ce="docker-image",we=(0,m.forwardRef)(function(E,S){var j=(0,m.useState)(ce),w=O()(j,2),F=w[0],C=w[1],p=(0,m.useRef)(),I=(0,m.useState)(""),x=O()(I,2),v=x[0],i=x[1],n=function(){F!="code"?C("code"):C(ce)};(0,m.useImperativeHandle)(S,function(){return{addEnvItem:function(u,l){var Z,b=(Z=p.current)===null||Z===void 0?void 0:Z.getList(),D=!1;if(b==null||b.map(function(T){if(T.name==u){D=!0;return}}),!D){var N;(N=p.current)===null||N===void 0||N.add({name:u,value:l})}}}});function f(s){try{for(var u,l,Z=(u=(l=p.current)===null||l===void 0||(l=l.getList())===null||l===void 0?void 0:l.length)!==null&&u!==void 0?u:0,b=Z;b>=0;b--){var D;(D=p.current)===null||D===void 0||D.remove(b)}var N=s.split(`
`),T=0;N.map(function(c){var B,R=c.split("=");R.length==2&&((B=p.current)===null||B===void 0||B.add({name:R[0],value:R[1]},T),T++)})}catch(c){}}function h(){if(p){var s,u=(s=p.current)===null||s===void 0?void 0:s.getList();if(u){var l=[];return u.map(function(Z){l.push("".concat(Z.name,"=").concat(Z.value))}),l.join(`
`)}else return""}else return""}return(0,e.jsxs)(L.Z,{title:"\u73AF\u5883\u53D8\u91CF",headerBordered:!0,extra:(0,e.jsx)(U.Z,{title:"\u4EE3\u7801\u7F16\u8F91\u6A21\u5F0F",children:(0,e.jsx)(_.ZP,{icon:(0,e.jsx)(ye.Z,{}),type:F=="code"?"primary":"default",onClick:n,children:"\u4EE3\u7801\u6A21\u5F0F"})}),children:[(0,e.jsx)(ee.u,{name:"environment",actionRef:p,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BB9\u5668\u73AF\u5883\u53D8\u91CF"},copyIconProps:!1,min:0,children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(P.Z,{width:"md",name:"name",label:"\u53D8\u91CF\u540D",placeholder:""}),(0,e.jsx)(P.Z,{width:"md",name:"value",label:"\u53D8\u91CF\u503C",placeholder:""})]})}),(0,e.jsx)(k.Z,{width:"800px",open:F=="code",onCancel:function(){return C("docker-image")},onOk:function(){f(v),C("docker-image")},children:(0,e.jsx)(Pe.ZP,{onChange:function(u){return i(u)},value:h(),height:"680px",theme:"light"})})]})}),Re=we,Ie=t(86615),be=t(64317),Te=(0,m.forwardRef)(function(E,S){var j=(0,m.useRef)();return(0,m.useImperativeHandle)(S,function(){return{setDefaultDestPath:function(F){var C,p,I=(C=(p=j.current)===null||p===void 0?void 0:p.getList())!==null&&C!==void 0?C:[];F.length!=0&&F.filter(function(x){return x!=""}).map(function(x){var v=!1;if(I.map(function(n){if(n.dest==x){v=!0;return}}),!v){var i;(i=j.current)===null||i===void 0||i.add({dest:x,permission:"write",inImage:!0,edit:!1})}})}}}),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(L.Z,{title:"\u7AD9\u70B9\u5B58\u50A8\uFF08Volume\uFF09",subTitle:"\u9ED8\u8BA4\u4F1A\u5C06\u5BB9\u5668\u5185\u4F7F\u7528\u7684\u6570\u636E\u5377\u6302\u8F7D\u5230\u9ED8\u8BA4\u5B58\u50A8\u4E2D",headerBordered:!0,children:(0,e.jsx)(ee.u,{name:"volumesDefault",creatorButtonProps:{creatorButtonText:"\u7ED1\u5B9A\u76EE\u5F55\u5230\u9ED8\u8BA4\u5B58\u50A8"},actionRef:j,copyIconProps:!1,min:0,children:function(F,C,p){var I=p.getCurrentRowData();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(P.Z,{width:"lg",name:"dest",label:"\u5BB9\u5668\u5185\u8DEF\u5F84",disabled:I.inImage}),(0,e.jsx)(Ie.Z.Group,{hidden:!0,name:"inImage",label:"\u955C\u50CF\u5185\u6302\u8F7D",valueEnum:{1:"\u662F",0:"\u5426"}})]})}})}),(0,e.jsx)(L.Z,{title:"\u6302\u8F7D\u5BBF\u4E3B\u673A\u6587\u4EF6\uFF08Bind\uFF09",subTitle:"\u6302\u8F7D\u5BB9\u5668\u5185\u9700\u8981\u8BBF\u95EE\u5BBF\u4E3B\u673A\u7684\u6587\u4EF6",headerBordered:!0,direction:"column",children:(0,e.jsx)(ee.u,{name:"volumes",creatorButtonProps:{creatorButtonText:"\u6302\u8F7D\u76EE\u5F55\u6216\u662F\u5176\u5B83\u5B58\u50A8"},copyIconProps:!1,min:0,children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsxs)(o.Z.Compact,{children:[(0,e.jsx)(P.Z,{label:"\u5BBF\u4E3B\u673A\u6587\u4EF6\u6216\u76EE\u5F55",name:"host",width:"md"}),(0,e.jsx)(be.Z,{label:" ",valueEnum:{write:"\u8BFB\u5199",readonly:"\u53EA\u8BFB"},initialValue:"write",name:"permission"})]}),(0,e.jsx)(P.Z,{label:"\u5BB9\u5668\u5185\u8DEF\u5F84",name:"dest",width:"md"})]})})})]})}),Ae=Te,Se=t(2831),Ze=t(10418),me=t(71338);function Oe(){var E=(0,m.useState)(),S=O()(E,2),j=S[0],w=S[1];return(0,m.useEffect)(function(){(0,Se.a)().then(function(F){return w(F.data.info)})},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(J.Z,{label:"\u5171\u4EAB\u5185\u5B58\u5927\u5C0F - /dev/shm",name:"shmsize",initialValue:64,children:(0,e.jsx)(Ze.Z,{addonAfter:"MB",min:64})}),(0,e.jsx)(J.Z,{label:"\u6700\u5927Cpu\u914D\u989D",name:"cpus",tooltip:"0 \u4E3A\u4E0D\u9650\u5236",children:(0,e.jsx)(me.Z,{step:.1,max:j==null?void 0:j.NCPU,marks:{0:"\u4E0D\u9650\u5236",.5:"0.5\u6838",1:"1\u6838",1.5:"1.5\u6838",2:"2\u6838",4:"4\u6838",6:"6\u6838",8:"8\u6838"}})}),(0,e.jsx)(J.Z,{label:"\u6700\u5927\u5185\u5B58\u914D\u989D",name:"memory",tooltip:"0 \u4E3A\u4E0D\u9650\u5236",children:(0,e.jsx)(me.Z,{step:256,max:Math.round((j==null?void 0:j.MemTotal)/1024/1024),marks:{0:"\u4E0D\u9650\u5236",1024:"1G",2048:"2G",3072:"3G",4096:"2G"}})})]})}function ke(){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(ee.u,{name:"label",creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BB9\u5668\u6807\u7B7E"},copyIconProps:!1,min:0,children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(P.Z,{width:"md",name:"name",label:"\u540D\u79F0",placeholder:""}),(0,e.jsx)(P.Z,{width:"md",name:"value",label:"\u503C",placeholder:""})]})})})}var Me=t(52688),Ne=t(69677);function fe(E){var S=(0,m.useState)(""),j=O()(S,2),w=j[0],F=j[1],C=(0,m.useState)("default"),p=O()(C,2),I=p[0],x=p[1],v=function(f){return(0,e.jsx)(_.ZP,{type:I==f.type?"primary":"default",onClick:function(){return i(f.type)},children:f.text})},i=function(f){if(x(f),f=="default")F("");else{var h;F((h=E.value)!==null&&h!==void 0?h:"")}};return(0,m.useEffect)(function(){E.value&&(F(E.value),x("user"))},[E.value]),(0,e.jsx)(J.Z,{label:E.label,tooltip:E.tooltip,name:E.name,children:(0,e.jsxs)(o.Z.Compact,{children:[(0,e.jsx)(v,{text:"\u4F7F\u7528\u9ED8\u8BA4",type:"default"}),(0,e.jsx)(v,{text:"\u81EA\u5B9A\u4E49",type:"user"}),(0,e.jsx)(Ne.Z,{disabled:I=="default",value:w,style:{width:"500px"},onChange:function(f){F(f.target.value)}})]})})}fe.defaultProps={};var ae=fe,Le=t(44771);function Ue(){var E,S,j,w,F,C,p,I,x=(0,m.useContext)(K.Z),v=x.createFormRef,i=x.volumeListRef,n=x.domainRef,f=x.createEnvRef,h=x.createLinkRef;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Le.Z,{}),(0,e.jsx)(Me.Z,{name:"privileged",label:"\u8D4B\u4E88\u5BB9\u5668Root\u6743\u9650",initialValue:!1}),(0,e.jsx)(ae,{label:"\u5DE5\u4F5C\u76EE\u5F55",tooltip:"\u9ED8\u8BA4\u4F7F\u7528\u955C\u50CF\u4E2D\u6307\u5B9A\u7684\u5DE5\u4F5C\u76EE\u5F55",name:"workDir",value:(E=(S=v.current)===null||S===void 0?void 0:S.getFieldValue("workDir"))!==null&&E!==void 0?E:""}),(0,e.jsx)(ae,{label:"User",tooltip:"\u5728\u5BB9\u5668\u4E2D\u8FD0\u884C\u547D\u4EE4\u7684\u7528\u6237",name:"user",value:(j=(w=v.current)===null||w===void 0?void 0:w.getFieldValue("user"))!==null&&j!==void 0?j:""}),(0,e.jsx)(ae,{label:"Command",tooltip:"\u542F\u52A8\u5BB9\u5668\u65F6\u8FD0\u884C\u7684\u547D\u4EE4\uFF0C\u4EE5\u7A7A\u683C\u5206\u9694",name:"command",value:(F=(C=v.current)===null||C===void 0?void 0:C.getFieldValue("command"))!==null&&F!==void 0?F:""}),(0,e.jsx)(ae,{label:"Entrypoint",tooltip:"\u65E0\u6CD5\u8986\u76D6\u955C\u50CF\u4E2D\u5DF2\u7ECF\u6307\u5B9A\u7684 Entrypoint \u547D\u4EE4",name:"entrypoint",value:(p=(I=v.current)===null||I===void 0?void 0:I.getFieldValue("entrypoint"))!==null&&p!==void 0?p:""})]})}var We=t(91845),pe=t(62597),ve=t(54006),$e=t(14946),Ke=t(93246),Ve=t(31418),Ge=(0,m.forwardRef)(function(E,S){var j=(0,m.useState)(!1),w=O()(j,2),F=w[0],C=w[1],p=(0,m.useRef)(),I=Ve.Z.useApp();(0,m.useImperativeHandle)(S,function(){return{}});var x=function(i){var n,f,h=!1,s=(n=(f=p.current)===null||f===void 0?void 0:f.getList())!==null&&n!==void 0?n:[];if(s.map(function(l){l.name==i.name&&(h=!0)}),!h){var u;(u=p.current)===null||u===void 0||u.add(i)}};return(0,e.jsxs)(L.Z,{title:"\u5173\u8054\u7F51\u7EDC",headerBordered:!0,children:[(0,e.jsx)(ee.u,{name:"network",actionRef:p,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u7F51\u7EDC"},actionGuard:{beforeAddRow:function(i,n){return!E.siteName||E.siteName==""||typeof E.siteName=="undefined"?((0,Ke.YZ)(I,"\u8BF7\u8F93\u5165\u7AD9\u70B9\u6807\u8BC6"),!1):(C(!0),!1)}},copyIconProps:!1,min:0,itemRender:function(i,n){return(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(P.Z,{label:"\u7F51\u7EDC\u540D\u79F0",name:"name",width:"md",disabled:!0,fieldProps:{value:n.record.name}}),(0,e.jsx)(J.Z,{label:"\u8BBF\u95EEHostname",name:"alise",children:(0,e.jsx)(r.Z.Text,{code:!0,copyable:!0,children:n.record.alise})}),(0,e.jsx)(J.Z,{label:" ",children:i.action})]})}}),(0,e.jsx)(k.Z,{title:"\u9009\u62E9\u7F51\u7EDC",width:1024,footer:!1,open:F,onCancel:function(){return C(!1)},children:(0,e.jsx)(V.Z,{rowKey:"Name",columns:[{title:"\u540D\u79F0",dataIndex:"Name",render:function(i,n,f,h,s){return n.Name=="none"||n.Name=="bridge"||n.Name=="host"?(0,e.jsxs)(e.Fragment,{children:[n.Name," ",(0,e.jsx)(de.Z,{color:"blue",children:"System"})]}):(0,e.jsx)(e.Fragment,{children:i})}},{title:"\u7C7B\u578B",ellipsis:!0,width:80,dataIndex:"Driver",search:!1},{title:"IPAM Driver",ellipsis:!0,width:120,search:!1,dataIndex:["IPAM","Driver"]},{title:"IPV4 IPAM Subnet",ellipsis:!0,width:150,search:!1,dataIndex:["IPAM","Config",0,"Subnet"]},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(i,n,f,h,s){return[(0,e.jsx)(_.ZP,{type:"link",onClick:function(){var l;x({name:n.Name,alise:[((l=E.siteName)!==null&&l!==void 0?l:"")+".pod.dpanel.local"]}),C(!1)},children:(0,e.jsx)(se.Z,{})},n.Id)]}}],request:function(){var v=g()(a()().mark(function i(n,f,h){var s;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,$e.jR)({name:n.Name});case 2:return s=l.sent,l.abrupt("return",{data:s.data.list,success:!0,total:s.data.list.length});case 4:case"end":return l.stop()}},i)}));return function(i,n,f){return v.apply(this,arguments)}}(),pagination:{pageSize:10}})})]})}),He=Ge,ze=(0,m.forwardRef)(function(E,S){var j=(0,m.useState)(""),w=O()(j,2),F=w[0],C=w[1],p=(0,m.useRef)();return(0,m.useImperativeHandle)(S,function(){return{setExposePort:function(x){if(x){var v,i,n=(v=(i=p.current)===null||i===void 0?void 0:i.getList())!==null&&v!==void 0?v:[];Object.keys(x).map(function(f){var h=!1;if(n.map(function(u){u.dest==f&&(h=!0)}),!h){var s;(s=p.current)===null||s===void 0||s.add({host:"",dest:f})}})}},setHostname:function(x){C(x)}}}),(0,e.jsx)(L.Z,{title:"\u66B4\u9732\u7AEF\u53E3",headerBordered:!0,children:(0,e.jsx)(ee.u,{name:"ports",actionRef:p,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BF9\u5916\u90E8\u8BBF\u95EE"},min:0,copyIconProps:!1,children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(P.Z,{width:"md",name:"host",label:"\u5916\u90E8\u8BBF\u95EE\u57DF\u540D\u6216\u662F\u7AEF\u53E3",tooltip:"\u5BF9\u5916\u8BBF\u95EE\u53EF\u4EE5\u901A\u8FC7\u7ED1\u5B9A\u57DF\u540D\u8F6C\u53D1\u6216\u662F\u76F4\u63A5\u66B4\u9732\u7AEF\u53E3",placeholder:"\u7559\u7A7A\u5C06\u4F7F\u7528\u968F\u673A\u7AEF\u53E3"}),(0,e.jsx)(P.Z,{label:"\u5BB9\u5668\u5185\u7AEF\u53E3",width:"md",name:"dest",placeholder:"\u6784\u5EFA\u65F6 Expose \u6307\u5B9A\u7684\u7AEF\u53E3"})]})})})}),Ye=ze;function Je(){var E,S,j,w=(0,m.useContext)(K.Z),F=w.createFormRef,C=w.volumeListRef,p=w.domainRef,I=w.createEnvRef,x=w.createLinkRef,v=(0,m.useState)(!1),i=O()(v,2),n=i[0],f=i[1],h=(0,ve.useSearchParams)(),s=O()(h,2),u=s[0],l=s[1],Z=(0,ve.useNavigate)(),b=parseInt((E=u.get("id"))!==null&&E!==void 0?E:""),D=(S=u.get("md5"))!==null&&S!==void 0?S:"",N=(j=u.get("imageId"))!==null&&j!==void 0?j:"";return(0,m.useEffect)(function(){if(D||b)(0,pe.iE)({md5:D,id:b}).then(function(c){var B;f(!0),c.data.env.network&&c.data.env.network.map(function(R){return!R.alise&&R.name!="bridge"&&(R.alise=[c.data.siteName+".pod.dpanel.local"]),R}),c.data.env.ports&&c.data.env.ports.map(function(R){return R.host=="0"&&(R.host=""),R}),(B=F.current)===null||B===void 0||B.setFieldsValue({siteTitle:c.data.siteTitle,siteName:c.data.siteName,imageName:c.data.env.imageName,privileged:c.data.env.privileged,workDir:c.data.env.workDir,user:c.data.env.user,command:c.data.env.command,entrypoint:c.data.env.entrypoint,shmsize:c.data.env.shmsize,cpus:c.data.env.cpus,memory:c.data.env.memory,environment:c.data.env.environment,label:c.data.env.label,volumesDefault:c.data.env.volumesDefault,volumes:c.data.env.volumes,ports:c.data.env.ports,links:c.data.env.links,network:c.data.env.network,restart:c.data.env.restart})});else{var T;f(!1),(T=F.current)===null||T===void 0||T.resetFields()}},[u]),(0,e.jsx)(W._z,{children:(0,e.jsx)(L.Z,{direction:"column",gutter:[0,10],children:(0,e.jsxs)($.A,{submitter:{render:function(c,B){return(0,e.jsx)(Q.S,{children:B})}},formRef:F,onFinish:function(){var T=g()(a()().mark(function c(B){return a()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return B.md5=D,X.next=3,(0,pe.$G)(B);case 3:return Z("/app/list"),X.abrupt("return",!0);case 5:case"end":return X.stop()}},c)}));return function(c){return T.apply(this,arguments)}}(),children:[(0,e.jsxs)(L.Z,{title:"\u57FA\u7840\u4FE1\u606F",headerBordered:!0,children:[(0,e.jsx)(P.Z,{name:"siteTitle",label:"\u7AD9\u70B9\u540D\u79F0",required:!0,rules:[{required:!0}],fieldProps:{onChange:function(c){var B="";if(c.target.value&&!n){var R,X=(0,We.N9)(c.target.value.trim(),{toneType:"none",type:"array"});B=X.join(""),(R=F.current)===null||R===void 0||R.setFieldValue("siteName",B)}}},placeholder:"\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0"}),(0,e.jsx)(P.Z,{name:"siteName",label:"\u7AD9\u70B9\u6807\u8BC6",tooltip:"\u7AD9\u70B9\u552F\u4E00\u6807\u8BC6\uFF0C\u7528\u4E8E\u6807\u8BC6\u7AD9\u70B9\u548C\u5185\u90E8\u8BBF\u95EE",required:!0,disabled:n,rules:[{required:!0}],placeholder:"\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0"}),(0,e.jsx)(je,{redeploy:n,fromImageId:N})]}),(0,e.jsx)(Ye,{ref:p}),(0,e.jsx)(Be,{onAddEnv:function(c,B){var R;(R=I.current)===null||R===void 0||R.addEnvItem(c,B)},ref:x}),(0,e.jsx)(M.Z,{name:["siteName"],children:function(c){var B=c.siteName;return(0,e.jsx)(He,{siteName:B})}}),(0,e.jsx)(Re,{ref:I}),(0,e.jsx)(Ae,{ref:C}),(0,e.jsx)(L.Z,{title:"\u9AD8\u7EA7\u914D\u7F6E",headerBordered:!0,collapsible:!0,defaultCollapsed:!0,children:(0,e.jsx)(Y.Z,{items:[{label:"\u542F\u52A8\u9879",key:"run-command",children:(0,e.jsx)(Ue,{})},{label:"\u8D44\u6E90\u914D\u7F6E",key:"runtime",children:(0,e.jsx)(Oe,{})},{label:"\u6807\u7B7E",key:"label",children:(0,e.jsx)(ke,{})}]})})]},"form")})})}},62597:function(te,H,t){t.d(H,{$G:function(){return O},Ct:function(){return m},Tb:function(){return Q},cl:function(){return L},iE:function(){return M},xb:function(){return J}});var z=t(15009),a=t.n(z),q=t(99289),g=t.n(q),y=t(54006);function O(o){return W.apply(this,arguments)}function W(){return W=g()(a()().mark(function o(_){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,y.request)("/api/app/site/create-by-image",{method:"POST",data:_}));case 1:case"end":return r.stop()}},o)})),W.apply(this,arguments)}function L(o){return $.apply(this,arguments)}function $(){return $=g()(a()().mark(function o(_){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,y.request)("/api/app/site/get-list",{method:"POST",data:_}));case 1:case"end":return r.stop()}},o)})),$.apply(this,arguments)}function Q(o){return P.apply(this,arguments)}function P(){return P=g()(a()().mark(function o(_){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,y.request)("/api/app/log/run",{method:"POST",data:_});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},o)})),P.apply(this,arguments)}function M(o){return Y.apply(this,arguments)}function Y(){return Y=g()(a()().mark(function o(_){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,y.request)("/api/app/site/get-detail",{data:_,method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},o)})),Y.apply(this,arguments)}function m(o){return K.apply(this,arguments)}function K(){return K=g()(a()().mark(function o(_){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,y.request)("/api/app/container/delete",{method:"POST",data:_}));case 1:case"end":return r.stop()}},o)})),K.apply(this,arguments)}function J(o){return V.apply(this,arguments)}function V(){return V=g()(a()().mark(function o(_){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,y.request)("/api/app/site/delete",{method:"POST",data:_}));case 1:case"end":return r.stop()}},o)})),V.apply(this,arguments)}},2831:function(te,H,t){t.d(H,{a:function(){return O},d:function(){return L}});var z=t(15009),a=t.n(z),q=t(99289),g=t.n(q),y=t(54006);function O(){return W.apply(this,arguments)}function W(){return W=g()(a()().mark(function Q(){return a()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,(0,y.request)("/api/common/home/info",{method:"POST"});case 2:return M.abrupt("return",M.sent);case 3:case"end":return M.stop()}},Q)})),W.apply(this,arguments)}function L(){return $.apply(this,arguments)}function $(){return $=g()(a()().mark(function Q(){return a()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,(0,y.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return M.abrupt("return",M.sent);case 3:case"end":return M.stop()}},Q)})),$.apply(this,arguments)}},14946:function(te,H,t){t.d(H,{CI:function(){return Q},HY:function(){return o},IS:function(){return O},XY:function(){return m},_3:function(){return k},_x:function(){return M},jR:function(){return L},t9:function(){return J}});var z=t(15009),a=t.n(z),q=t(99289),g=t.n(q),y=t(54006);function O(A){return W.apply(this,arguments)}function W(){return W=g()(a()().mark(function A(U){return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,y.request)("/api/app/network/get-detail",{method:"POST",data:U}));case 1:case"end":return d.stop()}},A)})),W.apply(this,arguments)}function L(A){return $.apply(this,arguments)}function $(){return $=g()(a()().mark(function A(U){return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,y.request)("/api/app/network/get-list",{method:"POST",data:U}));case 1:case"end":return d.stop()}},A)})),$.apply(this,arguments)}function Q(){return P.apply(this,arguments)}function P(){return P=g()(a()().mark(function A(){return a()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,(0,y.request)("/api/app/network/prune",{method:"POST"});case 2:return G.abrupt("return",G.sent);case 3:case"end":return G.stop()}},A)})),P.apply(this,arguments)}function M(A){return Y.apply(this,arguments)}function Y(){return Y=g()(a()().mark(function A(U){return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,y.request)("/api/app/network/delete",{method:"POST",data:U});case 2:return d.abrupt("return",d.sent);case 3:case"end":return d.stop()}},A)})),Y.apply(this,arguments)}function m(A){return K.apply(this,arguments)}function K(){return K=g()(a()().mark(function A(U){return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,y.request)("/api/app/network/create",{method:"POST",data:U});case 2:return d.abrupt("return",d.sent);case 3:case"end":return d.stop()}},A)})),K.apply(this,arguments)}function J(A){return V.apply(this,arguments)}function V(){return V=g()(a()().mark(function A(U){return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,y.request)("/api/app/network/disconnect",{method:"POST",data:U});case 2:return d.abrupt("return",d.sent);case 3:case"end":return d.stop()}},A)})),V.apply(this,arguments)}function o(A){return _.apply(this,arguments)}function _(){return _=g()(a()().mark(function A(U){return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,y.request)("/api/app/network/connect",{method:"POST",data:U});case 2:return d.abrupt("return",d.sent);case 3:case"end":return d.stop()}},A)})),_.apply(this,arguments)}function k(A){return r.apply(this,arguments)}function r(){return r=g()(a()().mark(function A(U){return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,y.request)("/api/app/network/get-container-list",{method:"POST",data:U}));case 1:case"end":return d.stop()}},A)})),r.apply(this,arguments)}},60335:function(te,H,t){t.d(H,{IE:function(){return L},IW:function(){return O},KK:function(){return m},LJ:function(){return J},eE:function(){return M},jV:function(){return Q}});var z=t(15009),a=t.n(z),q=t(99289),g=t.n(q),y=t(54006);function O(o){return W.apply(this,arguments)}function W(){return W=g()(a()().mark(function o(_){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,y.request)("/api/app/container/status",{method:"POST",data:_}));case 1:case"end":return r.stop()}},o)})),W.apply(this,arguments)}function L(o){return $.apply(this,arguments)}function $(){return $=g()(a()().mark(function o(_){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,y.request)("/api/app/container/get-list",{data:_,method:"POST"}));case 1:case"end":return r.stop()}},o)})),$.apply(this,arguments)}function Q(o){return P.apply(this,arguments)}function P(){return P=g()(a()().mark(function o(_){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,y.request)("/api/app/container/get-detail",{data:_,method:"POST"}));case 1:case"end":return r.stop()}},o)})),P.apply(this,arguments)}function M(o){return Y.apply(this,arguments)}function Y(){return Y=g()(a()().mark(function o(_){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,y.request)("/api/app/container/update",{data:_,method:"POST"}));case 1:case"end":return r.stop()}},o)})),Y.apply(this,arguments)}function m(){return K.apply(this,arguments)}function K(){return K=g()(a()().mark(function o(){return a()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.abrupt("return",(0,y.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return k.stop()}},o)})),K.apply(this,arguments)}function J(o){return V.apply(this,arguments)}function V(){return V=g()(a()().mark(function o(_){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,y.request)("/api/app/container/export",{method:"POST",data:_,responseType:"blob"}));case 1:case"end":return r.stop()}},o)})),V.apply(this,arguments)}}}]);
