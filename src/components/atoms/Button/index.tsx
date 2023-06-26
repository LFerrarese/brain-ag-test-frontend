import { ButtonHTMLAttributes, ReactNode, useState } from "react";
import { StyledButton } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode | string;
};

export const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  const [hover, setHover] = useState<boolean>(false);

  const toggleHover = () => setHover((state) => !state);

  return (
    <StyledButton
      {...props}
      className={`${typeof children !== "string" && "with-icon"} ${
        hover && "with-hover"
      } ${props.className}`}
      onMouseOver={toggleHover}
      onMouseOut={toggleHover}
    >
      {children}
    </StyledButton>
  );
};
