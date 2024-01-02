import React, { useContext, useState, useEffect } from "react";
import {
  IntroductionTextEnglish,
  IntroductionTextPersian,
} from "../introductionText";
import { LanguageContext } from "../../utils/context/language";
import IntlMessages from "../../utils/intl";
import useScrollPosition from "../../utils/hooks/useScrollPosition";
import useWindowSize from "../../utils/hooks/useWindowSize";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { scroller , Events , scrollSpy ,  Link} from "react-scroll";
import PositionContext from '../../utils/context/position'

const Header = (props) => {
  const { setOpenContactMeBox } = props;

  const { lang, setLanguageToggle } = useContext(LanguageContext);
  const { activePosition : section , hardSetActivePosition} = useContext(PositionContext); 
  const { size } = useWindowSize();
  const [expandHeader, setExpandHeader] = useState(true); 

  const windowWidthSize = size[0];

  useEffect(() => {
    if (windowWidthSize > 1024 && !expandHeader) {
      setExpandHeader(!expandHeader);
    }
  }, [windowWidthSize]);

 

  useEffect(() => { 

    // Registering the 'begin' event and logging it to the console when triggered.
      /*
        Events.scrollEvent.register('begin', (to, element) => {
    
        });
      */
    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      setOpenContactMeBox((prevState)=>false)
      const section = to.split("-")[0];
      hardSetActivePosition(section)

      setExpandHeader(true);


    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);


  const handleClickContactMeSection = ()=>{
    setExpandHeader(prevState=>!prevState)
    setOpenContactMeBox((prevState) => !prevState)
  }

    

  return (
    <div
      className={`header-styles transition-[height] ease-in-out duration-300 fixed top-0 w-full z-10 p-6 overflow-hidden ${
        expandHeader ? "h-20 px-16" : "h-56 sm:px-16"
      }`}
      dir={lang === "fa-IR" ? "ltr" : "rtl"}
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
          {section !== "introduction" && (
            <div className="text-2xl f-dosis-bold z-10 hidden xl:block ">
              {lang === "fa-IR" ? (
                <IntroductionTextPersian />
              ) : (
                <IntroductionTextEnglish />
              )}
            </div>
          )}
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
          className="text-1xl f-exo-medium animate__animated  animate__fadeInUp header-container hidden lg:flex lg:justify-between lg:gap-24"
          dir={lang === "fa-IR" ? "rtl" : "ltr"}
        >
          <Link
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={300} 
            to="introduction-section"
            // onClick={()=>{handlePositionFixtures("introduction")}}
            className={section === "introduction" ? "active-section-header" : ""}
          >
            <IntlMessages id="header.section.title.introduction" />
          </Link>
          <Link
           spy={true} 
           smooth={true} 
           offset={50} 
           duration={300} 
          //  onClick={()=>{handlePositionFixtures("aboutme")}}
            to="aboutme-section"
             
            className={section === "aboutme" ? "active-section-header" : ""}
          >
            <IntlMessages id="header.section.title.about" />
          </Link>
          <Link
           spy={true} 
           smooth={true} 
           offset={50} 
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
           offset={50} 
           duration={300} 
            to="projects-section"
            // onClick={()=>{handlePositionFixtures("projects")}}
            className={section === "projects" ? "active-section-header" : ""}
          >
            <IntlMessages id="header.section.title.projects" />
          </Link>
          <a onClick={()=>setOpenContactMeBox((prevState) => !prevState)}>
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
        <div className="flex justify-between leading-10 gap-3 minimized-header-links">
          <Link
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={300} 
            to="introduction-section"
            className={`glassMorphism ${
              section === "introduction" ? "active-header-minimized-item" : ""
            }`}
          >
            <IntlMessages id="header.section.title.introduction" />
          </Link>
          <Link
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={300} 
            to="about-me-section"
            className={`glassMorphism ${
              section === "aboutme" ? "active-header-minimized-item" : ""
            }`}
          >
            <IntlMessages id="header.section.title.about" />
          </Link>
        </div>
        <div className="flex justify-between leading-10 gap-3 minimized-header-links">
          <Link
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={300} 
            to="skills-section"
            className={`glassMorphism ${
              section === "skills" ? "active-header-minimized-item" : ""
            }`}
          >
            <IntlMessages id="header.section.title.skills" />
          </Link>
          <Link
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={300} 
            to="projects-section"
            className={`glassMorphism ${
              section === "projects" ? "active-header-minimized-item" : ""
            }`}
          >
            <IntlMessages id="header.section.title.projects" />
          </Link>
        </div>
        <div className="flex justify-between leading-10 gap-5 minimized-header-links">
          <a
            className={`cursor-pointer glassMorphism`}
            onClick={handleClickContactMeSection}
          >
            <IntlMessages id="header.section.title.contactme" />
          </a>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
