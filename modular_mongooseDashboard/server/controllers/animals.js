var mongoose = require('mongoose')
var Animal = mongoose.model("Animal")
var ObjectId = require('mongodb').ObjectID

module.exports = {
    getAllanimals: (request, response)=>{
        Animal.find({},(err, res)=>{
            if (err){
                console.log("error")
                return err
            }

            response.render("index", {animals: res})
        })

    },

    saveNewAnimal: (request, response)=>{
        console.log(request.body)
        let newAnimal = new Animal({
            name: request.body.name,
            common_name: request.body.common_name,
            scientific_name: request.body.scientific_name,


        })
        newAnimal.description = request.body.description
        newAnimal.image_url = request.body.image_url
        newAnimal.save((error)=>{
            if(error){
                console.log(error)
                return error
            }
            console.log("saved new animal:", request.body)
            response.redirect("/")
        })
        
    },
    // GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
    getEditPage: (request, response)=>{
        Animal.find({_id: ObjectId(request.params.id)}, (err, res)=>{
            if (err){
                response.redirect("/")
            }else{
                response.render("new", {animal: res, action: ["/animals/"+request.params.id]})
            }
        })
            
        
    },
    // POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
    updateAnimal: (request, response)=>{
        Animal.update({_id: ObjectId(request.params.id)}, {name: request.body.name, common_name: request.body.common_name, scientific_name: request.body.scientific_name, image_url: request.body.image_url, description: request.body.description},(err, raw)=>{
            response.redirect("/animals/"+request.params.id)
        })
    },

    // POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.
    deleteAnimal: (request, response)=>{
        Animal.remove({_id: ObjectId(request.params.id)},(error, result)=>{

                response.redirect("/")
        })
    },
    getOneAnimal: (request, response)=>{
        if(request.params.id == "new"){
            response.render("new", {animal: [{}], action: ["/animals"]})
        }else{
            Animal.find({_id: ObjectId(request.params.id)}, (err, res)=>{
                if (err){
                    response.redirect("/")
                }else{
                    response.render("index", {animals: res})
                }
            })
            
        }
        
    }


}