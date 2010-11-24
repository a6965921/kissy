/*
Copyright 2010, KISSY UI Library v1.1.6
MIT Licensed
build time: Nov 24 22:56
*/
KISSY.add("ajax",function(e,B){function h(a){a=e.merge(J,a);if(a.url){if(a.data&&!e.isString(a.data))a.data=e.param(a.data);a.context=a.context||a;var c,d=m,f,i=a.type.toUpperCase();if(a.dataType===w){c=a.jsonpCallback||w+e.now();a.url=a.url+(a.url.indexOf("?")===-1?"?":"&")+(a.jsonp+"="+c);a.dataType=C;var n=r[c];r[c]=function(j){if(e.isFunction(n))n(j);else{r[c]=B;try{delete r[c]}catch(g){}}o([m,p],j,d,b,a)}}if(a.data&&i===x)a.url=a.url+(a.url.indexOf("?")===-1?"?":"&")+a.data;if(a.dataType===C){k(D,
a);e.getScript(a.url,c?null:function(){o([m,p],t,d,b,a)});k(E,a)}else{var q=false,b=a.xhr();k(D,a);b.open(i,a.url,a.async);try{if(a.data||a.contentType)b.setRequestHeader(F,a.contentType);b.setRequestHeader("Accept",a.dataType&&a.accepts[a.dataType]?a.accepts[a.dataType]+", */*; q=0.01":a.accepts._default)}catch(L){}b.onreadystatechange=function(j){if(!b||b.readyState===0||j==="abort"){q||o(p,null,s,b,a);q=true;if(b)b.onreadystatechange=G}else if(!q&&b&&(b.readyState===4||j===u)){q=true;b.onreadystatechange=
G;var g;if(j===u)g=u;else{a:{try{g=b.status>=200&&b.status<300||b.status===304||b.status===1223;break a}catch(M){}g=false}g=g?m:s}d=g;try{g=b;var v=a.dataType,y=t,H,l=g;if(!e.isString(l)){y=g.getResponseHeader(F)||t;l=(H=v==="xml"||!v&&y.indexOf("xml")>=0)?g.responseXML:g.responseText;if(H&&l.documentElement.nodeName===z)throw z;}if(e.isString(l))if(v===A||!v&&y.indexOf(A)>=0)l=e.JSON.parse(l);f=l}catch(N){d=z}o([d===m?m:s,p],f,d,b,a);if(j===u){b.abort();k(K,a)}if(a.async)b=null}};k(E,a);try{b.send(i===
I?a.data:null)}catch(O){o([s,p],f,s,b,a)}a.async||k(p,a);return b}}}function o(a,c,d,f,i){if(e.isArray(a))e.each(a,function(n){o(n,c,d,f,i)});else{d===a&&i[a]&&i[a].call(i.context,c,d,f);k(a,i)}}function k(a,c){h.fire(a,{ajaxConfig:c})}var r=window,G=function(){},x="GET",I="POST",F="Content-Type",A="json",w=A+"p",C="script",t="",D="start",E="send",K="stop",m="success",p="complete",s="error",u="timeout",z="parsererror",J={type:x,url:t,contentType:"application/x-www-form-urlencoded",async:true,data:null,
xhr:r.XMLHttpRequest?function(){return new window.XMLHttpRequest}:function(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"},jsonp:"callback"};e.mix(h,e.EventTarget);e.mix(h,{get:function(a,c,d,f,i){if(e.isFunction(c)){f=d;d=c}h({type:i||x,url:a,data:c,success:function(n,q,b){d&&d.call(this,n,q,b)},
dataType:f});return this},post:function(a,c,d,f){if(e.isFunction(c)){f=d;d=c;c=B}return h.get(a,c,d,f,I)},jsonp:function(a,c,d){if(e.isFunction(c))d=c;return h.get(a,c,d,w)}});h.getScript=e.getScript;e.ajax=h.ajax=h;e.jsonp=h.jsonp;e.IO=h});
