import { useState, useEffect } from "react";
import Image from "next/image";

import { useContext } from "react";
import { UserContext } from "../scripts/context";
import latLonRequest from "@/scripts/lat-lon-request";
import weatherInfo from "@/scripts/weather-info";
import weatherFactory from "@/scripts/weather-factory";
import { WeatherStyle, WeatherCard, Celsius, WeatherInfo } from "./style/WeatherStyle";
const _Weather = ({ city }) => {
  const { setBackground } = useContext(UserContext);
  const [weather, setWeather] = useState([]);
  const [cityName, setCityName] = useState(city);
  useEffect(() => {
    if (weather[0]) {
      const weatherDescription = weather[0].description.toLowerCase();
      const imageIndex = {
        "few clouds": 0,
        "scattered clouds": 0,
        "broken clouds": 0,
        "overcast clouds": 0,
        "light rain": 0,
        mist: 0,
        smoke: 0,
        fog: 0,
        sand: 0,
        haze: 0,
        dust: 0,
        "moderate rain": 1,
        "heavy intensity rain": 1,
        "very heavy rain": 1,
        "extreme rain": 1,
        "freezing rain": 1,
        "volcanic ash": 1,
        tornado: 1,
        "light intensity shower rain": 1,
        "shower rain": 1,
        "heavy intensity shower rain": 1,
        "ragged shower rain": 1,
        "clear sky": 2,
        "few clouds": 2,
        "scattered clouds": 2,
        "broken clouds": 2,
        "overcast clouds": 2,
        squalls: 2,
      }[weatherDescription];
      setBackground(imageIndex);
    }
  }, [weather, setBackground]);
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
