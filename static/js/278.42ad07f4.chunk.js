"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{7398:function(n,t,e){e.d(t,{EL:function(){return f},_f:function(){return p},tG:function(){return s},yc:function(){return l}});var r,i,o,a,c=e(168),u=e(5706),p=u.Z.li(r||(r=(0,c.Z)(["\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: #49248a;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 352px;\n  transition-duration: 250ms;\n  transition-property: scale;\n  transition-timing-function: ease-in-out;\n  &:hover {\n    scale: 1.02;\n    box-shadow: 0px 1px 2px rgb(255 0 249 / 31%),\n      0px 2px 4px rgb(255 0 245 / 50%), 0px 4px 8px rgb(255 235 0 / 31%),\n      0px 8px 16px rgb(255 247 254 / 35%);\n  }\n"]))),s=u.Z.div(i||(i=(0,c.Z)([""]))),l=u.Z.ul(o||(o=(0,c.Z)(["\n  padding: 32px 0;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),f=u.Z.div(a||(a=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 60px;\n  padding: 16px 0;\n  text-align: center;\n  font-size: 12px;\n"])))},9278:function(n,t,e){e.r(t);var r=e(5861),i=e(9439),o=e(4687),a=e.n(o),c=e(2791),u=e(1087),p=e(7689),s=e(1686),l=e.n(s),f=e(9135),d=e(4390),h=e(155),g=e(7398),x=e(184);t.default=function(){var n=(0,c.useState)(""),t=(0,i.Z)(n,2),e=t[0],o=t[1],s=(0,c.useState)([]),v=(0,i.Z)(s,2),b=v[0],m=v[1],w=(0,u.lr)(),y=(0,i.Z)(w,2),Z=y[0],k=y[1],j=Z.get("query"),_=(0,p.TH)();(0,c.useEffect)((function(){if(null!==j)try{var n=function(){var n=(0,r.Z)(a().mark((function n(){var t,e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,d.V0)(j);case 2:t=n.sent,(e=t.data.results).length||l().Notify.warning("Oops, there are no movies by this search, try another title"),r=e.map((function(n){return{id:n.id,poster_path:n.poster_path,original_title:n.original_title}})),m(r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(t){console.log(t.message)}}),[j,Z]);return(0,x.jsxs)("div",{children:[(0,x.jsx)(h.Ow,{children:(0,x.jsxs)(h.UI,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.search.value;if(o(t.toLowerCase().trim()),k({query:t.toLowerCase().trim()}),""===e.trim())return l().Notify.warning("Enter title of movie to search"),void(t="");o("")},children:[(0,x.jsxs)(h.l4,{type:"submit",className:"button",children:[(0,x.jsx)(f.Ozl,{size:"24px",fill:"#fff"}),(0,x.jsx)(h.Hq,{className:"button-label",children:"Search"})]}),(0,x.jsx)(h.Mj,{type:"text",autoComplete:"off",name:"search",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:function(n){var t=n.target;o(t.value)}})]})}),b&&(0,x.jsx)(g.yc,{children:b.map((function(n){var t=n.id,e=n.poster_path,r=n.original_title;return(0,x.jsx)(u.rU,{to:"/movies/".concat(t),state:{from:_},children:(0,x.jsxs)(g._f,{children:[(0,x.jsx)(g.tG,{children:(0,x.jsx)(h.DF,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://as1.ftcdn.net/v2/jpg/01/41/48/32/1000_F_141483247_cvrudefB00p8qNxoapWW54jjm3LzXFgz.jpg",alt:r,width:"352",height:"400"})}),(0,x.jsx)(g.EL,{children:(0,x.jsx)("h2",{children:r})})]})},t)}))})]})}},155:function(n,t,e){e.d(t,{DF:function(){return x},Hq:function(){return h},Mj:function(){return g},Ow:function(){return l},UI:function(){return f},l4:function(){return d}});var r,i,o,a,c,u,p=e(168),s=e(5706),l=s.Z.header(r||(r=(0,p.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #392b3754;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),f=s.Z.form(i||(i=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #140e1294;\n  border-radius: 8px;\n  overflow: hidden;\n"]))),d=s.Z.button(o||(o=(0,p.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-color: #5d425b;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),h=s.Z.span(a||(a=(0,p.Z)(["\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),g=s.Z.input(c||(c=(0,p.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 24px;\n  padding-right: 4px;\n  background-color: #140e1200;\n  color: #ffffff;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n    color: #ffffff;\n  }\n"]))),x=s.Z.img(u||(u=(0,p.Z)(["\n  object-fit: cover;\n"])))},4390:function(n,t,e){e.d(t,{Hx:function(){return f},V0:function(){return s},fP:function(){return p},i7:function(){return u},uV:function(){return l}});var r=e(5861),i=e(4687),o=e.n(i),a=e(1243),c="dafb4cf758741e9fd84f5c71b8506454",u=function(){var n=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(c));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=1"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=278.42ad07f4.chunk.js.map