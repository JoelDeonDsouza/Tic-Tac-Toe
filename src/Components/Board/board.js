import "./board.css";
import Square from "../Square/square";
import { useState } from "react";

const Board = () => {
  const initicialSquare = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  const [squares, setSquares] = useState(initicialSquare);
  const renderSquare = (i) => {
    return <Square value={squares} />;
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
