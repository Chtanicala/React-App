(this["webpackJsonp00-practice-app"]=this["webpackJsonp00-practice-app"]||[]).push([[0],{10:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s(4),n=s.n(i),r=s(2),a=s(0);var u=function(e){var t=e.onFormSubmit,s=Object(c.useState)("microsoft/vscode"),i=Object(r.a)(s,2),n=i[0],u=i[1];return Object(a.jsx)("div",{className:"search-bar ui segment",children:Object(a.jsx)("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),t(n)},children:Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("label",{children:"Retrieve GitHub Issues"}),Object(a.jsx)("input",{type:"text",value:n,onChange:function(e){return u(e.target.value)},placeholder:"facebook/react"})]})})})},l=function(e){var t=e.issue;return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("i",{className:"large github middle aligned icon"}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("a",{className:"header",href:t.html_url,target:"_blank",rel:"noreferrer",children:t.title}),Object(a.jsx)("div",{className:"description",children:t.description})]})]})},o=function(e){var t=e.issues.map((function(e){return Object(a.jsx)(l,{issue:e},e.id)}));return Object(a.jsx)("div",{className:"ui relaxed divided list",children:t})};var d=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),s=t[0],i=t[1];return Object(c.useEffect)((function(){document.title="GitHub issues"}),[]),Object(a.jsxs)("div",{className:"ui container",children:[Object(a.jsx)(u,{onFormSubmit:function(e){var t="https://api.github.com/repos/".concat(e,"/issues?direction=asc");console.log("issuesURL",t),fetch(t).then((function(e){return e.json()})).then((function(e){return i(e)}))}}),Object(a.jsx)("div",{className:"ui grid",children:Object(a.jsx)("div",{className:"ui row",children:Object(a.jsx)("div",{className:"eleven wide column",children:Object(a.jsx)(o,{issues:s})})})})]})};n.a.render(Object(a.jsx)(d,{}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.8d84824f.chunk.js.map