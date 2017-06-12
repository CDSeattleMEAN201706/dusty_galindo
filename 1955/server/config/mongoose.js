let mongoose = require("mongoose")
let fs = require("fs")
let path = require("path")
mongoose.connect("mongodb://localhost/1955")

let models_path = path.join(__dirname, "./../models")

fs.readdirSync(models_path).forEach((file)=>{
    if(file.indexOf(".js")>=0){
        require(models_path+"/"+file)
    }
})

