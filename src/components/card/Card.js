import React, { useEffect } from "react";
import {
  Container,
  ImageContainer,
  Image,
  Title,
  Desc,
  Content,
  Time,
  Text,
  TimeV,
  Button,
  Footer,
  Added,
} from "./Card.styles";

const Card = ({ data, updateExerciseTime, added }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={data.imageUrl} alt="data thumbnail" />
      </ImageContainer>
      <Content>
        <Title>{data.title}</Title>
        <Desc> {data.desc} </Desc>
        <Time>
          <Text>Time required:</Text>
          <TimeV>{data.timeRequired}&thinsp;s</TimeV>
        </Time>
      </Content>
      <Footer>
        <Button onClick={() => updateExerciseTime(data.id, data.timeRequired)}>
          Add to list
        </Button>
        <Added>Added: {added}</Added>
      </Footer>
    </Container>
  );
};

export default Card;
