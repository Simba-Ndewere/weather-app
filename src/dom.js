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

    static updateTopRightContainerDay(dayArray) {
        const days = document.querySelectorAll(".days");
        for(let a = 0; a < days.length; a++){
            const date = new Date(`${dayArray[a+1]}`);     
            days[a].textContent = date.toString().substring(0,3);     
        }
    }

    static updateTopRightContainerIcon(){

    }

    static updateTopRightContainerMinMaxTemp(minmax){
        const max = document.querySelectorAll(".max");
        const min = document.querySelectorAll(".min");
        
        for(let a = 0; a < 6; a++){
            max[a].textContent = minmax[a+1][0]; 
            min[a].textContent = minmax[a+1][1];
        }
    }

}

export default Dom;
