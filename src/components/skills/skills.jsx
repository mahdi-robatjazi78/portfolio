import React, { useState, useRef , useContext } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import "./skills.css";
import { useEffect } from "react";
import InjectMassage from "../../utils/intl";
import StepperSkills from './stepper'
import { LanguageContext } from "../../utils/context/language";



const MySkills = () => {
  const [shownItem, setShownItem] = useState(0);
  const [startAnimate, setStartAnimate] = useState(false);
  const parentRef = useRef(null);
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
      parentRef.current.style.transform = `translateY(-${shownItem * 140}px)`;
    }
    const to = setTimeout(() => {
      setStartAnimate(true);
    }, 200);
    return ()=>clearTimeout(to)
  }, [shownItem]);

  const handleStepperClick = (input)=>{
    setShownItem(input)
  }

  

  return (
    <div
     dir={lang === "fa-IR" ? "rtl" : "ltr"}
    
      id="skills-section"
      className={`h-screen skills-gradient flex flex-col justify-center items-center `}
    >

 
    <div className="mx-w-md skills-animated-border-1 p-12">
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
              <div className="flex gap-5 skills-row">
                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 0 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/js.png" />
                  <div className="skills-description f-exo-medium select-none">
                    {" "}
                    <InjectMassage id="skills.description.js" />
                  </div>{" "}
                </div>
                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 0 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/ts.png" />{" "}
                  <div className="skills-description f-exo-medium select-none">
                    {" "}
                    <InjectMassage id="skills.description.ts" />
                  </div>{" "}
                </div>
                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 0 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/react.png" />{" "}
                  <div className="skills-description f-exo-medium select-none">
                    {" "}
                    <InjectMassage id="skills.description.react" />
                  </div>{" "}
                </div>
                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 0 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/redux.png" />{" "}
                  <div className="skills-description f-exo-medium select-none">
                    {" "}
                    <InjectMassage id="skills.description.redux" />
                  </div>{" "}
                </div>
                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 0 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/next.png" />{" "}
                  <div className="skills-description f-exo-medium select-none">
                    {" "}
                    <InjectMassage id="skills.description.next" />
                  </div>{" "}
                </div>
              </div>
              <div className="flex gap-5 skills-row">
                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 1 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/node.png" />{" "}
                  <div className="skills-description f-exo-medium select-none"> 
                    
                  <InjectMassage id="skills.description.node" />
                  </div>{" "}
                </div>
                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 1 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/express.png" />{" "}
                  <div className="skills-description f-exo-medium select-none"> 
                    <InjectMassage id="skills.description.express" />
                  </div>{" "}
                </div>
                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 1 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/mongo.png" />{" "}
                  <div className="skills-description f-exo-medium select-none"> 
                    <InjectMassage id="skills.description.mongo" />
                  </div>{" "}
                </div>
                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 1 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/vue.png" />{" "}
                  <div className="skills-description f-exo-medium select-none">
                      <InjectMassage id="skills.description.vue" />
                     </div>{" "}
                </div>
                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 1 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/python.png" />{" "}
                  <div className="skills-description f-exo-medium select-none"> 
                    <InjectMassage id="skills.description.python" />
                  </div>{" "}
                </div>
              </div>
              <div className="flex gap-5 skills-row">
                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 2 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/git.png" />{" "}
                  <div className="skills-description f-exo-medium select-none">
                      <InjectMassage id="skills.description.git" />
                     </div>{" "}
                </div>
                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 2 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/jira.png" />{" "}
                  <div className="skills-description f-exo-medium select-none">
                      <InjectMassage id="skills.description.jira" />
                     </div>{" "}
                </div>
                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 2 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/photoshop.png" />{" "}
                  <div className="skills-description f-exo-medium select-none">
                      <InjectMassage id="skills.description.photoshop" />
                     </div>{" "}
                </div>
                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 2 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/illustrator.png" />{" "}
                  <div className="skills-description f-exo-medium select-none">
                  <InjectMassage id="skills.description.illustrator" /></div>{" "}
                </div>

                <div
                  className={`skills-box skills-animated-border-1 ${
                    shownItem === 2 && startAnimate ? "start-animate" : ""
                  }`}
                >
                  <img src="/logos/figma.png" />{" "}
                  <div className="skills-description f-exo-medium select-none">
                  <InjectMassage id="skills.description.figma" /></div>{" "}
                </div>
              </div>
            </div>
            
          </div>

          <div className="skills-description f-dosis-medium">
              {
                shownItem === 0 ? (
                  <p className={`selection-text-background text-xl ${lang === "fa-IR" ? "text-right mr-5" :"text-left ml-5"}`}><InjectMassage id="skills.description.paragraph.professional" />{" "}<span className="f-dosis-bold  selection-text-background text-green-400">{" "}<InjectMassage id="text.professional" /></span>{" "}<InjectMassage id="text.skills" /></p>
                ): shownItem === 1 ? (
                  <p className={`selection-text-background text-xl ${lang === "fa-IR" ? "text-right mr-5" :"text-left ml-5"}`}><InjectMassage id="skills.description.paragraph.professional" />{" "}<span className="f-dosis-bold  selection-text-background text-green-400">{" "}<InjectMassage id="text.learned" /></span>{" "}<InjectMassage id="text.skills" /></p>
                ):(
                  <p className={`selection-text-background text-xl ${lang === "fa-IR" ? "text-right mr-5" :"text-left ml-5"}`}><InjectMassage id="skills.description.paragraph.professional" />{" "}<span className="f-dosis-bold selection-text-background text-green-400 ">{" "}<InjectMassage id="text.worked" /></span>{" "}<InjectMassage id="text.skills" /></p>
                )
              }

          </div>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default MySkills;
