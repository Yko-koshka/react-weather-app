import React, { useState, useEffect, useCallback } from 'react';
import DayForecast from './DayForecast';
import axios from 'axios';

function Days(props) {
  let [loaded, setLoaded] = useState(false);
  let [days, setDays] = useState(null);

  const loadWeather = useCallback(() => {
    let apiKey = '8217bae2e351452bb8985714250104';
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=7&aqi=no&alerts=no`;
    axios.get(apiUrl).then((response) => {
      setDays(response.data.forecast.forecastday);
      setLoaded(true);
    });
  }, [props.coordinates]);

  useEffect(() => {
    setLoaded(false);
    loadWeather();
  }, [loadWeather]);

  if (loaded) {
    return (
      <div className="Days">
        <div className="row">
          {days.map((dailyForecast, index) =>
            index < 7 ? (
              <div className="col" key={index}>
                <DayForecast data={dailyForecast} />
              </div>
            ) : null
          )}
        </div>
      </div>
    );
  } else {
    return <p>Uploading the forecast...</p>;
  }
}

export default Days;
