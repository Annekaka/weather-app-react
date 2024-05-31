import React from "react";

import "./App.css";

export default function CurrentWeather() {
  return (
    <div className="currentWeather">
      <form className="search-form">
        <input
          type="search"
          className="search-input"
          placeholder="Enter a city..."
          required
        />
        <input type="submit" className="search" value="Submit" />
      </form>
      <div className="col-1">
        <h1 className="current-city">City</h1>
        <h3 className="current-time">Time</h3>
        <h4>Low 18°C / High 25°C</h4>
      </div>
      <div className="col-2">
        <div id="icon">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            className="weather-icon-bg"
          />
        </div>
        <div className="flex-bx">
          <span id="current-temp">21</span>
          <span className="weather-app-unit">°C</span>
        </div>
      </div>
    </div>
  );
}
