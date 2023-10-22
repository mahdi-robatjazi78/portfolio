import React, { useContext } from "react";
import InjectMassage from "../../utils/intl";
import { LanguageContext } from "../../utils/context/language";

const AboutMe = (props) => {
  const {} = props;
  const { lang } = useContext(LanguageContext);

  return (
    <div
      id="about-me-section"
      className="relative h-screen bg-sky-300"
      dir={lang === "fa-IR" ? "rtl" : "ltr"}
    >
      <div className="central right-16 ">

      <section className="f-dosis-section-1 text-xl mb-8 animate__animated  animate__fadeInDown animate__delay-1s">
          <h1 className="font-bold ">
            <InjectMassage id="about.me.section0.title.who.am.i" />
          </h1>
          <p className="pl-10">
            <InjectMassage id="about.me.section0.t1" />
          </p>

      </section>


        <section className="f-dosis-section-1 text-xl mb-8 animate__animated  animate__fadeInDown animate__delay-2s">
          <h1 className="font-bold">
            <InjectMassage id="about.me.section1.title.what.i.do" />
          </h1>
          <ul className="list-disc pl-10">
            <li>
              <InjectMassage id="about.me.section1.t1" />
            </li>
            <li>
              <InjectMassage id="about.me.section1.t2" />
            </li>
            <li>
              <InjectMassage id="about.me.section1.t3" />
            </li>
          </ul>
        </section>

        <section className="f-dosis-section-1 text-xl mt-5  animate__animated  animate__fadeInDown animate__delay-3s">
          <h1 className="font-bold">
            <InjectMassage id="about.me.section2.title.what.i.want" />
          </h1>
          <ul className="list-disc pl-10">
            <li>
              <InjectMassage id="about.me.section2.t1" />
            </li>
            <li>
              <InjectMassage id="about.me.section2.t2" />
            </li>
            <li>
              <InjectMassage id="about.me.section2.t3" />
            </li>
          </ul>
        </section>
        <div></div>
      </div>
    </div>
  );
};

export default AboutMe;
