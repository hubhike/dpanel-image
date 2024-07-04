"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4214],{95556:function(se,L,t){var m=t(87462),u=t(62435),W=t(3803),M=t(84089),j=function(F,T){return u.createElement(M.Z,(0,m.Z)({},F,{ref:T,icon:W.Z}))},I=u.forwardRef(j);L.Z=I},5966:function(se,L,t){var m=t(97685),u=t(1413),W=t(45987),M=t(21770),j=t(72723),I=t(55241),B=t(97435),F=t(62435),T=t(33468),v=t(86074),z=["fieldProps","proFieldProps"],V=["fieldProps","proFieldProps"],O="text",C=function(E){var i=E.fieldProps,N=E.proFieldProps,U=(0,W.Z)(E,z);return(0,v.jsx)(T.Z,(0,u.Z)({valueType:O,fieldProps:i,filedConfig:{valueType:O},proFieldProps:N},U))},h=function(E){var i=(0,M.Z)(E.open||!1,{value:E.open,onChange:E.onOpenChange}),N=(0,m.Z)(i,2),U=N[0],K=N[1];return(0,v.jsx)(j.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(A){var $,w=A.getFieldValue(E.name||[]);return(0,v.jsx)(I.Z,(0,u.Z)((0,u.Z)({getPopupContainer:function(y){return y&&y.parentNode?y.parentNode:y},onOpenChange:K,content:(0,v.jsxs)("div",{style:{padding:"4px 0"},children:[($=E.statusRender)===null||$===void 0?void 0:$.call(E,w),E.strengthText?(0,v.jsx)("div",{style:{marginTop:10},children:(0,v.jsx)("span",{children:E.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},E.popoverProps),{},{open:U,children:E.children}))}})},D=function(E){var i=E.fieldProps,N=E.proFieldProps,U=(0,W.Z)(E,V),K=(0,F.useState)(!1),S=(0,m.Z)(K,2),A=S[0],$=S[1];return i!=null&&i.statusRender&&U.name?(0,v.jsx)(h,{name:U.name,statusRender:i==null?void 0:i.statusRender,popoverProps:i==null?void 0:i.popoverProps,strengthText:i==null?void 0:i.strengthText,open:A,onOpenChange:$,children:(0,v.jsx)("div",{children:(0,v.jsx)(T.Z,(0,u.Z)({valueType:"password",fieldProps:(0,u.Z)((0,u.Z)({},(0,B.Z)(i,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(k){var y;i==null||(y=i.onBlur)===null||y===void 0||y.call(i,k),$(!1)},onClick:function(k){var y;i==null||(y=i.onClick)===null||y===void 0||y.call(i,k),$(!0)}}),proFieldProps:N,filedConfig:{valueType:O}},U))})}):(0,v.jsx)(T.Z,(0,u.Z)({valueType:"password",fieldProps:i,proFieldProps:N,filedConfig:{valueType:O}},U))},o=C;o.Password=D,o.displayName="ProFormComponent",L.Z=o},96042:function(se,L,t){t.d(L,{Z:function(){return T}});var m=t(97857),u=t.n(m),W=t(5574),M=t.n(W),j=t(75870),I=t(34041),B=t(62435),F=t(86074);function T(v){var z=(0,B.useState)([]),V=M()(z,2),O=V[0],C=V[1];(0,B.useEffect)(function(){(0,j.Ot)().then(function(D){D&&C(D.data.list)})},[]);var h={};return v.multiple&&(h.mode="multiple"),v.top&&(h.placement="topLeft"),(0,F.jsx)(I.Z,u()({onChange:function(o){if(v.multiple){var Y=o.map(function(E){return O[E]});v.onChangeList&&v.onChangeList(Y)}else v.onChange&&v.onChange(O[o])},placeholder:"\u9009\u62E9\u955C\u50CF\u4ED3\u5E93\uFF0C\u672C\u5730\u4F7F\u7528\u7559\u7A7A\u5373\u53EF",options:O.map(function(D,o){return{value:o,label:D.title+"("+D.serverAddress+")"}})},h))}},88583:function(se,L,t){t.r(L),t.d(L,{default:function(){return a}});var m=t(15009),u=t.n(m),W=t(99289),M=t.n(W),j=t(5574),I=t.n(j),B=t(6110),F=t(12010),T=t(37476),v=t(62370),z=t(5966),V=t(31418),O=t(14726),C=t(75891),h=t(78957),D=t(66309),o=t(96074),Y=t(83062),E=t(84567),i=t(72723),N=t(69677),U=t(68508),K=t(62435),S=t(54006),A=t(18148),$=t(5251),w=t(80821),k=t(43425),y=t(95556),_e=t(93246),e=t(28307),d=t(96042),r=t(86074);function a(){var s=(0,S.useParams)(),p=(0,K.useRef)(),R=(0,K.useState)({force:!1}),G=I()(R,2),X=G[0],te=G[1],Z=(0,K.useState)([]),re=I()(Z,2),q=re[0],J=re[1],le=V.Z.useApp(),ue=(0,K.useState)(1),x=I()(ue,2),ne=x[0],de=x[1],ie=(0,K.useRef)();return(0,K.useEffect)(function(){var P;(P=p.current)===null||P===void 0||P.reload(),(0,A.Xn)({page:1,pageSize:9999,all:!0}).then(function(l){return J(l.data.list),!0})},[s,ne]),(0,r.jsx)(B._z,{header:{extra:[(0,r.jsx)(O.ZP,{type:"primary",children:(0,r.jsx)(S.Link,{to:"/image/create",children:"\u6784\u5EFA\u955C\u50CF"})},"create"),(0,r.jsx)(e.Z,{onFinish:function(){var l,n;!((l=p.current)===null||l===void 0)&&l.reloadAndRest&&((n=p.current)===null||n===void 0||n.reloadAndRest())}},"remote")]},children:(0,r.jsx)(F.Z,{rowKey:"Id",columns:[{title:"Id",ellipsis:!0,search:!1,dataIndex:"Id",width:200,render:function(l,n,_,b,c){return(0,r.jsx)(S.Link,{to:"/image/detail/"+n.Id,children:n.Id},"edit")}},{title:"\u540D\u79F0",dataIndex:"title",width:200,render:function(l,n,_,b,c){var f="";return q.map(function(g){n.RepoTags.map(function(Q){Q==g.tag&&(f=g.title)})}),(0,r.jsx)(C.Z.Text,{editable:{tooltip:"\u4FEE\u6539\u955C\u50CF\u5907\u6CE8\u540D\u79F0",onChange:function(){var g=M()(u()().mark(function ae(ce){var H;return u()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return ee.next=2,(0,A.Fj)({tag:n.RepoTags[0],title:ce});case 2:H=ee.sent,de(ne+1),(0,_e.$h)(le,"\u4FEE\u6539\u955C\u50CF\u540D\u79F0\u6210\u529F");case 5:case"end":return ee.stop()}},ae)}));function Q(ae){return g.apply(this,arguments)}return Q}()},children:f||"---"})}},{title:"Tag",dataIndex:"tag",render:function(l,n,_,b){return(0,r.jsx)(h.Z,{direction:"vertical",style:{textAlign:"left"},children:n.RepoTags.map(function(c,f){return(0,r.jsx)(D.Z,{color:"#2db7f5",children:(0,r.jsx)(C.Z.Text,{copyable:!0,style:{color:"#ffffff"},children:c},f)},f)})},n.Id)}},{title:"\u5C3A\u5BF8",dataIndex:"size",ellipsis:!0,width:"120px",search:!1,sorter:function(l,n){return l.Size-n.Size},render:function(l,n,_,b){return(0,r.jsx)("div",{children:(0,$.FI)(parseFloat(n.Size))},n.Id)}},{title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"Created",ellipsis:!0,search:!1,width:"180px",render:function(l,n,_,b){return(0,r.jsx)("div",{children:(0,$.ZM)(n.Created*1e3)},n.Id)},sorter:function(l,n){return l.Created-n.Created}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:"150px",render:function(l,n,_,b){return(0,r.jsxs)(h.Z,{split:(0,r.jsx)(o.Z,{type:"vertical"}),children:[(0,r.jsx)(S.Link,{to:"/image/detail/"+n.Id,children:(0,r.jsx)(Y.Z,{title:"\u7BA1\u7406",children:(0,r.jsx)(k.Z,{})})},"edit"),(0,r.jsx)(S.Link,{to:"/app/create/image?imageId="+n.Id,children:(0,r.jsx)(Y.Z,{title:"\u521B\u5EFA\u5BB9\u5668",children:(0,r.jsx)(y.Z,{})})},"create")]})}}],request:function(){var P=M()(u()().mark(function l(n,_,b){var c;return u()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,A.KG)({tag:n.tag,title:n.title});case 2:if(c=g.sent,!(!c||!c.data||!c.data.list)){g.next=5;break}return g.abrupt("return",{data:[],success:!0,total:0});case 5:return g.abrupt("return",{data:c.data.list,success:!0,total:c.data.list.length});case 6:case"end":return g.stop()}},l)}));return function(l,n,_){return P.apply(this,arguments)}}(),pagination:{pageSize:10},search:{collapsed:!1},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},actionRef:p,tableAlertOptionRender:function(l){var n=l.selectedRowKeys,_=l.selectedRows;return(0,r.jsxs)(h.Z,{size:16,children:[(0,r.jsx)(w.Z,{danger:!0,type:"primary",action:function(){return(0,A.ao)({md5:n,force:X.force})},onSuccess:function(){var c,f;return!((c=p.current)===null||c===void 0)&&c.reloadAndRest&&((f=p.current)===null||f===void 0||f.reloadAndRest()),!0},onError:function(){var c,f;return!((c=p.current)===null||c===void 0)&&c.reset&&((f=p.current)===null||f===void 0||f.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",confirm:(0,r.jsxs)(h.Z,{style:{width:280},direction:"vertical",children:[(0,r.jsx)(C.Z.Text,{children:"\u5220\u9664\u955C\u50CF\u540E\u65E0\u6CD5\u6062\u590D,\u786E\u8BA4\u5417\uFF1F"}),(0,r.jsx)(E.Z,{name:"deleteVolume",onChange:function(c){return te({force:c.target.checked})},children:"\u5F3A\u5236\u5220\u9664\uFF1F"})]}),children:"\u6279\u91CF\u5220\u9664"}),(0,r.jsxs)(T.Y,{formRef:ie,title:"\u6279\u91CF\u63A8\u9001\u955C\u50CF",trigger:(0,r.jsx)(O.ZP,{children:"\u6279\u91CF\u63A8\u9001"}),onFinish:function(){var b=M()(u()().mark(function c(f){var g,Q,ae;return u()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,(0,A.KX)({md5:n,registryId:f.registryId,newNamespace:f.newNamespace});case 2:return ae=H.sent,(g=p.current)===null||g===void 0||g.reload(),!((Q=p.current)===null||Q===void 0)&&Q.clearSelected&&p.current.clearSelected(),H.abrupt("return",!0);case 6:case"end":return H.stop()}},c)}));return function(c){return b.apply(this,arguments)}}(),children:[(0,r.jsx)(i.Z.List,{name:"registryId",children:function(c){return c.map(function(f,g){return console.log(f),(0,r.jsx)(N.Z,{hidden:!0},g)})}}),(0,r.jsx)(v.Z,{label:"\u955C\u50CF\u4ED3\u5E93",name:"imageRespo",tooltip:(0,r.jsxs)(r.Fragment,{children:["\u63A8\u9001\u524D\u8BF7\u4FDD\u8BC1\u4ED3\u5E93\u4E2D\u6709\u6307\u5B9A\u7684\u547D\u540D\u7A7A\u95F4, \u5982\u6CA1\u6709\u8BF7\u5148 ",(0,r.jsx)("a",{href:"",target:"_blank",children:"\u6DFB\u52A0\u4ED3\u5E93"})]}),children:(0,r.jsx)(d.Z,{multiple:!0,top:!0,onChangeList:function(c){var f;(f=ie.current)===null||f===void 0||f.setFieldValue("registryId",c.map(function(g){return g.id}))}})}),(0,r.jsx)(z.Z,{tooltip:"\u53EF\u4EE5\u901A\u8FC7\u6B64\u9879\u91CD\u65B0\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4\uFF0Cdocker hub \u4E0D\u53D7\u8BE5\u914D\u7F6E\u7684\u5F71\u54CD\u3002 \u914D\u7F6E\u6B64\u9879\u540E mysql:latest \u4F1A\u63A8\u9001\u81F3 {\u547D\u540D\u7A7A\u95F4}/mysql:latest\uFF0C dpanel/dpanel:latest \u4F1A\u63A8\u9001\u81F3 {\u547D\u540D\u7A7A\u95F4}/dpanel:latest",label:"\u91CD\u5199\u975E\u5B98\u65B9\u4ED3\u5E93\u547D\u540D\u7A7A\u95F4",name:"newNamespace"})]})]})},tableExtraRender:function(){var l;return(0,r.jsx)(U.Z,{mode:"horizontal",selectedKeys:[(l=s.type)!==null&&l!==void 0?l:"all"],items:[{label:(0,r.jsx)(S.Link,{to:"/image/list/all",replace:!0,children:"\u5168\u90E8\u955C\u50CF"}),key:"all"},{label:(0,r.jsx)(S.Link,{to:"/image/list/build",replace:!0,children:"\u6784\u5EFA\u4EFB\u52A1"}),key:"build"}]})},toolBarRender:function(){return[(0,r.jsx)(w.Z,{action:function(){return(0,A.c7)()},onSuccess:function(){var n,_;return!((n=p.current)===null||n===void 0)&&n.reloadAndRest&&((_=p.current)===null||_===void 0||_.reloadAndRest()),!0},onError:function(){var n,_;return!((n=p.current)===null||n===void 0)&&n.reset&&((_=p.current)===null||_===void 0||_.reset()),!0},messageSuccess:"\u6E05\u9664\u6210\u529F",confirm:"\u662F\u5426\u6E05\u7406\u672A\u4F7F\u7528\u6216\u662F\u672A\u8FD0\u884C\u7684\u955C\u50CF",children:"\u6E05\u7406\u672A\u4F7F\u7528\u955C\u50CF"})]}})})}},75870:function(se,L,t){t.d(L,{Ot:function(){return I},ZH:function(){return F},ix:function(){return v},t1:function(){return V}});var m=t(15009),u=t.n(m),W=t(99289),M=t.n(W),j=t(54006);function I(C){return B.apply(this,arguments)}function B(){return B=M()(u()().mark(function C(h){return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,j.request)("/api/common/registry/get-list",{method:"POST",data:h}));case 1:case"end":return o.stop()}},C)})),B.apply(this,arguments)}function F(C){return T.apply(this,arguments)}function T(){return T=M()(u()().mark(function C(h){return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,j.request)("/api/common/registry/create",{method:"POST",data:h}));case 1:case"end":return o.stop()}},C)})),T.apply(this,arguments)}function v(C){return z.apply(this,arguments)}function z(){return z=M()(u()().mark(function C(h){return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,j.request)("/api/common/registry/delete",{method:"POST",data:h}));case 1:case"end":return o.stop()}},C)})),z.apply(this,arguments)}function V(C){return O.apply(this,arguments)}function O(){return O=M()(u()().mark(function C(h){return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,j.request)("/api/common/registry/get-detail",{method:"POST",data:h}));case 1:case"end":return o.stop()}},C)})),O.apply(this,arguments)}},66309:function(se,L,t){t.d(L,{Z:function(){return _e}});var m=t(62435),u=t(97937),W=t(93967),M=t.n(W),j=t(98787),I=t(69760),B=t(45353),F=t(53124),T=t(54548),v=t(10274),z=t(14747),V=t(45503),O=t(91945);const C=e=>{const{paddingXXS:d,lineWidth:r,tagPaddingHorizontal:a,componentCls:s,calc:p}=e,R=p(a).sub(r).equal(),G=p(d).sub(r).equal();return{[s]:Object.assign(Object.assign({},(0,z.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:R,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,T.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${s}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${s}-close-icon`]:{marginInlineStart:G,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${s}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${s}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:R}}),[`${s}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},h=e=>{const{lineWidth:d,fontSizeIcon:r,calc:a}=e,s=e.fontSizeSM;return(0,V.TS)(e,{tagFontSize:s,tagLineHeight:(0,T.bf)(a(e.lineHeightSM).mul(s).equal()),tagIconSize:a(r).sub(a(d).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},D=e=>({defaultBg:new v.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var o=(0,O.I$)("Tag",e=>{const d=h(e);return C(d)},D),Y=function(e,d){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&d.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)d.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r},i=m.forwardRef((e,d)=>{const{prefixCls:r,style:a,className:s,checked:p,onChange:R,onClick:G}=e,X=Y(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:te,tag:Z}=m.useContext(F.E_),re=ne=>{R==null||R(!p),G==null||G(ne)},q=te("tag",r),[J,le,ue]=o(q),x=M()(q,`${q}-checkable`,{[`${q}-checkable-checked`]:p},Z==null?void 0:Z.className,s,le,ue);return J(m.createElement("span",Object.assign({},X,{ref:d,style:Object.assign(Object.assign({},a),Z==null?void 0:Z.style),className:x,onClick:re})))}),N=t(98719);const U=e=>(0,N.Z)(e,(d,r)=>{let{textColor:a,lightBorderColor:s,lightColor:p,darkColor:R}=r;return{[`${e.componentCls}${e.componentCls}-${d}`]:{color:a,background:p,borderColor:s,"&-inverse":{color:e.colorTextLightSolid,background:R,borderColor:R},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var K=(0,O.bk)(["Tag","preset"],e=>{const d=h(e);return U(d)},D);function S(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const A=(e,d,r)=>{const a=S(r);return{[`${e.componentCls}${e.componentCls}-${d}`]:{color:e[`color${r}`],background:e[`color${a}Bg`],borderColor:e[`color${a}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var $=(0,O.bk)(["Tag","status"],e=>{const d=h(e);return[A(d,"success","Success"),A(d,"processing","Info"),A(d,"error","Error"),A(d,"warning","Warning")]},D),w=function(e,d){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&d.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)d.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const k=(e,d)=>{const{prefixCls:r,className:a,rootClassName:s,style:p,children:R,icon:G,color:X,onClose:te,closeIcon:Z,closable:re,bordered:q=!0}=e,J=w(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:le,direction:ue,tag:x}=m.useContext(F.E_),[ne,de]=m.useState(!0);m.useEffect(()=>{"visible"in J&&de(J.visible)},[J.visible]);const ie=(0,j.o2)(X),P=(0,j.yT)(X),l=ie||P,n=Object.assign(Object.assign({backgroundColor:X&&!l?X:void 0},x==null?void 0:x.style),p),_=le("tag",r),[b,c,f]=o(_),g=M()(_,x==null?void 0:x.className,{[`${_}-${X}`]:l,[`${_}-has-color`]:X&&!l,[`${_}-hidden`]:!ne,[`${_}-rtl`]:ue==="rtl",[`${_}-borderless`]:!q},a,s,c,f),Q=oe=>{oe.stopPropagation(),te==null||te(oe),!oe.defaultPrevented&&de(!1)},[,ae]=(0,I.Z)({closable:re,closeIcon:Z!=null?Z:x==null?void 0:x.closeIcon,customCloseIconRender:oe=>oe===null?m.createElement(u.Z,{className:`${_}-close-icon`,onClick:Q}):m.createElement("span",{className:`${_}-close-icon`,onClick:Q},oe),defaultCloseIcon:null,defaultClosable:!1}),ce=typeof J.onClick=="function"||R&&R.type==="a",H=G||null,me=H?m.createElement(m.Fragment,null,H,R&&m.createElement("span",null,R)):R,ee=m.createElement("span",Object.assign({},J,{ref:d,className:g,style:n}),me,ae,ie&&m.createElement(K,{key:"preset",prefixCls:_}),P&&m.createElement($,{key:"status",prefixCls:_}));return b(ce?m.createElement(B.Z,{component:"Tag"},ee):ee)},y=m.forwardRef(k);y.CheckableTag=i;var _e=y}}]);