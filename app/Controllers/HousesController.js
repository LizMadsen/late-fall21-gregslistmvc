import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Forms/Houseform.js";
import { carsService } from "../Services/CarsService.js";
import { HousesService } from "../Services/HousesService.js";

function _drawHouses() {
    const houses = ProxyState.houses
    let template = ''
    cars.forEach(house => template += house.Template)
    document.getElementById('listings').innerHTML = template
}

export class HousesController {
    constructor() {
        ProxyState.on('houses', _drawHouses)
    }
    createHouse() {
        window.event.preventDefault()
        /**@type {HTMLFormElement} */
        const formElem = window.event.target
        const houseData = {
            yearMade: formElem.yearMade.value,
            stories: formElem.stories.value,
            floor: formElem.floor.value,
            haunted: formElem.haunted.value,
            price: formElem.price.value,
            description: formElem.description.value,
            imgURL: formElem.imgURL.value
        }

        HousesService.createHouse(houseData)

        formElem.reset()
    }

    deleteHouse(id) {
        HousesService.deleteHouse(id)
    }
}