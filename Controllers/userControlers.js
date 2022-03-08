const User=require("../Models/userModel")

module.exports={

    addUser:async (req,res)=>{
        const {firstName,lastName}=req.body
        try{
            users=new User({
                firstName,lastName
            })
            await users.save()
            res.json(users)
        }
        catch (error){
            console.error(error.message)
        }
    },
    getUser:async(req,res)=>{
        try{
            const user=await User.find()
            res.json(user)
        }
        catch(error){
            console.error(error.message)
        }
    }
}