import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaMapMarkedAlt, FaRoute, FaWallet, FaShieldAlt } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      <h2 className="logo">🌍 TravelSafe</h2>

      <div className="navLinks">

        <Link to="/dashboard">
          <FaHome className="icon"/> Home
        </Link>

        <Link to="/destinations">
          <FaMapMarkedAlt className="icon"/> Destinations
        </Link>

        <Link to="/trip">
          <FaRoute className="icon"/> Trip Planner
        </Link>
        <Link to="/ai-chat">AI Assistant</Link>

        <Link to="/expenses">
          <FaWallet className="icon"/> Expenses
        </Link>

        <Link to="/safety">
          <FaShieldAlt className="icon"/> Safety
        </Link>

      </div>

    </div>
  );
}

export default Navbar;