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
} from "./Card.styles";

const Card = ({ data, updateExerciseTime, added, setExerciseTime }) => {
  // useEffect(() => {
  //   if (added) {
  //     setExerciseTime((prev) => prev + data.timeRequired * added);
  //     console.info(data.id, data.timeRequired * added);
  //   }
  // }, []);
  // console.log(data.id, added ? "true" : "false");
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
      </Footer>
    </Container>
  );
};

export default Card;
