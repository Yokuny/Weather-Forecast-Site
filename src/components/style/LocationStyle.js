import styled from "styled-components";
const LocationStyle = styled.form`
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  border-radius: 0.2rem;
  background-color: #fff;
  div {
    display: flex;
    flex-direction: column;
  }
  div input {
    border: 0px solid #000;
    outline: none;
    border-bottom: 1px solid #000;
    padding: 6px;
    font-family: monospace;
    font-size: 1.2rem;
    letter-spacing: 0.01rem;
  }
  button {
    border: 0px solid #000;
    outline: none;
    height: 2.5rem;
    margin-left: 1rem;
    transition: 0.2s all;
    padding: 10px;
    border-radius: 0.2rem;
  }
  button:hover {
    cursor: pointer;
    background-color: #68add3;
  }
`;
export default LocationStyle;
