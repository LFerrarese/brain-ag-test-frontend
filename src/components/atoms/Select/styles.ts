import styled from "styled-components";
import { default as ReactSelect } from "react-select";

export const StyledSelect = styled(ReactSelect).attrs({
  classNames: {
    control: (state: { isFocused: boolean }) =>
      state.isFocused ? "select-control focused" : "select-control",
    container: () => "select-container",
    option: (state: { isSelected: boolean }) =>
      state.isSelected
        ? "select-control-option focused"
        : "select-control-option",
    singleValue: () => "single-value-container",
  },
})``;
