import styled from "styled-components";
import Button from "../atoms/Button/Button";
import Beer from "../molecues/Beer/Beer";

const Wrapper = styled.div`
  background-image: linear-gradient(#2193b0, #6dd5ed);
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <Wrapper className="App">
      <Beer />
      <Button />
    </Wrapper>
  );
};

export default App;
