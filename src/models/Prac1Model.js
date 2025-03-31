const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const PracSchema = new Schema({
    Name:{
        type:String,
    },
    Message:{
        type:String,
    }
})
module.exports = mongoose.model("prac",PracSchema)