import React, { useState } from "react";
import axios from "axios";
import ShowWeather from "./ShowWeather";

import "./Form.css";

function Form(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function getWeeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function citySubmit(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    console.log(event.target.value);
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "b008b611bf4075eb12ea48ff1a84b599";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Form">
        <form className="weather-form" onSubmit={citySubmit}>
          <input
            className="weather-form__text"
            autoFocus="on"
            type="search"
            placeholdor="City"
            onChange={cityChange}
          />
          <input className="btn btn-danger" type="submit" value="Search" />
        </form>
        <ShowWeather data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Form;
