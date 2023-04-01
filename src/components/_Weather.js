import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

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
    <WeatherStyle>
      <h1>{cityName}</h1>
      {weather.map((clime) => (
        <>
          <div key={clime.time}>
            <h2>{clime.time}</h2>

            <div>
              <p>{clime.description}</p>
              <Image src={`/${clime.icon}.png`} width={20} height={20} alt="weather" />
            </div>

            <div>
              <p>Temperatura: {clime.celsius}°C</p>
              <p>Sensação: {clime.feltCelsius}°C</p>
            </div>

            <div>
              <p>Umidade: {clime.humidity}%</p>
              <p>Nuvens: {clime.cloudiness}%</p>
              <p>Vento: {clime.windSpeed}m/s</p>
            </div>
          </div>
        </>
      ))}
    </WeatherStyle>
  );
};
export default _Weather;
const WeatherStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 0.2rem;
  background-color: #fff;
  gap: 1rem;
  h1 {
    font-size: 2rem;
  }
`;
