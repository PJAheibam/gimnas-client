import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Theme";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/header/Header";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
