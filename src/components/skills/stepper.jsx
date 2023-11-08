import React , {useContext} from "react";
import { handleNumberToPersian } from "../../utils/helpers";
import { LanguageContext } from "../../utils/context/language";
const StepperSkills = (props) => {
  const { activeStep , handleStepperClick } = props;
  const {lang} = useContext(LanguageContext) 
  return (
    <div className="stepper-container h-16 opacity-100">
      <div className="stepper-parent flex justify-between align-middle items-center h-16 select-none">
        <div
          tabIndex={1}
          onClick={()=>{handleStepperClick(0)}}
          className={`cursor-pointer transition-colors duration-500 rounded-lg w-10 h-10 bg-green-400 flex justify-center items-center`}
        >
          <strong className="selection-text-background">{lang ==="fa-IR"?handleNumberToPersian("1"):1}</strong>
        </div>
        <div
          className={`transition-colors duration-500 w-56 h-0.5 ${
            activeStep >= 1 ? "bg-green-400" : "bg-slate-300"
          }`}
        >
          {" "}
        </div>
        <div
          tabIndex={2}
          onClick={()=>{handleStepperClick(1)}}
          className={`cursor-pointer transition-colors duration-500 rounded-lg w-10 h-10  ${
            activeStep >= 1 ? "bg-green-400" : "bg-slate-300"
          } flex justify-center items-center`}
        >
          <strong className="selection-text-background">{lang ==="fa-IR"?handleNumberToPersian("2"):2}</strong>
        </div>
        <div
          className={`transition-colors duration-500 w-56  h-0.5 ${
            activeStep >= 2 ? "bg-green-400" : "bg-slate-300"
          }`}
        >
          {" "}
        </div>
        <div
          tabIndex={3}
          onClick={()=>{handleStepperClick(2)}}
          className={`cursor-pointer transition-colors duration-500 rounded-lg w-10 h-10  ${
            activeStep >= 2 ? "bg-green-400" : "bg-slate-300"
          } flex justify-center items-center`}
        >
          <strong className="selection-text-background">{lang ==="fa-IR"?handleNumberToPersian("3"):3}</strong>
        </div>
      </div>
    </div>
  );
};

export default StepperSkills;
