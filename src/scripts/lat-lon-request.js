const lat_lon = async (location) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location},BR&limit=2&appid=1f2ae6467f3e31e3d1030a01b685c66f`
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log(error);
  }
};
export default lat_lon;
