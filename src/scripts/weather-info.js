const apiKey = process.env.API_KEY;
const weather_info = async (lat, lon) => {
  console.log(process.env.API_KEY);
  console.log(">>>>");
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default weather_info;
