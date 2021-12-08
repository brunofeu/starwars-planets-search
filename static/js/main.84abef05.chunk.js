(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/star-wars-4.c41f740a.svg"},11:function(e,t,a){e.exports=a.p+"static/media/audio.11a73037.mp3"},13:function(e,t,a){e.exports=a(20)},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=(a(18),a(5)),u=a(1),i=a(2),s=Object(n.createContext)(),m=a(10),f=a.n(m),p=a(11),d=a.n(p);var b=function(){var e=Object(n.useContext)(s),t=e.data,a=e.isLoading,c=e.setNameFilterText,o=e.filters,m=e.getNumericFilters,p=e.removeFilter,b=e.getSortOrder,E=o.filterByName.name,v=Object(n.useState)({value:0}),j=Object(i.a)(v,2),O=j[0],h=j[1],y=Object(n.useState)(["population","orbital_period","diameter","rotation_period","surface_water"]),N=Object(i.a)(y,2),g=N[0],C=N[1],k=Object(n.useState)({column:"name",sort:"ASC"}),S=Object(i.a)(k,2),w=S[0],x=S[1];Object(n.useEffect)((function(){h({column:g[0],comparison:"maior que",value:0})}),[g]);var I=function(e){var t=e.target;h(Object(u.a)(Object(u.a)({},O),{},Object(l.a)({},t.name,t.value)))},B=function(e){var t=e.target.value;x(Object(u.a)(Object(u.a)({},w),{},{sort:t}))};return r.a.createElement("main",{className:"App-header"},r.a.createElement("audio",{autoPlay:!0},r.a.createElement("source",{src:"horse.ogg",type:"audio/ogg"}),r.a.createElement("source",{src:d.a,type:"audio/mpeg"}),"Your browser does not support the audio element."),r.a.createElement("img",{className:"App-logo",src:f.a,alt:"logo-starwars"}),r.a.createElement("div",{className:"filter-container"},r.a.createElement("div",{className:"filter-form"},r.a.createElement("input",{className:"filter-by-name",type:"text",placeholder:"Filtrar por Nome","data-testid":"name-filter",value:E,onChange:function(e){return c(e.target)}}),r.a.createElement("div",{className:"filter-details"},r.a.createElement("div",{className:"filter-by-number"},r.a.createElement("select",{"data-testid":"column-filter",name:"column",onChange:I},g.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("select",{"data-testid":"comparison-filter",name:"comparison",onChange:I},r.a.createElement("option",{selected:!0,value:"maior que"},"maior que"),r.a.createElement("option",{value:"menor que"},"menor que"),r.a.createElement("option",{value:"igual a"},"igual a")),r.a.createElement("input",{name:"value",value:O.value,type:"number","data-testid":"value-filter",onChange:I}),r.a.createElement("button",{type:"button",onClick:function(){m(O),C(g.filter((function(e){return e!==O.column})))},"data-testid":"button-filter",disabled:0===g.length},"Adicionar Filtro")),r.a.createElement("div",{className:"filter-sort"},r.a.createElement("select",{"data-testid":"column-sort",name:"sort",onChange:function(e){var t=e.target;x(Object(u.a)(Object(u.a)({},w),{},{column:t.value}))}},!a&&Object.keys(t[0]).map((function(e){return r.a.createElement("option",{key:e,name:"column",value:e},e)}))),r.a.createElement("label",{htmlFor:"ASC",className:"column-sort-radio"},r.a.createElement("input",{type:"radio",value:"ASC",name:"order",id:"ASC",onChange:B,checked:"ASC"===w.sort,"data-testid":"column-sort-input-asc"}),"ASC"),r.a.createElement("label",{htmlFor:"DESC",className:"column-sort-radio"},r.a.createElement("input",{type:"radio",value:"DESC",name:"order",id:"DESC",onChange:B,"data-testid":"column-sort-input-desc",checked:"DESC"===w.sort}),"DESC"),r.a.createElement("button",{type:"button","data-testid":"column-sort-button",onClick:function(){b(w)}},"Ordenar")))),r.a.createElement("ul",null,o.filterByNumericValues.map((function(e,t){var a=e.column,n=e.comparison,c=e.value;return r.a.createElement("li",{key:t,"data-testid":"filter"},"".concat(a," ").concat(n," ").concat(c),r.a.createElement("button",{className:"del-btn",type:"button",onClick:function(){return function(e){var t=o.filterByNumericValues.filter((function(t){return t.column!==e}));C(g.concat(e)),p(t)}(a)}},"Apagar"))})))))};var E=function(){var e=Object(n.useContext)(s),t=e.data,a=e.isLoading,c=e.filteredPlanets;return r.a.createElement("div",{className:"table-container"},0===c.length?r.a.createElement("h3",null,"Nenhum planeta atende ao filtro selecionado"):!a&&r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,Object.keys(t[0]).map((function(e){return r.a.createElement("th",{key:e},e.replace("_"," ").toUpperCase())})))),r.a.createElement("tbody",null,c.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{key:e.name,"data-testid":"planet-name"},e.name),Object.values(e).slice(1,13).map((function(e,t){return r.a.createElement("td",{key:t},"object"===typeof e?e.map((function(e){return r.a.createElement("a",{key:e,href:e,className:"list-url"},e,r.a.createElement("br",null))})):function(e){return e.includes("https")?r.a.createElement("a",{href:e,className:"list-url"},e):e}(e))})))})))))},v=a(3),j=a.n(v),O=a(12),h=a(7),y="https://swapi-trybe.herokuapp.com/api/planets/";function N(){return(N=Object(h.a)(j.a.mark((function e(){var t,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,(n=a.results).forEach((function(e){return delete e.residents})),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(){return N.apply(this,arguments)};var C=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(i.a)(a,2),o=c[0],l=c[1],m=Object(n.useState)(!0),f=Object(i.a)(m,2),p=f[0],d=f[1],b=Object(n.useState)([]),E=Object(i.a)(b,2),v=E[0],y=E[1],N=Object(n.useState)({filterByName:{name:""},filterByNumericValues:[],order:{column:"name",sort:"ASC"}}),C=Object(i.a)(N,2),k=C[0],S=C[1];function w(){return(w=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,g();case 3:t=e.sent,y(t),l(t),d(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){w.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){var e=o.filter((function(e){return e.name.toLowerCase().includes(k.filterByName.name.toLowerCase())}));y(e)}),[k.filterByName,o]),Object(n.useEffect)((function(){var e="",t=k.filterByNumericValues;0===t.length?y(o):(e=o,t.forEach((function(t){var a=t.column,n=t.comparison,r=t.value;switch(n){case"maior que":e=e.filter((function(e){return parseInt(e[a],10)>parseInt(r,10)}));break;case"menor que":e=e.filter((function(e){return parseInt(e[a],10)<parseInt(r,10)}));break;case"igual a":e=e.filter((function(e){return parseInt(e[a],10)===parseInt(r,10)}))}})),y(e))}),[k.filterByNumericValues]),Object(n.useEffect)((function(){var e=k.order.column,t="";p&&y(v),p||0===v.length||(t=Number.isNaN(parseInt(v[0][e],10))?function(){var e=k.order,t=e.sort,a=e.column,n="";switch(t){case"ASC":n=v.sort((function(e,t){return e[a]>t[a]?1:t[a]>e[a]?-1:0}));break;case"DESC":n=v.sort((function(e,t){return e[a]>t[a]?-1:t[a]>e[a]?1:0}))}return n}():function(){var e=k.order,t=e.sort,a=e.column,n="";switch(t){case"ASC":n=v.sort((function(e,t){return parseInt(e[a],10)>parseInt(t[a],10)?1:parseInt(t[a],10)>parseInt(e[a],10)?-1:0}));break;case"DESC":n=v.sort((function(e,t){return parseInt(e[a],10)>parseInt(t[a],10)?-1:parseInt(t[a],10)>parseInt(e[a],10)?1:0}))}return n}(),y(t)),S(Object(u.a)({},k))}),[k.order,v]);var x={data:o,isLoading:p,filteredPlanets:v,setNameFilterText:function(e){var t=e.value;S(Object(u.a)(Object(u.a)({},k),{},{filterByName:{name:t}}))},getNumericFilters:function(e){S(Object(u.a)(Object(u.a)({},k),{},{filterByNumericValues:[].concat(Object(O.a)(k.filterByNumericValues),[e])}))},filters:k,removeFilter:function(e){S(Object(u.a)(Object(u.a)({},k),{},{filterByNumericValues:e}))},getSortOrder:function(e){S(Object(u.a)(Object(u.a)({},k),{},{order:e}))}};return r.a.createElement(s.Provider,{value:x},t)};var k=function(){return r.a.createElement(C,null,r.a.createElement(b,null),r.a.createElement(E,null))};o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.84abef05.chunk.js.map