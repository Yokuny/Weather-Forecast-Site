import { useState, useEffect } from "react";
import styled from "styled-components";

import latLonRequest from "@/scripts/lat-lon-request";
import weatherInfo from "@/scripts/weather-info";
import weatherFactory from "@/scripts/weather-factory";

const _Weather = ({ city }) => {
  const [weather, setWeather] = useState([]);
  const [cityName, setCityName] = useState("London");
  useEffect(() => {
    const location = latLonRequest(city);
    location.then((data) => {
      const { lat, lon } = data;
      weatherInfo(lat, lon).then((data) => {
        setCityName(data.city.name);
        const nextFiveHours = [];
        for (let i = 0; i < 8; i += 2) {
          const hour = data.list[i];
          const hourWeather = weatherFactory(hour);
          nextFiveHours.push(hourWeather);
        }
        setWeather(nextFiveHours);
      });
    });
  }, [city]);
  return (
    <>
      <WeatherStyle>
        <h1>{cityName}</h1>
        {weather.map((weather) => (
          <div key={weather.time}>
            <span>
              <span>{weather.time}</span>
            </span>
            <span>
              <span>feelsLike</span>
              <h4>{weather.feelsLike}°C</h4>
            </span>
            <span>
              <span>temp</span>
              <h4>{weather.temp}°C</h4>
            </span>
            <span>
              <span>cloudiness</span>
              <h4>{weather.cloudiness}</h4>
            </span>
            <span>
              <span>humidity</span>
              <h4>{weather.humidity}m/s</h4>
            </span>
            <span>
              <span>weather</span>
              <h4>{weather.weather}m/s</h4>
            </span>
          </div>
        ))}
      </WeatherStyle>
    </>
  );
};
export default _Weather;
const WeatherStyle = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  border-radius: 0.2rem;
  background-color: #fff;
`;
