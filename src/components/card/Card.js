import React from "react";
import { Container, ImageContainer, Image, Title, Desc } from "./Card.styles";

const Card = ({ data }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={data.imageUrl} alt="data thumbnail" />
      </ImageContainer>
      <Title>{data.title}</Title>
      <Desc> {data.desc} </Desc>
    </Container>
  );
};

export default Card;
