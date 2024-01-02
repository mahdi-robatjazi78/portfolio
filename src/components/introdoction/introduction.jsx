import React, { useContext } from "react";
import {
  IntroductionTextEnglish,
  IntroductionTextPersian,
} from "../introductionText";
import { LanguageContext } from "../../utils/context/language";
import useScrollPosition from "../../utils/hooks/useScrollPosition";
import { Element } from "react-scroll";
import SlideUpAnimationText from "../../utils/templates/slideUpAnimationText";

const Introduction = () => {
  const { scrollPosition } = useScrollPosition();
  const { lang } = useContext(LanguageContext);

  return (
    <Element
      name="introduction-section"
      id="introduction-section"
      className={`h-screen w-screen intro-about-gradient`}
    >
      <SlideUpAnimationText
        lang={lang}
        text={lang === "fa-IR" ? "آماده همکاری" : "Open To Work"}
      />

      {scrollPosition <= 370 && (
        <div
          className={`f-dosis-section-1 flex justify-center items-center text-4xl md:text-5xl lg:text-7xl h-full w-full t-w-parent`}
        >
          {lang === "fa-IR" ? (
            <IntroductionTextPersian />
          ) : (
            <IntroductionTextEnglish />
          )}

          <div className="image-me-styles">
            <img src="/me/me.png" />
          </div>
        </div>
      )}
    </Element>
  );
};

export default Introduction;
