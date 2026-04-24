import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./trip.css";

function TripPlanner(){

const [destination,setDestination] = useState("");
const [startDate,setStartDate] = useState("");
const [endDate,setEndDate] = useState("");
const [budget,setBudget] = useState("");
const [trip,setTrip] = useState(null);

const generateTrip = async () => {

const tripData = {
user: localStorage.getItem("userId"),
destination,
startDate,
endDate,
budget
};

try{

await fetch("/api/trips/add",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(tripData)
});

setTrip(tripData);

}catch(err){
console.log(err);
}

};

return(

<div>

<Navbar/>

<div className="tripPage">

<div className="glassContainer">

<h1>🧭 Plan Your Trip</h1>

<p>Enter your travel details</p>

<div className="tripForm">

<input
placeholder="Destination"
value={destination}
onChange={(e)=>setDestination(e.target.value)}
/>

<input
type="date"
value={startDate}
onChange={(e)=>setStartDate(e.target.value)}
/>

<input
type="date"
value={endDate}
onChange={(e)=>setEndDate(e.target.value)}
/>

<input
type="number"
placeholder="Budget ₹"
value={budget}
onChange={(e)=>setBudget(e.target.value)}
/>

<button onClick={generateTrip}>
Create Trip Plan
</button>

</div>

</div>

{/* TRIP SUMMARY */}

{trip && (

<div className="tripSummary">

<h2>Your Trip Details</h2>

<div className="tripCard">

<h3>📍 Destination</h3>
<p>{trip.destination}</p>

<h3>📅 Start Date</h3>
<p>{trip.startDate}</p>

<h3>📅 End Date</h3>
<p>{trip.endDate}</p>

<h3>💰 Budget</h3>
<p>₹ {trip.budget}</p>

</div>

</div>

)}

</div>

</div>

);

}

export default TripPlanner;