/**
 * AnchorJS - v2.0.0 - 2015-10-31
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2015 Bryan Braun; Licensed MIT
 */
function AnchorJS(t){"use strict";function e(t){o.options.icon=o.options.hasOwnProperty("icon")?t.icon:"\ue9cb",o.options.visible=o.options.hasOwnProperty("visible")?t.visible:"hover",o.options.placement=o.options.hasOwnProperty("placement")?t.placement:"right",o.options["class"]=o.options.hasOwnProperty("class")?t["class"]:"",o.options.truncate=o.options.hasOwnProperty("truncate")?Math.floor(t.truncate):64}function n(){if(null===document.head.querySelector("style.anchorjs")){var t,e=document.createElement("style"),n=" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",o=" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",i=' @font-face {   font-family: "anchorjs-icons";   font-style: normal;   font-weight: normal;   src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBTUAAAC8AAAAYGNtYXAWi9QdAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zgq29TcAAAF4AAABNGhlYWQEZM3pAAACrAAAADZoaGVhBhUDxgAAAuQAAAAkaG10eASAADEAAAMIAAAAFGxvY2EAKACuAAADHAAAAAxtYXhwAAgAVwAAAygAAAAgbmFtZQ5yJ3cAAANIAAAB2nBvc3QAAwAAAAAFJAAAACAAAwJAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpywPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6cv//f//AAAAAAAg6cv//f//AAH/4xY5AAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACADEARAJTAsAAKwBUAAABIiYnJjQ/AT4BMzIWFxYUDwEGIicmND8BNjQnLgEjIgYPAQYUFxYUBw4BIwciJicmND8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFA8BDgEjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAEAAAABAACiToc1Xw889QALBAAAAAAA0XnFFgAAAADRecUWAAAAAAJTAsAAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAlMAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAACAAAAAoAAMQAAAAAACgAUAB4AmgABAAAABQBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIABwCfAAEAAAAAAAMADgBLAAEAAAAAAAQADgC0AAEAAAAAAAUACwAqAAEAAAAAAAYADgB1AAEAAAAAAAoAGgDeAAMAAQQJAAEAHAAOAAMAAQQJAAIADgCmAAMAAQQJAAMAHABZAAMAAQQJAAQAHADCAAMAAQQJAAUAFgA1AAMAAQQJAAYAHACDAAMAAQQJAAoANAD4YW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype"); }',a=" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }";e.className="anchorjs",e.appendChild(document.createTextNode("")),t=document.head.querySelector('[rel="stylesheet"], style'),void 0===t?document.head.appendChild(e):document.head.insertBefore(e,t),e.sheet.insertRule(n,e.sheet.cssRules.length),e.sheet.insertRule(o,e.sheet.cssRules.length),e.sheet.insertRule(a,e.sheet.cssRules.length),e.sheet.insertRule(i,e.sheet.cssRules.length)}}var o=this;this.options=t||{},e(t),this.add=function(t){var o,i,a,A,r,s,c,u,l,h,p;if(e(this.options),t){if("string"!=typeof t)throw new Error("The selector provided to AnchorJS was invalid.")}else t="h1, h2, h3, h4, h5, h6";if(o=document.querySelectorAll(t),0===o.length)return!1;for(n(),i=document.querySelectorAll("[id]"),a=[].map.call(i,function(t){return t.id}),r=0;r<o.length;r++){if(o[r].hasAttribute("id"))A=o[r].getAttribute("id");else{u=this.urlify(o[r].textContent),l=u,c=0;do void 0!==s&&(l=u+"-"+c),s=a.indexOf(l),c+=1;while(-1!==s);s=void 0,a.push(l),o[r].setAttribute("id",l),A=l}h=A.replace(/-/g," "),p=document.createElement("a"),p.className="anchorjs-link "+this.options["class"],p.href="#"+A,p.setAttribute("aria-label","Anchor link for: "+h),p.setAttribute("data-anchorjs-icon",this.options.icon),"always"===this.options.visible&&(p.style.opacity="1"),"\ue9cb"===this.options.icon&&(p.style.fontFamily="anchorjs-icons",p.style.fontStyle="normal",p.style.fontVariant="normal",p.style.fontWeight="normal",p.style.lineHeight=1,"left"===this.options.placement&&(p.style.lineHeight="inherit")),"left"===this.options.placement?(p.style.position="absolute",p.style.marginLeft="-1em",p.style.paddingRight="0.5em",o[r].insertBefore(p,o[r].firstChild)):(p.style.paddingLeft="0.375em",o[r].appendChild(p))}return this},this.remove=function(t){for(var e,n=document.querySelectorAll(t),o=0;o<n.length;o++)e=n[o].querySelector(".anchorjs-link"),e&&n[o].removeChild(e);return this},this.urlify=function(t){var n,o=/[& +$,:;=?@"#{}|^~[`%!'\]\.\/\(\)\*\\]/g;return this.options.truncate||e(this.options),n=t.replace(/\'/gi,"").replace(o,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()}}!function(){"use strict";/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
function t(e,o){function i(t,e){return function(){return t.apply(e,arguments)}}var a;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=o.touchBoundary||10,this.layer=e,this.tapDelay=o.tapDelay||200,this.tapTimeout=o.tapTimeout||700,!t.notNeeded(e)){for(var A=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],r=this,s=0,c=A.length;c>s;s++)r[A[s]]=i(r[A[s]],r);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(a=e.onclick,e.addEventListener("click",function(t){a(t)},!1),e.onclick=null)}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),a=o&&/OS [6-7]_\d/.test(navigator.userAgent),A=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,a;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if(a=window.getSelection(),a.rangeCount&&!a.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,A,r,s,c,u=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,A=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,a&&(c=t.changedTouches[0],u=document.elementFromPoint(c.pageX-window.pageXOffset,c.pageY-window.pageYOffset)||u,u.fastClickScrollParent=this.targetElement.fastClickScrollParent),r=u.tagName.toLowerCase(),"label"===r){if(e=this.findControl(u)){if(this.focus(u),n)return!1;u=e}}else if(this.needsFocus(u))return t.timeStamp-A>100||o&&window.top!==window&&"input"===r?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,t),o&&"select"===r||(this.targetElement=null,t.preventDefault()),!1);return o&&!i&&(s=u.fastClickScrollParent,s&&s.fastClickLastScrollTop!==s.scrollTop)?!0:(this.needsClick(u)||(t.preventDefault(),this.sendClick(u,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,o,i,a;if("undefined"==typeof window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(A&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction?!0:(a=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],a>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===t.style.touchAction||"manipulation"===t.style.touchAction?!0:!1)},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}(),/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */
function(t,e,n){"function"==typeof define&&define.amd?define(["jquery"],function(o){return n(o,t,e),o.mobile}):n(t.jQuery,t,e)}(this,document,function(t,e,n,o){!function(t,e,n,o){function i(t){for(;t&&"undefined"!=typeof t.originalEvent;)t=t.originalEvent;return t}function a(e,n){var a,A,r,s,c,u,l,h,p,d=e.type;if(e=t.Event(e),e.type=n,a=e.originalEvent,A=t.event.props,d.search(/^(mouse|click)/)>-1&&(A=M),a)for(l=A.length,s;l;)s=A[--l],e[s]=a[s];if(d.search(/mouse(down|up)|click/)>-1&&!e.which&&(e.which=1),-1!==d.search(/^touch/)&&(r=i(a),d=r.touches,c=r.changedTouches,u=d&&d.length?d[0]:c&&c.length?c[0]:o,u))for(h=0,p=Q.length;p>h;h++)s=Q[h],e[s]=u[s];return e}function A(e){for(var n,o,i={};e;){n=t.data(e,T);for(o in n)n[o]&&(i[o]=i.hasVirtualBinding=!0);e=e.parentNode}return i}function r(e,n){for(var o;e;){if(o=t.data(e,T),o&&(!n||o[n]))return e;e=e.parentNode}return null}function s(){X=!1}function c(){X=!0}function u(){W=0,j.length=0,P=!1,c()}function l(){s()}function h(){p(),L=setTimeout(function(){L=0,u()},t.vmouse.resetTimerDuration)}function p(){L&&(clearTimeout(L),L=0)}function d(e,n,o){var i;return(o&&o[e]||!o&&r(n.target,e))&&(i=a(n,e),t(n.target).trigger(i)),i}function f(e){var n,o=t.data(e.target,B);!P&&(!W||W!==o)&&(n=d("v"+e.type,e),n&&(n.isDefaultPrevented()&&e.preventDefault(),n.isPropagationStopped()&&e.stopPropagation(),n.isImmediatePropagationStopped()&&e.stopImmediatePropagation()))}function v(e){var n,o,a,r=i(e).touches;r&&1===r.length&&(n=e.target,o=A(n),o.hasVirtualBinding&&(W=O++,t.data(n,B,W),p(),l(),I=!1,a=i(e).touches[0],x=a.pageX,N=a.pageY,d("vmouseover",e,o),d("vmousedown",e,o)))}function g(t){X||(I||d("vmousecancel",t,A(t.target)),I=!0,h())}function m(e){if(!X){var n=i(e).touches[0],o=I,a=t.vmouse.moveDistanceThreshold,r=A(e.target);I=I||Math.abs(n.pageX-x)>a||Math.abs(n.pageY-N)>a,I&&!o&&d("vmousecancel",e,r),d("vmousemove",e,r),h()}}function w(t){if(!X){c();var e,n,o=A(t.target);d("vmouseup",t,o),I||(e=d("vclick",t,o),e&&e.isDefaultPrevented()&&(n=i(t).changedTouches[0],j.push({touchID:W,x:n.clientX,y:n.clientY}),P=!0)),d("vmouseout",t,o),I=!1,h()}}function y(e){var n,o=t.data(e,T);if(o)for(n in o)if(o[n])return!0;return!1}function b(){}function k(e){var n=e.substr(1);return{setup:function(){y(this)||t.data(this,T,{});var o=t.data(this,T);o[e]=!0,Y[e]=(Y[e]||0)+1,1===Y[e]&&F.bind(n,f),t(this).bind(n,b),G&&(Y.touchstart=(Y.touchstart||0)+1,1===Y.touchstart&&F.bind("touchstart",v).bind("touchend",w).bind("touchmove",m).bind("scroll",g))},teardown:function(){--Y[e],Y[e]||F.unbind(n,f),G&&(--Y.touchstart,Y.touchstart||F.unbind("touchstart",v).unbind("touchmove",m).unbind("touchend",w).unbind("scroll",g));var o=t(this),i=t.data(this,T);i&&(i[e]=!1),o.unbind(n,b),y(this)||o.removeData(T)}}}var E,C,T="virtualMouseBindings",B="virtualTouchID",D="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),Q="clientX clientY pageX pageY screenX screenY".split(" "),S=t.event.mouseHooks?t.event.mouseHooks.props:[],M=t.event.props.concat(S),Y={},L=0,x=0,N=0,I=!1,j=[],P=!1,X=!1,G="addEventListener"in n,F=t(n),O=1,W=0;for(t.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500},C=0;C<D.length;C++)t.event.special[D[C]]=k(D[C]);G&&n.addEventListener("click",function(e){var n,o,i,a,A,r,s=j.length,c=e.target;if(s)for(n=e.clientX,o=e.clientY,E=t.vmouse.clickDistanceThreshold,i=c;i;){for(a=0;s>a;a++)if(A=j[a],r=0,i===c&&Math.abs(A.x-n)<E&&Math.abs(A.y-o)<E||t.data(i,B)===A.touchID)return e.preventDefault(),void e.stopPropagation();i=i.parentNode}},!0)}(t,e,n),function(t){t.mobile={}}(t),function(t,e){var o={touch:"ontouchend"in n};t.mobile.support=t.mobile.support||{},t.extend(t.support,o),t.extend(t.mobile.support,o)}(t),function(t,e,o){function i(e,n,i,a){var A=i.type;i.type=n,a?t.event.trigger(i,o,e):t.event.dispatch.call(e,i),i.type=A}var a=t(n),A=t.mobile.support.touch,r="touchmove scroll",s=A?"touchstart":"mousedown",c=A?"touchend":"mouseup",u=A?"touchmove":"mousemove";t.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(e,n){t.fn[n]=function(t){return t?this.bind(n,t):this.trigger(n)},t.attrFn&&(t.attrFn[n]=!0)}),t.event.special.scrollstart={enabled:!0,setup:function(){function e(t,e){n=e,i(a,n?"scrollstart":"scrollstop",t)}var n,o,a=this,A=t(a);A.bind(r,function(i){t.event.special.scrollstart.enabled&&(n||e(i,!0),clearTimeout(o),o=setTimeout(function(){e(i,!1)},50))})},teardown:function(){t(this).unbind(r)}},t.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var e=this,n=t(e),o=!1;n.bind("vmousedown",function(A){function r(){clearTimeout(u)}function s(){r(),n.unbind("vclick",c).unbind("vmouseup",r),a.unbind("vmousecancel",s)}function c(t){s(),o||l!==t.target?o&&t.preventDefault():i(e,"tap",t)}if(o=!1,A.which&&1!==A.which)return!1;var u,l=A.target;n.bind("vmouseup",r).bind("vclick",c),a.bind("vmousecancel",s),u=setTimeout(function(){t.event.special.tap.emitTapOnTaphold||(o=!0),i(e,"taphold",t.Event("taphold",{target:l}))},t.event.special.tap.tapholdThreshold)})},teardown:function(){t(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),a.unbind("vmousecancel")}},t.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(t){var n=e.pageXOffset,o=e.pageYOffset,i=t.clientX,a=t.clientY;return 0===t.pageY&&Math.floor(a)>Math.floor(t.pageY)||0===t.pageX&&Math.floor(i)>Math.floor(t.pageX)?(i-=n,a-=o):(a<t.pageY-o||i<t.pageX-n)&&(i=t.pageX-n,a=t.pageY-o),{x:i,y:a}},start:function(e){var n=e.originalEvent.touches?e.originalEvent.touches[0]:e,o=t.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[o.x,o.y],origin:t(e.target)}},stop:function(e){var n=e.originalEvent.touches?e.originalEvent.touches[0]:e,o=t.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[o.x,o.y]}},handleSwipe:function(e,n,o,a){if(n.time-e.time<t.event.special.swipe.durationThreshold&&Math.abs(e.coords[0]-n.coords[0])>t.event.special.swipe.horizontalDistanceThreshold&&Math.abs(e.coords[1]-n.coords[1])<t.event.special.swipe.verticalDistanceThreshold){var A=e.coords[0]>n.coords[0]?"swipeleft":"swiperight";return i(o,"swipe",t.Event("swipe",{target:a,swipestart:e,swipestop:n}),!0),i(o,A,t.Event(A,{target:a,swipestart:e,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var e,n=this,o=t(n),i={};e=t.data(this,"mobile-events"),e||(e={length:0},t.data(this,"mobile-events",e)),e.length++,e.swipe=i,i.start=function(e){if(!t.event.special.swipe.eventInProgress){t.event.special.swipe.eventInProgress=!0;var o,A=t.event.special.swipe.start(e),r=e.target,s=!1;i.move=function(e){A&&!e.isDefaultPrevented()&&(o=t.event.special.swipe.stop(e),s||(s=t.event.special.swipe.handleSwipe(A,o,n,r),s&&(t.event.special.swipe.eventInProgress=!1)),Math.abs(A.coords[0]-o.coords[0])>t.event.special.swipe.scrollSupressionThreshold&&e.preventDefault())},i.stop=function(){s=!0,t.event.special.swipe.eventInProgress=!1,a.off(u,i.move),i.move=null},a.on(u,i.move).one(c,i.stop)}},o.on(s,i.start)},teardown:function(){var e,n;e=t.data(this,"mobile-events"),e&&(n=e.swipe,delete e.swipe,e.length--,0===e.length&&t.removeData(this,"mobile-events")),n&&(n.start&&t(this).off(s,n.start),n.move&&a.off(u,n.move),n.stop&&a.off(c,n.stop))}},t.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(e,n){t.event.special[e]={setup:function(){t(this).bind(n,t.noop)},teardown:function(){t(this).unbind(n)}}})}(t,this)});var anchors=new AnchorJS;/*!
 * Bez v1.0.10-g5ae0136
 * http://github.com/rdallasgray/bez
 * 
 * A plugin to convert CSS3 cubic-bezier co-ordinates to jQuery-compatible easing functions
 * 
 * With thanks to Nikolay Nemshilov for clarification on the cubic-bezier maths
 * See http://st-on-it.blogspot.com/2011/05/calculating-cubic-bezier-function.html
 * 
 * Copyright 2011 Robert Dallas Gray. All rights reserved.
 * Provided under the FreeBSD license: https://github.com/rdallasgray/bez/blob/master/LICENSE.txt
*/
jQuery.extend({bez:function(t){var e="bez_"+jQuery.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof jQuery.easing[e]){var n=function(t,e){var n=[null,null],o=[null,null],i=[null,null],a=function(a,A){return i[A]=3*t[A],o[A]=3*(e[A]-t[A])-i[A],n[A]=1-i[A]-o[A],a*(i[A]+a*(o[A]+a*n[A]))},A=function(t){return i[0]+t*(2*o[0]+3*n[0]*t)},r=function(t){for(var e,n=t,o=0;++o<14&&(e=a(n,0)-t,!(Math.abs(e)<.001));)n-=e/A(n);return n};return function(t){return a(r(t),1)}};jQuery.easing[e]=function(e,o,i,a,A){return a*n([t[0],t[1]],[t[2],t[3]])(o/A)+i}}return e}}),$(function(){FastClick.attach(document.body)});var app={open:"open",close:"close",$root:$("html, body"),config:{easing:[.785,.135,.15,.86],defaultDuration:350},init:function(){app.anchorJS(),app.anchors(),app.hightlightLanguage(),$(".nav--access").on("click",this.toggleNav)},anchorJS:function(){anchors.options.placement="left",anchors.add("main h2, main h3")},anchors:function(){var t="";$("main").find("h2[id]").each(function(e,n){t+='<a class="post__nav__anchor" href="#'+$(n).attr("id")+'">'+$(n).text()+"</a>"}),$(".post__nav").html(t),app.scroller(),app.backToTop()},hightlightLanguage:function(){$("code").filter("[data-lang]").each(function(){var t=$(this),e=t.data("lang");t.parent().prepend('<div class="lang">'+e+"</div>")})},scroller:function(){$("a[href^=#]").on("click",function(t){t.preventDefault();var e=$(this).attr("href"),n=$(e).offset().top;$("html, body").animate({scrollTop:n-100},app.config.defaultDuration,$.bez(app.config.easing))})},backToTop:function(){var t=300,e=1200,n=app.config.defaultDuration,o=$.bez(app.config.easing);$back_to_top=$(".backtotop"),$(window).scroll(function(){$(this).scrollTop()>t?$back_to_top.addClass("backtotop--is-visible"):$back_to_top.removeClass("backtotop--is-visible backtotop--fade-out"),$(this).scrollTop()>e&&$back_to_top.addClass("backtotop--fade-out")}),$back_to_top.on("click",function(t){t.preventDefault(),$("body,html").animate({scrollTop:0},n,o)})}};app.init();