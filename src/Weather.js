class Weather {
    constructor(temperature, address, iconDescription, days, minmax, dayIcons) {
        this._temperature = temperature;
        this._address = address;
        this._iconDescription = iconDescription;
        this._days = days;
        this._minmax = minmax;
        this._dayIcons = dayIcons;
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
}

export default Weather;