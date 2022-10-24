const mongoose = require('mongoose')
const empSchema = new mongoose.Schema({first_name:{
    type:String,
    max:100,
    require:true
},
last_name:{
    type:String,
    max:50,
    require:true
    
},
email:{
    type:String,
    max:50,
    unique:true,
    require:true
},
gender:{
    type:String, 
    //Optional
    genders:["Male","Female","Other"]
},
salary:{
    type:Number,
    required:true
}
})

module.exports = mongoose.model("employee", empSchema)
