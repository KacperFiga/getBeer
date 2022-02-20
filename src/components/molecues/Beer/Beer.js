import { useSelector } from "react-redux";
import BeerImage from "../../atoms/BeerImage/BeerImage";
import styled from "styled-components";
import BeerHeader from "../../atoms/BeerHeader/BeerHeader";

const BeerSectionStyles = styled.section`
  width: 80vw;
  height: 60vh;
  display: grid;
  margin: 0 auto;
  * {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 2vh auto;
  }
`;

const Beer = () => {
  const { beer } = useSelector((store) => store);
  const isBeerInStore = Object.keys(beer).length > 0 ? true : false;

  return isBeerInStore ? (
    <BeerSectionStyles className="beer">
      <BeerHeader name={beer.name} />
      <BeerImage url={beer.image_url} alt={beer.description} />
      <p> {beer.abv} % </p>
    </BeerSectionStyles>
  ) : null;
};

export default Beer;
