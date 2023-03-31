import { useState } from "react";
import Image from "next/image";
import Aplication from "./_Aplication";
import AppStyle from "./style/AppStyle";
import BackgroudPicture from "./style/BackgroudPicture.js";

import cloud from "../../public/cloud.jpg";
import rain from "../../public/rain.jpg";
import sun from "../../public/sun.jpg";
const img = [cloud, rain, sun];
const App = () => {
  const [weatherPicture, setWeatherPicture] = useState(1);
  return (
    <AppStyle>
      <Aplication />
      <BackgroudPicture>
        <Image
          src={img[weatherPicture]}
          alt="day weather"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </BackgroudPicture>
    </AppStyle>
  );
};
export default App;
