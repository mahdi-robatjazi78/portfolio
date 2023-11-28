import React, { useContext } from "react";
import { LanguageContext } from "../context/language";

const RtlMaker = (props) => {
  const { children } = props;
  const { lang } = useContext(LanguageContext);

  return <div dir={lang === "fa-IR" ? "rtl" : "ltr"}>{children}</div>;
};

export default RtlMaker;
