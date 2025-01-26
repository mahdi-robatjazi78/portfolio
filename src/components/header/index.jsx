import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../utils/context/language";
import IntlMessages from "../../utils/intl";
import useWindowSize from "../../utils/hooks/useWindowSize";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Events, Link } from "react-scroll";
import PositionContext from "../../utils/context/position";
import ThemeEmoji from "../../utils/templates/themeEmoji";
import { motion, useScroll } from "framer-motion";

const Header = (props) => {
  const { setOpenContactMeBox, openContactMeBox } = props;
  const { lang, setLanguageToggle } = useContext(LanguageContext);
  const { activePosition: section, hardSetActivePosition } =
    useContext(PositionContext);
  const { size } = useWindowSize();
  const [expandHeader, setExpandHeader] = useState(true);
  const windowWidthSize = size[0];
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (windowWidthSize > 1024 && !expandHeader) {
      setExpandHeader(!expandHeader);
    }
  }, [windowWidthSize]);

  useEffect(() => {
    Events.scrollEvent.register("end", (to, element) => {
      setOpenContactMeBox((prevState) => false);
      const section = to.split("-")[0];
      hardSetActivePosition(section);
      setExpandHeader(true);
    });
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleClickContactMeSection = () => {
    setExpandHeader((prevState) => !prevState);
    setOpenContactMeBox((prevState) => !prevState);
  };

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          zIndex: 100,
          backgroundColor: "var(--secondcolor)",
        }}
      />

      <div
        className={`header-styles transition-[height] ease-in-out duration-300 fixed top-0 w-full z-10 p-6 overflow-hidden   ${
          expandHeader ? "h-20 px-16" : "h-56 sm:px-16"
        }`}
        dir={lang === "fa-IR" ? "ltr" : "rtl"}
        tabIndex={0}
        onBlur={() => {
          if (!expandHeader) {
            setExpandHeader((prevState) => !prevState);
          }
        }}
      >
        <div className="flex justify-between">
          <div className="flex gap-20">
            <span className="relative flex h-6 w-6 text-center">
              <span className="animate-ping absolute h-full w-full rounded-full bg-gray-400 opacity-75"></span>
              <span
                onClick={setLanguageToggle}
                className=" f-exo-medium cursor-pointer relative justify-center items-center rounded-full h-6 w-6"
              >
                {lang === "en-US" ? "Fa" : "En"}
              </span>
            </span>

            <ThemeEmoji />
          </div>
          <div className="lg:hidden">
            {expandHeader ? (
              <span
                className="cursor-pointer"
                onClick={() => {
                  setExpandHeader(false);
                }}
              >
                <RxHamburgerMenu className="text-2xl" />
              </span>
            ) : (
              <span
                className="cursor-pointer"
                onClick={() => {
                  setExpandHeader(true);
                }}
              >
                <IoMdClose className="text-2xl" />
              </span>
            )}
          </div>
          <div
            className="text-1xl f-exo-medium animate__animated  animate__fadeInUp header-container hidden lg:flex lg:justify-between lg:gap-10"
            dir={lang === "fa-IR" ? "rtl" : "ltr"}
          >
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              to="introduction-section"
              // onClick={()=>{handlePositionFixtures("introduction")}}
              className={
                section === "introduction" ? "active-section-header" : ""
              }
            >
              <IntlMessages id="header.section.title.introduction" />
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              to="skills-section"
              // onClick={()=>{handlePositionFixtures("skills")}}
              className={section === "skills" ? "active-section-header" : ""}
            >
              <IntlMessages id="header.section.title.skills" />
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              to="projects-section"
              // onClick={()=>{handlePositionFixtures("projects")}}
              className={section === "projects" ? "active-section-header" : ""}
            >
              <IntlMessages id="header.section.title.projects" />
            </Link>
            <a
              className={`contact-me-animation-rotate ${
                openContactMeBox && "contact-me-active-rotate"
              }`}
              onClick={() => setOpenContactMeBox((prevState) => !prevState)}
            >
              <IntlMessages id="header.section.title.contactme" />
            </a>
          </div>
        </div>

        <div
          className={`text-1xl f-exo-medium animate__animated mt-4 animate__fadeInUp ${
            !expandHeader ? "block" : "hidden"
          } lg:hidden`}
          dir={lang === "fa-IR" ? "rtl" : "ltr"}
        >
          <div className="flex justify-between  gap-3 minimized-header-links">
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              to="introduction-section"
              className={`leading-10 glassMorphism rounded-md ${
                section === "introduction" ? "active-header-minimized-item" : ""
              }`}
            >
              <IntlMessages id="header.section.title.introduction" />
            </Link>
          </div>
          <div className="flex justify-between gap-3 minimized-header-links">
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              to="skills-section"
              className={`leading-10 glassMorphism rounded-md ${
                section === "skills" ? "active-header-minimized-item" : ""
              }`}
            >
              <IntlMessages id="header.section.title.skills" />
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              to="projects-section"
              className={`leading-10 glassMorphism rounded-md ${
                section === "projects" ? "active-header-minimized-item" : ""
              }`}
            >
              <IntlMessages id="header.section.title.projects" />
            </Link>
          </div>
          <div className="flex justify-between gap-5 minimized-header-links">
            <a
              className={`leading-10 cursor-pointer glassMorphism rounded-md ${
                openContactMeBox &&
                "rotate-animation  border-[3px] border-green-500"
              }`}
              onClick={handleClickContactMeSection}
            >
              <IntlMessages id="header.section.title.contactme" />
            </a>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
