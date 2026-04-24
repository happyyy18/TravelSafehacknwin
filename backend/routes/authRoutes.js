
const router=require("express").Router()
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const User=require("../models/User")

router.post("/signup",async(req,res)=>{

 const {name,email,password}=req.body

 const hash=await bcrypt.hash(password,10)

 const user=new User({name,email,password:hash})

 await user.save()

 res.json({message:"User created"})

})

router.post("/login",async(req,res)=>{

 const {email,password}=req.body

 const user=await User.findOne({email})

 if(!user) return res.status(400).json({msg:"User not found"})

 const valid=await bcrypt.compare(password,user.password)

 if(!valid) return res.status(400).json({msg:"Wrong password"})

 const token=jwt.sign({id:user._id},"secret")

 res.json({
 token,
 user:{
   id:user._id,
   name:user.name,
   email:user.email
 }
})

})

module.exports=router
