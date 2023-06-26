import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-rows: 8rem 1fr;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
`;

export const Main = styled.main`
  padding: 3rem;
`;
