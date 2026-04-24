import React, { useState } from "react";
import axios from "axios";
import "./signup.css";

function Signup() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const signup = async () => {

    try {

      await axios.post("/api/auth/signup",{
        name,
        email,
        password
      });

      alert("Account Created Successfully");

    } catch {

      alert("Signup Failed");

    }

  };

  return (

    <div className="signupPage">

      <div className="signupCard">

        <h1>🌍 TravelSafe</h1>
        <p>Create your travel account</p>

        <input
          placeholder="Full Name"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={signup}>
          Sign Up
        </button>

        <p>
          Already have an account? <a href="/">Login</a>
        </p>

      </div>

    </div>

  );

}

export default Signup;