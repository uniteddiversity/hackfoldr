(function(){"use strict";var t="undefined"!=typeof window?window:global;if(typeof t.require!="function"){var e={},n={},r=function(t,e){return{}.hasOwnProperty.call(t,e)},o=function(t,e){var n,r,o=[];n=/^\.\.?(\/|$)/.test(e)?[t,e].join("/").split("/"):e.split("/");for(var i=0,s=n.length;s>i;i++)r=n[i],".."===r?o.pop():"."!==r&&""!==r&&o.push(r);return o.join("/")},i=function(t){return t.split("/").slice(0,-1).join("/")},s=function(e){return function(n){var r=i(e),s=o(r,n);return t.require(s)}},a=function(t,e){var r={id:t,exports:{}};e(r.exports,s(t),r);var o=n[t]=r.exports;return o},c=function(t){var i=o(t,".");if(r(n,i))return n[i];if(r(e,i))return a(i,e[i]);var s=o(i,"./index");if(r(n,s))return n[s];if(r(e,s))return a(s,e[s]);throw Error('Cannot find module "'+t+'"')},u=function(t,n){if("object"==typeof t)for(var o in t)r(t,o)&&(e[o]=t[o]);else e[t]=n};t.require=c,t.require.define=u,t.require.register=u,t.require.brunch=!0}})(),function(){angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","partials","app.controllers","ui.state"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(t,e,n){return t.state("about",{url:"/about",templateUrl:"/partials/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"/partials/hack.html",controller:"HackFolderCtrl"}).state("hack.doc",{url:"/{docId}"}),e.otherwise("/hackfoldr"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams"].concat(function(t,e,n){return t.$state=e,t.$stateParam=n}))}.call(this),function(){function t(t,e){var n={}.hasOwnProperty;for(var r in e)n.call(e,r)&&(t[r]=e[r]);return t}function e(t,e){for(var n=-1,r=e.length>>>0;++n<r;)if(t===e[n]&&n in e)return!0;return!1}var n=[].slice,r="".replace;angular.module("app.controllers",["ui.state"]).controller({AppCtrl:["$scope","$location","$rootScope","$timeout"].concat(function(t,e,n,r){return t.$location=e,t.$watch("$location.path()",function(e){return e||(e="/"),t.activeNavId=e,t}),t.getClass=function(e){return t.activeNavId.substring(0,e.length===e)?"active":""},r(function(){return n.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$state","HackFolder"].concat(function(e,n,r){var o;return t(e,{hasViewMode:function(t){return t.match(/g(doc|present|draw)/)},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:r.iframes,docs:r.docs,tree:r.tree,open:function(t){return window.open(t.url,t.id),!1},activate:r.activate,HackFolder:r,iframeCallback:function(t){return function(n){return e.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,t),t.noiframe="fail"===n?!0:!1,"unsure"===n?t.iframeunsure=!0:void 0})}},debug:function(t){return"undefined"!=typeof console&&null!==console?console.log(t,this):void 0},reload:function(t){return r.getIndex(t,!0,function(){})}}),e.$watch("hackId",function(t){return r.getIndex(t,!1,function(){var t,o;return e.$watch("docId",function(t){return t?r.activate(t):void 0}),!e.docId&&(t=(o=r.docs[0])!=null?o.id:void 0)?n.transitionTo("hack.doc",{docId:t,hackId:e.hackId}):void 0})}),e.hackId=(o=n.params.hackId)?o:"hackfoldr",e.$watch("$state.params.docId",function(t){return t?e.docId=encodeURIComponent(encodeURIComponent(t)):void 0})})}).directive("resize",["$window"].concat(function(t){return function(e,n){var r;return r=function(){return e.width=t.innerWidth,e.height=t.innerHeight,e.contentHeight=t.innerHeight-$(n).offset().top},angular.element(t).bind("resize",function(){return e.$apply(r)}),r()}})).directive("ngxIframe",["$parse"].concat(function(t){return{link:function(e,n,r){var o,i,s;return o=t(r.ngxIframe)(e),i=function(t,e){var n;return n=!function(){try{return t.location=="about:blank"}catch(e){}}(),e&&$.browser.mozilla?o("unsure"):o(n?"ok":"fail")},$(n).load(function(){return clearTimeout(s),i(this.contentWindow,!0)}),s=setTimeout(function(){return i(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(t,e){return $(e).click(function(t){return t.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(t){return{link:function(e,n,r){var o;return o=t(r.ngxClickMeta),$(n).click(function(t){return t.metaKey&&!o(e)?(t.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(t,e){return $(e).click(function(t){return t.stopPropagation()})}}).factory({HackFolder:["$http"].concat(function(o){var i,s,a,c,u;return i={},s=[],a=[],u={iframes:i,docs:s,tree:a,activate:function(t,n){function r(t){return t.id}var o,c,u,l,h,f,p,d,v,m,g;for(null==n&&(n=!1),c=function(){var e,n,r,i=[];for(e=0,r=(n=s).length;r>e;++e)o=n[e],o.id===t&&i.push(o);return i}()[0],u=c.type,l=0,f=(h=a).length;f>l;++l)p=h[l],(d=null!=p?(v=p.children)!=null?v.map(r):void 0:void 0)&&e(t,d)&&(p.expand=!0);return m=n?"edit":"view",g=function(){var e;switch(e=[u],!1){case"gdoc"!==e[0]:return"https://docs.google.com/document/d/"+t+"/"+m+"?pli=1&overridemobile=true";case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"gpresent"!==e[0]:return"https://docs.google.com/presentation/d/"+t+"/"+m;case"gdraw"!==e[0]:return"https://docs.google.com/drawings/d/"+t+"/"+m;case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"hackpad"!==e[0]:return"https://hackpad.com/"+t;case"ethercalc"!==e[0]:return"https://ethercalc.org/"+t;case"url"!==e[0]:return decodeURIComponent(decodeURIComponent(t));default:return""}}(),c.hashtag&&(g+=c.hashtag),(d=i[t])?(d.src=g,d.mode=m,d):i[t]={src:g,doc:c,mode:m}},getIndex:function(e,i,l){return c!==e||i?o.get("https://www.ethercalc.org/_/"+e+"/csv").success(function(o){function i(){try{return JSON.parse(null!=C?C:"{}")}catch(t){}}function h(){var t;switch(t=[b],!1){case void 0!==t[0]:return d||k&&(d=k,k=null),{title:k,type:"dummy",id:"dummy"};case!(M=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(t[0])):return{type:"ethercalc",id:M[1]};case!(M=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdoc",id:M[1]};case!(M=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(t[0])):return{type:"gsheet",id:M[1]};case!(M=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdraw",id:M[1]};case!(M=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gpresent",id:M[1]};case!(M=/https?:\/\/hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(t[0])):return{type:"hackpad",id:M[1]};case!(M=/^(https?:\/\/[^\/]+)/.exec(t[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(b)),icon:"http://g.etfv.co/"+M[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",b):void 0}}function f(t){return t.length}function p(t){var e,r,o,i,s;return e=t.match(/^(.*?)(?::(.*))?$/),r=e[0],o=e[1],i=e[2],s=n.call(e,3),{content:o,"class":null!=i?i:"warning"}}var d,v,m,g,$,w,x,y,b,k,C,j,S,P,E,T,I,M,O,q,F,D,A,R;for(c=e,s.length=0,m=[],g=0,w=($=o.split(/\n/)).length;w>g;++g)x=$[g],x&&(y=x.split(/,/),b=y[0],k=y[1],C=y[2],j=y[3],S=n.call(y,4),k=r.call(k,/^"|"$/g,""),C&&(C=r.call(C,/^"|"$/g,"")),C&&(C=C.replace(/""/g,'"')),j&&(j=r.call(j,/^"|"$/g,"")),y=b.match(/^"?(\s*)(\S+?)?(#\S+)?"?$/),P=y[0],E=y[1],b=y[2],T=y[3],I=t({hashtag:T,url:b,title:k,indent:E.length,opts:i()},h()),I.type!=="dummy"||(y=I.title)!=null&&y.length?m.push(t(t({icon:"img/"+I.type+".png"},I),{tags:((y=(O=I.opts)!=null?O.tags:void 0)!=null?y:[]).concat(((y=null!=j?j.split(","):void 0)!=null?y:[]).filter(f).map(p))})):m.push(null));for(v=m,s.splice.apply(s,[0,s.length].concat(n.call(v.filter(function(t){return null!=t})))),q=0,m=[],g=0,w=($=s).length;w>g;++g)D=g,I=$[g],D>0&&I.indent?(A=s[q],R=(y=A.children)!=null?y:A.children=[],R.push(I),m.push(null)):(q=D,m.push(I));return F=m,F=F.filter(function(t){return null!=t}),F=F.map(function(t){var e,n;return t.children&&(t.expand=(e=(n=t.opts)!=null?n.expand:void 0)!=null?e:t.children.length<5),t}),a.splice.apply(a,[0,a.length].concat(n.call(F))),u.folderTitle=d,l(s)}):l(s)}}})})}.call(this),function(){angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})}.call(this);