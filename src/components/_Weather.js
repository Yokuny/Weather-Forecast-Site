import useState, { useEffect } from "react";
import latLonRequest from "@/scripts/lat-lon-request";
import weatherInfo from "@/scripts/weather-info";
import weatherFactory from "@/scripts/weather-factory";

const _Weather = ({ city, setCity }) => {
  useEffect(() => {
    const location = latLonRequest(city);
    location.then((data) => {
      const { lat, lon } = data;
      weatherInfo(lat, lon).then((data) => {
        const { name: city } = data.city;
        const nextFiveHours = [];

        for (let i = 0; i < 8; i += 2) {
          const hour = data.list[i];
          const hourWeather = weatherFactory(hour);
          nextFiveHours.push(hourWeather);
        }
        console.log(nextFiveHours);
      });
    });
  }, [city]);
  return (
    <>
      <h1>Weather</h1>
    </>
  );
};
export default _Weather;
