import styled from "styled-components";

export const Container = styled.div``;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 4rem;
  height: 2rem;
`;

export const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .theme-switcher-slider {
    background-color: #e8e8e8;
  }

  &:checked + .theme-switcher-slider:before {
    transform: translateX(2rem);

    background: white url("/sunny.png");
    background-repeat: no-repeat;
    background-position: center;
  }

  &:focus + .theme-switcher-slider {
    box-shadow: 0 0 1px green;
  }
`;

export const Slider = styled.span.attrs({
  className: "theme-switcher-slider",
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  border-radius: 2rem;

  background-color: #7a7979;

  cursor: pointer;
  transition: 0.4s;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -2px;

    margin: auto 0;
    border-radius: 50%;

    box-shadow: 0 0 15px #2020203d;
    background: #3d3d3d url("/night.png");
    background-repeat: no-repeat;
    background-position: center;

    height: 2.25rem;
    width: 2.25rem;

    transition: 0.4s;
  }
`;
