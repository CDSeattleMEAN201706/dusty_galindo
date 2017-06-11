var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var ObjectId = require('mongodb').ObjectID
mongoose.connect('mongodb://localhost/messageBoard')
var Schema = mongoose.Schema
var PostSchema = new mongoose.Schema({
    author: {type:String, required:true, minlength: 4},
    text: {type:String, required:true, minlength: 1},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref:"Comment"}]
}, {timestamps: true})
var CommentSchema = new mongoose.Schema({
    author: {type:String, required:true, minlength: 4},
    text: {type: String, required:true},
    _post: {type: mongoose.Schema.Types.ObjectId, ref: "Post"},
}, {timestamps: true})
mongoose.model("Post", PostSchema)
mongoose.model("Comment", CommentSchema)
var Post = mongoose.model("Post")
var Comment = mongoose.model("Comment")
app.use(bodyParser.urlencoded({extended: true}))

//app.use(express.static(path.join(__dirname, './static')))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', (request, response)=>{
    Post.find({}).populate("comments").sort("-createdAt").exec((err, posts)=>{
        if (err){
            console.log("error...")
            response.redirect("/error")
        }else{
            console.log(posts[0].comments)
            response.render("index", {posts: posts})
        }
    })
})

//new message route
app.post("/message", (request, response)=>{
    console.log(request.body)
    let newPost = new Post(request.body)
    newPost.save((err)=>{
        if (err){
            console.log(err)
        }else{
            response.redirect("/")
        }
    })

})
//comment not saving to db!!
app.post("/message/:id", (request, response)=>{
    Post.findById(request.params.id, (error, post)=>{
        let newComment = new Comment(request.body)
        newComment._post = post._id
        Post.update({_id: post._id}, {$push: {comments: newComment}}, (err)=>{
            console.log("updated post", post.comments)
        })
        newComment.save((err)=>{
            if(err){
                response.render("error", {errors: err})
            }else{
                response.redirect("/")
            }
            
            
        })
    })

    
})

app.listen(8000, ()=>{
console.log('listening on port 8000')
})