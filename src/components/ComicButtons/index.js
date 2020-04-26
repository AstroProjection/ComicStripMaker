import React, { useState } from "react";
import "./Buttons.module.css";

function Buttons({ setDrawingState, drawingState }) {
  const [buttonName, setButtonName] = useState("Draw");
  return (
    <div>
      <button
        onClick={() => {
          setDrawingState(!drawingState);
          drawingState ? setButtonName("Draw") : setButtonName("Stop Drawing");
          console.log(drawingState);
        }}
      >
        {buttonName}
      </button>
      <button>Add text</button>
    </div>
  );
}

export default Buttons;
