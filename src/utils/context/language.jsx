import React, { useContext , useState } from "react";

export const LanguageContext = React.createContext(false);

export const LanguageContextProvider = ({ children }) => {

    const [lang , setLang] = useState ("en-US")

    const setNewLanguage = (input)=>{
        if(input === "en" || input === "eng" || "us"){
            setLang("en-US")
        }else if(input === "fa" || input === "far" || input === "per" || "ir") {
            setLang("fa-IR")
        }
    }
    const setLanguageToggle = ()=>{
        if(lang !== "en-US"){
            setLang("en-US")
        }else {
            setLang("fa-IR")
        }
    }

    return(
        <LanguageContext.Provider value={{lang , setNewLanguage ,setLanguageToggle}}>

            {
                children
            }

        </LanguageContext.Provider>
    )

}
 