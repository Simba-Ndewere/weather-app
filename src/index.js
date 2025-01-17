import "./index.css";
import api from './api';
import dom from './dom'

const weather = await api.getWeather('maidenhead uk');
dom.updateLeftContainer(weather);
dom.updateTopRightContainerDay(weather.days);
dom.updateTopRightContainerMinMaxTemp(weather.minmax);
dom.updateTopRightContainerDayIcon(weather.dayIcons);
 