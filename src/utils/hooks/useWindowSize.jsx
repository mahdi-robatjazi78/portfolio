import {useState,useLayoutEffect} from 'react'

function useWindowSize(){
    const [size, setSize] = useState([0, 0]);
    const [sizeName , setSizeName] = useState("")// mobile tablet laptop , pc
  
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
        if(window.innerWidth < 700){
          setSizeName("mobile")
         
        }else if(window.innerWidth >= 700 && window.innerWidth < 1135 ){
          setSizeName("tablet")
        }
        else if(window.innerWidth >= 1135 && window.innerWidth < 1450 ){
          setSizeName("laptop")
        }
        else if(window.innerWidth > 1450){
          setSizeName("pc")
        }
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return {size , sizeName};
}

export default useWindowSize
