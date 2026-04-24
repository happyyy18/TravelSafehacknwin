
const router=require("express").Router()
const Destination=require("../models/Destination")

router.get("/",async(req,res)=>{

 const data=await Destination.find()

 res.json(data)

})

module.exports=router
