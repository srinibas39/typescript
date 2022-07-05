import React, { createContext, useContext } from "react";

type themeContextProp = {
  children: React.ReactNode;
};

const theme = {
  primary: "blue",
  secondary: "pink",
};

export const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }: themeContextProp) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
