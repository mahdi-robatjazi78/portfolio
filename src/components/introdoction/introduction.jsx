import React from "react";
import IntroductionText from "../introductionText";

const Introduction = (props) => {
  const {headerShowIntroduction} = props;

  return (
    <div id="introduction-section" className={`h-screen  bg-yellow-400`}>
    {!headerShowIntroduction && (
      <div
        className={`f-dosis-section-1 text-7xl h-screen flex justify-center items-center`}
      >
        <IntroductionText />
      </div>
    )}
  </div>
  );
};

export default Introduction;
