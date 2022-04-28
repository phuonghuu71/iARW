import React from "react";
import Background from "../Header/Background/Background";
import Navigation from "../Header/Navigation/Navigation";
import Intro from "../Header/Intro/Intro";

function Header() {
  return (
    <div>
      <Background />
      <Navigation />
      <Intro />
    </div>
  );
}

export default Header;
