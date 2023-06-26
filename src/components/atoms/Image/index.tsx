import { Wrapper, StyledImage } from "./styles";

type ImageProps = {
  src: string;
  alt: string;
  width: string;
  height: string;
  fit?: "contain" | "cover";
};

export const Image = ({
  src,
  alt,
  width,
  height,
  fit,
  ...props
}: ImageProps): JSX.Element => (
  <Wrapper width={width} height={height}>
    <StyledImage src={src} alt={alt} fill fit={fit} {...props} />
  </Wrapper>
);
