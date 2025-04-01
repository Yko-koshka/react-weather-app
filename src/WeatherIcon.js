import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

function WeatherIcon(props) {
  const codeMapping = {
    1000: 'CLEAR_DAY',
    1003: 'CLOUDY',
    1006: 'CLOUDY',
    1009: 'CLOUDY',
    1063: 'RAIN',
    1150: 'RAIN',
    1180: 'RAIN',
    1183: 'RAIN',
    1273: 'RAIN',
    1276: 'RAIN',
    1114: 'SNOW',
    1210: 'SNOW',
    1213: 'SNOW',
    1030: 'FOG',
    1135: 'FOG',
    1147: 'FOG',
  };

  const icon = codeMapping[props.code] || 'CLOUDY';

  return (
    <ReactAnimatedWeather
      icon={icon}
      color="#1e1e1e"
      size={props.size}
      animate={true}
    />
  );
}

export default WeatherIcon;
