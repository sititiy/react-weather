import React from "react";
import TellDate from "./TellDate";
import WeatherTemp from "./WeatherTemp";

export default function WeartherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city-name">{props.info.city}</h1>
      <h2>
        <TellDate date={props.info.date} />
      </h2>

      <div>
        <WeatherTemp celsius={props.info.temperature} />
      </div>
      <img
        src={props.info.icon}
        alt={props.info.description}
        className="main"
      />
      <p className="situation text-capitalize"> {props.info.description} </p>
      <ul>
        <li className="extra-info">Humidity: {props.info.humidity}%</li>
        <li className="extra-info">Wind: {Math.round(props.info.wind)}km/h</li>
      </ul>
    </div>
  );
}
