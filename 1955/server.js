var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/1955')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './client/static')))

app.set('views', path.join(__dirname, './client/views'))
app.set('view engine', 'ejs')
require('./server/config/mongoose.js');
require("./server/config/routes.js")(app)

app.listen(8000, ()=>{
console.log('listening on port 8000')
})