// DEFINICJE FUNKCJI POTRZEBNYCH DO ZUPDATOWANIA DANYCH DOTYCZĄCYCH POGODY

// warunki pogodowe aktualne

const getWeatherById = async (key, city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city}&units=metric&APPID=${key}`);
    const currentWeather = await response.json();
    return currentWeather;
};

// warunki pogodowe prognozowane

const getForecastWeatherById = async (key, city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${city}&units=metric&APPID=${key}`);
    const forecastWeather = await response.json();
    return forecastWeather;
};

const assignWeather = (currentWeather, forecastWeather, containers) => {
    const { weather, main: { humidity, temp, temp_min }, wind: {speed} } = currentWeather;

   
    
    const temp11 = forecastWeather.list[6].main.temp;
    const temp12 = forecastWeather.list[10].main.temp;
    const temp21 = forecastWeather.list[14].main.temp;
    const temp22 = forecastWeather.list[18].main.temp;
    const temp31 = forecastWeather.list[22].main.temp;
    const temp32 = forecastWeather.list[26].main.temp;
    const temp41 = forecastWeather.list[30].main.temp;
    const temp42 = forecastWeather.list[34].main.temp;
  

     //proba destruktyruzacji nowego obiektu z paraetrami pogodwymi dla 5 dni
      //const dt = currentWeather.list[0].dt;
    //const { list: [item]  } = currentWeather;
    //console.log(item.dt);
    //console.log(weather);
    //console.log(weather[0].icon);
    
    const { cityContainer, humidityContainer, windContainer, temperatureContainer, descriptionContainer, iconContainer, lowTempContainer, temperatureContainer11, temperatureContainer12, temperatureContainer21, temperatureContainer22, temperatureContainer31, temperatureContainer32, temperatureContainer41, temperatureContainer42 } = containers;

   
    temperatureContainer.innerHTML = `${Math.round(temp)}°C`;
    iconContainer.innerHTML = `<img src='http://openweathermap.org/img/w/${weather[0].icon}.png' alt="">`; // ten src iconki do zmiany bo te są brzydkie
    descriptionContainer.innerHTML = weather[0].description;
    humidityContainer.innerHTML = `${humidity}%`;
    lowTempContainer.innerHTML = `${Math.round(temp_min)}°C`;
    windContainer.innerHTML = `${Math.round(speed)} m/s`;
    temperatureContainer11.innerHTML = `${Math.round(temp11)}°C`;
    temperatureContainer12.innerHTML = `${Math.round(temp12)}°C`;
    temperatureContainer21.innerHTML = `${Math.round(temp21)}°C`;
    temperatureContainer22.innerHTML = `${Math.round(temp22)}°C`;
    temperatureContainer31.innerHTML = `${Math.round(temp31)}°C`;
    temperatureContainer32.innerHTML = `${Math.round(temp32)}°C`;
    temperatureContainer41.innerHTML = `${Math.round(temp41)}°C`;
    temperatureContainer42.innerHTML = `${Math.round(temp42)}°C`;
    

};

const updateWeather = async (key, city, containers) => {
    try {
        const weather = await getWeatherById(key, city);
        const forecastWeather = await getForecastWeatherById(key, city);
        console.log(weather);
        console.log(forecastWeather);
        assignWeather(weather, forecastWeather, containers);
    } catch(error) {
        console.log(error);
    }
};

export { updateWeather };