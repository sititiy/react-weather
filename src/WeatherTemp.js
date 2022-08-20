import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFaren(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <h1 className="degree">
          {" "}
          {Math.round(props.celsius)}
          <span className="unit">
            {" "}
            °C |{" "}
            <a href="/" onClick={showFaren}>
              F
            </a>
          </span>{" "}
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="degree">
          {" "}
          {Math.round(fahrenheit())}
          <span className="unit">
            {" "}
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | F{" "}
          </span>
        </h1>
      </div>
    );
  }
}
