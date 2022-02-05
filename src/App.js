import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import BasicTheme from "./styles/theme";
import Main from "./views/Main";

function App() {
  return (
    <ThemeProvider theme={BasicTheme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;
