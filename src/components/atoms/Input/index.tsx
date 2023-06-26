import { InputHTMLAttributes, SVGAttributes, useState } from "react";
import { IconType } from "react-icons";
import { useTheme } from "styled-components";
import { Container, Label, IconWrapper, StyledInput } from "./styles";

type IconProps = {
  Icon: IconType;
  options?: SVGAttributes<SVGElement> & {
    size?: number;
    color?: string;
  };
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  icon?: {
    start?: IconProps;
    end?: IconProps;
  };
};

export const Input = ({ label, icon, ...props }: InputProps): JSX.Element => {
  const [focused, setFocused] = useState<boolean>(props?.autoFocus ?? false);
  const theme = useTheme();

  const toggleFocus = () => setFocused((state) => !state);

  if (label && !props.id) {
    throw new Error("Input with LABEL should have an ID");
  }

  return (
    <Container
      className={`input-container ${props.disabled && "disabled"} ${
        focused && "focused"
      }`}
    >
      {label && (
        <Label
          htmlFor={props.id}
          className={
            focused || props.disabled || props.value ? "input-focused" : ""
          }
        >
          {label}
        </Label>
      )}
      {icon?.start && (
        <IconWrapper>
          <icon.start.Icon
            size={24}
            color={theme?.colors.input.icon}
            className="start-icon"
            {...icon.start.options}
          />
        </IconWrapper>
      )}
      <StyledInput
        type={props.type || "text"}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        autoComplete="off"
        {...props}
        className={`${props.className} ${!icon && "unique"}`}
      />
      {icon?.end && (
        <IconWrapper>
          <icon.end.Icon
            size={24}
            color={theme?.colors.input.icon}
            className="end-icon"
            {...icon.end.options}
          />
        </IconWrapper>
      )}
    </Container>
  );
};
