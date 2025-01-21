import "./index.css";
import api from './api';
import dom from './dom'

const search = document.querySelector(".search");
const modal = document.querySelector(".modal");
const modalLoader = document.querySelector(".modal-loader");
let symbol = '°C';
let location = '';

search.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        location = e.target.value.toString().toLowerCase();
        e.target.value = '';
        displayWeather(location);
    }
});

const displayWeather = async (location) => {
    try {
        modalLoader.classList.add('show');
        const weather = await api.getWeather(location);
        modalLoader.classList.remove('show');
        dom.updateLeftContainer(weather,symbol);
        dom.updateTopRightContainerDay(weather.days);
        dom.updateTopRightContainerMinMaxTemp(weather.minmax, symbol);
        dom.updateTopRightContainerDayIcon(weather.dayIcons);
        dom.updateTodayHighLights(weather);
        return weather;
    } catch (error) {
        modalLoader.classList.remove('show');
        showModalError();
    }
}

const showModalError = () => {
    modal.classList.add('show');
    setTimeout(() => {
        modal.classList.remove('show');
    }, 3000);
}

document.querySelector(".checkbox").addEventListener('input', (e) =>{
    if(e.target.checked){
        symbol = "°F";
    }else{
        symbol = "°C";
    }   
    dom.updateTemperatureSymbol(symbol);
});

window.onload = displayWeather('london uk');



