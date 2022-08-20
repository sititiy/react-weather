import React, { useState } from "react";
import axios from "axios";
import TellDate from "./TellDate";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayData(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSumbit(event) {
    event.preventDefault();
    searching();
  }
  function searching() {
    const apiKey = "3f99b1c138ce64911a1ec3ceb16fc81d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayData);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  const form = (
    <form onSubmit={handleSumbit}>
      <input type="submit" value="Current City" className="search" />
      <input
        type="text"
        placeholder="Enter your city"
        autoFocus="off"
        autoComplete="off"
        onChange={updateCity}
      />

      <input type="submit" value="search" className="search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <br />
        <br />
        <br />
        <h1 className="city-name">{city}</h1>
        <h2>
          <TellDate date={weather.date} />
        </h2>
        <h1 className="degree"> {Math.round(weather.temperature)}°C </h1>
        <img src={weather.icon} alt={weather.description} className="main" />
        <p className="situation"> {weather.description} </p>
        <ul>
          <li className="extra-info">Humidity: {weather.humidity}%</li>
          <li className="extra-info">Wind: {Math.round(weather.wind)}km/h</li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
