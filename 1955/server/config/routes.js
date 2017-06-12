var names = require("../controllers/names.js")
module.exports = (app)=>{
    app.get("/", names.show)
    app.get("/new/:name", names.create)
    app.get("/remove/:name", names.delete)
    app.get("/:name", names.getOneName)
    
}