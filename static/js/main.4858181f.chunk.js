(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{146:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(34),l=a.n(c),r=a(8),s=(a(83),a(20));function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=o.a.createElement("path",{d:"M4.04813 4.26933V1.11511H2.64188V4.26933H0V9.76683H2.64188V22.8848H4.04813V9.76683H6.68953V4.26933H4.04813ZM5.28328 8.36058H1.40625V5.67558H5.28328V8.36058Z",fill:"black"}),u=o.a.createElement("path",{d:"M12.7032 10.8248V1.11511H11.2969V10.8248H8.65503V16.3228H11.2969V22.8848H12.7032V16.3228H15.345V10.8248H12.7032ZM13.9388 14.9165H10.0613V12.231H13.9388V14.9165Z",fill:"black"}),f=o.a.createElement("path",{d:"M21.3581 4.26933V1.11511H19.9518V4.26933H17.3104V9.76683H19.9518V22.8848H21.3581V9.76683H24V4.26933H21.3581ZM22.5937 8.36058H18.7167V5.67558H22.5937V8.36058Z",fill:"black"}),h=function(e){var t=e.svgRef,a=e.title,n=m(e,["svgRef","title"]);return o.a.createElement("svg",i({width:17,height:17,viewBox:"0 0 24 24",fill:"none",ref:t},n),a?o.a.createElement("title",null,a):null,d,u,f)},E=o.a.forwardRef((function(e,t){return o.a.createElement(h,i({svgRef:t},e))})),v=(a.p,a(16)),p=a(27),y=a(12),w=a(77),N=Object(n.createContext)(),g=function(e){var t=["important","work","study","other"],a={year:(new Date).getFullYear(),month:(new Date).getMonth(),date:(new Date).getDate(),day:(new Date).toLocaleString("default",{weekday:"long"}),hour:(new Date).getHours(),minute:(new Date).getMinutes()},c=["Daily web development","Get groceries for dinner","Home exercise at 6pm","Call Daniel for meeting","House cleaning","Tennis practice","Do lundary","Email Noah for update","Finish monthly growth report","Send in cacenllation letter","Figure out vacation destination","Fill in scholarship application"].map((function(e,n){var o,c;return n<2?(o=a.date,c=t[0]):(o=a.date+Math.floor(7*Math.random()),c=t[Math.floor(4*Math.random())]),{id:e,task:e,completed:Math.random()>=.5,type:c,dateInfo:{year:a.year,month:a.month,date:o,day:new Date(a.year,a.month,o).toLocaleString("default",{weekday:"long"})}}})),l=JSON.parse(localStorage.getItem("to-do-list"))||c,s=Object(n.useState)(l),i=Object(r.a)(s,2),m=i[0],d=i[1];Object(n.useEffect)((function(){localStorage.setItem("to-do-list",JSON.stringify(m))}),[m]);var u=JSON.parse(localStorage.getItem("selected-view"))||"daily",f=Object(n.useState)(u),h=Object(r.a)(f,2),E=h[0],v=h[1];Object(n.useEffect)((function(){localStorage.setItem("selected-view",JSON.stringify(E))}),[E]);var p=JSON.parse(localStorage.getItem("sort-value"))||"recent",g=Object(n.useState)(p),b=Object(r.a)(g,2),k=b[0],O=b[1];Object(n.useEffect)((function(){localStorage.setItem("sort-value",JSON.stringify(k))}),[k]);var j=Object(n.useState)(!1),C=Object(r.a)(j,2),x=C[0],S=C[1],T=m.filter((function(e){return"recent"===k||"tag"===k||"oldest"===k?e:"completed"===k?e.completed:"active"===k?!e.completed:e})),I={today:a,todoList:m,addTodo:function(e){d([].concat(Object(w.a)(m),[e]))},removeTodo:function(e){d(m.filter((function(t){return e!==t.id})))},toggleComplete:function(e){var t=m.map((function(t){return e===t.id?Object(y.a)(Object(y.a)({},t),{},{completed:!t.completed}):t}));d(t)},selectedView:E,updateSelectedView:function(e){v(e)},sortValue:k,updateSortValue:function(e){O(e)},addNewTodoButtonClicked:x,setAddNewTodoButtonClicked:S,handleClickAddNewTodoButton:function(){S(!x)},handleClickOutsideForm:function(){x&&S(!x)},sortedTodoList:T};return o.a.createElement(N.Provider,{value:I},e.children)};var b=function(){var e=Object(n.useContext)(N).selectedView,t=[{path:"/".concat(e),icon:o.a.createElement(v.d,null)},{path:"/inbox",icon:o.a.createElement(p.a,null)},{path:"/",icon:o.a.createElement(v.c,null)}];return o.a.createElement("nav",{className:"nav container flex"},o.a.createElement("ul",{className:"left flex"},t.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(s.b,{exact:!0,to:e.path,className:"icon flex center",activeClassName:" selected"},e.icon))}))),o.a.createElement("ul",{className:"right flex"},o.a.createElement("li",null,o.a.createElement(s.b,{exact:!0,to:"/adjust",className:"icon flex center",activeClassName:" selected"},o.a.createElement(E,null))),o.a.createElement("li",null,o.a.createElement(s.b,{exact:!0,to:"/search",className:"icon flex center",activeClassName:" selected"},o.a.createElement(v.b,null)))))};var k=function(){var e=Object(n.useContext)(N).today,t=Object(n.useState)({hour:e.hour,minute:e.minute,day:(new Date).toLocaleString("default",{weekday:"short"}),month:(new Date).toLocaleString("default",{month:"short"}),date:e.date}),a=Object(r.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){l({hour:e.hour,minute:e.minute,day:(new Date).toLocaleString("default",{weekday:"short"}),month:(new Date).toLocaleString("default",{month:"short"}),date:e.date})}),[e.minute]),o.a.createElement("div",{className:"time-display"},o.a.createElement("div",{className:"time"},c.hour,":",c.minute<10?"0"+c.minute:c.minute),o.a.createElement("div",{className:"day"},c.day,", ",c.month,o.a.createElement("span",{className:"date"},c.date)))},O=a(21),j=a(71),C=a(28);var x=function(e){var t=e.handleInputChange,a=e.todo,n=e.colorBoxClicked,c=e.defaultColorType,l=e.handleDefaultSelect,r=e.handleSelectType;return o.a.createElement("div",{className:"new-task-box flex v-center"},o.a.createElement("input",{type:"text",onChange:t,value:a.task,placeholder:"New task",className:"text-input",name:"task"}),o.a.createElement("div",{className:"select-type-container"},o.a.createElement("ul",{className:"select-type-default-ul",onClick:l},o.a.createElement("li",null,o.a.createElement("span",{className:"color-box ".concat(c)}),o.a.createElement("span",{className:"arrow-down"},o.a.createElement(j.a,null)))),o.a.createElement("ul",{className:"select-type-dropdown-ul ".concat(n?"show-dropdown":""),onClick:r},["important","work","study","other"].map((function(e){return o.a.createElement(S,{key:e,defaultColorType:c,colorType:e})})))))};function S(e){var t=e.defaultColorType,a=e.colorType;return o.a.createElement("li",{"data-color-type":a},o.a.createElement("span",{className:"checked-icon-container"},t===a?o.a.createElement(C.a,null):null),o.a.createElement("span",{className:"color-box "+a}),o.a.createElement("span",null,a))}var T=a(72),I=a.n(T);a(88);var D=function(e){var t=e.startDate,a=e.handleDateSelect,n=e.handleDateChange;return o.a.createElement("div",null,o.a.createElement(I.a,{selected:t,onChange:n,onSelect:a,showTimeInput:!0,showWeekNumbers:!0,shouldCloseOnSelect:!1,timeInputLabel:"Time:"}))};var V=function(){var e=Object(n.useContext)(N),t=e.today,a=e.addNewTodoButtonClicked,c=e.setAddNewTodoButtonClicked,l=e.addTodo,s=Object(n.useState)(!1),i=Object(r.a)(s,2),m=i[0],d=i[1],u=Object(n.useState)("important"),f=Object(r.a)(u,2),h=f[0],E=f[1],v=Object(n.useState)(new Date),p=Object(r.a)(v,2),w=p[0],g=p[1],b=Object(n.useState)({task:"",type:h,completed:!1,dateInfo:{year:t.year,month:t.month,date:t.date,day:t.day,hour:t.hour,minute:t.minute}}),k=Object(r.a)(b,2),j=k[0],C=k[1];return o.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault();var t=Object(y.a)(Object(y.a)({},j),{},{id:Date.now(),task:j.task});l(t),C(Object(y.a)(Object(y.a)({},j),{},{task:""})),c(!a)},onClick:function(e){e.stopPropagation()},className:"add-new-todo-form ".concat(a?" show-add-new-todo-form":"")},o.a.createElement(x,{handleInputChange:function(e){var t=e.target.value;C(Object(y.a)(Object(y.a)({},j),{},Object(O.a)({},e.target.name,t)))},todo:j,colorBoxClicked:m,defaultColorType:h,handleDefaultSelect:function(){d(!m)},handleSelectType:function(e){E(e.target.dataset.colorType),d(!m)}}),o.a.createElement(D,{startDate:w,handleDateChange:function(e){C(Object(y.a)(Object(y.a)({},j),{},{dateInfo:{year:e.getFullYear(),month:e.getMonth(),date:e.getDate(),day:e.toLocaleString("default",{weekday:"long"}),hour:e.getHours(),minute:e.getMinutes()}}))},handleDateSelect:function(e){g(e)}}),o.a.createElement("button",{className:"submit",type:"submit"},"Add new task"))},H=a(44),M=function(){H.a.timeline().to(".todo-item",{duration:1,ease:"power4.out",y:0,opacity:1,stagger:{amount:.4}},.1)};var F=function(e){var t=e.todo,a=Object(n.useContext)(N),c=a.removeTodo,l=a.toggleComplete;return Object(n.useEffect)((function(){M()}),[t]),o.a.createElement("li",{className:"todo-item flex v-center"},o.a.createElement("div",null,o.a.createElement("span",{className:"type-bar ".concat(t.type)})),o.a.createElement("div",null,o.a.createElement("span",{className:"checkbox ".concat(t.completed?"completed "+t.type:""),onClick:function(){return l(t.id)}})),o.a.createElement("div",null,o.a.createElement("span",{className:"task"},t.task)),o.a.createElement("div",{className:"more"},o.a.createElement(C.b,{onClick:function(){return c(t.id)}}),o.a.createElement(v.a,null)))},B=a(32),L=a(75),_=function(){H.a.timeline().to(".initial-message",{duration:.8,ease:"power4.out",y:0,opacity:1}).to(".point-up-icon",{duration:.5,opacity:1,delay:-.5})};var A=function(){var e,t=Object(n.useContext)(N),a=t.today,c=t.todoList,l=t.addNewTodoButtonClicked,s=t.handleClickAddNewTodoButton,i=t.handleClickOutsideForm,m=Object(n.useState)(0),d=Object(r.a)(m,2),u=d[0],f=d[1],h=Object(n.useRef)(),E=Object(n.useState)(!1),v=Object(r.a)(E,2),p=v[0],y=v[1],w=c.filter((function(e){return e.dateInfo.year===a.year&&e.dateInfo.month===a.month&&e.dateInfo.date===a.date})),g=w[u];return Object(n.useEffect)((function(){h.current&&(h.current.getBoundingClientRect().top<130&&(y(!0),window.innerHeight>544&&y(!1)))})),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"home-main-container"},o.a.createElement("div",(e={className:"home-main flex center "+(l?"z-index":"")},Object(O.a)(e,"className","home-main flex center ".concat(l?"z-index":"")),Object(O.a)(e,"ref",h),Object(O.a)(e,"style",p?null:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}),e),g?o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"title"},"Focus on this now"),o.a.createElement(F,{key:g.id,todo:g}),o.a.createElement("div",{className:"arrows flex"},o.a.createElement(B.a,{className:"arrow arrow-back",onClick:function(){f((function(e){return t=e-1,a=w.length,(t%a+a)%a;var t,a}))}}),o.a.createElement(B.b,{className:"arrow arrow-next",onClick:function(){f((function(e){return(e+1)%w.length}))}}))):o.a.createElement(o.a.Fragment,null,o.a.createElement(Y,{handleClickAddNewTodoButton:s}),l?o.a.createElement(o.a.Fragment,null,o.a.createElement(V,null)):null))),l&&!g?o.a.createElement("div",{className:"overlay",onClick:i}):null)};function Y(e){var t=e.handleClickAddNewTodoButton;return Object(n.useEffect)((function(){_()}),[]),o.a.createElement("div",{className:"initial-message"},o.a.createElement(L.a,{className:"point-up-icon"}),o.a.createElement("h1",{className:"title message",onClick:t},"What's your todo today?"))}var W=function(){return o.a.createElement("div",{className:"home container"},o.a.createElement(k,null),o.a.createElement(A,null))};var J=function(){var e=Object(n.useContext)(N).handleClickOutsideForm;Object(n.useEffect)((function(){return function(){e()}}))};var P=function(e){var t=e.size,a=e.todoForToday;return o.a.createElement("ul",{className:"todo-list"},a.map((function(e,a){return o.a.createElement(F,{key:a,todo:e,size:t})})))},z=a(7);var R=Object(z.f)((function(e){var t=e.history,a=e.location,c=Object(n.useContext)(N),l=c.selectedView,r=c.updateSelectedView;return Object(n.useEffect)((function(){var e=a.pathname.slice(1,a.pathname.length);r(e)})),o.a.createElement("select",{className:"select-view",value:l,onChange:function(e){t.push("/".concat(e.target.value)),r(e.target.value)}},o.a.createElement("option",{value:"daily"},"Day"),o.a.createElement("option",{value:"weekly"},"Week"),o.a.createElement("option",{value:"monthly"},"Month"))}));var Z=function(){var e=Object(n.useContext)(N),t=e.sortValue,a=e.updateSortValue;return o.a.createElement("div",{className:"select-sort-container"},o.a.createElement("span",{className:"sort-by-text"},"sort by"),o.a.createElement("select",{className:"select-sort",value:t,onChange:function(e){a(e.target.value)}},o.a.createElement("option",{value:"recent"},"recent"),o.a.createElement("option",{value:"tag"},"tag"),o.a.createElement("option",{value:"oldest"},"oldest"),o.a.createElement("option",{value:"completed"},"completed"),o.a.createElement("option",{value:"active"},"active")))};var G=function(e){var t=e.title,a=Object(n.useContext)(N).handleClickAddNewTodoButton;return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"row-1"},o.a.createElement("div",{className:"row-1__1"},o.a.createElement("h1",{className:"title"},t)),o.a.createElement("div",{className:"row-1__2"},o.a.createElement(R,null))),o.a.createElement("div",{className:"row-2-col-1"},o.a.createElement(Z,null)),o.a.createElement("div",{className:"row-2-col-2"},o.a.createElement(p.b,{className:"add-new-todo-icon",onClick:a}),o.a.createElement(V,null)))};var $=function(){var e=Object(n.useContext)(N),t=e.today,a=e.handleClickOutsideForm,c=e.sortedTodoList.filter((function(e){return e.dateInfo.year===t.year&&e.dateInfo.month===t.month&&e.dateInfo.date===t.date}));return J(),o.a.createElement("div",{className:"daily",onClick:a},o.a.createElement("div",{className:"main-display container"},o.a.createElement(G,{title:"Today"}),o.a.createElement("div",{className:"list md"},c.length?o.a.createElement(P,{today:t,todoForToday:c}):o.a.createElement("span",{className:"no-todo-message"},"Add new todo at the top right"))),o.a.createElement("div",{className:"side-display"}))};var q=function(){for(var e=Object(n.useContext)(N),t=e.today,a=e.handleClickOutsideForm,c=e.sortedTodoList,l=[],r=function(e){var a=new Date(t.year,t.month,t.date+e),n=c.filter((function(a){return a.dateInfo.year===t.year&&a.dateInfo.month===t.month&&a.dateInfo.date===t.date+e})),o={dateInfo:{year:a.getFullYear(),month:a.getMonth(),date:a.getDate(),day:a.toLocaleString("default",{weekday:"long"})},todos:n};l.push(o)},s=0;s<7;s++)r(s);return l[0].dateInfo.day="Today",l[1].dateInfo.day="Tomorrow",J(),o.a.createElement("div",{className:"weekly",onClick:a},o.a.createElement("div",{className:"main-display container"},o.a.createElement(G,{title:"Weekly"}),o.a.createElement("div",{className:"weekly-list"},l.map((function(e,a){return o.a.createElement("div",{key:a,className:"list sm"},o.a.createElement("h2",null,e.dateInfo.day," ",o.a.createElement("span",{className:"date"},e.dateInfo.date),o.a.createElement("span",{className:"date-ordinal"},function(e){if(e.dateInfo>3&&e.dateInfo<21)return"th";switch(e.dateInfo%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(e.dateInfo))),e.todos.length?o.a.createElement(P,{key:a,today:t,todoForToday:e.todos}):o.a.createElement("span",{className:"no-todo-message"},"There's no todo"))}))),o.a.createElement("section",null,o.a.createElement("div",null))),o.a.createElement("div",{className:"side-display"}))};var K=function(e){var t=e.currentMonthName,a=e.selectedYear,c=e.moveToPrevMonth,l=e.moveToNextMonth,r=e.goBackToToday,s=Object(n.useContext)(N).handleClickAddNewTodoButton;return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"row-1"},o.a.createElement("div",{className:"row-1__1"},o.a.createElement("h1",{className:"title"},t)),o.a.createElement("div",{className:"row-1__2 arrows"},o.a.createElement(B.a,{className:"arrow arrow-back",onClick:c}),o.a.createElement(B.b,{className:"arrow arrow-next",onClick:l})),o.a.createElement("div",{className:"row-1__3"},o.a.createElement(R,null))),o.a.createElement("div",{className:"row-2-col-2"},o.a.createElement(p.b,{className:"add-new-todo-icon",onClick:s}),o.a.createElement(V,null)),o.a.createElement("div",{className:"row-2-col-1"},o.a.createElement("span",{className:"this-year"},a),o.a.createElement("button",{className:"today-btn",onClick:r},"today")))};var Q=function(e){var t=e.todo,a=Object(n.useContext)(N),c=a.toggleComplete,l=a.removeTodo;return o.a.createElement("li",{className:"inner-ul__list todo-item flex v-center"},o.a.createElement("div",{className:"col-1"},o.a.createElement("span",{className:"checkbox ".concat(t.type," ").concat(t.completed?"completed ":""),onClick:function(){return c(t.id)}})),o.a.createElement("div",{className:"col-2"},o.a.createElement("span",{className:"task ".concat(t.completed?"grey-out":"")},t.task),o.a.createElement("div",{className:"more"},o.a.createElement(C.b,{onClick:function(){return l(t.id)}}),o.a.createElement(v.a,null))))};var U=function(e){var t=e.eachDay;return o.a.createElement("li",{className:"outer-ul__list"},o.a.createElement("div",{className:"row-1"},o.a.createElement("span",{className:"date"},t[0].dateInfo.date),o.a.createElement("span",{className:"day"},t[0].dateInfo.day)),o.a.createElement("ul",{className:"row-2 inner-ul"},t.map((function(e){return o.a.createElement(Q,{key:e.id,todo:e})}))))},X=a(76),ee=a.n(X);var te=function(e){var t=e.currentMonthName,a=e.selectedYear,c=e.selectedMonth,l=Object(n.useContext)(N).todoList,r=(ee.a.groupBy(l,"dateInfo.year")["".concat(a)]||[]).filter((function(e){return e.dateInfo.month===c}))||[],s=Object.values(r.reduce((function(e,t){return e[t.dateInfo.date]?e[t.dateInfo.date].push(t):e[t.dateInfo.date]=[t],e}),{}));return o.a.createElement("div",{className:"monthly-list"},o.a.createElement("form",{action:""},o.a.createElement(v.b,{className:"search-icon"}),o.a.createElement("input",{type:"text",placeholder:"Search"})),o.a.createElement("h2",{className:"title"},t,o.a.createElement("span",{className:"todos-length"},"(",r.length,")")),o.a.createElement("ul",{className:"outer-ul"},s.map((function(e){return o.a.createElement(U,{key:e[0].id,eachDay:e})}))))};var ae=function(e){var t=e.showCalendar;return o.a.createElement("div",{className:"calendar-main"},o.a.createElement("div",{className:"days"},["M","T","W","T","F","S","S"].map((function(e,t){return o.a.createElement("span",{key:t},e)}))),t)};var ne=function(e){var t=e.className,a=e.date,n=e.dateInfo,c=e.showDateInfo;return o.a.createElement("span",{className:t,onClick:function(){return c(n)}},a)},oe=function(e,t){var a=new Date,n=new Date(e,t).getDay()-1;-1===n&&(n=6);for(var c=function(e,t){return 32-new Date(e,t,32).getDate()},l=[],r=1,s=new Date(e,t,1-n).getDate(),i=1,m=0;m<6;m++){for(var d=[],u=0;u<7;u++){var f={date:r,month:t,year:e},h=void 0;0===m&&u<n?(f.date=s,f.month=t-1===-1?11:t-1,f.year=11===f.month?e-1:e,h="days-prev-month",d.push(ce(u,h,s,f,le)),s++):r>c(e,t)?(f.date=i,f.month=t+1===12?0:t+1,f.year=0===f.month?e+1:e,h="days-next-month",d.push(ce(u,h,i,f,le)),i+=1):(h=5===u||6===u?"weekend ":"",r===a.getDate()&&e===a.getFullYear()&&t===a.getMonth()&&(h+="today"),d.push(ce(u,h,r,f,le)),r++)}l.push(o.a.createElement("div",{key:m,className:"week week-"+m},d))}return l},ce=function(e,t,a,n,c){return o.a.createElement(ne,{key:e,className:t,date:a,dateInfo:n,showDateInfo:c})},le=function(e){console.log("show date info..",e)};var re=function(e){var t=e.selectedYear,a=e.selectedMonth;return o.a.createElement("div",{className:"calendar-container"},o.a.createElement(ae,{showCalendar:oe(t,a)}))};var se=function(){var e=Object(n.useContext)(N),t=e.today,a=e.handleClickOutsideForm,c=Object(n.useState)(t.year),l=Object(r.a)(c,2),s=l[0],i=l[1],m=Object(n.useState)(t.month),d=Object(r.a)(m,2),u=d[0],f=d[1],h=new Date(t.year,u).toLocaleString("default",{month:"long"});return J(),o.a.createElement("div",{className:"monthly",onClick:a},o.a.createElement("div",{className:"main-display container"},o.a.createElement(K,{currentMonthName:h,selectedYear:s,moveToPrevMonth:function(){0===u&&(i((function(e){return e-1})),f(12)),f((function(e){return e-1}))},moveToNextMonth:function(){11===u&&i((function(e){return e+1})),f((function(e){return(e+1)%12}))},goBackToToday:function(){i(t.year),f(t.month)}}),o.a.createElement("div",{className:"main"},o.a.createElement(re,{selectedYear:s,selectedMonth:u}),o.a.createElement(te,{currentMonthName:h,selectedYear:s,selectedMonth:u}))),o.a.createElement("div",{className:"side-display"}))};var ie=function(){var e=Object(n.useState)({width:window.innerWidth,height:window.innerHeight}),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){c({width:window.innerWidth,height:window.innerHeight})}var t=.01*a.height;return document.documentElement.style.setProperty("--vh","".concat(t,"px")),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[a]),o.a.createElement("div",{className:"app"},o.a.createElement(b,null),o.a.createElement(z.c,null,o.a.createElement(z.a,{exact:!0,path:"/",component:W}),o.a.createElement(z.a,{exact:!0,path:"/daily",component:$}),o.a.createElement(z.a,{exact:!0,path:"/weekly",component:q}),o.a.createElement(z.a,{exact:!0,path:"/monthly",component:se})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(s.a,{basename:"/"},o.a.createElement(g,null,o.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,a){e.exports=a(146)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.4858181f.chunk.js.map