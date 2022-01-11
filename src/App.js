import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BigBen from "./pages/BigBen";
import Tower from "./pages/Tower";
import LondonEye from "./pages/LondonEye";
import Palace from "./pages/Palace";
import Museum from "./pages/Museum";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/bigben" element={<BigBen />} />
          <Route path="/palace" element={<Palace />} />
          <Route path="/tower" element={<Tower />} />
          <Route path="/museum" element={<Museum />} />
          <Route path="/londoneye" element={<LondonEye />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
