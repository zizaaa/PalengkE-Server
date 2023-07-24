const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
    {
        grossIncome:{
            type:Number,
            required:false
        },
        netIncome:{
            type:Number,
            required:false
        },
        vouchers:{
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