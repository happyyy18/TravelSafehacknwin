
const router=require("express").Router()

router.get("/",(req,res)=>{

 res.json([
  {type:"Flood",severity:"Medium"},
  {type:"Storm",severity:"Low"},
  {type:"Heavy Rain",severity:"Low"}
 ])

})

module.exports=router
