const lat_lon = async (location) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || process.env.API_KEY;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location},BR&limit=2&appid=${apiKey}`
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log(error);
  }
};
export default lat_lon;
