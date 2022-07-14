"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Base64(){_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",this.encode=function(e){var t,r,n,o,a,i,c="",s=0;for(e=_utf8_encode(e);s<e.length;)n=(t=e.charCodeAt(s++))>>2,o=(3&t)<<4|(t=e.charCodeAt(s++))>>4,a=(15&t)<<2|(r=e.charCodeAt(s++))>>6,i=63&r,isNaN(t)?a=i=64:isNaN(r)&&(i=64),c=c+_keyStr.charAt(n)+_keyStr.charAt(o)+_keyStr.charAt(a)+_keyStr.charAt(i);return c},this.decode=function(e){var t,r,n,o,a,i,c="",s=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");s<e.length;)n=_keyStr.indexOf(e.charAt(s++)),t=(15&(o=_keyStr.indexOf(e.charAt(s++))))<<4|(a=_keyStr.indexOf(e.charAt(s++)))>>2,r=(3&a)<<6|(i=_keyStr.indexOf(e.charAt(s++))),c+=String.fromCharCode(n<<2|o>>4),64!==a&&(c+=String.fromCharCode(t)),64!==i&&(c+=String.fromCharCode(r));return c=_utf8_decode(c)},_utf8_encode=function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):t=127<n&&n<2048?(t+=String.fromCharCode(n>>6|192))+String.fromCharCode(63&n|128):(t=(t+=String.fromCharCode(n>>12|224))+String.fromCharCode(n>>6&63|128))+String.fromCharCode(63&n|128)}return t},_utf8_decode=function(e){var t,r="",n=0;for(c1=c2=0;n<e.length;)(t=e.charCodeAt(n))<128?(r+=String.fromCharCode(t),n++):191<t&&t<224?(c2=e.charCodeAt(n+1),r+=String.fromCharCode((31&t)<<6|63&c2),n+=2):(c2=e.charCodeAt(n+1),c3=e.charCodeAt(n+2),r+=String.fromCharCode((15&t)<<12|(63&c2)<<6|63&c3),n+=3);return r}}Date.prototype.format=function(e){e=e||"yyyy-MM-dd hh:mm:ss";var t,r={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(t in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?r[t]:("00"+r[t]).substr((""+r[t]).length)));return e},Array.unique=function(e){var t=[],r=e;if(r.length<=1)return r;for(var n=0;0<r.length;n++){t.push(r.shift());for(var o=0;o<r.length;o++)t[n]===r[o]&&(r.splice(o,1),o--)}return t},Array.in_array=function(e,t){for(s=0;s<t.length;s++)if((thisEntry=t[s].toString())===e)return!0;return!1};var Event={on:function(e,t){this.handles||Object.defineProperty(this,"handles",{value:{},enumerable:!1,configurable:!0,writable:!0}),this.handles[e]||(this.handles[e]=[]),this.handles[e].push(t)},emit:function(e){if(this.handles[e])for(var t=0;t<this.handles[e].length;t++)this.handles[e][t](arguments[1])}},Yuri2={log:function(e){console&&"function"==typeof console.log&&console.log(e)},f5:function(){location.reload()},getArrayKeys:function(e){var t=[];for(key in e)t.push(key);return t},submitForm:function(e,t){var r=$("<form></form>");for(param in r.attr("action",e),r.attr("method","post"),r.attr("target","_self"),t){var n=$("<input type='hidden' name='"+param+"' />");n.val(t[param]),r.append(n)}r.appendTo("body"),r.css("display","none"),r.submit()},formValidator:function(e){function t(e){$(e)[0].gear_reg.test($(e).val())?($(e).css("color","green"),$(e).css("border-color","rgba(80, 212, 84, 0.9)"),$(e).removeClass("gear-valid-failed")):($(e).css("color","red"),$(e).css("border-color","rgba(239, 104, 104, 0.51)"),$(e).addClass("gear-valid-failed"))}for(field in e.fields){var r=$(e.form+" input[name='"+field+"']");(r=0===(r=0===r.length?$(e.form+" select[name='"+field+"']"):r).length?$(e.form+" textarea[name='"+field+"']"):r)[0].gear_reg=e.fields[field],r.bind("input propertychange change",function(){t(this)}),t(r)}$(e.form).submit(function(){if(0<$(this).find(".gear-valid-failed").length)return alert("验证失败，请检查输入。\r\nValidation failed, please check the input."),!1})},timestampToDate:function(e,t){t=t||"yyyy-MM-dd hh:mm:ss";var r=new Date;return r.setTime(1e3*e),r.format(t)},isPC:function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],r=!0,n=0;n<t.length;n++)if(0<e.indexOf(t[n])){r=!1;break}return r},isSmallScreen:function(e){return e=e||768,document.body.clientWidth<e},clone:function(e){if("object"===_typeof(e))if(null===e)t=null;else if(e instanceof Array)for(var t=[],r=0,n=e.length;r<n;r++)t.push(Yuri2.clone(e[r]));else for(var o in t={},e)t[o]=Yuri2.clone(e[o]);else t=e;return t},isSet:function(e){return!(null==e)},in_array:function(e,t){for(s=0;s<t.length;s++)if((thisEntry=t[s].toString())===e)return!0;return!1},isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},jsonMerge:function(e,t,r){var n,o={};for(n in e)o[n]=e[n];for(n in t)o[n]=!0!==r||this.isArray(o[n])||this.isArray(t[n])||!0!==r||"object"!==_typeof(o[n])||"object"!==_typeof(t[n])?t[n]:Yuri2.jsonMerge(o[n],t[n],!1);return o},randInt:function(e,t){t=t-e+1;return Math.floor(Math.random()*t+e)},shuffle:function(e){for(var t,r,n=e.length-1;0<n;n--)t=Math.floor(Math.random()*(n+1)),r=e[n],e[n]=e[t],e[t]=r;return e},htmlspecialchars:function(e){return e=(e=(e=(e=(e=e.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/"/g,"&quot;")).replace(/'/g,"&#039;")},htmlspecialchars_decode:function(e){return e=(e=(e=(e=(e=e.replace(/&amp;/g,"&")).replace(/&lt;/g,"<")).replace(/&gt;/g,">")).replace(/&quot;/g,"''")).replace(/&#039;/g,"'")},textOverFlow:function(e,t){return e.length>t?e.substring(0,t)+"...":e},getLang:function(){return(navigator.language||navigator.browserLanguage).toLowerCase()},iframeOnClick:{resolution:200,iframes:[],interval:null,Iframe:function(){this.element=arguments[0],this.cb=arguments[1],this.hasTracked=!1},track:function(e,t){var r;this.iframes.push(new this.Iframe(e,t)),this.interval||((r=this).interval=setInterval(function(){r.checkClick()},this.resolution))},checkClick:function(){if(document.activeElement){var e,t=document.activeElement;for(e in this.iframes)t===this.iframes[e].element?!1===this.iframes[e].hasTracked&&(this.iframes[e].cb.apply(window,[]),this.iframes[e].hasTracked=!0):this.iframes[e].hasTracked=!1}}},loadScript:function(e,t){var r=document.createElement("script");r.type="text/javascript",void 0!==t&&(r.readyState?r.onreadystatechange=function(){"loaded"!==r.readyState&&"complete"!==r.readyState||(r.onreadystatechange=null,t(r))}:r.onload=function(){t(r)}),r.src=e,document.head.appendChild(r)},jsonp:function(e,t,r,n,o){n=n||"data",o=o||"callback";var a=Math.random(),r=(Yuri2.jsonp_funcs||(Yuri2.jsonp_funcs={}),Yuri2.jsonp_funcs[a]=r,"");r+=e,e.indexOf("?")<0&&(r+="?"),0<e.indexOf("&")&&(r+="&"),r+=o+"="+encodeURIComponent('Yuri2.jsonp_funcs["'+a+'"]'),t&&(e=JSON.stringify(t),r+="&"+n+"="+(e=encodeURIComponent(e))),Yuri2.loadScript(r,function(e){e.parentNode.removeChild(e)})},heredoc:function(e){return e.toString().split("\n").slice(1,-1).join("\n")+"\n"},getClientSize:function(){var e=document.body.clientHeight;return{width:document.body.clientWidth,height:e}},wait:function(e,t){var r=setInterval(function(){e&&(clearInterval(r),t())},100)},jsonDeepCopy:function(e){return JSON.parse(JSON.stringify(e))},jsonFormat:function(e){return"object"!==_typeof(e)&&(e=JSON.parse(e)),JSON.stringify(e,null,4)},saveAs:function(c){var s,f,l,u,d,h,t,p,g,n,e;if(!(void 0===c||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent)))return e=c.document,s=function(){return c.URL||c.webkitURL||c},f=e.createElementNS("http://www.w3.org/1999/xhtml","a"),l="download"in f,u=/constructor/i.test(c.HTMLElement)||c.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent),h=function(e){(c.setImmediate||c.setTimeout)(function(){throw e},0)},t=4e4,p=function(e){setTimeout(function(){"string"==typeof e?s().revokeObjectURL(e):e.remove()},t)},g=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},n=function(e,r,t){t||(e=g(e));var n,o,a=this,t="application/octet-stream"===e.type,i=function(){for(var e=a,t="writestart progress write writeend".split(" "),r=void 0,n=(t=[].concat(t)).length;n--;){var o=e["on"+t[n]];if("function"==typeof o)try{o.call(e,r||e)}catch(e){h(e)}}};if(a.readyState=a.INIT,l)return n=s().createObjectURL(e),void setTimeout(function(){var e,t;f.href=n,f.download=r,e=f,t=new MouseEvent("click"),e.dispatchEvent(t),i(),p(n),a.readyState=a.DONE});(d||t&&u)&&c.FileReader?((o=new FileReader).onloadend=function(){var e=d?o.result:o.result.replace(/^data:[^;]*;/,"data:attachment/file;");c.open(e,"_blank")||(c.location.href=e),e=void 0,a.readyState=a.DONE,i()},o.readAsDataURL(e),a.readyState=a.INIT):(n=n||s().createObjectURL(e),!t&&c.open(n,"_blank")||(c.location.href=n),a.readyState=a.DONE,i(),p(n))},e=n.prototype,"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,r){return t=t||e.name||"download",r||(e=g(e)),navigator.msSaveOrOpenBlob(e,t)}:(e.abort=function(){},e.readyState=e.INIT=0,e.WRITING=1,e.DONE=2,e.error=e.onwritestart=e.onprogress=e.onwrite=e.onabort=e.onerror=e.onwriteend=null,function(e,t,r){return new n(e,t||e.name||"download",r)})}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||(void 0).content),getQueryString:function(e){e=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),e=window.location.search.substr(1).match(e);return null!=e?e[2]:null},parseURL:function(e){e=e||location.href;var a=document.createElement("a");return a.href=e,a.href=a.href,{source:e,protocol:a.protocol.replace(":",""),host:a.hostname,port:a.port,query:a.search,params:function(){for(var e,t={},r=a.search.replace(/^\?/,"").split("&"),n=r.length,o=0;o<n;o++)r[o]&&(t[(e=r[o].split("="))[0]]=e[1]);return t}(),file:(a.pathname.match(/\/([^\/?#]+)$/i)||[,""])[1],hash:a.hash.replace("#",""),path:a.pathname.replace(/^([^\/])/,"/$1"),relative:(a.href.match(/tps?:\/\/[^\/]+(.+)/)||[,""])[1],segments:a.pathname.replace(/^\//,"").split("/")}},myBrowser:function(){var e=navigator.userAgent;return-1<e.indexOf("Opera")?"Opera":-1<e.indexOf("Firefox")?"FF":-1<e.indexOf("Chrome")?"Chrome":-1<e.indexOf("Safari")?"Safari":window.ActiveXObject||"ActiveXObject"in window?"IE":void 0},isIE:function(){return"IE"===this.myBrowser()},evalObj:function evalObj(str){return eval("("+str+")")},loadContentFromUrl:function(e,t,r,n){var o;void 0===n&&(n=!0),t=t||"GET";try{o=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){try{o=new XMLHttpRequest}catch(e){return null}}o.open(t,e),n&&o.setRequestHeader("Cache-Control","max-age=0"),o.onreadystatechange=function(){4===o.readyState&&(200===o.status?r(null,o.responseText):r(o.status,o.responseText))};try{o.send(null)}catch(e){r(e,"")}},arrSwapItems:function(e,t,r){return e[t]=e.splice(r,1,e[t])[0],e},arrUpRecord:function(e,t){0!==t&&this.arrSwapItems(e,t,t-1)},arrDownRecord:function(e,t){t!==e.length-1&&this.arrSwapItems(e,t,t+1)},inArray:function(e,t){for(var r=0;r<e.length;r++)if(t===e[r])return!0;return!1},template:function(){for(var e=arguments.length,t=arguments[0],r=1;r<e;r++)var n=new RegExp("\\$\\{"+(r-1)+"\\}","g"),t=t.replace(n,arguments[r]);return t},strToDate:function(e){var r=t.time.split(/[- : \/]/);return new Date(r[0],r[1]-1,r[2],r[3],r[4],r[5])}};