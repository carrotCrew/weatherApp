// DEFINICJE FUNKCJI POTRZEBNYCH DO ZUPDATOWANIA DANYCH DOTYCZĄCYCH POGODY


//funkcje pomocnicze
const firstCapital = (word) => {
    return word[0].toUpperCase() + word.slice(1);
}

const getDayIndex = (list) => {
    let dayDate, hour;
    const index = list.findIndex((day) => {
        dayDate = new Date(day.dt_txt);
        hour = dayDate.getHours();
        day = dayDate.getDay();

        return (hour === 15 & day !== 1);
    });
    return index;
}

const getNightIndex = (list) => {
    let dayDate, hour;
    const index = list.findIndex((day) => {
        dayDate = new Date(day.dt_txt);
        hour = dayDate.getHours();
        day = dayDate.getDay();

        return (hour === 3 & day !== 1);
    });
    return index;
}

// warunki pogodowe aktualne

const getWeatherById = async (key, city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city}&units=metric&APPID=${key}&lang=pl`);
    const currentWeather = await response.json();
    return currentWeather;
};

// warunki pogodowe prognozowane

const getForecastWeatherById = async (key, city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${city}&units=metric&APPID=${key}&lang=pl`);
    const forecastWeather = await response.json();
    return forecastWeather;
};

const assignWeather = (currentWeather, forecastWeather, containers, date) => {
    const { weather, main: { humidity, temp, temp_min, temp_max}, wind: {speed} } = currentWeather;
    const { cityContainer, humidityContainer, windContainer, temperatureContainer, descriptionContainer, iconContainer, lowTempContainer, highTempContainer, temperatureContainer11, temperatureContainer12, temperatureContainer21, temperatureContainer22, temperatureContainer31, temperatureContainer32, temperatureContainer41, temperatureContainer42, iconContainer1, iconContainer2, iconContainer3, iconContainer4 } = containers;
    const dayList = forecastWeather.list;

    const dayIndex = getDayIndex(dayList);
    const nightIndex = getNightIndex(dayList);

    const temp11 = forecastWeather.list[dayIndex].main.temp;
    const temp12 = forecastWeather.list[nightIndex].main.temp;
    const temp21 = forecastWeather.list[dayIndex + 8].main.temp;
    const temp22 = forecastWeather.list[nightIndex + 8].main.temp;
    const temp31 = forecastWeather.list[dayIndex + 16].main.temp;
    const temp32 = forecastWeather.list[nightIndex + 16].main.temp;
    const temp41 = forecastWeather.list[dayIndex + 24].main.temp;
    const temp42 = forecastWeather.list[nightIndex + 24].main.temp;
    const weather1 = forecastWeather.list[6].weather;
    const weather2 = forecastWeather.list[14].weather;
    const weather3 = forecastWeather.list[22].weather;
    const weather4 = forecastWeather.list[30].weather;

    temperatureContainer.innerHTML = `${Math.round(temp)}°C`;
    iconContainer.innerHTML = `<img src='http://openweathermap.org/img/w/${weather[0].icon}.png' width="100" height="100" style="vertical-align: middle" alt="">`; // ten src iconki do zmiany bo te są brzydkie
    descriptionContainer.innerHTML = firstCapital(weather[0].description);
    humidityContainer.innerHTML = `${humidity}%`;
    lowTempContainer.innerHTML = `${Math.round(temp_min)}°C`;
    highTempContainer.innerHTML = `${Math.round(temp_max)}°C`;
    windContainer.innerHTML = `${Math.round(speed)} m/s`;
    temperatureContainer11.innerHTML = `${Math.round(temp11)}°C`;
    temperatureContainer12.innerHTML = `${Math.round(temp12)}°C`;
    temperatureContainer21.innerHTML = `${Math.round(temp21)}°C`;
    temperatureContainer22.innerHTML = `${Math.round(temp22)}°C`;
    temperatureContainer31.innerHTML = `${Math.round(temp31)}°C`;
    temperatureContainer32.innerHTML = `${Math.round(temp32)}°C`;
    temperatureContainer41.innerHTML = `${Math.round(temp41)}°C`;
    temperatureContainer42.innerHTML = `${Math.round(temp42)}°C`;
    iconContainer1.innerHTML = `<img src='http://openweathermap.org/img/w/${weather1[0].icon}.png' width="80" height="80" style="vertical-align: middle" alt="">`;
    iconContainer2.innerHTML = `<img src='http://openweathermap.org/img/w/${weather2[0].icon}.png' width="80" height="80" style="vertical-align: middle" alt="">`;
    iconContainer3.innerHTML = `<img src='http://openweathermap.org/img/w/${weather3[0].icon}.png' width="80" height="80" style="vertical-align: middle" alt="">`;
    iconContainer4.innerHTML = `<img src='http://openweathermap.org/img/w/${weather4[0].icon}.png' width="80" height="80" style="vertical-align: middle" alt="">`;
};

const updateWeather = async (key, city, containers, date) => {
    try {
        const weather = await getWeatherById(key, city);
        const forecastWeather = await getForecastWeatherById(key, city);
        console.log(weather);
        console.log(forecastWeather);
        assignWeather(weather, forecastWeather, containers, date);
    } catch(error) {
        console.log(error);
    }
};

export { updateWeather };