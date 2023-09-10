import React, { useState, useEffect } from "react";
import "./App.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import Header from "./components/header"; 
import AboutMe from "./components/about/about";
import ContactMe from "./components/contact/contact";
import MySkills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Introduction from "./components/introdoction/introduction";

function App() {
  const [headerShowIntroduction, setHeaderShowIntroduction] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position < 100) {
    }

    if (position < 1115) {
      setHeaderShowIntroduction(false);
    } else {
      setHeaderShowIntroduction(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //  console.log("position;", scrollPosition)

  return (
    <div className="relative">
      <BsChevronDoubleDown
        style={{ fontSize: "3rem" }}
        className="animate-bounce z-10 fixed bottom-10 right-20"
      />

      <Header showIntroductionText={headerShowIntroduction} />

      <img src="wave.svg" alt="header-wave" className="absolute" />

      <Introduction showIntroductionText={headerShowIntroduction} />

      <div>
        <AboutMe />
      </div>

      <div>
        <MySkills />
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
