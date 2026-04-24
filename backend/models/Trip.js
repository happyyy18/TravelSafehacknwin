const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

destination:String,

startDate:String,

endDate:String,

budget:Number

});

module.exports = mongoose.model("Trip",tripSchema);