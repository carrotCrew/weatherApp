//IMPORTY MODUŁÓW
import { updateWeather } from './update';

//DEFINICJE ZMIENNYCH  
const apiKey = "cf8dc6b8051743a8b67a42d252ffe825";
let cityId = "3081368";

//WYWOŁANE PO ZAŁADOWANIU HTML
document.addEventListener("DOMContentLoaded", function(event) {
    const weatherContainers = {
        cityContainer: document.querySelector('.city'),
        iconContainer: document.querySelector('.icon'),
        descriptionContainer: document.querySelector('.description'),
        temperatureContainer: document.querySelector('.temperature'),
        humidityContainer: document.querySelector('.humidity'),
        lowTempContainer: document.querySelector('.low-temp'),
        windContainer: document.querySelector('.wind')
    };

    updateWeather(apiKey, cityId, weatherContainers);
});

