(this["webpackJsonpunderstand-r-r"]=this["webpackJsonpunderstand-r-r"]||[]).push([[0],{10:function(e,t,n){},16:function(e,t,n){e.exports=n(28)},21:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=(n(21),n(1)),i=n(2),u=n(5),s=n(3),m=n(6),p=(n(10),n(4)),d=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"to-do-app"},r.a.createElement("span",{className:"to-do"},"To-Do App!"),r.a.createElement("span",{className:"new-element"},"Add New To-Do"),r.a.createElement("input",{type:"text",className:"enter-task",onChange:function(t){return e.props.changeInput(t)}}),r.a.createElement("span",{className:"add-btn",onClick:function(){return e.props.addItem(e.props.inputReducer)}},"Add ")))}}]),t}(a.Component),h=Object(p.b)((function(e){return{inputReducer:e.inputReducer}}),(function(e){return{addItem:function(t){e({type:"ADD-LIST",newText:t})},changeInput:function(t){e({type:"CHANGE-INPUT",val:t.target.value})}}}))(d),v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"items_list"},this.props.listReducer.map((function(t,n){return r.a.createElement("div",{key:n,className:"elt"},r.a.createElement("span",{className:"compeleteBtn",onClick:function(){return e.props.completeItem(n)}},t.name),r.a.createElement("span",{className:"deleteBtn",onClick:function(){return e.props.deleteList(n)}},"Delete"),r.a.createElement("span",{className:"theInput",style:{textDecoration:"compelete"===t.name?"none":"line-through"}},t.val))}))))}}]),t}(a.Component),f=Object(p.b)((function(e){return{listReducer:e.listReducer,inputReducer:e.inputReducer}}),(function(e){return{deleteList:function(t){e({type:"DELETE-LIST",i:t})},completeItem:function(t){e({type:"COMPLETE-LIST",i:t})},addItem:function(t){e({type:"ADD-LIST",newText:t})}}}))(v),E=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement("div",{className:"get-work-done"},r.a.createElement("span",{className:"get-work-done"},"Let's get some work done!"),r.a.createElement("hr",{className:"ligne"}),r.a.createElement("div",{className:"tasks"},r.a.createElement(f,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(7),O=n(9),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{val:"exemple",txt:"none",name:"compelete"},{val:"exemple2",txt:"none",name:"compelete"}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE-LIST":var n=Object(O.a)(e);return n.splice(t.i,1),n;case"COMPLETE-LIST":var a=Object(O.a)(e);return a.map((function(e,n){return n===t.i?e.name="undo":e.name})),a;case"ADD-LIST":var r=Object(O.a)(e);return r=r.concat([{val:t.newText,txt:"none",name:"compelete"}]);default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-INPUT":return t.val;default:return e}},g=Object(b.c)(Object(b.b)({listReducer:j,inputReducer:N}));o.a.render(r.a.createElement(p.a,{store:g}," ",r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.104467ee.chunk.js.map