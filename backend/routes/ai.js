const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/chat", async (req,res)=>{

try{

const {message} = req.body;

const response = await axios.post(
"https://api-inference.huggingface.co/models/google/flan-t5-base",
{
inputs:`Answer this travel question: ${message}`
},
{
headers:{
Authorization:"Bearer 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"
}
}
);

res.json(response.data);

}catch(error){

console.log(error);

res.status(500).json({error:"AI error"});

}

});

module.exports = router;