import React from "react";
import {
  Container,
  ImageContainer,
  Image,
  Title,
  Desc,
  Content,
} from "./Card.styles";

const Card = ({ data }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={data.imageUrl} alt="data thumbnail" />
      </ImageContainer>
      <Content>
        <Title>{data.title}</Title>
        <Desc> {data.desc} </Desc>
      </Content>
    </Container>
  );
};

export default Card;
