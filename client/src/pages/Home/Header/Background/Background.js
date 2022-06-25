import React, { useRef } from "react";
import ScrollEffect from "../../../../assets/utils/ScrollEffect";

function Background() {
  // on scroll event
  const greenNavEl = useRef(null);
  ScrollEffect(greenNavEl, 50);

  return (
    <div>
      <div className="bg-container">
        <img
          className="object-cover w-full h-full"
          src={require("../../../../assets/images/background.jpg")}
          alt=""
        />
        <div className="bottom-blur"></div>
      </div>
      <div className="green-nav" ref={greenNavEl}></div>
    </div>
  );
}

export default Background;
