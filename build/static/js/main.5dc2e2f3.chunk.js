(this.webpackJsonpphonebookv2=this.webpackJsonpphonebookv2||[]).push([[0],{39:function(n,e,t){"use strict";t.r(e);var c=t(2),r=t.n(c),u=t(15),a=t.n(u),o=t(6),i=t(4),s=t(0),d=function(n){var e=n.searchChange;return Object(s.jsxs)("div",{children:["Serach: ",Object(s.jsx)("input",{onChange:e})]})},b=function(n){return Object(s.jsxs)("form",{onSubmit:n.addPerson,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{onChange:n.addPersonChange,value:n.newName}),"number: ",Object(s.jsx)("input",{onChange:n.addNumberChange,value:n.newNumber})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},j=function(n){var e=n.persons,t=n.handleClick;return e.map((function(n){return Object(s.jsxs)("li",{children:[n.name," - ",n.number," ",Object(s.jsx)("button",{onClick:function(){return t(n.id)},children:"Delete"})]},n.id)}))},l=t(3),h=t.n(l),f="http://localhost:3001/api/persons",m=function(){return h.a.get(f).then((function(n){return n.data}))},O=function(n){return h.a.post(f,n).then((function(n){return n.data}))},p=function(n,e){return h.a.put("".concat(f,"/").concat(n),e).then((function(n){return n.data}))},v=function(n){h.a.delete("".concat(f,"/").concat(n))},x=function(){var n=Object(c.useState)([]),e=Object(i.a)(n,2),t=e[0],r=e[1],u=Object(c.useState)(""),a=Object(i.a)(u,2),l=a[0],h=a[1],f=Object(c.useState)(""),x=Object(i.a)(f,2),g=x[0],C=x[1],w=Object(c.useState)(""),k=Object(i.a)(w,2),S=k[0],N=k[1];Object(c.useEffect)((function(){m().then((function(n){return r(n)}))}),[]);var P=null!==S?t.filter((function(n){return n.name.includes(S)})):t;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(d,{searchChange:function(n){N(n.target.value),console.log("Search: ",S)}}),Object(s.jsx)(b,{addPerson:function(n){n.preventDefault();var e={name:l,number:g};if(console.log(e),!1===t.some((function(n){return n.name.includes(l)})))O(e).then((function(n){r(t.concat(n)),h(""),C("")}));else if(!0===t.some((function(n){return n.name.includes(l)}))&&window.confirm("Update ".concat(l,"'s number to ").concat(g,"?"))){var c=t.find((function(n){return n.name.includes(l)})),u=Object(o.a)(Object(o.a)({},c),{},{number:g});console.log(p(c.id,u)),p(u.id,u).then((function(n){return r(t.map((function(n){return n.id!==c.id?n:u})))}))}},addPersonChange:function(n){h(n.target.value)},addNumberChange:function(n){C(n.target.value)},newName:l,newNumber:g}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)("ul",{children:Object(s.jsx)(j,{persons:P,handleClick:function(n){var e=t.find((function(e){return e.id===n}));window.confirm("Delete ".concat(e.name))&&v(n)}})})]})};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.5dc2e2f3.chunk.js.map