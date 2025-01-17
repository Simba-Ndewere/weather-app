class Weather {
    constructor(temperature, condition, address, iconDescription, day) {
        this._temperature = temperature;
        this._condition = condition;
        this._address = address;
        this._iconDescription = iconDescription;
        this._day = day;
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

    get day() {
        return this._day;
    }

    set day(day) {
        this._day = day;
    }
}

export default Weather;