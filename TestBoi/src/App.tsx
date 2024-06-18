import React from "react";
import Header from './Components/Header';


function App() {
  return (
    // Outermost Return Div
    <div>
      {/* Scoreboard Header and a horizontal rule for cosmetics */}
      <h1 id="ScoreText">Scoreboard</h1>
      <hr className="line"></hr>
      {/* Outer div to hold 3 scoreboards, this is the container
      and can be thought of as the wall holding the scoreboards up, here is where you
      can make formatting changes properly */}
      <div className="scoreCon">
        <Header></Header>
        <Header></Header>
        <Header></Header>
      </div>

      <br></br>
    </div>
  );
}
export default App