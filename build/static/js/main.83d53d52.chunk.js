(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t(0),u=t.n(r),o=t(13),c=t.n(o),l=function(e){var n=e.search,t=e.handleSearchInput;return u.a.createElement("div",null,"filter shown with ",u.a.createElement("input",{value:n,onChange:t}))},s=t(3),i=t.n(s),m=function(e){return i.a.post("/api/persons",e).then((function(e){return e.data}))},f=function(e){var n="".concat("/api/persons","/").concat(e);return i.a.delete(n).then((function(e){return e.data}))},d=function(e,n){var t="".concat("/api/persons","/").concat(e);return i.a.put(t,n).then((function(e){return e.data}))},h=function(e){var n=e.persons,t=e.newName,a=e.newNumber,r=e.setNewName,o=e.setNewNumber,c=e.setPersons,l=e.handleNameInput,s=e.handleNumberInput,i=e.setMessage;return u.a.createElement(u.a.Fragment,null,u.a.createElement("form",{onSubmit:function(e){e.preventDefault();var u=!1;n.forEach((function(e){t===e.name&&(u=!0)}));var l={name:t,number:a};if(u){var s=n.find((function(e){return e.name===t})),f=s.id;window.confirm("".concat(t," is already added to phonebook, replace the old number with a new one?"))&&d(f,l).then((function(e){c(n.map((function(n){return n.id!==e.id?n:e}))),r(""),o(""),i(["Updated ".concat(e.name),!1]),setTimeout((function(){return i([null,!1])}),3e3)})).catch((function(e){console.log(e),i(["Information of ".concat(s.name," has been removed from the server"),!0]),r(""),o(""),c(n.filter((function(e){return e.id!==f}))),setTimeout((function(){return i([null,!1])}),3e3)}))}else m(l).then((function(e){c(n.concat(e)),r(""),o(""),i(["Added ".concat(e.name),!1]),setTimeout((function(){return i([null,!1])}),3e3)})).catch((function(e){i(["".concat(e.message),!0]),setTimeout((function(){return i([null,!1])}),3e3)}))}},u.a.createElement("div",null,"name: ",u.a.createElement("input",{value:t,onChange:l}),u.a.createElement("br",null),"number: ",u.a.createElement("input",{value:a,onChange:s})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add"))))},p=function(e){var n=e.persons,t=e.search,a=e.showAll,r=e.setPersons,o=e.setMessage,c=a?n:n.filter((function(e){return e.name.includes(t)}));return u.a.createElement(u.a.Fragment,null,c.map((function(e){return u.a.createElement("div",{key:e.name},u.a.createElement("p",null,e.name," ",e.number),u.a.createElement("button",{onClick:function(){return function(e){var t=e.id;window.confirm("Do you really want to delete ".concat(e.name,"?"))&&f(t).then((function(a){r(n.filter((function(e){return e.id!==t}))),o(["Successfully deleted ".concat(e.name),!1]),setTimeout((function(){return o([null,!1])}),3e3)})).catch((function(a){console.log(a),o(["Information of ".concat(e.name," has already been removed from the server"),!0]),r(n.filter((function(e){return e.id!==t}))),setTimeout((function(){return o([null,!1])}),3e3)}))}(e)}},"Delete"))})))},b=function(e){var n=e.message,t=(e.setMessage,{color:n[1]?"red":"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10});return null==n[0]?null:u.a.createElement("div",{style:t},n[0])};c.a.render(u.a.createElement((function(){var e=Object(r.useState)([]),n=Object(a.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(""),s=Object(a.a)(c,2),m=s[0],f=s[1],d=Object(r.useState)(""),v=Object(a.a)(d,2),g=v[0],E=v[1],w=Object(r.useState)(""),N=Object(a.a)(w,2),j=N[0],O=N[1],S=Object(r.useState)(!0),y=Object(a.a)(S,2),I=y[0],k=y[1],M=Object(r.useState)([null,!1]),T=Object(a.a)(M,2),P=T[0],C=T[1];Object(r.useEffect)((function(){i.a.get("/api/persons").then((function(e){o(e.data)}))}),[]);return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(b,{message:P,setMessage:C}),u.a.createElement(l,{search:j,handleSearchInput:function(e){O(e.target.value),""===e.target.value?k(!0):k(!1)}}),u.a.createElement("h2",null,"add a new"),u.a.createElement(h,{newName:m,newNumber:g,setNewName:f,setNewNumber:E,handleNumberInput:function(e){E(e.target.value)},handleNameInput:function(e){f(e.target.value)},persons:t,setPersons:o,setMessage:C}),u.a.createElement("h2",null,"Numbers"),u.a.createElement(p,{persons:t,setPersons:o,search:j,showAll:I,setMessage:C}))}),null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.83d53d52.chunk.js.map