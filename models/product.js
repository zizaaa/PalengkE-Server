const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please Enter a product name"]
        },
        quantity:{
            type:Number,
            require:true,
            default:0,
        },
        price:{
            type:Number,
            required: true,
        },
        img:{
            type:String,
            required:false,
        }
    },
    {
        timestamps:true
    }
)

const Products = mongoose.model('Products',productSchema);

module.exports = Products