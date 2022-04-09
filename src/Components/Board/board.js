import "./board.css";
import Square from "../Square/square";
import { useState } from "react";

const Board = () => {
  const initicialSquare = Array(9).fill(null);
  const [squares, setSquares] = useState(initicialSquare);

  const handleClickEvent = (i) => {
    // const newSquare = [...squares];
    // newSquare[i] = "X";
    // setSquares(newSquare);
    alert(`key ${i} is pressed`);
  };

  const renderSquare = (i) => {
    return <Square value={squares} onClickEvent={() => handleClickEvent(i)} />;
  };
  return (
    <div className="board">
      Board
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
