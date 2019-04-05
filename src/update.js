// DEFINICJE FUNKCJI POTRZEBNYCH DO ZUPDATOWANIA DANYCH DOTYCZĄCYCH POGODY

const getWeatherById = async (key, city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city}&units=metric&APPID=${key}`);
    const currentWeather = await response.json();
    return currentWeather;
};

const assignWeather = (currentWeather, containers) => {
    const { weather, main: { humidity, temp, temp_min }, wind: {speed} } = currentWeather;
    const { cityContainer, humidityContainer, windContainer, temperatureContainer, descriptionContainer, iconContainer, lowTempContainer} = containers;

    temperatureContainer.innerHTML = `${Math.round(temp)}°C`;
    iconContainer.innerHTML = `<img src='http://openweathermap.org/img/w/${weather[0].icon}.png' alt="">`; // ten src iconki do zmiany bo te są brzydkie
    descriptionContainer.innerHTML = weather[0].description;
    humidityContainer.innerHTML = `${humidity}%`;
    lowTempContainer.innerHTML = `${Math.round(temp_min)}°C`
    windContainer.innerHTML = `${Math.round(speed)} m/s`;
};

const updateWeather = async (key, city, containers) => {
    try {
        const weather = await getWeatherById(key, city);
        console.log(weather);
        assignWeather(weather, containers);
    } catch(error) {
        console.log(error);
    }
};

export { updateWeather };