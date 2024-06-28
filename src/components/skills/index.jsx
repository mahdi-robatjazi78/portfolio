import React, { useState, useContext } from "react";
import SkillViewTabs from "./tab";
import SimpleModeSkills from "./simpleModeSkills";
import MySkills from "./skills";
import { LanguageContext } from "../../utils/context/language";
import { Element } from "react-scroll";

const SkillsIndexComponent = () => {
  const [selectedTab, setSelectedTab] = useState("simple");

  function handleClickSkillsTab(e) {
    const selectedRadio = e.target.defaultValue;
    setSelectedTab(selectedRadio);
  }

  const { lang } = useContext(LanguageContext);

  return (
    <Element
      name="skills-section"
      id="skills-section"
      dir={lang === "fa-IR" ? "rtl" : "ltr"}
      className={`h-screen min-h-[600px] w-screen skills-gradient flex flex-col justify-center items-center`}
    >
      <SkillViewTabs
        selectedTab={selectedTab}
        handleClickSkillsTab={handleClickSkillsTab}
      />

      {selectedTab === "simple" ? <SimpleModeSkills /> : <MySkills />}
    </Element>
  );
};

export default SkillsIndexComponent;
