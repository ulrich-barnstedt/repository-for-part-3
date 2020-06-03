(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(15),o=n.n(u),l=n(4),c=n.n(l),i=n(3),s=n(5),m=n(16),f=n(2),v=n.n(f),b="/api/persons",p=function(){return v.a.get(b).then((function(e){return e.data}))},d=function(e){return v.a.delete("".concat(b,"/").concat(e))},E=function(e,t){return v.a.put("".concat(b,"/").concat(e),t)},h=function(e){return v.a.post(b,e)},w=function(e){var t=e.content;return r.a.createElement("input",{value:t.value,onChange:function(e){e.preventDefault(),t.set(e.target.value)}})},k=function(e){var t=e.person,n=e.all,a=e.notification;return r.a.createElement("div",null,r.a.createElement("span",null,t.name," ",t.number,"  "),r.a.createElement("button",{onClick:function(){if(window.confirm("Delete ".concat(t.name," from phonebook?"))){d(t.id);var e=Object(i.a)(n.value),r=e.splice(n.value.indexOf(n.value.find((function(e){return e.id===t.id}))),1);n.set(e),a.set("Successfully deleted ".concat(r[0].name," from phonebook"))}}},"Delete"),r.a.createElement("br",null))},O=function(e){var t=e.message;return Object(a.useEffect)((function(){var e=setTimeout((function(){null!==t.value&&t.set(null)}),5e3);return function(){return clearTimeout(e)}}),[t]),null===t.value?null:r.a.createElement("div",{className:"notification"},t.value)},j=function(e){var t=e.error;return Object(a.useEffect)((function(){var e=setTimeout((function(){null!==t.value&&t.set(null)}),5e3);return function(){return clearTimeout(e)}}),[t]),null===t.value?null:r.a.createElement("div",{className:"error"},t.value)},y=function(e){var t=e.person,n=e.number,a=e.name,u=e.notification,o=e.error;function l(){return(l=Object(m.a)(c.a.mark((function e(r){var l,m,f,v;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),""!==a.value&&" "!==a.value&&""!==n.value&&" "!==n.value){e.next=4;break}return alert("Name/number is empty."),e.abrupt("return");case 4:if(!t.value.map((function(e){return e.name.toLowerCase()})).includes(a.value.toLowerCase())){e.next=23;break}if(!window.confirm("".concat(a.value," is already in the phone book. Replace the number with a the new one?"))){e.next=22;break}return l=t.value.indexOf(t.value.find((function(e){return e.name.toLowerCase()===a.value.toLowerCase()}))),m=!1,e.next=11,E(t.value[l].id,Object(s.a)(Object(s.a)({},t.value[l]),{},{number:n.value})).catch((function(e){o.set("Could not update person in phonebook. This person might have already been deleted."),m=!0}));case 11:if(!0!==m){e.next=13;break}return e.abrupt("return");case 13:return(f=Object(i.a)(t.value))[l].number=n.value,t.set(f),u.set("Updated number of ".concat(a.value)),a.set(""),n.set(""),e.abrupt("return");case 22:return e.abrupt("return");case 23:u.set("Added ".concat(a.value," to phonebook")),v={name:a.value,number:n.value},a.set(""),n.set(""),h(v).then((function(e){t.set(t.value.concat(e.data))}));case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return l.apply(this,arguments)}},r.a.createElement("div",null,"name: ",r.a.createElement(w,{content:a}),r.a.createElement("br",null),"number: ",r.a.createElement(w,{content:n})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},x=function(e){var t=e.filter;return r.a.createElement("div",null,"show only names containing ",r.a.createElement(w,{content:t}))},C=function(e){var t=e.person,n=e.filter,a=e.notification,u=t.value.filter((function(e){return e.name.toLowerCase().includes(n.value.toLowerCase())}));return r.a.createElement("div",null,u.map((function(e){return r.a.createElement(k,{key:e.name,person:e,all:t,notification:a})})))},g=function(){function e(e){return{value:e[0],set:e[1]}}var t=e(Object(a.useState)([])),n=e(Object(a.useState)("")),u=e(Object(a.useState)("")),o=e(Object(a.useState)("")),l=e(Object(a.useState)(null)),c=e(Object(a.useState)(null));return Object(a.useEffect)((function(){p().then((function(e){t.set(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(j,{error:c}),r.a.createElement(O,{message:l}),r.a.createElement(x,{filter:o}),r.a.createElement("h3",null,"Add a new number"),r.a.createElement(y,{person:t,name:n,number:u,notification:l,error:c}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(C,{person:t,filter:o,notification:l}))};n(40);o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e1d9b051.chunk.js.map