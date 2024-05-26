// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import config from './config.json';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.apiKey}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching the weather data', error);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherForm onCityChange={fetchWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
