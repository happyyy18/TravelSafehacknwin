
const router=require("express").Router()

router.get("/:city",(req,res)=>{

 const city=req.params.city

 res.json({
  city,
  temperature:"27°C",
  humidity:"58%",
  wind:"12 km/h",
  rainChance:"15%"
 })

})

module.exports=router
