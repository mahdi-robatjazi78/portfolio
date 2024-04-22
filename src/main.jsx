import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { InternationalizationProvider } from "./utils/intl/index";
import { LanguageContextProvider } from "./utils/context/language";
import { PositionContextProvider } from "./utils/context/position";
import { ThemeContextProvider } from "./utils/context/theme";
import "./index.css";
import "./fonts.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <ThemeContextProvider>
        <InternationalizationProvider>
          <PositionContextProvider>
            <App />
          </PositionContextProvider>
        </InternationalizationProvider>
      </ThemeContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
