import React from "react";
import Header from "../components/Header";
import "./Museum.css";

export default function Sidebar() {
  return (
    <>
      <Header />
      <div class="image title3">
        <img src="../assets/VA.png" alt="" />
      </div>
      <div className="sidebar">
        <img src="../assets/M1.jpg" alt="" />
        <img src="../assets/XM1.png" alt="" />
        <img src="../assets/XM2.png" alt="" />
        <img src="../assets/M2.jpg" alt="" />
        <img src="../assets/M3.jpg" alt="" />
        <img src="../assets/XM3.png" alt="" />
        <img src="../assets/XM4.png" alt="" />
        <img src="../assets/M4.jpeg" alt="" />
        <img src="../assets/M5.jpg" alt="" />
        <img src="../assets/XM5.png" alt="" />
      </div>
    </>
  );
}
