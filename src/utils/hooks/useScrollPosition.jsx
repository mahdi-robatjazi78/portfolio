import { useEffect, useState } from "react";
import debounce from 'lodash.debounce'

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [section, setSection] = useState("");
  
    useEffect(() => {
      const updatePosition = () => {

        let pageY_Offset = window.pageYOffset;
        setScrollPosition(pageY_Offset);

        if(pageY_Offset <= 448){
          setSection("intro")
        }else if(pageY_Offset > 448 && pageY_Offset <= 1210){
          setSection("about")
        }
        else if(pageY_Offset > 1210 && pageY_Offset <= 1900 ){
          setSection("skill")
        }
        else if(pageY_Offset > 1900){
          setSection("project")
        }


      }
      window.addEventListener("scroll", debounce(updatePosition ,200));
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);
  
    return {
      scrollPosition: Math.round(scrollPosition),
      section,
    };
  };
  
export default useScrollPosition;