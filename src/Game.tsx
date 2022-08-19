import React, { useState, useEffect } from "react";
import "./App.css";
import Square from "./Square";

function Game (){

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  // const [gameOver, setGameOver] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);
  // const [winner, setWinner] = useState(null);
  type Squares = (null | string)[];
  type WinningLines = [number, number, number][];

  function getWinner(_squares: Squares) {
    const winningLines: WinningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        _squares[a] &&
        _squares[a] === _squares[b] &&
        _squares[a] === _squares[c]
      ) {
        return _squares[a];
      }
    }
    return null;
  }

  function handleClick(index: number) {
    const _squares: Squares = [...squares];
    if (squares[index] || winner) {
      return;
    }
    _squares[index] = xIsNext === true ? "X" : "O";
    setSquares(_squares);
    setXisNext((current) => !current);
  }

  let winner = getWinner(squares);
  // console.log("Winner is::",winner)
  return (
    <div className="App">
      <div className="grid-container">
        <Square index={0} value={squares[0]} onClick={() => handleClick(0)} />
        <Square index={1} value={squares[1]} onClick={() => handleClick(1)} />
        <Square index={2} value={squares[2]} onClick={() => handleClick(2)} />
        <Square index={3} value={squares[3]} onClick={() => handleClick(3)} />
        <Square index={4} value={squares[4]} onClick={() => handleClick(4)} />
        <Square index={5} value={squares[5]} onClick={() => handleClick(5)} />
        <Square index={6} value={squares[6]} onClick={() => handleClick(6)} />
        <Square index={7} value={squares[7]} onClick={() => handleClick(7)} />
        <Square index={8} value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <div className="winner">{winner ? winner + " is the winner!" : ""}</div>
    </div>
  );
}
 export default Game;
