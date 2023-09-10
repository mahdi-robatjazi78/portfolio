import React from "react";
import IntroductionText from "../introductionText";

const Header = (props) => {
  const { showIntroductionText } = props;

  return (
    <div className="header-styles fixed top-0 w-screen h-20 z-10 p-5">
      <div className="flex justify-between">
        <div>
          {showIntroductionText && (
            <div className="text-2xl f-dosis-bold f-dosis-bold z-10 ml-20">
              <IntroductionText />
            </div>
          )}
        </div>

        <div className="flex justify-between gap-24 text-2xl f-exo-medium">
          <a href="#introduction-section">
            {" "}
            <p>Introduction</p>{" "}
          </a>
          <a href="#about-me-section">
            {" "}
            <p>About</p>{" "}
          </a>
          <a href="#skills-section">
            {" "}
            <p>Skills</p>{" "}
          </a>
          <a href="#projects-section">
            {" "}
            <p>Projects</p>{" "}
          </a>
          <a href="#contact-me-section">
            {" "}
            <p>Contact Me</p>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
