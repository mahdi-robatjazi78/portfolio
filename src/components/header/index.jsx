import React  , {useContext} from "react";
import {IntroductionTextEnglish , IntroductionTextPersian} from "../introductionText";
import { LanguageContext } from "../../utils/context/language";
import IntlMessages from "../../utils/intl"

const Header = (props) => {
  const { showIntroductionText } = props;
  const {lang,setLanguageToggle} = useContext(LanguageContext)
  return (
    <div className="header-styles fixed top-0 w-screen h-20 z-10 p-6 px-20" dir={lang==="fa-IR" ? "ltr":"rtl"}>
      <div className="flex justify-between">
        <div className="flex">
         
          <div onClick={setLanguageToggle} className="pl-5 text-1xl f-exo-medium cursor-pointer">

            {lang === "en-US" ? "Fa" : "En"}

          </div>

          {showIntroductionText && (
            <div className="text-2xl f-dosis-bold z-10 pb-4">
             {
                lang === "fa-IR" ? <IntroductionTextPersian /> : <IntroductionTextEnglish />
              }
            </div>
          )}


        </div>

        <div className="flex justify-between gap-24 text-1xl f-exo-medium" dir={lang==="fa-IR" ? "rtl":"ltr"} >
          <a href="#introduction-section">
            {" "}
            <p>
              <IntlMessages id="header.section.title.introduction" />
            </p>{" "}
          </a>
          <a href="#about-me-section">
        
            <IntlMessages id="header.section.title.about" />

          </a>
          <a href="#skills-section">
          <IntlMessages id="header.section.title.skills" />
          </a>
          <a href="#projects-section">
          <IntlMessages id="header.section.title.projects" />

          </a>
          <a href="#contact-me-section">
          <IntlMessages id="header.section.title.contactme" />

          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
