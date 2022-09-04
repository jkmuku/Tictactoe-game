import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import "./App.css";
import Square from "./Square";
import WinningArrays from "./WinningArrays";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isComputerNext, setIsComputerNext] = useState(false);

  const [moves, setMoves] = useState(0);

  type Squares = (null | string)[];
  type EmptyIndexes = number[];
  type WinningLines = [number, number, number][];

  useEffect(() => {
    if (winner) return;
    if (isComputerNext) {
      computerSelection();
    }
  }, [isComputerNext]);

  function computerSelection() {
    if (winner) return;
    const computerChoice = getComputerSelection();
    squares[computerChoice] = "O";
    setSquares((board) => [...board]);
    setIsComputerNext(false);
  }

  function getComputerSelection(): number {
    let emptyIndexes: EmptyIndexes = [];
    squares.forEach((square, index: number) => {
      if (squares[index] === null) {
        emptyIndexes.push(index);
      }
    });
    const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
    return emptyIndexes[randomIndex];
  }

  // console.log(getComputerSelection())

  function getWinner(_squares: Squares) {
    const winningLines: WinningLines = WinningArrays;

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
    _squares[index] = "X";
    setSquares(_squares);
    setIsComputerNext(true);

    let _moves = moves;
    _moves++;
    setMoves(_moves);
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
      <div className="game-status">
        {winner ? winner + " is the winner!" : ""}
        {!winner && moves === 5 ? "It's a tie!" : ""}
      </div>
    </div>
  );
}
export default Game;
