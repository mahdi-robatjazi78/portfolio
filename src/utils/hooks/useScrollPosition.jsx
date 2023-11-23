import { useEffect, useState } from "react";
import debounce from 'lodash.debounce'

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [section, setSection] = useState("");
  const [sectionPositionB , setSectionPositionInB] = useState({})

  const fixtureUserPosition =(data)=>{
    // console.log("HERE ->",data)
    setSectionPositionInB(sectionPositionB)
    execute(data)
  }

  const changeToSpecficSection  = (section_name)=>{
    setSection(section_name)
  }
  
    function execute(sectionPositionInBrowser = sectionPositionB) {
      if(sectionPositionInBrowser?.about && sectionPositionInBrowser?.about > 0 ){

      // console.log("sectionPositionInBrowser >>> ",sectionPositionInBrowser)
      // const updatePosition = () => {

          let pageY_Offset = parseInt(window.scrollY.toFixed());
        
          setScrollPosition(pageY_Offset);
          
          // console.log("HERE 222->",sectionPositionInBrowser , pageY_Offset)
          
          if(pageY_Offset <= sectionPositionInBrowser.about){
            setSection("introduction")
          }else if(pageY_Offset > sectionPositionInBrowser.about && pageY_Offset <= sectionPositionInBrowser.skills){
            setSection("aboutme")
          }
          else if(pageY_Offset > sectionPositionInBrowser.skills && pageY_Offset <= sectionPositionInBrowser.project ){
            setSection("skills")
          }
          else if(pageY_Offset > sectionPositionInBrowser.project){
            setSection("project")
          }
        }
      // }
     
    
    }

    window.addEventListener("scroll", debounce(()=> execute(sectionPositionB) , 200 ));
    execute(sectionPositionB);
    // return () => window.removeEventListener("scroll", updatePosition);
  
    return {
      scrollPosition: Math.round(scrollPosition),
      section,
      changeToSpecficSection,
      fixtureUserPosition
    };
  };
  
export default useScrollPosition;