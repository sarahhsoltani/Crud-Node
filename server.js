const express=require("express")
const app=express()


// connect db
const connectDB=require("./config/db")
connectDB()
app.use(express.json());
// Router
const ProductRouter=require("./Routers/product")
const UserRouter=require('./Routers/userRouter')
// path
app.use("/innova",ProductRouter)
app.use("/user",UserRouter)  
// port 4000*
  
const PORT =process.env.PORT || '4000'
// Config Server
app.listen(PORT,(err)=>{
    if(err){
        console.log("server is not running")
    } 
    else {
        console.log(`server is running on port ${PORT}` )
    }
})