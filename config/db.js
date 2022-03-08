const mongoose =require("mongoose")
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://sara:inova@cluster0.rscyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{

            useNewUrlParser: true,
            useUnifiedTopology: true,
          
        })
        console.log('MongoDB connected....')

    }
    catch(error){
        console.error(error.message)
        }
}
module.exports=connectDB 