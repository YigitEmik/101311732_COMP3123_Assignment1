const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        max:100, 
        required: true,
        primaryKey:true
        
    },
    email: {
        type:String,
        max:100,
        unique:true,
    },
    password: {
        type:String,
        max:50,
        required: true,
        unique:true

    }
})

module.exports = mongoose.model("user", userSchema)