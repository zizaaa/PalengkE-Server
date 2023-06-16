const mongoose = require('mongoose');

const usersSchema = mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
        userName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            require:true,
        },
        number:{
            type:Number,
            required: true,
        },
        address:{
            type:String,
            required:false,
        },
        cart:{
            type:Array,
            required:false,
        }
    },
    {
        timestamps:true
    }
)

const Users = mongoose.model('Users',usersSchema);

module.exports = Users