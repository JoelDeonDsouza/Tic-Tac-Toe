import "./square.css";

const Square = (props) => {
  // const [value, setValue] = useState(null);
  return (
    <button onClick={props.onClickEvent} className="square">
      {props.value}
    </button>
  );
};

export default Square;
