import React, { Fragment, useEffect, useRef, useState } from "react";
import styles from "./Canvas.module.css";

const Canvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("black");

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.style.background = "white";
    canvas.style.border = `none`
    canvas.style.borderTop = `${2}px solid #${111}`
    canvas.style.cursor = "crosshair";

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = color;
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  function changeColor() {
    let newColor = color;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = newColor;
  }

  return (
    <Fragment>
      <div className={`${styles.container}`}>
        <button  onClick={clearCanvas}>
          Clear Canvas
        </button>
        {/* <input type="color" value={color} onChange={e => setColor(e.target.value)}/>
        <button onClick={changeColor}>Change</button> */}
      </div>

      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        placeholder="Draw here"
      />
    </Fragment>
  );
};

export default Canvas;
