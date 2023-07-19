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
            required:true,
        },
        memberShip:{
            type:String,
            required:false
        },
        coins:{
            type:Number,
            required:false
        },
        vouchers:{
            type:Array,
            required:false
        },
        orders:{
            type:Array,
            required:false,
        },
        purchaseHistory:{
            type:Array,
            required:false
        },
        cart:{
            type:Array,
            required:false,
        },
        deliveryInfo:{
            type:Object,
            required:false
        },
        img:{
            type:String,
            required:false
        }
    },
    {
        timestamps:true
    }
)

const Users = mongoose.model('Users',usersSchema);

module.exports = Users