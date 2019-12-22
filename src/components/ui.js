import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.color};
`;

const colors = {
  green: "#00cc8a",
  darkPurple: "#191734",
  gray: "#6e748e",
  mediumDarkPurple: "#262344",
  lightPurple: "#928fff",
  lightGray: "#eeeef1",
  red: "#fd5f60",
  shinyGreen: "#00faa6"
};

export const theme = {
  light: {
    bg: "white",
    secondary: "#00cc8a",
    btnBgColor: "#191734",
    btnColor: "white",
    color: "black",
    colors
  },
  dark: {
    bg: "#191734",
    secondary: "#00cc8a",
    btnBgColor: "#00cc8a",
    btnColor: "black",
    color: "white",
    colors
  }
};
