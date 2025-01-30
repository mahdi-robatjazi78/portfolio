import { useContext } from "react";
import { LanguageContext } from "../../utils/context/language";
import { Element } from "react-scroll";
import SlideUpAnimationText from "../../utils/templates/slideUpAnimationText";
import Cards from "../../utils/templates/intro-cards/cards";

const Introduction = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <Element
      name="introduction-section"
      id="introduction-section"
      className={`h-screen min-h-[500px] w-screen intro-about-gradient`}
    >
      <SlideUpAnimationText
        lang={lang}
        text={lang === "fa-IR" ? "آماده همکاری" : "Open To Work"}
      />
      <div className="absolute top-[15%] lg:top-[30%] left-[5%] lg:left-[3%]">
        <Cards />
      </div>
      <div
        className={`f-dosis-section-1 text-4xl md:text-5xl lg:text-7xl h-full w-full`}
      ></div>
    </Element>
  );
};

export default Introduction;
