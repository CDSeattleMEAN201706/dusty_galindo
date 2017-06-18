var mongoose = require("mongoose")

var NoteSchema = new mongoose.Schema({
  text: String,

}, {timestamps: true})

var Note = mongoose.model("Note", NoteSchema)