let path = require("path")
let users = require("./../controllers/users")
let posts = require("./../controllers/posts")
let comments = require("./../controllers/comments")

module.exports = (app) =>{
  //post /login
  app.post("/comment", comments.newComment)
  app.get("/messages", posts.getAll)
  app.post("/post", posts.newPost)
  app.post("/login", users.login)
  app.get("/logout", users.logout)
  app.get("/users", users.getAllUsers)
  app.get("/check", users.checkStatus)
  app.get("*", (request, response)=>{
    response.sendFile(path.resolve("./public/dist/index.html"))
  })
}