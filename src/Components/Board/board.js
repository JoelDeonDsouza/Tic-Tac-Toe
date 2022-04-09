import "./board.css";
import Square from "../Square/square";
import { useState } from "react";
import CalculateWinner from "../gameLogic";

const Board = () => {
  const initicialSquare = Array(9).fill(null);
  const [squares, setSquares] = useState(initicialSquare);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClickEvent = (i) => {
    const newSquare = [...squares];
    const winnerDeclared = Boolean(CalculateWinner(newSquare));
    const squareFilled = Boolean(newSquare[i]);
    if (winnerDeclared || squareFilled) {
      return;
    }
    newSquare[i] = xIsNext ? "X" : "O";
    setSquares(newSquare);
    setXIsNext(!xIsNext);
    // alert(`key ${i} is pressed`);
  };

  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} onClickEvent={() => handleClickEvent(i)} />
    );
  };

  const winner = CalculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player is: ${xIsNext ? "X" : "O"}`;
  return (
    <div className="board">
      <h2>{status}</h2>
      <div className="broadRow">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="broadRow">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="broadRow">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
