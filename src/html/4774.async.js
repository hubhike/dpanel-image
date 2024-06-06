"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4774],{52688:function(me,J,s){var o=s(1413),E=s(45987),I=s(62435),z=s(33468),H=s(86074),Y=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],_=I.forwardRef(function(R,Z){var x=R.fieldProps,K=R.unCheckedChildren,k=R.checkedChildren,B=R.proFieldProps,q=(0,E.Z)(R,Y);return(0,H.jsx)(z.Z,(0,o.Z)({valueType:"switch",fieldProps:(0,o.Z)({unCheckedChildren:K,checkedChildren:k},x),ref:Z,valuePropName:"checked",proFieldProps:B,filedConfig:{valuePropName:"checked",ignoreWidth:!0,customLightMode:!0}},q))});J.Z=_},5966:function(me,J,s){var o=s(97685),E=s(1413),I=s(45987),z=s(21770),H=s(72723),Y=s(55241),_=s(97435),R=s(62435),Z=s(33468),x=s(86074),K=["fieldProps","proFieldProps"],k=["fieldProps","proFieldProps"],B="text",q=function(f){var p=f.fieldProps,L=f.proFieldProps,T=(0,I.Z)(f,K);return(0,x.jsx)(Z.Z,(0,E.Z)({valueType:B,fieldProps:p,filedConfig:{valueType:B},proFieldProps:L},T))},ee=function(f){var p=(0,z.Z)(f.open||!1,{value:f.open,onChange:f.onOpenChange}),L=(0,o.Z)(p,2),T=L[0],ae=L[1];return(0,x.jsx)(H.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(N){var F,te=N.getFieldValue(f.name||[]);return(0,x.jsx)(Y.Z,(0,E.Z)((0,E.Z)({getPopupContainer:function(b){return b&&b.parentNode?b.parentNode:b},onOpenChange:ae,content:(0,x.jsxs)("div",{style:{padding:"4px 0"},children:[(F=f.statusRender)===null||F===void 0?void 0:F.call(f,te),f.strengthText?(0,x.jsx)("div",{style:{marginTop:10},children:(0,x.jsx)("span",{children:f.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},f.popoverProps),{},{open:T,children:f.children}))}})},V=function(f){var p=f.fieldProps,L=f.proFieldProps,T=(0,I.Z)(f,k),ae=(0,R.useState)(!1),w=(0,o.Z)(ae,2),N=w[0],F=w[1];return p!=null&&p.statusRender&&T.name?(0,x.jsx)(ee,{name:T.name,statusRender:p==null?void 0:p.statusRender,popoverProps:p==null?void 0:p.popoverProps,strengthText:p==null?void 0:p.strengthText,open:N,onOpenChange:F,children:(0,x.jsx)("div",{children:(0,x.jsx)(Z.Z,(0,E.Z)({valueType:"password",fieldProps:(0,E.Z)((0,E.Z)({},(0,_.Z)(p,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(C){var b;p==null||(b=p.onBlur)===null||b===void 0||b.call(p,C),F(!1)},onClick:function(C){var b;p==null||(b=p.onClick)===null||b===void 0||b.call(p,C),F(!0)}}),proFieldProps:L,filedConfig:{valueType:B}},T))})}):(0,x.jsx)(Z.Z,(0,E.Z)({valueType:"password",fieldProps:p,proFieldProps:L,filedConfig:{valueType:B}},T))},X=q;X.Password=V,X.displayName="ProFormComponent",J.Z=X},26412:function(me,J,s){s.d(J,{Z:function(){return A}});var o=s(62435),E=s(93967),I=s.n(E),z=s(74443),H=s(53124),Y=s(98675),_=s(25378),Z={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},K=o.createContext({}),k=s(50344),B=function(e,n){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)n.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(r[l[a]]=e[l[a]]);return r};const q=e=>(0,k.Z)(e).map(n=>Object.assign(Object.assign({},n==null?void 0:n.props),{key:n.key}));function ee(e,n,r){const l=o.useMemo(()=>n||q(r),[n,r]);return o.useMemo(()=>l.map(d=>{var{span:u}=d,S=B(d,["span"]);return Object.assign(Object.assign({},S),{span:typeof u=="number"?u:(0,z.m9)(e,u)})}),[l,e])}function V(e,n,r){let l=e,a=!1;return(r===void 0||r>n)&&(l=Object.assign(Object.assign({},e),{span:n}),a=r!==void 0),[l,a]}function X(e,n){const r=[];let l=[],a=n,d=!1;return e.filter(u=>u).forEach((u,S)=>{const v=u==null?void 0:u.span,y=v||1;if(S===e.length-1){const[P,j]=V(u,a,v);d=d||j,l.push(P),r.push(l);return}if(y<a)a-=y,l.push(u);else{const[P,j]=V(u,a,y);d=d||j,l.push(P),r.push(l),a=n,l=[]}}),[r,d]}var f=(e,n)=>{const[r,l]=(0,o.useMemo)(()=>X(n,e),[n,e]);return r},L=e=>{let{children:n}=e;return n};function T(e){return e!=null}var w=e=>{const{itemPrefixCls:n,component:r,span:l,className:a,style:d,labelStyle:u,contentStyle:S,bordered:v,label:y,content:P,colon:j,type:U}=e,M=r;return v?o.createElement(M,{className:I()({[`${n}-item-label`]:U==="label",[`${n}-item-content`]:U==="content"},a),style:d,colSpan:l},T(y)&&o.createElement("span",{style:u},y),T(P)&&o.createElement("span",{style:S},P)):o.createElement(M,{className:I()(`${n}-item`,a),style:d,colSpan:l},o.createElement("div",{className:`${n}-item-container`},(y||y===0)&&o.createElement("span",{className:I()(`${n}-item-label`,{[`${n}-item-no-colon`]:!j}),style:u},y),(P||P===0)&&o.createElement("span",{className:I()(`${n}-item-content`),style:S},P)))};function N(e,n,r){let{colon:l,prefixCls:a,bordered:d}=n,{component:u,type:S,showLabel:v,showContent:y,labelStyle:P,contentStyle:j}=r;return e.map((U,M)=>{let{label:ne,children:O,prefixCls:oe=a,className:le,style:re,labelStyle:W,contentStyle:$,span:G=1,key:se}=U;return typeof u=="string"?o.createElement(w,{key:`${S}-${se||M}`,className:le,style:re,labelStyle:Object.assign(Object.assign({},P),W),contentStyle:Object.assign(Object.assign({},j),$),span:G,colon:l,component:u,itemPrefixCls:oe,bordered:d,label:v?ne:null,content:y?O:null,type:S}):[o.createElement(w,{key:`label-${se||M}`,className:le,style:Object.assign(Object.assign(Object.assign({},P),re),W),span:1,colon:l,component:u[0],itemPrefixCls:oe,bordered:d,label:ne,type:"label"}),o.createElement(w,{key:`content-${se||M}`,className:le,style:Object.assign(Object.assign(Object.assign({},j),re),$),span:G*2-1,component:u[1],itemPrefixCls:oe,bordered:d,content:O,type:"content"})]})}var te=e=>{const n=o.useContext(K),{prefixCls:r,vertical:l,row:a,index:d,bordered:u}=e;return l?o.createElement(o.Fragment,null,o.createElement("tr",{key:`label-${d}`,className:`${r}-row`},N(a,e,Object.assign({component:"th",type:"label",showLabel:!0},n))),o.createElement("tr",{key:`content-${d}`,className:`${r}-row`},N(a,e,Object.assign({component:"td",type:"content",showContent:!0},n)))):o.createElement("tr",{key:d,className:`${r}-row`},N(a,e,Object.assign({component:u?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))},C=s(54548),b=s(14747),ge=s(91945),t=s(45503);const m=e=>{const{componentCls:n,labelBg:r}=e;return{[`&${n}-bordered`]:{[`> ${n}-view`]:{border:`${(0,C.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${n}-row`]:{borderBottom:`${(0,C.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,C.bf)(e.padding)} ${(0,C.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,C.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${n}-item-label`]:{color:e.colorTextSecondary,backgroundColor:r,"&::after":{display:"none"}}}},[`&${n}-middle`]:{[`${n}-row`]:{[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,C.bf)(e.paddingSM)} ${(0,C.bf)(e.paddingLG)}`}}},[`&${n}-small`]:{[`${n}-row`]:{[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,C.bf)(e.paddingXS)} ${(0,C.bf)(e.padding)}`}}}}}},g=e=>{const{componentCls:n,extraColor:r,itemPaddingBottom:l,colonMarginRight:a,colonMarginLeft:d,titleMarginBottom:u}=e;return{[n]:Object.assign(Object.assign(Object.assign({},(0,b.Wf)(e)),m(e)),{["&-rtl"]:{direction:"rtl"},[`${n}-header`]:{display:"flex",alignItems:"center",marginBottom:u},[`${n}-title`]:Object.assign(Object.assign({},b.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${n}-extra`]:{marginInlineStart:"auto",color:r,fontSize:e.fontSize},[`${n}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${n}-row`]:{"> th, > td":{paddingBottom:l},"&:last-child":{borderBottom:"none"}},[`${n}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,C.bf)(d)} ${(0,C.bf)(a)}`},[`&${n}-item-no-colon::after`]:{content:'""'}},[`${n}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${n}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${n}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${n}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${n}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${n}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${n}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},i=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var c=(0,ge.I$)("Descriptions",e=>{const n=(0,t.TS)(e,{});return g(n)},i),D=function(e,n){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)n.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(r[l[a]]=e[l[a]]);return r};const h=e=>{const{prefixCls:n,title:r,extra:l,column:a,colon:d=!0,bordered:u,layout:S,children:v,className:y,rootClassName:P,style:j,size:U,labelStyle:M,contentStyle:ne,items:O}=e,oe=D(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:le,direction:re,descriptions:W}=o.useContext(H.E_),$=le("descriptions",n),G=(0,_.Z)(),se=o.useMemo(()=>{var de;return typeof a=="number"?a:(de=(0,z.m9)(G,Object.assign(Object.assign({},Z),a)))!==null&&de!==void 0?de:3},[G,a]),ue=ee(G,O,v),ce=(0,Y.Z)(U),pe=f(se,ue),[Q,ve,Ce]=c($),be=o.useMemo(()=>({labelStyle:M,contentStyle:ne}),[M,ne]);return Q(o.createElement(K.Provider,{value:be},o.createElement("div",Object.assign({className:I()($,W==null?void 0:W.className,{[`${$}-${ce}`]:ce&&ce!=="default",[`${$}-bordered`]:!!u,[`${$}-rtl`]:re==="rtl"},y,P,ve,Ce),style:Object.assign(Object.assign({},W==null?void 0:W.style),j)},oe),(r||l)&&o.createElement("div",{className:`${$}-header`},r&&o.createElement("div",{className:`${$}-title`},r),l&&o.createElement("div",{className:`${$}-extra`},l)),o.createElement("div",{className:`${$}-view`},o.createElement("table",null,o.createElement("tbody",null,pe.map((de,fe)=>o.createElement(te,{key:fe,index:fe,colon:d,prefixCls:$,vertical:S==="vertical",bordered:u,row:de}))))))))};h.Item=L;var A=h},66309:function(me,J,s){s.d(J,{Z:function(){return ge}});var o=s(62435),E=s(97937),I=s(93967),z=s.n(I),H=s(98787),Y=s(69760),_=s(45353),R=s(53124),Z=s(54548),x=s(10274),K=s(14747),k=s(45503),B=s(91945);const q=t=>{const{paddingXXS:m,lineWidth:g,tagPaddingHorizontal:i,componentCls:c,calc:D}=t,h=D(i).sub(g).equal(),A=D(m).sub(g).equal();return{[c]:Object.assign(Object.assign({},(0,K.Wf)(t)),{display:"inline-block",height:"auto",marginInlineEnd:t.marginXS,paddingInline:h,fontSize:t.tagFontSize,lineHeight:t.tagLineHeight,whiteSpace:"nowrap",background:t.defaultBg,border:`${(0,Z.bf)(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,borderRadius:t.borderRadiusSM,opacity:1,transition:`all ${t.motionDurationMid}`,textAlign:"start",position:"relative",[`&${c}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:t.defaultColor},[`${c}-close-icon`]:{marginInlineStart:A,fontSize:t.tagIconSize,color:t.colorTextDescription,cursor:"pointer",transition:`all ${t.motionDurationMid}`,"&:hover":{color:t.colorTextHeading}},[`&${c}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${t.iconCls}-close, ${t.iconCls}-close:hover`]:{color:t.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${c}-checkable-checked):hover`]:{color:t.colorPrimary,backgroundColor:t.colorFillSecondary},"&:active, &-checked":{color:t.colorTextLightSolid},"&-checked":{backgroundColor:t.colorPrimary,"&:hover":{backgroundColor:t.colorPrimaryHover}},"&:active":{backgroundColor:t.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${t.iconCls} + span, > span + ${t.iconCls}`]:{marginInlineStart:h}}),[`${c}-borderless`]:{borderColor:"transparent",background:t.tagBorderlessBg}}},ee=t=>{const{lineWidth:m,fontSizeIcon:g,calc:i}=t,c=t.fontSizeSM;return(0,k.TS)(t,{tagFontSize:c,tagLineHeight:(0,Z.bf)(i(t.lineHeightSM).mul(c).equal()),tagIconSize:i(g).sub(i(m).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:t.defaultBg})},V=t=>({defaultBg:new x.C(t.colorFillQuaternary).onBackground(t.colorBgContainer).toHexString(),defaultColor:t.colorText});var X=(0,B.I$)("Tag",t=>{const m=ee(t);return q(m)},V),ie=function(t,m){var g={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&m.indexOf(i)<0&&(g[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(t);c<i.length;c++)m.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(t,i[c])&&(g[i[c]]=t[i[c]]);return g},p=o.forwardRef((t,m)=>{const{prefixCls:g,style:i,className:c,checked:D,onChange:h,onClick:A}=t,e=ie(t,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:n,tag:r}=o.useContext(R.E_),l=y=>{h==null||h(!D),A==null||A(y)},a=n("tag",g),[d,u,S]=X(a),v=z()(a,`${a}-checkable`,{[`${a}-checkable-checked`]:D},r==null?void 0:r.className,c,u,S);return d(o.createElement("span",Object.assign({},e,{ref:m,style:Object.assign(Object.assign({},i),r==null?void 0:r.style),className:v,onClick:l})))}),L=s(98719);const T=t=>(0,L.Z)(t,(m,g)=>{let{textColor:i,lightBorderColor:c,lightColor:D,darkColor:h}=g;return{[`${t.componentCls}${t.componentCls}-${m}`]:{color:i,background:D,borderColor:c,"&-inverse":{color:t.colorTextLightSolid,background:h,borderColor:h},[`&${t.componentCls}-borderless`]:{borderColor:"transparent"}}}});var ae=(0,B.bk)(["Tag","preset"],t=>{const m=ee(t);return T(m)},V);function w(t){return typeof t!="string"?t:t.charAt(0).toUpperCase()+t.slice(1)}const N=(t,m,g)=>{const i=w(g);return{[`${t.componentCls}${t.componentCls}-${m}`]:{color:t[`color${g}`],background:t[`color${i}Bg`],borderColor:t[`color${i}Border`],[`&${t.componentCls}-borderless`]:{borderColor:"transparent"}}}};var F=(0,B.bk)(["Tag","status"],t=>{const m=ee(t);return[N(m,"success","Success"),N(m,"processing","Info"),N(m,"error","Error"),N(m,"warning","Warning")]},V),te=function(t,m){var g={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&m.indexOf(i)<0&&(g[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(t);c<i.length;c++)m.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(t,i[c])&&(g[i[c]]=t[i[c]]);return g};const C=(t,m)=>{const{prefixCls:g,className:i,rootClassName:c,style:D,children:h,icon:A,color:e,onClose:n,closeIcon:r,closable:l,bordered:a=!0}=t,d=te(t,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:u,direction:S,tag:v}=o.useContext(R.E_),[y,P]=o.useState(!0);o.useEffect(()=>{"visible"in d&&P(d.visible)},[d.visible]);const j=(0,H.o2)(e),U=(0,H.yT)(e),M=j||U,ne=Object.assign(Object.assign({backgroundColor:e&&!M?e:void 0},v==null?void 0:v.style),D),O=u("tag",g),[oe,le,re]=X(O),W=z()(O,v==null?void 0:v.className,{[`${O}-${e}`]:M,[`${O}-has-color`]:e&&!M,[`${O}-hidden`]:!y,[`${O}-rtl`]:S==="rtl",[`${O}-borderless`]:!a},i,c,le,re),$=Q=>{Q.stopPropagation(),n==null||n(Q),!Q.defaultPrevented&&P(!1)},[,G]=(0,Y.Z)({closable:l,closeIcon:r!=null?r:v==null?void 0:v.closeIcon,customCloseIconRender:Q=>Q===null?o.createElement(E.Z,{className:`${O}-close-icon`,onClick:$}):o.createElement("span",{className:`${O}-close-icon`,onClick:$},Q),defaultCloseIcon:null,defaultClosable:!1}),se=typeof d.onClick=="function"||h&&h.type==="a",ue=A||null,ce=ue?o.createElement(o.Fragment,null,ue,h&&o.createElement("span",null,h)):h,pe=o.createElement("span",Object.assign({},d,{ref:m,className:W,style:ne}),ce,G,j&&o.createElement(ae,{key:"preset",prefixCls:O}),U&&o.createElement(F,{key:"status",prefixCls:O}));return oe(se?o.createElement(_.Z,{component:"Tag"},pe):pe)},b=o.forwardRef(C);b.CheckableTag=p;var ge=b}}]);
