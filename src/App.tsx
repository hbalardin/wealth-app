import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";
import { Routes } from "./config/routes";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};
