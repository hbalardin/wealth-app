import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Primo App</h1>
    </ThemeProvider>
  );
};

export default App;
