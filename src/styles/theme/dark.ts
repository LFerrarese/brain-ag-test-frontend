import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  name: "dark",
  colors: {
    fog: "rgba(186, 186, 186, 0.8)",
    background: "#263238",
    text: {
      light: "#F0F0F0",
      h1: "#FFFFFF",
      h2: "#FFFFFF",
    },
    input: {
      background: "#F0F0F0",
      placeholder: "#555",
      value: "#CCC",
      border: "#FFF",
      focusBorder: "#a1887f",
      label: "#EEE",
      icon: "#ADADAD",
    },
    button: {
      background: "linear-gradient(to right, #524936, #2B3242)",
      text: "#FFF",
      icon: "#FFF",
      hover: {
        background: "#F0F0F0",
        text: "#524936",
        icon: "#524936",
      },
    },
    navbar: {
      text: "#8B8C91",
      active: {
        background:
          "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.08))",
        text: "#FFFFFF",
      },
    },
    card: {
      background: "#2E323C",
    },
  },
  font: {
    primary: {
      family: "Raleway",
    },
    secondary: {
      family: "Inter",
    },
  },
  sizes: {
    input: {
      height: "2.5rem",
      text: "1rem",
    },
  },
};

export default theme;
