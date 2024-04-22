import React, { useContext } from "react";
import ThemeContext from "../context/theme";
const ThemeEmoji = () => {
  const { theme, setThemeDark, setThemeLight, setThemeRainbow } =
    useContext(ThemeContext);

  return (
    <div>
      <div className="flex gap-5">
        <div>
          <span className={`${theme === "light" && ""}`}></span>
          <div onClick={setThemeLight} className="cursor-pointer">
            ⚪️
          </div>
        </div>
        <div>
          <span className={`${theme === "dark" && ""}`}></span>
          <div onClick={setThemeDark} className="cursor-pointer">
            {" "}
            ⚫️
          </div>
        </div>
        <div>
          <span className={`${theme === "rainbow" && ""}`}></span>
          <div onClick={setThemeRainbow} className="cursor-pointer">
            {" "}
            🌈
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeEmoji;
