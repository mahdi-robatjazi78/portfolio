import React, { useEffect, useState } from "react";

export const LanguageContext = React.createContext(false);

export const LanguageContextProvider = ({ children }) => {
  const queryParams = new URLSearchParams(window.location.search);

  const [lang, setLang] = useState(
    queryParams.get("lang") === "en" ? "en-US" : "fa-IR" || "en-US"
  );

  const setNewLanguage = (input) => {
    if (input === "en" || input === "eng" || "us") {
      setQueryString("en");
    } else if (input === "fa" || input === "far" || input === "per" || "ir") {
      setQueryString("fa");
    }
  };
  const setLanguageToggle = () => {
    if (lang !== "en-US") {
      setQueryString("en");
    } else {
      setQueryString("fa");
    }
  };

  const setQueryString = (value) => {
    if (!value) {
      value = lang === "en-US" ? "en" : "fa";
    }
    queryParams.set("lang", value);
    history.replaceState(null, null, "?" + queryParams.toString());
    setLang(value === "en" ? "en-US" : "fa-IR")
  };

  useEffect(() => {
    if (window.location.search.search("lang") === -1) {
      setQueryString();
    } else {
      const queryaramLanguage =
        queryParams.get("lang") === "en" ? "en-US" : "fa-IR";
         
      if (queryaramLanguage !== lang) {
        setLanguageToggle();
      }
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, setNewLanguage, setLanguageToggle }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
