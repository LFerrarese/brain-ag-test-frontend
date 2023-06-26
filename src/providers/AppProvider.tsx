import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { light, dark } from "~/styles/theme";
import { COOKIES } from "~/utils/constants";
import { getCookie, setCookie } from "~/utils/cookies";
import { UserProvider } from "./UserProvider";

export type AppContextData = {
  toggleTheme: (themeName: string) => void;
  theme: DefaultTheme;
};

type AppProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const themeStyle = getCookie(COOKIES.THEME);

    if (themeStyle && themeStyle === "light") {
      return light;
    }

    return dark;
  });

  const toggleTheme = (themeName: string) => {
    setCookie(COOKIES.THEME, themeName);
    setTheme(themeName === "dark" ? dark : light);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        <UserProvider>{children}</UserProvider>
      </ThemeProvider>
    </AppContext.Provider>
  );
};
