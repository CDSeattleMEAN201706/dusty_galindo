let mongoose = require('mongoose')
let PostSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  _comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }]
}, {timestamps: true})

mongoose.model("Post", PostSchema)