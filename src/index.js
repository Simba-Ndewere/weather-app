import "./index.css";
import api from './api';
import dom from './dom'

const search = document.querySelector(".search");
const modal = document.querySelector(".modal");
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
        const weather = await api.getWeather(location);
        dom.updateLeftContainer(weather);
        dom.updateTopRightContainerDay(weather.days);
        dom.updateTopRightContainerMinMaxTemp(weather.minmax);
        dom.updateTopRightContainerDayIcon(weather.dayIcons);
        dom.updateTodayHighLights(weather);
        return weather;
    } catch (error) {
        showModal();
    }
}

function showModal() {
    modal.classList.add('show');

    setTimeout(() => {
        modal.classList.remove('show');
    }, 3000);
}

window.onload = displayWeather('maidenhead uk');



