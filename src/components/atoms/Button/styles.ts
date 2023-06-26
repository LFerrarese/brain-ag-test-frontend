import styled from "styled-components";

export const StyledButton = styled.button`
  height: auto;
  padding: 1rem;

  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  border: none;

  font-size: 1rem;
  font-family: "Inter", sans-serif;

  background: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.text};

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.button.hover.background};
    color: ${({ theme }) => theme.colors.button.hover.text};

    &.with-icon {
      svg {
        fill: ${({ theme }) => theme.colors.button.hover.icon};
      }
    }
  }

  &.with-icon {
    svg {
      margin-left: 2rem;
      fill: ${({ theme }) => theme.colors.button.icon};

      transition: 0.3s;
    }
  }
`;
