const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const userSchema=new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        required: true
    }
})

const usermodel=new mongoose.model('user',userSchema)
module.exports=usermodel