const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
    {
        event:{
            type:String,
            required:false
        }
    },
    {
        timestamps:true
    }
)

const Event = mongoose.model('Event',eventSchema);

module.exports = Event