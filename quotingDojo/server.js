var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require("mongoose")
var ObjectId = require("mongodb").ObjectID

mongoose.connect("mongodb://localhost/quotingDojo")

var UserSchema = new mongoose.Schema({
    created_by: {
        type: String, 
        required: true,
    },
    quote: {
        type: String,
        required: [true, "quote is required"],
    },
    likes: {
        type: Number,
        required: false,
        default: 0
    }
}, {timestamps: true})
mongoose.model("Quote", UserSchema)
var Quote = mongoose.model("Quote")


app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, './static')))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', (request, response)=>{
    response.render('index')
})
app.post("/quotes", (request, response)=>{
    let newQuote = new Quote({
        created_by: request.body.name,
        quote: request.body.quote,
    })
    newQuote.save((error)=>{
        if(error){
            console.log("didn't work", error)
        }else{
            console.log("added quote")
            response.redirect("/quotes")
        }
    })


})

app.get("/quotes", (request, response)=>{
    Quote.find({}).sort("-likes").exec((error,quotes)=>{
        console.log(quotes[0])
        response.render("quotes", {quotes: quotes})
    })
})

app.get("/likes/:id", (request, response)=>{
    Quote.update({_id: ObjectId(request.params.id)}, {$inc:{likes: 1}}, function(err){
        console.log("updated")
    })
    console.log(request.params.id)
    Quote.find({}).sort("-likes").exec((error, quotes)=>{
        response.render("likes", {quotes: quotes})
    })
    
})
app.listen(8000, ()=>{
    console.log('listening on port 8000')
})