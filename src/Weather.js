class Weather {
    constructor(temperature, condition, address, iconDescription, days, minmax) {
        this._temperature = temperature;
        this._condition = condition;
        this._address = address;
        this._iconDescription = iconDescription;
        this._days = days;
        this._minmax = minmax;
    }

    get temperature() {
        return this._temperature;
    }

    set temperature(temperature) {
        this._temperature = temperature;
    }

    get condition() {
        return this._condition;
    }

    set condition(condition) {
        this._condition = condition;
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
}

export default Weather;