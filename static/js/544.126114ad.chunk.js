"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{9544:function(n,t,e){e.r(t);var r=e(5861),i=e(9439),o=e(4687),c=e.n(o),a=e(2791),p=e(1087),u=e(4390),s=e(7398),f=e(155),d=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,i.Z)(n,2),e=t[0],o=t[1];return(0,a.useEffect)((function(){try{var n=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.i7)();case 2:t=n.sent,e=t.data.results,r=e.map((function(n){return{id:n.id,poster_path:n.poster_path,title:n.title}})),o(r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(t){console.log(t)}}),[]),(0,d.jsx)(s.yc,{children:e.map((function(n){var t=n.id,e=n.poster_path,r=n.title;return(0,d.jsx)(p.rU,{to:"/movies/".concat(t),children:(0,d.jsxs)(s._f,{children:[(0,d.jsx)(s.N$,{children:(0,d.jsx)(f.DF,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://media.istockphoto.com/id/147273331/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D1%94-%D0%B2%D1%96%D0%B4%D1%80%D0%BE-%D0%BF%D0%BE%D0%BF%D0%BA%D0%BE%D1%80%D0%BD%D1%83.jpg?s=2048x2048&w=is&k=20&c=EVEpgBCnZmkrieihX5eDgsssBgcGyU71woNkj5N4FiM=",alt:r,width:"352"})}),(0,d.jsx)(s.Bq,{children:(0,d.jsx)("h2",{children:r})})]})},t)}))})}},7398:function(n,t,e){e.d(t,{Bq:function(){return d},N$:function(){return s},_f:function(){return u},yc:function(){return f}});var r,i,o,c,a=e(168),p=e(5706),u=p.Z.li(r||(r=(0,a.Z)(["\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: #af93aa12;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 352px;\n  transition-duration: 250ms;\n  transition-property: scale;\n  transition-timing-function: ease-in-out;\n  &:hover {\n    scale: 1.02;\n    box-shadow: 0px 1px 2px rgb(255 0 249 / 31%),\n      0px 2px 4px rgb(255 0 245 / 50%), 0px 4px 8px rgb(255 235 0 / 31%),\n      0px 8px 16px rgb(255 247 254 / 35%);\n  }\n"]))),s=p.Z.div(i||(i=(0,a.Z)(["\n  width: 352px;\n  height: 528px;\n"]))),f=p.Z.ul(o||(o=(0,a.Z)(["\n  padding: 32px 0;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),d=p.Z.div(c||(c=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 60px;\n  padding: 16px 0;\n  text-align: center;\n  font-size: 12px;\n"])))},155:function(n,t,e){e.d(t,{DF:function(){return g},Hq:function(){return h},Mj:function(){return x},Ow:function(){return f},UI:function(){return d},l4:function(){return l}});var r,i,o,c,a,p,u=e(168),s=e(5706),f=s.Z.header(r||(r=(0,u.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #392b3754;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),d=s.Z.form(i||(i=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #140e1294;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),l=s.Z.button(o||(o=(0,u.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-color: #5d425b;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),h=s.Z.span(c||(c=(0,u.Z)(["\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),x=s.Z.input(a||(a=(0,u.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 24px;\n  padding-right: 4px;\n  background-color: #140e1200;\n  color: #ffffff;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n    color: #ffffff;\n  }\n"]))),g=s.Z.img(p||(p=(0,u.Z)(["\n  object-fit: cover;\n"])))},4390:function(n,t,e){e.d(t,{Hx:function(){return d},V0:function(){return s},fP:function(){return u},i7:function(){return p},uV:function(){return f}});var r=e(5861),i=e(4687),o=e.n(i),c=e(1243),a="dafb4cf758741e9fd84f5c71b8506454",p=function(){var n=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(a));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(a,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&query=").concat(t,"&page=1"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(a,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(a,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.126114ad.chunk.js.map