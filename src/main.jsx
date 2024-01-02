import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import VercelAnalyticsComponent from "./analytics";
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
          <VercelAnalyticsComponent>
            <App />
          </VercelAnalyticsComponent>
        </PositionContextProvider>
      </InternationalizationProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
