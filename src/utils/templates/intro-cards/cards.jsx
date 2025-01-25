import React, { useContext } from "react";
import "./style.css";
import InjectMassage from "../../../utils/intl";
import { LanguageContext } from "../../context/language";
import ThemeContext from "../../context/theme";
import { motion } from "framer-motion";
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
      className="card w-[85%] md:w-[360px]"
    >
      <div className="align">
        <FaQuoteRight />
      </div>

      <h1
        className={`f-exo-medium text-black selection-text-background py-2 md:py-4 text-xl`}
      >
        <InjectMassage id="header.section.title.introduction" />
      </h1>
      <div className="h-48 overflow-y-auto">
        <p
          className={`text-slate-800 f-exo-medium hover:bg-slate-400 rounded-md text-md selection-text-background leading-6 p-3`}
          dir={lang === "fa-IR" ? "rtl" : "ltr"}
        >
          <InjectMassage id="about.me.section0.t1" />
        </p>
      </div>
    </motion.div>
  );

  const c2 = (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="card w-[85%] md:w-[360px]"
    >
      <div className="align">
        <FaQuoteRight />
      </div>

      <h1
        className={`f-exo-medium text-black selection-text-background py-2 md:py-4 text-xl`}
      >
        <InjectMassage id="header.section.title.about" />
      </h1>
      <div className="h-48 overflow-y-auto">
        <p
          className={`text-slate-800 hover:bg-slate-400 rounded-md f-exo-medium text-md selection-text-background leading-6 p-3 pb-6`}
          dir={lang === "fa-IR" ? "rtl" : "ltr"}
        >
          <InjectMassage id="about.me.section0.t2" />
        </p>
      </div>
    </motion.div>
  );

  const c3 = (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="card w-[85%] md:w-[360px]"
    >
      <div className="align">
        <FaQuoteRight />
      </div>

      <h1
        className={`f-exo-medium text-black selection-text-background py-2 md:py-4 text-xl`}
      >
        <InjectMassage id="header.section.title.worth" />
      </h1>

      <div
        dir={lang === "fa-IR" ? "rtl" : "ltr"}
        className="h-48 overflow-y-auto"
      >
        <div className="flex hover:bg-slate-400 rounded-md p-2">
          <span
            className={`${dir === "ltr" ? "point-to-right " : "point-to-left"}`}
          ></span>
          <p
            className={`text-slate-800 f-exo-medium text-md selection-text-background leading-6 `}
          >
            <InjectMassage id="about.me.section0.t3.li.1" />
          </p>
        </div>

        <div className="flex hover:bg-slate-400 rounded-md p-2">
          <span
            className={`${dir === "ltr" ? "point-to-right" : "point-to-left"}`}
          ></span>
          <p
            className={`text-slate-800 f-exo-medium text-md selection-text-background leading-6 `}
          >
            <InjectMassage id="about.me.section0.t3.li.2" />
          </p>
        </div>
        <div className="flex hover:bg-slate-400 rounded-md p-2">
          <span
            className={`${dir === "ltr" ? "point-to-right" : "point-to-left"}`}
          ></span>
          <p
            className={`text-slate-800 f-exo-medium text-md selection-text-background leading-6  `}
            dir={lang === "fa-IR" ? "rtl" : "ltr"}
          >
            <InjectMassage id="about.me.section0.t3.li.3" />
          </p>
        </div>
        <div className="flex hover:bg-slate-400 rounded-md p-2">
          <span
            className={`${dir === "ltr" ? "point-to-right" : "point-to-left"}`}
          ></span>
          <p
            className={`text-slate-800 f-exo-medium text-md selection-text-background leading-6`}
            dir={lang === "fa-IR" ? "rtl" : "ltr"}
          >
            <InjectMassage id="about.me.section0.t3.li.4" />
          </p>
        </div>
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
