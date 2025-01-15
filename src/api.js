import Weather from "./Weather";
class API {
    //write api for getting weather data
    //write api for weather gif

    static async getWeather(location) {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=9DEP6JU7BXGUFKDLN9BDX9878`, {mode: 'cors'});
        const weatherJson = await response.json();
        const weatherObject = new Weather(weatherJson.currentConditions.temp, 
            weatherJson.currentConditions.conditions, weatherJson.resolvedAddress, weatherJson.currentConditions.icon);
        return weatherObject;
    }

}

export default API;