import styled from "styled-components";
import { getBeer } from "../../../features/beersSlice";
import store from "../../../store/store";

const ButtonStyled = styled.input`
  position: absolute;
  left: 50%;
  top: 68%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 30vw;
  height: 5vh;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2em;
  outline: none;
  border: none;
`;

const Button = () => {
  return (
    <ButtonStyled
      type="submit"
      value="get beer"
      onClick={() => store.dispatch(getBeer())}
    />
  );
};

export default Button;
