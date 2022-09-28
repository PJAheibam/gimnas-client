import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Theme";

function App() {
  return <ThemeProvider theme={dark}></ThemeProvider>;
}

export default App;
