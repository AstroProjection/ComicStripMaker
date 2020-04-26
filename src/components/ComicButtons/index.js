import React, { useState, useEffect } from "react";
import "./Buttons.module.css";

function Buttons({
  setDrawingState,
  drawingState,
  canvasRefState,
  setTextState,
  textState,
}) {
  const [buttonName, setButtonName] = useState("Draw");
  const [canvasRef, setCanvasRef] = useState(canvasRefState);
  const [imageData, setImageData] = useState("");
  let refCanvas = canvasRefState;

  const saveImage = async (e) => {
    if (!canvasRef) return;
    let imgData = canvasRef.toDataURL();
    setImageData(imgData);
  };

  useEffect(() => {
    setCanvasRef(refCanvas);
  }, [refCanvas]);

  useEffect(() => {
    if (!imageData) return;

    console.log(imageData);

    return () => {};
  }, [imageData]);

  return (
    <div>
      <button>ADD Page</button>
      <button>DEL Page</button>
      <button
        onClick={() => {
          setDrawingState(!drawingState);
          setTextState(false);
          drawingState ? setButtonName("Draw") : setButtonName("Stop Drawing");
        }}
      >
        {buttonName}
      </button>
      <button
        onClick={() => {
          setTextState(!textState);
          setDrawingState(false);
        }}
      >
        Add text
      </button>
      <button onClick={saveImage}>Save</button>
    </div>
  );
}

export default Buttons;
