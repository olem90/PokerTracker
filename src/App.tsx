import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import PushFoldChart from "./pages/PushFoldChart";
import SessionTrackerPage from "./pages/SessionTracker";

type SessionType = {
  id: string;
  buyin: number;
  date: string;
  profit: number;
};

function App() {
  const [sessions, setSessions] = useState<SessionType[]>([]);

  useEffect(() => {
    const savedSessions = localStorage.getItem("sessions");
    if (savedSessions) {
      setSessions(JSON.parse(savedSessions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sessions", JSON.stringify("sessions"));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="push-fold-chart" element={<PushFoldChart />}></Route>
        <Route path="session-tracker" element={<SessionTrackerPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
