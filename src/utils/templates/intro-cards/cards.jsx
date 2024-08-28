import React, { useContext } from "react";
import "./style.css";
import InjectMassage from "../../../utils/intl";
import { LanguageContext } from "../../context/language";
import ThemeContext from "../../context/theme";
import { motion } from "framer-motion"
import { FaQuoteRight } from "react-icons/fa";

const Cards = () => {
  const { lang } = useContext(LanguageContext);
  // const { theme } = useContext(ThemeContext);
  
  const dir = lang === "fa-IR" ? "rtl" : "ltr";
  // const textAlign = lang === "fa-IR" ? "text-right" : "text-left";
  // const textColor = (theme === "light" || theme === "rainbow") ? "text-dark" : "text-light"

  const c1 = (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
     
    className="card w-[85%] md:w-[360px]">
      <div className="align">
        <FaQuoteRight />
      </div>

      <h1 className={`f-exo-medium text-black selection-text-background py-4`}>
        <InjectMassage id="header.section.title.introduction" />
      </h1>
      <p className={`text-black f-exo-medium text-xs selection-text-background leading-6`} dir={lang === "fa-IR" ? "rtl" : "ltr"}>
        <InjectMassage id="about.me.section0.t1" />
      </p>
    </motion.div>
  );

  const c2 = (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: .5 }}
  
    className="card w-[85%] md:w-[360px]">
      <div className="align">
        <FaQuoteRight />

      </div>

      <h1 className={`f-exo-medium text-black selection-text-background py-4`}>
        <InjectMassage id="header.section.title.about" />
      </h1>
      <p className={`text-black f-exo-medium text-xs selection-text-background leading-6`} dir={lang === "fa-IR" ? "rtl" : "ltr"}>
        <InjectMassage id="about.me.section0.t2" />
      </p>
    </motion.div>
  );

  const c3 = (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
 
    className="card w-[85%] md:w-[360px]">
      <div className="align">
        <FaQuoteRight />
      </div>

      <h1 className={`f-exo-medium text-black selection-text-background py-4`}>
        <InjectMassage id="header.section.title.worth" />
      </h1>
      <div>
        <p className={`text-black f-exo-medium text-xs selection-text-background leading-6 ${dir==="ltr" ? "point-to-right":"point-to-left"}`} dir={lang === "fa-IR" ? "rtl" : "ltr"}>
          <InjectMassage id="about.me.section0.t3.li.1" />
        </p>

        <p className={`text-black f-exo-medium text-xs selection-text-background leading-6 ${dir==="ltr" ? "point-to-right":"point-to-left"}`} dir={lang === "fa-IR" ? "rtl" : "ltr"}>
          <InjectMassage id="about.me.section0.t3.li.2" />
        </p>

        <p className={`text-black f-exo-medium text-xs selection-text-background leading-6 ${dir==="ltr" ? "point-to-right":"point-to-left"}`} dir={lang === "fa-IR" ? "rtl" : "ltr"}>
          <InjectMassage id="about.me.section0.t3.li.3" />
        </p>

        <p className={`text-black f-exo-medium text-xs selection-text-background leading-6 ${dir==="ltr" ? "point-to-right":"point-to-left"}`} dir={lang === "fa-IR" ? "rtl" : "ltr"}>
          <InjectMassage id="about.me.section0.t3.li.4" />
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="flex gap-5  lg:flex-row flex-col">
      {c1}
      {c2}
      {c3}
    </div>
  );
};

export default Cards;
