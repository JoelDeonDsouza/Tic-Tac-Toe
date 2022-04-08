import { useState } from "react";
import "./square.css";

const Square = (props) => {
  // const [value, setValue] = useState(null);
  return (
    <button onClick={() => {}} className="square">
      {props.value}
    </button>
  );
};

export default Square;
