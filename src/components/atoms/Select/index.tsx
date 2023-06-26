import { ActionMeta } from "react-select";
import { StyledSelect } from "./styles";

export type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  options: SelectOption[];
  placeholder?: string;
  multi?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  onChange: (value: unknown, actionMeta: ActionMeta<unknown>) => void;
};

export const Select = ({
  options,
  placeholder,
  onChange,
  multi,
  disabled,
  ...props
}: SelectProps) => (
  <StyledSelect
    placeholder={placeholder ?? "Selecione"}
    onChange={onChange}
    options={options}
    isMulti={multi}
    isDisabled={disabled}
    {...props}
  />
);
