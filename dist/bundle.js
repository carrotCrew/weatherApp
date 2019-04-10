/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/changeBackground.js":
/*!*********************************!*\
  !*** ./src/changeBackground.js ***!
  \*********************************/
/*! exports provided: changeBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeBackground\", function() { return changeBackground; });\n//ZMIANA BG W ZALEZNOSCI OD PORY DNIA\r\n\r\nconst changeBackground = (currentDate) => {\r\n    const currentTime = currentDate.getHours();\r\n    let imgUrl = \"\";\r\n\r\n    if (6 <= currentTime && currentTime < 9) {\r\n        imgUrl = \"url('./images/bg2.jpg')\";\r\n    } else if (9 <= currentTime && currentTime < 18) {\r\n        imgUrl = \"url('./images/bg.jpg')\";\r\n    } else if (18 <= currentTime && currentTime < 21) {\r\n        imgUrl = \"url('./images/bg3.jpg')\";\r\n    } else {\r\n        imgUrl = \"url('./images/bg4.png')\";\r\n    }\r\n\r\n    document.body.style.backgroundImage = imgUrl;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/changeBackground.js?");

/***/ }),

/***/ "./src/changeCity.js":
/*!***************************!*\
  !*** ./src/changeCity.js ***!
  \***************************/
/*! exports provided: changeCity, getCities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeCity\", function() { return changeCity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCities\", function() { return getCities; });\n/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update */ \"./src/update.js\");\n//MODUŁ DO ZMIANY MIASTA\r\n\r\n\r\nconst showSpinner = (cityContainer) => {\r\n    cityContainer.innerHTML += ` <i class=\"fas fa-spinner\"></i>`;\r\n}\r\n\r\nconst hideSpinner = () => {\r\n    const spinner = document.querySelector('.fa-spinner');\r\n    if (spinner) spinner.remove();\r\n}\r\n\r\nconst getCities = async () => {\r\n    const response = await fetch(`https://raw.githubusercontent.com/carrotCrew/weatherApp/functionality/src/city.list.json`);\r\n    const cityList = await response.json();\r\n    return cityList;\r\n}\r\n\r\nconst correctPolishLetters = (string) => {\r\n    var letters = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};\r\n    return string.replace(/[ąćęłńóśźż]/g, match => letters[match]);\r\n}\r\n\r\nconst changeCity = async (key, containers, date) => {\r\n    try {\r\n        const choosenCity = prompt('Podaj miasto:', 'Wrocław');\r\n        if(!choosenCity){\r\n            alert(`Należy podać nazwę miasta!`);\r\n            return\r\n        }\r\n        \r\n        const correctChoosenCity = correctPolishLetters(choosenCity.toLowerCase());\r\n        \r\n        const { cityContainer } = containers;\r\n        hideSpinner();\r\n        showSpinner(cityContainer);\r\n\r\n        const cityList = await getCities();\r\n        const polishCities = cityList.filter((city) => city.country === \"PL\");\r\n        console.log(polishCities);\r\n        \r\n        const cityArr = [];\r\n        let cityId;\r\n        let cityName;\r\n\r\n        for (let city of polishCities) {\r\n\r\n            if(city.name.toLowerCase() === correctChoosenCity){\r\n                cityArr.push(city);\r\n                cityId = city.id;\r\n                cityName = Object(_update__WEBPACK_IMPORTED_MODULE_0__[\"firstCapital\"])(choosenCity);\r\n                cityContainer.innerHTML = `${cityName}`;\r\n                break\r\n            }\r\n        }\r\n \r\n        if (!cityArr.length) {\r\n            alert(`Niestety, w naszej bazie nie ma miasta o nazwie: ${choosenCity}.`);\r\n            hideSpinner();\r\n            return\r\n        }\r\n\r\n        Object(_update__WEBPACK_IMPORTED_MODULE_0__[\"updateWeather\"])(key, cityId, containers, date);\r\n\r\n    } catch (err) {\r\n        console.error(err);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/changeCity.js?");

/***/ }),

/***/ "./src/getDayNames.js":
/*!****************************!*\
  !*** ./src/getDayNames.js ***!
  \****************************/
/*! exports provided: getDayNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDayNames\", function() { return getDayNames; });\n// GENEROWANIE DNI TYGODNIA\r\n\r\n\r\n\r\nconst getDayNames = (currentDate) => {\r\n    const days = [\"Niedziela\", \"Poniedziałek\", \"Wtorek\", \"Środa\", \"Czwartek\", \"Piątek\", \"Sobota\"];\r\n    \r\n    let dayNumber = currentDate.getDay() + 1;\r\n\r\n    const nextDay = () => {\r\n        if (days[dayNumber] === undefined) {\r\n            dayNumber = 0;\r\n        }\r\n        return dayNumber++;\r\n    }\r\n    \r\n    const day1 = days[nextDay()];\r\n    const day2 = days[nextDay()];\r\n    const day3 = days[nextDay()];\r\n    const day4 = days[nextDay()];\r\n    \r\n    document.querySelector('.day1').innerHTML = `${day1}`\r\n    document.querySelector('.day2').innerHTML = `${day2}`\r\n    document.querySelector('.day3').innerHTML = `${day3}`\r\n    document.querySelector('.day4').innerHTML = `${day4}`\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/getDayNames.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update */ \"./src/update.js\");\n/* harmony import */ var _changeBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeBackground */ \"./src/changeBackground.js\");\n/* harmony import */ var _getDayNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDayNames */ \"./src/getDayNames.js\");\n/* harmony import */ var _changeCity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeCity */ \"./src/changeCity.js\");\n//IMPORTY MODUŁÓW\r\n\r\n\r\n\r\n\r\n\r\n//DEFINICJE ZMIENNYCH  \r\nconst apiKey = \"cf8dc6b8051743a8b67a42d252ffe825\";\r\nconst currentDate = new Date();\r\nlet defaultCityId = \"3081368\";\r\n\r\n\r\n//WYWOŁANE PO ZAŁADOWANIU HTML\r\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\r\n    const weatherContainers = {\r\n        cityContainer: document.querySelector('.city'),\r\n        iconContainer: document.querySelector('.icon'),\r\n        descriptionContainer: document.querySelector('.description'),\r\n        temperatureContainer: document.querySelector('.temperature'),\r\n        humidityContainer: document.querySelector('.humidity'),\r\n        highTempContainer: document.querySelector('.high-temp'),\r\n        lowTempContainer: document.querySelector('.low-temp'),\r\n        windContainer: document.querySelector('.wind'),\r\n        temperatureContainer11: document.querySelector('.temperature11'),\r\n        temperatureContainer12: document.querySelector('.temperature12'),\r\n        temperatureContainer22: document.querySelector('.temperature22'),\r\n        temperatureContainer21: document.querySelector('.temperature21'),\r\n        temperatureContainer31: document.querySelector('.temperature31'),\r\n        temperatureContainer32: document.querySelector('.temperature32'),\r\n        temperatureContainer41: document.querySelector('.temperature41'),\r\n        temperatureContainer42: document.querySelector('.temperature42'),\r\n        iconContainer1: document.querySelector('.icon1'),\r\n        iconContainer2: document.querySelector('.icon2'),\r\n        iconContainer3: document.querySelector('.icon3'),\r\n        iconContainer4: document.querySelector('.icon4'),\r\n    };\r\n    \r\n    \r\n    Object(_changeBackground__WEBPACK_IMPORTED_MODULE_1__[\"changeBackground\"])(currentDate);\r\n    Object(_getDayNames__WEBPACK_IMPORTED_MODULE_2__[\"getDayNames\"])(currentDate);\r\n    Object(_update__WEBPACK_IMPORTED_MODULE_0__[\"updateWeather\"])(apiKey, defaultCityId, weatherContainers, currentDate);\r\n    \r\n    document.querySelector('.fa-search').addEventListener('click', (event) => Object(_changeCity__WEBPACK_IMPORTED_MODULE_3__[\"changeCity\"])(apiKey, weatherContainers, currentDate));\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/update.js":
/*!***********************!*\
  !*** ./src/update.js ***!
  \***********************/
/*! exports provided: updateWeather, firstCapital */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateWeather\", function() { return updateWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstCapital\", function() { return firstCapital; });\n// DEFINICJE FUNKCJI POTRZEBNYCH DO ZUPDATOWANIA DANYCH DOTYCZĄCYCH POGODY\r\n\r\n\r\n//funkcje pomocnicze\r\nconst firstCapital = (word) => {\r\n    return word[0].toUpperCase() + word.slice(1).toLowerCase();\r\n}\r\n\r\nconst getDayIndex = (list) => {\r\n    let dayDate, hour;\r\n    const index = list.findIndex((day) => {\r\n        dayDate = new Date(day.dt_txt);\r\n        hour = dayDate.getHours();\r\n        day = dayDate.getDay();\r\n\r\n        return (hour === 15 & day !== 1);\r\n    });\r\n    return index;\r\n}\r\n\r\nconst getNightIndex = (list) => {\r\n    let dayDate, hour;\r\n    const index = list.findIndex((day) => {\r\n        dayDate = new Date(day.dt_txt);\r\n        hour = dayDate.getHours();\r\n        day = dayDate.getDay();\r\n\r\n        return (hour === 3 & day !== 1);\r\n    });\r\n    return index;\r\n}\r\n\r\n// warunki pogodowe aktualne\r\n\r\nconst getWeatherById = async (key, city) => {\r\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city}&units=metric&APPID=${key}&lang=pl`);\r\n    const currentWeather = await response.json();\r\n    return currentWeather;\r\n};\r\n\r\n// warunki pogodowe prognozowane\r\n\r\nconst getForecastWeatherById = async (key, city) => {\r\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${city}&units=metric&APPID=${key}&lang=pl`);\r\n    const forecastWeather = await response.json();\r\n    return forecastWeather;\r\n};\r\n\r\nconst assignWeather = (currentWeather, forecastWeather, containers, date) => {\r\n    const { weather, main: { humidity, temp, temp_min, temp_max}, wind: {speed} } = currentWeather;\r\n    const { humidityContainer, windContainer, temperatureContainer, descriptionContainer, iconContainer, lowTempContainer, highTempContainer, temperatureContainer11, temperatureContainer12, temperatureContainer21, temperatureContainer22, temperatureContainer31, temperatureContainer32, temperatureContainer41, temperatureContainer42, iconContainer1, iconContainer2, iconContainer3, iconContainer4 } = containers;\r\n    const dayList = forecastWeather.list;\r\n\r\n    const dayIndex = getDayIndex(dayList);\r\n    const nightIndex = getNightIndex(dayList);\r\n\r\n    const temp11 = forecastWeather.list[dayIndex].main.temp;\r\n    const temp12 = forecastWeather.list[nightIndex].main.temp;\r\n    const temp21 = forecastWeather.list[dayIndex + 8].main.temp;\r\n    const temp22 = forecastWeather.list[nightIndex + 8].main.temp;\r\n    const temp31 = forecastWeather.list[dayIndex + 16].main.temp;\r\n    const temp32 = forecastWeather.list[nightIndex + 16].main.temp;\r\n    const temp41 = forecastWeather.list[dayIndex + 24].main.temp;\r\n    const temp42 = forecastWeather.list[nightIndex + 24].main.temp;\r\n    const weather1 = forecastWeather.list[6].weather;\r\n    const weather2 = forecastWeather.list[14].weather;\r\n    const weather3 = forecastWeather.list[22].weather;\r\n    const weather4 = forecastWeather.list[30].weather;\r\n\r\n    temperatureContainer.innerHTML = `${Math.round(temp)}°C`;\r\n    iconContainer.innerHTML = `<img src='./images/icons/${weather[0].icon}.png' width=\"100\" height=\"100\" style=\"vertical-align: middle\" alt=\"\">`;\r\n    descriptionContainer.innerHTML = firstCapital(weather[0].description);\r\n    humidityContainer.innerHTML = `${humidity}%`;\r\n    lowTempContainer.innerHTML = `${Math.round(temp_min)}°C`;\r\n    highTempContainer.innerHTML = `${Math.round(temp_max)}°C`;\r\n    windContainer.innerHTML = `${Math.round(speed)} m/s`;\r\n    temperatureContainer11.innerHTML = `${Math.round(temp11)}°C`;\r\n    temperatureContainer12.innerHTML = `${Math.round(temp12)}°C`;\r\n    temperatureContainer21.innerHTML = `${Math.round(temp21)}°C`;\r\n    temperatureContainer22.innerHTML = `${Math.round(temp22)}°C`;\r\n    temperatureContainer31.innerHTML = `${Math.round(temp31)}°C`;\r\n    temperatureContainer32.innerHTML = `${Math.round(temp32)}°C`;\r\n    temperatureContainer41.innerHTML = `${Math.round(temp41)}°C`;\r\n    temperatureContainer42.innerHTML = `${Math.round(temp42)}°C`;\r\n    iconContainer1.innerHTML = `<img src='./images/icons/${weather1[0].icon}.png' width=\"50\" height=\"50\" style=\"vertical-align: middle\" alt=\"\">`;\r\n    iconContainer2.innerHTML = `<img src='./images/icons/${weather2[0].icon}.png' width=\"50\" height=\"50\" style=\"vertical-align: middle\" alt=\"\">`;\r\n    iconContainer3.innerHTML = `<img src='./images/icons/${weather3[0].icon}.png' width=\"50\" height=\"50\" style=\"vertical-align: middle\" alt=\"\">`;\r\n    iconContainer4.innerHTML = `<img src='./images/icons/${weather4[0].icon}.png' width=\"50\" height=\"50\" style=\"vertical-align: middle\" alt=\"\">`;\r\n};\r\n\r\nconst updateWeather = async (key, city, containers, date) => {\r\n    try {\r\n        const weather = await getWeatherById(key, city);\r\n        const forecastWeather = await getForecastWeatherById(key, city);\r\n        assignWeather(weather, forecastWeather, containers, date);\r\n    } catch(error) {\r\n        console.error(error);\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/update.js?");

/***/ })

/******/ });