import React from "react";
import InjectMassage from "../../utils/intl";
import { LanguageContext } from "../context/language";
import "./about.css";

const About = () => {
  const { lang } = React.useContext(LanguageContext);

  return (
    <div className="flex justify-around flex-col h-[65%] my-20 px-10">
      <div className="aboutme-tooltip-container">
        <span className="hover-me">
          <InjectMassage id="header.section.title.about" />
        </span>
        <div className="tooltip" dir={lang === "fa-IR" ? "rtl" : "ltr"}>
          <p>
            <InjectMassage id="about.me.section0.t1" />
          </p>
        </div>
      </div>

      <div className="aboutme-tooltip-container">
        <span className="hover-me">
          <InjectMassage id="header.section.title.about" />
        </span>
        <div className="tooltip" dir={lang === "fa-IR" ? "rtl" : "ltr"}>
          <p>
            <InjectMassage id="about.me.section0.t1" />
          </p>
        </div>
      </div>

      <div className="aboutme-tooltip-container">
        <span className="hover-me">
          <InjectMassage id="header.section.title.about" />
        </span>
        <div className="tooltip" dir={lang === "fa-IR" ? "rtl" : "ltr"}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            perferendis culpa, neque numquam illum non laudantium tempora
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
