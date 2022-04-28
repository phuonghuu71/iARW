import React, { useState, useEffect, useRef } from "react";

function Background() {
  const greenNavEl = useRef(null);
  const [offset, setOffset] = useState(0);

  // on scroll event
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  // change green nav on scroll
  useEffect(() => {
    const green_nav = greenNavEl.current;
    if (offset > 50) green_nav.classList.add("active");
    else green_nav.classList.remove("active");
  }, [offset, greenNavEl]);

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
