const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
    {
        income:{
            type:Number,
            required:false
        },
        totalProducts:{
            type:Number,
            required:false
        },
        totalUsers:{
            type:Number,
            required:false
        },
        orders:{
            type:Array,
            required:false
        },
        activities:{
            type:Array,
            required:false
        },
        events:{
            type:Array,
            required:false
        }
    },
    {
        timestamps:true
    }
)

const Admin = mongoose.model('Admin',adminSchema);

module.exports = Admin