(this.webpackJsonpupload_files=this.webpackJsonpupload_files||[]).push([[0],{52:function(e,t,a){e.exports=a(83)},57:function(e,t,a){},58:function(e,t,a){},80:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),o=a.n(r),i=(a(57),a(58),a(108)),c=a(116),s=a(110),u=a(112),m=a(111),f=Object(i.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));function p(){var e=f();return l.a.createElement("div",{className:e.root},l.a.createElement(c.a,{position:"static"},l.a.createElement(s.a,{variant:"dense"},l.a.createElement(m.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"}),l.a.createElement(u.a,{variant:"h6",color:"inherit"},"File Upload"))))}var d=a(14),E=a(45),v=a.n(E),h=a(113),g=a(114),b=a(42),y=a.n(b),w=a(44),j=a.n(w),k=a(115),O=(a(80),Object(i.a)((function(e){return{button:{margin:e.spacing(1)},root:{marginTop:"20px",width:"30%",marginBottom:"10px"}}})));function x(){var e,t=Object(n.useRef)("linkref"),a=Object(n.useState)(0),r=Object(d.a)(a,2),o=r[0],i=r[1],c=Object(n.useState)(!1),s=Object(d.a)(c,2),u=s[0],m=s[1],f=Object(n.useState)(),p=Object(d.a)(f,2),E=p[0],b=p[1];u&&(e=l.a.createElement("div",null,l.a.createElement("label",null,"Upload Complete! "),l.a.createElement("label",null,"You can download the file via this ",l.a.createElement("a",{ref:t,href:E},"link")," ",l.a.createElement(k.a,{title:l.a.createElement("span",null,"Copy Link")},l.a.createElement(j.a,{style:{marginLeft:"10px"},className:"file",onClick:function(){navigator.clipboard.writeText(E)}}))," ")));var w=O(),x=Object(n.useRef)("ref"),C=Object(n.useRef)("prog");return l.a.createElement("div",{style:{height:"60vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},l.a.createElement("label",null,"Upload any file now easy & quick"),l.a.createElement(h.a,{onClick:function(){x.current.click()},style:{marginTop:"20px"},variant:"contained",color:"default",className:w.button,startIcon:l.a.createElement(v.a,null)},"Upload",l.a.createElement("input",{type:"file",ref:x,onChange:function(e){i(0),C.current.style.display="",i(40);var t=new FormData;t.append("file",e.target.files[0],e.target.files[0].name),y.a.post("upload",t).then((function(e){b(e.data),i(100),m(!0),setTimeout((function(){C.current.style.display="none"}),2e3)}))},style:{display:"none"}})),l.a.createElement("div",{className:w.root},l.a.createElement(g.a,{style:{display:"none"},ref:C,variant:"determinate",value:o})),e)}var C=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.f6fcf0eb.chunk.js.map