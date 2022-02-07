import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";

import { theme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
