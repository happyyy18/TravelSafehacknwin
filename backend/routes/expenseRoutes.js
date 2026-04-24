const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

/* ADD EXPENSE */

router.post("/add",async(req,res)=>{

try{

const expense = new Expense(req.body);

await expense.save();

res.json(expense);

}catch(err){

res.status(500).json({error:"Expense not saved"});

}

});

/* GET USER EXPENSES */

router.get("/:userId",async(req,res)=>{

try{

const expenses = await Expense.find({user:req.params.userId});

res.json(expenses);

}catch(err){

res.status(500).json({error:"Error fetching expenses"});

}

});

module.exports = router;