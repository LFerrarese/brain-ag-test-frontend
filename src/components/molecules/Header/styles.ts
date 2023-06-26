import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: 18rem 1fr;

  padding: 2rem 1rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
`;
