import React from "react";

export default function WeatherForecastDay(props) {
  function minTemp() {
    let mintemp = Math.round(props.data.temp.min);
    return `${mintemp}° `;
  }
  function maxTemp() {
    let maxtemp = Math.round(props.data.temp.max);
    return `${maxtemp}° `;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <span className="weather-forecast-day">{day()}</span>
      <br />

      <img src="" alt="" width="46" className="icon" />
      <p>
        <span className="weather-forecast-temp-max">{maxTemp()} </span>
        <span className="weather-forecast-temp-min">{minTemp()}</span>
      </p>
    </div>
  );
}
