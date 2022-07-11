import React, { useState } from "react";
import "./WeatherTemperature.css";

function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function getFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function getCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="weather-show__degree">{Math.round(props.celsius)}</div>
        <div className="show-degree">
          <span>
            °C |{" "}
            <a href="/" onClick={getFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="weather-show__degree">{Math.round(fahrenheit())}</div>
        <div className="show-degree">
          <span>
            <a href="/" onClick={getCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </div>
      </div>
    );
  }
}

export default WeatherTemperature;
