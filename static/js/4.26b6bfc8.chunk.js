(this.webpackJsonpfirstspa=this.webpackJsonpfirstspa||[]).push([[4],{292:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__14NLX",dialogsItems:"Dialogs_dialogsItems__2x7Ah",active:"Dialogs_active__1lp7S",dialog:"Dialogs_dialog__2LRO-",messages:"Dialogs_messages__2Move",message:"Dialogs_message__3kDe1"}},298:function(e,a,t){"use strict";t.r(a);var s=t(103),n=t(0),i=t.n(n),l=t(292),o=t.n(l),r=function(e){return i.a.createElement("div",{className:o.a.message},e.text)},c=t(12),m=function(e){return i.a.createElement("div",{className:o.a.dialog+" "+o.a.active},i.a.createElement(c.b,{to:"/dialogs/"+e.id},e.name))},d=t(126),g=t(127),u=t(42),_=t(43),f=Object(_.a)(250),b=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(d.a,{component:u.b,validate:[_.b,f],name:"newMessageBody",placeholder:"enter your message here."})),i.a.createElement("div",null,i.a.createElement("button",null,"Send")))})),v=function(e){var a=e.dialogsPage.usersData.map((function(e){return i.a.createElement(m,{name:e.name,key:e.id,id:e.id})})),t=e.dialogsPage.messagesData.map((function(e){return i.a.createElement(r,{text:e.text,key:e.id})}));return i.a.createElement("div",{className:o.a.dialogs},i.a.createElement("div",{className:o.a.dialogsItems},a),i.a.createElement("div",{className:o.a.messages},t),i.a.createElement(b,{onSubmit:function(a){e.sendMsg(a.newMessageBody)}}))},E=t(10),p=t(138),D=t(7);a.default=Object(D.d)(Object(E.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMsg:function(a){e(Object(s.b)(a))}}})),p.a)(v)}}]);
//# sourceMappingURL=4.26b6bfc8.chunk.js.map