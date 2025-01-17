import "./index.css";
import api from './api';
import dom from './dom'

const weather = await api.getWeather('melbourne australia');
dom.updateLeftContainer(weather);
dom.updateTopRightContainerDay(weather.days);
dom.updateTopRightContainerMinMaxTemp(weather.minmax);
 