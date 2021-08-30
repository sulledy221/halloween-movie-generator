import { useState } from "react";
import "../App.css";

export default function Halloween({ halloweenItems, type }) {
const [ choice, setChoice ] = useState("")
const randomChoice = () => {
  const calculator = Math.floor(Math.random() * halloweenItems.length);
  return setChoice(halloweenItems[calculator].value);
}
  return (
    <div>
      <button onClick={randomChoice} className="button-size">
        {type}
      </button>
      {choice}
    </div>
  );
}