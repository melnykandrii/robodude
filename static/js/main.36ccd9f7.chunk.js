(this.webpackJsonproboduds=this.webpackJsonproboduds||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(3),s=n.n(r),a=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))}),o=(n(13),n(4)),i=n(5),h=n(7),l=n(6),d=(n(14),n(0)),u=function(e){var t=e.name,n=e.email,c=e.id;return Object(d.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{alt:t,src:"https://robohash.org/name+".concat(c,"?size=200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:t}),Object(d.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e,n){return Object(d.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},j=function(e){e.searchfield;var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search for robots",onChange:t})})},f=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},g=(n(16),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)(j,{searchChange:this.onSearchChange}),Object(d.jsx)(f,{children:Object(d.jsx)(b,{robots:c})})]}):Object(d.jsx)("h1",{className:"f2 tc",children:"Loading..."})}}]),n}(c.Component));s.a.render(Object(d.jsx)(g,{}),document.getElementById("root")),a()}},[[17,1,2]]]);
//# sourceMappingURL=main.36ccd9f7.chunk.js.map