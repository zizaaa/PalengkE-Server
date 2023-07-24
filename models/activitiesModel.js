const mongoose = require('mongoose');

const activitiesSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:false
        },
        message:{
            type:String,
            required:false
        },
        price:{
            type:Number,
            required:false
        },
        id:{
            type:String,
            required:false
        },
        vouch:{
            type:Array,
            required:false
        }
    },
    {
        timestamps:true
    }
)

const Activities = mongoose.model('Activities',activitiesSchema);

module.exports = Activities