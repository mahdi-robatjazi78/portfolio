import React, { createContext, useState } from "react";
import debounce from "lodash.debounce";
import { useEffect } from "react";

const PositionContext = createContext();

export const PositionContextProvider = ({ children }) => {
  const [positions, setPositions] = useState({
    introduction: 0,
    about: 0,
    skills: 0,
    projects: 0,
  });

  const handlePositionFixtures = (data) => {
    setPositions(data);
  };

  const [activePosition, setActivePosition] = useState("introduction");
  // introduction , aboutme , skills , projects

  const hardSetActivePosition = (pos) => {
    setActivePosition(pos);
  };

  const handleFillPositions = () => {
    const aboutmeSectionOffsetTop =
      document.getElementById("about-me-section").offsetTop;
    const skillsSectionOffsetTop =
      document.getElementById("skills-section").offsetTop;
    const projectsSectionOffsetTop =
      document.getElementById("projects-section").offsetTop;

    const obj = {
      introduction: 0,
      about: aboutmeSectionOffsetTop,
      skills: skillsSectionOffsetTop,
      projects: projectsSectionOffsetTop,
    }

    handlePositionFixtures(obj)
    return
  };

  function execute() {

    if (!positions.about || !positions.skills || !positions.projects) {
      handleFillPositions();
      return
    }
    let pageY_Offset = parseInt(window.scrollY.toFixed());

    if (pageY_Offset <= positions.about - 150) {
      setActivePosition("introduction");
    } else if (
      pageY_Offset > positions.about - 150 &&
      pageY_Offset <= positions.skills - 150
    ) {
      setActivePosition("aboutme");
    } else if (
      pageY_Offset > positions.skills - 150 &&
      pageY_Offset < positions.projects - 150
    ) {
      setActivePosition("skills");
    } else if (pageY_Offset >= positions.projects - 150) {
      setActivePosition("projects");
    }
  }

  useEffect(() => {
    window.addEventListener(
      "scroll",
      debounce(() => execute(), 300)
    );

    return () => window.removeEventListener("scroll", execute);
  }, [window.scrollY]);

  return (
    <PositionContext.Provider
      value={{ activePosition, handlePositionFixtures, hardSetActivePosition }}
    >
      {children}
    </PositionContext.Provider>
  );
};
export default PositionContext;
