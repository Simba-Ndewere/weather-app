import clearDay from './images/clear-day.png';
import clearNight from './images/clear-night.png';
import cloudy from './images/cloudy.png';
import fog from './images/fog.png';
import cloudyDay from './images/partly-cloudy-day.png';
import cloudNight from './images/partly-cloudy-night.png';
import rain from './images/rain.png';
import snow from './images/snow.png';
import wind from './images/wind.png';

class Dom {

    static updateLeftContainer(weatherObject) {

        const weatherImage = document.querySelector(".weather-image");
        const iconImage = document.createElement("img");
        iconImage.src = this.getWeatherIcon(weatherObject.iconDescription);
        weatherImage.appendChild(iconImage);

        const condition = document.getElementById("conditionId");
        condition.textContent = weatherObject.iconDescription;

        const temperature = document.getElementById("tempId");
        temperature.textContent = weatherObject.temperature + "°C";

        const address = document.getElementById("addressId");
        address.textContent = weatherObject.address;
    }

    static updateTopRightContainerDay(dayArray) {
        const days = document.querySelectorAll(".days");
        for (let a = 0; a < days.length; a++) {
            const date = new Date(`${dayArray[a + 1]}`);
            days[a].textContent = date.toString().substring(0, 3);
        }
    }

    static updateTopRightContainerDayIcon(iconArray){
        const daysIcons = document.querySelectorAll(".day-image");
        for(let a = 0; a < daysIcons.length; a++){
            console.log("enter");
            const iconImage = document.createElement("img");
            iconImage.src = this.getWeatherIcon(iconArray[a+1]);
            daysIcons[a].appendChild(iconImage);
        }
    }

    static updateTopRightContainerMinMaxTemp(minmax) {
        const max = document.querySelectorAll(".max");
        const min = document.querySelectorAll(".min");

        for (let a = 0; a < 6; a++) {
            max[a].textContent = minmax[a + 1][0] + "°C";
            min[a].textContent = minmax[a + 1][1] + "°C";
        }
    }

    static getWeatherIcon(iconName) {
        switch (iconName) {
            case 'snow': return snow;
            case 'rain': return rain;
            case 'fog': return fog;
            case 'wind': return wind;
            case 'cloudy': return cloudy;
            case 'partly-cloudy-day': return cloudyDay;
            case 'partly-cloudy-night': return cloudNight;
            case 'clear-day': return clearDay;
            case 'clear-night': return clearNight;
        }
    }

}

export default Dom;
