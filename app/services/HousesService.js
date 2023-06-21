import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { saveState } from "../utils/Store.js"

function _saveHouses() {
    saveState('houses', AppState.houses)
}

class HousesService {
    deleteHouse(houseId) {
        console.log("I have this id in the service:", houseId)

        const houseIndex = AppState.houses.findIndex(house => house.id == houseId)

        console.log('Here is the house index', houseIndex)

        AppState.houses.splice(houseIndex, 1)

        _saveHouses()

        AppState.emit('houses')
    }
    createHouse(houseData) {
        console.log("Here is the house data from the service!", houseData)

        const newHouse = new House(houseData)

        console.log('new 🏠', newHouse)

        AppState.houses.push(newHouse)

        _saveHouses()

        AppState.emit('houses')
    }

}

export const housesService = new HousesService