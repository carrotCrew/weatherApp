//IMPORTY MODUŁÓW
import { updateWeather } from './update';
import { changeBackground } from './changeBackground';
import { getDayNames } from './getDayNames';
// import { changeCity } from './change';

//DEFINICJE ZMIENNYCH  
const apiKey = "cf8dc6b8051743a8b67a42d252ffe825";
const currentDate = new Date();
let cityId = "3081368";
// ^ tutaj na sztywno wpisany cityId, ale trzeba będzie obcykać
// moduł który będzie obsługiwał zmianę miasta (change.js)


//WYWOŁANE PO ZAŁADOWANIU HTML
document.addEventListener("DOMContentLoaded", function(event) {

    const weatherContainers = {
        cityContainer: document.querySelector('.city'),
        iconContainer: document.querySelector('.icon'),
        descriptionContainer: document.querySelector('.description'),
        temperatureContainer: document.querySelector('.temperature'),
        humidityContainer: document.querySelector('.humidity'),
        highTempContainer: document.querySelector('.high-temp'),
        lowTempContainer: document.querySelector('.low-temp'),
        windContainer: document.querySelector('.wind'),
        temperatureContainer11: document.querySelector('.temperature11'),
        temperatureContainer12: document.querySelector('.temperature12'),
        temperatureContainer22: document.querySelector('.temperature22'),
        temperatureContainer21: document.querySelector('.temperature21'),
        temperatureContainer31: document.querySelector('.temperature31'),
        temperatureContainer32: document.querySelector('.temperature32'),
        temperatureContainer41: document.querySelector('.temperature41'),
        temperatureContainer42: document.querySelector('.temperature42'),
        iconContainer1: document.querySelector('.icon1'),
        iconContainer2: document.querySelector('.icon2'),
        iconContainer3: document.querySelector('.icon3'),
        iconContainer4: document.querySelector('.icon4'),
    };
    
    changeBackground(currentDate);
    getDayNames(currentDate);
    updateWeather(apiKey, cityId, weatherContainers, currentDate);
});


// //wyszukiwanie miasta

// function cityName(){
//     let input = document.getElementById("input1").value;
//     console.log(input);
//     return input;
// }
// var subButton = document.getElementById('subButton');
// subButton.addEventListener('click', cityName, false);


// var para = document.querySelector('.city');

// para.addEventListener('click', updateName);

// function updateName() {
//     var city = prompt('W jakim mieście interesuje Cie pogoda? :)');
//     para.textContent = 'Pogoda dla: ' + city;
// }






