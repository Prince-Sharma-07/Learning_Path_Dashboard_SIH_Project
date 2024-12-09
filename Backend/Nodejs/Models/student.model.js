const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    
    email : {
        type : String,
        required : true,
        lowercase : true,
        minlength : 25,
        unique : true
    },

    password : {
        typr : String,
        required : true
    },

    userName : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    
    contact : {
        type : String,
        required : true,
        unique : true,
        match : /^[0-9]{10}$/
    },
    
    gender : {
        type : String,
        default : "None",
        enum : ["Male" , "Female" , "Other"],
        required : true
    },

    idCardPhotoURL : {
        type : String,
        required : true,
        unique : true
    }
    
} , {timestamps : true , versionKey : false})

module.exports = mongoose.model("User" , userSchema)