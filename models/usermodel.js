const mongoose= require('mongoose')


const userschema = new mongoose.Schema({
    name:String,
    id: String,
    server: Number,
    zone:String
})

module.exports= mongoose.model('param',userschema)