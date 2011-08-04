/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 4 18:16
*/
KISSY.add("uibase/align",function(h,l,c,i){function k(a){var b=a.ownerDocument.body,g=c.css(a,"position"),m=g=="fixed"||g=="absolute";for(a=a.parentNode;a&&a!=b;a=a.parentNode){g=c.css(a,"position");m=m&&g=="static";if(c.css(a,"overflow")!="visible"&&(!m||g=="fixed"||g=="absolute"||g=="relative"))return a}return null}function d(a){for(var b in a)if(b.indexOf("fail")==0)return true;return false}function f(a){var b=a.offset,g=a.node,m=a.points,n,e=this.get("el");b=b||[0,0];n=e.offset();g=j(g,m[0]);
m=j(e,m[1]);m=[m.left-g.left,m.top-g.top];n={left:n.left-m[0]+ +b[0],top:n.top-m[1]+ +b[1]};a:{b=n;n=this.get("el");e={};m={width:n[0].offsetWidth,height:n[0].offsetHeight};g=h.clone(m);if(!h.isEmptyObject(a.overflow)){e={left:0,right:Infinity,top:0,bottom:Infinity};for(var p=n[0];p=k(p);){var r=p.clientWidth;if(!l.ie||r!=0){var s=p.clientLeft,t=p.clientTop;r=c.offset(p);s={left:s,top:t};r.left+=s.left;r.top+=s.top;e.top=Math.max(e.top,r.top);e.right=Math.min(e.right,r.left+p.clientWidth);e.bottom=
Math.min(e.bottom,r.top+p.clientHeight);e.left=Math.max(e.left,r.left)}}p=c.scrollLeft();r=c.scrollTop();e.left=Math.max(e.left,p);e.top=Math.max(e.top,r);e.right=Math.min(e.right,p+c.viewportWidth());e.bottom=Math.min(e.bottom,r+c.viewportHeight());e=e.top>=0&&e.left>=0&&e.bottom>e.top&&e.right>e.left?e:null;a=a.overflow||{};p={};if(b.left<e.left&&a.adjustX){b.left=e.left;p.adjustX=1}if(b.left<e.left&&b.left+g.width>e.right&&a.resizeWidth){g.width-=b.left+g.width-e.right;p.resizeWidth=1}if(b.left+
g.width>e.right&&a.adjustX){b.left=Math.max(e.right-g.width,e.left);p.adjustX=1}if(a.failX)p.failX=b.left<e.left||b.left+g.width>e.right;if(b.top<e.top&&a.adjustY){b.top=e.top;p.adjustY=1}if(b.top>=e.top&&b.top+g.height>e.bottom&&a.resizeHeight){g.height-=b.top+g.height-e.bottom;p.resizeHeight=1}if(b.top+g.height>e.bottom&&a.adjustY){b.top=Math.max(e.bottom-g.height,e.top);p.adjustY=1}if(a.failY)p.failY=b.top<e.top||b.top+g.height>e.bottom;e=p;if(d(e)){a=e;break a}}this.set("x",b.left);this.set("y",
b.top);if(g.width!=m.width||g.height!=m.height){n.width(g.width);n.height(g.height)}a=e}return a}function o(a,b,g){var m=[];h.each(a,function(n){m.push(n.replace(b,function(e){return g[e]}))});return m}function q(){}function j(a,b){var g=b.charAt(0),m=b.charAt(1),n,e,p,r;if(a){a=i.one(a);n=a.offset();e=a[0].offsetWidth;p=a[0].offsetHeight}else{n={left:c.scrollLeft(),top:c.scrollTop()};e=c.viewportWidth();p=c.viewportHeight()}r=n.left;n=n.top;if(g==="c")n+=p/2;else if(g==="b")n+=p;if(m==="c")r+=e/
2;else if(m==="r")r+=e;return{left:r,top:n}}q.ATTRS={align:{}};q.prototype={_uiSetAlign:function(a){h.isPlainObject(a)&&this.align(a.node,a.points,a.offset,a.overflow)},align:function(a,b,g,m){var n={};m=h.clone(m||{});g=g&&[].concat(g)||[0,0];if(m.failX)n.failX=1;if(m.failY)n.failY=1;var e=f.call(this,{node:a,points:b,offset:g,overflow:n});if(d(e)){if(e.failX){b=o(b,/[lr]/ig,{l:"r",r:"l"});g=g;g[0]=-g[0];g=g}if(e.failY){b=o(b,/[tb]/ig,{t:"b",b:"t"});e=g;e[1]=-e[1];g=e}}e=f.call(this,{node:a,points:b,
offset:g,overflow:n});if(d(e)){delete m.failX;delete m.failY;f.call(this,{node:a,points:b,offset:g,overflow:m})}},center:function(a){this.set("align",{node:a,points:["cc","cc"],offset:[0,0]})}};return q},{requires:["ua","dom","node"]});
KISSY.add("uibase/base",function(h,l,c,i){function k(j){j+="";return j.charAt(0).toUpperCase()+j.substring(1)}function d(j){l.apply(this,arguments);for(var a=this.constructor;a;){if(j&&j[q]&&a.HTML_PARSER)if(j[q]=i.one(j[q])){var b=j[q],g=a.HTML_PARSER,m=void 0,n=void 0;for(m in g)if(g.hasOwnProperty(m)){n=g[m];if(h.isFunction(n))this.__set(m,n.call(this,b));else if(h.isString(n))this.__set(m,b.one(n));else h.isArray(n)&&n[0]&&this.__set(m,b.all(n[0]))}}a=a.superclass&&a.superclass.constructor}f(this,
"initializer","constructor");j&&j.autoRender&&this.render()}function f(j,a,b){for(var g=j.constructor,m=[],n,e,p,r;g;){r=[];if(p=g.__ks_exts)for(var s=0;s<p.length;s++)if(n=p[s]){if(b!="constructor")n=n.prototype.hasOwnProperty(b)?n.prototype[b]:null;n&&r.push(n)}if(g.prototype.hasOwnProperty(a)&&(e=g.prototype[a]))r.push(e);r.length&&m.push.apply(m,r.reverse());g=g.superclass&&g.superclass.constructor}for(s=m.length-1;s>=0;s--)m[s]&&m[s].call(j)}function o(j,a){if(!a)return j;for(var b in a)if(h.isObject(a[b])&&
h.isObject(j[b]))o(j[b],a[b]);else b in j||(j[b]=a[b])}var q="srcNode";c=function(){};d.HTML_PARSER={};d.ATTRS={rendered:{value:false},created:{value:false},render:{view:true,valueFn:function(){return i.one("body")},setter:function(j){return i.one(j)}}};h.extend(d,l,{create:function(){if(!this.get("created")){this._createDom();this.fire("createDom");f(this,"createDom","__createDom");this.fire("afterCreateDom");this.set("created",true)}},render:function(){if(!this.get("rendered")){this.create();this._renderUI();
this.fire("renderUI");f(this,"renderUI","__renderUI");this.fire("afterRenderUI");this._bindUI();this.fire("bindUI");f(this,"bindUI","__bindUI");this.fire("afterBindUI");this._syncUI();this.fire("syncUI");f(this,"syncUI","__syncUI");this.fire("afterSyncUI");this.set("rendered",true)}},_createDom:c,_renderUI:c,renderUI:c,_bindUI:function(){var j=this,a=j.__attrs,b,g;for(b in a)if(a.hasOwnProperty(b)){g="_uiSet"+k(b);j[g]&&function(m,n){j.on("after"+k(m)+"Change",function(e){j[n](e.newVal,e)})}(b,g)}},
bindUI:c,_syncUI:function(){var j=this.__attrs,a;for(a in j)if(j.hasOwnProperty(a)){var b="_uiSet"+k(a);this[b]&&j[a].sync!==false&&this.get(a)!==undefined&&this[b](this.get(a))}},syncUI:c,destroy:function(){for(var j=this.constructor,a,b,g;j;){j.prototype.hasOwnProperty("destructor")&&j.prototype.destructor.apply(this);if(a=j.__ks_exts)for(g=a.length-1;g>=0;g--)(b=a[g]&&a[g].prototype.__destructor)&&b.apply(this);j=j.superclass&&j.superclass.constructor}this.fire("destroy");this.detach()}});d.create=
function(j,a,b,g){function m(){d.apply(this,arguments)}if(h.isArray(j)){g=b;b=a;a=j;j=d}j=j||d;if(h.isObject(a)){g=b;b=a;a=[]}h.extend(m,j,b,g);if(a){m.__ks_exts=a;h.each(a,function(n){if(n){h.each(["ATTRS","HTML_PARSER"],function(p){if(n[p]){m[p]=m[p]||{};o(m[p],n[p])}});for(var e in n.prototype)if(!m.prototype.hasOwnProperty(e)&&n.prototype.hasOwnProperty(e))m.prototype[e]=n.prototype[e]}})}return m};return d},{requires:["base","dom","node"]});
KISSY.add("uibase/box",function(){function h(){}h.ATTRS={html:{view:true,sync:false},width:{view:true},height:{view:true},elCls:{view:true},elStyle:{view:true},elAttrs:{view:true},elBefore:{view:true},el:{view:true},visibleMode:{view:true},visible:{view:true}};h.HTML_PARSER={el:function(l){this.decorateInternal&&this.decorateInternal(l);return l}};h.prototype={_uiSetVisible:function(l){this.fire(l?"show":"hide")},show:function(){this.render();this.set("visible",true)},hide:function(){this.set("visible",
false)}};return h});
KISSY.add("uibase/boxrender",function(h,l){function c(){}function i(k,d,f,o,q,j){d=d||{};if(f)d.width=f;if(o)d.height=o;f="";for(var a in d)if(d.hasOwnProperty(a))f+=a+":"+d[a]+";";d="";for(var b in j)if(j.hasOwnProperty(b))d+=" "+b+"='"+j[b]+"' ";return"<"+q+(f?" style='"+f+"' ":"")+d+(k?" class='"+k+"' ":"")+"></"+q+">"}c.ATTRS={el:{setter:function(k){return l.one(k)}},elCls:{},elStyle:{},width:{},height:{},elTagName:{value:"div"},elAttrs:{},elBefore:{value:null},html:{sync:false},visible:{},visibleMode:{value:"display"}};
c.construct=i;c.HTML_PARSER={html:function(k){return k.html()}};c.prototype={__renderUI:function(){if(this.__boxRenderNew){var k=this.get("render"),d=this.get("el"),f=this.get("elBefore");f=f&&f[0];k[0].insertBefore(d[0],f||null)}},__createDom:function(){var k=this.get("el");if(!k){this.__boxRenderNew=true;k=new l(i(this.get("elCls"),this.get("elStyle"),this.get("width"),this.get("height"),this.get("elTagName"),this.get("elAttrs")));this.set("el",k);this.get("html")&&k.html(this.get("html"))}},_uiSetElAttrs:function(k){this.get("el").attr(k)},
_uiSetElCls:function(k){this.get("el").addClass(k)},_uiSetElStyle:function(k){this.get("el").css(k)},_uiSetWidth:function(k){this.get("el").width(k)},_uiSetHeight:function(k){this.get("el").height(k)},_uiSetHtml:function(k){this.get("el").html(k)},_uiSetVisible:function(k){var d=this.get("el");this.get("visibleMode")=="visibility"?d.css("visibility",k?"visible":"hidden"):d.css("display",k?"":"none")},show:function(){this.render();this.set("visible",true)},hide:function(){this.set("visible",false)},
__destructor:function(){var k=this.get("el");if(k){k.detach();k.remove()}}};return c},{requires:["node"]});KISSY.add("uibase/close",function(){function h(){}h.ATTRS={closable:{view:true},closeAction:{value:"hide"}};var l={hide:"hide",destroy:"destroy"};h.prototype={__bindUI:function(){var c=this,i=c.get("view").get("closeBtn");i&&i.on("click",function(k){c[l[c.get("closeAction")]||"hide"]();k.halt()})}};return h});
KISSY.add("uibase/closerender",function(h,l){function c(){}c.ATTRS={closable:{value:true},closeBtn:{}};c.HTML_PARSER={closeBtn:function(i){return i.one("."+this.get("prefixCls")+"ext-close")}};c.prototype={_uiSetClosable:function(i){var k=this.get("closeBtn");if(k)i?k.css("display",""):k.css("display","none")},__renderUI:function(){var i=this.get("closeBtn"),k=this.get("contentEl");if(!i&&k){i=(new l("<a tabindex='0' role='button' class='"+this.get("prefixCls")+"ext-close'><span class='"+this.get("prefixCls")+
"ext-close-x'>\u5173\u95ed</span></a>")).appendTo(k);this.set("closeBtn",i)}},__destructor:function(){var i=this.get("closeBtn");i&&i.detach()}};return c},{requires:["node"]});
KISSY.add("uibase/constrain",function(h,l,c){function i(){}function k(d){var f;if(!d)return f;var o=this.get("el");if(d!==true){d=c.one(d);f=d.offset();h.mix(f,{maxLeft:f.left+d[0].offsetWidth-o[0].offsetWidth,maxTop:f.top+d[0].offsetHeight-o[0].offsetHeight})}else{d=document.documentElement.clientWidth;f={left:l.scrollLeft(),top:l.scrollTop()};h.mix(f,{maxLeft:f.left+d-o[0].offsetWidth,maxTop:f.top+l.viewportHeight()-o[0].offsetHeight})}return f}i.ATTRS={constrain:{value:false}};i.prototype={__renderUI:function(){var d=
this,f=d.__getDefAttrs(),o=f.x;f=f.y;var q=o.setter,j=f.setter;o.setter=function(a){var b=q&&q.call(d,a);if(b===undefined)b=a;if(!d.get("constrain"))return b;a=k.call(d,d.get("constrain"));return Math.min(Math.max(b,a.left),a.maxLeft)};f.setter=function(a){var b=j&&j.call(d,a);if(b===undefined)b=a;if(!d.get("constrain"))return b;a=k.call(d,d.get("constrain"));return Math.min(Math.max(b,a.top),a.maxTop)};d.addAttr("x",o);d.addAttr("y",f)}};return i},{requires:["dom","node"]});
KISSY.add("uibase/contentbox",function(){function h(){}h.ATTRS={content:{view:true,sync:false},contentEl:{view:true},contentElAttrs:{view:true},contentElStyle:{view:true},contentTagName:{view:true}};h.prototype={};return h});
KISSY.add("uibase/contentboxrender",function(h,l,c){function i(){}function k(f,o){var q=f.get("contentEl");q.html("");o&&q.append(o)}i.ATTRS={contentEl:{},contentElAttrs:{},contentElCls:{value:""},contentElStyle:{},contentTagName:{value:"div"},content:{sync:false}};i.HTML_PARSER={content:function(f){return f.html()}};var d=c.construct;i.prototype={__renderUI:function(){},__createDom:function(){var f,o;f=this.get("el");o=h.makeArray(f[0].childNodes);f=(new l(d(this.get("prefixCls")+"contentbox "+this.get("contentElCls"),
this.get("contentElStyle"),undefined,undefined,this.get("contentTagName"),this.get("contentElAttrs")))).appendTo(f);this.set("contentEl",f);if(o.length)for(var q=0;q<o.length;q++)f.append(o[q]);else if(o=this.get("content"))k(this,o)},_uiSetContentElCls:function(f){this.get("contentEl").addClass(f)},_uiSetContentElAttrs:function(f){this.get("contentEl").attr(f)},_uiSetContentElStyle:function(f){this.get("contentEl").css(f)},_uiSetContent:function(f){k(this,f)}};return i},{requires:["node","./boxrender"]});
KISSY.add("uibase/drag",function(h){function l(){}l.ATTRS={handlers:{value:[]},draggable:{value:true}};l.prototype={_uiSetHandlers:function(c){c&&c.length>0&&this.__drag&&this.__drag.set("handlers",c)},__bindUI:function(){var c=h.require("dd/draggable"),i=this.get("el");if(this.get("draggable")&&c)this.__drag=new c({node:i,handlers:this.get("handlers")})},_uiSetDraggable:function(c){var i=this.__drag;if(i)if(c){i.detach("drag");i.on("drag",this._dragExtAction,this)}else i.detach("drag")},_dragExtAction:function(c){this.set("xy",
[c.left,c.top])},__destructor:function(){var c=this.__drag;c&&c.destroy()}};return l});KISSY.add("uibase/loading",function(){function h(){}h.prototype={loading:function(){this.get("view").loading()},unloading:function(){this.get("view").unloading()}};return h});
KISSY.add("uibase/loadingrender",function(h,l){function c(){}c.prototype={loading:function(){if(!this._loadingExtEl)this._loadingExtEl=(new l("<div class='"+this.get("prefixCls")+"ext-loading' style='position: absolute;border: none;width: 100%;top: 0;left: 0;z-index: 99999;height:100%;*height: expression(this.parentNode.offsetHeight);'/>")).appendTo(this.get("el"));this._loadingExtEl.show()},unloading:function(){var i=this._loadingExtEl;i&&i.hide()}};return c},{requires:["node"]});
KISSY.add("uibase/mask",function(){function h(){}h.ATTRS={mask:{value:false}};h.prototype={_uiSetMask:function(l){if(l){this.on("show",this.get("view")._maskExtShow,this.get("view"));this.on("hide",this.get("view")._maskExtHide,this.get("view"))}else{this.detach("show",this.get("view")._maskExtShow,this.get("view"));this.detach("hide",this.get("view")._maskExtHide,this.get("view"))}}};return h},{requires:["ua"]});
KISSY.add("uibase/maskrender",function(h,l,c,i){function k(){f=(new i("<div class='"+this.get("prefixCls")+"ext-mask'/>")).prependTo(document.body);f.css({position:"absolute",left:0,top:0,width:l.ie==6?c.docWidth():"100%",height:c.docHeight()});if(l.ie==6)o=(new i("<iframe style='position:absolute;left:0;top:0;background:red;width:"+c.docWidth()+"px;height:"+c.docHeight()+"px;filter:alpha(opacity=0);z-index:-1;'/>")).insertBefore(f);h.Event.on(window,"resize",function(){var j={width:l.ie==6?c.docWidth():
"100%",height:c.docHeight()};o&&o.css(j);f.css(j)});f.unselectable();f.on("mousedown click",function(j){j.halt()})}function d(){}var f,o,q=0;d.prototype={_maskExtShow:function(){f||k.call(this);var j=this.get("zIndex")-1;f.css("z-index",j);o&&o.css("z-index",j);q++;f.css("display","");o&&o.css("display","")},_maskExtHide:function(){q--;if(q<=0)q=0;if(!q){f&&f.css("display","none");o&&o.css("display","none")}},__destructor:function(){this._maskExtHide()}};return d},{requires:["ua","dom","node"]});
KISSY.add("uibase/position",function(h){function l(){}l.ATTRS={x:{view:true},y:{view:true},xy:{setter:function(c){var i=h.makeArray(c);if(i.length){i[0]&&this.set("x",i[0]);i[1]&&this.set("y",i[1])}return c},getter:function(){return[this.get("x"),this.get("y")]}},zIndex:{view:true}};l.prototype={move:function(c,i){if(h.isArray(c)){i=c[1];c=c[0]}this.set("xy",[c,i])}};return l});
KISSY.add("uibase/positionrender",function(){function h(){}h.ATTRS={x:{valueFn:function(){return this.get("el")&&this.get("el").offset().left}},y:{valueFn:function(){return this.get("el")&&this.get("el").offset().top}},zIndex:{value:9999}};h.prototype={__renderUI:function(){var l=this.get("el");l.addClass(this.get("prefixCls")+"ext-position");l.css({visibility:"visible",display:"",left:-9999,top:-9999,bottom:"",right:""})},_uiSetZIndex:function(l){this.get("el").css("z-index",l)},_uiSetX:function(l){this.get("el").offset({left:l})},
_uiSetY:function(l){this.get("el").offset({top:l})}};return h});KISSY.add("uibase/resize",function(h){function l(){}l.ATTRS={resize:{value:{}}};l.prototype={__destructor:function(){self.resizer&&self.resizer.destroy()},_uiSetResize:function(c){var i=h.require("resizable");if(i){this.resizer&&this.resizer.destroy();c.node=this.get("el");c.autoRender=true;if(c.handlers)this.resizer=new i(c)}}};return l});
KISSY.add("uibase/shimrender",function(h,l){function c(){}c.ATTRS={shim:{value:true}};c.prototype={_uiSetShim:function(i){var k=this.get("el");if(i&&!this.__shimEl){this.__shimEl=new l("<iframe style='position: absolute;border: none;width: expression(this.parentNode.offsetWidth);top: 0;opacity: 0;filter: alpha(opacity=0);left: 0;z-index: -1;height: expression(this.parentNode.offsetHeight);'/>");k.prepend(this.__shimEl)}else if(!i&&this.__shimEl){this.__shimEl.remove();delete this.__shimEl}}};return c},
{requires:["node"]});KISSY.add("uibase/stdmod",function(){function h(){}h.ATTRS={header:{view:true},body:{view:true},footer:{view:true},bodyStyle:{view:true},footerStyle:{view:true},headerStyle:{view:true},headerContent:{view:true},bodyContent:{view:true},footerContent:{view:true}};h.prototype={};return h});
KISSY.add("uibase/stdmodrender",function(h,l){function c(){}function i(d,f){var o=d.get("contentEl"),q=d.get(f);if(!q){q=(new l("<div class='"+d.get("prefixCls")+k+f+"'/>")).appendTo(o);d.set(f,q)}}var k="stdmod-";c.ATTRS={header:{},body:{},footer:{},bodyStyle:{},footerStyle:{},headerStyle:{},headerContent:{},bodyContent:{},footerContent:{}};c.HTML_PARSER={header:function(d){return d.one("."+this.get("prefixCls")+k+"header")},body:function(d){return d.one("."+this.get("prefixCls")+k+"body")},footer:function(d){return d.one("."+
this.get("prefixCls")+k+"footer")}};c.prototype={_setStdModContent:function(d,f){if(h.isString(f))this.get(d).html(f);else{this.get(d).html("");this.get(d).append(f)}},_uiSetBodyStyle:function(d){this.get("body").css(d)},_uiSetHeaderStyle:function(d){this.get("header").css(d)},_uiSetFooterStyle:function(d){this.get("footer").css(d)},_uiSetBodyContent:function(d){this._setStdModContent("body",d)},_uiSetHeaderContent:function(d){this._setStdModContent("header",d)},_uiSetFooterContent:function(d){this._setStdModContent("footer",
d)},__renderUI:function(){i(this,"header");i(this,"body");i(this,"footer")}};return c},{requires:["node"]});
KISSY.add("uibase",function(h,l,c,i,k,d,f,o,q,j,a,b,g,m,n,e,p,r,s,t,u){d.Render=f;b.Render=g;m.Render=n;e.Render=p;t.Render=u;i.Render=k;q.Render=j;h.mix(l,{Align:c,Box:i,Close:d,Contrain:o,Contentbox:q,Drag:a,Loading:b,Mask:m,Position:e,Shim:{Render:r},Resize:s,StdMod:t});return h.UIBase=l},{requires:["uibase/base","uibase/align","uibase/box","uibase/boxrender","uibase/close","uibase/closerender","uibase/constrain","uibase/contentbox","uibase/contentboxrender","uibase/drag","uibase/loading","uibase/loadingrender",
"uibase/mask","uibase/maskrender","uibase/position","uibase/positionrender","uibase/shimrender","uibase/resize","uibase/stdmod","uibase/stdmodrender"]});
