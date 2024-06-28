import React from "react";
import "./tab.css"; 
import InjectMassage from "../../utils/intl";


const SkillViewTabs = ({ handleClickSkillsTab, selectedTab }) => {
  return (
    <div className="my-10">
      <div>
        <form action="" className="container">
          <div>
          <input
            className="input-btn"
            type="radio"
            id="valueIs-1"
            name="valueIs-radio"
            onClick={handleClickSkillsTab}
            checked={selectedTab === "simple"}
            value="simple"
          />
          <label className="neon-btn" for="valueIs-1">
            <span className="span"></span>
            <span className="txt">
              <InjectMassage id="text.simple" />
            </span>
          </label>
          </div>
          <div>
          <input
            className="input-btn"
            type="radio"
            id="valueIs-2"
            name="valueIs-radio2"
            onClick={handleClickSkillsTab}
            checked={selectedTab === "card"}
            value="card"
          />
          <label className="neon-btn" for="valueIs-2">
            <span className="span"></span>
            <span className="txt">
            <InjectMassage id="text.card" />
              
            </span>
          </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SkillViewTabs;
