var mongoose = require("mongoose")
let fs = require("fs")
var path = require("path")
mongoose.connect("mongodb://localhost/mongooseDashboard")
var models_path = path.join(__dirname, "./../models")
var ObjectId = require('mongodb').ObjectID
fs.readdirSync(models_path).forEach((file)=>{
    if(file.indexOf(".js")>=0){
        require(models_path + "/" + file)
    }
})