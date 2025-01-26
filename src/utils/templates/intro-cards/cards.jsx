import React, { useContext } from "react";
import "./style.css";
import InjectMassage from "../../../utils/intl";
import { LanguageContext } from "../../context/language";
import ThemeContext from "../../context/theme";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";

const Cards = () => {
  const { lang } = useContext(LanguageContext);
  const dir = lang === "fa-IR" ? "rtl" : "ltr";
  const { theme } = useContext(ThemeContext);

  const hoverHighlightCard =
    theme === "light" || theme === "rainbow"
      ? "hover:bg-slate-200"
      : "hover:bg-slate-400";

  const c1 = (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="card w-[75%] md:w-[380px]"
    >
      <div className="align">
        <FaQuoteRight />
      </div>

      <h1
        className={`f-exo-bold text-slate-800 selection-text-background py-2 md:py-4 text-2xl font-extrabold`}
      >
        <InjectMassage id="header.section.title.introduction" />
      </h1>
      <div className="h-48 md:h-40 translate-y-4 overflow-y-auto">
        <p
          className={`text-slate-800 f-exo-medium ${hoverHighlightCard} rounded-md text-md selection-text-background leading-6 p-3`}
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
      className="card w-[75%] md:w-[380px]"
    >
      <div className="align">
        <FaQuoteRight />
      </div>

      <h1
        className={`f-exo-bold text-slate-800 selection-text-background py-2 md:py-4 text-2xl font-extrabold`}
      >
        <InjectMassage id="header.section.title.about" />
      </h1>
      <div className="h-48 md:h-40 translate-y-4 overflow-y-auto px-2">
        <p
          className={`text-slate-800 ${hoverHighlightCard} rounded-md f-exo-medium text-md selection-text-background leading-6 p-3 pb-6`}
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
      className="card w-[75%] md:w-[380px]"
    >
      <div className="align">
        <FaQuoteRight />
      </div>

      <h1
        className={`f-exo-bold text-slate-800 selection-text-background py-2 md:py-4 text-2xl font-extrabold`}
      >
        <InjectMassage id="header.section.title.worth" />
      </h1>

      <div
        dir={lang === "fa-IR" ? "ltr" : "rtl"}
        className="h-48 md:h-40 translate-y-4 overflow-y-auto  px-2"
      >
        <div
          className={`flex  ${hoverHighlightCard} rounded-md p-2`}
          dir={lang === "fa-IR" ? "rtl" : "ltr"}
        >
          <span
            className={`${dir === "ltr" ? "point-to-right " : "point-to-left"}`}
          ></span>
          <p
            className={`text-slate-800 f-exo-medium text-md selection-text-background leading-6 `}
          >
            <InjectMassage id="about.me.section0.t3.li.1" />
          </p>
        </div>

        <div
          className={`flex ${hoverHighlightCard} rounded-md p-2`}
          dir={lang === "fa-IR" ? "rtl" : "ltr"}
        >
          <span
            className={`${dir === "ltr" ? "point-to-right" : "point-to-left"}`}
          ></span>
          <p
            className={`text-slate-800 f-exo-medium text-md selection-text-background leading-6 `}
          >
            <InjectMassage id="about.me.section0.t3.li.2" />
          </p>
        </div>
        <div
          className={`flex ${hoverHighlightCard} rounded-md p-2`}
          dir={lang === "fa-IR" ? "rtl" : "ltr"}
        >
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
        <div
          className={`flex ${hoverHighlightCard} rounded-md p-2`}
          dir={lang === "fa-IR" ? "rtl" : "ltr"}
        >
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
    <div className="flex gap-5 xl:flex-row flex-col">
      {c1}
      {c2}
      {c3}
    </div>
  );
};

export default Cards;
