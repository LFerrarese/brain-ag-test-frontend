import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Row = styled.div`
  display: flex;
  gap: 2rem;

  &.totals {
    align-self: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TotalNumber = styled.span`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text.light};
`;

export const Description = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text.light};
`;
