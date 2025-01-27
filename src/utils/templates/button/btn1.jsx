import React from "react";
import "./btn1.css";
const Btn1 = (props) => {
  return (
    <button className="btn liquid w-60 max-w-60" {...props}>
      <span className="f-exo-medium flex flex-start items-center gap-2">
        {props.children}
      </span>
    </button>
  );
};

export default Btn1;
