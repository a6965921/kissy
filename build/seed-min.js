/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 2 22:01
*/
(function(a,q){var o=this,n={mix:function(b,e,g,j,l){if(!e||!b)return b;if(g===q)g=true;var k,r,t;if(j&&(t=j.length))for(k=0;k<t;k++){r=j[k];r in e&&h(r,b,e,g,l)}else for(r in e)h(r,b,e,g,l);return b}},h=function(b,e,g,j,l){if(j||!(b in e)){var k=e[b],r=g[b];if(k!==r)if(l&&r&&(a.isArray(r)||a.isPlainObject(r))){g=k&&(a.isArray(k)||a.isPlainObject(k))?k:a.isArray(r)?[]:{};e[b]=a.mix(g,r,j,q,true)}else if(r!==q)e[b]=g[b]}},f=o&&o[a]||{},c=0;o=f.__HOST||(f.__HOST=o||{});a=o[a]=n.mix(f,n,false);a.mix(a,
{__APP_MEMBERS:["namespace"],__APP_INIT_METHODS:["__init"],version:"1.20dev",buildTime:"20110802220146",merge:function(){var b={},e,g=arguments.length;for(e=0;e<g;e++)a.mix(b,arguments[e]);return b},augment:function(){var b=a.makeArray(arguments),e=b.length-2,g=b[0],j=b[e],l=b[e+1],k=1;if(!a.isArray(l)){j=l;l=q;e++}if(!a.isBoolean(j)){j=q;e++}for(;k<e;k++)a.mix(g.prototype,b[k].prototype||b[k],j,l);return g},extend:function(b,e,g,j){if(!e||!b)return b;var l=Object.create?function(t,w){return Object.create(t,
{constructor:{value:w}})}:function(t,w){function x(){}x.prototype=t;var z=new x;z.constructor=w;return z},k=e.prototype,r;r=l(k,b);b.prototype=a.mix(r,b.prototype);b.superclass=l(k,e);g&&a.mix(r,g);j&&a.mix(b,j);return b},__init:function(){this.Config=this.Config||{};this.Env=this.Env||{};this.Config.debug=""},namespace:function(){var b=a.makeArray(arguments),e=b.length,g=null,j,l,k,r=b[e-1]===true&&e--;for(j=0;j<e;j++){k=(""+b[j]).split(".");g=r?o:this;for(l=o[k[0]]===g?1:0;l<k.length;++l)g=
g[k[l]]=g[k[l]]||{}}return g},app:function(b,e){var g=a.isString(b),j=g?o[b]||{}:b,l=0,k=a.__APP_INIT_METHODS.length;for(a.mix(j,this,true,a.__APP_MEMBERS);l<k;l++)a[a.__APP_INIT_METHODS[l]].call(j);a.mix(j,a.isFunction(e)?e():e);g&&(o[b]=j);return j},config:function(b){for(var e in b)this["_"+e]&&this["_"+e](b[e])},log:function(b,e,g){if(a.Config.debug){if(g)b=g+": "+b;if(o.console!==q&&console.log)console[e&&console[e]?e:"log"](b)}},error:function(b){if(a.Config.debug)throw b;},guid:function(b){return(b||
"")+c++}});a.__init();return a})("KISSY");
(function(a,q){function o(){if(B)return B;var d=t;a.each(A,function(i){d+=i+"|"});d=d.slice(0,-1);return B=RegExp(d,"g")}function n(){if(C)return C;var d=t;a.each(D,function(i){d+=i+"|"});d+="&#(\\d{1,5});";return C=RegExp(d,"g")}function h(d){var i=typeof d;return d===null||i!=="object"&&i!=="function"}var f=a.__HOST,c=Object.prototype,b=c.toString,e=c.hasOwnProperty;c=Array.prototype;var g=c.indexOf,j=c.lastIndexOf,l=c.filter,k=String.prototype.trim,r=c.map,t="",w=/^\s+|\s+$/g,x=encodeURIComponent,
z=decodeURIComponent,E={},A={"&amp;":"&","&gt;":">","&lt;":"<","&quot;":'"'},D={},B,C,F;for(F in A)D[A[F]]=F;a.mix(a,{noop:function(){},type:function(d){return d==null?String(d):E[b.call(d)]||"object"},isNull:function(d){return d===null},isUndefined:function(d){return d===q},isEmptyObject:function(d){for(var i in d)if(i!==q)return false;return true},isPlainObject:function(d){return d&&b.call(d)==="[object Object]"&&"isPrototypeOf"in d},clone:function(d,i,m){var p=d,s,u,v=m||{};if(d&&((s=a.isArray(d))||
a.isPlainObject(d))){if(d["__~ks_cloned"])return v[d["__~ks_cloned"]];d["__~ks_cloned"]=p=a.guid();v[p]=d;if(s)p=i?a.filter(d,i):d.concat();else{p={};for(u in d)if(u!=="__~ks_cloned"&&d.hasOwnProperty(u)&&(!i||i.call(d,d[u],u,d)!==false))p[u]=a.clone(d[u],i,v)}}if(!m){a.each(v,function(y){if(y["__~ks_cloned"])try{delete y["__~ks_cloned"]}catch(G){y["__~ks_cloned"]=q}});v=q}return p},trim:k?function(d){return d==q?t:k.call(d)}:function(d){return d==q?t:d.toString().replace(w,t)},substitute:function(d,
i,m){if(!a.isString(d)||!a.isPlainObject(i))return d;return d.replace(m||/\\?\{([^{}]+)\}/g,function(p,s){if(p.charAt(0)==="\\")return p.slice(1);return i[s]!==q?i[s]:t})},each:function(d,i,m){var p,s=0,u=d&&d.length,v=u===q||a.type(d)==="function";m=m||f;if(v)for(p in d){if(i.call(m,d[p],p,d)===false)break}else for(p=d[0];s<u&&i.call(m,p,s,d)!==false;p=d[++s]);return d},indexOf:g?function(d,i){return g.call(i,d)}:function(d,i){for(var m=0,p=i.length;m<p;++m)if(i[m]===d)return m;return-1},lastIndexOf:j?
function(d,i){return j.call(i,d)}:function(d,i){for(var m=i.length-1;m>=0;m--)if(i[m]===d)break;return m},unique:function(d,i){var m=d.slice();i&&m.reverse();for(var p=0,s,u;p<m.length;){for(u=m[p];(s=a.lastIndexOf(u,m))!==p;)m.splice(s,1);p+=1}i&&m.reverse();return m},inArray:function(d,i){return a.indexOf(d,i)>-1},filter:l?function(d,i,m){return l.call(d,i,m||this)}:function(d,i,m){var p=[];a.each(d,function(s,u,v){if(i.call(m||this,s,u,v))p.push(s)});return p},map:r?function(d,i,m){return r.call(d,
i,m||this)}:function(d,i,m){for(var p=d.length,s=Array(p),u=0;u<p;u++){var v=a.isString(d)?d.charAt(u):d[u];if(v||u in d)s[u]=i.call(m||this,v,u,d)}return s},reduce:function(d,i){var m=d.length;if(typeof i!=="function")throw new TypeError;if(m==0&&arguments.length==2)throw new TypeError;var p=0,s;if(arguments.length>=3)s=arguments[2];else{do{if(p in d){s=d[p++];break}if(++p>=m)throw new TypeError;}while(1)}for(;p<m;){if(p in d)s=i.call(q,s,d[p],p,d);p++}return s},bind:function(d,i){var m=[].slice,
p=m.call(arguments,2),s=function(){},u=function(){return d.apply(this instanceof s?this:i,p.concat(m.call(arguments)))};s.prototype=d.prototype;u.prototype=new s;return u},now:Date.now||function(){return+new Date},fromUnicode:function(d){return d.replace(/\\u([a-f\d]{4})/ig,function(i,m){return String.fromCharCode(parseInt(m,16))})},escapeHTML:function(d){return d.replace(o(),function(i){return D[i]})},unEscapeHTML:function(d){return d.replace(n(),function(i,m){return A[i]||String.fromCharCode(+m)})},
makeArray:function(d){if(d===null||d===q)return[];if(a.isArray(d))return d;if(typeof d.length!=="number"||a.isString(d)||a.isFunction(d))return[d];for(var i=[],m=0,p=d.length;m<p;m++)i[m]=d[m];return i},param:function(d,i,m,p){if(!a.isPlainObject(d))return t;i=i||"&";m=m||"=";if(a.isUndefined(p))p=true;var s=[],u,v;for(u in d){v=d[u];u=x(u);if(h(v))s.push(u,m,x(v+t),i);else if(a.isArray(v)&&v.length)for(var y=0,G=v.length;y<G;++y)if(h(v[y]))s.push(u,p?x("[]"):t,m,x(v[y]+t),i)}s.pop();return s.join(t)},
unparam:function(d,i,m){if(typeof d!=="string"||(d=a.trim(d)).length===0)return{};i=i||"&";m=m||"=";var p={};d=d.split(i);for(var s,u,v=0,y=d.length;v<y;++v){i=d[v].split(m);s=z(i[0]);try{u=z(i[1]||t)}catch(G){u=i[1]||t}if(a.endsWith(s,"[]"))s=s.substring(0,s.length-2);if(e.call(p,s))if(a.isArray(p[s]))p[s].push(u);else p[s]=[p[s],u];else p[s]=u}return p},later:function(d,i,m,p,s){i=i||0;p=p||{};var u=d,v=a.makeArray(s),y;if(a.isString(d))u=p[d];d=function(){u.apply(p,v)};y=m?setInterval(d,i):setTimeout(d,
i);return{id:y,interval:m,cancel:function(){this.interval?clearInterval(y):clearTimeout(y)}}},startsWith:function(d,i){return d.lastIndexOf(i,0)==0},endsWith:function(d,i){var m=d.length-i.length;return m>=0&&d.indexOf(i,m)==m}});a.mix(a,{isBoolean:h,isNumber:h,isString:h,isFunction:h,isArray:h,isDate:h,isRegExp:h,isObject:h});a.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(d,i){E["[object "+d+"]"]=i=d.toLowerCase();a["is"+d]=function(m){return a.type(m)==i}})})(KISSY);
(function(a){if(!("require"in this)){a.__loader={};a.__loaderUtils={};a.__loaderData={}}})(KISSY);(function(a,q){"require"in this||a.mix(q,{LOADING:1,LOADED:2,ERROR:3,ATTACHED:4})})(KISSY,KISSY.__loaderData);
(function(a,q,o){if(!a.use){a.mix(o,{isWebKit:!!navigator.userAgent.match(/AppleWebKit/),IE:!!navigator.userAgent.match(/MSIE/),isCss:function(f){return/\.css(?:\?|$)/i.test(f)},isLinkNode:function(f){return f.nodeName.toLowerCase()=="link"},normalizePath:function(f){f=f.split("/");for(var c=[],b,e=0;e<f.length;e++){b=f[e];if(b!=".")b==".."?c.pop():c.push(b)}return c.join("/")},normalDepModuleName:function f(c,b){if(!b)return b;if(a.isArray(b)){for(var e=0;e<b.length;e++)b[e]=f(c,b[e]);return b}if(n(b,
"../")||n(b,"./")){e="";var g;if((g=c.lastIndexOf("/"))!=-1)e=c.substring(0,g+1);return h(e+b)}else return b.indexOf("./")!=-1||b.indexOf("../")!=-1?h(b):b},removePostfix:function(f){return f.replace(/(-min)?\.js[^/]*$/i,"")},normalBasePath:function(f){if(f.charAt(f.length-1)!="/")f+="/";f=a.trim(f);if(!f.match(/^(http(s)?)|(file):/i)&&!n(f,"/"))f=q.__pagePath+f;return h(f)},indexMapping:function(f){for(var c=0;c<f.length;c++)if(f[c].match(/\/$/))f[c]+="index";return f}});var n=a.startsWith,h=o.normalizePath}})(KISSY,
KISSY.__loader,KISSY.__loaderUtils);
(function(a,q){function o(){var c=true,b;for(b in f){var e=f[b],g=e.node;e=e.callbacks;var j=false;if(n){if(g.sheet)j=true}else if(g.sheet)try{if(g.sheet.cssRules)j=true}catch(l){if(l.name==="NS_ERROR_DOM_SECURITY_ERR")j=true}if(j){a.each(e,function(k){k.call(g)});delete f[b]}else c=false}h=c?null:setTimeout(o,100)}if(!a.use){var n=q.isWebKit,h=null,f={};a.mix(q,{scriptOnload:document.addEventListener?function(c,b){if(q.isLinkNode(c))return q.styleOnload(c,b);c.addEventListener("load",b,false)}:function(c,
b){if(q.isLinkNode(c))return q.styleOnload(c,b);var e=c.onreadystatechange;c.onreadystatechange=function(){if(/loaded|complete/i.test(c.readyState)){c.onreadystatechange=null;e&&e();b.call(this)}}},styleOnload:window.attachEvent?function(c,b){function e(){c.detachEvent("onload",e);b.call(c)}c.attachEvent("onload",e)}:function(c,b){var e=c.href;if(f[e])f[e].callbacks.push(b);else f[e]={node:c,callbacks:[b]};h||o()}})}})(KISSY,KISSY.__loaderUtils);
(function(a,q){if(!("require"in this)){var o=q.scriptOnload;a.mix(a,{getStyle:function(n,h,f){var c=document,b=c.head||c.getElementsByTagName("head")[0];c=c.createElement("link");var e=h;if(a.isPlainObject(e)){h=e.success;f=e.charset}c.href=n;c.rel="stylesheet";if(f)c.charset=f;h&&q.scriptOnload(c,h);b.appendChild(c);return c},getScript:function(n,h,f){if(q.isCss(n))return a.getStyle(n,h,f);var c=document,b=c.head||c.getElementsByTagName("head")[0],e=c.createElement("script"),g=h,j,l,k;if(a.isPlainObject(g)){h=
g.success;j=g.error;l=g.timeout;f=g.charset}e.src=n;e.async=true;if(f)e.charset=f;if(h||j){o(e,function(){if(k){k.cancel();k=undefined}a.isFunction(h)&&h.call(e)});if(a.isFunction(j)){c.addEventListener&&e.addEventListener("error",function(){if(k){k.cancel();k=undefined}j.call(e)},false);k=a.later(function(){k=undefined;j()},(l||this.Config.timeout)*1E3)}}b.insertBefore(e,b.firstChild);return e}})}})(KISSY,KISSY.__loaderUtils);
(function(a,q,o){if(!("require"in this)){var n=o.IE;a.__HOST.document.getElementsByTagName("head");var h=a.mix;a.mix(q,{add:function(f,c,b){var e=this.Env.mods,g;if(a.isString(f)&&!b&&a.isPlainObject(c)){g={};g[f]=c;f=g}if(a.isPlainObject(f)){a.each(f,function(l,k){l.name=k;e[k]&&h(l,e[k],false)});h(e,f);return this}if(a.isString(f)){var j;if(b&&(j=b.host)){f=e[j];if(!f)return this;if(this.__isAttached(j))c.call(this,this);else{f.fns=f.fns||[];f.fns.push(c)}return this}this.__registerModule(f,c,b);
if(b&&b.attach===false)return this;c=e[f];f=o.normalDepModuleName(f,c.requires);if(this.__isAttached(f))this.__attachMod(c);else if(this.Config.debug&&!c)for(f=a.makeArray(f).length-1;f>=0;f--);return this}if(a.isFunction(f)){b=c;c=f;if(n){f=this.__findModuleNameByInteractive();this.__registerModule(f,c,b);this.__startLoadModuleName=null;this.__startLoadTime=0}else this.__currentModule={def:c,config:b};return this}return this}})}})(KISSY,KISSY.__loader,KISSY.__loaderUtils,KISSY.__loaderData);
(function(a,q,o,n){"require"in this||a.mix(q,{__buildPath:function(h,f){function c(e,g){if(!h[e]&&h[g]){h[g]=o.normalDepModuleName(h.name,h[g]);h[e]=(f||b.base)+h[g]}if(h[e]&&b.debug)h[e]=h[e].replace(/-min/ig,"");if(h[e]&&!h[e].match(/\?t=/)&&h.tag)h[e]+="?t="+h.tag}var b=this.Config;c("fullpath","path");h.cssfullpath!==n.LOADED&&c("cssfullpath","csspath")}})})(KISSY,KISSY.__loader,KISSY.__loaderUtils,KISSY.__loaderData);
(function(a,q){"require"in this||a.mix(q,{__mixMods:function(o){var n=this.Env.mods,h=o.Env.mods,f;for(f in h)this.__mixMod(n,h,f,o)},__mixMod:function(o,n,h,f){var c=o[h]||{},b=c.status;a.mix(c,a.clone(n[h]));if(b)c.status=b;f&&this.__buildPath(c,f.Config.base);o[h]=c}})})(KISSY,KISSY.__loader,KISSY.__loaderUtils);
(function(a,q,o){"require"in this||a.mix(q,{__findModuleNameByInteractive:function(){for(var n=document.getElementsByTagName("script"),h,f,c=0;c<n.length;c++){f=n[c];if(f.readyState=="interactive"){h=f;break}}if(!h)return this.__startLoadModuleName;n=h.src;if(n.lastIndexOf(this.Config.base,0)==0)return o.removePostfix(n.substring(this.Config.base.length));h=this.__packages;for(var b in h){f=h[b].path;if(h.hasOwnProperty(b)&&n.lastIndexOf(f,0)==0)return o.removePostfix(n.substring(f.length))}}})})(KISSY,
KISSY.__loader,KISSY.__loaderUtils);
(function(a,q,o,n){if(!("require"in this)){var h=o.IE;a.__HOST.document.getElementsByTagName("head");var f=n.LOADING,c=n.LOADED,b=n.ERROR,e=n.ATTACHED;a.mix(q,{__load:function(g,j,l){function k(){x[t]=c;if(g.status!==b){if(g.status!==e)g.status=c;j()}}var r=this,t=g.fullpath,w=o.isCss(t),x=r.Env._loadQueue,z=x[t];g.status=g.status||0;if(g.status<f&&z)g.status=z.nodeName?f:c;if(a.isString(g.cssfullpath)){a.getScript(g.cssfullpath);g.cssfullpath=g.csspath=c}if(g.status<f&&t){g.status=f;if(h&&!w){r.__startLoadModuleName=
g.name;r.__startLoadTime=Number(+new Date)}z=a.getScript(t,{success:function(){if(!w){if(r.__currentModule){r.__registerModule(g.name,r.__currentModule.def,r.__currentModule.config);r.__currentModule=null}l.global&&r.__mixMod(r.Env.mods,l.global.Env.mods,g.name,l.global);if(!(g.fns&&g.fns.length>0))g.status=b}k()},error:function(){g.status=b;k()},charset:g.charset});x[t]=z}else g.status===f?o.scriptOnload(z,k):j()}})}})(KISSY,KISSY.__loader,KISSY.__loaderUtils,KISSY.__loaderData);
(function(a,q,o){if(!("require"in this)){a.__HOST.document.getElementsByTagName("head");var n=o.ATTACHED;o=a.mix;o(q,{__pagePath:location.href.replace(/[^/]*$/i,""),__currentModule:null,__startLoadTime:0,__startLoadModuleName:null,__isAttached:function(h){var f=this.Env.mods,c=true;a.each(h,function(b){b=f[b];if(!b||b.status!==n)return c=false});return c}})}})(KISSY,KISSY.__loader,KISSY.__loaderData);
(function(a,q,o){if(!("require"in this)){a.__HOST.document.getElementsByTagName("head");a.mix(q,{_packages:function(n){var h;h=this.__packages=this.__packages||{};a.each(n,function(f){h[f.name]=f;f.path=f.path&&o.normalBasePath(f.path);f.tag=f.tag&&encodeURIComponent(f.tag)})},__getPackagePath:function(n){if(n.packagepath)return n.packagepath;var h=this._combine(n.name),f=this.__packages||{},c="",b;for(b in f)if(f.hasOwnProperty(b)&&a.startsWith(h,b)&&b.length>c)c=b;f=(h=f[c])&&h.path||this.Config.base;
n.charset=h&&h.charset;n.tag=h?h.tag:encodeURIComponent(a.Config.tag||a.buildTime);return n.packagepath=f},_combine:function(n,h){var f=this,c;if(a.isObject(n))a.each(n,function(b,e){a.each(b,function(g){f._combine(g,e)})});else{c=f.__combines=f.__combines||{};if(h)c[n]=h;else return c[n]||n}}})}})(KISSY,KISSY.__loader,KISSY.__loaderUtils);
(function(a,q,o){if(!("require"in this)){a.__HOST.document.getElementsByTagName("head");var n=o.LOADED,h=a.mix;a.mix(q,{__registerModule:function(f,c,b){b=b||{};var e=this.Env.mods,g=e[f]||{};h(g,{name:f,status:n});g.fns=g.fns||[];g.fns.push(c);h(e[f]=g,b)}})}})(KISSY,KISSY.__loader,KISSY.__loaderData);
(function(a,q,o,n){if(!("require"in this)){a.__HOST.document.getElementsByTagName("head");var h=n.LOADED,f=n.ATTACHED;a.mix(q,{use:function(c,b,e){c=c.replace(/\s+/g,"").split(",");o.indexMapping(c);e=e||{};var g=this,j;e.global&&g.__mixMods(e.global);if(g.__isAttached(c)){var l=g.__getModules(c);b&&b.apply(g,l)}else{a.each(c,function(k){g.__attachModByName(k,function(){if(!j&&g.__isAttached(c)){j=true;var r=g.__getModules(c);b&&b.apply(g,r)}},e)});return g}},__getModules:function(c){var b=this,e=
[b];a.each(c,function(g){o.isCss(g)||e.push(b.require(g))});return e},require:function(c){c=a.Env.mods[c];var b=a.onRequire&&a.onRequire(c);if(b!==undefined)return b;return c&&c.value},__attachModByName:function(c,b,e){var g=this.Env.mods,j=g[c];if(!j){j=this.Config.componentJsName||function(l){var k="js";if(/(.+)\.(js|css)$/i.test(l)){k=RegExp.$2;l=RegExp.$1}return l+"-min."+k};j={path:a.isFunction(j)?j(this._combine(c)):j,charset:"utf-8"};g[c]=j}j.name=c;j&&j.status===f||this.__attach(j,b,e)},__attach:function(c,
b,e){function g(){if(!r&&j.__isAttached(c.requires)){c.status===h&&j.__attachMod(c);if(c.status===f){r=true;b()}}}var j=this,l=j.Env.mods,k=(c.requires||[]).concat();c.requires=k;a.each(k,function(t,w,x){t=x[w]=o.normalDepModuleName(c.name,t);(w=l[t])&&w.status===f||j.__attachModByName(t,g,e)});j.__buildPath(c,j.__getPackagePath(c));j.__load(c,function(){c.requires=c.requires||[];a.each(c.requires,function(t,w,x){t=x[w]=o.normalDepModuleName(c.name,t);w=l[t];x=a.inArray(t,k);w&&w.status===f||x||j.__attachModByName(t,
g,e)});g()},e);var r=false},__attachMod:function(c){var b=this,e=c.fns;e&&a.each(e,function(g){g=a.isFunction(g)?g.apply(b,b.__getModules(c.requires)):g;c.value=c.value||g});c.status=f}})}})(KISSY,KISSY.__loader,KISSY.__loaderUtils,KISSY.__loaderData);
(function(a,q,o){function n(b){var e=b.src,g=b.getAttribute("data-combo-prefix")||"??";b=b.getAttribute("data-combo-sep")||",";b=e.split(b);var j,l=b[0];g=l.indexOf(g);if(g==-1)j=e.replace(h,"$1");else{j=l.substring(0,g);e=l.substring(g+2,l.length);if(e.match(f))j+=e.replace(h,"$1");else a.each(b,function(k){if(k.match(f)){j+=k.replace(h,"$1");return false}})}if(!j.match(/^(http(s)?)|(file):/i)&&!a.startsWith(j,"/"))j=c+j;return j}if(!("require"in this)){a.mix(a,q);var h=/^(.*)(seed|kissy)(-aio)?(-min)?\.js[^/]*/i,
f=/(seed|kissy)(-aio)?(-min)?\.js/i,c=a.__pagePath;a.__initLoader=function(){this.Env.mods=this.Env.mods||{};this.Env._loadQueue={}};a.__initLoader();(function(){var b=document.getElementsByTagName("script");b=n(b[b.length-1]);a.Config.base=o.normalBasePath(b);a.Config.timeout=10})();a.each(q,function(b,e){a.__APP_MEMBERS.push(e)});a.__APP_INIT_METHODS.push("__initLoader")}})(KISSY,KISSY.__loader,KISSY.__loaderUtils);
(function(a){function q(){var l=h.documentElement.doScroll,k=l?"onreadystatechange":"DOMContentLoaded",r=function(){o()};e=true;if(h.readyState==="complete")o();else{if(h.addEventListener){var t=function(){h.removeEventListener(k,t,false);o()};h.addEventListener(k,t,false);n.addEventListener("load",r,false)}else{var w=function(){if(h.readyState==="complete"){h.detachEvent(k,w);o()}};h.attachEvent(k,w);n.attachEvent("onload",r);r=false;try{r=n.frameElement==null}catch(x){}if(l&&r){var z=function(){try{l("left");
o()}catch(E){setTimeout(z,50)}};z()}}return 0}}function o(){if(!c){c=true;if(b){for(var l,k=0;l=b[k++];)l.call(n,a);b=null}}}var n=a.__HOST,h=n.document,f=h.documentElement,c=false,b=[],e=false,g=/^#?([\w-]+)$/,j=/\S/;a.mix(a,{isWindow:function(l){return a.type(l)==="object"&&"setInterval"in l&&"document"in l&&l.document.nodeType==9},parseXML:function(l){var k;if(window.DOMParser)k=(new DOMParser).parseFromString(l,"text/xml");else{k=new ActiveXObject("Microsoft.XMLDOM");k.async="false";k.loadXML(l)}return k},
globalEval:function(l){if(l&&j.test(l)){var k=h.getElementsByTagName("head")[0]||f,r=h.createElement("script");r.text=l;k.insertBefore(r,k.firstChild);k.removeChild(r)}},ready:function(l){e||q();c?l.call(n,this):b.push(l);return this},available:function(l,k){if((l=(l+"").match(g)[1])&&a.isFunction(k))var r=1,t=a.later(function(){if(h.getElementById(l)&&(k()||1)||++r>500)t.cancel()},40,true)}});if(location&&(location.search||"").indexOf("ks-debug")!==-1)a.Config.debug=true})(KISSY);
(function(a){a.config({combine:{core:["dom","ua","event","node","json","ajax","anim","base","cookie"]}})})(KISSY);
