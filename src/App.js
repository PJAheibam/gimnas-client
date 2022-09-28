import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Theme";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Header />
      <Profile />
    </ThemeProvider>
  );
}

export default App;
