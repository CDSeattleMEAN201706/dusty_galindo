var notes = require("./../controllers/notes.js")
module.exports = (app)=>{
  app.get("/notes", notes.getNotes)

  app.post("/new", notes.createNote)
}