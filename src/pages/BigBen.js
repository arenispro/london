import React from "react";
import Header from "../components/Header";
import "./BigBen.css";

export default function Sidebar() {
  return (
    <>
      <Header />
      <div class="image title1">
        <img src="../assets/BB.png" alt="" />
      </div>
      <div className="sidebar">
        <img src="../assets/XB1.png" alt="" />
        <img src="../assets/B1.jpg" alt="" />
        <img src="../assets/B2.jpg" alt="" />
        <img src="../assets/XB2.png" alt="" />
        <img src="../assets/XB3.png" alt="" />
        <img src="../assets/B3.jpg" alt="" />
        <img src="../assets/B4.jpg" alt="" />
        <img src="../assets/XB4.png" alt="" />
        <img src="../assets/XB5.png" alt="" />
        <img src="../assets/B5.jpg" alt="" />
      </div>
    </>
  );
}
