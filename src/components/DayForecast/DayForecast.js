import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

import './DayForecast.css';

function DayForecast(props) {
  function getMaxTemperature() {
    let temp = Math.round(props.data.day.maxtemp_c);
    return `${temp}°`;
  }

  function getMinTemperature() {
    let temp = Math.round(props.data.day.mintemp_c);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.date);
    let day = date.getDay();

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[day];
  }
  return (
    <div className="DayForecast mt-5">
      <div className="card">
        <h6 className="card-title">{day()}</h6>
        <div>
          <WeatherIcon code={props.data.day.condition.code} size={45} />
        </div>
        <div className="card-body">
          <p className="card-temperature-max">{getMaxTemperature()}C</p>
          <p className="card-temperature-min">{getMinTemperature()}C</p>
        </div>
      </div>
    </div>
  );
}

export default DayForecast;
