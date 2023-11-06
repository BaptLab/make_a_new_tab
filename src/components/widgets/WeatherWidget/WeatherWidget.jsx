import "./weatherwidget.css";
import axios from "axios";
import { useState, useEffect } from "react";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);

  const weatherApiUrl = "http://api.weatherapi.com/v1/current.json?";
  const apiKey = "cc0404d5cabc4498bdb152816230211";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coordinates = await getUserLocation();
        console.log(coordinates);

        const response = await fetchedData(
          apiKey,
          weatherApiUrl,
          coordinates.userLatitute,
          coordinates.userLongitude
        );
        console.log(response.data);

        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (weatherData === null) {
    // Render a loading message or spinner while data is being fetched.
    return <div>Loading...</div>;
  }

  const weatherIcon = weatherData.current.condition.icon;
  const weatherPlace = weatherData.location.name;
  const weatherTime = weatherData.current.last_updated;
  const weatherTemp = weatherData.current.temp_c;

  return (
    <div>
      <div className="weather-header-infos">
        <span className="header-infos" id="weather-place">
          {weatherPlace}
        </span>
        <span className="header-infos" id="weather-time">
          {weatherTime}
        </span>
      </div>
      <div className="weather-main-content">
        <img
          className="weather-content"
          alt="weather icon"
          id="weather-icon"
          src={weatherIcon}
        ></img>
        <span className="weather-content" id="weather-Temp">
          {weatherTemp}°C
        </span>
      </div>
    </div>
  );
};

async function fetchedData(apiKey, weatherApiUrl, userLatitute, userLongitude) {
  try {
    const response = await axios.get(weatherApiUrl, {
      params: {
        key: apiKey,
        q: `${userLatitute}, ${userLongitude}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}

function getUserLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLatitute = position.coords.latitude;
        const userLongitude = position.coords.longitude;
        resolve({ userLatitute, userLongitude });
      },
      (error) => {
        reject(error);
      }
    );
  });
}

export default WeatherWidget;
