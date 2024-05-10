import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext("light");

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
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
    if (theme !== "dark") {
      setTheme("dark");
      localStorage.setItem("theme" , 'dark')
    }
  };
  const setThemeLight = () => {
    if (theme !== "light") {
      setTheme("light");
      localStorage.setItem("theme" , 'light')

    }
  };
  const setThemeRainbow = () => {
    if (theme !== "rainbow") {
      setTheme("rainbow");
      localStorage.setItem("theme" , 'rainbow')

    }
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
