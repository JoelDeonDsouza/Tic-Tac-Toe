import "./board.css";
import Square from "../Square/square";

const Board = () => {
  const renderSquare = () => {
    return <Square />;
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
