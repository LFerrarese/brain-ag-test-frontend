import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  height: ${({ theme }) => theme.sizes.input.height};
  max-width: 100%;
  padding: 0 1rem;
  border: solid 1px ${({ theme }) => theme.colors.input.border};
  border-radius: 0.75rem;
  transition: 0.3s;

  &.disabled {
    opacity: 0.65;
  }

  &.focused {
    border-color: ${({ theme }) => theme.colors.input.focusBorder};
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  font-size: 0.85rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.input.label};
  visibility: hidden;
  opacity: 0;
  transition: 0.4s;

  &.input-focused {
    visibility: visible;
    opacity: 1;
    top: -25%;
    padding: 0 0.25rem;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: auto;
`;

export const StyledInput = styled.input`
  flex: 1;
  width: 80%;
  height: 100%;
  font-size: ${({ theme }) => theme.sizes.input.text};
  color: ${({ theme }) => theme.colors.input.value};
  background-color: transparent;
  border: none;

  &.unique {
    width: 100%;
  }

  &:focus {
    outline: none;
    box-shadow: 0;
  }

  &::placeholder {
    font-size: ${({ theme }) => theme.sizes.input.text};
    color: ${({ theme }) => theme.colors.input.placeholder};
  }
`;
