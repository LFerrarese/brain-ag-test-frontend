import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    #5cf266 0%,
    #5cf266 25%,
    #19701f 70%,
    #19701f 100%
  );
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: darken;

  animation: AnimateBackground 10s ease infinite;

  @keyframes AnimateBackground {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 40vw;
  height: auto;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: -4px 4px 8px 2px rgba(0, 0, 0, 0.2);

  background-color: #f2f2f2;

  @media (max-width: 1079px) {
    width: 90vw;
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 2rem;

  font-size: 2rem;
`;

export const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;

  .input-container {
    height: 3.5rem;
  }
`;

export const Submit = styled.button.attrs({
  type: "submit",
})`
  height: 3.5rem;
  width: 50%;

  border: none;
  border-radius: 0.75rem;
  background-color: #3d3d3d;

  font-size: 1rem;
  color: #f2f2f2;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.4;
  }
`;

export const Footer = styled.span`
  margin-top: 1rem;

  a {
    color: #3d3d3d;

    transition: 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
