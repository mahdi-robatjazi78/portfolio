import React, { useState, useRef } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import "./skills.css";
import { useEffect } from "react";

const MySkills = () => {

  const [shownItem, setShownItem] = useState(0);
  const parentRef = useRef(null);

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
    if (parentRef.current) {
      parentRef.current.style.transform = `translateY(-${shownItem * 125}px)`;
 
    }
  }, [shownItem]);

  return (
    <div
      id="skills-section"
      className={`h-screen skills-gradient flex justify-center items-center`}
    >
      <div className="flex gap-12">
        <div className="flex items-center">
          <div>
            <VscChevronUp
              className={`${
                shownItem === 0
                  ? "disable-chevron skills-chevron"
                  : "skills-chevron"
              }`}
              onClick={handleNumberDown}
            />
            <VscChevronDown
              className={`${
                shownItem === 2
                  ? "disable-chevron skills-chevron"
                  : "skills-chevron"
              }`}
              onClick={handleNumberUp}
            />
          </div>
        </div>
        <div className="skills-center">
          <div className="road">
            <div id="parent" ref={parentRef}>
              <div className="flex">
                <img src="/logos/js.png" width={120} height={120} />
                <img src="/logos/ts.png" width={120} height={120} />
                <img src="/logos/react.png" width={120} height={120} />
                <img src="/logos/redux.png" width={120} height={120} />
                <img src="/logos/next.png" width={120} height={120} />
              </div>
              <div className="flex">
                <img src="/logos/node.png" width={120} height={120} />
                <img src="/logos/express.png" width={120} height={120} />
                <img src="/logos/mongo.png" width={120} height={120} />
                <img src="/logos/vue.png" width={120} height={120} />
                <img src="/logos/python.png" width={120} height={120} />
              </div>
              <div className="flex">
                <img src="/logos/git.png" width={120} height={120} />
                <img src="/logos/jira.png" width={120} height={120} />
                <img src="/logos/photoshop.png" width={120} height={120} />
                <img src="/logos/illustrator.png" width={120} height={120} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
