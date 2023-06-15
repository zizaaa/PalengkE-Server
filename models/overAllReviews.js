const mongoose = require('mongoose');

const reviewsSchecma = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        message:{
            type:String,
            required:true,
        },
        stars:{
            type:Number,
            required: true,
        },
        date:{
            type:String,
            required:true,
        }
    },
    {
        timestamps:true
    }
)

const overAllReviews = mongoose.model('overAllReviews',reviewsSchecma)

module.exports = overAllReviews