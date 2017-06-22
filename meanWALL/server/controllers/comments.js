let mongoose = require('mongoose')
let Comment = mongoose.model("Comment")
let Post = mongoose.model("Post")
module.exports = {
  newComment: (request, response)=>{
    if(request.body.comment){
      
      let newComment = new Comment(request.body.comment)
      newComment._user = request.session.user_id
      newComment.save().catch((error)=>{
        console.log("error in save new comment")
        response.status(500).json(false)
      }).then(()=>{
        Post.findByIdAndUpdate(request.body.post_id, {$push: {_comments: newComment._id}}, (err, result)=>{
          if(err){
            console.log("error pushing comment into post")
            response.status(500).json(false)
          }else{
            response.json(true)
          }
        })
      })
    }else{
      console.log("error in comments.js")
      response.status(500).json(false)
    }
  }
}