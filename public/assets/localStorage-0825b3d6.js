function c(e){this.message=e}c.prototype=new Error,c.prototype.name="InvalidCharacterError";var l=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new c("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,t,a=0,n=0,i="";t=r.charAt(n++);~t&&(o=a%4?64*o+t:t,a++%4)?i+=String.fromCharCode(255&o>>(-2*a&6)):0)t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(t);return i};function f(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(o){return decodeURIComponent(l(o).replace(/(.)/g,function(t,a){var n=a.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}(r)}catch{return l(r)}}function s(e){this.message=e}function d(e,r){if(typeof e!="string")throw new s("Invalid token specified");var o=(r=r||{}).header===!0?0:1;try{return JSON.parse(f(e.split(".")[o]))}catch(t){throw new s("Invalid token specified: "+t.message)}}s.prototype=new Error,s.prototype.name="InvalidTokenError";function u(e){const r=d(e);console.log("decoded",r),localStorage.setItem("userInfo",JSON.stringify(r)),localStorage.setItem("accessToken",e)}function g(e){localStorage.setItem("refreshToken",e)}function p(){localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("userInfo")}function h(){const e=localStorage.getItem("userInfo");return e!==null?JSON.parse(e):null}export{g as a,p as c,h as g,u as s};