import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { saveState } from "../utils/Store.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouses() {
    const houses = AppState.houses

    let template = ''

    houses.forEach(house => template += house.CardTemplate)

    setHTML('houseListings', template)
}

export class HousesController {
    constructor() {

        console.log("Houses Controller loaded")

        _drawHouses()

        AppState.on('houses', _drawHouses)
    }

    createHouse(event) {

        event.preventDefault()

        console.log("Submit button clicked?")

        const form = event.target

        const houseData = getFormData(form)

        console.log("Here is my house data!", houseData)

        housesService.createHouse(houseData)

        form.reset()
    }

    async deleteHouse(houseId) {
        const wantsToDelete = await Pop.confirm("Are you sure you want to sell this house?")

        if (!wantsToDelete) {
            return
        }

        housesService.deleteHouse(houseId)
    }
}