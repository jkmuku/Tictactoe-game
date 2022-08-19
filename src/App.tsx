import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import "./App.css";
import Square from "./Square";
import Game from "./Game";

function App() {

  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
