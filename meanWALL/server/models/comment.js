let mongoose = require('mongoose')
let CommentSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps: true})

mongoose.model("Comment", CommentSchema)