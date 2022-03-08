

const Product=require("../Models/products")

module.exports={
    addProduct: async(req,res)=>{
       const {name,categories,prix}=req.body
        
 
        try {
            Products= new Product({
                name,
                categories
                ,prix
            })
            await Products.save()
            res.json(Products)
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
    }
}