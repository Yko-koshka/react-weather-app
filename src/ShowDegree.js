import "./ShowDegree.css";
function ShowDegree() {
  return (
    <div className="ShowDegree">
      <div className="weather-show">
        <div>
          <div className="weather-show__city">Cologne</div>
          <div>Tuesday 12:45</div>
          <div className="weather-show__degree"></div>
          <span className="weather-show__c">20°C</span>
        </div>
        <img
          className="weather-show__img"
          src="https://i.pinimg.com/originals/90/8c/89/908c89dac4818d2a5bd0816d691bb19b.png"
          alt=""
        />
        <ul>
          <li>Humidity: 22%</li>
          <li>Wind: 10km/h</li>
        </ul>
      </div>
    </div>
  );
}

export default ShowDegree;
