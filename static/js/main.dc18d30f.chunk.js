(this["webpackJsonpreact-todos"]=this["webpackJsonpreact-todos"]||[]).push([[0],{13:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c(6),r=c.n(o),a=c(5),u=c(7),i=c(15),d=c(0);function s(t){var e=t.todo,c=t.toggleTodo,n=e.id,o=e.task,r=e.completed;return Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{type:"checkbox",checked:r,onChange:function(){c(n)}}),o]})}function l(t){var e=t.todos,c=t.toggleTodo;return Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)(s,{todo:t,toggleTodo:c},t.id)}))})}var j="todoApp.todos";function f(){var t=Object(n.useState)([{id:1,task:"Tarea 1",completed:!1}]),e=Object(u.a)(t,2),c=e[0],o=e[1],r=Object(n.useRef)();Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem(j));t&&o(t)}),[]),Object(n.useEffect)((function(){localStorage.setItem(j,JSON.stringify(c))}),[c]);return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(l,{todos:c,toggleTodo:function(t){var e=Object(a.a)(c),n=e.find((function(e){return e.id===t}));n.completed=!n.completed,o(e)}}),Object(d.jsx)("input",{ref:r,type:"text",placeholder:"Nueva Tarea"}),Object(d.jsx)("button",{onClick:function(){var t=r.current.value;""!==t&&(o((function(e){return[].concat(Object(a.a)(e),[{id:Object(i.a)(),task:t,completed:!1}])})),r.current.value=null)},children:"\u2795"}),Object(d.jsx)("button",{onClick:function(){var t=c.filter((function(t){return!t.completed}));o(t)},children:"\ud83d\uddd1"}),Object(d.jsxs)("div",{children:["Te quedan ",c.filter((function(t){return!t.completed})).length," tareas por terminar"]})]})}r.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.dc18d30f.chunk.js.map