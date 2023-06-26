import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  --input-background: ${({ theme }) => theme.colors.input.background};
  --input-value-color: ${({ theme }) => theme.colors.input.value};

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  body {
    overflow: hidden !important;
    background-color: ${({ theme }) => theme.colors.background};
  }

  html {
    font-family: ${({ theme }) => theme.font.primary.family}, sans-serif;
    font-size: 1rem;
  }

  h1 {
    font-weight: 600;
    font-size: 2.75rem;
    color: ${({ theme }) => theme.colors.text.h1};
  }

  h2 {
    font-weight: 200;
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.text.h2};
  }

  a {
    text-decoration: none;
  }

  span {
    color: ${({ theme }) => theme.colors.text.light};
  }

  .select-control {
    width: 100% !important;
    min-height: 2.5rem !important;
    background-color: var(--input-background) !important;
    border-color: ${({ theme }) => theme.colors.input.border} !important;

    &.focused {
      border-color: ${({ theme }) => theme.colors.input.focusBorder} !important;
      box-shadow: none;
    }

    .single-value-container {
      color: var(--input-value-color) !important;
    }
  }
`;
