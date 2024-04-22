import React, { useContext, useCallback, useEffect, useState } from "react";
import InjectMassage from "../../utils/intl";
import { LanguageContext } from "../../utils/context/language";
import { Element } from "react-scroll";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const AboutMe = () => {
  const { lang } = useContext(LanguageContext);

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Element
      name="aboutme-section"
      id="about-me-section"
      className="relative h-screen w-screen about-section-gradient"
      dir={lang === "fa-IR" ? "rtl" : "ltr"}
    >
      <div className="central-about w-full">
        

       
      </div>
    </Element>
  );
};

export default AboutMe;
