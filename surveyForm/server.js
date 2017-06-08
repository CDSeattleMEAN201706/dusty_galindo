var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(__dirname+"/static"))
app.set('views', __dirname + "/views")
app.set("view engine", "ejs")
app.get("/", function(request, response){
    response.render("index")
})
app.post("/result", function(req, response){
    console.log("post data", req.body)
    context = req.body
    response.render("result", context)
})

app.listen("8000", function() {
    console.log("listening on 8000")
})