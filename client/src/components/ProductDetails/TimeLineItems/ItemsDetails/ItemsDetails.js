import React, { useState } from "react";

import { BsChevronDown, BsChevronRight } from "react-icons/bs";

function ItemsDetails({ stepId, note, time, stepNum, description }) {
  const [toggleAccordion, setToggleAccordion] = useState(false);
  return (
    <div
      className="pl-12 mb-4 cursor-pointer"
      onClick={() => setToggleAccordion(!toggleAccordion)}
      key={stepId}
    >
      <div className="flex items-center">
        {!toggleAccordion ? (
          <BsChevronRight
            className={`text-sm h2-text ${
              stepNum >= 4 ? "text-orange-500" : ""
            }`}
          />
        ) : (
          <BsChevronDown
            className={`text-sm h2-text ${
              stepNum >= 4 ? "text-orange-500" : ""
            }`}
          />
        )}
        <h2
          className={`text-sm h2-text ${stepNum >= 4 ? "text-orange-500" : ""}`}
        >
          {`${time.substring(11)}, ${time.substring(0, 10)}, ${description}`}
        </h2>
      </div>
      <div
        className={`${
          toggleAccordion ? "block" : "hidden"
        } px-4 py-2 text-white rounded-md ${
          stepNum >= 4 ? "bg-orange-500" : "bg-green-500"
        }`}
      >
        <p className="mb-2">Chú thích: </p>
        {note}
      </div>
    </div>
  );
}

export default ItemsDetails;
