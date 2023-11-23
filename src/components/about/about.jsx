import React, { useContext } from "react";
import InjectMassage from "../../utils/intl";
import { LanguageContext } from "../../utils/context/language"; 
import {Element} from 'react-scroll'

const AboutMe = (props) => {



  const {} = props;
  const { lang } = useContext(LanguageContext); 
 

  return (
    <Element
      name = "aboutme-section"
      id="about-me-section"
      className="relative h-screen about-section-gradient"
      dir={lang === "fa-IR" ? "rtl" : "ltr"}
    >
      <div className="central-about px-5 sm:px-5 lg:w-full" >

      <section data-aos='fade-up-right' className={`f-dosis-section-1 text-xl bg-red-600 border border-amber-200  my-4 p-4 rounded-lg sm:w-full md:w-1/2 md:mx-auto`}>
          <h1 className={`selection-text-background text-amber-400 font-bold ${lang === "fa-IR" ? "" : ""}`}>
            <InjectMassage id="about.me.section0.title.who.am.i" />
          </h1>
          <p className={`selection-text-background text-slate-300 ${lang === "fa-IR" ? "pr-7 text-base" : "pl-7"}`}>
            <InjectMassage id="about.me.section0.t1" />
          </p>
      </section>


        <section data-aos='fade-up-left' className={`f-dosis-section-1 text-xl bg-red-600 border border-amber-200  my-4 p-4 rounded-lg sm:w-full md:w-1/2 md:mx-auto`}>
          <h1 className="selection-text-background font-bold text-amber-400">
            <InjectMassage id="about.me.section1.title.what.i.do" />
          </h1>
          <ul className={`selection-text-background ${lang === "fa-IR" ? "list-disc pr-7 text-base" : "list-disc pl-7"}`}>
            <li className="selection-text-background text-slate-300">
              <InjectMassage id="about.me.section1.t1" />
            </li>
            <li className="selection-text-background text-slate-300">
              <InjectMassage id="about.me.section1.t2" />
            </li>
            <li className="selection-text-background text-slate-300">
              <InjectMassage id="about.me.section1.t3" />
            </li>
          </ul>
        </section>

        <section data-aos='fade-up-right' className={`f-dosis-section-1 text-xl bg-red-600 border border-amber-200  my-4 p-4 rounded-lg sm:w-full md:w-1/2 md:mx-auto`}> 
          <h1 className="selection-text-background font-bold text-amber-400">
            <InjectMassage id="about.me.section2.title.what.i.want" />
          </h1>
          <ul className={`${lang === "fa-IR" ? "list-disc pr-7 text-base" : "list-disc pl-7"}`}>
            <li className="selection-text-background text-slate-300">
              <InjectMassage id="about.me.section2.t1" />
            </li>
            <li className="selection-text-background text-slate-300">
              <InjectMassage id="about.me.section2.t2" />
            </li>
            <li className="selection-text-background text-slate-300">
              <InjectMassage id="about.me.section2.t3" />
            </li>
          </ul>
        </section>
        {/* <div></div> */}
      </div>
    </Element>
  );
};

export default AboutMe;
