import LocationStyle from "./style/LocationStyle";
import { useState } from "react";
const _Location = ({ city, setCity }) => {
  const [cityInput, setCityInput] = useState(city);
  return (
    <LocationStyle
      onSubmit={(event) => {
        event.preventDefault();
        setCity(event.target[0].value);
      }}>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={cityInput}
          minLength={5}
          onChange={(event) => {
            if (event.target.value.length < 5) {
              event.target.style.borderBottom = "1px solid crimson";
            } else event.target.style.borderBottom = "1px solid cyan";
            setCityInput(event.target.value);
          }}
        />
      </div>
      <button type="submit">Search</button>
    </LocationStyle>
  );
};
export default _Location;
