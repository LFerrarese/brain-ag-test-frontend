import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;

  background: ${({ theme }) => theme.colors.card.background};
`;
