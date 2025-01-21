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

    static updateLeftContainer(weather, symbol) {

        const weatherImage = document.querySelector(".weather-image");
        const iconImage = document.createElement("img");
        iconImage.src = this.getWeatherIcon(weather.iconDescription);

        if (weatherImage.firstChild) {
            weatherImage.removeChild(weatherImage.firstChild);
        }

        weatherImage.appendChild(iconImage);

        const condition = document.getElementById("conditionId");
        condition.textContent = weather.iconDescription;

        const temperature = document.getElementById("tempId");
        temperature.textContent = weather.temperature + "°C";

        const address = document.getElementById("addressId");
        const date = new Date(`${weather.days[0]}`);
        address.textContent = weather.address + ' - ' + date.toString().substring(0, 10);
    }

    static updateTopRightContainerDay(dayArray) {
        const days = document.querySelectorAll(".days");
        for (let a = 0; a < days.length; a++) {
            const date = new Date(`${dayArray[a + 1]}`);
            days[a].textContent = date.toString().substring(0, 3);
        }
    }

    static updateTopRightContainerDayIcon(iconArray) {
        const daysIcons = document.querySelectorAll(".day-image");
        for (let a = 0; a < daysIcons.length; a++) {
            const iconImage = document.createElement("img");
            iconImage.src = this.getWeatherIcon(iconArray[a + 1]);

            if (daysIcons[a].firstChild) {
                daysIcons[a].removeChild(daysIcons[a].firstChild);
            }
            daysIcons[a].appendChild(iconImage);
        }
    }

    static updateTopRightContainerMinMaxTemp(minmax, symbol) {
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

    static updateTodayHighLights(weather) {
        const sunrise = document.querySelector(".sunrise-time");
        const sunset = document.querySelector(".sunset-time");
        const windspeed = document.querySelector(".wind");
        const cloudcover = document.querySelector(".percentage-cloud-cover");
        const solarenergy = document.querySelector(".percentage-solar-generation");
        const humidity = document.querySelector(".humidity-value");
        const visibility = document.querySelector(".visibility-value");

        sunrise.textContent = weather.sunrise.toString().substring(0, 5);
        sunset.textContent = weather.sunset.toString().substring(0, 5);
        windspeed.textContent = weather.wind + "km/h"
        cloudcover.textContent = weather.cloudCover + "%";
        solarenergy.textContent = weather.solarEnergy + " mj/m2";
        humidity.textContent = weather._humidity + "%";
        visibility.textContent = weather.visibility + "km";
    }

    static updateTemperatureBySymbol(symbol) {
        let tempLength = document.getElementById("tempId").textContent.length
        const max = document.querySelectorAll(".max");
        const min = document.querySelectorAll(".min");

        let currentSymbol = document.getElementById("tempId").textContent.substring(tempLength - 2, tempLength + 1);
        let currentValueLeft = Number(document.getElementById("tempId").textContent.substring(0, tempLength - 2));

        if (symbol === '°F' & currentSymbol === '°C') {
            document.getElementById("tempId").textContent = ((currentValueLeft * (9 / 5)) + 32).toFixed(1) + "°F";
            this.updateWeekTempToF(max,min);
        } else if (symbol === '°C' & currentSymbol === '°F') {
            document.getElementById("tempId").textContent = ((currentValueLeft - 32) * 5 / 9).toFixed(1) + "°C";
            this.updateWeekTempToC(min,max);
        }
    }

    static updateWeekTempToF(max,min) {
        max.forEach(temp => {
            let tempLengthMax = temp.textContent.length
            let currentValueMax = Number(temp.textContent.substring(0, tempLengthMax - 2));
            temp.textContent = ((currentValueMax * (9 / 5)) + 32).toFixed(1) + "°F";
        });

        min.forEach(temp => {
            let tempLengthMin = temp.textContent.length
            let currentValueMin = Number(temp.textContent.substring(0, tempLengthMin - 2));
            console.log(currentValueMin);
            temp.textContent = ((currentValueMin * (9 / 5)) + 32).toFixed(1) + "°F";
        });
    }

    static updateWeekTempToC(min,max) {
        max.forEach(temp => {
            let tempLengthMax = temp.textContent.length
            let currentValueMax = Number(temp.textContent.substring(0, tempLengthMax - 2));
            temp.textContent = ((currentValueMax - 32) * 5 / 9).toFixed(1) + "°C";
        });

        min.forEach(temp => {
            let tempLengthMin = temp.textContent.length
            let currentValueMin = Number(temp.textContent.substring(0, tempLengthMin - 2));
            temp.textContent = ((currentValueMin - 32) * 5 / 9).toFixed(1) + "°C";
        });
    }
}

export default Dom;
