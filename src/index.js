import "./index.css";
import api from './api';
import dom from './dom'

const weatherObject = await api.getWeather('johannesburg');
console.log(weatherObject);
dom.updateLeftContainer(weatherObject);
 