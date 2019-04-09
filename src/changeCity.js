//MODUŁ DO ZMIANY MIASTA
import { updateWeather, firstCapital } from './update';

const getCities = async () => {
    const response = await fetch(`https://raw.githubusercontent.com/carrotCrew/weatherApp/functionality/src/city.list.json`);
    const cityList = await response.json();
    return cityList;
}

const correctPolishLetters = (string) => {
    var letters = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
    return string.replace(/[ąćęłńóśźż]/g, match => letters[match]);
}

const changeCity = async (key, containers, date) => {
    try {
        const cityList = await getCities();
        const choosenCity = prompt('Podaj miasto:', 'Wrocław');
        const { cityContainer } = containers;
        const correctChoosenCity = correctPolishLetters(choosenCity.toLowerCase());
        
        if(!choosenCity){
        alert(`Należy podać nazwę miasta!`);
            return
        }

        const cityArr = [];
        let cityId;
        let cityName;

        for (let city of cityList) {

            if(city.name.toLowerCase() === correctChoosenCity && city.country === "PL"){
                cityArr.push(city);
                cityId = city.id;
                cityName = firstCapital(choosenCity);
                cityContainer.innerHTML = `${cityName}`;
                break
            }
        }
 
        if (!cityArr.length) {
            alert(`Niestety, w naszej bazie nie ma miasta o nazwie: ${choosenCity}.`);
            return
        }

        updateWeather(key, cityId, containers, date);

    } catch (err) {
        console.error(err);
    }
}

export { changeCity };