const weather_info = async (lat, lon) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1f2ae6467f3e31e3d1030a01b685c66f`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default weather_info;
