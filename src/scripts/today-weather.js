const TodayWeather = (weather) => {
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
  }[weather];
  return imageIndex;
};
export default TodayWeather;
