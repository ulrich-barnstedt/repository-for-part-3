(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(13),l=n.n(u),c=n(3),o=n.n(c),i=n(14),m=n(2),s=n.n(m),f="/api/persons",v=function(){return s.a.get(f).then((function(e){return e.data}))},p=function(e){return s.a.delete("".concat(f,"/").concat(e))},b=function(e){return s.a.post(f,e)},E=n(15),d=function(e){var t=e.content;return r.a.createElement("input",{value:t.value,onChange:function(e){e.preventDefault(),t.set(e.target.value)}})},h=function(e){var t=e.person,n=e.all,a=e.notification;return r.a.createElement("div",null,r.a.createElement("span",null,t.name," ",t.number,"  "),r.a.createElement("button",{onClick:function(){if(window.confirm("Delete ".concat(t.name," from phonebook?"))){p(t.id);var e=Object(E.a)(n.value),r=e.splice(n.value.indexOf(n.value.find((function(e){return e.id===t.id}))),1);n.set(e),a.set("Successfully deleted ".concat(r[0].name," from phonebook"))}}},"Delete"),r.a.createElement("br",null))},k=function(e){var t=e.message;return Object(a.useEffect)((function(){var e=setTimeout((function(){null!==t.value&&t.set(null)}),5e3);return function(){return clearTimeout(e)}}),[t]),null===t.value?null:r.a.createElement("div",{className:"notification"},t.value)},O=function(e){var t=e.error;return Object(a.useEffect)((function(){var e=setTimeout((function(){null!==t.value&&t.set(null)}),5e3);return function(){return clearTimeout(e)}}),[t]),null===t.value?null:r.a.createElement("div",{className:"error"},t.value)},j=function(e){var t=e.person,n=e.number,a=e.name,u=e.notification;e.error;function l(){return(l=Object(i.a)(o.a.mark((function e(r){var l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),""!==a.value&&" "!==a.value&&""!==n.value&&" "!==n.value){e.next=4;break}return alert("Name/number is empty."),e.abrupt("return");case 4:u.set("Added ".concat(a.value," to phonebook")),l={name:a.value,number:n.value},a.set(""),n.set(""),b(l).then((function(e){t.set(t.value.concat(e.data))}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return l.apply(this,arguments)}},r.a.createElement("div",null,"name: ",r.a.createElement(d,{content:a}),r.a.createElement("br",null),"number: ",r.a.createElement(d,{content:n})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},w=function(e){var t=e.filter;return r.a.createElement("div",null,"show only names containing ",r.a.createElement(d,{content:t}))},y=function(e){var t=e.person,n=e.filter,a=e.notification,u=t.value.filter((function(e){return e.name.toLowerCase().includes(n.value.toLowerCase())}));return r.a.createElement("div",null,u.map((function(e){return r.a.createElement(h,{key:e.name,person:e,all:t,notification:a})})))},S=function(){function e(e){return{value:e[0],set:e[1]}}var t=e(Object(a.useState)([])),n=e(Object(a.useState)("")),u=e(Object(a.useState)("")),l=e(Object(a.useState)("")),c=e(Object(a.useState)(null)),o=e(Object(a.useState)(null));return Object(a.useEffect)((function(){v().then((function(e){t.set(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(O,{error:o}),r.a.createElement(k,{message:c}),r.a.createElement(w,{filter:l}),r.a.createElement("h3",null,"Add a new number"),r.a.createElement(j,{person:t,name:n,number:u,notification:c,error:o}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(y,{person:t,filter:l,notification:c}))};n(39);l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.28c5d92b.chunk.js.map