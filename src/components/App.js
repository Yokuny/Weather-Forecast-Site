import Aplication from "./Aplication";
import styled from "styled-components";
const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const App = () => {
  return (
    <AppStyle>
      <Aplication />
    </AppStyle>
  );
};
export default App;
