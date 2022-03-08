const express=require("express")
const router=express.Router()
const User=require("../Controllers/userControlers")
// requete*
// ----------Post------------
router.post("/addUser",User.addUser)
// ----------Get-----------
router.get('/getUser',User.getUser)

module.exports=router