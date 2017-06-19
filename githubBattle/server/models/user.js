let mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"]
  },
  score: Number,
  img_url: String
}, {timestamps: true})

let User = mongoose.model("User", UserSchema)