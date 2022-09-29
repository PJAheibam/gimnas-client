import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Theme";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Main from "./components/main/Main";

function App() {
  const [exerciseTime, setExerciseTime] = useState(0);
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Header />
      <Profile exerciseTime={exerciseTime} />
      <Main setExerciseTime={setExerciseTime} />
    </ThemeProvider>
  );
}

export default App;
