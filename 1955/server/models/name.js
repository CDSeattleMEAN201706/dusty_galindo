var mongoose = require("mongoose")

let NameSchema = new mongoose.Schema({
    name: String,

}, {timestamps: true})
mongoose.model("Name", NameSchema)
