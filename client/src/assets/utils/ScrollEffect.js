import { useState, useEffect } from "react";

function ScrollEffect(ref, offsetVal) {
  const [offset, setOffset] = useState(0);

  // on scroll event
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  // change green nav on scroll
  useEffect(() => {
    const green_nav = ref.current;
    if (offset > offsetVal) green_nav.classList.add("active");
    else green_nav.classList.remove("active");
  }, [offset, ref]);
}

export default ScrollEffect;
