import styled from "styled-components";
import { ImSpinner9 } from "react-icons/im";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Spinner = styled(ImSpinner9).attrs(({ theme }) => ({
  size: 40,
  color: theme.colors.text.light,
}))`
  animation: anim-rotate 1s infinite steps(8);

  @keyframes anim-rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.light};
`;
