import React from "react";

import Instructions from "./Instructions/Instructions";
import FiveStepsProcess from "./FiveStepsProcess/FiveStepsProcess";
import OurServices from "./OurServices/OurServices";
import Contact from "./Contact/Contact";

function Body() {
  return (
    <div className="w-screen">
      <Instructions />
      <FiveStepsProcess />
      <OurServices />
      <Contact />
    </div>
  );
}

export default Body;
