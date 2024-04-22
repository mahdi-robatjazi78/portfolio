import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext("light");

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const html = document.getElementsByTagName("html")[0];
  html.classList.remove("rainbow");
  html.classList.remove("dark");
  html.classList.add("light");

  useEffect(() => {
    html.classList.remove("dark");
    html.classList.remove("light");
    html.classList.remove("rainbow");

    html.classList.add(theme);
  }, [theme]);

  const setThemeDark = () => {
    setTheme("dark");
  };
  const setThemeLight = () => {
    setTheme("light");
  };
  const setThemeRainbow = () => {
    setTheme("rainbow");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setThemeDark,
        setThemeLight,
        setThemeRainbow,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
