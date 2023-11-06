import React , {useContext} from "react";
import {IntroductionTextEnglish , IntroductionTextPersian} from "../introductionText";
import { LanguageContext } from "../../utils/context/language";
import useScrollPosition from "../../utils/hooks/useScrollPosition";

const Introduction = () => {
  

  const {scrollPosition} = useScrollPosition()

  const {lang} = useContext(LanguageContext)
  return (
    <div id="introduction-section" className={`h-screen  intro-about-gradient`}>
     {scrollPosition <= 370 && (
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
