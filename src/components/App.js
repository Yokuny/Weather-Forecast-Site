import { useContext } from "react";
import { UserContext } from "../scripts/context";
import Image from "next/image";
import Aplication from "./_Aplication";
import AppStyle from "./style/AppStyle";
import BackgroudPicture from "./style/BackgroudPicture.js";
const img = ["/cloud.jpg", "/rain.jpg", "/sun.jpg"];
const App = () => {
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
  const { background } = useContext(UserContext);
  return (
    <AppStyle>
      <Aplication aCity={braziliamCity.sort(() => 0.5 - Math.random())[0]} />
      <BackgroudPicture>
        <Image
          src={img[background]}
          alt="day weather"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </BackgroudPicture>
    </AppStyle>
  );
};
export default App;
