import "./Days.css";

function Days() {
  let days = [
    {
      day: "Monday",
      degree: "20",
    },
    {
      day: "Tuesday",
      degree: "20",
    },
    {
      day: "Wednesday",
      degree: "20",
    },
    {
      day: "Thursday",
      degree: "20",
    },
    {
      day: "Friday",
      degree: "20",
    },
  ];

  return (
    <div className="Days">
      {days.map(function (day, index) {
        return (
          <div key={index} className="card">
            <h6 className="card-title">{day.day}</h6>
            <div className="card-body">
              <p className="card-text">{day.degree}°C</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Days;
