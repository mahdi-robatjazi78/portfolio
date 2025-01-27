import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext("light");

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  var root = document.querySelector(":root");

  const html = document.getElementsByTagName("html")[0];
  html.classList.remove("rainbow");
  html.classList.remove("dark");
  html.classList.add("light");

  useEffect(() => {
    html.classList.remove("dark");
    html.classList.remove("light");
    html.classList.remove("rainbow");
    html.classList.add(theme);

    if (theme === "dark") {
      root.style.setProperty("--primarycolor", "rgb(125, 10, 10)");
      root.style.setProperty("--secondcolor", "rgb(236, 255, 64)");
    } else if (theme === "light") {
      root.style.setProperty("--primarycolor", "rgb(162, 172, 255)");
      root.style.setProperty("--secondcolor", "rgb(0, 196, 0)");
    } else if (theme === "rainbow") {
      root.style.setProperty("--primarycolor", "rgb(255, 215, 0)");
      root.style.setProperty("--secondcolor", "rgb(0, 196, 0)");
    }
  }, [theme]);

  const setThemeDark = () => {
    if (theme !== "dark") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      root.style.setProperty("--primarycolor", "rgb(125, 10, 10)");
      root.style.setProperty("--secondcolor", "rgb(236, 255, 64)");
    }
  };
  const setThemeLight = () => {
    if (theme !== "light") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      root.style.setProperty("--primarycolor", "rgb(162, 172, 255)");
      root.style.setProperty("--secondcolor", "rgb(0, 196, 0)");
    }
  };
  const setThemeRainbow = () => {
    if (theme !== "rainbow") {
      setTheme("rainbow");
      localStorage.setItem("theme", "rainbow");
      root.style.setProperty("--primarycolor", "rgb(255, 215, 0)");
      root.style.setProperty("--secondcolor", "rgb(0, 196, 0)");
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
