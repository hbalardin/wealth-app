import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
    background-color: ${theme.color.darkGray};
    color: ${theme.color.white};
  }
  button {
    cursor: pointer;
    border: 0;
  }
`;
