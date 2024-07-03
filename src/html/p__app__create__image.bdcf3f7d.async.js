"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3985],{44771:function(te,z,t){t.d(z,{Z:function(){return B}});var Y=t(34041),r=t(25449),q=t(62435),g=t(86074);function B(M){return(0,g.jsx)(r.Z,{name:"restart",initialValue:M.defaultValue?M.defaultValue:"on-failure",children:(0,g.jsx)(Y.Z,{options:[{value:"no",label:"\u4E0D\u91CD\u542F"},{value:"on-failure",label:"\u975E\u6B63\u5E38\u9000\u51FA\u65F6,\u6700\u591A5\u6B21 - on failure"},{value:"unless-stopped",label:"\u9000\u51FA\u540E\u91CD\u542F\uFF0C\u4E0D\u5305\u62EC\u624B\u52A8\u505C\u6B62\u7684 - unless stopped"},{value:"always",label:"\u603B\u662F\u9000\u51FA\u540E\u91CD\u542F - always"}]})})}},35880:function(te,z,t){var Y=t(62435),r=(0,Y.createContext)({});z.Z=r},33369:function(te,z,t){t.r(z),t.d(z,{default:function(){return Je}});var Y=t(15009),r=t.n(Y),q=t(99289),g=t.n(q),B=t(5574),M=t.n(B),W=t(6110),U=t(38345),$=t(97269),Q=t(2236),w=t(5966),N=t(97462),J=t(92398),m=t(62435),K=t(35880),X=t(62370),V=t(12010),b=t(78957),A=t(14726),E=t(85576),o=t(75891),x=t(96074),u=t(83062),G=t(3393),c=t(18148),ge=t(5251),ie=t(64789),Ee=t(75162),_e=t(28307),e=t(86074);function je(_){var Z=(0,m.useState)(!1),j=M()(Z,2),R=j[0],F=j[1],D=(0,m.useRef)(),p=(0,m.useContext)(K.Z),I=p.createFormRef,y=p.volumeListRef,v=p.createEnvRef,i=p.domainRef,n=(0,m.useRef)(),f=function(){var h=g()(r()().mark(function s(a){var l,O,T,P,L,S,d,k,C,H,re;return r()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return F(!1),ae.next=3,(0,G.YU)({md5:a});case 3:P=ae.sent,_.redeploy||(k=(L=I.current)===null||L===void 0?void 0:L.getFieldsValue(),(S=I.current)===null||S===void 0||S.resetFields(),(d=I.current)===null||d===void 0||d.setFieldsValue({siteName:k.siteName,siteTitle:k.siteTitle})),P.data.info.Config.Env&&P.data.info.Config.Env.map(function(oe){var se,he=oe.split("=");(se=v.current)===null||se===void 0||se.addEnvItem(he[0],he[1])}),(l=I.current)===null||l===void 0||l.setFieldValue("imageName",P.data.info.RepoTags[0]),(O=I.current)===null||O===void 0||O.setFieldValue("workDir",P.data.info.Config.WorkingDir),(T=i.current)===null||T===void 0||T.setExposePort(P.data.info.Config.ExposedPorts),P.data.info.Config.Volumes?(H=[],Object.keys(P.data.info.Config.Volumes).map(function(oe,se){H.push(oe)}),(C=y.current)===null||C===void 0||C.setDefaultDestPath(H)):(re=y.current)===null||re===void 0||re.setDefaultDestPath([]);case 10:case"end":return ae.stop()}},s)}));return function(a){return h.apply(this,arguments)}}();return(0,m.useEffect)(function(){_.fromImageId&&f(_.fromImageId)},[_.fromImageId]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(b.Z.Compact,{children:[(0,e.jsx)(w.Z,{label:"\u955C\u50CF",tooltip:_.redeploy?"\u66F4\u65B0\u5BB9\u5668\u65F6,\u53EA\u53EF\u4EE5\u9009\u62E9\u8BE5\u955C\u50CF\u4E0B\u7684\u4E0D\u540Ctag.\u4E5F\u53EF\u4EE5\u5F3A\u5236\u66F4\u65B0\u5DF2\u90E8\u7F72tag,\u66F4\u6B21\u90E8\u7F72":"\u65B0\u5EFA\u5BB9\u5668\u65F6,\u53EF\u4EE5\u4F7F\u7528\u672C\u5730\u955C\u50CF,\u4E5F\u53EF\u4EE5\u4E0B\u8F7D\u5168\u65B0\u7684\u955C\u50CF\u6216\u662F\u66F4\u65B0\u672C\u5730\u955C\u50CF\u7684tag",name:"imageName",width:"lg",disabled:!0,placeholder:"\u8BF7\u9009\u62E9\u955C\u50CF\uFF0C\u5982\u679C\u662F\u8FDC\u7A0B\u955C\u50CF\u8BF7\u5148\u4E0B\u8F7D",rules:[{required:!0}],required:!0}),(0,e.jsx)(X.Z,{label:" ",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(A.ZP,{type:"primary",onClick:function(){return F(!0)},children:_.redeploy?"\u66F4\u65B0\u955C\u50CF":"\u9009\u62E9\u955C\u50CF"},"showBtn"),(0,e.jsx)(E.Z,{open:R,width:1024,title:"\u9009\u62E9\u955C\u50CF",footer:!1,onCancel:function(){return F(!1)},children:(0,e.jsx)(V.Z,{columns:[{title:"Id",dataIndex:"Id",ellipsis:!0,search:!1,width:150},{title:"\u955C\u50CF\u540D\u79F0",dataIndex:"tag",render:function(s,a,l,O){return(0,e.jsx)(o.Z.Text,{code:!0,copyable:!0,children:a.RepoTags[0]},a.RepoTags[0])}},{title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"Created",ellipsis:!0,search:!1,width:"180px",render:function(s,a,l,O){return(0,e.jsx)("div",{children:(0,ge.ZM)(a.Created*1e3)},a.Id)},sorter:function(s,a){return s.Created-a.Created}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:"100px",render:function(s,a,l,O){return(0,e.jsxs)(b.Z,{split:(0,e.jsx)(x.Z,{type:"vertical"}),children:[(0,e.jsx)(A.ZP,{size:"small",onClick:g()(r()().mark(function T(){return r()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.abrupt("return",f(a.Id));case 1:case"end":return L.stop()}},T)})),type:"link",icon:(0,e.jsx)(u.Z,{title:"\u4F7F\u7528\u955C\u50CF",children:(0,e.jsx)(ie.Z,{})})},"addImage"),(0,e.jsx)(A.ZP,{size:"small",onClick:g()(r()().mark(function T(){var P;return r()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:a.RepoTags[0]&&((P=n.current)===null||P===void 0||P.setImageName(a.RepoTags[0]));case 1:case"end":return S.stop()}},T)})),type:"link",icon:(0,e.jsx)(u.Z,{title:"\u66F4\u65B0\u7248\u672C",children:(0,e.jsx)(Ee.Z,{})})},"updateImage")]})}}],request:function(){var h=g()(r()().mark(function s(a,l,O){var T,P,L,S,d;return r()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return _.redeploy&&(P=(T=I.current)===null||T===void 0?void 0:T.getFieldValue("imageName"),a.tag=P?P.split(":")[0]:a.tag),C.next=3,(0,c.KG)({tag:a.tag});case 3:return L=C.sent,S=0,d=[],L.data.list&&(d=L.data.list.flatMap(function(H){return H.RepoTags.map(function(re){return{Key:S++,Id:H.Id,Created:H.Created,RepoTags:[re]}})})),C.abrupt("return",{data:d,success:!0,total:d.length});case 8:case"end":return C.stop()}},s)}));return function(s,a,l){return h.apply(this,arguments)}}(),toolBarRender:function(){return[(0,e.jsx)(_e.Z,{ref:n,onFinish:function(a){var l,O;(l=D.current)===null||l===void 0||l.setFieldValue("tag",a),(O=D.current)===null||O===void 0||O.submit()}},"remote")]},formRef:D,rowKey:"Key",pagination:{pageSize:5}})},"imageTableList")]})})]})})}var le=t(60335),Fe=t(24969),Ce=t(27496),ne=t(24739),xe=t(63434),ee=t(17186),de=t(66309),De=(0,m.forwardRef)(function(_,Z){var j=(0,m.useState)(!1),R=M()(j,2),F=R[0],D=R[1],p=(0,m.useRef)(),I=function(i){var n=(0,m.useState)([]),f=M()(n,2),h=f[0],s=f[1];return(0,m.useEffect)(function(){(0,le.jV)({md5:i.name}).then(function(a){var l;return s((l=a.data.info.Config.Env)!==null&&l!==void 0?l:[]),!0})},[]),(0,e.jsxs)(U.Z,{bordered:!0,extra:i.action,style:{marginBottom:10},children:[(0,e.jsx)(U.Z,{title:"\u5173\u8054\u4FE1\u606F",children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(w.Z,{label:"\u5BB9\u5668\u540D\u79F0",name:"name",width:"md",readonly:!0}),(0,e.jsx)(w.Z,{label:"\u8BBF\u95EEHostName",name:"alise",width:"md",tooltip:"\u901A\u8FC7\u914D\u7F6E\u6B64\u540D\u79F0\uFF0C\u5728\u5BB9\u5668\u5185\u90E8\u8FDB\u884C\u8BF7\u6C42\u8BBF\u95EE"}),(0,e.jsx)(xe.Z,{label:"\u5173\u8054\u5B58\u50A8",name:"volume"})]})}),(0,e.jsx)(U.Z,{title:"\u73AF\u5883\u53D8\u91CF",children:(0,e.jsx)(b.Z,{direction:"vertical",children:h&&h.map(function(a,l){return(0,e.jsx)(o.Z.Text,{copyable:{icon:(0,e.jsx)(Fe.Z,{}),onCopy:function(){var T=a.split("=");_.onAddEnv(T[0],T[1])},tooltips:["add env","success"]},code:!0,ellipsis:{tooltip:a},style:{width:300},children:a},l)})},"linkEnv")})]})},y=function(i){var n,f,h=!1,s=(n=(f=p.current)===null||f===void 0?void 0:f.getList())!==null&&n!==void 0?n:[];if(s.map(function(l){l.name==i.name&&(h=!0)}),!h){var a;(a=p.current)===null||a===void 0||a.add(i)}};return(0,m.useImperativeHandle)(Z,function(){return{setDefaultLink:function(i){i&&i.map(function(n){n.name!=""&&y(n)})}}}),(0,e.jsxs)(U.Z,{title:"\u5173\u8054\u5BB9\u5668",headerBordered:!0,children:[(0,e.jsx)(ee.u,{name:"links",actionRef:p,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5173\u8054"},actionGuard:{beforeAddRow:function(i,n){return D(!0),!1}},copyIconProps:!1,min:0,itemRender:function(i,n){return(0,e.jsx)(I,{action:i.action,name:n.record.name})}}),(0,e.jsx)(E.Z,{title:"\u9009\u62E9\u5BB9\u5668",width:1024,footer:!1,open:F,onCancel:function(){return D(!1)},children:(0,e.jsx)(V.Z,{columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"names",render:function(i,n,f,h){return(0,e.jsx)(b.Z,{direction:"vertical",style:{textAlign:"left"},children:n==null?void 0:n.Names.map(function(s){return s})},n.Id)}},{title:"\u7AEF\u53E3",dataIndex:"ports",search:!1,render:function(i,n,f,h){return n!=null&&n.Ports?(0,e.jsx)(b.Z,{direction:"vertical",style:{textAlign:"left"},children:n==null?void 0:n.Ports.map(function(s,a){return(0,e.jsx)(de.Z,{color:"#2db7f5",icon:s.PublicPort?(0,e.jsx)(Ce.Z,{}):"",children:"".concat(s.PublicPort?s.IP+":"+s.PublicPort+"->":"").concat(s.PrivatePort,"/").concat(s.Type)},a)})},n.Id):(0,e.jsx)(e.Fragment,{})}},{title:"\u8FD0\u884C\u5BB9\u5668",search:!1,render:function(i,n,f,h){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(o.Z.Text,{ellipsis:{tooltip:n.Image},children:n.Image},n.Id)})}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",ellipsis:!0,width:100,render:function(i,n,f,h){return[(0,e.jsx)(A.ZP,{type:"link",onClick:function(){(0,le.jV)({md5:n.Id}).then(function(a){return y({name:a.data.info.Name,alise:a.data.info.Config.Hostname,volume:!1}),D(!1),!0})},children:(0,e.jsx)(ie.Z,{})},n.Id)]}}],rowKey:"Id",request:function(){var v=g()(r()().mark(function i(n,f,h){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(l,O){(0,le.IE)({tag:n.names}).then(function(T){var P={data:T.data.list,success:!0,total:T.data.list.length};l(P)})}));case 1:case"end":return a.stop()}},i)}));return function(i,n,f){return v.apply(this,arguments)}}(),pagination:{pageSize:5}})})]})}),ye=De,Be=t(89035),Pe=t(20713),ce="docker-image",we=(0,m.forwardRef)(function(_,Z){var j=(0,m.useState)(ce),R=M()(j,2),F=R[0],D=R[1],p=(0,m.useRef)(),I=(0,m.useState)(""),y=M()(I,2),v=y[0],i=y[1],n=function(){F!="code"?D("code"):D(ce)};(0,m.useImperativeHandle)(Z,function(){return{addEnvItem:function(a,l){var O,T=(O=p.current)===null||O===void 0?void 0:O.getList(),P=!1;if(T==null||T.map(function(S){if(S.name==a){P=!0;return}}),!P){var L;(L=p.current)===null||L===void 0||L.add({name:a,value:l})}}}});function f(s){try{for(var a,l,O=(a=(l=p.current)===null||l===void 0||(l=l.getList())===null||l===void 0?void 0:l.length)!==null&&a!==void 0?a:0,T=O;T>=0;T--){var P;(P=p.current)===null||P===void 0||P.remove(T)}var L=s.split(`
`),S=0;L.map(function(d){var k,C=d.split("=");C.length==2&&((k=p.current)===null||k===void 0||k.add({name:C[0],value:C[1]},S),S++)})}catch(d){}}function h(){if(p){var s,a=(s=p.current)===null||s===void 0?void 0:s.getList();if(a){var l=[];return a.map(function(O){l.push("".concat(O.name,"=").concat(O.value))}),l.join(`
`)}else return""}else return""}return(0,e.jsxs)(U.Z,{title:"\u73AF\u5883\u53D8\u91CF",headerBordered:!0,extra:(0,e.jsx)(u.Z,{title:"\u4EE3\u7801\u7F16\u8F91\u6A21\u5F0F",children:(0,e.jsx)(A.ZP,{icon:(0,e.jsx)(Be.Z,{}),type:F=="code"?"primary":"default",onClick:n,children:"\u4EE3\u7801\u6A21\u5F0F"})}),children:[(0,e.jsx)(ee.u,{name:"environment",actionRef:p,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BB9\u5668\u73AF\u5883\u53D8\u91CF"},copyIconProps:!1,min:0,children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(w.Z,{width:"md",name:"name",label:"\u53D8\u91CF\u540D",placeholder:""}),(0,e.jsx)(w.Z,{width:"md",name:"value",label:"\u53D8\u91CF\u503C",placeholder:""})]})}),(0,e.jsx)(E.Z,{width:"800px",open:F=="code",onCancel:function(){return D("docker-image")},onOk:function(){f(v),D("docker-image")},children:(0,e.jsx)(Pe.ZP,{onChange:function(a){return i(a)},value:h(),height:"680px",theme:"light"})})]})}),Re=we,be=t(86615),Ie=t(64317),Te=(0,m.forwardRef)(function(_,Z){var j=(0,m.useRef)();return(0,m.useImperativeHandle)(Z,function(){return{setDefaultDestPath:function(F){var D,p,I=(D=(p=j.current)===null||p===void 0?void 0:p.getList())!==null&&D!==void 0?D:[];F.length!=0&&F.filter(function(y){return y!=""}).map(function(y){var v=!1;if(I.map(function(n){if(n.dest==y){v=!0;return}}),!v){var i;(i=j.current)===null||i===void 0||i.add({dest:y,permission:"write",inImage:!0,edit:!1})}})}}}),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(U.Z,{title:"\u7AD9\u70B9\u5B58\u50A8\uFF08Volume\uFF09",subTitle:"\u9ED8\u8BA4\u4F1A\u5C06\u5BB9\u5668\u5185\u4F7F\u7528\u7684\u6570\u636E\u5377\u6302\u8F7D\u5230\u9ED8\u8BA4\u5B58\u50A8\u4E2D",headerBordered:!0,children:(0,e.jsx)(ee.u,{name:"volumesDefault",creatorButtonProps:{creatorButtonText:"\u7ED1\u5B9A\u76EE\u5F55\u5230\u9ED8\u8BA4\u5B58\u50A8"},actionRef:j,copyIconProps:!1,min:0,children:function(F,D,p){var I=p.getCurrentRowData();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(w.Z,{width:"lg",name:"dest",label:"\u5BB9\u5668\u5185\u8DEF\u5F84",disabled:I.inImage}),(0,e.jsx)(be.Z.Group,{hidden:!0,name:"inImage",label:"\u955C\u50CF\u5185\u6302\u8F7D",valueEnum:{1:"\u662F",0:"\u5426"}})]})}})}),(0,e.jsx)(U.Z,{title:"\u6302\u8F7D\u5BBF\u4E3B\u673A\u6587\u4EF6\uFF08Bind\uFF09",subTitle:"\u6302\u8F7D\u5BB9\u5668\u5185\u9700\u8981\u8BBF\u95EE\u5BBF\u4E3B\u673A\u7684\u6587\u4EF6",headerBordered:!0,direction:"column",children:(0,e.jsx)(ee.u,{name:"volumes",creatorButtonProps:{creatorButtonText:"\u6302\u8F7D\u76EE\u5F55\u6216\u662F\u5176\u5B83\u5B58\u50A8"},copyIconProps:!1,min:0,children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsxs)(b.Z.Compact,{children:[(0,e.jsx)(w.Z,{label:"\u5BBF\u4E3B\u673A\u6587\u4EF6\u6216\u76EE\u5F55",name:"host",width:"md"}),(0,e.jsx)(Ie.Z,{label:" ",valueEnum:{write:"\u8BFB\u5199",readonly:"\u53EA\u8BFB"},initialValue:"write",name:"permission"})]}),(0,e.jsx)(w.Z,{label:"\u5BB9\u5668\u5185\u8DEF\u5F84",name:"dest",width:"md"})]})})})]})}),Ae=Te,Se=t(2831),Ze=t(10418),me=t(71338);function Oe(){var _=(0,m.useState)(),Z=M()(_,2),j=Z[0],R=Z[1];return(0,m.useEffect)(function(){(0,Se.a)().then(function(F){return R(F.data.info)})},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(X.Z,{label:"\u5171\u4EAB\u5185\u5B58\u5927\u5C0F - /dev/shm",name:"shmsize",initialValue:64,children:(0,e.jsx)(Ze.Z,{addonAfter:"MB",min:64})}),(0,e.jsx)(X.Z,{label:"\u6700\u5927Cpu\u914D\u989D",name:"cpus",tooltip:"0 \u4E3A\u4E0D\u9650\u5236",children:(0,e.jsx)(me.Z,{step:.1,max:j==null?void 0:j.NCPU,marks:{0:"\u4E0D\u9650\u5236",.5:"0.5\u6838",1:"1\u6838",1.5:"1.5\u6838",2:"2\u6838",4:"4\u6838",6:"6\u6838",8:"8\u6838"}})}),(0,e.jsx)(X.Z,{label:"\u6700\u5927\u5185\u5B58\u914D\u989D",name:"memory",tooltip:"0 \u4E3A\u4E0D\u9650\u5236",children:(0,e.jsx)(me.Z,{step:256,max:Math.round((j==null?void 0:j.MemTotal)/1024/1024),marks:{0:"\u4E0D\u9650\u5236",1024:"1G",2048:"2G",3072:"3G",4096:"2G"}})})]})}function ke(){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(ee.u,{name:"label",creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BB9\u5668\u6807\u7B7E"},copyIconProps:!1,min:0,children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(w.Z,{width:"md",name:"name",label:"\u540D\u79F0",placeholder:""}),(0,e.jsx)(w.Z,{width:"md",name:"value",label:"\u503C",placeholder:""})]})})})}var Me=t(52688),Ne=t(69677);function fe(_){var Z=(0,m.useState)(""),j=M()(Z,2),R=j[0],F=j[1],D=(0,m.useState)("default"),p=M()(D,2),I=p[0],y=p[1],v=function(f){return(0,e.jsx)(A.ZP,{type:I==f.type?"primary":"default",onClick:function(){return i(f.type)},children:f.text})},i=function(f){if(y(f),f=="default")F("");else{var h;F((h=_.value)!==null&&h!==void 0?h:"")}};return(0,m.useEffect)(function(){_.value&&(F(_.value),y("user"))},[_.value]),(0,e.jsx)(X.Z,{label:_.label,tooltip:_.tooltip,name:_.name,children:(0,e.jsxs)(b.Z.Compact,{children:[(0,e.jsx)(v,{text:"\u4F7F\u7528\u9ED8\u8BA4",type:"default"}),(0,e.jsx)(v,{text:"\u81EA\u5B9A\u4E49",type:"user"}),(0,e.jsx)(Ne.Z,{disabled:I=="default",value:R,style:{width:"500px"},onChange:function(f){F(f.target.value)}})]})})}fe.defaultProps={};var ue=fe,Le=t(44771);function Ue(){var _,Z,j,R,F,D,p,I,y=(0,m.useContext)(K.Z),v=y.createFormRef,i=y.volumeListRef,n=y.domainRef,f=y.createEnvRef,h=y.createLinkRef;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Le.Z,{}),(0,e.jsx)(Me.Z,{name:"privileged",label:"\u8D4B\u4E88\u5BB9\u5668Root\u6743\u9650",initialValue:!1}),(0,e.jsx)(ue,{label:"\u5DE5\u4F5C\u76EE\u5F55",tooltip:"\u9ED8\u8BA4\u4F7F\u7528\u955C\u50CF\u4E2D\u6307\u5B9A\u7684\u5DE5\u4F5C\u76EE\u5F55",name:"workDir",value:(_=(Z=v.current)===null||Z===void 0?void 0:Z.getFieldValue("workDir"))!==null&&_!==void 0?_:""}),(0,e.jsx)(ue,{label:"User",tooltip:"\u5728\u5BB9\u5668\u4E2D\u8FD0\u884C\u547D\u4EE4\u7684\u7528\u6237",name:"user",value:(j=(R=v.current)===null||R===void 0?void 0:R.getFieldValue("user"))!==null&&j!==void 0?j:""}),(0,e.jsx)(ue,{label:"Command",tooltip:"\u542F\u52A8\u5BB9\u5668\u65F6\u8FD0\u884C\u7684\u547D\u4EE4\uFF0C\u4EE5\u7A7A\u683C\u5206\u9694",name:"command",value:(F=(D=v.current)===null||D===void 0?void 0:D.getFieldValue("command"))!==null&&F!==void 0?F:""}),(0,e.jsx)(ue,{label:"Entrypoint",tooltip:"\u65E0\u6CD5\u8986\u76D6\u955C\u50CF\u4E2D\u5DF2\u7ECF\u6307\u5B9A\u7684 Entrypoint \u547D\u4EE4",name:"entrypoint",value:(p=(I=v.current)===null||I===void 0?void 0:I.getFieldValue("entrypoint"))!==null&&p!==void 0?p:""})]})}var We=t(91845),pe=t(62597),ve=t(54006),$e=t(14946),Ke=t(93246),Ve=t(31418),Ge=(0,m.forwardRef)(function(_,Z){var j=(0,m.useState)(!1),R=M()(j,2),F=R[0],D=R[1],p=(0,m.useRef)(),I=Ve.Z.useApp();(0,m.useImperativeHandle)(Z,function(){return{}});var y=function(i){var n,f,h=!1,s=(n=(f=p.current)===null||f===void 0?void 0:f.getList())!==null&&n!==void 0?n:[];if(s.map(function(l){l.name==i.name&&(h=!0)}),!h){var a;(a=p.current)===null||a===void 0||a.add(i)}};return(0,e.jsxs)(U.Z,{title:"\u5173\u8054\u7F51\u7EDC",headerBordered:!0,children:[(0,e.jsx)(ee.u,{name:"network",actionRef:p,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u7F51\u7EDC"},actionGuard:{beforeAddRow:function(i,n){return!_.siteName||_.siteName==""||typeof _.siteName=="undefined"?((0,Ke.YZ)(I,"\u8BF7\u8F93\u5165\u7AD9\u70B9\u6807\u8BC6"),!1):(D(!0),!1)}},copyIconProps:!1,min:0,itemRender:function(i,n){return(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(w.Z,{label:"\u7F51\u7EDC\u540D\u79F0",name:"name",width:"md",disabled:!0,fieldProps:{value:n.record.name}}),(0,e.jsx)(X.Z,{label:"\u8BBF\u95EEHostname",name:"alise",children:(0,e.jsx)(o.Z.Text,{code:!0,copyable:!0,children:n.record.alise})}),(0,e.jsx)(X.Z,{label:" ",children:i.action})]})}}),(0,e.jsx)(E.Z,{title:"\u9009\u62E9\u7F51\u7EDC",width:1024,footer:!1,open:F,onCancel:function(){return D(!1)},children:(0,e.jsx)(V.Z,{rowKey:"Name",columns:[{title:"\u540D\u79F0",dataIndex:"Name",render:function(i,n,f,h,s){return n.Name=="none"||n.Name=="bridge"||n.Name=="host"?(0,e.jsxs)(e.Fragment,{children:[n.Name," ",(0,e.jsx)(de.Z,{color:"blue",children:"System"})]}):(0,e.jsx)(e.Fragment,{children:i})}},{title:"\u7C7B\u578B",ellipsis:!0,width:80,dataIndex:"Driver",search:!1},{title:"IPAM Driver",ellipsis:!0,width:120,search:!1,dataIndex:["IPAM","Driver"]},{title:"IPV4 IPAM Subnet",ellipsis:!0,width:150,search:!1,dataIndex:["IPAM","Config",0,"Subnet"]},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(i,n,f,h,s){return[(0,e.jsx)(A.ZP,{type:"link",onClick:function(){var l;y({name:n.Name,alise:[((l=_.siteName)!==null&&l!==void 0?l:"")+".pod.dpanel.local"]}),D(!1)},children:(0,e.jsx)(ie.Z,{})},n.Id)]}}],request:function(){var v=g()(r()().mark(function i(n,f,h){var s;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,$e.jR)({name:n.Name});case 2:return s=l.sent,l.abrupt("return",{data:s.data.list,success:!0,total:s.data.list.length});case 4:case"end":return l.stop()}},i)}));return function(i,n,f){return v.apply(this,arguments)}}(),pagination:{pageSize:10}})})]})}),He=Ge,ze=(0,m.forwardRef)(function(_,Z){var j=(0,m.useState)(""),R=M()(j,2),F=R[0],D=R[1],p=(0,m.useRef)();return(0,m.useImperativeHandle)(Z,function(){return{setExposePort:function(y){if(y){var v,i,n=(v=(i=p.current)===null||i===void 0?void 0:i.getList())!==null&&v!==void 0?v:[];Object.keys(y).map(function(f){var h=!1;if(n.map(function(a){a.dest==f&&(h=!0)}),!h){var s;(s=p.current)===null||s===void 0||s.add({host:"",dest:f})}})}},setHostname:function(y){D(y)}}}),(0,e.jsx)(U.Z,{title:"\u66B4\u9732\u7AEF\u53E3",headerBordered:!0,children:(0,e.jsx)(ee.u,{name:"ports",actionRef:p,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BF9\u5916\u90E8\u8BBF\u95EE"},min:0,copyIconProps:!1,children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(w.Z,{width:"md",name:"host",label:"\u5916\u90E8\u8BBF\u95EE\u57DF\u540D\u6216\u662F\u7AEF\u53E3",tooltip:"\u5BF9\u5916\u8BBF\u95EE\u53EF\u4EE5\u901A\u8FC7\u7ED1\u5B9A\u57DF\u540D\u8F6C\u53D1\u6216\u662F\u76F4\u63A5\u66B4\u9732\u7AEF\u53E3",placeholder:"\u7559\u7A7A\u5C06\u4F7F\u7528\u968F\u673A\u7AEF\u53E3"}),(0,e.jsx)(w.Z,{label:"\u5BB9\u5668\u5185\u7AEF\u53E3",width:"md",name:"dest",placeholder:"\u6784\u5EFA\u65F6 Expose \u6307\u5B9A\u7684\u7AEF\u53E3"})]})})})}),Ye=ze;function Je(){var _,Z,j,R=(0,m.useContext)(K.Z),F=R.createFormRef,D=R.volumeListRef,p=R.domainRef,I=R.createEnvRef,y=R.createLinkRef,v=(0,m.useState)(!1),i=M()(v,2),n=i[0],f=i[1],h=(0,ve.useSearchParams)(),s=M()(h,2),a=s[0],l=s[1],O=(0,ve.useNavigate)(),T=parseInt((_=a.get("id"))!==null&&_!==void 0?_:""),P=(Z=a.get("md5"))!==null&&Z!==void 0?Z:"",L=(j=a.get("imageId"))!==null&&j!==void 0?j:"";return(0,m.useEffect)(function(){if(P||T)(0,pe.iE)({md5:P,id:T}).then(function(d){var k;f(!0),d.data.env.network&&d.data.env.network.map(function(C){return!C.alise&&C.name!="bridge"&&(C.alise=[d.data.siteName+".pod.dpanel.local"]),C}),d.data.env.ports&&d.data.env.ports.map(function(C){return C.host=="0"&&(C.host=""),C}),(k=F.current)===null||k===void 0||k.setFieldsValue({siteTitle:d.data.siteTitle,siteName:d.data.siteName,imageName:d.data.env.imageName,privileged:d.data.env.privileged,workDir:d.data.env.workDir,user:d.data.env.user,command:d.data.env.command,entrypoint:d.data.env.entrypoint,shmsize:d.data.env.shmsize,cpus:d.data.env.cpus,memory:d.data.env.memory,environment:d.data.env.environment,label:d.data.env.label,volumesDefault:d.data.env.volumesDefault,volumes:d.data.env.volumes,ports:d.data.env.ports,links:d.data.env.links,network:d.data.env.network,restart:d.data.env.restart})});else{var S;f(!1),(S=F.current)===null||S===void 0||S.resetFields()}},[a]),(0,e.jsx)(W._z,{children:(0,e.jsx)(U.Z,{direction:"column",gutter:[0,10],children:(0,e.jsxs)($.A,{submitter:{render:function(d,k){return(0,e.jsx)(Q.S,{children:k})}},formRef:F,onFinish:function(){var S=g()(r()().mark(function d(k){return r()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return k.md5=P,H.next=3,(0,pe.$G)(k);case 3:return O("/app/list"),H.abrupt("return",!0);case 5:case"end":return H.stop()}},d)}));return function(d){return S.apply(this,arguments)}}(),children:[(0,e.jsxs)(U.Z,{title:"\u57FA\u7840\u4FE1\u606F",headerBordered:!0,children:[(0,e.jsx)(w.Z,{name:"siteTitle",label:"\u7AD9\u70B9\u540D\u79F0",required:!0,rules:[{required:!0}],fieldProps:{onChange:function(d){var k="";if(d.target.value&&!n){var C,H=(0,We.N9)(d.target.value.trim(),{toneType:"none",type:"array"});k=H.join(""),(C=F.current)===null||C===void 0||C.setFieldValue("siteName",k)}}},placeholder:"\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0"}),(0,e.jsx)(w.Z,{name:"siteName",label:"\u7AD9\u70B9\u6807\u8BC6",tooltip:"\u7AD9\u70B9\u552F\u4E00\u6807\u8BC6\uFF0C\u7528\u4E8E\u6807\u8BC6\u7AD9\u70B9\u548C\u5185\u90E8\u8BBF\u95EE",required:!0,disabled:n,rules:[{required:!0}],placeholder:"\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0"}),(0,e.jsx)(je,{redeploy:n,fromImageId:L})]}),(0,e.jsx)(Ye,{ref:p}),(0,e.jsx)(ye,{onAddEnv:function(d,k){var C;(C=I.current)===null||C===void 0||C.addEnvItem(d,k)},ref:y}),(0,e.jsx)(N.Z,{name:["siteName"],children:function(d){var k=d.siteName;return(0,e.jsx)(He,{siteName:k})}}),(0,e.jsx)(Re,{ref:I}),(0,e.jsx)(Ae,{ref:D}),(0,e.jsx)(U.Z,{title:"\u9AD8\u7EA7\u914D\u7F6E",headerBordered:!0,collapsible:!0,defaultCollapsed:!0,children:(0,e.jsx)(J.Z,{items:[{label:"\u542F\u52A8\u9879",key:"run-command",children:(0,e.jsx)(Ue,{})},{label:"\u8D44\u6E90\u914D\u7F6E",key:"runtime",children:(0,e.jsx)(Oe,{})},{label:"\u6807\u7B7E",key:"label",children:(0,e.jsx)(ke,{})}]})})]},"form")})})}},62597:function(te,z,t){t.d(z,{$G:function(){return M},Ct:function(){return m},Tb:function(){return Q},cl:function(){return U},iE:function(){return N},lK:function(){return b},xb:function(){return X}});var Y=t(15009),r=t.n(Y),q=t(99289),g=t.n(q),B=t(54006);function M(E){return W.apply(this,arguments)}function W(){return W=g()(r()().mark(function E(o){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,B.request)("/api/app/site/create-by-image",{method:"POST",data:o}));case 1:case"end":return u.stop()}},E)})),W.apply(this,arguments)}function U(E){return $.apply(this,arguments)}function $(){return $=g()(r()().mark(function E(o){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,B.request)("/api/app/site/get-list",{method:"POST",data:o}));case 1:case"end":return u.stop()}},E)})),$.apply(this,arguments)}function Q(E){return w.apply(this,arguments)}function w(){return w=g()(r()().mark(function E(o){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,B.request)("/api/app/log/run",{method:"POST",data:o});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},E)})),w.apply(this,arguments)}function N(E){return J.apply(this,arguments)}function J(){return J=g()(r()().mark(function E(o){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,B.request)("/api/app/site/get-detail",{data:o,method:"POST"});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},E)})),J.apply(this,arguments)}function m(E){return K.apply(this,arguments)}function K(){return K=g()(r()().mark(function E(o){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,B.request)("/api/app/container/delete",{method:"POST",data:o}));case 1:case"end":return u.stop()}},E)})),K.apply(this,arguments)}function X(E){return V.apply(this,arguments)}function V(){return V=g()(r()().mark(function E(o){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,B.request)("/api/app/site/delete",{method:"POST",data:o}));case 1:case"end":return u.stop()}},E)})),V.apply(this,arguments)}function b(E){return A.apply(this,arguments)}function A(){return A=g()(r()().mark(function E(o){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,B.request)("/api/app/site/update-title",{method:"POST",data:o});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},E)})),A.apply(this,arguments)}},2831:function(te,z,t){t.d(z,{a:function(){return M},d:function(){return U}});var Y=t(15009),r=t.n(Y),q=t(99289),g=t.n(q),B=t(54006);function M(){return W.apply(this,arguments)}function W(){return W=g()(r()().mark(function Q(){return r()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,(0,B.request)("/api/common/home/info",{method:"POST"});case 2:return N.abrupt("return",N.sent);case 3:case"end":return N.stop()}},Q)})),W.apply(this,arguments)}function U(){return $.apply(this,arguments)}function $(){return $=g()(r()().mark(function Q(){return r()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,(0,B.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return N.abrupt("return",N.sent);case 3:case"end":return N.stop()}},Q)})),$.apply(this,arguments)}},14946:function(te,z,t){t.d(z,{CI:function(){return Q},HY:function(){return b},IS:function(){return M},XY:function(){return m},_3:function(){return E},_x:function(){return N},jR:function(){return U},t9:function(){return X}});var Y=t(15009),r=t.n(Y),q=t(99289),g=t.n(q),B=t(54006);function M(x){return W.apply(this,arguments)}function W(){return W=g()(r()().mark(function x(u){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,B.request)("/api/app/network/get-detail",{method:"POST",data:u}));case 1:case"end":return c.stop()}},x)})),W.apply(this,arguments)}function U(x){return $.apply(this,arguments)}function $(){return $=g()(r()().mark(function x(u){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,B.request)("/api/app/network/get-list",{method:"POST",data:u}));case 1:case"end":return c.stop()}},x)})),$.apply(this,arguments)}function Q(){return w.apply(this,arguments)}function w(){return w=g()(r()().mark(function x(){return r()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,(0,B.request)("/api/app/network/prune",{method:"POST"});case 2:return G.abrupt("return",G.sent);case 3:case"end":return G.stop()}},x)})),w.apply(this,arguments)}function N(x){return J.apply(this,arguments)}function J(){return J=g()(r()().mark(function x(u){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,B.request)("/api/app/network/delete",{method:"POST",data:u});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},x)})),J.apply(this,arguments)}function m(x){return K.apply(this,arguments)}function K(){return K=g()(r()().mark(function x(u){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,B.request)("/api/app/network/create",{method:"POST",data:u});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},x)})),K.apply(this,arguments)}function X(x){return V.apply(this,arguments)}function V(){return V=g()(r()().mark(function x(u){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,B.request)("/api/app/network/disconnect",{method:"POST",data:u});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},x)})),V.apply(this,arguments)}function b(x){return A.apply(this,arguments)}function A(){return A=g()(r()().mark(function x(u){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,B.request)("/api/app/network/connect",{method:"POST",data:u});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},x)})),A.apply(this,arguments)}function E(x){return o.apply(this,arguments)}function o(){return o=g()(r()().mark(function x(u){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,B.request)("/api/app/network/get-container-list",{method:"POST",data:u}));case 1:case"end":return c.stop()}},x)})),o.apply(this,arguments)}},60335:function(te,z,t){t.d(z,{IE:function(){return U},IW:function(){return M},KK:function(){return m},LJ:function(){return X},eE:function(){return N},jV:function(){return Q}});var Y=t(15009),r=t.n(Y),q=t(99289),g=t.n(q),B=t(54006);function M(b){return W.apply(this,arguments)}function W(){return W=g()(r()().mark(function b(A){return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,B.request)("/api/app/container/status",{method:"POST",data:A}));case 1:case"end":return o.stop()}},b)})),W.apply(this,arguments)}function U(b){return $.apply(this,arguments)}function $(){return $=g()(r()().mark(function b(A){return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,B.request)("/api/app/container/get-list",{data:A,method:"POST"}));case 1:case"end":return o.stop()}},b)})),$.apply(this,arguments)}function Q(b){return w.apply(this,arguments)}function w(){return w=g()(r()().mark(function b(A){return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,B.request)("/api/app/container/get-detail",{data:A,method:"POST"}));case 1:case"end":return o.stop()}},b)})),w.apply(this,arguments)}function N(b){return J.apply(this,arguments)}function J(){return J=g()(r()().mark(function b(A){return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,B.request)("/api/app/container/update",{data:A,method:"POST"}));case 1:case"end":return o.stop()}},b)})),J.apply(this,arguments)}function m(){return K.apply(this,arguments)}function K(){return K=g()(r()().mark(function b(){return r()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,B.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return E.stop()}},b)})),K.apply(this,arguments)}function X(b){return V.apply(this,arguments)}function V(){return V=g()(r()().mark(function b(A){return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,B.request)("/api/app/container/export",{method:"POST",data:A,responseType:"blob"}));case 1:case"end":return o.stop()}},b)})),V.apply(this,arguments)}}}]);
