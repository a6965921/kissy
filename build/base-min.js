/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 4 18:15
*/
KISSY.add("base/attribute",function(e,f){function g(){this.__attrs={};this.__attrVals={}}function h(a){a+="";return a.charAt(0).toUpperCase()+a.substring(1)}e.augment(g,{__getDefAttrs:function(){return e.clone(this.__attrs)},addAttr:function(a,b,c){if(this.__attrs[a])e.mix(this.__attrs[a],b,c);else this.__attrs[a]=e.clone(b||{});return this},hasAttr:function(a){return a&&this.__attrs.hasOwnProperty(a)},removeAttr:function(a){if(this.hasAttr(a)){delete this.__attrs[a];delete this.__attrVals[a]}return this},
set:function(a,b){var c=this.get(a);if(c!==b)if(false!==this.__fireAttrChange("before",a,c,b)){this.__set(a,b);this.__fireAttrChange("after",a,c,this.__attrVals[a]);return this}},__fireAttrChange:function(a,b,c,d){return this.fire(a+h(b)+"Change",{attrName:b,prevVal:c,newVal:d})},__set:function(a,b){var c,d=(this.__attrs[a]=this.__attrs[a]||{}).setter;if(d)c=d.call(this,b);if(c!==f)b=c;this.__attrVals[a]=b},get:function(a){var b;b=(b=this.__attrs[a])&&b.getter;a=a in this.__attrVals?this.__attrVals[a]:
this.__getDefAttrVal(a);if(b)a=b.call(this,a);return a},__getDefAttrVal:function(a){a=this.__attrs[a];var b;if(a){if(b=a.valueFn){b=b.call(this);if(b!==f)a.value=b;delete a.valueFn}return a.value}},reset:function(a){if(this.hasAttr(a))return this.set(a,this.__getDefAttrVal(a));for(a in this.__attrs)this.hasAttr(a)&&this.reset(a);return this}});g.__capitalFirst=h;return g});
KISSY.add("base/base",function(e,f,g){function h(a){f.call(this);for(var b=this.constructor;b;){var c=b.ATTRS;if(c){var d=void 0;for(d in c)c.hasOwnProperty(d)&&this.addAttr(d,c[d],false)}b=b.superclass?b.superclass.constructor:null}if(a)for(var i in a)a.hasOwnProperty(i)&&this.__set(i,a[i])}e.augment(h,g.Target,f);return h},{requires:["./attribute","event"]});KISSY.add("base",function(e,f){return f},{requires:["base/base"]});
