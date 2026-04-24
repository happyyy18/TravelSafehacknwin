const express = require("express");
const router = express.Router();
const Trip = require("../models/Trip");

/* SAVE TRIP */

router.post("/add",async(req,res)=>{

try{

const trip = new Trip(req.body);

await trip.save();

res.json(trip);

}catch(err){

res.status(500).json({error:"Trip not saved"});

}

});

/* GET USER TRIPS */

router.get("/:userId",async(req,res)=>{

try{

const trips = await Trip.find({user:req.params.userId});

res.json(trips);

}catch(err){

res.status(500).json({error:"Error fetching trips"});

}

});

module.exports = router;