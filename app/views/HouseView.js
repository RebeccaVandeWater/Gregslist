export const HouseView = /*html*/ `
    <div class="container-fluid">

        <section class="row">
            <div class="col-12 d-flex align-items-center">
                <p class="p-3 fs-1">Houses! 🏘️</p>
                
                <!-- Button trigger modal -->
                <div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#houseModal">
                Add House
                </button>
                </div>

            </div>
        </section>


    <!-- Modal -->
    <div class="modal fade" id="houseModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="houseModal">House Information</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form onsubmit="app.HousesController.createHouse(event)">

        <div>
            <label for="houseImg">House Image</label>
            <input type="url" name="imgUrl" id="houseImg" maxlength="200" required>
        </div>

        <div>
            <label for="houseName">House Image Name</label>
            <input type="text" id="houseName" minlength="5" maxlength="25" required name="name">
        </div>

        <div>
            <label for="houseYear">Build Year</label>
            <input type="number" id="houseYear" min="1900" max="2024" required name="year">
        </div>

        <div>
            <label for="houseBeds">Bedrooms</label>
            <input type="number" name="bedrooms" min="1" max="10" id="houseBeds" required>
        </div>

        <div>
            <label for="houseBaths">Bathrooms</label>
            <input type="number" min=".5" max="5" step=".5" id="houseBaths" name="bathrooms" required>
        </div>

        <div>
            <label for="houseSqft">Square Footage</label>
            <input type="number" min="100" max="10000" id="houseSqft" name="sqft" required>
        </div>

        <div>
            <label for="housePrice">Price (USD)</label>
            <input type="number" name="price" id="housePrice" min="1" max="2000000" required>
        </div>

        <div>
            <label for="houseDescription">Description</label>
            <textarea name="description" id="houseDescription" rows="10" class="w-100">
            </textarea>
        </div>


        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>

        </form>

        </div>
        </div>
    </div>
    </div>

        <section id="houseListings" class="row">
        
        </section>
    </div>




`