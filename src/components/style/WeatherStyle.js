import styled from "styled-components";
export const WeatherStyle = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 0.2rem;
  background-color: #fff;
  h1 {
    font-size: 2rem;
  }
  section {
    display: flex;
  }
  @media (max-width: 1100px) {
    section {
      flex-direction: column;
    }
  }
`;
export const WeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  border: 1px solid gray;
  border-radius: 0.2rem;
  margin: 1rem;
  padding: 1rem 2rem;
  overflow: hidden;
  background: #fff;
  img {
    position: absolute;
    z-index: 0;
    left: -40px;
    top: -10px;
    width: 100px;
    height: 100px;
  }
  @media (max-width: 1100px) {
    overflow: scroll;
  }
`;
export const Celsius = styled.div`
  display: flex;
  padding: 0.4rem;
  gap: 10px;
  > p {
    font-size: 2rem;
    font-weight: bold;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div p:last-child {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
export const WeatherInfo = styled.div`
  display: flex;
  height: 20px;
  gap: 10px;
  > div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  > div p {
    font-weight: 600;
  }
  img {
    position: initial;
    width: 20px;
    height: 20px;
  }
`;
