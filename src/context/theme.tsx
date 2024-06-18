import { createContext } from "react";
import { Theme } from "../hooks";

export interface IThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  setTheme: (theme) => {},
});
