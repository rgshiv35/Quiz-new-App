const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    firstName:String,
    lastName:String
})

const User=mongoose.model('User',userSchema)

module.exports=User