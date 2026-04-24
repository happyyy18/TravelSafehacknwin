import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./expenses.css";

function ExpenseTracker(){

const [budget,setBudget] = useState("");
const [amount,setAmount] = useState("");
const [category,setCategory] = useState("Food");
const [expenses,setExpenses] = useState([]);

const addExpense = async ()=>{

if(!amount) return;

const newExpense = {
user: localStorage.getItem("userId"),
category,
amount:Number(amount)
};

try{

const res = await fetch("http://localhost:5000/api/expenses/add",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(newExpense)
});

const data = await res.json();

setExpenses([...expenses,data]);

setAmount("");

}catch(err){
console.log(err);
}

};

const deleteExpense=(id)=>{

setExpenses(expenses.filter(e=>e._id!==id));

};

const totalSpent = expenses.reduce((sum,e)=>sum+e.amount,0);

const remaining = budget-totalSpent;

return(

<div>

<Navbar/>

<div className="expensePage">

<div className="glassBox">

<h1>💰 Travel Expense Manager</h1>

{/* BUDGET INPUT */}

<div className="budgetInput">

<input
type="number"
placeholder="Set Trip Budget ₹"
onChange={(e)=>setBudget(Number(e.target.value))}
/>

</div>

{/* SUMMARY */}

<div className="summaryCards">

<div className="summaryCard">

<h3>Budget</h3>
<p>₹{budget}</p>

</div>

<div className="summaryCard">

<h3>Spent</h3>
<p>₹{totalSpent}</p>

</div>

<div className="summaryCard">

<h3>Remaining</h3>
<p className={remaining<0?"danger":""}>
₹{remaining}
</p>

</div>

</div>

{/* WARNING */}

{remaining<0 && (

<div className="warning">

⚠ Budget exceeded! You are low on money.

</div>

)}

{/* ADD EXPENSE */}

<div className="expenseForm">

<input
type="number"
placeholder="Expense Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<select
value={category}
onChange={(e)=>setCategory(e.target.value)}
>

<option>Food</option>
<option>Hotel</option>
<option>Transport</option>
<option>Activities</option>
<option>Shopping</option>

</select>

<button onClick={addExpense}>
Add Expense
</button>

</div>

{/* EXPENSE LIST */}

<div className="expenseList">

{expenses.map(exp=>(

<div className="expenseCard" key={exp._id}>

<span>{exp.category}</span>

<span>₹{exp.amount}</span>

<button
className="deleteBtn"
onClick={()=>deleteExpense(exp._id)}
>
Delete
</button>

</div>

))}

</div>

</div>

</div>

</div>

);

}

export default ExpenseTracker;