let mongoose = require('mongoose')
let User = mongoose.model("User")

module.exports = {
  

  logout: (request, response)=>{
    request.session.destroy()
    response.json(true)
  },
  checkStatus: (request, response)=>{
    if(request.session.user_id){
      response.json({username: request.session.username, _id: request.session.user_id})
    }else{
      console.log("not logged in")
      response.status(500).json(false)
    }
  },
  getAllUsers: (request, response)=>{
    User.find({}).exec((err, users)=>{
      if(err){
        console.log("error finding users", err)
        response.json(false)
      }else{
        response.json(users)
      }
    })
  },
  
  login: (request, response)=>{
    if(request.body.username){
      User.findOne({username: request.body.username.toLowerCase()}, (error, user)=>{
        if(error){
          console.log("find one error")
          response.status(500).json(error)
        }else{
          if(user){
            console.log("found user, setting session and returning user._id")
            request.session.user_id = user._id
            request.session.username = user.username
            response.json(user._id)
          }else{
            console.log("creating new user")
            let newUser = new User({username: request.body.username.toLowerCase()})
            newUser.save()
              .then(()=>{
                console.log("save .then()")
                request.session.user_id = newUser._id
                request.session.username = newUser.username
                response.json(newUser._id)
              }).catch((err)=>{
                console.log("save error", err)
                response.status(500).json(err)
              })
          }
        }
      })
    }
  }
}