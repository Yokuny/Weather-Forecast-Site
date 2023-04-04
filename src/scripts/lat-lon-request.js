require("dotenv").config();
const apiKey = process.env.API_KEY;
const lat_lon = async (location) => {
  console.log(process.env.API_KEY);
  console.log(">>>>");

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
