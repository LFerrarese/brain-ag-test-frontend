import styled from "styled-components";
import Link from "next/link";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  padding-top: 4rem;
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  padding: 2rem 3rem;
  border-radius: 0 1rem 1rem 0;

  background: transparent;

  text-decoration: none;
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.navbar.text};

  transition: 0.3s;

  &:hover {
    filter: brightness(70%);
  }

  &.active {
    background: ${({ theme }) => theme.colors.navbar.active.background};
    color: ${({ theme }) => theme.colors.navbar.active.text};

    &:hover {
      filter: brightness(100%);
    }
  }
`;
