class API {
    //write api for getting weather data
    //write api for weather gif

    static async getWeather(location) {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=9DEP6JU7BXGUFKDLN9BDX9878`, {mode: 'cors'});
        const weatherObject = await response.json();
        console.log(weatherObject);
    }
    
}

export default API;