import { useContext } from "react";
import { LanguageContext } from "../../utils/context/language";
import { Element } from "react-scroll";
import SlideUpAnimationText from "../../utils/templates/slideUpAnimationText";
import About from "../../utils/templates/about";

const Introduction = () => {
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

      <div
        className={`f-dosis-section-1  text-4xl md:text-5xl lg:text-7xl h-full w-full`}
      >
        {/* {about} */}
        <div className="py-5 h-screen w-full">
          <About />
        </div>

        <div className="image-me-styles">
          <img src="/me/me.png" />
        </div>
      </div>
    </Element>
  );
};

export default Introduction;
