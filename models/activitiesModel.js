const mongoose = require('mongoose');

const activitiesSchema = mongoose.Schema(
    {
        activities:{
            type:String,
            required:false
        }
    },
    {
        timestamps:true
    }
)

const Activities = mongoose.model('Activities',activitiesSchema);

module.exports = Activities