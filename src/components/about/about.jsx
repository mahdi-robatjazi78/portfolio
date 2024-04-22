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
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#0d48a10",
                },
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}

        <div className="m-auto px-5 w-full md:w-[52%]">
          <section
            data-aos="fade-up"
            className={`f-dosis-section-1 text-sm py-4 w-full border `}
          >
            <p
              className={`text-sm  selection-text-background text-slate-300 leading-7 ${
                lang === "fa-IR" ? "px-7" : "px-7"
              }`}
            >
              <InjectMassage id="about.me.section0.t1" />
            </p>
          </section>

          <section
            data-aos="fade-up"
            className={``}
          >
            <div className="relative">
              <blockquote
                className={`f-dosis-section-1 text-sm  my-3 h-fit py-2  border w-full  ${
                  lang === "fa-IR" ? "blockquote" : "blockquote-eng-mode"
                }`}
              >
                <p className="text-sm selection-text-background leading-6 md:leading-8 px-5 text-slate-300">
                  <InjectMassage id="about.me.section1.t2" />
                </p>
                <p className="text-sm selection-text-background leading-6 md:leading-8 px-5 text-slate-300">
                  <InjectMassage id="about.me.section1.t3" />
                </p>

                <p className="text-sm leading-6 md:leading-8 selection-text-background px-5 text-slate-300">
                  <InjectMassage id="about.me.section2.t1" />
                </p>
                <p className="text-sm leading-6 md:leading-8 selection-text-background px-5 text-slate-300">
                  <InjectMassage id="about.me.section2.t2" />
                </p>
                <p className="text-sm leading-6 md:leading-8 selection-text-background px-5 text-slate-300">
                  <InjectMassage id="about.me.section2.t3" />
                </p>
              </blockquote>
            </div>
          </section>
        </div>
      </div>
    </Element>
  );
};

export default AboutMe;
