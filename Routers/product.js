const express=require("express")
const router=express.Router()
const product=require("../Controllers/products")

router.post("/addProduct",product.addProduct)

module.exports=router