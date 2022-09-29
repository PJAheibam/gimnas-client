import React, { useEffect, useState } from "react";
import { Wrapper, Heading, Cards, Container } from "./Main.styls";
import Card from "../card/Card";

const EXERCISE_TIME = "exercise-time";

const Main = ({ setExerciseTime }) => {
  console.info("main");
  // fetching data
  const [exercises, setExercises] = useState([]);

  // added exercise data
  const eTime = JSON.parse(localStorage.getItem(EXERCISE_TIME)) || {};
  console.log(eTime);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setExercises(data);
      });
  }, []);

  const updateExerciseTime = (id, time) => {
    setExerciseTime((prev) => prev + time);
    if (eTime[id]) {
      eTime[id] += 1;
    } else {
      eTime[id] = 1;
    }
    console.log(eTime);
    localStorage.setItem(EXERCISE_TIME, JSON.stringify(eTime));
  };

  let totalExerciseTime = 0;
  for (const exercise of exercises) {
    if (eTime[exercise.id]) {
      totalExerciseTime += exercise.timeRequired * eTime[exercise.id];
    }
  }
  setExerciseTime(totalExerciseTime);

  return (
    <Wrapper as="main">
      <Container>
        <Heading>
          The Best Abs Workout: The Only 6 Exercises You Need to Get a Six-Pack
        </Heading>
        <Cards>
          {exercises !== [] &&
            exercises.map((exercise) => (
              <Card
                data={exercise}
                key={exercise.id}
                updateExerciseTime={updateExerciseTime}
                added={(eTime && exercises !== [] && eTime[exercise.id]) || 0}
                setExerciseTime={setExerciseTime}
              />
            ))}
        </Cards>
      </Container>
    </Wrapper>
  );
};

export default Main;
