var mongoose = require('mongoose')


var animals = require("../controllers/animals.js")
module.exports = (app)=>{
    app.get('/', animals.getAllanimals)

    app.post("/animals", animals.saveNewAnimal)
    // GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
    app.get("/animals/edit/:id", animals.getEditPage)
    // POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
    app.post("/animals/:id", animals.updateAnimal)

    // POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.
    app.post("/animals/delete/:id", animals.deleteAnimal)
    app.get("/animals/:id", animals.getOneAnimal)
}