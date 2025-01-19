class Weather {
    constructor(temperature, address, iconDescription, days, minmax, dayIcons, sunrise, sunset, wind, cloudCover) {
        this._temperature = temperature;
        this._address = address;
        this._iconDescription = iconDescription;
        this._days = days;
        this._minmax = minmax;
        this._dayIcons = dayIcons;
        this._sunrise = sunrise;
        this._sunset = sunset;
        this.wind = wind;
        this._cloudCover = cloudCover;
    }

    get temperature() {
        return this._temperature;
    }

    set temperature(temperature) {
        this._temperature = temperature;
    }

    get address() {
        return this._address;
    }

    set address(address) {
        this._address = address;
    }

    get iconDescription() {
        return this._iconDescription;
    }

    set iconDescription(iconDescription) {
        this._iconDescription = iconDescription;
    }

    get days() {
        return this._days;
    }

    set days(days) {
        this._days = days;
    }

    get icons() {
        return this._icons;
    }

    set icons(icons) {
        this._icons = icons;
    }

    get minmax() {
        return this._minmax;
    }

    set minmax(minmax) {
        this._minmax = minmax;
    }

    get dayIcons() {
        return this._dayIcons;
    }

    set dayIcons(dayIcons) {
        this._dayIcons = dayIcons;
    }

    get sunrise() {
        return this._sunrise;
    }

    set sunrise(sunrise) {
        this._sunrise = sunrise;
    }

    get sunset() {
        return this._sunset;
    }

    set sunset(sunset) {
        this._sunset = sunset;
    }

    get wind() {
        return this._wind;
    }

    set wind(wind) {
        this._wind = wind;
    }

    get cloudCover() {
        return this._cloudCover;
    }

    set cloudCover(cloudCover) {
        this._cloudCover = cloudCover;
    }
}

export default Weather;