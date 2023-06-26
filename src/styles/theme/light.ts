const theme = {
  name: "light",
  colors: {
    fog: "rgba(186, 186, 186, 0.8)",
    background: "#F0F0F0",
    text: {
      light: "#3d3d3d",
      h1: "#3D3D3D",
      h2: "#2E2E2E",
    },
    input: {
      background: "#2E2E2E",
      placeholder: "#CCC",
      value: "#2E2E2E",
      border: "#EEE",
      focusBorder: "#2F2F2F",
      label: "#2F2F2F",
      icon: "#ADADAD",
    },
    button: {
      background:
        "linear-gradient(to right, rgba(84, 176, 79, 0.4), transparent)",
      text: "#2E2E2E",
      icon: "#2E2E2E",
      hover: {
        background: "#2E2E2E",
        text: "#F0F0F0",
        icon: "#F0F0F0",
      },
    },
    navbar: {
      text: "#3D3D3D",
      active: {
        background:
          "linear-gradient(to right, rgba(240, 240, 240, 0.2), rgba(84, 176, 79, 0.2))",
        text: "#3D3D3D",
      },
    },
    card: {
      background: "#fff",
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
