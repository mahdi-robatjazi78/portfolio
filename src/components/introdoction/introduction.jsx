import React , {useContext} from "react";
import {IntroductionTextEnglish , IntroductionTextPersian} from "../introductionText";
import { LanguageContext } from "../../utils/context/language";

const Introduction = (props) => {
  const {headerShowIntroduction} = props;
  const {lang} = useContext(LanguageContext)
  return (
    <div id="introduction-section" className={`h-screen  bg-yellow-400`}>
    {!headerShowIntroduction && (
      <div
        className={`f-dosis-section-1 text-7xl h-screen flex justify-center items-center`}
      >
        {
          lang === "fa-IR" ? <IntroductionTextPersian /> : <IntroductionTextEnglish />
        }
        
      </div>
    )}
  </div>
  );
};

export default Introduction;
