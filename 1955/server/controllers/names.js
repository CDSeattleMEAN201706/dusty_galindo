var mongoose = require("mongoose")
var Name = mongoose.model("Name")

module.exports = {
    show: (reqeust, response)=>{
        Name.find({}, (error, names)=>{
            response.json(names)
        })
    },

    create: (request, response)=>{
        let name = new Name({name: request.params.name})
        name.save((error)=>{
            if(error){
                console.log(error)
            }else{
                response.redirect("/")
            }
        })
    },

    delete: (request, response)=>{
        Name.remove({name: request.params.name}, (err)=>{
            if(err){
                console.log('error')
            }else{
                response.redirect("/")
            }
        })
    },
    getOneName: (request, response)=>{
        Name.find({name: request.params.name}, (error, name)=>{
            response.json(name)
        })
    }
}