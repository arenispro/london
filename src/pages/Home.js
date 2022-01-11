import React from "react";
import "./Home.css";

function clickMe() {
  alert(
    "Welcome to the magnificent capital of the Great Britain! World class shopping, family-friendly attractions such as Buckingham Palace, the Tower of London and the London Eye, and some of the UK's best open spaces; London has it all! Please click the hamburger bar to navigate. Enjoy!"
  );
}

export default function Sidebar() {
  return (
    <>
      <div class="container">
        <h1>The Mighty Capital of the Great Britain</h1>
        <h2>LONDON</h2>
        <button onClick={clickMe}> Let's Explore! </button>

        <div class="bird-container bird-container--one">
          <div class="bird bird--one"></div>
        </div>

        <div class="bird-container bird-container--two">
          <div class="bird bird--two"></div>
        </div>

        <div class="bird-container bird-container--three">
          <div class="bird bird--three"></div>
        </div>

        <div class="bird-container bird-container--four">
          <div class="bird bird--four"></div>
        </div>
      </div>
    </>
  );
}
