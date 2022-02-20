import styled from "styled-components";

const ImageStyles = styled.img`
  height: 40vh;
`;

const BeerImage = ({ url, alt }) => {
  return <ImageStyles src={url} alt={alt} />;
};

export default BeerImage;
