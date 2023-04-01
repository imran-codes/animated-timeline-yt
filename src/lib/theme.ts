import { createGlobalStyle, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    background: "#F7ECE1",
    primary: "#242038",
    text: "#725AC1",
    border: "#725AC1",
    white: "#fff",
    icon: "#CAC4CE",
    iconHovered: "#725AC1",
  },
};

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
};
  body {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: ${theme.colors.background};
  }
  h1, p {
    color: ${theme.colors.text};
  }
`;
