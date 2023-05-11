"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[691],{4146:function(n,e,t){t.d(e,{e:function(){return m}});var r,i,o,a,c,s=t(7689),p=t(1087),u=t(168),l=t(5706),f=l.Z.li(r||(r=(0,u.Z)(["\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: #49248a;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 352px;\n  transition-duration: 250ms;\n  transition-property: scale;\n  transition-timing-function: ease-in-out;\n  &:hover {\n    scale: 1.02;\n    box-shadow: 0px 1px 2px rgb(255 0 249 / 31%),\n      0px 2px 4px rgb(255 0 245 / 50%), 0px 4px 8px rgb(255 235 0 / 31%),\n      0px 8px 16px rgb(255 247 254 / 35%);\n  }\n"]))),d=l.Z.div(i||(i=(0,u.Z)([""]))),h=l.Z.ul(o||(o=(0,u.Z)(["\n  padding: 32px 0;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),x=l.Z.div(a||(a=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 60px;\n  padding: 16px 0;\n  text-align: center;\n  font-size: 12px;\n"]))),g=l.Z.img(c||(c=(0,u.Z)(["\n  object-fit: cover;\n  \n"]))),v=t(184),m=function(n){var e=n.movies,t=n.altText,r=n.imageHeight,i=(0,s.TH)();return(0,v.jsx)(h,{children:e.map((function(n){var e=n.id,o=n.poster_path,a=n.title,c=n.original_title,s=t||a,u=r||"528",l=o?"https://image.tmdb.org/t/p/w500/".concat(o):"https://as1.ftcdn.net/v2/jpg/01/41/48/32/1000_F_141483247_cvrudefB00p8qNxoapWW54jjm3LzXFgz.jpg";return(0,v.jsx)(f,{children:(0,v.jsxs)(p.rU,{to:"/movies/".concat(e),state:{from:i},children:[(0,v.jsx)(d,{children:(0,v.jsx)(g,{src:l,alt:s,width:"352",height:u})}),(0,v.jsx)(x,{children:(0,v.jsx)("h2",{children:c||a})})]})},e)}))})}},4691:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,i,o,a,c,s=t(5861),p=t(9439),u=t(4687),l=t.n(u),f=t(2791),d=t(1087),h=t(1686),x=t.n(h),g=t(9135),v=t(4390),m=t(168),b=t(5706),w=b.Z.header(r||(r=(0,m.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #392b3754;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),y=b.Z.form(i||(i=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #140e1294;\n  border-radius: 8px;\n  overflow: hidden;\n"]))),Z=b.Z.button(o||(o=(0,m.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-color: #5d425b;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),k=b.Z.span(a||(a=(0,m.Z)(["\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),j=b.Z.input(c||(c=(0,m.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 24px;\n  padding-right: 4px;\n  background-color: #140e1200;\n  color: #ffffff;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n    color: #ffffff;\n  }\n"]))),_=t(4146),z=t(184),S=function(){var n=(0,f.useState)(""),e=(0,p.Z)(n,2),t=e[0],r=e[1],i=(0,f.useState)([]),o=(0,p.Z)(i,2),a=o[0],c=o[1],u=(0,d.lr)(),h=(0,p.Z)(u,2),m=h[0],b=h[1],S=m.get("query");(0,f.useEffect)((function(){if(null!==S)try{var n=function(){var n=(0,s.Z)(l().mark((function n(){var e,t,r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,v.V0)(S);case 2:e=n.sent,(t=e.data.results).length||x().Notify.warning("Oops, there are no movies by this search, try another title"),r=t.map((function(n){return{id:n.id,poster_path:n.poster_path,original_title:n.original_title}})),c(r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(e){console.log(e.message)}}),[S,m]);return(0,z.jsxs)("div",{children:[(0,z.jsx)(w,{children:(0,z.jsxs)(y,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.search.value;if(r(e.toLowerCase().trim()),b({query:e.toLowerCase().trim()}),""===t.trim())return x().Notify.warning("Enter title of movie to search"),void(e="");r("")},children:[(0,z.jsxs)(Z,{type:"submit",className:"button",children:[(0,z.jsx)(g.Ozl,{size:"24px",fill:"#fff"}),(0,z.jsx)(k,{className:"button-label",children:"Search"})]}),(0,z.jsx)(j,{type:"text",autoComplete:"off",name:"search",autoFocus:!0,placeholder:"Search images and photos",value:t,onChange:function(n){var e=n.target;r(e.value)}})]})}),a&&(0,z.jsx)(_.e,{movies:a})]})}},4390:function(n,e,t){t.d(e,{Hx:function(){return f},V0:function(){return u},fP:function(){return p},i7:function(){return s},uV:function(){return l}});var r=t(5861),i=t(4687),o=t.n(i),a=t(1243),c="dafb4cf758741e9fd84f5c71b8506454";a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("trending/movie/week?api_key=".concat(c));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=691.b90e7926.chunk.js.map