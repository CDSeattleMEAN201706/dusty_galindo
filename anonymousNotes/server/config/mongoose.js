var mongoose = require('mongoose')

var fs = require("fs")
var path = require("path")
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/notes_db")
var models_path = path.join(__dirname, "./../models")
fs.readdirSync(models_path).forEach((file)=>{
  if(file.includes(".js")){
    require(path.join(models_path, file))
  }
})