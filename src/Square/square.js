import "./square.css";

const Square = (props) => {
  return (
    <button
      onClick={() => alert(`square ${props.value} clicked`)}
      className="square"
    >
      {props.value}
    </button>
  );
};

export default Square;
