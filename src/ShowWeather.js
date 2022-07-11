import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./ShowWeather.css";

function ShowWeather(props) {
  return (
    <div className="ShowWeather">
      <div className="weather-show">
        <div>
          <div className="weather-show__city">{props.data.city}</div>
          <FormattedDate date={props.data.date} />
          <div className="weather-show__degree"></div>
          <span className="weather-show__c">{props.data.temperature}°C</span>
        </div>
        <WeatherIcon code={props.data.icon} size={52} />
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}

export default ShowWeather;
