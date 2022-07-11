import React, { useState, useEffect } from "react";
import DayForecast from "./DayForecast";
import axios from "axios";

function Days(props) {
  let [loaded, setLoaded] = useState(false);
  let [days, setDays] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setDays(response.data.daily);
    setLoaded(true);
  }

  function Load() {
    let apiKey = "b008b611bf4075eb12ea48ff1a84b599";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }

  if (loaded) {
    return (
      <div className="Days">
        <div className="row">
          {days.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <DayForecast data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    Load();
  }
}

export default Days;
