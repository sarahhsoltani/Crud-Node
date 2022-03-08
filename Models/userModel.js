const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema({

    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true    
    }
})
module.exports=user=mongoose.model("user",userSchema)