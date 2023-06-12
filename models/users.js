const mongoose = require('mongoose');

const usersSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please Enter a product name"]
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