import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .farmer-submit {
    max-width: 50%;

    justify-content: space-between;

    margin-top: 2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;

  &.title {
    align-items: center;
    justify-content: space-between;
  }

  > div {
    flex: 1;
  }

  > svg {
    fill: ${({ theme }) => theme.colors.text.light};
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: scale(110%);
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
`;

export const Category = styled.span`
  margin-top: 2rem;
`;
