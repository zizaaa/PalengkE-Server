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
        newPrice:{
            type:Number,
            required:false
        },
        salePercentage:{
            type:Number,
            required:false,
        },
        price:{
            type:Number,
            required: true,
        },
        quantity:{
            type:String,
            required:true,
        },
        bestSeller:{
            type:Boolean,
            default:false
        },
        sale:{
            type:Boolean,
            default:false
        },
        category:{
            type:String,
            required:true
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