const weatherFactory = (item) => {
  const {
    dt_txt: time,
    main: { temp, feels_like: feelsLike, humidity },
    weather: [{ description, icon }],
    clouds: { all: cloudiness },
    wind: { speed },
  } = item;
  const celsius = (parseFloat(temp) - 273.15).toFixed(1);
  const feltCelsius = (parseFloat(feelsLike) - 273.15).toFixed(1);
  return {
    time,
    description,
    icon,
    celsius,
    feltCelsius,
    cloudiness,
    windSpeed: speed,
    humidity,
  };
};
export default weatherFactory;
