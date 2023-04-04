import { useState } from "react";
import Weather from "@/components/_Weather";
import Location from "@/components/_Location";
import AplicationStyle from "@/components/style/AplicationStyle";
const Aplication = ({ aCity }) => {
  const [city, setCity] = useState(aCity);
  return (
    <AplicationStyle>
      <Weather city={city} />
      <Location city={city} setCity={setCity} />
    </AplicationStyle>
  );
};
export default Aplication;
