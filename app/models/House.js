import { generateId } from "../utils/generateId.js";

export class House {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.year = data.year
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.listingDate = data.listingDate ? new Date(data.listingDate) : new Date()
    }

    get CardTemplate() {
        return /*html*/ `
        <div class="col-10">
        <section class="row elevation-5 m-4">
          <div class="col-4 px-0">
            <img class="img-fluid house-img-style "
              src="${this.imgUrl}"
              alt="${this.name}">
          </div>
          <div class="col-8 p-4">
            <h2>
              ${this.year} ${this.bedrooms} bedrooms ${this.bathrooms} bathrooms
            </h2>
            <h3>
              ${this.sqft} sqft.
            </h3>
            <h4>
              $${this.price}
            </h4>
            <p>
              ${this.description}
            </p>

            <button onclick="app.HousesController.deleteHouse('${this.id}')" class="btn btn-danger"> 💰 Sell House 
            </button>
  
          </div>
        </section>
      </div>
        `
    }
}