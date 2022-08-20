import React, { useState } from "react";
import axios from "axios";
import WeartherInfo from "./WeatherInfo";
export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loading: false });

  function displayData(response) {
    setWeather({
      loading: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
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

  if (weather.loading) {
    return (
      <div>
        {form}
        <br />
        <br />
        <br />
        <WeartherInfo info={weather} />
      </div>
    );
  } else {
    searching();
    return <div>{form}</div>;
  }
}
