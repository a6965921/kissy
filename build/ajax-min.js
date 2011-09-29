/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Sep 29 16:12
*/
KISSY.add("ajax/base",function(g,l,m,k){function d(h){h=g.mix(g.clone(u),h||{},undefined,undefined,true);if(!g.isBoolean(h.crossDomain)){var n=j.exec(h.url.toLowerCase());h.crossDomain=!!(n&&(n[1]!=r[1]||n[2]!=r[2]||(n[3]||(n[1]==="http:"?i:o))!=(r[3]||(r[1]==="http:"?i:o))))}if(h.processData&&h.data&&!g.isString(h.data))h.data=g.param(h.data,undefined,undefined,h.serializeArray);h.type=h.type.toUpperCase();h.hasContent=!q.test(h.type);if(!h.hasContent){if(h.data)h.url+=(/\?/.test(h.url)?"&":"?")+
h.data;if(h.cache===false)h.url+=(/\?/.test(h.url)?"&":"?")+"_ksTS="+(g.now()+"_"+g.guid())}h.dataType=g.trim(h.dataType||"*").split(a);h.context=h.context||h;return h}function b(h,n){e.fire(h,{ajaxConfig:n.config,xhr:n})}function c(h){var n=this.config;h=h.type;this.timeoutTimer&&clearTimeout(this.timeoutTimer);n[h]&&n[h].call(n.context,this.responseData,this.statusText,this);b(h,this)}function e(h){if(h.url){h=d(h);var n=new k(h);b("start",n);var x=new (s[h.dataType[0]]||s["*"])(n);n.transport=
x;h.contentType&&n.setRequestHeader("Content-Type",h.contentType);var v=h.dataType[0],w=h.accepts;n.setRequestHeader("Accept",v&&w[v]?w[v]+(v==="*"?"":", */*; q=0.01"):w["*"]);for(var y in h.headers)n.setRequestHeader(y,h.headers[y]);n.on("complete success error",c);n.readyState=1;b("send",n);if(h.async&&h.timeout>0)n.timeoutTimer=setTimeout(function(){n.abort("timeout")},h.timeout*1E3);try{n.state=1;x.send()}catch(z){n.status<2&&n.callback(-1,z)}return n}}var a=/\s+/,j=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
f=function(h){return h},i=80,o=443,q=/^(?:GET|HEAD)$/,p,r;try{p=location.href}catch(t){p=document.createElement("a");p.href="";p=p.href}r=j.exec(p);p=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/.test(r[1]);var s={},u={type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",async:true,serializeArray:true,processData:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},converters:{text:{json:l.parse,
html:f,text:f,xml:g.parseXML}},contents:{xml:/xml/,html:/html/,json:/json/}};u.converters.html=u.converters.text;g.mix(e,m.Target);g.mix(e,{isLocal:p,setupConfig:function(h){g.mix(u,h,undefined,undefined,true)},setupTransport:function(h,n){s[h]=n},getTransport:function(h){return s[h]},getConfig:function(){return u}});return e},{requires:["json","event","./xhrobject"]});
KISSY.add("ajax/form-serializer",function(g,l){var m=/^(?:select|textarea)/i,k=/\r?\n/g,d=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i;return{serialize:function(b){var c=[],e={};l.query(b).each(function(a){a=a.elements?g.makeArray(a.elements):[a];c.push.apply(c,a)});c=g.filter(c,function(a){return a.name&&!a.disabled&&(a.checked||m.test(a.nodeName)||d.test(a.type))});g.each(c,function(a){var j=l.val(a);j=g.map(g.makeArray(j),function(f){return f.replace(k,
"\r\n")});a=e[a.name]=e[a.name]||[];a.push.apply(a,j)});return g.param(e,undefined,undefined,false)}}},{requires:["dom"]});
KISSY.add("ajax/form",function(g,l,m,k){l.on("start",function(d){d=d.xhr.config;if(d.form){var b=m.get(d.form);if((b.encoding||b.enctype).toLowerCase()!="multipart/form-data"){if(b=k.serialize(b))if(d.hasContent){d.data=d.data||"";if(d.data)d.data+="&";d.data+=b}else d.url+=(/\?/.test(d.url)?"&":"?")+b}else{b=d.dataType[0];if(b=="*")b="text";d.dataType.length=2;d.dataType[0]="iframe";d.dataType[1]=b}}});return l},{requires:["./base","dom","./form-serializer"]});
KISSY.add("ajax/iframe-upload",function(g,l,m,k){function d(c){this.xhr=c}var b=document;k.setupConfig({converters:{iframe:k.getConfig().converters.text,text:{iframe:function(c){return c}}}});g.augment(d,{send:function(){var c=this.xhr,e=c.config,a,j=l.get(e.form);this.attrs={target:l.attr(j,"target")||"",action:l.attr(j,"action")||""};this.form=j;var f=g.guid("ajax-iframe");c.iframe=l.create("<iframe  id='"+f+"' name='"+f+"' style='position:absolute;left:-9999px;top:-9999px;'/>");c.iframeId=f;l.prepend(c.iframe,
b.body||b.documentElement);l.attr(j,{target:c.iframeId,action:e.url});if(e.data){a=e.data;e=e.serializeArray;a=g.unparam(a);f=[];for(var i in a)for(var o=g.isArray(a[i]),q=g.makeArray(a[i]),p=0;p<q.length;p++){var r=b.createElement("input");r.type="hidden";r.name=i+(o&&e?"[]":"");r.value=q[p];l.append(r,j);f.push(r)}a=f}this.fields=a;m.on(c.iframe,"load error",this._callback,this);j.submit()},_callback:function(c){var e=this.xhr;c=c.type;var a=e.iframe;if(a){l.attr(this.form,this.attrs);if(c=="load"){c=
a.contentWindow.document;e.responseXML=c;e.responseText=l.text(c.body);e.callback(200,"success")}else c=="error"&&e.callback(500,"error");l.remove(this.fields);m.detach(a);setTimeout(function(){l.remove(a)},30);e.iframe=null}},abort:function(){this._callback(0,1)}});k.setupTransport("iframe",d);return k},{requires:["dom","event","./base"]});
KISSY.add("ajax/jsonp",function(g,l){l.setupConfig({jsonp:"callback",jsonpCallback:function(){return g.guid("jsonp")}});l.on("start",function(m){m=m.xhr;var k=m.config;if(k.dataType[0]=="jsonp"){var d,b=k.jsonpCallback,c=g.isFunction(b)?b():b,e=window[c];k.url+=(/\?/.test(k.url)?"&":"?")+k.jsonp+"="+c;window[c]=function(a){if(arguments.length>1)a=g.makeArray(arguments);d=[a]};m.on("complete",function(){window[c]=e;if(e===undefined)try{delete window[c]}catch(a){}else d&&e(d[0])});m.converters=m.converters||
{};m.converters.script=m.converters.script||{};m.converters.script.json=function(){return d[0]};k.dataType.length=2;k.dataType[0]="script";k.dataType[1]="json"}});return l},{requires:["./base"]});
KISSY.add("ajax/script",function(g,l){function m(d){if(!d.config.crossDomain&&!d.config.forceScript)return new (l.getTransport("*"))(d);this.xhrObj=d;return 0}var k=document;l.setupConfig({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{text:{script:function(d){g.globalEval(d);return d}}}});g.augment(m,{send:function(){var d=this,b,c=this.xhrObj.config,e=k.head||k.getElementsByTagName("head")[0]||
k.documentElement;d.head=e;b=k.createElement("script");d.script=b;b.async="async";if(c.scriptCharset)b.charset=c.scriptCharset;b.src=c.url;b.onerror=b.onload=b.onreadystatechange=function(a){a=a||window.event;d._callback((a.type||"error").toLowerCase())};e.insertBefore(b,e.firstChild)},_callback:function(d,b){var c=this.script,e=this.xhrObj,a=this.head;if(c)if(b||!c.readyState||/loaded|complete/.test(c.readyState)||d=="error"){c.onerror=c.onload=c.onreadystatechange=null;a&&c.parentNode&&a.removeChild(c);
this.head=this.script=undefined;if(!b&&d!="error")e.callback(200,"success");else d=="error"&&e.callback(500,"scripterror")}},abort:function(){this._callback(0,1)}});l.setupTransport("script",m);return l},{requires:["./base","./xhr"]});
KISSY.add("ajax/subdomain",function(g,l,m,k){function d(a){var j=a.config;this.xhrObj=a;a=j.url.match(b);this.__hostname=a[2];this.__protocol=a[1];j.crossDomain=false}var b=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,c=document,e={};g.augment(d,l.proto,{send:function(){var a=this.xhrObj.config,j=this.__hostname,f=e[j],i="/sub_domain_proxy.html";if(a.xdr&&a.xdr.subDomain&&a.xdr.subDomain.proxy)i=a.xdr.subDomain.proxy;if(f&&f.ready)(this.xhr=l.xhr(0,f.iframe.contentWindow))&&this.sendInternal();
else{if(f)a=f.iframe;else{f=e[j]={};a=f.iframe=document.createElement("iframe");k.css(a,{position:"absolute",left:"-9999px",top:"-9999px"});k.prepend(a,c.body||c.documentElement);a.src=this.__protocol+"//"+j+i}m.on(a,"load",this._onLoad,this)}},_onLoad:function(){var a=e[this.__hostname];a.ready=1;m.detach(a.iframe,"load",this._onLoad,this);this.send()}});return d},{requires:["./xhrbase","event","dom"]});
KISSY.add("ajax/xdr",function(g,l,m){function k(f,i,o){if(!j){j=true;f='<object id="'+c+'" type="application/x-shockwave-flash" data="'+f+'" width="0" height="0"><param name="movie" value="'+f+'" /><param name="FlashVars" value="yid='+i+"&uid="+o+'&host=KISSY.io" /><param name="allowScriptAccess" value="always" /></object>';i=a.createElement("div");m.prepend(i,a.body||a.documentElement);i.innerHTML=f}}function d(f){this.xhrObj=f}var b={},c="io_swf",e,a=document,j=false;g.augment(d,{send:function(){var f=
this,i=f.xhrObj.config;k((i.xdr||{}).src||g.Config.base+"ajax/io.swf",1,1);if(e){f._uid=g.guid();b[f._uid]=f;e.send(i.url,{id:f._uid,uid:f._uid,method:i.type,data:i.hasContent&&i.data||{}})}else setTimeout(function(){f.send()},200)},abort:function(){e.abort(this._uid)},_xdrResponse:function(f,i){var o,q=this.xhrObj;q.responseText=decodeURI(i.c.responseText);switch(f){case "success":o={status:200,statusText:"success"};delete b[i.id];break;case "abort":delete b[i.id];break;case "timeout":case "transport error":case "failure":delete b[i.id];
o={status:500,statusText:f}}o&&q.callback(o.status,o.statusText)}});l.applyTo=function(f,i,o){f=i.split(".");var q=g;g.each(f,function(p){q=q[p]});q.apply(null,o)};l.xdrReady=function(){e=a.getElementById(c)};l.xdrResponse=function(f,i,o){var q=b[i.uid];q&&q._xdrResponse(f,i,o)};g.io=l;return d},{requires:["./base","dom"]});
KISSY.add("ajax/xhr",function(g,l,m,k,d){var b=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,c=window.XDomainRequest,e=m.xhr();if(e){var a=function(f){f=f.split(".");return f.length<2?f.join("."):f.reverse().slice(0,2).reverse().join(".")},j=function(f){var i=f.config,o=i.xdr||{};if(i.crossDomain){i=i.url.match(b);if(a(location.hostname)==a(i[2]))return new k(f);if(!("withCredentials"in e)&&(String(o.use)==="flash"||!c))return new d(f)}this.xhrObj=f};g.augment(j,m.proto,{send:function(){this.xhr=
m.xhr(this.xhrObj.config.crossDomain);this.sendInternal()}});l.setupTransport("*",j)}return l},{requires:["./base","./xhrbase","./subdomain","./xdr"]});
KISSY.add("ajax/xhrbase",function(g,l){function m(c,e){try{return new (e||k).XMLHttpRequest}catch(a){}}var k=window,d=k.XDomainRequest,b={proto:{}};b.xhr=k.ActiveXObject?function(c,e){if(c&&d)return new d;var a;if(!(a=!l.isLocal&&m(c,e)))a:{try{a=new (e||k).ActiveXObject("Microsoft.XMLHTTP");break a}catch(j){}a=void 0}return a}:m;g.mix(b.proto,{sendInternal:function(){var c=this,e=c.xhrObj,a=e.config,j=c.xhr,f,i;a.username?j.open(a.type,a.url,a.async,a.username,a.password):j.open(a.type,a.url,a.async);
if(f=a.xhrFields)for(i in f)j[i]=f[i];e.mimeType&&j.overrideMimeType&&j.overrideMimeType(e.mimeType);if(!a.crossDomain&&!e.requestHeaders["X-Requested-With"])e.requestHeaders["X-Requested-With"]="XMLHttpRequest";try{if(!a.crossDomain)for(i in e.requestHeaders)j.setRequestHeader(i,e.requestHeaders[i])}catch(o){}j.send(a.hasContent&&a.data||null);if(!a.async||j.readyState==4)c._callback();else if(d&&j instanceof d){j.onload=function(){j.readyState=4;j.status=200;c._callback()};j.onerror=function(){j.readyState=
4;j.status=500;c._callback()}}else j.onreadystatechange=function(){c._callback()}},abort:function(){this._callback(0,1)},_callback:function(c,e){try{var a=this.xhr,j=this.xhrObj,f=j.config;if(e||a.readyState==4){if(d&&a instanceof d){a.onerror=g.noop;a.onload=g.noop}else a.onreadystatechange=g.noop;if(e)a.readyState!==4&&a.abort();else{var i=a.status;if(!(d&&a instanceof d))j.responseHeadersString=a.getAllResponseHeaders();var o=a.responseXML;if(o&&o.documentElement)j.responseXML=o;j.responseText=
a.responseText;try{var q=a.statusText}catch(p){q=""}if(!i&&l.isLocal&&!f.crossDomain)i=j.responseText?200:404;else if(i===1223)i=204;j.callback(i,q)}}}catch(r){a.onreadystatechange=g.noop;e||j.callback(-1,r)}}});return b},{requires:["./base"]});
KISSY.add("ajax/xhrobject",function(g,l){function m(b){var c=b.responseText,e=b.responseXML,a=b.config,j=a.converters,f=b.converters||{},i,o,q=a.contents,p=a.dataType;if(c||e){for(a=b.mimeType||b.getResponseHeader("Content-Type");p[0]=="*";)p.shift();if(!p.length)for(i in q)if(q[i].test(a)){p[0]!=i&&p.unshift(i);break}p[0]=p[0]||"text";if(p[0]=="text"&&c!==undefined)o=c;else if(p[0]=="xml"&&e!==undefined)o=e;else g.each(["text","xml"],function(t){var s=p[0];if(f[t]&&f[t][s]||j[t]&&j[t][s]){p.unshift(t);
o=t=="text"?c:e;return false}})}q=p[0];for(a=1;a<p.length;a++){i=p[a];var r=f[q]&&f[q][i]||j[q]&&j[q][i];if(!r)throw"no covert for "+q+" => "+i;o=r(o);q=i}b.responseData=o}function k(b){g.mix(this,{responseData:null,config:b||{},timeoutTimer:null,responseText:null,responseXML:null,responseHeadersString:"",responseHeaders:null,requestHeaders:{},readyState:0,state:0,statusText:null,status:0,transport:null})}var d=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg;g.augment(k,l.Target,{setRequestHeader:function(b,c){this.requestHeaders[b]=
c;return this},getAllResponseHeaders:function(){return this.state===2?this.responseHeadersString:null},getResponseHeader:function(b){var c;if(this.state===2){if(!this.responseHeaders)for(this.responseHeaders={};c=d.exec(this.responseHeadersString);)this.responseHeaders[c[1]]=c[2];c=this.responseHeaders[b]}return c===undefined?null:c},overrideMimeType:function(b){if(!this.state)this.mimeType=b;return this},abort:function(b){b=b||"abort";this.transport&&this.transport.abort(b);this.callback(0,b);return this},
callback:function(b,c){if(this.state!=2){this.state=2;this.readyState=4;var e;if(b>=200&&b<300||b==304)if(b==304){c="notmodified";e=true}else try{m(this);c="success";e=true}catch(a){c="parsererror : "+a}else if(b<0)b=0;this.status=b;this.statusText=c;e?this.fire("success"):this.fire("error");this.fire("complete");this.transport=undefined}}});return k},{requires:["event"]});
KISSY.add("ajax",function(g,l,m){g.mix(m,{serialize:l.serialize,get:function(k,d,b,c,e){if(g.isFunction(d)){c=b;b=d;d=undefined}return m({type:e||"get",url:k,data:d,success:b,dataType:c})},post:function(k,d,b,c){if(g.isFunction(d)){c=b;b=d;d=undefined}return m.get(k,d,b,c,"post")},jsonp:function(k,d,b){if(g.isFunction(d)){b=d;d=undefined}return m.get(k,d,b,"jsonp")},getScript:g.getScript,getJSON:function(k,d,b){if(g.isFunction(d)){b=d;d=undefined}return m.get(k,d,b,"json")},upload:function(k,d,b,
c,e){if(g.isFunction(b)){e=c;c=b;b=undefined}return m({url:k,type:"post",dataType:e,form:d,data:b,success:c})}});return m},{requires:["ajax/form-serializer","ajax/base","ajax/xhrobject","ajax/xhr","ajax/script","ajax/jsonp","ajax/form","ajax/iframe-upload"]});
