import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

// @ts-ignore
class HousesService {
    deleteHouse(id) {
        ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
    }
    createCar(houseData) {
        const house = new House(houseData)
        ProxyState.houses = [...ProxyState.houses, house]
    }
}

// @ts-ignore
export const HousesService = new HousesService()