import Weather from "./Weather";
class API {

    static async getWeather(location) {
        let datesArray = [];
        let minmax = [];
        let dayIcons = [];

        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=9DEP6JU7BXGUFKDLN9BDX9878`, { mode: 'cors' });
        const weatherJson = await response.json();

        weatherJson.days.forEach(day => {
            datesArray.push(day.datetime);
            let arr = [day.tempmax, day.tempmin];
            minmax.push(arr);
            dayIcons.push(day.icon);
        });

        const weatherObject = new Weather(weatherJson.currentConditions.temp,
            weatherJson.resolvedAddress, weatherJson.currentConditions.icon, datesArray, minmax, dayIcons);
        return weatherObject;
    }

}

export default API;