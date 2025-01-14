import weatherIconLeft from './images/sleeping.png'

class Dom {

    static updateLeftWeatherIcon() {
        const weatherImage = document.querySelector(".weather-image");
        const iconImage = document.createElement("img");
        iconImage.src = weatherIconLeft;
        weatherImage.appendChild(iconImage);
    }
}

export default Dom;
