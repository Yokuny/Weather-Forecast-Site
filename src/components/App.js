import { useState } from "react";
import Image from "next/image";
import Aplication from "./_Aplication";
import AppStyle from "./style/AppStyle";
import BackgroudPicture from "./style/BackgroudPicture.js";

const img = ["/cloud.jpg", "/rain.jpg", "/sun.jpg"];
const App = () => {
  const [weatherPicture, setWeatherPicture] = useState(2);
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
