(this["webpackJsonpwhat-up-china"]=this["webpackJsonpwhat-up-china"]||[]).push([[0],{12:function(e,t,n){},38:function(e,t){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),c=n.n(a),i=n(18),s=n.n(i),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},o=(n(24),n(12),n(3)),p=n(4),h=n(7),j=n(6),l=n(1),b=n.n(l),v=n(5),d=n(9),O=n.n(d),f=function(){function e(){Object(o.a)(this,e)}return Object(p.a)(e,[{key:"getTopNews",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://what-up-china-server.herokuapp.com/top-news/",e.next=4,O.a.get("https://what-up-china-server.herokuapp.com/top-news/");case 4:return t=e.sent,e.abrupt("return",JSON.parse(t.text));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getTrendingOnBilibili",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://what-up-china-server.herokuapp.com/bilibili/trending/",e.next=4,O.a.get("https://what-up-china-server.herokuapp.com/bilibili/trending/");case 4:return t=e.sent,e.abrupt("return",JSON.parse(t.text));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getBaiduHotNews",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://what-up-china-server.herokuapp.com/baidu/hot-news/",e.next=4,O.a.get("https://what-up-china-server.herokuapp.com/baidu/hot-news/");case 4:return t=e.sent,e.abrupt("return",JSON.parse(t.text));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),x=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={articles:[]},r.props=e,r.api=new f,r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.getTopNews();case 3:t=e.sent,this.setState({articles:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"makeArticleDiv",value:function(e){var t="";return null!=e.urlToImage&&(t=Object(r.jsx)("img",{src:"https://".concat(e.urlToImage.replace("http://","").replace("https://",""))})),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:Object(r.jsx)("a",{href:e.url,children:e.title})}),Object(r.jsx)("p",{children:e.description}),t,Object(r.jsx)("p",{children:new Date(e.publishedAt).toDateString()})]})}},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{children:this.state.articles.map((function(t){return e.makeArticleDiv(t)}))})}}]),n}(a.Component),w=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={trends:[]},r.props=e,r.api=new f,r}return Object(p.a)(n,[{key:"makeTrendDiv",value:function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:Object(r.jsx)("a",{href:e.short_link,children:e.title})}),Object(r.jsx)("img",{src:"https://".concat(e.pic.replace("http://","").replace("https://",""))})]})}},{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.getTrendingOnBilibili();case 3:t=e.sent,this.setState({trends:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{children:this.state.trends.map((function(t){return e.makeTrendDiv(t)}))})}}]),n}(a.Component),k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hotNews:[]},r.props=e,r.api=new f,r}return Object(p.a)(n,[{key:"makeNewsDiv",value:function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("h2",{children:Object(r.jsx)("a",{href:e.link,children:e.title})})})}},{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.getBaiduHotNews();case 3:t=e.sent,this.setState({hotNews:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{children:this.state.hotNews.map((function(t){return e.makeNewsDiv(t)}))})}}]),n}(a.Component),m=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(p.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{id:"results",children:[Object(r.jsxs)("h2",{children:[Object(r.jsx)("a",{id:"trendingBaidu"}),"Hot News Baidu"]}),Object(r.jsx)(k,{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("h2",{children:[Object(r.jsx)("a",{id:"trendingNews"}),"Trending News"]}),Object(r.jsx)(x,{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("h2",{children:[Object(r.jsx)("a",{id:"trendingBilibili"}),"Trending on Bilibili"]}),Object(r.jsx)(w,{})]})}}]),n}(a.Component);var g=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(m,{})})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),u()}},[[44,1,2]]]);
//# sourceMappingURL=main.36176c4e.chunk.js.map