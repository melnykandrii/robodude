(this.webpackJsonproboduds=this.webpackJsonproboduds||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),o=n.n(c),s=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))}),a=(n(13),n(2)),i=n(3),h=n(5),u=n(4),l=(n(14),n(0)),b=function(e){e.robots;throw new Error("Miss card Data")},d=function(e){e.searchfield;var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search for robots",onChange:t})})},j=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},f=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Error. Something went wrong!"}):this.props.children}}]),n}(r.Component),p=(n(16),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return t.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(l.jsx)(d,{searchChange:this.onSearchChange}),Object(l.jsx)(j,{children:Object(l.jsx)(f,{children:Object(l.jsx)(b,{robots:r})})})]}):Object(l.jsx)("h1",{className:"f2 tc",children:"Loading..."})}}]),n}(r.Component));o.a.render(Object(l.jsx)(p,{}),document.getElementById("root")),s()}},[[17,1,2]]]);
//# sourceMappingURL=main.2410687c.chunk.js.map