import "./board.css";
import Square from "../Square/square";
import { useState } from "react";

const Board = () => {
  const initicialSquare = Array(9).fill(null);
  const [squares, setSquares] = useState(initicialSquare);

  const handleClickEvent = (i) => {
    const newSquare = [...squares];
    newSquare[i] = "X";
    setSquares(newSquare);
  };

  const renderSquare = (i) => {
    return <Square value={squares} onClickEvent={() => handleClickEvent(i)} />;
  };
  return (
    <div className="board">
      Board
      <div className="broadRow">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      <div className="broadRow">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      <div className="broadRow">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
    </div>
  );
};

export default Board;
