import React, { useState, useRef, useContext } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import "./skills.css";
import { useEffect } from "react";
import InjectMassage from "../../utils/intl";
import StepperSkills from "./stepper";
import { LanguageContext } from "../../utils/context/language";

import useWindowSize from "../../utils/hooks/useWindowSize";

const MySkills = () => {
  const [shownItem, setShownItem] = useState(0);
  const [startAnimate, setStartAnimate] = useState(false);
  const parentRef = useRef(null);
  const skillsCenterRef = useRef(null);
  const { sizeName } = useWindowSize();
  const { lang } = useContext(LanguageContext);

  function handleNumberUp() {
    if (shownItem < 2) {
      setShownItem((prevState) => prevState + 1);
    }
  }

  function handleNumberDown() {
    if (shownItem > 0) {
      setShownItem((prevState) => prevState - 1);
    }
  }

  useEffect(() => {
    setStartAnimate(false);
    if (parentRef.current) {
      let fixNavigateSize = 1;
      if (sizeName === "mobile") {
        fixNavigateSize = 1;
      }

      parentRef.current.style.transform = `translateY(-${
        shownItem * parseInt(parentRef?.current.offsetHeight * fixNavigateSize)
      }px)`;
    }
    const to = setTimeout(() => {
      setStartAnimate(true);
    }, 300);
    return () => clearTimeout(to);
  }, [shownItem]);

  const handleStepperClick = (input) => {
    setShownItem(input);
  };

  const handleClickOnSkillsBox = (e) => {
    if (sizeName === "mobile" || sizeName === "tablet") {
      e.currentTarget.classList.toggle("skillbox-show-placeholder");

      setTimeout(() => {
        e.currentTarget.classList.remove("skillbox-show-placeholder");
      }, 1000);
    } else return;
  };

  return (
    <div className="mx-w-md skills-animated-border-1 p-4 sm:px-12 md:px-12 mother">
      <StepperSkills
        activeStep={shownItem}
        handleStepperClick={handleStepperClick}
      />
      <div className="flex gap-3">
        <div className="flex items-center">
          <div>
            <VscChevronUp
              tabIndex={4}
              className={`${
                shownItem === 0
                  ? "disable-chevron skills-chevron"
                  : "skills-chevron skills-animated-border-2"
              }`}
              onClick={handleNumberDown}
            />
            <VscChevronDown
              tabIndex={5}
              className={`${
                shownItem === 2
                  ? "disable-chevron skills-chevron"
                  : "skills-chevron skills-animated-border-2"
              }`}
              onClick={handleNumberUp}
            />
          </div>
        </div>
        <div className="skills-center">
          <div className="road">
            <div id="parent" ref={parentRef}>
              <div className="skills-row">
                <div
                  ref={skillsCenterRef}
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 0 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/js.png" />
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    {" "}
                    <InjectMassage id="skills.description.js" />
                  </div>{" "}
                </div>
                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 0 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/ts.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    {" "}
                    <InjectMassage id="skills.description.ts" />
                  </div>{" "}
                </div>
                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 0 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/react.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    {" "}
                    <InjectMassage id="skills.description.react" />
                  </div>{" "}
                </div>
                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 0 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/redux.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    {" "}
                    <InjectMassage id="skills.description.redux" />
                  </div>{" "}
                </div>
                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 0 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/next.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    {" "}
                    <InjectMassage id="skills.description.next" />
                  </div>{" "}
                </div>
                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 0 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/test.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    {" "}
                    <InjectMassage id="text.software.testing.skill" />
                  </div>{" "}
                </div>
              </div>
              <div className="skills-row">
                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 1 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/node.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    <InjectMassage id="skills.description.node" />
                  </div>{" "}
                </div>
                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 1 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/express.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    <InjectMassage id="skills.description.express" />
                  </div>{" "}
                </div>
                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 1 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/vue.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    <InjectMassage id="skills.description.vue" />
                  </div>{" "}
                </div>
                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 1 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/mongo.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    <InjectMassage id="skills.description.mongo" />
                  </div>{" "}
                </div>

                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 1 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/sql.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    <InjectMassage id="skills.description.sql" />
                  </div>{" "}
                </div>

                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 1 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/websocket.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    <InjectMassage id="skills.description.websocket" />
                  </div>{" "}
                </div>

                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 1 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/browser-extention.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    <InjectMassage id="skills.description.browser.extention" />
                  </div>{" "}
                </div>

                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 1 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/library-code.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    <InjectMassage id="skills.description.library.code" />
                  </div>{" "}
                </div>
              </div>

              <div className="skills-row">
                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 2 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/git.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    <InjectMassage id="skills.description.git" />
                  </div>{" "}
                </div>
                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 2 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/jira.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    <InjectMassage id="skills.description.jira" />
                  </div>{" "}
                </div>
                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 2 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/photoshop.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    <InjectMassage id="skills.description.photoshop" />
                  </div>{" "}
                </div>
                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 2 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/mysql.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    <InjectMassage id="skills.description.mysql" />
                  </div>{" "}
                </div>

                <div
                  onClick={handleClickOnSkillsBox}
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 2 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/figma.png" />{" "}
                  <div className=" hidden md:block skills-description f-exo-medium select-none">
                    <InjectMassage id="skills.description.figma" />
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
