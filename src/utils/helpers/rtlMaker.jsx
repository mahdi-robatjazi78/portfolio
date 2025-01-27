import React, { useContext } from "react";
import { LanguageContext } from "../context/language";

const RtlMaker = (props) => {
  const { lang } = useContext(LanguageContext);

  return (
    <div
      className="ag-courses_item z-10"
      dir={lang === "fa-IR" ? "rtl" : "ltr"}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default RtlMaker;
