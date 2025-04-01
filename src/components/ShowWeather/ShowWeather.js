import FormattedDate from '../../utils/FormattedDate';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherTemperature from '../WeatherTemperature/WeatherTemperature';

import './ShowWeather.css';

function ShowWeather(props) {
  return (
    <div className="ShowWeather">
      <div className="row weather-show mt-5 d-flex align-items-center">
        <ul className="col">
          <li className="weather-show__city">{props.data.city}</li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>
            <WeatherTemperature celsius={props.data.temperature} />
          </li>
        </ul>
        <div className="col">
          <WeatherIcon code={props.data.icon} size={85} />
        </div>
        <ul className="col">
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}

export default ShowWeather;
