import React, { createContext, useState } from "react";
import debounce from "lodash.debounce";
import { useEffect } from "react";

const PositionContext = createContext();

export const PositionContextProvider = ({ children }) => {
  const [positions, setPositions] = useState({
    introduction: 0,
    about: 0,
    skills: 0,
    projects: 0,
  });

  const handlePositionFixtures = (data) => {
    setPositions(data);
  };

  const [activePosition, setActivePosition] = useState("introduction");
  // introduction , aboutme , skills , projects

  function execute() {
    if (positions.about > 0) {
			
			let pageY_Offset = parseInt(window.scrollY.toFixed());
			

      if (pageY_Offset <= positions.about-100) {
        setActivePosition("introduction");
      } else if (
        pageY_Offset > positions.about-100 &&
        pageY_Offset <= positions.skills-100
      ) {
        setActivePosition("aboutme");
      } else if (
        pageY_Offset > positions.skills-100 &&
        pageY_Offset < positions.projects-100
      ) {
        setActivePosition("skills");
      } else if (pageY_Offset >= positions.projects-100) {
        setActivePosition("projects");
      }
    }
  }


	useEffect(()=>{
		window.addEventListener(
			"scroll",
			debounce(() => execute(), 500)
		);

  return () => window.removeEventListener("scroll", execute);

	},[window.scrollY])


	useEffect(()=>{
		console.log("activePosition   > > >> ",parseInt(window.scrollY.toFixed()) ,positions,activePosition)
	},[activePosition])

	
 

  return (
    <PositionContext.Provider value={{ activePosition , handlePositionFixtures  }}>
      {children}
    </PositionContext.Provider>
  );
};
export default PositionContext;
