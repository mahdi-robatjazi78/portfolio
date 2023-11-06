import React, { useContext, useState, useEffect } from "react";
import {
  IntroductionTextEnglish,
  IntroductionTextPersian,
} from "../introductionText";
import { LanguageContext } from "../../utils/context/language";
import IntlMessages from "../../utils/intl";
import useScrollPosition from "../../utils/hooks/useScrollPosition";
import "./header.css";
import { useCallback } from "react";

const Header = () => {
  const { lang, setLanguageToggle } = useContext(LanguageContext);
  const { scrollPosition, section } = useScrollPosition();

  return (
    <div
      className="header-styles fixed top-0 w-screen h-20 z-10 p-6 px-20"
      dir={lang === "fa-IR" ? "ltr" : "rtl"}
    >
      <div className="flex justify-between">
        <div className="flex gap-36">
          <span class="relative flex h-6 w-6 text-center">
            <span class="animate-ping absolute h-full w-full rounded-full bg-gray-400 opacity-75"></span>
            <span
              onClick={setLanguageToggle}
              className=" f-exo-medium cursor-pointer relative justify-center items-center rounded-full h-6 w-6"
            >
              {lang === "en-US" ? "Fa" : "En"}
            </span>
          </span>
          {section !== "intro" && (
            <div className="text-2xl f-dosis-bold z-10">
              {lang === "fa-IR" ? (
                <IntroductionTextPersian />
              ) : (
                <IntroductionTextEnglish />
              )}
            </div>
          )}
        </div>

        <div
          className="flex justify-between gap-24 text-1xl f-exo-medium animate__animated  animate__fadeInUp header-container"
          dir={lang === "fa-IR" ? "rtl" : "ltr"}
        >
          <a
            href="#introduction-section"
            className={section === "intro" && "active-section-header"}
          >
            <IntlMessages id="header.section.title.introduction" />
          </a>
          <a
            href="#about-me-section"
            className={section === "about" && "active-section-header"}
          >
            <IntlMessages id="header.section.title.about" />
          </a>
          <a
            href="#skills-section"
            className={section === "skill" && "active-section-header"}
          >
            <IntlMessages id="header.section.title.skills" />
          </a>
          <a
            href="#projects-section"
            className={section === "project" && "active-section-header"}
          >
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
