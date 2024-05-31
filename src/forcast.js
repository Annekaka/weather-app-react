import React from "react";

import "./App.css";

export default function Forcast() {
  return (
    <div className="forecastWeek" id="forecastWeek">
      <div className="col-3">
        <div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            className="weather-icon-sml"
            alt="weather-icon"
          />
        </div>
        <div className="weather-forecast-day">Monday</div>
        <div className="weather-forecast-temp">
          <span className="weather-forecast-temp-max">
            <strong>20°</strong>
          </span>
          <span className="weather-forecast-temp-min">15°</span>
        </div>
      </div>
      <div className="col-3">
        <div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            className="weather-icon-sml"
            alt="weather-icon"
          />
        </div>
        <div className="weather-forecast-day">Monday</div>
        <div className="weather-forecast-temp">
          <span className="weather-forecast-temp-max">
            <strong>20°</strong>
          </span>
          <span className="weather-forecast-temp-min">15°</span>
        </div>
      </div>
      <div className="col-3">
        <div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            className="weather-icon-sml"
            alt="weather-icon"
          />
        </div>
        <div className="weather-forecast-day">Monday</div>
        <div className="weather-forecast-temp">
          <span className="weather-forecast-temp-max">
            <strong>20°</strong>
          </span>
          <span className="weather-forecast-temp-min">15°</span>
        </div>
      </div>
      <div className="col-3">
        <div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            className="weather-icon-sml"
            alt="weather-icon"
          />
        </div>
        <div className="weather-forecast-day">Monday</div>
        <div className="weather-forecast-temp">
          <span className="weather-forecast-temp-max">
            <strong>20°</strong>
          </span>
          <span className="weather-forecast-temp-min">15°</span>
        </div>
      </div>
      <div className="col-3">
        <div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            className="weather-icon-sml"
            alt="weather-icon"
          />
        </div>
        <div className="weather-forecast-day">Monday</div>
        <div className="weather-forecast-temp">
          <span className="weather-forecast-temp-max">
            <strong>20°</strong>
          </span>
          <span className="weather-forecast-temp-min">15°</span>
        </div>
      </div>
    </div>
  );
}
