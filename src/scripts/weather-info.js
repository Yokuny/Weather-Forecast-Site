const weather_info = async (lat, lon) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || process.env.API_KEY;
  console.log(apiKey);
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
