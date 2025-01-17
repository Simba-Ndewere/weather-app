import "./index.css";
import api from './api';
import dom from './dom'

const weather = await api.getWeather('harare');
console.log(weather);
dom.updateLeftContainer(weather);
dom.updateTopRightContainerDay(weather.days);
 