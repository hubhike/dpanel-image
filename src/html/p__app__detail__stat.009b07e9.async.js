"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7745],{16664:function(K,S,t){t.d(S,{Z:function(){return y}});var Z=t(87462),g=t(62435),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"unordered-list",theme:"outlined"},n=I,a=t(84089),v=function(M,p){return g.createElement(a.Z,(0,Z.Z)({},M,{ref:p,icon:n}))},h=g.forwardRef(v),y=h},20387:function(K,S,t){t.r(S),t.d(S,{default:function(){return ae}});var Z=t(15009),g=t.n(Z),I=t(99289),n=t.n(I),a=t(5574),v=t.n(a),h=t(19632),y=t.n(h),C=t(97857),M=t.n(C),p=t(62435),J=t(48031),L=function(){return L=Object.assign||function(s){for(var u,f=1,i=arguments.length;f<i;f++){u=arguments[f];for(var r in u)Object.prototype.hasOwnProperty.call(u,r)&&(s[r]=u[r])}return s},L.apply(this,arguments)},Q=function(s){return p.createElement(J.P,L({},s,{chartType:"Area"}))},V=Q,o=t(86074);function O(s){var u={theme:"academy",xField:s.xField,yField:s.yField,height:200,axis:{y:{line:!0,grid:{visable:!0}},x:{line:!0,grid:{visable:!0}}},data:s.data};return s.yDomain&&(u.scale={y:{domain:s.yDomain}}),s.colorField&&(u.colorField=s.colorField),(0,o.jsx)(V,M()({},u))}function W(s){var u=s.reqFunction,f=s.interval,i=s.maxPolling,r=s.pollingStatus,D=(0,p.useRef)(null),H=0,z=function k(){D.current=window.setTimeout(n()(g()().mark(function Y(){var A;return g()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!(H++>=i)){d.next=3;break}return F(),d.abrupt("return");case 3:return d.prev=3,d.next=6,u();case 6:A=d.sent,k(),d.next=14;break;case 10:d.prev=10,d.t0=d.catch(3),F(),console.error("\u8F6E\u8BE2\u53D1\u751F\u9519\u8BEF\uFF1A",d.t0);case 14:case"end":return d.stop()}},Y,null,[[3,10]])})),f)},F=function(){console.log("end polling"),D.current&&window.clearTimeout(D.current)};return(0,p.useEffect)(function(){return console.log((r?"start":"waiting")+" polling, max "+i),r&&z(),F},[f,i,r]),{endPolling:F}}var X=W,U=t(54006);function N(s){return $.apply(this,arguments)}function $(){return $=n()(g()().mark(function s(u){return g()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,U.request)("/api/app/container/get-stat-info",{method:"POST",data:u}));case 1:case"end":return i.stop()}},s)})),$.apply(this,arguments)}function q(s){return E.apply(this,arguments)}function E(){return E=n()(g()().mark(function s(u){return g()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,U.request)("/api/app/container/get-process-info",{method:"POST",data:u}));case 1:case"end":return i.stop()}},s)})),E.apply(this,arguments)}var j=t(5251),R=t(12122),_=t(16664),P=t(38345),ee=t(63490),T=new Date().toLocaleTimeString(),te={total:0,memory:[{date:T,usage:0,source:{usage:0,limit:0}}],cpu:[{date:T,usage:0}],network:[{usage:0,type:"rx",date:T,source:{usage:0}},{usage:0,type:"tx",date:T,source:{usage:0}}],io:[{usage:0,type:"read",date:T,source:{usage:0}},{usage:0,type:"write",date:T,source:{usage:0}}]};function ae(){var s=function(m,e){switch(e.type){case"update":var c=new Date(e.payload.read).toLocaleTimeString(),l=e.payload.cpu_stats.cpu_usage.total_usage-e.payload.precpu_stats.cpu_usage.total_usage,G=e.payload.cpu_stats.system_cpu_usage-e.payload.precpu_stats.system_cpu_usage,b=0,re=0;return e.payload.blkio_stats.io_service_bytes_recursive||(e.payload.blkio_stats.io_service_bytes_recursive=[{value:0,op:"read",major:0,minor:0},{value:0,op:"write",major:0,minor:0}]),e.payload.blkio_stats.io_service_bytes_recursive.map(function(B){B.op=="read"&&(b=B.value),B.op=="write"&&(re=B.value)}),{total:m.total+1,memory:[].concat(y()(m.memory),[{date:c,usage:Math.round(e.payload.memory_stats.usage/1024/1024),source:{usage:e.payload.memory_stats.usage,limit:e.payload.memory_stats.limit}}]),cpu:[].concat(y()(m.cpu),[{date:c,usage:l/G*e.payload.cpu_stats.online_cpus*100}]),io:[].concat(y()(m.io),[{date:c,usage:parseFloat((e.payload.blkio_stats.io_service_bytes_recursive[0].value/1024/1024).toFixed(2)),type:e.payload.blkio_stats.io_service_bytes_recursive[0].op,source:{usage:e.payload.blkio_stats.io_service_bytes_recursive[0].value}},{date:c,usage:parseFloat((e.payload.blkio_stats.io_service_bytes_recursive[1].value/1024/1024).toFixed(2)),type:e.payload.blkio_stats.io_service_bytes_recursive[1].op,source:{usage:e.payload.blkio_stats.io_service_bytes_recursive[1].value}}]),network:[].concat(y()(m.network),[{date:c,usage:parseFloat((e.payload.networks.eth0.rx_bytes/1024).toFixed(2)),type:"rx",source:{usage:e.payload.networks.eth0.rx_bytes}},{date:c,usage:parseFloat((e.payload.networks.eth0.tx_bytes/1024).toFixed(2)),type:"tx",source:{usage:e.payload.networks.eth0.tx_bytes}}])}}},u=(0,U.useParams)(),f=(0,p.useReducer)(s,te),i=v()(f,2),r=i[0],D=i[1],H=(0,p.useState)([]),z=v()(H,2),F=z[0],k=z[1],Y=(0,p.useState)(),A=v()(Y,2),x=A[0],d=A[1],se=X({reqFunction:function(){var w=n()(g()().mark(function e(){var c,l;return g()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,N({id:(c=u.id)!==null&&c!==void 0?c:""});case 2:l=b.sent,D({type:"update",payload:l});case 4:case"end":return b.stop()}},e)}));function m(){return w.apply(this,arguments)}return m}(),interval:3e3,maxPolling:999,pollingStatus:F.length!=0});return(0,p.useEffect)(function(){var w,m;N({id:(w=u.id)!==null&&w!==void 0?w:""}).then(function(e){return k([0,Math.round(e.memory_stats.limit/1024/1024)]),!0}),q({id:(m=u.id)!==null&&m!==void 0?m:""}).then(function(e){var c={columns:[],data:[]};e.data.list.Titles.map(function(l){c.columns.push({title:l,label:l,dataIndex:l})}),e.data.list.Processes.map(function(l,G){c.data.push({UID:l[0],PID:l[1],PPID:l[2],C:l[3],STIME:l[4],TTY:l[5],TIME:l[6],CMD:l[7]})}),d(c)})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(P.Z,{direction:"row",wrap:!0,gutter:[20,20],children:[(0,o.jsx)(P.Z,{colSpan:12,title:(0,o.jsx)(R.Z,{}),subTitle:"Memory usage: ".concat((0,j.FI)(r.memory[r.memory.length-1].source.usage)," / ").concat((0,j.FI)(r.memory[r.memory.length-1].source.limit)),headerBordered:!0,bordered:!0,children:(0,o.jsx)(O,{yField:"usage",xField:"date",data:r.memory,yDomain:F})}),(0,o.jsx)(P.Z,{colSpan:12,title:(0,o.jsx)(R.Z,{}),subTitle:"Cpu usage: ".concat(r.cpu[r.cpu.length-1].usage.toFixed(2),"%"),headerBordered:!0,bordered:!0,children:(0,o.jsx)(O,{yField:"usage",xField:"date",data:r.cpu})}),(0,o.jsx)(P.Z,{colSpan:12,title:(0,o.jsx)(R.Z,{}),subTitle:"I/O: ".concat((0,j.FI)(r.io[r.io.length-1].source.usage)," / ").concat((0,j.FI)(r.io[r.io.length-2].source.usage)),headerBordered:!0,bordered:!0,children:(0,o.jsx)(O,{yField:"usage",xField:"date",colorField:"type",data:r.io})}),(0,o.jsx)(P.Z,{colSpan:12,title:(0,o.jsx)(R.Z,{}),subTitle:"Network: ".concat((0,j.FI)(r.network[r.io.length-1].source.usage)," / ").concat((0,j.FI)(r.network[r.io.length-2].source.usage)),headerBordered:!0,bordered:!0,children:(0,o.jsx)(O,{yField:"usage",xField:"date",colorField:"type",data:r.network})})]}),(0,o.jsx)(P.Z,{title:(0,o.jsx)(_.Z,{}),subTitle:"Progress",children:(0,o.jsx)(ee.Z,{rowKey:"PID",columns:x==null?void 0:x.columns,dataSource:x==null?void 0:x.data,pagination:{pageSize:10}})})]})}},5251:function(K,S,t){t.d(S,{FI:function(){return g},ZM:function(){return I}});function Z(n){return n.trim()}function g(n){var a="";n<.1*1024?a=n.toFixed(2)+"B":n<.1*1024*1024?a=(n/1024).toFixed(2)+"KB":n<1*1024*1024*1024?a=(n/(1024*1024)).toFixed(2)+"MB":a=(n/(1024*1024*1024)).toFixed(2)+"GB";var v=a+"",h=v.indexOf("."),y=v.substr(h+1,2);return y=="00"?v.substring(0,h)+v.substr(h+3,2):a}function I(n){if(n){var a=new Date(n),v=a.getFullYear()+"-",h=(a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1)+"-",y=(a.getDate()<10?"0"+a.getDate():a.getDate())+" ",C=(a.getHours()<10?"0"+a.getHours():a.getHours())+":",M=(a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes())+":",p=a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds();return v+h+y+C+M+p}}}}]);