(this.webpackJsonproboduds=this.webpackJsonproboduds||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),s=n.n(r),a=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))}),o=(n(14),n(3)),i=(n(15),n(0)),h=function(e){var t=e.name,n=e.email,c=e.id;return Object(i.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(i.jsx)("img",{alt:t,src:"https://robohash.org/name+".concat(c,"?size=200x200")}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:t}),Object(i.jsx)("p",{children:n})]})]})},l=function(e){var t=e.robots;return Object(i.jsx)("div",{children:t.map((function(e,n){return Object(i.jsx)(h,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},u=function(e){e.searchfield;var t=e.searchChange;return Object(i.jsx)("div",{className:"pa2",children:Object(i.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search for robots",onChange:t})})},j=function(e){return Object(i.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},b=n(5),d=n(6),f=n(8),O=n(7),g=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(b.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(i.jsx)("h1",{children:"Error. Something went wrong!"}):this.props.children}}]),n}(c.Component),m=(n(17),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(o.a)(s,2),h=a[0],b=a[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);var d=n.filter((function(e){return e.name.toLocaleLowerCase().includes(h.toLocaleLowerCase())}));return n.length?Object(i.jsxs)("div",{className:"tc",children:[Object(i.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(i.jsx)(u,{searchChange:function(e){b(e.target.value)}}),Object(i.jsx)(j,{children:Object(i.jsx)(g,{children:Object(i.jsx)(l,{robots:d})})})]}):Object(i.jsx)("h1",{className:"f2 tc",children:"Loading..."})});s.a.render(Object(i.jsx)(m,{}),document.getElementById("root")),a()}},[[18,1,2]]]);
//# sourceMappingURL=main.1621f69f.chunk.js.map