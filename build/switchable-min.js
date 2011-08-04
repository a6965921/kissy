/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 4 18:16
*/
KISSY.add("switchable/base",function(h,d,p,t){function m(c,a){a=a||{};if(!("markupType"in a))if(a.panelCls)a.markupType=1;else if(a.panels)a.markupType=2;for(var f=this.constructor;f;){a=h.merge(f.Config,a);f=f.superclass?f.superclass.constructor:null}this.container=d.get(c);this.config=a;this.activeIndex=this.completedIndex=a.activeIndex;if(!(this.activeIndex>-1))if(typeof a.switchTo!="number")this.completedIndex=this.activeIndex=0;this._init();this._initPlugins();this.fire(n);this.activeIndex>-1||
typeof a.switchTo=="number"&&this.switchTo(a.switchTo)}function u(c){var a={};a.type=c.originalEvent.type;a.target=c.originalEvent.target||c.originalEvent.srcElement;return{originalEvent:a}}var r=h.makeArray,k=p.Target,n="init";m.getDomEvent=u;m.Config={markupType:0,navCls:"ks-switchable-nav",contentCls:"ks-switchable-content",triggerCls:"ks-switchable-trigger",panelCls:"ks-switchable-panel",triggers:[],panels:[],hasTriggers:true,triggerType:"mouse",delay:0.1,activeIndex:-1,activeTriggerCls:"ks-active",
steps:1,viewSize:[]};m.Plugins=[];h.augment(m,k,{_initPlugins:function(){for(var c=this,a=c.constructor;a;){h.each(a.Plugins,function(f){f.init&&f.init(c)});a=a.superclass?a.superclass.constructor:null}},_init:function(){var c=this.config;this._parseMarkup();c.hasTriggers&&this._bindTriggers()},_parseMarkup:function(){var c=this.container,a=this.config,f,l,g=[],v=[];switch(a.markupType){case 0:if(f=d.get("."+a.navCls,c))g=d.children(f);l=d.get("."+a.contentCls,c);v=d.children(l);break;case 1:g=d.query("."+
a.triggerCls,c);v=d.query("."+a.panelCls,c);break;case 2:g=a.triggers;v=a.panels}c=v.length;this.length=c/a.steps;if(a.hasTriggers&&c>0&&g.length===0)g=this._generateTriggersMarkup(this.length);this.triggers=r(g);this.panels=r(v);this.content=l||v[0].parentNode;this.nav=f||a.hasTriggers&&g[0].parentNode},_generateTriggersMarkup:function(c){var a=this.config,f=d.create("<ul>"),l,g;f.className=a.navCls;for(g=0;g<c;g++){l=d.create("<li>");if(g===this.activeIndex)l.className=a.activeTriggerCls;l.innerHTML=
g+1;f.appendChild(l)}this.container.appendChild(f);return d.children(f)},_bindTriggers:function(){var c=this,a=c.config,f=c.triggers,l,g,v=f.length;for(g=0;g<v;g++)(function(x){l=f[x];p.on(l,"click",function(s){c._onFocusTrigger(x,s)});if(a.triggerType==="mouse"){p.on(l,"mouseenter",function(s){c._onMouseEnterTrigger(x,s)});p.on(l,"mouseleave",function(){c._onMouseLeaveTrigger(x)})}})(g)},_onFocusTrigger:function(c,a){if(this._triggerIsValid(c)){this._cancelSwitchTimer();this.switchTo(c,t,u(a))}},
_onMouseEnterTrigger:function(c,a){var f=this;if(f._triggerIsValid(c)){var l=u(a);f.switchTimer=h.later(function(){f.switchTo(c,t,l)},f.config.delay*1E3)}},_onMouseLeaveTrigger:function(){this._cancelSwitchTimer()},_triggerIsValid:function(c){return this.activeIndex!==c},_cancelSwitchTimer:function(){if(this.switchTimer){this.switchTimer.cancel();this.switchTimer=t}},switchTo:function(c,a,f,l){var g=this,v=g.config,x=g.triggers,s=g.panels,q=g.activeIndex,y=v.steps,A=q*y,B=c*y;if(!g._triggerIsValid(c))return g;
if(g.fire("beforeSwitch",{toIndex:c})===false)return g;if(v.hasTriggers)g._switchTrigger(q>-1?x[q]:null,x[c]);if(a===t)a=c>q?"forward":"backward";g._switchView(q>-1?s.slice(A,A+y):null,s.slice(B,B+y),c,a,f,function(){l&&l.call(g,c);g.completedIndex=c});g.activeIndex=c;return g},_switchTrigger:function(c,a){var f=this.config.activeTriggerCls;c&&d.removeClass(c,f);d.addClass(a,f)},_switchView:function(c,a,f,l,g,v){c&&d.css(c,"display","none");d.css(a,"display","block");this._fireOnSwitch(f,g);v&&v.call(this)},
_fireOnSwitch:function(c,a){this.fire("switch",h.mix(a||{},{currentIndex:c}))},prev:function(c){var a=this.activeIndex;this.switchTo(a>0?a-1:this.length-1,"backward",c)},next:function(c){var a=this.activeIndex;this.switchTo(a<this.length-1?a+1:0,"forward",c)}});return m},{requires:["dom","event"]});
KISSY.add("switchable/aria",function(h,d,p,t){function m(){this.stop&&this.stop()}function u(){this.start&&this.start()}t.Plugins.push({name:"aria",init:function(k){if(k.config.aria){var n=k.container;p.on(n,"focusin",m,k);p.on(n,"focusout",u,k)}}});var r=["a","input","button","object"];return{setTabIndex:function(k,n){k.tabIndex=n;d.query("*",k).each(function(c){var a=c.nodeName.toLowerCase();if(h.inArray(a,r)){d.hasAttr(c,"oriTabIndex")||d.attr(c,"oriTabIndex",c.tabIndex);c.tabIndex=n!=-1?d.attr(c,
"oriTabIndex"):n}})}}},{requires:["dom","event","./base"]});
KISSY.add("switchable/accordion/base",function(h,d,p){function t(m,u){if(!(this instanceof t))return new t(m,u);t.superclass.constructor.apply(this,arguments)}h.extend(t,p,{_switchTrigger:function(m,u){var r=this.config;r.multiple?d.toggleClass(u,r.activeTriggerCls):t.superclass._switchTrigger.apply(this,arguments)},_triggerIsValid:function(m){return this.config.multiple||t.superclass._triggerIsValid.call(this,m)},_switchView:function(m,u,r,k,n,c){var a=u[0];if(this.config.multiple){d.toggle(a);this._fireOnSwitch(r,
n);c&&c.call(this)}else t.superclass._switchView.apply(this,arguments)}});t.Plugins=[];t.Config={markupType:1,triggerType:"click",multiple:false};return t},{requires:["dom","../base"]});
KISSY.add("switchable/accordion/aria",function(h,d,p,t,m){function u(e){var i;h.each(this.triggers,function(z){if(z==e||d.contains(z,e))i=z});return i}function r(e){var i;h.each(this.panels,function(z){if(z==e||d.contains(z,e))i=z});return i}function k(e){var i=u.call(this,e);if(!i){e=r.call(this,e);i=this.triggers[h.indexOf(e,this.panels)]}return i}function n(e){switch(e.keyCode){case v:case x:e.ctrlKey&&!e.altKey&&!e.shiftKey&&e.halt();break;case j:e.ctrlKey&&!e.altKey&&e.halt()}}function c(e){var i=
e.target,z=this.triggers,E=!e.ctrlKey&&!e.shiftKey&&!e.altKey,F=e.ctrlKey&&!e.shiftKey&&!e.altKey;switch(e.keyCode){case w:case o:if((i=u.call(this,i))&&E){this.switchTo(h.indexOf(i,this.triggers));e.halt()}break;case y:case A:if(i=u.call(this,i)){f.call(this,i);e.halt()}break;case B:case b:if(i=u.call(this,i)){l.call(this,i);e.halt()}break;case x:if(F){e.halt();i=k.call(this,i);l.call(this,i)}break;case v:if(F){e.halt();i=k.call(this,i);f.call(this,i)}break;case q:if(E){k.call(this,i);a.call(this,
0,true);e.halt()}break;case s:if(E){k.call(this,i);a.call(this,z.length-1,true);e.halt()}break;case j:if(e.ctrlKey&&!e.altKey){e.halt();i=k.call(this,i);e.shiftKey?f.call(this,i):l.call(this,i)}}}function a(e,i){var z=this.triggers,E=z[e];h.each(z,function(F){if(F!==E){C(F,"-1");d.removeClass(F,"ks-switchable-select");F.setAttribute("aria-selected","false")}});i&&E.focus();C(E,"0");d.addClass(E,"ks-switchable-select");E.setAttribute("aria-selected","true")}function f(e){var i=this.triggers;e=h.indexOf(e,
i);a.call(this,e==0?i.length-1:e-1,true)}function l(e){var i=this.triggers;e=h.indexOf(e,i);a.call(this,e==i.length-1?0:e+1,true)}function g(e){var i=!!(e.originalEvent.target||e.originalEvent.srcElement);e=e.currentIndex;var z=this.panels,E=this.triggers,F=E[e],G=z[e];if(!this.config.multiple){h.each(z,function(D){D!==G&&D.setAttribute("aria-hidden","true")});h.each(E,function(D){D!==F&&D.setAttribute("aria-hidden","true")})}z=G.getAttribute("aria-hidden");G.setAttribute("aria-hidden",z=="false"?
"true":"false");F.setAttribute("aria-expanded",z=="false"?"false":"true");a.call(this,e,i)}var v=33,x=34,s=35,q=36,y=37,A=38,B=39,b=40,j=9,o=32,w=13;h.mix(m.Config,{aria:true});m.Plugins.push({name:"aria",init:function(e){if(e.config.aria){var i=e.container,z=e.activeIndex;d.attr(i,"aria-multiselectable",e.config.multiple?"true":"false");e.nav&&d.attr(e.nav,"role","tablist");var E=e.triggers,F=e.panels,G=0;h.each(F,function(D){if(!D.id)D.id=h.guid("ks-accordion-tab-panel")});h.each(E,function(D){if(!D.id)D.id=
h.guid("ks-accordion-tab")});h.each(E,function(D){D.setAttribute("role","tab");D.setAttribute("aria-expanded",z==G?"true":"false");D.setAttribute("aria-selected",z==G?"true":"false");D.setAttribute("aria-controls",F[G].id);C(D,z==G?"0":"-1");G++});G=0;h.each(F,function(D){var H=E[G];D.setAttribute("role","tabpanel");D.setAttribute("aria-hidden",z==G?"false":"true");D.setAttribute("aria-labelledby",H.id);G++});e.on("switch",g,e);p.on(i,"keydown",c,e);p.on(i,"keypress",n,e)}}});var C=t.setTabIndex},
{requires:["dom","event","../aria","./base"]});
KISSY.add("switchable/autoplay",function(h,d,p,t){h.mix(p.Config,{autoplay:false,interval:5,pauseOnHover:true});p.Plugins.push({name:"autoplay",init:function(m){function u(){n=h.later(function(){m.paused||m.switchTo(m.activeIndex<m.length-1?m.activeIndex+1:0,"forward")},k,true)}var r=m.config,k=r.interval*1E3,n;if(r.autoplay){u();m.stop=function(){if(n){n.cancel();n=t}m.paused=true};m.start=function(){if(n){n.cancel();n=t}m.paused=false;u()};if(r.pauseOnHover){d.on(m.container,"mouseenter",m.stop,
m);d.on(m.container,"mouseleave",m.start,m)}}}});return p},{requires:["event","./base"]});KISSY.add("switchable/autorender",function(h,d,p,t){t.autoRender=function(m,u){m="."+(m||"KS_Widget");d.query(m,u).each(function(r){var k=r.getAttribute("data-widget-type"),n;if(k&&"Switchable Tabs Slide Carousel Accordion".indexOf(k)>-1)try{if(n=r.getAttribute("data-widget-config"))n=n.replace(/'/g,'"');new h[k](r,p.parse(n))}catch(c){}})}},{requires:["dom","json","switchable/base"]});
KISSY.add("switchable/carousel/base",function(h,d,p,t,m){function u(k,n){if(!(this instanceof u))return new u(k,n);u.superclass.constructor.apply(this,arguments)}var r={originalEvent:{target:1}};u.Config={circular:true,prevBtnCls:"ks-switchable-prev-btn",nextBtnCls:"ks-switchable-next-btn",disableBtnCls:"ks-switchable-disable-btn"};u.Plugins=[];h.extend(u,t,{_init:function(){var k=this;u.superclass._init.call(k);var n=k.config,c=n.disableBtnCls;h.each(["prev","next"],function(a){var f=k[a+"Btn"]=
d.get("."+n[a+"BtnCls"],k.container);p.on(f,"mousedown",function(l){l.preventDefault();d.hasClass(f,c)||k[a](r)})});n.circular||k.on("switch",function(a){a=a.currentIndex;a=a===0?k.prevBtn:a===k.length-1?k.nextBtn:m;d.removeClass([k.prevBtn,k.nextBtn],c);a&&d.addClass(a,c)});p.on(k.panels,"click",function(){k.fire("itemSelected",{item:this})})}});return u},{requires:["dom","event","../base"]});
KISSY.add("switchable/carousel/aria",function(h,d,p,t,m){function u(b){var j=b.currentIndex,o=this.activeIndex,w=this.panels,C=w[j*this.config.steps],e=this.triggers;j=e[j];if((b=!!(b.originalEvent.target||b.originalEvent.srcElement))||o==-1){h.each(e,function(i){q(i,-1)});h.each(w,function(i){q(i,-1)});j&&q(j,0);q(C,0);b&&C.focus()}}function r(b){var j;h.each(this.triggers,function(o){if(o==b||d.contains(o,b)){j=o;return false}});return j}function k(b){var j=b.target;switch(b.keyCode){case v:case g:if(j=
r.call(this,j)){j=j;var o=d.next(j),w=this.triggers;o||(o=w[0]);q(j,-1);if(o){q(o,0);o.focus()}b.halt()}break;case l:case f:if(j=r.call(this,j)){j=j;o=d.prev(j);w=this.triggers;o||(o=w[w.length-1]);q(j,-1);if(o){q(o,0);o.focus()}b.halt()}break;case s:case x:if(j=r.call(this,j)){this.switchTo(h.indexOf(j,this.triggers),undefined,y);b.halt()}}}function n(b){var j;h.each(this.panels,function(o){if(o==b||d.contains(o,b)){j=o;return false}});return j}function c(b,j){var o=h.indexOf(b,this.panels),w=this.config.steps,
C=Math.floor(o/w);if(C==this.activeIndex)return 1;if(o%w==0||o%w==w-1){this.switchTo(C,j,y);return 0}return 1}function a(b){var j=b.target;switch(b.keyCode){case v:case g:if(j=n.call(this,j)){j=j;var o=d.next(j),w=this.panels;o||(o=w[0]);q(j,-1);q(o,0);c.call(this,o,A)&&o.focus();b.halt()}break;case l:case f:if(j=n.call(this,j)){j=j;o=d.prev(j);w=this.panels;o||(o=w[w.length-1]);q(j,-1);q(o,0);c.call(this,o,B)&&o.focus();b.halt()}break;case s:case x:if(j=n.call(this,j)){this.fire("itemSelected",{item:j});
b.halt()}}}var f=37,l=38,g=39,v=40,x=32,s=13,q=t.setTabIndex,y={originalEvent:{target:1}},A="forward",B="backward";h.mix(m.Config,{aria:false});m.Plugins.push({name:"aria",init:function(b){if(b.config.aria){var j=b.triggers,o=b.panels,w=b.content,C=b.activeIndex;if(!w.id)w.id=h.guid("ks-switchbale-content");w.setAttribute("role","listbox");var e=0;h.each(j,function(i){q(i,C==e?"0":"-1");i.setAttribute("role","button");i.setAttribute("aria-controls",w.id);e++});e=0;h.each(o,function(i){q(i,"-1");i.setAttribute("role",
"option");e++});b.on("switch",u,b);(j=b.nav)&&p.on(j,"keydown",k,b);p.on(w,"keydown",a,b);j=b.prevBtn;o=b.nextBtn;if(j){q(j,0);j.setAttribute("role","button");p.on(j,"keydown",function(i){if(i.keyCode==s||i.keyCode==x){b.prev(y);i.preventDefault()}})}if(o){q(o,0);o.setAttribute("role","button");p.on(o,"keydown",function(i){if(i.keyCode==s||i.keyCode==x){b.next(y);i.preventDefault()}})}}}})},{requires:["dom","event","../aria","./base"]});
KISSY.add("switchable/effect",function(h,d,p,t,m,u){var r;h.mix(m.Config,{effect:"none",duration:0.5,easing:"easeNone",nativeAnim:true});m.Effects={none:function(k,n,c){k&&d.css(k,"display","none");d.css(n,"display","block");c&&c()},fade:function(k,n,c){var a=this,f=a.config,l=k?k[0]:null,g=n[0];if(a.anim){a.anim.stop();d.css(a.anim.fromEl,{zIndex:1,opacity:0});d.css(a.anim.toEl,"zIndex",9)}d.css(g,"opacity",1);if(l){a.anim=(new t(l,{opacity:0},f.duration,f.easing,function(){a.anim=u;d.css(g,"z-index",
9);d.css(l,"z-index",1);c&&c()},f.nativeAnim)).run();a.anim.toEl=g;a.anim.fromEl=l}else{d.css(g,"z-index",9);c&&c()}},scroll:function(k,n,c,a){var f=this;n=f.config;var l=n.effect==="scrollx",g={};g[l?"left":"top"]=-(f.viewSize[l?0:1]*a)+"px";f.anim&&f.anim.stop();if(k)f.anim=(new t(f.content,g,n.duration,n.easing,function(){f.anim=u;c&&c()},n.nativeAnim)).run();else{d.css(f.content,g);c&&c()}}};r=m.Effects;r.scrollx=r.scrolly=r.scroll;m.Plugins.push({name:"effect",init:function(k){var n=k.config,
c=n.effect,a=k.panels,f=k.content,l=n.steps,g=k.activeIndex,v=a.length;k.viewSize=[n.viewSize[0]||a[0].offsetWidth*l,n.viewSize[1]||a[0].offsetHeight*l];if(c!=="none"){d.css(a,"display","block");switch(c){case "scrollx":case "scrolly":d.css(f,"position","absolute");d.css(f.parentNode,"position")=="static"&&d.css(f.parentNode,"position","relative");if(c==="scrollx"){d.css(a,"float","left");d.width(f,k.viewSize[0]*(v/l))}break;case "fade":var x=g*l,s=x+l-1,q;h.each(a,function(y,A){q=A>=x&&A<=s;d.css(y,
{opacity:q?1:0,position:"absolute",zIndex:q?9:1})})}}}});h.augment(m,{_switchView:function(k,n,c,a,f,l){var g=this,v=g.config.effect;(h.isFunction(v)?v:r[v]).call(g,k,n,function(){g._fireOnSwitch(c,f);l&&l.call(g)},c,a)}});return m},{requires:["dom","event","anim","switchable/base"]});
KISSY.add("switchable/circular",function(h,d,p,t){function m(s,q,y,A,B){var b=this;q=b.config;var j=b.length,o=b.activeIndex,w=q.scrollType===x,C=w?c:a,e=b.viewSize[w?0:1];w=-e*A;var i={},z,E=B===v;if(z=E&&o===0&&A===j-1||B===g&&o===j-1&&A===0)w=u.call(b,b.panels,A,E,C,e);i[C]=w+l;b.anim&&b.anim.stop();if(s)b.anim=(new p(b.content,i,q.duration,q.easing,function(){z&&r.call(b,b.panels,A,E,C,e);b.anim=undefined;y&&y()},q.nativeAnim)).run();else{d.css(b.content,i);y&&y()}}function u(s,q,y,A,B){var b=
this.config.steps;q=this.length;var j=y?q-1:0;s=s.slice(j*b,(j+1)*b);d.css(s,k,n);d.css(s,A,(y?-1:1)*B*q);return y?B:-B*q}function r(s,q,y,A,B){var b=this.config.steps;q=this.length;var j=y?q-1:0;s=s.slice(j*b,(j+1)*b);d.css(s,k,f);d.css(s,A,f);d.css(this.content,A,y?-B*(q-1):f)}var k="position",n="relative",c="left",a="top",f="",l="px",g="forward",v="backward",x="scrollx";h.mix(t.Config,{circular:false});t.Plugins.push({name:"circular",init:function(s){s=s.config;if(s.circular&&(s.effect===x||s.effect===
"scrolly")){s.scrollType=s.effect;s.effect=m}}})},{requires:["dom","anim","./base","./effect"]});
KISSY.add("switchable/countdown",function(h,d,p,t,m,u){h.mix(m.Config,{countdown:false,countdownFromStyle:"",countdownToStyle:"width: 0"});m.Plugins.push({name:"countdown",init:function(r){function k(s){n();x=(new t(l[s],v,f-1)).run()}function n(){if(a){clearTimeout(a);a=null}if(x){x.stop();x=u}}var c=r.config,a,f=c.interval,l=[],g=c.countdownFromStyle,v=c.countdownToStyle,x;if(!(!c.autoplay||!c.hasTriggers||!c.countdown)){h.each(r.triggers,function(s,q){s.innerHTML='<div class="ks-switchable-trigger-mask"></div><div class="ks-switchable-trigger-content">'+
s.innerHTML+"</div>";l[q]=s.firstChild});if(c.pauseOnHover){p.on(r.container,"mouseenter",function(){n();var s=l[r.activeIndex];if(g)x=(new t(s,g,0.2,"easeOut")).run();else d.attr(s,"style","")});p.on(r.container,"mouseleave",function(){n();var s=r.activeIndex;d.attr(l[s],"style",g);a=setTimeout(function(){k(s)},200)})}r.on("beforeSwitch",function(){n();if(l[r.activeIndex])d.attr(l[r.activeIndex],"style",g||"")});r.on("switch",function(s){r.paused||k(s.currentIndex)});r.activeIndex>-1&&k(r.activeIndex)}}});
return m},{requires:["dom","event","anim","./base"]});
KISSY.add("switchable/lazyload",function(h,d,p){var t="beforeSwitch",m="img-src",u="area-data",r={};r[m]="data-ks-lazyload-custom";r[u]="ks-datalazyload-custom";h.mix(p.Config,{lazyDataType:u});p.Plugins.push({name:"lazyload",init:function(k){function n(g){var v=a.steps;g=g.toIndex*v;c.loadCustomLazyData(k.panels.slice(g,g+v),f);a:{if(g=(v=f===m)?"img":f===u?"textarea":""){g=d.query(g,k.container);for(var x=0,s=g.length;x<s;x++){var q=g[x];if(v?d.attr(q,l):d.hasClass(q,l)){v=false;break a}}}v=true}v&&
k.detach(t,n)}var c=h.require("datalazyload"),a=k.config,f=a.lazyDataType,l=r[f];!c||!f||!l||k.on(t,n)}});return p},{requires:["dom","./base"]});KISSY.add("switchable/slide/base",function(h,d){function p(t,m){if(!(this instanceof p))return new p(t,m);p.superclass.constructor.apply(this,arguments)}p.Config={autoplay:true,circular:true};p.Plugins=[];h.extend(p,d);return p},{requires:["../base"]});
KISSY.add("switchable/slide/aria",function(h,d,p,t,m){function u(l){switch(l.keyCode){case c:case n:this.next(a);l.halt();break;case k:case r:this.prev(a);l.halt()}}var r=37,k=38,n=39,c=40;h.mix(m.Config,{aria:false});var a={originalEvent:{target:1}},f=t.setTabIndex;m.Plugins.push({name:"aria",init:function(l){if(l.config.aria){var g=l.panels,v=0,x=l.activeIndex;h.each(l.triggers,function(q){f(q,"-1");v++});v=0;h.each(g,function(q){f(q,x==v?"0":"-1");d.attr(q,"role","option");v++});var s=l.content;
d.attr(s,"role","listbox");p.on(s,"keydown",u,l);f(g[0],0);l.on("switch",function(q){var y=q.currentIndex;q=!!(q.originalEvent.target||q.originalEvent.srcElement);var A=l.completedIndex;A>-1&&f(g[A],-1);f(g[y],0);q&&g[y].focus()})}}})},{requires:["dom","event","../aria","./base"]});KISSY.add("switchable/tabs/base",function(h,d){function p(t,m){if(!(this instanceof p))return new p(t,m);p.superclass.constructor.call(this,t,m);return 0}h.extend(p,d);p.Config={};p.Plugins=[];return p},{requires:["../base"]});
KISSY.add("switchable/tabs/aria",function(h,d,p,t,m,u){function r(b){var j;h.each(this.triggers,function(o){if(o==b||d.contains(o,b))j=o});return j}function k(b){switch(b.keyCode){case a:case f:b.ctrlKey&&!b.altKey&&!b.shiftKey&&b.halt();break;case y:b.ctrlKey&&!b.altKey&&b.halt()}}function n(b){var j=b.target,o=this.triggers,w=!b.ctrlKey&&!b.shiftKey&&!b.altKey,C=b.ctrlKey&&!b.shiftKey&&!b.altKey;switch(b.keyCode){case v:case x:if(r.call(this,j)){this.prev(B(b));b.halt()}break;case s:case q:if(r.call(this,
j)){this.next(B(b));b.halt()}break;case f:if(C){b.halt();this.next(B(b))}break;case a:if(C){b.halt();this.prev(B(b))}break;case g:if(w){this.switchTo(0,undefined,B(b));b.halt()}break;case l:if(w){this.switchTo(o.length-1,undefined,B(b));b.halt()}break;case y:if(b.ctrlKey&&!b.altKey){b.halt();b.shiftKey?this.prev(B(b)):this.next(B(b))}}}function c(b){var j=!!(b.originalEvent.target||b.originalEvent.srcElement),o=this.completedIndex,w=b.currentIndex;if(o!=w){b=this.triggers[o];var C=this.triggers[w];
o=this.panels[o];w=this.panels[w];b&&A(b,"-1");A(C,"0");j&&C.focus();o&&o.setAttribute("aria-hidden","true");w.setAttribute("aria-hidden","false")}}var a=33,f=34,l=35,g=36,v=37,x=38,s=39,q=40,y=9;h.mix(u.Config,{aria:true});u.Plugins.push({name:"aria",init:function(b){if(b.config.aria){var j=b.triggers,o=b.activeIndex,w=b.panels,C=b.container;b.nav&&d.attr(b.nav,"role","tablist");var e=0;h.each(j,function(i){i.setAttribute("role","tab");A(i,o==e?"0":"-1");if(!i.id)i.id=h.guid("ks-switchable");e++});
e=0;h.each(w,function(i){var z=j[e];i.setAttribute("role","tabpanel");i.setAttribute("aria-hidden",o==e?"false":"true");i.setAttribute("aria-labelledby",z.id);e++});b.on("switch",c,b);p.on(C,"keydown",n,b);p.on(C,"keypress",k,b)}}});var A=m.setTabIndex,B=t.getDomEvent},{requires:["dom","event","../base","../aria","./base"]});
KISSY.add("switchable",function(h,d,p,t,m,u,r,k,n,c,a,f,l,g,v,x){h.Switchable=d;p={Accordion:t,Carousel:k,Slide:g,Tabs:x};h.mix(h,p);h.mix(d,p);return d},{requires:["switchable/base","switchable/aria","switchable/accordion/base","switchable/accordion/aria","switchable/autoplay","switchable/autorender","switchable/carousel/base","switchable/carousel/aria","switchable/circular","switchable/countdown","switchable/effect","switchable/lazyload","switchable/slide/base","switchable/slide/aria","switchable/tabs/base",
"switchable/tabs/aria"]});
