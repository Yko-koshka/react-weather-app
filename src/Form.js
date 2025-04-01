import React, { useState } from 'react';
import axios from 'axios';
import ShowWeather from './ShowWeather';
import Days from './Days';

import './Form.css';

function Form(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function getWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.location,
      temperature: response.data.current.temp_c,
      humidity: response.data.current.humidity,
      date: new Date(response.data.location.localtime),
      description: response.data.current.condition.text,
      icon: response.data.current.condition.code,
      wind: response.data.current.wind_kph,
      city: response.data.location.name,
    });
  }

  function citySubmit(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = '8217bae2e351452bb8985714250104';
    let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no&alerts=no`;
    axios.get(apiUrl).then(getWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Form">
        <form className="weather-form" onSubmit={citySubmit}>
          <input
            className="weather-form__text"
            autoFocus="on"
            type="search"
            placeholder="City"
            onChange={cityChange}
          />
          <input className="btn btn-danger" type="submit" value="Search" />
        </form>
        <ShowWeather data={weatherData} />
        <Days coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return 'Loading...';
  }
}

export default Form;
