import { useContext } from "react";
import dynamic from "next/dynamic";
import { UserContext } from "../scripts/context";
import Image from "next/image";
import AppStyle from "./style/AppStyle";
import BackgroudPicture from "./style/BackgroudPicture.js";
const Aplication = dynamic(() => import("./_Aplication"));
const img = ["/cloud.jpg", "/rain.jpg", "/sun.jpg"];
const App = () => {
  const { background } = useContext(UserContext);
  return (
    <AppStyle>
      <Aplication />
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
