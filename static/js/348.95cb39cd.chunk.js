"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[348],{348:function(t,r,e){e.r(r);var n=e(861),a=e(439),c=e(757),u=e.n(c),s=e(791),i=e(689),o=e(736),p=e(184);r.default=function(){var t=(0,i.UO)().id,r=(0,s.useState)([]),e=(0,a.Z)(r,2),c=e[0],f=e[1];(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var e,n,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.zv)(t);case 3:e=r.sent,n=e.cast,f(n),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),a=r.t0.response,console.log(a.data.message);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[t]);var v=c.map((function(t){var r=t.id,e=t.name,n=t.profile_path,a=t.character;return(0,p.jsxs)("li",{children:[null!==n?(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n),alt:"poster",width:"200"}):"No image",(0,p.jsx)("p",{children:e}),(0,p.jsx)("p",{children:a})]},r)}));return(0,p.jsx)(p.Fragment,{children:v.length>0?(0,p.jsx)("ul",{children:v}):(0,p.jsx)("p",{children:"We don't have any cast for this movie."})})}},736:function(t,r,e){e.d(r,{Df:function(){return i},Pg:function(){return o},gH:function(){return s},tx:function(){return f},zv:function(){return p}});var n=e(861),a=e(757),c=e.n(a),u=e(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"78817c69ceeb2b190f57a1a13eaf9936"}}),s=function(){var t=(0,n.Z)(c().mark((function t(){var r,e,n,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:"",t.next=3,u.get("/search/movie",{params:{query:r}});case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/trending/movie/day");case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=348.95cb39cd.chunk.js.map