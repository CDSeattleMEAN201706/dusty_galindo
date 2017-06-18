var mongoose = require('mongoose')
var Note = mongoose.model("Note")
module.exports = {
  getNotes: (request, response)=>{
    Note.find({}).sort('-createdAt').exec((err, notes)=>{
      response.json(notes)
    })
  },
  createNote: (request, response) =>{
    let note = new Note(request.body)
    note.save((err)=>{
      if(err){
        console.log(err)
      }else{
        response.json(true)
      }
    })
  }
}