import React, { useMemo, useState } from "react";
import "./App.css"

const App = () => {
  const [weight, setWeight] = useState(120);
  const [height, setHeight] = useState(70);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }
  function onHeightChange(event) {
    setHeight(event.target.value);
  }
  const output = useMemo(() => {
    const CalculateHeight = height / 100;
    return (weight / (CalculateHeight * CalculateHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <div>
      <main>
        <h1>BMI CALCULATOR</h1>
        <div className="input-section">
          <p className="slider-output">Weight: {weight}kg</p>
          <input
            className="input-slider"
            type="range"
            step={1}
            min={30}
            max={150}
            onChange={onWeightChange}
          />
          <p className="slider-output">Height: {height}cm</p>
          <input
            className="input-slider"
            type="range"
            step={1}
            min={80}
            max={300}
            onChange={onHeightChange}
          />
        </div>
        <div className="output-section">
          <p>Your BMI is </p>
          <p className="output">{output}</p>
        </div>
      </main>
      <p className="myname">Made by: Shahvez Tyagi:&#10084;</p>
    </div>
  );
};

export default App;
