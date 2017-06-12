var mongoose = require("mongoose")
let UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    common_name: {type: String},
    scientific_name: {type: String},
    description: {type: String},
    image_url: {type: String},
},{timestamps:true})
mongoose.model("Animal", UserSchema)
var Animal = mongoose.model("Animal")