(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(52)},50:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(19),c=a.n(l),r=a(8),u=a(3),d=a(4),s=a.n(d);var i=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1];return o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("input",{type:"text",value:l,onChange:function(e){c(e.currentTarget.value)},placeholder:"Enter a Todo Task"}),o.a.createElement("button",{onClick:function(e){e.preventDefault(),s.a.post("https://task-management-busy-qa.herokuapp.com/addTask",{taskName:l,complete:!1}).then(function(){console.log("Task added successfuly"),window.location.reload(!1)}),c("")}},"Add Task")))};var m=function(e){return o.a.createElement("div",{id:e.todo.id,key:e.todo.id,name:"todo",value:e.todo.id,onClick:function(t){t.preventDefault(),e.handleToggle(t.currentTarget.id)},className:e.todo.complete?"todo strike":"todo"},e.todo.taskName)};var p=function(e){return o.a.createElement("div",null,e.todoList.map(function(t){return o.a.createElement(m,{todo:t,handleToggle:e.handleToggle})}),o.a.createElement("button",{onClick:e.clearCompletedTask},"Clear Completed Tasks"))},f=(a(50),function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1];return o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("input",{type:"text",value:l,onChange:function(e){c(e.currentTarget.value)},placeholder:"Search for a Todo Task"})),e.todoList.filter(function(e){return""===l?e:e.taskName.toLowerCase().includes(l.toLowerCase())?e:void 0}).map(function(t){return o.a.createElement(m,{todo:t,handleToggle:e.handleToggle})}))});var k=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)(function(){s.a.get("https://task-management-busy-qa.herokuapp.com/getAllTasks").then(function(e){l(e.data)})},[]),o.a.createElement("div",{className:"App"},o.a.createElement(p,{todoList:a,handleToggle:function(e){var t=a.map(function(t){return s.a.put("https://task-management-busy-qa.herokuapp.com/updateCompleteTask",{id:Number(e),complete:!t.complete}).then(function(){console.log("Completed Task updated successfuly")}),t.id===Number(e)?Object(r.a)({},t,{complete:!t.complete}):Object(r.a)({},t)});l(t)},clearCompletedTask:function(){a.filter(function(e){s.a.delete("https://task-management-busy-qa.herokuapp.com/deleteCompletedTask").then(function(){console.log("Completed Tasks deleted successfuly"),window.location.reload(!1)})})}}),o.a.createElement(i,null),o.a.createElement(f,{todoList:a}))};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)))}},[[20,2,1]]]);
//# sourceMappingURL=main.7b8d726e.chunk.js.map