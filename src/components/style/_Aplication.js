import Weather from "@/components/_Weather";
import Location from "@/components/_Location";
import AplicationStyle from "@/components/style/AplicationStyle";
const Aplication = () => {
  return (
    <AplicationStyle>
      <Weather />
      <Location />
    </AplicationStyle>
  );
};
export default Aplication;
