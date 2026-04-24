import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./chatbot.css";

function AiChatBot(){

const [messages,setMessages] = useState([
{sender:"bot",text:"Hi 👋 I am your AI Travel Assistant. Ask me about travel destinations!"}
]);

const [input,setInput] = useState("");
const [typing,setTyping] = useState(false);

const sendMessage = async () => {

if(!input) return;

const userMsg = {sender:"user",text:input};

setMessages(prev=>[...prev,userMsg]);

setTyping(true);

try{

const response = await fetch(
"http://localhost:5000/api/ai/chat",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:input
})
}
);

const data = await response.json();

let reply="AI could not answer.";

if(Array.isArray(data) && data[0]?.generated_text){
reply=data[0].generated_text;
}

setMessages(prev=>[
...prev,
{sender:"bot",text:reply}
]);

}catch(err){

setMessages(prev=>[
...prev,
{sender:"bot",text:"Server error. Please try again."}
]);

}

setTyping(false);
setInput("");

};

return(

<div>

<Navbar/>

<div className="chatPage">

<h1>🤖 AI Travel Assistant</h1>

<div className="chatBox">

{messages.map((msg,index)=>(
<div
key={index}
className={msg.sender==="user"?"userMsg":"botMsg"}
>
{msg.text}
</div>
))}

{typing && (
<div className="botMsg typing">
AI is typing...
</div>
)}

</div>

<div className="chatInput">

<input
placeholder="Ask about travel destinations..."
value={input}
onChange={(e)=>setInput(e.target.value)}
/>

<button onClick={sendMessage}>
Send
</button>

</div>

</div>

</div>

);

}

export default AiChatBot;