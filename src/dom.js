import weatherIconLeft from './images/night.png'
const days = document.querySelectorAll(".days");
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

    static updateTopRightContainerDay(dayArray) {
        for(let a = 0; a < days.length; a++){
            const date = new Date(`${dayArray[a+1]}`);     
            days[a].textContent = date.toString().substring(0,3);     
        }
    }

    static updateTopRightContainerIcon(){

    }

    static updateTopRightContainerTemp (){

    }

}

export default Dom;
