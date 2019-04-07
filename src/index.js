//IMPORTY MODUŁÓW
import { updateWeather } from './update';
// import { changeCity } from './change';

//DEFINICJE ZMIENNYCH  
const apiKey = "cf8dc6b8051743a8b67a42d252ffe825";
let cityId = "3081368";
// ^ tutaj na sztywno wpisany cityId, ale trzeba będzie obcykać
// moduł który będzie obsługiwał zmianę miasta (change.js)
// do wyświetlenia następnich dni tygodnia trzeba bedzie korzystać z tego : https://openweathermap.org/forecast5

//WYWOŁANE PO ZAŁADOWANIU HTML
document.addEventListener("DOMContentLoaded", function(event) {
    const weatherContainers = {
        cityContainer: document.querySelector('.city'),
        iconContainer: document.querySelector('.icon'),
        descriptionContainer: document.querySelector('.description'),
        temperatureContainer: document.querySelector('.temperature'),
        humidityContainer: document.querySelector('.humidity'),
        highTempContainer: document.querySelector('.high-temp'),
        lowTempContainer: document.querySelector('.low-temp-night'),
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

    updateWeather(apiKey, cityId, weatherContainers);
});


//wyszukiwanie miasta

function cityName(){
    let input = document.getElementById("input1").value;
    console.log(input);
    return input;
}
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', cityName, false);


var para = document.querySelector('.city');

para.addEventListener('click', updateName);

function updateName() {
    var city = prompt('W jakim mieście interesuje Cie pogoda? :)');
    para.textContent = 'Pogoda dla: ' + city;
}


//ZMIANA KOLEJNYCH DNI 
const currentDate = new Date();
const day0 = currentDate.getDay();

const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

const day1 = days[day0 + 1];
const day2 = days[day0 + 2];
const day3 = days[day0 + 3];
const day4 = days[day0 + 4];

document.querySelector('.day1').innerHTML = `${day1}`
document.querySelector('.day2').innerHTML = `${day2}`
document.querySelector('.day3').innerHTML = `${day3}`
document.querySelector('.day4').innerHTML = `${day4}`


//ZMIANA BG W ZALEZNOSCI OD PORY DNIA
var currentTime = new Date().getHours();

if (6 <= currentTime && currentTime < 9) {
    if (document.body) {
        document.body.style.background = "url('./images/bg2.jpg')";
    }
} else if (9 <= currentTime && currentTime < 18) {
    if (document.body) {
        document.body.style.backgroundImage = "url('./images/bg.jpg')";
    }
} else if (18 <= currentTime && currentTime < 21) {
    if (document.body) {
        document.body.style.backgroundImage = "url('./images/bg3.jpg')";
    }
} else {
    if (document.body) {
        document.body.style.backgroundImage = "url('./images/bg4.png')";
    }
}
