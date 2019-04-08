//ZMIANA BG W ZALEZNOSCI OD PORY DNIA

const changeBackground = (currentDate) => {
    const currentTime = currentDate.getHours();
    let imgUrl = "";

    if (6 <= currentTime && currentTime < 9) {
        imgUrl = "url('./images/bg2.jpg')";
    } else if (9 <= currentTime && currentTime < 18) {
        imgUrl = "url('./images/bg.jpg')";
    } else if (18 <= currentTime && currentTime < 21) {
        imgUrl = "url('./images/bg3.jpg')";
    } else {
        imgUrl = "url('./images/bg4.png')";
    }

    document.body.style.backgroundImage = imgUrl;
}

export { changeBackground };