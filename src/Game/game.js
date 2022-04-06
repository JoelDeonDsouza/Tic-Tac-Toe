import "./game.css";
import Board from "../Board/board";

const Game = () => {
  return (
    <div className="gameBoard">
      Tic-Tak-Toe
      <Board />
    </div>
  );
};

export default Game;
