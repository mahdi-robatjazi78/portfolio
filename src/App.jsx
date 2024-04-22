import React, { useState, useEffect, useRef, useContext } from "react";
import "./App.css";

import Header from "./components/header";
import AboutMe from "./components/about/about";
import ContactMe from "./components/contact/contact";
import MySkills from "./components/skills/skills";
import Projects from "./components/projects";
import Introduction from "./components/introdoction/introduction";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import useScrollPosition from "./utils/hooks/useScrollPosition";
import PositionContext from "./utils/context/position";
import ThemeContext from "./utils/context/theme";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
    });
  }, []);

  const [openContactMeBox, setOpenContactMeBox] = useState(false);
  // const { fixtureUserPosition } = useScrollPosition();
  const { handlePositionFixtures } = useContext(PositionContext);
  const { theme } = useContext(ThemeContext);
  const introductionRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current && skillsRef.current && projectsRef.current) {
      const positions = {
        introduction: introductionRef.current.offsetTop,
        about: aboutRef.current.offsetTop,
        skills: skillsRef.current.offsetTop,
        projects: projectsRef.current.offsetTop,
      };

      handlePositionFixtures(positions);
    }
  }, [aboutRef?.current, aboutRef?.current?.offsetTop]);

  const rainbowPilars =
    theme === "rainbow" ? (
      <img
        // data-aos='fade-down'
        src="wave.svg"
        alt="header-wave"
        className="absolute animate__animated animate__rotateInDownLeft hidden lg:block"
      />
    ) : (
      <></>
    );

  return (
    <div>
      <div className="w-full">
        <Header
          setOpenContactMeBox={setOpenContactMeBox}
          openContactMeBox={openContactMeBox}
        />
        {rainbowPilars}
      </div>
      <div ref={introductionRef}>
        <Introduction />
      </div>
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <div ref={skillsRef}>
        <MySkills />
      </div>
      <div ref={projectsRef}>
        <Projects setOpenContactMeBox={setOpenContactMeBox} />
      </div>
      {openContactMeBox ? (
        <ContactMe
          openContactMeBox={openContactMeBox}
          setOpenContactMeBox={setOpenContactMeBox}
        />
      ) : undefined}
    </div>
  );
}

export default App;
