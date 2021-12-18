const mongoose = require('mongoose');

const EmployeeSchema =  new mongoose.Schema({
    Name:{
        type:String,
    },
    City:{
        type:String,
    },
    Status:{
        type:Boolean,
        default:false,
    },
    Role:{
        type:String,
    },
    Number:{
        type:Number,
    }
})

module.exports = mongoose.model("EmployeeData",EmployeeSchema);