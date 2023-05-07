"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,a,c,i,o,u=e(5861),s=e(9439),p=e(4687),f=e.n(p),l=e(2791),h=e(7689),d=e(4390),v=e(168),g=e(5706),x=g.Z.li(r||(r=(0,v.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: #af93aa12;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 280px;\n  transition-duration: 250ms;\n  transition-property: scale;\n  transition-timing-function: ease-in-out;\n"]))),m=g.Z.div(a||(a=(0,v.Z)(["\n  // width: 280px;\n  // height: 352px;\n"]))),w=g.Z.ul(c||(c=(0,v.Z)(["\n  padding: 32px 0;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),Z=g.Z.div(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  justify-content: center;\n  align-items: center;\n  height: 60px;\n  padding: 16px 0;\n  text-align: center;\n  font-size: 12px;\n"]))),b=g.Z.img(o||(o=(0,v.Z)(["\n  object-fit: cover;\n"]))),y=e(184),_=function(){var n=(0,l.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,h.UO)().movieId;return(0,l.useEffect)((function(){var n=function(){var n=(0,u.Z)(f().mark((function n(){var t,e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.uV)(a);case 3:return t=n.sent,e=t.data.cast,r(e.map((function(n){return{id:n.id,character:n.character,name:n.name,profile_path:n.profile_path}}))),n.abrupt("return",e);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[a]),(0,y.jsx)(w,{children:e.length?e.map((function(n){var t=n.id,e=n.character,r=n.name,a=n.profile_path;return(0,y.jsxs)(x,{children:[(0,y.jsx)(m,{children:(0,y.jsx)(b,{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://as1.ftcdn.net/v2/jpg/05/64/45/52/1000_F_564455291_RRMiR6jlecxRBpSdtOT1KAX8a8FRhinM.jpg",alt:r,width:"280",height:"420"})}),(0,y.jsxs)(Z,{children:[(0,y.jsx)("h3",{children:r}),(0,y.jsx)("p",{children:e})]})]},t)})):(0,y.jsx)("p",{children:"Possibly, there is no information about cast"})})}},4390:function(n,t,e){e.d(t,{Hx:function(){return l},V0:function(){return p},fP:function(){return s},i7:function(){return u},uV:function(){return f}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1243),o="dafb4cf758741e9fd84f5c71b8506454",u=function(){var n=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(o));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.4f120bf7.chunk.js.map