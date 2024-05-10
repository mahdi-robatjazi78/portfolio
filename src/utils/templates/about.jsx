import React, { useContext } from "react";
import InjectMassage from "../../utils/intl";
import useWindowSize from "../hooks/useWindowSize";
import { LanguageContext } from "../context/language";
import ThemeContext from "../context/theme";
import "./about.css";

const About = () => {
  const { lang } = React.useContext(LanguageContext);
  const { size } = useWindowSize();
  const animationClasses =
    "animate__animated animate__slideInDown animate__delay-1s";
  const { theme } = useContext(ThemeContext);
  const width = size[0];

  const AboutNavigationItem = ({ name }) => {
    return (
      <>
        {width < 1000 ? (
          <span className={`relative z-10 select-none  ${animationClasses}`}>
            {name}
          </span>
        ) : (
          <button
            className={`
            group group-hover:before:duration-500 group-hover:after:duration-500
            after:duration-500 border ${
              theme === "dark"
                ? "hover:border-[#293a3e]"
                : "hover:border-[#004e1c]"
            } 
            hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500
            before:duration-500 hover:duration-500 
            hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur
            origin-left hover:decoration-2
            relative ${
              theme === "light"
                ? "bg-neutral-100"
                : theme == "rainbow"
                ? "bg-[#ffd700]"
                : "bg-neutral-800"
            }  h-16 w-64  text-left p-3
            ${
              theme === "light" || theme === "rainbow"
                ? "text-gray-900"
                : "text-gray-50"
            }   text-base font-bold rounded-lg  overflow-hidden  before:absolute
            before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10
          before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute 
            fter:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300
            after:right-8 after:top-3 after:rounded-full after:blur-lg`}
          >
            {name}
          </button>
        )}
      </>
    );
  };

  return (
    <div className="inline-flex justify-around flex-col h-[75%] my-20 px-10 mt-50">
      <div className="aboutme-tooltip-container">
        <AboutNavigationItem
          name={<InjectMassage id="header.section.title.introduction" />}
        />

        <div className="tooltip" dir={lang === "fa-IR" ? "rtl" : "ltr"}>
          <p className="selection-text-background">
            <InjectMassage id="about.me.section0.t1" />
          </p>
        </div>
      </div>

      <div className="aboutme-tooltip-container">
        <AboutNavigationItem
          name={<InjectMassage id="header.section.title.about" />}
        />
        <div className="tooltip" dir={lang === "fa-IR" ? "rtl" : "ltr"}>
          <p className="selection-text-background">
            <InjectMassage id="about.me.section0.t1" />
          </p>
        </div>
      </div>

      <div className="aboutme-tooltip-container">
        <AboutNavigationItem
          name={<InjectMassage id="header.section.title.worth" />}
        />
        <div className="tooltip" dir={lang === "fa-IR" ? "rtl" : "ltr"}>
          <p className="selection-text-background">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            perferendis culpa, neque numquam illum non laudantium tempora
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
