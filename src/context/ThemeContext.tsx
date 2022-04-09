import { createContext, useContext } from "react";
import { theme } from "./theme";

interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext(theme);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
