
import React from 'react';

const WeatherDisplay = ({ weather }) => {
  return (
    <div>
      {weather ? (
        <div>
          <h3>{weather.name}</h3>
          <p>{weather.weather[0].description}</p>
          <p>{Math.round(weather.main.temp - 273.15)}°C</p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
