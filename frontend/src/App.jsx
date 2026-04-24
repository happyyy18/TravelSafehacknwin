import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Destinations from "./pages/Destinations";
import TripPlanner from "./pages/TripPlanner";
import AiChatBot from "./pages/AiChatBot";
import ExpenseTracker from "./pages/ExpenseTracker";
import SafetyCenter from "./pages/SafetyCenter"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/destinations" element={<Destinations />} />

        <Route path="/trip" element={<TripPlanner />} />

        <Route path="/ai-chat" element={<AiChatBot />} />

        <Route path="/expenses" element={<ExpenseTracker />} />

        <Route path="/safety" element={<SafetyCenter />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;