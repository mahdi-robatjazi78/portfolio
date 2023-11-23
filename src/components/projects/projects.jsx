import React ,{useRef , useEffect} from "react";
import useScrollPosition from "../../utils/hooks/useScrollPosition";
import {Element} from 'react-scroll'


const Projects = (props) => {

  const {} = props;

  const {scrollPosition, changeToSpecficSection} = useScrollPosition(0)
  const wrapperElement = useRef(null)
  

  useEffect(()=>{
    

    // const bottom = parseInt(wrapperElement?.current?.getBoundingClientRect()?.bottom?.toFixed()) + parseInt(wrapperElement?.current?.getBoundingClientRect()?.y?.toFixed())
    const bottom = wrapperElement?.current?.getBoundingClientRect?.bottom?.toFixed()

    if(bottom){
      console.log(wrapperElement?.current?.getBoundingClientRect)
      
      if(scrollPosition > bottom ){
        console.log("this state->" , scrollPosition , bottom)
        changeToSpecficSection("project")
      }
    }
  } , [scrollPosition])


  return (
		<Element name="project-section" id="projects-section" ref={wrapperElement} className={`h-screen  projects-gradient`}>
      <h1>projects</h1>
    </Element>
  );
};

export default Projects;
