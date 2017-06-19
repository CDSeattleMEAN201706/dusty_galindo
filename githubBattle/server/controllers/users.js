let mongoose = require('mongoose')
let User = mongoose.model('User')
module.exports = {
  getAllUsers: (request, response)=>{
    User.find({}).sort("-score").exec().catch((err)=>{
      console.log(err)
    }).then((users)=>{
      response.json(users)
    })
  },
  createUser: (request, response)=>{
    console.log(request.body)

    let user = new User(request.body)
    User.findOneAndUpdate({username: user.username},{score: user.score, img_url: user.img_url},(err, doc)=>{
      console.log(doc)
      if(doc){

        console.log("found in database, updated")
        response.json(true)
      }else{
        user.save().catch((err)=>{console.log(err, request)}).then(response.json(true))
      }
    })
     
  
    
  }



}