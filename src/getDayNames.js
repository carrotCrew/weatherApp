// GENEROWANIE DNI TYGODNIA



const getDayNames = (currentDate) => {
    const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    
    let dayNumber = currentDate.getDay() + 1;

    const nextDay = () => {
        if (days[dayNumber] === undefined) {
            dayNumber = 0;
        }
        return dayNumber++;
    }
    
    const day1 = days[nextDay()];
    const day2 = days[nextDay()];
    const day3 = days[nextDay()];
    const day4 = days[nextDay()];
    
    document.querySelector('.day1').innerHTML = `${day1}`
    document.querySelector('.day2').innerHTML = `${day2}`
    document.querySelector('.day3').innerHTML = `${day3}`
    document.querySelector('.day4').innerHTML = `${day4}`
}

export { getDayNames };