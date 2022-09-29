import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Heading,
  Cards,
  Container,
  ImageContainer,
  Image,
  Title,
  Desc,
} from "./Main.styls";
import Card from "../card/Card";

const Main = () => {
  // fetching data
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setExercises(data);
      });
  }, []);

  return (
    <Wrapper as="main">
      <Container>
        <Heading>
          The Best Abs Workout: The Only 6 Exercises You Need to Get a Six-Pack
        </Heading>
        <Cards>
          {exercises.map((exercise) => (
            <Card data={exercise} key={exercise.id} />
          ))}
        </Cards>
      </Container>
    </Wrapper>
  );
};

export default Main;
