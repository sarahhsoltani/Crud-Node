const mongoose=require("mongoose")
const Schema=mongoose.Schema
const productSchema=new Schema({
    name:{
      type:  String,
    require:true
    },
    categories:{
        type:String,
        require:true
    },
    prix:{
        type:Number,

    }
})

module.exports=product=mongoose.model("product",productSchema)