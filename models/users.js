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
        password:{
            type:String,
            required:true
        },
        number:{
            type:Number,
            required: true,
        },
        address:{
            type:String,
            required:false,
        },
        memberShip:{
            type:String,
            required:false
        },
        balance:{
            type:Number,
            required:false
        },
        vouchers:{
            type:Array,
            required:false
        },
        payLater:{
            type:Number,
            required:false
        },
        toShip:{
            type:Array,
            required:false,
        },
        toReceive:{
            type:Array,
            required:false,
        },
        toReview:{
            type:Array,
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