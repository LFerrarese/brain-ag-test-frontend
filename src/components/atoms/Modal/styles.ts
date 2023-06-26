import styled, { css } from "styled-components";

type OverlayProps = {
  custompagechange?: boolean;
};

export const Overlay = styled.div<OverlayProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.fog};
  visibility: hidden;

  &.opened {
    visibility: visible;
  }

  &.loader {
    background-color: rgba(0, 0, 0, 0.95);
  }
`;

export const Content = styled.div`
  animation-name: showDown;
  animation-timing-function: ease-out;
  animation-duration: 0.7s;

  @keyframes showDown {
    from {
      opacity: 0;
      transform: translateY(-5vh);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
