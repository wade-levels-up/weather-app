(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>v});var i=t(354),r=t.n(i),o=t(314),a=t.n(o),A=t(417),c=t.n(A),s=new URL(t(482),t.b),d=new URL(t(951),t.b),p=new URL(t(446),t.b),l=new URL(t(907),t.b),u=new URL(t(861),t.b),C=new URL(t(513),t.b),m=new URL(t(13),t.b),f=a()(r()),E=c()(s),h=c()(d),g=c()(p),x=c()(l),B=c()(u),b=c()(C),y=c()(m);f.push([n.id,`:root {\n  font-size: 16px;\n  font-family: sans-serif, system-ui;\n  --color-theme-1: rgb(172, 123, 172);\n  --main-card-icon: \n}\n* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n}\n\na:link { color: inherit; }\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  background-color: black;\n  color: aliceblue;\n  min-width: 340px;\n  position: relative;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.error {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1;\n  background-color: rgb(0, 0, 0, 0.9);\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  display: none;\n}\n\n.error p {\n  text-align: center;\n}\n\n.error button {\n  padding: 2px 12px;\n  outline: 1px solid var(--color-theme-1);\n}\n\n.homescreen {\n  width: 100%;\n  height: 100%;\n  background: url(${E});\n  background-size:cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 30px 0px;\n  transition: ease 3s;\n}\n\n.formsection {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#main-form {\n background-color: rgb(0, 0, 0, 0.7);\n padding: 20px;\n border-radius: 10px;\n min-width: 340px;\n border-bottom: 1px solid white;\n margin: 10px 0px;\n}\n\nul { display: flex }\n\ninput {\n  height: 1.5rem;\n  padding-left: 0.5rem;\n  border-radius: 10px 0px 0px 10px;\n  outline: 1px solid var(--color-theme-1);\n}\n\n#submit-location-btn {\n  height: 1.5rem;\n  border-radius: 0px 10px 10px 0px;\n  padding: 0px 0.5rem 0px 0.5rem;\n  outline: 1px solid var(--color-theme-1);\n}\n\nh1 {\n  font-family: 'ride_the_lightning';\n  font-size: 4rem;\n}\n\nh2 {\n  font-size: 1rem;\n  position: relative;\n  top: -12px;\n}\n\n.credit {\n  font-size: 0.7rem;\n}\n\n.subscreen {\n  display: flex;\n  background-color: black;\n  justify-content: center;\n  align-items: center;\n  padding: 2vw;\n  height: fit-content;\n  border-top: 1px solid rgb(0, 0, 0);\n  transition: ease-in-out 1s;\n  padding-bottom: 50px;\n}\n\n#current {\n  height: max-content;\n  padding: 10px;\n  margin: 5px 0px;\n}\n\nol {\n  display: flex;\n  flex-direction: column;\n  width: 90vw;\n  height: fit-content;\n  gap: 2vh;\n}\n\nol li {\n  display: flex;\n  flex-direction: column;\n  gap: 1vh;\n  background-color: rgba(73, 56, 92, 0.35);\n  width: 100%;\n  height: 15vh;\n  border-radius: 10px;\n  border-bottom: 1px solid white;\n}\n\n.cardPropertyMainDiv {\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  gap: 5vw;\n  margin: 15px 0px;\n}\n\n.cardPropertyDiv {\n  display: flex;\n  gap: 2vw;\n  width: 100%;\n  font-size: 0.9rem;\n  padding: 0.2rem;\n}\n\n.curCardSubSection {\n  display: grid;\n  grid-template: 1fr 1fr / 1fr 1fr;\n}\n\n.curMainIcon {\n width: 48px;\n height: 48px;\n background-color: rgb(255, 255, 255);\n}\n\n.sun {\n  -webkit-mask: url(${h}) no-repeat center;\n  mask: url(${h}) no-repeat center;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n}\n\n.cloud {\n  -webkit-mask: url(${g}) no-repeat center;\n  mask: url(${g}) no-repeat center;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n}\n\n.partly-cloudy {\n  -webkit-mask: url(${x}) no-repeat center;\n  mask: url(${x}) no-repeat center;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n}\n\n.rain {\n  -webkit-mask: url(${B}) no-repeat center;\n  mask: url(${B}) no-repeat center;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n}\n\n.snow {\n  -webkit-mask: url(${b}) no-repeat center;\n  mask: url(${b}) no-repeat center;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n}\n\n.wind {\n  -webkit-mask: url(${y}) no-repeat center;\n  mask: url(${y}) no-repeat center;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n}\n\n.weekcard {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  height: max-content;\n  padding: 10px;\n}\n\n.weekcardTop {\n width: 100%;\n text-align: center;\n}\n\n.weekcardLeft {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  width: max-content;\n}\n\n.weekcardRight {\n width: max-content\n}\n\n`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:[":root {\n  font-size: 16px;\n  font-family: sans-serif, system-ui;\n  --color-theme-1: rgb(172, 123, 172);\n  --main-card-icon: \n}\n* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n}\n\na:link { color: inherit; }\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  background-color: black;\n  color: aliceblue;\n  min-width: 340px;\n  position: relative;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.error {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1;\n  background-color: rgb(0, 0, 0, 0.9);\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  display: none;\n}\n\n.error p {\n  text-align: center;\n}\n\n.error button {\n  padding: 2px 12px;\n  outline: 1px solid var(--color-theme-1);\n}\n\n.homescreen {\n  width: 100%;\n  height: 100%;\n  background: url(./images/david-moum-nbqlWhOVu6k-unsplash.jpg);\n  background-size:cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 30px 0px;\n  transition: ease 3s;\n}\n\n.formsection {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#main-form {\n background-color: rgb(0, 0, 0, 0.7);\n padding: 20px;\n border-radius: 10px;\n min-width: 340px;\n border-bottom: 1px solid white;\n margin: 10px 0px;\n}\n\nul { display: flex }\n\ninput {\n  height: 1.5rem;\n  padding-left: 0.5rem;\n  border-radius: 10px 0px 0px 10px;\n  outline: 1px solid var(--color-theme-1);\n}\n\n#submit-location-btn {\n  height: 1.5rem;\n  border-radius: 0px 10px 10px 0px;\n  padding: 0px 0.5rem 0px 0.5rem;\n  outline: 1px solid var(--color-theme-1);\n}\n\nh1 {\n  font-family: 'ride_the_lightning';\n  font-size: 4rem;\n}\n\nh2 {\n  font-size: 1rem;\n  position: relative;\n  top: -12px;\n}\n\n.credit {\n  font-size: 0.7rem;\n}\n\n.subscreen {\n  display: flex;\n  background-color: black;\n  justify-content: center;\n  align-items: center;\n  padding: 2vw;\n  height: fit-content;\n  border-top: 1px solid rgb(0, 0, 0);\n  transition: ease-in-out 1s;\n  padding-bottom: 50px;\n}\n\n#current {\n  height: max-content;\n  padding: 10px;\n  margin: 5px 0px;\n}\n\nol {\n  display: flex;\n  flex-direction: column;\n  width: 90vw;\n  height: fit-content;\n  gap: 2vh;\n}\n\nol li {\n  display: flex;\n  flex-direction: column;\n  gap: 1vh;\n  background-color: rgba(73, 56, 92, 0.35);\n  width: 100%;\n  height: 15vh;\n  border-radius: 10px;\n  border-bottom: 1px solid white;\n}\n\n.cardPropertyMainDiv {\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  gap: 5vw;\n  margin: 15px 0px;\n}\n\n.cardPropertyDiv {\n  display: flex;\n  gap: 2vw;\n  width: 100%;\n  font-size: 0.9rem;\n  padding: 0.2rem;\n}\n\n.curCardSubSection {\n  display: grid;\n  grid-template: 1fr 1fr / 1fr 1fr;\n}\n\n.curMainIcon {\n width: 48px;\n height: 48px;\n background-color: rgb(255, 255, 255);\n}\n\n.sun {\n  -webkit-mask: url('./icons/sun-solid.svg') no-repeat center;\n  mask: url('./icons/sun-solid.svg') no-repeat center;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n}\n\n.cloud {\n  -webkit-mask: url('./icons/cloud-solid.svg') no-repeat center;\n  mask: url('./icons/cloud-solid.svg') no-repeat center;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n}\n\n.partly-cloudy {\n  -webkit-mask: url('./icons/cloud-sun-solid.svg') no-repeat center;\n  mask: url('./icons/cloud-sun-solid.svg') no-repeat center;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n}\n\n.rain {\n  -webkit-mask: url('./icons/cloud-rain-solid.svg') no-repeat center;\n  mask: url('./icons/cloud-rain-solid.svg') no-repeat center;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n}\n\n.snow {\n  -webkit-mask: url('./icons/snowflake-solid.svg') no-repeat center;\n  mask: url('./icons/snowflake-solid.svg') no-repeat center;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n}\n\n.wind {\n  -webkit-mask: url('./icons/wind-solid.svg') no-repeat center;\n  mask: url('./icons/wind-solid.svg') no-repeat center;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n}\n\n.weekcard {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  height: max-content;\n  padding: 10px;\n}\n\n.weekcardTop {\n width: 100%;\n text-align: center;\n}\n\n.weekcardLeft {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  width: max-content;\n}\n\n.weekcardRight {\n width: max-content\n}\n\n"],sourceRoot:""}]);const v=f},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);i&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),o="/*# ".concat(r," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},a=[],A=0;A<n.length;A++){var c=n[A],s=i.base?c[0]+i.base:c[0],d=o[s]||0,p="".concat(s," ").concat(d);o[s]=d+1;var l=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(u);else{var C=r(u,i);i.byIndex=A,e.splice(A,0,{identifier:p,updater:C,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var A=t(o[a]);e[A].references--}for(var c=i(n,r),s=0;s<o.length;s++){var d=t(o[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},861:(n,e,t)=>{n.exports=t.p+"5d4d4220b43da80a8579.svg"},446:(n,e,t)=>{n.exports=t.p+"9f8aa575160b8b40b7a0.svg"},907:(n,e,t)=>{n.exports=t.p+"22a1568c455272476ee5.svg"},513:(n,e,t)=>{n.exports=t.p+"ef37cba21ff85190e9c7.svg"},951:(n,e,t)=>{n.exports=t.p+"89aa5bcbb77c65fe80e9.svg"},13:(n,e,t)=>{n.exports=t.p+"7b5dd733c5a49f559187.svg"},482:(n,e,t)=>{n.exports=t.p+"b75016234a0cde164731.jpg"}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=i[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var i=t(72),r=t.n(i),o=t(825),a=t.n(o),A=t(659),c=t.n(A),s=t(56),d=t.n(s),p=t(540),l=t.n(p),u=t(113),C=t.n(u),m=t(208),f={};async function E(n){return await async function(n){const e=await async function(n){return await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cname%2Ctempmax%2Ctempmin%2Ctemp%2Chumidity%2Cprecipprob%2Cuvindex%2Csunrise%2Csunset%2Cmoonphase%2Cconditions%2Cdescription%2Cicon&key=8E32DPMRNWDWVYMCLXSCYWDBC&contentType=json`,{mode:"cors"})}(n);return await e.json()}(n)}function h(n,e,t,i,r,o){const a=document.createElement(n);return e&&(a.textContent=e),t&&a.setAttribute(t,i),r&&a.setAttribute(r,o),a}f.styleTagTransform=C(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),r()(m.A,f),m.A&&m.A.locals&&m.A.locals;const g=document.querySelector(".card-city"),x=document.querySelector("#curTemp"),B=document.querySelector("#curCond"),b=document.querySelector("#curDesc"),y=document.querySelector("#curMinTemp"),v=document.querySelector("#curMaxTemp"),k=document.querySelector("#curUVIndex"),w=document.querySelector("#curChanceOfRain"),z=document.querySelector(".curMainIcon"),D=Array.from(document.querySelectorAll(".weekcard"));function S(n){const e=n.split("-"),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e[1]-1];return`${e[2]} - ${t}`}function $(n){n.style.display="flex"}function j(n){n.style.display="none"}function M(n,e){e.className="curMainIcon","clear-day"!==n&&"clear-night"!==n||e.classList.add("sun"),"fog"!==n&&"cloudy"!==n||e.classList.add("cloud"),"partly-cloudy-day"!==n&&"partly-cloudy-night"!==n||e.classList.add("partly-cloudy"),"snow"===n&&e.classList.add("snow"),"wind"===n&&e.classList.add("wind"),"rain"===n&&e.classList.add("rain")}const T=document.querySelector("#main-form"),R=document.querySelector("#input-city"),L=document.querySelector(".subscreen"),q=document.querySelector("#submit-location-btn"),U=document.querySelector(".error");let W,Y;document.querySelector(".error button").addEventListener("click",(()=>{j(U)})),T.addEventListener("submit",(n=>{n.preventDefault(),q.textContent="Loading...",async function(n){try{W=await async function(n){const e=await E(n);return{city:e.resolvedAddress,currentTempCelcius:`${e.currentConditions.temp}°c`,currentTempFahrenheit:9*e.currentConditions.temp/5+32+"°f",mintempCelcius:`${e.days[0].tempmin}°c`,maxtempCelcius:`${e.days[0].tempmax}°c`,mintempFahrenheit:9*e.days[0].tempmin/5+32+"°f",maxtempFahrenheit:9*e.days[0].tempmax/5+32+"°f",curUV:e.currentConditions.uvindex,curCondition:e.currentConditions.conditions,longDescription:e.description,chanceOfRain:`${e.currentConditions.precipprob}%`,icon:e.currentConditions.icon}}(n),Y=await async function(n){const e=await E(n),t=[];for(let n=0;n<8;n+=1)t.push({city:`${e.resolvedAddress}`,date:`${e.days[n].datetime}`,maxtemp:`${e.days[n].tempmax}`,mintemp:`${e.days[n].tempmin}`,chanceOfRain:`${e.days[n].precipprob}`,uvindex:`${e.days[n].uvindex}`,icon:`${e.days[n].icon}`,temp:`${e.days[n].temp}`});return t}(n),W&&Y&&(e=W,g.textContent=e.city,x.textContent=`${e.currentTempCelcius}`,B.textContent=e.curCondition,b.textContent=e.longDescription,y.textContent=`Min: ${e.mintempCelcius}`,v.textContent=`Max ${e.maxtempCelcius}`,k.textContent=`UV Index ${e.curUV}`,w.textContent=`Chance of rain: ${e.chanceOfRain}`,M(e.icon,z),function(n){for(let e=0;e<7;e+=1){const t=h("div","","class","curMainIcon"),i=h("div","","class","weekcardLeft"),r=h("div","","class","weekcardRight"),o=h("div","","class","weekcardTop"),a=h("div","","class","cardPropertyDiv"),A=h("div","","class","cardPropertyDiv"),c=h("div","","class","cardPropertyDiv"),s=h("div","","class","cardPropertyDiv"),d=h("p",`Min: ${n[e].mintemp}°c`),p=h("p",`Max: ${n[e].maxtemp}°c`),l=h("p",`Chance of rain: ${n[e].chanceOfRain}%`),u=h("p",`UV Index: ${n[e].uvindex}`),C=h("span","","class","fa-solid fa-temperature-low"),m=h("span","","class","fa-solid fa-temperature-high"),f=h("span","","class","fa-solid fa-cloud-rain"),E=h("span","","class","fa-solid fa-radiation");M(n[e].icon,t),0===e?o.appendChild(h("p","Today")):o.appendChild(h("p",`${S(n[e].date)}`)),D[e].appendChild(o),i.appendChild(t),i.appendChild(h("p",`${n[e].temp}°c`)),D[e].appendChild(i),a.appendChild(C),a.appendChild(d),r.appendChild(a),A.appendChild(m),A.appendChild(p),r.appendChild(A),c.appendChild(f),c.appendChild(l),r.appendChild(c),s.appendChild(E),s.appendChild(u),r.appendChild(s),D[e].appendChild(r)}}(Y),$(L),q.textContent="See Weather")}catch(n){$(U),j(L),console.error("There was an issue fetching the weather data"),q.textContent="See Weather",R.value=""}var e}(`${R.value}`)}))})();
//# sourceMappingURL=main.bundle.js.map