import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "./switcher";
import themeCreator from "./switcher";
import normalTheme from "./normalTheme";

// eslint-disable-next-line no-unused-vars
export const CustomThemeContext = React.createContext({
  currentTheme: "normal",
  setTheme: null,
});

const CustomThemeProvider = (props: { children: any }) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  // Read current theme from localStorage or maybe from an api
  const currentTheme = localStorage.getItem("appTheme") || "normal";

  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(currentTheme);

  // Retrieve the theme object by theme name
  const theme = getTheme(themeName);

  // Wrap _setThemeName to store new theme names in localStorage
  const setThemeName = (name: string) => {
    localStorage.setItem("appTheme", name);
    _setThemeName(name);
  };

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
  };
  const test = () => {
    if (theme === undefined) {
      return getTheme("normalTheme");
    }
    return theme;
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={test()}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
