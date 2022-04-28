import React from "react";
import Navigation from "./Navigation/Navigation";

function Header() {
  return (
    <div className="sticky top-0 left-0 z-20 w-screen h-20 px-8 py-4 bg-white border-b-[1px] border-gray-300">
      <Navigation />
    </div>
  );
}

export default Header;
