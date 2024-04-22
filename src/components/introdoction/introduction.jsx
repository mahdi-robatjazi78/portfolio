import { useContext } from "react";
import { LanguageContext } from "../../utils/context/language";
import useScrollPosition from "../../utils/hooks/useScrollPosition";
import { Element } from "react-scroll";
import SlideUpAnimationText from "../../utils/templates/slideUpAnimationText";
import InjectMassage from "../../utils/intl";
import About from "../../utils/templates/about";

const Introduction = () => {
  const { scrollPosition } = useScrollPosition();
  const { lang } = useContext(LanguageContext);

  // const about = (
  //   <div className="m-auto px-5 w-full md:w-[52%]">
  //     <section
  //       data-aos="fade-up"
  //       className={`f-dosis-section-1 text-sm  section2-gradient py-4 w-full border `}
  //     >
  //       <p
  //         className={`text-sm  selection-text-background text-slate-300 leading-7 ${
  //           lang === "fa-IR" ? "px-7" : "px-7"
  //         }`}
  //       >
  //         <InjectMassage id="about.me.section0.t1" />
  //       </p>
  //     </section>

  //     <section data-aos="fade-up" className={``}>
  //       <div className="relative">
  //         <blockquote
  //           className={`f-dosis-section-1 text-sm  my-3 h-fit py-2 section2-gradient border   ${
  //             lang === "fa-IR" ? "blockquote" : "blockquote-eng-mode"
  //           }`}
  //         >
  //           <p className="text-sm selection-text-background leading-6 md:leading-8 px-5 text-slate-300">
  //             <InjectMassage id="about.me.section1.t2" />
  //           </p>
  //           <p className="text-sm selection-text-background leading-6 md:leading-8 px-5 text-slate-300">
  //             <InjectMassage id="about.me.section1.t3" />
  //           </p>

  //           <p className="text-sm leading-6 md:leading-8 selection-text-background px-5 text-slate-300">
  //             <InjectMassage id="about.me.section2.t1" />
  //           </p>
  //           <p className="text-sm leading-6 md:leading-8 selection-text-background px-5 text-slate-300">
  //             <InjectMassage id="about.me.section2.t2" />
  //           </p>
  //           <p className="text-sm leading-6 md:leading-8 selection-text-background px-5 text-slate-300">
  //             <InjectMassage id="about.me.section2.t3" />
  //           </p>
  //         </blockquote>
  //       </div>
  //     </section>
  //   </div>
  // );

  return (
    <Element
      name="introduction-section"
      id="introduction-section"
      className={`h-screen w-screen intro-about-gradient`}
    >
      <SlideUpAnimationText
        lang={lang}
        text={lang === "fa-IR" ? "آماده همکاری" : "Open To Work"}
      />

      {scrollPosition <= 370 && (
        <div
          className={`f-dosis-section-1  text-4xl md:text-5xl lg:text-7xl h-full w-full t-w-parent`}
        >
          {/* {about} */}
          <About />

          <div className="image-me-styles">
            <img src="/me/me.png" />
          </div>
        </div>
      )}
    </Element>
  );
};

export default Introduction;
