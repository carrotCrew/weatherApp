!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=async(e,t,n)=>{try{const r=await(async(e,t)=>{const n=await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${t}&units=metric&APPID=${e}`);return await n.json()})(e,t),o=await(async(e,t)=>{const n=await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${t}&units=metric&APPID=${e}`);return await n.json()})(e,t);console.log(r),console.log(o),((e,t,n)=>{const{weather:r,main:{humidity:o,temp:i,temp_min:a},wind:{speed:u}}=e,c=t.list[6].main.temp,m=t.list[10].main.temp,d=t.list[14].main.temp,p=t.list[18].main.temp,l=t.list[22].main.temp,s=t.list[26].main.temp,y=t.list[30].main.temp,C=t.list[34].main.temp,{cityContainer:f,humidityContainer:M,windContainer:h,temperatureContainer:S,descriptionContainer:w,iconContainer:T,lowTempContainer:L,temperatureContainer11:$,temperatureContainer12:g,temperatureContainer21:q,temperatureContainer22:H,temperatureContainer31:b,temperatureContainer32:v,temperatureContainer41:P,temperatureContainer42:j}=n;S.innerHTML=`${Math.round(i)}°C`,T.innerHTML=`<img src='http://openweathermap.org/img/w/${r[0].icon}.png' alt="">`,w.innerHTML=r[0].description,M.innerHTML=`${o}%`,L.innerHTML=`${Math.round(a)}°C`,h.innerHTML=`${Math.round(u)} m/s`,$.innerHTML=`${Math.round(c)}°C`,g.innerHTML=`${Math.round(m)}°C`,q.innerHTML=`${Math.round(d)}°C`,H.innerHTML=`${Math.round(p)}°C`,b.innerHTML=`${Math.round(l)}°C`,v.innerHTML=`${Math.round(s)}°C`,P.innerHTML=`${Math.round(y)}°C`,j.innerHTML=`${Math.round(C)}°C`})(r,o,n)}catch(e){console.log(e)}};document.addEventListener("DOMContentLoaded",function(e){const t={cityContainer:document.querySelector(".city"),iconContainer:document.querySelector(".icon"),descriptionContainer:document.querySelector(".description"),temperatureContainer:document.querySelector(".temperature"),humidityContainer:document.querySelector(".humidity"),lowTempContainer:document.querySelector(".low-temp"),windContainer:document.querySelector(".wind"),temperatureContainer11:document.querySelector(".temperature11"),temperatureContainer12:document.querySelector(".temperature12"),temperatureContainer22:document.querySelector(".temperature22"),temperatureContainer21:document.querySelector(".temperature21"),temperatureContainer31:document.querySelector(".temperature31"),temperatureContainer32:document.querySelector(".temperature32"),temperatureContainer41:document.querySelector(".temperature41"),temperatureContainer42:document.querySelector(".temperature42")};r("cf8dc6b8051743a8b67a42d252ffe825","3081368",t)}),document.getElementById("subButton").addEventListener("click",function(){let e=document.getElementById("input1").value;return console.log(e),e},!1);const o=(new Date).getDay(),i=["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],a=i[o+1],u=i[o+2],c=i[o+3],m=i[o+4];document.querySelector(".day1").innerHTML=`${a}`,document.querySelector(".day2").innerHTML=`${u}`,document.querySelector(".day3").innerHTML=`${c}`,document.querySelector(".day4").innerHTML=`${m}`}]);