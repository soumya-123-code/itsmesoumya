/*! For license information please see 533.cee4e2f6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmyportfolio=self.webpackChunkmyportfolio||[]).push([[533],{1533:(e,t,r)=>{r.d(t,{A:()=>mr});var n=r(5043),i=r(8168),s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};const o="object"===("undefined"===typeof window?"undefined":s(window))&&"object"===("undefined"===typeof document?"undefined":s(document))&&9===document.nodeType;function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:t+""}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function c(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var f=r(5540),h=r(9417),d=r(8587),p={}.constructor;function y(e){if(null==e||"object"!==typeof e)return e;if(Array.isArray(e))return e.map(y);if(e.constructor!==p)return e;var t={};for(var r in e)t[r]=y(e[r]);return t}function v(e,t,r){void 0===e&&(e="unnamed");var n=r.jss,i=y(t),s=n.plugins.onCreateRule(e,i,r);return s||(e[0],null)}var g=function(e,t){for(var r="",n=0;n<e.length&&"!important"!==e[n];n++)r&&(r+=t),r+=e[n];return r},m=function(e){if(!Array.isArray(e))return e;var t="";if(Array.isArray(e[0]))for(var r=0;r<e.length&&"!important"!==e[r];r++)t&&(t+=", "),t+=g(e[r]," ");else t=g(e,", ");return"!important"===e[e.length-1]&&(t+=" !important"),t};function b(e){return e&&!1===e.format?{linebreak:"",space:""}:{linebreak:"\n",space:" "}}function k(e,t){for(var r="",n=0;n<t;n++)r+="  ";return r+e}function S(e,t,r){void 0===r&&(r={});var n="";if(!t)return n;var i=r.indent,s=void 0===i?0:i,o=t.fallbacks;!1===r.format&&(s=-1/0);var a=b(r),u=a.linebreak,l=a.space;if(e&&s++,o)if(Array.isArray(o))for(var c=0;c<o.length;c++){var f=o[c];for(var h in f){var d=f[h];null!=d&&(n&&(n+=u),n+=k(h+":"+l+m(d)+";",s))}}else for(var p in o){var y=o[p];null!=y&&(n&&(n+=u),n+=k(p+":"+l+m(y)+";",s))}for(var v in t){var g=t[v];null!=g&&"fallbacks"!==v&&(n&&(n+=u),n+=k(v+":"+l+m(g)+";",s))}return(n||r.allowEmpty)&&e?(n&&(n=""+u+n+u),k(""+e+l+"{"+n,--s)+k("}",s)):n}var x=/([[\].#*$><+~=|^:(),"'`\s])/g,w="undefined"!==typeof CSS&&CSS.escape,R=function(e){return w?w(e):e.replace(x,"\\$1")},P=function(){function e(e,t,r){this.type="style",this.isProcessed=!1;var n=r.sheet,i=r.Renderer;this.key=e,this.options=r,this.style=t,n?this.renderer=n.renderer:i&&(this.renderer=new i)}return e.prototype.prop=function(e,t,r){if(void 0===t)return this.style[e];var n=!!r&&r.force;if(!n&&this.style[e]===t)return this;var i=t;r&&!1===r.process||(i=this.options.jss.plugins.onChangeValue(t,e,this));var s=null==i||!1===i,o=e in this.style;if(s&&!o&&!n)return this;var a=s&&o;if(a?delete this.style[e]:this.style[e]=i,this.renderable&&this.renderer)return a?this.renderer.removeProperty(this.renderable,e):this.renderer.setProperty(this.renderable,e,i),this;var u=this.options.sheet;return u&&u.attached,this},e}(),C=function(e){function t(t,r,n){var i;i=e.call(this,t,r,n)||this;var s=n.selector,o=n.scoped,a=n.sheet,u=n.generateId;return s?i.selectorText=s:!1!==o&&(i.id=u((0,h.A)((0,h.A)(i)),a),i.selectorText="."+R(i.id)),i}(0,f.A)(t,e);var r=t.prototype;return r.applyTo=function(e){var t=this.renderer;if(t){var r=this.toJSON();for(var n in r)t.setProperty(e,n,r[n])}return this},r.toJSON=function(){var e={};for(var t in this.style){var r=this.style[t];"object"!==typeof r?e[t]=r:Array.isArray(r)&&(e[t]=m(r))}return e},r.toString=function(e){var t=this.options.sheet,r=!!t&&t.options.link?(0,i.A)({},e,{allowEmpty:!0}):e;return S(this.selectorText,this.style,r)},c(t,[{key:"selector",set:function(e){if(e!==this.selectorText){this.selectorText=e;var t=this.renderer,r=this.renderable;if(r&&t)t.setSelector(r,e)||t.replaceRule(r,this)}},get:function(){return this.selectorText}}]),t}(P),A={onCreateRule:function(e,t,r){return"@"===e[0]||r.parent&&"keyframes"===r.parent.type?null:new C(e,t,r)}},j={indent:1,children:!0},O=/@([\w-]+)/,I=function(){function e(e,t,r){this.type="conditional",this.isProcessed=!1,this.key=e;var n=e.match(O);for(var s in this.at=n?n[1]:"unknown",this.query=r.name||"@"+this.at,this.options=r,this.rules=new ee((0,i.A)({},r,{parent:this})),t)this.rules.add(s,t[s]);this.rules.process()}var t=e.prototype;return t.getRule=function(e){return this.rules.get(e)},t.indexOf=function(e){return this.rules.indexOf(e)},t.addRule=function(e,t,r){var n=this.rules.add(e,t,r);return n?(this.options.jss.plugins.onProcessRule(n),n):null},t.replaceRule=function(e,t,r){var n=this.rules.replace(e,t,r);return n&&this.options.jss.plugins.onProcessRule(n),n},t.toString=function(e){void 0===e&&(e=j);var t=b(e).linebreak;if(null==e.indent&&(e.indent=j.indent),null==e.children&&(e.children=j.children),!1===e.children)return this.query+" {}";var r=this.rules.toString(e);return r?this.query+" {"+t+r+t+"}":""},e}(),M=/@container|@media|@supports\s+/,N={onCreateRule:function(e,t,r){return M.test(e)?new I(e,t,r):null}},E={indent:1,children:!0},$=/@keyframes\s+([\w-]+)/,T=function(){function e(e,t,r){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var n=e.match($);n&&n[1]?this.name=n[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=r;var s=r.scoped,o=r.sheet,a=r.generateId;for(var u in this.id=!1===s?this.name:R(a(this,o)),this.rules=new ee((0,i.A)({},r,{parent:this})),t)this.rules.add(u,t[u],(0,i.A)({},r,{parent:this}));this.rules.process()}return e.prototype.toString=function(e){void 0===e&&(e=E);var t=b(e).linebreak;if(null==e.indent&&(e.indent=E.indent),null==e.children&&(e.children=E.children),!1===e.children)return this.at+" "+this.id+" {}";var r=this.rules.toString(e);return r&&(r=""+t+r+t),this.at+" "+this.id+" {"+r+"}"},e}(),q=/@keyframes\s+/,V=/\$([\w-]+)/g,z=function(e,t){return"string"===typeof e?e.replace(V,(function(e,r){return r in t?t[r]:e})):e},G=function(e,t,r){var n=e[t],i=z(n,r);i!==n&&(e[t]=i)},W={onCreateRule:function(e,t,r){return"string"===typeof e&&q.test(e)?new T(e,t,r):null},onProcessStyle:function(e,t,r){return"style"===t.type&&r?("animation-name"in e&&G(e,"animation-name",r.keyframes),"animation"in e&&G(e,"animation",r.keyframes),e):e},onChangeValue:function(e,t,r){var n=r.options.sheet;if(!n)return e;switch(t){case"animation":case"animation-name":return z(e,n.keyframes);default:return e}}},U=function(e){function t(){return e.apply(this,arguments)||this}return(0,f.A)(t,e),t.prototype.toString=function(e){var t=this.options.sheet,r=!!t&&t.options.link?(0,i.A)({},e,{allowEmpty:!0}):e;return S(this.key,this.style,r)},t}(P),J={onCreateRule:function(e,t,r){return r.parent&&"keyframes"===r.parent.type?new U(e,t,r):null}},B=function(){function e(e,t,r){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=e,this.style=t,this.options=r}return e.prototype.toString=function(e){var t=b(e).linebreak;if(Array.isArray(this.style)){for(var r="",n=0;n<this.style.length;n++)r+=S(this.at,this.style[n]),this.style[n+1]&&(r+=t);return r}return S(this.at,this.style,e)},e}(),L=/@font-face/,D={onCreateRule:function(e,t,r){return L.test(e)?new B(e,t,r):null}},F=function(){function e(e,t,r){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=e,this.style=t,this.options=r}return e.prototype.toString=function(e){return S(this.key,this.style,e)},e}(),H={onCreateRule:function(e,t,r){return"@viewport"===e||"@-ms-viewport"===e?new F(e,t,r):null}},Z=function(){function e(e,t,r){this.type="simple",this.isProcessed=!1,this.key=e,this.value=t,this.options=r}return e.prototype.toString=function(e){if(Array.isArray(this.value)){for(var t="",r=0;r<this.value.length;r++)t+=this.key+" "+this.value[r]+";",this.value[r+1]&&(t+="\n");return t}return this.key+" "+this.value+";"},e}(),K={"@charset":!0,"@import":!0,"@namespace":!0},Q={onCreateRule:function(e,t,r){return e in K?new Z(e,t,r):null}},X=[A,N,W,J,D,H,Q],Y={process:!0},_={force:!0,process:!0},ee=function(){function e(e){this.map={},this.raw={},this.index=[],this.counter=0,this.options=e,this.classes=e.classes,this.keyframes=e.keyframes}var t=e.prototype;return t.add=function(e,t,r){var n=this.options,s=n.parent,o=n.sheet,a=n.jss,u=n.Renderer,l=n.generateId,c=n.scoped,f=(0,i.A)({classes:this.classes,parent:s,sheet:o,jss:a,Renderer:u,generateId:l,scoped:c,name:e,keyframes:this.keyframes,selector:void 0},r),h=e;e in this.raw&&(h=e+"-d"+this.counter++),this.raw[h]=t,h in this.classes&&(f.selector="."+R(this.classes[h]));var d=v(h,t,f);if(!d)return null;this.register(d);var p=void 0===f.index?this.index.length:f.index;return this.index.splice(p,0,d),d},t.replace=function(e,t,r){var n=this.get(e),s=this.index.indexOf(n);n&&this.remove(n);var o=r;return-1!==s&&(o=(0,i.A)({},r,{index:s})),this.add(e,t,o)},t.get=function(e){return this.map[e]},t.remove=function(e){this.unregister(e),delete this.raw[e.key],this.index.splice(this.index.indexOf(e),1)},t.indexOf=function(e){return this.index.indexOf(e)},t.process=function(){var e=this.options.jss.plugins;this.index.slice(0).forEach(e.onProcessRule,e)},t.register=function(e){this.map[e.key]=e,e instanceof C?(this.map[e.selector]=e,e.id&&(this.classes[e.key]=e.id)):e instanceof T&&this.keyframes&&(this.keyframes[e.name]=e.id)},t.unregister=function(e){delete this.map[e.key],e instanceof C?(delete this.map[e.selector],delete this.classes[e.key]):e instanceof T&&delete this.keyframes[e.name]},t.update=function(){var e,t,r;if("string"===typeof(arguments.length<=0?void 0:arguments[0])?(e=arguments.length<=0?void 0:arguments[0],t=arguments.length<=1?void 0:arguments[1],r=arguments.length<=2?void 0:arguments[2]):(t=arguments.length<=0?void 0:arguments[0],r=arguments.length<=1?void 0:arguments[1],e=null),e)this.updateOne(this.get(e),t,r);else for(var n=0;n<this.index.length;n++)this.updateOne(this.index[n],t,r)},t.updateOne=function(t,r,n){void 0===n&&(n=Y);var i=this.options,s=i.jss.plugins,o=i.sheet;if(t.rules instanceof e)t.rules.update(r,n);else{var a=t.style;if(s.onUpdate(r,t,o,n),n.process&&a&&a!==t.style){for(var u in s.onProcessStyle(t.style,t,o),t.style){var l=t.style[u];l!==a[u]&&t.prop(u,l,_)}for(var c in a){var f=t.style[c],h=a[c];null==f&&f!==h&&t.prop(c,null,_)}}}},t.toString=function(e){for(var t="",r=this.options.sheet,n=!!r&&r.options.link,i=b(e).linebreak,s=0;s<this.index.length;s++){var o=this.index[s].toString(e);(o||n)&&(t&&(t+=i),t+=o)}return t},e}(),te=function(){function e(e,t){for(var r in this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=(0,i.A)({},t,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),t.Renderer&&(this.renderer=new t.Renderer(this)),this.rules=new ee(this.options),e)this.rules.add(r,e[r]);this.rules.process()}var t=e.prototype;return t.attach=function(){return this.attached||(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy()),this},t.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},t.addRule=function(e,t,r){var n=this.queue;this.attached&&!n&&(this.queue=[]);var i=this.rules.add(e,t,r);return i?(this.options.jss.plugins.onProcessRule(i),this.attached?this.deployed?(n?n.push(i):(this.insertRule(i),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0)),i):i:(this.deployed=!1,i)):null},t.replaceRule=function(e,t,r){var n=this.rules.get(e);if(!n)return this.addRule(e,t,r);var i=this.rules.replace(e,t,r);return i&&this.options.jss.plugins.onProcessRule(i),this.attached?this.deployed?(this.renderer&&(i?n.renderable&&this.renderer.replaceRule(n.renderable,i):this.renderer.deleteRule(n)),i):i:(this.deployed=!1,i)},t.insertRule=function(e){this.renderer&&this.renderer.insertRule(e)},t.addRules=function(e,t){var r=[];for(var n in e){var i=this.addRule(n,e[n],t);i&&r.push(i)}return r},t.getRule=function(e){return this.rules.get(e)},t.deleteRule=function(e){var t="object"===typeof e?e:this.rules.get(e);return!(!t||this.attached&&!t.renderable)&&(this.rules.remove(t),!(this.attached&&t.renderable&&this.renderer)||this.renderer.deleteRule(t.renderable))},t.indexOf=function(e){return this.rules.indexOf(e)},t.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},t.update=function(){var e;return(e=this.rules).update.apply(e,arguments),this},t.updateOne=function(e,t,r){return this.rules.updateOne(e,t,r),this},t.toString=function(e){return this.rules.toString(e)},e}(),re=function(){function e(){this.plugins={internal:[],external:[]},this.registry={}}var t=e.prototype;return t.onCreateRule=function(e,t,r){for(var n=0;n<this.registry.onCreateRule.length;n++){var i=this.registry.onCreateRule[n](e,t,r);if(i)return i}return null},t.onProcessRule=function(e){if(!e.isProcessed){for(var t=e.options.sheet,r=0;r<this.registry.onProcessRule.length;r++)this.registry.onProcessRule[r](e,t);e.style&&this.onProcessStyle(e.style,e,t),e.isProcessed=!0}},t.onProcessStyle=function(e,t,r){for(var n=0;n<this.registry.onProcessStyle.length;n++)t.style=this.registry.onProcessStyle[n](t.style,t,r)},t.onProcessSheet=function(e){for(var t=0;t<this.registry.onProcessSheet.length;t++)this.registry.onProcessSheet[t](e)},t.onUpdate=function(e,t,r,n){for(var i=0;i<this.registry.onUpdate.length;i++)this.registry.onUpdate[i](e,t,r,n)},t.onChangeValue=function(e,t,r){for(var n=e,i=0;i<this.registry.onChangeValue.length;i++)n=this.registry.onChangeValue[i](n,t,r);return n},t.use=function(e,t){void 0===t&&(t={queue:"external"});var r=this.plugins[t.queue];-1===r.indexOf(e)&&(r.push(e),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce((function(e,t){for(var r in t)r in e&&e[r].push(t[r]);return e}),{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},e}(),ne=function(){function e(){this.registry=[]}var t=e.prototype;return t.add=function(e){var t=this.registry,r=e.options.index;if(-1===t.indexOf(e))if(0===t.length||r>=this.index)t.push(e);else for(var n=0;n<t.length;n++)if(t[n].options.index>r)return void t.splice(n,0,e)},t.reset=function(){this.registry=[]},t.remove=function(e){var t=this.registry.indexOf(e);this.registry.splice(t,1)},t.toString=function(e){for(var t=void 0===e?{}:e,r=t.attached,n=(0,d.A)(t,["attached"]),i=b(n).linebreak,s="",o=0;o<this.registry.length;o++){var a=this.registry[o];null!=r&&a.attached!==r||(s&&(s+=i),s+=a.toString(n))}return s},c(e,[{key:"index",get:function(){return 0===this.registry.length?0:this.registry[this.registry.length-1].options.index}}]),e}(),ie=new ne,se="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window&&window.Math===Math?window:"undefined"!==typeof self&&self.Math===Math?self:Function("return this")(),oe="2f1acc6c3a606b082e5eef5e54414ffb";null==se[oe]&&(se[oe]=0);var ae=se[oe]++,ue=function(e){void 0===e&&(e={});var t=0;return function(r,n){t+=1;var i="",s="";return n&&(n.options.classNamePrefix&&(s=n.options.classNamePrefix),null!=n.options.jss.id&&(i=String(n.options.jss.id))),e.minify?""+(s||"c")+ae+i+t:s+r.key+"-"+ae+(i?"-"+i:"")+"-"+t}},le=function(e){var t;return function(){return t||(t=e()),t}},ce=function(e,t){try{return e.attributeStyleMap?e.attributeStyleMap.get(t):e.style.getPropertyValue(t)}catch(r){return""}},fe=function(e,t,r){try{var n=r;if(Array.isArray(r)&&(n=m(r)),e.attributeStyleMap)e.attributeStyleMap.set(t,n);else{var i=n?n.indexOf("!important"):-1,s=i>-1?n.substr(0,i-1):n;e.style.setProperty(t,s,i>-1?"important":"")}}catch(o){return!1}return!0},he=function(e,t){try{e.attributeStyleMap?e.attributeStyleMap.delete(t):e.style.removeProperty(t)}catch(r){}},de=function(e,t){return e.selectorText=t,e.selectorText===t},pe=le((function(){return document.querySelector("head")}));function ye(e){var t=ie.registry;if(t.length>0){var r=function(e,t){for(var r=0;r<e.length;r++){var n=e[r];if(n.attached&&n.options.index>t.index&&n.options.insertionPoint===t.insertionPoint)return n}return null}(t,e);if(r&&r.renderer)return{parent:r.renderer.element.parentNode,node:r.renderer.element};if(r=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.attached&&n.options.insertionPoint===t.insertionPoint)return n}return null}(t,e),r&&r.renderer)return{parent:r.renderer.element.parentNode,node:r.renderer.element.nextSibling}}var n=e.insertionPoint;if(n&&"string"===typeof n){var i=function(e){for(var t=pe(),r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(8===n.nodeType&&n.nodeValue.trim()===e)return n}return null}(n);if(i)return{parent:i.parentNode,node:i.nextSibling}}return!1}var ve=le((function(){var e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null})),ge=function(e,t,r){try{"insertRule"in e?e.insertRule(t,r):"appendRule"in e&&e.appendRule(t)}catch(n){return!1}return e.cssRules[r]},me=function(e,t){var r=e.cssRules.length;return void 0===t||t>r?r:t},be=function(){function e(e){this.getPropertyValue=ce,this.setProperty=fe,this.removeProperty=he,this.setSelector=de,this.hasInsertedRules=!1,this.cssRules=[],e&&ie.add(e),this.sheet=e;var t=this.sheet?this.sheet.options:{},r=t.media,n=t.meta,i=t.element;this.element=i||function(){var e=document.createElement("style");return e.textContent="\n",e}(),this.element.setAttribute("data-jss",""),r&&this.element.setAttribute("media",r),n&&this.element.setAttribute("data-meta",n);var s=ve();s&&this.element.setAttribute("nonce",s)}var t=e.prototype;return t.attach=function(){if(!this.element.parentNode&&this.sheet){!function(e,t){var r=t.insertionPoint,n=ye(t);if(!1!==n&&n.parent)n.parent.insertBefore(e,n.node);else if(r&&"number"===typeof r.nodeType){var i=r,s=i.parentNode;s&&s.insertBefore(e,i.nextSibling)}else pe().appendChild(e)}(this.element,this.sheet.options);var e=Boolean(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&e&&(this.hasInsertedRules=!1,this.deploy())}},t.detach=function(){if(this.sheet){var e=this.element.parentNode;e&&e.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent="\n")}},t.deploy=function(){var e=this.sheet;e&&(e.options.link?this.insertRules(e.rules):this.element.textContent="\n"+e.toString()+"\n")},t.insertRules=function(e,t){for(var r=0;r<e.index.length;r++)this.insertRule(e.index[r],r,t)},t.insertRule=function(e,t,r){if(void 0===r&&(r=this.element.sheet),e.rules){var n=e,i=r;if("conditional"===e.type||"keyframes"===e.type){var s=me(r,t);if(!1===(i=ge(r,n.toString({children:!1}),s)))return!1;this.refCssRule(e,s,i)}return this.insertRules(n.rules,i),i}var o=e.toString();if(!o)return!1;var a=me(r,t),u=ge(r,o,a);return!1!==u&&(this.hasInsertedRules=!0,this.refCssRule(e,a,u),u)},t.refCssRule=function(e,t,r){e.renderable=r,e.options.parent instanceof te&&this.cssRules.splice(t,0,r)},t.deleteRule=function(e){var t=this.element.sheet,r=this.indexOf(e);return-1!==r&&(t.deleteRule(r),this.cssRules.splice(r,1),!0)},t.indexOf=function(e){return this.cssRules.indexOf(e)},t.replaceRule=function(e,t){var r=this.indexOf(e);return-1!==r&&(this.element.sheet.deleteRule(r),this.cssRules.splice(r,1),this.insertRule(t,r))},t.getRules=function(){return this.element.sheet.cssRules},e}(),ke=0,Se=function(){function e(e){this.id=ke++,this.version="10.10.0",this.plugins=new re,this.options={id:{minify:!1},createGenerateId:ue,Renderer:o?be:null,plugins:[]},this.generateId=ue({minify:!1});for(var t=0;t<X.length;t++)this.plugins.use(X[t],{queue:"internal"});this.setup(e)}var t=e.prototype;return t.setup=function(e){return void 0===e&&(e={}),e.createGenerateId&&(this.options.createGenerateId=e.createGenerateId),e.id&&(this.options.id=(0,i.A)({},this.options.id,e.id)),(e.createGenerateId||e.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),null!=e.insertionPoint&&(this.options.insertionPoint=e.insertionPoint),"Renderer"in e&&(this.options.Renderer=e.Renderer),e.plugins&&this.use.apply(this,e.plugins),this},t.createStyleSheet=function(e,t){void 0===t&&(t={});var r=t.index;"number"!==typeof r&&(r=0===ie.index?0:ie.index+1);var n=new te(e,(0,i.A)({},t,{jss:this,generateId:t.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:r}));return this.plugins.onProcessSheet(n),n},t.removeStyleSheet=function(e){return e.detach(),ie.remove(e),this},t.createRule=function(e,t,r){if(void 0===t&&(t={}),void 0===r&&(r={}),"object"===typeof e)return this.createRule(void 0,e,t);var n=(0,i.A)({},r,{name:e,jss:this,Renderer:this.options.Renderer});n.generateId||(n.generateId=this.generateId),n.classes||(n.classes={}),n.keyframes||(n.keyframes={});var s=v(e,t,n);return s&&this.plugins.onProcessRule(s),s},t.use=function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return r.forEach((function(t){e.plugins.use(t)})),this},e}(),xe=function(e){return new Se(e)},we="object"===typeof CSS&&null!=CSS&&"number"in CSS;function Re(e){var t=null;for(var r in e){var n=e[r],i=typeof n;if("function"===i)t||(t={}),t[r]=n;else if("object"===i&&null!==n&&!Array.isArray(n)){var s=Re(n);s&&(t||(t={}),t[r]=s)}}return t}xe();function Pe(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{baseClasses:t,newClasses:r,Component:n}=e;if(!r)return t;const i={...t};return Object.keys(r).forEach((e=>{r[e]&&(i[e]=`${t[e]} ${r[e]}`)})),i}const Ce={set:(e,t,r,n)=>{let i=e.get(t);i||(i=new Map,e.set(t,i)),i.set(r,n)},get:(e,t,r)=>{const n=e.get(t);return n?n.get(r):void 0},delete:(e,t,r)=>{e.get(t).delete(r)}},Ae=Ce;var je=r(8959);var Oe=r(8590);const Ie=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];var Me=Date.now(),Ne="fnValues"+Me,Ee="fnStyle"+ ++Me;const $e=function(){return{onCreateRule:function(e,t,r){if("function"!==typeof t)return null;var n=v(e,{},r);return n[Ee]=t,n},onProcessStyle:function(e,t){if(Ne in t||Ee in t)return e;var r={};for(var n in e){var i=e[n];"function"===typeof i&&(delete e[n],r[n]=i)}return t[Ne]=r,e},onUpdate:function(e,t,r,n){var i=t,s=i[Ee];s&&(i.style=s(e)||{});var o=i[Ne];if(o)for(var a in o)i.prop(a,o[a](e),n)}}};var Te="@global",qe="@global ",Ve=function(){function e(e,t,r){for(var n in this.type="global",this.at=Te,this.isProcessed=!1,this.key=e,this.options=r,this.rules=new ee((0,i.A)({},r,{parent:this})),t)this.rules.add(n,t[n]);this.rules.process()}var t=e.prototype;return t.getRule=function(e){return this.rules.get(e)},t.addRule=function(e,t,r){var n=this.rules.add(e,t,r);return n&&this.options.jss.plugins.onProcessRule(n),n},t.replaceRule=function(e,t,r){var n=this.rules.replace(e,t,r);return n&&this.options.jss.plugins.onProcessRule(n),n},t.indexOf=function(e){return this.rules.indexOf(e)},t.toString=function(e){return this.rules.toString(e)},e}(),ze=function(){function e(e,t,r){this.type="global",this.at=Te,this.isProcessed=!1,this.key=e,this.options=r;var n=e.substr(8);this.rule=r.jss.createRule(n,t,(0,i.A)({},r,{parent:this}))}return e.prototype.toString=function(e){return this.rule?this.rule.toString(e):""},e}(),Ge=/\s*,\s*/g;function We(e,t){for(var r=e.split(Ge),n="",i=0;i<r.length;i++)n+=t+" "+r[i].trim(),r[i+1]&&(n+=", ");return n}const Ue=function(){return{onCreateRule:function(e,t,r){if(!e)return null;if(e===Te)return new Ve(e,t,r);if("@"===e[0]&&e.substr(0,8)===qe)return new ze(e,t,r);var n=r.parent;return n&&("global"===n.type||n.options.parent&&"global"===n.options.parent.type)&&(r.scoped=!1),r.selector||!1!==r.scoped||(r.selector=e),null},onProcessRule:function(e,t){"style"===e.type&&t&&(function(e,t){var r=e.options,n=e.style,s=n?n[Te]:null;if(s){for(var o in s)t.addRule(o,s[o],(0,i.A)({},r,{selector:We(o,e.selector)}));delete n[Te]}}(e,t),function(e,t){var r=e.options,n=e.style;for(var s in n)if("@"===s[0]&&s.substr(0,7)===Te){var o=We(s.substr(7),e.selector);t.addRule(o,n[s],(0,i.A)({},r,{selector:o})),delete n[s]}}(e,t))}}};var Je=/\s*,\s*/g,Be=/&/g,Le=/\$([\w-]+)/g;const De=function(){function e(e,t){return function(r,n){var i=e.getRule(n)||t&&t.getRule(n);return i?i.selector:n}}function t(e,t){for(var r=t.split(Je),n=e.split(Je),i="",s=0;s<r.length;s++)for(var o=r[s],a=0;a<n.length;a++){var u=n[a];i&&(i+=", "),i+=-1!==u.indexOf("&")?u.replace(Be,o):o+" "+u}return i}function r(e,t,r){if(r)return(0,i.A)({},r,{index:r.index+1});var n=e.options.nestingLevel;n=void 0===n?1:n+1;var s=(0,i.A)({},e.options,{nestingLevel:n,index:t.indexOf(e)+1});return delete s.name,s}return{onProcessStyle:function(n,s,o){if("style"!==s.type)return n;var a,u,l=s,c=l.options.parent;for(var f in n){var h=-1!==f.indexOf("&"),d="@"===f[0];if(h||d){if(a=r(l,c,a),h){var p=t(f,l.selector);u||(u=e(c,o)),p=p.replace(Le,u);var y=l.key+"-"+f;"replaceRule"in c?c.replaceRule(y,n[f],(0,i.A)({},a,{selector:p})):c.addRule(y,n[f],(0,i.A)({},a,{selector:p}))}else d&&c.addRule(f,{},a).addRule(l.key,n[f],{selector:l.selector});delete n[f]}}return n}}};var Fe=/[A-Z]/g,He=/^ms-/,Ze={};function Ke(e){return"-"+e.toLowerCase()}const Qe=function(e){if(Ze.hasOwnProperty(e))return Ze[e];var t=e.replace(Fe,Ke);return Ze[e]=He.test(t)?"-"+t:t};function Xe(e){var t={};for(var r in e){t[0===r.indexOf("--")?r:Qe(r)]=e[r]}return e.fallbacks&&(Array.isArray(e.fallbacks)?t.fallbacks=e.fallbacks.map(Xe):t.fallbacks=Xe(e.fallbacks)),t}const Ye=function(){return{onProcessStyle:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)e[t]=Xe(e[t]);return e}return Xe(e)},onChangeValue:function(e,t,r){if(0===t.indexOf("--"))return e;var n=Qe(t);return t===n?e:(r.prop(n,e),null)}}};var _e=we&&CSS?CSS.px:"px",et=we&&CSS?CSS.ms:"ms",tt=we&&CSS?CSS.percent:"%";function rt(e){var t=/(-[a-z])/g,r=function(e){return e[1].toUpperCase()},n={};for(var i in e)n[i]=e[i],n[i.replace(t,r)]=e[i];return n}var nt=rt({"animation-delay":et,"animation-duration":et,"background-position":_e,"background-position-x":_e,"background-position-y":_e,"background-size":_e,border:_e,"border-bottom":_e,"border-bottom-left-radius":_e,"border-bottom-right-radius":_e,"border-bottom-width":_e,"border-left":_e,"border-left-width":_e,"border-radius":_e,"border-right":_e,"border-right-width":_e,"border-top":_e,"border-top-left-radius":_e,"border-top-right-radius":_e,"border-top-width":_e,"border-width":_e,"border-block":_e,"border-block-end":_e,"border-block-end-width":_e,"border-block-start":_e,"border-block-start-width":_e,"border-block-width":_e,"border-inline":_e,"border-inline-end":_e,"border-inline-end-width":_e,"border-inline-start":_e,"border-inline-start-width":_e,"border-inline-width":_e,"border-start-start-radius":_e,"border-start-end-radius":_e,"border-end-start-radius":_e,"border-end-end-radius":_e,margin:_e,"margin-bottom":_e,"margin-left":_e,"margin-right":_e,"margin-top":_e,"margin-block":_e,"margin-block-end":_e,"margin-block-start":_e,"margin-inline":_e,"margin-inline-end":_e,"margin-inline-start":_e,padding:_e,"padding-bottom":_e,"padding-left":_e,"padding-right":_e,"padding-top":_e,"padding-block":_e,"padding-block-end":_e,"padding-block-start":_e,"padding-inline":_e,"padding-inline-end":_e,"padding-inline-start":_e,"mask-position-x":_e,"mask-position-y":_e,"mask-size":_e,height:_e,width:_e,"min-height":_e,"max-height":_e,"min-width":_e,"max-width":_e,bottom:_e,left:_e,top:_e,right:_e,inset:_e,"inset-block":_e,"inset-block-end":_e,"inset-block-start":_e,"inset-inline":_e,"inset-inline-end":_e,"inset-inline-start":_e,"box-shadow":_e,"text-shadow":_e,"column-gap":_e,"column-rule":_e,"column-rule-width":_e,"column-width":_e,"font-size":_e,"font-size-delta":_e,"letter-spacing":_e,"text-decoration-thickness":_e,"text-indent":_e,"text-stroke":_e,"text-stroke-width":_e,"word-spacing":_e,motion:_e,"motion-offset":_e,outline:_e,"outline-offset":_e,"outline-width":_e,perspective:_e,"perspective-origin-x":tt,"perspective-origin-y":tt,"transform-origin":tt,"transform-origin-x":tt,"transform-origin-y":tt,"transform-origin-z":tt,"transition-delay":et,"transition-duration":et,"vertical-align":_e,"flex-basis":_e,"shape-margin":_e,size:_e,gap:_e,grid:_e,"grid-gap":_e,"row-gap":_e,"grid-row-gap":_e,"grid-column-gap":_e,"grid-template-rows":_e,"grid-template-columns":_e,"grid-auto-rows":_e,"grid-auto-columns":_e,"box-shadow-x":_e,"box-shadow-y":_e,"box-shadow-blur":_e,"box-shadow-spread":_e,"font-line-height":_e,"text-shadow-x":_e,"text-shadow-y":_e,"text-shadow-blur":_e});function it(e,t,r){if(null==t)return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]=it(e,t[n],r);else if("object"===typeof t)if("fallbacks"===e)for(var i in t)t[i]=it(i,t[i],r);else for(var s in t)t[s]=it(e+"-"+s,t[s],r);else if("number"===typeof t&&!1===isNaN(t)){var o=r[e]||nt[e];return!o||0===t&&o===_e?t.toString():"function"===typeof o?o(t).toString():""+t+o}return t}const st=function(e){void 0===e&&(e={});var t=rt(e);return{onProcessStyle:function(e,r){if("style"!==r.type)return e;for(var n in e)e[n]=it(n,e[n],t);return e},onChangeValue:function(e,r){return it(r,e,t)}}};function ot(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function at(e){return function(e){if(Array.isArray(e))return ot(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return ot(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ot(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ut="",lt="",ct="",ft="",ht=o&&"ontouchstart"in document.documentElement;if(o){var dt={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},pt=document.createElement("p").style;for(var yt in dt)if(yt+"Transform"in pt){ut=yt,lt=dt[yt];break}"Webkit"===ut&&"msHyphens"in pt&&(ut="ms",lt=dt.ms,ft="edge"),"Webkit"===ut&&"-apple-trailing-word"in pt&&(ct="apple")}var vt=ut,gt=lt,mt=ct,bt=ft,kt=ht;var St={noPrefill:["appearance"],supportedProperty:function(e){return"appearance"===e&&("ms"===vt?"-webkit-"+e:gt+e)}},xt={noPrefill:["color-adjust"],supportedProperty:function(e){return"color-adjust"===e&&("Webkit"===vt?gt+"print-"+e:e)}},wt=/[-\s]+(.)?/g;function Rt(e,t){return t?t.toUpperCase():""}function Pt(e){return e.replace(wt,Rt)}function Ct(e){return Pt("-"+e)}var At,jt={noPrefill:["mask"],supportedProperty:function(e,t){if(!/^mask/.test(e))return!1;if("Webkit"===vt){var r="mask-image";if(Pt(r)in t)return e;if(vt+Ct(r)in t)return gt+e}return e}},Ot={noPrefill:["text-orientation"],supportedProperty:function(e){return"text-orientation"===e&&("apple"!==mt||kt?e:gt+e)}},It={noPrefill:["transform"],supportedProperty:function(e,t,r){return"transform"===e&&(r.transform?e:gt+e)}},Mt={noPrefill:["transition"],supportedProperty:function(e,t,r){return"transition"===e&&(r.transition?e:gt+e)}},Nt={noPrefill:["writing-mode"],supportedProperty:function(e){return"writing-mode"===e&&("Webkit"===vt||"ms"===vt&&"edge"!==bt?gt+e:e)}},Et={noPrefill:["user-select"],supportedProperty:function(e){return"user-select"===e&&("Moz"===vt||"ms"===vt||"apple"===mt?gt+e:e)}},$t={supportedProperty:function(e,t){return!!/^break-/.test(e)&&("Webkit"===vt?"WebkitColumn"+Ct(e)in t&&gt+"column-"+e:"Moz"===vt&&("page"+Ct(e)in t&&"page-"+e))}},Tt={supportedProperty:function(e,t){if(!/^(border|margin|padding)-inline/.test(e))return!1;if("Moz"===vt)return e;var r=e.replace("-inline","");return vt+Ct(r)in t&&gt+r}},qt={supportedProperty:function(e,t){return Pt(e)in t&&e}},Vt={supportedProperty:function(e,t){var r=Ct(e);return"-"===e[0]||"-"===e[0]&&"-"===e[1]?e:vt+r in t?gt+e:"Webkit"!==vt&&"Webkit"+r in t&&"-webkit-"+e}},zt={supportedProperty:function(e){return"scroll-snap"===e.substring(0,11)&&("ms"===vt?""+gt+e:e)}},Gt={supportedProperty:function(e){return"overscroll-behavior"===e&&("ms"===vt?gt+"scroll-chaining":e)}},Wt={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},Ut={supportedProperty:function(e,t){var r=Wt[e];return!!r&&(vt+Ct(r)in t&&gt+r)}},Jt={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},Bt=Object.keys(Jt),Lt=function(e){return gt+e},Dt={supportedProperty:function(e,t,r){var n=r.multiple;if(Bt.indexOf(e)>-1){var i=Jt[e];if(!Array.isArray(i))return vt+Ct(i)in t&&gt+i;if(!n)return!1;for(var s=0;s<i.length;s++)if(!(vt+Ct(i[0])in t))return!1;return i.map(Lt)}return!1}},Ft=[St,xt,jt,Ot,It,Mt,Nt,Et,$t,Tt,qt,Vt,zt,Gt,Ut,Dt],Ht=Ft.filter((function(e){return e.supportedProperty})).map((function(e){return e.supportedProperty})),Zt=Ft.filter((function(e){return e.noPrefill})).reduce((function(e,t){return e.push.apply(e,at(t.noPrefill)),e}),[]),Kt={};if(o){At=document.createElement("p");var Qt=window.getComputedStyle(document.documentElement,"");for(var Xt in Qt)isNaN(Xt)||(Kt[Qt[Xt]]=Qt[Xt]);Zt.forEach((function(e){return delete Kt[e]}))}function Yt(e,t){if(void 0===t&&(t={}),!At)return e;if(null!=Kt[e])return Kt[e];"transition"!==e&&"transform"!==e||(t[e]=e in At.style);for(var r=0;r<Ht.length&&(Kt[e]=Ht[r](e,At.style,t),!Kt[e]);r++);try{At.style[e]=""}catch(n){return!1}return Kt[e]}var _t,er={},tr={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},rr=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;function nr(e,t,r){if("var"===t)return"var";if("all"===t)return"all";if("all"===r)return", all";var n=t?Yt(t):", "+Yt(r);return n||(t||r)}function ir(e,t){var r=t;if(!_t||"content"===e)return t;if("string"!==typeof r||!isNaN(parseInt(r,10)))return r;var n=e+r;if(null!=er[n])return er[n];try{_t.style[e]=r}catch(i){return er[n]=!1,!1}if(tr[e])r=r.replace(rr,nr);else if(""===_t.style[e]&&("-ms-flex"===(r=gt+r)&&(_t.style[e]="-ms-flexbox"),_t.style[e]=r,""===_t.style[e]))return er[n]=!1,!1;return _t.style[e]="",er[n]=r,er[n]}o&&(_t=document.createElement("p"));const sr=function(){function e(t){for(var r in t){var n=t[r];if("fallbacks"===r&&Array.isArray(n))t[r]=n.map(e);else{var i=!1,s=Yt(r);s&&s!==r&&(i=!0);var o=!1,a=ir(s,m(n));a&&a!==n&&(o=!0),(i||o)&&(i&&delete t[r],t[s||r]=a||n)}}return t}return{onProcessRule:function(e){if("keyframes"===e.type){var t=e;t.at=function(e){return"-"===e[1]||"ms"===vt?e:"@"+gt+"keyframes"+e.substr(10)}(t.at)}},onProcessStyle:function(t,r){return"style"!==r.type?t:e(t)},onChangeValue:function(e,t){return ir(t,m(e))||e}}};const or=function(){var e=function(e,t){return e.length===t.length?e>t?1:-1:e.length-t.length};return{onProcessStyle:function(t,r){if("style"!==r.type)return t;for(var n={},i=Object.keys(t).sort(e),s=0;s<i.length;s++)n[i[s]]=t[i[s]];return n}}};r(579);const ar=xe({plugins:[$e(),Ue(),De(),Ye(),st(),"undefined"===typeof window?null:sr(),or()]}),ur=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{disableGlobal:t=!1,productionPrefix:r="jss",seed:n=""}=e,i=""===n?"":`${n}-`;let s=0;const o=()=>(s+=1,s);return(e,s)=>{const a=s.options.name;if(a&&a.startsWith("Mui")&&!s.options.link&&!t){if(Ie.includes(e.key))return`Mui-${e.key}`;const t=`${i}${a}-${e.key}`;return s.options.theme[Oe.A]&&""===n?`${t}-${o()}`:t}return`${i}${r}${o()}`}}(),lr={disableGeneration:!1,generateClassName:ur,jss:ar,sheetsCache:null,sheetsManager:new Map,sheetsRegistry:null},cr=n.createContext(lr);let fr=-1e9;var hr=r(9172),dr=r(7598);function pr(e){return 0===e.length}function yr(e){const t="function"===typeof e;return{create:(r,n)=>{let i;try{i=t?e(r):e}catch(u){throw u}if(!n||!r.components||!r.components[n]||!r.components[n].styleOverrides&&!r.components[n].variants)return i;const s=r.components[n].styleOverrides||{},o=r.components[n].variants||[],a={...i};return Object.keys(s).forEach((e=>{a[e]=(0,hr.A)(a[e]||{},s[e])})),o.forEach((e=>{const t=function(e){const{variant:t,...r}=e;let n=t||"";return Object.keys(r).sort().forEach((t=>{n+="color"===t?pr(n)?e[t]:(0,dr.A)(e[t]):`${pr(n)?t:(0,dr.A)(t)}${(0,dr.A)(e[t].toString())}`})),n}(e.props);a[t]=(0,hr.A)(a[t]||{},e.style)})),a},options:{}}}const vr={};function gr(e,t){let{state:r,theme:n,stylesOptions:i,stylesCreator:s,name:o}=e;if(i.disableGeneration)return;let a=Ae.get(i.sheetsManager,s,n);a||(a={refs:0,staticSheet:null,dynamicStyles:null},Ae.set(i.sheetsManager,s,n,a));const u={...s.options,...i,theme:n,flip:"boolean"===typeof i.flip?i.flip:"rtl"===n.direction};u.generateId=u.serverGenerateClassName||u.generateClassName;const l=i.sheetsRegistry;if(0===a.refs){let e;i.sheetsCache&&(e=Ae.get(i.sheetsCache,s,n));const t=s.create(n,o);e||(e=i.jss.createStyleSheet(t,{link:!1,...u}),e.attach(),i.sheetsCache&&Ae.set(i.sheetsCache,s,n,e)),l&&l.add(e),a.staticSheet=e,a.dynamicStyles=Re(t)}if(a.dynamicStyles){const e=i.jss.createStyleSheet(a.dynamicStyles,{link:!0,...u});e.update(t),e.attach(),r.dynamicSheet=e,r.classes=Pe({baseClasses:a.staticSheet.classes,newClasses:e.classes}),l&&l.add(e)}else r.classes=a.staticSheet.classes;a.refs+=1}function mr(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{name:r,classNamePrefix:i,Component:s,defaultTheme:o=vr,...a}=t,u=yr(e),l=r||i||"makeStyles";u.options={index:(fr+=1,fr),name:r,meta:l,classNamePrefix:l};return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=function(){const e=(0,je.A)();return e?.$$material??e}()||o,i={...n.useContext(cr),...a},l=n.useRef(),c=n.useRef();!function(e,t){const r=n.useRef([]);let i;const s=n.useMemo((()=>({})),t);r.current!==s&&(r.current=s,i=e()),n.useEffect((()=>()=>{i&&i()}),[s])}((()=>{const n={name:r,state:{},stylesCreator:u,stylesOptions:i,theme:t};return gr(n,e),c.current=!1,l.current=n,()=>{!function(e){let{state:t,theme:r,stylesOptions:n,stylesCreator:i}=e;if(n.disableGeneration)return;const s=Ae.get(n.sheetsManager,i,r);s.refs-=1;const o=n.sheetsRegistry;0===s.refs&&(Ae.delete(n.sheetsManager,i,r),n.jss.removeStyleSheet(s.staticSheet),o&&o.remove(s.staticSheet)),t.dynamicSheet&&(n.jss.removeStyleSheet(t.dynamicSheet),o&&o.remove(t.dynamicSheet))}(n)}}),[t,u]),n.useEffect((()=>{c.current&&function(e,t){let{state:r}=e;r.dynamicSheet&&r.dynamicSheet.update(t)}(l.current,e),c.current=!0}));const f=function(e,t,r){let{state:n,stylesOptions:i}=e;if(i.disableGeneration)return t||{};n.cacheClasses||(n.cacheClasses={value:null,lastProp:null,lastJSS:{}});let s=!1;return n.classes!==n.cacheClasses.lastJSS&&(n.cacheClasses.lastJSS=n.classes,s=!0),t!==n.cacheClasses.lastProp&&(n.cacheClasses.lastProp=t,s=!0),s&&(n.cacheClasses.value=Pe({baseClasses:n.cacheClasses.lastJSS,newClasses:t,Component:r})),n.cacheClasses.value}(l.current,e.classes,s);return f}}}}]);
//# sourceMappingURL=533.cee4e2f6.chunk.js.map