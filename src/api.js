import Weather from "./Weather";
class API {
    static async getWeather(location) {
        let datesArray = [];
        let minmax = [];
        let dayIcons = [];

        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=8YDZA92DCCZ4K3TAFFCANU4AG&unitGroup=metric`, { mode: 'cors' });
        const weatherJson = await response.json();

        weatherJson.days.forEach(day => {
            datesArray.push(day.datetime);
            let arr = [day.tempmax, day.tempmin];
            minmax.push(arr);
            dayIcons.push(day.icon);
        });

        const weather = new Weather(weatherJson.currentConditions.temp,
            weatherJson.resolvedAddress, weatherJson.currentConditions.icon, datesArray, minmax, dayIcons, 
            weatherJson.currentConditions.sunrise, weatherJson.currentConditions.sunset, weatherJson.currentConditions.windspeed,
        weatherJson.currentConditions.cloudcover, weatherJson.currentConditions.solarenergy, weatherJson.currentConditions.humidity, weatherJson.currentConditions.visibility);
        
        return weather;
    }

}

export default API;