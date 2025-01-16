import "./index.css";
import api from './api';
import dom from './dom'

const weatherObject = await api.getWeather('enfield');
console.log(weatherObject);
dom.updateLeftContainer(weatherObject);
 