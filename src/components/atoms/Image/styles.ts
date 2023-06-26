import styled, { css } from "styled-components";
import Image from "next/image";

type WrapperProps = {
  width: string;
  height: string;
};

type ImageProps = {
  fit?: "contain" | "cover";
};

export const Wrapper = styled.div<WrapperProps>`
  position: relative;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const StyledImage = styled(Image)<ImageProps>`
  ${({ fit }) =>
    fit &&
    css`
      object-fit: ${fit};
    `}
`;
