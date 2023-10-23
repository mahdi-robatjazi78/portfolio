import React, { useState, useEffect } from "react";
import "./App.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import Header from "./components/header"; 
import AboutMe from "./components/about/about";
import ContactMe from "./components/contact/contact";
import MySkills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Introduction from "./components/introdoction/introduction";
import "animate.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {


  useEffect(() => {

    AOS.init()
   

   
  }, []);


 

  return (
    <div className="relative">
      <BsChevronDoubleDown
        style={{ fontSize: "3rem" }}
        className="animate-bounce z-10 fixed bottom-10 right-20"
      />

      <Header />

      <img 
      // data-aos='fade-down'
       src="wave.svg" alt="header-wave" className="absolute animate__animated animate__rotateInDownLeft" />

      <Introduction  />

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
