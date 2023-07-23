const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
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
            required: false,
        },
        quantity:{
            type:String,
            required:false,
        },
        "description":{
            type:String,
            required:true
        },
        item:{
            type:Number,
            required:false
        },
        bestSeller:{
            type:Boolean,
            default:false
        },
        stock:{
            type:Number,
            required:false
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
            type:Array,
            required:false,
        },
        usersProductReviews:{
            type:Array,
            required:false
        },
        productSold:{
            type:Number,
            required:false
        },
        stars:{
            type:Number,
            required:false,
        }
    },
    {
        timestamps:true
    }
)

const Products = mongoose.model('Products',productSchema);

module.exports = Products