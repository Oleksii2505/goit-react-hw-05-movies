"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[360],{6966:function(n,e,t){t.d(e,{Fg:function(){return d},JL:function(){return p},h4:function(){return l},zL:function(){return f}});var r,c,a,i,o=t(168),s=t(5706),u=t(1087),l=s.Z.header(r||(r=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 12px 32px;\n  background: linear-gradient(to bottom, #7927b200, #ff00aa7a);\n  height: 80px;\n  font-weight: 600;\n"]))),p=s.Z.nav(c||(c=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n"]))),d=(0,s.Z)(u.OL)(a||(a=(0,o.Z)(["\n  text-decoration: none;\n  font-size: 24px;\n  color: #0505fa;\n  &.active {\n    color: #ffffff;\n  }\n"]))),f=s.Z.div(i||(i=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n"])))},5360:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,c,a,i,o,s,u,l,p,d=t(5861),f=t(9439),x=t(4687),h=t.n(x),v=t(7689),g=t(2791),Z=t(6286),m=t(4390),j=t(9135),w=t(168),b=t(5706),k=t(1087),y=b.Z.div(r||(r=(0,w.Z)(["\n  padding: 24px 32px;\n"]))),D=(0,b.Z)(k.rU)(c||(c=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  width: 90px;\n  background-color: #0d2142;\n  color: #963d77;\n  padding: 6px 8px;\n  border-radius: 4px;\n  &:hover {\n    color: #062961;\n    background-color: #7997c7;\n  }\n"]))),B=b.Z.div(a||(a=(0,w.Z)(["\n  padding: 32px 0;\n  display: flex;\n  gap: 36px;\n"]))),_=b.Z.div(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 36px;\n"]))),U=b.Z.div(o||(o=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),E=b.Z.div(s||(s=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),S=b.Z.div(u||(u=(0,w.Z)(["\n  padding: 30px 0 0 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),C=b.Z.ul(l||(l=(0,w.Z)(["\n  display: flex;\n  gap: 16px;\n"]))),L=(0,b.Z)(k.rU)(p||(p=(0,w.Z)(["\n  color: #baed42;\n  &:hover {\n    color: #3bd984;\n  }\n"]))),F=t(6966),O=t(184),z=function(){var n,e,t=(0,g.useState)({}),r=(0,f.Z)(t,2),c=r[0],a=r[1],i=(0,v.UO)().movieId,o=(0,v.TH)(),s=(0,g.useRef)(null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,g.useEffect)((function(){try{var n=function(){var n=(0,d.Z)(h().mark((function n(){var e,t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,m.fP)(i);case 2:e=n.sent,t=e.data,a(t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(e){console.log(e.message),a({})}}),[i]),(0,O.jsxs)(y,{children:[(0,O.jsxs)(D,{to:s.current,children:[(0,O.jsx)(j._HU,{}),"Back"]}),Boolean(Object.keys(c).length)&&(0,O.jsxs)("div",{children:[(0,O.jsxs)(B,{children:[(0,O.jsx)("div",{children:(0,O.jsx)("img",{src:c.poster_path?"https://image.tmdb.org/t/p/w500/".concat(c.poster_path):"https://media.istockphoto.com/id/147273331/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D1%94-%D0%B2%D1%96%D0%B4%D1%80%D0%BE-%D0%BF%D0%BE%D0%BF%D0%BA%D0%BE%D1%80%D0%BD%D1%83.jpg?s=2048x2048&w=is&k=20&c=EVEpgBCnZmkrieihX5eDgsssBgcGyU71woNkj5N4FiM=",alt:c.title,width:"352"})}),(0,O.jsxs)(_,{children:[(0,O.jsx)("h1",{children:c.title}),(0,O.jsxs)("p",{children:["Average score: ",c.vote_average]}),(0,O.jsxs)(U,{children:[(0,O.jsx)("h2",{children:"Overview"}),(0,O.jsx)("p",{children:c.overview})]}),(0,O.jsxs)(E,{children:[(0,O.jsx)("h3",{children:"Genres"}),c.genres.map((function(n){return n.name})).join(", ")]}),(0,O.jsxs)(S,{children:[(0,O.jsx)("h3",{children:"Additional Information"}),(0,O.jsxs)(C,{children:[(0,O.jsx)("li",{children:(0,O.jsx)(L,{to:"cast",children:"Cast"})}),(0,O.jsx)("li",{children:(0,O.jsx)(L,{to:"reviews",children:"Reviews"})})]})]})]})]}),(0,O.jsx)(g.Suspense,{fallback:(0,O.jsx)(F.zL,{children:(0,O.jsx)(Z.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),children:(0,O.jsx)(v.j3,{})})]})]})}},4390:function(n,e,t){t.d(e,{Hx:function(){return f},V0:function(){return p},fP:function(){return l},i7:function(){return u},uV:function(){return d}});var r=t(5861),c=t(4687),a=t.n(c),i=t(1243),o="dafb4cf758741e9fd84f5c71b8506454",s="https://api.themoviedb.org/3/",u=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"trending/movie/week?api_key=").concat(o));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=1"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=360.a5279665.chunk.js.map