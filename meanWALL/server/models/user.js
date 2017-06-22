let mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Name is required"],
    minlength: 3
    
  }
}, {timestamps: true})
mongoose.model("User", UserSchema)