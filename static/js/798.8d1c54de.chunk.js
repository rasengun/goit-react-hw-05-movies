"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[798],{658:function(r,e,t){t.d(e,{Z:function(){return o}});var n=t(791),a=t(87),u=t(689),c="movieList_link__I+0hB",s=t(184),i=function(r){var e=r.movies,t=(0,u.TH)(),n=e.map((function(r){var e=r.id,n=r.title;return(0,s.jsx)(a.rU,{className:c,to:"/movies/".concat(e),state:{from:t},children:(0,s.jsx)("p",{children:n})},e)}));return(0,s.jsx)("ul",{children:n})},o=(0,n.memo)(i);i.defaultProps={movies:[]}},798:function(r,e,t){t.r(e);var n=t(433),a=t(861),u=t(439),c=t(757),s=t.n(c),i=t(791),o=t(643),f=t(736),p=t(658),v=t(184);e.default=function(){var r=(0,i.useState)([]),e=(0,u.Z)(r,2),t=e[0],c=e[1],h=(0,i.useState)(!1),d=(0,u.Z)(h,2),l=d[0],m=d[1],x=(0,i.useState)(null),w=(0,u.Z)(x,2),g=w[0],k=w[1];return(0,i.useEffect)((function(){var r=function(){var r=(0,a.Z)(s().mark((function r(){var e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,m(!0),r.next=4,(0,f.Df)();case 4:e=r.sent,c((0,n.Z)(e.results)),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),k(r.t0.message);case 11:return r.prev=11,m(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{children:"Trending today"}),(0,v.jsx)(p.Z,{movies:t}),l&&(0,v.jsx)(o.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading"}),g&&(0,v.jsx)("p",{children:"Error :C"})]})}},736:function(r,e,t){t.d(e,{Df:function(){return i},Pg:function(){return o},gH:function(){return s},tx:function(){return p},zv:function(){return f}});var n=t(861),a=t(757),u=t.n(a),c=t(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"78817c69ceeb2b190f57a1a13eaf9936"}}),s=function(){var r=(0,n.Z)(u().mark((function r(){var e,t,n,a=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",r.next=3,c.get("/search/movie",{params:{query:e}});case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/trending/movie/day");case 2:return e=r.sent,t=e.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=798.8d1c54de.chunk.js.map