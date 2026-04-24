import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./safety.css";

function SafetyCenter(){

const [contactName,setContactName] = useState("");
const [contactNumber,setContactNumber] = useState("");
const [contacts,setContacts] = useState([]);
const [location,setLocation] = useState(null);
const [locationLink,setLocationLink] = useState("");

/* ADD CONTACT */

const addContact = () => {

if(!contactName || !contactNumber){
alert("Fill all fields");
return;
}

const newContact = {
id: Date.now(),
name: contactName,
number: contactNumber
};

setContacts([...contacts,newContact]);

setContactName("");
setContactNumber("");

};

/* GET GPS LOCATION */

const getLocation = () => {

if(!navigator.geolocation){
alert("Geolocation not supported");
return;
}

navigator.geolocation.getCurrentPosition((position)=>{

const lat = position.coords.latitude;
const lon = position.coords.longitude;

setLocation({lat,lon});

const link = `https://maps.google.com/?q=${lat},${lon}`;

setLocationLink(link);

});

};

/* SHARE LOCATION VIA WHATSAPP */

const shareLocation = () => {

if(!locationLink){
alert("Get location first");
return;
}

const message = `🚨 I need help! My current location: ${locationLink}`;

const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;

window.open(whatsappURL,"_blank");

};

return(

<div>

<Navbar/>

<div className="safetyContainer">

<h1>🚨 Safety Center</h1>

{/* EMERGENCY SERVICES */}

<div className="emergencyGrid">

<a href="tel:100" className="emergencyCard police">
👮 Police
<p>Call 100</p>
</a>

<a href="tel:102" className="emergencyCard ambulance">
🚑 Ambulance
<p>Call 102</p>
</a>

<a href="tel:101" className="emergencyCard fire">
🚒 Fire
<p>Call 101</p>
</a>

<a href="tel:1091" className="emergencyCard women">
👩 Women Helpline
<p>Call 1091</p>
</a>

</div>

{/* SOS */}

<div className="sosBox">

<button className="sosButton" onClick={getLocation}>
🚨 SOS + Get My Location
</button>

<p>Get your GPS location in emergency</p>

</div>

{/* SHARE LOCATION */}

{locationLink && (

<div className="shareBox">

<p>Your Location:</p>

<a href={locationLink} target="_blank" rel="noreferrer">
Open in Google Maps
</a>

<button className="shareButton" onClick={shareLocation}>
📱 Share via WhatsApp
</button>

</div>

)}

{/* GOOGLE MAP */}

{location && (

<div className="mapContainer">

<iframe
title="map"
width="100%"
height="400"
style={{border:0}}
loading="lazy"
allowFullScreen
src={`https://www.google.com/maps?q=police%20station&near=${location.lat},${location.lon}&output=embed`}
></iframe>

</div>

)}





</div>

</div>

);

}

export default SafetyCenter;