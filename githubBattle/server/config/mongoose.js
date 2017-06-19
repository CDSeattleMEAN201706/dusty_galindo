let mongoose = require('mongoose')
let fs = require('fs')
let path = require('path')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/githubBattle')
let models_path = path.join(__dirname, './../models')
fs.readdirSync(models_path).forEach((file)=>{
  if(file.includes('.js')){
    require(path.join(models_path, file))
  }
})
