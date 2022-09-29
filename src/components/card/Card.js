import React from "react";
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
} from "./Card.styles";

const Card = ({ data, setExerciseTime }) => {
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
      <Button
        onClick={() => setExerciseTime((prev) => prev + data.timeRequired)}
      >
        Add to list
      </Button>
    </Container>
  );
};

export default Card;
