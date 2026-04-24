
const mongoose=require("mongoose")

const DestinationSchema=new mongoose.Schema({
 name:String,
 category:String,
 rating:Number,
 bestTime:String,
 description:String,
 location:String
})

module.exports=mongoose.model("Destination",DestinationSchema)
