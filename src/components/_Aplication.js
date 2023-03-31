import { useState } from "react";
import Weather from "@/components/_Weather";
import Location from "@/components/_Location";
import AplicationStyle from "@/components/style/AplicationStyle";
const braziliamCity = [
  "São Paulo",
  "Rio de Janeiro",
  "Brasília",
  "Salvador",
  "Fortaleza",
  "Belo Horizonte",
  "Manaus",
  "Curitiba",
  "Recife",
  "Porto Alegre",
  "Vitória",
];
const Aplication = () => {
  const [city, setCity] = useState(braziliamCity.sort((a, b) => 0.5 - Math.random())[0]);
  return (
    <AplicationStyle>
      <Weather city={city} />
      <Location city={city} setCity={setCity} />
    </AplicationStyle>
  );
};
export default Aplication;
