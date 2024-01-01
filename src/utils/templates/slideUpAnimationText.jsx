import React from "react";
import useWindowSize from "../hooks/useWindowSize";

const SlideUpAnimationText = ({ text, lang }) => {
  const { sizeName } = useWindowSize();


  const styles2 = {
    fontSize: "15vw",
    top: "-0.262725em",
    textAlign: lang === "fa-IR" ? "right" : "left",
  };

  const spanGhostStyle3 = {
    filter: "blur(0px)",
    animationDuration: "10s",
  };

  return (
    <div
      data-text={text}
      className="opacity-10 md:opacity-10 leading-[1.5] md:leading-[1] embed-animated-text-background f-dosis-bold"
      style={styles2}
    >
      <span style={spanGhostStyle3}>{text}</span>
      <span style={spanGhostStyle3}>{text}</span>
      <span style={spanGhostStyle3}>{text}</span>
      <span style={spanGhostStyle3}>{text}</span>
      <span style={spanGhostStyle3}>{text}</span>
      {
        (sizeName === "mobile" || sizeName === "tablet") && (
          <>
              <span style={spanGhostStyle3}>{text}</span>
              <span style={spanGhostStyle3}>{text}</span>
              <span style={spanGhostStyle3}>{text}</span>
              <span style={spanGhostStyle3}>{text}</span>
              <span style={spanGhostStyle3}>{text}</span>
          </>
        )
      }
   
    </div>
  );
};

export default SlideUpAnimationText;
