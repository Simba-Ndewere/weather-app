import weatherIconLeft from './images/night.png'

class Dom {

    static updateLeftContainer(weatherObject) {
        //update image

        const weatherImage = document.querySelector(".weather-image");
        const iconImage = document.createElement("img");
        iconImage.src = weatherIconLeft;
        weatherImage.appendChild(iconImage);

        const condition = document.getElementById("conditionId");
        condition.textContent = weatherObject.condition;

        const temperature = document.getElementById("tempId");
        temperature.textContent = weatherObject.temperature + "°C";

        const address = document.getElementById("addressId");
        address.textContent = weatherObject.address;
    }

}

export default Dom;
