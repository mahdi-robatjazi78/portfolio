import React from "react";
import "./badge.css";
import { useContext } from "react";
import { LanguageContext } from "../../utils/context/language";
import InjectMassage from "../../utils/intl";
const BadgeSkill = () => {

  const { lang } = useContext(LanguageContext);

  return (
    <div>
      <div className={`flex flex-wrap justify-center gap-5 my-5`}>
        <Badge name={<InjectMassage id="skills.description.js" /> }  />
        <Badge name={<InjectMassage id="skills.description.ts" /> }  />
        <Badge name={<InjectMassage id="skills.description.react" /> }  />
        <Badge name={<InjectMassage id="skills.description.redux" /> }  />
        <Badge name={<InjectMassage id="skills.description.next" /> }  />
      </div>

      <div className={`flex flex-wrap justify-center gap-5 my-5`}>
        <Badge name={<InjectMassage id="skills.description.node" />} />
        <Badge name={<InjectMassage id="skills.description.express" />} />
        <Badge name={<InjectMassage id="skills.description.vue" />} />
        <Badge name={<InjectMassage id="skills.description.mongo" />} />
        <Badge name={<InjectMassage id="skills.description.sql" />} />
        <Badge name={<InjectMassage id="skills.description.websocket" />} />
        <Badge name={<InjectMassage id="skills.description.browser.extention" />} />
        <Badge name={<InjectMassage id="skills.description.library.code" />} />
      </div>

      <div className={`flex flex-wrap justify-center gap-5 my-5`}>
        <Badge name={<InjectMassage id="skills.description.git" />} />
        <Badge name={<InjectMassage id="skills.description.jira" />} />
        <Badge name={<InjectMassage id="skills.description.photoshop" />} />
        <Badge name={<InjectMassage id="skills.description.figma" />} />
      </div>
    </div>
  );
};

export default BadgeSkill;

const Badge = ({ name }) => {
  return (
    <button className="button">
      <div className="blob1"></div>
      <div className="blob2"></div>
      <div className="inner f-exo-medium text-lg">{name}</div>
    </button>
  );
};
