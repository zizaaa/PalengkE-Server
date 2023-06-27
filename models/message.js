const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
    {
        fullName:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        number:{
            type:Number,
            required:true,
        },
        message:{
            type:String,
            required:true,
        }
    },
    {
        timestamp:true
    }
)

const messages = mongoose.model('Messages',messageSchema)

module.exports = messages;