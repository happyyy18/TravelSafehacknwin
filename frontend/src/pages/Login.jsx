import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {

    try {

      const res = await axios.post("/api/auth/login",{
        email,
        password
      });

      localStorage.setItem("token",res.data.token);
      localStorage.setItem("userId", res.data.user.id);

      alert("Login Successful");

      navigate("/dashboard");

    } catch {

      alert("Login Failed");

    }

  };

  return (

    <div className="loginPage">

      <div className="loginCard">

        <h1>🌍 TravelSafe</h1>
        <p>Welcome back traveler</p>

        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={login}>
          Login
        </button>

        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>

      </div>

    </div>

  );

}

export default Login;