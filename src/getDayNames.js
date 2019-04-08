// GENEROWANIE DNI TYGODNIA

const getDayNames = (currentDate) => {
    const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    
    const day0 = currentDate.getDay();
    
    const day1 = days[day0 + 1];
    const day2 = days[day0 + 2];
    const day3 = days[day0 + 3];
    const day4 = days[day0 + 4];
    
    document.querySelector('.day1').innerHTML = `${day1}`
    document.querySelector('.day2').innerHTML = `${day2}`
    document.querySelector('.day3').innerHTML = `${day3}`
    document.querySelector('.day4').innerHTML = `${day4}`
}

export { getDayNames };