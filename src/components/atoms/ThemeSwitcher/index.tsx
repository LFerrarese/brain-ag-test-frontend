import { useApp } from "~/hooks/useApp";
import { Checkbox, Container, Label, Slider } from "./styles";

export const ThemeSwitcher = (): JSX.Element => {
  const { toggleTheme, theme } = useApp();

  return (
    <Container>
      <Label>
        <Checkbox
          checked={theme.name === "light"}
          onChange={(event) =>
            toggleTheme(event.target.checked ? "light" : "dark")
          }
        />
        <Slider />
      </Label>
    </Container>
  );
};
