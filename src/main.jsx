import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { InternationalizationProvider } from "./utils/intl/index";
import { LanguageContextProvider } from "./utils/context/language";
import { PositionContextProvider } from "./utils/context/position.jsx";
import "./index.css";
import "./fonts.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <InternationalizationProvider>
        <PositionContextProvider>
          <App />
        </PositionContextProvider>
      </InternationalizationProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
