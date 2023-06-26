import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100vw;
  height: 100vh;

  background-image: url("/login-background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: darken;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: 100vh;
  width: 35vw;

  padding: 5rem;
  box-shadow: -7px -1px 15px -8px rgba(0, 0, 0, 0.4);

  background-color: #3d3d3d;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 2rem;

  color: #f2f2f2;
`;

export const Subtitle = styled.h2`
  text-align: center;
  margin-top: -2rem;

  color: #f2f2f2;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .input-container {
    height: 3.5rem;

    &.focused {
      border-color: #a6a6a6;
    }

    input {
      color: #fff;

      &::placeholder {
        color: #999;
      }
    }
  }

  .input-focused {
    background-color: #3d3d3d;
    font-size: 1rem;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: #f2f2f2;

    text-decoration: underline;
    transition: 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Submit = styled.button.attrs({
  type: "submit",
})`
  height: 3.5rem;
  width: 40%;

  border: none;
  border-radius: 0.75rem;
  background-color: #f2f2f2;

  font-size: 1rem;
  color: #3d3d3d;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;

export const Register = styled.span`
  color: #f2f2f2;
  font-size: 1rem;

  a {
    color: #f2f2f2;

    text-decoration: underline;
    transition: 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }
`;
