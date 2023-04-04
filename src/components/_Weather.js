import { useState, useEffect } from "react";
import Image from "next/image";

import latLonRequest from "@/scripts/lat-lon-request";
import weatherInfo from "@/scripts/weather-info";
import weatherFactory from "@/scripts/weather-factory";
import { WeatherStyle, WeatherCard, Celsius, WeatherInfo } from "./style/WeatherStyle";
const _Weather = ({ city }) => {
  const [weather, setWeather] = useState([]);
  const [cityName, setCityName] = useState(city);
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
      <section>
        {weather.map((clime) => (
          <WeatherCard key={clime.time}>
            <h2>dia: {clime.time}</h2>
            <Image src={`/${clime.icon}.png`} width={60} height={60} alt="weather" />
            <Celsius>
              <p>{clime.celsius}°C</p>
              <div>
                <p>Sensação:</p>
                <p>{clime.feltCelsius}°C</p>
              </div>
            </Celsius>
            <WeatherInfo>
              <div>
                <Image src={`/particles.svg`} width={20} height={20} alt="particles" />
                <p>{clime.humidity}%</p>
              </div>
              <div>
                <Image src={`/clouds.svg`} width={20} height={20} alt="clouds" />
                <p>{clime.cloudiness}%</p>
              </div>
              <div>
                <Image src={`/wind.svg`} width={20} height={20} alt="wind" />
                <p>{clime.windSpeed}m/s</p>
              </div>
            </WeatherInfo>
          </WeatherCard>
        ))}
      </section>
    </WeatherStyle>
  );
};
export default _Weather;
