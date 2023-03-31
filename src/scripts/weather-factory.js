const weatherFactory = (item) => {
  const {
    dt_txt: time,
    main: { temp, feels_like: feelsLike, humidity },
    weather,
    clouds: { all: cloudiness },
    wind: { speed, gust },
  } = item;

  const weatherDescription = weather.length > 0 ? weather[0].description : "";

  return {
    time,
    temp,
    feelsLike,
    weather: weatherDescription,
    cloudiness,
    windSpeed: speed,
    windGust: gust,
    humidity,
  };
};
export default weatherFactory;
