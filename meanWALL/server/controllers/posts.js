let mongoose = require('mongoose')
let Post = mongoose.model("Post")
module.exports = {
  getAll: (request, response)=>{
    Post.find({}).populate({path: "_user _comments", populate: {path: "_user"}}).sort("-createdAt").exec((err, posts)=>{
      response.json(posts)
    })
  },
  newPost: (request, response)=>{
    if(request.body.text){
      let newPost = new Post(request.body)
      newPost.save().catch((err)=>{
        console.log("error in posts model", err)
        response.status(500).json(false)
      })
        .then((result)=>{
          console.log("success in posts model?", result)
          response.json(true)
        })
    }
  },
}